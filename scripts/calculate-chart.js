/**
 * Utilidad para calcular cartas natales con celestine
 * Uso: node scripts/calculate-chart.js "1974-10-15" "15:20" -32.9442 -60.6505
 */

const { calculateChart } = require('celestine')

const PLANET_NAME_MAP = {
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
}

const HOUSE_NAMES = ['Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta', 'Sexta', 'Séptima', 'Octava', 'Novena', 'Décima', 'Undécima', 'Duodécima']

function calculateChartCelestine(dateStr, timeStr, latitude, longitude) {
    // Parsear fecha
    let dateParts
    if (dateStr.includes('/')) {
        const parts = dateStr.split('/')
        if (parseInt(parts[2]) > 1000) {
            dateParts = [parseInt(parts[2]), parseInt(parts[1]), parseInt(parts[0])]
        } else {
            dateParts = [parseInt(parts[2]), parseInt(parts[0]), parseInt(parts[1])]
        }
    } else {
        dateParts = dateStr.split('-').map(Number)
    }
    const [year, month, day] = dateParts
    const [hour, minute] = timeStr.split(':').map(Number)
    
    // Usar celestine para calcular la carta
    const chart = calculateChart({
        year,
        month,
        day,
        hour,
        minute,
        latitude,
        longitude,
        houseSystem: 'placidus',
        timezone: -3 // Argentina
    })
    
    // Convertir planetas al formato esperado
    const planets = chart.planets.map(p => {
        const signName = p.signName || 'Unknown'
        return {
            name: PLANET_NAME_MAP[p.name] || p.name,
            longitude: p.longitude,
            degree: p.degree + p.minute / 60,
            sign: signName,
            isRetrograde: p.isRetrograde,
            house: HOUSE_NAMES[(p.house || 1) - 1] || 'Primera'
        }
    })
    
    // Agregar nodos
    if (chart.nodes) {
        chart.nodes.forEach(node => {
            const signName = node.signName || 'Unknown'
            planets.push({
                name: node.name,
                longitude: node.longitude,
                degree: node.degree + (node.minute || 0) / 60,
                sign: signName,
                isRetrograde: false,
                house: HOUSE_NAMES[(node.house || 1) - 1] || 'Primera'
            })
        })
    }
    
    // Ángulos de la carta
    const angles = chart.angles
    const houses = chart.houses
    
    const ascendant = {
        name: 'Ascendente',
        longitude: angles.ascendant.longitude,
        degree: angles.ascendant.degree + angles.ascendant.minute / 60,
        sign: angles.ascendant.signName,
        house: 'Primera',
        isRetrograde: false
    }
    
    const midheaven = {
        name: 'Medio Cielo',
        longitude: angles.midheaven.longitude,
        degree: angles.midheaven.degree + angles.midheaven.minute / 60,
        sign: angles.midheaven.signName,
        house: 'Décima',
        isRetrograde: false
    }
    
    const descendant = {
        name: 'Descendente',
        longitude: angles.descendant.longitude,
        degree: angles.descendant.degree + angles.descendant.minute / 60,
        sign: angles.descendant.signName,
        house: 'Séptima',
        isRetrograde: false
    }
    
    const imumCoeli = {
        name: 'Fondo del Cielo',
        longitude: angles.imumCoeli.longitude,
        degree: angles.imumCoeli.degree + angles.imumCoeli.minute / 60,
        sign: angles.imumCoeli.signName,
        house: 'Cuarta',
        isRetrograde: false
    }
    
    const allPlanets = [...planets, ascendant, midheaven, descendant, imumCoeli]
    
    // Convertir aspectos
    const aspects = []
    if (chart.aspects && chart.aspects.all) {
        chart.aspects.all.forEach(asp => {
            const aspectNames = {
                'conjunction': 'Conjunción',
                'sextile': 'Sextil',
                'square': 'Cuadratura',
                'trine': 'Trígono',
                'opposition': 'Oposición'
            }
            
            const name1 = PLANET_NAME_MAP[asp.body1] || asp.body1
            const name2 = PLANET_NAME_MAP[asp.body2] || asp.body2
            
            if (['Sol', 'Luna', 'Mercurio', 'Venus', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno', 'Plutón', 'Ascendente', 'Medio Cielo'].includes(name1) &&
                ['Sol', 'Luna', 'Mercurio', 'Venus', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno', 'Plutón', 'Ascendente', 'Medio Cielo'].includes(name2)) {
                aspects.push({
                    point1: name1,
                    point2: name2,
                    aspect: aspectNames[asp.type] || asp.type,
                    orb: Math.round(asp.deviation || 0)
                })
            }
        })
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
        const result = calculateChartCelestine(date, time, parseFloat(lat), parseFloat(lng))
        
        if (jsonMode) {
            console.log(JSON.stringify(result))
        } else {
            console.log('\n=== RESUMEN ===')
            console.log(`Sol: ${result.summary.sun.sign} ${result.summary.sun.degree.toFixed(1)}°`)
            console.log(`Luna: ${result.summary.moon.sign} ${result.summary.moon.degree.toFixed(1)}°`)
            console.log(`Ascendente: ${result.summary.ascendant.sign} ${result.summary.ascendant.degree.toFixed(1)}°`)
            console.log(`Medio Cielo: ${result.summary.midheaven.sign} ${result.summary.midheaven.degree.toFixed(1)}°`)
            
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

module.exports = { calculateChart: calculateChartCelestine }
