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

const ELEMENT_DESCRIPTIONS = {
    'Fuego': 'La chispa de la vida, la pasión y la acción inmediata.',
    'Tierra': 'La raíz, la practicidad y la capacidad de materializar metas.',
    'Aire': 'El intelecto, la comunicación y el intercambio de ideas.',
    'Agua': 'La emoción, la empatía y la conexión con lo invisible.'
};

const SIGN_TRANSLATIONS: Record<string, string> = {
    'Aries': 'Aries',
    'Taurus': 'Tauro',
    'Gemini': 'Géminis',
    'Cancer': 'Cáncer',
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

export const MODALITY_DESCRIPTIONS = {
    'Cardinal': 'La energía de inicio y acción. Representa el impulso de comenzar nuevos proyectos y liderar.',
    'Fijo': 'La energía de sostenimiento y perseverancia. Representa la estabilidad y la determinación.',
    'Mutable': 'La energía de adaptación y flexibilidad. Representa la capacidad de adaptarse y modificar.'
};

const SOL_CONCISE: Record<string, string> = {
    'Aries': 'Pionero, action directa, iniciativa. Impaciente, independiente.',
    'Tauro': 'Estable, persistente, aprecia belleza. Terco, leal.',
    'Géminis': 'Comunicativo, mente ágil, curioso. Versátil, disperso.',
    'Cáp': 'Emocional, intuitivo, protector. Sensible, memoria emotiva.',
    'Leo': 'Expresivo, creativo, líder natural. Orgulloso, busca reconocimiento.',
    'Virgo': 'Analítico, detallista, servicio. Perfeccionista, crítico.',
    'Libra': 'Armónico, diplomático, busca equilibrio. IndECISIVO, sociable.',
    'Escorpio': 'Intenso, transformador, penetrante. Pasional, secreto.',
    'Sagitario': 'Aventurero, filósofo, optimista. Libre, busca verdad.',
    'Capricornio': 'Ambicioso, disciplinado, estructura. Responsable, paciente.',
    'Acuario': 'Original, innovador, humanitario. Independiente, visionario.',
    'Piscis': 'Sensible, intuitivo, espiritual. Compasivo, escapa.'
};

const LUNA_CONCISE: Record<string, string> = {
    'Aries': 'Emociones directas, necesidad de acción. Impaciente emocionalmente.',
    'Tauro': 'Emociones estables, necesita seguridad. Leal, memoria emotiva fuerte.',
    'Géminis': 'Emociones cambiantes, mente emocional. Comunicativo, adaptable.',
    'Cáp': 'Emociones intensas, instinto protector. Hogar es sanctuary.',
    'Leo': 'Emociones dramáticas, necesita reconocimiento. Orgullo emotivo.',
    'Virgo': 'Emociones analizadas, autocrítica. Necesita orden emocional.',
    'Libra': 'Emociones buscar armonía, dependencia relacional. IndECISIVO.',
    'Escorpio': 'Emociones profundas, intensidad. Celoso, leal.',
    'Sagitario': 'Emociones optimistas, necesita libertad. Expansivo.',
    'Capricornio': 'Emociones contenidas, necesita control. Resistente.',
    'Acuario': 'Emociones independientes, distantes. Original, humanitario.',
    'Piscis': 'Emociones fluidas, intuitivo. Sensible, escapista.'
};

const ASCENDANT_CONCISE: Record<string, string> = {
    'Aries': 'Energético, directo, pionero. Presencia dinámica.',
    'Tauro': 'Estable, confiable, práctico. Presencia tranquila.',
    'Géminis': 'Comunicativo, curiouso, versátil. Presencia vibrante.',
    'Cáp': 'Protector, emocional, hogareño. Presencia cuidadora.',
    'Leo': 'Carismático, dramático, líder. Presencia brillante.',
    'Virgo': 'Práctico, detallista, servicial. Presencia eficiente.',
    'Libra': 'Armonioso, diplomático, social. Presencia encantadora.',
    'Escorpio': 'Intenso, magnético, misterioso. Presencia poderosa.',
    'Sagitario': 'Optimista, aventurero, filósofo. Presencia expansiva.',
    'Capricornio': 'Ambicioso, disciplinado, reservado. Presencia autoritaria.',
    'Acuario': 'Original, independiente, humanitario. Presencia única.',
    'Piscis': 'Sensible, intuitivo, espiritual. Presencia suave.'
};

const PLANET_DIGNITIES: Record<string, Record<string, string>> = {
    'Sol': {
        'Aries': 'exaltado',
        'Tauro': 'peregrino',
        'Géminis': 'peregrino',
        'Cáp': 'peregrino',
        'Leo': 'domicilio',
        'Virgo': 'peregrino',
        'Libra': 'caída',
        'Escorpio': 'peregrino',
        'Sagitario': 'peregrino',
        'Capricornio': 'peregrino',
        'Acuario': 'detrimento',
        'Piscis': 'peregrino'
    },
    'Luna': {
        'Aries': 'caída',
        'Tauro': 'exaltado',
        'Géminis': 'peregrino',
        'Cáp': 'domicilio',
        'Leo': 'peregrino',
        'Virgo': 'peregrino',
        'Libra': 'peregrino',
        'Escorpio': 'caída',
        'Sagitario': 'peregrino',
        'Capricornio': 'detrimento',
        'Acuario': 'peregrino',
        'Piscis': 'peregrino'
    },
    'Mercurio': {
        'Aries': 'peregrino',
        'Tauro': 'peregrino',
        'Géminis': 'domicilio',
        'Cáp': 'peregrino',
        'Leo': 'peregrino',
        'Virgo': 'domicilio',
        'Libra': 'peregrino',
        'Escorpio': 'peregrino',
        'Sagitario': 'detrimento',
        'Capricornio': 'peregrino',
        'Acuario': 'peregrino',
        'Piscis': 'caída'
    },
    'Venus': {
        'Aries': 'detrimento',
        'Tauro': 'domicilio',
        'Géminis': 'peregrino',
        'Cáp': 'peregrino',
        'Leo': 'peregrino',
        'Virgo': 'caída',
        'Libra': 'domicilio',
        'Escorpio': 'detrimento',
        'Sagitario': 'peregrino',
        'Capricornio': 'peregrino',
        'Acuario': 'peregrino',
        'Piscis': 'exaltado'
    },
    'Marte': {
        'Aries': 'domicilio',
        'Tauro': 'detrimento',
        'Géminis': 'peregrino',
        'Cáp': 'peregrino',
        'Leo': 'peregrino',
        'Virgo': 'peregrino',
        'Libra': 'detrimento',
        'Escorpio': 'domicilio',
        'Sagitario': 'peregrino',
        'Capricornio': 'exaltado',
        'Acuario': 'peregrino',
        'Piscis': 'peregrino'
    },
    'Júpiter': {
        'Aries': 'peregrino',
        'Tauro': 'peregrino',
        'Géminis': 'detrimento',
        'Cáp': 'exaltado',
        'Leo': 'peregrino',
        'Virgo': 'detrimento',
        'Libra': 'peregrino',
        'Escorpio': 'peregrino',
        'Sagitario': 'domicilio',
        'Capricornio': 'caída',
        'Acuario': 'peregrino',
        'Piscis': 'domicilio'
    },
    'Saturno': {
        'Aries': 'caída',
        'Tauro': 'peregrino',
        'Géminis': 'peregrino',
        'Cáp': 'peregrino',
        'Leo': 'detrimento',
        'Virgo': 'peregrino',
        'Libra': 'exaltado',
        'Escorpio': 'peregrino',
        'Sagitario': 'peregrino',
        'Capricornio': 'domicilio',
        'Acuario': 'domicilio',
        'Piscis': 'peregrino'
    }
};

const DIGNITY_MEANINGS: Record<string, string> = {
    'exaltado': 'El planeta está en una posición de máxima fuerza y expresión positiva.',
    'domicilio': 'El planeta está en su hogar natural, donde puede expresar su energía plenamente.',
    'peregrino': 'El planeta está en un signo que no tiene relación especial con él, debe adaptarse sin fortalezas ni debilidades inherentes.',
    'caída': 'El planeta está en una posición de debilidad, requiere esfuerzo para expresar su energía positivamente.',
    'detrimento': 'El planeta está lejos de su naturaleza, puede expresar energía de forma distorsionada.'
};

const MERCURY_SIGN_INTERPRETATIONS: Record<string, string> = {
    'Aries': 'Mercurio en Aries te da una mente rápida y directa. Pensás y comunicás con urgencia, a veces sin medir consecuencias. Tu fuerza está en la iniciativa mental y la capacidad de actuar rápidamente.',
    'Tauro': 'Mercurio en Tauro indica una mente práctica y terca. Pensás lentamente pero con profundidad. Tu comunicación es estable y confiables, aunque podés resistir cambios de opinión.',
    'Géminis': 'Mercurio en Géminis es su posición favorita. Tu mente es ágil, curiosa y adaptable. Comunicás con facilidad y tenés habilidad para conectar información diversa.',
    'Cáncer': 'Mercurio en Cancer indica una mente sensible e intuitiva. Tu comunicación está influenciada por las emociones. Pensás mejor en ambientes familiares y seguros.',
    'Leo': 'Mercurio en Leo te da una forma de expresarte dramática y autoritativa. Te gusta ser el centro de atención cuando comunicás. Tus ideas son brillantes pero podés ser arrogante.',
    'Virgo': 'Mercurio en Virgo es su posición de domicilio. Tu mente es analítica y precisa. Comunicás con detalle y podés ser crítico o perfeccionista.',
    'Libra': 'Mercurio en Libra te da una mente equilibrada y diplomática. Buscás la justicia en el análisis. Comunicás con gracia pero podés ser indeciso.',
    'Escorpio': 'Mercurio en Escorpio indica una mente profunda e investigativa. Penetrás debajo de la superficie y detectás lo oculto. Tu comunicación es intensa y poderosa.',
    'Sagitario': 'Mercurio en Sagitario te da una mente filosófica y expansiva. Buscás la verdad y la libertad en tus ideas. Comunicás con entusiasmo pero podés ser dogmático.',
    'Capricornio': 'Mercurio en Capricornio indica una mente disciplinada y ambiciosa. Pensás a largo plazo y estructurás tus ideas. Tu comunicación es seria y autoritativa.',
    'Acuario': 'Mercurio en Acuario te da una mente original e innovadora. Pensás fuera de lo convencional y valorás la libertad intelectual. Tu comunicación es única y vanguardista.',
    'Piscis': 'Mercurio en Piscis indica una mente intuitiva e imaginativa. Pensás con el corazón y la intuición. Tu comunicación es sensible pero podés ser confuso o escapista.'
};

const VENUS_SIGN_INTERPRETATIONS: Record<string, string> = {
    'Aries': 'Venus en Aries te hace apasionado y directo en el amor. Te atraen las aventuras y los desafíos. Tu forma de amar es dinámica, aunque podés ser impaciente.',
    'Tauro': 'Venus en Tauro es su posición favorita. Buscás estabilidad y seguridad en las relaciones. Valuás la lealtad, el placer sensorial y los vínculos duraderos.',
    'Géminis': 'Venus en Géminis te hace sociable y curioso en el amor. Te atraen las mentes brillantes. Valuás la comunicación y la variedad en las relaciones.',
    'Cáp': 'Venus en Cancer te hace emocional y nurturante en el amor. Buscás seguridad emocional y un hogar. Valuás la familia y la intimidad.',
    'Leo': 'Venus en Leo te hace dramático y generoso en el amor. Te atraen el romance y la admiración. Valuás la creatividad y ser el centro de atención.',
    'Virgo': 'Venus en Virgo te hace práctico y selectivo en el amor. Buscás la perfección y el servicio. Valuás la salud y la limpieza en las relaciones.',
    'Libra': 'Venus en Libra es su posición favorita. Buscás armonía y belleza en las relaciones. Valuás la equidad, el arte y las asociaciones.',
    'Escorpio': 'Venus en Escorpio te hace intenso y profundo en el amor. Buscás transformación y intimidad. Valuás la verdad y la conexión emocional.',
    'Sagitario': 'Venus en Sagitario te hace aventurero y optimista en el amor. Te atraen personas de otras culturas. Valuás la libertad y la honestidad.',
    'Capricornio': 'Venus en Capricornio te hace ambicioso y responsable en el amor. Buscás relaciones serias y duraderas. Valuás el éxito y la estabilidad.',
    'Acuario': 'Venus en Acuario te hace independiente y único en el amor. Buscás libertad y originales. Valuás la amistad y los ideales humanitarios.',
    'Piscis': 'Venus en Piscis te hace romántico y idealista en el amor. Buscás conexión espiritual y entrega. Valuás la compasión y la fantasía.'
};

const MARS_SIGN_INTERPRETATIONS: Record<string, string> = {
    'Aries': 'Marte en Aries es su posición favorita. Tu energía es pionera, directa y valiente. Actúas con iniciativa y no temés tomar la delantera.',
    'Tauro': 'Marte en Tauro indica energía persistente y práctica. Actúas con determinación y paciencia. Tu fuerza está en la perseverancia, aunque podés ser terco.',
    'Géminis': 'Marte en Géminis te da energía mental y versátil. Tu acción es rápida pero dispersa. Comunicás con agilidad pero podés ser inconsistente.',
    'Cáp': 'Marte en Cancer indica energía emocional y reactiva. Actúas según tus Feelings. Tu fuerza está en la protección, aunque podés ser susceptible.',
    'Leo': 'Marte en Leo te da energía dramática y autoritativa. Actúas con grandeza y generosidad. Tu fuerza está en el liderazgo, aunque podés ser vanidoso.',
    'Virgo': 'Marte en Virgo te da energía analítica y detallista. Actúas con precisión y eficiencia. Tu fuerza está en el trabajo, aunque podés ser crítico.',
    'Libra': 'Marte en Libra indica energía diplomática y equilibrada. Actúas con justicia y gracia. Tu fuerza está en las relaciones, aunque podés ser indeciso.',
    'Escorpio': 'Marte en Escorpio es su posición de domicilio. Tu energía es intensa y transformadora. Actúas con profundidad, aunque podés ser manipulador.',
    'Sagitario': 'Marte en Sagitario te da energía aventurera y optimista. Actúas con entusiasmo y libertad. Tu fuerza está en la exploración, aunque podés ser impulsivo.',
    'Capricornio': 'Marte en Capricornio te da energía disciplinada y ambiciosa. Actúas con paciencia y estrategia. Tu fuerza está en la construcción, aunque podés ser frío.',
    'Acuario': 'Marte en Acuario te da energía innovadora y revolucionaria. Actúas con originalidad y libertad. Tu fuerza está en el cambio, aunque podés ser distante.',
    'Piscis': 'Marte en Piscis indica energía sutil y espiritual. Actúas con intuición y compasión. Tu fuerza está en la transformación, aunque podés ser pasivo.'
};

const JUPITER_SIGN_INTERPRETATIONS: Record<string, string> = {
    'Aries': 'Júpiter en Aries te da un espíritu aventurero y optimista. Tenés energía para nuevos emprendimientos y una fe inquebrantable en vos mismo.',
    'Tauro': 'Júpiter en Tauro te trae estabilidad y gusto por lo material. Buscás abundancia a través de valores sólidos y paciencia.',
    'Géminis': 'Júpiter en Géminis expande tu mente curiosa. Tenés facilidad para aprender múltiples temas y comunicar tus ideas.',
    'Cancer': 'Júpiter en Cancer te hace optimista emocionalmente. Encontrás crecimiento a través de la familia y lo nurturante.',
    'Leo': 'Júpiter en Leo te da magnanimidad y deseo de destacar. Tenés un corazón generoso y creatividad dramática.',
    'Virgo': 'Júpiter en Virgo te hace práctico y analítico. Encontrás crecimiento a través del servicio y la mejora continua.',
    'Libra': 'Júpiter en Libra busca armonía en relaciones. Tenés diplomacia natural y deseo de justicia.',
    'Escorpio': 'Júpiter en Escorpio intensifica tu poder de transformación. Tenés capacidad de profundizar en lo oculto.',
    'Sagitario': 'Júpiter en Sagitario es su posición favorita. Optimista, viajero, filósofo... tu espíritu libre está protegido.',
    'Capricornio': 'Júpiter en Capricornio trae ambición realista. Crecés a través de disciplina y metas concretas.',
    'Acuario': 'Júpiter en Acuario te hace humanitario y original. Tenés ideas innovadoras y visión de futuro.',
    'Piscis': 'Júpiter en Piscis aumenta tu sensibilidad espiritual. Tenés intuición profunda y compasión infinita.'
};

const SATURN_SIGN_INTERPRETATIONS: Record<string, string> = {
    'Aries': 'Saturno en Aries te enseña paciencia con la iniciativa. Debés aprender a actuar con perseverancia sin impaciencia.',
    'Tauro': 'Saturno en Tauro trae disciplina con los recursos. Tu desafío es equilibrar seguridad material con soltar apegos.',
    'Géminis': 'Saturno en Géminis requiere que profundices en tu comunicación. El desafío es ser consistente en tus ideas.',
    'Cancer': 'Saturno en Cancer testa tu seguridad emocional. Aprendés a construir un hogar sólido sobre bases firmes.',
    'Leo': 'Saturno en Leo enseña humildad creativa. Tu desafío es expresar tu creatividad sin necesitar validación externa.',
    'Virgo': 'Saturno en Virgo te enseña a aceptar la imperfección. Tu desafío es ser preciso sin criticismo excesivo.',
    'Libra': 'Saturno en Libra fortalece tu capacidad de compromiso. Aprendés que las relaciones requieren trabajo constante.',
    'Escorpio': 'Saturno en Escorpio te da poder transformador. Tu desafío es usar el poder sin manipulaciones.',
    'Sagitario': 'Saturno en Sagitario limita el exceso de optimismo. Aprendés a tener fe sin ser dogmático.',
    'Capricornio': 'Saturno en Capricornio es su posición de domicilio. Trae disciplina implacable y ambición ardiente que deben canalizarse constructivamente.',
    'Acuario': 'Saturno en Acuario enseña estructura a la innovación. Tu desafío es ser original dentro de estructuras.',
    'Piscis': 'Saturno en Piscis trae límites a la sensibilidad. Aprendés a establecer fronteras sin perder tu compasión.'
};

const URANUS_SIGN_INTERPRETATIONS: Record<string, string> = {
    'Aries': 'Urano en Aries te hace pionero de cambios revolucionarios. Tu energía es innovadora y disruptiva.',
    'Tauro': 'Urano en Tauro genera tensión entre tradición y libertad. Buscás cambiar valores y estructuras económicas.',
    'Géminis': 'Urano en Géminis potencia tu mente innovadora. Tenés ideas originales y pensamiento rápido.',
    'Cáp': 'Urano en Cancer indica cambios emocionales súbitos. Tu mundo interior puede transformarse rápidamente.',
    'Leo': 'Urano en Leo te hace un líder revolucionario. Buscás destacar de manera única e innovadora.',
    'Virgo': 'Urano en Virgo genera innovaciones en el trabajo y la salud. Buscás sistemas nuevos para problemas antiguos.',
    'Libra': 'Urano en Libra traza cambios en las relaciones. Buscás equidad y originalidad en parejas.',
    'Escorpio': 'Urano en Escorpio intensifica la transformación. Tenés poder para renovar estructuras de poder.',
    'Sagitario': 'Urano en Sagitario expande tu visión del mundo. Buscás libertad a través de viajes y filosofía.',
    'Capricornio': 'Urano en Capricornio genera tensión entre autoridad y libertad. Podés transformar instituciones.',
    'Acuario': 'Urano en Acuario es su posición favorita. Tenés intuición avanzada y espíritu humanitario.',
    'Piscis': 'Urano en Piscis aumenta tu intuición espiritual. Podés experimentar revelaciones místicas.'
};

const NEPTUNE_SIGN_INTERPRETATIONS: Record<string, string> = {
    'Aries': 'Neptuno en Aries te da un idealismo pionero. Buscás causas nobles con espíritu pionero.',
    'Tauro': 'Neptuno en Tauro indica ideales prácticos y materiales. Buscás belleza y seguridad en tus sueños.',
    'Géminis': 'Neptuno en Géminis aumenta tu intuición intelectual. Podés conectar ideas de forma intuitiva.',
    'Cáp': 'Neptuno en Cancer es su posición favorita. Tenés sensibilidad emocional profunda y conexión con lo inconsciente.',
    'Leo': 'Neptuno en Leo te da un idealismo dramático. Buscás reconocimiento a través de la creatividad.',
    'Virgo': 'Neptuno en Virgo genera tensión entre idealismo y realidad. Buscás la perfección espiritual.',
    'Libra': 'Neptuno en Libra traza ideales en las relaciones. Buscás pareja perfecta o alma gemela.',
    'Escorpio': 'Neptuno en Escorpio intensifica la transformación. Tenés poder de sanación y conexión espiritual.',
    'Sagitario': 'Neptuno en Sagitario aumenta tu búsqueda espiritual. Buscás verdad a través de la filosofía.',
    'Capricornio': 'Neptuno en Capricornio puede limitar ambiciones materiales. Aprendés que el éxito espiritual es mayor.',
    'Acuario': 'Neptuno en Acuario te hace visionario espiritual. Tenés intuición para el futuro colectivo.',
    'Piscis': 'Neptuno en Piscis es su posición favorita. Tenés sensibilidad espiritual profunda y conexión con lo divino.'
};

const PLUTO_SIGN_INTERPRETATIONS: Record<string, string> = {
    'Aries': 'Plutón en Aries indica transformación a través de la iniciativa personal. Tenés poder de renovación.',
    'Tauro': 'Plutón en Tauro genera transformación de valores y recursos. Podés transformar situaciones económicas.',
    'Géminis': 'Plutón en Géminis indica transformación del pensamiento. Tu mente puede influir profundamente.',
    'Cancer': 'Plutón en Cancer intensifica las emociones. Tenés poder para transformar el ámbito familiar.',
    'Leo': 'Plutón en Leo te da poder de transformación creativa. Buscás destacar y transformar a través del arte.',
    'Virgo': 'Plutón en Virgo genera transformación a través del servicio. Podés sanar a través del trabajo.',
    'Libra': 'Plutón en Libra indica transformación de relaciones. Tenés poder para transformar parejas y sociedades.',
    'Escorpio': 'Plutón en Escorpio es su posición favorita. Tenés poder transformador intenso y capacidad de renacimiento.',
    'Sagitario': 'Plutón en Sagitario expande tu búsqueda de verdad. Podés transformar creencias y filosofía.',
    'Capricornio': 'Plutón en Capricornio te da poder para transformar estructuras. Tenés ambición de construir legacies.',
    'Acuario': 'Plutón en Acuario indica transformación colectiva. Tenés poder para cambiar grupos y sociedades.',
    'Piscis': 'Plutón en Piscis aumenta tu poder espiritual. Tenés capacidad de sanación y transformación profunda.'
};

const CHIRON_SIGN_INTERPRETATIONS: Record<string, string> = {
    'Aries': 'Quirón en Aries indica una herida relacionada con tu identidad individual. Tu desafío es desarrollar confianza en vos mismo y liderazgo sin agresividad. Tu don está en ayudar a otros a encontrar su voz.',
    'Tauro': 'Quirón en Tauro señala una herida alrededor de la seguridad material y el valor propio. Tu desafío es confiar en que mereces abundancia. Tu don es ayudar a otros a encontrar estabilidad.',
    'Géminis': 'Quirón en Géminis muestra una herida en la comunicación o con hermanos. Tu desafío es expresar tu verdad sin miedo. Tu don es comunicar con profundidad y autenticidad.',
    'Cancer': 'Quirón en Cancer indica una herida emocional y familiar. Tu desafío es sanar las relaciones familiares. Tu don es la empatía y el cuidado hacia otros.',
    'Leo': 'Quirón en Leo señala una herida relacionada con la creatividad y el reconocimiento. Tu desafío es amarte a vos mismo sin necesitar validación externa. Tu don está en inspirar creatividad en otros.',
    'Virgo': 'Quirón en Virgo muestra una herida relacionada con el trabajo y la salud. Tu desafío es aceptarte tal cual eres. Tu don es el servicio sanador hacia otros.',
    'Libra': 'Quirón en Libra indica una herida en las relaciones y la justicia. Tu desafío es encontrar tu centro sin depender del otro. Tu don es equilibrar relaciones y promover justicia.',
    'Escorpio': 'Quirón en Escorpio señala una herida de transformación y poder. Tu desafío es confiar en el proceso de cambio. Tu don es la capacidad de sanación profunda y transformación.',
    'Sagitario': 'Quirón en Sagitario muestra una herida relacionada con la fe y la filosofía. Tu desafío es encontrar tu propia verdad. Tu don es inspirar fe y propósito en otros.',
    'Capricornio': 'Quirón en Capricornio indica una herida con la autoridad y el logro. Tu desafío es valorarte sin logros externos. Tu don es la sabiduría ganada con experiencia.',
    'Acuario': 'Quirón en Acuario señala una herida relacionada con la individualidad y grupalidad. Tu desafío es belonger sin perder tu singularidad. Tu don es la innovación al servicio de la humanidad.',
    'Piscis': 'Quirón en Piscis muestra una herida espiritual y emocional. Tu desafío es establecer límites saludables. Tu don es la compasión infinita y la sanación espiritual.'
};

const NORTH_NODE_INTERPRETATIONS: Record<string, string> = {
    'Aries': 'Tu propósito es desarrollar tu individualidad y coraje. Venís de un lugar donde dependiste de otros. Tu desafío es tomar la iniciativa y ser tú mismo sin miedo.',
    'Tauro': 'Tu propósito es encontrar seguridad y valor propio. Venís de un lugar de inseguridad material. Tu desafío es confiar en tu valor intrínseco.',
    'Géminis': 'Tu propósito es desarrollar comunicación y pensamiento propio. Venís de un lugar de creencias absorbidas. Tu desafío es formar tus propias opiniones.',
    'Cancer': 'Tu propósito es desarrollar emocionalidad y crear un hogar. Venís de un lugar de desconexión emocional. Tu desafío es abrirte a sentir y criar.',
    'Leo': 'Tu propósito es expresar tu creatividad y shine. Venís de un lugar donde tu luz fue apagada. Tu desafío es brillar sin culpa.',
    'Virgo': 'Tu propósito es desarrollar el servicio y la salud. Venís de un lugar de perfeccionismo excesivo. Tu desafío es servir sin criticismo.',
    'Libra': 'Tu propósito es crear relaciones equilibradas. Venís de un lugar de dependencia o soledad. Tu desafío es ser tú mismo en relación.',
    'Escorpio': 'Tu propósito es la transformación y el poder personal. Venís de un lugar de miedo al poder. Tu desafío es abrazar tu poder sin manipular.',
    'Sagitario': 'Tu propósito es encontrar tu verdad y propósito. Venís de un lugar de dogma. Tu desafío es crear tu propia filosofía de vida.',
    'Capricornio': 'Tu propósito es construir logro y estructura. Venís de un lugar de irresponsabilidad o perfeccionismo paralizante. Tu desafío es construir con paciencia.',
    'Acuario': 'Tu propósito es aportar a la humanidad y ser vos mismo. Venís de un lugar de rebeldía sin causa. Tu desafío es canalizar tu individualidad al servicio colectivo.',
    'Piscis': 'Tu propósito es la sanación espiritual y emocional. Venís de un lugar de escape o/addicciones. Tu desafío es usar tu sensibilidad como fortaleza.'
};

const MODALITY_DETAILED: Record<string, Record<string, { title: string, description: string, characteristics: { title: string, text: string }[], challenges: string, summary: string }>> = {
    'Cardinal': {
        'low': {
            title: 'Bajo',
            description: 'Un porcentaje bajo de modalidad cardinal (menos del 20%) indica una persona más reactiva que proactiva. Prefiere seguir el camino ya establecido en lugar de crear nuevos caminos. Puede tener dificultades para tomar la iniciativa o puede sentirse más cómoda siguiendo el liderazgo de otros.',
            characteristics: [
                { title: 'Iniciativa limitada', text: 'No es natural para vos comenzar nuevos proyectos. Preferís que otros marquen el camino.' },
                { title: 'Reactividad', text: 'Tiendes a responder a las circunstancias en lugar de crearlas. Reaccionás más que actuar.' },
                { title: 'Seguridad en lo establecido', text: 'Encontrás confort en lo conocido y establecido. El cambio no te atrae naturalmente.' },
                { title: 'Liderazgo reactivo', text: 'Solo liderás cuando es necesario, no por naturaleza.' }
            ],
            challenges: 'El desafío es desarrollar tu capacidad de iniciativa y no depender siempre de otros para actuar.',
            summary: 'La modalidad cardinal baja te invita a encontrar tu voz proactiva y comenzar a crear tu propio camino.'
        },
        'medium_low': {
            title: 'Moderado bajo',
            description: 'Un 20-30% de modalidad cardinal indica una energía de inicio presente pero no dominante. Tenés capacidad de acción pero también sabés cuándo esperar y observar. Es una posición intermedia entre actuar y adaptarse.',
            characteristics: [
                { title: 'Iniciativa selectiva', text: 'Actuás cuando considerás que es necesario, pero no constantemente.' },
                { title: 'Equilibrio acción-espera', text: 'Sabés cuándo actuar y cuándo dejar que las cosas evolucionen.' },
                { title: 'Liderazgo situational', text: 'Podés liderar cuando es necesario pero no buscás el rol activamente.' },
                { title: 'Proactividad moderada', text: 'Iniciás proyectos pero a veces necesitás un empujón externo.' }
            ],
            challenges: 'El desafío es encontrar el balance entre actuar y dejar que las circunstancias maduren.',
            summary: 'Con cardinal moderado bajo, tenés potencial de liderazgo pero también sabés esperar el momento adecuado.'
        },
        'balanced': {
            title: 'Equilibrado',
            description: 'Un 30-40% de modalidad cardinal representa un balance saludable. La persona tiene iniciativa pero también sabe cuándo actuar y cuándo esperar. Representa la capacidad de comenzar proyectos sin ser impulsivo, manteniendo el control sobre cuándo dar el primer paso.',
            characteristics: [
                { title: 'Iniciativa equilibrada', text: 'Tenés la capacidad de iniciar proyectos y tomar decisiones sin ser temerario todo el tiempo.' },
                { title: 'Liderazgo natural', text: 'Sueles tener cualidades para inspirar y liderar cuando es necesario, sin ser dominante.' },
                { title: 'Proactividad consciente', text: 'Actuás cuando es apropiado, no por impulsividad. Tu acción es intencional.' },
                { title: 'Visionario práctico', text: 'No solo comienza proyectos, sino que también tiene la capacidad de verlos a través.' }
            ],
            challenges: 'El desafío es mantener el impulso inicial sin perder el interés antes de completar lo que empezaste.',
            summary: 'El 35% de modalidad cardinal te da un buen balance entre iniciar y completar proyectos, siendo un líder natural pero no dominante.'
        },
        'high': {
            title: 'Alto',
            description: 'Un 40-50% de modalidad cardinal indica una fuerte energía de iniciativa y liderazgo. La persona es un iniciador natural, proactivo y capaz de generar cambios. Destaca por emprender proyectos y tomar la delantera en nuevas situaciones.',
            characteristics: [
                { title: 'Iniciativa y Acción', text: 'La energía cardinal impulsa el inicio, por lo que su alta presencia sugiere que sos una persona de acción, no de pausa.' },
                { title: 'Perfil de Líder', text: 'Te caracterizás por ser un líder natural, visionario y emprendedor que busca hacer realidad sus ideas.' },
                { title: 'Enfoque de Hacedor', text: 'Tiendas a ser quien comienza las cosas, generando dinamismo y energía en tu entorno.' },
                { title: 'Energía de Cambio', text: 'No esperás a que las cosas sucedan, las hacés suceder.' }
            ],
            challenges: 'Aunque comienza con fuerza, es importante recordar el desafío de mantener el enfoque y la constancia a largo plazo en los proyectos iniciados.',
            summary: 'Con un 47% de modalidad cardinal, tu carta sugiere una personalidad con una gran capacidad de arranque, ambición y capacidad de mando.'
        },
        'very_high': {
            title: 'Muy alto',
            description: 'Más del 50% de modalidad cardinal indica un dominio absoluto de la energía de inicio. La persona es un iniciador nato que no puede sentarse sin hacer algo. Siempre está comenzando nuevos proyectos, lo que puede resultar en muchos emprendimientos pero pocos completados.',
            characteristics: [
                { title: 'Iniciador nato', text: 'No podés evitar comenzar cosas. Tu naturaleza es crear y empezar.' },
                { title: 'Liderazgo dominante', text: 'Necesitás ser el que marca el camino. El rol de seguidor no va con vos.' },
                { title: 'Impaciencia extrema', text: 'Esperar te resulta insoportable. Querés acción inmediata.' },
                { title: 'Multi-proyectos', text: 'Siempre tenés múltiples proyectos comenzados. El finish es tu desafío.' }
            ],
            challenges: 'Tu desafío principal es completar lo que empezás. Aprendé a sostener el esfuerzo y no abandonar a mitad de camino.',
            summary: 'Con más del 50% de cardinal, tu fuerza es empezar pero tu debilidad es terminar. Desarrollá perseverancia.'
        }
    },
    'Fijo': {
        'low': {
            title: 'Bajo',
            description: 'Un porcentaje bajo de modalidad fija (menos del 20%) indica una persona muy adaptable y flexible. Puede tener dificultades para mantener estable algo o para mantener sus posiciones. El cambio constante puede ser su norma.',
            characteristics: [
                { title: 'Flexibilidad extrema', text: 'Cambiás de opinión fácilmente. Lo que hoy te gusta, mañana puede no importarte.' },
                { title: 'Dificultad para comprometerse', text: 'El compromiso a largo plazo te resulta difícil. Preferís mantener opciones abiertas.' },
                { title: 'Inestabilidad', text: 'Tu vida puede parecer un flujo constante de cambios sin base sólida.' },
                { title: 'Resistencia baja', text: 'Ante la presión, cedés rápidamente. No sostenés el peso.' }
            ],
            challenges: 'El desafío es desarrollar mayor constancia y capacidad de sostener compromisos.',
            summary: 'La modalidad fija baja te invita a encontrar estabilidad en medio de tu adaptabilidad.'
        },
        'medium_low': {
            title: 'Moderado bajo',
            description: 'Un 20-30% de modalidad fija indica una persona adaptable con momentos de determinación. Hay capacidad de sostener pero cuando realmente lo decide. No es su naturaleza natural ser terca.',
            characteristics: [
                { title: 'Determinación selectiva', text: 'Solo te mantenés firme en lo que realmente te importa.' },
                { title: 'Flexibilidad con límite', text: 'Sos flexible pero cuando elegís un camino, lo seguís por un tiempo.' },
                { title: 'Estabilidad variable', text: 'Podés mantener algo por períodos pero luego cambio.' },
                { title: 'Adaptabilidad dominante', text: 'La adaptación es más fuerte que la resistencia.' }
            ],
            challenges: 'El desafío es identificar en qué realmente vale la pena mantenerse firme.',
            summary: 'Con fija moderada baja, sabés cuándo sostener y cuándo adaptar, pero necesitás mayor claridad en tus prioridades.'
        },
        'balanced': {
            title: 'Equilibrado',
            description: 'Un 30-40% de modalidad fija representa un balance saludable. La persona sabe cuándo mantenerse firme y cuándo adaptarse. Tiene determinación sin ser rígida, persistencia sin ser terca.',
            characteristics: [
                { title: 'Determinación inteligente', text: 'Sostenés lo que tiene sentido sostener y soltás lo que no.' },
                { title: 'Perseverancia aplicada', text: 'No abandonás fácilmente pero tampoco te obstinás irracionalmente.' },
                { title: 'Estabilidad flexible', text: 'Tenés una base sólida pero podés adaptarte cuando es necesario.' },
                { title: 'Lealtad consistente', text: 'Sos leal y comprometido sin ser posesivo.' }
            ],
            challenges: 'El desafío es saber exactamente cuándo sostener y cuándo soltar.',
            summary: 'El 35% de modalidad fija te da estabilidad con flexibilidad, siendo constante pero no rígido.'
        },
        'high': {
            title: 'Alto',
            description: 'Un 40-50% de modalidad fija indica una fuerte energía de sostenimiento y perseverancia. La persona es determinada, persistente y leal. Una vez que se compromete, mantiene su posición con firmeza.',
            characteristics: [
                { title: 'Firmeza de principios', text: 'Tenés convicciones claras y las defendés. Tu palabra cuenta.' },
                { title: 'Perseverancia', text: 'No abandonás fácilmente. Cuando empezás algo, lo terminás.' },
                { title: 'Lealtad inquebrantable', text: 'Sos leal a las personas y causas que elegís. No traicionás fácilmente.' },
                { title: 'Estabilidad roca', text: 'Sos la roca en medio de la tormenta. Otros dependen de tu estabilidad.' }
            ],
            challenges: 'El desafío es no volverse terco o inflexible cuando las circunstancias cambian.',
            summary: 'Con un 45% de modalidad fija, tu carta sugiere una personalidad leal, constante y determinada.'
        },
        'very_high': {
            title: 'Muy alto',
            description: 'Más del 50% de modalidad fija indica un dominio extremo de la energía de sostenimiento. La persona es extremadamente terca, rehúsa cambiar incluso cuando es necesario. Una vez comprometida, es casi imposible cambiar su dirección.',
            characteristics: [
                { title: 'Terquedad extrema', text: 'No importa qué tan lógico sea el cambio, no lo hacés. Tu forma es la correcta.' },
                { title: 'Rigidez', text: 'El cambio te aterra. Preferís sufrir la situación que adaptarte.' },
                { title: 'Lealtad posesiva', text: 'Sos leal hasta el punto de ser controlador. No soltás a las personas.' },
                { title: 'Inflexibilidad', text: 'No importa la evidencia, mantenés tus posiciones.' }
            ],
            challenges: 'Tu desafío es desarrollar flexibilidad sin perder tu fortaleza. Aprendé que cambiar no es perder.',
            summary: 'Con más del 50% de fija, tu fuerza es tu debilidad. La terquedad puede destruir lo que construís.'
        }
    },
    'Mutable': {
        'low': {
            title: 'Bajo',
            description: 'Un porcentaje bajo de modalidad mutable (menos del 20%) indica una persona muy enfocada y determinada. Tiene dificultades para adaptarse o ver otras perspectivas. Puede ser rígida en su forma de pensar y actuar.',
            characteristics: [
                { title: 'Enfoque extremo', text: 'Una vez que te enfocás en algo, es difícil cambiar tu atención.' },
                { title: 'Rigidez mental', text: 'Tu forma de ver las cosas es difícil de cambiar. Solo ve blanco y negro.' },
                { title: 'Dificultad para adaptarse', text: 'El cambio te cuesta. Preferís la rutina y lo conocido.' },
                { title: 'Una dirección', text: 'Solo ves un camino y lo seguís sin cuestionarlo.' }
            ],
            challenges: 'El desafío es desarrollar flexibilidad mental y capacidad de ver otras perspectivas.',
            summary: 'La modalidad mutable baja te invita a abrirte a nuevas perspectivas y formas de hacer las cosas.'
        },
        'medium_low': {
            title: 'Moderado bajo',
            description: 'Un 20-30% de modalidad mutable indica una persona con foco pero que sabe adaptarse cuando es necesario. No es su naturaleza cambiar constantemente, pero tampoco es rígida.',
            characteristics: [
                { title: 'Foco con adaptación', text: 'Mantenés tu dirección pero ajustás el cómo.' },
                { title: 'Flexibilidad selectiva', text: 'Cambiás solo cuando realmente tiene sentido, no por cualquier cosa.' },
                { title: 'Estabilidad con apertura', text: 'Tenés una base sólida pero escuchás otras opiniones.' },
                { title: 'Cambio intencional', text: 'No changeás por cambio, solo cuando hay una razón válida.' }
            ],
            challenges: 'El desafío es no volverse demasiado rígido en tus posiciones.',
            summary: 'Con mutable moderada baja, sabés cuándo mantenerte y cuándo adaptarte, pero valorás la estabilidad.'
        },
        'balanced': {
            title: 'Equilibrado',
            description: 'Un 30-40% de modalidad mutable representa un balance saludable. La persona es flexible sin ser inestable, adaptable sin ser inconsistente. Puede ajustar su enfoque mientras mantiene su dirección.',
            characteristics: [
                { title: 'Adaptación inteligente', text: 'Cambiás cuando es necesario, no por capricho. Tu flexibilidad es estratégica.' },
                { title: 'Versatilidad aplicada', text: 'Podes hacer muchas cosas pero con propósito, no por dispersión.' },
                { title: 'Mente abierta', text: 'Escuchás otras perspectivas y las considerás sin perder tu centro.' },
                { title: 'Cambio con propósito', text: 'Cuando te adaptás, es porque hay una razón, no por inercia.' }
            ],
            challenges: 'El desafío es no adaptarse tanto que pierda su dirección y propósito.',
            summary: 'El 35% de modalidad mutable te da flexibilidad con propósito, siendo adaptable sin perder el rumbo.'
        },
        'high': {
            title: 'Alto',
            description: 'Un 40-50% de modalidad mutable indica una fuerte energía de adaptación y flexibilidad. La persona es versátil, puede ver múltiples perspectivas y se adapta fácilmente a nuevas situaciones.',
            characteristics: [
                { title: 'Versatilidad natural', text: 'Podes hacer muchas cosas y adaptarte a diversos contextos con facilidad.' },
                { title: 'Mente abierta', text: 'Considerás muchas perspectivas antes de decidir. No tenés mente cerrada.' },
                { title: 'Adaptación fluida', text: 'El cambio no te asusta. Te ajustás rápidamente a nuevas circunstancias.' },
                { title: 'Multi-talento', text: 'Tenés habilidades en varias áreas. Podés hacer de todo un poco.' }
            ],
            challenges: 'El desafío es no adaptarse tanto que pierda su dirección o disperse sus talentos.',
            summary: 'Con un 45% demutable, tu carta sugiere una personalidad versátil, adaptable y con gran capacidad de ajuste.'
        },
        'very_high': {
            title: 'Muy alto',
            description: 'Más del 50% de modalidad mutable indica un dominio extremo de la adaptación. La persona puede ser tan adaptable que pierde su sentido de identidad. Cambio constante sin anclar en nada.',
            characteristics: [
                { title: 'Inconstancia extrema', text: 'Cambiás constantemente de dirección, interés y compromiso.' },
                { title: 'Dispersión', text: 'Tu energía está en todas partes pero en ninguna. Todo comienza pero nada se termina.' },
                { title: 'Dificultad de enfoque', text: 'Mantener el foco te resulta muy difícil. Cualquier cosa nueva capta tu atención.' },
                { title: 'Cambio por cambio', text: 'Cambiás por inercia, no por elección consciente. No podés quedarte quieto.' }
            ],
            challenges: 'Tu desafío es encontrar un ancla y desarrollar disciplina para completar lo que empezás.',
            summary: 'Con más del 50% de mutable, tu debilidad es la dispersión. Encontrá un propósito y sostenete en él.'
        }
    }
};

export const HOUSE_DESCRIPTIONS: Record<string, string> = {
    'Primera': 'Identidad y apariencia. Cómo te presentás al mundo y tu enfoque hacia la vida.',
    'Segunda': 'Recursos y valores. Tus posesiones, habilidades y relación con el dinero.',
    'Tercera': 'Comunicación y aprendizaje. Hermanos, vecinos y cómo procesas información.',
    'Cuarta': 'Hogar y raíces. Tu familia, vivienda y sentido de pertenencia.',
    'Quinta': 'Creatividad y romance. Hijos, arte, juegos y expresión personal.',
    'Sexta': 'Salud y trabajo. Rutinas diarias, colegas y servicio a otros.',
    'Séptima': 'Relaciones. Parejas, socios y cómo te relacionas intimamente.',
    'Octava': 'Transformación. Compartir recursos, sexualidad y misterios.',
    'Novena': 'Viajes y filosofía. Estudios superiores, creencias y expansión mental.',
    'Décima': 'Carrera y reputación. Logros públicos, prestigio y metas profesionales.',
    'Undécima': 'Amistades y ideales. Grupos, causas sociales y aspiraciones.',
    'Duodécima': 'Lo oculto. Secretos, enemies ocultos, espiritualidad y aislamiento.'
};

export const PLANET_DESCRIPTIONS: Record<string, string> = {
    'Sol': 'Tu esencia e identidad. El centro de tu ser y tu voluntad de ser.',
    'Luna': 'Tu mundo emocional y sensibilidad. Cómo procesas sentimientos.',
    'Mercurio': 'Tu comunicación y pensamiento. Cómo razonas y expresas ideas.',
    'Venus': 'Tu amor y valores. Qué te atraey cómo generas armonía.',
    'Marte': 'Tu energía y acción. Tu impulso de conquistar y defender.',
    'Júpiter': 'Tu expansión y crecimiento. Dónde buscás suerte y abundancia.',
    'Saturno': 'Tu estructura y limitaciones. Dónde trabajás y construís madurez.',
    'Urano': 'Tu individualidad y cambio. Dónde buscás originalidad y libertad.',
    'Neptuno': 'Tu espiritualidad e intuición. Dónde buscas trascendencia.',
    'Plutón': 'Tu transformación y poder. Dónde experimentás cambios profundos.',
    'Quirón': 'Tu sanación y herida. Dónde podés sanarte a vos y a otros.',
    'Sirio': 'Tu propósito superior. Conexión con lo divino y liderazgo.',
    'Nodo Norte': 'Tu destino y propósito de vida. Lo que viniste a aprender.',
    'Nodo Sur': 'Tu experiencia pasada. Habilidades que traés de vidas anteriores.',
    'Lilith': 'Tu naturaleza oscura. Lo reprimido y tu poder personal.',
    'Ascendente': 'Tu máscara social. Cómo te perciben los demás al conocerte.',
    'Medio Cielo': 'Tu pública y reputación. Tu imagen ante el mundo.'
};

export const ASPECT_DESCRIPTIONS: Record<string, string> = {
    'Conjunción': `La conjunción es uno de los aspectos más poderosos y personales. Cuando dos planetas están juntos en tu carta, sus energías se fusionan y trabajan como una sola fuerza. Este aspecto aporta una fuerte energía característica que influye significativamente en tu personalidad. Las personas con muchas conjunciones en su carta suelen tener talentos naturales marcados y una fuerte presencia. La energía de los planetas envolvidos se expresa de manera directa y automática, sin esfuerzo.`,
    'Sextil': `El sextil es un aspecto armónico que representa oportunidades y talentos naturales. Indica facilidad para expresar las energías de los planetas involucrados, aunque esta facilidad a menudo no se aprecia plenamente hasta que uno hace un esfuerzo consciente por desarrollar estos talentos. Los sextiles son puntos débiles que invitan al crecimiento personal. Son regalos que debemos elegir abrir y desarrollar.`,
    'Trígono': `El trígono es el aspecto más armónico y fluido. Representa facilidad natural, talento innato y recursos internos disponibles sin esfuerzo. Las energías de los planetas involucrados fluyen armoniosamente, creando habilidades que parecen venir naturalmente. Sin embargo, esta misma facilidad puede llevar a la complacencia. Los trígonos son bendiciones que debemos usar sabiamente, ya que pueden generar inercia si no se aprovechan activamente.`,
    
    'Oposición': `La oposición es un aspecto de polaridad que representa dos fuerzas opuestas en tensión. Este aspecto indica una lección de vida sobre equilibrio entre dos áreas o energías. Las oposiciones pueden manifest como relaciones interpersonales importantes (especialmente con la tensión de "yo vs. otro"), o como luchas internas entre dos aspectos de tu personalidad. La clave está en aprender a integrar estas fuerzas opuestas en lugar de dejarlas en conflicto constante.`,
    
    'Semisextil': `El semisextil es un aspecto sutil que representa oportunidades menores o ajustes finos. Indica una necesidad de adaptación menor entre las energías de los planetas involucrados. Este aspecto puede revelar talentos escondidos o pequeño dones que requieren atención para desarrollarse. Aunque menos dramático que otros aspectos, los semisextiles ofrecen matices importantes en la personalidad.`,
    
    'Semicuadratura': `La semicuadratura es un aspecto de tensión menor que genera fricción sutil. A diferencia de la cuadratura principal, esta tensión es más fácil de ignorar pero aún así crea una necesidad de ajuste. Puede manifest como irritaciones menores o frustraciones que acumulan con el tiempo. Reconocer esta energía ayuda a evitar que pequeño problemas se conviertan en fuente de estrés crónico.`,
    
    'Sesquicuadratura': `La sesquicuadratura (también llamada cuadratura y media) es un aspecto de tensión persistente. Combina la energía de la cuadratura con la del sextil, creando una dinámica compleja. Este aspecto sugiere que hay una estructura (cuadratura) que necesita ser ajustada o desafiada continuamente. Las lecciones vienen de manera recurrente hasta que se aborda la tensión correctamente.`
};

const ASPECT_INTERPRETATIONS: Record<string, Record<string, string>> = {
    'Sol': {
        'Conjunción': 'Tu identidad está fuertemente influenciada por la energía de este planeta. Es una característica central de tu personalidad que define gran parte de quién eres.',
        'Trígono': 'Tu expresión vital fluye naturalmente con este planeta. Tienes una manera armoniosa de expresar tu esencia y los demás perciben tu brillo de forma positiva.',
        'Sextil': 'Tu identidad tiene talentos naturales relacionados con este planeta. Son dones que puedes desarrollar para enriquecer tu propósito de vida.',
        'Cuadratura': 'Tu identidad enfrenta desafíos relacionados con este planeta. Debes trabajar activamente para integrar esta energía de manera constructiva.',
        'Oposición': 'Tu identidad está en tensión con este planeta. Puede manifest como una lucha entre cómo te percibes a ti mismo y cómo te perciben los demás.'
    },
    'Luna': {
        'Conjunción': 'Tus respuestas emocionales y tu mundo interior están profundamente marcados por este planeta. Tu manera de procesar sentimientos es parte central de quién eres.',
        'Trígono': 'Tu vida emocional fluye naturalmente. Tienes una intuición fuerte y una conexión profunda con tus necesidades emocionales que otros perciben como vulnerabilidad positiva.',
        'Sextil': 'Tu mundo interior tiene talentos emocionales que puedes desarrollar. Son regalos sutiles que mejoran tu bienestar si los cultivas conscientemente.',
        'Cuadratura': 'Tu vida emocional tiene tensiones que requieren trabajo. Puedes tener emociones intensas o respuestas desproporcionadas en ciertas áreas que debes aprender a equilibrar.',
        'Oposición': 'Hay una tensión entre tus necesidades emocionales y las expectativas de los demás. Debes encontrar un equilibrio entre dar y recibir en el ámbito emocional.'
    },
    'Mercurio': {
        'Conjunción': 'Tu comunicación y manera de pensar están fuertemente influenciadas por este planeta. Tu mente opera de una manera particular que define tu estilo de expresión.',
        'Trígono': 'Tienes facilidad para expresarte y comunicar tus ideas. Tu comunicación es fluida y los demás te perciben como articulado e inteligente.',
        'Sextil': 'Tienes talentos comunicativos naturales. Puedes desarrollar habilidades de escritura, habla o negociación que benefician tu vida.',
        'Cuadratura': 'Tu comunicación enfrenta desafíos. Puedes tener tendencia a malinterpretar o ser malinterpretado, lo que requiere esfuerzo consciente para expresarte claramente.',
        'Oposición': 'Hay tensión entre cómo te comunicas y cómo te reciben. Debes trabajar en encontrar el equilibrio entre expresar tu verdad y ser recibido positivamente.'
    },
    'Venus': {
        'Conjunción': 'Tu manera de amar y tus valores están marcados por este planeta. Las relaciones y las cosas que valoras son una parte central de tu identidad.',
        'Trígono': 'Tus relaciones fluyen naturalmente. Tienes facilidad para crear armonía y los demás disfrutan de tu compañía y tus dones artísticos.',
        'Sextil': 'Tienes talentos naturales en el amor y el arte. Son habilidades que puedes desarrollar para enriquecer tus relaciones y tu vida estética.',
        'Cuadratura': 'Tus relaciones enfrentan desafíos. Puede haber conflictos en cómo das y recibes amor, o tensiones en valores que requieren trabajo para resolver.',
        'Oposición': 'Hay tensión entre tus necesidades relacionales y las de otros. Debes aprender el equilibrio entre tus valores y los del entorno.'
    },
    'Marte': {
        'Conjunción': 'Tu energía de acción y deseo está fuertemente influenciada por este planeta. Tu manera de perseguir lo que quieres es parte central de quién eres.',
        'Trígono': 'Tienes energía fluida para actuar y perseguir tus metas. Tu drive es natural y los demás perciben tu energía como inspiradora.',
        'Sextil': 'Tienes talentos naturales para la acción. Puedes desarrollar tu fuerza de voluntad y disciplina de manera que beneficie tus metas.',
        'Cuadratura': 'Tu energía enfrenta obstáculos. Puede haber frustración, impaciencia o agresividad que debes aprender a canalizar constructivamente.',
        'Oposición': 'Hay tensión entre tu acción y la reacción de otros. Debes aprender a equilibrar tus deseos con las necesidades del entorno.'
    }
};

const PLANET_ASPECT_KEYWORDS: Record<string, string> = {
    'Sol': 'vitalidad, identidad, propósito de vida',
    'Luna': 'emociones, necesidades, intuición',
    'Mercurio': 'comunicación, pensamiento, aprendizaje',
    'Venus': 'amor, valores, relaciones, belleza',
    'Marte': 'acción, deseo, energía, competencia',
    'Júpiter': 'expansión, crecimiento, suerte, optimismo',
    'Saturno': 'disciplina, responsabilidad, límites, sabiduría',
    'Urano': 'innovación, libertad, cambio, originalidad',
    'Neptuno': 'sueños, intuición, espiritualidad, creatividad',
    'Plutón': 'transformación, poder, renacimiento',
    'Quirón': 'sanación, vulnerabilidad, integración',
    'Nodo Norte': 'propósito, crecimiento, destino',
    'Nodo Sur': 'karma, patrones, herencia',
    'Ascendente': 'máscara, expresión, enfoque vital'
};

const PLANET_PAIR_INTERPRETATIONS: Record<string, Record<string, string>> = {
    'Sol-Luna': {
        'Conjunción': 'La conjunción Sol-Luna representa la integración de tu identidad consciente (Sol) con tu mundo emocional inconsciente (Luna). Es el núcleo de tu ser, donde tu voluntad se encuentra con tus necesidades. Esta posición sugiere una persona con fuerte sentido de self y profundidad emocional.',
        'Trígono': 'El trígono Sol-Luna crea una armonía natural entre tu identidad y tus emociones. Tenés una comprensión intuitiva de vos mismo y una capacidad notable para equilibrar tus necesidades internas con tus metas externas.',
        'Sextil': 'El sextil Sol-Luna indica talentos naturales para integrar diferentes aspectos de vos mismo. Tenés la capacidad de ser auténtico mientras mantenés relaciones armoniosas.',
        'Cuadratura': 'La cuadratura Sol-Luna genera tensión entre cómo te percibís y cómo te sentís. Podés experimentar conflictos internos entre tu voluntad y tus emociones. Este desafío te lleva a un crecimiento profundo si lo trabajás.',
        'Oposición': 'La oposición Sol-Luna representa una batalla entre tu identidad y tu mundo emocional. El trabajo es encontrar equilibrio entre dar y recibir.'
    },
    'Sol-Mercurio': {
        'Conjunción': 'La conjunción Sol-Mercurio fusiona tu identidad con tu mente. Tenés una inteligencia brillante y una capacidad notable para comunicar tu visión personal.',
        'Trígono': 'El trígono Sol-Mercurio proporciona fluidez mental y expresiva. Tu mente y tu identidad trabajan juntas harmoniosamente.',
        'Sextil': 'El sextil Sol-Mercurio indica talentos naturales para la comunicación. Tenés facilidad para expresar tus ideas y conectar con otros.',
        'Cuadratura': 'La cuadratura Sol-Mercurio genera tensión entre lo que pensás y cómo te expresás. El desafío es integrar mente y personalidad.',
        'Oposición': 'La oposición Sol-Mercurio indica conflicto entre tu identidad y tu comunicación. El trabajo es alinear palabra y ser.'
    },
    'Sol-Venus': {
        'Conjunción': 'La conjunción Sol-Venus es una de las más bellas en la carta. Fusiona tu identidad con el amor, la belleza y la armonía. Tu personalidad brilla con gracia.',
        'Trígono': 'El trígono Sol-Venus crea facilidad para dar y recibir amor. Tu identidad fluye naturalmente hacia relaciones armoniosas y expresiones artísticas.',
        'Sextil': 'El sextil Sol-Venus indica talentos naturales en relaciones y artes. Tenés facilidad para conectar con otros y para apreciar la belleza.',
        'Cuadratura': 'La cuadratura Sol-Venus genera tensión entre tu identidad y tus relaciones. El desafío es aprender a amar sin perderte.',
        'Oposición': 'La oposición Sol-Venus indica conflicto entre tu identidad y tus valores relacionales. El trabajo es encontrar amor propio.'
    },
    'Sol-Marte': {
        'Conjunción': 'La conjunción Sol-Marte es una de las más energéticas. Tu identidad está fusionada con la acción, el deseo y la voluntad.',
        'Trígono': 'El trígono Sol-Marte proporciona energía fluida y motivación natural. Tu voluntad y tu acción trabajan juntas sin esfuerzo.',
        'Sextil': 'El sextil Sol-Marte indica talentos naturales para la acción y el liderazgo. Tenés facilidad para iniciar proyectos.',
        'Cuadratura': 'La cuadratura Sol-Marte genera frustración entre tu identidad y tu acción. El desafío es canalizar tu energía de manera constructiva.',
        'Oposición': 'La oposición Sol-Marte indica tensión entre cómo te expresás y cómo actuás. El trabajo es equilibrar agresividad con diplomacia.'
    },
    'Sol-Júpiter': {
        'Conjunción': 'La conjunción Sol-Júpiter expande tu identidad con optimismo y sabiduría. Tu personalidad brilla con luz positiva.',
        'Trígono': 'El trígono Sol-Júpiter proporciona facilidad para crecer y expandirte. Tu identidad fluye naturalmente hacia el éxito.',
        'Sextil': 'El sextil Sol-Júpiter indica talentos para la enseñanza y el liderazgo positivo. Tenés un don para inspirar.',
        'Cuadratura': 'La cuadratura Sol-Júpiter puede generar excesos o arrogancia. El desafío es canalizar esta energía expansiva constructivamente.',
        'Oposición': 'La oposición Sol-Júpiter indica conflicto entre tu identidad y tu necesidad de crecimiento.'
    },
    'Sol-Saturno': {
        'Conjunción': 'La conjunción Sol-Saturno es una posición de madurez y responsabilidad. Tu identidad está influenciada por estructura y disciplina.',
        'Trígono': 'El trígono Sol-Saturno proporciona estabilidad y sabiduría práctica. Tenés la capacidad de construir cosas que duran.',
        'Sextil': 'El sextil Sol-Saturno indica talentos para el trabajo estructurado. Tenés facilidad para establecer metas realistas.',
        'Cuadratura': 'La cuadratura Sol-Saturno genera tensión entre tu identidad y las restricciones. El desafío es superar el miedo al fracaso.',
        'Oposición': 'La oposición Sol-Saturno indica conflicto entre tu identidad y la responsabilidad.'
    },
    'Sol-Urano': {
        'Conjunción': 'La conjunción Sol-Urano es una posición de originalidad e innovación. Tu identidad está ligada a la libertad y el cambio.',
        'Trígono': 'El trígono Sol-Urano proporciona fluidez para innovar. Tu identidad trabaja naturalmente con la energía progresiva.',
        'Sextil': 'El sextil Sol-Urano indica talentos para la invención y la originalidad. Tenés facilidad para pensar fuera de lo convencional.',
        'Cuadratura': 'La cuadratura Sol-Urano genera tensión entre tu identidad y la necesidad de cambio. El desafío es canalizar tu energía disruptiva.',
        'Oposición': 'La oposición Sol-Urano indica conflicto entre tu individualidad y tu necesidad de pertenencia.'
    },
    'Sol-Neptuno': {
        'Conjunción': 'La conjunción Sol-Neptuno es una posición de idealismo y espiritualidad. Tu identidad está fusionada con los sueños y la intuición.',
        'Trígono': 'El trígono Sol-Neptuno proporciona facilidad para conectar con lo transcendental. Tu identidad fluye naturalmente hacia la espiritualidad.',
        'Sextil': 'El sextil Sol-Neptuno indica talentos artísticos y espirituales. Tenés facilidad para acceder a niveles profundos de conciencia.',
        'Cuadratura': 'La cuadratura Sol-Neptuno genera tensión entre realidad e ideales. El desafío es anclar tus sueños en la realidad.',
        'Oposición': 'La oposición Sol-Neptuno indica conflicto entre tu identidad y tu mundo espiritual.'
    },
    'Sol-Plutón': {
        'Conjunción': 'La conjunción Sol-Plutón es una posición de transformación y poder. Tu identidad está influenciada por el ciclo de muerte y renacimiento.',
        'Trígono': 'El trígono Sol-Plutón proporciona poder regenerativo natural. Tenés el don de liderar cambios profundos.',
        'Sextil': 'El sextil Sol-Plutón indica talentos para el cambio transformador. Tenés facilidad para reinventarte.',
        'Cuadratura': 'La cuadratura Sol-Plutón genera tensión entre tu identidad y el poder. El desafío es usar tu poder sin abusar.',
        'Oposición': 'La oposición Sol-Plutón indica conflicto entre tu identidad y el poder de otros.'
    },
    'Luna-Mercurio': {
        'Conjunción': 'La conjunción Luna-Mercurio fusiona tus emociones con tu mente. Tenés una memoria notable y capacidad de comunicar sentimientos.',
        'Trígono': 'El trígono Luna-Mercurio proporciona fluidez entre emoción y razón. Tu mente y corazón trabajan juntos.',
        'Sextil': 'El sextil Luna-Mercurio indica talentos para la comunicación emocional. Tenés facilidad para hablar de sentimientos.',
        'Cuadratura': 'La cuadratura Luna-Mercurio genera tensión entre emociones y pensamiento. El desafío es integrar mente y corazón.',
        'Oposición': 'La oposición Luna-Mercurio indica conflicto entre cómo sentís y cómo pensás.'
    },
    'Luna-Venus': {
        'Conjunción': 'La conjunción Luna-Venus es armoniosa. Tu mundo emocional está lleno de amor y belleza.',
        'Trígono': 'El trígono Luna-Venus proporciona facilidad para dar y recibir amor. Tenés un don para crear ambientes acogedores.',
        'Sextil': 'El sextil Luna-Venus indica talentos para las relaciones y las artes.',
        'Cuadratura': 'La cuadratura Luna-Venus genera tensión entre necesidades emocionales y valores. El desafío es ver el amor realistamente.',
        'Oposición': 'La oposición Luna-Venus indica conflicto entre necesidades emocionales y valores relacionales.'
    },
    'Luna-Marte': {
        'Conjunción': 'La conjunción Luna-Marte es de energía emocional intensa. Tus emociones son fuertes y tu drive para satisfacer necesidades es notable.',
        'Trígono': 'El trígono Luna-Marte proporciona energía emocional fluida. Tu vida emocional y acción trabajan juntas naturalmente.',
        'Sextil': 'El sextil Luna-Marte indica talentos para la acción emocional. Tenés facilidad para perseguir lo que deseás.',
        'Cuadratura': 'La cuadratura Luna-Marte genera tensión entre emociones y acción. El desafío es canalizar emoción en acción constructiva.',
        'Oposición': 'La oposición Luna-Marte indica conflicto entre necesidades emocionales y acción.'
    },
    'Luna-Júpiter': {
        'Conjunción': 'La conjunción Luna-Júpiter expande tu mundo emocional con optimismo. Tenés una naturaleza cariñosa y necesidad de crecimiento.',
        'Trígono': 'El trígono Luna-Júpiter proporciona emocionalidad positiva. Tus emociones fluyen naturalmente hacia la alegría.',
        'Sextil': 'El sextil Luna-Júpiter indica talentos para el crecimiento emocional. Tenés facilidad para expandir tu mundo interior.',
        'Cuadratura': 'La cuadratura Luna-Júpiter puede generar excesos emocionales. El desafío es anclar emociones.',
        'Oposición': 'La oposición Luna-Júpiter indica conflicto entre necesidades emocionales y crecimiento.'
    },
    'Luna-Saturno': {
        'Conjunción': 'La conjunción Luna-Saturno es de madurez emocional temprana. Tu mundo emocional está estructurado por responsabilidad.',
        'Trígono': 'El trígono Luna-Saturno proporciona estabilidad emocional. Tus emociones están equilibradas con madurez.',
        'Sextil': 'El sextil Luna-Saturno indica talentos para la estructuración emocional.',
        'Cuadratura': 'La cuadratura Luna-Saturno genera tensión entre emociones y responsabilidades. El desafío es expresar emociones libremente.',
        'Oposición': 'La oposición Luna-Saturno indica conflicto entre mundo emocional y estructuras.'
    },
    'Luna-Urano': {
        'Conjunción': 'La conjunción Luna-Urano es de emocionalidad innovadora. Tu mundo emocional necesita libertad y cambio.',
        'Trígono': 'El trígono Luna-Urano proporciona facilidad para el cambio emocional. Tus emociones fluyen naturalmente hacia la innovación.',
        'Sextil': 'El sextil Luna-Urano indica talentos para la innovación emocional.',
        'Cuadratura': 'La cuadratura Luna-Urano genera tensión entre emociones y libertad. El desafío es crear libertad estable.',
        'Oposición': 'La oposición Luna-Urano indica conflicto entre mundo emocional y autonomía.'
    },
    'Luna-Neptuno': {
        'Conjunción': 'La conjunción Luna-Neptuno es de sensibilidad e intuición profundas. Tu mundo emocional está conectado con el inconsciente.',
        'Trígono': 'El trígono Luna-Neptuno proporciona profundidad emocional espiritual. Tenés un don para la sanación emocional.',
        'Sextil': 'El sextil Luna-Neptuno indica talentos para la intuición y creatividad emocional.',
        'Cuadratura': 'La cuadratura Luna-Neptuno genera tensión entre realidad y sueño emocional. El desafío es anclar sensibilidad.',
        'Oposición': 'La oposición Luna-Neptuno indica conflicto entre emociones y espiritualidad.'
    },
    'Luna-Plutón': {
        'Conjunción': 'La conjunción Luna-Plutón es de intensidad emocional transformadora. Tu mundo emocional tiene capacidad de renacer.',
        'Trígono': 'El trígono Luna-Plutón proporciona poder emocional regenerativo. Tus emociones tienen capacidad de transformar.',
        'Sextil': 'El sextil Luna-Plutón indica talentos para la transformación emocional.',
        'Cuadratura': 'La cuadratura Luna-Plutón genera tensión emocional intensa. El desafío es transformar sin destruir.',
        'Oposición': 'La oposición Luna-Plutón indica conflicto entre emociones y poder.'
    },
    'Mercurio-Venus': {
        'Conjunción': 'La conjunción Mercurio-Venus es de comunicación armoniosa. Tu mente está orientada hacia las relaciones y la belleza.',
        'Trígono': 'El trígono Mercurio-Venus proporciona fluidez comunicativa en relaciones. Tu mente y valores trabajan juntos.',
        'Sextil': 'El sextil Mercurio-Venus indica talentos para la comunicación en relaciones.',
        'Cuadratura': 'La cuadratura Mercurio-Venus genera tensión entre comunicación y valores.',
        'Oposición': 'La oposición Mercurio-Venus indica conflicto entre comunicación y valores.'
    },
    'Mercurio-Marte': {
        'Conjunción': 'La conjunción Mercurio-Marte es de comunicación agresiva y debate. Tu mente es rápida y directa.',
        'Trígono': 'El trígono Mercurio-Marte proporciona energía mental dinámica. Tu mente y acción trabajan juntas.',
        'Sextil': 'El sextil Mercurio-Marte indica talentos para la comunicación enérgica.',
        'Cuadratura': 'La cuadratura Mercurio-Marte genera tensión entre pensamiento y acción. El desafío es pensar antes de actuar.',
        'Oposición': 'La oposición Mercurio-Marte indica conflicto entre comunicación y acción.'
    },
    'Mercurio-Júpiter': {
        'Conjunción': 'La conjunción Mercurio-Júpiter es de mente expansiva. Tenés una necesidad de aprender y compartir conocimientos.',
        'Trígono': 'El trígono Mercurio-Júpiter proporciona fluidez mental expansiva. Tu mente trabaja naturalmente con optimismo.',
        'Sextil': 'El sextil Mercurio-Júpiter indica talentos para la enseñanza y el aprendizaje.',
        'Cuadratura': 'La cuadratura Mercurio-Júpiter puede generar excesos mentales o tendencia a exagerar.',
        'Oposición': 'La oposición Mercurio-Júpiter indica conflicto entre mente y expansión.'
    },
    'Mercurio-Saturno': {
        'Conjunción': 'La conjunción Mercurio-Saturno es de mente disciplinada. Tu pensamiento está estructurado y profundizado.',
        'Trígono': 'El trígono Mercurio-Saturno proporciona profundidad mental. Tu mente trabaja con madurez y estructura.',
        'Sextil': 'El sextil Mercurio-Saturno indica talentos para el análisis profundo.',
        'Cuadratura': 'La cuadratura Mercurio-Saturno genera tensión entre mente y limitaciones. El desafío es pensar sin limitaciones.',
        'Oposición': 'La oposición Mercurio-Saturno indica conflicto entre comunicación y estructura.'
    },
    'Mercurio-Urano': {
        'Conjunción': 'La conjunción Mercurio-Urano es de mente innovador. Tenés pensamiento original y facilidad para nuevas ideas.',
        'Trígono': 'El trígono Mercurio-Urano proporciona fluidez mental innovadora. Tu mente trabaja naturalmente con cambio.',
        'Sextil': 'El sextil Mercurio-Urano indica talentos para la invención y el pensamiento original.',
        'Cuadratura': 'La cuadratura Mercurio-Urano genera tensión entre mente y cambio. El desafío es canalizar energía mental revolucionaria.',
        'Oposición': 'La oposición Mercurio-Urano indica conflicto entre comunicación y innovación.'
    },
    'Mercurio-Neptuno': {
        'Conjunción': 'La conjunción Mercurio-Neptuno es de mente intuitiva. Tenés sensibilidad a lo invisible y pensamiento creativo.',
        'Trígono': 'El trígono Mercurio-Neptuno proporciona fluidez mental intuitiva. Tu mente trabaja naturalmente con la imaginación.',
        'Sextil': 'El sextil Mercurio-Neptuno indica talentos para la escritura creativa y la intuición.',
        'Cuadratura': 'La cuadratura Mercurio-Neptuno genera tensión entre realidad e ilusión. El desafío es anclar pensamientos.',
        'Oposición': 'La oposición Mercurio-Neptuno indica conflicto entre mente y espiritualidad.'
    },
    'Mercurio-Plutón': {
        'Conjunción': 'La conjunción Mercurio-Plutón es de mente penetrante. Tenés capacidad de ver lo que otros no ven.',
        'Trígono': 'El trígono Mercurio-Plutón proporciona profundidad mental transformadora. Tu mente trabaja con poder de investigación.',
        'Sextil': 'El sextil Mercurio-Plutón indica talentos para el análisis profundo y la investigación.',
        'Cuadratura': 'La cuadratura Mercurio-Plutón genera tensión entre mente y poder. El desafío es usar tu penetración constructivamente.',
        'Oposición': 'La oposición Mercurio-Plutón indica conflicto entre comunicación y transformación.'
    },
    'Venus-Marte': {
        'Conjunción': 'La conjunción Venus-Marte es de pasión y deseo. Tu manera de amar está llena de energía y drive.',
        'Trígono': 'El trígono Venus-Marte proporciona armonía entre amor y acción. Tus relaciones fluyen naturalmente hacia la intimidad.',
        'Sextil': 'El sextil Venus-Marte indica talentos para expresar deseo y amor activamente.',
        'Cuadratura': 'La cuadratura Venus-Marte genera tensión entre amor y deseo. El desafío es equilibrar giving y taking en amor.',
        'Oposición': 'La oposición Venus-Marte indica conflicto entre cómo amás y cómo deseás.'
    },
    'Venus-Júpiter': {
        'Conjunción': 'La conjunción Venus-Júpiter es de amor expansivo. Tenés una naturaleza generosa y optimista en el amor.',
        'Trígono': 'El trígono Venus-Júpiter proporciona facilidad para el amor y las relaciones positivas. Tu amor fluye naturalmente hacia la abundancia.',
        'Sextil': 'El sextil Venus-Júpiter indica talentos para las relaciones expandidas y el amor generoso.',
        'Cuadratura': 'La cuadratura Venus-Júpiter puede generar excesos en el amor o tendencia a idealizar.',
        'Oposición': 'La oposición Venus-Júpiter indica conflicto entre amor y libertad.'
    },
    'Venus-Saturno': {
        'Conjunción': 'La conjunción Venus-Saturno es de amor maduro. Tenés una necesidad de relaciones estructurales y comprometidas.',
        'Trígono': 'El trígono Venus-Saturno proporciona estabilidad en el amor. Tus relaciones tienen profundidad y permanencia.',
        'Sextil': 'El sextil Venus-Saturno indica talentos para relaciones largas y comprometidas.',
        'Cuadratura': 'La cuadratura Venus-Saturno genera tensión entre amor y responsabilidad. El desafío es abrir el corazón sin miedo.',
        'Oposición': 'La oposición Venus-Saturno indica conflicto entre necesidades relacionales y independencia.'
    },
    'Venus-Urano': {
        'Conjunción': 'La conjunción Venus-Urano es de amor independiente. Tenés una necesidad de libertad dentro de las relaciones.',
        'Trígono': 'El trígono Venus-Urano proporciona facilidad para relaciones únicas e innovadoras.',
        'Sextil': 'El sextil Venus-Urano indica talentos para relaciones no convencionales.',
        'Cuadratura': 'La cuadratura Venus-Urano genera tensión entre amor y libertad. El desafío es encontrar compromiso en la libertad.',
        'Oposición': 'La oposición Venus-Urano indica conflicto entre relaciones y autonomía.'
    },
    'Venus-Neptuno': {
        'Conjunción': 'La conjunción Venus-Neptuno es un aspecto que fusiona el amor, la belleza y el deseo (Venus) con la espiritualidad, la idealización y los sueños (Neptuno). Crea una atmósfera intensamente romántica, artística y sensible, propicia para la inspiración, pero también conlleva el riesgo de idealizar parejas o situaciones, resultando en confusión.Principales significados y efectos:Amor idealizado y浪漫ico: Se busca un amor de cuento de hadas o alma gemela. Existe una alta capacidad de entrega, romanticismo y devoción, pero también riesgo de no ver la realidad de la pareja.Aumento de la sensibilidad y creatividad: Excelente periodo para artistas, músicos y fotógrafos. La imaginación y el gusto estético se agudizan.Atmósfera onírica: Se tiende a ver el mundo a través de un "filtro suave", con una sensación mágica y evasiva de la realidad.Riesgo de ilusión: Se puede caer en engaños, decepciones o escapar de los problemas reales. Es fundamental mantener un "anclaje" en la realidad para evitar fantasías excesivas.En el amor:Este aspecto puede indicar un "amor incondicional" o una conexión espiritual profunda, pero la advertencia es evitar el papel de "salvador" o la dependencia emocional.En la vida diaria:Es un momento para conectar con la compasión, la música, el cine y la belleza artística, dejando fluir la intuición.',
        'Trígono': 'El trígono Venus-Neptuno proporciona fluidez entre amor y espiritualidad. Tus relaciones fluyen naturalmente hacia la conexión transcendental. Tenés un don para el amor ideal y la creatividad artística.',
        'Sextil': 'El sextil Venus-Neptuno indica talentos para la expresión artística espiritual y las relaciones intuitivas.',
        'Cuadratura': 'La cuadratura Venus-Neptuno genera tensión entre amor ideal y realidad. El desafío es ver a tu pareja realistamente.',
        'Oposición': 'La oposición Venus-Neptuno indica conflicto entre amor ideal y mundo real.'
    },
    'Venus-Plutón': {
        'Conjunción': 'La conjunción Venus-Plutón es de amor intenso y transformador. Tu manera de amar es profunda y poderosa.',
        'Trígono': 'El trígono Venus-Plutón proporciona poder transformador en el amor. Tus relaciones tienen capacidad de Renacimiento.',
        'Sextil': 'El sextil Venus-Plutón indica talentos para relaciones profundas y transformadoras.',
        'Cuadratura': 'La cuadratura Venus-Plutón genera tensión entre amor y poder. El desafío es amar sin controlar.',
        'Oposición': 'La oposición Venus-Plutón indica conflicto entre amor y control.'
    },
    'Marte-Júpiter': {
        'Conjunción': 'La conjunción Marte-Júpiter es de acción expansiva. Tu energía está orientada hacia el crecimiento y la aventura.',
        'Trígono': 'El trígono Marte-Júpiter proporciona energía fluida para la expansión. Tu acción lleva naturalmente al éxito.',
        'Sextil': 'El sextil Marte-Júpiter indica talentos para la acción expansiva y el liderazgo positivo.',
        'Cuadratura': 'La cuadratura Marte-Júpiter puede generar excesos de energía o arrogancia.',
        'Oposición': 'La oposición Marte-Júpiter indica conflicto entre acción y expansión.'
    },
    'Marte-Saturno': {
        'Conjunción': 'La conjunción Marte-Saturno es de acción disciplinada. Tu energía está canalizada a través de la estructura.',
        'Trígono': 'El trígono Marte-Saturno proporciona energía estructurada. Tu acción es persistente y enfocada.',
        'Sextil': 'El sextil Marte-Saturno indica talentos para el trabajo disciplinado y el liderazgo estable.',
        'Cuadratura': 'La cuadratura Marte-Saturno genera tensión entre energía y limitaciones. El desafío es actuar sin frustrarte.',
        'Oposición': 'La oposición Marte-Saturno indica conflicto entre acción y estructura.'
    },
    'Marte-Urano': {
        'Conjunción': 'La conjunción Marte-Urano es de acción revolucionaria. Tu energía busca cambio e innovación.',
        'Trígono': 'El trígono Marte-Urano proporciona energía para la innovación. Tu acción es original y disruptiva.',
        'Sextil': 'El sextil Marte-Urano indica talentos para la acción innovadora.',
        'Cuadratura': 'La cuadratura Marte-Urano genera tensión entre energía y cambio. El desafío es canalizar rebelión constructivamente.',
        'Oposición': 'La oposición Marte-Urano indica conflicto entre acción e innovación.'
    },
    'Marte-Neptuno': {
        'Conjunción': 'La conjunción Marte-Neptuno es de acción idealista. Tu energía está orientada hacia sueños y visiones.',
        'Trígono': 'El trígono Marte-Neptuno proporciona energía para realizar sueños. Tu acción es guiada por intuición.',
        'Sextil': 'El sextil Marte-Neptuno indica talentos para la acción creativa e intuitiva.',
        'Cuadratura': 'La cuadratura Marte-Neptuno genera tensión entre acción y sueño. El desafío es anclar energía en la realidad.',
        'Oposición': 'La oposición Marte-Neptuno indica conflicto entre acción y espiritualidad.'
    },
    'Marte-Plutón': {
        'Conjunción': 'La conjunción Marte-Plutón es de acción transformadora. Tu energía tiene poder de cambio profundo.',
        'Trígono': 'El trígono Marte-Plutón proporciona energía para la transformación. Tu acción es poderosa y persistente.',
        'Sextil': 'El sextil Marte-Plutón indica talentos para la acción transformadora.',
        'Cuadratura': 'La cuadratura Marte-Plutón genera tensión entre energía y poder. El desafío es usar poder sin destruir.',
        'Oposición': 'La oposición Marte-Plutón indica conflicto entre acción y transformación.'
    },
    'Júpiter-Saturno': {
        'Conjunción': 'La conjunción Júpiter-Saturno es de estructura expansiva. Equilibra crecimiento con responsabilidad.',
        'Trígono': 'El trígono Júpiter-Saturno proporciona facilidad para construir algo significativo. Tenés visión con pies en la tierra.',
        'Sextil': 'El sextil Júpiter-Saturno indica talentos para el crecimiento estructurado.',
        'Cuadratura': 'La cuadratura Júpiter-Saturno genera tensión entre expansión y limitaciones. El desafío es encontrar balance.',
        'Oposición': 'La oposición Júpiter-Saturno indica conflicto entre crecimiento y estructura.'
    },
    'Júpiter-Urano': {
        'Conjunción': 'La conjunción Júpiter-Urano es de innovación progresiva. Tu visión está orientada hacia el cambio positivo.',
        'Trígono': 'El trígono Júpiter-Urano proporciona facilidad para la innovación visionaria. Tenés capacidad de ver el futuro.',
        'Sextil': 'El sextil Júpiter-Urano indica talentos para el cambio progresivo.',
        'Cuadratura': 'La cuadratura Júpiter-Urano genera tensión entre visión y cambio súbito.',
        'Oposición': 'La oposición Júpiter-Urano indica conflicto entre expansión y libertad.'
    },
    'Júpiter-Neptuno': {
        'Conjunción': 'La conjunción Júpiter-Neptuno es de espiritualidad expansiva. Tu búsqueda de verdad va más allá de lo convencional.',
        'Trígono': 'El trígono Júpiter-Neptuno proporciona facilidad para la expansión espiritual. Tu visión incluye lo transcendental.',
        'Sextil': 'El sextil Júpiter-Neptuno indica talentos para la guía espiritual.',
        'Cuadratura': 'La cuadratura Júpiter-Neptuno genera tensión entre realidad e ideales. El desafío es anclar visión espiritual.',
        'Oposición': 'La oposición Júpiter-Neptuno indica conflicto entre expansión y espiritualidad.'
    },
    'Júpiter-Plutón': {
        'Conjunción': 'La conjunción Júpiter-Plutón es de transformación profunda. Tu búsqueda de verdad incluye el poder.',
        'Trígono': 'El trígono Júpiter-Plutón proporciona facilidad para la transformación profunda. Tu visión incluye el poder.',
        'Sextil': 'El sextil Júpiter-Plutón indica talentos para la transformación poderosa.',
        'Cuadratura': 'La cuadratura Júpiter-Plutón genera tensión entre expansión y poder.',
        'Oposición': 'La oposición Júpiter-Plutón indica conflicto entre crecimiento y transformación.'
    },
    'Saturno-Urano': {
        'Conjunción': 'La conjunción Saturno-Urano es de estructura innovadora. Representa la tensión entre tradición y cambio.',
        'Trígono': 'El trígono Saturno-Urano proporciona facilidad para la innovación estructurada. Podés cambiar sistemas desde adentro.',
        'Sextil': 'El sextil Saturno-Urano indica talentos para la reforma estructurada.',
        'Cuadratura': 'La cuadratura Saturno-Urano genera tensión entre estructura y cambio. El desafío es integrar ambos.',
        'Oposición': 'La oposición Saturno-Urano indica conflicto entre tradición e innovación.'
    },
    'Saturno-Neptuno': {
        'Conjunción': 'La conjunción Saturno-Neptuno es de estructura espiritual. Tu fe está disciplinada y fundamentada.',
        'Trígono': 'El trígono Saturno-Neptuno proporciona facilidad para la estructura espiritual. Tenés fe que soporta pruebas.',
        'Sextil': 'El sextil Saturno-Neptuno indica talentos para la espiritualidad estructurada.',
        'Cuadratura': 'La cuadratura Saturno-Neptuno genera tensión entre realidad y sueño. El desafío es anclar ideales.',
        'Oposición': 'La oposición Saturno-Neptuno indica conflicto entre estructura y espiritualidad.'
    },
    'Saturno-Plutón': {
        'Conjunción': 'La conjunción Saturno-Plutón es de poder estructuras. Tu capacidad de influencia está deep y persistente.',
        'Trígono': 'El trígono Saturno-Plutón proporciona facilidad para el poder estructuras. Tu influencia perdura.',
        'Sextil': 'El sextil Saturno-Plutón indica talentos para la transformación estructural.',
        'Cuadratura': 'La cuadratura Saturno-Plutón genera tensión entre estructura y transformación. El desafío es mudar sin destruir.',
        'Oposición': 'La oposición Saturno-Plutón indica conflicto entre estructura y poder.'
    },
    'Urano-Neptuno': {
        'Conjunción': 'La conjunción Urano-Neptuno es de visión espiritual. Tu intuición está orientada hacia el cambio espiritual.',
        'Trígono': 'El trígono Urano-Neptuno proporciona facilidad para la innovación espiritual. Tu visión es futurista y transcendental.',
        'Sextil': 'El sextil Urano-Neptuno indica talentos para la espiritualidad innovadora.',
        'Cuadratura': 'La cuadratura Urano-Neptuno genera tensión entre cambio e ideales.',
        'Oposición': 'La oposición Urano-Neptuno indica conflicto entre innovación y espiritualidad.'
    },
    'Urano-Plutón': {
        'Conjunción': 'La conjunción Urano-Plutón es de transformación revolucionaria. Representa épocas de cambio profundo.',
        'Trígono': 'El trígono Urano-Plutón proporciona facilidad para la revolución constructiva. Tu transformación es innovadora.',
        'Sextil': 'El sextil Urano-Plutón indica talentos para la transformación innovadora.',
        'Cuadratura': 'La cuadratura Urano-Plutón genera tensión entre cambio y poder.',
        'Oposición': 'La oposición Urano-Plutón indica conflicto entre libertad y transformación.'
    },
    'Neptuno-Plutón': {
        'Conjunción': 'La conjunción Neptuno-Plutón es de transformación espiritual profunda. Representa la fusión de lo invisible con el poder.',
        'Trígono': 'El trígono Neptuno-Plutón proporciona facilidad para la transformación espiritual. Tu poder incluye lo transcendental.',
        'Sextil': 'El sextil Neptuno-Plutón indica talentos para la sanación espiritual profunda.',
        'Cuadratura': 'La cuadratura Neptuno-Plutón genera tensión entre sueño y poder.',
        'Oposición': 'La oposición Neptuno-Plutón indica conflicto entre espiritualidad y poder.'
    }
};

export const SIGN_EXPLANATIONS: Record<string, string> = {
    'Aries': `Tener el Sol en Aries en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la energía de la acción directa, la valentía y el pionerismo. Eres una persona impulsiva, energética y con un fuerte sentido de individualidad.

Aquí te detallo los puntos clave de tener el Sol en Aries:
Espíritu Pionero: Tu identidad radica en ser el primero en todo lo que haces. No te gusta seguir a otros, preferís marcar tu propio camino.

Energía Dinámica: Tiendes a actuar primero y pensar después. La acción inmediata es tu naturaleza. Necesitas movimiento físico y desafíos constantes.

Lealtad y Protección: Cuando amás, lo hacés con intensidad. Protegés ferozmente a quienes querés y sos un amigo leal hasta el final.

Impaciencia: La espera no va con vos. Querés resultados inmediatos y podés frustrarte cuando las cosas no avanzan a tu ritmo.

Necesidad de Independencia: Tu libertad es sagrada. No tolerás que alguien te diga qué hacer o cómo vivir tu vida.

En resumen, ser Sol en Aries es ser un guerrero del zodiaco, alguien que enfrenta la vida con valentía y autenticidad.`,

    'Tauro': `Tener el Sol en Tauro en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la energía de la estabilidad, la perseverancia y el aprecio por lo bello. Eres una persona confiable, paciente y con un fuerte sentido de valor personal.

Aquí te detallo los puntos clave de tener el Sol en Tauro:
Naturaleza Estable: Buscás la seguridad en todas las áreas de tu vida. La estabilidad financiera y emocional son fundamentales para tu bienestar.

Perseverancia: Una vez que te proponés algo, no te rendís facilmente. Tu fuerza de voluntad es inquebrantable cuando se trata de alcanzar tus metas.

Aprecio por lo Sensorial: Tenés un amor profundo por los placeres de la vida: la buena comida, el arte, la música y el confort. La belleza te rodea.

Lealtad Profunda: Cuando amás, es para siempre. Sos leal en tus relaciones y esperás la misma lealtad a cambio.

Terquedad: Tu necesidad de seguridad puede convertirse en resistencia al cambio. A veces te cost adaptarte a nuevas situaciones.

En resumen, ser Sol en Tauro es ser un pilar de fuerza y estabilidad, alguien que construye una vida llena de belleza y permanencia.`,

    'Géminis': `Tener el Sol en Géminis en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la energía de la comunicación, la curiosidad y la adaptabilidad. Eres una persona versátil, inteligente y con una mente brillante.

Aquí te detallo los puntos clave de tener el Sol en Géminis:
Mente Ágil: Tu cerebro está siempre activo. Necesitas estimulación mental constante y te aburrís facilmente con la rutina.

Comunicador Nato: Expresarte es natural para vos. Podés hablar con cualquiera sobre cualquier tema y adaptás tu mensaje según tu audiencia.

Curiosidad Insaciable: Querés saber de todo un poco. Tu mente está siempre buscando nueva información, experiencias y conexiones.

Dualidad: Tenés dos caras que mostrás al mundo. A veces parecés sociable y otras veces más reservado. Esto es parte de tu naturaleza.

Inconstancia: Tu versatilidad puede convertirse en falta de enfoque. Empezás muchos proyectos pero no siempre los terminás.

En resumen, ser Sol en Géminis es ser un polymata del zodiaco, alguien que conecta ideas y personas con facilidad y curiosidad.`,

    'Cáncer': `Tener el Sol en Cáncer en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la energía emocional, la protección y la conexión con el hogar. Eres una persona sensible, intuitiva y con un fuerte sentido de pertenencia.

Aquí te detallo los puntos clave de tener el Sol en cáncer:
Intuición Emocional: Sentís las cosas profundamente y podés captar las emociones de otros con facilidad. Tu intuición es tu guía principal.

Protector Natural: Cuidás de quienes amás como si fueran tu familia. Tu instinto protector se extiende a amigos y pareja.

Conexión con el Hogar: Tu hogar es tu santuario. Necesitás un espacio seguro y acogedor para sentirte bien contigo mismo.

Sensibilidad: Tus emociones son intensas y podés ser muy reactivo a la energía del entorno. Aprendé a proteger tu espacio emocional.

Memoria Emotiva: Recordás todo lo que te afecta emocionalmente. Esto puede ser un regalo o un peso, dependiendo de cómo lo manejes.

En resumen, ser Sol en cáncer es ser el corazón del zodiaco, alguien que ama profundamente y protege lo que le importa con devoción absoluta.`,

    'Leo': `Tener el Sol en Leo en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la energía del liderazgo, la creatividad y la generosidad. Eres una persona carismática, segura de sí misma y con un magnetismo natural.

Aquí te detallo los puntos clave de tener el Sol en Leo:
Rey/Reina Natural: Naces para liderar. Tenés una presencia magnética que hace que otros te sigan voluntariamente.

Creatividad Expresiva: Necesitás expresarte de alguna manera. Ya sea a través del arte, la actuación o simplemente tu estilo de vida, necesitás ser visto y reconocido.

Generosidad Ardiente: Cuando amás, lo hacés con todo tu ser. Tu amor es cálido, protectivo y entregado.

Orgullo y Dignidad: Tu autoestim es importante. No toleras que te falten al respeto y defendés tu reputación con fuerza.

Egocentrismo: Tu necesidad de atención puede convertirse en arrogancia. Aprendé a equilibrar tu luz con humildad.

En resumen, ser Sol en Leo es ser el sol del zodiaco, alguien que brilla con luz propia e inspira a otros a encontrar su propia grandeza.`,

    'Virgo': `Tener el Sol en Virgo en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la energía del análisis, el servicio y la búsqueda de la perfección. Eres una persona detallista, práctica y con un fuerte sentido de responsabilidad.

Aquí te detallo los puntos clave de tener el Sol en Virgo:
Mente Analítica: Ves detalles que otros pasan por alto. Tu capacidad de análisis te hace excelente resolviendo problemas prácticos.

Deseo de Perfección: Buscas la excelencia en todo lo que haces. Sin embargo, esto puede llevarte a ser excesivamente autocritico.

Espíritu de Servicio: Encontrás satisfacción ayudando a otros. Tu propósito de vida a menudo implica servir de alguna manera.

Organización: Tenés un talento natural para estructurar y orden. Tu entorno refleja tu necesidad de control y limpieza.

Perfeccionismo: Tu búsqueda de lo perfecto puede paralizarte. Aprendé a aceptar que "suficientemente bueno" a veces está bien.

En resumen, ser Sol en Virgo es ser el auxiliar del zodiaco, alguien que perfecciona el mundo a través del detalle, el análisis y el servicio desinteresado.`,

    'Libra': `Tener el Sol en Libra en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la energía del equilibrio, la armonía y las relaciones. Eres una persona sociable, justa y con un fuerte sentido de la belleza.

Aquí te detallo los puntos clave de tener el Sol en Libra:
Buscador de Armonía: Tu vida está orientada a crear equilibrio en todas las áreas. Detestás los conflictos y hacés todo lo posible por evitarlos.

Relaciones Centrales: Las relaciones son fundamentales para tu bienestar. Necesitás una pareja o socio cercano para sentirte completo.

Sentido de Justicia: Tenés un fuerte compromiso con la equidad y la justicia. Defensás lo correcto incluso cuando es difícil.

Indecisión: Tu necesidad de ver todos los lados de una situación puede paralizarte. A veces decidir te resulta agotador.

Superficialidad: Podés preferir evitar la profundidad emocional para mantener la paz. Aprendé a enfrentar los conflictos directamente.

En resumen, ser Sol en Libra es ser el diplomático del zodiaco, alguien que busca la belleza y la armonía en todas las relaciones y situaciones.`,

    'Escorpio': `Tener el Sol en Escorpio en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la intensidad, la transformación y la profundidad emocional. Eres una persona misteriosa, apasionada y con un poder de transformación único.

Aquí te detallo los puntos clave de tener el Sol en Escorpio:
Transformación Profunda: Tu vida está marcada por ciclos de muerte y renacimiento. Cambias radicalmente varias veces a lo largo de tu existencia.

Intensidad Emocional: Sentís todo con una profundidad que pocos pueden comprender. Tu mundo interior es rico y complejo.

Poder Personal: Tenés una capacidad única para influir en otros y transformar situaciones. Este poder debe usarse con sabiduría.

Misterio: Guardás tus secretos profundamente. Muy pocas personas realmente te conocen, y preferís que así sea.

Controversial: No te importa lo que digan los demás. Persigues lo que quieres con una determinación que puede intimidar.

En resumen, ser Sol en Escorpio es ser el guerrero del alma del zodiaco, alguien que transforma todo lo que toca a través de su intensidad y poder personal.`,

    'Sagitario': `Tener el Sol en Sagitario en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la energía del optimismo, la aventura y la búsqueda de la verdad. Eres una persona expansiva, optimista y con un espíritu libre.

Aquí te detallo los puntos clave de tener el Sol en Sagitario:
Espíritu Aventurero: Necesitás explorar, viajar y descubrir nuevos territorios. La aventura es esencial para tu bienestar.

Optimismo Contagioso: Ves el vaso medio lleno incluso en las situaciones más difíciles. Tu optimismo inspira a otros.

Búsqueda de Verdad: Tenés una necesidad profunda de entender el significado más profundo de las cosas. La filosofía y la espiritualidad te fascinan.

Honestidad Brutal: Decís las cosas como son, a veces sin filtro. Esto puede lastimar, pero también te respeta por tu autenticidad.

Impaciencia: El rutinario te aburre. Necesitás cambio constante y podés perder interés fácilmente.

En resumen, ser Sol en Sagitario es ser el explorador del zodiaco, alguien que busca la verdad y la aventura mientras expande sus horizontes y los de otros.`,

    'Capricornio': `Tener el Sol en Capricornio en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la energía de la ambición, la disciplina y la construcción. Eres una persona responsable, paciente y con un fuerte sentido del deber.

Aquí te detallo los puntos clave de tener el Sol en Capricornio:
Ambición Inquebrantable: Sabés lo que querés y trabajás duro para lograrlo. El éxito material es importante para vos.

Disciplina Rígida: Tenés una fuerte ética de trabajo. Puedés sacrificar el presente por un futuro mejor.

Responsabilidad: Cumplís con tus obligaciones sin importar qué. Otros pueden depender de vos para hacer lo que decís.

Estructura: Necesitás orden y estructura en tu vida. El caos te anxiety y hacés todo lo posible por evitarlo.

Frío Emocional: Tu enfoque en el logro puede hacer que parezcas distante o insensible. Aprendé a mostrar vulnerabilidad.

En resumen, ser Sol en Capricornio es ser el arquitecto del zodiaco, alguien que construye estructuras sólidas y alcanza sus metas a través de la disciplina y la perseverancia.`,

    'Acuario': `Tener el Sol en Acuario en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la energía de la innovación, la libertad, la rebeldía y el pensamiento colectivo. Eres una persona original, orientada al futuro, independiente y con un fuerte sentido humanitario.

Aquí te detallo los puntos clave de tener el Sol en Acuario:
Esencia Revolucionaria: Tu identidad radica en romper estructuras establecidas, ser auténtico y aportar nuevas ideas al mundo.

Mente Innovadora: Posees una inteligencia brillante, creativa y a menudo visionaria, capaz de ver soluciones donde otros no las ven.

Necesidad de Libertad: Valoras la independencia por encima de todo. Te cuesta comprometerte con normas estrictas o convencionalismos sociales.

Enfoque Humanitario: Te preocupás por el colectivo, las causas sociales y la igualdad. Sos sociable, pero necesitás tu espacio personal.

Personalidad Única: Podés parecer desapegado o frío, pero en realidad eres simpático y amigable, enfocado más en la humanidad que en la intensidad emocional individual.

Regente Urano: Al estar influenciado por Urano, sos propenso al cambio y a la transformación, buscando mejorar el entorno.

En resumen, ser Sol en Acuario es ser un revolucionario con causa, alguien que busca mejorar el mundo a través de la autenticidad y la innovación.`,

    'Piscis': `Tener el Sol en Piscis en tu carta astral significa que tu identidad central, tu esencia y tu propósito de vida están teñidos por la energía de la intuición, la compasión y la conexión espiritual. Eres una persona sensible, soñadora y con una profunda conexión con lo invisible.

Aquí te detallo los puntos clave de tener el Sol en Piscis:
Intuición Extraordinaria: Sentís cosas que otros no pueden percibir. Tu intuición es tu guía principal en la vida.

Compasión Sin Límites: Tenés un corazón enorme que siente el dolor de otros. Ayudar a quienes sufren es tu naturaleza.

Conexión Espiritual: Tenés una conexión profunda con lo divino, lo místico y lo transcendental. Quizás experimentes visiones o premoniciones.

Sensibilidad Extrema: El mundo te afecta profundamente. Podés absorber las emociones de otros como una esponja.

Escape de la Realidad: Cuando la realidad se vuelve demasiado dura, tu mente escapa hacia los sueños. Cuidá de no usar esto como mecanismo de defensa constante.

En resumen, ser Sol en Piscis es el místico del zodiaco, alguien que navega entre el mundo material y el espiritual, trayendo luz y compasión a donde sea que vaya.`
};

export const MOON_SIGN_EXPLANATIONS: Record<string, string> = {
    'Aries': `Tener la Luna en Aries en tu carta astral significa que tu mundo emocional está teñido por la energía de la acción inmediata, la espontaneidad y la necesidad de libertad emocional. Eres una persona que siente con intensidad y urgencia, cuyas emociones cambian rápidamente y que necesita espacio para actuar sin restricciones.

Aquí te detallo los puntos clave de tener la Luna en Aries:
Reactividad Emocional: Tus emociones surgen de forma inmediata y directa. No te andás con rodeos cuando sentís algo, lo expresás en el momento.

Necesidad de Independencia Emocional: Necesitás sentir que tus emociones son tuyas y no dependés de otros para validarlas. El espacio personal es fundamental para tu bienestar.

Impaciencia Sentimental: Cuando deseás algo emocionalmente, lo querés ya. La espera en el ámbito emocional te frustra fácilmente.

Coraje Emocional: No te asusta enfrentar situaciones emocionales difíciles. Tenés la valentía de gestionar tus propios sentimientos.

Energía Emocional Dinámica: Tu estado de ánimo cambia con facilidad. Pasás de la emoción a la acción rápidamente.

En resumen, la Luna en Aries es como tener un fuego emocional que arde intensamente pero también se apaga rápido. Aprendé a darle continuidad a tus emociones.`,

    'Tauro': `Tener la Luna en Tauro en tu carta astral significa que tu mundo emocional está teñido por la energía de la estabilidad, la seguridad y el aprecio por el confort. Eres una persona que siente profundamente pero de manera estable, y que necesita sentirte seguro emocionalmente para florecer.

Aquí te detallo los puntos clave de tener la Luna en Tauro:
Necesidad de Seguridad Emocional: Precisás sentir que tus relaciones y tu entorno son estables. La incertidumbre emocional te genera ansiedad profundamente.

Lealtad Emocional: Cuando te vinculás emocionalmente con alguien, es para siempre. Sos leal en tus afectos y esperás la misma lealtad a cambio.

Apoyo Sensorial: Tu bienestar emocional está vinculado a los placeres sensoriales: comida abundante, confort físico, un hogar acogedor.

Emociones Constantes: Tus sentimientos perduran en el tiempo. No olvidás fácilmente cómo te hicieron sentir y eso influye en tus relaciones actuales.

Terquedad Emocional: Cuando te lastiman, te cuesta soltar. Podés guardar rencores emocionales por mucho tiempo.

En resumen, la Luna en Tauro te da un corazón leal y estable, pero también una naturaleza que puede resistirse al cambio emocional. Tu desafío es aprender a soltar.`,

    'Géminis': `Tener la Luna en Géminis en tu carta astral significa que tu mundo emocional está teñido por la energía de la versatilidad, la curiosidad intelectual y la necesidad de estimulación mental. Eres una persona que procesa sus emociones a través del pensamiento y la comunicación.

Aquí te detallo los puntos clave de tener la Luna en Géminis:
Procesamiento Mental de las Emociones: Necesás pensar sobre lo que sentís para entenderlo. Tu mente analiza las emociones antes de aceptarlas.

Emociones Variables: Tu estado emocional cambia con facilidad. Podés estar triste y de pronto sentirte optimista sin un motivo claro.

Necesidad de Comunicación Emocional: Expressar lo que sentís te hace sentir mejor. Necesás hablar sobre tus emociones con alguien de confianza.

Curiosidad Emocional: Tenés interés en entender cómo funcionan las emociones, tanto propias como ajenas.

Inconsistencia Afectiva: A veces tus sentimientos pueden parecer superficiales o cambiantes. Otros pueden pensar que no te importa cuando en realidad solo procesás diferente.

En resumen, la Luna en Géminis te da una mente emocional activa, pero también la desafío de conectar con la profundidad de tus sentimientos.`,

    'Cáncer': `Tener la Luna en Cáncer en tu carta astral significa que tu mundo emocional está teñido por la energía de la sensibilidad, la protección y la conexión con el hogar. Eres una persona profundamente emocional cuya necesidad principal es sentirse cuidada y proteger a quienes ama.

Aquí te detallo los puntos clave de tener la Luna en cáncer:
Intuición Emocional Extraordinaria: Sentís las emociones de otros como si fueran tuyas. Tu capacidad para percibir lo que otros sienten es casi telepática.

Protección Emocional: Cuidás ferozmente a quienes amás. Tu instinto es proteger a tu familia y seres queridos de cualquier daño.

Conexión con el Pasado: Tus emociones están muy vinculadas a recuerdos de la infancia y experiencias familiares. El pasado influye mucho en cómo te sentís hoy.

Sensibilidad a Entorno: El ambiente físico y emocional te afecta profundamente. Un espacio armonioso te hace sentir bien; uno conflictivo te desequilibra fácilmente.

Necesidad de Pertenencia: Necesitás sentir que pertenecés a una familia, grupo o lugar. La sensación de no pertenencia te duele profundamente.

En resumen, la Luna en cáncer te da un corazón inmenso y protector, pero también una sensibilidad que requiere cuidad. Aprendé a proteger tu espacio emocional.`,

    'Leo': `Tener la Luna en Leo en tu carta astral significa que tu mundo emocional está teñido por la energía del brillo, la creatividad y la necesidad de reconocimiento. Eres una persona que necesita sentirse especial y vista en sus relaciones emocionales.

Aquí te detallo los puntos clave de tener la Luna en Leo:
Orgullo Emocional: Tu corazón es noble y generoso, pero también guarda dignidad. No toleras que te humillen emocionalmente.

Necesidad de Ser Visto: Necesitás que quienes te rodean reconozcan tus cualidades emocionales. El elogio y la admiración te hacen sentir amado.

Generosidad Emocional: Cuando amás, lo hacés con todo tu ser. Tu amor es cálido, entregado y dramático.

Creatividad Expresiva: Tus emociones encuentran salida a través de la creatividad. El arte, la actuación o cualquier forma de expresión te ayuda a procesar lo que sentís.

Egocentramiento Emocional: Podés tender a hacer todo alrededor de tus propias necesidades emocionales. Aprendé a considerar los sentimientos de otros.

En resumen, la Luna en Leo te da un corazón dramático y generoso que necesita brillar. Tu desafío es equilibrar tu necesidad de reconocimiento con la humildad emocional.`,

    'Virgo': `Tener la Luna en Virgo en tu carta astral significa que tu mundo emocional está teñido por la energía del análisis, la practicidad y el servicio. Eeres una persona que procesa sus emociones de manera ordenada y que necesita sentirse útil para estar bien emocionalmente.

Aquí te detallo los puntos clave de tener la Luna en Virgo:
Análisis de las Emociones: Necesás entender lógicamente lo que sentís. Tiendes a desarmar tus emociones para procesarlas.

Preocupación por el Bienestar Propio y Ajeno: Te preocupás por la salud emocional y física de quienes amás. Cuidar de otros te hace sentir bien contigo mismo.

Necesidad de Orden Emocional: Un entorno limpio y organizado te ayuda a sentirte emocionalmente bien. El caos externo afecta tu estado interior.

Crítica hacia Uno Mismo: Sos muy duro contigo mismo emocionalmente. Tiendes a juzgarte por cómo sentís.

Satisfacción a través del Servicio: Encontrás paz emocional ayudando a otros y siendo útil. Tu amor se expresa a través de actos de servicio.

En resumen, la Luna en Virgo te da la capacidad de gestionar tus emociones con inteligencia, pero también el desafío de aceptarte sin juzgarte.`,

    'Libra': `Tener la Luna en Libra en tu carta astral significa que tu mundo emocional está teñido por la energía del equilibrio, la armonía y la asociación. Eres una persona que necesita paz emocional y relación para sentirse completa.

Aquí te detallo los puntos clave de tener la Luna en Libra:
Busqueda de Armonía Emocional: Tu principal necesidad es sentir que tus relaciones están en equilibrio. Conflictos te desequilibran profundamente.

Necesidad de Pareja: Emocionalmente necesitás de un socio o pareja para sentirte completo. La soledad no va con tu naturaleza lunar.

Indecisión Emocional: Cuando sentís cosas encontradas, te cost decidirte. Buscás el punto medio en todo.

Justicia Emocional: Tus emociones responden con fuerza a la injusticia. Te duele profundamente cuando las cosas no son equitativas.

Superficialidad Emocional: Para evitar conflictos, podés suprimir emociones profundas. Aprendé a enfrentar los problemas de frente.

En resumen, la Luna en Libra te da un corazón diplomado y armónico, pero también el desafío de profundizar en tus emociones sin evitarlas.`,

    'Escorpio': `Tener la Luna en Escorpio en tu carta astral significa que tu mundo emocional está teñido por la intensidad, la transformación y la profundidad. Eres una persona que siente con una profundidad que pocos comprenden y que necesita experiencias emocionales auténticas.

Aquí te detallo los puntos clave de tener la Luna en Escorpio:
Intensidad Emocional: Tus emociones son extremas. Sentís todo con una profundidad que va desde el amor más profundo hasta el odio más intenso.

Transformación Emocional: Tu vida emocional pasa por ciclos de muerte y renacimiento. Dejás atrás relaciones y situaciones emocionales que ya no te sirven.

Secreto Emocional: Guardás tus emociones profundamente. Muy pocas personas realmente conocen lo que sentís.

Lealtad Intensa: Cuando te vinculás emocionalmente, es de manera total y absoluta. Exigís la misma profundidad a cambio.

Desconfianza: Tu experiencia emocional te ha enseñado a desconfiar. Cuesta abrirte emocionalmente por miedo a ser lastimado.

En resumen, la Luna en Escorpio te da un corazón profundo e intenso, pero también el desafío de confiar y dejar ir el control emocional.`,

    'Sagitario': `Tener la Luna en Sagitario en tu carta astral significa que tu mundo emocional está teñido por la energía del optimismo, la aventura y la búsqueda de libertad. Eres una persona que necesita espacio físico y emocional para sentirse bien.

Aquí te detallo los puntos clave de tener la Luna en Sagitario:
Optimismo Emocional: Incluso en los momentos difíciles, mantenés una visión positiva. Tu naturaleza te ayuda a superar los desafíos emocionales.

Necesidad de Libertad Emocional: No tolerás que te limiten emocionalmente. Necesitás sentir que podés ser vos mismo sin restricciones.

Emociones Expansivas: Tus emociones son grandes y abiertas. No te escondés de lo que sentís, lo expresás con entusiasmo.

Búsqueda de Sentido: Necesitás entender el por qué de tus emociones. Buscás significado en lo que sentís.

Impaciencia con lo Cotidiano: Las rutinas emocionales te aburren. Necesitás emoción y aventura para sentirte vivo emocionalmente.

En resumen, la Luna en Sagitario te da un corazón optimista y libre, pero también el desafío de comprometerte emocionalmente.`,

    'Capricornio': `Tener la Luna en Capricornio en tu carta astral significa que tu mundo emocional está teñido por la energía de la disciplina, la responsabilidad y la ambición. Eres una persona que controla sus emociones y que necesita sentirse realizada para estar bien emocionalmente.

Aquí te detallo los puntos clave de tener la Luna en Capricornio:
Control Emocional: Aprendiste a controlar lo que sentís desde temprana edad. Rara vez mostrás vulnerabilidad emocional.

Responsabilidad Afectiva: Tomás tus compromisos emocionales muy en serio. Cuando prometés, cumplís.

Necesidad de Logro: Tu bienestar emocional está vinculado a tus logros. El éxito te hace sentir bien contigo mismo.

Frío Aparente: Externamente podés parecer distante o insensible, pero por dentro sentís profundamente.

Dificultad para Pedir Ayuda: Solucionás tus problemas emocionales solo. Pedir apoyo te resulta difícil.

En resumen, la Luna en Capricornio te da un corazón maduro y responsable, pero también el desafío de mostrar vulnerabilidad.`,

    'Acuario': `Tener la Luna en Acuario en tu carta astral significa que tu mundo emocional está teñido por la energía de la innovación, la independencia y el humanitarismo. Eres una persona que procesa sus emociones de manera única y que necesita sentirse libre de convencionalismos emocionales.

Aquí te detallo los puntos clave de tener la Luna en Acuario:
Independencia Emocional: Tus emociones no siguen reglas tradicionales. Procesás lo que sentís de manera singular y a veces impredecible.

Desapego Emocional: Podés separarte emocionalmente de situaciones que a otros les afectarían profundamente. Esto te da perspectiva pero también puede hacerte parecer distante.

Emociones por la Humanidad: Te preocupás por causas colectivas. Tu bienestar emocional está vinculado a contribuir con el mundo.

Necesidad de Espacio: Necesitás tiempo solo para procesar tus emociones. El hacinamiento emocional te agobia.

Originalidad Sentimental: Tus formas de expresar amor y afecto son únicas. No seguís estereotipos románticos.

En resumen, la Luna en Acuario te da un corazón original e independiente, pero también el desafío de conectar emocionalmente de manera más profunda.`,

    'Piscis': `Tener la Luna en Piscis en tu carta astral significa que tu mundo emocional está teñido por la energía de la intuición, la compasión y la conexión espiritual. Eres una persona extremadamente sensible cuya alma siente profundamente todo lo que la rodea.

Aquí te detallo los puntos clave de tener la Luna en Piscis:
Sensibilidad Extraordinaria: Absorbés las emociones del entorno como una esponja. El estado emocional de otros te afecta directamente.

Intuición Emocional: Tu capacidad para percibir la verdad emocional de las situaciones es casi sobrenatural. Confiá en tu intuición.

Compasión Infinita: Sentís el dolor de otros como si fuera propio. Ayudar a quienes sufren es tu naturaleza.

Conexión Espiritual: Tu mundo emocional está conectado con lo divino, lo místico. Quizás experimentes premoniciones o sensibilidad a lo invisible.

Escape Emocional: Cuando las emociones se vuelven muy intensas, tu tendencia es escapar. Cuidá de no usar esto como mecanismo de defensa constante.

En resumen, la Luna en Piscis te da un corazón empático y místico, pero también el desafío de poner límites emocionales.`
};

export const ASCENDANT_SIGN_EXPLANATIONS: Record<string, string> = {
    'Aries': `Tener el Ascendente en Aries significa que tu máscara social está teñida por la energía de la acción directa, la valentía y la iniciativa. Cuando te conocen por primera vez, proyectás una imagen de persona dinámica, audaz y llena de energía. Tu presencia irradia confianza y no temés destacar entre la multitud.

Aquí te detallo los puntos clave del Ascendente en Aries:
Primera Impresión Dinámica: Las personas inmediatamente te perciben como alguien con energía competitiva. Tu vitalidad es contagiosa y llamativa.

Liderazgo Natural: Desde el primer momento, otros te ven como un líder nato. Tu aura dice "yo voy primero".

Franqueza Directa: Tu forma de comunicarte es directa y sin rodeos. No te andás con diplomacia innecesaria.

Energía Aries: Tu presencia es enérgica e impulsiva. Irradias entusiasmo y urgencia para actuar.

Deseo de Reconocimiento: Buscás ser notado y reconocido. No te gusta pasar desapercibido en ningún contexto social.

Impaciencia Visible: Otros rápidamente notan tu impaciencia. Cuando esperás, tu lenguaje corporal demuestra frustración.

En resumen, el Ascendente en Aries te da una presencia magnética y dinámica que llama la atención. Otros te ven como alguien que no teme tomar la iniciativa.`,

    'Tauro': `Tener el Ascendente en Tauro significa que tu máscara social está teñida por la energía de la estabilidad, la fiabilidad y el aprecio por lo material. Cuando te conocen por primera vez, proyectás una imagen de persona confiable, calmada y con los pies en la tierra. Tu presencia transmite seguridad y confiabilidad.

Aquí te detallo los puntos clave del Ascendente en Tauro:
Primera Impresión Estable: Las personas inmediatamente te perciben como alguien sólido y confiable. Tu energía es tranquilizadora.

Presencia Relajada: Tu presencia exterior irradia calma. Otros te perciben como alguien confiable y difícil de alterar.

Determinación Visible: Una vez que fijás un camino, otros te ven como una persona que no se rinde fácilmente.

Appreciación por el Lujo: Tu imagen refleja gusto por las cosas bellas y el confort. Te presentás con estilo.

Lealtad Proyectada: Desde el primer momento, otros te ven como alguien leal y comprometido.

Terquedad Aparente: Otros rápidamente notan tu terquedad cuando se trata de cambiar tu opinión.

En resumen, el Ascendente en Tauro te da una presencia sólida y confiable que inspira confianza. Otros te ven como alguien en quien se puede confiar.`,

    'Géminis': `Tener el Ascendente en Géminis significa que tu máscara social está teñida por la energía de la comunicación, la curiosidad y la adaptabilidad. Cuando te conocen por primera vez, proyectás una imagen de persona inteligente, curiosa y comunicativa. Tu presencia es ágil y versátil.

Aquí te detallo los puntos clave del Ascendente en Géminis:
Primera Impresión Mental: Las personas inmediatamente te perciben como alguien con una mente rápida y activa. Tu conversación es interesante.

Versatilidad Visible: Tu presencia muestra a alguien adaptable que puede hablar sobre cualquier tema.

Curiosidad Natural: Otros te ven como alguien que siempre quiere aprender más, que pregunta constantemente.

Comunicación Veloz: Tu forma de expresarte es rápida y dinámica. No te quedás callado en ninguna situación.

Energía Nerviosa: Otros rápidamente notan tu energía nerviosa. Siempre estás en movimiento, tanto físico como mental.

Carisma Verbal: Desde el primer momento, otros te ven como alguien que atrae con las palabras.

En resumen, el Ascendente en Géminis te da una presencia intelectual y comunicativa que destaca en cualquier entorno social.`,

    'Cáncer': `Tener el Ascendente en Cáncer significa que tu máscara social está teñida por la energía de la sensibilidad, la protección y la emocionalidad. Cuando te conocen por primera vez, proyectás una imagen de persona cálida, nutritiva y emocionalmente abierta. Tu presencia transmite cuidado y vulnerabilidad.

Aquí te detallo los puntos clave del Ascendente en Cáncer:
Primera Impresión Cálida: Las personas inmediatamente te perciben como alguien acogedor y protector. Tu energía es reconfortante.

Vulnerabilidad Visible: Tu presencia muestra sensibilidad. Otros te perciben como alguien que siente profundamente.

Instinto Protector: Otros te ven como alguien que cuida de los demás, incluso de desconocidos.

Conexión con el Hogar: Tu imagen refleja un fuerte vínculo con la familia y el hogar. Hablás de tu casa con orgullo.

Sensibilidad Emocional: Otros rápidamente notan tu sensibilidad al tono emocional del ambiente.

Intuición Proyectada: Desde el primer momento, otros te ven como alguien que percibe lo que otros sienten.

En resumen, el Ascendente en cáncer te da una presencia cálida y protectora que hace que otros se sientan seguros contigo.`,

    'Leo': `Tener el Ascendente en Leo significa que tu máscara social está teñida por la energía del brillo, la creatividad y el carisma. Cuando te conocen por primera vez, proyectás una imagen de persona magnética, dramática y con presencia dominante. Tu energía ilumina cualquier habitación.

Aquí te detallo los puntos clave del Ascendente en Leo:
Primera Impresión Carismática: Las personas inmediatamente te perciben como el centro de atención. Tu presencia es magnética.

Confianza Radiante: Tu presencia irradia confianza. Otros te perciben como alguien que se ama a sí mismo.

Drama Natural: Otros te ven como alguien dramático que le gusta ser el centro del espectáculo.

Generosidad Visible: Desde el primer momento, otros te ven como alguien generoso que entrega sin reservas.

Orgullo Proyectado: Otros rápidamente notan tu orgullo. Tu dignidad es visible en cómo te presentás.

Magnetismo Personal: Tu energía atrae a las personas. Otros se sienten atraídos por tu presencia.

En resumen, el Ascendente en Leo te da una presencia brillante y carismática que naturalmente llama la atención y lidera.`,

    'Virgo': `Tener el Ascendente en Virgo significa que tu máscara social está teñida por la energía del análisis, la practicidad y el servicio. Cuando te conocen por primera vez, proyectás una imagen de persona eficiente, detallista y orientada al bienestar propio y ajeno. Tu presencia transmite orden y competencia.

Aquí te detallo los puntos clave del Ascendente en Virgo:
Primera Impresión Eficiente: Las personas inmediatamente te perciben como alguien organizado y competente. Tu energía es práctica.

Análisis Visible: Tu presencia muestra atención al detalle. Otros te perciben como alguien que observa todo.

Deseo de Mejorar: Otros te ven como alguien que siempre busca perfeccionar las cosas.

Servicio Natural: Desde el primer momento, otros te ven como alguien útil y servicial.

Precisión en el Habla: Otros rápidamente notan tu precisión al comunicarte. Elegís cada palabra con cuidado.

Humildad Proyectada: Tu imagen refleja modestia y disposición a ayudar sin buscar reconocimiento.

En resumen, el Ascendente en Virgo te da una presencia eficiente y útil que inspira confianza por su competencia.`,

    'Libra': `Tener el Ascendente en Libra significa que tu máscara social está teñida por la energía del equilibrio, la armonía y las relaciones. Cuando te conocen por primera vez, proyectás una imagen de persona encantadora, justa y orientada a crear paz. Tu presencia trae equilibrio a cualquier situación.

Aquí te detallo los puntos clave del Ascendente en Libra:
Primera Impresión Armoniosa: Las personas inmediatamente te perciben como alguien equilibrado y pacífico. Tu energía es calmada.

Diplomacia Natural: Tu presencia irradia tacto. Otros te perciben como alguien que sabe manejar situaciones difíciles.

Sentido de Justicia: Otros te ven como alguien que busca la equidad en todo.

Encanto Social: Desde el primer momento, otros te ven como alguien encantador y agradable de conocer.

Búsqueda de Pareja: Tu imagen refleja tu necesidad de relación. Frecuentemente estás buscando comprometerte.

Indecisión Visible: Otros rápidamente notan tu dificultad para tomar decisiones.

En resumen, el Ascendente en Libra te da una presencia encantadora y justa que atrae a otros y crea armonía.`,

    'Escorpio': `Tener el Ascendente en Escorpio significa que tu máscara social está teñida por la intensidad, el misterio y el poder personal. Cuando te conocen por primera vez, proyectás una imagen de persona profunda, magnética y ligeramente misteriosa. Tu presencia genera respeto y curiosidad.

Aquí te detallo los puntos clave del Ascendente en Escorpio:
Primera Impresión Intensiva: Las personas inmediatamente te perciben como alguien intenso y profundo. Tu energía es poderosa.

Misterio Visible: Tu presencia guarda secretos. Otros te perciben como alguien difícil de conocer completamente.

Poder Personal: Otros te ven como alguien que tiene influencia y poder sin necesidad de demostrarlo.

Intensidad Emocional: Desde el primer momento, otros te ven como alguien que siente todo profundamente.

Transformación Visible: Otros rápidamente notan tu capacidad de cambiar y reinventarte.

Lealtad Intensa: Tu imagen refleja un compromiso profundo con quienes ganaron tu confianza.

En resumen, el Ascendente en Escorpio te da una presencia magnética e intensa que atrae y genera respeto.`,

    'Sagitario': `Tener el Ascendente en Sagitario significa que tu máscara social está teñida por la energía del optimismo, la aventura y la libertad. Cuando te conocen por primera vez, proyectás una imagen de persona expansiva, optimista y con espíritu libre. Tu presencia inspira a otros a soñar más alto.

Aquí te detallo los puntos clave del Ascendente en Sagitario:
Primera Impresión Optimista: Las personas inmediatamente te perciben como alguien lleno de vida y esperanza. Tu energía es contagiosa.

Espíritu Aventurero: Tu presencia irradia deseo de explorar. Otros te perciben como alguien que ama los viajes.

Honestidad Directa: Otros te ven como alguien que dice las cosas como son, sin filtro.

Entusiasmo Contagioso: Desde el primer momento, otros te ven como alguien cuyo entusiasmo inspira a otros.

Filantropía Visible: Otros rápidamente notan tu preocupación por la humanidad y las causas justas.

Libertad Proyectada: Tu imagen refleja tu amor por la libertad y rechazo a las restricciones.

En resumen, el Ascendente en Sagitario te da una presencia expansiva y optimista que inspira a otros a buscar su propia verdad.`,

    'Capricornio': `Tener el Ascendente en Capricornio significa que tu máscara social está teñida por la energía de la ambición, la disciplina y el logro. Cuando te conocen por primera vez, proyectás una imagen de persona seria, responsable y ambiciosa. Tu presencia genera respeto y transmite seriedad.

Aquí te detallo los puntos clave del Ascendente en Capricornio:
Primera Impresión Ambiciosa: Las personas inmediatamente te perciben como alguien con metas claras. Tu energía es enfocada.

Disciplina Visible: Tu presencia muestra autocontrol. Otros te perciben como alguien que se autofrena.

Responsabilidad Proyectada: Otros te ven como alguien en quien se puede confiar para cumplir compromisos.

Madurez Temprana: Desde el primer momento, otros te ven como alguien maduro para su edad.

Seriedad Visible: Otros rápidamente notan tu seriedad. No desperdicias tiempo en trivialidades.

Éxito Buscado: Tu imagen refleja tu ambición por lograr el éxito material y reconocimiento social.

En resumen, el Ascendente en Capricornio te da una presencia seria y ambiciosa que inspira respeto y confianza.`,

    'Acuario': `Tener el Ascendente en Acuario significa que tu máscara social está teñida por la energía de la originalidad, la independencia y el humanitarismo. Cuando te conocen por primera vez, proyectás una imagen de persona única, progresiva y ligeramente excéntrica. Tu presencia rompe esquemas y desafía lo convencional.

Aquí te detallo los puntos clave del Ascendente en Acuario:
Primera Impresión Única: Las personas inmediatamente te perciben como alguien diferente, fuera de lo común. Tu energía es original.

Independencia Visible: Tu presencia muestra autonomía. Otros te perciben como alguien que no sigue multitudes.

Pensamiento Progresivo: Otros te ven como alguien con ideas innovadoras y visión de futuro.

Humanitarismo Natural: Desde el primer momento, otros te ven como alguien que se preocupa por la humanidad.

Rebeldía Amiga: Otros rápidamente notan tu espíritu revolucionario, pero de manera constructiva.

Desapego Emocional: Tu imagen refleja tu capacidad de mantener distancia emocional cuando es necesario.

En resumen, el Ascendente en Acuario te da una presencia única y progresiva que inspira cambio y acepta la diversidad.`,

    'Piscis': `Tener el Ascendente en Piscis significa que tu máscara social está teñida por la energía de la sensibilidad, la intuición y la compasión. Cuando te conocen por primera vez, proyectás una imagen de persona suave, intuitiva y profundamente empática. Tu presencia transmite paz y comprensión.

Aquí te detallo los puntos clave del Ascendente en Piscis:
Primera Impresión Sensible: Las personas inmediatamente te perciben como alguien tierno y comprensivo. Tu energía es suave.

Intuición Visible: Tu presencia muestra percepción más allá de lo físico. Otros te perciben como alguien que ve lo invisible.

Compasión Natural: Otros te ven como alguien que siente el dolor ajeno como propio.

Espiritualidad Proyectada: Desde el primer momento, otros te ven como alguien conectado con lo trascendente.

Adaptabilidad Emocional: Otros rápidamente notan tu capacidad de adaptarte a diferentes energías y ambientes.

Misterio Visible: Tu imagen refleja un mundo interior rico y profundo que pocos realmente conocen.

En resumen, el Ascendente en Piscis te da una presencia suave y compasiva que hace que otros se sientan comprendidos y seguros.`
};

const ELEMENT_DETAILED: Record<string, Record<string, { title: string, description: string, characteristics: { title: string, text: string }[], summary: string }>> = {
    'Fuego': {
        'low': {
            title: 'Bajo',
            description: 'Un porcentaje bajo de fuego (menos del 20%) indica una escasez del elemento fuego en la carta astral. Esto puede significar que la persona tiene dificultades para expresar su individualidad, iniciar acciones o mantener la motivación sin ayuda externa. Puede sentirse más reactiva que proactiva, o necesitar de otros para "encender" su energía.',
            characteristics: [
                { title: 'Acción limitada', text: 'Puedes tener dificultades para tomar la iniciativa. Preferís seguir el camino ya marcado en lugar de crear el tuyo propio.' },
                { title: 'Motivación variable', text: 'La energía para perseguir metas puede fluctuar. Necesitás fuentes externas de motivación o incentivos para mantenerte activo.' },
                { title: 'Liderazgo reducido', text: 'No es natural para vos liderar o destacar. Quizás prefieras un rol de apoyo en grupos.' },
                { title: 'Autoconfianza', text: 'Podés dudar de vos mismo más frecuentemente, necesitando validación externa para creer en tus capacidades.' }
            ],
            summary: 'El fuego bajo te llama a desarrollar tu iniciativa personal y aprender a confiar en tu propia motivación interna.'
        },
        'medium_low': {
            title: 'Moderado bajo',
            description: 'Un 20-30% de fuego indica un nivel moderado pero inferior al promedio. Representa una energía inicial que existe pero no domina tu personalidad. Hay capacidad de acción, aunque puede requerir esfuerzo conscientemente.',
            characteristics: [
                { title: 'Acción moderada', text: 'Tenés capacidad de iniciar proyectos, pero a veces necesitás un impulso extra para comenzar.' },
                { title: 'Entusiasmo contenido', text: 'Tu pasión existe pero no es constante. Hay momentos de energía y otros de pausa.' },
                { title: 'Liderazgo situacional', text: 'Podés liderar cuando es necesario, pero no es tu naturaleza predeterminada.' },
                { title: 'Energía fluctuante', text: 'Tu motivación puede variar según circunstancias externas o tu estado emocional.' }
            ],
            summary: 'Tenés una chispa de fuego que podés alimentar con prácticas conscientes como establecer metas personales.'
        },
        'balanced': {
            title: 'Equilibrado',
            description: 'Un 30-40% de fuego representa un equilibrio saludable. Indica que la persona cuenta con buena energía, iniciativa y pasión, sin llegar a la impulsividad descontrolada del exceso. Representa entusiasmo, capacidad de liderazgo y vitalidad, manteniendo autoconciencia.',
            characteristics: [
                { title: 'Acción equilibrada', text: 'Tenés la capacidad de iniciar proyectos y tomar decisiones sin ser temerario o impulsivo todo el tiempo.' },
                { title: 'Entusiasmo e Iniciativa', text: 'Hay un buen nivel de confianza en vos mismo y una energía constante para perseguir tus pasiones y deseos.' },
                { title: 'Liderazgo', text: 'Sueles tener cualidades para inspirar y liderar a otros, siendo una energía que ayuda a "prender el motor" de proyectos o de uno mismo.' },
                { title: 'Gestión de Energía', text: 'A diferencia de una carencia, no sentís falta de motivación constantemente, pero es posible que necesites ejercicio físico o pasiones para mantener esa energía alta.' }
            ],
            summary: 'El 35% es un porcentaje saludable de fuego, que aporta calidez, pasión y vitalidad, permitiéndote tomar riesgos calculados en lugar de arriesgarte irreflexivamente.'
        },
        'high': {
            title: 'Alto',
            description: 'Un 40-50% de fuego indica un predominio fuerte del elemento. La persona irradia energía, pasión y carisma. Es alguien que no teme destacar, tomar la iniciativa o liderar. Sin embargo, debe cuidar la impulsividad y el egocentrismo.',
            characteristics: [
                { title: 'Accion inmediata', text: 'Tiendes a actuar rápidamente, a veces sin pensar demasiado las consecuencias. La impaciencia es tu naturaleza.' },
                { title: 'Carisma magnético', text: 'Tu presencia es poderosa y atrae la atención. Otros se sienten atraídos por tu energía y pasión.' },
                { title: 'Liderazgo natural', text: 'Naces para liderar. Otros te buscan para tomar la iniciativa y marcar el camino.' },
                { title: 'Pasión ardiente', text: 'Cuando te apasionás por algo, le dedicás toda tu energía. El entusiasmo es tu estado natural.' }
            ],
            summary: 'El fuego alto te da un magnetismo especial y capacidad de acción, pero recordá usar esa energía sabiamente y no dejar que te consuma.'
        },
        'very_high': {
            title: 'Muy alto',
            description: 'Más del 50% de fuego indica un dominio absoluto de este elemento. Es una personalidad intensamente focalizada en la acción, el yo y el liderazgo. La individualidad es supremamente importante y puede resultar en egocentrismo o agresividad si no se canaliza adecuadamente.',
            characteristics: [
                { title: 'Liderazgo dominante', text: 'No solo liderás, necesitás liderar. El rol de seguidores no va con vos.' },
                { title: 'Impulsividad', text: 'Actuás primero, pensás después. La impaciencia es tu mayor desafío.' },
                { title: 'Fuego interno', text: 'Tenés una energía inagotable que necesita canalizarse creativamente o puede volverse destructiva.' },
                { title: 'Necesidad de reconocimiento', text: 'Precisás ser visto y admirado. El anonimato no es una opción que aceptés fácilmente.' }
            ],
            summary: 'Con más del 50% de fuego, tu desafío es aprender a canalizar tu intensa energía de forma constructiva y desarrollar paciencia.'
        }
    },
    'Tierra': {
        'low': {
            title: 'Bajo',
            description: 'Un porcentaje bajo de tierra (menos del 20%) indica dificultad para materializar ideas, establecer estabilidad o conectar con lo práctico. La persona puede ser soñadora, desorganizada o tener problemas con la responsabilidad material.',
            characteristics: [
                { title: 'Materialización difícil', text: 'Las ideas no se traducen fácilmente en acciones concretas. Podés tener muchos planes pero pocos resultados.' },
                { title: 'Inestabilidad', text: 'El suelo parece movedizo. Los hábitos cuestan y mantenés dificultades con las rutinas.' },
                { title: 'Desorganización', text: 'El orden no es tu fuerte. Quizás te cuesta cumplir con las responsabilidades cotidianas.' },
                { title: 'Pragmatismo limitado', text: 'Podés tender a lo abstracto y tener dificultades con lo tangible y lo cotidiano.' }
            ],
            summary: 'La tierra baja te invita a desarrollar mayor practicidad y establecer rutinas que te den estabilidad.'
        },
        'medium_low': {
            title: 'Moderado bajo',
            description: 'Un 20-30% de tierra indica un nivel moderado pero inferior al promedio. Hay practicidad pero puede faltar persistencia o atención a los detalles materiales. La persona equilibra lo ideal con lo real, aunque a veces le cuesta anclarse.',
            characteristics: [
                { title: 'Materialización parcial', text: 'Podés lograr cosas pero a veces el seguimiento falla. La constancia no es tu fuerte.' },
                { title: 'Pragmatismo selectivo', text: 'Solo ciertas áreas de tu vida reciben atención práctica. Otras pueden estar desatendidas.' },
                { title: 'Estabilidad variable', text: 'Podés mantener el orden por períodos pero luego se desarma. Necesitás esfuerzo conscious.' },
                { title: 'Responsabilidad inconsistente', text: 'A veces cumplís, a veces no. Depende del área y tu nivel de interés.' }
            ],
            summary: 'Con tierra moderada baja, tu desafío es crear hábitos más sólidos que te den estabilidad constante.'
        },
        'balanced': {
            title: 'Equilibrado',
            description: 'Un 30-40% de tierra representa un balance saludable. La persona es práctica sin ser materialista, estable sin ser rígida. Tiene los pies en la tierra pero también puede soar. Representa la capacidad de materializar metas de forma realista.',
            characteristics: [
                { title: 'Pragmatismo saludable', text: 'Podés convertir ideas en acciones concretas sin perder de vista la realidad.' },
                { title: 'Estabilidad sostenible', text: 'Mantenés una base sólida sin necesitar control absoluto. Podés adaptarte cuando es necesario.' },
                { title: 'Materialización efectiva', text: 'Trabajas consistentemente hacia tus metas tangibles. Tu esfuerzo da frutos.' },
                { title: 'Equilibrio material-espiritual', text: 'No sacrificás tus valores por posesiones, pero tampoco ignorás lo práctico.' }
            ],
            summary: 'El 35-40% de tierra te da una base sólida para construir sin perder flexibilidad ni conexión con lo esencial.'
        },
        'high': {
            title: 'Alto',
            description: 'Un 40-50% de tierra indica un fuerte énfasis en lo material y práctico. La persona es trabajador, estable y orientada a resultados tangibles. Puede ser exitosa en negocios pero debe cuidar no volverse materialista o excesivamente controladora.',
            characteristics: [
                { title: 'Orientación a resultados', text: 'Todo lo que hacés tiene un propósito concreto. El éxito material es importante para vos.' },
                { title: 'Estabilidad férrea', text: 'Una vez que establecés algo, lo mantenés. Rara vez change tus compromisos.' },
                { title: 'Pragmatismo dominante', text: 'Lo abstracto te cuesta. Preferís lo tangible y medible.' },
                { title: 'Laboriosidad', text: 'El trabajo duro es natural para vos. No te da miedo el esfuerzo.' }
            ],
            summary: 'La tierra alta te da éxito material y estabilidad, pero recordá que no todo en la vida se puede controlar o medir.'
        },
        'very_high': {
            title: 'Muy alto',
            description: 'Más del 50% de tierra indica un dominio extremo del elemento material. La persona puede ser adicta al trabajo, extremadamente práctica, pero también propensa a la preocupación excesiva por lo material y el control.',
            characteristics: [
                { title: 'Workaholic', text: 'El trabajo define gran parte de tu identidad. El descanso parece un desperdicio.' },
                { title: 'Control necesidad', text: 'Necesitás control sobre tu entorno y las circunstancias. El caos te genera ansiedad.' },
                { title: 'Materialismo', text: 'Las posesiones y el éxito material son centrales a tu autovalor.' },
                { title: 'Rigidez', text: 'El cambio te cuesta. Preferís lo conocido y establecido.' }
            ],
            summary: 'Con más del 50% de tierra, tu desafío es soltar el control y recordar que hay más en la vida que lo tangible.'
        }
    },
    'Aire': {
        'low': {
            title: 'Bajo',
            description: 'Un porcentaje bajo de aire (menos del 20%) indica dificultad para pensar objetivamente, comunicarse efectivamente o mantener una perspectiva amplia. La persona puede ser más emocional que racional, hands-on que conceptual.',
            characteristics: [
                { title: 'Pensamiento concreto', text: 'Piensas más en términos prácticos que abstractos. Lo que ves es lo que es.' },
                { title: 'Comunicación limitada', text: 'Expresarte no es fácil. Quizás te cuesta articular tus ideas.' },
                { title: 'Perspectiva reducida', text: 'Es difícil ver más allá de tu situación immediate. El panorama amplio se pierde.' },
                { title: 'Análisis limitado', text: 'No te detenés a analizar. Actuás más por instinto que por razonamiento.' }
            ],
            summary: 'El aire bajo te invita a desarrollar mayor flexibilidad mental y habilidades de comunicación.'
        },
        'medium_low': {
            title: 'Moderado bajo',
            description: 'Un 20-30% de aire indica un nivel moderado pero inferior al promedio. La persona tiene capacidad intelectual pero puede carecer de la amplitud de perspectiva o las habilidades sociales del aire dominante.',
            characteristics: [
                { title: 'Pensamiento selectivo', text: 'Analizás solo ciertoscasos. No es tu naturaleza cuestionar todo.' },
                { title: 'Comunicación práctica', text: 'Comunicás lo necesario pero no te dilatás en conversaciones abstractas.' },
                { title: 'Perspectiva variable', text: 'A veces ves el panorama, a veces te perdés en los detalles.' },
                { title: 'Socialización moderada', text: 'Tenés amigos pero no necesitás interacción social constante.' }
            ],
            summary: 'Tu aire moderado bajo indica que tu mente funciona bien pero quizás prefiera lo concreto sobre lo abstracto.'
        },
        'balanced': {
            title: 'Equilibrado',
            description: 'Un 30-40% de aire representa un balance saludable. La persona piensa con claridad, se comunica efectivamente y mantiene perspectiva. No es ni troppo intelectual ni demasiado emocional. Representa la capacidad de ver múltiples perspectivas.',
            characteristics: [
                { title: 'Pensamiento claro', text: 'Podés analizar situaciones objetivamente sin dejarte llevar completamente por las emociones.' },
                { title: 'Comunicación efectiva', text: 'Expresás tus ideas con claridad. Otros te entienden bien.' },
                { title: 'Perspectiva amplia', text: 'Podés ver más allá de tu nariz. Entiendes diferentes puntos de vista.' },
                { title: 'Socialización saludable', text: 'Tenés una red social activa pero también valorás tu tiempo alone.' }
            ],
            summary: 'El 35-40% de aire te da claridad mental y habilidades sociales sin caer en el intelectualismo extremo.'
        },
        'high': {
            title: 'Alto',
            description: 'Un 40-50% de aire indica una mente activa, curiosa y orientada a las ideas. La persona es socialmente activa, comunicativa, y siempre está pensando. Puede destacar en profesiones intelectuales pero debe evitar la indecisión o el análisis paralizante.',
            characteristics: [
                { title: 'Mente perpetua', text: 'Tu mente nunca descansa. Siempre estás pensando, analyzando, questioning.' },
                { title: 'Comunicador nato', text: 'Te expresás con facilidad. Las conversaciones son tu elemento.' },
                { title: 'Red social amplia', text: 'Tenés muchos contactos y conocidos. La interacción social te energiza.' },
                { title: 'Curiosidad intelectual', text: 'Querés saber el "por qué" de todo. El conocimiento te atrae.' }
            ],
            summary: 'El aire alto te da una mente brillante y habilidades sociales, pero aprendé a conectar con tus emociones.'
        },
        'very_high': {
            title: 'Muy alto',
            description: 'Más del 50% de aire indica un dominio intelectual extremo. La persona vive en su mente, puede ser distante de lo emocional, y tiene muchas ideas pero quizás le cuesta pasar a la acción.',
            characteristics: [
                { title: 'Cabeza en las nubes', text: 'Pensás más de lo que actúas. Las ideas sobran pero la acción falta.' },
                { title: 'Distante emocional', text: 'Podés ser frío o distante. Las emociones son difíciles de procesar para vos.' },
                { title: 'Indecisión', text: 'Analizás tanto las opciones que te cuesta tomar decisiones.' },
                { title: 'Socialización excesiva', text: 'Podés pasar demasiado tiempo en redes y conversaciones, desatiendo otras áreas.' }
            ],
            summary: 'Con más del 50% de aire, tu desafío es actuar más y pensar menos, y conectar con tu mundo emocional.'
        }
    },
    'Agua': {
        'low': {
            title: 'Bajo',
            description: 'Un porcentaje bajo de agua (menos del 20%) indica dificultad para conectar con las emociones propias y ajenas. La persona puede parecer dura, práctica o distante. Quizás te cost entender tus propios sentimientos o los de otros.',
            characteristics: [
                { title: 'Dureza emocional', text: 'No es fácil para vos mostrar o procesar emociones. Podés parecer frío o distante.' },
                { title: 'Intuición limitada', text: 'Confiás más en la lógica que en la corazonada. Lo invisible no te alcanza.' },
                { title: 'Relaciones superficiales', text: 'Mantener profundidad emocional te cuesta. Las conexiones quedan en la superficie.' },
                { title: 'Autoconocimiento emocional', text: 'No entendés bien qué sentís. Las emociones son un misterio.' }
            ],
            summary: 'El agua baja te invita a desarrollar mayor sensibilidad emocional y conexión con tu mundo interior.'
        },
        'medium_low': {
            title: 'Moderado bajo',
            description: 'Un 20-30% de agua indica un nivel moderado pero inferior al promedio. La persona tiene emociones pero no las deja dominar. Hay sensibilidad pero también capacidad de mantener distancia emocional cuando es necesario.',
            characteristics: [
                { title: 'Emoción contenida', text: 'Sentís pero no expresás libremente. Hay un filtro entre vos y tus emociones.' },
                { title: 'Intuición selectiva', text: 'A veces escuchás tu intuición, a veces la ignorás.' },
                { title: 'Conexión moderada', text: 'Podés conectar profundamente pero también mantenés distancia.' },
                { title: 'Balance mente-corazón', text: 'Tu mente suele ganar sobre tu corazón en la toma de decisiones.' }
            ],
            summary: 'Tu agua moderada baja indica que sentís profundamente pero también sabés mantener el control emocional.'
        },
        'balanced': {
            title: 'Equilibrado',
            description: 'Un 30-40% de agua representa un balance saludable. La persona es emocionalmente inteligente, sensible sin ser vulnerable, y puede conectar con otros mientras mantiene límites saludables. Representa la capacidad de sentir profundamente sin ahogarse en las emociones.',
            characteristics: [
                { title: 'Inteligencia emocional', text: 'Entendés tus emociones y las de otros. Sabés leer el ambiente.' },
                { title: 'Sensibilidad sana', text: 'Sos sensible pero no te abruman los sentimientos tuyos o ajenos.' },
                { title: 'Intuición activa', text: 'Tu corazonada te guía. Confiás en tus intuiciones cuando la lógica no basta.' },
                { title: 'Conexiones profundas', text: 'Podés establecer intimidad emocional sin perderte en ella.' }
            ],
            summary: 'El 35-40% de agua te da profundidad emocional y capacidad de conexión sin perderte en ella.'
        },
        'high': {
            title: 'Alto',
            description: 'Un 40-50% de agua indica una naturaleza profundamente emocional y sensible. La persona siente todo intensamente, es intuitiva, y tiene gran capacidad empática. Debe cuidar no absorber demasiado las emociones de otros.',
            characteristics: [
                { title: 'Sensibilidad elevada', text: 'Todo te afecta. Las emociones, propias y ajenas, son muy presentes.' },
                { title: 'Intuición fuerte', text: 'Tu corazonada es poderosa. Sabés cosas sin poder explicarlas lógicamente.' },
                { title: 'Empatía profunda', text: 'Sientes lo que otros sienten. Podés absorber sus emociones sin querer.' },
                { title: 'Mundo interior rico', text: 'Tu vida interior es intensa. Soñás, sentís, imaginás profundamente.' }
            ],
            summary: 'El agua alta te da una profundidad emocional especial, pero aprendé a poner límites para no desbordarte.'
        },
        'very_high': {
            title: 'Muy alto',
            description: 'Más del 50% de agua indica un dominio emocional extremo. La persona puede ser hiper-sensible, absorbiendo todo lo emocional del entorno, y ser altamente intuitiva pero también propensa a estados emocionales intensos.',
            characteristics: [
                { title: 'Esponja emocional', text: 'Absorbés todo lo que otros sienten. El entorno te afecta profundamente.' },
                { title: 'Intuición psíquica', text: 'Tu intuición es casi psíquica. Sabés cosas que no deberías saber.' },
                { title: 'Inmersión emocional', text: 'Cuando sentís, te sumergís completamente. Es difícil salir de los estados emocionales.' },
                { title: 'Necesidad de escape', text: 'Podés necesitar aislamiento para procesar tanta carga emocional.' }
            ],
            summary: 'Con más del 50% de agua, tu desafío es crear límites emocionales saludables y encontrar formas de procesar tanta sensibilidad.'
        }
    }
};

function getElementCategory(percentage: number): string {
    if (percentage < 20) return 'low';
    if (percentage < 30) return 'medium_low';
    if (percentage < 40) return 'balanced';
    if (percentage < 50) return 'high';
    return 'very_high';
}

export function getLocalInterpretation(chartData: any, userInfo: any) {
    const planets = chartData.planets || [];
    const houses = chartData.houses || [];
    const aspects = chartData.aspects || [];
    const metadata = userInfo?.metadata || {};

    const sun = planets.find((p: any) => p.name === 'Sol');
    const moon = planets.find((p: any) => p.name === 'Luna');
    const asc = planets.find((p: any) =>
        p.name === 'Ascendente' || p.name === 'ASC' || p.name === 'Asc' || p.name === 'Rising' || p.name === 'rising'
    );
    const mc = planets.find((p: any) => p.name === 'Medio Cielo' || p.name === 'MC');

    const mercury = planets.find((p: any) => p.name === 'Mercurio');
    const venus = planets.find((p: any) => p.name === 'Venus');
    const mars = planets.find((p: any) => p.name === 'Marte');
    const jupiter = planets.find((p: any) => p.name === 'Júpiter');
    const saturn = planets.find((p: any) => p.name === 'Saturno');
    const uranus = planets.find((p: any) => p.name === 'Urano');
    const neptune = planets.find((p: any) => p.name === 'Neptuno');
    const pluto = planets.find((p: any) => p.name === 'Plutón');

    const northNode = planets.find((p: any) => p.name === 'Nodo Norte' || p.name === 'North Node');
    const southNode = planets.find((p: any) => p.name === 'Nodo Sur' || p.name === 'South Node');
    const chiron = planets.find((p: any) => p.name === 'Quirón' || p.name === 'Chiron');
    const lilith = planets.find((p: any) => p.name === 'Lilith' || p.name === 'Lilith Negra');

    const firstHouse = houses[0];
    const fourthHouse = houses[3];
    const seventhHouse = houses[6];
    const tenthHouse = houses[9];

    // Calcular balance de aspectos al inicio para usar en toda la función
    const majorAspectsForBalance = aspects.filter((a: any) => 
        ['Conjunción', 'Sextil', 'Cuadratura', 'Trígono', 'Oposición'].includes(a.aspect) && Math.abs(a.orb) < 8
    );
    const aspectTypesForBalance: Record<string, number> = {};
    majorAspectsForBalance.forEach((a: any) => {
        const t = a.aspect;
        aspectTypesForBalance[t] = (aspectTypesForBalance[t] || 0) + 1;
    });
    const harmonyCount = (aspectTypesForBalance['Trígono'] || 0) + (aspectTypesForBalance['Sextil'] || 0);
    const tensionCount = (aspectTypesForBalance['Cuadratura'] || 0) + (aspectTypesForBalance['Oposición'] || 0);

    let md = `# 🌟 Tu Mapa Natal\n\n`;
    md += `*Hola ${userInfo?.name || 'viajero estelar'}. Tu carta astral es tan única como vos. Esta guía te ayudará a descifrar las energías que configuran tu ser, desde lo más fundamental hasta los detalles que completan tu firma celestial.*\n\n`;

    // ============================================
    // SECCIÓN 1: DATOS TÉCNICOS
    // ============================================
    md += `## 📋 Datos Técnicos de tu Carta\n\n`;
    md += `Estos son los parámetros técnicos utilizados para calcular tu carta natal:\n\n`;
    md += `- **Fecha de nacimiento:** ${metadata.birthDate || 'No especificada'}\n`;
    md += `- **Hora de nacimiento:** ${metadata.birthTime || 'No especificada'}\n`;
    md += `- **Lugar de nacimiento:** ${metadata.birthLocation || 'No especificado'}\n`;
    md += `- **Sistema de casas:** ${metadata.houseSystem || 'Placidus'}\n`;
    md += `- **Tipo de zodíaco:** ${metadata.zodiacType || 'Tropical'}\n\n`;
    md += `---\n\n`;

    // ============================================
    // SECCIÓN 2: ESTRUCTURA BÁSICA (PRIORITARIA)
    // ============================================
    md += `## 🏛️ Estructura Básica de tu Carta\n\n`;
    md += `Esta es la columna vertebral de tu carta astral.\n\n`;

    // ASCENDENTE Y SU REGENTE
    const ascSignBasic = asc?.sign || firstHouse?.sign || 'Desconocido';
    const ascRulerBasic = SIGN_RULERS[ascSignBasic] || 'Desconocido';
    
    md += `### ⬆️ Ascendente\n`;
    md += `**Ascendente en ${ascSignBasic}:** ${ASCENDANT_CONCISE[ascSignBasic] || '_SIGN_ no determinado'}\n\n`;
    
    md += `**Regente:** ${ascRulerBasic}\n`;
    const rulerPlanetBasic = planets.find((p: any) => p.name === ascRulerBasic || (ascRulerBasic.includes('/') && ascRulerBasic.split('/').includes(p.name)));
    if (rulerPlanetBasic) {
        md += `- Ubicación: ${rulerPlanetBasic.sign} casa ${rulerPlanetBasic.house}\n`;
        
        const rulerAspectsBasic = aspects.filter((a: any) => 
            (a.point1 === rulerPlanetBasic.name || a.point2 === rulerPlanetBasic.name) && Math.abs(a.orb) < 6
        );
        if (rulerAspectsBasic.length > 0) {
            md += `- Aspectos: ${rulerAspectsBasic.slice(0, 2).map((a: any) => {
                const other = a.point1 === rulerPlanetBasic.name ? a.point2 : a.point1;
                return `${other} ${a.aspect}`;
            }).join(', ')}\n`;
        }
    }
    md += `\n`;

    // MEDIO CIELO
    const mcSignBasic = mc?.sign || 'Desconocido';
    const mcRulerBasic = SIGN_RULERS[mcSignBasic] || 'Desconocido';
    
    md += `### 🏆 Medio Cielo\n`;
    md += `**MC en ${mcSignBasic}** (regido por ${mcRulerBasic})\n\n`;
    
    const mcRulerPlanetBasic = planets.find((p: any) => p.name === mcRulerBasic || (mcRulerBasic.includes('/') && mcRulerBasic.split('/').includes(p.name)));
    if (mcRulerPlanetBasic) {
        md += `- Regente en: ${mcRulerPlanetBasic.sign} casa ${mcRulerPlanetBasic.house}\n\n`;
    }

    // SOL Y SU REGENTE
    md += `### ☀️ El Sol\n`;
    if (sun) {
        const sunRulerBasic = SIGN_RULERS[sun.sign] || 'Desconocido';
        md += `**Sol en ${sun.sign}** (${sun.house}): ${SOL_CONCISE[sun.sign] || ''}\n`;
        md += `Regido por ${sunRulerBasic}\n`;
        
        const sunRulerPlanetBasic = planets.find((p: any) => p.name === sunRulerBasic || (sunRulerBasic.includes('/') && sunRulerBasic.split('/').includes(p.name)));
        if (sunRulerPlanetBasic) {
            md += `- Regente en: ${sunRulerPlanetBasic.sign} casa ${sunRulerPlanetBasic.house}\n`;
        }
    }
    md += `\n`;

    // LUNA
    if (moon) {
        md += `### 🌙 La Luna\n`;
        md += `**Luna en ${moon.sign}** (${moon.house}): ${LUNA_CONCISE[moon.sign] || ''}\n\n`;
    }

    md += `---\n\n`;

    // ============================================
    // SECCIÓN 3: DIGNIDADES Y DISPOSITOR
    // ============================================
    md += `## ⚖️ Dignidades Planetarias\n\n`;
    md += `Las dignidades muestran la fuerza esencial de cada planeta. Un planeta en dignidad expresa su energía con naturalidad; en debilidad requiere más esfuerzo.\n\n`;

    const mainPlanetsToCheck = ['Sol', 'Luna', 'Mercurio', 'Venus', 'Marte', 'Júpiter', 'Saturno'];
    const dignitiesFound: string[] = [];
    const weaknessesFound: string[] = [];

    mainPlanetsToCheck.forEach(planetName => {
        const planet = planets.find((p: any) => p.name === planetName);
        if (planet) {
            const dignity = PLANET_DIGNITIES[planetName]?.[planet.sign];
            if (dignity === 'domicilio' || dignity === 'exaltado') {
                dignitiesFound.push(`${planetName} en ${planet.sign} (${dignity})`);
            } else if (dignity === 'caída' || dignity === 'detrimento' || dignity === 'exilio') {
                weaknessesFound.push(`${planetName} en ${planet.sign} (${dignity})`);
            }
        }
    });

    if (dignitiesFound.length > 0) {
        md += `### 🌟 Planetas en Dignidad\n`;
        dignitiesFound.forEach(d => md += `- ${d}\n`);
        md += `\n`;
    }

    if (weaknessesFound.length > 0) {
        md += `### ⚠️ Planetas en Debilidad\n`;
        weaknessesFound.forEach(w => md += `- ${w}\n`);
        md += `\n`;
    }

    md += `---\n\n`;

    // ============================================
    // SECCIÓN 4: PANORAMA GENERAL
    // ============================================
    md += `## 🔭 Panorama General\n\n`;
    md += `Síntesis de la energía general de tu carta astral.\n\n`;

    // Elementos
    const elementCounts = { 'Fuego': 0, 'Tierra': 0, 'Aire': 0, 'Agua': 0 };
    const modalityCounts = { 'Cardinal': 0, 'Fijo': 0, 'Mutable': 0 };
    let yangCount = 0;
    let yinCount = 0;

    planets.forEach((p: any) => {
        const element = SIGN_ELEMENTS[p.sign];
        if (element) elementCounts[element]++;
        const modality = SIGN_MODALITIES[p.sign];
        if (modality) modalityCounts[modality]++;
        const polarity = SIGN_POLARITIES[p.sign];
        if (polarity === 'Yang') yangCount++;
        else if (polarity === 'Yin') yinCount++;
    });

    const totalPlanets = planets.length || 1;
    const dominantElement = Object.entries(elementCounts).sort((a, b) => b[1] - a[1])[0] as [string, number];
    const dominantModality = Object.entries(modalityCounts).sort((a, b) => b[1] - a[1])[0] as [string, number];
    const polarity = yangCount > yinCount ? 'Yang (Masculino)' : yinCount > yangCount ? 'Yin (Femenino)' : 'Equilibrado';

    md += `### 🌍 Firma Elemental\n`;
    md += `**Elemento dominante:** ${dominantElement[0]} (${Math.round((dominantElement[1] / totalPlanets) * 100)}%)\n\n`;
    const elemDesc = ELEMENT_DESCRIPTIONS as Record<string, string>;
    md += `${elemDesc[dominantElement[0]] || ''}\n\n`;

    md += `### 🔄 Modalidad\n`;
    md += `**Modalidad predominante:** ${dominantModality[0]} (${Math.round((dominantModality[1] / totalPlanets) * 100)}%)\n\n`;
    const modDesc = MODALITY_DESCRIPTIONS as Record<string, string>;
    md += `${modDesc[dominantModality[0]] || ''}\n\n`;

    md += `### ⚖️ Polaridad\n`;
    md += `**Tu polaridad:** ${polarity}\n\n`;
    if (polarity.includes('Yang')) {
        md += `Tenés una orientación hacia lo activo, lo externo y lo expresivo. Tiendes a ser más orientado a la acción y menos reactivo emocionalmente.\n\n`;
    } else if (polarity.includes('Yin')) {
        md += `Tenés una orientación hacia lo receptivo, lo interno y lo reflexivo. Tiendes a ser más sensible y orientado hacia el mundo interior.\n\n`;
    } else {
        md += `Tu carta está equilibrada entre energías Yang e Yin, lo que te da flexibilidad para adaptarte a diferentes situaciones.\n\n`;
    }

    // Análisis de hemisferios
    const ascLong = asc?.longitude || 0;
    const mcLong = mc?.longitude || 0;
    let easternCount = 0;
    let westernCount = 0;
    let northernCount = 0;
    let southernCount = 0;

    planets.forEach((p: any) => {
        const pLong = p.longitude || 0;
        const diffAsc = Math.abs(pLong - ascLong);
        const diffMc = Math.abs(pLong - mcLong);
        
        if (diffAsc < 180) easternCount++;
        else westernCount++;
        
        if (diffMc < 180) southernCount++;
        else northernCount++;
    });

    md += `### 🌍 Distribución por Hemisferios\n`;
    md += `- **Oriente / Occidente:** ${easternCount > westernCount ? 'Oriental (iniciativa personal)' : westernCount > easternCount ? 'Occidental (influencia externa)' : 'Equilibrado'}\n`;
    md += `- **Norte / Sur:** ${northernCount > southernCount ? 'Norte (objetivos públicos)' : southernCount > northernCount ? 'Sur (vida privada)' : 'Equilibrado'}\n\n`;

    // Forma del gráfico (Clasificación Marc Edmund Jones)
    const elementArr = Object.values(elementCounts);
    const emptyHemispheres = [];
    if (westernCount === 0 || easternCount === 0) emptyHemispheres.push('Este-Oeste');
    if (northernCount === 0 || southernCount === 0) emptyHemispheres.push('Norte-Sur');
    
    let chartShape = 'Rectángulo';
    if (emptyHemispheres.length === 2) {
        if (elementArr.filter(e => e === 0).length >= 2) chartShape = 'Bundle (Paquete)';
        else chartShape = 'Bowl (Tazón)';
    } else if (elementArr.filter(e => e > totalPlanets * 0.4).length >= 2) {
        chartShape = 'Splash (Salpicadura)';
    } else if (westernCount > easternCount * 2 || easternCount > westernCount * 2) {
        chartShape = 'Bucket (Balde)';
    }

    md += `### 📊 Forma del Gráfico\n`;
    md += `**Tipo:** ${chartShape}\n\n`;
    const shapeDescriptions: Record<string, string> = {
        'Bundle (Paquete)': 'Los planetas están agrupados en un arco de 120° o menos. Esto indica un enfoque concentrado en la vida con talentos muy específicos.',
        'Bowl (Tazón)': 'Los planetas se distribuyen uniformemente en 180° o más, con un vacío en el lado opuesto. Indica una personalidad enfocada con potencial de completarse.',
        'Splash (Salpicadura)': 'Los planetas están dispersos por toda la carta. Indica versatilidad y muchos intereses, pero riesgo de dispersión.',
        'Bucket (Balde)': 'Los planetas forman un grupo de 180° con un planeta destacado aislado. Indica un objetivo principal con talento único.',
        'Locomotive (Locomotora)': 'Los planetas se mueven en una secuencia continua sin huecos grandes. Indica dirección clara y propósito definido.',
        'Rectángulo': 'Los planetas están distribuidos de forma equilibrada. Indica versatilidad y múltiples talentos.'
    };
    md += `${shapeDescriptions[chartShape] || 'Una distribución diversa de energías.'}\n\n`;
    md += `---\n\n`;

    // ============================================
    // SECCIÓN 3: LOS TRES PILARES
    // ============================================
    md += `## 🔥 Los Tres Pilares Fundamentales\n\n`;
    md += `Estos tres elementos forman el núcleo de tu identidad astral: el Sol (quién sos en tu esencia), la Luna (cómo sentís) y el Ascendente (cómo te ven los demás).\n\n`;

    // SOL
    md += `### ☀️ El Sol (Identidad Esencial)\n`;
    if (sun) {
        const sunSignDesc = SIGN_EXPLANATIONS[sun.sign] || '';
        md += `**Posición:** ${sun.sign} en la ${sun.house || 'casa desconocida'}\n\n`;
        md += `${sunSignDesc}\n\n`;
        
        const sunAspects = aspects.filter((a: any) => 
            (a.point1 === 'Sol' || a.point2 === 'Sol') && Math.abs(a.orb) < 8
        );
        if (sunAspects.length > 0) {
            md += `**Aspectos principales del Sol:**\n`;
            sunAspects.slice(0, 3).forEach((a: any) => {
                const other = a.point1 === 'Sol' ? a.point2 : a.point1;
                md += `- ${other} ${a.aspect} (orbe: ${Math.abs(a.orb).toFixed(1)}°)\n`;
            });
            md += `\n`;
        }
    } else {
        md += `No se pudo determinar la posición del Sol.\n\n`;
    }

    // LUNA
    md += `### 🌙 La Luna (Mundo Emocional)\n`;
    if (moon) {
        const moonSignDesc = MOON_SIGN_EXPLANATIONS[moon.sign] || '';
        md += `**Posición:** ${moon.sign} en la ${moon.house || 'casa desconocida'}\n\n`;
        md += `${moonSignDesc}\n\n`;

        const moonAspects = aspects.filter((a: any) => 
            (a.point1 === 'Luna' || a.point2 === 'Luna') && Math.abs(a.orb) < 8
        );
        if (moonAspects.length > 0) {
            md += `**Aspectos principales de la Luna:**\n`;
            moonAspects.slice(0, 3).forEach((a: any) => {
                const other = a.point1 === 'Luna' ? a.point2 : a.point1;
                md += `- ${other} ${a.aspect} (orbe: ${Math.abs(a.orb).toFixed(1)}°)\n`;
            });
            md += `\n`;
        }
    } else {
        md += `No se pudo determinar la posición de la Luna.\n\n`;
    }

    // ASCENDENTE
    md += `### ⬆️ El Ascendente (Personalidad Externa)\n`;
    const ascSign = asc?.sign || firstHouse?.sign || 'Desconocido';
    const ascHouse = asc?.house || firstHouse?.name || 'Primera';
    const ascendantSignDesc = ASCENDANT_SIGN_EXPLANATIONS[ascSign] || '';
    
    md += `**Posición:** ${ascSign} en la ${ascHouse}\n\n`;
    md += `${ascendantSignDesc}\n\n`;

    // Regente del Ascendente
    const ascRuler = SIGN_RULERS[ascSign] || 'Desconocido';
    md += `**Regente del Ascendente:** ${ascRuler}\n`;
    const rulerPlanet = planets.find((p: any) => p.name === ascRuler || (ascRuler.includes('/') && ascRuler.split('/').includes(p.name)));
    if (rulerPlanet) {
        md += `(ubicado en ${rulerPlanet.sign} en la casa ${rulerPlanet.house})\n`;
    }
    md += `\n`;

    md += `---\n\n`;

    // ============================================
    // SECCIÓN 4: PLANETAS PERSONALES
    // ============================================
    md += `## 🌍 Planetas Personales\n\n`;
    md += `Estos planetas representan las energías que actúan en tu vida cotidiana y cómo te expresas en el mundo.\n\n`;

    // MERCURIO
    md += `### 🗣️ Mercurio (Mente y Comunicación)\n`;
    if (mercury) {
        md += `**Posición:** ${mercury.sign} en la ${mercury.house || 'casa desconocida'}\n\n`;
        md += `${MERCURY_SIGN_INTERPRETATIONS[mercury.sign] || ''}\n\n`;
        
        const mercAspects = aspects.filter((a: any) => 
            (a.point1 === 'Mercurio' || a.point2 === 'Mercurio') && Math.abs(a.orb) < 6
        );
        if (mercAspects.length > 0) {
            md += `**Influencias:** `;
            md += mercAspects.slice(0, 2).map((a: any) => {
                const other = a.point1 === 'Mercurio' ? a.point2 : a.point1;
                return `${other} ${a.aspect}`;
            }).join(', ');
            md += `.\n\n`;
        }
    }

    // VENUS
    md += `### 💕 Venus (Amor y Valores)\n`;
    if (venus) {
        md += `**Posición:** ${venus.sign} en la ${venus.house || 'casa desconocida'}\n\n`;
        md += `${VENUS_SIGN_INTERPRETATIONS[venus.sign] || ''}\n\n`;
        
        const venAspects = aspects.filter((a: any) => 
            (a.point1 === 'Venus' || a.point2 === 'Venus') && Math.abs(a.orb) < 6
        );
        if (venAspects.length > 0) {
            md += `**Influencias:** `;
            md += venAspects.slice(0, 2).map((a: any) => {
                const other = a.point1 === 'Venus' ? a.point2 : a.point1;
                return `${other} ${a.aspect}`;
            }).join(', ');
            md += `.\n\n`;
        }
    }

    // MARTE
    md += `### ⚔️ Marte (Acción y Deseo)\n`;
    if (mars) {
        md += `**Posición:** ${mars.sign} en la ${mars.house || 'casa desconocida'}\n\n`;
        md += `${MARS_SIGN_INTERPRETATIONS[mars.sign] || ''}\n\n`;
        
        const marsAspects = aspects.filter((a: any) => 
            (a.point1 === 'Marte' || a.point2 === 'Marte') && Math.abs(a.orb) < 6
        );
        if (marsAspects.length > 0) {
            md += `**Influencias:** `;
            md += marsAspects.slice(0, 2).map((a: any) => {
                const other = a.point1 === 'Marte' ? a.point2 : a.point1;
                return `${other} ${a.aspect}`;
            }).join(', ');
            md += `.\n\n`;
        }
    }

    md += `---\n\n`;

    // ============================================
    // SECCIÓN 5: PLANETAS SOCIALES
    // ============================================
    md += `## 🤝 Planetas Sociales\n\n`;
    md += `Júpiter y Saturno representan tu proceso de crecimiento y estructuración en el mundo.\n\n`;

    // JÚPITER
    md += `### �‍♂️ Júpiter (Expansión y Crecimiento)\n`;
    if (jupiter) {
        md += `**Posición:** ${jupiter.sign} en la ${jupiter.house || 'casa desconocida'}\n\n`;
        md += `${JUPITER_SIGN_INTERPRETATIONS[jupiter.sign] || ''}\n\n`;
    }

    // SATURNO
    md += `### 🧓 Saturno (Estructura y Límites)\n`;
    if (saturn) {
        md += `**Posición:** ${saturn.sign} en la ${saturn.house || 'casa desconocida'}\n\n`;
        md += `${SATURN_SIGN_INTERPRETATIONS[saturn.sign] || ''}\n\n`;
    }

    md += `---\n\n`;

    // ============================================
    // SECCIÓN 6: PLANETAS TRANS PERSONALES
    // ============================================
    md += `## 🌌 Planetas Transpersonales\n\n`;
    md += `Estos planetas representan influencias colectivas y transformaciones profundas que trascienden lo personal.\n\n`;

    // URANO
    md += `### ⚡ Urano (Individualidad y Cambio)\n`;
    if (uranus) {
        md += `**Posición:** ${uranus.sign} en la ${uranus.house || 'casa desconocida'}\n\n`;
        md += `${URANUS_SIGN_INTERPRETATIONS[uranus.sign] || ''}\n\n`;
    }

    // NEPTUNO
    md += `### 🌊 Neptuno (Espiritualidad e Intuición)\n`;
    if (neptune) {
        md += `**Posición:** ${neptune.sign} en la ${neptune.house || 'casa desconocida'}\n\n`;
        md += `${NEPTUNE_SIGN_INTERPRETATIONS[neptune.sign] || ''}\n\n`;
    }

    // PLUTÓN
    md += `### 🔻 Plutón (Transformación y Poder)\n`;
    if (pluto) {
        md += `**Posición:** ${pluto.sign} en la ${pluto.house || 'casa desconocida'}\n\n`;
        md += `${PLUTO_SIGN_INTERPRETATIONS[pluto.sign] || ''}\n\n`;
    }

    md += `---\n\n`;

    // ============================================
    // SECCIÓN 8: ANÁLISIS DE CASAS
    // ============================================
    md += `## 🏠 Análisis de Casas\n\n`;
    md += `Las casas muestran las áreas de vida donde se expresan las energías de los planetas.\n\n`;

    const angularHouses = [
        { house: firstHouse, name: 'Primera (I)', key: 'Primera' },
        { house: fourthHouse, name: 'Cuarta (IV)', key: 'Cuarta' },
        { house: seventhHouse, name: 'Séptima (VII)', key: 'Séptima' },
        { house: tenthHouse, name: 'Décima (X)', key: 'Décima' }
    ];

    md += `### ⭐ Casas Angulares (Focos Principales)\n`;
    md += `Las casas angulares (I, IV, VII, X) son las más importantes ya que representan puntos de acción directa en la vida.\n\n`;

    angularHouses.forEach(({ house, name, key }) => {
        if (house) {
            const planetsInHouse = planets.filter((p: any) => p.house === key || p.house === house.name);
            md += `#### ${name} en ${house.sign}\n`;
            md += `**Signo:** ${house.sign}\n`;
            md += `**Casa:** ${house.name}\n`;
            if (planetsInHouse.length > 0) {
                md += `**Planetas en esta casa:** ${planetsInHouse.map((p: any) => p.name).join(', ')}\n`;
            }
            md += `\n${HOUSE_DESCRIPTIONS[key] || ''}\n\n`;
        }
    });

    md += `---\n\n`;

    // ============================================
    // SECCIÓN 8: ASPECTOS PLANETARIOS
    // ============================================
    md += `## 🎯 Aspectos Planetarios\n\n`;
    md += `Los aspectos muestran cómo interactúan las energías de diferentes planetas en tu carta.\n\n`;

    if (aspects.length > 0) {
        // Aspectos principales (orbe < 8)
        const majorAspects = aspects.filter((a: any) => 
            ['Conjunción', 'Sextil', 'Cuadratura', 'Trígono', 'Oposición'].includes(a.aspect) && Math.abs(a.orb) < 8
        );

        // Clasificar por importancia
        const pillarAspects = majorAspects.filter((a: any) => 
            ['Sol', 'Luna', 'Ascendente'].includes(a.point1) || ['Sol', 'Luna', 'Ascendente'].includes(a.point2)
        );
        
        const otherMajorAspects = majorAspects.filter((a: any) => 
            !pillarAspects.includes(a)
        );

        md += `### 🔆 Aspectos de los Pilares Fundamentales\n`;
        md += `Estos son los aspectos más importantes ya que involucran tu identidad, emociones y personalidad.\n\n`;
        
        if (pillarAspects.length > 0) {
            pillarAspects.sort((a: any, b: any) => Math.abs(a.orb) - Math.abs(b.orb));
            pillarAspects.forEach((aspect: any) => {
                const pairKey = `${aspect.point1}-${aspect.point2}`;
                const pairKey2 = `${aspect.point2}-${aspect.point1}`;
                const pairInterp = PLANET_PAIR_INTERPRETATIONS[pairKey]?.[aspect.aspect] || PLANET_PAIR_INTERPRETATIONS[pairKey2]?.[aspect.aspect] || '';
                
                md += `**${aspect.point1} ${aspect.aspect} ${aspect.point2}** (orbe: ${Math.abs(aspect.orb).toFixed(1)}°)\n`;
                if (pairInterp) md += `${pairInterp}\n`;
                md += `\n`;
            });
        } else {
            md += `No se detectaron aspectos principales con orbes significativos para Sol, Luna o Ascendente.\n\n`;
        }

        md += `### ✨ Otros Aspectos Importantes\n`;
        if (otherMajorAspects.length > 0) {
            otherMajorAspects.sort((a: any, b: any) => Math.abs(a.orb) - Math.abs(b.orb));
            otherMajorAspects.slice(0, 6).forEach((aspect: any) => {
                const pairKey = `${aspect.point1}-${aspect.point2}`;
                const pairKey2 = `${aspect.point2}-${aspect.point1}`;
                const pairInterp = PLANET_PAIR_INTERPRETATIONS[pairKey]?.[aspect.aspect] || PLANET_PAIR_INTERPRETATIONS[pairKey2]?.[aspect.aspect] || '';
                
                md += `**${aspect.point1} ${aspect.aspect} ${aspect.point2}** (orbe: ${Math.abs(aspect.orb).toFixed(1)}°)\n`;
                if (pairInterp) {
                    md += `${pairInterp.substring(0, 200)}${pairInterp.length > 200 ? '...' : ''}\n\n`;
                } else {
                    md += `\n`;
                }
            });
        }

        // Resumen de tipos de aspectos
        md += `### 📊 Balance de Aspectos\n`;
        if (harmonyCount > tensionCount) {
            md += `Tu carta tiene predominancia de aspectos armónicos (${harmonyCount} vs ${tensionCount} de tensión). Esto indica talentos naturales y facilidad para fluir con la vida.\n\n`;
        } else if (tensionCount > harmonyCount) {
            md += `Tu carta tiene predominancia de aspectos de tensión (${tensionCount} vs ${harmonyCount} armónicos). Esto indica que debés trabajar activamente para integrar las energías, lo que desarrolla fuerza de carácter.\n\n`;
        } else {
            md += `Tu carta tiene un balance entre aspectos armónicos y de tensión (${harmonyCount} cada uno). Esto sugiere un camino equilibrado de crecimiento.\n\n`;
        }
    } else {
        md += `No se detectaron aspectos en esta carta.\n\n`;
    }

    md += `---\n\n`;

    // ============================================
    // ANÁLISIS DE STELLIUM
    // ============================================
    const personalPlanets = ['Sol', 'Luna', 'Mercurio', 'Venus', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno', 'Plutón'];
    const signCounts: Record<string, number> = {};
    const houseCounts: Record<string, number> = {};
    
    personalPlanets.forEach(pName => {
        const planet = planets.find((p: any) => p.name === pName);
        if (planet) {
            if (planet.sign) signCounts[planet.sign] = (signCounts[planet.sign] || 0) + 1;
            if (planet.house) houseCounts[planet.house] = (houseCounts[planet.house] || 0) + 1;
        }
    });

    const stelliums = Object.entries(signCounts).filter(([_, count]) => count >= 3);
    const houseStelliums = Object.entries(houseCounts).filter(([_, count]) => count >= 3);

    if (stelliums.length > 0 || houseStelliums.length > 0) {
        md += `## ⭐ Patrones Estructurales (Stellium)\n\n`;
        
        stelliums.forEach(([sign, count]) => {
            const planetsInSign = personalPlanets.filter(pName => {
                const p = planets.find((pl: any) => pl.name === pName);
                return p && p.sign === sign;
            });
            md += `### Stellium en ${sign} (${count} planetas)\n`;
            md += `Planetas: ${planetsInSign.join(', ')}\n\n`;
        });

        houseStelliums.forEach(([house, count]) => {
            const planetsInHouse = personalPlanets.filter(pName => {
                const p = planets.find((pl: any) => pl.name === pName);
                return p && p.house === house;
            });
            if (house !== stelliums[0]?.[0]) {
                md += `### Stellium en Casa ${house} (${count} planetas)\n`;
                md += `Planetas: ${planetsInHouse.join(', ')}\n\n`;
                
                // Agregar interpretación del stellium en casa
                const houseThemes: Record<string, string> = {
                    'Primera': 'Esta concentración en la Primera Casa indica que tu identidad y expresión personal son el foco principal de tu vida. Tu manera de presentarte al mundo define gran parte de tu experiencia.',
                    'Segunda': 'Con varios planetas en la Segunda Casa, tus valores materiales y tu relación con el dinero son centrales. Hay una fuerte necesidad de seguridad económica.',
                    'Tercera': 'Tu comunicación y entorno inmediato son muy importantes. Tenés mucho para decir y aprendés rápido.',
                    'Cuarta': 'El hogar y la familia son tu prioridad. Tus raíces y tu pasado influyen enormemente en tu presente.',
                    'Quinta': 'La creatividad, el romance y los hijos son temas dominante. Tu necesidad de expresarte y ser reconocido es fuerte.',
                    'Sexta': 'El trabajo y la salud son fokus. Hay una necesidad de estructura y servicio.',
                    'Séptima': 'Las relaciones son el área central de tu vida. Tu desarrollo personal ocurre a través de los demás.',
                    'Octava': 'La transformación, la intimidad y los recursos compartidos son temas profundos. Buscás profundidad.',
                    'Novena': 'La filosofía, los viajes y los estudios superiores son importantes. Tenés una mente expandida.',
                    'Décima': 'La carrera y el estatus público son muy relevantes. Buscás reconocimiento y logro.',
                    'Undécima': 'Los grupos y las causas sociales son significativos. Buscás pertenecer a algo más grande.',
                    'Duodécima': 'La espiritualidad y el aislamiento son temas importantes. Hay una vida interior rica.'
                };
                if (houseThemes[house]) {
                    md += `${houseThemes[house]}\n\n`;
                }
            }
        });
    }

    // Conjunción Sol-Marte exacta
    const sunMarsExact = aspects.find((a: any) => 
        ((a.point1 === 'Sol' && a.point2 === 'Marte') || (a.point1 === 'Marte' && a.point2 === 'Sol')) && Math.abs(a.orb) < 1.5
    );
    if (sunMarsExact) {
        md += `### ⚡ Conjunción Sol-Marte\n`;
        md += `Tenés una conjunción Sol-Marte muy exacta (orbe: ${Math.abs(sunMarsExact.orb).toFixed(1)}°). Este es uno de los aspectos más poderosos de tu carta.\n\n`;
        md += `Fusión directa entre tu identidad y tu capacidad de acción. Energia extraordinaria para emprender.\n\n`;
    }

    // Júpiter conjunto Ascendente
    const jupiterAsc = aspects.find((a: any) => 
        ((a.point1 === 'Júpiter' && (a.point2 === 'Ascendente' || a.point2 === 'ASC')) || 
         ((a.point1 === 'Ascendente' || a.point1 === 'ASC') && a.point2 === 'Júpiter')) && Math.abs(a.orb) < 8
    );
    if (jupiterAsc) {
        md += `### 🌟 Júpiter en el Ascendente\n`;
        md += `Júpiter formando aspecto con tu Ascendente (${jupiterAsc.aspect}, orbe: ${Math.abs(jupiterAsc.orb).toFixed(1)}°) indica que tu proyección personal está marquée por expansión, optimismo y necesidad de crecimiento.\n\n`;
    }

    md += `---\n\n`;

    // ============================================
    // INTEGRACIÓN CRUZADA
    // ============================================
    md += `## 🔗 Integración Cruzada\n\n`;
    md += `Análisis de patrones significativos en tu carta:\n\n`;

    const integrations: string[] = [];

    // Solo mencionar aspectos que REALMENTE existen en la lista de aspectos
    const aspectPairs = [
        { p1: 'Sol', p2: 'Saturno', name: 'Sol-Saturno' },
        { p1: 'Luna', p2: 'Neptuno', name: 'Luna-Neptuno' },
        { p1: 'Venus', p2: 'Marte', name: 'Venus-Marte' },
        { p1: 'Mercurio', p2: 'Venus', name: 'Mercurio-Venus' },
        { p1: 'Sol', p2: 'Luna', name: 'Sol-Luna' }
    ];

    aspectPairs.forEach(pair => {
        const aspect = aspects.find((a: any) => 
            (a.point1 === pair.p1 && a.point2 === pair.p2) || 
            (a.point1 === pair.p2 && a.point2 === pair.p1)
        );
        if (aspect) {
            integrations.push(`**${pair.name}:** ${aspect.aspect} (orbe: ${Math.abs(aspect.orb).toFixed(1)}°)`);
        }
    });

    if (integrations.length > 0) {
        integrations.forEach(int => md += `- ${int}\n`);
    } else {
        md += `No se detectaron patrones de integración cruzada destacados.\n`;
    }
    md += `\n`;

    // ============================================
    // SECCIÓN 9: EJES KÁRMICOS
    // ============================================
    md += `## 🔮 Ejes Kármicos y Puntos Sensibles\n\n`;
    md += `Estos puntos representan lecciones evolutivas y heridas que sanan a través de la experiencia.\n\n`;

    // NODOS
    if (northNode || southNode) {
        md += `### 🎯 Nodos Lunares\n`;
        if (northNode) {
            md += `**Nodo Norte (Destino):** ${northNode.sign} en la ${northNode.house || 'casa desconocida'}\n\n`;
            md += `El Nodo Norte representa lo que viniste a aprender y desarrollar en esta vida. Está relacionado con tu propósito evolutivo.\n\n`;
            md += `${NORTH_NODE_INTERPRETATIONS[northNode.sign] || 'Tu propósito está relacionado con el signo donde se encuentra el Nodo Norte.'}\n\n`;
        }
        if (southNode) {
            md += `**Nodo Sur (Karma):** ${southNode.sign} en la ${southNode.house || 'casa desconocida'}\n\n`;
            md += `El Nodo Sur representa habilidades que ya traés de vidas anteriores, pero que no deben definirte en esta vida.\n\n`;
        }
    }

    // QUIRÓN
    if (chiron) {
        md += `### 💚 Quirón (Sanación)\n`;
        md += `**Quirón:** ${chiron.sign} en la ${chiron.house || 'casa desconocida'}\n\n`;
        md += `Quirón representa tu herida profunda y simultáneamente tu don de sanación. La posición indica dónde experimentás vulnerabilidad y dónde podés ayudar a otros.\n\n`;
        md += `${CHIRON_SIGN_INTERPRETATIONS[chiron.sign] || 'Quirón en este signo indica un proceso de sanación personal que puede beneficiar a otros.'}\n\n`;
    }

    // LILITH
    if (lilith) {
        md += `### 🌑 Lilith (Shadow Self)\n`;
        md += `**Lilith:** ${lilith.sign} en la ${lilith.house || 'casa desconocida'}\n\n`;
        md += `Lilith representa tu naturaleza reprimida y tu poder personal. Indica aspectos de vos que quizás ocultás o que otros perciben como desafiantes.\n\n`;
    }

    if (!northNode && !southNode && !chiron && !lilith) {
        md += `No se detectaron puntos kármicos (Nodos, Quirón, Lilith) en esta carta.\n\n`;
    }

    md += `---\n\n`;

    // ============================================
    // SECCIÓN 10: ÁREAS PRÁCTICAS
    // ============================================
    md += `## 💼 Áreas Prácticas: Vocación, Relaciones y Economía\n\n`;
    md += `Esta sección aplica los análisis astrológicos a áreas concretas de tu vida.\n\n`;

    // VOCACIÓN
    md += `### 🎯 Vocación y Carrera\n`;
    md += `**Indicadores principales:**\n`;
    if (tenthHouse) md += `- Casa 10 (Medio Cielo): ${tenthHouse.sign}\n`;
    if (saturn) md += `- Saturno: ${saturn.sign} en casa ${saturn.house}\n`;
    if (sun) md += `- Sol: ${sun.sign} en casa ${sun.house}\n`;
    md += `\n`;
    md += `El área de carrera está determinada principalmente por la posición del Sol (tu esencia), Saturno (tu disciplina) y la Casa 10 (tu proyección pública).\n\n`;

    // RELACIONES
    md += `### 💕 Relaciones y Pareja\n`;
    md += `**Indicadores principales:**\n`;
    if (seventhHouse) md += `- Casa 7: ${seventhHouse.sign}\n`;
    if (venus) md += `- Venus: ${venus.sign} en casa ${venus.house}\n`;
    if (mars) md += `- Marte: ${mars.sign} en casa ${mars.house}\n`;
    md += `\n`;
    md += `Las relaciones están marcadas por Venus (cómo amás) y Marte (cómo deseás). La Casa 7 muestra cómo te presentás en pareja.\n\n`;

    // ECONOMÍA
    md += `### 💰 Economía y Recursos\n`;
    md += `**Indicadores principales:**\n`;
    md += `- Casa 2 (recursos propios): ${houses[1]?.sign || 'No determinada'}\n`;
    md += `- Casa 8 (recursos compartidos): ${houses[7]?.sign || 'No determinada'}\n`;
    if (jupiter) md += `- Júpiter: ${jupiter.sign} (expansión financiera)\n`;
    md += `\n`;
    md += `La Casa 2 indica cómo ganás y manejás recursos propios. La Casa 8 muestra recursos compartidos y herencias.\n\n`;

    md += `---\n\n`;

    // ============================================
    // SECCIÓN 11: INTEGRACIÓN FINAL
    // ============================================
    md += `## ✨ Integración Final\n\n`;
    md += `Esta síntesis conecta todas las energías de tu carta en un mensaje coherente.\n\n`;

    // Fortalezas
    md += `### 🌟 Tus Fortalezas\n`;
    const strengths: string[] = [];
    if (dominantElement[0] === 'Fuego') strengths.push('Entusiasmo e inspiración');
    if (dominantElement[0] === 'Tierra') strengths.push('Praticidad y perseverancia');
    if (dominantElement[0] === 'Aire') strengths.push('Comunicación y adaptabilidad');
    if (dominantElement[0] === 'Agua') strengths.push('Intuición y profundidad emocional');
    if (dominantModality[0] === 'Cardinal') strengths.push('Capacidad de liderazgo');
    if (dominantModality[0] === 'Fijo') strengths.push('Determinación y lealtad');
    if (dominantModality[0] === 'Mutable') strengths.push('Flexibilidad y versatilidad');
    if (harmonyCount > tensionCount) strengths.push('Facilidad para atraer oportunidades');
    if (tensionCount > harmonyCount) strengths.push('Fuerza de carácter y determinación');
    
    if (strengths.length > 0) {
        strengths.slice(0, 5).forEach(s => md += `- ${s}\n`);
    }
    md += `\n`;

    // Desafíos
    md += `### ⚠️ Tus Desafíos Evolutivos\n`;
    const challenges: string[] = [];
    if (dominantElement[0] === 'Fuego') challenges.push('Evitar la impulsividad');
    if (dominantElement[0] === 'Tierra') challenges.push('Soltar el control');
    if (dominantElement[0] === 'Aire') challenges.push('Profundizar emociones');
    if (dominantElement[0] === 'Agua') challenges.push('Establecer límites');
    if (tensionCount > harmonyCount) challenges.push('Trabajar la frustración');
    if (northNode) challenges.push(`Desarrollar ${northNode.sign}`);
    
    if (challenges.length > 0) {
        challenges.slice(0, 5).forEach(c => md += `- ${c}\n`);
    }
    md += `\n`;

    // Potencial
    md += `### 🚀 Tu Potencial de Desarrollo\n`;
    md += `Tu carta indica un camino de crecimiento orientado hacia `;
    if (dominantElement[0] === 'Fuego') md += `la acción transformadora y el liderazgo inspirador.`;
    else if (dominantElement[0] === 'Tierra') md += `la construcción de algo duradero y concreto.`;
    else if (dominantElement[0] === 'Aire') md += `la conexión intelectual y la comunicación significativa.`;
    else if (dominantElement[0] === 'Agua') md += `la sanación emocional y la transformación profunda.`;
    md += `\n\n`;

    // Mensaje central
    md += `### 💫 Mensaje Central de tu Carta\n`;
    const centralMessage = `Tu carta astral revela una personalidad ${dominantElement[0].toLowerCase()} con ${dominantModality[0].toLowerCase()} como modalidad principal. ${sun ? `Con el Sol en ${sun.sign}, tu esencia se expresa a través de ` + (sun.sign.toLowerCase().includes('aries') || sun.sign.toLowerCase().includes('leo') || sun.sign.toLowerCase().includes('sagitario') ? 'la acción directa y el liderazgo.' : sun.sign.toLowerCase().includes('tauro') || sun.sign.toLowerCase().includes('virgo') || sun.sign.toLowerCase().includes('capricornio') ? 'la estabilidad y el trabajo constante.' : sun.sign.toLowerCase().includes('géminis') || sun.sign.toLowerCase().includes('libra') || sun.sign.toLowerCase().includes('acuario') ? 'la comunicación y las ideas.' : 'la sensibilidad y la intuición.') : ''} ${northNode ? `Tu propósito incluye desarrollar las cualidades de ${northNode.sign}.` : ''}`;
    md += `${centralMessage}\n\n`;

    md += `---\n\n`;
    md += `---\n*Esta interpretación ha sido generada localmente para garantizar una explicación didáctica y directa. Recordá que la astrología es una herramienta de autoconocimiento, no un determinismo. Vos creás tu destino con cada elección.*`;
    
    return md;
}

function getAspectSymbol(aspect: string): string {
    const symbols: Record<string, string> = {
        'Conjunción': '☌',
        'Sextil': '∠',
        'Cuadratura': '□',
        'Trígono': '△',
        'Oposición': '□'
    };
    return symbols[aspect] || '○';
}

const PLANET_HOUSE_DESCRIPTIONS: Record<string, Record<string, { intro: string, identity: string, focus: string, action: string, challenge: string }>> = {
    'Sol': {
        'Primera': {
            intro: 'Tu Sol en la Primera Casa indica que tu esencia brilla intensamente. Tu personalidad es el centro de tu experiencia vital.',
            identity: 'Tu identidad está definida por tu necesidad de destacar y ser reconocido. Iradias confianza y carisma natural.',
            focus: 'Tu enfoque de vida se centra en el autodesarrollo y la afirmación personal. Buscás ser una figura destacada.',
            action: 'Tenés una fuerte capacidad para liderar y tomar la iniciativa. Tu expresión personal es directa y auténtica.',
            challenge: 'Podés caer en el egoísmo o la arrogancia. El desafío es aprender a equilibrar el yo con los demás.'
        },
        'Segunda': {
            intro: 'Tu Sol en la Segunda Casa indica que tu valor personal está ligado a tus posesiones y recursos materiales.',
            identity: 'Tu identidad se basa en lo que acumulás y poseés. Tu sentido de valía está vinculado a lo material.',
            focus: 'Buscás seguridad financiera y estabilidad. Tu enfoque está en construir recursos propios.',
            action: 'Tenés talento para generar ingresos y administrar bienes. Tu expresión se manifiesta a través de lo que valorás.',
            challenge: 'Podés ser materialista o posesivo. El desafío es aprender que tu valor no está en lo que tenés.'
        },
        'Tercera': {
            intro: 'Tu Sol en la Tercera Casa indica que tu esencia se expresa a través de la comunicación y el aprendizaje.',
            identity: 'Tu identidad está definida por tus ideas y cómo te comunicás. Sos un transmisor de información.',
            focus: 'Tu enfoque está en el intercambio de conocimientos. Buscás estimular tu mente constantemente.',
            action: 'Tenés facilidad para expresar tus pensamientos. Tu creatividad se manifiesta en la escritura o el habla.',
            challenge: 'Podés ser superficial o disperso. El desafío es profundizar en lugar de solo difundir.'
        },
        'Cuarta': {
            intro: 'Tu Sol en la Cuarta Casa indica que tu centro está en el hogar y la familia.',
            identity: 'Tu identidad está fuertemente vinculada a tus raíces. Tu sentido de seguridad viene de tu familia.',
            focus: 'Buscás crear un hogar estable. Tu enfoque está en la privacidad y los asuntos familiares.',
            action: 'Tenés una fuerte conexión con tu pasado. Tu expresión se manifiesta cuidando a los tuyos.',
            challenge: 'Podés ser demasiado dependiente del hogar. El desafío es encontrar tu lugar en el mundo.'
        },
        'Quinta': {
            intro: 'Tu Sol en la Quinta Casa indica que tu creatividad y romance son centrales en tu vida.',
            identity: 'Tu identidad brilla a través de la expresión artística. Buscás ser reconocido por tus talentos.',
            focus: 'Tu enfoque está en el placer, los hijos y la creatividad. Buscás disfrutar la vida plenamente.',
            action: 'Tenés un magnetismo natural que atrae a otros. Tu expresión es dramática y encantadora.',
            challenge: 'Podés ser vanidoso o buscar atención excesiva. El desafío es crear sin necesidad de aplausos.'
        },
        'Sexta': {
            intro: 'Tu Sol en la Sexta Casa indica que el trabajo y la salud son fundamentales en tu vida.',
            identity: 'Tu identidad se expresa a través del servicio. Encontrás orgullo en hacer bien tu trabajo.',
            focus: 'Tu enfoque está en la eficiencia y las rutinas. Buscás perfección en lo que hacés.',
            action: 'Tenés capacidad de trabajo sostenido. Tu expresión se manifiesta ayudando a otros.',
            challenge: 'Podés ser demasiado crítico contigo mismo. El desafío es equilibrar trabajo y descanso.'
        },
        'Séptima': {
            intro: 'Tu Sol en la Séptima Casa indica que las relaciones son esenciales para tu identidad.',
            identity: 'Tu identidad se define en relación con otros. Buscás equilibrio y armonía en pareja.',
            focus: 'Tu enfoque está en las asociaciones. Buscás un socio que te complete.',
            action: 'Tenés magnetismo que atrae relaciones. Tu expresión se manifiesta a través de la asociación.',
            challenge: 'Podés perderte en el otro. El desafío es mantener tu identidad dentro de la relación.'
        },
        'Octava': {
            intro: 'Tu Sol en la Octava Casa indica que la transformación y el poder son temas centrales.',
            identity: 'Tu identidad está ligada al control y la intimidad. Buscás profundidad en todo.',
            focus: 'Tu enfoque está en lo oculto y los misterios. Buscás controlar los recursos compartidos.',
            action: 'Tenés una fuerza magnética poderosa. Tu expresión se manifiesta en transformaciones.',
            challenge: 'Podés ser manipulador u obsesionado con el poder. El desafío es usar tu poder para sanar.'
        },
        'Novena': {
            intro: 'Tu Sol en la Novena Casa indica que la expansión y la filosofía son tu esencia.',
            identity: 'Tu identidad está definida por tus creencias. Sos un buscador de verdad y significado.',
            focus: 'Tu enfoque está en viajes y estudios superiores. Buscás expandir tu horizonte mental.',
            action: 'Tenés una visión amplia. Tu expresión se manifiesta enseñando o explorando.',
            challenge: 'Podés ser dogmático o soberbio. El desafío es mantener la mente abierta.'
        },
        'Décima': {
            intro: 'Tu Sol en la Décima Casa indica que tu ambición y reputación son centrales.',
            identity: 'Tu identidad se define por tu carrera y estatus público. Buscás ser reconocido.',
            focus: 'Tu enfoque está en el éxito profesional. Buscás alcanzar posiciones de poder.',
            action: 'Tenés madera de líder. Tu expresión se manifiesta en el ámbito público.',
            challenge: 'Podés sacrificar lo personal por lo profesional. El desafío es equilibrar vida y carrera.'
        },
        'Undécima': {
            intro: 'Tu Sol en la Undécima Casa indica que los grupos y causas sociales son tu esencia.',
            identity: 'Tu identidad está definida por tu pertenencia a grupos. Buscás cambiar el mundo.',
            focus: 'Tu enfoque está en la humanidad. Buscás crear un mejor futuro para todos.',
            action: 'Tenés una visión progresista. Tu expresión se manifiesta en trabajos colectivos.',
            challenge: 'Podés perderte en la masa o ser demasiado poco convencional. El desafío es individualizarte.'
        },
        'Duodécima': {
            intro: 'Tu Sol en la Duodécima Casa indica que lo espiritual y lo oculto son tu centro.',
            identity: 'Tu identidad está ligada al inconsciente. Tenés una conexión profunda con lo espiritual.',
            focus: 'Tu enfoque está en la introspección. Buscás entender los misterios del alma.',
            action: 'Tenés una sensibilidad única. Tu expresión se manifiesta en la soledad creativa.',
            challenge: 'Podés ser demasiado secreto o escapista. El desafío es integrar tu mundo interior.'
        }
    },
    'Luna': {
        'Primera': {
            intro: 'Tu Luna en la Primera Casa indica que tu mundo emocional es muy visible.',
            identity: 'Tu identidad está definida por tus emociones. Otros te perciben como sensible y reactivo.',
            focus: 'Buscás seguridad emocional en tu entorno. Tu estado de ánimo fluctúa fácilmente.',
            action: 'Tenés una fuerte intuición y receptividad. Tus reacciones son inmediatas y visibles.',
            challenge: 'Podés ser demasiado sensible a las críticas. El desafío es desarrollar resiliencia emocional.'
        },
        'Segunda': {
            intro: 'Tu Luna en la Segunda Casa indica que tus emociones están vinculadas a lo material.',
            identity: 'Tu sentido de seguridad viene de tus posesiones. Tu autovalor está ligado a lo que tenés.',
            focus: 'Buscás estabilidad financiera para sentirte seguro. Tus necesidades son prácticas y tangibles.',
            action: 'Tenés talento para administrar recursos. Tus emociones influyen en tus hábitos de gasto.',
            challenge: 'Podés ser materialista o excesivamente apegada a las cosas. El desafío es desapegar de las posesiones.'
        },
        'Tercera': {
            intro: 'Tu Luna en la Tercera Casa indica que tu mundo emocional está en constante actividad mental.',
            identity: 'Tu estado de ánimo afecta tu comunicación. Pensás con tus sentimientos.',
            focus: 'Buscás estimulación intelectual constantemente. Tus emociones están vinculadas al aprendizaje.',
            action: 'Tenés una mente activa e intuitiva. Tu comunicación está cargada emocionalmente.',
            challenge: 'Podés ser nervioso o pensar demasiado. El desafío es calmar tu mente.'
        },
        'Cuarta': {
            intro: 'Tu Luna en la Cuarta Casa indica que tu emocionalidad está profundamente ligada a tu hogar.',
            identity: 'Tu seguridad emocional depende de tu familia. Tus raíces definen tu bienestar.',
            focus: 'Buscás un hogar estable y protegido. Tu enfoque está en la armonía doméstica.',
            action: 'Tenés una fuerte conexión con tu pasado. Tus emociones están vinculadas a recuerdos de la infancia.',
            challenge: 'Podés ser demasiado dependiente de tu familia. El desafío es crear tu propio hogar.'
        },
        'Quinta': {
            intro: 'Tu Luna en la Quinta Casa indica que tu creatividad y romanticismo están resaltados.',
            identity: 'Tu expresión emocional viene a través del arte. Brillas a través de la creatividad.',
            focus: 'Buscás romance y aventura. Tu enfoque está en el disfrute y la autoexpresión.',
            action: 'Tenés un magnetismo romántico. Tus emociones impulsan tus búsquedas creativas.',
            challenge: 'Podés ser demasiado dramático o demandante en el amor. El desafío es amar sin posesividad.'
        },
        'Sexta': {
            intro: 'Tu Luna en la Sexta Casa indica que tu bienestar emocional depende del trabajo.',
            identity: 'Tu día a día afecta profundamente tu estado de ánimo. Necesitás rutina para prosperar.',
            focus: 'Buscás salud y servicio. Tu enfoque está en ayudar a otros a través del trabajo.',
            action: 'Tenés una ética de trabajo fuerte. Tus emociones se manifiestan en tus hábitos laborales.',
            challenge: 'Podés ser demasiado crítico con tu salud. El desafío es aceptarte como sos.'
        },
        'Séptima': {
            intro: 'Tu Luna en la Séptima Casa indica que necesitás relación para sentirte completo.',
            identity: 'Tu identidad se completa en pareja. Necesitás партнерство para sentirte completo.',
            focus: 'Buscás armonía en tus relaciones. Tu enfoque está en crear equilibrio con otros.',
            action: 'Tenés una fuerte necesidad de complacer. Tus emociones están vinculadas a tu pareja.',
            challenge: 'Podés sacrificar tus necesidades por otros. El desafío es priorizarte también.'
        },
        'Octava': {
            intro: 'Tu Luna en la Octava Casa indica una vida emocional profunda e intensa.',
            identity: 'Tu intimidad es tu fortaleza. Tenés transformaciones emocionales poderosas.',
            focus: 'Buscás profundidad en todo. Tu enfoque está en recursos compartidos e intimidad.',
            action: 'Tenés un atractivo magnético. Tus emociones impulsan transformaciones.',
            challenge: 'Podés ser demasiado intenso o secreto. El desafío es confiar en otros.'
        },
        'Novena': {
            intro: 'Tu Luna en la Novena Casa indica un espíritu libre y explorador.',
            identity: 'Tu alma necesita expansión. Sos un explorador natural.',
            focus: 'Buscás verdad y significado. Tus emociones impulsan tu búsqueda de conocimiento.',
            action: 'Tenés una visión amplia de la vida. Tus emociones están vinculadas a viajes y filosofía.',
            challenge: 'Podés ser inquieto o incapaz de establecerse. El desafío es encontrar un hogar interior.'
        },
        'Décima': {
            intro: 'Tu Luna en la Décima Casa indica que tu imagen pública está vinculada a tu emocionalidad.',
            identity: 'Tu persona pública refleja tu mundo interior. Las personas ven tus emociones.',
            focus: 'Buscás reconocimiento y éxito. Tu enfoque está en tu carrera.',
            action: 'Tenés ambición emocionalmente cargada. Tus emociones impulsan tu éxito.',
            challenge: 'Podés estar demasiado preocupado por tu imagen. El desafío es la autenticidad.'
        },
        'Undécima': {
            intro: 'Tu Luna en la Undécima Casa indica un fuerte vínculo con grupos y causas.',
            identity: 'Tu identidad está en tus amistades. Encontrás pertenencia en comunidades.',
            focus: 'Buscás cambiar el mundo. Tus emociones están vinculadas a causas humanitarias.',
            action: 'Tenés una red social importante. Tus emociones prosperan en entornos grupales.',
            challenge: 'Podés depender demasiado de la aprobación. El desafío es mantener tu individualidad.'
        },
        'Duodécima': {
            intro: 'Tu Luna en la Duodécima Casa indica una vida emocional profundamente intuitiva.',
            identity: 'Tu mundo interior es vasto y misterioso. Sos altamente intuitivo.',
            focus: 'Buscás paz interior. Tu enfoque está en la comprensión espiritual.',
            action: 'Tenés sensibilidad a lo invisible. Tus emociones están vinculadas a los secretos.',
            challenge: 'Podés ser demasiado retraído o escapista. El desafío es enfrentar tu mundo interior.'
        }
    },
    'Mercurio': {
        'Primera': {
            intro: 'Tu Mercurio en la Primera Casa indica una mente activa y expresiva.',
            identity: 'Tu identidad está definida por tu comunicación. Sos un comunicador nato.',
            focus: 'Buscás expresar tus ideas constantemente. Tu mente nunca descansa.',
            action: 'Tenés una presencia verbal dominante. Tus palabras moldean cómo otros te ven.',
            challenge: 'Podés ser demasiado hablador o disperso. El desafío es escuchar más.'
        },
        'Segunda': {
            intro: 'Tu Mercurio en la Segunda Casa indica que tu mente trabaja con valores materiales.',
            identity: 'Tu pensamientos se centran en ganancias. Pensás en el dinero constantemente.',
            focus: 'Buscás adquirir habilidades prácticas. Tu enfoque está en resultados tangibles.',
            action: 'Tenés talento para negocios. Tu estilo de comunicación es persuasivo.',
            challenge: 'Podés ser materialista en tu pensamiento. El desafío es ampliar tus valores.'
        },
        'Tercera': {
            intro: 'Tu Mercurio en la Tercera Casa indica una mente ágil y comunicativa.',
            identity: 'Tu identidad está en la comunicación. Sos el mensajero.',
            focus: 'Buscás aprender y compartir constantemente. Tu mente está siempre activa.',
            action: 'Tenés facilidad para escribir y hablar. Tus ideas fluyen fácilmente.',
            challenge: 'Podés ser superficial o estirarte demasiado fino. El desafío es profundizar.'
        },
        'Cuarta': {
            intro: 'Tu Mercurio en la Cuarta Casa indica pensamiento vinculado a tu hogar.',
            identity: 'Tu mente trabaja en casa. Tus pensamientos están vinculados a tu familia.',
            focus: 'Buscás un ambiente mentalmente seguro. Tu enfoque está en tu privacidad.',
            action: 'Tenés buena memoria de tu pasado. Tu estilo de comunicación es nostálgico.',
            challenge: 'Podés estar demasiado vinculado a los puntos de vista familiares. El desafío es pensar por vos mismo.'
        },
        'Quinta': {
            intro: 'Tu Mercurio en la Quinta Casa indica creatividad mental y romanticismo.',
            identity: 'Tu mente es creativa y dramática. Pensás como un artista.',
            focus: 'Buscás expresar tu creatividad. Tu enfoque está en la autoexpresión.',
            action: 'Tenés talento para comunicar de forma entretenida. Tus palabras entretienen.',
            challenge: 'Podés enfocarte demasiado en entretener. El desafío es sustancia sobre estilo.'
        },
        'Sexta': {
            intro: 'Tu Mercurio en la Sexta Casa indica una mente enfocada en el servicio.',
            identity: 'Tu mente está al servicio de otros. Pensás en el trabajo constantemente.',
            focus: 'Buscás perfección en tu trabajo. Tu enfoque está en salud y rutina.',
            action: 'Tenés habilidades analíticas fuertes. Tu comunicación es detallada y precisa.',
            challenge: 'Podés ser demasiado crítico o preocupado. El desafío es relajarte.'
        },
        'Séptima': {
            intro: 'Tu Mercurio en la Séptima Casa indica comunicación en relaciones.',
            identity: 'Tu mente está activa en parejas. Pensás a través del diálogo.',
            focus: 'Buscás un socio intelectual. Tu enfoque está en el acuerdo.',
            action: 'Tenés talento para negociar. Tus palabras crean asociaciones.',
            challenge: 'Podés ser demasiado indeciso o influenciable. El desafío es tener tu propia opinión.'
        },
        'Octava': {
            intro: 'Tu Mercurio en la Octava Casa indica una mente profunda e investigativa.',
            identity: 'Tu mente busca la verdad oculta. Sos un detective por naturaleza.',
            focus: 'Buscás profundizar en todo. Tu enfoque está en los misterios.',
            action: 'Tenés habilidades para investigación. Tu comunicación es intensa.',
            challenge: 'Podés ser demasiado sospechoso u obsesivo. El desafío es confiar.'
        },
        'Novena': {
            intro: 'Tu Mercurio en la Novena Casa indica una mente filosófica y viajera.',
            identity: 'Tu mente busca la verdad superior. Sos un aprendiz de por vida.',
            focus: 'Buscás expandir tus horizontes. Tu enfoque está en las creencias.',
            action: 'Tenés talento para enseñar. Tu comunicación inspira a otros.',
            challenge: 'Podés ser dogmático. El desafío es mantener la mente abierta.'
        },
        'Décima': {
            intro: 'Tu Mercurio en la Décima Casa indica una mente orientada al éxito.',
            identity: 'Tu mente está enfocada en tu carrera. Pensás en el estatus constantemente.',
            focus: 'Buscás reconocimiento público. Tu enfoque está en el logro.',
            action: 'Tenés presencia verbal profesional. Tus palabras construyen tu reputación.',
            challenge: 'Podés ser demasiado ambicioso o calculador. El desafío es mantener la integridad.'
        },
        'Undécima': {
            intro: 'Tu Mercurio en la Undécima Casa indica una mente orientada a grupos.',
            identity: 'Tu mente trabaja mejor en equipo. Pensás colectivamente.',
            focus: 'Buscás causas sociales. Tu enfoque está en la humanidad.',
            action: 'Tenés ideas innovadoras. Tu comunicación inspira grupos.',
            challenge: 'Podés ser demasiado poco convencional o despegado. El desafío es mantener conexiones personales.'
        },
        'Duodécima': {
            intro: 'Tu Mercurio en la Duodécima Casa indica una mente intuitiva y secreta.',
            identity: 'Tu mente trabaja en lo inconsciente. Pensás en misterios.',
            focus: 'Buscás comprensión interior. Tu enfoque está en el crecimiento espiritual.',
            action: 'Tenés conocimientos profundos. Tu comunicación a menudo es privada.',
            challenge: 'Podés ser demasiado secreto o ansioso. El desafío es expresar tus ideas.'
        }
    },
    'Venus': {
        'Primera': {
            intro: 'Tu Venus en la Primera Casa indica que tu magnetismo y charme son naturales.',
            identity: 'Tu identidad está definida por el amor. Sos amado naturalmente.',
            focus: 'Buscás armonía en tu entorno. Tu enfoque está en la belleza y el placer.',
            action: 'Tenés un atractivo natural. Tu presencia trae alegría a otros.',
            challenge: 'Podés enfocarte demasiado en las apariencias. El desafío es amar más allá de la superficie.'
        },
        'Segunda': {
            intro: 'Tu Venus en la Segunda Casa indica amor por lo material y los lujos.',
            identity: 'Tu sentido de valor viene de las posesiones. Amás el confort y el lujo.',
            focus: 'Buscás seguridad financiera para disfrutar. Tu enfoque está en los recursos.',
            action: 'Tenés talento para generar ingresos. Tu charme te盖 gets you what you want.',
            challenge: 'Podés ser materialista o posesivo. El desafío es valorar a las personas sobre las cosas.'
        },
        'Tercera': {
            intro: 'Tu Venus en la Tercera Casa indica charme en la comunicación.',
            identity: 'Tu forma de hablar atrae a otros. Encantas a través de las palabras.',
            focus: 'Buscás relaciones armoniosas en tu entorno. Tu enfoque está en la comunicación.',
            action: 'Tenés talento para escribir románticamente. Tus palabras son agradables.',
            challenge: 'Podés ser demasiado coqueto o superficial. El desafío es profundizar tus conexiones.'
        },
        'Cuarta': {
            intro: 'Tu Venus en la Cuarta Casa indica amor por el hogar y la familia.',
            identity: 'Tu paz viene de tu hogar. Amás profundamente a tu familia.',
            focus: 'Buscás crear un espacio hermoso. Tu enfoque está en la armonía doméstica.',
            action: 'Tenés talento para la decoración. Tu presencia hace que el hogar se sienta amoroso.',
            challenge: 'Podés estar demasiado adjunto al hogar. El desafío es salir de tu zona de confort.'
        },
        'Quinta': {
            intro: 'Tu Venus en la Quinta Casa indica una naturaleza romántica y creativa.',
            identity: 'Tu amor se expresa a través del arte. Brillas a través de la creatividad.',
            focus: 'Buscás romance y aventura. Tu enfoque está en el placer y los hijos.',
            action: 'Tenés un magnetismo dramático. Tus asuntos de amor son apasionados.',
            challenge: 'Podés ser demasiado dramático en el amor. El desafío es compromiso sobre emoción.'
        },
        'Sexta': {
            intro: 'Tu Venus en la Sexta Casa indica amor por el trabajo y la salud.',
            identity: 'Tu amor se muestra a través del servicio. Cuidás a través de las acciones.',
            focus: 'Buscás armonía en el trabajo. Tu enfoque está en salud y rutina.',
            action: 'Tenés habilidades para el servicio. Tu charme ayuda en las relaciones laborales.',
            challenge: 'Podés ser demasiado sacrificado. El desafío es recibir amor también.'
        },
        'Séptima': {
            intro: 'Tu Venus en la Séptima Casa indica que el amor y la relación son centrales.',
            identity: 'Tu identidad necesita de un partner. Estás en tu mejor momento en asociación.',
            focus: 'Buscás armonía en pareja. Tu enfoque está en el matrimonio y negocios.',
            action: 'Tenés un fuerte atractivo relacional. Tus relaciones son equilibradas y justas.',
            challenge: 'Podés depender demasiado del partner. El desafío es amarte a vos mismo también.'
        },
        'Octava': {
            intro: 'Tu Venus en la Octava Casa indica pasión intensa y magnetismo.',
            identity: 'Tu amor es profundo y transformador. Amás con intensidad.',
            focus: 'Buscás intimidad y recursos compartidos. Tu enfoque está en la transformación.',
            action: 'Tenés un atractivo misterioso. Tu magnetismo es poderoso e intenso.',
            challenge: 'Podés ser celoso o controlador. El desafío es la confianza.'
        },
        'Novena': {
            intro: 'Tu Venus en la Novena Casa indica amor por la aventura y la filosofía.',
            identity: 'Tu amor está en la expansión. Amás los viajes y nuevas experiencias.',
            focus: 'Buscás amor que expanda tu mente. Tu enfoque está en la filosofía.',
            action: 'Tenés un espíritu libre en el amor. Tu charme atrae aventuras.',
            challenge: 'Podés tener miedo al compromiso. El desafío es establecerse a veces.'
        },
        'Décima': {
            intro: 'Tu Venus en la Décima Casa indica amor por el éxito público.',
            identity: 'Tu imagen pública está llena de charme. Sos amado públicamente.',
            focus: 'Buscás reconocimiento y estatus. Tu enfoque está en la carrera.',
            action: 'Tenés presencia profesional encantadora. Tu charme avanza tu carrera.',
            challenge: 'Podés estar demasiado enfocado en la imagen. El desafío es la autenticidad.'
        },
        'Undécima': {
            intro: 'Tu Venus en la Undécima Casa indica amor por grupos y causas.',
            identity: 'Tu amor se expresa en comunidad. Encontrás amor a través de las amistades.',
            focus: 'Buscás armonía en grupos. Tu enfoque está en causas sociales.',
            action: 'Tenés talento para networking. Tu charme une a las personas.',
            challenge: 'Podés ser muy popular o disperso. El desafío son las amistades profundas.'
        },
        'Duodécima': {
            intro: 'Tu Venus en la Duodécima Casa indica amor secreto y espiritual.',
            identity: 'Tu amor es profundo ya veces secreto. Amás secretamente y profundamente.',
            focus: 'Buscás conexión espiritual. Tu enfoque está en la paz interior.',
            action: 'Tenés una sensibilidad única. Tu magnetismo es sutil y misterioso.',
            challenge: 'Podés ser demasiado secreto o escapista. El desafío es abrirte al amor.'
        }
    },
    'Marte': {
        'Primera': {
            intro: 'Tu Marte en la Primera Casa indica una energía fuerte y dominante.',
            identity: 'Tu identidad está definida por tu fuerza. Sos un líder natural.',
            focus: 'Buscás afirmar tu independencia. Tu enfoque está en la autoafirmación.',
            action: 'Tenés una presencia física poderosa. Actúas con confianza y valentía.',
            challenge: 'Podés ser agresivo o impaciente. El desafío es canalizar tu energía constructivamente.'
        },
        'Segunda': {
            intro: 'Tu Marte en la Segunda Casa indica una relación intensa con lo material.',
            identity: 'Tu identidad está vinculada a tus posesiones. Luchás por lo que querés.',
            focus: 'Buscás seguridad financiera. Tu enfoque está en adquirir recursos.',
            action: 'Tenés talento para ganar dinero. Tu energía lleva al éxito material.',
            challenge: 'Podés ser materialista o agresivo con el dinero. El desafío es compartir.'
        },
        'Tercera': {
            intro: 'Tu Marte en la Tercera Casa indica una mente combativa y activa.',
            identity: 'Tu mente es agresiva e inquisitiva. Argumentás para aprender.',
            focus: 'Buscás estimular tu mente constantemente. Tu enfoque está en la comunicación.',
            action: 'Tenés una energía verbal dominante. Tus palabras son directas ya veces duras.',
            challenge: 'Podés ser demasiado argumentativo. El desafío es elegir tus batallas.'
        },
        'Cuarta': {
            intro: 'Tu Marte en la Cuarta Casa indica energía vinculada a tu hogar.',
            identity: 'Tus luchas ocurren en tu casa. Sos agresivo con la familia.',
            focus: 'Buscás proteger tu hogar. Tu enfoque está en la seguridad doméstica.',
            action: 'Tenés mucha energía en el hogar. Tu energía afecta fuertemente a tu familia.',
            challenge: 'Podés ser demasiado agresivo con la familia. El desafío es crear paz en casa.'
        },
        'Quinta': {
            intro: 'Tu Marte en la Quinta Casa indica una energía creativa y romántica.',
            identity: 'Tu amor es apasionado y dramático. Perseguís el romance con intensidad.',
            focus: 'Buscás reconocimiento y aventura. Tu enfoque está en la autoexpresión.',
            action: 'Tenés un magnetismo deportivo. Tu energía atrae a otros fácilmente.',
            challenge: 'Podés ser demasiado competitivo o celoso. El desafío es disfrutar sin competencia.'
        },
        'Sexta': {
            intro: 'Tu Marte en la Sexta Casa indica una ética de trabajo fuerte.',
            identity: 'Tu identidad está en el trabajo. Te definís a través del trabajo.',
            focus: 'Buscás perfección en el servicio. Tu enfoque está en salud y eficiencia.',
            action: 'Tenés mucha energía laboral. Sos un trabajador duro con altos estándares.',
            challenge: 'Podés ser demasiado crítico o impaciente con colegas. El desafío es la paciencia.'
        },
        'Séptima': {
            intro: 'Tu Marte en la Séptima Casa indica una energía competitiva en relaciones.',
            identity: 'Tu identidad se manifiesta en asociación. Necesitás un oponente igual.',
            focus: 'Buscás un socio activo. Tu enfoque está en relaciones equilibradas.',
            action: 'Tenés una presencia magnética. Tu energía atrae y desafía a las parejas.',
            challenge: 'Podés ser demasiado agresivo en relaciones. El desafío es cooperar, no competir.'
        },
        'Octava': {
            intro: 'Tu Marte en la Octava Casa indica una energía transformadora poderosa.',
            identity: 'Tu poder es intenso y oculto. Tenés una energía transformadora fuerte.',
            focus: 'Buscás control y profundidad. Tu enfoque está en recursos compartidos e intimidad.',
            action: 'Tenés un magnetismo poderoso. Tu energía lleva a transformaciones profundas.',
            challenge: 'Podés ser manipulador u obsesionado con el poder. El desafío es usar tu poder para bien.'
        },
        'Novena': {
            intro: 'Tu Marte en la Novena Casa indica una energía expansionista y aventurera.',
            identity: 'Tu espíritu necesita aventura. Sos un explorador natural.',
            focus: 'Buscás expandir tus horizontes. Tu enfoque está en filosofía y viajes.',
            action: 'Tenés una visión amplia. Tu energía te lleva a lugares lejanos.',
            challenge: 'Podés ser inquieto o impaciente con la tradición. El desafío es respetar el pasado.'
        },
        'Décima': {
            intro: 'Tu Marte en la Décima Casa indica una ambición poderosa.',
            identity: 'Tu identidad está atada al éxito. Estás impulsado a lograr.',
            focus: 'Buscás reconocimiento público. Tu enfoque está en carrera y estatus.',
            action: 'Tenés mucha energía profesional. Tu energía lleva al éxito profesional.',
            challenge: 'Podés ser demasiado ambicioso o pisar a otros. El desafío es ambición ética.'
        },
        'Undécima': {
            intro: 'Tu Marte en la Undécima Casa indica energía orientada a grupos.',
            identity: 'Tu identidad se expresa en causas. Luchás por objetivos colectivos.',
            focus: 'Buscás cambiar el mundo. Tu enfoque está en amistades y humanitarismo.',
            action: 'Tenés una energía innovadora. Tu energía inspira cambio social.',
            challenge: 'Podés ser demasiado radical o impaciente. El desafío es trabajar dentro de sistemas.'
        },
        'Duodécima': {
            intro: 'Tu Marte en la Duodécima Casa indica una energía oculta y poderosa.',
            identity: 'Tu fuerza está en tu mundo interior. Tenés poder oculto.',
            focus: 'Buscás paz interior. Tu enfoque está en el crecimiento espiritual.',
            action: 'Tenés una energía sutil pero profunda. Tu energía lleva a transformación interior.',
            challenge: 'Podés ser demasiado agresivo contigo mismo. El desafío es la autocompasión.'
        }
    },
    'Ascendente': {
        'Primera': {
            intro: 'Tu Ascendente en Aries indica una personalidad dinámica y pionera.',
            identity: 'Proyectás una imagen de líder natural. Otros te ven como audaz y energético.',
            focus: 'Tu enfoque está en nuevos beginnings. Buscás ser el primero en todo.',
            action: 'Tu presencia irradia confianza. Actúas con iniciativa y valentía.',
            challenge: 'Podés parecer agresivo o impaciente. El desafío es cultivar la paciencia.'
        },
        'Segunda': {
            intro: 'Tu Ascendente en Tauro indica una presencia estable y confiable.',
            identity: 'Otros te perciben como sólido y confiable. Tu imagen es de permanencia.',
            focus: 'Buscás seguridad y confort. Tu enfoque está en construir valor duradero.',
            action: 'Tu acción es constante y persistente. Trabajás de manera constante hacia tus metas.',
            challenge: 'Podés ser terco o materialista. El desafío es adaptarte al cambio.'
        },
        'Tercera': {
            intro: 'Tu Ascendente en Géminis indica una imagen versátil y comunicativa.',
            identity: 'Otros te ven como inteligente y curioso. Tu presencia es llena de vida.',
            focus: 'Buscás información constantemente. Tu mente siempre está activa.',
            action: 'Tu comunicación es ágil y adaptable. Te expresás con versatilidad.',
            challenge: 'Podés parecer inconsistente o superficial. El desafío es profundizar.'
        },
        'Cuarta': {
            intro: 'Tu Ascendente en Cáncer indica una imagen protectora y emocional.',
            identity: 'Otros te perciben como nurturante y sensible. Tu vulnerabilidad es visible.',
            focus: 'Buscás seguridad emocional. Tu enfoque está en tu hogar y familia.',
            action: 'Tu acción es receptiva y cuidadora. Respondés emocionalmente a las situaciones.',
            challenge: 'Podés ser muy dependiente o variable emocionalmente. El desafío es desarrollar fortaleza.'
        },
        'Quinta': {
            intro: 'Tu Ascendente en Leo indica una imagen dramática y carismática.',
            identity: 'Otros te ven como regio y lleno de vos mismo. Tu presencia brilla.',
            focus: 'Buscás reconocimiento y admiración. Tu enfoque está en la autoexpresión.',
            action: 'Tu acción es magnética y encantadora. Llamás la atención naturalmente.',
            challenge: 'Podés parecer vanidoso o necesitado de atención. El desafío es el aprecio genuino.'
        },
        'Sexta': {
            intro: 'Tu Ascendente en Virgo indica una imagen práctica y detallista.',
            identity: 'Otros te perciben como eficiente y servicial. Tu presencia está orientada al servicio.',
            focus: 'Buscás perfección en todo. Tu enfoque está en salud y trabajo.',
            action: 'Tu acción es metódica y analítica. Mejorás sistemas donde vayas.',
            challenge: 'Podés ser demasiado crítico o ansioso. El desafío es aceptar la imperfección.'
        },
        'Séptima': {
            intro: 'Tu Ascendente en Libra indica una imagen armoniosa y relacionable.',
            identity: 'Otros te ven como justo y encantador. Tu presencia trae equilibrio.',
            focus: 'Buscás relaciones igualitarias. Tu enfoque está en la asociación.',
            action: 'Tu acción es diplomática y persuasiva. Creás armonía a través del diálogo.',
            challenge: 'Podés ser indeciso o buscavidas. El desafío es afirmarte a vos mismo.'
        },
        'Octava': {
            intro: 'Tu Ascendente en Escorpio indica una imagen intensa y magnética.',
            identity: 'Otros te perciben como poderoso y misterioso. Tu presencia es magnética.',
            focus: 'Buscás transformación profunda. Tu enfoque está en intimidad y poder.',
            action: 'Tu acción es decisiva y profunda. Perseguís la verdad implacablemente.',
            challenge: 'Podés ser controlador o sospechoso. El desafío es confiar en otros.'
        },
        'Novena': {
            intro: 'Tu Ascendente en Sagitario indica una imagen aventurera y filosófica.',
            identity: 'Otros te ven como optimista y libre. Tu presencia es expansiva.',
            focus: 'Buscás verdad y significado. Tu enfoque está en exploración y viajes.',
            action: 'Tu acción es visionaria e inspiradora. Animás a otros a expandirse.',
            challenge: 'Podés ser dogmático o inquieto. El desafío es el compromiso.'
        },
        'Décima': {
            intro: 'Tu Ascendente en Capricornio indica una imagen ambiciosa y disciplinada.',
            identity: 'Otros te perciben como responsable y enfocado. Tu presencia comanda respeto.',
            focus: 'Buscás éxito y reconocimiento. Tu enfoque está en tu carrera.',
            action: 'Tu acción es sistemática y persistente. Trabajás hacia tus metas de manera constante.',
            challenge: 'Podés parecer frío o demasiado ambicioso. El desafío es mostrar vulnerabilidad.'
        },
        'Undécima': {
            intro: 'Tu Ascendente en Acuario indica una imagen única e inovadora.',
            identity: 'Otros te ven como diferente y visionario. Tu presencia es poco convencional.',
            focus: 'Buscás libertad y progreso. Tu enfoque está en grupos y humanitarismo.',
            action: 'Tu acción es original y revolucionaria. Inspirás cambio fácilmente.',
            challenge: 'Podés ser despegado o revolucionario sin causa. El desafío es conectar emocionalmente.'
        },
        'Duodécima': {
            intro: 'Tu Ascendente en Piscis indica una imagen sensible y espiritual.',
            identity: 'Otros te perciben como intuitivo y compasivo. Tu presencia es gentil.',
            focus: 'Buscás trascendencia. Tu enfoque está en lo espiritual.',
            action: 'Tu acción es receptiva y sacrificada. Absorbés las energías de otros fácilmente.',
            challenge: 'Podés ser escapista o demasiado permeable. El desafío es establecer límites.'
        }
    }
};

function getDetailedPlanetHouseDescription(planetName: string, house: string, sign: string, degree: number): { intro: string, identity: string, focus: string, action: string, challenge: string } | null {
    const houseData = PLANET_HOUSE_DESCRIPTIONS[planetName];
    if (!houseData) return null;

    const signHouseData = houseData[house];
    if (!signHouseData) return null;

    return signHouseData;
}

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
    const northNode = planets.find((p: any) => p.name === 'Nodo Norte');
    const southNode = planets.find((p: any) => p.name === 'Nodo Sur');
    const chiron = planets.find((p: any) => p.name === 'Quirón');

    // Título simple
    let md = `# 🌌 Carta Natal\n\n## de ${userInfo?.name || 'viajero estelar'}\n\n`;
    md += `${metadata.birthDate || ''} – ${metadata.birthTime || ''} – ${metadata.birthLocation || ''}\n`;
    md += `Sistema ${metadata.houseSystem || 'Placidus'} – Zodíaco ${metadata.zodiacType || 'Tropical'}\n\n`;
    md += `---\n\n`;
    
    // ===============================
    // TRÍADA DESCRIPTIVA
    // ===============================
    if (sun && moon && asc) {
        const elementSun = SIGN_ELEMENTS[sun.sign] || ''
        const elementMoon = SIGN_ELEMENTS[moon.sign] || ''
        const elementAsc = SIGN_ELEMENTS[asc.sign] || ''
        
        // Crear descripción de la tríada
        const elementDescriptions: Record<string, string> = {
            'Fuego': 'dinámica y apasionada',
            'Tierra': 'práctica y estable',
            'Aire': 'visionaria e independiente',
            'Agua': 'emocional e intuitiva'
        }
        
        const triadDesc = [elementSun, elementMoon, elementAsc]
            .filter((v, i, a) => a.indexOf(v) === i)
            .map(el => elementDescriptions[el] || el.toLowerCase())
            .join(' – ')
        
        md += `Tu arquitectura natal está dominada por tres pilares:\n\n`;
        md += `☀ **Sol en ${sun.sign}**\n`;
        md += `🌙 **Luna en ${moon.sign}**\n`;
        md += `⬆ **Ascendente en ${asc.sign}**\n\n`;
        
        md += `Esta tríada ${elementSun}–${elementMoon}–${elementAsc} genera una personalidad ${triadDesc}.\n\n`;
        
        // Descripción según la combinación
        const combinations: Record<string, string> = {
            'Fuego-Fuego-Aire': 'Sos alguien que no vino a repetir moldes. Viniste a abrir caminos.',
            'Fuego-Fuego-Tierra': 'Tenés fuego para actuar y tierra para sostener. Una combinación de líder constructor.',
            'Fuego-Aire-Fuego': 'Tu mente es tan rápida como tu corazón. Innovation y pasión van de la mano.',
            'Aire-Fuego-Fuego': 'Visón, pasión y acción. Tres fuegos que queman pero también iluminan.',
            'Aire-Aire-Fuego': 'Mentalmente libre y emocionalmente ardiente. Buscás la verdad con fuego.',
            'Aire-Fuego-Aire': 'Sos un visionario que actúa. Piensas diferente y te animás a actuar.',
            'Agua-Fuego-Fuego': 'Emociones profundas con energía ardiente. Sentís intensamente y actuás con pasión.',
            'Fuego-Agua-Fuego': 'Pasión emocional que se transforma. Intensidad y profundidad.',
            'Tierra-Fuego-Fuego': ' pies en la tierra pero corazón de fuego. Acción concreta con emoción.',
            'Fuego-Tierra-Fuego': 'Construís con pasión.Querés ver resultados tangibles de tu esfuerzo.'
        }
        
        const key = [elementSun, elementMoon, elementAsc].sort().join('-')
        const defaultDesc = 'Sos una combinación única de energías que define tu manera de estar en el mundo.'
        
        md += `${combinations[key] || defaultDesc}\n\n`;
        md += `---\n\n`;
    }

    // ===============================
    // PANORAMA GENERAL
    // ===============================
    md += `## 🧭 Panorama General de tu Carta\n\n`;
    md += `Tu carta combina:\n\n`;
    
    if (sun) {
        md += `☀ **Sol en ${sun.sign}**\n`;
    }
    if (moon) {
        md += `🌙 **Luna en ${moon.sign}**\n`;
    }
    if (asc) {
        md += `⬆ **Ascendente en ${asc.sign}**\n`;
    }
    
    md += `\nEsto genera una personalidad que mezcla:\n\n`;
    
    // Generar combinaciones simples basadas en elementos
    const sunElement = SIGN_ELEMENTS[sun?.sign || ''] || '';
    const moonElement = SIGN_ELEMENTS[moon?.sign || ''] || '';
    const ascElement = SIGN_ELEMENTS[asc?.sign || ''] || '';
    
    if (sun?.sign === 'Libra' || sun?.sign === 'Acuario' || sun?.sign === 'Géminis') {
        md += `✔ Búsqueda de armonía y equilibrio\n`;
    }
    if (moon?.sign === 'Cáncer' || moon?.sign === 'Escorpio' || moon?.sign === 'Piscis') {
        md += `✔ Gran sensibilidad emocional\n`;
    }
    if (asc?.sign === 'Capricornio' || asc?.sign === 'Tauro' || asc?.sign === 'Virgo') {
        md += `✔ Imagen exterior seria y responsable\n`;
    }
    if (sun?.sign === 'Aries' || sun?.sign === 'Leo' || sun?.sign === 'Sagitario') {
        md += `✔ Energía pioneera y directa\n`;
    }
    if (moon?.sign === 'Leo' || moon?.sign === 'Aries' || moon?.sign === 'Sagitario') {
        md += `✔ Emociones intensas y expresivas\n`;
    }
    if (asc?.sign === 'Acuario' || asc?.sign === 'Géminis' || asc?.sign === 'Libra') {
        md += `✔ Distancia emocional inicial\n`;
    }
    
    md += `\n**En palabras simples:**\n`;
    
    const sunSign = sun?.sign || '';
    const moonSign = moon?.sign || '';
    const ascSign = asc?.sign || '';
    
    // Generación de descripción simple basada en signos
    if ((moonSign === 'Cáncer' || moonSign === 'Escorpio' || moonSign === 'Piscis') && 
        (ascSign === 'Capricornio' || ascSign === 'Tauro' || ascSign === 'Virgo')) {
        md += `Sos una persona sensible y emocional por dentro, pero hacia afuera proyectás firmeza y autocontrol.\n`;
    } else if ((sunSign === 'Libra' || sunSign === 'Géminis' || sunSign === 'Acuario') && 
               (moonSign === 'Cáncer' || moonSign === 'Escorpio' || moonSign === 'Piscis')) {
        md += `Tu mente busca equilibrio mientras tu corazón siente profundamente.\n`;
    } else if ((sunSign === 'Aries' || sunSign === 'Leo' || sunSign === 'Sagitario') && 
               (moonSign === 'Aries' || moonSign === 'Leo' || moonSign === 'Sagitario')) {
        md += `Sos una persona llena de energía y pasión, que actúa con intensidad.\n`;
    } else if ((sunSign === 'Tauro' || sunSign === 'Virgo' || sunSign === 'Capricornio') && 
               (moonSign === 'Tauro' || moonSign === 'Virgo' || moonSign === 'Capricornio')) {
        md += `Sos alguien práctico y estable, con los pies bien puestos en la tierra.\n`;
    } else {
        md += `Tu carta tiene una combinación única de energías que te hacen ser quien sos.\n`;
    }
    
    md += `\n---\n\n`;

    // ===============================
    // SOL - IDENTIDAD (INTEGRATIVA)
    // ===============================
    if (sun) {
        md += `## ☀ Tu Identidad y Propósito – Sol en ${sun.sign}\n\n`;
        md += `El Sol representa quién sos en esencia, tu núcleo más profundo.\n\n`;
        
        const sunDesc = getSimplePlanetDescription('Sol', sun.sign);
        
        // Integración Sol + Ascendente
        if (asc) {
            const ascDesc = getSimplePlanetDescription('Ascendente', asc.sign);
            
            // Mensaje integrativo según la combinación
            const integrationMessages: Record<string, Record<string, string>> = {
                'Capricornio': {
                    'Virgo': 'Tu Sol en Capricornio, combinado con Ascendente en Virgo, indica que no solo querés lograr cosas: necesitás que tengan estructura, método y utilidad real. Tu identidad se fortalece cuando sentís que estás construyendo algo concreto y sostenible en el tiempo.',
                    'Aries': 'Con Sol en Capricornio y Ascendente en Aries, proyectás una imagen de acción inmediata pero por dentro sentís la necesidad de construir con paciencia. Tu desafío es equilibrar tu impulso de actuar con tu naturaleza estratégica.',
                    'Libra': 'Tu Sol en Capricornio con Ascendente en Libra genera una tensión interesante: necesitás lograr cosas materiales pero también buscás armonía en tus relaciones. Tu identidad se manifiesta cuando trovés socios que compartan tus metas.',
                    'default': `Tu Sol en ${sun.sign}, combinado con Ascendente en ${asc.sign}, crea una personalidad que busca estructuras sólidas pero se presenta de manera ${ascDesc.signDescription.toLowerCase()}.`
                },
                'Acuario': {
                    'Virgo': 'Tu Sol en Acuario, con Ascendente en Virgo, indica que aunque tu esencia busca libertad e innovación, necesitás presentarte de manera ordenada y útil. Tu desafío es permitirte ser más espontáneo sin sentir que perdés control.',
                    'Leo': 'Con Sol en Acuario y Ascendente en Leo, tu originalidad se manifiesta con carisma. Tu esencia crea tendencias pero necesita reconocimiento para sentirse validada.',
                    'default': `Tu Sol en ${sun.sign} te da una esencia innovadora y ${sunDesc.meaning.toLowerCase()}, mientras que tu Ascendente en ${asc.sign} define cómo te presentás al mundo.`
                },
                'Escorpio': {
                    'Sagitario': 'Tu Sol en Escorpio con Ascendente en Sagitario es una combinación poderosa: sentís profundamente pero necesitás proyectar optimismo. Tu desafío es integrar tu intensidad emocional con tu necesidad de libertad.',
                    'Cáncer': 'Con Sol en Escorpio y Ascendente en Cáncer, tu intensidad interior se oculta bajo una fachada de cuidado. Tu esencia es transformación profunda pero buscás seguridad emocional.',
                    'default': `Tu Sol en ${sun.sign} aporta ${sunDesc.meaning.toLowerCase()}, mientras que tu Ascendente en ${asc.sign} define tu presentación exterior.`
                },
                'default': {
                    'default': `Tu Sol en ${sun.sign} indica que tu identidad se construye a través de ${sunDesc.meaning.toLowerCase()}.`
                }
            };
            
            const signKey = sun.sign;
            const ascKey = asc.sign;
            const message = integrationMessages[signKey]?.[ascKey] || integrationMessages[signKey]?.['default'] || integrationMessages['default']?.[ascKey] || integrationMessages['default']?.['default'];
            
            md += `${message}\n\n`;
        } else {
            md += `${sun.sign} es ${sunDesc.signDescription}.\n\n`;
            md += `Tu identidad se construye a través de ${sunDesc.meaning.toLowerCase()}.\n\n`;
        }
        
        md += `**Desafío central:** ${sunDesc.challenge}\n\n`;
        md += `---\n\n`;
    }

    // ===============================
    // LUNA - EMOCIONES (INTEGRATIVA)
    // ===============================
    if (moon) {
        md += `## 🌙 Tu Mundo Emocional – Luna en ${moon.sign}\n\n`;
        md += `La Luna representa cómo procesás tus emociones y qué necesitás para sentirte seguro.\n\n`;
        
        const moonDesc = getSimplePlanetDescription('Luna', moon.sign);
        
        // Integración Luna + Sol + Venus (patrones emocionales)
        let emotionalPattern = '';
        
        // Contar planetas en el signo de Luna
        const planetsInMoonSign = planets.filter((p: any) => p.sign === moon.sign).length;
        
        if (sun && moon.sign === sun.sign) {
            emotionalPattern = `Tu Luna en ${moon.sign} refuerza tu Sol en ${sun.sign}. No diferenciás entre quién sos y cómo sentís: todo es parte de la misma experiencia intensa.`;
        } else if (planetsInMoonSign >= 3) {
            emotionalPattern = `Tenés ${planetsInMoonSign} planetas en ${moon.sign}, lo que forma una concentración emocional muy fuerte. ${moonDesc.simple} No es solo cómo sentís: es cómo funciona tu mundo interior.`;
        } else if (venus && venus.sign === moon.sign) {
            emotionalPattern = `Tu Luna y Venus en ${moon.sign} indican que amás de la misma manera en que sentís. Tu mundo emocional y tus relaciones están profundamente conectados.`;
        } else {
            emotionalPattern = `En ${moon.sign}, ${moonDesc.signDescription.toLowerCase()}. ${moonDesc.simple}`;
        }
        
        md += `${emotionalPattern}\n\n`;
        
        // Conexión con Sol (tensión o armonía)
        if (sun && sun.sign !== moon.sign) {
            const elementSun = SIGN_ELEMENTS[sun.sign] || '';
            const elementMoon = SIGN_ELEMENTS[moon.sign] || '';
            
            if (elementSun === elementMoon) {
                md += `**Armonía внутренняя:** Tu signo solar y lunar comparten el elemento ${elementSun}, lo que genera coherencia entre tu identidad y tus emociones.\n\n`;
            } else {
                md += `**Tensión creativa:** Tu Sol en ${sun.sign} y tu Luna en ${moon.sign} tienen elementos diferentes (${elementSun} vs ${elementMoon}). Esto genera un diálogo interno que impulsa tu crecimiento.\n\n`;
            }
        }
        
        md += `---\n\n`;
    }

    // ===============================
    // ASCENDENTE - PRIMERA IMPRESIÓN
    // ===============================
    if (asc) {
        md += `## ⬆ Tu Forma de Mostrarte – Ascendente en ${asc.sign}\n\n`;
        md += `El Ascendente es la primera impresión que generás.\n\n`;
        
        const ascDesc = getSimplePlanetDescription('Ascendente', asc.sign);
        md += `${asc.sign} da una imagen:\n`;
        md += `${ascDesc.meaning}\n\n`;
        
        md += `Aunque por ${moon?.sign || 'dentro'}, no lo mostrás fácilmente.\n`;
        md += `Primero observás. Después confiás.\n\n`;
        
        md += `---\n\n`;
    }

    // ===============================
    // MERCURIO - MENTE
    // ===============================
    if (mercury) {
        md += `## 🔎 Tu Mente – Mercurio en ${mercury.sign}\n\n`;
        md += `Tu forma de pensar es ${getMindDescription(mercury.sign)}.\n\n`;
        
        md += `No te quedás en lo superficial.\n`;
        md += `Te interesa entender lo que está detrás de lo visible.\n\n`;
        
        md += `**Podés ser:**\n`;
        md += `- ${getMindTraits(mercury.sign)}\n\n`;
        
        md += `---\n\n`;
    }

    // ===============================
    // MARTE - ENERGÍA
    // ===============================
    if (mars) {
        md += `## 🔥 Tu Energía y Acción – Marte en ${mars.sign}\n\n`;
        md += `Tu manera de actuar es ${getActionDescription(mars.sign)}.\n\n`;
        
        md += `No improvisás impulsivamente.\n`;
        md += `Preferís:\n`;
        md += `- ${getActionTraits(mars.sign)}\n\n`;
        
        md += `---\n\n`;
    }

    // ===============================
    // VENUS - AMOR
    // ===============================
    if (venus) {
        md += `## 💕 Tu Manera de Amar – Venus en ${venus.sign}\n\n`;
        md += `Venus representa cómo amás y qué valorás.\n\n`;
        md += `${getVenusDescription(venus.sign)}\n\n`;
        md += `---\n\n`;
    }

    // ===============================
    // VOCACIÓN
    // ===============================
    if (mc) {
        md += `## 💼 Vocación y Dirección Profesional\n\n`;
        
        if (asc) {
            md += `Con Ascendente ${asc.sign} y Medio Cielo en ${mc.sign},\n`;
            md += `tu vida tiende a orientarse hacia:\n\n`;
            md += `- ${getVocationTraits(mc.sign, asc.sign)}\n`;
        }
        
        md += `\nNo buscás solo éxito. Buscás ${getVocationGoal(mc.sign)}.\n\n`;
        md += `---\n\n`;
    }
    
    // ===============================
    // ASPECTOS DESTACADOS (VERSIÓN PREMIUM)
    // ===============================
    md += `## 🔯 Patrones de Energía\n\n`;
    
    if (aspects && aspects.length > 0) {
        // Aspectos importantes (orbe < 5 pero destacar los muy exactos)
        const importantAspects = aspects.filter((a: any) => a.orb <= 5)
        
        // Separar personales de generacionales
        const personalPlanets = ['Sol', 'Luna', 'Mercurio', 'Venus', 'Marte', 'Júpiter', 'Saturno']
        
        const personalAspects = importantAspects.filter((a: any) =>  
            personalPlanets.includes(a.point1) && personalPlanets.includes(a.point2)
        )
        
        // Ordenar por orbe (más exacto primero)
        personalAspects.sort((a: any, b: any) => a.orb - b.orb)
        
        // Aspectos dominantes (orbe < 2°) - muy precisos
        const dominantAspects = personalAspects.filter((a: any) => a.orb < 2)
        
        // Aspectos secundarios (orbe 2-5°)
        const secondaryAspects = personalAspects.filter((a: any) => a.orb >= 2 && a.orb <= 5)
        
        // Aspectos de tensión
        const tenseAspects = personalAspects.filter((a: any) => 
            a.aspect === 'Cuadratura' || a.aspect === 'Oposición'
        )
        
        // Armónicos
        const harmonyAspects = personalAspects.filter((a: any) => 
            a.aspect === 'Conjunción' || a.aspect === 'Trígono' || a.aspect === 'Sextil'
        )
        
        // Asignar aspectos a UNA sola sección (evitar repetición)
        // Criterio: primero los más exactos, luego los demás
        const assignedAspects = new Set<string>()
        
        // Sección de patrones dominantes (orbe < 2) - solo los más exactos
        const dominantPatterns: any[] = []
        if (dominantAspects.length > 0) {
            md += `### Tus Patrones Dominantes\n\n`;
            
            dominantAspects.forEach((a: any) => {
                const key = `${a.point1}-${a.point2}-${a.aspect}`
                if (!assignedAspects.has(key)) {
                    assignedAspects.add(key)
                    dominantPatterns.push(a)
                    const interpretation = interpretAspect(a.point1, a.point2, a.aspect, a.orb);
                    md += `**${a.point1} ${a.aspect} ${a.point2}** (orbe ${a.orb.toFixed(1)}°)\n`;
                    if (interpretation) {
                        md += `${interpretation}\n\n`;
                    }
                }
            });
        }
        
        // Sección de tensiones (que no estén ya incluidos)
        const tenseToShow = tenseAspects.filter((a: any) => {
            const key = `${a.point1}-${a.point2}-${a.aspect}`
            return !assignedAspects.has(key) && a.orb < 3
        })
        if (tenseToShow.length > 0) {
            md += `### Donde Está Tu Desafío\n\n`;
            
            tenseToShow.forEach((a: any) => {
                const key = `${a.point1}-${a.point2}-${a.aspect}`
                if (!assignedAspects.has(key)) {
                    assignedAspects.add(key)
                    const interpretation = interpretAspect(a.point1, a.point2, a.aspect, a.orb);
                    md += `**${a.point1} ${a.aspect} ${a.point2}** (orbe ${a.orb.toFixed(1)}°)\n`;
                    if (interpretation) {
                        md += `${interpretation}\n\n`;
                    }
                }
            });
        }
        
        // Sección de fortalezas (armónicos que no estén repetidos)
        const harmonyToShow = harmonyAspects.filter((a: any) => {
            const key = `${a.point1}-${a.point2}-${a.aspect}`
            return !assignedAspects.has(key)
        })
        if (harmonyToShow.length > 0) {
            md += `### Tus Facilidades Naturales\n\n`;
            
            harmonyToShow.forEach((a: any) => {
                const key = `${a.point1}-${a.point2}-${a.aspect}`
                if (!assignedAspects.has(key)) {
                    assignedAspects.add(key)
                    const interpretation = interpretAspect(a.point1, a.point2, a.aspect, a.orb);
                    md += `**${a.point1} ${a.aspect} ${a.point2}** (orbe ${a.orb.toFixed(1)}°)\n`;
                    if (interpretation) {
                        md += `${interpretation}\n\n`;
                    }
                }
            });
        }
        
        // Resumen práctico
        if (assignedAspects.size > 0) {
            const totalShown = assignedAspects.size
            md += `### En Resumen\n\n`;
            md += `Tu carta tiene ${totalShown} patrones principales que definen tu dinámica interior. `;
            
            if (tenseToShow.length > 0) {
                md += `Tu desafío está en integrar ${tenseToShow.length} tensiones que impulsan tu crecimiento.`;
            }
            
            md += `\n\n`;
        }
        
    } else {
        md += `No se detectaron aspectos con orbe significativo.\n\n`;
    }
    
    md += `---\n\n`;
    
    // ===============================
    // BALANCE ELEMENTAL Y MODAL
    // ===============================
    md += `## ⚖️ Distribución Energética\n\n`;
    
    // Elementos
    const elements: Record<string, number> = { 'Fuego': 0, 'Tierra': 0, 'Aire': 0, 'Agua': 0 }
    const modalities: Record<string, number> = { 'Cardinal': 0, 'Fijo': 0, 'Mutable': 0 }
    
    const elementMap: Record<string, string> = {
        'Aries': 'Fuego', 'Leo': 'Fuego', 'Sagitario': 'Fuego', 'Sagittarius': 'Fuego',
        'Tauro': 'Tierra', 'Taurus': 'Tierra', 'Virgo': 'Tierra', 'Capricorn': 'Tierra', 'Capricornio': 'Tierra', 'Capricórnio': 'Tierra',
        'Geminis': 'Aire', 'Gémini': 'Aire', 'Gemini': 'Aire', 'Libra': 'Aire', 'Acuario': 'Aire', 'Aquarius': 'Aire',
        'Cancer': 'Agua', 'Cádiz': 'Agua', 'Cancé': 'Agua', 'Escorpio': 'Agua', 'Scorpio': 'Agua', 'Piscis': 'Agua', 'Pisces': 'Agua'
    }
    
    const modalityMap: Record<string, string> = {
        'Aries': 'Cardinal', 'Cancer': 'Cardinal', 'Libra': 'Cardinal', 'Capricornio': 'Cardinal', 'Capricorn': 'Cardinal', 'Capricórnio': 'Cardinal',
        'Tauro': 'Fijo', 'Taurus': 'Fijo', 'Leo': 'Fijo', 'Escorpio': 'Fijo', 'Scorpio': 'Fijo', 'Acuario': 'Fijo', 'Aquarius': 'Fijo',
        'Geminis': 'Mutable', 'Gémini': 'Mutable', 'Gemini': 'Mutable', 'Virgo': 'Mutable', 'Sagitario': 'Mutable', 'Sagittarius': 'Mutable', 'Piscis': 'Mutable', 'Pisces': 'Mutable'
    }
    
    // Contar SOLO planetas tradicionales (no asteroides)
    const traditionalPlanets = ['Sol', 'Luna', 'Mercurio', 'Venus', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno', 'Plutón']
    const angleNames = ['Ascendente', 'Medio Cielo', 'Descendente', 'Fondo del Cielo']
    const planetsToCount = planets.filter((p: any) => traditionalPlanets.includes(p.name) && !angleNames.includes(p.name))
    
    planetsToCount.forEach((p: any) => {
        const signKey = p.sign
        const element = elementMap[signKey]
        if (element) {
            elements[element]++
        }
        const modality = modalityMap[signKey]
        if (modality) {
            modalities[modality]++
        }
    })
    
    const total = Object.values(elements).reduce((a, b) => a + b, 0)
    if (total > 0) {
        md += `**Elementos:**\n`
        Object.entries(elements).sort((a: any, b: any) => b[1] - a[1]).forEach(([el, count]) => {
            const pct = Math.round((count / total) * 100)
            md += `- ${el}: ${count} planetas (${pct}%)\n`
        })
        
        // Analisis especial cuando falta un elemento (0%)
        const missingElement = Object.entries(elements).find(([el, count]) => count === 0)
        if (missingElement) {
            const [el, count] = missingElement
            const missingMessages: Record<string, string> = {
                'Tierra': `\n**Nota sobre la falta de Tierra:**\nTu carta no tiene planetas en signos de Tierra. Esto indica dificultad para sostener en lo concreto. Mucha idea, poca estructura. Necesitás apoyo externo práctico o alguien que te ayude a mantener los pies en la tierra. Tiendes a vivir más en el mundo mental o relacional que en el material.`,
                'Fuego': `\n**Nota sobre la falta de Fuego:**\nTu carta no tiene planetas en signos de Fuego. Puede costarte iniciar acciones o mantener la motivación. Necesitás incentivos externos para actuar. Tu energía viene más de afuera que de adentro.`,
                'Aire': `\n**Nota sobre la falta de Aire:**\nTu carta no tiene planetas en signos de Aire. Puede costarte la comunicación objetiva o ver las situaciones con distancia emocional. Tiendas a fundirte demasiado con el otro o con el entorno.`,
                'Agua': `\n**Nota sobre la falta de Agua:**\nTu carta no tiene planetas en signos de Agua. Puede costarte conectar emocionalmente o mostrar vulnerabilidad. Tiendas a mantener distancia afectiva o intelectualizar los sentimientos.`
            }
            if (missingMessages[el]) {
                md += missingMessages[el]
            }
        }
        
        // Verificar predominancia real (al menos 40% Y diferencia de al menos 2 planetas)
        const sortedElements = Object.entries(elements).sort((a: any, b: any) => b[1] - a[1])
        const dominantElement = sortedElements[0]
        const secondElement = sortedElements[1]
        
        if (dominantElement && dominantElement[1] >= total * 0.4 && (dominantElement[1] - secondElement[1]) >= 2) {
            md += `\n*Tenés predominancia de elemento ${dominantElement[0]}.*\n`
        } else if (dominantElement && dominantElement[1] === secondElement[1]) {
            md += `\n*Tenés balance entre ${dominantElement[0]} y ${secondElement[0]}.*\n`
        }
        
        md += `\n**Modalidades:**\n`
        Object.entries(modalities).sort((a: any, b: any) => b[1] - a[1]).forEach(([mod, count]) => {
            const pct = Math.round((count / total) * 100)
            md += `- ${mod}: ${count} planetas (${pct}%)\n`
        })
        
        const sortedModalities = Object.entries(modalities).sort((a: any, b: any) => b[1] - a[1])
        const dominantModality = sortedModalities[0]
        const secondModality = sortedModalities[1]
        
        if (dominantModality && dominantModality[1] >= total * 0.4 && (dominantModality[1] - secondModality[1]) >= 2) {
            const modalityDescription = getModalityDescription(dominantModality[0], dominantModality[1], total)
            md += `\n${modalityDescription}\n`
        } else if (dominantModality && dominantModality[1] === secondModality[1]) {
            md += `\n*Tenés balance entre ${dominantModality[0]} y ${secondModality[0]}.*\n`
        }
    }
    
    md += `\n---\n\n`;
    
    // ===============================
    // RELACIONES
    // ===============================
    md += `## ❤️ Relaciones y Vínculos\n\n`;
    
    if (sun?.sign === 'Libra' || venus?.sign === 'Libra') {
        md += `El Sol en Libra indica que las relaciones son centrales en tu desarrollo.\n\n`;
    }
    
    if (asc?.sign === 'Capricornio' || asc?.sign === 'Escorpio' || asc?.sign === 'Virgo') {
        md += `Con Ascendente ${asc.sign}, no entregás confianza rápido.\n\n`;
    }
    
    md += `Esto crea una combinación interesante:\n`;
    md += `- Necesitás vínculo\n`;
    md += `- Pero exigís compromiso\n`;
    md += `- Buscás equilibrio, no drama\n\n`;
    
    md += `Cuando decidís comprometerte, lo hacés en serio.\n\n`;
    md += `---\n\n`;

    // ===============================
    // DESAFÍOS EVOLUTIVOS
    // ===============================
    md += `## 🎯 Desafíos Evolutivos\n\n`;
    md += `Tu carta muestra tensiones naturales:\n\n`;
    
    // Detectar tensiones basado en aspectos
    const squareAspects = aspects.filter((a: any) => a.aspect === 'Cuadratura');
    const oppositionAspects = aspects.filter((a: any) => a.aspect === 'Oposición');
    
    if (moon && (moon.sign === 'Cáncer' || moon.sign === 'Escorpio' || moon.sign === 'Piscis')) {
        if (asc && (asc.sign === 'Capricornio' || asc.sign === 'Aries' || asc.sign === 'Virgo')) {
            md += `- **Emoción vs. Control:** Tu sensibilidad profunda versus tu necesidad de mantener el control.\n`;
        }
    }
    
    if (squareAspects.length >= 2) {
        md += `- **Tensiones internas:** Tenés cuadraturas que generan fricción pero también crecimiento.\n`;
    }
    
    if (oppositionAspects.length >= 1) {
        md += `- **Polaridades a integrar:** Hay oposiciones que te obligan a encontrar equilibrio.\n`;
    }
    
    md += `\n**Aprendizaje clave:**\n`;
    md += `${getLearningKey(sun?.sign, moon?.sign, asc?.sign)}\n\n`;
    md += `---\n\n`;

    // ===============================
    // SÍNTESIS FINAL - VERSIÓN PREMIUM
    // ===============================
    md += `## 🌟 Síntesis Evolutiva\n\n`;
    
    // Análisis de acumulación de signos (solo planetas reales, no ángulos)
    const angles = ['Ascendente', 'Medio Cielo', 'Descendente', 'Fondo del Cielo', 'Nodo Norte', 'Nodo Sur']
    const realPlanets = planets.filter((p: any) => !angles.includes(p.name))
    
    const signCounts: Record<string, number> = {}
    const houseCounts: Record<string, number> = {}
    realPlanets.forEach((p: any) => {
        if (p.sign) {
            signCounts[p.sign] = (signCounts[p.sign] || 0) + 1
        }
        if (p.house) {
            houseCounts[p.house] = (houseCounts[p.house] || 0) + 1
        }
    })
    
    // Encontrar patrones significativos
    const dominantSign = Object.entries(signCounts).sort((a: any, b: any) => b[1] - a[1])[0]
    const dominantHouse = Object.entries(houseCounts).sort((a: any, b: any) => b[1] - a[1])[0]
    
    // ANÁLISIS DEL PATRÓN PRINCIPAL
    if (dominantSign && dominantSign[1] >= 3) {
        const planetNames = realPlanets.filter((p: any) => p.sign === dominantSign[0]).map((p: any) => p.name).join(', ')
        const signElement = SIGN_ELEMENTS[dominantSign[0]] || ''
        
        // Mensajes según el signo dominante
        const patternMessages: Record<string, string> = {
            'Acuario': `La fuerte presencia de energía de ${dominantSign[0]} en tu carta (${planetNames}) revela algo fundamental: aunque externamente proyectás orden y método, tu mundo interior necesita libertad mental e innovación. No buscás cualquier relación: necesitás un vínculo que te permita ser vos mismo sin perder tu individualidad.`,
            'Capricornio': `Tenés ${dominantSign[1]} planetas en ${dominantSign[0]}. Esto indica una personalidad orientada a la construcción de legado. Tu desafío no es lograr éxito: es permitirte disfrutar el proceso sin sentir culpa.`,
            'Escorpio': `La concentración en ${dominantSign[0]} muestra una naturaleza que procesa todo con intensidad. Sentís profundamente y no te conformás con superficialidades. Tu desafío es confiar en el proceso de transformación.`,
            'default': `Tenés ${dominantSign[1]} planetas en ${dominantSign[0]} (${planetNames}), lo que forma una concentración notable de energía ${signElement.toLowerCase()} en tu carta.`
        }
        
        md += `### Tu Patrón Principal\n\n`;
        md += `${patternMessages[dominantSign[0]] || patternMessages['default']}\n\n`;
    }
    
    // ANÁLISIS DE TENSIÓN CENTRAL (Sol, Luna, Ascendente)
    if (sun && moon && asc) {
        const elementSun = SIGN_ELEMENTS[sun.sign] || ''
        const elementMoon = SIGN_ELEMENTS[moon.sign] || ''
        const elementAsc = SIGN_ELEMENTS[asc.sign] || ''
        
        // Determinar los elementos únicos
        const elements = [elementSun, elementMoon, elementAsc].filter((v, i, a) => a.indexOf(v) === i)
        
        md += `### 🎯 Tu Tensión Central a Integrar\n\n`;
        
        // Describir qué necesita cada pilar
        const elementNeeds: Record<string, string> = {
            'Fuego': 'acción inmediata y pasión',
            'Tierra': 'estabilidad y concreción',
            'Aire': 'libertad mental y comunicación',
            'Agua': 'profundidad emocional y conexión'
        }
        
        md += `${sun.sign} necesita ${elementNeeds[elementSun] || 'desarrollo'}.\n`;
        md += `${moon.sign} necesita ${elementNeeds[elementMoon] || 'expansión'}.\n`;
        md += `${asc.sign} necesita ${elementNeeds[elementAsc] || 'iniciativa'}.\n\n`;
        
        // Síntesis de integración
        if (elements.length === 2) {
            md += `Tu aprendizaje evolutivo es integrar ${elements[0].toLowerCase()} y ${elements[1].toLowerCase()}. `
            if ((elements.includes('Fuego') && elements.includes('Aire')) || (elements.includes('Fuego') && elements.includes('Agua'))) {
                md += `Tenés energía para actuar y visión para innovar. Tu desafío es sostener sin dispersarte.\n\n`;
            } else if (elements.includes('Tierra') && elements.includes('Agua')) {
                md += `Tenés profundidad emocional con capacidad de materializar. Tu desafío es no sabotearte con dudas.\n\n`;
            } else {
                md += `Tu desafío es que una parte no sabotee a la otra.\n\n`;
            }
        } else if (elements.length === 3) {
            md += `Con tres elementos diferentes, tu carta es rica y compleja. `
            md += `Tu misión es unir mente, emoción y acción sin que ninguna parte domine.\n\n`;
        }
    }
    
    // TU MISIÓN PERSONAL
    md += `### Tu Misión Personal\n\n`;
    const mission = getPremiumMission(sun?.sign, moon?.sign, asc?.sign, dominantSign?.[0], Object.entries(signCounts));
    md += `${mission}\n\n`;
    
    // ===============================
    // SÍNTESIS EVOLUTIVA PREMIUM
    // ===============================
    md += `## 🌟 Síntesis Evolutiva Premium\n\n`;
    
    if (sun && moon && asc) {
        const elementSun = SIGN_ELEMENTS[sun.sign] || ''
        
        // Síntesis según el signo solar
        const synthesisMessages: Record<string, string> = {
            'Acuario': `Tu carta revela un espíritu pionero con conciencia social. ${sun.sign} te da una visión diferente donde otros solo ven tradición.\n\nExternamente podés proyectar determinación, pero internamente necesitás libertad mental y expansión emocional.\n\nTu misión no es adaptarte al sistema. Es innovar dentro de él.\n\n**Tu clave evolutiva:** Integrarte sin diluirte. Comprometerte sin perder tu individualidad.`,
            
            'Capricornio': `Tu carta revela una personalidad orientada a la construcción de legado. Naciste para construir algo que trascienda.\n\n**Tu clave evolutiva:** Disfrutá el proceso, no solo el resultado. Tu éxito está en construir con paciencia y persistencia.`,
            
            'Leo': `Tu carta revela un espíritu brillante que busca inspirar. Tu luz está diseñada para que otros la vean.\n\n**Tu clave evolutiva:** Brillá sin eclipsar a otros. Compartí tu luz generosamente.`,
            
            'Escorpio': `Tu carta revela una intensidad transformadora. Vas al fondo de todo.\n\n**Tu clave evolutiva:** Soltá el control. Confiá en el proceso de transformación. Tu poder está en la profundidad.`,
            
            'Sagitario': `Tu carta revela un espíritu libre y expansivo. Buscás verdad y aventura.\n\n**Tu clave evolutiva:** Encontrá propósito en cada paso. Tu entusiasmo es contagioso cuando está alineado.`,
            
            'Aries': `Tu carta revela un pionero natural. Llegaste para actuar y liderar.\n\n**Tu clave evolutiva:** Aprendé a sostener la acción. Tu coraje inspira, pero tu persistencia transforma.`,
            
            'Libra': `Tu carta revela un buscador de equilibrio y armonía. Las relaciones son tuomotor de crecimiento.\n\n**Tu clave evolutiva:** Encontrá tu centro dentro de la relación. No te perdás en el otro.`,
            
            'Tauro': `Tu carta revela una naturaleza estable y pragmática. Construís con paciencia.\n\n**Tu clave evolutiva:** Valorá lo que ya tenés. Tu seguridad está en vos mismo.`,
            
            'Géminis': `Tu carta revela una mente ágil y comunicativa. Tu curiosidad no tiene límites.\n\n**Tu clave evolutiva:** Profundá en lugar de dispersarte. Tu mente es tu mayor herramienta.`,
            
            'Cáncer': `Tu carta revela una naturaleza emocional y protectora. Tu hogar y familia son tu centro.\n\n**Tu clave evolutiva:** Abrí tu corazón sin perder tus límites. Tu sensibilidad es fortaleza.`,
            
            'Virgo': `Tu carta revela un espíritu analítico y de servicio. Buscás la perfección en todo.\n\n**Tu clave evolutiva:** Aceptá la imperfección. Tu servicio comienza por vos mismo.`,
            
            'Piscis': `Tu carta revela una naturaleza sensible y espiritual. Tu conexión con lo invisible es profunda.\n\n**Tu clave evolutiva:** Establecé límites saludables. Tu compasión es tu don más grande.`
        }
        
        md += `${synthesisMessages[sun.sign] || 'Tu carta revela una combinación única de energías que define tu camino de evolución.'}\n\n`;
    }
    
    // Resumen de fortalezas
    md += `---\n\n`;
    
    md += `---\n*Esta interpretación te ayuda a conocerte mejor. La astrología es una guía, no un determinismo. Vos creás tu destino con cada elección.*\n`;

    return md;
}

// ===============================
// INTERPRETACIÓN DE ASPECTOS
// ===============================

function interpretAspect(point1: string, point2: string, aspect: string, orb: number = 10): string {
    const key = `${point1}-${point2}`;
    
    // Interpretación especial para orbes muy exactos (< 1°)
    if (orb < 1) {
        const exactInterpretations: Record<string, string> = {
            'Luna-Marte': 'Este es uno de tus patrones más fuertes. Un orbe tan preciso indica que esta energía opera constantemente en tu vida. \n\n**Lo que pasa internamente:** Tenés una vida emocional muy intensa que muchas veces no sabés cómo canalizar. Podés sentir que tus emociones "explotan" o se "traban". \n\n**El patrón:** 1) Sentís profundamente (Luna) 2) Querés actuar pero algo frena (Marte en cuadratura) 3) La frustración crece. \n\n**Cómo se manifiesta:** Impaciencia interna que otros no ven. Dificultad para expresar enojo de forma calmada. O bien: explosiones emocionales que después regretás. O bien: control excesivo para evitar el conflicto. \n\n**El aprendizaje:** No se trata de reprimir ni de explotar. Se trata de encontrar un canal constructivo: deporte, arte, o simplemente aceptar que sentís más fuerte que la mayoría.',
            
            'Venus-Saturno': 'Este es un patrón muy profundo en tu carta. Un orbe tan exacto indica que las dinámicas de vulnerabilidad y control operan constantemente en tus relaciones. \n\n**Lo que pasa internamente:** Hay un miedo profundo a ser lastimado o rechazado. Esto te lleva a construir muros emocionales. \n\n**El patrón:** 1) Querés amor 2) Pero mostrás vulnerabilidad da miedo 3) Entonces elegís seguridad sobre conexión. \n\n**Cómo se manifiesta:** Puede que postergues relaciones por miedo. O que exijas mucho compromiso antes de abrirte. Tus estándares pueden ser muy altos, incluso para vos mismo. \n\n**El aprendizaje:** Permitirte ser vulnerable no te hace débil. La verdadera fortaleza está en abrirse apesar del miedo.',
            
            'Sol-Luna': 'Este es tu patrón central. Un orbe tan exacto indica que tu identidad y tus emociones están profundamente entrelazadas. \n\n**Lo que pasa internamente:** No diferenciás entre quién sos y cómo sentís. TuSelf-concept está linked a tu estado emocional. \n\n**El patrón:** Cuando tus emociones están bien, te sentís bien con vos mismo. Cuando fluctuán, tu sentido de identidad también lo hace. \n\n**Cómo se manifiesta:** Podés ser muy auténtico porque sentís y actúas desde el mismo lugar. Pero también podés lack objectividad sobre vos mismo. \n\n**El aprendizaje:** Encontrar un sentido de Self que no dependa exclusivamente de cómo te sentís en cada momento.',
            
            'Sol-Mercurio': 'Este es un patrón mental muy fuerte. Un orbe tan preciso indica que tu forma de pensar está muy integrada con tu identidad. \n\n**Lo que pasa internamente:** Tu mente es tu herramienta principal. Pensás mucho, analizás todo, y tu self-worth está linked a tu capacidad intelectual. \n\n**El patrón:** Tu identidad se expresa a través de tus ideas. Necesitás sentir que pensás bien para sentirte bien. \n\n**Cómo se manifiesta:** Comunicación clara y estratégica. Pero también podés sobrepensar o intellectualizar emociones. \n\n**El aprendizaje:** Tu mente es una herramienta poderosa, pero no sos solo tu mente. También sentís, también necesitás conexión.'
        };
        
        const reverseKey = `${point2}-${point1}`;
        if (exactInterpretations[key]) return exactInterpretations[key];
        if (exactInterpretations[reverseKey]) return exactInterpretations[reverseKey];
    }
    
    const interpretations: Record<string, Record<string, string>> = {
        'Luna-Marte': {
            'Cuadratura': 'Existe una fricción entre lo que sentís y cómo actuás. Tu mundo emocional es intenso y reactivo. Podés tener emociones fuertes que no sabés expresar con calma. El aprendizaje es canalizar esa energía emocional hacia acción consciente, en lugar de reacción automática.',
            'Oposición': 'Tu vida emocional y tu capacidad de acción están en constante diálogo. Puede haber un ida y vuelta entre lo que sentís y cómo lo expresás. El desafío es encontrar balance entre emoción y acción.',
            'default': 'Hay una conexión intensa entre tus emociones y tu capacidad de acción.'
        },
        'Venus-Saturno': {
            'Cuadratura': 'En el amor, podés ser exigente o temer mostrar vulnerabilidad. No entregás tu corazón fácilmente, pero cuando lo hacés es serio y profundo. El desafío es permitirte afecto sin sobreprotegerte.',
            'Oposición': 'Hay tensión entre lo que deseás en el amor y lo que creés que merecés. Podés sabotear tus relaciones por miedo al rechazo. El aprendizaje es aceptarte tal como sos.',
            'default': 'En las relaciones, tendés a ser cauteloso con el corazón.'
        },
        'Plutón-Ascendente': {
            'Cuadratura': 'Tu presencia impacta más de lo que imaginás. Generás reacciones fuertes en otros. Parte de tu evolución consiste en aceptar tu poder personal sin entrar en luchas de control.',
            'Oposición': 'Podés sentir que los demás proyectan mucho en vos, o que vos hacés lo mismo. El aprendizaje es distinguir tu poder del de los otros.',
            'default': 'Tu presencia genera impacto en los demás.'
        },
        'Sol-Mercurio': {
            'Conjunción': 'Tu mente y tu identidad trabajan juntas. Tenés capacidad de comunicar lo que pensás de manera clara y estratégica. Tu forma de pensar refleja quienes sos.',
            'Sextil': 'Tenés facilidad para comunicar tus ideas. Tu mente y tu identidad se complementan bien.',
            'default': 'Tu mente y tu identidad están conectadas intensamente.'
        },
        'Sol-Marte': {
            'Cuadratura': 'Tu identidad y tu capacidad de acción pueden chocar. Podés sentir que querés hacer algo pero algo te frena. El desafío es integrar tu voluntad con tu capacidad de ejecución.',
            'Sextil': 'Tenés energía y determinación para lograr lo que te proponés. Tu acción se alinea bien con tu identidad.',
            'Conjunción': 'Tu identidad se expresa a través de la acción. Podés ser muy directo y a veces impulsivo. Aprendé a dosificar tu energía.',
            'default': 'Hay tensión entre quién sos y cómo actuás.'
        },
        'Luna-Sol': {
            'Conjunción': 'Tu identidad y emociones están profundamente conectadas. No diferenciás entre quién sos y cómo sentís. Esto te da coherencia interior. Sos auténtico porque sentís y actúas desde el mismo lugar.',
            'Oposición': 'Hay tensión entre tu identidad y tus emociones. Podés sentir que lo que hacés no corresponde con lo que sentís. El aprendizaje es integrar ambas partes.',
            'default': 'Hay un diálogo entre tu identidad y tus emociones.'
        },
        'Venus-Marte': {
            'Cuadratura': 'Hay tensión entre lo que deseás y cómo lo persigues. Podés querer algo pero no saber cómo obtenerlo, o actuar de manera que alejás lo que querés. El aprendizaje es alinear deseo con acción.',
            'Conjunción': 'Tu forma de amar y tu forma de actuar están unidas. Podés ser muy intenso en el amor.',
            'default': 'Hay una conexión intensa entre tus deseos y tu acción.'
        },
        'Mercurio-Marte': {
            'Cuadratura': 'Tu mente y tu acción pueden chocar. Podés pensar rápido pero no actuar con la misma velocidad, o viceversa. El aprendizaje es sincronizar pensamiento y acción.',
            'Sextil': 'Tenés la capacidad de pensar y actuar de manera coordinada.',
            'default': 'Tu mente y tu acción están en diálogo constante.'
        },
        'Luna-Venus': {
            'Cuadratura': 'Hay tensión entre lo que sentís y lo que deseás. Podés tener emociones que no se traducen en vínculos, o desear algo que no genera emoción. El aprendizaje es conectar corazón con deseo.',
            'Conjunción': 'Tus emociones y tus deseos están alineados. Sentís y deseás desde el mismo lugar.',
            'default': 'Hay un diálogo entre tus emociones y tus deseos.'
        },
        'Júpiter-Saturno': {
            'Cuadratura': 'Hay tensión entre tu necesidad de expansión y tu necesidad de estructura. Querés crecer pero también necesitás seguridad. El aprendizaje es construir sobre cimientos sólidos.',
            'Conjunción': 'Tenés la capacidad de crecer de manera estable y sostenible.',
            'default': 'Tu crecimiento y tu estructura están en diálogo.'
        },
        'Neptuno-Luna': {
            'Conjunción': 'Tu mundo emocional es muy intenso y podés absorber energías del entorno. Necesitás aprender a poner límites. Tenés una sensibilidad profunda y una conexión espiritual fuerte.',
            'default': 'Tu mundo emocional está influenciado por fuerzas invisibles.'
        },
        'Venus-Urano': {
            'Conjunción': 'En el amor, buscás originalidad y libertad. Podés resistirte a compromisos tradicionales. El desafío es permitirte intimidad sin perder tu individualidad. Tenés una forma única de amar.',
            'Sextil': 'Tenés facilidad para aportar innovación a tus relaciones.',
            'default': 'Tu manera de amar es diferente y a veces disruptiva.'
        },
        'Marte-Neptuno': {
            'Cuadratura': 'Tu energía puede chocar con tu mundo ideal o tu espiritualidad. Podés sentir que tus acciones no reflejan tus valores más profundos. El aprendizaje es vivir según tus valores.',
            'default': 'Tu acción y tu espiritualidad están en diálogo.'
        },
        'Júpiter-Neptuno': {
            'Trígono': 'Tenés una visión amplia que incluye lo espiritual y lo material. Tu fe y tu intuición trabajan juntas para guiarte.',
            'default': 'Tu crecimiento y tu espiritualidad están conectados.'
        },
        'Urano-Plutón': {
            'Sextil': 'Tenés la capacidad de transformar estructuras de manera innovadora.',
            'Trígono': 'Tu generación tiene el don de crear cambios positivos y profundos.',
            'default': 'Tu generación experimenta cambios profundos y soudnos.'
        },
        'Urano-Medio Cielo': {
            'Trígono': 'Tu proyección pública se beneficia de tu originalidad. Podés destacarte por tu visión única.',
            'Sextil': 'Tenés facilidad para brings cambios positivos a tu carrera o imagen pública.',
            'default': 'Tu carrera y tu visión únicas están conectadas.'
        },
        'Plutón-Medio Cielo': {
            'Oposición': 'Podés experimentar tensiones entre tu poder personal y tu imagen pública. El aprendizaje es usar tu poder de manera constructiva.',
            'Cuadratura': 'Tu presencia genera impacto. Necesitás aprender a canalizar tu poder sin generar conflictos.',
            'default': 'Tu poder personal afecta tu imagen pública.'
        },
        'Saturno-Urano': {
            'Cuadratura': 'Hay tensión entre tu necesidad de estructura y tu deseo de libertad. El aprendizaje es encontrar equilibrio entre tradición e innovación.',
            'default': 'Tu estructura y tu innovación están en diálogo.'
        }
    };

    const reverseKey = `${point2}-${point1}`;
    const data = interpretations[key] || interpretations[reverseKey];
    if (!data) return '';
    
    return data[aspect] || data['default'] || '';
}

// ===============================
// FUNCIONES AUXILIARES
// ===============================

function getModalityDescription(modality: string, count: number, total: number): string {
    const pct = Math.round((count / total) * 100)
    
    const descriptions: Record<string, string> = {
        'Fijo': `**Tu modalidad: FIJO (${pct}%)**\n\nEsto define gran parte de tu personalidad. Las personas con tanta energía Fija funcionan así:\n\n• **Intensidad sostenida**: No necesitás estimulación externa. Tu energía viene de adentro.\n• **Lealtad inquebrantable**: Una vez que te comprometés, es para siempre. No medias palabras.\n• **Difícil de mudar**: Tus opiniones, emociones y hábitos tienen raíces profundas. Cambiás, pero lento y cuando vos querés.\n• **Emociones profundas**: Sentís mucho, pero no mostrás todo. Tu mundo interior es rico y privado.\n\n**Tu desafío:** Soltar cuando ya no sirve. Tu naturaleza es sostener, no abandonar.\n\n**Tu fortaleza:** Persistencia. Otros flaquean, vos seguís.`,
        
        'Cardinal': `**Tu modalidad: CARDINAL (${pct}%)**\n\nEsto define gran parte de tu personalidad. Las personas con energía Cardinal funcionan así:\n\n• **Iniciativa natural**: No esperás que las cosas pasen, las hacés pasar.\n• **Liderazgo instintivo**: Asumís el control cuando nadie más lo hace.\n• **Impaciencia**: Querés resultados ya. La espera te frustra.\n• **Orientación a la acción**: Pensás haciendo. Aprendés actuando.\n\n**Tu desafío:** Detenerte a planificar antes de actuar. No todo necesita respuesta inmediata.\n\n**Tu fortaleza:** Capacidad de start things. Others观望, vos initiate.`,
        
        'Mutable': `**Tu modalidad: MUTABLE (${pct}%)**\n\nEsto define gran parte de tu personalidad. Las personas con energía Mutable funcionan así:\n\n• **Adaptación natural**: Podés fluir con cualquier situación. Sos un camaleón.\n• **Mente abierta**: Estas siempre abierto a nuevas perspectivas.\n• **Versatilidad**: Podés hacer muchas cosas a la vez.\n• **Dificultad con compromisos**: Todo puede cambiar, incluyendo vos.\n\n**Tu desafío:** Mantenerte firme en algo. Elegir un camino y seguirlo.\n\n**Tu fortaleza:** Flexibilidad. Cuando todo cambia, vos seguís funcionando.`
    }
    
    return descriptions[modality] || `*Tenés predominancia de modalidad ${modality}.*`
}

function getSimplePlanetDescription(planet: string, sign: string): { signDescription: string, meaning: string, challenge: string, simple: string } {
    const descriptions: Record<string, Record<string, { signDescription: string, meaning: string, challenge: string, simple: string }>> = {
        'Sol': {
            'Aries': { signDescription: 'el signo del pionero', meaning: 'Iniciativa, coraje, liderazgo', challenge: 'aprender a esperar y no ser impulsivo', simple: 'Tu corazón es valiente y quiere ser primero en todo.' },
            'Tauro': { signDescription: 'el signo del estabilidade', meaning: 'Perseverancia, practicidad, gusto por lo bello', challenge: 'soltar lo que no te sirve y aceptar el cambio', simple: 'Valés la seguridad y el comfort más que nada.' },
            'Géminis': { signDescription: 'el signo del comunicador', meaning: 'Versatilidad, curiosidad,socialización', challenge: 'enfocar tu energía en algo concreto', simple: 'Tu mente está siempre activa, buscando información nueva.' },
            'Cáncer': { signDescription: 'el signo del cuidador', meaning: 'Intuición, protección, familia', challenge: 'confiar en vos mismo y no depender emocionalmente', simple: 'Tu corazón es sensible y necesita sentirse seguro.' },
            'Leo': { signDescription: 'el signo del creador', meaning: 'Creatividad, generosidad, liderazgo cálido', challenge: 'aprender a compartir el protagonismo', simple: 'Te gusta brillar y que te reconozcan.' },
            'Virgo': { signDescription: 'el signo del servicio', meaning: 'Análisis, orden, mejora continua', challenge: 'aceptar la imperfección', simple: 'Buscás que todo esté bien hecho y en orden.' },
            'Libra': { signDescription: 'el signo del equilibrio', meaning: 'Armonía, justicia, asociaciones', challenge: 'tomar decisiones sin dudar demasiado', simple: 'Buscás la armonía y odiás los conflictos.' },
            'Escorpio': { signDescription: 'el signo del transformador', meaning: 'Intensidad, profundidad, cambio', challenge: 'confiar en el proceso y soltar el control', simple: 'Sentís profundamente y no te rindés fácil.' },
            'Sagitario': { signDescription: 'el signo del explorador', meaning: 'Optimismo, aventura, filosofía', challenge: 'comprometerte con una sola dirección', simple: 'Tu espíritu necesita libertad y aventura.' },
            'Capricornio': { signDescription: 'el signo del constructor', meaning: 'Ambición, disciplina, responsabilidad', challenge: 'ser flexible y disfrutar el camino', simple: 'Trabajás duro para lograr tus metas.' },
            'Acuario': { signDescription: 'el signo del innovador', meaning: 'Originalidad, libertad, humanidad', challenge: 'conectar emocionalmente sin perder tu Individualidad', simple: 'Te distinguishes por pensar diferente.' },
            'Piscis': { signDescription: 'el signo del soñador', meaning: 'Intuición, compasión, espiritualidad', challenge: 'establecer límites saludables', simple: 'Tu mundo interior es muy rico y profundo.' }
        },
        'Luna': {
            'Aries': { signDescription: 'emociones directas y apasionadas', meaning: 'Impulsividad emocional, coraje, iniciativa personal', challenge: 'paciencia en las relaciones', simple: 'Tu corazón late rápido y fuerte.' },
            'Tauro': { signDescription: 'emociones estables y seguras', meaning: 'Necesidad de estabilidad, placer, practicidad', challenge: 'soltar apegos materiales', simple: 'Necesitás seguridad afectiva para sentirte bien.' },
            'Géminis': { signDescription: 'emociones cambiantes y curiosas', meaning: 'Versatilidad emocional, comunicación, análisis', challenge: 'profundizar más allá de lo mental', simple: 'Tu estado de ánimo cambia rápido.' },
            'Cáncer': { signDescription: 'uno de sus lugares más fuertes', meaning: 'Alta sensibilidad, instinto protector, memoria emocional', challenge: 'no guardar rencores', simple: 'Tu corazón es fuerte pero también vulnerable.' },
            'Leo': { signDescription: 'emociones brillantes y expresivas', meaning: 'Creatividad emocional, generosidad, amor propio', challenge: 'no necesitar validación constante', simple: 'Te gusta que te admiren y te quieran.' },
            'Virgo': { signDescription: 'emociones analíticas y prácticas', meaning: 'Necesidad de orden emocional, servicio, análisis', challenge: 'aceptar emociones sin juzgarlas', simple: 'Analizás tus sentimientos para entenderlos.' },
            'Libra': { signDescription: 'emociones armoniosas y sociales', meaning: 'Necesidad de equilibrio en pareja, diplomacia emocional', challenge: 'definir tu propio deseo sin buscar aprobación', simple: 'Te sentís mejor cuando hay paz y armonía en tus relaciones.' },
            'Escorpio': { signDescription: 'emociones intensas y profundas', meaning: 'Transformación emocional, intuición poderosa, pasión', challenge: 'confiar en otros', simple: 'Sentís todo intensamente y no olvidás fácil.' },
            'Sagitario': { signDescription: 'emociones optimistas y libres', meaning: 'Necesidad de aventura, expansión, positivismo', challenge: 'comprometerte en un lugar', simple: 'Tu corazón necesita espacio y libertad.' },
            'Capricornio': { signDescription: 'emociones contenidas y disciplinadas', meaning: 'Ambición emocional, responsabilidad, autocontrol', challenge: 'permitirte ser vulnerable', simple: 'Costas mostrar lo que sentís.' },
            'Acuario': { signDescription: 'emociones independientes y originales', meaning: 'Necesidad de libertad emocional, pensamiento único', challenge: 'conectar a nivel personal', simple: 'Valés tu independencia emocional.' },
            'Piscis': { signDescription: 'emociones intuitivas y sensitivas', meaning: 'Compasión, intuición, conexión espiritual', challenge: 'protegerte de absorber energías ajenas', simple: 'Sentís las cosas muy profundamente.' }
        },
        'Ascendente': {
            'Aries': { signDescription: 'pionera y directa', meaning: 'Iniciativa, coraje, acción inmediata', challenge: 'aprender a esperar', simple: 'Generás una印象 de persona directa y sin vueltas.' },
            'Tauro': { signDescription: 'estable y confiable', meaning: 'Persistencia, practicidad, sensualidad', challenge: 'soltar el control', simple: 'Proyectás seguridad y confiabilidad.' },
            'Géminis': { signDescription: 'comunicativa y versátil', meaning: 'Curiosidad, adaptación, sociabilidad', challenge: 'enfocarte', simple: 'Parecés alguien sociable y curioso.' },
            'Cáncer': { signDescription: 'cuidadora y sensible', meaning: 'Protección, intuición, emocionalidad', challenge: 'mostrar fortaleza', simple: 'Generás una impression de calidez y cuidado.' },
            'Leo': { signDescription: 'creativa y magnética', meaning: 'Creatividad, liderazgo, generosidad', challenge: 'compartir el palco', simple: 'Te hacés notar naturalmente.' },
            'Virgo': { signDescription: 'analítica y práctica', meaning: 'Orden, servicio, detalle', challenge: 'relajarte', simple: 'Parecés alguien organizado y eficiente.' },
            'Libra': { signDescription: 'armónica y social', meaning: 'Equilibrio, justicia, asociación', challenge: 'decidir', simple: 'Generás una impression de diplomacia y paz.' },
            'Escorpio': { signDescription: 'intensa y transformadora', meaning: 'Profundidad, misterio, determinación', challenge: 'confiar', simple: 'Parecés alguien misterioso y profundo.' },
            'Sagitario': { signDescription: 'optimista y aventurera', meaning: 'Expansión, filosofía, libertad', challenge: 'comprometerte', simple: 'Tu energía es optimista y entusiasta.' },
            'Capricornio': { signDescription: 'seria y ambiciosa', meaning: 'Responsabilidad, disciplina, logro', challenge: 'ser más flexible', simple: 'Proyectás seriedad y responsabilidad.' },
            'Acuario': { signDescription: 'original y humanitaria', meaning: 'Innovación, libertad, colectividad', challenge: 'conectar emocionalmente', simple: 'Te distinguish por ser diferente.' },
            'Piscis': { signDescription: 'sensible y intuitiva', meaning: 'Compasión, espiritualidad, sensibilidad', challenge: 'establecer límites', simple: 'Parecés alguien sensible y comprensivo.' }
        }
    };
    
    return descriptions[planet]?.[sign] || { signDescription: 'única', meaning: 'energía única', challenge: 'descubrir tu camino', simple: 'Tenés una esencia única.' };
}

function getMindDescription(sign: string): string {
    const descriptions: Record<string, string> = {
        'Aries': 'rápida y directa',
        'Tauro': 'práctica y lenta',
        'Géminis': 'curiosa y variable',
        'Cáncer': 'intuitiva y sensible',
        'Leo': 'creativa y dramática',
        'Virgo': 'analítica y detallista',
        'Libra': 'equilibrada y social',
        'Escorpio': 'profunda e intensa',
        'Sagitario': 'filosófica y amplia',
        'Capricornio': 'estructurada y práctica',
        'Acuario': 'original y disruptiva',
        'Piscis': 'intuitiva y sensitiva'
    };
    return descriptions[sign] || 'única';
}

function getMindTraits(sign: string): string {
    const traits: Record<string, string> = {
        'Aries': 'pensamientos rápidos, action inmediata',
        'Tauro': 'pensamientos prácticos y concretos',
        'Géminis': 'muchas ideas a la vez, mente ágil',
        'Cáncer': 'pensamientos basados en intuición',
        'Leo': 'pensamientos creativos y positivos',
        'Virgo': 'análisis detallado de todo',
        'Libra': 'busca diferentes perspectivas',
        'Escorpio': 'mente profunda, no acepta superficialidades',
        'Sagitario': 'busca el significado más amplio',
        'Capricornio': 'pensamientos estratégicos',
        'Acuario': 'ideas innovadoras y únicas',
        'Piscis': 'mente intuitiva y sensibles'
    };
    return traits[sign] || 'una forma única de pensar';
}

function getActionDescription(sign: string): string {
    const descriptions: Record<string, string> = {
        'Aries': 'impulsiva y pionea',
        'Tauro': 'constante y persistente',
        'Géminis': 'versátil y comunicativa',
        'Cáncer': 'defensiva y protectora',
        'Leo': 'creativa y dramática',
        'Virgo': 'analítica y metódica',
        'Libra': 'diplomática y equilibrada',
        'Escorpio': 'intensa y determinada',
        'Sagitario': 'expansiva y aventurera',
        'Capricornio': 'disciplinada y ambiciosa',
        'Acuario': 'independiente e innovadora',
        'Piscis': 'intuitiva y adaptable'
    };
    return descriptions[sign] || 'única';
}

function getActionTraits(sign: string): string {
    const traits: Record<string, string> = {
        'Aries': 'actuar primero, pensar después',
        'Tauro': 'mantener el esfuerzo en el tiempo',
        'Géminis': 'hacer varias cosas a la vez',
        'Cáncer': 'actuar para proteger a los suyos',
        'Leo': 'crear y expresar creatividad',
        'Virgo': 'mejorar y optimizar todo',
        'Libra': 'buscar el consenso antes de actuar',
        'Escorpio': 'perseguir objetivos con intensidad',
        'Sagitario': 'explorar y descubrir',
        'Capricornio': 'trabajar duro hacia metas',
        'Acuario': 'actuar de manera diferente',
        'Piscis': 'adaptarse y fluir'
    };
    return traits[sign] || 'tu forma única de actuar';
}

function getVenusDescription(sign: string): string {
    const descriptions: Record<string, string> = {
        'Aries': 'Amás con passion y directamente. Te gustán las relaciones dinámicas.',
        'Tauro': 'Amás con estabilidad y sensualidad. Valés la lealtad y el compromiso.',
        'Géminis': 'Amás con curiosidad y versatilidad. Buscás comunicación intelectual.',
        'Cáncer': 'Amás con intensidad emocional. Necesitás seguridad afectiva.',
        'Leo': 'Amás con generosidad y dramatismo. Necesitás ser admirado.',
        'Virgo': 'Amás de forma práctica y detallista. Buscás perfection.',
        'Libra': 'Amás buscando armonía y equilibrio. Las relaciones son centrales.',
        'Escorpio': 'Amás con intensidad y profundidad. Buscás transformación.',
        'Sagitario': 'Amás con libertad y optimism. Necesitás aventura.',
        'Capricornio': 'Amás con seriedad y compromiso. Buscás estabilidad.',
        'Acuario': 'Amás con independencia y originalidad. Valorás la amistad.',
        'Piscis': 'Amás con compasión y entrega. Buscás conexión espiritual.'
    };
    return descriptions[sign] || 'Tenés una forma única de amar.';
}

function getVocationTraits(mc: string, asc: string): string {
    return `proyección pública en ${mc} con ${asc}`;
}

function getVocationGoal(mc: string): string {
    const goals: Record<string, string> = {
        'Aries': 'liderazgo y reconocimiento',
        'Tauro': 'estabilidad y logros concretos',
        'Géminis': 'comunicación y conexión',
        'Cárez': 'cuidado y servicio',
        'Leo': 'creatividad y reconocimiento',
        'Virgo': 'servicio y eficiencia',
        'Libra': 'armonía y justicia',
        'Escorpio': 'transformación y profundidad',
        'Sagitario': 'expansión y sabiduría',
        'Capricornio': 'logros y estructura',
        'Acuario': 'innovación e impacto social',
        'Piscis': 'inspiración y espiritualidad'
    };
    return goals[mc] || 'tu propio camino';
}

function getLearningKey(sun: string, moon: string, asc: string): string {
    const keys: Record<string, string> = {
        'Libra': 'Encontrar tu propia voz antes de buscar la armonía con otros.',
        'Cáncer': 'Permitir mostrar vulnerabilidad sin sentir que perdés poder.',
        'Capricornio': 'Ser más flexible sin perder tu estructura.',
        'Escorpio': 'Transformar el miedo en fortaleza.',
        'Piscis': 'Establecer límites mientras mantenés tu sensibilidad.',
        'Aries': 'Aprender a esperar y no actuar por impulso.'
    };
    return keys[sun] || keys[moon] || 'Integrar tus diferentes partes para ser más completo.';
}

function getMainTalent(sign: string, planet: string): string {
    const sunTalents: Record<string, string> = {
        'Aries': 'Coraje y iniciativa',
        'Tauro': 'Perseverancia y practicidad',
        'Géminis': 'Comunicación y versatilidad',
        'Cáncer': 'Intuición y cuidado',
        'Leo': 'Creatividad y liderazgo',
        'Virgo': 'Análisis y servicio',
        'Libra': 'Diplomacia y mediación',
        'Escorpio': 'Intensidad y transformación',
        'Sagitario': 'Optimismo y aventura',
        'Capricornio': 'Disciplina y ambición',
        'Acuario': 'Innovación y originalidad',
        'Piscis': 'Compasión e intuición'
    }
    
    const moonTalents: Record<string, string> = {
        'Aries': 'Emociones directas',
        'Tauro': 'Necesidad de seguridad',
        'Géminis': 'Adaptación emocional',
        'Cánto': 'Protección emocional',
        'Leo': 'Necesidad de reconocimiento',
        'Virgo': 'Análisis de sentimientos',
        'Libra': 'Armonía relacional',
        'Escorpio': 'Profundidad emocional',
        'Sagitario': 'Expansión emocional',
        'Capricornio': 'Autocontrol emocional',
        'Acuario': 'Independencia emocional',
        'Piscis': 'Sensibilidad empática'
    }
    
    const marsTalents: Record<string, string> = {
        'Aries': 'Acción inmediata',
        'Tauro': 'Persistencia en la acción',
        'Géminis': 'Versatilidad行动',
        'C到什么': 'Acción protectora',
        'Leo': 'Liderazgo activo',
        'Virgo': 'Acción metódica',
        'Libra': 'Acción diplomática',
        'Escorpio': 'Acción determinada',
        'Sagitario': 'Acción aventurera',
        'Capricornio': 'Acción disciplinada',
        'Acuario': 'Acción innovadora',
        'Piscis': 'Acción intuitiva'
    }
    
    const venusTalents: Record<string, string> = {
        'Aries': 'Romance apasionado',
        'Tauro': 'Amor estable y sensual',
        'Géminis': 'Amor intelectual',
        'C-rcel': 'Amor protector',
        'Leo': 'Amor dramático',
        'Virgo': 'Amor detallista',
        'Libra': 'Amor armonioso',
        'Escorpio': 'Amor intenso',
        'Sagitario': 'Amor aventurero',
        'Capricornio': 'Amor comprometido',
        'Acuario': 'Amor independiente',
        'Piscis': 'Amor romántico'
    }
    
    if (planet === 'Sun' || planet === 'Moon' || planet === 'Mars' || planet === 'Venus') {
        if (planet === 'Moon') return moonTalents[sign] || 'Don emocional'
        if (planet === 'Mars') return marsTalents[sign] || 'Don de acción'
        if (planet === 'Venus') return venusTalents[sign] || 'Don amoroso'
    }
    
    return sunTalents[sign] || 'Tu don único';
}

function getPremiumMission(sun: string, moon: string, asc: string, dominantSign: string | undefined, signCounts: [string, number][]): string {
    const sunEl = SIGN_ELEMENTS[sun] || '';
    const moonEl = SIGN_ELEMENTS[moon] || '';
    const ascEl = SIGN_ELEMENTS[asc] || '';
    const sunMod = SIGN_MODALITIES[sun] || '';
    
    // Encontrar elemento dominante
    const elements: Record<string, number> = { 'Fuego': 0, 'Tierra': 0, 'Aire': 0, 'Agua': 0 };
    signCounts.forEach(([sign, count]) => {
        const el = SIGN_ELEMENTS[sign];
        if (el && elements[el] !== undefined) {
            elements[el] += count;
        }
    });
    const dominantElement = Object.entries(elements).sort((a, b) => b[1] - a[1])[0];
    
    let mission = '';
    
    // Según el signo solar específico
    const signMissions: Record<string, string> = {
        'Capricornio': `Tu Sol en Capricornio indica que tu camino es construir estructura duradera. No buscás popularidad, buscás resultados reales.\n\n**Tu desafio especifico:** Aprende a disfrutar el proceso, no solo el resultado.\n**Tu fortaleza:** Persistencia. Otros se rinden, vos seguis.\n**Tu mision:** Construir algo que trascienda. Puede ser una carrera, un legado, una familia.`,
        
        'Acuario': `Tu Sol en Acuario indica que tu camino es aportar una perspectiva unica. No seguis reglas solo porque existen.\n\n**Tu desafio especifico:** Integrarte sin perder tu individualidad.\n**Tu fortaleza:** Vision diferente. Piensas fuera de la caja.\n**Tu mision:** Traer innovacion donde otros ven tradicion.`,
        
        'Escorpio': `Tu Sol en Escorpio indica que tu camino es transformar. Vas al fondo de las cosas.\n\n**Tu desafio especifico:** Soltar el control. Confiar en el proceso.\n**Tu fortaleza:** Profundidad. No te conformas con la superficie.\n**Tu mision:** Sanar lo que otros evitan. Tu intensidad puede transformar.`,
        
        'Leo': `Tu Sol en Leo indica que tu camino es brillar e inspirar.\n\n**Tu desafio especifico:** Compartir el protagonismo. No necesitas validacion constante.\n**Tu fortaleza:** Creatividad y carisma.\n**Tu mision:** Mostrar a otros como brillar desde su autenticidad.`,
        
        'Virgo': `Tu Sol en Virgo indica que tu camino es perfeccionar y servir.\n\n**Tu desafio especifico:** Aceptar la imperfeccion, tuya y ajena.\n**Tu fortaleza:** Analisis y atencion al detalle.\n**Tu mision:** Hacer que las cosas funcionen mejor. Tu trabajo importa.`,
        
        'Libra': `Tu Sol en Libra indica que tu camino es crear armonia y partenariats.\n\n**Tu desafio especifico:** Tomar decisiones sin dudar demasiado.\n**Tu fortaleza:** Diplomacia y sentido justo.\n**Tu mision:** Unir lo que esta separado.`,
        
        'Sagitario': `Tu Sol en Sagitario indica que tu camino es expandir horizontes.\n\n**Tu desafio especifico:** Comprometerse con una sola direccion.\n**Tu fortaleza:** Optimismo y vision de largo plazo.\n**Tu mision:** Guiar hacia la libertad y la aventura.`,
        
        'Tauro': `Tu Sol en Tauro indica que tu camino es crear belleza y seguridad.\n\n**Tu desafio especifico:** Soltar lo que no sirve, incluso si es comodo.\n**Tu fortaleza:** Persistencia y practicidad.\n**Tu mision:** Construir algo que dure.`,
        
        'Aries': `Tu Sol en Aries indica que tu camino es iniciativa y liderazgo.\n\n**Tu desafio especifico:** Paciencia. No todo necesita accion inmediata.\n**Tu fortaleza:** Coraje y determinacion.\n**Tu mision:** Ser el que inicia las cosas.`,
        
        'Geminis': `Tu Sol en Geminis indica que tu camino es conectar ideas y personas.\n\n**Tu desafio especifico:** Profundizar. Puedes dispersarte en muchas cosas.\n**Tu fortaleza:** Comunicacion y versatilidad.\n**Tu mision:** Explicar lo complejo de manera simple.`,
        
        'Cancer': `Tu Sol en Cancer indica que tu camino es criar y proteger.\n\n**Tu desafio especifico:** Soltar. No puedes controlar todo.\n**Tu fortaleza:** Intuicion y cuidado.\n**Tu mision:** Crear seguridad para vos y los tuyos.`,
        
        'Piscis': `Tu Sol en Piscis indica que tu camino es conectar con lo trascendental.\n\n**Tu desafio especifico:** Poner limites. No puedes salvar a todos.\n**Tu fortaleza:** Compasion y conexion espiritual.\n**Tu mision:** Traer lo sagrado al mundo material.`
    };
    
    // Agregar mensaje segun elemento dominante
    const elementMessages: Record<string, string> = {
        'Aire': `\n\nCon tu elemento Aire dominante, tu mente es tu herramienta principal. Pero tambien necesitás conexión emocional. Usá tu capacidad mental para construir vinculos reales, no solo ideas abstractas.\n\n**En el trabajo:** Buscá roles donde puedas pensar y comunicarte.\n**En relaciones:** No te quedes solo en la conversación. Buscá profundidad emocional.`,
        
        'Tierra': `\n\nCon tu elemento Tierra dominante, vos sabés construir. Tu misión no es sonar, sino hacer. Pero a veces el exceso de practicidad te hace perder la magia.\n\n**En el trabajo:** Tenés todo para construir cosas concretas y duraderas.\n**En relaciones:** Mostrá más sentimientos. No solo acciones, también palabras.`,
        
        'Fuego': `\n\nCon tu elemento Fuego dominante, tu energía inspira. Pero también puede consumirse rápido.\n\n**En el trabajo:** Necesitás proyectos que te apasionen.\n**En relaciones:** Tu pasión es atractiva pero también puede asustar. Aprendé a dosificar.`,
        
        'Agua': `\n\nCon tu elemento Agua dominante, sentís todo muy profundamente. Tu mundo interior es rico y complejo.\n\n**En el trabajo:** Necesitás sentir que lo que hacés tiene sentido emocional.\n**En relaciones:** Tu intuición es tu mayor don. Pero también podés absorber demasiada energía de otros.`
    };
    
    // Combinar signo + elemento
    if (signMissions[sun]) {
        mission = signMissions[sun] + (elementMessages[dominantElement[0]] || '');
    } else {
        mission = (elementMessages[dominantElement[0]] || 'Tu misión es integrar todas tus voces internas en una sinfonía coherente.');
    }
    
    // Agregar nota segun la tensión Sol-Luna
    if (sunEl !== moonEl) {
        mission += '\n\n**Tension central a integrar:** ' + sun + ' (' + sunEl + ') necesita coexistir con ' + moon + ' (' + moonEl + ').';
    }
    
    return mission;
}

function getMission(sun: string, moon: string, mc: string): string {
    const missions: Record<string, string> = {
        'Libra': 'armonía + compromiso + relaciones significativas',
        'Cáncer': 'cuidado + protección + construir un hogar',
        'Capricornio': 'disciplina + logro + construcción de legado',
        'Escorpio': 'transformación + profundidad + sanación',
        'Leo': 'creatividad + brillo + inspirar a otros',
        'Piscis': 'compasión + espiritualidad + servicio',
        'Aries': 'iniciativa + coraje + liderazgo'
    };
    return missions[sun] || missions[moon] || 'tu camino único de crecimiento';
}

