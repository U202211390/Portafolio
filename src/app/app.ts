import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  protected title = 'Alexander Castillo - Portfolio';
  
  // Propiedades para navegación y estado
  currentSection: string = 'hero';
  menuOpen: boolean = false;
  darkMode: boolean = false;
  selectedProject: any = null;
  selectedCategory: string = 'all';

  // Datos del perfil
  profileData = {
    name: 'Alexander',
    lastName: 'Castillo',
    title: 'Ingeniero de Software',
    description: 'Especialista en desarrollo backend con experiencia en tecnologías modernas y metodologías ágiles. Enfocado en crear soluciones eficientes y escalables.',
    location: 'Lima, Perú',
    phone: '(+51) 965 181 546',
    email: 'jaircastillo2502@gmail.com'
  };

  // Roles profesionales
  perfilRoles = [
    {
      icon: 'fas fa-code',
      title: 'Desarrollador',
      description: 'Desarrollo de aplicaciones web y móviles con tecnologías modernas',
      skills: ['Java', 'Spring Boot', 'Angular', 'Vue.js', 'JavaScript']
    },
    {
      icon: 'fas fa-cogs',
      title: 'Ingeniero',
      description: 'Arquitectura de software y diseño de sistemas escalables',
      skills: ['Microservicios', 'API REST', 'Bases de Datos', 'Docker']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Analista',
      description: 'Análisis de requerimientos y optimización de procesos',
      skills: ['UML', 'Scrum', 'Kanban', 'Análisis de Datos']
    },
    {
      icon: 'fas fa-server',
      title: 'Especialista Backend',
      description: 'Desarrollo de APIs robustas y gestión de servidores',
      skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS']
    }
  ];

  // Proyectos detallados
  proyectos = [
    {
      id: 1,
      title: 'UrbanPass',
      description: 'Plataforma de movilidad urbana inteligente',
      image: 'Imagen del proyecto',
      tech: ['Java', 'Spring Boot', 'MongoDB', 'REST API'],
      details: 'Sistema integral de gestión de transporte público que permite a los usuarios planificar rutas, realizar pagos digitales y acceder a información en tiempo real sobre el estado del transporte.',
      features: [
        'Planificación inteligente de rutas',
        'Pagos digitales integrados',
        'Información en tiempo real',
        'Interfaz intuitiva para usuarios',
        'Panel administrativo completo'
      ]
    },
    {
      id: 2,
      title: 'BonoFacil',
      description: 'Sistema de gestión de bonos y beneficios',
      image: 'Imagen del proyecto',
      tech: ['Vue.js', 'Spring Boot', 'PostgreSQL', 'Python'],
      details: 'Aplicación web para la gestión automatizada de bonos laborales, con cálculos automáticos, reportes detallados y integración con sistemas de nómina.',
      features: [
        'Cálculo automático de bonos',
        'Reportes personalizables',
        'Integración con nómina',
        'Dashboard analítico',
        'Notificaciones automáticas'
      ]
    },
    {
      id: 3,
      title: 'AventurePe',
      description: 'App móvil de turismo adventure',
      image: 'Imagen del proyecto',
      tech: ['Kotlin', 'Java', 'Firebase', 'Google Maps'],
      details: 'Aplicación móvil para descubrir y reservar experiencias de turismo aventura en Perú, con geolocalización, reviews y sistema de reservas.',
      features: [
        'Geolocalización de destinos',
        'Sistema de reservas',
        'Reviews y calificaciones',
        'Mapa interactivo',
        'Perfil de usuario personalizado'
      ]
    },
    {
      id: 4,
      title: 'Torres de Hanoi',
      description: 'Juego interactivo educativo',
      image: 'Imagen del proyecto',
      tech: ['Python', 'Tkinter', 'Algoritmos'],
      details: 'Implementación del clásico juego de las Torres de Hanoi con interfaz gráfica, diferentes niveles de dificultad y sistema de puntuación.',
      features: [
        'Interfaz gráfica intuitiva',
        'Múltiples niveles',
        'Sistema de puntuación',
        'Ayuda contextual',
        'Contador de movimientos'
      ]
    },
    {
      id: 5,
      title: 'Event-Wear Platform',
      description: 'Plataforma de alquiler de vestuario',
      image: 'Imagen del proyecto',
      tech: ['Java', 'Spring Framework', 'MySQL', 'Bootstrap'],
      details: 'Sistema de gestión para alquiler de vestuario para eventos, con catálogo digital, reservas online y gestión de inventario.',
      features: [
        'Catálogo digital interactivo',
        'Sistema de reservas online',
        'Gestión de inventario',
        'Calendario de disponibilidad',
        'Facturación automática'
      ]
    },
    {
      id: 6,
      title: 'GetWork Platform',
      description: 'Portal de empleos especializado',
      image: 'Imagen del proyecto',
      tech: ['C#', '.NET', 'SQL Server', 'Angular'],
      details: 'Plataforma de búsqueda de empleo con matching inteligente entre candidatos y empleadores, sistema de aplicaciones y gestión de perfiles.',
      features: [
        'Matching inteligente de perfiles',
        'Sistema de aplicaciones',
        'Chat integrado',
        'Análisis de compatibilidad',
        'Dashboard para empresas'
      ]
    }
  ];

  // Habilidades técnicas
  habilidadesTecnicas = [
    {
      category: 'Backend',
      skills: [
        { name: 'Java', level: 'Avanzado' },
        { name: 'Spring Boot', level: 'Avanzado' },
        { name: 'Python', level: 'Intermedio' },
        { name: 'Node.js', level: 'Intermedio' },
        { name: 'C#', level: 'Intermedio' }
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', level: 'Avanzado' },
        { name: 'Vue.js', level: 'Intermedio' },
        { name: 'JavaScript', level: 'Avanzado' },
        { name: 'TypeScript', level: 'Intermedio' },
        { name: 'CSS/SCSS', level: 'Intermedio' }
      ]
    },
    {
      category: 'Bases de Datos',
      skills: [
        { name: 'PostgreSQL', level: 'Avanzado' },
        { name: 'MongoDB', level: 'Intermedio' },
        { name: 'MySQL', level: 'Intermedio' },
        { name: 'SQL Server', level: 'Básico' }
      ]
    },
    {
      category: 'Herramientas',
      skills: [
        { name: 'Git', level: 'Avanzado' },
        { name: 'Docker', level: 'Intermedio' },
        { name: 'AWS', level: 'Básico' },
        { name: 'Postman', level: 'Avanzado' }
      ]
    }
  ];

  // Timeline educativo
  educacion = [
    {
      title: 'Universidad Peruana de Ciencias Aplicadas',
      degree: 'Ingeniería de Software',
      specialization: 'Especialización en Gestión de Proyectos Ágiles',
      period: '2020 - 2024'
    },
    {
      title: 'Colegio Parroquial Santa Cruz',
      degree: 'Educación Secundaria',
      specialization: 'Bachillerato completo',
      period: '2015 - 2019'
    }
  ];

  // Productos del store
  storeItems = [
    {
      id: 1,
      name: 'Sistema de Gestión Web',
      description: 'Solución completa para gestión empresarial',
      price: 'S/. 2,500',
      category: 'software',
      image: 'Software personalizado'
    },
    {
      id: 2,
      name: 'App Móvil Personalizada',
      description: 'Aplicación móvil desarrollada a medida',
      price: 'S/. 3,200',
      category: 'software',
      image: 'Aplicación móvil'
    },
    {
      id: 3,
      name: 'Consultoría Técnica',
      description: 'Asesoría especializada en tecnología',
      price: 'S/. 150/hora',
      category: 'software',
      image: 'Consultoría especializada'
    },
    {
      id: 4,
      name: 'Laptop Gaming',
      description: 'Laptop de alto rendimiento para desarrollo',
      price: 'S/. 4,500',
      category: 'hardware',
      image: 'Laptop gaming'
    },
    {
      id: 5,
      name: 'Monitor 4K',
      description: 'Monitor profesional para programación',
      price: 'S/. 1,200',
      category: 'hardware',
      image: 'Monitor 4K'
    },
    {
      id: 6,
      name: 'Teclado Mecánico',
      description: 'Teclado mecánico para programadores',
      price: 'S/. 350',
      category: 'hardware',
      image: 'Teclado mecánico'
    }
  ];

  // Mapa de iconos para habilidades
  skillIcons: { [key: string]: string } = {
    // Backend
    'Java': 'fab fa-java',
    'Spring Boot': 'fas fa-leaf',
    'Python': 'fab fa-python',
    'Node.js': 'fab fa-node-js',
    'C#': 'fas fa-code',
    
    // Frontend
    'Angular': 'fab fa-angular',
    'Vue.js': 'fab fa-vuejs',
    'JavaScript': 'fab fa-js',
    'TypeScript': 'fas fa-code',
    'CSS/SCSS': 'fab fa-css3-alt',
    
    // Bases de Datos
    'PostgreSQL': 'fas fa-database',
    'MongoDB': 'fas fa-database',
    'MySQL': 'fas fa-database',
    'SQL Server': 'fas fa-database',
    
    // Herramientas
    'Git': 'fab fa-git-alt',
    'Docker': 'fab fa-docker',
    'AWS': 'fab fa-aws',
    'Postman': 'fas fa-paper-plane'
  };

  // Números de WhatsApp
  whatsappNumbers = {
    software: '51965181546', // Para software
    hardware: '51945464470'  // Para hardware
  };

  ngOnInit() {
    // Cargar tema desde localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.darkMode = true;
      document.body.classList.add('dark-mode');
    }
    
    // Mostrar sección hero por defecto
    this.showSection('hero');
    
    // Inicializar animaciones
    this.initializeAnimations();
  }

  // Inicializar animaciones
  initializeAnimations() {
    // Observador para animaciones en scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    // Observar elementos con animación
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }, 500);
  }

  // Navegación entre secciones mejorada
  showSection(sectionId: string) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    
    // Esperar un poco antes de mostrar la nueva sección
    setTimeout(() => {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.classList.add('active');
        
        // Scroll suave al top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, 50);
    
    // Actualizar navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
    
    this.currentSection = sectionId;
    this.menuOpen = false;
  }

  // Toggle menú móvil
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Toggle tema oscuro mejorado
  toggleTheme() {
    this.darkMode = !this.darkMode;
    
    // Animación suave del toggle
    const body = document.body;
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    if (this.darkMode) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
    
    // Remover la transición después de completarse
    setTimeout(() => {
      body.style.transition = '';
    }, 300);
  }

  // Obtener icono para habilidad
  getSkillIcon(skillName: string): string {
    return this.skillIcons[skillName] || 'fas fa-code';
  }

  // Generar enlace de WhatsApp
  getWhatsAppLink(category: string): string {
    const number = category === 'software' 
      ? this.whatsappNumbers.software 
      : this.whatsappNumbers.hardware;
    
    const message = encodeURIComponent(
      `Hola Alexander! Me interesa consultar sobre tus servicios de ${category}. `
    );
    
    return `https://wa.me/${number}?text=${message}`;
  }

  // Mostrar detalles del proyecto
  showProjectDetails(project: any) {
    this.selectedProject = project;
    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';
  }

  // Cerrar modal del proyecto
  closeProjectModal() {
    this.selectedProject = null;
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  }

  // Filtrar productos del store
  filterStore(category: string) {
    this.selectedCategory = category;
    
    // Animación de cambio de categoría
    const storeItems = document.querySelectorAll('.store-item');
    storeItems.forEach((item, index) => {
      (item as HTMLElement).style.animation = 'none';
      setTimeout(() => {
        (item as HTMLElement).style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
      }, 50);
    });
  }

  // Obtener productos filtrados
  getFilteredItems() {
    if (this.selectedCategory === 'all') {
      return this.storeItems;
    }
    return this.storeItems.filter(item => item.category === this.selectedCategory);
  }

  // Manejar contacto
  handleContact(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    console.log('Datos de contacto:', contactData);
    
    // Animación de éxito
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '¡Enviado!';
    submitBtn.style.background = 'var(--whatsapp-green)';
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = '';
      event.target.reset();
    }, 2000);
  }

  // Descargar CV
  downloadCV() {
    // Animación del botón
    const button = event?.target as HTMLButtonElement;
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Descargando...';
      
      setTimeout(() => {
        button.textContent = originalText;
        alert('CV descargado exitosamente');
      }, 1500);
    }
  }

  // Ver portafolio completo
  viewPortfolio() {
    this.showSection('proyectos');
  }

  // Obtener año actual
  getCurrentYear() {
    return new Date().getFullYear();
  }

  // Método para manejar errores de imágenes
  onImageError(event: any) {
    event.target.style.display = 'none';
  }

  // Método para scroll suave a sección
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
