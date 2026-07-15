import { PortfolioProject } from "./portfolioTypes";

export const projectsPart3: PortfolioProject[] = [
  {
  slug: 'enterprise-seo-migration',
  title: 'Enterprise SEO Site Migration',
  client: 'National News Network',
  category: 'SEO',
  categorySlug: 'seo',
  thumbnailColor: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)',
  image: '/images/services/seo.png',
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
  slug: 'local-seo-dominance',
  title: 'Multi-Location Local SEO Growth Strategy',
  client: 'Elite Dental Group',
  category: 'SEO',
  categorySlug: 'seo',
  thumbnailColor: 'linear-gradient(135deg, #8E0E00 0%, #1F1C18 100%)',
  image: '/images/services/seo.png',
  summary: 'Developed a scalable Local SEO strategy that significantly improved search visibility and Google Business Profile performance across 45 franchise locations.',
  challenge: [
    'Elite Dental Group was rapidly expanding its network of clinics across multiple cities, but every new location depended heavily on paid advertising to generate appointments. Although Google Ads consistently delivered leads, the increasing cost per acquisition made long-term growth expensive and difficult to sustain. The organization needed a more cost-effective channel capable of generating qualified local traffic organically.',
    'Despite operating dozens of physical clinics, the brand had limited visibility in Google Maps and local search results. Business listings contained inconsistent information, location pages lacked optimization, and many clinics failed to appear for high-intent searches such as "dentist near me" or "emergency dentist" within their target markets. Competitors with stronger local SEO foundations consistently captured the majority of nearby searches.',
    'The objective was to create a standardized Local SEO framework that could be replicated across every franchise location. This required improving technical consistency, strengthening local relevance, increasing review volume, and building location-specific authority without sacrificing brand consistency across the entire organization.'
  ],
  execution: [
    'We began by auditing every Google Business Profile and local citation associated with the brand. Business information was standardized across all platforms, duplicate listings were removed, missing categories and attributes were completed, and NAP (Name, Address, Phone) consistency was established throughout major local directories to strengthen trust signals for search engines.',
    'Next, we rebuilt the website’s local presence by creating dedicated landing pages for each clinic. Every page included optimized metadata, localized service content, embedded Google Maps, structured LocalBusiness schema, location-specific FAQs, and internally linked service pages. This provided search engines with clear geographical relevance while improving the overall user experience for prospective patients.',
    'To strengthen reputation signals, we implemented an automated review acquisition workflow that encouraged satisfied patients to leave Google reviews shortly after appointments. Performance was monitored continuously through Google Search Console, Google Business Profile Insights, and local ranking tools, allowing ongoing optimization based on keyword visibility, engagement metrics, and conversion data.'
  ],
  solution: [
    'The unified Local SEO strategy established a strong digital presence for every clinic while maintaining a consistent brand identity across all franchise locations. Optimized Google Business Profiles, locally relevant landing pages, and structured data significantly improved how search engines understood and ranked each individual practice.',
    'As search visibility improved, more patients discovered nearby clinics through Google Search and Google Maps rather than paid advertisements. The increase in qualified organic traffic translated into higher phone call volume, appointment requests, and website engagement while reducing dependence on expensive acquisition channels.',
    'The scalable optimization framework also simplified future expansion. New franchise locations could follow the same proven process for business listings, local landing pages, schema implementation, and review management, allowing the organization to maintain consistent SEO performance as additional clinics were launched.'
  ],
  results: [
    'Ranked 92% of targeted local keywords within the Google Local Pack Top 3',
    'Increased organic phone inquiries by more than 300% across franchise locations',
    'Reduced monthly dependence on paid advertising, lowering overall acquisition costs',
    'Generated over 4,500 verified Google reviews while improving average location ratings'
  ]
},
{
  slug: 'tech-product-launch-video',
  title: 'Cinematic Product Launch Campaign',
  client: 'Aero Dynamics Drones',
  category: 'Video Editing',
  categorySlug: 'video-editing',
  thumbnailColor: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
  image: '/images/services/video-editing.png',
  summary: 'Produced a cinematic product launch campaign that combined storytelling, motion graphics, and technical visualization to introduce a next-generation commercial drone.',
  challenge: [
    `Aero Dynamics was preparing to launch its flagship commercial drone, Apex-Pro, built for industrial surveying, infrastructure inspections, and emergency response operations. While the engineering behind the product was exceptional, the available marketing materials failed to communicate its real-world value. Existing assets consisted primarily of technical demonstrations, presentation slides, and unedited flight recordings that struggled to capture attention or differentiate the product in a competitive market.',
    'The company required a launch video capable of introducing sophisticated technologies such as AI-assisted navigation, LiDAR mapping, and autonomous flight without overwhelming viewers with technical jargon. The campaign needed to resonate with multiple audiences—including enterprise buyers, investors, and operational teams—while reinforcing the brand's position as an innovative technology company.',
    'The objective was to transform highly technical product capabilities into a visually engaging story that could support digital marketing campaigns, investor presentations, industry events, and product launch announcements across multiple platforms.`
  ],
  execution: [
    `Our production workflow began with organizing and reviewing several terabytes of aerial footage captured in 6K and 8K resolution. The strongest sequences were selected to build a narrative focused on precision, reliability, and real-world performance. Additional motion graphics were developed using Adobe After Effects and Cinema 4D to visualize internal technologies such as obstacle detection, LiDAR scanning, and autonomous navigation in an intuitive and visually compelling way.',
    'The edit was structured to balance cinematic storytelling with product education. Dynamic pacing, seamless transitions, speed ramping, and carefully selected camera movements highlighted the drone's agility while maintaining a premium visual style. Professional color grading in DaVinci Resolve established a consistent cinematic look that aligned with the company's modern technology brand.',
    'To maximize engagement, the project included custom sound design, cinematic music composition, subtitle optimization, and multiple deliverables tailored for YouTube, LinkedIn, product presentations, and social media advertising. Every version was optimized for its respective platform while preserving a consistent visual identity.`
  ],
  solution: [
    'The completed campaign positioned Apex-Pro as a premium commercial drone rather than simply another hardware release. The combination of cinematic visuals, technical animation, and clear product messaging helped communicate complex engineering concepts in a format that was accessible to decision-makers and technical professionals alike.',
    'The launch video became the centerpiece of the company’s marketing strategy, supporting product demonstrations, trade exhibitions, investor meetings, paid advertising campaigns, and website landing pages. Its polished production quality strengthened brand perception and provided the sales team with a compelling visual asset throughout the product launch cycle.',
    'Beyond generating awareness, the campaign established a consistent visual identity that Aero Dynamics continued using across future product announcements and promotional materials. The project demonstrated how high-quality video production can simplify technical communication while increasing audience engagement and brand credibility.'
  ],
  results: [
    'Generated over 2.5 million video views across digital platforms',
    'Supported more than $5 million in product pre-orders during launch',
    'Significantly increased engagement across social and product marketing campaigns',
    'Strengthened brand visibility and industry recognition following the product launch'
  ]
},
 {
  slug: 'rebranding-fintech-identity',
  title: 'Modern Brand Identity & Design System',
  client: 'Vault Finance',
  category: 'Graphics Designing',
  categorySlug: 'graphics-designing',
  thumbnailColor: 'linear-gradient(135deg, #141E30 0%, #243B55 100%)',
  image: '/images/services/graphics-designing.png',
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
