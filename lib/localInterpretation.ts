export const SIGN_ELEMENTS: Record<string, 'Fuego' | 'Tierra' | 'Aire' | 'Agua'> = {
    'Aries': 'Fuego', 'Leo': 'Fuego', 'Sagitario': 'Fuego',
    'Tauro': 'Tierra', 'Virgo': 'Tierra', 'Capricornio': 'Tierra', 'Capricorn': 'Tierra', 'Capricórnio': 'Tierra',
    'Géminis': 'Aire', 'Geminis': 'Aire', 'Gémini': 'Aire', 'Libra': 'Aire', 'Acuario': 'Aire',
    'Cáncer': 'Agua', 'Cancer': 'Agua', 'Cancé': 'Agua', 'Cádiz': 'Agua', 'Escorpio': 'Agua', 'Piscis': 'Agua'
};

export const SIGN_MODALITIES: Record<string, 'Cardinal' | 'Fijo' | 'Mutable'> = {
    'Aries': 'Cardinal', 'Cancer': 'Cardinal', 'Cancé': 'Cardinal', 'Cádiz': 'Cardinal', 'Cáncer': 'Cardinal', 'Libra': 'Cardinal', 'Capricornio': 'Cardinal', 'Capricorn': 'Cardinal', 'Capricórnio': 'Cardinal',
    'Tauro': 'Fijo', 'Leo': 'Fijo', 'Escorpio': 'Fijo', 'Acuario': 'Fijo',
    'Géminis': 'Mutable', 'Geminis': 'Mutable', 'Gémini': 'Mutable', 'Virgo': 'Mutable', 'Sagitario': 'Mutable', 'Piscis': 'Mutable'
};

export const SIGN_POLARITIES: Record<string, 'Yang' | 'Yin'> = {
    'Aries': 'Yang', 'Leo': 'Yang', 'Sagitario': 'Yang',
    'Tauro': 'Yin', 'Virgo': 'Yin', 'Capricornio': 'Yin',
    'Géminis': 'Yang', 'Libra': 'Yang', 'Acuario': 'Yang',
    'Cáncer': 'Yin', 'Escorpio': 'Yin', 'Piscis': 'Yin'
};

export const SIGN_RULERS: Record<string, string> = {
    'Aries': 'Marte',
    'Tauro': 'Venus',
    'Géminis': 'Mercurio',
    'Cáncer': 'Luna',
    'Leo': 'Sol',
    'Virgo': 'Mercurio',
    'Libra': 'Venus',
    'Escorpio': 'Marte/Plutón',
    'Sagitario': 'Júpiter',
    'Capricornio': 'Saturno',
    'Acuario': 'Saturno/Urano',
    'Piscis': 'Júpiter/Neptuno'
};

const SIGN_TRANSLATIONS: Record<string, string> = {
    'Aries': 'Aries',
    'Taurus': 'Tauro',
    'Gemini': 'Géminis',
    'Cancer': 'Cáncer',
    'Cáncer': 'Cáncer',
    'Leo': 'Leo',
    'Virgo': 'Virgo',
    'Libra': 'Libra',
    'Scorpio': 'Escorpio',
    'Sagittarius': 'Sagitario',
    'Capricorn': 'Capricornio',
    'Aquarius': 'Acuario',
    'Pisces': 'Piscis'
};

function translateSign(sign: string): string {
    return SIGN_TRANSLATIONS[sign] || sign;
}

export const SIGN_THREE_WORDS: Record<string, string> = {
    'Aries': 'Valiente • Directa • Pionera',
    'Tauro': 'Estable • Sensual • Perseverante',
    'Géminis': 'Curiosa • Versátil • Comunicativa',
    'Cáncer': 'Protectora • Intuitiva • Nutricia',
    'Leo': 'Radiante • Generosa • Creativa',
    'Virgo': 'Analítica • Detallista • Servicial',
    'Libra': 'Armónica • Diplomática • Sociable',
    'Escorpio': 'Profunda • Intuitiva • Transformadora',
    'Sagitario': 'Aventurera • Optimista • Sabia',
    'Capricornio': 'Ambiciosa • Disciplinada • Persistente',
    'Acuario': 'Original • Independiente • Visionaria',
    'Piscis': 'Sensible • Compasiva • Espiritual'
};

export const SIGN_ESSENCE_DESCRIPTIONS: Record<string, string> = {
    'Aries': 'Tenés una personalidad enérgica y decidida, con una capacidad natural para abrir caminos donde otros ven obstáculos. Tu energía es contagiosa: la gente siente tu impulso y coraje, aunque a veces tu impaciencia pueda tomar el mando.',
    'Tauro': 'Tenés una personalidad estable y sensorial, con una capacidad única para construir valor y disfrutar de la belleza de la vida. Tu energía es calma y segura: los demás saben que sos un pilar de confianza, aunque te cueste soltar lo conocido.',
    'Géminis': 'Tenés una personalidad ágil y curiosa, con una capacidad increíble para conectar ideas y personas. Tu energía es liviana y vibrante: siempre tenés algo interesante que decir, aunque tu mente a veces se disperse en mil direcciones.',
    'Cáncer': 'Tenés una personalidad protectora y sensible, con una capacidad natural para cuidar y nutrir lo que amás. Tu energía es acogedora: los demás se sienten seguros a tu lado, aunque tu vulnerabilidad te lleve a construir caparazones.',
    'Leo': 'Tenés una personalidad radiante y creativa, con una capacidad única para inspirar y liderar desde el corazón. Tu energía es cálida y magnética: naciste para brillar, aunque necesites aprender que no siempre el foco debe estar sobre vos.',
    'Virgo': 'Tenés una personalidad analítica y detallista, con una capacidad asombrosa para mejorar el mundo a través del servicio. Tu energía es precisa y eficiente: nada se te escapa, aunque tu autocrítica pueda ser tu peor enemiga.',
    'Libra': 'Tenés una personalidad armónica y diplomática, con una capacidad natural para encontrar el equilibrio en cualquier situación. Tu energía es encantadora: buscás la justicia y el vínculo, aunque a veces te cueste decidir por miedo a romper la paz.',
    'Escorpio': 'Tienes una personalidad emocionalmente intensa y perceptiva, con una capacidad única para entender lo que otros no ven o no dicen. Tu energía es cálida pero misteriosa: la gente siente que pueden confiarte sus secretos, pero no siempre saben qué hay detrás de tu mirada.',
    'Sagitario': 'Tenés una personalidad aventurera y expansiva, con una capacidad única para encontrar sentido y propósito en todo lo que vivís. Tu energía es entusiasta: inspirás a otros a crecer, aunque a veces tu falta de límites te haga perder el rumbo.',
    'Capricornio': 'Tenés una personalidad ambiciosa y disciplinada, con una capacidad asombrosa para construir estructuras que perduran en el tiempo. Tu energía es seria y sólida: sos quien concreta los sueños, aunque te cueste mostrar tu lado más blando.',
    'Acuario': 'Tenés una personalidad original e independiente, con una capacidad única para ver el futuro antes que el resto. Tu energía es innovadora: no encajás en moldes y eso es tu mayor don, aunque a veces parezcas distante para los demás.',
    'Piscis': 'Tenés una personalidad sensible y espiritual, con una capacidad increíble para conectar con lo invisible y lo poético de la vida. Tu energía es compasiva: sentís el dolor ajeno como propio, aunque a veces te pierdas en tus propios sueños.'
};

/**
 * Función legacy que redirige a la nueva lógica de interpretación.
 */
export function getLocalInterpretation(planets: any[], houses: any[], aspects: any[], userInfo: any) {
    return generateInterpretation({ planets, houses, aspects }, userInfo);
}

/**
 * Genera una interpretación completa y detallada de la carta natal en formato Markdown.
 */
export function generateInterpretation(chartData: any, userInfo: any) {
    const planets = (chartData.planets || []).map((p: any) => ({
        ...p,
        sign: translateSign(p.sign)
    }));
    const houses = chartData.houses || [];
    const aspects = chartData.aspects || [];
    const metadata = userInfo?.metadata || {};

    const sun = planets.find((p: any) => p.name === 'Sol');
    const moon = planets.find((p: any) => p.name === 'Luna');
    const asc = planets.find((p: any) => p.name === 'Ascendente' || p.name === 'ASC');
    const mc = planets.find((p: any) => p.name === 'Medio Cielo' || p.name === 'MC');
    const mercury = planets.find((p: any) => p.name === 'Mercurio');
    const venus = planets.find((p: any) => p.name === 'Venus');
    const mars = planets.find((p: any) => p.name === 'Marte');
    const jupiter = planets.find((p: any) => p.name === 'Júpiter');
    const saturn = planets.find((p: any) => p.name === 'Saturno');
    const uranus = planets.find((p: any) => p.name === 'Urano');
    const neptune = planets.find((p: any) => p.name === 'Neptuno');
    const pluto = planets.find((p: any) => p.name === 'Plutón');

    // Título y Encabezado
    let md = `# 🌌 CARTA NATAL DE ${userInfo?.name?.toUpperCase() || 'VIAJERO ESTELAR'}\n`;
    md += `📅 ${metadata.birthDate || ''} | ⏰ ${metadata.birthTime || ''} | 📍 ${metadata.birthLocation || ''}\n`;
    md += `(Sistema ${metadata.houseSystem || 'Placidus'}, Zodíaco ${metadata.zodiacType || 'Tropical'})\n\n`;

    // ===============================
    // 🔑 TU ESENCIA EN 3 PALABRAS
    // ===============================
    md += `## 🔑 TU ESENCIA EN 3 PALABRAS\n`;
    if (sun) {
        const words = SIGN_THREE_WORDS[sun.sign] || 'Única • Compleja • Evolutiva';
        const essence = SIGN_ESSENCE_DESCRIPTIONS[sun.sign] || 'Tenés una personalidad única que mezcla diversas energías astrales.';
        md += `**${words}**\n\n`;
        md += `${essence}\n\n`;
    }

    md += `---\n\n`;

    // ===============================
    // 🌊 TU "FÓRMULA" EMOCIONAL
    // ===============================
    md += `## 🌊 TU "FÓRMULA" EMOCIONAL\n\n`;

    if (sun) {
        const sunMsg = getSimplePlanetDescription('Sol', sun.sign);
        md += `☀ **Sol en ${sun.sign} (Casa ${sun.house})**\n`;
        md += `*Quién sos en el fondo:* Una persona con ${sunMsg.meaning.toLowerCase()}. No te conformás con respuestas superficiales; buscás la verdad y la intensidad en todo lo que hacés.\n\n`;
    }

    if (moon) {
        const moonMsg = getSimplePlanetDescription('Luna', moon.sign);
        md += `🌙 **Luna en ${moon.sign} (Casa ${moon.house})**\n`;
        md += `*Lo que necesitás para estar bien:* ${moonMsg.need.replace(/^\w/, (c: string) => c.toUpperCase())}. Tu mundo emocional necesita este espacio para estar en equilibrio.\n\n`;
    }

    if (asc) {
        const ascMsg = getSimplePlanetDescription('Ascendente', asc.sign);
        md += `⬆ **Ascendente en ${asc.sign}**\n`;
        md += `*Tu "traje" ante el mundo:* Proyectás una imagen de ${ascMsg.meaning.toLowerCase()}. Es como tu vehículo para moverte en la vida: otros ven esta superficie antes de conocer tu profundidad.\n\n`;
    }

    // SÍNTESIS
    if (sun && moon && asc) {
        const elements = [SIGN_ELEMENTS[sun.sign], SIGN_ELEMENTS[moon.sign], SIGN_ELEMENTS[asc.sign]].filter(Boolean);
        const uniqueElements = [...new Set(elements)];

        let synthesisText;
        if (uniqueElements.length === 1) {
            const element = uniqueElements[0];
            const characteristic = element === 'Fuego' ? 'activa y apasionada' : element === 'Tierra' ? 'concreta y estable' : element === 'Aire' ? 'mental y comunicativa' : 'sensible e intuitiva';
            synthesisText = `Tenés una combinación pura de ${element.toLowerCase()}: esto potencia enormemente tu naturaleza ${characteristic}. Sos una persona con una coherencia interna asombrosa, aunque el desafío sea no desequilibrarte por exceso de esa misma energía.`;
        } else {
            const hasAir = elements.includes('Aire');
            const hasFire = elements.includes('Fuego');
            const hasWater = elements.includes('Agua');
            const hasEarth = elements.includes('Tierra');
            
            let powerType = 'energética';
            if (hasAir && !hasFire && !hasWater) powerType = 'visionaria y mental';
            else if (hasWater && !hasFire) powerType = 'emocional e intuitiva';
            else if (hasFire && !hasAir) powerType = 'emocional y apasionada';
            else if (hasEarth) powerType = 'práctica y transformadora';
            
            synthesisText = `Tenés una combinación de ${elements.join(', ').toLowerCase()}. Esto significa que sentís con mucha fuerza, pero sabés cómo canalizar esa energía para transformar tu realidad. Sos pura potencia ${powerType} en acción.`;
        }

        md += `> **SÍNTESIS:** ${synthesisText}\n\n`;
    }

    md += `---\n\n`;

    // ===============================
    // 🧠 CÓMO FUNCIONA TU MENTE
    // ===============================
    if (mercury) {
        md += `## 🧠 CÓMO FUNCIONA TU MENTE\n`;
        md += `**Mercurio en ${mercury.sign} (Casa ${mercury.house})**\n`;

        const mercurySignMessages: Record<string, string> = {
            'Aries': 'Piensas con mucha velocidad y directividad. Tu estilo mental es impulsivo y pionero; no te gusta perder tiempo en rodeos. Tu fuerza está en la acción mental rápida.',
            'Tauro': 'Tenés una mente práctica, persistente y muy concreta. Una vez que captás una idea, la madurás con paciencia hasta que tiene una utilidad real.',
            'Géminis': 'Tu mente es una máquina de procesar información. Sos versátil, curioso y tenés una capacidad increíble para conectar temas que parecen no tener relación.',
            'Cáncer': 'Tu estilo mental es intuitivo y está muy teñido por tus afectos. No solo pensás las cosas: las sentís. Tu memoria emocional es tu gran herramienta.',
            'Leo': 'Tu mente es creativa y dramática. Te gusta pensar en grande y que tus ideas tengan un impacto visible. Sos un comunicador nato que inspira.',
            'Virgo': 'Tenés una mente analítica, lógica y extremadamente detallista. Ves lo que otros pasan por alto y buscás la perfección en cada razonamiento.',
            'Libra': 'Tu estilo mental busca el equilibrio y la armonía. Antes de decidir, pesás todos los ángulos para ser justo, aunque eso a veces te genere indecisión.',
            'Escorpio': 'Tenés una mente penetrante, profunda e investigadora. No te conformás con la superficie; querés llegar al fondo de los misterios y las verdades ocultas.',
            'Sagitario': 'Tu mente es filosófica, optimista y siempre busca la "gran verdad". Te aburre el detalle técnico si no tiene un propósito mayor o expansivo.',
            'Capricornio': 'Tu estilo mental es estructurado, pragmático y orientado a resultados. Sos un estratega nato que sabe planificar a largo plazo con disciplina.',
            'Acuario': 'Tenés una mente original, rebelde y visionaria. Pensás fuera de la caja y no te importa ir contra la corriente si creés en tu verdad.',
            'Piscis': 'Tu mente es poética, intuitiva y muy sensible. Captás el ambiente de manera casi telepática, aunque a veces te cueste bajar las ideas a tierra.'
        };

        md += `*Tu estilo mental:* ${mercurySignMessages[mercury.sign] || `Opera según la energía de ${mercury.sign}.`}\n\n`;

        const mercuryAspects = aspects.filter((a: any) => a.point1 === 'Mercurio' || a.point2 === 'Mercurio').slice(0, 2);
        if (mercuryAspects.length > 0) {
            md += `*Dato clave:* `;
            mercuryAspects.forEach((a: any, i: number) => {
                const other = a.point1 === 'Mercurio' ? a.point2 : a.point1;
                const aspectMessages: Record<string, string> = {
                    'Sol': 'tus ideas están muy alineadas con tu identidad.',
                    'Luna': 'tu pensamiento y tu emoción están profundamente conectados.',
                    'Marte': 'tu palabra tiene mucha fuerza y determinación.',
                    'Saturno': 'sos extremadamente riguroso y serio con tus procesos mentales.',
                    'Urano': 'tenés chispazos de genialidad e ideas muy adelantadas a tu época.',
                    'Neptuno': 'tu imaginación no tiene límites y sos muy creativo.',
                    'Plutón': 'tenés una capacidad de análisis psicológico muy aguda.'
                };
                md += (aspectMessages[other] || `la relación con ${other} le da un tono especial a tu comunicación`) + (i < mercuryAspects.length - 1 ? ' Además, ' : '');
            });
            md += `\n\n`;
        }
        md += `---\n\n`;
    }

    // ===============================
    // 🔥 TU ENERGÍA Y ACCIÓN
    // ===============================
    if (mars) {
        md += `## 🔥 TU ENERGÍA Y ACCIÓN\n`;
        md += `**Marte en ${mars.sign} (Casa ${mars.house})**\n`;

        const marsSignMessages: Record<string, string> = {
            'Aries': 'Sos pura potencia y decisión. Cuando querés algo, vas directo al grano sin dudar. Tu desafío es aprender que a veces la paciencia también es una acción.',
            'Tauro': 'Tu motor es la perseverancia. No sos de arranques rápidos, pero una vez que te ponés en marcha, nada te frena hasta que lográs el objetivo material.',
            'Géminis': 'Tu acción es versátil y se mueve a través de la comunicación. Te gusta hacer varias cosas a la vez y tu energía se activa con el intercambio de ideas.',
            'Cáncer': 'Tu energía se mueve por la emoción. Sos un defensor incansable de lo que amás, aunque tu forma de actuar puede ser indirecta para protegerte.',
            'Leo': 'Actuás con pasión y te gusta que tus logros sean reconocidos. Sos generoso con tu esfuerzo y tenés un liderazgo natural que otros siguen.',
            'Virgo': 'Tu energía se canaliza a través de la eficiencia y el orden. Actuás con precisión y te sentís productivo cuando podés mejorar o arreglar algo.',
            'Libra': 'Buscás la armonía antes de actuar. Tu energía se activa en los vínculos y en la búsqueda de justicia, evitando el conflicto directo siempre que podés.',
            'Escorpio': 'Tu acción es intensa, estratégica y transformadora. Cuando te comprometés con algo, lo hacés con profundidad absoluta y una voluntad inquebrantable.',
            'Sagitario': 'Sos un buscador de aventuras. Tu energía es entusiasta y expansiva; necesitás libertad para actuar y un propósito que te inspire.',
            'Capricornio': 'Tu energía es disciplinada, ambiciosa y muy resistente. Sos un maratonista que sabe dosificar su fuerza para llegar a la cima de la montaña.',
            'Acuario': 'Actuás de manera independiente y poco convencional. Tu energía se activa cuando podés innovar o luchar por una causa que beneficie a muchos.',
            'Piscis': 'Tu forma de actuar es sutil, intuitiva y a veces errática. Te movés mejor cuando sentís que tu acción tiene un sentido espiritual o compasivo.'
        };

        md += `*Cómo usas tu fuerza:* ${marsSignMessages[mars.sign] || `Se manifiesta a través de ${mars.sign}.`}\n\n`;
        md += `---\n\n`;
    }

    // ===============================
    // 💕 CÓMO AMÁS Y QUÉ NECESITÁS EN PAREJA
    // ===============================
    if (venus) {
        md += `## 💕 CÓMO AMÁS Y QUÉ NECESITÁS EN PAREJA\n`;
        md += `**Venus en ${venus.sign} (Casa ${venus.house})**\n`;

        const venusSignMessages: Record<string, string> = {
            'Aries': 'En el amor sos apasionado, directo y te gustan los desafíos. Necesitás que la relación mantenga la chispa y la aventura para no aburrirte.',
            'Tauro': 'Buscás seguridad, estabilidad y disfrute sensorial. Para vos, el amor entra por los sentidos y necesitás tiempo y compromiso real para entregarte.',
            'Géminis': 'Necesitás una conexión mental antes que nada. El amor para vos es conversación, juego y curiosidad compartida; te atrae la inteligencia.',
            'Cáncer': 'Buscás calidez, pertenencia y protección. Tu forma de amar es nutricia y necesitás sentir que tu pareja es un refugio seguro para tu corazón.',
            'Leo': 'Amás con generosidad y te gusta sentirte admirado. Para vos el amor es un escenario de brillo y romance; necesitás pasión y reconocimiento.',
            'Virgo': 'Tu forma de amar es servicial y atenta a los detalles. Valorás la inteligencia y la practicidad; demostrás tu afecto a través de los pequeños actos de cuidado.',
            'Libra': 'Buscás la belleza, el equilibrio y el romanticismo clásico. No tolerás los malos tratos y necesitás una relación donde el "nosotros" sea lo principal.',
            'Escorpio': 'Sos de "todo o nada" en el amor. Buscás una conexión profunda, intensa y transformadora que te haga sentir vivo en cada nivel.',
            'Sagitario': 'Valorás la libertad y la expansión en pareja. Necesitás a alguien que sea tu compañero de aventuras y que comparta tu visión del mundo.',
            'Capricornio': 'Sos serio, responsable y buscás relaciones con futuro. No te interesan los romances pasajeros; querés construir una base sólida y estable.',
            'Acuario': 'Buscás una pareja que sea, ante todo, tu mejor amigo. Valorás la independencia, la originalidad y los vínculos que no te asfixien.',
            'Piscis': 'Tu forma de amar es romántica, idealista y muy entregada. Buscás una conexión espiritual y soñás con un amor que trascienda la realidad cotidiana.'
        };

        md += `*Tu forma de amar:* ${venusSignMessages[venus.sign] || `Se expresa a través de ${venus.sign}.`}\n\n`;
        md += `---\n\n`;
    }

    // ===============================
    // 💼 CAMINO PROFESIONAL
    // ===============================
    if (mc) {
        md += `## 💼 CAMINO PROFESIONAL\n`;
        md += `**Medio Cielo en ${mc.sign}**\n`;

        const mcSignMessages: Record<string, string> = {
            'Aries': 'Naciste para liderar, emprender y abrir caminos. Te sentís realizado cuando tenés autonomía y podés ser el primero en algo.',
            'Tauro': 'Tu éxito viene de la perseverancia y la construcción de valor real. Buscás estabilidad y sos excelente gestionando recursos.',
            'Géminis': 'Tu vocación está en la comunicación, el intercambio y la versatilidad. Necesitás un trabajo que estimule tu curiosidad constante.',
            'Cáncer': 'Brillás en profesiones que requieren cuidado, nutrición o protección. Tu éxito está ligado a la empatía y la conexión emocional.',
            'Leo': 'Buscás el reconocimiento y la expresión creativa. Tu camino profesional es brillar y liderar con generosidad y carisma.',
            'Virgo': 'Tu éxito reside en la eficiencia, el análisis y la mejora de sistemas. Sos el maestro del detalle y la organización productiva.',
            'Libra': 'Te destacás en la mediación, la estética y las relaciones públicas. Tu camino es crear armonía y equilibrio en entornos profesionales.',
            'Escorpio': 'Tu vocación es profunda y transformadora. Te atraen las crisis, la investigación o cualquier campo que requiera ir al fondo de las cosas.',
            'Sagitario': 'Necesitás una carrera que te brinde sentido y expansión. Filosofía, viajes o enseñanza son áreas donde tu optimismo brilla.',
            'Capricornio': 'Sos el estratega que construye imperios con paciencia. Tu éxito está garantizado por tu disciplina y tu visión a largo plazo.',
            'Acuario': 'Tu camino es la innovación y el trabajo social o tecnológico. Necesitás libertad para cuestionar lo establecido y crear el futuro.',
            'Piscis': 'Tu éxito viene de la inspiración y la sensibilidad. Brillás en campos artísticos, espirituales o de ayuda humanitaria desinteresada.'
        };

        md += `*Tu aporte al mundo:* ${mcSignMessages[mc.sign] || `Se orienta hacia la energía de ${mc.sign}.`}\n\n`;
        md += `---\n\n`;
    }

    md += generateDesafios(planets, aspects);

    /**
 * Genera desafíos personalizados basados en la carta natal.
 */
function generateDesafios(planets: any[], aspects: any[]): string {
    const DESAFIOS: string[] = [];
    
    const tenseAspects = aspects.filter((a: any) => 
        (a.aspect === 'Cuadratura' || a.aspect === 'Oposición' || a.aspect === 'Quincuncio') && a.orb < 6
    );
    
    const signDetrimentos: Record<string, string> = {
        'Sol': 'Luna',
        'Luna': 'Sol',
        'Mercurio': 'Sol',
        'Venus': 'Marte',
        'Marte': 'Venus',
        'Júpiter': 'Mercurio',
        'Saturno': 'Luna',
        'Urano': 'Luna',
        'Neptuno': 'Mercurio',
        'Plutón': 'Venus'
    };
    
    const signCaidas: Record<string, string> = {
        'Mercurio': 'Piscis',
        'Venus': 'Virgo',
        'Marte': 'Cáncer',
        'Júpiter': 'Capricornio',
        'Saturno': 'Acuario',
        'Urano': 'Tauro',
        'Neptuno': 'Piscis',
        'Plutón': 'Tauro'
    };
    
    const planetSignMap: Record<string, string> = {};
    const planetDegreeMap: Record<string, number> = {};
    planets.forEach((p: any) => {
        if (p.name && p.sign && !['Ascendente', 'Medio Cielo', 'Descendente', 'Fondo del Cielo', 'Nodo Norte', 'Nodo Sur'].includes(p.name)) {
            planetSignMap[p.name] = p.sign;
            planetDegreeMap[p.name] = p.degree;
        }
    });
    
    const planetHouseMap: Record<string, string> = {};
    planets.forEach((p: any) => {
        if (p.name && p.house) {
            planetHouseMap[p.name] = p.house;
        }
    });
    
    const houseCounts: Record<string, number> = {};
    planets.forEach((p: any) => {
        if (p.house) {
            houseCounts[p.house] = (houseCounts[p.house] || 0) + 1;
        }
    });
    
    const PRINCIPAL_PLANETS = ['Sol', 'Luna', 'Mercurio', 'Venus', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno', 'Plutón'];
    
    const signsWithPlanets: Record<string, number> = {};
    planets.forEach((p: any) => {
        if (p.sign && PRINCIPAL_PLANETS.includes(p.name)) {
            signsWithPlanets[p.sign] = (signsWithPlanets[p.sign] || 0) + 1;
        }
    });
    
    const tenseAspectsLimit = tenseAspects.slice(0, 3);
    
    for (const a of tenseAspectsLimit) {
        const p1 = a.point1;
        const p2 = a.point2;
        const sign1 = planetSignMap[p1];
        const sign2 = planetSignMap[p2];
        const deg1 = planetDegreeMap[p1] ? Math.round(planetDegreeMap[p1]) : '';
        const deg2 = planetDegreeMap[p2] ? Math.round(planetDegreeMap[p2]) : '';
        const house1 = planetHouseMap[p1];
        const house2 = planetHouseMap[p2];
        const orbInfo = a.orb ? ' (orbe: ' + a.orb.toFixed(1) + '°)' : '';
        
        let titulo = '';
        let desafio = '';
        let oportunidad = '';
        
        if (p1 === 'Luna' && p2 === 'Marte') {
            titulo = 'El tira y afloje entre emoción y acción (Luna cuadratura Marte)';
            desafio = 'Tu Luna en ' + sign1 + ' busca seguridad emocional, pero tu Marte en ' + sign2 + ' impulsa a acción inmediata. Cuando sentís que tu mundo interior está amenazado, la ira emerge como mecanismo de defensa.';
            oportunidad = 'Canalizá esta tensión en actividad física intensa. Tu capacidad de sentir profundamente Y actuar con determinación te hace un líder nato.';
        } else if (p1 === 'Venus' && p2 === 'Saturno') {
            titulo = 'El peso de las expectativas en el amor (Venus cuadratura Saturno)';
            desafio = 'Tu Venus en ' + sign1 + ' quiere expresar amor libremente, pero Saturno en ' + sign2 + ' impone estructuras y miedo al rechazo. Podés sabotear tus relaciones por miedo a no ser suficiente.';
            oportunidad = 'Esta tensión te enseña que el amor maduro requiere tiempo. Cuando superes el miedo, tus vínculos serán sólidos y duraderos.';
        } else if (p1 === 'Marte' && p2 === 'Neptuno') {
            titulo = 'Entre la acción directa y la confusión (Marte cuadratura Neptuno)';
            desafio = 'Tu Marte en ' + house1 + ' quiere actuar con fuerza, pero Neptuno en ' + sign2 + ' difumina la claridad. Podés sentir que tus acciones no generan el impacto que esperás o que otros no reconocen tu esfuerzo.';
            oportunidad = 'Aprendé a confiar más allá de lo visible. Tu intuición se vuelve tu mayor herramienta estratégica.';
        } else if (p1 === 'Sol' && p2 === 'Saturno') {
            titulo = 'La ambición chocando con estructuras (Sol cuadratura Saturno)';
            desafio = 'Tu identidad (Sol en ' + sign1 + ') choca con Saturno en ' + sign2 + '. Podés sentir que tu creatividad está limitada por estructuras externas o que tus logros no son reconocidos.';
            oportunidad = 'Esta tensión forja resiliencia extrema. Tu capacidad de construir con disciplina te lleva más lejos que el talento puro.';
        } else if (p1 === 'Mercurio' && p2 === 'Saturno') {
            titulo = 'La mente contenida (Mercurio cuadratura Saturno)';
            desafio = 'Tu mente en ' + sign1 + ' quiere expresarse, pero Saturno en ' + sign2 + ' frena la palabra. Podés sentir que tus ideas no son valoradas o que debés probar constantemente tu valía.';
            oportunidad = 'Tu comunicación gana credibilidad. Cuando hablás, la gente sabe que lo decís en serio.';
        } else if (p1 === 'Luna' && p2 === 'Saturno') {
            titulo = 'El dolor de no sentirse contenido (Luna cuadratura Saturno)';
            desafio = 'Tu mundo emocional en ' + sign1 + ' choca con restricciones Saturninas en ' + house2 + '. La necesidad de seguridad emocional compite con responsabilidades que parecen sofocar tu naturaleza.';
            oportunidad = 'Aprendés a darte vos mismo la seguridad que buscás. Tu independencia emocional se vuelve tu mayor fortaleza.';
        } else if (p1 === 'Venus' && p2 === 'Marte') {
            titulo = 'Deseo y vínculo en conflicto (Venus cuadratura Marte)';
            desafio = 'Tu forma de amar (Venus en ' + sign1 + ') y tu forma de actuar (Marte en ' + sign2 + ') están en tensión. Podés sentir atracción por personas que no son buenas para vos o conflictos constantes en las relaciones.';
            oportunidad = 'Esta tensión te enseña a integrar deseo y respeto propio. Cuando lo lográs, tu magnetismo es único.';
        } else if (p1 === 'Ascendente' && p2 === 'Medio Cielo') {
            titulo = 'La máscara y la vocación en fricción (Ascendente cuadratura Medio Cielo)';
            desafio = 'Tu imagen pública (Medio Cielo en ' + sign2 + ') no encaja con cómo te percibís (Ascendente en ' + sign1 + '). Podés sentir que debés ser alguien que no sos para tener éxito.';
            oportunidad = 'Tu camino es integrar ambas energías: autenticidad + visibilidad. Encontrarás tu espacio cuando dejes de elegir entre ser vos o destacar.';
        } else if (p1 === 'Sol' && p2 === 'Luna') {
            titulo = 'Identidad y emoción desalineadas (Sol oposición Luna)';
            desafio = 'Tu esencia (Sol en ' + sign1 + ') y tu emocionalidad (Luna en ' + sign2 + ') operan en frecuencias distintas. Podés sentir que lo que hacés no te representa emocionalmente.';
            oportunidad = 'Esta oposición te da dinamismo. Cuando integrás ambas energías, manejás tanto la acción como la sensibilidad.';
        } else if (p1 === 'Marte' && p2 === 'Saturno') {
            titulo = 'La frustración del pionero (Marte cuadratura Saturno)';
            desafio = 'Tu energía en ' + sign1 + ' quiere acción inmediata, pero Saturno en ' + sign2 + ' impone obstáculos. Podés sentir que las cosas toman más tiempo de lo que querés y frustrarte.';
            oportunidad = 'Aprendés estrategia y paciencia. Tu acción se vuelve más efectiva porque no gastás energía en lo que no podés controlar.';
        } else if (p1 === 'Luna' && p2 === 'Urano') {
            titulo = 'El caos emocional (Luna cuadratura Urano)';
            desafio = 'Tu emocionalidad en ' + sign1 + ' choca con la energía disruptiva de Urano en ' + sign2 + '. Los cambios de humor pueden ser abruptos y unpredictables.';
            oportunidad = 'Tu capacidad de adaptarte a cambios inesperados es extraordinaria. Abrís espacio para innovación en tu vida emocional.';
        } else if (p1 === 'Mercurio' && p2 === 'Marte') {
            titulo = 'Pensamiento y acción en guerra (Mercurio cuadratura Marte)';
            desafio = 'Tu mente en ' + sign1 + ' y tu acción en ' + sign2 + ' no se llevan bien. Podés pensar demasiado y no actuar, o actuar sin pensar.';
            oportunidad = 'El desafío es integrar ambos: pensá antes de actuar, pero sin paralizarte. Tu potencial está en la acción reflexiva.';
        } else if (a.aspect === 'Oposición') {
            titulo = 'Tensión entre ' + p1 + ' (' + deg1 + '° ' + sign1 + ') y ' + p2 + ' (' + deg2 + '° ' + sign2 + ')' + orbInfo;
            desafio = 'Tu ' + p1 + ' en ' + sign1 + ' y ' + p2 + ' en ' + sign2 + ' operan como polos opuestos. Tirás entre dos mundos que parecen incompatibles.';
            oportunidad = 'Esta oposición te da acceso a dos realidades. Tu tarea es encontrar el punto medio que integre ambas energías.';
        } else {
            titulo = 'Tensión entre ' + p1 + ' (' + deg1 + '° ' + sign1 + ') y ' + p2 + ' (' + deg2 + '° ' + sign2 + ')' + orbInfo;
            desafio = 'Tu ' + p1 + ' en ' + sign1 + ' y ' + p2 + ' en ' + sign2 + ' generan fricción. Cuando ambos activos se manifiestan, surge conflicto.';
            oportunidad = 'Esta tensión te enseña a negociar entre diferentes facetas de vos mismo.';
        }

        // Consejos específicos por combinación de planetas
        let consejosEspecificos = '';
        
        const consejosPorAspecto: Record<string, { pasos: string[], oportunidad: string }> = {
            'Luna-Marte': {
                pasos: [
                    'Cuando sientas frustración, esperá 10 minutos antes de actuar',
                    'Canalizá la ira en ejercicio físico intenso',
                    'Aprendé a distinguir entre impulso e intuición'
                ],
                oportunidad: 'Esta tensión te convierte en un líder que actúa con determinación e intensidad emocional.'
            },
            'Luna-Saturno': {
                pasos: [
                    'No esperes validación emocional externa para sentir que valés',
                    'Construí tu propia seguridad interior',
                    'Permitite ser vulnerable sin juzgarte'
                ],
                oportunidad: 'Tu fuerza emocional se vuelve inquebrantable cuando encontrás tu centro interior.'
            },
            'Luna-Urano': {
                pasos: [
                    'Aceptá que los cambios de humor son parte de tu creatividad',
                    'Creá rituales emocionales flexibles',
                    'No te juzgues por sentir cosas intensas'
                ],
                oportunidad: 'Tu capacidad de adaptarte a cambios inesperados es tu mayor don.'
            },
            'Luna-Neptuno': {
                pasos: [
                    'Llevá un diario para distinguir realidad de fantasía',
                    'Verificá tus interpretaciones antes de actuar',
                    'Aprendé a confiar en vos mismo'
                ],
                oportunidad: 'Tu intuición se vuelve precisa cuando entrenás la distinción entre verdad e ilusión.'
            },
            'Luna-Plutón': {
                pasos: [
                    'Transformá el dolor en poder personal',
                    'No evités las emociones difíciles',
                    'Buscá terapia para procesar profundidades'
                ],
                oportunidad: 'Tu capacidad de transformar Crisis en crecimiento es tu superpoder.'
            },
            'Venus-Marte': {
                pasos: [
                    'Evitá atraer personas que no son buenas para vos',
                    'Integrá deseo y respeto propio',
                    'Tu magnetismo es único cuando está balanceado'
                ],
                oportunidad: 'Tu capacidad de atraer y retener está fuera de serie cuando está integrada.'
            },
            'Venus-Saturno': {
                pasos: [
                    'No lasciés que el miedo al rechazo sabotee tus vínculos',
                    'El amor maduro requiere tiempo y paciencia',
                    'Vos mereces amor seguro y estable'
                ],
                oportunidad: 'Construís relaciones que duran porque valorás la profundidad sobre lo superficial.'
            },
            'Venus-Urano': {
                pasos: [
                    'Evitá comprometerte muy rápido en relaciones',
                    'Buscá pareja que valore su independencia y la tuya',
                    'Las relaciones innovadoras funcionan con comunicación clara'
                ],
                oportunidad: 'Tu libertad e intimidad pueden coexistir si encontrás el balance.'
            },
            'Venus-Neptuno': {
                pasos: [
                    'Distinguí entre amor idealizado y amor real',
                    'No ignores banderas rojas por querer ver lo mejor',
                    'El amor sano tiene pies en la tierra'
                ],
                oportunidad: 'Tu romanticismo te permite crear conexiones profundas y espirituales.'
            },
            'Mercurio-Marte': {
                pasos: [
                    'Pensá antes de hablar o actuar',
                    'Creá un espacio de reflexión antes de decidir',
                    'Tu potencial está en la acción reflexiva'
                ],
                oportunidad: 'Tu capacidad de actuar con pensamiento estratégico te diferencia de los demás.'
            },
            'Mercurio-Saturno': {
                pasos: [
                    'Tu comunicación tiene peso, usala sabiamente',
                    'Prepará tus ideas antes de presentarlas',
                    'La credibilidad se gana con consistencia'
                ],
                oportunidad: 'Cuando hablás, la gente escucha porque sabés de lo que decís.'
            },
            'Mercurio-Neptuno': {
                pasos: [
                    'Verificá tus ideas antes de actuar',
                    'Tu imaginación es poderosa pero puede confundir',
                    'Anotá las ideas y analizalas con calma'
                ],
                oportunidad: 'Tu intuición se vuelve tu mejor herramienta si la cultivás con discernimiento.'
            },
            'Sol-Saturno': {
                pasos: [
                    'Las estructuras que sentís como obstáculos son cimientos de tu éxito',
                    'La disciplina genera logros duraderos',
                    'No te compares con otros, cada uno tiene su tiempo'
                ],
                oportunidad: 'Tu capacidad de construir con disciplina te lleva más lejos que el talento puro.'
            },
            'Sol-Luna': {
                pasos: [
                    'Integrá lo que hacés con lo que sentís',
                    'Tu identidad y emocionalidad pueden trabajar juntas',
                    'Encontrá un propósito que te emocione'
                ],
                oportunidad: 'Cuando tu ser y tu sentir están alineados, irradiás autenticidad.'
            },
            'Marte-Saturno': {
                pasos: [
                    'La paciencia es tu estrategia más efectiva',
                    'Planificá antes de actuar',
                    'Los obstáculos son oportunidades de crecer'
                ],
                oportunidad: 'Tu acción disciplinada genera resultados que perduran.'
            },
            'Marte-Urano': {
                pasos: [
                    'Canalizá la impaciencia en innovación',
                    'Tomá riesgos calculados',
                    'Tu energía disruptiva puede crear cosas nuevas'
                ],
                oportunidad: 'Tu capacidad de inovar y actuar rápidamente es tu ventaja competitiva.'
            },
            'Marte-Neptuno': {
                pasos: [
                    'Verificá la realidad antes de actuar',
                    'Tu intuición es fuerte, pero complementala con datos',
                    'No te disperses en muchos proyectos a la vez'
                ],
                oportunidad: 'Tu intuición guiada por la razón se vuelve imparable.'
            },
            'Marte-Plutón': {
                pasos: [
                    'Transformá la ira en poder constructivo',
                    'Usá tu intensidad para causar cambios positivos',
                    'No te reprimas, canalizá'
                ],
                oportunidad: 'Tu capacidad de transformar realidades con tu energía es extraordinaria.'
            },
            'Júpiter-Saturno': {
                pasos: [
                    'Encontrá balance entre expandir y estructurar',
                    'Los límites son necesarios para crecer',
                    'Soñá pero con pies en la tierra'
                ],
                oportunidad: 'Tu visión amplia estructurada con acciones concretas genera éxito sostenible.'
            },
            'Júpiter-Urano': {
                pasos: [
                    'Canalizá tus visiones en planes concretos',
                    'No disperses tu energía en demasiadas direcciones',
                    'Tu visión de futuro es valiosa, compartila'
                ],
                oportunidad: 'Tu capacidad de ver el futuro y hacerlo realidad es tu mayor talento.'
            },
            'Saturno-Urano': {
                pasos: [
                    'Innová dentro de estructuras existentes',
                    'El cambio no tiene que ser radical para ser efectivo',
                    'Respetá la tradición pero también cuestioná lo obsoleto'
                ],
                oportunidad: 'Tu capacidad de modernizar lo existente sin destruirlo es invaluable.'
            },
            'Saturno-Neptuno': {
                pasos: [
                    'Encontrá el balance entre idealismo y pragmatismo',
                    'Tus sueños necesitan un plan para realizarse',
                    'No sacrifices tus valores por lo práctico'
                ],
                oportunidad: 'Podés hacer que los sueños se concreten con estructura y persistencia.'
            },
            'Ascendente-Medio Cielo': {
                pasos: [
                    'Integrá quién sos con qué aportás al mundo',
                    'No elegías entre autenticidad y éxito',
                    'Tu camino único es tu mayor regalo'
                ],
                oportunidad: 'Tu autenticidad y tu éxito pueden ir de la mano cuando los integrás.'
            },
            'Sol-Plutón': {
                pasos: [
                    'Transformá tu identidad a través de crisis',
                    'Tu poder está en tu capacidad de renacer',
                    'No temas los cambios profundos'
                ],
                oportunidad: 'Tu capacidad de reinventarte constantemente es tu mayor fortaleza.'
            }
        };

        const claveAspecto = p1 + '-' + p2;
        const claveInversa = p2 + '-' + p1;
        const consejos = consejosPorAspecto[claveAspecto] || consejosPorAspecto[claveInversa];
        let oportunidadFinal = oportunidad;

        if (consejos) {
            consejosEspecificos = '\n*Cómo superarlo:*\n' + consejos.pasos.map(p => '- ' + p).join('\n');
            if (consejos.oportunidad) {
                oportunidadFinal = consejos.oportunidad;
            }
        } else {
            consejosEspecificos = '\n*Cómo superarlo:*\n- Identificá los disparadores específicos donde esta tensión emerge\n- Creá una estrategia diferente para cada contexto\n- Buscá mentor o terapia para trabajar la integración';
        }
        
        DESAFIOS.push('**' + titulo + '**\n\n*Desafío:* ' + desafio + consejosEspecificos + '\n\n*Oportunidad oculta:* ' + oportunidadFinal);
    }
    
    for (const [planet, detrimento] of Object.entries(signDetrimentos)) {
        if (planetSignMap[planet] === detrimento) {
            DESAFIOS.push('**' + planet + ' en signo de detrimento (' + detrimento + ')**\n\n*Desafío:* Tu ' + planet + ' está en ' + detrimento + ', su signo de detrimento. Esto significa que la energía natural del planeta opera en un territorio incómodo para vos. Podés sentir frustración al expresar esta energía.\n\n*Cómo superarlo:*\n- Aceptá que ciertas cosas no van a ser fáciles con este planeta\n- Buscá formas alternativas de expresar esta energía\n- No te compares con otros que tienen este planeta en signos fuertes\n\n*Oportunidad oculta:* Dominar un planeta en detrimento te da una perspectiva única y una fortaleza que otros no tienen.');
        }
    }
    
    for (const [planet, cada] of Object.entries(signCaidas)) {
        if (planetSignMap[planet] === cada) {
            DESAFIOS.push('**' + planet + ' en signo de caída (' + cada + ')**\n\n*Desafío:* Tu ' + planet + ' está en ' + cada + ', su signo de caída. Esta posición representa un territorio donde la energía del planeta pierde su fuerza natural. Podés sentir que no sabés cómo manejar este aspecto de tu vida.\n\n*Cómo superarlo:*\n- No forcés la expresión directa de esta energía\n- Encontrá simbolismos y prácticas que te permitan expresar esta energía de formas no convencionales\n- Aceptá que este es un área de aprendizaje de por vida\n\n*Oportunidad oculta:* Trabajar con un planeta caído te da una humildad y perspicacia que se convierte en sabiduría profunda.');
        }
    }
    
    for (const [sign, count] of Object.entries(signsWithPlanets)) {
        if (count >= 3) {
            const elementBySign: Record<string, string> = {
                'Aries': 'Fuego',
                'Leo': 'Fuego',
                'Sagitario': 'Fuego',
                'Tauro': 'Tierra',
                'Virgo': 'Tierra',
                'Capricornio': 'Tierra',
                'Géminis': 'Aire',
                'Libra': 'Aire',
                'Acuario': 'Aire',
                'Cáncer': 'Agua',
                'Escorpio': 'Agua',
                'Piscis': 'Agua'
            };

            const stelliumPorElemento: Record<string, { desafio: string, pasos: string[], oportunidad: string }> = {
                'Fuego': {
                    desafio: 'Tu energía es explosiva y pionera. Tenés una capacidad única para iniciar proyectos y motivar a otros, pero puede resultar abrumadora para quienes te rodean.',
                    pasos: [
                        'Canalizá tu intensidad en liderazgo y proyectos propios',
                        'Aprendé a modular tu energía según el contexto',
                        'Permití que otros te sigan sin forzarlos'
                    ],
                    oportunidad: 'Tu carisma inspirador puede mover montañas. Las personas se sienten atraídas por tu pasión.'
                },
                'Tierra': {
                    desafio: 'Tu energía es práctica y constructiva. Tenés una capacidad única para crear valor tangible, pero podés caer en rigidez o obsesión con lo material.',
                    pasos: [
                        'Manifestá tu energía en trabajo tangible y útil',
                        'Permitite flexibilidad cuando las cosas no salen como esperás',
                        'No te pierdas en detalles, mirá el panorama general'
                    ],
                    oportunidad: 'Tu capacidad de construir cosas que duran es extraordinaria. Dejá tu huella en el mundo.'
                },
                'Aire': {
                    desafio: 'Tu energía es mental y comunicativa. Tenés una capacidad única para conectar ideas y personas, pero podés dispersarte o tornar superficial.',
                    pasos: [
                        'Expresá tus ideas con acciones concretas',
                        'Conectá con otros pero también profundizá en vos mismo',
                        'Evitá hablar mucho sin hacer'
                    ],
                    oportunidad: 'Tu mente brillante puede innovar y crear conexiones valiosas. Sos el puente entre mundos.'
                },
                'Agua': {
                    desafio: 'Tu energía es emocional e intuitiva. Sentís todo profundamente y tenés una capacidad única de transformación, pero podés perderte en tus emociones.',
                    pasos: [
                        'Expresá tus emociones de forma saludable',
                        'Cuidá tu intuición pero verificá con la razón',
                        'Aprendé a poner límites sin cerrarte'
                    ],
                    oportunidad: 'Tu profundidad emocional te permite conectar genuinamente con otros y transformar realidades.'
                }
            };

            const elemento = elementBySign[sign] || 'Fuego';
            const info = stelliumPorElemento[elemento];

            DESAFIOS.push('**Stellium en ' + sign + ' (' + count + ' planetas)** - Energía de ' + elemento + '\n\n*Desafío:* Tenés ' + count + ' planetas concentrados en ' + sign + '. ' + info.desafio + '\n\n*Cómo superarlo:*\n' + info.pasos.map(p => '- ' + p).join('\n') + '\n\n*Oportunidad oculta:* ' + info.oportunidad);
        }
    }
    
    const emptyHouses = [];
    const allHouses = ['Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta', 'Sexta', 'Séptima', 'Octava', 'Novena', 'Décima', 'Undécima', 'Duodécima'];
    for (const house of allHouses) {
        if (!houseCounts[house]) {
            emptyHouses.push(house);
        }
    }
    
    if (emptyHouses.length >= 3) {
        DESAFIOS.push('**' + emptyHouses.length + ' casas vacías: ' + emptyHouses.slice(0, 3).join(', ') + '**\n\n*Desafío:* Tenés ' + emptyHouses.length + ' casas sin planetas (' + emptyHouses.join(', ') + '). Estas áreas de vida pueden parecer menos desarrolladas o requerir más esfuerzo consciente para cultivar.\n\n*Cómo superarlo:*\n- No ignores estas áreas porque "no vienen naturalmente"\n- Son espacios en blanco donde PODÉS elegir quién ser\n- Buscá modelos o mentores que te inspiren en estas áreas\n\n*Oportunidad oculta:* Las casas vacías son territorios de libre albedrío. No estás condicionado por patrones planetarios, podés crear tu propio camino.');
    }
    
    const heavyHouses = Object.entries(houseCounts).filter(([_, count]) => count >= 3);
    for (const [house, count] of heavyHouses) {
        DESAFIOS.push('**Casa ' + house + ' sobrecargada (' + count + ' planetas)**\n\n*Desafío:* Tenés ' + count + ' planetas en la Casa ' + house + '. Esta área de tu vida recibe energía constante y puede dominar tu atención, a veces en exceso.\n\n*Cómo superarlo:*\n- Sé consciente de cuándo estás sobre-enfocando en esta área\n- Buscá equilibrar la distribución de tu energía hacia otras casas\n- Esta energía es fuerte: usala sabiamente\n\n*Oportunidad oculta:* Esta casa es tu zona de máximo impacto. Cuando la dominés, se convierte en tu mayor contribución al mundo.');
    }
    
    const limit = Math.min(5, DESAFIOS.length);
    let result = '## ⚠️ DESAFÍOS (y cómo superarlos)\n\n';
    
    if (DESAFIOS.length === 0) {
        result += 'No se detectaron tensiones astrológicas significativas en esta carta natal. Vos igual seguís siendo un ser complejo con áreas de crecimiento, pero las configuraciones planetarias actuales no presentan desafíos destacados.\n\n';
        result += '*   **Integración de energías:** Tu carta tiene una distribución equilibrada. Tu desafío es encontrar cómo integrar las distintas energías que manejás sin que una predomune completamente.\n\n';
        result += '*   **Autodescubrimiento continuo:** Aunque no hay tensiones obvias, seguís evolucionando. Explorá nuevas formas de expresarte y crecer.\n\n';
    } else {
        for (let i = 0; i < limit; i++) {
            result += DESAFIOS[i] + '\n\n';
        }
    }
    
    result += '---\n\n';
    return result;
}

    // ===============================
    // ✨ MISIÓN PERSONAL
    // ===============================
    md += `## ✨ MISIÓN PERSONAL\n`;
    if (asc) {
        const missionMessages: Record<string, string> = {
            'Aries': 'Aprender a ser el protagonista de tu propia vida con valentía.',
            'Tauro': 'Construir una base sólida de autoestima y valores propios.',
            'Géminis': 'Ser el puente de comunicación y curiosidad entre diferentes mundos.',
            'Cáncer': 'Aprender a maternar tus propias emociones y crear un hogar interior.',
            'Leo': 'Animarte a brillar desde el corazón sin miedo al juicio ajeno.',
            'Virgo': 'Poner tu capacidad de orden al servicio de un propósito mayor.',
            'Libra': 'Encontrar el equilibrio entre tus necesidades y las de los demás.',
            'Escorpio': 'Transmutar tus sombras en poder personal y sabiduría profunda.',
            'Sagitario': 'Buscar la verdad que te de libertad y compartirla con entusiasmo.',
            'Capricornio': 'Hacerte cargo de tu autoridad y construir tu propio éxito.',
            'Acuario': 'Aportar tu visión única e innovadora para el bien del colectivo.',
            'Piscis': 'Aprender a confiar en tu intuición y fluir con la vida con compasión.'
        };
        md += `Viniste a esta vida para: **${missionMessages[asc.sign] || `Integrar la energía de ${asc.sign} en tu camino.`}**\n\n`;
    }

    // ===============================
    // 📝 RESUMEN PARA LLEVARTE
    // ===============================
    md += `## 📝 RESUMEN PARA LLEVARTE\n`;
    if (sun) {
        const talents: Record<string, string> = {
            'Aries': 'Tu valentía, tu iniciativa y tu honestidad brutal.',
            'Tauro': 'Tu paciencia, tu sentido práctico y tu lealtad a toda prueba.',
            'Géminis': 'Tu curiosidad, tu adaptabilidad y tu facilidad de palabra.',
            'Cáncer': 'Tu empatía, tu instinto protector y tu sensibilidad profunda.',
            'Leo': 'Tu generosidad, tu carisma y tu capacidad creativa.',
            'Virgo': 'Tu humildad, tu precisión y tu deseo de ser útil.',
            'Libra': 'Tu sentido estético, tu diplomacia y tu búsqueda de justicia.',
            'Escorpio': 'Tu lealtad, tu profundidad y tu capacidad de regeneración.',
            'Sagitario': 'Tu optimismo, tu fe en la vida y tu sed de aventuras.',
            'Capricornio': 'Tu resiliencia, tu sentido de responsabilidad y tu ambición clara.',
            'Acuario': 'Tu originalidad, tu humanitarismo y tu visión de futuro.',
            'Piscis': 'Tu compasión sin límites, tu intuición y tu imaginación poética.'
        };

        const challenges: Record<string, string> = {
            'Aries': 'La impulsividad y la tendencia a ser demasiado rudo bajo estrés.',
            'Tauro': 'La terquedad y el miedo a salir de tu zona de confort.',
            'Géminis': 'La dispersión mental y la dificultad para profundizar en un solo tema.',
            'Cáncer': 'El exceso de autoprotección y los cambios de humor repentinos.',
            'Leo': 'La necesidad constante de aprobación y la dificultad para ceder el foco.',
            'Virgo': 'La autocrítica excesiva y el perfeccionismo que te paraliza.',
            'Libra': 'La indecisión por miedo al conflicto y la dependencia de otros.',
            'Escorpio': 'El deseo de control y la tendencia a guardarte los sentimientos.',
            'Sagitario': 'La falta de límites y la tendencia a exagerar o prometer de más.',
            'Capricornio': 'La rigidez excesiva y el miedo a mostrar tu vulnerabilidad.',
            'Acuario': 'El desapego emocional excesivo y la rebeldía sin causa clara.',
            'Piscis': 'La tendencia al escapismo y la dificultad para poner límites claros.'
        };

        const nextSteps: Record<string, string> = {
            'Aries': 'Practicá una actividad física intensa para canalizar tu energía antes de decidir.',
            'Tauro': 'Probá un cambio pequeño en tu rutina hoy para flexibilizar tu mente.',
            'Géminis': 'Elegí un solo tema que te interese y dedicale una hora de lectura profunda.',
            'Cáncer': 'Hacete un espacio de soledad en casa para reconectar con tus propias necesidades.',
            'Leo': 'Realizá un acto de generosidad anónimo: deja que tu luz brille sin ser el centro.',
            'Virgo': 'Escribí tres cosas que hiciste bien hoy sin buscarles ningún defecto.',
            'Libra': 'Tomá una pequeña decisión hoy basándote solo en lo que VOS querés, no en los demás.',
            'Escorpio': 'Compartí algo que te preocupe con alguien de confianza; deja entrar un poco de luz.',
            'Sagitario': 'Bajá a tierra un plan concreto para esa gran idea que tenés en mente.',
            'Capricornio': 'Permitite un momento de ocio total hoy, sin sentir que estás perdiendo el tiempo.',
            'Acuario': 'Participá en una actividad grupal donde puedas aportar tu visión única al colectivo.',
            'Piscis': 'Dedicá 15 minutos a meditar o a una actividad artística sin buscar resultados.'
        };

        md += `*   **Lo mejor de vos:** ${talents[sun.sign] || 'Tu capacidad única de integrar energías.'}\n`;
        md += `*   **A cuidar:** ${challenges[sun.sign] || 'La tendencia a actuar por impulso bajo estrés.'}\n`;
        md += `*   **Paso a seguir:** ${nextSteps[sun.sign] || 'Dedicá tiempo a una actividad que te dé coherencia.'}\n\n`;
    }

    // ===============================
    // 💌 MENSAJE FINAL
    // ===============================
    md += `### 💌 MENSAJE FINAL\n`;
    md += `*Recuerda que estas estrellas son una guía, no una sentencia. Tu libre albedrío es el que finalmente escribe la historia. ¡Confía en tu proceso!*\n\n`;

    // ===============================
    // 📖 GLOSARIO
    // ===============================
    md += `### 📖 GLOSARIO\n`;
    md += `*Entendé los términos usados en tu interpretación*\n\n`;
    md += `**Stellium:** Concentración de 3 o más planetas en un mismo signo. Intensifica enormemente esa energía en tu personalidad.\n\n`;
    md += `**Cuadratura:** Aspecto de tensión entre dos planetas. Genera aprendizaje y crecimiento a través de superar desafíos.\n\n`;
    md += `**Oposición:** Dos planetas en lados opuestos del zodíaco. Representa un área de vida donde necesitás integrar energías opuestas.\n\n`;
    md += `**Conjunción:** Dos planetas juntos en el mismo punto. Une sus energías de manera intensa.\n\n`;
    md += `**Trígono:** Aspecto armonioso entre planetas. Indica talentos naturales y facilidad en esa área.\n\n`;
    md += `**Sextil:** Aspecto suave que presenta oportunidades. Potencial que podés desarrollar con esfuerzo.\n\n`;
    md += `**Casa:** Área específica de tu vida (trabajo, amor, familia, etc.). Las casas muestran dónde se expresan los planetas.\n\n`;
    md += `**Signo de detrimento:** Planeta en territorio incómodo. Debe encontrar formas alternativas de expresarse.\n\n`;
    md += `**Signo de caída:** Planeta sin fuerza natural en ese signo. Área de aprendizaje donde debés desarrollar fortaleza.\n\n`;

    return md;
}

/**
 * Provee descripciones simples para los pilares de la carta.
 */
function getSimplePlanetDescription(planet: string, sign: string): { signDescription: string, meaning: string, challenge: string, simple: string, need: string } {
    const descriptions: Record<string, Record<string, { signDescription: string, meaning: string, challenge: string, simple: string, need: string }>> = {
        'Sol': {
            'Aries': { signDescription: 'el signo del pionero', meaning: 'Iniciativa, coraje y voluntad', challenge: 'aprender a esperar', simple: 'Tu corazón es valiente.', need: 'acción y desafíos' },
            'Tauro': { signDescription: 'el signo de la estabilidad', meaning: 'Perseverancia y practicidad', challenge: 'soltar el control', simple: 'Valoras la estabilidad.', need: 'seguridad y placer' },
            'Géminis': { signDescription: 'el signo del comunicador', meaning: 'Versatilidad y curiosidad', challenge: 'enfocarte', simple: 'Tu mente es inquieta.', need: 'estímulo mental' },
            'Cáncer': { signDescription: 'el signo del protector', meaning: 'Intuición y sensibilidad', challenge: 'confiar en vos mismo', simple: 'Tu corazón es tierno.', need: 'seguridad emocional' },
            'Leo': { signDescription: 'el signo del creador', meaning: 'Creatividad y liderazgo', challenge: 'compartir el brillo', simple: 'Naciste para brillar.', need: 'expresión creativa' },
            'Virgo': { signDescription: 'el signo del servicio', meaning: 'Análisis y mejora continua', challenge: 'aceptar la imperfección', simple: 'Buscás la excelencia.', need: 'sentido de utilidad' },
            'Libra': { signDescription: 'el signo del equilibrio', meaning: 'Armonía y justicia', challenge: 'tomar decisiones', simple: 'Buscás la paz.', need: 'vínculos armoniosos' },
            'Escorpio': { signDescription: 'el signo del transformador', meaning: 'Intensidad y profundidad absoluta', challenge: 'confiar en el proceso', simple: 'Sentís profundamente.', need: 'verdad absoluta' },
            'Sagitario': { signDescription: 'el signo del explorador', meaning: 'Optimismo y aventura', challenge: 'comprometerte', simple: 'Tu espíritu es libre.', need: 'sentido de propósito' },
            'Capricornio': { signDescription: 'el signo del constructor', meaning: 'Ambición y disciplina sólida', challenge: 'ser flexible', simple: 'Sos muy responsable.', need: 'logro y estructura' },
            'Acuario': { signDescription: 'el signo del innovador', meaning: 'Originalidad y libertad', challenge: 'conectar emocionalmente', simple: 'Sos muy original.', need: 'libertad mental' },
            'Piscis': { signDescription: 'el signo del soñador', meaning: 'Intuición y compasión', challenge: 'poner límites', simple: 'Tu mundo es rico.', need: 'conexión espiritual' }
        },
        'Luna': {
            'Aries': { signDescription: 'emociones directas', meaning: 'Impulsividad e iniciativa', challenge: 'paciencia', simple: 'Sentís con fuerza.', need: 'acción inmediata' },
            'Tauro': { signDescription: 'emociones estables', meaning: 'Necesidad de seguridad', challenge: 'soltar apegos', simple: 'Buscás confort.', need: 'paz y placer' },
            'Géminis': { signDescription: 'emociones curiosas', meaning: 'Versatilidad y comunicación', challenge: 'profundizar', simple: 'Necesitás hablar.', need: 'variedad y estímulo' },
            'Cáncer': { signDescription: 'alta sensibilidad', meaning: 'Instinto protector', challenge: 'no cerrarte', simple: 'Sos muy cariñoso.', need: 'pertenencia y hogar' },
            'Leo': { signDescription: 'emociones expresivas', meaning: 'Creatividad y orgullo', challenge: 'humildad', simple: 'Necesitás brillar.', need: 'ser visto y valorado' },
            'Virgo': { signDescription: 'emociones analíticas', meaning: 'Necesidad de orden', challenge: 'no criticar', simple: 'Analizás lo que sentís.', need: 'rutinas y utilidad' },
            'Libra': { signDescription: 'emociones armónicas', meaning: 'Necesidad de equilibrio', challenge: 'decidir solo', simple: 'Odiás las peleas.', need: 'paz y compañía' },
            'Escorpio': { signDescription: 'emociones intensas', meaning: 'Transformación y pasión', challenge: 'confiar', simple: 'Sentís todo o nada.', need: 'profundidad y lealtad' },
            'Sagitario': { signDescription: 'emociones libres', meaning: 'Optimismo y expansión', challenge: 'echar raíces', simple: 'Necesitás espacio.', need: 'aventura y verdad' },
            'Capricornio': { signDescription: 'emociones contenidas', meaning: 'Responsabilidad y control', challenge: 'ser vulnerable', simple: 'Sos muy reservado.', need: 'respeto y estructura' },
            'Acuario': { signDescription: 'emociones independientes', meaning: 'Libertad y originalidad', challenge: 'conectar', simple: 'Sos muy libre.', need: 'libertad y comprensión' },
            'Piscis': { signDescription: 'emociones intuitivas', meaning: 'Compasión y entrega', challenge: 'poner límites', simple: 'Sentís a los demás.', need: 'magia y silencio' }
        },
        'Ascendente': {
            'Aries': { signDescription: 'directa', meaning: 'acción directa e iniciativa', challenge: 'paciencia', simple: 'Vas al frente.', need: 'desafíos' },
            'Tauro': { signDescription: 'estable', meaning: 'seguridad, calma y perseverancia', challenge: 'cambiar', simple: 'Transmitís paz.', need: 'concreción' },
            'Géminis': { signDescription: 'comunicativa', meaning: 'curiosidad, sociabilidad y versatilidad', challenge: 'enfocarte', simple: 'Sos muy sociable.', need: 'intercambio' },
            'Cáncer': { signDescription: 'sensible', meaning: 'acogedora, protectora y empática', challenge: 'soltar', simple: 'Parecés muy cálido.', need: 'raíces' },
            'Leo': { signDescription: 'magnética', meaning: 'brillante, creativa y de liderazgo', challenge: 'compartir', simple: 'Te hacés notar.', need: 'visibilidad' },
            'Virgo': { signDescription: 'prolija', meaning: 'eficiencia, análisis y servicio', challenge: 'relajarte', simple: 'Parecés organizado.', need: 'orden' },
            'Libra': { signDescription: 'diplomática', meaning: 'armónica, bella y sociable', challenge: 'decidir', simple: 'Sos encantador.', need: 'vínculos' },
            'Escorpio': { signDescription: 'misteriosa', meaning: 'profundidad, misterio y poder', challenge: 'confiar', simple: 'Parecés profundo.', need: 'verdad' },
            'Sagitario': { signDescription: 'entusiasta', meaning: 'optimismo, libertad y aventura', challenge: 'frenar', simple: 'Parecés divertido.', need: 'expansión' },
            'Capricornio': { signDescription: 'sólida', meaning: 'responsabilidad, éxito y seriedad', challenge: 'reírte más', simple: 'Parecés serio.', need: 'respeto' },
            'Acuario': { signDescription: 'diferente', meaning: 'única, rebelde e innovadora', challenge: 'pertenecer', simple: 'Sos muy cool.', need: 'innovación' },
            'Piscis': { signDescription: 'etérea', meaning: 'sensibilidad, mística y compasión', challenge: 'limitarse', simple: 'Parecés soñador.', need: 'entrega' }
        }
    };

    return descriptions[planet]?.[sign] || { signDescription: 'única', meaning: 'energía especial', challenge: 'vivir', simple: 'Sos único.', need: 'crecer' };
}
