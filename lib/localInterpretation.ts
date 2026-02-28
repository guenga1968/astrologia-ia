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
        md += `*Lo que necesitás para estar bien:* ${moonMsg.need.replace(/^\w/, (c: string) => c.toUpperCase())}. Tu refugio es lo íntimo y lo conocido; si tu mundo emocional está en orden, podés enfrentar cualquier tormenta.\n\n`;
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
            synthesisText = `Tenés una combinación de ${elements.join(', ').toLowerCase()}. Esto significa que sentís con mucha fuerza, pero sabés cómo canalizar esa energía para transformar tu realidad. Sos pura potencia emocional en acción.`;
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

    // ===============================
    // ⚠️ DESAFÍOS (y cómo superarlos)
    // ===============================
    md += `## ⚠️ DESAFÍOS (y cómo superarlos)\n`;

    const tenseAspects = aspects.filter((a: any) => (a.aspect === 'Cuadratura' || a.aspect === 'Oposición') && a.orb < 5);
    if (tenseAspects.length > 0) {
        const a = tenseAspects[0];
        md += `*   **${a.point1} en tensión con ${a.point2}:** A veces sentís un tironeo entre lo que querés y lo que necesitás. La clave es no elegir un bando, sino aprender a negociar con ambas partes de vos.\n`;
    } else {
        md += `*   **Gestión de la intensidad:** Con tanta energía profunda, tu desafío es no desbordarte. La clave es encontrar válvulas de escape creativas o físicas.\n`;
    }
    md += `*   **Aceptación de la vulnerabilidad:** Aprender que mostrar tus grietas no te hace débil, sino humano y conectable.\n\n`;
    md += `---\n\n`;

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
