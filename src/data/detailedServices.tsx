import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CreateIcon from '@mui/icons-material/Create';

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
    title: "Custom Web Development",
    subtitle: "High-performance digital architectures built for scale.",
    description: "We engineer lightning-fast, secure, and scalable web applications. Moving beyond simple websites, we build complex digital platforms that drive business operations and handle immense traffic with zero latency.",
    detailedContent: [
      {
        heading: "The Foundation of Digital Dominance",
        paragraphs: [
          "In today's hyper-competitive digital landscape, your website is no longer just a digital brochure; it is the core engine of your business operations. A slow, outdated, or insecure web platform directly translates to lost revenue and eroded brand trust. We specialize in Enterprise Web Development, engineering robust, scalable, and lightning-fast digital ecosystems.",
          "Our approach is deeply analytical and structurally sound. We do not rely on pre-built templates or bloated page builders. Instead, we craft bespoke architectures from the ground up, ensuring every line of code is optimized for maximum performance and unparalleled user experience."
        ]
      },
      {
        heading: "Future-Proof Architecture",
        paragraphs: [
          "Our tech stack is strictly modern, utilizing Next.js, React, and robust backend frameworks like Node.js or Python. We deploy on scalable cloud infrastructure (AWS, Vercel) ensuring your application can handle massive traffic spikes without degradation in performance.",
          "Furthermore, we implement rigorous security protocols, continuous integration/continuous deployment (CI/CD) pipelines, and comprehensive automated testing. This guarantees that your digital product is not only beautiful but incredibly resilient and secure against emerging threats."
        ]
      },
      {
        heading: "Decoupled & Headless Systems",
        paragraphs: [
          "A successful business will outgrow a monolithic architecture. That is why we champion decoupled, headless architectures and microservices. By separating the frontend presentation layer from the backend business logic, we give you the agility to adapt to new technologies, integrate with any third-party API, and pivot your strategy without rewriting your entire codebase.",
          "Investing in our Enterprise Web Development means investing in a platform that will not become obsolete in two years. It is a commitment to digital excellence, ensuring that as your traffic surges and your market expands, your digital infrastructure remains a catalyst for growth, never a bottleneck."
        ]
      },
      {
        heading: "Continuous Integration & Deployment (CI/CD)",
        paragraphs: [
          "A static codebase is a dying codebase. We implement fully automated CI/CD pipelines using GitHub Actions, Docker, and Kubernetes. This allows us to push updates, security patches, and new features to your live application multiple times a day without a single second of downtime.",
          "This level of deployment agility ensures that your business can respond to market changes instantly. If a user feedback loop demands a new feature, our pipeline ensures it goes from staging to production flawlessly, with automated rollbacks protecting the user experience."
        ]
      }
    ],
    icon: <CodeIcon fontSize="large" />,
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    domains: [
      { name: "E-Commerce", desc: "High-conversion headless storefronts capable of handling 10k+ concurrent users." },
      { name: "FinTech", desc: "Bank-grade secure web portals with real-time data processing." },
      { name: "SaaS Platforms", desc: "Scalable multi-tenant architectures with advanced user permission systems." }
    ],
    features: [
      { title: "Custom Architecture", desc: "Built from scratch avoiding bloated templates for maximum speed." },
      { title: "API Integrations", desc: "Seamlessly connecting your CRM, ERP, and payment gateways." },
      { title: "Technical SEO", desc: "Server-side rendering ensuring perfect indexability and fast load times." }
    ]
  },
  "app-development": {
    slug: "app-development",
    title: "Web & Mobile App Development",
    subtitle: "Flawless mobile experiences for iOS and Android.",
    description: "Your users live on their phones. We build beautiful, intuitive, and crash-free mobile applications that keep your brand in their pockets. From complex backend data syncing to buttery-smooth UI animations.",
    detailedContent: [
      {
        heading: "The Mobile-First Mandate",
        paragraphs: [
          "We are living in a mobile-first world. If your business relies on digital engagement, a flawless mobile application is no longer a luxury—it is an absolute necessity. Our Native App Development service is dedicated to crafting premium, high-performance mobile experiences that dominate the iOS and Android ecosystems.",
          "We do not build generic apps; we build indispensable tools. Whether it's a consumer-facing retail app designed to maximize spontaneous purchases, or a complex enterprise tool built to streamline field operations, we focus obsessively on user retention and daily active engagement."
        ]
      },
      {
        heading: "Native vs. Cross-Platform Excellence",
        paragraphs: [
          "While we utilize cutting-edge cross-platform frameworks like React Native to ensure speed to market and codebase efficiency, we never compromise on the 'native feel'. We engineer our applications to take full advantage of underlying OS hardware—from haptic feedback engines and precise GPS tracking to advanced camera APIs.",
          "Security is paramount in the mobile ecosystem. We implement biometric authentication, secure enclave keychain storage, and encrypted local databases. Whether you are processing financial transactions or storing protected health information, our apps comply with the strictest industry standards (PCI-DSS, HIPAA)."
        ]
      },
      {
        heading: "Lifecycle Management & Analytics",
        paragraphs: [
          "Building the app is only half the battle; getting it approved and discovered is equally challenging. Our service encompasses the entire product lifecycle, from initial UI/UX wireframing to navigating the complex compliance guidelines of the Apple App Store and Google Play Store.",
          "Post-launch, we integrate robust analytics and crash-reporting tools to monitor user behavior and application stability in real-time. This data-driven approach allows us to iterate rapidly, deploying updates that continuously refine the user journey and maximize your Return on Investment."
        ]
      },
      {
        heading: "Offline-First Data Synchronization",
        paragraphs: [
          "A premium mobile application should not completely break when the user loses internet connection. We architect our applications with an 'offline-first' mentality, utilizing local SQLite databases and robust caching mechanisms (like React Query and Apollo Client) to ensure core functionalities remain accessible.",
          "When the device regains connectivity, our sophisticated background synchronization algorithms seamlessly resolve data conflicts and push local changes to the cloud. This provides a completely uninterrupted user experience, crucial for enterprise field-service apps and modern consumer platforms."
        ]
      }
    ],
    icon: <SmartphoneIcon fontSize="large" />,
    technologies: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL"],
    domains: [
      { name: "HealthTech", desc: "HIPAA-compliant patient portals and fitness tracking applications." },
      { name: "On-Demand", desc: "Real-time geo-location apps for delivery and ride-sharing services." },
      { name: "Retail", desc: "Augmented reality (AR) shopping experiences and loyalty programs." }
    ],
    features: [
      { title: "Cross-Platform", desc: "Write once, deploy everywhere with near-native performance." },
      { title: "Offline Mode", desc: "Robust local databases ensuring functionality without internet." },
      { title: "Hardware Access", desc: "Deep integration with cameras, GPS, and biometric sensors." }
    ]
  },
  "ai-automation": {
    slug: "ai-automation",
    title: "AI Business Automation",
    subtitle: "Replace manual labor with intelligent, autonomous workflows.",
    description: "We audit your operations and build custom AI-driven workflows that eliminate repetitive tasks. From automated customer support agents to intelligent document parsing, we drastically reduce your operational overhead.",
    detailedContent: [
      {
        heading: "The Post-Labor Economy",
        paragraphs: [
          "The modern business landscape is undergoing a tectonic shift. Tasks that previously required armies of human workers can now be executed flawlessly, 24/7, at a fraction of the cost. Our AI Business Automation services are designed to identify operational bottlenecks and replace manual labor with intelligent, autonomous workflows.",
          "We conduct a granular audit of your daily operations, identifying the high-volume, low-complexity tasks that drain your resources. We then engineer bespoke automation pipelines—connecting your CRM, ERP, and communication channels—to create a frictionless operational machine."
        ]
      },
      {
        heading: "Intelligent Autonomous Agents",
        paragraphs: [
          "Traditional automation relies on rigid 'if-this-then-that' logic, which breaks the moment an exception occurs. We deploy the next generation of Intelligent Autonomous Agents powered by Large Language Models (LLMs). These agents can read unstructured data, make contextual decisions, draft emails, and execute complex multi-step processes autonomously.",
          "Imagine a customer support system where a voice or text agent not only answers FAQs but can autonomously access your database, process a refund, or update a shipping address, escalating to a human only when absolute nuance is required. This drastically reduces your customer support overhead while providing instant gratification to your clients."
        ]
      },
      {
        heading: "Security and Scalability First",
        paragraphs: [
          "Integrating AI into your core business processes requires an uncompromising stance on data security. We build our automations using secure, isolated environments, ensuring that sensitive customer data and proprietary business logic are never exposed to public LLM training sets.",
          "The true ROI of AI Automation is not just in cost reduction, but in human reallocation. By offloading mundane tasks to our intelligent systems, your team is freed to focus on creative problem-solving, relationship building, and high-level strategy—the things that actually drive business growth."
        ]
      },
      {
        heading: "Dynamic API Orchestration",
        paragraphs: [
          "Modern businesses rely on dozens of disjointed SaaS applications. Our automation architecture acts as the central nervous system, utilizing dynamic API orchestration to force these tools to communicate. We build robust middleware that intercepts webhooks from your CRM, parses the data, and automatically updates your ERP and billing software without human intervention.",
          "This completely eliminates 'swivel-chair integration'—where employees manually copy and paste data between screens. By ensuring real-time data parity across your entire organizational stack, we eliminate human error and dramatically accelerate your operational velocity."
        ]
      }
    ],
    icon: <SmartToyIcon fontSize="large" />,
    technologies: ["Python", "LangChain", "OpenAI API", "Make.com", "Zapier", "Pinecone"],
    domains: [
      { name: "Customer Support", desc: "24/7 autonomous agents handling tier-1 and tier-2 inquiries." },
      { name: "Logistics", desc: "Predictive inventory management and automated supply chain alerts." },
      { name: "HR & Recruitment", desc: "Automated resume parsing and initial candidate screening workflows." }
    ],
    features: [
      { title: "Workflow Mapping", desc: "Deep analysis of your operations to identify automation bottlenecks." },
      { title: "Agnostic Integration", desc: "Connecting disparate systems (CRMs, ERPs, Slack) seamlessly." },
      { title: "Voice AI Agents", desc: "Deploying conversational AI for inbound and outbound calling." }
    ]
  },
  "ai-tools": {
    slug: "ai-tools",
    title: "Custom AI Development",
    subtitle: "Proprietary AI models trained on your unique business data.",
    description: "Stop relying on generic AI. We build custom Large Language Models (LLMs) and machine learning tools trained exclusively on your proprietary data. These tools provide highly specific, context-aware intelligence that gives you an unbeatable competitive moat.",
    detailedContent: [
      {
        heading: "The Power of Proprietary Intelligence",
        paragraphs: [
          "While off-the-shelf AI models like ChatGPT are powerful, they lack the specific, nuanced context of your unique business operations. Custom AI Tools Development is about building your own proprietary intelligence. We engineer specialized machine learning models and LLMs that are trained exclusively on your company's data, giving you an unparalleled competitive advantage.",
          "By grounding the AI in your historical data, internal wikis, and customer interaction logs, we create tools that truly understand your industry jargon, business rules, and corporate voice. This is not generic AI; this is artificial intelligence engineered to act as your most knowledgeable and capable employee."
        ]
      },
      {
        heading: "Advanced RAG Architecture",
        paragraphs: [
          "The biggest challenge with modern LLMs is 'hallucination'—confidently stating incorrect information. To completely eliminate this risk for enterprise applications, we utilize advanced Retrieval-Augmented Generation (RAG) architectures. When a user asks a question, the system first retrieves the exact factual documents from your secure Vector Database, and then forces the AI to base its answer strictly on those retrieved facts.",
          "This architecture ensures 100% factual accuracy and provides verifiable citations for every claim the AI makes. It is the gold standard for deploying AI in high-stakes environments like Legal Tech, Healthcare, and Financial Services where accuracy is non-negotiable."
        ]
      },
      {
        heading: "Data Sovereignty and Security",
        paragraphs: [
          "When you build a custom AI tool with us, you own the infrastructure and the intelligence. We deploy models on secure, private cloud instances (like AWS SageMaker) or on-premise servers. Your proprietary data is never used to train public models, and your intellectual property remains strictly within your control.",
          "Whether you need a predictive analytics dashboard to forecast market trends, a custom code-generation assistant for your developers, or a highly specialized document analysis tool, we build robust, secure AI software that integrates seamlessly into your existing enterprise architecture."
        ]
      },
      {
        heading: "Seamless Enterprise Integration",
        paragraphs: [
          "A custom AI model is useless if it exists in a silo. We specialize in seamless enterprise integration, ensuring that your newly developed AI tools connect flawlessly with your existing tech stack. Whether it requires custom API development, secure tunneling, or deep integration with legacy monolithic systems, our deployment engineers ensure zero friction in adoption.",
          "We utilize containerization technologies like Docker and Kubernetes to ensure that your AI models are highly scalable and can handle thousands of concurrent inferences without latency degradation, providing a completely fluid user experience."
        ]
      }
    ],
    icon: <AutoAwesomeIcon fontSize="large" />,
    technologies: ["TensorFlow", "PyTorch", "Hugging Face", "AWS SageMaker", "Vector Databases"],
    domains: [
      { name: "Legal Tech", desc: "Contract analysis and automated legal precedent research." },
      { name: "Finance", desc: "Algorithmic risk assessment and fraud detection models." },
      { name: "Real Estate", desc: "Automated property valuation and predictive market trend analysis." }
    ],
    features: [
      { title: "Data Privacy", desc: "Secure, isolated environments ensuring your data never trains public models." },
      { title: "Fine-Tuning", desc: "Adapting foundational models to understand your specific industry jargon." },
      { title: "RAG Architecture", desc: "Retrieval-Augmented Generation for fact-based, hallucination-free outputs." }
    ]
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Data-driven campaigns that dominate the digital landscape.",
    description: "We deploy aggressive, data-driven marketing strategies that capture market share. From social media dominance to strategic content distribution, our holistic approach ensures your brand message reaches the right audience at the perfect moment.",
    detailedContent: [
      {
        heading: "The Omnichannel Growth Engine",
        paragraphs: [
          "In a fragmented digital landscape, single-channel marketing is a recipe for stagnation. A successful 360° Digital Marketing strategy requires a unified, omnichannel approach where every touchpoint—from your organic social media to your email drip campaigns—works in aggressive synergy. We do not just run disjointed campaigns; we build a comprehensive growth engine that surrounds your target audience.",
          "Our methodology is heavily rooted in data science and behavioral psychology. Before we launch a single asset, we conduct a deep-dive analysis of your market positioning, competitor blind spots, and customer pain points. This allows us to craft messaging that doesn't just reach people, but actively influences their purchasing decisions."
        ]
      },
      {
        heading: "Data-Driven Content Distribution",
        paragraphs: [
          "Creating great content is only 20% of the battle; the other 80% is distribution. We utilize advanced marketing automation platforms like HubSpot and Salesforce to deliver hyper-personalized content at scale. By tracking user behavior across your digital properties, we can trigger specific nurturing sequences that guide prospects smoothly from cold awareness to warm conversion.",
          "We also focus heavily on maximizing the lifetime value (LTV) of your existing customers. Through strategic email marketing, loyalty programs, and community engagement, we turn one-time buyers into vocal brand advocates, creating a compounding effect on your overall revenue."
        ]
      },
      {
        heading: "Transparent ROI Tracking",
        paragraphs: [
          "The days of 'guessing' which marketing efforts are working are over. We implement rigorous, full-funnel attribution tracking using tools like Google Analytics 4 and customized Looker Studio dashboards. This means you can track every dollar spent back to a specific lead or sale.",
          "By partnering with Aetibar for your digital marketing, you are hiring a fractional Chief Marketing Officer team. We provide the strategic vision, the tactical execution, and the transparent reporting needed to dominate your industry and achieve aggressive, sustainable growth."
        ]
      },
      {
        heading: "Behavioral Retargeting Mastery",
        paragraphs: [
          "Generating initial awareness is relatively easy; converting that awareness into revenue is where most campaigns fail. We implement sophisticated behavioral retargeting strategies that track exactly how a user interacts with your digital properties. If they read a specific blog post or abandoned a cart, we serve them highly contextual, customized follow-up messaging.",
          "This methodology ensures that your brand remains omnipresent throughout the prospect's entire consideration phase. By utilizing dynamic ad creatives and personalized email sequences, we significantly lower your Customer Acquisition Cost (CAC) and maximize your overall marketing efficiency."
        ]
      }
    ],
    icon: <CampaignIcon fontSize="large" />,
    technologies: ["HubSpot", "Salesforce", "Google Analytics 4", "Meta Business Suite", "Mailchimp"],
    domains: [
      { name: "B2B Tech", desc: "Account-Based Marketing (ABM) for high-ticket software sales." },
      { name: "Retail", desc: "Omnichannel brand awareness and customer retention campaigns." },
      { name: "Hospitality", desc: "Localized engagement and influencer partnership strategies." }
    ],
    features: [
      { title: "Omnichannel Strategy", desc: "Unified messaging across social, email, and web platforms." },
      { title: "Marketing Automation", desc: "Drip campaigns and lead nurturing sequences that convert while you sleep." },
      { title: "Analytics & Reporting", desc: "Transparent, real-time dashboards tracking every marketing dollar." }
    ]
  },
  "paid-advertising": {
    slug: "paid-advertising",
    title: "Performance Marketing",
    subtitle: "Maximize your Return on Ad Spend (ROAS) with precision targeting.",
    description: "We engineer highly profitable paid ad campaigns across search and social platforms. By utilizing advanced audience segmentation, A/B testing, and AI-driven bidding strategies, we acquire high-intent customers at the lowest possible cost.",
    detailedContent: [
      {
        heading: "Engineered for Maximum ROAS",
        paragraphs: [
          "Paid Advertising is not about spending money to get clicks; it is about engineering a mathematical formula where every dollar inserted yields a predictable, profitable return. We specialize in structuring high-performance campaigns across Google, Meta, LinkedIn, and TikTok, obsessing over one metric above all others: Return on Ad Spend (ROAS).",
          "Unlike agencies that set campaigns on autopilot, we manage your budget with absolute precision. We utilize advanced AI-driven bidding strategies and granular audience segmentation to ensure your ads are only shown to users who possess the highest intent and purchasing power."
        ]
      },
      {
        heading: "Creative Testing at Scale",
        paragraphs: [
          "In the modern advertising ecosystem, algorithms have largely commoditized media buying. The true differentiator is the creative. We deploy a rigorous multivariant testing methodology, simultaneously testing dozens of ad copy variations, static images, and video creatives to identify the 'winning' combinations.",
          "This data-driven approach to creative ensures that we are constantly lowering your Cost Per Acquisition (CPA) while fighting ad fatigue. By combining striking visual design with direct-response copywriting, we craft ads that disrupt the user's feed and compel immediate action."
        ]
      },
      {
        heading: "Full-Funnel Retargeting Strategy",
        paragraphs: [
          "Over 95% of first-time visitors will leave your site without converting. A sophisticated Paid Advertising strategy relies heavily on strategic retargeting. We implement advanced pixel tracking and server-side APIs to track user behavior, allowing us to serve highly contextual follow-up ads based on the exact pages they viewed or products they added to their cart.",
          "Whether you need to generate high-ticket B2B leads via LinkedIn or drive massive e-commerce sales through Google Shopping, our performance marketing team treats your advertising budget with the same respect and aggression as if it were our own."
        ]
      },
      {
        heading: "Elastic Budget Scaling",
        paragraphs: [
          "The most critical phase of a successful advertising campaign is scaling. When an ad set achieves a high ROAS, most amateur media buyers increase the budget too aggressively, resetting the platform's machine learning algorithm and destroying profitability. We utilize advanced elastic scaling techniques to incrementally increase spend without triggering algorithmic resets.",
          "We deploy automated rules and custom scripts via platform APIs to dynamically adjust bids based on real-time inventory, competitor aggressiveness, and time-of-day performance, ensuring you capture maximum market share during high-conversion windows."
        ]
      }
    ],
    icon: <TrendingUpIcon fontSize="large" />,
    technologies: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "Looker Studio"],
    domains: [
      { name: "E-Commerce", desc: "Google Shopping and dynamic retargeting for maximum product sales." },
      { name: "Real Estate", desc: "Lead generation campaigns targeting high-net-worth individuals." },
      { name: "SaaS", desc: "LinkedIn Ads targeting specific decision-makers and job titles." }
    ],
    features: [
      { title: "Precision Targeting", desc: "Utilizing first-party data to build lookalike and custom audiences." },
      { title: "Creative Testing", desc: "Continuous multivariant testing of ad copy, images, and video." },
      { title: "Conversion Tracking", desc: "Flawless pixel implementation to measure exact campaign ROI." }
    ]
  },
  "seo": {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    subtitle: "Dominate organic search and outrank your competitors.",
    description: "Organic visibility is the most sustainable form of traffic. Our SEO experts execute deep technical audits, authoritative link-building, and strategic content planning to secure top-tier rankings on Google for high-value commercial keywords.",
    detailedContent: [
      {
        heading: "The Ultimate Long-Term Asset",
        paragraphs: [
          "While paid advertising provides immediate traffic, Search Engine Optimization (SEO) builds a compounding, sustainable asset. Securing top-tier rankings on Google for high-intent commercial keywords is the digital equivalent of owning prime real estate. We execute aggressive, white-hat SEO strategies designed to establish your domain as the undisputed authority in your industry.",
          "Our approach is highly analytical. We do not chase vanity metrics or low-volume keywords. We utilize enterprise-grade tools like Ahrefs and SEMrush to identify the exact search queries that your most profitable customers are using, and we engineer a roadmap to capture that traffic."
        ]
      },
      {
        heading: "Technical Foundation & Crawlability",
        paragraphs: [
          "Before creating a single piece of content, we ensure your website's technical architecture is flawless. A beautiful website is useless if Google's bots cannot efficiently crawl and index it. We conduct deep technical audits to resolve complex issues such as render-blocking JavaScript, sub-optimal site architecture, duplicate content, and slow server response times.",
          "By implementing advanced Schema markup and optimizing your Core Web Vitals, we provide search engines with the exact structural data they need to understand and prioritize your content over your competitors."
        ]
      },
      {
        heading: "Topical Authority & Link Acquisition",
        paragraphs: [
          "Modern SEO is driven by Topical Authority. Instead of writing disjointed blog posts, we architect comprehensive 'Content Clusters'—interlinked webs of highly informative content that thoroughly cover every facet of your industry. This signals to Google that you are the definitive expert on the subject.",
          "Simultaneously, we execute high-end digital PR and outreach campaigns to acquire authoritative, contextually relevant backlinks. These links act as 'votes of confidence' in the eyes of search algorithms, exponentially increasing your domain authority and propelling your pages to the top of the search results."
        ]
      },
      {
        heading: "Entity-Based SEO Modeling",
        paragraphs: [
          "Modern search algorithms have moved beyond simple keyword matching to understanding 'entities'—people, places, concepts, and the relationships between them. We structure your website's content using advanced entity-based modeling, utilizing semantic HTML and deep Schema.org markup to explicitly define your business's relevance to search engines.",
          "This approach transforms your website into a semantic knowledge graph. When Google's AI completely understands the depth and breadth of your topical expertise, it rewards you with highly resilient rankings that are impervious to minor algorithm updates and aggressive competitor tactics."
        ]
      }
    ],
    icon: <SearchIcon fontSize="large" />,
    technologies: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Schema Markup"],
    domains: [
      { name: "Local Businesses", desc: "Google Business Profile optimization and local citation building." },
      { name: "Publishers", desc: "News SEO, fast indexing, and Google Discover optimization." },
      { name: "B2B Services", desc: "Long-tail keyword strategies capturing high-intent enterprise searches." }
    ],
    features: [
      { title: "Technical SEO", desc: "Optimizing site speed, mobile-friendliness, and crawl budget." },
      { title: "Content Strategy", desc: "Creating topical clusters that establish your domain as an industry authority." },
      { title: "Off-Page SEO", desc: "Acquiring high-quality, relevant backlinks through digital PR." }
    ]
  },
  "graphics-designing": {
    slug: "graphics-designing",
    title: "Graphic Design",
    subtitle: "Visual identities that command attention and respect.",
    description: "Design is not just how it looks; it's how it communicates. Our creative directors craft stunning visual assets, from corporate branding to modern UI/UX elements, ensuring your brand stands out with a premium, unmistakable aesthetic.",
    detailedContent: [
      {
        heading: "Visual Identity as a Business Asset",
        paragraphs: [
          "In a crowded marketplace, your brand's visual identity is often the first and most critical point of differentiation. Premium Graphics Designing is not about making things 'pretty'; it is about engineering a visual language that instantly communicates trust, authority, and value to your target audience. We treat your brand's aesthetic as a measurable business asset.",
          "Our design process begins with a deep dive into your brand's psychology. We analyze color theory, typography, and spatial dynamics to create a cohesive design system. Whether we are building a completely new brand identity from scratch or revitalizing a legacy corporate image, every pixel is placed with strategic intent."
        ]
      },
      {
        heading: "UI/UX & Digital Product Design",
        paragraphs: [
          "The most beautiful software in the world will fail if the user experience is broken. Our UI/UX design team bridges the gap between stunning visual aesthetics and frictionless functionality. We create high-fidelity, interactive prototypes in Figma, allowing you to experience the flow of your web or mobile application before a single line of code is written.",
          "We focus heavily on micro-interactions, responsive scaling, and accessibility standards. By mapping out comprehensive user journeys, we design interfaces that intuitively guide the user toward your desired conversion goals, reducing friction and maximizing engagement."
        ]
      },
      {
        heading: "High-End Marketing Collateral",
        paragraphs: [
          "Consistent branding across all touchpoints is crucial for building long-term equity. We produce a wide array of premium marketing collateral, from digital ad creatives and social media kits to high-end print brochures and investor pitch decks. Using industry-standard tools like Adobe Illustrator, Photoshop, and After Effects, we ensure your brand looks flawless in every format.",
          "Investing in premium design means elevating your brand above the noise. It transforms your company from a commodity into a premium choice, allowing you to command higher prices, attract better talent, and secure unshakeable customer loyalty."
        ]
      },
      {
        heading: "Motion Graphics & Micro-Interactions",
        paragraphs: [
          "Static design is no longer enough to capture attention in a hyper-stimulated digital environment. We integrate premium motion graphics and subtle micro-interactions into our design deliverables. Whether it's an animated logo reveal, a complex Lottie animation for your mobile app, or a kinetic typography sequence for an ad creative, we bring your visual identity to life.",
          "These dynamic elements not only delight the user but also serve functional purposes, guiding the user's eye to key conversion points and providing instantaneous, satisfying feedback during digital interactions."
        ]
      }
    ],
    icon: <DesignServicesIcon fontSize="large" />,
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects", "Spline 3D"],
    domains: [
      { name: "Startups", desc: "Complete brand identity kits, pitch decks, and logo design." },
      { name: "Apparel", desc: "High-end product packaging and lookbook designs." },
      { name: "Web3/Crypto", desc: "Futuristic UI designs and 3D web asset creation." }
    ],
    features: [
      { title: "Brand Identity", desc: "Developing cohesive color palettes, typography, and logo systems." },
      { title: "UI/UX Design", desc: "User-centric wireframing and high-fidelity interactive prototyping." },
      { title: "Marketing Collateral", desc: "Designing ad creatives, brochures, and digital banners that convert." }
    ]
  },
  "video-editing": {
    slug: "video-editing",
    title: "Video Editing",
    subtitle: "Scroll-stopping video content that tells your story.",
    description: "In an era of short attention spans, high-quality video is your most powerful tool. We produce cinematic-grade corporate videos, dynamic social media reels, and compelling product demos utilizing advanced color grading and motion graphics.",
    detailedContent: [
      {
        heading: "The Art of Visual Storytelling",
        paragraphs: [
          "Video is the most visceral and impactful medium available to modern brands. It transcends language and logic, speaking directly to the emotion of your audience. Our cinematic video editing services are designed to transform raw footage into compelling narratives that captivate, educate, and convert. We believe that every frame must serve a purpose, and every cut must propel the story forward.",
          "In a digital landscape saturated with mediocre content, scroll-stopping quality is no longer optional—it is a necessity. Our editorial team consists of industry veterans who understand the subtle psychology of pacing, rhythm, and visual hierarchy. Whether we are crafting a high-octane promotional reel or a deeply emotional brand documentary, we meticulously engineer the viewer's experience from the first second to the final call-to-action."
        ]
      },
      {
        heading: "Technical Mastery & Color Science",
        paragraphs: [
          "Great editing goes far beyond cutting clips together. It is an intricate dance of technical mastery and artistic vision. Our post-production pipeline utilizes industry-leading software like DaVinci Resolve and Adobe After Effects to manipulate the very fabric of your footage. We employ advanced color science to establish a distinct, premium aesthetic—color grading your content so that it evokes specific emotions and aligns perfectly with your brand identity.",
          "Sound design is half of the visual experience. We integrate professional audio mixing, foley, and strategic musical scoring to elevate the production value of your content. A perfectly timed sound effect or a swelling cinematic score can mean the difference between a viewer scrolling past or remaining completely mesmerized by your message."
        ]
      },
      {
        heading: "Platform-Specific Optimization",
        paragraphs: [
          "A beautiful video is useless if it is not optimized for the platform on which it is consumed. We do not just deliver a single master file; we architect a comprehensive content strategy. We understand the distinct algorithmic requirements and user behaviors of YouTube, TikTok, Instagram, and LinkedIn. Our editors craft multiple variations of your content, optimizing aspect ratios, pacing, and subtitle integrations to maximize retention and engagement across every channel.",
          "Partnering with us for your video editing means elevating your brand from a participant in the market to a dominant voice. We deliver cinematic excellence at scale, ensuring your visual communication is as premium, sophisticated, and impactful as the services you offer."
        ]
      },
      {
        heading: "High-Retention Editing Psychology",
        paragraphs: [
          "In the era of TikTok and YouTube Shorts, attention is the most scarce resource. We utilize advanced editing psychology to maximize audience retention. This involves analyzing viewer drop-off graphs and engineering exact moments of pattern interruption—using strategic b-roll, kinetic typography, and sound effects—to keep the viewer hooked.",
          "By obsessively tracking the first 3-second hook and the overall watch-time percentage, we craft videos that algorithms naturally favor and push to wider audiences, maximizing your organic reach without spending a dime on promotion."
        ]
      }
    ],
    icon: <VideoLibraryIcon fontSize="large" />,
    technologies: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Cinema 4D", "Audition"],
    domains: [
      { name: "Influencers", desc: "High-retention editing styles for YouTube, TikTok, and Reels." },
      { name: "Corporate", desc: "Professional company culture videos and executive interviews." },
      { name: "E-Commerce", desc: "Engaging product demonstration and unboxing videos." }
    ],
    features: [
      { title: "Color Grading", desc: "Setting the exact mood and aesthetic tone of your footage." },
      { title: "Motion Graphics", desc: "Adding dynamic text, lower thirds, and animated logos." },
      { title: "Sound Design", desc: "Professional audio mixing, foley, and strategic music selection." }
    ]
  },
  "content-creation": {
    slug: "content-creation",
    title: "Content Strategy & Creation",
    subtitle: "Authoritative copy and media that engages and converts.",
    description: "We craft compelling narratives across all mediums. Whether it is SEO-optimized blog posts, persuasive sales copywriting, or viral social media scripts, our content team ensures your brand's voice is authoritative, consistent, and impactful.",
    detailedContent: [
      {
        heading: "The Power of Persuasive Copy",
        paragraphs: [
          "Words are the fundamental currency of the internet. A beautiful website or a perfectly targeted ad campaign will ultimately fail if the underlying copy does not resonate with the reader. Strategic Content Creation is the art and science of using words to capture attention, build trust, and drive decisive action.",
          "Our copywriting team consists of direct-response experts who understand the psychology of persuasion. We do not write 'fluff'. Every headline, bullet point, and call-to-action is meticulously crafted to address your customer's deepest pain points and position your product as the undeniable solution."
        ]
      },
      {
        heading: "Authoritative Long-Form Content",
        paragraphs: [
          "In B2B and high-ticket B2C industries, the sales cycle requires education. We produce highly authoritative, long-form content—such as whitepapers, case studies, and deep-dive technical articles—that establishes your brand as the definitive thought leader in your space.",
          "This content is heavily researched and technically accurate. By leveraging SEO optimization tools like SurferSEO and integrating insights from Subject Matter Experts (SMEs), we create assets that not only rank at the top of Google but actually provide immense, actionable value to your prospects."
        ]
      },
      {
        heading: "Platform-Native Storytelling",
        paragraphs: [
          "Content must adapt to the medium it lives on. A 2,000-word blog post will not perform on TikTok, and a 15-second script will not satisfy a LinkedIn audience. We specialize in platform-native storytelling, crafting bespoke content calendars that speak the exact language of each specific social and digital channel.",
          "From highly engaging email newsletters that boast 40%+ open rates, to viral short-form video scripts designed for maximum retention, our content strategy ensures that your brand remains top-of-mind, culturally relevant, and consistently profitable."
        ]
      },
      {
        heading: "Data-Backed Thought Leadership",
        paragraphs: [
          "Generic opinions do not generate authority. We craft thought leadership content driven by proprietary data, industry surveys, and intense technical research. By analyzing your internal metrics or conducting original research on your behalf, we publish whitepapers and reports that journalists, competitors, and clients will reference and link back to.",
          "This data-backed approach transforms your brand from a participant in the conversation to the one actually defining the industry standards, creating a compounding moat of trust and credibility that money simply cannot buy."
        ]
      }
    ],
    icon: <CreateIcon fontSize="large" />,
    technologies: ["Grammarly Premium", "SurferSEO", "Notion", "Jasper", "Canva"],
    domains: [
      { name: "B2B SaaS", desc: "In-depth whitepapers, case studies, and technical documentation." },
      { name: "Lifestyle Brands", desc: "Engaging social media calendars and newsletter copywriting." },
      { name: "Agencies", desc: "Persuasive landing page copy designed strictly for lead conversion." }
    ],
    features: [
      { title: "Copywriting", desc: "Direct-response copy that drives action and increases sales." },
      { title: "Content Strategy", desc: "Mapping content to every stage of the buyer's journey." },
      { title: "Scriptwriting", desc: "Hook-driven scripts for video ads and social media content." }
    ]
  }
};

export const getAllServices = () => Object.values(detailedServices);
export const getServiceBySlug = (slug: string) => detailedServices[slug];
