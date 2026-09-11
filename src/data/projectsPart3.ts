import { PortfolioProject } from "./portfolioTypes";

export const projectsPart3: PortfolioProject[] = [
  {
  slug: 'enterprise-seo-migration',
  title: 'Enterprise SEO Site Migration',
  client: 'National News Network',
  category: 'SEO',
  categorySlug: 'seo',
  thumbnailColor: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)',
  image: '/images/portfolio/EnterpriseSeo.png',
  metric: "+18% Traffic Lift",
  metricLabel: "Post-Migration",
  timeline: "14 Weeks",
  techStack: ["Screaming Frog", "Next.js SSR", "Google Search Console", "Schema.org", "Log Analysis"],
  summary: 'Planned and executed a large-scale SEO migration for a 500,000+ page news platform while preserving search visibility and improving long-term organic performance.',
  challenge: [
    'National News Network (NNN), one of the country’s largest digital publishers, was preparing to replace its decade-old CMS with a modern headless architecture. Although the legacy platform contained over 500,000 indexed pages, years of accumulated technical debt had created slow loading speeds, inefficient crawl paths, duplicate content issues, and poor Core Web Vitals. The migration was essential for future growth but carried significant SEO risk.',
    'Organic search was the company’s primary acquisition channel and directly influenced advertising revenue. Thousands of articles ranked for competitive news queries, supported by years of earned backlinks and strong domain authority. Any indexing issues, broken redirects, or metadata loss during migration could have reduced visibility across hundreds of thousands of pages within days.',
    'The objective extended far beyond launching a faster website. Every URL, canonical tag, structured data element, and internal linking signal needed to be preserved while introducing an entirely new technical architecture. The migration required careful planning, extensive validation, and continuous monitoring before, during, and after launch.'
  ], 
  execution: [
    'We developed a phased migration strategy beginning with a complete technical SEO audit and URL inventory. More than 150,000 legacy URLs were mapped to their new destinations using permanent 301 redirects, while XML sitemaps, canonical structures, hreflang configurations, metadata, and structured data were regenerated to align with the new architecture without losing accumulated search authority.',
    'The new platform was built using Next.js with Server-Side Rendering (SSR) to ensure search engines received fully rendered HTML during crawling. We optimized page templates for Core Web Vitals, reduced JavaScript execution, improved internal linking architecture, and implemented advanced Schema markup across articles, categories, authors, and news content to maximize search engine understanding.',
    'Before deployment, we performed multiple staging crawls using enterprise SEO auditing tools to identify redirect chains, orphan pages, canonical conflicts, duplicate metadata, and crawl inefficiencies. After launch, real-time monitoring through Google Search Console, log file analysis, and analytics dashboards allowed rapid validation of indexing behavior and ensured any anomalies were resolved before they could impact rankings.'
  ],
  solution: [
    'The migration was completed with virtually no disruption to search performance. Existing rankings remained stable throughout the transition as Google efficiently processed the redirect framework and indexed the new platform. Search engines were able to understand the new architecture immediately thanks to consistent technical signals and optimized server-side rendering.',
    'Beyond preserving rankings, the new infrastructure significantly improved overall website quality. Faster loading speeds, cleaner information architecture, improved crawl efficiency, and enhanced structured data strengthened the website’s technical foundation, allowing new articles to be discovered and indexed much faster than before.',
    'Within the first two months, the combination of improved Core Web Vitals, stronger crawlability, and optimized page rendering contributed to measurable organic growth. Editorial teams also benefited from a modern publishing workflow that enabled faster content deployment while maintaining SEO best practices across every published article.'
  ],
  results: [
    'Successfully migrated over 500,000 indexed pages with no significant organic traffic loss',
    'Organic traffic increased by 18% within 60 days following launch',
    'Implemented and validated more than 150,000 permanent 301 redirects',
    'Improved Google crawl efficiency and accelerated indexation across newly published content'
  ]
},

 {
  slug: 'rebranding-fintech-identity',
  title: 'Modern Brand Identity & Design System',
  client: 'Vault Finance',
  category: 'Graphics Designing',
  categorySlug: 'graphics-designing',
  thumbnailColor: 'linear-gradient(135deg, #141E30 0%, #243B55 100%)',
  image: '/images/portfolio/rebrand.png',
  metric: "-40% UI Dev Time",
  metricLabel: "Design Velocity",
  timeline: "6 Weeks",
  techStack: ["Figma", "Design Tokens", "Illustrator", "WCAG AAA", "Typography System"],
  summary: 'Created a complete visual identity and scalable design system for a fast-growing digital finance platform.',
  challenge: [
    'Vault Finance had built an innovative financial platform but struggled to establish trust with potential customers. Their outdated logo, inconsistent marketing materials, and disconnected product interface created a weak first impression that failed to reflect the quality of their technology.',
    'As the company prepared to launch new digital banking services, maintaining consistency across web, mobile, social media, presentations, and advertising became increasingly difficult. Different teams were producing assets independently, resulting in inconsistent colors, typography, layouts, and messaging that diluted brand recognition.',
    'The company needed a modern visual identity that communicated professionalism, security, and innovation while providing developers and marketers with a unified design system capable of supporting future product growth.'
  ],
  execution: [
    'We began with extensive brand discovery workshops to define the company’s positioning, audience, tone, and visual direction. Multiple logo concepts, typography combinations, and color systems were explored before selecting a modern identity focused on clarity, trust, and scalability.',
    'Using Figma, we designed a comprehensive design system containing reusable UI components, iconography, illustrations, color tokens, spacing rules, buttons, forms, navigation patterns, and responsive layouts. Every component was documented to ensure consistency across products and future development.',
    'Beyond digital products, we extended the identity across presentations, social media templates, marketing creatives, business stationery, promotional materials, and brand guidelines, creating a unified ecosystem that every internal team could follow.'
  ],
  solution: [
    'The new visual identity transformed Vault Finance into a premium, recognizable fintech brand with a consistent presence across every customer touchpoint. Whether users interacted through the website, mobile application, social campaigns, or investor presentations, the experience remained visually cohesive.',
    'The centralized design system significantly accelerated collaboration between designers and developers. New product features could be designed and implemented much faster using reusable components while maintaining perfect consistency throughout the platform.',
    'The refreshed branding also strengthened customer confidence and improved marketing performance by delivering a more polished, trustworthy appearance that aligned with the company’s long-term business goals and future expansion plans.'
  ],
  results: [
    'Developed a complete brand identity and design system',
    'Reduced UI design and development time by 40%',
    'Improved brand consistency across all digital channels',
    'Increased landing page conversion rate by 24%'
  ]
}
];
