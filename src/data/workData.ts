export type ProjectType = "Client Project" | "Concept Project" | "Product Demonstration";

export type SolutionArea =
  | "Digital Presence"
  | "Customer & Lead Systems"
  | "Internal Business Tools"
  | "AI & Automation";

export interface WorkProject {
  slug: string;
  title: string;
  clientType: string;
  projectType: ProjectType;
  solutionArea: SolutionArea;
  solutionAreaSlug: string;
  image: string;
  summary: string;
  timeline: string;
  primaryMetric: string;
  primaryMetricLabel: string;
  context: string;
  challenge: string[];
  approach: string[];
  solution: string[];
  technology: string[];
  outcome: string[];
}

export const workProjects: WorkProject[] = [
  {
    slug: "nexus-ecommerce",
    title: "Headless Commerce & Multi-Channel Inventory Sync",
    clientType: "Commercial Retailer",
    projectType: "Client Project",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    image: "/images/portfolio/ecommerce.png",
    summary:
      "Engineered a headless digital storefront with direct inventory API reconciliation, replacing slow page loads with edge rendering and eliminating manual catalog updates.",
    timeline: "10 Weeks",
    primaryMetric: "Sub-second",
    primaryMetricLabel: "Edge Page Delivery",
    context:
      "A fast-growing retail business managing over 4,000 product SKUs was struggling with a bloated legacy web shop that failed during seasonal traffic surges and required manual catalog re-entry.",
    challenge: [
      "The client's previous monolithic website suffered from 4+ second load times on mobile devices, leading to high bounce rates from potential shoppers.",
      "Store managers spent 15+ hours each week manually re-entering inventory adjustments and price changes across three disconnected spreadsheets.",
      "The platform lacked flexibility to introduce custom promotional funnels or integrate directly with modern fulfillment and payment APIs."
    ],
    approach: [
      "Separated the public-facing storefront from the backend database using Next.js with Server-Side Rendering (SSR) for instant page presentation.",
      "Mapped out the exact inventory workflow between warehouse receiving, current stock levels, and online availability to design a single automated API bridge.",
      "Implemented structured schema, semantic navigation, and an intuitive checkout flow built around customer purchase intent rather than generic templates."
    ],
    solution: [
      "Delivered a custom headless frontend optimized for speed, Core Web Vitals, and mobile purchasing behavior.",
      "Created an automated webhook sync that updates product availability instantly whenever changes are made in the central warehouse system.",
      "Integrated a unified administration panel where marketing staff can publish seasonal campaigns and edit product bundles without touching code."
    ],
    technology: ["Next.js", "Node.js", "GraphQL", "PostgreSQL", "Redis", "TypeScript"],
    outcome: [
      "Achieved sub-second initial page rendering across mobile and desktop devices.",
      "Completely eliminated duplicate manual inventory entries between warehouse and website.",
      "Provided marketing and catalog teams with an independent workflow requiring zero developer intervention for routine updates."
    ]
  },
  {
    slug: "logix-driver-app",
    title: "Fleet Dispatch & Real-Time Driver Operations System",
    clientType: "Regional Logistics Carrier",
    projectType: "Client Project",
    solutionArea: "Internal Business Tools",
    solutionAreaSlug: "internal-business-tools",
    image: "/images/portfolio/logix.png",
    summary:
      "Replaced phone check-ins, WhatsApp dispatch threads, and paper delivery manifests with an offline-capable mobile application and central operations console.",
    timeline: "8 Weeks",
    primaryMetric: "100% Offline",
    primaryMetricLabel: "Route Checkpoint Sync",
    context:
      "A regional freight carrier coordinating 45+ drivers and dispatch managers across multiple interstate distribution hubs required a reliable operational system.",
    challenge: [
      "Dispatchers spent 3 to 4 hours daily making phone calls to locate drivers, confirm deliveries, and manually update status spreadsheets.",
      "Drivers frequently operated in remote transit zones with spotty cellular coverage where cloud-only tools failed to save signatures and delivery notes.",
      "Disputed deliveries took days to resolve because physical paper consignment notes were only returned to head office at the end of the week."
    ],
    approach: [
      "Interviewed dispatch coordinators and spent time observing route operations to identify the exact friction points in daily handoffs.",
      "Designed an offline-first architecture that stores route waypoints, client signatures, and time-stamped delivery photos locally and syncs automatically when signal returns.",
      "Built a unified dispatcher console giving head office real-time route visibility without requiring a single check-in phone call."
    ],
    solution: [
      "Developed a driver mobile application with high-contrast UI, offline queueing, digital signature capture, and photo verification.",
      "Created a web-based dispatch control tower showing route milestones, exception alerts, and instant document search.",
      "Implemented automated client notification webhooks that send delivery confirmation with digital receipts immediately upon completion."
    ],
    technology: ["React Native", "Node.js", "SQLite (Offline)", "PostgreSQL", "Tailwind CSS"],
    outcome: [
      "Eliminated daily dispatch check-in phone calls across all 45 routes.",
      "Provided instant access to signed delivery receipts within seconds of job completion.",
      "Prevented data loss in zero-connectivity areas through automated local-to-cloud queue synchronization."
    ]
  },
  {
    slug: "service-lead-pipeline",
    title: "Multi-Channel Lead Intake & Instant Quote Builder",
    clientType: "Commercial Equipment Provider",
    projectType: "Client Project",
    solutionArea: "Customer & Lead Systems",
    solutionAreaSlug: "customer-lead-systems",
    image: "/images/portfolio/b2b.png",
    summary:
      "Unified scattered email, form, and messaging leads into a structured intake pipeline paired with an internal estimation tool that cuts proposal time from days to minutes.",
    timeline: "6 Weeks",
    primaryMetric: "Minutes vs Days",
    primaryMetricLabel: "Turnaround on Quotes",
    context:
      "A B2B industrial equipment and engineering distributor received dozens of custom inquiries weekly across WhatsApp, website forms, and direct salesperson emails.",
    challenge: [
      "Prospective leads sat unanswered for up to 48 hours because sales reps had no shared queue and often assumed someone else had responded.",
      "Calculating equipment specifications and margin pricing required pulling numbers from four separate supplier PDF price sheets.",
      "Management had no visibility into total open quote values, stalled negotiations, or conversion bottlenecks."
    ],
    approach: [
      "Mapped the entire buyer journey from initial specification inquiry to final contract sign-off.",
      "Built a unified lead intake webhook connecting website inquiry forms and WhatsApp API into one centralized triage inbox.",
      "Engineered an interactive quote builder that stores supplier pricing tables and generates professional PDF proposals with one click."
    ],
    solution: [
      "Designed a central lead intake dashboard with automated assignment rules based on equipment category and territory.",
      "Built an internal margin-aware quotation tool that calculates component costs, applies volume discounts, and generates branded PDF proposals.",
      "Added automated reminder sequences for prospective clients whose proposals have been pending for more than 72 hours."
    ],
    technology: ["Next.js", "Express.js", "PostgreSQL", "MUI", "PDFKit", "SendGrid API"],
    outcome: [
      "Reduced average custom quote generation time from 3 hours to under 10 minutes.",
      "Consolidated all incoming prospect inquiries into a single, accountable queue with zero lost inquiries.",
      "Gave leadership real-time visibility into the complete pipeline of open proposals and follow-up statuses."
    ]
  },
  {
    slug: "ai-customer-support",
    title: "Intelligent Inquiry Triage & Structured Routing Engine",
    clientType: "B2B Services Demonstration",
    projectType: "Product Demonstration",
    solutionArea: "AI & Automation",
    solutionAreaSlug: "ai-automation",
    image: "/images/portfolio/aiCostomer.png",
    summary:
      "A practical natural language processing engine that reads unstructured support emails, extracts account metadata, categorizes urgency, and prepares drafts for human agent sign-off.",
    timeline: "Concept Prototype",
    primaryMetric: "Human-in-Loop",
    primaryMetricLabel: "Verified Routing",
    context:
      "A high-volume technical support demonstration showing how AI can eliminate administrative triage without taking dangerous autonomous actions.",
    challenge: [
      "Support organizations spend hours each morning manually reading rambling customer emails just to tag them as billing, technical bug, or account inquiry.",
      "Emergency production issues often sit in the general queue for hours behind trivial questions.",
      "Fully autonomous AI bots often hallucinate incorrect answers and frustrate high-value business clients."
    ],
    approach: [
      "Employed an intentional 'AI as Assistant, Human as Decider' philosophy instead of risky fully autonomous replies.",
      "Used language models strictly for classification, key data extraction (order IDs, error codes), and sentiment analysis against strict schema.",
      "Engineered confidence scoring where only high-certainty classifications are suggested, and all outgoing drafts require one-click agent approval."
    ],
    solution: [
      "Built an inbound email processor that parses raw message bodies into clean JSON with extracted intent, urgency score, and customer account details.",
      "Integrated a priority escalation queue that alerts on-call engineers to mission-critical system failures immediately.",
      "Designed an agent interface that presents the incoming message alongside an AI-suggested diagnostic answer pulled directly from company documentation."
    ],
    technology: ["Python", "FastAPI", "OpenAI API", "Vector Embeddings", "Next.js", "Tailwind CSS"],
    outcome: [
      "Standardized 100% of inbound inquiry tagging into structured, searchable database fields.",
      "Eliminated manual reading time needed for initial ticket categorization and priority ranking.",
      "Maintained zero false autonomous responses by keeping human specialists in the final approval loop."
    ]
  },
  {
    slug: "internal-ops-portal",
    title: "Field Contractor Scheduling & Dispatch Portal",
    clientType: "Commercial Facilities Management",
    projectType: "Client Project",
    solutionArea: "Internal Business Tools",
    solutionAreaSlug: "internal-business-tools",
    image: "/images/portfolio/inventry.png",
    summary:
      "A custom internal web system for scheduling 30+ service technicians, logging work completion with photos, and automating weekly customer invoice preparation.",
    timeline: "7 Weeks",
    primaryMetric: "Same-Day",
    primaryMetricLabel: "Work Order Billing",
    context:
      "A commercial maintenance and cleaning contractor managing 30 technicians across 80+ office properties was reliant on printed binders and desktop spreadsheets.",
    challenge: [
      "Scheduling recurring weekly and monthly facility maintenance across dozens of teams was error-prone and caused double-bookings.",
      "Technicians had to visit the head office every morning to collect paper work orders and return at night to hand in completed slips.",
      "Invoices were delayed by 2 to 3 weeks waiting for office staff to decipher handwritten technician logs."
    ],
    approach: [
      "Mapped the operational steps between contract agreement, calendar dispatch, on-site completion, and monthly invoicing.",
      "Designed a responsive web portal tailored for two distinct roles: Office Dispatcher (desktop view) and Field Technician (mobile view).",
      "Created an automated invoice staging system that compiles verified time logs and completed work photos directly into accounting entries."
    ],
    solution: [
      "Built a drag-and-drop dispatch calendar that prevents double-booking and assigns jobs based on location proximity.",
      "Developed a mobile-friendly technician interface allowing workers to check in, view site access codes, and upload completion photos.",
      "Implemented a billing dashboard that aggregates verified work orders into client-ready itemized invoices."
    ],
    technology: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "AWS S3"],
    outcome: [
      "Eliminated daily morning visits to head office, saving 45 minutes per technician daily.",
      "Reduced client invoicing cycles from 18 days to same-day automated reconciliation.",
      "Gave clients transparent, photo-verified proof of completed maintenance visits."
    ]
  },
  {
    slug: "dtc-brand-scaling",
    title: "Post-Purchase Lifecycle & Customer Retention System",
    clientType: "Wellness & Personal Care Brand",
    projectType: "Client Project",
    solutionArea: "Customer & Lead Systems",
    solutionAreaSlug: "customer-lead-systems",
    image: "/images/portfolio/dtc.png",
    summary:
      "Replaced generic batch-and-blast marketing with event-triggered customer journeys based on product usage cycles, replenishment needs, and customer VIP tiers.",
    timeline: "6 Weeks",
    primaryMetric: "Segmented",
    primaryMetricLabel: "Event-Triggered Journeys",
    context:
      "A direct-to-consumer brand was acquiring hundreds of buyers monthly through paid media but experiencing high single-purchase churn.",
    challenge: [
      "The client relied exclusively on weekly mass discount emails, eroding brand equity and training customers never to buy at full price.",
      "Customers received generic newsletters instead of helpful usage guidance tailored to the specific products they had purchased.",
      "Replenishment timing was ignored, missing the crucial window when customers were running low on consumable items."
    ],
    approach: [
      "Analyzed historical purchase data to identify average replenishment cycles across each product category.",
      "Constructed targeted lifecycle sequences: unboxing education, 14-day check-in, replenishment trigger, and VIP loyalty access.",
      "Integrated e-commerce purchase events with lifecycle automation software to deliver timely, hyper-relevant communications."
    ],
    solution: [
      "Built automated post-purchase flows that guide customers on how to use their products effectively for best results.",
      "Implemented smart replenishment triggers sent precisely when a customer's product is estimated to be 80% consumed.",
      "Created a customer dashboard where subscribers can easily pause, swap, or adjust delivery intervals without contacting support."
    ],
    technology: ["Klaviyo", "Shopify API", "Webhooks", "Customer Data Platform", "Figma"],
    outcome: [
      "Replaced arbitrary discount broadcasts with value-driven educational and replenishment touchpoints.",
      "Established predictable repeat order cycles without needing ongoing manual campaign creation.",
      "Significantly reduced support inquiries related to subscription management and order modifications."
    ]
  },
  {
    slug: "enterprise-seo-migration",
    title: "Technical Content Architecture & SEO Infrastructure",
    clientType: "Digital Publishing Network",
    projectType: "Client Project",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    image: "/images/portfolio/EnterpriseSeo.png",
    summary:
      "Designed and executed a structured technical architecture and automated URL redirection framework for a 400,000+ page content platform migration.",
    timeline: "12 Weeks",
    primaryMetric: "Zero",
    primaryMetricLabel: "Broken Indexation Signals",
    context:
      "A long-established digital publishing group needed to retire a decade-old legacy CMS without losing accumulated search engine authority across decades of content.",
    challenge: [
      "Hundreds of thousands of URLs had historical backlinks and established search visibility that had to be preserved during the platform shift.",
      "The legacy database contained inconsistent URL patterns, legacy taxonomy tags, and broken internal links accumulated over 12 years.",
      "Any indexing disruption would directly damage reader traffic and daily programmatic advertising revenue."
    ],
    approach: [
      "Extracted and audited every indexed URL to build a comprehensive redirection and canonicalization framework.",
      "Architected a Next.js Server-Side Rendered (SSR) structure providing search engine crawlers with instant, lightweight, semantic HTML.",
      "Implemented strict JSON-LD Article and Breadcrumb schemas to clearly communicate topical hierarchy to search engines."
    ],
    solution: [
      "Built an edge-level 301 redirection engine that maps legacy URL structures to new semantic paths in under 5 milliseconds.",
      "Engineered automated Core Web Vitals optimizations, eliminating crawl bottlenecks and JavaScript bloat.",
      "Set up automated crawl telemetry to monitor search engine crawler responses and identify status code anomalies immediately."
    ],
    technology: ["Next.js SSR", "Edge Middleware", "TypeScript", "Schema.org", "Log Stream Analysis"],
    outcome: [
      "Completed migration of over 400,000 URLs with zero broken canonical pathways.",
      "Maintained stable search engine crawl frequency throughout the transition.",
      "Cut average server response time (TTFB) for article pages by more than 65%."
    ]
  },
  {
    slug: "rebranding-fintech-identity",
    title: "Design System & Product Interface Architecture",
    clientType: "Financial Software Concept",
    projectType: "Concept Project",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    image: "/images/portfolio/rebrand.png",
    summary:
      "An exploratory concept project creating an atomic design token system and interface guidelines for a multi-tenant business finance platform.",
    timeline: "4 Weeks",
    primaryMetric: "60+ Tokens",
    primaryMetricLabel: "Design System Library",
    context:
      "A product demonstration modeling how design systems streamline multi-screen engineering workflows and eliminate visual inconsistencies.",
    challenge: [
      "Rapidly scaling products often end up with 10 different shades of blue, inconsistent form validation states, and fragmented button behaviors.",
      "Engineers waste valuable sprint hours reinventing common table, modal, and filter components rather than building core product features.",
      "Inaccessible contrast ratios and unstandardized typography impair usability for operational power users."
    ],
    approach: [
      "Established atomic design foundations: typography scale, semantic color palette, spacing grid, and elevation tokens.",
      "Built high-utility components modeled around real financial workflows (data tables with sorting, multi-step transaction approval modals).",
      "Tested all visual components against WCAG AA accessibility standards."
    ],
    solution: [
      "Created a complete Figma component library with responsive auto-layout, interactive states, and strict design token naming.",
      "Produced comprehensive documentation detailing component usage guidelines, keyboard accessibility, and state transitions.",
      "Constructed reference prototype screens for both desktop admin dashboards and mobile employee expense submissions."
    ],
    technology: ["Figma", "Design Tokens", "WCAG 2.1 AA", "Atomic Design Principles", "React / MUI Architecture"],
    outcome: [
      "Standardized 60+ modular UI components with consistent interaction patterns.",
      "Created an engineer-ready specification document eliminating design ambiguity.",
      "Verified full compliance with WCAG accessibility guidelines across all color and type styles."
    ]
  }
];

export const getAllWorkProjects = () => workProjects;
export const getWorkProjectBySlug = (slug: string) =>
  workProjects.find((p) => p.slug === slug);
export const getWorkProjectsByArea = (areaSlug: string) =>
  workProjects.filter((p) => p.solutionAreaSlug === areaSlug);
