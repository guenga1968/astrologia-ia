// Smoke tests for production API
const fetch = typeof globalThis.fetch === 'function' ? globalThis.fetch : require('node-fetch');

(async () => {
  const endpoint = 'https://astrologia-one.vercel.app/api/calculate-chart';
  const tests = [
    { date: '2000-12-28', time: '02:43', location: { name: 'Buenos Aires, Argentina', lat: -34.6037, lng: -58.3816 } },
    { date: '1990-04-22', time: '12:00', location: { name: 'Rosario, Argentina', lat: -32.947, lng: -60.65 } },
    { date: '1990-07-12', time: '09:15', location: { name: 'Madrid, Spain', lat: 40.4168, lng: -3.7038 } },
    { date: '2001-06-01', time: '15:45', location: { name: 'New York, USA', lat: 40.7128, lng: -74.006 } }
  ];

  const results = [];
  for (let i = 0; i < tests.length; i++) {
    const t = tests[i];
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: t.date, time: t.time, location: t.location, name: `Smoke ${i+1}` })
      })
      const data = await res.json();
      const ok = res.ok && data && data.summary && data.summary.sun && data.summary.moon && data.summary.ascendant;
      results.push({ test: i+1, ok, status: res.status, data });
    } catch (err) {
      results.push({ test: i+1, ok: false, error: err?.message ?? String(err) })
    }
  }

  console.log(JSON.stringify({ tests, results }, null, 2));
})();
