import { NextResponse } from 'next/server'
import { execSync } from 'child_process'
import path from 'path'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { date, time, location, name } = body

        if (!date || !time || !location) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const lat = location.lat
        const lng = location.lng

        // Usar sweph para cálculo preciso
        const scriptPath = path.join(process.cwd(), 'scripts', 'calculate-chart.js')
        
        const output = execSync(
            `node "${scriptPath}" "${date}" "${time}" ${lat} ${lng} --json`,
            { cwd: process.cwd(), encoding: 'utf-8' }
        )

        const chartData = JSON.parse(output.trim())

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
