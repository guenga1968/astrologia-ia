const fetch = typeof globalThis.fetch === 'function' ? globalThis.fetch : require('node-fetch');

(async () => {
  const tests = [
    { date: '1990-04-22', time: '12:00', location: { name: 'Rosario, Argentina', lat: -32.947, lng: -60.65 } },
    { date: '1989-07-12', time: '09:15', location: { name: 'Madrid, Spain', lat: 40.4168, lng: -3.7038 } },
    { date: '2005-11-11', time: '16:30', location: { name: 'New York, USA', lat: 40.7128, lng: -74.006 } }
  ];

  const results = [];
  const endpoint = 'https://astrologia-one.vercel.app/api/calculate-chart';

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
    } catch (err) {
      results.push({ test: i + 1, error: err?.message ?? String(err) });
    }
  }

  console.log(JSON.stringify({ tests, results }, null, 2));
})();
