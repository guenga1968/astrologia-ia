'use client'

import { useState, useEffect } from 'react'
import BirthForm from '@/components/BirthForm'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Info, Loader2, Sparkles } from 'lucide-react'
import AstroChart from '@/components/AstroChart'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [chartData, setChartData] = useState<any>(null)
  const [interpretation, setInterpretation] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [lastFormData, setLastFormData] = useState<any>(null)
  const [resetKey, setResetKey] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNewConsultation = () => {
    setChartData(null)
    setInterpretation('')
    setError('')
    setLastFormData(null)
    setResetKey(prev => prev + 1)
    setShowResults(false)
  }

  const handleCalculate = async (formData: any) => {
    setLoading(true)
    setError('')
    setLastFormData(formData)
    try {
      const calcRes = await fetch('/api/calculate-chart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const cData = await calcRes.json()
      if (cData.error) throw new Error(cData.error)

      const interRes = await fetch('/api/interpret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(30000),
        body: JSON.stringify({
          chartData: cData,
          userInfo: {
            name: formData.name,
            metadata: cData.metadata
          }
        })
      })
      const iData = await interRes.json()
      console.log('DEBUG: interpret response:', iData)
      if (iData.error && !iData.interpretation) {
        throw new Error(iData.error)
      }

      setChartData(cData)
      setInterpretation(iData.interpretation)
      setShowResults(true)

    } catch (err: any) {
      console.error('Frontend error:', err)
      setError(err.message || 'Error inesperado')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container-main min-h-screen flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-6 sm:py-8"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-2 block">
          Portal Astrológico
        </span>
        <h1 className="text-[var(--font-size-3xl)] font-bold text-[var(--text-heading)] mb-2">
          Astro-IA
        </h1>
        <p className="text-sm text-[var(--text-muted)] max-w-sm mx-auto leading-relaxed">
          Un viaje profundo hacia tu esencia a través de las estrellas.
        </p>
      </motion.header>

      <AnimatePresence mode="wait">
        {/* Formulario */}
        {(!chartData && !loading) && (
          <motion.div
            key="form-container"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="w-full max-w-lg mx-auto"
          >
            <BirthForm key={resetKey} onSubmit={handleCalculate} initialData={lastFormData} />
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-50/80 border border-red-100 rounded-xl text-red-600 text-sm flex gap-3 items-start"
              >
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p><strong>Lo sentimos:</strong> {error}</p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Loading */}
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-16"
          >
            <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
              <motion.div
                className="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-glow)] blur-[2px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-20 h-20 rounded-full border border-[var(--primary)] opacity-30"
                style={{ borderStyle: 'dashed' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <Sparkles className="relative w-6 h-6 text-white drop-shadow-md z-10" />
            </div>
            <motion.p
              className="text-lg font-medium tracking-wide text-[var(--text-heading)]"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Consultando a los astros...
            </motion.p>
            <p className="text-sm text-[var(--text-muted)] mt-2 font-light">Este proceso puede tomar unos instantes.</p>
          </motion.div>
        )}

        {/* Resultados */}
        {(chartData && interpretation && !loading) && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full pb-24 sm:pb-0"
          >
            <div className="results-grid">
              {/* Columna Visual - Carta Natal - primero en móvil, segundo en desktop */}
              <div className="space-y-4 order-1 lg:order-2">
                <div className="mystic-card text-center">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4 text-[var(--text-heading)] flex items-center justify-center gap-2">
                    <Info className="w-5 h-5 text-[var(--primary)]" />
                    Tu Mapa Estelar
                  </h2>
                  <AstroChart
                    planets={chartData.planets}
                    houses={chartData.houses}
                    angles={chartData.planets.filter((p: any) => p.name === 'Ascendente' || p.name === 'Medio Cielo')}
                  />
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    Posiciones Planetarias
                  </p>
                </div>
              </div>

              {/* Columna Texto - Interpretación - segundo en móvil, primero en desktop */}
              <div className="order-2 lg:order-1">
                <div className="mystic-card markdown-content-astrologia">
                  <ReactMarkdown>
                    {interpretation}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Nueva Consulta - solo visible cuando hay interpretación */}
      <div 
        suppressHydrationWarning
        className={`fixed bottom-4 sm:bottom-6 left-0 right-0 w-full flex justify-center z-50 transition-opacity duration-200 sm:duration-300 ${showResults ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {showResults && (
          <button
            onClick={handleNewConsultation}
            className="flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 text-sm font-semibold min-h-[44px] bg-white/95 backdrop-blur-md border border-[var(--card-border)] rounded-full shadow-lg hover:shadow-xl hover:border-[var(--primary)] transition-all duration-200 sm:duration-300 text-[var(--text-heading)] hover:text-[var(--primary)]"
          >
            <Sparkles className="w-4 h-4 text-[var(--primary)]" />
            Nueva Consulta
          </button>
        )}
      </div>
    </main >
  )
}
