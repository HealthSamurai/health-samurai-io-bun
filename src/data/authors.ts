export interface AuthorData {
  name: string;
  title: string;
  bio: string;
  linkedin?: string;
  image: string;
}

const AUTHORS: Record<string, AuthorData> = {
  "Aleksandr Kislitsyn": {
    name: "Aleksandr Kislitsyn",
    title: "Software Engineer at Health Samurai",
    bio: "Aleksandr is a software engineer specializing in FHIR implementations and healthcare microservices architecture. He focuses on building scalable healthcare solutions using modern development practices.",
    linkedin: "https://www.linkedin.com/in/aleksandr-kislitsyn",
    image: "Александр Кислицын.jpg",
  },
  "Aleksandr Penskoi": {
    name: "Aleksandr Penskoi",
    title: "Data Engineer at Health Samurai",
    bio: "Aleksandr specializes in healthcare data platforms and FHIR SDK development. He works on building tools that make FHIR implementation more accessible to developers.",
    linkedin: "https://www.linkedin.com/in/aleksandr-penskoi",
    image: "Александр Пенской.jpg",
  },
  "Anastasia Demina": {
    name: "Anastasia Demina",
    title: "Healthcare Product Manager at Health Samurai",
    bio: "Anastasia is a product manager focusing on healthcare forms and user experience. She helps bridge clinical workflows with modern healthcare technology.",
    linkedin: "https://www.linkedin.com/in/anastasia-demina",
    image: "placeholder.jpg",
  },
  "Andrey Listopadov": {
    name: "Andrey Listopadov",
    title: "Software Developer at Health Samurai",
    bio: "Andrey is a software developer with expertise in healthcare IT systems and FHIR standards. He contributes to various open-source healthcare projects.",
    linkedin: "https://www.linkedin.com/in/andrey-listopadov",
    image: "Андрей Листопадов.jpg",
  },
  "Anthony J. Chan": {
    name: "Anthony J. Chan",
    title: "Healthcare Integration Consultant",
    bio: "Anthony is a healthcare integration consultant with experience in FHIR implementations and digital health solutions. He helps organizations navigate healthcare interoperability challenges.",
    linkedin: "https://www.linkedin.com/in/anthony-j-chan",
    image: "placeholder.jpg",
  },
  "Artem Alekseev": {
    name: "Artem Alekseev",
    title: "Integration Engineer at Health Samurai",
    bio: "Artem focuses on healthcare system integrations, including HL7 messaging and MLLP protocols. He helps healthcare organizations connect their systems seamlessly.",
    linkedin: "https://www.linkedin.com/in/artem-alekseev",
    image: "Артем Алексеев.jpeg",
  },
  "Artyom Bologov": {
    name: "Artyom Bologov",
    title: "UX Engineer at Health Samurai",
    bio: "Artyom specializes in user experience design and frontend development for healthcare applications. He focuses on making complex healthcare systems intuitive and user-friendly.",
    linkedin: "https://www.linkedin.com/in/artyom-bologov",
    image: "Артем Бологов.jpg",
  },
  "Daniil Chistoforov": {
    name: "Daniil Chistoforov",
    title: "Software Engineer at Health Samurai",
    bio: "Daniil is a software engineer working on FHIR-based healthcare solutions. He contributes to the development of scalable backend systems for digital health platforms.",
    linkedin: "https://www.linkedin.com/in/daniil-chistoforov",
    image: "Даниил Чистофоров.png",
  },
  "Evgeny Mukha": {
    name: "Evgeny Mukha",
    title: "FHIR Implementation Engineer at Health Samurai",
    bio: "Evgeny specializes in FHIR implementation guides and US Core profiles. He helps healthcare organizations implement standards-compliant FHIR APIs.",
    linkedin: "https://www.linkedin.com/in/evgeny-mukha",
    image: "placeholder.jpg",
  },
  "Gennady Razmakhnin": {
    name: "Gennady Razmakhnin",
    title: "FHIR Implementation Specialist at Health Samurai",
    bio: "Gennady specializes in FHIR implementation guides and healthcare standards. He helps organizations adopt FHIR and build compliant healthcare applications.",
    linkedin: "https://www.linkedin.com/in/gennady-razmakhnin",
    image: "Гена Алемский.jpeg",
  },
  "Grigory Nokhrin": {
    name: "Grigory Nokhrin",
    title: "Database Architect at Health Samurai",
    bio: "Grigory is a database architect specializing in FHIR-native databases and SQL on FHIR. He works on Fhirbase and contributes to the SQL on FHIR specification.",
    linkedin: "https://www.linkedin.com/in/grigory-nokhrin",
    image: "placeholder.jpg",
  },
  "Guillermo Rodríguez": {
    name: "Guillermo Rodríguez",
    title: "Healthcare Technology Consultant",
    bio: "Guillermo is a healthcare technology consultant specializing in FHIR implementations and interoperability solutions.",
    linkedin: "https://www.linkedin.com/in/guillermo-rodriguez",
    image: "placeholder.jpg",
  },
  "Health Samurai Team": {
    name: "Health Samurai Team",
    title: "Healthcare Technology Experts",
    bio: "The Health Samurai team consists of healthcare technology experts, FHIR specialists, and software engineers dedicated to building innovative healthcare solutions. Together, we contribute to advancing healthcare interoperability.",
    linkedin: "https://www.linkedin.com/company/health-samurai",
    image: "placeholder.jpg",
  },
  "Ilya Beda": {
    name: "Ilya Beda",
    title: "CTO at Beda Software",
    bio: "Ilya is the CTO of Beda Software, specializing in healthcare technology solutions and FHIR implementations.",
    linkedin: "https://www.linkedin.com/in/ilya-beda",
    image: "placeholder.jpg",
  },
  "Ivan Bagrov": {
    name: "Ivan Bagrov",
    title: "Senior Software Engineer at Health Samurai",
    bio: "Ivan is a senior software engineer with deep expertise in FHIR profiling and healthcare data standards. He works on complex healthcare interoperability challenges.",
    linkedin: "https://www.linkedin.com/in/ivan-bagrov",
    image: "Ваня Багров.png",
  },
  "Marat Surmashev": {
    name: "Marat Surmashev",
    title: "Software Engineer at Health Samurai",
    bio: "Marat is a software engineer working on healthcare APIs and FHIR implementations. He focuses on building reliable and performant healthcare systems.",
    linkedin: "https://www.linkedin.com/in/marat-surmashev",
    image: "placeholder.jpg",
  },
  "Maria Ryzhikova": {
    name: "Maria Ryzhikova",
    title: "Healthcare UX Designer at Health Samurai",
    bio: "Maria is a UX designer specializing in healthcare applications. She focuses on creating intuitive interfaces for complex medical workflows and FHIR-based systems.",
    linkedin: "https://www.linkedin.com/in/maria-ryzhikova",
    image: "placeholder.jpg",
  },
  "Max Putintsev": {
    name: "Max Putintsev",
    title: "Software Engineer at Health Samurai",
    bio: "Max is a software engineer specializing in FHIR subscriptions and real-time healthcare data processing.",
    linkedin: "https://www.linkedin.com/in/max-putintsev",
    image: "placeholder.jpg",
  },
  "Mike K.": {
    name: "Mike K.",
    title: "Security Specialist at Health Samurai",
    bio: "Mike is a security specialist focusing on HIPAA compliance and healthcare security. He works on implementing security best practices for healthcare applications.",
    linkedin: "https://www.linkedin.com/in/mike-k",
    image: "placeholder.jpg",
  },
  "Mike Kulakov": {
    name: "Mike Kulakov",
    title: "Security and Compliance Specialist at Health Samurai",
    bio: "Mike specializes in healthcare security, audit logging, and compliance. He works on building HIPAA-compliant audit systems and security features for healthcare platforms.",
    linkedin: "https://www.linkedin.com/in/mike-kulakov",
    image: "placeholder.jpg",
  },
  "Mike Lapshin": {
    name: "Mike Lapshin",
    title: "DevOps Engineer at Health Samurai",
    bio: "Mike is a DevOps engineer specializing in healthcare infrastructure and cloud deployments. He ensures the reliability and scalability of FHIR platforms.",
    linkedin: "https://www.linkedin.com/in/mike-lapshin",
    image: "placeholder.jpg",
  },
  "Mike Ryzhikov": {
    name: "Mike Ryzhikov",
    title: "Technical Product Manager at Health Samurai",
    bio: "Mike is a technical product manager focusing on healthcare APIs and FHIR standards. He bridges the gap between technical implementation and business requirements.",
    linkedin: "https://www.linkedin.com/in/mike-ryzhikov",
    image: "Миша Рыжиков.jpg",
  },
  "Nikolai Ryzhikov": {
    name: "Nikolai Ryzhikov",
    title: "CTO and Co-founder at Health Samurai",
    bio: "Nikolai is the CTO and co-founder of Health Samurai. He leads the technical vision for Aidbox and contributes to FHIR standards development. His expertise spans healthcare interoperability, database architecture, and distributed systems.",
    linkedin: "https://www.linkedin.com/in/nikolai-ryzhikov",
    image: "Николай Рыжиков.jpg",
  },
  "Niquola Ryzhikov": {
    name: "Niquola Ryzhikov",
    title: "CTO and Co-founder at Health Samurai",
    bio: "Niquola is the CTO and co-founder of Health Samurai. He leads the technical vision for Aidbox and contributes to FHIR standards development. His expertise spans healthcare interoperability, database architecture, and distributed systems.",
    linkedin: "https://www.linkedin.com/in/nikolai-ryzhikov",
    image: "Николай Рыжиков.jpg",
  },
  "Olim Saidov": {
    name: "Olim Saidov",
    title: "Healthcare Forms Specialist at Health Samurai",
    bio: "Olim specializes in building medical forms and FHIR SDC implementations. He helps healthcare organizations digitize their paper forms and integrate them into EHR workflows.",
    linkedin: "https://www.linkedin.com/in/olim-saidov",
    image: "Олим Саидов.jpg",
  },
  "Orlando Osorio": {
    name: "Orlando Osorio",
    title: "Software Engineer",
    bio: "Orlando is a software engineer with experience in healthcare technology and FHIR implementations.",
    linkedin: "https://www.linkedin.com/in/orlando-osorio",
    image: "placeholder.jpg",
  },
  "Paul Chayka": {
    name: "Paul Chayka",
    title: "Healthcare Solutions Architect at WaveAccess",
    bio: "Paul is a healthcare solutions architect at WaveAccess, specializing in enterprise healthcare integrations.",
    linkedin: "https://www.linkedin.com/in/paul-chayka",
    image: "placeholder.jpg",
  },
  "Pavel Smirnov": {
    name: "Pavel Smirnov",
    title: "Healthcare Solutions Architect at Health Samurai",
    bio: "Pavel is a healthcare solutions architect with extensive experience in FHIR implementations and EHR integrations. He helps organizations design and build compliant healthcare systems.",
    linkedin: "https://www.linkedin.com/in/pavel-smirnov",
    image: "placeholder.jpg",
  },
  "Pavel Suverov": {
    name: "Pavel Suverov",
    title: "Data Engineer at Health Samurai",
    bio: "Pavel is a data engineer specializing in healthcare data systems, master patient index, and record linkage algorithms.",
    linkedin: "https://www.linkedin.com/in/pavel-suverov",
    image: "placeholder.jpg",
  },
  "Rostislav Antonov": {
    name: "Rostislav Antonov",
    title: "Software Engineer at Health Samurai",
    bio: "Rostislav is a software engineer working on FHIR backend systems and healthcare APIs. He focuses on performance optimization and scalability.",
    linkedin: "https://www.linkedin.com/in/rostislav-antonov",
    image: "Ростик Антонов.jpg",
  },
  "Stas Buldakov": {
    name: "Stas Buldakov",
    title: "Software Engineer at Health Samurai",
    bio: "Stas is a software engineer specializing in healthcare application development and FHIR implementations. He works on building robust healthcare systems.",
    linkedin: "https://www.linkedin.com/in/stas-buldakov",
    image: "Стас Булдаков.jpeg",
  },
  "Svetlana Golubeva": {
    name: "Svetlana Golubeva",
    title: "Healthcare Technology Writer at Health Samurai",
    bio: "Svetlana is a healthcare technology writer and content strategist. She translates complex FHIR concepts into accessible content for developers and healthcare professionals.",
    linkedin: "https://www.linkedin.com/in/svetlana-golubeva",
    image: "Света Голубева.jpeg",
  },
  "Vasiliy Kupriakov": {
    name: "Vasiliy Kupriakov",
    title: "FHIR Engineer at Health Samurai",
    bio: "Vasiliy is a FHIR engineer with expertise in custom resource definitions and FHIR extensions.",
    linkedin: "https://www.linkedin.com/in/vasiliy-kupriakov",
    image: "placeholder.jpg",
  },
  "Viktor Gusakov": {
    name: "Viktor Gusakov",
    title: "Integration Engineer at Health Samurai",
    bio: "Viktor specializes in healthcare integration protocols, HL7v2, and MLLP messaging systems.",
    linkedin: "https://www.linkedin.com/in/viktor-gusakov",
    image: "placeholder.jpg",
  },
  "Vlad Ganshin": {
    name: "Vlad Ganshin",
    title: "Solutions Architect at Health Samurai",
    bio: "Vlad is a solutions architect specializing in multi-tenant FHIR systems and healthcare platform design. He helps organizations build scalable healthcare infrastructure.",
    linkedin: "https://www.linkedin.com/in/vlad-ganshin",
    image: "placeholder.jpg",
  },
  "Vlad Zholnerchuk": {
    name: "Vlad Zholnerchuk",
    title: "Security Engineer at Health Samurai",
    bio: "Vlad is a security engineer specializing in healthcare security and compliance. He works on implementing HIPAA-compliant systems and security best practices for FHIR platforms.",
    linkedin: "https://www.linkedin.com/in/vlad-zholnerchuk",
    image: "Владислав Жолнерчук.jpeg",
  },
};

export function getAuthorData(authorName: string): AuthorData | null {
  return AUTHORS[authorName] || null;
}

export function getAuthorImage(authorName: string): string {
  const author = getAuthorData(authorName);
  if (!author?.image || author.image === "placeholder.jpg") return "";
  return `https://storage.googleapis.com/samurai-public/Photo%20for%20KB/${encodeURIComponent(author.image)}`;
}

// For backward compatibility
export function loadAuthors(): Map<string, AuthorData> {
  const map = new Map<string, AuthorData>();
  for (const [name, data] of Object.entries(AUTHORS)) {
    map.set(name, data);
  }
  return map;
}
