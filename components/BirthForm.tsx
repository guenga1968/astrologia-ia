'use client'

import { useState, useEffect } from 'react'
import { MapPin, Sparkles, X, AlertCircle, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Location {
  name: string
  state: string
  lat: number
  lng: number
  country: string
}

const normalizeDate = (value: string): string => {
  const cleaned = value.trim().replace(/\s/g, '')

  const ddmmyyyy = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
  const match = cleaned.match(ddmmyyyy)

  if (match) {
    const [, day, month, year] = match
    const d = parseInt(day, 10)
    const m = parseInt(month, 10)
    const y = parseInt(year, 10)

    if (d >= 1 && d <= 31 && m >= 1 && m <= 12 && y >= 1900 && y <= 2100) {
      const mm = m.toString().padStart(2, '0')
      const dd = d.toString().padStart(2, '0')
      return `${y}-${mm}-${dd}`
    }
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(cleaned)) {
    return cleaned
  }

  return value
}

const normalizeTime = (value: string): string => {
  const cleaned = value.trim().toUpperCase()

  const twelveHour = /^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i
  const match = cleaned.match(twelveHour)

  if (match) {
    let [, hours, minutes, period] = match
    let h = parseInt(hours, 10)
    const m = parseInt(minutes, 10)

    if (period === 'PM' && h !== 12) {
      h += 12
    } else if (period === 'AM' && h === 12) {
      h = 0
    }

    if (h >= 0 && h <= 23 && m >= 0 && m <= 59) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
    }
  }

  if (/^\d{2}:\d{2}$/.test(cleaned)) {
    return cleaned
  }

  return value
}

const isValidDate = (value: string): boolean => {
  if (!value) return false
  const cleaned = value.trim()

  if (/^\d{4}-\d{2}-\d{2}$/.test(cleaned)) {
    const date = new Date(cleaned)
    return !isNaN(date.getTime())
  }

  const ddmmyyyy = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
  const match = cleaned.match(ddmmyyyy)
  if (match) {
    const [, day, month, year] = match
    const d = parseInt(day, 10)
    const m = parseInt(month, 10)
    const y = parseInt(year, 10)
    if (d >= 1 && d <= 31 && m >= 1 && m <= 12 && y >= 1900 && y <= 2100) {
      return true
    }
  }

  return false
}

const isValidTime = (value: string): boolean => {
  if (!value) return false
  const cleaned = value.trim().toUpperCase()

  if (/^\d{2}:\d{2}$/.test(cleaned)) {
    const [h, m] = cleaned.split(':').map(Number)
    return h >= 0 && h <= 23 && m >= 0 && m <= 59
  }

  const twelveHour = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i
  const match = cleaned.match(twelveHour)
  if (match) {
    let [, hours, minutes, period] = match
    let h = parseInt(hours, 10)
    const m = parseInt(minutes, 10)

    if (period === 'PM' && h !== 12) h += 12
    if (period === 'AM' && h === 12) h = 0

    return h >= 0 && h <= 23 && m >= 0 && m <= 59
  }

  return false
}

export default function BirthForm({ onSubmit, initialData }: { onSubmit: (data: any) => void, initialData?: any }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    date: initialData?.date || '',
    time: initialData?.time || '',
    locationName: initialData?.location?.name || '',
  })
  const [query, setQuery] = useState(initialData?.location?.name || '')
  const [suggestions, setSuggestions] = useState<Location[]>([])
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(initialData?.location || null)
  const [loading, setLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    if (query.length > 2 && !selectedLocation) {
      const delayDebounceFn = setTimeout(async () => {
        setLoading(true)
        setShowSuggestions(true)
        try {
          const res = await fetch(`/api/geocoding?q=${encodeURIComponent(query)}`)
          const data = await res.json()
          if (Array.isArray(data)) {
            setSuggestions(data.map((item: any) => {
              const street = item.address?.road || item.address?.street || ''
              const houseNumber = item.address?.house_number || ''
              const suburb = item.address?.suburb || item.address?.neighbourhood || ''
              const city = item.address?.city || item.address?.town || item.address?.village || ''
              const displayName = street && houseNumber 
                ? `${street} ${houseNumber}${suburb ? ', ' + suburb : ''}${city ? ', ' + city : ''}`
                : item.display_name.split(',').slice(0, 3).join(', ')
              
              return {
                name: displayName,
                state: item.address?.state || item.address?.province || '',
                lat: parseFloat(item.lat),
                lng: parseFloat(item.lon),
                country: item.address?.country || ''
              }
            }))
          }
        } catch (error) {
          console.error('Error fetching locations:', error)
        } finally {
          setLoading(false)
        }
      }, 400)
      return () => clearTimeout(delayDebounceFn)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [query, selectedLocation])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedLocation) {
      setLocationError(true)
      return
    }
    setLocationError(false)
    const submitData = { ...formData, location: selectedLocation }
    onSubmit(submitData)
  }

  const clearLocation = () => {
    setSelectedLocation(null)
    setQuery('')
    setSuggestions([])
    setShowSuggestions(false)
  }

  const [dateError, setDateError] = useState(false)
  const [timeError, setTimeError] = useState(false)
  const [locationError, setLocationError] = useState(false)

  const handleDateChange = (value: string) => {
    const normalized = normalizeDate(value)
    setFormData({ ...formData, date: normalized })
    setDateError(value.length > 0 && !isValidDate(normalized))
  }

  const handleTimeChange = (value: string) => {
    const normalized = normalizeTime(value)
    setFormData({ ...formData, time: normalized })
    setTimeError(value.length > 0 && !isValidTime(normalized))
  }

  const handleDatePickerChange = (value: string) => {
    setFormData({ ...formData, date: value })
    setDateError(false)
  }

  const handleTimePickerChange = (value: string) => {
    setFormData({ ...formData, time: value })
    setTimeError(false)
  }

  const isFormValid = selectedLocation && formData.name && formData.date && formData.time && !dateError && !timeError

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mystic-card w-full shadow-lg"
    >
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold flex items-center justify-center gap-2 text-[var(--text-heading)]">
          <Sparkles className="w-5 h-5 text-[var(--primary)]" />
          Tu Carta Natal
        </h2>
        <p className="text-sm text-[var(--text-muted)] mt-1">Descubre tu mapa estelar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nombre */}
        <div>
          <label htmlFor="birth-name" className="form-label">Nombre</label>
          <div className="input-group">
            <input
              id="birth-name"
              type="text"
              required
              placeholder="Tu nombre"
              className="input-elegant"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              aria-describedby="name-hint"
              autoComplete="name"
            />
          </div>
          <span id="name-hint" className="sr-only">Tu nombre completo o apelativo</span>
        </div>

        {/* Fecha y Hora - stack en mobile, lado a lado en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Fecha */}
          <div className="space-y-2">
            <label className="form-label">Fecha de nacimiento</label>
            <div className={`input-group transition-all duration-300 ${dateError ? '!border-[var(--error)]' : ''}`}>
              <input
                type="text"
                required
                placeholder="escribe: 15/03/1990"
                value={formData.date}
                className="input-elegant"
                onChange={(e) => handleDateChange(e.target.value)}
                autoComplete="off"
              />
            </div>
            <AnimatePresence mode="wait">
              {dateError && (
                <motion.p
                  key="dateError"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="text-xs text-[var(--error)] flex items-center gap-1 overflow-hidden"
                >
                  <AlertCircle className="w-3 h-3 flex-shrink-0" />
                  Formato inválido (usa: DD/MM/AAAA)
                </motion.p>
              )}
              {isValidDate(formData.date) && !dateError && formData.date && (
                <motion.p
                  key="dateSuccess"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="text-xs text-[var(--success)] flex items-center gap-1 overflow-hidden"
                >
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  Fecha válida
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Hora */}
          <div className="space-y-2">
            <label className="form-label">Hora de nacimiento</label>
            <div className={`input-group transition-all duration-300 ${timeError ? '!border-[var(--error)]' : ''}`}>
              <input
                type="text"
                required
                placeholder="escribe: 14:30"
                value={formData.time}
                className="input-elegant"
                onChange={(e) => handleTimeChange(e.target.value)}
                autoComplete="off"
              />
            </div>
            <AnimatePresence mode="wait">
              {timeError && (
                <motion.p
                  key="timeError"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="text-xs text-[var(--error)] flex items-center gap-1 overflow-hidden"
                >
                  <AlertCircle className="w-3 h-3 flex-shrink-0" />
                  Formato inválido (usa: HH:MM)
                </motion.p>
              )}
              {isValidTime(formData.time) && !timeError && formData.time && (
                <motion.p
                  key="timeSuccess"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="text-xs text-[var(--success)] flex items-center gap-1 overflow-hidden"
                >
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  Hora válida
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Ubicación con autocomplete */}
        <div className="relative">
          <label htmlFor="birth-location" className="form-label">Lugar de nacimiento</label>
          <div className="input-group">
            <div className="input-icon-wrapper">
              <MapPin className="w-4 h-4" />
            </div>
            <input
              id="birth-location"
              type="text"
              required
              placeholder="Ej: Av. Pueyrredon 2120, CABA, Argentina"
              className="input-elegant"
              value={selectedLocation ? `${selectedLocation.name}, ${selectedLocation.country}` : query}
              onChange={(e) => {
                setQuery(e.target.value)
                setSelectedLocation(null)
                setShowSuggestions(true)
                setLocationError(false)
              }}
              onFocus={() => query.length > 2 && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              aria-describedby="location-hint"
              autoComplete="off"
            />
            {selectedLocation && (
              <button
                type="button"
                onClick={clearLocation}
                className="pr-3 text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors"
                aria-label="Limpiar ubicación"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            {loading && !selectedLocation && (
              <div className="pr-3">
                <div className="w-4 h-4 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
          <span id="location-hint" className="sr-only">Ciudad, dirección, hospital o clínica donde naciste</span>

          {/* Sugerencias */}
          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute z-30 w-full mt-2 bg-white/95 backdrop-blur-xl border border-[var(--card-border)] rounded-xl shadow-lg overflow-hidden max-h-40 overflow-y-auto"
                role="listbox"
                aria-label="Sugerencias de ubicación"
              >
                {suggestions.map((loc, i) => (
                  <button
                    key={i}
                    type="button"
                    className="w-full px-4 py-3 text-left hover:bg-[var(--accent-glow)] transition-colors flex flex-col border-b border-[var(--secondary)] last:border-none"
                    onClick={() => {
                      setSelectedLocation(loc)
                      setQuery(loc.name)
                      setSuggestions([])
                      setShowSuggestions(false)
                    }}
                    role="option"
                  >
                    <span className="text-sm font-medium text-[var(--text-heading)]">{loc.name}</span>
                    {loc.state && <span className="text-xs text-[var(--text-muted)]">{loc.state}</span>}
                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{loc.country}</span>
                  </button>
                ))}
              </motion.div>
            )}
            {locationError && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                className="text-xs text-[var(--error)] flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                Seleccioná una ubicación de la lista
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Botón submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full cosmic-btn group text-sm"
            disabled={!isFormValid}
          >
            <span className="flex items-center justify-center gap-2">
              <span>Revelar mi Destino</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>
      </form>
    </motion.div>
  )
}
