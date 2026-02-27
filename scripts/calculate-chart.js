/**
 * Utilidad para calcular cartas natales con sweph
 * Uso: node scripts/calculate-chart.js "1974-10-15" "15:20" -32.9442 -60.6505
 * 
 * O desde código:
 * const chart = require('./scripts/calculate-chart.js');
 * chart.calculate('1974-10-15', '15:20', -32.9442, -60.6505).then(console.log);
 */

const sweph = require('sweph')

const { utc_to_jd, calc, houses_ex2, constants } = sweph

const PLANET_IDS = {
    'Sun': constants.SE_SUN,
    'Moon': constants.SE_MOON,
    'Mercury': constants.SE_MERCURY,
    'Venus': constants.SE_VENUS,
    'Mars': constants.SE_MARS,
    'Jupiter': constants.SE_JUPITER,
    'Saturn': constants.SE_SATURN,
    'Uranus': constants.SE_URANUS,
    'Neptune': constants.SE_NEPTUNE,
    'Pluto': constants.SE_PLUTO,
    'Chiron': constants.SE_CHIRON,
    'North Node': constants.SE_TRUE_NODE,
}

const PLANET_NAMES = {
    'Sun': 'Sol',
    'Moon': 'Luna',
    'Mercury': 'Mercurio',
    'Venus': 'Venus',
    'Mars': 'Marte',
    'Jupiter': 'Júpiter',
    'Saturn': 'Saturno',
    'Uranus': 'Urano',
    'Neptune': 'Neptuno',
    'Pluto': 'Plutón',
    'Chiron': 'Quirón',
    'North Node': 'Nodo Norte',
}

const HOUSE_NAMES = ['Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta', 'Sexta', 'Séptima', 'Octava', 'Novena', 'Décima', 'Undécima', 'Duodécima']

const SIGN_NAMES = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis']

const ASPECT_DEFINITIONS = [
    { name: 'Conjunción', angle: 0, orb: 8 },
    { name: 'Sextil', angle: 60, orb: 6 },
    { name: 'Cuadratura', angle: 90, orb: 8 },
    { name: 'Trígono', angle: 120, orb: 8 },
    { name: 'Oposición', angle: 180, orb: 8 }
]

function longitudeToSign(longitude) {
    const normalized = ((longitude % 360) + 360) % 360
    const signIndex = Math.floor(normalized / 30)
    const degreeInSign = normalized % 30
    const degree = Math.floor(degreeInSign)
    const minute = Math.floor((degreeInSign - degree) * 60)
    
    return {
        sign: SIGN_NAMES[signIndex],
        degree,
        minute
    }
}

function getHouseFromLongitude(longitude, cusps) {
    const normalized = ((longitude % 360) + 360) % 360
    
    for (let i = 0; i < 12; i++) {
        const current = ((cusps[i] % 360) + 360) % 360
        const next = ((cusps[(i + 1) % 12] % 360) + 360) % 360
        
        let inHouse = false
        if (next > current) {
            inHouse = normalized >= current && normalized < next
        } else {
            inHouse = normalized >= current || normalized < next
        }
        
        if (inHouse) {
            return HOUSE_NAMES[i]
        }
    }
    
    return HOUSE_NAMES[0]
}

function detectAspect(long1, long2) {
    let diff = Math.abs(long1 - long2) % 360
    if (diff > 180) diff = 360 - diff
    
    for (const asp of ASPECT_DEFINITIONS) {
        const orb = Math.abs(diff - asp.angle)
        if (orb <= asp.orb) {
            return { name: asp.name, orb }
        }
    }
    return null
}

function calculateChart(dateStr, timeStr, latitude, longitude) {
    // Parsear fecha
    let dateParts
    if (dateStr.includes('/')) {
        const parts = dateStr.split('/')
        // Puede ser dd/mm/yyyy o mm/dd/yyyy
        if (parseInt(parts[2]) > 1000) {
            // formato dd/mm/yyyy
            dateParts = [parseInt(parts[2]), parseInt(parts[1]), parseInt(parts[0])]
        } else {
            // formato mm/dd/yyyy
            dateParts = [parseInt(parts[2]), parseInt(parts[0]), parseInt(parts[1])]
        }
    } else {
        dateParts = dateStr.split('-').map(Number)
    }
    const [year, month, day] = dateParts
    const [hour, minute] = timeStr.split(':').map(Number)
    
    // Calcular JD
    const jdResult = utc_to_jd(year, month, day, hour, minute, 0, constants.SE_GREG_CAL)
    if (jdResult.flag !== constants.OK) {
        throw new Error('Error calculating Julian Day')
    }
    
    const jd_et = jdResult.data[0]
    
    const flags = constants.SEFLG_SWIEPH | constants.SEFLG_SPEED
    
    // Calcular planetas
    const planets = []
    const planetKeys = Object.keys(PLANET_IDS)
    
    for (const planetKey of planetKeys) {
        const planetId = PLANET_IDS[planetKey]
        // Usar Moshier si no hay archivos ephemeris (flag 4 = OK)
        const result = calc(jd_et, planetId, constants.SEFLG_MOSEPH)
        
        if (result.flag !== constants.OK && result.flag !== 4 && result.flag !== 2) {
            console.error(`Warning: Error calculating ${planetKey}: flag=${result.flag}`)
            continue
        }
        
        if (!result.data) {
            continue
        }
        
        const data = result.data
        const longitude = data[0]
        const speed = data[2]
        const signInfo = longitudeToSign(longitude)
        
        planets.push({
            name: PLANET_NAMES[planetKey],
            longitude,
            degree: signInfo.degree + signInfo.minute / 60,
            sign: signInfo.sign,
            isRetrograde: speed < 0
        })
    }
    
    // Calcular casas
    const jd_ut = jdResult.data[1]
    const housesResult = houses_ex2(jd_ut, 0, latitude, longitude, 'P')
    
    if (housesResult.flag !== constants.OK) {
        throw new Error('Error calculating houses')
    }
    
    const cusps = housesResult.data.houses
    
    // Añadir casas a planetas
    for (const planet of planets) {
        planet.house = getHouseFromLongitude(planet.longitude, cusps)
    }
    
    // Ángulos
    const ascCusp = cusps[0]
    const ascSignInfo = longitudeToSign(ascCusp)
    const ascendant = {
        name: 'Ascendente',
        longitude: ascCusp,
        degree: ascSignInfo.degree + ascSignInfo.minute / 60,
        sign: ascSignInfo.sign,
        house: 'Primera',
        isRetrograde: false
    }
    
    const mcCusp = housesResult.data.points[1]
    const mcSignInfo = longitudeToSign(mcCusp)
    const midheaven = {
        name: 'Medio Cielo',
        longitude: mcCusp,
        degree: mcSignInfo.degree + mcSignInfo.minute / 60,
        sign: mcSignInfo.sign,
        house: 'Décima',
        isRetrograde: false
    }
    
    const descCusp = cusps[6]
    const descSignInfo = longitudeToSign(descCusp)
    const descendant = {
        name: 'Descendente',
        longitude: descCusp,
        degree: descSignInfo.degree + descSignInfo.minute / 60,
        sign: descSignInfo.sign,
        house: 'Séptima',
        isRetrograde: false
    }
    
    const icCusp = housesResult.data.points[2]
    const icSignInfo = longitudeToSign(icCusp)
    const imumCoeli = {
        name: 'Fondo del Cielo',
        longitude: icCusp,
        degree: icSignInfo.degree + icSignInfo.minute / 60,
        sign: icSignInfo.sign,
        house: 'Cuarta',
        isRetrograde: false
    }
    
    const angles = [ascendant, midheaven, descendant, imumCoeli]
    const allPlanets = [...planets, ...angles]
    
    // Calcular aspectos
    const aspects = []
    const bodiesToAspect = allPlanets.filter(p => 
        ['Sol', 'Luna', 'Mercurio', 'Venus', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno', 'Plutón', 'Ascendente', 'Medio Cielo'].includes(p.name)
    )
    
    for (let i = 0; i < bodiesToAspect.length; i++) {
        for (let j = i + 1; j < bodiesToAspect.length; j++) {
            const p1 = bodiesToAspect[i]
            const p2 = bodiesToAspect[j]
            
            const aspectResult = detectAspect(p1.longitude, p2.longitude)
            
            if (aspectResult) {
                aspects.push({
                    point1: p1.name,
                    point2: p2.name,
                    aspect: aspectResult.name,
                    orb: aspectResult.orb
                })
            }
        }
    }
    
    return {
        planets: allPlanets,
        aspects,
        summary: {
            sun: planets.find(p => p.name === 'Sol'),
            moon: planets.find(p => p.name === 'Luna'),
            ascendant: ascendant,
            midheaven: midheaven
        }
    }
}

// Si se ejecuta directamente
if (require.main === module) {
    const args = process.argv.slice(2)
    
    if (args.length < 4) {
        console.log('Uso: node calculate-chart.js "fecha" "hora" latitud longitud')
        console.log('Ejemplo: node calculate-chart.js "1974-10-15" "15:20" -32.9442 -60.6505')
        console.log('Para JSON: node calculate-chart.js "1974-10-15" "15:20" -32.9442 -60.6505 --json')
        process.exit(1)
    }
    
    const [date, time, lat, lng] = args
    const jsonMode = args.includes('--json')
    
    try {
        const result = calculateChart(date, time, parseFloat(lat), parseFloat(lng))
        
        if (jsonMode) {
            console.log(JSON.stringify(result))
        } else {
            console.log('\n=== RESUMEN ===')
            console.log(`Sol: ${result.summary.sun.sign} ${result.summary.sun.degree}°`)
            console.log(`Luna: ${result.summary.moon.sign} ${result.summary.moon.degree}°`)
            console.log(`Ascendente: ${result.summary.ascendant.sign} ${result.summary.ascendant.degree}°`)
            console.log(`Medio Cielo: ${result.summary.midheaven.sign} ${result.summary.midheaven.degree}°`)
            
            console.log('\n=== PLANETAS ===')
            for (const p of result.planets) {
                if (!['Descendente', 'Fondo del Cielo'].includes(p.name)) {
                    console.log(`${p.name}: ${p.sign} ${p.degree.toFixed(1)}° en Casa ${p.house}`)
                }
            }
        }
        
    } catch (e) {
        console.error('Error:', e.message)
        process.exit(1)
    }
}

module.exports = { calculateChart }
