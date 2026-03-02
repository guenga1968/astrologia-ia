import { NextResponse } from 'next/server'
import { calculateChart } from 'celestine'

const PLANET_NAME_MAP: Record<string, string> = {
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

function getTimezone(latitude: number, longitude: number, year: number): number {
    // Argentina: UTC-3 (sin DST históricamente)
    if (latitude < -24 && latitude > -55 && longitude > -75 && longitude < -53) {
        return -3;
    }
    // España peninsular: UTC+1 (invierno) / UTC+2 (verano)
    if (latitude > 36 && latitude < 44 && longitude > -10 && longitude < 5) {
        // DST aproximadamente de marzo a octubre
        const month = new Date().getMonth(); // Esto sería el mes actual, no el de nacimiento
        // Por defecto usamos CET (UTC+1)
        return 1;
    }
    // México: UTC-6 a UTC-8 dependiendo de la zona
    if (latitude > 14 && latitude < 33 && longitude > -118 && longitude < -86) {
        return -6;
    }
    // Chile: UTC-3/-4 (varía históricamente)
    if (latitude > -56 && latitude < -17 && longitude > -76 && longitude < -66) {
        return -4;
    }
    // Colombia, Ecuador, Perú: UTC-5
    if (latitude > -5 && latitude < 13 && longitude > -82 && longitude < -66) {
        return -5;
    }
    // Venezuela: UTC-4
    if (latitude > 0 && latitude < 13 && longitude > -73 && longitude < -59) {
        return -4;
    }
    // Uruguay: UTC-3
    if (latitude > -35 && latitude < -30 && longitude > -58 && longitude < -53) {
        return -3;
    }
    // Brasil: UTC-3 a UTC-5 dependiendo de la región
    if (latitude > -34 && latitude < 6 && longitude > -74 && longitude < -32) {
        return -3;
    }
    // Default: UTC-3 (Argentina default)
    return -3;
}

function calculateChartCelestine(dateStr: string, timeStr: string, latitude: number, longitude: number) {
    // Parsear fecha
    let dateParts: number[]
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
    const timezone = getTimezone(latitude, longitude, year)
    
    // Usar celestine para calcular la carta
    const chart = calculateChart({
        year,
        month,
        day,
        hour,
        minute,
        latitude,
        longitude,
        timezone
    } as any)
    
    // Convertir planetas al formato esperado
    const planets = chart.planets.map((p: any) => {
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
        (chart.nodes as any[]).forEach((node: any) => {
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
    const angles = chart.angles as any
    
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
    const aspects: any[] = []
    if (chart.aspects && (chart.aspects as any).all) {
        ;(chart.aspects as any).all.forEach((asp: any) => {
            const aspectNames: Record<string, string> = {
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
                    orb: parseFloat((asp.deviation || 0).toFixed(1))
                })
            }
        })
    }
    
    return {
        planets: allPlanets,
        aspects,
        summary: {
            sun: planets.find((p: any) => p.name === 'Sol'),
            moon: planets.find((p: any) => p.name === 'Luna'),
            ascendant,
            midheaven
        }
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { date, time, location, name } = body

        if (!date || !time || !location) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const lat = location.lat
        const lng = location.lng

        // Calcular carta usando celestine directamente
        const chartData = calculateChartCelestine(date, time, lat, lng)

        const metadata = {
            birthDate: date,
            birthTime: time,
            birthLocation: location.name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
            houseSystem: 'Placidus',
            zodiacType: 'Tropical',
            name: name || 'Consultante'
        }

        return NextResponse.json({ ...chartData, metadata })
    } catch (error: any) {
        console.error('Calculation error:', error)
        return NextResponse.json({ error: error.message || 'Error calculating chart' }, { status: 500 })
    }
}
