export type Experience = {
  role: string
  company: string
  period: string
  location: string
  description: string
}

export type Education = {
  degree: string
  institution: string
  period: string
}

export type Certificate = {
  name: string
  date: string
}

export type ProgrammingCourse = {
  name: string
  period: string
}

export type TechStack = {
  esri: string[]
  development: string[]
  tools: string[]
  other: string[]
}

export type Language = {
  name: string
  level: string
}

export type CVData = {
  profile: {
    name: string
    title: string
    email: string
    phone: string
    location: string
    github: string
    summary: string
  }
  experience: Experience[]
  education: Education[]
  certificates: Certificate[]
  programmingCourses: ProgrammingCourse[]
  techStack: TechStack
  languages: Language[]
  ui: {
    experience: string
    education: string
    certificates: string
    programmingCourses: string
    techStack: string
    techCategories: { esri: string; development: string; tools: string; other: string }
    languages: string
  }
}

const en: CVData = {
  profile: {
    name: 'Manuela Kronen, PhD',
    title: 'GIS Solution Engineer',
    email: 'manuela.kronen@gmail.com',
    phone: '+34 682 46 20 98',
    location: 'Madrid, Spain',
    github: 'github.com/manuelakronen',
    summary:
      'GIS Solution Engineer with experience designing and implementing ArcGIS-based solutions, combining technical expertise with a business-oriented approach. A distinctive profile that brings together leadership in GIS environments, strategic client focus, and growing proficiency in frontend web development applied to Esri solutions. Proven experience with ArcGIS Online, ArcGIS Enterprise, and ArcGIS Location Platform, across both private-sector and public-sector projects. Committed to continuous learning within the Esri ecosystem and frontend development technologies.',
  },
  experience: [
    {
      role: 'GIS Business Analyst',
      company: 'Solusoft',
      period: 'Jun 2024 – Present',
      location: 'Madrid, Spain',
      description:
        'Lead the technical vision as an Esri España partner, analysing the use and integration of ArcGIS Online, ArcGIS Enterprise and ArcGIS Location Platform, and supporting architectural decision-making. Build and maintain positive client relationships and configure solutions using ArcGIS Experience Builder.',
    },
    {
      role: 'GIS Online Educator',
      company: 'Freelance',
      period: 'Jul 2022 – Jun 2024',
      location: 'Madrid, Spain',
      description:
        'Created and published video tutorials on ArcGIS tools, covering workflows in ArcGIS Online, ArcGIS Pro and ArcGIS Field Maps. Content designed for users needing step-by-step GIS solutions, from initial setup to practical case resolution.',
    },
    {
      role: 'GIS Coordinator',
      company: 'Scanian Landscape Foundation',
      period: 'Feb 2018 – Jun 2022',
      location: 'Höör, Sweden',
      description:
        'Drove adoption of ArcGIS Pro and ArcGIS Online within the organisation, delivered internal training sessions and administered the ArcGIS Field Maps mobile application for team use. Collected data, performed spatial analysis and generated reports in ArcGIS Pro and ArcGIS Online for a regional hiking trail spanning over 30 municipalities.',
    },
    {
      role: 'Hiking Trail Coordinator',
      company: 'Scanian Landscape Foundation',
      period: 'Aug 2016 – Jun 2022',
      location: 'Höör, Sweden',
      description:
        'Led the trail quality control team, with budget and personnel responsibilities. Maintained a network of contacts across more than 30 municipalities to ensure proper trail upkeep. Delivered quality standards training to field workers.',
    },
    {
      role: 'PhD Researcher & University Lecturer',
      company: 'Lund University',
      period: 'Sep 2011 – Apr 2018',
      location: 'Sweden',
      description:
        'Researched value-creation processes in EU LEADER projects for rural tourism development. Planned and conducted interviews with key informants, performed qualitative data analysis and presented findings as a doctoral thesis. Taught undergraduate and postgraduate courses.',
    },
    {
      role: 'Tourism Coordinator',
      company: 'Ystad Municipality',
      period: 'May 2007 – May 2009',
      location: 'Ystad, Sweden',
      description:
        'Led reception teams in the day-to-day running of the tourist office. Set up and managed online booking systems. Delivered high-quality services to tourists under pressure.',
    },
  ],
  education: [
    {
      degree: 'MSc in Geographic Information Systems',
      institution: 'Folkuniversitetet Gävle, Sweden',
      period: '2020 – 2021',
    },
    {
      degree: 'PhD in Service Studies',
      institution: 'Lund University, Sweden',
      period: '2011 – 2018',
    },
    {
      degree: 'MSc in Tourism and Hospitality Management',
      institution: 'Lund University, Sweden',
      period: '2009 – 2011',
    },
    {
      degree: 'BA in Human Geography',
      institution: 'Lund University, Sweden',
      period: '2003 – 2007',
    },
  ],
  certificates: [
    { name: 'Basic ArcGIS Enterprise Deployment (10 hrs)', date: 'Mar 2026' },
    { name: 'Network Analysis with Network Analyst in ArcGIS Pro (15 hrs)', date: 'Nov 2025' },
    { name: 'ArcGIS Online Workflows (10 hrs)', date: 'Oct 2025' },
  ],
  programmingCourses: [
    { name: 'Bootcamp: HTML, CSS, JS — Udemy', period: 'Jan 2025 – Mar 2025' },
    { name: 'Data Analytics: Python, SQL — W3School', period: 'Jun 2024 – Aug 2024' },
  ],
  techStack: {
    esri: [
      'ArcGIS Online', 'ArcGIS Pro', 'ArcGIS Enterprise', 'ArcGIS Location Platform',
      'ArcGIS Experience Builder', 'ArcGIS Experience Builder for Developers',
      'ArcGIS Field Maps', 'Network Analyst', 'ModelBuilder', 'ArcGIS for Power BI',
    ],
    development: [
      'HTML', 'CSS', 'JavaScript', 'Python', 'SQL',
      'React', 'ArcGIS Maps SDK for JavaScript', 'ArcGIS API for Python',
    ],
    tools: [
      'VS Code', 'GitHub', 'Vercel', 'Claude Code',
    ],
    other: [
      'Scrum', 'Qualitative Data Analysis', 'Technical Training & Outreach',
    ],
  },
  languages: [
    { name: 'German', level: 'Native' },
    { name: 'English', level: 'C1 — British Council' },
    { name: 'Spanish', level: 'C1 — Instituto Cervantes' },
    { name: 'Swedish', level: 'C2' },
  ],
  ui: {
    experience: 'Work Experience',
    education: 'Education',
    certificates: 'Esri Course Certificates',
    programmingCourses: 'Programming Courses',
    techStack: 'Tech Stack',
    techCategories: { esri: 'Esri Platforms', development: 'Development', tools: 'Tools', other: 'Other' },
    languages: 'Languages',
  },
}

const es: CVData = {
  profile: {
    name: 'Manuela Kronen, PhD',
    title: 'Ingeniera de Soluciones GIS',
    email: 'manuela.kronen@gmail.com',
    phone: '+34 682 46 20 98',
    location: 'Madrid, España',
    github: 'github.com/manuelakronen',
    summary:
      'Ingeniera de Soluciones GIS con experiencia en el diseño e implementación de soluciones basadas en ArcGIS, combinando conocimiento técnico y orientación a negocio. Perfil singular que combina liderazgo en entornos GIS, orientación estratégica al cliente y creciente dominio del desarrollo web aplicado a soluciones Esri. Experiencia acreditada en ArcGIS Online, ArcGIS Enterprise y ArcGIS Location Platform, tanto en proyectos con clientes privados como con administraciones públicas. Formación continua en el ecosistema Esri y en tecnologías de desarrollo frontend.',
  },
  experience: [
    {
      role: 'Analista de Negocio GIS',
      company: 'Solusoft',
      period: 'Jun 2024 – Presente',
      location: 'Madrid, España',
      description:
        'Liderar la visión técnica como partner de Esri España, analizando el uso e integración de ArcGIS Online, ArcGIS Enterprise y ArcGIS Location Platform, y apoyando la toma de decisiones sobre la arquitectura más adecuada en cada caso. Establecer relaciones positivas con los clientes y configurar soluciones con ArcGIS Experience Builder.',
    },
    {
      role: 'GIS Online Educator',
      company: 'Freelance',
      period: 'Jul 2022 – Jun 2024',
      location: 'Madrid, España',
      description:
        'Creación y publicación de tutoriales de vídeo sobre herramientas ArcGIS, cubriendo flujos de trabajo en ArcGIS Online, ArcGIS Pro y ArcGIS Field Maps. Contenido orientado a usuarios que necesitan aplicar soluciones GIS paso a paso, desde la configuración inicial hasta la resolución de casos prácticos.',
    },
    {
      role: 'Coordinadora de GIS',
      company: 'Fundación Medioambiental de Ámbito Regional',
      period: 'Feb 2018 – Jun 2022',
      location: 'Höör, Suecia',
      description:
        'Desarrollar el uso de ArcGIS Pro y ArcGIS Online dentro de la organización, impartir formaciones internas y administrar la aplicación móvil ArcGIS Field Maps para su uso en equipo. Recopilar datos, realizar análisis y generar informes en ArcGIS Pro y ArcGIS Online sobre la ruta de senderismo regional en más de 30 ayuntamientos.',
    },
    {
      role: 'Coordinadora de Rutas de Senderismo',
      company: 'Fundación Medioambiental de Ámbito Regional',
      period: 'Ago 2016 – Jun 2022',
      location: 'Höör, Suecia',
      description:
        'Liderar el equipo de control de calidad en la ruta, con responsabilidades sobre el presupuesto y la selección de personal. Mantener una red de contactos con más de 30 ayuntamientos para garantizar el mantenimiento adecuado de la ruta. Impartir formaciones sobre los estándares de calidad de la ruta a los trabajadores de campo.',
    },
    {
      role: 'Doctoranda y Docente Universitaria',
      company: 'Lund University',
      period: 'Sep 2011 – Abr 2018',
      location: 'Suecia',
      description:
        'Investigar el proceso de creación de valor en los proyectos UUEE LEADER para el desarrollo del turismo rural. Planificar y realizar entrevistas con informantes clave para recopilar distintas perspectivas sobre el proceso, analizar datos cualitativos y presentar los resultados en forma de tesis doctoral. Docencia en estudios de grado y máster.',
    },
    {
      role: 'Coordinadora de Turismo',
      company: 'Ayuntamiento de Ystad',
      period: 'May 2007 – May 2009',
      location: 'Ystad, Suecia',
      description:
        'Liderar equipos de recepción en la ejecución de tareas en la oficina de turismo. Configuración y gestión de sistemas de reservas en línea. Ofrecer servicios de alta calidad a los turistas bajo presión.',
    },
  ],
  education: [
    {
      degree: 'Máster en Sistemas de Información Geográfica',
      institution: 'Folkuniversitetet Gävle, Suecia',
      period: '2020 – 2021',
    },
    {
      degree: 'Doctorado en Estudios de Servicios',
      institution: 'Lund University, Suecia',
      period: '2011 – 2018',
    },
    {
      degree: 'Máster en Gestión de Turismo y Hostelería',
      institution: 'Lund University, Suecia',
      period: '2009 – 2011',
    },
    {
      degree: 'Grado en Geografía Humana',
      institution: 'Lund University, Suecia',
      period: '2003 – 2007',
    },
  ],
  certificates: [
    { name: 'Despliegue básico de ArcGIS Enterprise (10 horas)', date: 'Mar 2026' },
    { name: 'Análisis de redes con Network Analyst en ArcGIS Pro (15 horas)', date: 'Nov 2025' },
    { name: 'Flujos de trabajo con ArcGIS Online (10 horas)', date: 'Oct 2025' },
  ],
  programmingCourses: [
    { name: 'Bootcamp: HTML, CSS, JS — Udemy', period: 'Ene 2025 – Mar 2025' },
    { name: 'Data Analytics: Python, SQL — W3School', period: 'Jun 2024 – Ago 2024' },
  ],
  techStack: {
    esri: [
      'ArcGIS Online', 'ArcGIS Pro', 'ArcGIS Enterprise', 'ArcGIS Location Platform',
      'ArcGIS Experience Builder', 'ArcGIS Experience Builder for Developers',
      'ArcGIS Field Maps', 'Network Analyst', 'ModelBuilder', 'ArcGIS for Power BI',
    ],
    development: [
      'HTML', 'CSS', 'JavaScript', 'Python', 'SQL',
      'React', 'ArcGIS Maps SDK for JavaScript', 'ArcGIS API for Python',
    ],
    tools: [
      'VS Code', 'GitHub', 'Vercel', 'Claude Code',
    ],
    other: [
      'Scrum', 'Análisis cualitativo de datos', 'Formación y divulgación técnica',
    ],
  },
  languages: [
    { name: 'Alemán', level: 'Nativo' },
    { name: 'Inglés', level: 'C1 — British Council' },
    { name: 'Español', level: 'C1 — Instituto Cervantes' },
    { name: 'Sueco', level: 'C2' },
  ],
  ui: {
    experience: 'Experiencia Laboral',
    education: 'Educación',
    certificates: 'Certificados de Cursos Esri',
    programmingCourses: 'Cursos de Programación',
    techStack: 'Habilidades Técnicas',
    techCategories: { esri: 'Plataformas Esri', development: 'Desarrollo', tools: 'Herramientas', other: 'Otros' },
    languages: 'Idiomas',
  },
}

export const data = { en, es }
export type Lang = keyof typeof data
