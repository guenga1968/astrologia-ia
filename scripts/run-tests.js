const fs = require('fs');

const TEST_CASES = JSON.parse(fs.readFileSync('./scripts/test-cases.json', 'utf8'));

const SIGN_TRANSLATIONS = {
    'Aries': 'Aries',
    'Taurus': 'Tauro',
    'Gemini': 'Géminis',
    'Cancer': 'Cancé',
    'Leo': 'Leo',
    'Virgo': 'Virgo',
    'Libra': 'Libra',
    'Scorpio': 'Escorpio',
    'Sagittarius': 'Sagitario',
    'Capricorn': 'Capricornio',
    'Aquarius': 'Acuario',
    'Pisces': 'Piscis'
};

function translateSign(sign) {
    return SIGN_TRANSLATIONS[sign] || sign;
}

async function runTests() {
  console.log(`Ejecutando ${TEST_CASES.length} pruebas...\n`);
  
  const results = {
    total: TEST_CASES.length,
    successful: 0,
    failed: 0,
    issues: [],
    charts: []
  };

  for (let i = 0; i < TEST_CASES.length; i++) {
    const tc = TEST_CASES[i];
    
    try {
      const response = await fetch('http://localhost:3000/api/calculate-chart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: tc.date,
          time: tc.time,
          location: tc.location,
          name: `Test ${i + 1}`
        })
      });

      if (!response.ok) {
        results.failed++;
        results.issues.push(`Test ${i + 1}: HTTP ${response.status}`);
        continue;
      }

      const chartData = await response.json();
      
      // Analizar la carta
      const analysis = analyzeChart(chartData, tc);
      results.charts.push(analysis);
      results.successful++;
      
      if (analysis.issues.length > 0) {
        results.issues.push(...analysis.issues.map(i => `Test ${i + 1}: ${i}`));
      }

      if ((i + 1) % 10 === 0) {
        console.log(`Completados: ${i + 1}/${TEST_CASES.length}`);
      }

    } catch (error) {
      results.failed++;
      results.issues.push(`Test ${i + 1}: ${error.message}`);
    }
  }

  // Generar reporte
  console.log('\n=== REPORTE DE PRUEBAS ===\n');
  console.log(`Total: ${results.total}`);
  console.log(`Exitosos: ${results.successful}`);
  console.log(`Fallidos: ${results.failed}`);
  
  if (results.issues.length > 0) {
    console.log('\nProblemas encontrados:');
    results.issues.forEach(issue => console.log(`  - ${issue}`));
  }

  // Análisis técnico detallado
  console.log('\n=== ANÁLISIS TÉCNICO ===\n');
  
  // Verificar elementos
  const elementDistribution = { Fuego: 0, Tierra: 0, Aire: 0, Agua: 0 };
  const modalityDistribution = { Cardinal: 0, Fijo: 0, Mutable: 0 };
  
  results.charts.forEach(chart => {
    if (chart.elements) {
      Object.entries(chart.elements).forEach(([el, count]) => {
        if (elementDistribution[el] !== undefined) {
          elementDistribution[el] += count;
        }
      });
    }
    if (chart.modalities) {
      Object.entries(chart.modalities).forEach(([mod, count]) => {
        if (modalityDistribution[mod] !== undefined) {
          modalityDistribution[mod] += count;
        }
      });
    }
  });

  console.log('Distribución de elementos (total en 100 cartas):');
  Object.entries(elementDistribution).forEach(([el, count]) => {
    console.log(`  ${el}: ${count} planetas`);
  });

  console.log('\nDistribución de modalidades (total en 100 cartas):');
  Object.entries(modalityDistribution).forEach(([mod, count]) => {
    console.log(`  ${mod}: ${count} planetas`);
  });

  // Verificar aspectos más comunes
  const aspectCounts = {};
  results.charts.forEach(chart => {
    if (chart.aspects) {
      chart.aspects.forEach(asp => {
        const key = `${asp.point1}-${asp.aspect}-${asp.point2}`;
        aspectCounts[key] = (aspectCounts[key] || 0) + 1;
      });
    }
  });

  console.log('\nAspectos más frecuentes:');
  Object.entries(aspectCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([asp, count]) => {
      console.log(`  ${asp}: ${count} veces`);
    });

  // Guardar resultados detallados
  fs.writeFileSync('./scripts/test-results.json', JSON.stringify(results, null, 2));
  console.log('\nResultados detallados guardados en scripts/test-results.json');

  return results;
}

function analyzeChart(chartData, testCase) {
  const issues = [];
  const planets = chartData.planets || [];
  const aspects = chartData.aspects || [];
  
  // Traducir signos de planetas
  planets.forEach(p => {
    p.sign = translateSign(p.sign);
  });
  
  // Traducir signos en aspectos también
  aspects.forEach(a => {
    a.point1 = translateSign(a.point1) || a.point1;
    a.point2 = translateSign(a.point2) || a.point2;
  });
  
  // 1. Extraer Sol, Luna, Ascendente
  const sun = planets.find(p => p.name === 'Sol');
  const moon = planets.find(p => p.name === 'Luna');
  const asc = planets.find(p => p.name === 'Ascendente');
  const mc = planets.find(p => p.name === 'Medio Cielo');
  
  // 2. Obtener regente del Ascendente
  const ascSign = asc?.sign;
  const rulers = {
    'Aries': 'Marte',
    'Tauro': 'Venus',
    'Géminis': 'Mercurio',
    'Cancé': 'Luna',
    'Cancér': 'Luna',
    'Leo': 'Sol',
    'Virgo': 'Mercurio',
    'Libra': 'Venus',
    'Escorpio': 'Plutón',
    'Sagitario': 'Júpiter',
    'Capricornio': 'Saturno',
    'Acuario': 'Urano',
    'Piscis': 'Neptuno'
  };
  const ascRuler = rulers[ascSign];
  const rulerPlanet = planets.find(p => p.name === ascRuler);
  
  // 3. Calcular elementos
  const elements = { Fuego: 0, Tierra: 0, Aire: 0, Agua: 0 };
  const signElements = {
    'Aries': 'Fuego', 'Leo': 'Fuego', 'Sagitario': 'Fuego',
    'Tauro': 'Tierra', 'Virgo': 'Tierra', 'Capricornio': 'Tierra',
    'Géminis': 'Aire', 'Libra': 'Aire', 'Acuario': 'Aire',
    'Cáncer': 'Agua', 'Escorpio': 'Agua', 'Piscis': 'Agua'
  };
  
  const traditionalPlanets = ['Sol', 'Luna', 'Mercurio', 'Venus', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno', 'Plutón'];
  
  planets.forEach(p => {
    if (traditionalPlanets.includes(p.name)) {
      const el = signElements[p.sign];
      if (el) elements[el]++;
    }
  });
  
  // 4. Calcular modalidades
  const modalities = { Cardinal: 0, Fijo: 0, Mutable: 0 };
  const signModalities = {
    'Aries': 'Cardinal', 'Cancé': 'Cardinal', 'Libra': 'Cardinal', 'Capricornio': 'Cardinal',
    'Tauro': 'Fijo', 'Leo': 'Fijo', 'Escorpio': 'Fijo', 'Acuario': 'Fijo',
    'Géminis': 'Mutable', 'Virgo': 'Mutable', 'Sagitario': 'Mutable', 'Piscis': 'Mutable'
  };
  
  // Corregir ключ
  const modMap = {
    'Aries': 'Cardinal', 'Cáncer': 'Cardinal', 'Libra': 'Cardinal', 'Capricornio': 'Cardinal',
    'Tauro': 'Fijo', 'Leo': 'Fijo', 'Escorpio': 'Fijo', 'Acuario': 'Fijo',
    'Géminis': 'Mutable', 'Virgo': 'Mutable', 'Sagitario': 'Mutable', 'Piscis': 'Mutable'
  };
  
  planets.forEach(p => {
    if (traditionalPlanets.includes(p.name)) {
      const mod = modMap[p.sign];
      if (mod) modalities[mod]++;
    }
  });
  
  // 5. Verificar consistencia de aspectos
  const majorAspects = aspects.filter(a => 
    ['Conjunción', 'Oposición', 'Cuadratura', 'Trígono', 'Sextil'].includes(a.aspect)
  );
  
  // 6. Verificar regente
  if (!rulerPlanet) {
    issues.push(`Regente ${ascRuler} no encontrado para Ascendente en ${ascSign}`);
  }
  
  return {
    testCase,
    sun: sun ? { sign: sun.sign, house: sun.house, degree: sun.degree } : null,
    moon: moon ? { sign: moon.sign, house: moon.house, degree: moon.degree } : null,
    asc: asc ? { sign: asc.sign, house: asc.house, degree: asc.degree } : null,
    mc: mc ? { sign: mc.sign, house: mc.house } : null,
    ascRuler,
    rulerPlanet: rulerPlanet ? { sign: rulerPlanet.sign, house: rulerPlanet.house } : null,
    elements,
    modalities,
    aspects: majorAspects.map(a => `${a.point1} ${a.aspect} ${a.point2} (${a.orb})`),
    issues
  };
}

runTests().catch(console.error);
