'use client'

import { useState } from 'react'
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
        body: JSON.stringify({
          chartData: cData,
          userInfo: {
            name: formData.name
          }
        })
      })
      const iData = await interRes.json()
      if (iData.error && !iData.interpretation) {
        throw new Error(iData.error)
      }

      setChartData(cData)
      setInterpretation(iData.interpretation)

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
            <BirthForm onSubmit={handleCalculate} initialData={lastFormData} />
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
            <div className="relative mb-6">
              <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 text-[var(--primary)] animate-spin" />
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--text-heading)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <p className="text-lg font-semibold text-[var(--text-heading)]">Trazando tu mapa cósmico...</p>
            <p className="text-sm text-[var(--text-muted)] mt-1">La alineación planetaria toma un momento.</p>
          </motion.div>
        )}

        {/* Resultados */}
        {(chartData && interpretation && !loading) && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <button
              onClick={() => setChartData(null)}
              className="flex items-center gap-2 mb-6 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors bg-white/60 px-5 py-2.5 rounded-full border border-[var(--card-border)] shadow-sm hover:shadow-md transition-all mb-8"
            >
              <ChevronLeft className="w-4 h-4" />
              Nueva Consulta
            </button>

            <div className="results-grid">
              {/* Columna Visual - Carta Natal */}
              <div className="space-y-4 order-2 lg:order-1">
                <div className="mystic-card text-center">
                  <h2 className="text-xl font-semibold mb-4 text-[var(--text-heading)] flex items-center justify-center gap-2">
                    <Info className="w-5 h-5 text-[var(--primary)]" />
                    Tu Mapa Estelar
                  </h2>
                  <AstroChart planets={chartData.planets} houses={chartData.houses} />
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    Posiciones Planetarias
                  </p>
                </div>
              </div>

              {/* Columna Texto - Interpretación */}
              <div className="order-1 lg:order-2">
                <div className="mystic-card markdown-content-premium">
                  <ReactMarkdown>
                    {interpretation}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
