const fetch = typeof globalThis.fetch === 'function' ? globalThis.fetch : require('node-fetch');

(async () => {
  const tests = [
    { date: '1990-04-22', time: '12:00', location: { name: 'Rosario, Argentina', lat: -32.947, lng: -60.65 } },
    { date: '1989-07-12', time: '09:15', location: { name: 'Madrid, Spain', lat: 40.4168, lng: -3.7038 } },
    { date: '2005-11-11', time: '16:30', location: { name: 'New York, USA', lat: 40.7128, lng: -74.006 } },
    { date: '1998-01-15', time: '08:30', location: { name: 'Buenos Aires, Argentina', lat: -34.6037, lng: -58.3816 } },
    { date: '2000-12-28', time: '02:43', location: { name: 'Buenos Aires, Argentina', lat: -34.6037, lng: -58.3816 } }
  ];

  const results = [];
  const endpoint = 'https://astrologia-one.vercel.app/api/calculate-chart';

  const expectedMatches = [
    { sun: 'Taurus', moon: 'Pisces', asc: 'Gemini' },
    { sun: 'Cancer', moon: 'Scorpio', asc: 'Libra' },
    { sun: 'Scorpio', moon: 'Pisces', asc: 'Pisces' }
  ];

  for (let i = 0; i < tests.length; i++) {
    const t = tests[i];
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: t.date, time: t.time, location: t.location, name: `Regression ${i + 1}` })
      })
      const ok = res.ok;
      const data = await res.json();
      results.push({ test: i + 1, ok, data });
      // Verificación de fechas 1-3 (casos conocidos)
      if (i < expectedMatches.length && data.summary && data.summary.sun && data.summary.moon && data.summary.ascendant) {
        const exp = expectedMatches[i]
        const s = data.summary.sun.sign;
        const m = data.summary.moon.sign;
        const a = data.summary.ascendant.sign;
        if (s !== exp.sun || m !== exp.moon || a !== exp.asc) {
          results[results.length - 1].ok = false;
          results[results.length - 1].note = `expected sun=${exp.sun} moon=${exp.moon} asc=${exp.asc}, got sun=${s} moon=${m} asc=${a}`;
        }
      }
    } catch (err) {
      results.push({ test: i + 1, error: err?.message ?? String(err) });
    }
  }

  console.log(JSON.stringify({ tests, results }, null, 2));
})();
