export type ProjectType =
  | "Production Build"
  | "Client Project"
  | "Internal Build"
  | "Product Exploration"
  | "Prototype"
  | "Technical Architecture"
  | "Design System";

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
    clientType: "eCommerce & Catalog Architecture",
    projectType: "Production Build",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    image: "/images/portfolio/ecommerce.png",
    summary:
      "A custom headless eCommerce platform that connects online storefronts with warehouse inventory, delivering fast page loads and keeping catalog stock synchronized automatically.",
    timeline: "Completed Build",
    primaryMetric: "Fast SSR",
    primaryMetricLabel: "Edge Page Delivery",
    context:
      "A retail business managing multi-category product catalogs needed a responsive web store that would load quickly across mobile devices and synchronize inventory directly with backend warehouse records.",
    challenge: [
      "Monolithic legacy storefront suffered from slow mobile response times, impacting browsing experience and product discovery.",
      "Manual catalog and stock updates across disconnected spreadsheets created duplicate data entry and inventory discrepancies.",
      "Rigid template structure limited custom promotional funnels and direct API integration with third-party payment and delivery services.",
    ],
    approach: [
      "Separated public storefront presentation from backend data layers using Next.js for fast server-side rendering and search visibility.",
      "Engineered automated API synchronization connecting warehouse stock levels directly to storefront availability.",
      "Structured clean category navigation, instant product search, and streamlined multi-step checkout.",
    ],
    solution: [
      "Lightweight, responsive headless frontend optimized for speed and mobile purchasing behavior.",
      "Automated webhook synchronization updating stock status when changes occur in backend inventory.",
      "Intuitive management dashboard for publishing seasonal promotions and updating product details without code.",
    ],
    technology: ["Next.js", "Node.js", "GraphQL", "PostgreSQL", "Redis", "TypeScript"],
    outcome: [
      "Responsive page presentation and fast initial load across mobile and desktop devices.",
      "Automated catalog reconciliation, removing the need for manual stock re-entry.",
      "Self-serve content workflows enabling catalog updates without developer assistance.",
    ],
  },
  {
    slug: "logix-driver-app",
    title: "Fleet Operations & Driver Dispatch System",
    clientType: "Logistics Operations Platform",
    projectType: "Product Exploration",
    solutionArea: "Internal Business Tools",
    solutionAreaSlug: "internal-business-tools",
    image: "/images/portfolio/logix.png",
    summary:
      "A mobile application and centralized operations dashboard designed for dispatchers and route drivers, enabling offline milestone tracking, digital signatures, and automated status updates.",
    timeline: "Functional Prototype",
    primaryMetric: "Offline-First",
    primaryMetricLabel: "Local Queue Sync",
    context:
      "Coordinating drivers and dispatch managers across transit hubs often relies on phone calls and paper manifests that cannot be tracked or verified in transit.",
    challenge: [
      "Dispatchers spend hours daily calling drivers to confirm delivery statuses and manually updating central spreadsheets.",
      "Transit zones with intermittent cellular signal cause cloud-only apps to lose delivery notes, timestamps, and customer signatures.",
      "Physical paper delivery slips require manual return to office before billing records can be finalized.",
    ],
    approach: [
      "Mapped driver workflows from dispatch assignment and route waypoints to customer signature capture and return verification.",
      "Architected an offline-first mobile app using local SQLite storage that queues actions locally and syncs when connectivity restores.",
      "Built a centralized web dashboard giving operations teams clear visibility into route milestones and exception alerts.",
    ],
    solution: [
      "High-contrast driver mobile interface with offline queueing, photo verification, and digital signature capture.",
      "Web-based dispatch console providing real-time job status overview and searchable delivery archives.",
      "Automated customer notifications dispatched immediately when milestones are marked complete.",
    ],
    technology: ["React Native", "Node.js", "SQLite (Offline)", "PostgreSQL", "Tailwind CSS"],
    outcome: [
      "Streamlined dispatch coordination without requiring routine check-in calls.",
      "Reliable operation in low-connectivity zones with automated background data sync.",
      "Instant digital records and photo proofs accessible immediately upon job completion.",
    ],
  },
  {
    slug: "service-lead-pipeline",
    title: "Lead Intake & Dynamic Proposal Generator",
    clientType: "B2B Sales & Quoting Tool",
    projectType: "Production Build",
    solutionArea: "Customer & Lead Systems",
    solutionAreaSlug: "customer-lead-systems",
    image: "/images/portfolio/b2b.png",
    summary:
      "A centralized inquiry management system and margin-aware quotation tool that routes prospect inquiries from forms and messaging into a single dashboard, enabling fast proposal creation.",
    timeline: "Completed Build",
    primaryMetric: "Structured",
    primaryMetricLabel: "Inquiry & Quote Pipeline",
    context:
      "Businesses receiving custom specification inquiries across website forms, emails, and WhatsApp often experience delays in responding and building standardized price quotes.",
    challenge: [
      "Inbound leads scattered across separate email boxes and messaging chats lead to slow response times and forgotten inquiries.",
      "Quoting complex service tiers or equipment configurations requires pulling formulas from disconnected spreadsheets, risking margin errors.",
      "Management lacks centralized visibility into pending proposals, follow-up stages, and conversion bottlenecks.",
    ],
    approach: [
      "Mapped prospect inquiry touchpoints into a unified triage dashboard with automated role assignment rules.",
      "Engineered an internal proposal builder that stores pricing tiers, calculates volume adjustments, and outputs branded PDFs.",
      "Added automated email confirmations for clients and scheduled follow-up notifications for sales staff.",
    ],
    solution: [
      "Centralized lead management inbox capturing inquiries from web forms and direct communication channels.",
      "Internal pricing calculator that ensures accurate margin application before proposal generation.",
      "One-click branded PDF quote generator with digital approval links and automated status tracking.",
    ],
    technology: ["Next.js", "Express.js", "PostgreSQL", "MUI", "PDFKit", "SendGrid API"],
    outcome: [
      "Consolidated all incoming prospect leads into a single accountable pipeline.",
      "Significantly accelerated quote generation turnaround with standardized pricing rules.",
      "Clear visibility for leadership across open estimates, stages, and customer follow-ups.",
    ],
  },
  {
    slug: "ai-customer-support",
    title: "Inquiry Triage & Assisted Routing Engine",
    clientType: "AI Operations Prototype",
    projectType: "Prototype",
    solutionArea: "AI & Automation",
    solutionAreaSlug: "ai-automation",
    image: "/images/portfolio/aiCostomer.png",
    summary:
      "An AI-assisted workflow engine that parses incoming customer support emails, extracts account details and urgency, and drafts recommended responses for human agent review.",
    timeline: "Working Prototype",
    primaryMetric: "Assisted",
    primaryMetricLabel: "Human-in-the-Loop AI",
    context:
      "High-volume support teams spend considerable time reading unstructured emails to categorize tickets, while completely autonomous bots risk hallucinating incorrect customer information.",
    challenge: [
      "Support agents spend hours manually reading incoming messages simply to route them to the right department.",
      "High-priority bugs or billing emergencies get delayed in general queues behind routine questions.",
      "Fully autonomous AI systems carry unacceptable risks of inaccurate answers or inappropriate commitments to customers.",
    ],
    approach: [
      "Adopted a strict 'AI as Assistant, Human as Decider' framework to ensure reliable, verified interactions.",
      "Used language models strictly for classification, metadata extraction (account IDs, order numbers), and drafting against verified knowledge bases.",
      "Built an agent dashboard where suggested replies are displayed alongside source documentation for rapid verification.",
    ],
    solution: [
      "Inbound message parser extracting structured JSON metadata, intent categorization, and urgency scoring.",
      "Priority routing engine alerting specialized team members to critical issues immediately.",
      "Agent review interface providing one-click approval or editing of context-aware draft responses.",
    ],
    technology: ["Python", "FastAPI", "OpenAI API", "Vector Embeddings", "Next.js", "Tailwind CSS"],
    outcome: [
      "Structured categorization of incoming requests without manual sorting overhead.",
      "Faster response times through context-rich drafts prepared for agent sign-off.",
      "Zero risk of unvetted AI responses by keeping qualified human team members in control.",
    ],
  },
  {
    slug: "internal-ops-portal",
    title: "Field Service Operations & Scheduling Portal",
    clientType: "Operations & Scheduling System",
    projectType: "Internal Build",
    solutionArea: "Internal Business Tools",
    solutionAreaSlug: "internal-business-tools",
    image: "/images/portfolio/inventry.png",
    summary:
      "A web portal for field contractor dispatch, on-site job completion logging with photo attachments, and automated invoice staging based on verified milestones.",
    timeline: "Internal Build",
    primaryMetric: "Connected",
    primaryMetricLabel: "Dispatch & Milestone Billing",
    context:
      "Service and facilities businesses managing teams across multiple client locations often struggle with paper work orders, scheduling conflicts, and delayed billing reconciliations.",
    challenge: [
      "Coordinating recurring maintenance schedules across dispersed service teams via phone and paper slips leads to scheduling conflicts.",
      "Lack of real-time job completion proof causes delayed approvals and client disputes over service delivery.",
      "Invoicing is delayed for weeks while office staff gather and reconcile paper timecards and receipts.",
    ],
    approach: [
      "Unified operational stages between customer agreements, team scheduling, on-site verification, and invoice generation.",
      "Built responsive desktop and mobile web interfaces tailored specifically for dispatchers and field staff.",
      "Connected verified completion events directly to draft invoice creation in backend accounting.",
    ],
    solution: [
      "Visual scheduling calendar with conflict prevention, team assignment, and location tracking.",
      "Mobile field interface for technicians to view job briefs, record timestamps, and upload completion photos.",
      "Automated invoice staging aggregating verified work orders into itemized, client-ready billing entries.",
    ],
    technology: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "AWS S3"],
    outcome: [
      "Centralized scheduling and dispatch with clear daily assignment visibility.",
      "Verifiable digital job completion proof with photo attachments and timestamps.",
      "Faster invoicing cycles through direct reconciliation of verified work orders.",
    ],
  },
  {
    slug: "dtc-brand-scaling",
    title: "Customer Retention & Lifecycle Automation Workflow",
    clientType: "Customer Lifecycle Automation",
    projectType: "Product Exploration",
    solutionArea: "Customer & Lead Systems",
    solutionAreaSlug: "customer-lead-systems",
    image: "/images/portfolio/dtc.png",
    summary:
      "An automated lifecycle engagement system that replaces generic email blasts with event-triggered customer journeys based on product usage stages, replenishment cycles, and account milestones.",
    timeline: "Workflow Exploration",
    primaryMetric: "Event-Driven",
    primaryMetricLabel: "Automated Customer Journeys",
    context:
      "Growing digital commerce brands often acquire customers effectively but experience high churn when post-purchase communication relies on impersonal, one-size-fits-all broadcasts.",
    challenge: [
      "Relying on generic mass discount emails trains customers to wait for discounts and erodes product value.",
      "Customers miss key usage guidelines and onboarding tips, leading to poor initial experience and lower retention.",
      "Lack of automated replenishment reminders results in lost repeat orders when consumable products run out.",
    ],
    approach: [
      "Analyzed typical product usage timelines to structure post-purchase touchpoints around customer value rather than aggressive sales pushes.",
      "Built event-driven triggers: onboarding education, check-in milestones, replenishment reminders, and loyalty rewards.",
      "Integrated eCommerce transaction webhooks with lifecycle messaging to ensure contextually relevant timing.",
    ],
    solution: [
      "Educational post-purchase email and messaging flows guiding customers through optimal product usage.",
      "Timely replenishment triggers timed to anticipated product consumption cycles.",
      "Self-serve customer account portal allowing easy subscription pauses, delivery swaps, and frequency updates.",
    ],
    technology: ["Klaviyo", "Shopify API", "Webhooks", "Customer Data Platform", "Figma"],
    outcome: [
      "Transitioned from arbitrary promotional blasts to helpful, timely customer touchpoints.",
      "Established predictable repeat order engagement without daily manual marketing intervention.",
      "Reduced routine support questions through self-service subscription and order management.",
    ],
  },
  {
    slug: "enterprise-seo-migration",
    title: "Content Architecture & URL Migration Engine",
    clientType: "Content Architecture & Migration System",
    projectType: "Technical Architecture",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    image: "/images/portfolio/EnterpriseSeo.png",
    summary:
      "A structured technical architecture and edge redirection framework designed to preserve search index authority, URL relationships, and metadata integrity during complex platform migrations.",
    timeline: "Architectural Framework",
    primaryMetric: "Structured",
    primaryMetricLabel: "Redirect & Index Architecture",
    context:
      "Organizations moving legacy websites or large content archives to modern web frameworks risk losing search rankings, canonical links, and referral traffic if URL structures are broken.",
    challenge: [
      "Large web platforms have accumulated thousands of legacy URLs, backlinks, and search rankings that must be preserved.",
      "Inconsistent legacy URL structures, missing canonicals, and broken internal links degrade crawler efficiency.",
      "Slow server response times on legacy CMS backends negatively impact Core Web Vitals and user retention.",
    ],
    approach: [
      "Audited legacy URL structures to map comprehensive 1:1 redirection rules and semantic taxonomy.",
      "Implemented Next.js server-side rendering to deliver clean, lightweight HTML and structured schema directly to search crawlers.",
      "Configured edge-level redirection middleware to resolve legacy URLs instantly without server overhead.",
    ],
    solution: [
      "Edge redirection engine handling URL translation and preserving established backlink equity.",
      "Structured JSON-LD schema implementation providing search engines with clear topical hierarchy.",
      "Telemetry and status monitoring to verify indexing health and catch broken paths proactively.",
    ],
    technology: ["Next.js SSR", "Edge Middleware", "TypeScript", "Schema.org", "Log Analysis"],
    outcome: [
      "Clean migration pathway with preserved link equity and unbroken canonical URLs.",
      "Improved page rendering speed through lightweight server-rendered HTML.",
      "Organized taxonomy and semantic schema for long-term organic search discovery.",
    ],
  },
  {
    slug: "rebranding-fintech-identity",
    title: "Design System & Component Library Architecture",
    clientType: "Design System & UI Architecture",
    projectType: "Design System",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    image: "/images/portfolio/rebrand.png",
    summary:
      "A comprehensive UI design system and reusable component library created to standardize product interfaces, speed up frontend development, and ensure accessible design across business applications.",
    timeline: "Component System",
    primaryMetric: "Atomic Tokens",
    primaryMetricLabel: "Component System Library",
    context:
      "As web products expand, inconsistent colors, mismatched buttons, and unstandardized form components slow down development velocity and confuse users.",
    challenge: [
      "Multiple developers building screens independently create inconsistent styling, varied form validation states, and fragmented UI.",
      "Engineers waste development sprint hours rebuilding common tables, dialogs, and filters rather than shipping core features.",
      "Inaccessible color contrast and haphazard spacing create usability problems for business users.",
    ],
    approach: [
      "Established atomic design foundations: typography scale, semantic color palette, spacing grid, and elevation tokens.",
      "Engineered reusable, high-utility components modeled around complex data workflows (sortable data tables, multi-step modals).",
      "Validated all UI components against WCAG AA contrast and keyboard navigation accessibility standards.",
    ],
    solution: [
      "Figma component system with auto-layout, interactive variants, and strict token naming conventions.",
      "Detailed developer documentation detailing component props, keyboard behaviors, and interactive states.",
      "Reference interface templates for operational dashboards, data visualization, and input forms.",
    ],
    technology: ["Figma", "Design Tokens", "WCAG 2.1 AA", "Atomic Design", "React / MUI"],
    outcome: [
      "Standardized modular UI component library with uniform interaction patterns.",
      "Accelerated frontend feature delivery through pre-tested, reusable interface blocks.",
      "Verified compliance with accessibility standards across typography, inputs, and color tokens.",
    ],
  },
];

export const getAllWorkProjects = () => workProjects;
export const getWorkProjectBySlug = (slug: string) =>
  workProjects.find((p) => p.slug === slug);
export const getWorkProjectsByArea = (areaSlug: string) =>
  workProjects.filter((p) => p.solutionAreaSlug === areaSlug);
