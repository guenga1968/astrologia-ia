const TEST_CASES = [];

// Generar 100 casos de prueba con diferentes fechas, horas y ubicaciones
const LOCATIONS = [
  { name: "Buenos Aires, Argentina", lat: -34.6037, lng: -58.3816 },
  { name: "Madrid, España", lat: 40.4168, lng: -3.7038 },
  { name: "Nueva York, EE.UU.", lat: 40.7128, lng: -74.006 },
  { name: "Londres, Reino Unido", lat: 51.5074, lng: -0.1278 },
  { name: "Tokio, Japón", lat: 35.6762, lng: 139.6503 },
  { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093 },
  { name: "São Paulo, Brasil", lat: -23.5505, lng: -46.6333 },
  { name: "Ciudad de México, México", lat: 19.4326, lng: -99.1332 },
  { name: "París, Francia", lat: 48.8566, lng: 2.3522 },
  { name: "Berlín, Alemania", lat: 52.52, lng: 13.405 },
  { name: "Rosario, Santa Fe, Argentina", lat: -32.9442, lng: -60.6505 },
  { name: "Córdoba, Argentina", lat: -31.4201, lng: -64.1888 },
  { name: "Mendoza, Argentina", lat: -32.8895, lng: -68.8458 },
  { name: "Mar del Plata, Argentina", lat: -38.0055, lng: -57.5426 },
  { name: "Salta, Argentina", lat: -24.786, lng: -65.4434 },
  { name: "Miami, Florida, EE.UU.", lat: 25.7617, lng: -80.1918 },
  { name: "Los Ángeles, EE.UU.", lat: 34.0522, lng: -118.2437 },
  { name: "Chicago, EE.UU.", lat: 41.8781, lng: -87.6298 },
  { name: "Toronto, Canadá", lat: 43.6532, lng: -79.3832 },
  { name: "Vancouver, Canadá", lat: 49.2827, lng: -123.1207 },
  { name: "Río de Janeiro, Brasil", lat: -22.9068, lng: -43.1729 },
  { name: "Lima, Perú", lat: -12.0464, lng: -77.0428 },
  { name: "Bogotá, Colombia", lat: 4.711, lng: -74.0721 },
  { name: "Santiago de Chile", lat: -33.4489, lng: -70.6693 },
  { name: "Montevideo, Uruguay", lat: -34.9011, lng: -56.1645 },
  { name: "Caracas, Venezuela", lat: 10.4806, lng: -66.9036 },
  { name: "Roma, Italia", lat: 41.9028, lng: 12.4964 },
  { name: "Madrid, España", lat: 40.4168, lng: -3.7038 },
  { name: "Barcelona, España", lat: 41.3851, lng: 2.1734 },
  { name: "Valencia, España", lat: 39.4699, lng: -0.3763 },
];

// Generar fechas desde 1950 hasta 2025
for (let year = 1950; year <= 2025; year += 5) {
  for (let month = 1; month <= 12; month += 4) {
    for (let day = 1; day <= 28; day += 7) {
      for (let hour = 0; hour < 24; hour += 6) {
        const locIndex = Math.floor(Math.random() * LOCATIONS.length);
        const loc = LOCATIONS[locIndex];
        
        TEST_CASES.push({
          date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
          time: `${String(hour).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
          location: loc
        });
      }
    }
  }
}

// Limitar a 100 casos
const FINAL_CASES = TEST_CASES.slice(0, 100);

console.log(JSON.stringify(FINAL_CASES, null, 2));
