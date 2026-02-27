import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const q = searchParams.get('q')

    if (!q) {
        return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&addressdetails=1&limit=5`, {
            headers: {
                'Accept-Language': 'es',
                'User-Agent': 'Astro-IA-App'
            }
        })
        const data = await response.json()
        return NextResponse.json(data)
    } catch (error: any) {
        console.error('Geocoding error:', error)
        return NextResponse.json({ error: 'Search failed' }, { status: 500 })
    }
}
