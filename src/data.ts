export type Experience = {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}

export type Education = {
  degree: string
  institution: string
  year: string
}

export type Certificate = {
  name: string
  year: string
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
    linkedin: string
    summary: string
  }
  experience: Experience[]
  education: Education[]
  certificates: Certificate[]
  techStack: string[]
  languages: Language[]
  ui: {
    experience: string
    education: string
    certificates: string
    techStack: string
    languages: string
  }
}

const en: CVData = {
  profile: {
    name: 'Jane Doe',
    title: 'ArcGIS Solution Engineer',
    email: 'jane.doe@email.com',
    phone: '+1 234 567 8900',
    location: 'City, Country',
    linkedin: 'linkedin.com/in/janedoe',
    summary:
      'Solution Engineer with X years of experience delivering geospatial solutions using the Esri ArcGIS platform. Passionate about translating complex business requirements into scalable GIS architectures.',
  },
  experience: [
    {
      role: 'Solution Engineer',
      company: 'Company Name',
      period: 'Jan 2022 – Present',
      location: 'City, Country',
      bullets: [
        'Designed and implemented ArcGIS Enterprise solutions for enterprise clients.',
        'Delivered technical pre-sales demonstrations and proof-of-concept workflows.',
        'Collaborated with cross-functional teams to define spatial data strategies.',
      ],
    },
    {
      role: 'GIS Analyst',
      company: 'Previous Company',
      period: 'Jun 2019 – Dec 2021',
      location: 'City, Country',
      bullets: [
        'Developed ArcGIS Pro models and Python scripts to automate spatial workflows.',
        'Maintained and administered ArcGIS Online organisational accounts.',
        'Produced cartographic outputs and dashboards for stakeholder reporting.',
      ],
    },
  ],
  education: [
    {
      degree: 'MSc Geographic Information Science',
      institution: 'University Name',
      year: '2019',
    },
    {
      degree: 'BSc Geography',
      institution: 'University Name',
      year: '2017',
    },
  ],
  certificates: [
    { name: 'Esri Technical Certification — ArcGIS Desktop Entry', year: '2023' },
    { name: 'Esri Technical Certification — ArcGIS Desktop Associate', year: '2022' },
    { name: 'Esri Technical Certification — ArcGIS Enterprise Administration Associate', year: '2021' },
  ],
  techStack: [
    'ArcGIS Pro', 'ArcGIS Enterprise', 'ArcGIS Online', 'ArcGIS Experience Builder',
    'ArcGIS Dashboards', 'ArcGIS StoryMaps', 'ArcGIS API for Python', 'ArcGIS JS API',
    'ArcPy', 'PostgreSQL / PostGIS', 'Python', 'JavaScript / TypeScript', 'React', 'Git', 'Docker',
  ],
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Spanish', level: 'Native' },
    { name: 'French', level: 'Intermediate' },
  ],
  ui: {
    experience: 'Work Experience',
    education: 'Education',
    certificates: 'Esri Certifications',
    techStack: 'Tech Stack',
    languages: 'Languages',
  },
}

const es: CVData = {
  profile: {
    name: 'Jane Doe',
    title: 'Ingeniera de Soluciones ArcGIS',
    email: 'jane.doe@email.com',
    phone: '+1 234 567 8900',
    location: 'Ciudad, País',
    linkedin: 'linkedin.com/in/janedoe',
    summary:
      'Ingeniera de Soluciones con X años de experiencia implementando soluciones geoespaciales con la plataforma Esri ArcGIS. Apasionada por transformar requisitos empresariales complejos en arquitecturas GIS escalables.',
  },
  experience: [
    {
      role: 'Ingeniera de Soluciones',
      company: 'Nombre de la empresa',
      period: 'Ene 2022 – Presente',
      location: 'Ciudad, País',
      bullets: [
        'Diseñó e implementó soluciones ArcGIS Enterprise para clientes corporativos.',
        'Realizó demostraciones técnicas de preventa y flujos de trabajo de prueba de concepto.',
        'Colaboró con equipos multidisciplinares para definir estrategias de datos espaciales.',
      ],
    },
    {
      role: 'Analista GIS',
      company: 'Empresa anterior',
      period: 'Jun 2019 – Dic 2021',
      location: 'Ciudad, País',
      bullets: [
        'Desarrolló modelos en ArcGIS Pro y scripts en Python para automatizar flujos de trabajo espaciales.',
        'Administró cuentas organizativas de ArcGIS Online.',
        'Elaboró productos cartográficos y paneles de control para la presentación de informes.',
      ],
    },
  ],
  education: [
    {
      degree: 'Máster en Ciencias de la Información Geográfica',
      institution: 'Universidad',
      year: '2019',
    },
    {
      degree: 'Grado en Geografía',
      institution: 'Universidad',
      year: '2017',
    },
  ],
  certificates: [
    { name: 'Certificación Técnica Esri — ArcGIS Desktop Entry', year: '2023' },
    { name: 'Certificación Técnica Esri — ArcGIS Desktop Associate', year: '2022' },
    { name: 'Certificación Técnica Esri — ArcGIS Enterprise Administration Associate', year: '2021' },
  ],
  techStack: [
    'ArcGIS Pro', 'ArcGIS Enterprise', 'ArcGIS Online', 'ArcGIS Experience Builder',
    'ArcGIS Dashboards', 'ArcGIS StoryMaps', 'ArcGIS API for Python', 'ArcGIS JS API',
    'ArcPy', 'PostgreSQL / PostGIS', 'Python', 'JavaScript / TypeScript', 'React', 'Git', 'Docker',
  ],
  languages: [
    { name: 'Inglés', level: 'Fluido' },
    { name: 'Español', level: 'Nativo' },
    { name: 'Francés', level: 'Intermedio' },
  ],
  ui: {
    experience: 'Experiencia Laboral',
    education: 'Educación',
    certificates: 'Certificaciones Esri',
    techStack: 'Tecnologías',
    languages: 'Idiomas',
  },
}

export const data = { en, es }
export type Lang = keyof typeof data
