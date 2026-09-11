import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CampaignIcon from '@mui/icons-material/Campaign';
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  detailedContent?: {
    heading: string;
    paragraphs: string[];
  }[];
  icon: React.ReactNode;
  technologies: string[];
  domains: { name: string; desc: string }[];
  features: { title: string; desc: string }[];
}

export const detailedServices: Record<string, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    subtitle: "Scalable web solutions built for performance and long-term growth.",
    description:
      "We design and develop fast, secure, and scalable websites and web applications tailored to your business goals. Every solution is engineered for performance, maintainability, and an exceptional user experience.",

    detailedContent: [
      {
        heading: "Building the Right Foundation",
        paragraphs: [
          "Your website is more than an online presence—it's an essential part of how your business attracts customers, builds trust, and drives growth. We create custom web solutions that combine modern technology with thoughtful user experiences to help businesses operate more efficiently and grow with confidence.",
          "Rather than relying on generic templates, we build every project with clean architecture, reusable components, and scalable technologies. The result is a fast, reliable website that's easy to maintain and ready to evolve alongside your business."
        ]
      },
      {
        heading: "Modern Technologies That Scale",
        paragraphs: [
          "We use trusted technologies including Next.js, React, Node.js, and TypeScript to develop responsive, high-performance applications that deliver a seamless experience across desktop, tablet, and mobile devices.",
          "From optimized page speed and technical SEO to secure backend systems and cloud-ready deployments, every project is designed with long-term reliability, performance, and scalability in mind."
        ]
      },
      {
        heading: "Flexible Architecture for Future Growth",
        paragraphs: [
          "As your business grows, your digital platform should grow with it. Our development approach focuses on modular architecture, API-first integrations, and scalable systems that make future enhancements faster and more cost-effective.",
          "Whether you need additional features, third-party integrations, or expanding functionality, your platform remains adaptable without requiring a complete rebuild."
        ]
      },
      {
        heading: "Reliable Deployment & Ongoing Improvement",
        paragraphs: [
          "Our development workflow includes version control, automated deployments, and thorough testing to ensure every release is stable and reliable. Updates are delivered efficiently while minimizing disruption to your business.",
          "After launch, we continue to support your website with performance monitoring, maintenance, security updates, and feature enhancements, helping your digital platform remain fast, secure, and aligned with your business objectives."
        ]
      }
    ],

    icon: <CodeIcon fontSize="large" />,

    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS"
    ],

    domains: [
      {
        name: "Business Websites",
        desc: "Professional, responsive websites designed to strengthen your online presence."
      },
      {
        name: "E-Commerce",
        desc: "Scalable online stores focused on performance, security, and seamless shopping experiences."
      },
      {
        name: "SaaS Platforms",
        desc: "Custom web applications with secure authentication, dashboards, and scalable architecture."
      }
    ],

    features: [
      {
        title: "Custom Development",
        desc: "Tailor-made solutions built around your business requirements without unnecessary complexity."
      },
      {
        title: "API Integration",
        desc: "Connect payment gateways, CRMs, third-party services, and business tools with ease."
      },
      {
        title: "Performance & SEO",
        desc: "Fast-loading, search engine optimized websites that deliver a better user experience."
      }
    ]
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Custom applications designed for performance, usability, and growth.",
    description:
      "We build responsive mobile and web applications that deliver seamless user experiences across devices. From business platforms to customer-facing apps, every solution is designed for speed, security, and long-term scalability.",

    detailedContent: [
      {
        heading: "Mobile Experiences That Drive Engagement",
        paragraphs: [
          "Modern users expect fast, intuitive, and reliable digital experiences wherever they are. We develop custom web and mobile applications that help businesses connect with customers, streamline operations, and deliver consistent experiences across every device.",
          "Whether you're launching a new product, digitizing internal workflows, or expanding an existing platform, our team focuses on creating applications that are easy to use, scalable, and built around your business objectives."
        ]
      },
      {
        heading: "Built with Modern Technologies",
        paragraphs: [
          "Our development process combines modern frameworks such as React Native, Swift, Kotlin, and Firebase to create applications that perform reliably on both iOS and Android. Every interface is carefully designed to provide a smooth and intuitive user experience.",
          "Security, performance, and maintainability are built into every stage of development, ensuring your application remains dependable as your users and business continue to grow."
        ]
      },
      {
        heading: "End-to-End Development Process",
        paragraphs: [
          "From product planning and UI/UX design to development, testing, deployment, and ongoing maintenance, we manage every stage of the application lifecycle with a structured and transparent workflow.",
          "After launch, we continue supporting your application with performance improvements, feature enhancements, security updates, and continuous optimization to keep your product running at its best."
        ]
      },
      {
        heading: "Scalable & Future-Ready Solutions",
        paragraphs: [
          "Our applications are designed with scalable architecture, API integrations, and cloud-ready infrastructure, making it easier to add new features, integrate third-party services, and support growing user demands.",
          "By building with flexibility in mind, we help businesses reduce future development costs while ensuring their applications remain adaptable as technology and customer expectations evolve."
        ]
      }
    ],

    icon: <SmartphoneIcon fontSize="large" />,

    technologies: [
      "React Native",
      "Swift",
      "Kotlin",
      "Firebase",
      "GraphQL"
    ],

    domains: [
      {
        name: "Business Applications",
        desc: "Custom applications that improve workflows, productivity, and business operations."
      },
      {
        name: "E-Commerce Apps",
        desc: "Mobile shopping experiences designed for performance, security, and customer engagement."
      },
      {
        name: "Customer Platforms",
        desc: "Scalable applications with user accounts, dashboards, notifications, and API integrations."
      }
    ],

    features: [
      {
        title: "Cross-Platform Development",
        desc: "Build once and deliver consistent experiences across iOS and Android."
      },
      {
        title: "Secure Architecture",
        desc: "Applications developed with modern security practices and reliable backend infrastructure."
      },
      {
        title: "Scalable Performance",
        desc: "Optimized applications designed to support growing users and evolving business needs."
      }
    ]
  },

  "ai-automation": {
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Intelligent automation that saves time and improves efficiency.",
    description:
      "We build custom AI-powered workflows that automate repetitive tasks, streamline business processes, and help teams work more efficiently. From AI assistants to workflow automation, we create solutions tailored to your operations.",

    detailedContent: [
      {
        heading: "Smarter Business Processes",
        paragraphs: [
          "Many businesses spend valuable time on repetitive manual tasks that slow productivity and increase operational costs. Our AI Business Automation solutions help streamline everyday processes by automating repetitive work while allowing your team to focus on higher-value activities.",
          "We analyze your existing workflows, identify opportunities for automation, and develop practical AI solutions that integrate seamlessly with your existing systems and business processes."
        ]
      },
      {
        heading: "Custom AI Solutions",
        paragraphs: [
          "Whether you need AI-powered customer support, document processing, intelligent chatbots, or workflow automation, we build solutions designed specifically around your business requirements instead of relying on generic templates.",
          "Our AI systems can automate repetitive tasks, organize information, assist customer interactions, and improve operational efficiency while maintaining a smooth experience for both your team and your customers."
        ]
      },
      {
        heading: "Secure, Reliable & Scalable",
        paragraphs: [
          "Security and reliability are essential when implementing AI into business operations. We follow modern development practices to build secure automation systems that protect business data while ensuring consistent performance.",
          "Our scalable architecture allows your automation workflows to grow alongside your business, making it easier to introduce new features, integrate additional services, and support changing business needs."
        ]
      },
      {
        heading: "Connected Business Workflows",
        paragraphs: [
          "Modern businesses rely on multiple platforms including CRMs, communication tools, payment systems, and internal software. We connect these systems through intelligent automation, reducing manual work and improving data consistency across your organization.",
          "By automating information flow between your business tools, we help improve productivity, reduce errors, and create more efficient day-to-day operations."
        ]
      }
    ],

    icon: <SmartToyIcon fontSize="large" />,

    technologies: [
      "Python",
      "LangChain",
      "OpenAI API",
      "Make.com",
      "Zapier",
      "Pinecone"
    ],

    domains: [
      {
        name: "Customer Support",
        desc: "AI assistants and chatbots that automate customer interactions and support workflows."
      },
      {
        name: "Business Operations",
        desc: "Workflow automation that reduces manual tasks and improves operational efficiency."
      },
      {
        name: "HR & Recruitment",
        desc: "Automated resume processing, candidate screening, and recruitment workflows."
      }
    ],

    features: [
      {
        title: "Workflow Automation",
        desc: "Identify repetitive tasks and automate them using intelligent AI solutions."
      },
      {
        title: "System Integration",
        desc: "Connect CRMs, business tools, communication platforms, and third-party services."
      },
      {
        title: "AI Assistants",
        desc: "Custom AI chat and voice assistants designed to support your business operations."
      }
    ]
  },

  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Data-driven marketing strategies that help your business grow.",
    description:
      "We create digital marketing strategies that improve brand visibility, attract qualified audiences, and support sustainable business growth. From content marketing to campaign optimization, every strategy is backed by data and measurable insights.",

    detailedContent: [
      {
        heading: "Marketing Built Around Your Goals",
        paragraphs: [
          "Every business has different audiences, objectives, and challenges. We develop customized digital marketing strategies that align with your business goals while helping you reach the right customers across multiple digital channels.",
          "Our approach combines market research, audience insights, and performance analysis to create campaigns that strengthen brand awareness, generate quality leads, and support long-term business growth."
        ]
      },
      {
        heading: "Content & Campaign Optimization",
        paragraphs: [
          "Creating valuable content is only one part of an effective marketing strategy. We help businesses distribute content across the right channels while continuously optimizing campaigns using real performance data and audience behavior.",
          "From social media marketing and email campaigns to paid advertising and content marketing, every campaign is designed to improve engagement and deliver measurable business outcomes."
        ]
      },
      {
        heading: "Performance Tracking & Insights",
        paragraphs: [
          "Understanding campaign performance is essential for continuous improvement. We implement analytics and reporting tools that provide clear insights into traffic, conversions, audience behavior, and overall marketing performance.",
          "Regular reporting allows businesses to make informed decisions, identify new opportunities, and refine marketing strategies based on real data rather than assumptions."
        ]
      },
      {
        heading: "Continuous Growth & Optimization",
        paragraphs: [
          "Digital marketing is an ongoing process of testing, learning, and improving. We continuously monitor campaign performance, optimize targeting, refine messaging, and explore new opportunities to improve results over time.",
          "By combining strategic planning with data-driven optimization, we help businesses build a stronger digital presence while supporting long-term customer acquisition and brand growth."
        ]
      }
    ],

    icon: <CampaignIcon fontSize="large" />,

    technologies: [
      "HubSpot",
      "Salesforce",
      "Google Analytics 4",
      "Meta Business Suite",
      "Mailchimp"
    ],

    domains: [
      {
        name: "B2B Marketing",
        desc: "Lead generation and marketing strategies designed for business growth."
      },
      {
        name: "E-Commerce",
        desc: "Campaigns that improve visibility, customer engagement, and online sales."
      },
      {
        name: "Local Businesses",
        desc: "Targeted digital marketing strategies that help businesses reach nearby customers."
      }
    ],

    features: [
      {
        title: "Marketing Strategy",
        desc: "Custom digital marketing plans aligned with your business objectives."
      },
      {
        title: "Campaign Management",
        desc: "Manage and optimize social media, email, and digital advertising campaigns."
      },
      {
        title: "Analytics & Reporting",
        desc: "Performance tracking with actionable insights to support better marketing decisions."
      }
    ]
  },

  "search-engine-optimization": {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    subtitle: "Sustainable SEO strategies that improve visibility and long-term growth.",
    description:
      "We help businesses improve their search engine visibility through technical SEO, content optimization, keyword research, and performance-driven strategies that support long-term organic growth.",

    detailedContent: [
      {
        heading: "Building a Strong SEO Foundation",
        paragraphs: [
          "Search Engine Optimization is a long-term investment that helps businesses increase online visibility and attract qualified organic traffic. Our SEO strategies focus on improving website performance, content quality, and technical health to support sustainable growth.",
          "Every SEO project begins with understanding your business, target audience, and competitors. We develop customized strategies designed to improve search visibility while aligning with your long-term business objectives."
        ]
      },
      {
        heading: "Technical SEO & Website Performance",
        paragraphs: [
          "A well-optimized website provides a better experience for both users and search engines. We perform comprehensive technical SEO audits to identify opportunities related to website speed, crawlability, mobile usability, structured data, and indexing.",
          "By improving Core Web Vitals, optimizing site architecture, and implementing structured data where appropriate, we help create a strong technical foundation for long-term SEO success."
        ]
      },
      {
        heading: "Content Strategy & Organic Growth",
        paragraphs: [
          "High-quality content plays a vital role in building search visibility. We create content strategies based on keyword research, user intent, and topical relevance to help businesses attract the right audience through valuable information.",
          "Our approach focuses on producing useful, well-structured content that supports both search engine optimization and a better user experience."
        ]
      },
      {
        heading: "Continuous Monitoring & Optimization",
        paragraphs: [
          "SEO is an ongoing process that requires regular analysis and refinement. We monitor website performance, keyword trends, user behavior, and search visibility to identify new opportunities for improvement.",
          "Through continuous optimization and data-driven insights, we help businesses strengthen their online presence while adapting to changing search engine best practices."
        ]
      }
    ],

    icon: <SearchIcon fontSize="large" />,

    technologies: [
      "Ahrefs",
      "SEMrush",
      "Google Search Console",
      "Screaming Frog",
      "Schema Markup"
    ],

    domains: [
      {
        name: "Local Businesses",
        desc: "Local SEO strategies that improve visibility for location-based searches."
      },
      {
        name: "Business Websites",
        desc: "Technical SEO and content optimization for long-term organic growth."
      },
      {
        name: "E-Commerce",
        desc: "SEO strategies focused on product visibility, category pages, and online sales."
      }
    ],

    features: [
      {
        title: "Technical SEO",
        desc: "Improve website performance, crawlability, indexing, and Core Web Vitals."
      },
      {
        title: "Content Optimization",
        desc: "Create search-friendly content aligned with user intent and business goals."
      },
      {
        title: "SEO Analytics",
        desc: "Track organic performance with actionable insights and continuous optimization."
      }
    ]
  },

  "graphic-design": {
    slug: "graphic-design",
    title: "Graphic Design",
    subtitle: "Creative designs that strengthen your brand and engage your audience.",
    description:
      "We create professional graphic design solutions that help businesses communicate clearly, build brand recognition, and deliver consistent visual experiences across digital and print platforms.",

    detailedContent: [
      {
        heading: "Building a Strong Visual Identity",
        paragraphs: [
          "A well-designed visual identity helps businesses communicate professionalism, build trust, and create lasting impressions. We design brand assets that reflect your business values while maintaining consistency across every customer touchpoint.",
          "From logo design and brand guidelines to marketing materials and digital assets, every design is created with clarity, usability, and long-term brand consistency in mind."
        ]
      },
      {
        heading: "UI/UX & Digital Design",
        paragraphs: [
          "Great digital experiences begin with thoughtful design. We create user-focused interfaces for websites, web applications, and mobile apps that balance visual appeal with usability and accessibility.",
          "Using modern design tools and collaborative workflows, we develop wireframes, prototypes, and interface designs that help businesses deliver intuitive digital experiences across all devices."
        ]
      },
      {
        heading: "Marketing & Brand Assets",
        paragraphs: [
          "Consistent branding across digital and offline channels helps businesses build stronger recognition. We design social media creatives, advertising materials, presentations, brochures, banners, and other marketing assets that align with your overall brand identity.",
          "Every design is optimized for its intended platform while maintaining a cohesive visual style that supports your marketing and communication goals."
        ]
      },
      {
        heading: "Creative Design That Evolves With Your Business",
        paragraphs: [
          "As your business grows, your visual identity should remain flexible and consistent across new campaigns, products, and digital platforms. We create scalable design systems that make it easier to maintain brand consistency over time.",
          "Whether you're launching a new product, refreshing your branding, or expanding your digital presence, our design solutions are built to support your long-term business objectives."
        ]
      }
    ],

    icon: <DesignServicesIcon fontSize="large" />,

    technologies: [
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "After Effects",
      "Spline 3D"
    ],

    domains: [
      {
        name: "Startups",
        desc: "Brand identity, logo design, presentations, and marketing materials for growing businesses."
      },
      {
        name: "E-Commerce",
        desc: "Product graphics, promotional creatives, and visual assets that enhance online shopping experiences."
      },
      {
        name: "Business Branding",
        desc: "Professional visual identity systems for websites, digital products, and marketing campaigns."
      }
    ],

    features: [
      {
        title: "Brand Identity",
        desc: "Logos, color systems, typography, and brand guidelines designed for consistency."
      },
      {
        title: "UI/UX Design",
        desc: "User-focused interfaces, wireframes, and interactive prototypes for digital products."
      },
      {
        title: "Marketing Design",
        desc: "Creative assets for social media, advertising, presentations, and promotional campaigns."
      }
    ]
  }
};

export const getAllServices = () => Object.values(detailedServices);

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  if (slug === 'app-development') return detailedServices['mobile-app-development'];
  if (slug === 'seo') return detailedServices['search-engine-optimization'];
  if (slug === 'graphics-designing') return detailedServices['graphic-design'];
  return detailedServices[slug];
};
