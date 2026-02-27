'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Planet {
    name: string
    longitude: number
    sign: string
    house: string
    degree?: number
}

interface House {
    name: string
    longitude: number
}

interface Angle {
    name: string
    longitude: number
    sign: string
    house: string
    degree?: number
}

const ZODIAC_SIGNS = [
    'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo',
    'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'
]

const ZODIAC_SYMBOLS: Record<string, string> = {
    'Aries': '♈', 'Tauro': '♉', 'Géminis': '♊', 'Cáncer': '♋', 'Leo': '♌', 'Virgo': '♍',
    'Libra': '♎', 'Escorpio': '♏', 'Sagitario': '♐', 'Capricornio': '♑', 'Acuario': '♒', 'Piscis': '♓'
}

const HOUSE_NAMES = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

const PLANET_COLORS: Record<string, string> = {
    'Sol': '#C4A98A',
    'Luna': '#9A8B84',
    'Mercurio': '#A88B74',
    'Venus': '#BFA691',
    'Marte': '#C97878',
    'Júpiter': '#C4A98A',
    'Saturno': '#A88B74',
    'Neptuno': '#8BA888',
    'Plutón': '#9A8B84',
    'Quirón': '#BFA691',
    'Nodo Norte': '#A88B74',
    'Nodo Sur': '#9A8B84'
}

const PLANET_SYMBOLS: Record<string, string> = {
    'Sol': '☉', 'Luna': '☽', 'Mercurio': '☿', 'Venus': '♀', 'Marte': '♂',
    'Júpiter': '♃', 'Saturno': '♄', 'Urano': '♅', 'Neptuno': '♆', 'Plutón': '♇',
    'Quirón': '⚷', 'Nodo Norte': '☊', 'Nodo Sur': '☋',
    'Ascendente': '↑', 'Medio Cielo': 'MC'
}

const ANGLE_COLORS: Record<string, string> = {
    'Ascendente': '#C97878',
    'Medio Cielo': '#8BA888'
}

const HOUSE_NAMES_SPANISH: Record<string, string> = {
    'Primera': 'Primera (Identidad)',
    'Segunda': 'Segunda (Valores)',
    'Tercera': 'Tercera (Comunicación)',
    'Cuarta': 'Cuarta (Hogar)',
    'Quinta': 'Quinta (Creatividad)',
    'Sexta': 'Sexta (Trabajo)',
    'Séptima': 'Séptima (Relaciones)',
    'Octava': 'Octava (Transformación)',
    'Novena': 'Novena (Expansión)',
    'Décima': 'Décima (Carrera)',
    'Undécima': 'Undécima (Comunidad)',
    'Duodécima': 'Duodécima (Espiritualidad)'
}

export default function AstroChart({ planets, houses = [], angles = [] }: { planets: Planet[], houses?: House[], angles?: Angle[] }) {
    const [size, setSize] = useState(320)
    const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null)
    const [isMobile, setIsMobile] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            const containerWidth = containerRef.current?.offsetWidth || 400

            if (width < 640) {
                setSize(Math.min(containerWidth - 32, 320))
                setIsMobile(true)
            } else if (width < 1024) {
                setSize(400)
                setIsMobile(false)
            } else {
                setSize(480)
                setIsMobile(false)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const center = size / 2
    const outerRadius = size * 0.48
    const zodiacRadius = size * 0.45
    const middleRadius = size * 0.38
    const innerRadius = size * 0.28
    const centerRadius = size * 0.12

    const ascendant = angles.find(a => a.name === 'Ascendente')
    const midheaven = angles.find(a => a.name === 'Medio Cielo')

    const getAnglePos = (longitude: number, r: number) => {
        const angle = (longitude - 90) * (Math.PI / 180)
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle)
        }
    }

    const getPos = (longitude: number, r: number) => {
        const angle = (longitude - 90) * (Math.PI / 180)
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle)
        }
    }

    const getPlanetRadius = (name: string) => {
        if (name === 'Sol' || name === 'Luna') return zodiacRadius - 20
        if (['Mercurio', 'Venus', 'Marte'].includes(name)) return zodiacRadius - 28
        if (name === 'Ascendente' || name === 'Medio Cielo') return zodiacRadius - 14
        return zodiacRadius - 36
    }

    const getPlanetSize = (name: string) => {
        if (name === 'Sol') return 10
        if (name === 'Luna') return 9
        if (['Mercurio', 'Venus', 'Marte'].includes(name)) return 8
        if (name === 'Ascendente' || name === 'Medio Cielo') return 8
        return 7
    }

    const formatDegree = (longitude: number) => {
        const normalized = longitude % 360
        const degrees = Math.floor(normalized)
        const minutes = Math.floor((normalized - degrees) * 60)
        return `${degrees}°${minutes.toString().padStart(2, '0')}'`
    }

    return (
        <div ref={containerRef} className="w-full">
            <div className="relative mx-auto" style={{ width: size, height: size }}>
                {/* Fondo con gradiente sutil */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(250,249,247,0.85) 50%, rgba(245,240,235,0.7) 100%)',
                        boxShadow: '0 0 40px rgba(191,166,145,0.12), inset 0 0 20px rgba(255,255,255,0.6)'
                    }}
                />

                <svg
                    viewBox={`0 0 ${size} ${size}`}
                    className="w-full h-full relative z-10"
                    style={{ filter: 'drop-shadow(0 4px 12px rgba(125,90,80,0.1))' }}
                >
                    {/* Anillo zodiacal exterior */}
                    <circle
                        cx={center}
                        cy={center}
                        r={outerRadius}
                        fill="none"
                        stroke="var(--secondary)"
                        strokeWidth="2"
                    />

                    {/* Anillo de signos */}
                    <circle
                        cx={center}
                        cy={center}
                        r={zodiacRadius}
                        fill="white"
                        fillOpacity="0.6"
                        stroke="var(--primary)"
                        strokeWidth="1.5"
                    />

                    {/* Símbolos zodiacales */}
                    {ZODIAC_SIGNS.map((sign, i) => {
                        const angle = (i * 30 - 90) * (Math.PI / 180)
                        const x = center + zodiacRadius * Math.cos(angle)
                        const y = center + zodiacRadius * Math.sin(angle)
                        const fontSize = size < 350 ? 16 : 20

                        return (
                            <text
                                key={sign}
                                x={x}
                                y={y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="var(--text-heading)"
                                fontSize={fontSize}
                                fontWeight="300"
                                className="select-none"
                            >
                                {ZODIAC_SYMBOLS[sign]}
                            </text>
                        )
                    })}

                    {/* Líneas divisoras de signos */}
                    {ZODIAC_SIGNS.map((_, i) => {
                        const angle = (i * 30 - 90) * (Math.PI / 180)
                        const p1 = { x: center + middleRadius * Math.cos(angle), y: center + middleRadius * Math.sin(angle) }
                        const p2 = { x: center + zodiacRadius * Math.cos(angle), y: center + zodiacRadius * Math.sin(angle) }
                        return (
                            <line
                                key={`sign-${i}`}
                                x1={p1.x} y1={p1.y}
                                x2={p2.x} y2={p2.y}
                                stroke="var(--primary)"
                                strokeWidth="1"
                                opacity="0.4"
                            />
                        )
                    })}

                    {/* Círculo intermedio */}
                    <circle
                        cx={center}
                        cy={center}
                        r={middleRadius}
                        fill="white"
                        fillOpacity="0.7"
                        stroke="var(--secondary)"
                        strokeWidth="1"
                    />

                    {/* Líneas de casas */}
                    {houses.map((house, i) => {
                        const p1 = getPos(house.longitude, centerRadius + 5)
                        const p2 = getPos(house.longitude, middleRadius - 5)
                        return (
                            <line
                                key={`house-${i}`}
                                x1={p1.x} y1={p1.y}
                                x2={p2.x} y2={p2.y}
                                stroke="var(--primary)"
                                strokeWidth="1.5"
                                opacity="0.4"
                            />
                        )
                    })}

                    {/* Círculos de casas (números romanos) */}
                    {houses.map((house, i) => {
                        const angle = (house.longitude - 90) * (Math.PI / 180)
                        const x = center + (middleRadius + centerRadius) / 2 * Math.cos(angle)
                        const y = center + (middleRadius + centerRadius) / 2 * Math.sin(angle)
                        const fontSize = size < 350 ? 9 : 11

                        return (
                            <text
                                key={`house-num-${i}`}
                                x={x}
                                y={y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="var(--primary)"
                                fontSize={fontSize}
                                fontWeight="600"
                                opacity="0.5"
                                className="select-none"
                            >
                                {HOUSE_NAMES[i]}
                            </text>
                        )
                    })}

                    {/* Líneas de ángulos importantes (Ascendente y MC) */}
                    {ascendant && (
                        <>
                            <line
                                x1={center}
                                y1={center}
                                x2={center + outerRadius * 1.05 * Math.cos((ascendant.longitude - 90) * Math.PI / 180)}
                                y2={center + outerRadius * 1.05 * Math.sin((ascendant.longitude - 90) * Math.PI / 180)}
                                stroke="#C97878"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                opacity="0.8"
                            />
                            <text
                                x={center + (outerRadius + 15) * Math.cos((ascendant.longitude - 90) * Math.PI / 180)}
                                y={center + (outerRadius + 15) * Math.sin((ascendant.longitude - 90) * Math.PI / 180)}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#C97878"
                                fontSize={size < 350 ? 10 : 12}
                                fontWeight="700"
                            >
                                ASC
                            </text>
                        </>
                    )}

                    {midheaven && (
                        <>
                            <line
                                x1={center}
                                y1={center}
                                x2={center + outerRadius * 1.05 * Math.cos((midheaven.longitude - 90) * Math.PI / 180)}
                                y2={center + outerRadius * 1.05 * Math.sin((midheaven.longitude - 90) * Math.PI / 180)}
                                stroke="#8BA888"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                opacity="0.8"
                            />
                            <text
                                x={center + (outerRadius + 15) * Math.cos((midheaven.longitude - 90) * Math.PI / 180)}
                                y={center + (outerRadius + 15) * Math.sin((midheaven.longitude - 90) * Math.PI / 180)}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#8BA888"
                                fontSize={size < 350 ? 10 : 12}
                                fontWeight="700"
                            >
                                MC
                            </text>
                        </>
                    )}

                    {/* Círculo central */}
                    <circle
                        cx={center}
                        cy={center}
                        r={centerRadius}
                        fill="url(#centerGradient)"
                        stroke="var(--primary)"
                        strokeWidth="2"
                    />

                    {/* Texto del centro - mostrar ASC si existe */}
                    {ascendant ? (
                        <>
                            <text
                                x={center}
                                y={center - 5}
                                textAnchor="middle"
                                fill="var(--text-heading)"
                                fontSize={size < 350 ? 10 : 12}
                                fontWeight="700"
                                className="select-none"
                                style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                                {ZODIAC_SYMBOLS[ascendant.sign] || '↑'}
                            </text>
                            <text
                                x={center}
                                y={center + 8}
                                textAnchor="middle"
                                fill="#C97878"
                                fontSize={size < 350 ? 7 : 9}
                                fontWeight="600"
                                className="select-none"
                            >
                                {ascendant.sign}
                            </text>
                        </>
                    ) : (
                        <>
                            <text
                                x={center}
                                y={center - 6}
                                textAnchor="middle"
                                fill="var(--text-heading)"
                                fontSize={size < 350 ? 12 : 14}
                                fontWeight="700"
                                className="select-none"
                                style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                                TU MAPA
                            </text>
                            <text
                                x={center}
                                y={center + 10}
                                textAnchor="middle"
                                fill="var(--primary)"
                                fontSize={size < 350 ? 8 : 10}
                                fontWeight="500"
                                className="select-none"
                            >
                                NATAL
                            </text>
                        </>
                    )}

                    {/* Gradiente para el centro */}
                    <defs>
                        <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#FAF9F7" />
                            <stop offset="100%" stopColor="#E8E4E0" />
                        </radialGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Punto central */}
                    <circle cx={center} cy={center} r={3} fill="var(--primary)" />

                    {/* Planetas */}
                    {planets.map((planet, i) => {
                        const r = getPlanetRadius(planet.name)
                        const planetSize = getPlanetSize(planet.name)
                        const pos = getPos(planet.longitude, r)
                        const color = ANGLE_COLORS[planet.name] || PLANET_COLORS[planet.name] || '#7d5a50'
                        const isSelected = selectedPlanet?.name === planet.name

                        return (
                            <motion.g
                                key={planet.name}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
                            >
                                {/* Halo de selección */}
                                {isSelected && (
                                    <motion.circle
                                        cx={pos.x}
                                        cy={pos.y}
                                        r={planetSize + 10}
                                        fill={color}
                                        initial={{ opacity: 0.1, scale: 0.8 }}
                                        animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.15, 0.8] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                )}

                                {/* Línea al centro (solo para Sol y Luna) */}
                                {(planet.name === 'Sol' || planet.name === 'Luna') && (
                                    <line
                                        x1={center}
                                        y1={center}
                                        x2={pos.x}
                                        y2={pos.y}
                                        stroke={color}
                                        strokeWidth="0.5"
                                        strokeDasharray="2,3"
                                        opacity="0.3"
                                    />
                                )}

                                {/* Círculo del planeta */}
                                <circle
                                    cx={pos.x}
                                    cy={pos.y}
                                    r={planetSize}
                                    fill={color}
                                    className="cursor-pointer transition-all duration-200 hover:r-[10px]"
                                    style={{ filter: isSelected ? 'url(#glow)' : 'none' }}
                                    onClick={() => setSelectedPlanet(planet)}
                                />

                                {/* Símbolo del planeta */}
                                <text
                                    x={pos.x}
                                    y={pos.y - planetSize - 6}
                                    textAnchor="middle"
                                    fill={color}
                                    fontSize={size < 350 ? 10 : 12}
                                    fontWeight="600"
                                    className="select-none cursor-pointer"
                                    onClick={() => setSelectedPlanet(planet)}
                                >
                                    {PLANET_SYMBOLS[planet.name] || planet.name.substring(0, 2)}
                                </text>
                            </motion.g>
                        )
                    })}
                </svg>
            </div>

            {/* Panel de información del planeta seleccionado */}
            <AnimatePresence mode="wait">
                {selectedPlanet && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`mt-4 ${isMobile ? 'w-full' : 'max-w-md'} mx-auto`}
                    >
                        <div className="mystic-card p-4 sm:p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span
                                        className="text-3xl"
                                        style={{ color: PLANET_COLORS[selectedPlanet.name] || 'var(--text-heading)' }}
                                    >
                                        {PLANET_SYMBOLS[selectedPlanet.name] || '●'}
                                    </span>
                                    <div>
                                        <h3
                                            className="text-lg sm:text-xl font-bold"
                                            style={{
                                                color: PLANET_COLORS[selectedPlanet.name] || 'var(--text-heading)',
                                                fontFamily: 'var(--font-playfair)'
                                            }}
                                        >
                                            {selectedPlanet.name.toUpperCase()}
                                        </h3>
                                        <p className="text-xs opacity-50 font-medium">
                                            Click en otro planeta para ver detalles
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedPlanet(null)}
                                    className="text-[var(--text-muted)] hover:text-[var(--text-heading)] text-2xl leading-none transition-colors"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <div className="bg-white/50 rounded-xl p-3 sm:p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-1">Signo</p>
                                    <p className="text-base sm:text-lg font-semibold text-[var(--text-heading)] flex items-center gap-2">
                                        <span>{ZODIAC_SYMBOLS[selectedPlanet.sign]}</span>
                                        <span>{selectedPlanet.sign}</span>
                                    </p>
                                </div>
                                <div className="bg-white/50 rounded-xl p-3 sm:p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-1">Grado</p>
                                    <p className="text-base sm:text-lg font-semibold text-[var(--text-heading)]">
                                        {formatDegree(selectedPlanet.longitude)}
                                    </p>
                                </div>
                                <div className="col-span-2 bg-white/50 rounded-xl p-3 sm:p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-1">Casa</p>
                                    <p className="text-base sm:text-lg font-semibold text-[var(--text-heading)]">
                                        {HOUSE_NAMES_SPANISH[selectedPlanet.house] || selectedPlanet.house}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Instrucciones para móvil */}
            {isMobile && !selectedPlanet && (
                <p className="text-center text-xs text-[var(--text-muted)] mt-4 font-medium">
                    Toca un planeta para ver sus detalles
                </p>
            )}
        </div>
    )
}
