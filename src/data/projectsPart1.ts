import { PortfolioProject } from "./portfolioTypes";

export const projectsPart1: PortfolioProject[] = [
  {
  slug: "nexus-ecommerce",
  title: "Custom Headless E-Commerce Platform",
  client: "Retail Industry",
  category: "Web Development",
  categorySlug: "web-development",
  thumbnailColor: "linear-gradient(135deg, #4A00E0 0%, #8E2DE2 100%)",
  image: "/images/portfolio/ecommerce.png",
  metric: "0.38s FCP",
  metricLabel: "Page Speed",
  timeline: "10 Weeks",
  techStack: ["Next.js 15", "Node.js", "GraphQL", "PostgreSQL", "Redis"],
  summary:
    "Designed and developed a modern headless e-commerce platform focused on performance, scalability, and seamless shopping experiences across all devices.",

  challenge: [
    "The client required a modern e-commerce platform capable of supporting increasing traffic while maintaining a fast and reliable shopping experience. Their existing website suffered from slow page loads, limited scalability, and an outdated user experience that negatively impacted customer engagement.",

    "Managing products, promotions, and website content required significant manual effort. The platform lacked flexibility for future integrations, making it difficult to introduce new business features or marketing campaigns without major development work.",

    "The objective was to build a scalable architecture that could improve website performance, simplify content management, and provide a better shopping experience while supporting future business growth."
  ],

  execution: [
    "We designed a headless architecture using Next.js for the frontend, allowing fast page rendering, improved SEO, and a responsive user experience across desktop and mobile devices.",

    "The backend was connected through secure APIs, enabling flexible product management, customer authentication, payment integration, and inventory synchronization while keeping the frontend independent from business logic.",

    "Performance optimization techniques such as image optimization, caching strategies, lazy loading, code splitting, and server-side rendering were implemented to improve loading speed. Automated deployment workflows and version control practices were also introduced to simplify future development."
  ],

  solution: [
    "The final solution delivered a scalable e-commerce platform with a clean architecture that supports future feature expansion and third-party integrations without requiring major structural changes.",

    "Customers benefit from faster navigation, simplified checkout flows, responsive layouts, and improved browsing performance across all devices. Administrators can efficiently manage products, categories, and promotional content through an intuitive workflow.",

    "The modular architecture enables ongoing enhancements while maintaining performance, security, and maintainability, providing a strong digital foundation for long-term business growth."
  ],

  results: [
    "Improved website performance and loading speed",
    "Responsive experience across desktop, tablet, and mobile devices",
    "Scalable architecture ready for future business growth",
    "Simplified content and product management workflow"
  ]
},

  {
  slug: "logix-driver-app",
  title: "Fleet Management Mobile Application",
  client: "Logistics Company",
  category: "App Development",
  categorySlug: "app-development",
  thumbnailColor: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
  image: "/images/portfolio/logix.png",
  metric: "100% Offline GPS",
  metricLabel: "Reliability",
  timeline: "12 Weeks",
  techStack: ["Flutter", "SQLite", "Google Maps API", "Firebase", "Node.js"],
  summary:
    "Designed and developed a fleet management mobile application with offline capabilities, GPS tracking, route management, and digital proof of delivery.",

  challenge: [
    "The client required a mobile application that could support drivers operating in areas with limited or unstable internet connectivity while maintaining reliable access to delivery information and navigation.",

    "Existing workflows relied on manual paperwork and disconnected communication channels, making it difficult to monitor deliveries, manage route updates, and synchronize operational data efficiently.",

    "The goal was to build a dependable mobile solution that simplifies fleet operations, improves communication between drivers and dispatch teams, and supports future business growth through a scalable platform."
  ],

  execution: [
    "We developed a cross-platform mobile application with offline-first functionality, allowing drivers to continue accessing delivery information, route details, and assigned tasks even without an active internet connection.",

    "The application includes GPS tracking, digital proof of delivery, barcode scanning, notifications, and secure synchronization with backend systems whenever connectivity becomes available.",

    "Performance optimization, local data storage, background synchronization, and secure API integration were implemented to ensure reliable operation while maintaining a responsive user experience across Android and iOS devices."
  ],

  solution: [
    "The completed application provides drivers with a centralized workspace for managing deliveries, viewing assigned routes, recording delivery confirmations, and communicating with dispatch teams from a single interface.",

    "Dispatch teams benefit from improved visibility into delivery operations, real-time location updates, and streamlined communication, helping them coordinate routes and monitor fleet activity more efficiently.",

    "The modular architecture supports future integrations with fleet management systems, reporting tools, and additional operational features as business requirements continue to evolve."
  ],

  results: [
    "Improved delivery tracking and fleet visibility",
    "Simplified proof of delivery through digital workflows",
    "Reliable offline functionality for field operations",
    "Scalable architecture supporting future logistics services"
  ]
},
  {
  slug: 'ai-customer-support',
  title: 'AI Customer Support Automation Platform',
  client: 'TechFlow SaaS',
  category: 'AI Automation',
  categorySlug: 'ai-automation',
  thumbnailColor: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
  image: '/images/portfolio/aiCostomer.png',
  metric: "70% Ticket Deflection",
  metricLabel: "Automation Rate",
  timeline: "8 Weeks",
  techStack: ["LangChain", "Python", "LlamaIndex", "FastAPI", "Vector DB"],
  summary:
    'Developed an enterprise AI support platform that automated customer service workflows, reduced response times, and enabled support teams to scale without increasing operational costs.',

  challenge: [
    'TechFlow was experiencing rapid customer growth, but its support operations were unable to scale at the same pace. Thousands of support requests were arriving daily, creating long response queues and reducing customer satisfaction. The company required a solution capable of delivering immediate assistance while maintaining enterprise-level accuracy.',

    'More than two-thirds of incoming requests involved repetitive topics such as account management, onboarding guidance, subscription questions, and common product workflows. Highly skilled support engineers were spending valuable time resolving routine inquiries instead of focusing on technical investigations and enterprise customers.',

    'Previous chatbot implementations relied on predefined decision trees that struggled to understand natural language or complex customer intent. TechFlow required an intelligent AI assistant capable of understanding context, retrieving accurate documentation, and escalating conversations whenever human expertise became necessary.'
  ],

  execution: [
    'We designed a Retrieval-Augmented Generation (RAG) architecture that connected the AI assistant directly with the company knowledge base, documentation, product manuals, FAQs, and historical support records. Instead of relying solely on model memory, every response was grounded using verified business information.',

    'The platform included semantic search, intelligent intent detection, conversation memory, secure API integrations, and automated workflow execution. Customers could receive contextual guidance, retrieve account information, access troubleshooting steps, and complete routine support actions through natural conversations.',

    'Enterprise-grade safeguards were implemented throughout the system, including confidence scoring, response validation, permission-based access, audit logging, and automatic escalation for sensitive or complex conversations. Human agents received complete conversation history whenever intervention was required, significantly reducing resolution time.'
  ],

  solution: [
    'The completed platform became the first point of contact for every customer support interaction, delivering instant assistance around the clock. Customers received accurate answers within seconds, while support engineers focused exclusively on advanced technical issues, enterprise onboarding, and strategic customer success initiatives.',

    'Managers gained complete visibility into support operations through centralized dashboards displaying conversation analytics, automation rates, escalation trends, customer satisfaction metrics, and workflow performance. Continuous monitoring allowed the AI system to improve over time as new documentation and customer interactions were incorporated.',

    'By combining intelligent automation with controlled human oversight, TechFlow transformed customer support into a scalable business function capable of supporting continuous product growth without proportional increases in operational expenses.'
  ],

  results: [
    'Automated over 70% of repetitive customer support requests',
    'Reduced average first-response time from hours to under 5 seconds',
    'Improved customer satisfaction through instant 24/7 assistance',
    'Significantly reduced operational workload for the support team'
  ]
}
];
