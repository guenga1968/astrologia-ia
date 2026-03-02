import { calculateChart as calcChart, calculatePlanets as calcPlanets } from 'celestine'

const PLANET_NAMES: Record<string, string> = {
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
    'North Node': 'Nodo Norte',
    'South Node': 'Nodo Sur',
    'Chiron': 'Quirón',
    'Lilith': 'Lilith'
}

const SIGN_NAMES: Record<string, string> = {
    'Aries': 'Aries',
    'Taurus': 'Tauro',
    'Gemini': 'Géminis',
    'Cancer': 'Cáncer',
    'Leo': 'Leo',
    'Virgo': 'Virgo',
    'Libra': 'Libra',
    'Scorpio': 'Escorpio',
    'Sagittarius': 'Sagitario',
    'Capricorn': 'Capricornio',
    'Aquarius': 'Acuario',
    'Pisces': 'Piscis'
}

const HOUSE_NAMES = ['Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta', 'Sexta', 'Séptima', 'Octava', 'Novena', 'Décima', 'Undécima', 'Duodécima']

const ASPECT_DEFINITIONS = [
    { name: 'Conjunción', angle: 0, orb: 8 },
    { name: 'Sextil', angle: 60, orb: 6 },
    { name: 'Cuadratura', angle: 90, orb: 8 },
    { name: 'Trígono', angle: 120, orb: 8 },
    { name: 'Oposición', angle: 180, orb: 8 }
]

function getSignName(signName: string): string {
    return SIGN_NAMES[signName] || signName
}

function getHouseFromLongitude(longitude: number, cusps: any[]): string {
    for (let i = 0; i < cusps.length - 1; i++) {
        const current = cusps[i].longitude
        const next = cusps[i + 1].longitude
        
        if (next > current) {
            if (longitude >= current && longitude < next) {
                return HOUSE_NAMES[i]
            }
        } else {
            if (longitude >= current || longitude < next) {
                return HOUSE_NAMES[i]
            }
        }
    }
    return HOUSE_NAMES[0]
}

function detectAspect(long1: number, long2: number): { name: string, orb: number } | null {
    let diff = Math.abs(long1 - long2) % 360
    if (diff > 180) diff = 360 - diff
    
    for (const asp of ASPECT_DEFINITIONS) {
        const orb = Math.abs(diff - asp.angle)
        if (orb <= asp.orb) {
            return { name: asp.name, orb: orb }
        }
    }
    return null
}

function getAspectName(aspect: string): string {
    return aspect
}

export async function calculateChart(birthData: {
    date: string,
    time: string,
    latitude: number,
    longitude: number,
    timezone?: number
}) {
    let dateParts: string[];
    if (birthData.date.includes('/')) {
        const parts = birthData.date.split('/');
        dateParts = [parts[2], parts[1], parts[0]];
    } else {
        dateParts = birthData.date.split('-');
    }
    const [year, month, day] = dateParts.map(Number)
    const [hour, minute] = birthData.time.split(':').map(Number)
    
    function getTimezone(latitude: number, longitude: number, year: number): number {
        if (latitude < -24 && latitude > -55 && longitude > -75 && longitude < -53) return -3;
        if (latitude > 36 && latitude < 44 && longitude > -10 && longitude < 5) return 1;
        if (latitude > 14 && latitude < 33 && longitude > -118 && longitude < -86) return -6;
        if (latitude > -56 && latitude < -17 && longitude > -76 && longitude < -66) return -4;
        if (latitude > -5 && latitude < 13 && longitude > -82 && longitude < -66) return -5;
        if (latitude > 0 && latitude < 13 && longitude > -73 && longitude < -59) return -4;
        if (latitude > -35 && latitude < -30 && longitude > -58 && longitude < -53) return -3;
        if (latitude > -34 && latitude < 6 && longitude > -74 && longitude < -32) return -3;
        return birthData.timezone || -3;
    }
    
    const timezone = birthData.timezone || getTimezone(birthData.latitude, birthData.longitude, year);

    try {
        const chart = calcChart({
            year,
            month,
            day,
            hour,
            minute,
            second: 0,
            timezone,
            latitude: birthData.latitude,
            longitude: birthData.longitude
        })

        const cusps = chart.houses.cusps

        const planets = chart.planets.map((p: any) => {
            const name = PLANET_NAMES[p.name] || p.name
            return {
                name,
                longitude: p.longitude,
                degree: p.degree + p.minute / 60 + p.second / 3600,
                sign: getSignName(p.signName),
                house: HOUSE_NAMES[p.house - 1] || 'Unknown',
                isRetrograde: p.isRetrograde || false
            }
        })

        const anglesList = []
        if (chart.angles.ascendant) {
            const asc = chart.angles.ascendant
            anglesList.push({
                name: 'Ascendente',
                longitude: asc.longitude,
                degree: asc.degree + asc.minute / 60 + asc.second / 3600,
                sign: getSignName(asc.signName),
                house: getHouseFromLongitude(asc.longitude, cusps),
                isRetrograde: false
            })
        }

        if (chart.angles.midheaven) {
            const mc = chart.angles.midheaven
            anglesList.push({
                name: 'Medio Cielo',
                longitude: mc.longitude,
                degree: mc.degree + mc.minute / 60 + mc.second / 3600,
                sign: getSignName(mc.signName),
                house: getHouseFromLongitude(mc.longitude, cusps),
                isRetrograde: false
            })
        }

        if (chart.angles.descendant) {
            const desc = chart.angles.descendant
            anglesList.push({
                name: 'Descendente',
                longitude: desc.longitude,
                degree: desc.degree + desc.minute / 60 + desc.second / 3600,
                sign: getSignName(desc.signName),
                house: getHouseFromLongitude(desc.longitude, cusps),
                isRetrograde: false
            })
        }

        if (chart.angles.imumCoeli) {
            const ic = chart.angles.imumCoeli
            anglesList.push({
                name: 'Fondo del Cielo',
                longitude: ic.longitude,
                degree: ic.degree + ic.minute / 60 + ic.second / 3600,
                sign: getSignName(ic.signName),
                house: getHouseFromLongitude(ic.longitude, cusps),
                isRetrograde: false
            })
        }

        const houses = cusps.map((c: any) => ({
            name: HOUSE_NAMES[c.house - 1],
            longitude: c.longitude,
            degree: c.degree + c.minute / 60,
            sign: getSignName(c.signName)
        }))

        const allPlanets = [...planets, ...anglesList]

        console.log('DEBUG allPlanets names:', allPlanets.map((p: any) => p.name))

        const aspects: any[] = []
        const bodiesToAspect = allPlanets.filter((p: any) => 
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

        console.log('DEBUG planets calculated with celestine')
        console.log('Urano:', planets.find((p: any) => p.name === 'Urano'))
        console.log('Neptuno:', planets.find((p: any) => p.name === 'Neptuno'))

        return { planets: allPlanets, houses, aspects }

    } catch (e: any) {
        console.error('CRITICAL Error during horoscope generation:', e)
        const errorMessage = e.message || 'Error desconocido'
        const errorStack = e.stack || 'No stack trace available'

        throw new Error(`Error al generar el horóscopo: ${errorMessage}. (Stack: ${errorStack.substring(0, 100)}...)`)
    }
}
