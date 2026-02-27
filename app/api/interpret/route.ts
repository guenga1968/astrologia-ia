import { NextResponse } from 'next/server'
import { generateInterpretation } from '@/lib/localInterpretation'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { chartData, userInfo } = body

        console.log('DEBUG interpret API: chartData received, planets:', chartData?.planets?.length, 'aspects:', chartData?.aspects?.length)

        const interpretation = generateInterpretation(chartData, userInfo)

        console.log('DEBUG interpret API: interpretation generated, length:', interpretation.length)

        return NextResponse.json({
            interpretation: interpretation,
            isLocal: true
        })
    } catch (error: any) {
        console.error('Interpret error:', error)
        return NextResponse.json({ error: 'Error al generar la interpretación local' }, { status: 500 })
    }
}
