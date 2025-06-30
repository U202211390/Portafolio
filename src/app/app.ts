import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  title = 'Alexander Castillo - Portfolio';
  
  // Propiedades PÚBLICAS para navegación y estado
  currentSection: string = 'hero';
  menuOpen: boolean = false;
  darkMode: boolean = false;
  selectedProject: any = null;
  selectedCategory: string = 'all';
  selectedProjectCategory: string = 'all';
  currentLanguage: string = 'es';

  // SISTEMA DE INTERNACIONALIZACIÓN MEJORADO
  texts: { [key: string]: { [key: string]: string } } = {
    es: {
      // Navegación
      'nav.home': 'Inicio',
      'nav.profile': 'Mi Perfil',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
      'theme.toggle': 'Cambiar tema',
      
      // Hero Section
      'hero.title': 'Ingeniero de Software',
      'hero.description': 'Especialista en desarrollo Full-Stack con experiencia en microservicios, arquitecturas enterprise y tecnologías modernas. Enfocado en crear soluciones robustas y escalables.',
      'hero.btn.projects': 'Ver Proyectos',
      'hero.btn.cv': 'Descargar CV',
      
      // Perfil
      'profile.title': 'Mi Perfil',
      'profile.subtitle': 'Roles y especialidades profesionales',
      
      // Proyectos
      'projects.title': 'Proyectos',
      'projects.subtitle': 'Portafolio completo de sistemas reales implementados',
      'projects.architectures': 'Arquitecturas',
      'projects.patterns': 'Patrones',
      'projects.all': 'Todos',
      'projects.full-stack': 'Full-Stack',
      'projects.backend': 'Backend',
      'projects.microservices': 'Microservicios',
      'projects.iot': 'IoT',
      'projects.data': 'Datos',
      'projects.frontend': 'Frontend',
      'projects.back': 'Volver a Proyectos',
      
      // Project Detail
      'project.gallery': 'Galería Visual',
      'project.description': 'Descripción Detallada',
      'project.features': 'Características Principales',
      'project.technologies': 'Stack Tecnológico',
      'project.architecture': 'Arquitecturas',
      'project.patterns': 'Patrones de Diseño',
      'project.viewCode': 'Ver Código',
      'project.liveDemo': 'Demo en Vivo',
      'project.contact': 'Consultar Proyecto',
      
      // Store
      'store.title': 'Tienda',
      'store.subtitle': 'Software y hardware especializado',
      'store.all': 'Todos',
      'store.software': 'Software',
      'store.hardware': 'Hardware',
      'store.quote': 'Cotizar',
      
      // Contacto
      'contact.title': 'Contacto',
      'contact.subtitle': 'Conectemos y trabajemos juntos',
      'contact.location': 'Ubicación',
      'contact.phone': 'Teléfono',
      'contact.email': 'Email',
      'contact.linkedin': 'LinkedIn',
      'contact.form.name': 'Nombre completo',
      'contact.form.email': 'Email',
      'contact.form.message': 'Mensaje',
      'contact.form.send': 'Enviar Mensaje',
      
      // Mensajes
      'message.sent': '¡Mensaje Enviado!',
      'downloading': 'Descargando...',
      'downloaded': 'Descargado ✓'
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.profile': 'My Profile',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'theme.toggle': 'Toggle theme',
      
      // Hero Section
      'hero.title': 'Software Engineer',
      'hero.description': 'Full-Stack development specialist with experience in microservices, enterprise architectures and modern technologies. Focused on creating robust and scalable solutions.',
      'hero.btn.projects': 'View Projects',
      'hero.btn.cv': 'Download CV',
      
      // Profile
      'profile.title': 'My Profile',
      'profile.subtitle': 'Professional roles and specialties',
      
      // Projects
      'projects.title': 'Projects',
      'projects.subtitle': 'Complete portfolio of real implemented systems',
      'projects.architectures': 'Architectures',
      'projects.patterns': 'Patterns',
      'projects.all': 'All',
      'projects.full-stack': 'Full-Stack',
      'projects.backend': 'Backend',
      'projects.microservices': 'Microservices',
      'projects.iot': 'IoT',
      'projects.data': 'Data',
      'projects.frontend': 'Frontend',
      'projects.back': 'Back to Projects',
      
      // Project Detail
      'project.gallery': 'Visual Gallery',
      'project.description': 'Detailed Description',
      'project.features': 'Key Features',
      'project.technologies': 'Tech Stack',
      'project.architecture': 'Architectures',
      'project.patterns': 'Design Patterns',
      'project.viewCode': 'View Code',
      'project.liveDemo': 'Live Demo',
      'project.contact': 'Consult Project',
      
      // Store
      'store.title': 'Store',
      'store.subtitle': 'Specialized software and hardware',
      'store.all': 'All',
      'store.software': 'Software',
      'store.hardware': 'Hardware',
      'store.quote': 'Quote',
      
      // Contact
      'contact.title': 'Contact',
      'contact.subtitle': 'Let\'s connect and work together',
      'contact.location': 'Location',
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'contact.linkedin': 'LinkedIn',
      'contact.form.name': 'Full name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.send': 'Send Message',
      
      // Messages
      'message.sent': 'Message Sent!',
      'downloading': 'Downloading...',
      'downloaded': 'Downloaded ✓'
    }
  };

  // Datos del perfil
  profileData = {
    name: 'Alexander',
    lastName: 'Castillo',
    title: 'Ingeniero de Software',
    description: 'Especialista en desarrollo Full-Stack con experiencia en microservicios, arquitecturas enterprise y tecnologías modernas. Enfocado en crear soluciones robustas y escalables.',
    location: 'Lima, Perú',
    phone: '(+51) 965 181 546',
    email: 'jaircastillo2502@gmail.com'
  };

  // Roles profesionales bilingües
  private perfilRolesData = {
    es: [
      {
        icon: 'fas fa-microchip',
        title: 'Arquitecto de Microservicios',
        description: 'Diseño e implementación de arquitecturas distribuidas con Spring Cloud, Docker y API Gateway',
        skills: ['Spring Cloud', 'Microservicios', 'Docker', 'Kubernetes', 'API Gateway']
      },
      {
        icon: 'fas fa-code',
        title: 'Desarrollador Full-Stack',
        description: 'Desarrollo completo desde backend con Java/Node.js hasta frontend con Angular/React',
        skills: ['Java', 'Spring Boot', 'Angular', 'React', 'TypeScript']
      },
      {
        icon: 'fas fa-database',
        title: 'Especialista en Datos',
        description: 'Gestión de bases de datos, cache con Redis, y procesamiento de datos a gran escala',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ETL', 'Data Pipeline']
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'DevOps & Seguridad',
        description: 'Implementación de CI/CD, containerización y sistemas de autenticación robustos',
        skills: ['Docker', 'JWT', 'Spring Security', 'CI/CD', 'Monitoring']
      },
      {
        icon: 'fas fa-robot',
        title: 'Bot IA & Machine Learning',
        description: 'Desarrollo de chatbots inteligentes con IA, procesamiento de lenguaje natural y algoritmos ML',
        skills: ['Python', 'TensorFlow', 'NLP', 'Chatbots', 'Machine Learning']
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Desarrollo Móvil',
        description: 'Aplicaciones nativas y cross-platform con Flutter, React Native y PWAs optimizadas',
        skills: ['Flutter', 'React Native', 'Dart', 'PWA', 'Mobile UI/UX']
      }
    ],
    en: [
      {
        icon: 'fas fa-microchip',
        title: 'Microservices Architect',
        description: 'Design and implementation of distributed architectures with Spring Cloud, Docker and API Gateway',
        skills: ['Spring Cloud', 'Microservices', 'Docker', 'Kubernetes', 'API Gateway']
      },
      {
        icon: 'fas fa-code',
        title: 'Full-Stack Developer',
        description: 'Complete development from backend with Java/Node.js to frontend with Angular/React',
        skills: ['Java', 'Spring Boot', 'Angular', 'React', 'TypeScript']
      },
      {
        icon: 'fas fa-database',
        title: 'Data Specialist',
        description: 'Database management, Redis caching, and large-scale data processing',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ETL', 'Data Pipeline']
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'DevOps & Security',
        description: 'CI/CD implementation, containerization and robust authentication systems',
        skills: ['Docker', 'JWT', 'Spring Security', 'CI/CD', 'Monitoring']
      },
      {
        icon: 'fas fa-robot',
        title: 'AI Bot & Machine Learning',
        description: 'Development of intelligent chatbots with AI, natural language processing and ML algorithms',
        skills: ['Python', 'TensorFlow', 'NLP', 'Chatbots', 'Machine Learning']
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Development',
        description: 'Native and cross-platform applications with Flutter, React Native and optimized PWAs',
        skills: ['Flutter', 'React Native', 'Dart', 'PWA', 'Mobile UI/UX']
      }
    ]
  };

  // Getter para roles según idioma actual
  get perfilRoles() {
    return this.perfilRolesData[this.currentLanguage as 'es' | 'en'] || this.perfilRolesData.es;
  }

  // TODOS LOS PROYECTOS REALES DEL USUARIO (BILINGÜE)
  proyectos = [
    {
      id: 1,
      title: 'Call Center Connect',
      description: {
        es: 'Sistema completo de atención al cliente con arquitectura distribuida',
        en: 'Complete customer service system with distributed architecture'
      },
      image: '💬',
      category: 'full-stack',
      tech: ['Node.js', 'TypeScript', 'React', 'Electron', 'Socket.IO', 'Redis', 'Docker'],
      details: {
        es: 'Sistema enterprise de call center con comunicación en tiempo real, arquitectura DDD, API Gateway y aplicación desktop con Electron.',
        en: 'Enterprise call center system with real-time communication, DDD architecture, API Gateway and desktop application with Electron.'
      },
      features: {
        es: [
          'Arquitectura DDD (Domain-Driven Design) completa',
          'API Gateway con rate limiting y JWT',
          'Comunicación real-time con Socket.IO',
          'Aplicación desktop con Electron',
          'Cache distribuido con Redis',
          'Microservicios containerizados',
          'Testing con Jest y Artillery',
          'Logging estructurado con Winston'
        ],
        en: [
          'Complete DDD (Domain-Driven Design) architecture',
          'API Gateway with rate limiting and JWT',
          'Real-time communication with Socket.IO',
          'Desktop application with Electron',
          'Distributed cache with Redis',
          'Containerized microservices',
          'Testing with Jest and Artillery',
          'Structured logging with Winston'
        ]
      },
      architectures: ['Clean Architecture', 'Event-Driven', 'Microservices'],
      patterns: ['Repository', 'CQRS', 'Producer-Consumer', 'API Gateway']
    },
    {
      id: 2,
      title: 'KiwiPay Loan Backend',
      description: {
        es: 'Sistema financiero robusto con Spring Boot y arquitectura hexagonal',
        en: 'Robust financial system with Spring Boot and hexagonal architecture'
      },
      image: '💰',
      category: 'backend',
      tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'MapStruct', 'Docker', 'Gradle'],
      details: {
        es: 'Plataforma financiera enterprise con procesamiento de préstamos, cálculos complejos y seguridad bancaria.',
        en: 'Enterprise financial platform with loan processing, complex calculations and banking security.'
      },
      features: {
        es: [
          'Arquitectura Hexagonal (Ports & Adapters)',
          'Spring Security con JWT y BCrypt',
          'Migraciones con Flyway',
          'Cache L2 con Caffeine',
          'Rate limiting con Bucket4j',
          'Testing con Testcontainers',
          'Documentación OpenAPI 3.0',
          'Procesamiento Excel con Apache POI'
        ],
        en: [
          'Hexagonal Architecture (Ports & Adapters)',
          'Spring Security with JWT and BCrypt',
          'Migrations with Flyway',
          'L2 Cache with Caffeine',
          'Rate limiting with Bucket4j',
          'Testing with Testcontainers',
          'OpenAPI 3.0 documentation',
          'Excel processing with Apache POI'
        ]
      },
      architectures: ['Hexagonal Architecture', 'Layered Architecture'],
      patterns: ['Repository', 'DTO', 'Factory', 'Strategy', 'Observer']
    },
    {
      id: 3,
      title: 'Microservicios AventuraPe',
      description: {
        es: 'Ecosistema de microservicios para turismo con Spring Cloud',
        en: 'Tourism microservices ecosystem with Spring Cloud'
      },
      image: '🏔️',
      category: 'microservices',
      tech: ['Spring Boot', 'Spring Cloud', 'Eureka', 'Gateway', 'PostgreSQL', 'JWT'],
      details: {
        es: 'Arquitectura completa de microservicios con service discovery, configuration management y circuit breaker.',
        en: 'Complete microservices architecture with service discovery, configuration management and circuit breaker.'
      },
      features: {
        es: [
          'Service Discovery con Eureka',
          'Configuration Management centralizado',
          'API Gateway con Spring Cloud Gateway',
          'Circuit Breaker para tolerancia a fallos',
          'Servicios independientes (IAM, Posts, Profiles)',
          'Documentación OpenAPI integrada',
          'Actuator endpoints para monitoreo',
          'Multi-módulo Maven optimizado'
        ],
        en: [
          'Service Discovery with Eureka',
          'Centralized Configuration Management',
          'API Gateway with Spring Cloud Gateway',
          'Circuit Breaker for fault tolerance',
          'Independent services (IAM, Posts, Profiles)',
          'Integrated OpenAPI documentation',
          'Actuator endpoints for monitoring',
          'Optimized multi-module Maven'
        ]
      },
      architectures: ['Microservices', 'Service-Oriented Architecture'],
      patterns: ['Service Discovery', 'API Gateway', 'Circuit Breaker', 'Config Management']
    },
    {
      id: 4,
      title: 'BonoFácil Platform',
      description: {
        es: 'Plataforma financiera híbrida Angular + Spring Boot',
        en: 'Hybrid financial platform Angular + Spring Boot'
      },
      image: '📊',
      category: 'full-stack',
      tech: ['Angular 20', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'RxJS'],
      details: {
        es: 'Sistema de gestión de bonos con arquitectura híbrida que funciona online/offline con fallbacks inteligentes.',
        en: 'Bond management system with hybrid architecture that works online/offline with intelligent fallbacks.'
      },
      features: {
        es: [
          'Sistema híbrido online/offline',
          'Fallback inteligente a datos simulados',
          'Calculadora financiera (TREA, flujo de caja)',
          'Interceptores JWT automáticos',
          'Role-based access (EMISOR, INVERSOR, ADMIN)',
          'UI responsive y moderna',
          'Gestión dual: localStorage + backend',
          'Error handling centralizado'
        ],
        en: [
          'Hybrid online/offline system',
          'Intelligent fallback to simulated data',
          'Financial calculator (TREA, cash flow)',
          'Automatic JWT interceptors',
          'Role-based access (ISSUER, INVESTOR, ADMIN)',
          'Responsive and modern UI',
          'Dual management: localStorage + backend',
          'Centralized error handling'
        ]
      },
      architectures: ['Hexagonal Architecture', 'Component-based'],
      patterns: ['Repository', 'Guard', 'Interceptor', 'Observer', 'Command']
    },
    {
      id: 5,
      title: 'AquaSense IoT Smart Tank',
      description: {
        es: 'Sistema IoT inteligente para monitoreo de tanques de agua',
        en: 'Smart IoT system for water tank monitoring'
      },
      image: '🌊',
      category: 'iot',
      tech: ['C++', 'ESP32', 'Arduino', 'WiFi', 'Sensores', 'JSON'],
      details: {
        es: 'Sistema IoT completo con sensores ultrasónicos, control automático de válvulas y comunicación cloud.',
        en: 'Complete IoT system with ultrasonic sensors, automatic valve control and cloud communication.'
      },
      features: {
        es: [
          'Monitoreo automático de nivel de agua',
          'Control inteligente de válvulas',
          'Conectividad IoT con upload cloud',
          'Sistema de auto-diagnóstico',
          'Failsafe mechanisms automáticos',
          'LED status indicators',
          'Watchdog patterns',
          'Memory management optimizado'
        ],
        en: [
          'Automatic water level monitoring',
          'Smart valve control',
          'IoT connectivity with cloud upload',
          'Self-diagnostic system',
          'Automatic failsafe mechanisms',
          'LED status indicators',
          'Watchdog patterns',
          'Optimized memory management'
        ]
      },
      architectures: ['Component-based', 'Event-driven', 'State Machine'],
      patterns: ['Observer', 'Command', 'State Machine', 'Component']
    },
    {
      id: 6,
      title: 'Tavolo Restaurant IoT',
      description: {
        es: 'Gestión de restaurantes con sensores IoT y reservas inteligentes',
        en: 'Restaurant management with IoT sensors and smart reservations'
      },
      image: '🍽️',
      category: 'iot',
      tech: ['Spring Boot', 'PostgreSQL', 'Docker', 'IoT Sensors', 'JWT'],
      details: {
        es: 'Sistema de gestión para restaurantes con integración IoT para reservas de mesas y control automático.',
        en: 'Restaurant management system with IoT integration for table reservations and automatic control.'
      },
      features: {
        es: [
          'Reservas inteligentes con sensores IoT',
          'Multi-stage Docker build optimizado',
          'Environment variables para deploy cloud',
          'JWT security stateless',
          'API documentation con OpenAPI',
          'Cloud-ready (Heroku/Railway)',
          'Maven optimization avanzada',
          'Health checks integrados'
        ],
        en: [
          'Smart reservations with IoT sensors',
          'Optimized multi-stage Docker build',
          'Environment variables for cloud deploy',
          'Stateless JWT security',
          'API documentation with OpenAPI',
          'Cloud-ready (Heroku/Railway)',
          'Advanced Maven optimization',
          'Integrated health checks'
        ]
      },
      architectures: ['Clean Architecture', 'Layered'],
      patterns: ['Repository', 'Service Layer', 'DTO', 'Dependency Injection']
    },
    {
      id: 7,
      title: 'Redis Data Pipeline',
      description: {
        es: 'Sistema distribuido de procesamiento de datos multi-lenguaje',
        en: 'Multi-language distributed data processing system'
      },
      image: '🔄',
      category: 'data',
      tech: ['Java', 'Python', 'Redis', 'Jedis', 'Faker', 'Gson'],
      details: {
        es: 'Pipeline de datos robusto con Python como producer y Java como consumer, usando Redis como broker.',
        en: 'Robust data pipeline with Python as producer and Java as consumer, using Redis as broker.'
      },
      features: {
        es: [
          'Integración multi-lenguaje (Java + Python)',
          'Producer-Consumer pattern con Redis',
          'Connection pooling y timeout handling',
          'Retry mechanisms automáticos',
          'Data validation e integridad',
          'Health checks y métricas',
          'Logging estructurado con emojis',
          'Error recovery automático'
        ],
        en: [
          'Multi-language integration (Java + Python)',
          'Producer-Consumer pattern with Redis',
          'Connection pooling and timeout handling',
          'Automatic retry mechanisms',
          'Data validation and integrity',
          'Health checks and metrics',
          'Structured logging with emojis',
          'Automatic error recovery'
        ]
      },
      architectures: ['Producer-Consumer', 'Data Pipeline'],
      patterns: ['Producer-Consumer', 'Caching', 'ETL', 'Error Handling']
    },
    {
      id: 8,
      title: 'Kiwi API Backend',
      description: {
        es: 'API principal con integración de servicios externos',
        en: 'Main API with external services integration'
      },
      image: '🥝',
      category: 'backend',
      tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Twilio', 'SendGrid', 'Cloudinary'],
      details: {
        es: 'Backend principal con integración completa de servicios externos, validación robusta y documentación automática.',
        en: 'Main backend with complete external services integration, robust validation and automatic documentation.'
      },
      features: {
        es: [
          'Integración Twilio (SMS), SendGrid (Email)',
          'Upload de imágenes con Cloudinary',
          'Validación con Zod schemas',
          'Swagger automático desde JSDoc',
          'Path aliasing con module-alias',
          'Scripts de automatización DB',
          'File processing con node-xlsx',
          'CORS y seguridad configurada'
        ],
        en: [
          'Twilio (SMS), SendGrid (Email) integration',
          'Image upload with Cloudinary',
          'Validation with Zod schemas',
          'Automatic Swagger from JSDoc',
          'Path aliasing with module-alias',
          'DB automation scripts',
          'File processing with node-xlsx',
          'Configured CORS and security'
        ]
      },
      architectures: ['Layered Architecture', 'Module Pattern'],
      patterns: ['Factory', 'Singleton', 'Middleware', 'Module']
    },
    {
      id: 9,
      title: 'UrbanPass',
      description: {
        es: 'Plataforma de eventos culturales independientes con funcionalidades sociales',
        en: 'Independent cultural events platform with social functionalities'
      },
      image: '🎭',
      category: 'full-stack',
      tech: ['Java', 'Spring Boot', 'MongoDB', 'Docker', 'REST API', 'JavaScript', 'HTML/CSS'],
      details: {
        es: 'Plataforma completa para la gestión y promoción de eventos culturales independientes con sistema de networking social.',
        en: 'Complete platform for managing and promoting independent cultural events with social networking system.'
      },
      features: {
        es: [
          'Sistema de gestión de eventos culturales',
          'Funcionalidades sociales y networking',
          'Backend robusto con Spring Boot',
          'Base de datos NoSQL con MongoDB',
          'API REST para integración móvil',
          'Frontend interactivo con JavaScript',
          'Containerización con Docker',
          'Interfaz responsive HTML/CSS'
        ],
        en: [
          'Cultural events management system',
          'Social functionalities and networking',
          'Robust backend with Spring Boot',
          'NoSQL database with MongoDB',
          'REST API for mobile integration',
          'Interactive frontend with JavaScript',
          'Containerization with Docker',
          'Responsive HTML/CSS interface'
        ]
      },
      architectures: ['MVC', 'REST Architecture', 'Social Network Pattern'],
      patterns: ['Repository', 'Service Layer', 'Observer', 'Strategy']
    },
    {
      id: 10,
      title: 'Torres de Hanoi - Análisis de Complejidad',
      description: {
        es: 'Implementación y análisis algorítmico del clásico problema de Torres de Hanoi',
        en: 'Implementation and algorithmic analysis of the classic Towers of Hanoi problem'
      },
      image: '🗼',
      category: 'data',
      tech: ['Python'],
      details: {
        es: 'Implementación completa del algoritmo Torres de Hanoi con análisis detallado de complejidad temporal y espacial.',
        en: 'Complete implementation of the Towers of Hanoi algorithm with detailed time and space complexity analysis.'
      },
      features: {
        es: [
          'Implementación recursiva optimizada',
          'Análisis de complejidad temporal O(2^n)',
          'Análisis de complejidad espacial O(n)',
          'Visualización del proceso de resolución',
          'Medición de performance y benchmarks',
          'Documentación matemática completa',
          'Testing exhaustivo con diferentes casos',
          'Comparación con algoritmos alternativos'
        ],
        en: [
          'Optimized recursive implementation',
          'Time complexity analysis O(2^n)',
          'Space complexity analysis O(n)',
          'Solution process visualization',
          'Performance measurement and benchmarks',
          'Complete mathematical documentation',
          'Exhaustive testing with different cases',
          'Comparison with alternative algorithms'
        ]
      },
      architectures: ['Recursive Pattern', 'Algorithm Analysis'],
      patterns: ['Recursion', 'Divide and Conquer', 'Stack Pattern']
    },
    {
      id: 11,
      title: 'Event-Wear Platform',
      description: {
        es: 'Gestión de eventos y recomendaciones inteligentes de vestimenta',
        en: 'Event management and intelligent clothing recommendations'
      },
      image: '👔',
      category: 'backend',
      tech: ['Java'],
      details: {
        es: 'Plataforma innovadora que combina gestión de eventos con sistema de recomendaciones de vestimenta según la ocasión.',
        en: 'Innovative platform that combines event management with clothing recommendation system according to the occasion.'
      },
      features: {
        es: [
          'Sistema de gestión de eventos completo',
          'Motor de recomendaciones de vestimenta',
          'Algoritmos de matching evento-outfit',
          'Base de datos de estilos y ocasiones',
          'API para integración con tiendas',
          'Sistema de categorización automática',
          'Análisis de tendencias de moda',
          'Interfaz de administración robusta'
        ],
        en: [
          'Complete event management system',
          'Clothing recommendation engine',
          'Event-outfit matching algorithms',
          'Styles and occasions database',
          'API for store integration',
          'Automatic categorization system',
          'Fashion trend analysis',
          'Robust administration interface'
        ]
      },
      architectures: ['Clean Architecture', 'Recommendation System'],
      patterns: ['Repository', 'Strategy', 'Factory', 'Observer']
    },
    {
      id: 12,
      title: 'GetWork Platform',
      description: {
        es: 'Backend para plataforma de búsqueda y gestión de empleos',
        en: 'Backend for job search and management platform'
      },
      image: '💼',
      category: 'backend',
      tech: ['C#', 'Docker'],
      details: {
        es: 'Backend robusto para plataforma de empleos con funcionalidades avanzadas de matching y gestión de candidatos.',
        en: 'Robust backend for job platform with advanced matching and candidate management functionalities.'
      },
      features: {
        es: [
          'API REST completa para gestión de empleos',
          'Sistema de matching candidato-empresa',
          'Gestión de perfiles y CVs',
          'Sistema de notificaciones en tiempo real',
          'Integración con proveedores de empleo',
          'Análisis de compatibilidad automático',
          'Containerización con Docker',
          'Arquitectura escalable y modular'
        ],
        en: [
          'Complete REST API for job management',
          'Candidate-company matching system',
          'Profile and CV management',
          'Real-time notification system',
          'Integration with job providers',
          'Automatic compatibility analysis',
          'Docker containerization',
          'Scalable and modular architecture'
        ]
      },
      architectures: ['Clean Architecture', 'Microservices Ready'],
      patterns: ['Repository', 'Unit of Work', 'CQRS', 'Mediator']
    },
    {
      id: 13,
      title: 'Landing eComServ',
      description: {
        es: 'Página de aterrizaje moderna para servicios técnicos especializados',
        en: 'Modern landing page for specialized technical services'
      },
      image: '🌐',
      category: 'frontend',
      tech: ['CSS', 'HTML', 'JavaScript'],
      details: {
        es: 'Landing page optimizada para conversión, diseñada para mostrar servicios técnicos con diseño moderno y responsive.',
        en: 'Conversion-optimized landing page designed to showcase technical services with modern and responsive design.'
      },
      features: {
        es: [
          'Diseño responsive y mobile-first',
          'Animaciones CSS avanzadas',
          'Optimización para SEO',
          'Formularios de contacto interactivos',
          'Galería de servicios técnicos',
          'Testimonios y casos de éxito',
          'Call-to-action optimizados',
          'Performance optimizada (< 2s carga)'
        ],
        en: [
          'Responsive and mobile-first design',
          'Advanced CSS animations',
          'SEO optimization',
          'Interactive contact forms',
          'Technical services gallery',
          'Testimonials and success cases',
          'Optimized call-to-action',
          'Optimized performance (< 2s load)'
        ]
      },
      architectures: ['Component-based', 'Progressive Enhancement'],
      patterns: ['Module Pattern', 'Observer', 'Lazy Loading']
    }
  ];

  // Store items bilingües
  private storeItemsData = {
    es: [
      {
        id: 1,
        name: 'Sistema de Microservicios',
        description: 'Arquitectura completa de microservicios con Spring Cloud, Docker y CI/CD',
        category: 'software',
        image: '🏗️'
      },
      {
        id: 2,
        name: 'App Full-Stack',
        description: 'Aplicación completa Angular/React + Spring Boot/Node.js con deployment',
        category: 'software',
        image: '💻'
      },
      {
        id: 3,
        name: 'Sistema IoT',
        description: 'Solución IoT completa con sensores, backend y dashboard de monitoreo',
        category: 'software',
        image: '🌐'
      },
      {
        id: 4,
        name: 'Workstation Pro',
        description: 'Estación de trabajo optimizada para desarrollo con múltiples monitores',
        category: 'hardware',
        image: '🖥️'
      },
      {
        id: 5,
        name: 'Servidor Development',
        description: 'Servidor dedicado para desarrollo y testing con Docker y Kubernetes',
        category: 'hardware',
        image: '🖧'
      }
    ],
    en: [
      {
        id: 1,
        name: 'Microservices System',
        description: 'Complete microservices architecture with Spring Cloud, Docker and CI/CD',
        category: 'software',
        image: '🏗️'
      },
      {
        id: 2,
        name: 'Full-Stack App',
        description: 'Complete application Angular/React + Spring Boot/Node.js with deployment',
        category: 'software',
        image: '💻'
      },
      {
        id: 3,
        name: 'IoT System',
        description: 'Complete IoT solution with sensors, backend and monitoring dashboard',
        category: 'software',
        image: '🌐'
      },
      {
        id: 4,
        name: 'Workstation Pro',
        description: 'Optimized workstation for development with multiple monitors',
        category: 'hardware',
        image: '🖥️'
      },
      {
        id: 5,
        name: 'Development Server',
        description: 'Dedicated server for development and testing with Docker and Kubernetes',
        category: 'hardware',
        image: '🖧'
      }
    ]
  };

  // Getter para store según idioma actual
  get storeItems() {
    return this.storeItemsData[this.currentLanguage as 'es' | 'en'] || this.storeItemsData.es;
  }

  // WhatsApp
  whatsappNumbers = {
    software: '51965181346',
    hardware: '51945464470'
  };

  ngOnInit() {
    this.loadLanguage();
    this.loadTheme();
    this.initializeSPA();
    this.showSection('hero');
    this.initializeAnimations();
  }

  private initializeSPA() {
    // Deshabilitar scroll global para SPA
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Asegurar que todas las vistas estén ocultas al inicio
    const allViews = document.querySelectorAll('.section, .hero');
    allViews.forEach(view => {
      view.classList.remove('active');
    });
  }

  // PROPIEDADES PARA EL CAROUSEL
  currentCarouselSlide: number = 0;
  totalCarouselSlides: number = 4;

  // FUNCIONES PÚBLICAS PARA EL TEMPLATE

  public getText(key: string): string {
    return this.texts[this.currentLanguage][key] || key;
  }

  public toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('alexander-language', this.currentLanguage);
    this.updateDataByLanguage();
    this.forceLanguageUpdate();
    
    const langButton = document.querySelector('.lang-selector') as HTMLElement;
    if (langButton) {
      langButton.style.transform = 'scale(1.1)';
      setTimeout(() => langButton.style.transform = '', 200);
    }
  }

  private forceLanguageUpdate() {
    // Forzar actualización de elementos dinámicos
    setTimeout(() => {
      // Trigger change detection para asegurar que todos los elementos se actualicen
      const event = new Event('languageChanged');
      document.dispatchEvent(event);
    }, 50);
  }

  // NAVEGACIÓN SPA REAL - CADA SECCIÓN ES UNA PÁGINA COMPLETAMENTE INDEPENDIENTE
  public showSection(sectionId: string) {
    // OCULTAR TODAS las secciones y hero
    const allViews = document.querySelectorAll('.section, .hero');
    allViews.forEach(view => {
      view.classList.remove('active');
    });
    
    // MOSTRAR SOLO la vista seleccionada
    const targetView = document.getElementById(sectionId);
    if (targetView) {
      targetView.classList.add('active');
      // Scroll a la parte superior de la vista si tiene scroll interno
      targetView.scrollTop = 0;
    }
    
    // Actualizar navbar activo
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
    
    // Actualizar estado actual
    this.currentSection = sectionId;
    
    // Mantener el SPA sin scroll global
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  }

  public toggleTheme() {
    this.darkMode = !this.darkMode;
    
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('alexander-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('alexander-theme', 'light');
    }
    
    // Feedback visual
    const themeButton = document.querySelector('.theme-toggle') as HTMLElement;
    if (themeButton) {
      themeButton.style.transform = 'scale(1.1) rotate(360deg)';
      setTimeout(() => themeButton.style.transform = '', 400);
    }
  }

  public getWhatsAppLink(category: string): string {
    const number = category === 'software' 
      ? this.whatsappNumbers.software 
      : this.whatsappNumbers.hardware;
    
    const message = encodeURIComponent(
      `Hola Alexander! Me interesa consultar sobre tus servicios de ${category}. ¿Podrías brindarme más información?`
    );
    
    return `https://wa.me/${number}?text=${message}`;
  }

  public showProjectDetails(project: any) {
    this.selectedProject = project;
    this.currentCarouselSlide = 0; // Reset carousel al abrir proyecto
    // El overflow ya está en hidden por el SPA
  }

  public closeProjectModal() {
    this.selectedProject = null;
    this.currentCarouselSlide = 0; // Reset carousel al cerrar
    // Mantener el SPA sin scroll
    document.body.style.overflow = 'hidden';
  }

  // FUNCIONES DEL CAROUSEL
  public nextCarouselImage() {
    this.currentCarouselSlide = (this.currentCarouselSlide + 1) % this.totalCarouselSlides;
    this.updateCarouselDisplay();
  }

  public prevCarouselImage() {
    this.currentCarouselSlide = this.currentCarouselSlide === 0 
      ? this.totalCarouselSlides - 1 
      : this.currentCarouselSlide - 1;
    this.updateCarouselDisplay();
  }

  public goToCarouselSlide(index: number) {
    this.currentCarouselSlide = index;
    this.updateCarouselDisplay();
  }

  private updateCarouselDisplay() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentCarouselSlide);
    });
    
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentCarouselSlide);
    });
  }

  public filterProjects(category: string) {
    this.selectedProjectCategory = category;
  }

  public getFilteredProjects() {
    if (this.selectedProjectCategory === 'all') {
      return this.proyectos;
    }
    return this.proyectos.filter(proyecto => proyecto.category === this.selectedProjectCategory);
  }

  public filterStore(category: string) {
    this.selectedCategory = category;
  }

  public getFilteredItems() {
    if (this.selectedCategory === 'all') {
      return this.storeItems;
    }
    return this.storeItems.filter(item => item.category === this.selectedCategory);
  }

  // FUNCIONES PARA CONTENIDO BILINGÜE DE PROYECTOS
  public getProjectDescription(project: any): string {
    return project.description[this.currentLanguage] || project.description.es;
  }

  public getProjectDetails(project: any): string {
    return project.details[this.currentLanguage] || project.details.es;
  }

  public getProjectFeatures(project: any): string[] {
    return project.features[this.currentLanguage] || project.features.es;
  }

  public handleContact(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    console.log('Datos de contacto:', {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    });
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = this.getText('message.sent');
    submitBtn.style.background = 'var(--whatsapp-green)';
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = '';
      event.target.reset();
    }, 2500);
  }

  public downloadCV(event?: Event) {
    const cvUrl = 'assets/cv/Curriculum Alexander Castillo.pdf';
    const button = event?.target as HTMLButtonElement;
    
    // Animación del botón
    if (button) {
      button.textContent = this.getText('downloading');
      button.disabled = true;
      button.style.transform = 'scale(0.95)';
      button.classList.add('downloading');
    }
    
    // Crear elemento de descarga inmediatamente (no verificar existencia)
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Alexander_Castillo_CV.pdf';
    link.style.display = 'none';
    
    // Agregar al DOM y descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Feedback de éxito
    if (button) {
      setTimeout(() => {
        button.textContent = this.getText('downloaded');
        button.style.background = '#10b981';
        button.classList.remove('downloading');
        button.classList.add('downloaded');
        
        setTimeout(() => {
          button.textContent = this.getText('hero.btn.cv');
          button.disabled = false;
          button.style.transform = 'scale(1)';
          button.style.background = '';
          button.classList.remove('downloaded');
        }, 2000);
      }, 1000);
    }
  }

  public getCurrentYear() {
    return new Date().getFullYear();
  }

  // FUNCIONES PRIVADAS

  private loadLanguage() {
    const savedLanguage = localStorage.getItem('alexander-language');
    this.currentLanguage = savedLanguage || 'es';
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('alexander-theme');
    this.darkMode = savedTheme === 'dark';
    
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    }
  }

  private updateDataByLanguage() {
    if (this.currentLanguage === 'en') {
      this.profileData.title = 'Software Engineer';
      this.profileData.description = 'Full-Stack development specialist with experience in microservices, enterprise architectures and modern technologies. Focused on creating robust and scalable solutions.';
      this.profileData.location = 'Lima, Peru';
    } else {
      this.profileData.title = 'Ingeniero de Software';
      this.profileData.description = 'Especialista en desarrollo Full-Stack con experiencia en microservicios, arquitecturas enterprise y tecnologías modernas. Enfocado en crear soluciones robustas y escalables.';
      this.profileData.location = 'Lima, Perú';
    }
  }

  private initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }, 500);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey) {
      switch (event.key) {
        case '1':
          event.preventDefault();
          this.showSection('hero');
          break;
        case '2':
          event.preventDefault();
          this.showSection('perfil');
          break;
        case '3':
          event.preventDefault();
          this.showSection('proyectos');
          break;
        case '4':
          event.preventDefault();
          this.showSection('store');
          break;
        case '5':
          event.preventDefault();
          this.showSection('contacto');
          break;
        case 'd':
        case 'D':
          event.preventDefault();
          this.toggleTheme();
          break;
        case 'l':
        case 'L':
          event.preventDefault();
          this.toggleLanguage();
          break;
      }
    }
  }
}


