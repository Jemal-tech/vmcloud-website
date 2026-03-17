export const languages = {
  ro: '🇷🇴 Română',
  en: '🇬🇧 English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ro';

export const translations = {
  ro: {
    // Navigation
    'nav.home': 'Acasă',
    'nav.why-us': 'De ce noi?',
    'nav.blog': 'Blog',
    'nav.portfolio': 'Portofoliu',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Departamentul IT\nfără bătăi de cap!',
    'hero.subtitle': 'VMCloud Systems pune la dispoziția dumneavoastră o echipă multidisciplinară profesionistă, pasionată de rezolvarea eficientă a provocărilor din domeniul IT.',
    'hero.cta.consult': 'Consultare Gratuită',
    'hero.cta.advantages': 'De ce noi?',

    // Services
    'services.label': 'Servicii',
    'services.title': 'Serviciile Noastre',
    'services.subtitle': 'Soluții IT complete pentru afacerea ta',
    'services.admin.title': 'Administrare IT',
    'services.admin.desc': 'Administrare completă a infrastructurii IT — rețele, servere, stații de lucru.',
    'services.monitoring.title': 'Monitorizare 24/7',
    'services.monitoring.desc': 'Monitorizare continuă a infrastructurii de date și servere, nonstop.',
    'services.hosting.title': 'Webhosting & Email',
    'services.hosting.desc': 'Găzduire web fiabilă și administrare servicii de email profesional.',
    'services.architecture.title': 'Arhitectură IT',
    'services.architecture.desc': 'Elaborarea și implementarea unei arhitecturi IT scalabile și sigure.',
    'services.security.title': 'Protecție Malware',
    'services.security.desc': 'Protecție avansată împotriva malware, spyware și amenințări cibernetice.',
    'services.backup.title': 'Backup & Recovery',
    'services.backup.desc': 'Servicii de recuperare a datelor și soluții de backup automate.',

    // Testimonials
    'testimonials.title': 'Ce spun clienții noștrii',
    'testimonials.subtitle': 'Încredere construită prin rezultate',
    'testimonials.readMore': 'Citește mai mult',
    'testimonials.readLess': 'Citește mai puțin',
    'testimonials.verified': 'Partener Verificat',
    'testimonials.allReviews': 'Toate Recenziile',
    'testimonials.featured': 'Recenzii Evidențiate',

    // Why Us
    'why.title': 'De ce VMCloud Systems?',
    'why.subtitle': 'Avantajele externalizării departamentului IT',
    'why.about.title': 'Despre Noi',
    'why.about.text': 'VMCloud Systems a intrat pe piața IT&C din anul 2014 și este o companie ce se axează pe clienți de dimensiuni mici și medii, pentru care nu se justifică înființarea unui departament tehnic dedicat.',
    'why.advantages.title': 'Avantaje Outsourcing vs Angajat Propriu',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Echipa noastră vă stă la dispoziție',
    'contact.form.name': 'Nume',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefon',
    'contact.form.address': 'Adresa',
    'contact.form.message': 'Mesaj',
    'contact.form.submit': 'Trimite Mesajul',
    'contact.info.address': 'Șoseaua Berceni 104, Sector 4, 041919 București',
    'contact.info.phone': '+40 761 454 443',
    'contact.info.email': 'office@vmcloud.ro',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Noutăți și articole din lumea IT',
    'blog.read-more': 'Citește mai mult',

    // Portfolio
    'portfolio.title': 'Portofoliu',
    'portfolio.subtitle': 'Proiecte și studii de caz',
    'portfolio.view': 'Vezi Proiectul',

    // PDF
    'pdf.title': 'Prezentarea Companiei',
    'pdf.subtitle': 'Descarcă prezentarea detaliată a serviciilor VMCloud Systems',
    'pdf.cta': 'Descarcă PDF',

    // Footer
    'footer.rights': 'Toate drepturile rezervate.',
    'footer.company': 'VMCloud Systems',
    'footer.links': 'Link-uri Rapide',
    'footer.contact': 'Contact',

    // General
    'general.since': 'Din 2014',
    'general.loading': 'Se încarcă...',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.why-us': 'Why Us?',
    'nav.blog': 'Blog',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Your IT Department\nWithout the Hassle!',
    'hero.subtitle': 'VMCloud Systems offers a multidisciplinary team of professionals passionate about efficiently solving IT challenges.',
    'hero.cta.consult': 'Free Consultation',
    'hero.cta.advantages': 'Why Us?',

    // Services
    'services.label': 'Our Services',
    'services.title': 'Our Services',
    'services.subtitle': 'Complete IT solutions for your business',
    'services.admin.title': 'IT Administration',
    'services.admin.desc': 'Complete IT infrastructure management — networks, servers, workstations.',
    'services.monitoring.title': '24/7 Monitoring',
    'services.monitoring.desc': 'Continuous monitoring of your data infrastructure and servers, around the clock.',
    'services.hosting.title': 'Web Hosting & Email',
    'services.hosting.desc': 'Reliable web hosting and professional email service management.',
    'services.architecture.title': 'IT Architecture',
    'services.architecture.desc': 'Design and implementation of scalable, secure IT architecture.',
    'services.security.title': 'Malware Protection',
    'services.security.desc': 'Advanced protection against malware, spyware, and cyber threats.',
    'services.backup.title': 'Backup & Recovery',
    'services.backup.desc': 'Data recovery services and automated backup solutions.',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trust built through results',
    'testimonials.readMore': 'Read More',
    'testimonials.readLess': 'Read Less',
    'testimonials.verified': 'Verified Partner',
    'testimonials.allReviews': 'All Reviews',
    'testimonials.featured': 'Featured Reviews',

    // Why Us
    'why.title': 'Why VMCloud Systems?',
    'why.subtitle': 'The advantages of outsourcing your IT department',
    'why.about.title': 'About Us',
    'why.about.text': 'VMCloud Systems entered the IT&C market in 2014 as a company focused on small and medium businesses that do not need a dedicated internal IT department.',
    'why.advantages.title': 'Outsourcing vs. In-House IT Employee',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Our team is here for you',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.address': 'Address',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.address': 'Șoseaua Berceni 104, Sector 4, 041919 Bucharest',
    'contact.info.phone': '+40 761 454 443',
    'contact.info.email': 'office@vmcloud.ro',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'News and articles from the IT world',
    'blog.read-more': 'Read More',

    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Projects and case studies',
    'portfolio.view': 'View Project',

    // PDF
    'pdf.title': 'Company Presentation',
    'pdf.subtitle': 'Download the detailed VMCloud Systems services presentation',
    'pdf.cta': 'Download PDF',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.company': 'VMCloud Systems',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',

    // General
    'general.since': 'Since 2014',
    'general.loading': 'Loading...',
  },
} as const;
