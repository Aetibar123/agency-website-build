export type ProjectType =
  | "Production Build"
  | "Client Project"
  | "Internal Build"
  | "Product Exploration"
  | "Prototype"
  | "Technical Architecture"
  | "Design System"
  | "Example Project";

export type SolutionArea =
  | "Digital Presence"
  | "Customer & Lead Systems"
  | "Internal Business Tools"
  | "AI & Automation";

export type WorkCategory =
  | "Websites & E-commerce"
  | "Mobile Apps"
  | "AI Automation"
  | "SEO"
  | "Social Media Marketing"
  | "Paid Advertising";

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

  // Enhanced visual case study fields
  businessType?: string;
  industry?: string;
  primaryNeed?: string;
  aboutBusiness?: string;
  category?: WorkCategory;
  categorySlug?: string;
  analysis?: {
    situation: string;
    analysis: string;
    opportunity: string;
  };
  features?: Array<{
    title: string;
    desc: string;
  }>;
  workflowSteps?: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  beforeAfter?: Array<{
    before: string;
    after: string;
  }>;
  businessValues?: Array<{
    title: string;
    desc: string;
  }>;
  relatedService?: {
    title: string;
    href: string;
    description: string;
  };
}

export const workProjects: WorkProject[] = [
  // 1. HOME CLEANING BUSINESS WEBSITE
  {
    slug: "home-cleaning-business-website",
    title: "Home Cleaning & Maintenance Business Website",
    clientType: "Home Services Business — Website Example",
    projectType: "Example Project",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    category: "Websites & E-commerce",
    categorySlug: "websites-ecommerce",
    businessType: "Home Services & Property Maintenance",
    industry: "Residential & Commercial Services",
    primaryNeed: "Clear service visibility & structured online enquiry capture",
    image: "/images/portfolio/b2b.png",
    summary:
      "A clean, professional website for a home cleaning and maintenance business, designed to clearly present service packages, establish trust, and make it easy for customers to request a service online.",
    timeline: "Concept Build",
    primaryMetric: "Lead Ready",
    primaryMetricLabel: "Primary Goal",
    context:
      "A home cleaning and property maintenance business needed a professional digital presence. Potential clients frequently asked the same questions about service scope, pricing tiers, and availability over phone calls. The business needed a website where customers could self-educate and submit detailed service requests 24/7.",
    aboutBusiness:
      "This business provides residential deep cleaning, move-in sanitization, and routine property maintenance. Its customers are busy homeowners, tenants, and property managers who value reliability and upfront clarity about what each service package includes.",
    challenge: [
      "Customers had to rely mainly on phone calls and messaging to understand available cleaning and maintenance services.",
      "Different services were not clearly organized, making it difficult for customers to find the exact service they needed.",
      "There was no clear online enquiry process, resulting in incomplete requests that required extensive back-and-forth communication.",
    ],
    approach: [
      "Structured the website around individual cleaning and maintenance services customers actively search for.",
      "Created clear service sections explaining what each service includes, duration, and who it is suitable for.",
      "Added simple, structured enquiry forms so visitors could quickly request quotes with key details upfront.",
    ],
    analysis: {
      situation: "The business received steady inquiries, but staff spent hours explaining service packages over the phone rather than scheduling jobs.",
      analysis: "Customers wanted quick answers about service inclusions and pricing before calling, causing many to leave for competitors with transparent websites.",
      opportunity: "A structured, mobile-first website with dedicated service breakdowns and a simple quote request flow captures high-intent customers instantly.",
    },
    features: [
      {
        title: "Dedicated Service Pages",
        desc: "Individual pages for deep cleaning, move-in cleaning, and property maintenance with full inclusions.",
      },
      {
        title: "Structured Quote Form",
        desc: "A simple multi-step form collecting property size, preferred dates, and specific requirements.",
      },
      {
        title: "Mobile-First Experience",
        desc: "Fast, responsive layout optimized for customers browsing and requesting services from their smartphones.",
      },
      {
        title: "Trust & Credibility Section",
        desc: "Clear FAQs, safety standards, and service guarantees to eliminate customer hesitation.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Customer Discovery",
        desc: "A homeowner finds the website searching for local cleaning or property maintenance.",
      },
      {
        step: "02",
        title: "Service Exploration",
        desc: "They browse clear service packages and see exactly what is included in each tier.",
      },
      {
        step: "03",
        title: "Enquiry Submission",
        desc: "The customer submits their property details and preferred schedule in under two minutes.",
      },
      {
        step: "04",
        title: "Prompt Confirmation",
        desc: "The business receives a complete lead profile and confirms the booking immediately.",
      },
    ],
    beforeAfter: [
      {
        before: "Customers had to call during working hours to ask about service details and pricing.",
        after: "Complete service details, FAQs, and request forms are available online 24/7.",
      },
      {
        before: "Enquiries were scattered across phone calls, SMS, and WhatsApp with missing details.",
        after: "Enquiries arrive with property size, service type, and scheduling preferences included.",
      },
      {
        before: "The business had limited search presence for specific cleaning and repair keywords.",
        after: "Individual service pages establish a solid foundation for local search visibility.",
      },
    ],
    businessValues: [
      {
        title: "24/7 Enquiry Intake",
        desc: "Captures potential customers whenever they search, even outside standard business hours.",
      },
      {
        title: "Less Repetitive Work",
        desc: "Eliminates repetitive calls by answering common questions directly on the website.",
      },
      {
        title: "Stronger Local Presence",
        desc: "Creates a credible digital storefront that supports local SEO and referral traffic.",
      },
      {
        title: "Faster Job Scheduling",
        desc: "Staff receive all necessary job information upfront, speeding up response times.",
      },
    ],
    solution: [
      "Professional home services website with dedicated service pages, about section, FAQs, and contact information.",
      "Clear service categories for cleaning, maintenance, and related home services.",
      "Enquiry-focused calls to action allowing customers to request a service or contact the business easily.",
    ],
    technology: [
      "Next.js",
      "TypeScript",
      "MUI",
      "Tailwind CSS",
      "Node.js",
      "Vercel",
    ],
    outcome: [
      "A clear online presence that explains the business's services to potential customers.",
      "An easier customer journey from finding a service to making an enquiry.",
      "A website structure ready for local SEO, Google search visibility, and future digital advertising.",
    ],
    relatedService: {
      title: "Web Development",
      href: "/services/web-development",
      description: "Custom business websites and web platforms built for speed, clear communication, and customer conversion.",
    },
  },

  // 2. ECOMMERCE WEBSITE DEVELOPMENT
  {
    slug: "ecommerce-website-development",
    title: "E-commerce Website Development for a Product Brand",
    clientType: "Retail & E-commerce Business — Website Example",
    projectType: "Example Project",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    category: "Websites & E-commerce",
    categorySlug: "websites-ecommerce",
    businessType: "Consumer Retail & D2C Brand",
    industry: "Retail & Consumer Goods",
    primaryNeed: "Independent online store with simple product browsing and seamless checkout",
    image: "/images/portfolio/ecommerce.png",
    summary:
      "A modern e-commerce storefront designed to showcase products clearly, simplify mobile shopping, and provide an independent sales platform free from third-party marketplace restrictions.",
    timeline: "Concept Build",
    primaryMetric: "Sales Ready",
    primaryMetricLabel: "Primary Goal",
    context:
      "A growing consumer brand sold products primarily through social media messaging and third-party marketplaces. The brand faced high commission fees, limited customer data ownership, and a disorganized purchasing process that caused high drop-off rates.",
    aboutBusiness:
      "The business produces specialty consumer goods and lifestyle products. Its customers are mobile-first online shoppers who expect instant page loads, clear product photography, transparent shipping policies, and straightforward payment methods.",
    challenge: [
      "Customers had to depend on third-party marketplace listings or DM conversations to discover and purchase products.",
      "Product variations, stock availability, and shipping details were difficult for customers to compare easily.",
      "The business lacked customer data ownership and had no centralized platform to run marketing campaigns.",
    ],
    approach: [
      "Organized products into intuitive categories with fast filtering and search capabilities.",
      "Designed product pages around essential decision factors: high-resolution visuals, dimensions, and customer FAQs.",
      "Created a streamlined, distraction-free checkout flow supporting modern digital payments.",
    ],
    analysis: {
      situation: "Selling through social media DMs created heavy manual work and frequent missed orders during off-hours.",
      analysis: "Shoppers who had to wait for manual price quotes or payment links frequently abandoned their purchases.",
      opportunity: "A dedicated e-commerce store enables instant self-service checkout, automated order tracking, and direct customer relationships.",
    },
    features: [
      {
        title: "Intuitive Product Catalog",
        desc: "Fast filtering by category, price, and attributes with instant search suggestions.",
      },
      {
        title: "Conversion-Focused Product Pages",
        desc: "Clear product photography, detailed specifications, stock status, and prominent add-to-cart buttons.",
      },
      {
        title: "Frictionless Mobile Checkout",
        desc: "Simplified 2-step checkout with address autofill and integrated payment gateways.",
      },
      {
        title: "Order Tracking & Notifications",
        desc: "Automated order confirmation emails and status updates for peace of mind.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Product Discovery",
        desc: "The shopper arrives on the store and browses curated categories or searches directly.",
      },
      {
        step: "02",
        title: "Product Evaluation",
        desc: "Detailed photos, descriptions, and size guides provide all answers needed to buy.",
      },
      {
        step: "03",
        title: "Secure Checkout",
        desc: "The customer enters shipping information and pays through an integrated gateway.",
      },
      {
        step: "04",
        title: "Order Fulfillment",
        desc: "The business receives order details instantly, and the customer receives tracking info.",
      },
    ],
    beforeAfter: [
      {
        before: "Customers had to message manually to check product availability and confirm prices.",
        after: "Real-time product availability and transparent pricing are visible instantly.",
      },
      {
        before: "Manual payment collection via screenshots and UPI links caused reconciliation errors.",
        after: "Automated payment processing with instant order confirmations and receipts.",
      },
      {
        before: "The brand had zero direct customer analytics and depended on third-party platforms.",
        after: "Full ownership of customer accounts, purchase history, and marketing data.",
      },
    ],
    businessValues: [
      {
        title: "Direct Sales Channel",
        desc: "Eliminates third-party marketplace commissions and builds direct customer relationships.",
      },
      {
        title: "Faster Purchasing",
        desc: "Reduces friction with an instant mobile-friendly shopping and checkout flow.",
      },
      {
        title: "Marketing Ready",
        desc: "Provides dedicated landing pages for Google Shopping, Meta ads, and email campaigns.",
      },
      {
        title: "Automated Operations",
        desc: "Replaces manual order taking with automated order generation and notification emails.",
      },
    ],
    solution: [
      "E-commerce website with product categories, product pages, shopping cart, and checkout.",
      "Mobile-friendly shopping experience for customers browsing from phones.",
      "Content structure that supports product discovery, search visibility, and future marketing campaigns.",
    ],
    technology: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe / Razorpay",
    ],
    outcome: [
      "A dedicated online store for presenting and selling products.",
      "A simpler shopping experience across mobile and desktop devices.",
      "A website foundation suitable for SEO, Google Ads, and future online growth.",
    ],
    relatedService: {
      title: "Web Development",
      href: "/services/web-development",
      description: "High-performance e-commerce storefronts and web applications engineered for speed and conversion.",
    },
  },

  // 3. MOBILE BOOKING APP
  {
    slug: "mobile-booking-app",
    title: "Mobile App Development for Appointment & Booking",
    clientType: "Service Business — Mobile App Example",
    projectType: "Example Project",
    solutionArea: "Customer & Lead Systems",
    solutionAreaSlug: "customer-lead-systems",
    category: "Mobile Apps",
    categorySlug: "mobile-apps",
    businessType: "Appointment-Based Service Provider",
    industry: "Health, Wellness & Professional Services",
    primaryNeed: "Native mobile booking app to eliminate phone scheduling bottlenecks",
    image: "/images/portfolio/logix.png",
    summary:
      "A cross-platform iOS and Android mobile app designed to make appointment scheduling, service discovery, and customer reminders effortless from any smartphone.",
    timeline: "Concept Build",
    primaryMetric: "Customer Ready",
    primaryMetricLabel: "Primary Goal",
    context:
      "A service business with high repeat customer volume suffered from constant phone calls for booking, rescheduling, and cancellations. Front desk staff were overwhelmed during peak hours, and clients were frustrated when they couldn't schedule appointments late in the evening.",
    aboutBusiness:
      "The business offers scheduled personal and professional services requiring specific time slots and staff assignments. Customers are regular clients who prefer managing their appointments on their phones without phone calls.",
    challenge: [
      "Customers had limited options for checking available slots and requesting bookings outside business hours.",
      "Manual appointment handling led to scheduling conflicts, double bookings, and staff overload.",
      "No-shows were frequent because reminder calls were time-consuming and often went unanswered.",
    ],
    approach: [
      "Mapped the complete customer journey from available slot selection to instant booking confirmation.",
      "Designed a unified cross-platform mobile experience for iOS and Android with intuitive calendar controls.",
      "Connected customer bookings directly with staff schedules and automated push notification reminders.",
    ],
    analysis: {
      situation: "Front desk staff spent over 3 hours daily managing appointment bookings, reschedules, and reminder phone calls.",
      analysis: "Clients wanted the flexibility to book appointments at night or on weekends when the front desk was closed.",
      opportunity: "A self-service mobile app gives clients 24/7 access to real-time slot availability while reducing front-desk workload.",
    },
    features: [
      {
        title: "Real-Time Slot Calendar",
        desc: "Visual calendar showing live available time slots for each service and staff member.",
      },
      {
        title: "Instant Booking & Rescheduling",
        desc: "Customers can book or modify appointments in seconds without calling.",
      },
      {
        title: "Automated Push Reminders",
        desc: "Timed push alerts sent 24 hours and 2 hours prior to appointments to reduce no-shows.",
      },
      {
        title: "Customer Profile & History",
        desc: "Saved preferences, previous appointment records, and favorite service providers.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Select Service",
        desc: "The client opens the app, chooses their desired service, and selects a preferred staff member.",
      },
      {
        step: "02",
        title: "Pick Available Time",
        desc: "Real-time calendar displays open slots, preventing any double-booking.",
      },
      {
        step: "03",
        title: "Instant Confirmation",
        desc: "The booking is confirmed instantly and automatically added to the user's mobile calendar.",
      },
      {
        step: "04",
        title: "Smart Reminders",
        desc: "The app delivers timely push notifications, keeping attendance high and no-shows low.",
      },
    ],
    beforeAfter: [
      {
        before: "Appointments could only be booked during business hours via phone calls.",
        after: "Clients can browse availability and book appointments 24/7 on their phones.",
      },
      {
        before: "Front desk spent hours calling clients to confirm next-day appointments.",
        after: "Automated push notifications handle reminders without any staff intervention.",
      },
      {
        before: "Last-minute cancellations left empty slots that staff couldn't fill in time.",
        after: "Open slots become immediately visible to all app users for quick re-booking.",
      },
    ],
    businessValues: [
      {
        title: "Fewer Missed Bookings",
        desc: "Enables clients to schedule whenever they remember, even late at night.",
      },
      {
        title: "Reduced Front-Desk Load",
        desc: "Frees staff from routine scheduling calls to focus on in-person customer care.",
      },
      {
        title: "Lower No-Show Rates",
        desc: "Automated push notifications significantly improve appointment attendance.",
      },
      {
        title: "Higher Customer Retention",
        desc: "A convenient mobile experience encourages repeat bookings from existing clients.",
      },
    ],
    solution: [
      "Android and iOS app for browsing services and requesting or managing appointments.",
      "Customer account area for viewing relevant booking information.",
      "Backend integration for managing customer and appointment data.",
    ],
    technology: [
      "React Native",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Firebase Cloud Messaging",
    ],
    outcome: [
      "A more convenient way for customers to interact with the business.",
      "Less dependence on manual appointment communication.",
      "A mobile platform that can support future customer features and services.",
    ],
    relatedService: {
      title: "App Development",
      href: "/services/app-development",
      description: "Cross-platform mobile applications for iOS and Android engineered for performance, convenience, and reliability.",
    },
  },

  // 4. FIELD SERVICE MOBILE APP
  {
    slug: "field-service-mobile-app",
    title: "Mobile App Development for Field Service Teams",
    clientType: "Field Service Business — Mobile App Example",
    projectType: "Example Project",
    solutionArea: "Internal Business Tools",
    solutionAreaSlug: "internal-business-tools",
    category: "Mobile Apps",
    categorySlug: "mobile-apps",
    businessType: "Field Operations & Contracting",
    industry: "Facilities & On-Site Contracting",
    primaryNeed: "Mobile job dispatch, status reporting, and photo completion proof for field staff",
    image: "/images/portfolio/inventry.png",
    summary:
      "A mobile workflow app for field technicians to view assigned jobs, update work status, capture completion photos, and keep office dispatchers informed in real time.",
    timeline: "Functional Prototype",
    primaryMetric: "Connected",
    primaryMetricLabel: "Primary Goal",
    context:
      "A field service contracting business relied on printed work orders, phone calls, and manual end-of-day paperwork. Technicians often lacked updated job notes, office managers had no real-time status visibility, and proof-of-work documentation was frequently misplaced.",
    aboutBusiness:
      "The business deploys technicians to on-site commercial and residential repair jobs. The office dispatch team needs real-time visibility into job progress, while field workers need a simple mobile tool that works even when on-site mobile signal is weak.",
    challenge: [
      "Field workers relied on phone calls and paper notes to receive and report job information.",
      "Office dispatchers had limited visibility into technician locations and current job progress.",
      "Photos, customer signatures, and completion notes had to be collected manually, delaying invoice generation.",
    ],
    approach: [
      "Mapped the complete technician workflow from daily job dispatch to completed work sign-off.",
      "Built an offline-first mobile app that stores job details locally and syncs automatically when reconnected.",
      "Connected mobile field updates with a central office web dashboard for real-time monitoring.",
    ],
    analysis: {
      situation: "Dispatchers spent mornings calling technicians to assign jobs and afternoons chasing paperwork for billing.",
      analysis: "Paperwork delays meant invoices were sent days after job completion, slowing cash flow and increasing disputes.",
      opportunity: "A mobile app with digital job cards and instant photo uploads enables same-day invoicing and complete operational clarity.",
    },
    features: [
      {
        title: "Daily Job Queue",
        desc: "Technicians view assigned tasks, addresses, client notes, and required materials in one list.",
      },
      {
        title: "Photo & Signature Capture",
        desc: "On-site photos and customer sign-offs captured directly through the phone camera.",
      },
      {
        title: "Offline-First Sync",
        desc: "Full functionality in basements or remote sites with automatic data sync once connected.",
      },
      {
        title: "Office Dispatch Dashboard",
        desc: "Live web dashboard showing job statuses, technician progress, and uploaded documentation.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Job Assignment",
        desc: "The office assigns jobs through the dashboard; technicians receive instant notifications.",
      },
      {
        step: "02",
        title: "On-Site Arrival",
        desc: "The technician marks arrival with a single tap, recording an accurate timestamp.",
      },
      {
        step: "03",
        title: "Work Documentation",
        desc: "Before/after photos, notes, and digital customer signatures are logged on the phone.",
      },
      {
        step: "04",
        title: "Instant Office Sync",
        desc: "The office receives completed job proof immediately, enabling same-day invoicing.",
      },
    ],
    beforeAfter: [
      {
        before: "Technicians visited the office every morning to pick up paper job sheets.",
        after: "Technicians receive daily job routes and customer notes directly on their phones.",
      },
      {
        before: "Job completion proof took 2–4 days to reach the accounting team for invoicing.",
        after: "Photos and signatures sync instantly, allowing same-day invoice generation.",
      },
      {
        before: "Weak cellular signal caused app crashes and lost notes on job sites.",
        after: "Offline storage allows uninterrupted work with background syncing when connected.",
      },
    ],
    businessValues: [
      {
        title: "Faster Invoicing Cycle",
        desc: "Same-day proof of work accelerates customer billing and improves business cash flow.",
      },
      {
        title: "Zero Paperwork Loss",
        desc: "Digital job logs, photos, and signatures eliminate lost documents and billing disputes.",
      },
      {
        title: "Real-Time Dispatch Visibility",
        desc: "Office teams see live job statuses without needing to call technicians during work.",
      },
      {
        title: "Better Customer Trust",
        desc: "Clear visual proof of completed work builds confidence with residential and commercial clients.",
      },
    ],
    solution: [
      "Mobile app for viewing assigned jobs and updating work status.",
      "Photo upload and completion records for finished work.",
      "Central dashboard for office teams to monitor jobs and field activity.",
    ],
    technology: [
      "React Native",
      "TypeScript",
      "Node.js",
      "SQLite",
      "PostgreSQL",
      "AWS S3",
    ],
    outcome: [
      "More organized communication between field workers and office teams.",
      "Digital records for completed jobs and uploaded proof.",
      "A connected workflow that reduces dependence on paper-based updates.",
    ],
    relatedService: {
      title: "App Development",
      href: "/services/app-development",
      description: "Reliable mobile applications and field operational tools built for real-world business workflows.",
    },
  },

  // 5. AI LEAD FOLLOW-UP AUTOMATION
  {
    slug: "ai-lead-follow-up-automation",
    title: "AI Lead Follow-Up Automation for Sales Teams",
    clientType: "Sales & Lead Management — AI Automation Example",
    projectType: "Example Project",
    solutionArea: "AI & Automation",
    solutionAreaSlug: "ai-automation",
    category: "AI Automation",
    categorySlug: "ai-automation",
    businessType: "B2B & High-Value Service Firm",
    industry: "Sales & Professional Services",
    primaryNeed: "Automated enquiry triage, response drafting, and scheduled follow-up reminders",
    image: "/images/portfolio/aiCostomer.png",
    summary:
      "A practical AI automation workflow that organizes incoming website enquiries, drafts context-aware responses for team review, and ensures prospective clients are never left waiting.",
    timeline: "Workflow Prototype",
    primaryMetric: "Follow-Up Ready",
    primaryMetricLabel: "Primary Goal",
    context:
      "A service firm received enquiries from website contact forms, emails, and WhatsApp. Sales representatives struggled to respond quickly during busy periods, resulting in slow first contacts and lost deals. The business needed automated support without sending unverified, robotic messages to prospective clients.",
    aboutBusiness:
      "The business provides professional consulting and specialized services where initial customer inquiries often contain detailed project descriptions. Clients expect timely, knowledgeable responses that address their specific requirements.",
    challenge: [
      "New enquiries remained scattered across separate email inboxes and messaging accounts.",
      "Sales representatives spent considerable time writing repetitive introductory emails for every lead.",
      "Follow-ups were frequently forgotten when representatives juggled multiple client consultations.",
    ],
    approach: [
      "Connected all inbound enquiry channels into a centralized workflow database.",
      "Utilized AI to extract key requirements from inquiries and generate tailored draft responses.",
      "Structured a human-in-the-loop approval step so representatives review every message before sending.",
    ],
    analysis: {
      situation: "Research shows leads responded to within 1 hour are 7x more likely to convert, but the team's average response time was 18 hours.",
      analysis: "Representatives spent too much time researching past proposals and typing routine replies from scratch.",
      opportunity: "AI-assisted draft generation prepares 90% of the response instantly, allowing representatives to personalize and send in seconds.",
    },
    features: [
      {
        title: "Multi-Channel Lead Capture",
        desc: "Automatically aggregates inquiries from website forms, emails, and WhatsApp into one queue.",
      },
      {
        title: "Context-Aware Response Drafting",
        desc: "AI analyzes the inquiry and drafts a tailored reply based on approved company service details.",
      },
      {
        title: "One-Click Team Approval",
        desc: "Sales representatives review, edit if necessary, and approve drafts with a single click.",
      },
      {
        title: "Smart Follow-Up Scheduling",
        desc: "Automated reminders ensure follow-ups occur if a prospect has not responded after 3 days.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Inquiry Arrival",
        desc: "A prospective client submits a project inquiry via the website form or email.",
      },
      {
        step: "02",
        title: "AI Analysis & Draft",
        desc: "The AI categorizes the inquiry scope and drafts an appropriate, personalized response.",
      },
      {
        step: "03",
        title: "Human Review",
        desc: "The assigned representative reviews the draft in Slack or email, tweaking details as needed.",
      },
      {
        step: "04",
        title: "Timely Dispatch",
        desc: "The response is sent within minutes of the original inquiry, maximizing conversion intent.",
      },
    ],
    beforeAfter: [
      {
        before: "Leads waited an average of 18 hours for a first reply during busy periods.",
        after: "Tailored draft replies are ready for representative approval within 5 minutes.",
      },
      {
        before: "Sales reps spent 15–20 minutes writing introductory emails for each new lead.",
        after: "Reps spend under 2 minutes reviewing and approving AI-prepared drafts.",
      },
      {
        before: "Unanswered inquiries were lost in inboxes with no structured follow-up.",
        after: "Automated follow-up queues remind representatives at optimal intervals.",
      },
    ],
    businessValues: [
      {
        title: "Faster First Response",
        desc: "Reaches interested prospects while their purchase intent is highest, boosting conversion rates.",
      },
      {
        title: "Safe Human Control",
        desc: "Ensures high quality by keeping team review in place—no unverified AI hallucinations sent to clients.",
      },
      {
        title: "Consistent Follow-Through",
        desc: "Prevents high-value opportunities from slipping through cracks due to forgotten follow-ups.",
      },
      {
        title: "Productive Sales Staff",
        desc: "Frees representatives from repetitive email drafting so they can focus on consultations.",
      },
    ],
    solution: [
      "AI-assisted lead organization and enquiry classification.",
      "Automated follow-up reminders based on lead status and activity.",
      "AI-generated response drafts that sales staff can review and send.",
    ],
    technology: [
      "Next.js",
      "Node.js",
      "OpenAI API",
      "PostgreSQL",
      "BullMQ / Redis",
      "Slack Webhooks",
    ],
    outcome: [
      "A more organized process for handling new customer enquiries.",
      "Less repetitive manual work for sales teams.",
      "A practical AI automation workflow designed to support, rather than replace, the sales team.",
    ],
    relatedService: {
      title: "AI Automation & Integration",
      href: "/services/ai-automation",
      description: "Practical AI features and system automations designed to eliminate repetitive work and connect existing tools.",
    },
  },

  // 6. AI CUSTOMER ENQUIRY ASSISTANT
  {
    slug: "ai-customer-enquiry-assistant",
    title: "AI Customer Enquiry & Support Assistant",
    clientType: "Customer Support — AI Integration Example",
    projectType: "Example Project",
    solutionArea: "AI & Automation",
    solutionAreaSlug: "ai-automation",
    category: "AI Automation",
    categorySlug: "ai-automation",
    businessType: "Customer Support & Operations",
    industry: "Customer Service & Operations",
    primaryNeed: "Assisting support staff with verified answers to repetitive customer questions",
    image: "/images/portfolio/aiCostomer.png",
    summary:
      "An AI-powered support assistant connected to verified company documentation that helps support teams answer customer questions faster with zero guesswork.",
    timeline: "Working Prototype",
    primaryMetric: "Assisted",
    primaryMetricLabel: "Primary Goal",
    context:
      "A growing customer service team received hundreds of repetitive questions regarding policies, order statuses, technical specifications, and return procedures. New team members struggled to find the correct answers across scattered PDF manuals and internal documentation.",
    aboutBusiness:
      "The organization handles multi-tier customer inquiries where accuracy is critical. Customers expect fast, factually correct answers, while management needs strict safeguards to ensure AI never provides incorrect or unauthorized information.",
    challenge: [
      "Support staff repeatedly answered the same 20 common questions, consuming hours of valuable time.",
      "Finding accurate information across disparate spreadsheets, manuals, and policy docs caused delays.",
      "Management was hesitant to use public AI chatbots that could hallucinate incorrect answers.",
    ],
    approach: [
      "Indexed approved company knowledge bases and FAQs into a private vector search system.",
      "Configured strict deterministic guardrails so the AI only cites verified company documentation.",
      "Integrated the assistant directly into the team's support workspace for immediate access.",
    ],
    analysis: {
      situation: "Support staff spent up to 40% of their day searching internal files to answer routine customer inquiries.",
      analysis: "Customer wait times were prolonged not by complex troubleshooting, but by simple factual lookups.",
      opportunity: "An internal AI assistant that retrieves the exact verified paragraph in seconds enables instant, accurate customer replies.",
    },
    features: [
      {
        title: "Verified Knowledge Retrieval",
        desc: "Retrieves answers strictly from approved company documentation with source citations.",
      },
      {
        title: "Zero-Hallucination Guardrails",
        desc: "Configured to acknowledge when information is not found rather than guessing.",
      },
      {
        title: "Support Desk Integration",
        desc: "Lives directly in the support team's workspace as a sidecar assistant.",
      },
      {
        title: "Continuous Knowledge Updates",
        desc: "Easily update documentation when policies or product details change.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Customer Query",
        desc: "A customer submits a question regarding a specific service policy or order detail.",
      },
      {
        step: "02",
        title: "Instant Retrieval",
        desc: "The AI assistant scans approved internal documents and drafts an exact answer.",
      },
      {
        step: "03",
        title: "Staff Verification",
        desc: "The support agent reviews the drafted reply and verified source citation.",
      },
      {
        step: "04",
        title: "Accurate Resolution",
        desc: "The customer receives a fast, verified answer, reducing support ticket turnaround.",
      },
    ],
    beforeAfter: [
      {
        before: "Staff manually searched across 10+ PDF files to find specific warranty or policy terms.",
        after: "Relevant policy paragraphs and verified answers are surfaced in under 3 seconds.",
      },
      {
        before: "New support team members required 4–6 weeks of training before handling inquiries alone.",
        after: "New hires access verified institutional knowledge immediately through the assistant.",
      },
      {
        before: "Inconsistent answers were provided depending on which support agent replied.",
        after: "Standardized, accurate responses grounded in company documentation.",
      },
    ],
    businessValues: [
      {
        title: "Faster Ticket Resolution",
        desc: "Cuts response time on factual inquiries from minutes to seconds.",
      },
      {
        title: "Guaranteed Accuracy",
        desc: "Strict policy guardrails prevent misleading information or hallucinations.",
      },
      {
        title: "Accelerated Onboarding",
        desc: "Helps new support hires become productive within days rather than weeks.",
      },
      {
        title: "Lower Operational Costs",
        desc: "Enables existing support staff to handle higher inquiry volumes comfortably.",
      },
    ],
    solution: [
      "AI enquiry assistant for frequently asked customer questions.",
      "AI integration with existing business information and workflows.",
      "Human review flow for complex or sensitive customer requests.",
    ],
    technology: [
      "Next.js",
      "TypeScript",
      "Python / FastAPI",
      "OpenAI API",
      "Vector Embeddings",
      "PostgreSQL (pgvector)",
    ],
    outcome: [
      "Less repetitive work for teams handling common customer questions.",
      "Faster access to relevant business information.",
      "A controlled AI automation setup that supports staff during customer interactions.",
    ],
    relatedService: {
      title: "AI Automation & Integration",
      href: "/services/ai-automation",
      description: "Custom AI assistants and automated knowledge workflows connected safely to your business data.",
    },
  },

  // 7. LOCAL SEO SEARCH VISIBILITY
  {
    slug: "local-seo-search-visibility",
    title: "Local SEO & Google Search Visibility",
    clientType: "Local Business — SEO Services Example",
    projectType: "Example Project",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    category: "SEO",
    categorySlug: "seo",
    businessType: "Local Service & Retail Business",
    industry: "Local Services & Trade",
    primaryNeed: "Appearing in Google local search and Google Maps when nearby customers search",
    image: "/images/portfolio/EnterpriseSeo.png",
    summary:
      "A structured local SEO strategy designed to improve Google Search and Google Maps rankings, strengthen local relevance, and bring nearby ready-to-buy customers to the business.",
    timeline: "SEO Strategy Example",
    primaryMetric: "Search Ready",
    primaryMetricLabel: "Primary Goal",
    context:
      "A local service business relied heavily on word of mouth and expensive physical flyers. When prospective customers in the local area searched on Google for their services, competitor businesses appeared in the Google Map pack and top organic results, while this business was nowhere to be found.",
    aboutBusiness:
      "The business provides specialized physical and on-site services within a defined regional territory. Its ideal customers are nearby residents and business owners actively looking for dependable local service providers.",
    challenge: [
      "The business had no structured Google Business Profile optimization or localized website content.",
      "Competitors dominated local search terms like 'services near me' and territory-specific queries.",
      "Search engines had limited signals explaining the business's physical service area and opening hours.",
    ],
    approach: [
      "Conducted thorough keyword research around high-intent local search phrases and regional modifiers.",
      "Structured localized landing pages with Schema.org LocalBusiness structured data markup.",
      "Optimized Google Business Profile categories, service listings, and review generation processes.",
    ],
    analysis: {
      situation: "Over 70% of local service queries lead to a phone call or visit within 24 hours, but the business had zero visibility on Google Maps.",
      analysis: "Competitors ranked higher not because of superior service, but because their website had clear location signals and structured schema.",
      opportunity: "Aligning the website's technical structure and Google Business Profile with local search intent unlocks consistent, free local enquiries.",
    },
    features: [
      {
        title: "Localized Service Pages",
        desc: "Dedicated pages for core services optimized for targeted neighborhoods and surrounding areas.",
      },
      {
        title: "LocalBusiness Schema Markup",
        desc: "Structured JSON-LD code providing Google with exact coordinates, service areas, and operating hours.",
      },
      {
        title: "Google Business Profile Alignment",
        desc: "Matching service categories, verified business details, and strategic review collection.",
      },
      {
        title: "Mobile Speed Optimization",
        desc: "Sub-second load times ensuring mobile searchers can call or navigate without delay.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Local Search",
        desc: "A nearby customer searches on Google for a local service (e.g., 'service near me').",
      },
      {
        step: "02",
        title: "Map & Organic Discovery",
        desc: "The business appears prominently in the Google Map Pack and local organic results.",
      },
      {
        step: "03",
        title: "Clear Service Details",
        desc: "The searcher clicks through to a fast-loading page detailing local service coverage and reviews.",
      },
      {
        step: "04",
        title: "Direct Contact",
        desc: "The customer taps to call or submits a quick quote request directly from their phone.",
      },
    ],
    beforeAfter: [
      {
        before: "The business was invisible for local 'near me' Google searches in its target territory.",
        after: "Prominent positioning in Google Map Pack and local search results for core services.",
      },
      {
        before: "Search engines struggled to understand which cities and neighborhoods were served.",
        after: "Structured Schema.org markup explicitly defines exact service areas and coordinates.",
      },
      {
        before: "New leads depended on word-of-mouth and costly print advertising.",
        after: "A steady, sustainable stream of organic inbound inquiries from local searchers.",
      },
    ],
    businessValues: [
      {
        title: "High-Intent Inquiries",
        desc: "Reaches customers actively searching to hire a local provider immediately.",
      },
      {
        title: "Sustainable Long-Term Traffic",
        desc: "Unlike paid ads that stop when budget pauses, organic search visibility continues delivering leads.",
      },
      {
        title: "Enhanced Local Reputation",
        desc: "Prominent Google Maps placement and verified reviews build instant local credibility.",
      },
      {
        title: "Lower Customer Acquisition Cost",
        desc: "Reduces dependency on expensive third-party lead generation directories.",
      },
    ],
    solution: [
      "SEO-focused service pages and location content.",
      "On-page SEO improvements including titles, descriptions, headings, and internal linking.",
      "Local search optimization to improve visibility for customers searching in the business's area.",
    ],
    technology: [
      "Next.js",
      "Google Search Console",
      "Google Business Profile",
      "Schema.org (JSON-LD)",
      "Lighthouse",
    ],
    outcome: [
      "A clearer website structure for search engines and customers.",
      "Stronger local search visibility around relevant services.",
      "A stronger foundation for ongoing SEO services and content growth.",
    ],
    relatedService: {
      title: "SEO Services",
      href: "/services/seo",
      description: "Technical search engine optimization and local search visibility to help customers find your business on Google.",
    },
  },

  // 8. WEBSITE SEO IMPROVEMENT
  {
    slug: "website-seo-improvement",
    title: "Website SEO Improvement & Search Structure",
    clientType: "Business Website — SEO Services Example",
    projectType: "Example Project",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    category: "SEO",
    categorySlug: "seo",
    businessType: "Corporate & B2B Service Firm",
    industry: "B2B Services & Consulting",
    primaryNeed: "Restructuring existing web pages for clear organic search relevance and crawlability",
    image: "/images/portfolio/ecommerce.png",
    summary:
      "A comprehensive on-page SEO improvement project that restructured an existing website's architecture, resolved crawl bottlenecks, and aligned key pages with commercial search intent.",
    timeline: "SEO Strategy Example",
    primaryMetric: "Search Focused",
    primaryMetricLabel: "Primary Goal",
    context:
      "A B2B company had invested in a modern website but received almost zero organic traffic from Google. Key service pages had vague headlines, duplicate meta descriptions, broken redirect loops, and slow mobile loading speeds that prevented search engine crawlers from indexing content properly.",
    aboutBusiness:
      "The business offers commercial services to corporate clients. Decision makers research these services using specific industry terminology, requiring pages to demonstrate depth, expertise, and clear technical answers.",
    challenge: [
      "Important service pages were grouped under generic titles that failed to match customer search terms.",
      "Technical crawl errors, missing canonical tags, and unoptimized images slowed page load speeds.",
      "Internal linking was haphazard, leaving important pages isolated without ranking authority.",
    ],
    approach: [
      "Performed a complete technical audit to identify crawl blocks, duplicate tags, and performance issues.",
      "Restructured URL hierarchy and heading structures (H1/H2/H3) around commercial search intent.",
      "Implemented semantic internal linking to pass authority from high-traffic pages to core service offerings.",
    ],
    analysis: {
      situation: "The website had valuable technical content, but Google bots could not discern which page was authoritative for which service.",
      analysis: "Multiple pages targeted overlapping keywords without canonical tags, cannibalizing search rankings.",
      opportunity: "Establishing a clear topic hierarchy with distinct keyword targets allows Google to rank each service page with confidence.",
    },
    features: [
      {
        title: "Technical Crawl Optimization",
        desc: "Fixed broken redirects, resolved 404 errors, and structured clean XML sitemaps.",
      },
      {
        title: "Search Intent Page Hierarchy",
        desc: "Realigned page titles, meta descriptions, and headers to match verified commercial queries.",
      },
      {
        title: "Strategic Internal Linking",
        desc: "Connected informational blog articles directly to relevant core service conversion pages.",
      },
      {
        title: "Core Web Vitals Remediation",
        desc: "Compressed assets and optimized fonts to achieve 90+ mobile performance scores.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Search Query",
        desc: "A corporate buyer searches for a specialized business service on Google.",
      },
      {
        step: "02",
        title: "Targeted Search Result",
        desc: "Google serves the exact dedicated service page with a descriptive title and snippet.",
      },
      {
        step: "03",
        title: "Instant Content Delivery",
        desc: "The page loads in under 1 second, presenting answers clearly without visual clutter.",
      },
      {
        step: "04",
        title: "Consultation Request",
        desc: "The buyer submits a project inquiry through the clearly positioned contact section.",
      },
    ],
    beforeAfter: [
      {
        before: "Multiple pages competed for the same search terms with no clear canonical authority.",
        after: "Each core service has a distinct, authoritative page targeting specific commercial intent.",
      },
      {
        before: "Slow mobile loading speeds caused search engines to penalize organic rankings.",
        after: "Optimized Core Web Vitals deliver sub-second performance across mobile and desktop.",
      },
      {
        before: "Internal linking was absent, leaving key service pages unindexed or buried.",
        after: "Logical topic clusters guide both search engine crawlers and prospective buyers.",
      },
    ],
    businessValues: [
      {
        title: "Higher Qualified Traffic",
        desc: "Attracts decision makers specifically searching for the company's core services.",
      },
      {
        title: "Improved Google Rankings",
        desc: "Technical cleanliness gives search engines the clarity needed to award top positions.",
      },
      {
        title: "Better User Experience",
        desc: "Faster loading speeds and clearer page structure reduce visitor bounce rates.",
      },
      {
        title: "Asset Preservation",
        desc: "Enhances the existing website without requiring an expensive full rebuild.",
      },
    ],
    solution: [
      "On-page SEO improvements across key service and product pages.",
      "Improved metadata, headings, internal links, and structured content.",
      "SEO-friendly content structure designed to support long-term organic visibility.",
    ],
    technology: [
      "Next.js",
      "Google Search Console",
      "Google Analytics 4",
      "Schema.org",
      "Screaming Frog",
    ],
    outcome: [
      "Better-organized pages for search engines and website visitors.",
      "Stronger relevance around the business's important services.",
      "A cleaner SEO foundation for future content and search growth.",
    ],
    relatedService: {
      title: "SEO Services",
      href: "/services/seo",
      description: "Comprehensive technical audits, on-page optimization, and structured search markup for sustainable organic growth.",
    },
  },

  // 9. SOCIAL MEDIA ORGANIC GROWTH
  {
    slug: "social-media-organic-growth",
    title: "Social Media Marketing & Organic Growth",
    clientType: "Local Business — Social Media Marketing Example",
    projectType: "Example Project",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    category: "Social Media Marketing",
    categorySlug: "social-media-marketing",
    businessType: "Consumer Brand & Local Enterprise",
    industry: "Lifestyle & Local Business",
    primaryNeed: "Structured content calendar and consistent branded social publishing",
    image: "/images/portfolio/rebrand.png",
    summary:
      "A disciplined social media marketing strategy that replaced ad-hoc posting with structured monthly content pillars, branded visual assets, and authentic audience engagement.",
    timeline: "Marketing Strategy Example",
    primaryMetric: "Consistent",
    primaryMetricLabel: "Primary Goal",
    context:
      "A growing enterprise had active social media profiles on Instagram and LinkedIn but lacked a coherent content plan. Posts were published erratically, graphics were inconsistent, and the content focused almost entirely on promotional discounts rather than educating and engaging the audience.",
    aboutBusiness:
      "The business operates in a competitive lifestyle and consumer space where visual branding, brand voice, and genuine customer connections influence buying decisions.",
    challenge: [
      "Posting was irregular, often going weeks without activity followed by clusters of promotional posts.",
      "Visuals lacked consistent typography, brand colors, and cohesive design standards.",
      "Content failed to address customer pain points, resulting in low organic engagement and reach.",
    ],
    approach: [
      "Established 4 clear content pillars: educational tips, customer case stories, behind-the-scenes, and service spotlights.",
      "Designed a reusable branded template library for carousels, single posts, and video reels.",
      "Implemented a monthly content calendar scheduled in advance to ensure consistent publishing.",
    ],
    analysis: {
      situation: "The business posted whenever someone had free time, treating social media as an afterthought rather than a marketing channel.",
      analysis: "Audiences ignore accounts that only broadcast sales pitches, but engage with content that solves problems or provides practical insights.",
      opportunity: "A reliable schedule of educational and visually polished content builds trust and keeps the brand top of mind when customers are ready to buy.",
    },
    features: [
      {
        title: "Monthly Content Calendar",
        desc: "30-day scheduled roadmap covering themes, captions, hashtags, and visual assets.",
      },
      {
        title: "Branded Visual Design System",
        desc: "Cohesive color palettes, typography rules, and custom carousel templates.",
      },
      {
        title: "Value-First Educational Posts",
        desc: "Practical tips and industry insights that establish authority and encourage shares.",
      },
      {
        title: "Monthly Performance Review",
        desc: "Transparent reporting on reach, top-performing posts, and audience growth trends.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Content Planning",
        desc: "We plan the upcoming month's themes, captions, and creative assets in advance.",
      },
      {
        step: "02",
        title: "Creative Production",
        desc: "High-quality visual assets and carousels are designed following brand guidelines.",
      },
      {
        step: "03",
        title: "Scheduled Publishing",
        desc: "Posts are scheduled at optimal engagement windows across Instagram and LinkedIn.",
      },
      {
        step: "04",
        title: "Engagement & Growth",
        desc: "Consistent publishing drives organic discovery, saves, shares, and profile visits.",
      },
    ],
    beforeAfter: [
      {
        before: "Posts were created at the last minute with inconsistent styling and messaging.",
        after: "Every post follows a cohesive brand aesthetic and scheduled content calendar.",
      },
      {
        before: "Content consisted almost exclusively of repetitive sales announcements.",
        after: "A healthy mix of educational, social proof, and service spotlight content.",
      },
      {
        before: "Weeks of complete inactivity followed by unpredictable bursts of posting.",
        after: "Reliable 3x weekly publishing that keeps the business consistently visible.",
      },
    ],
    businessValues: [
      {
        title: "Predictable Brand Presence",
        desc: "Keeps your business top-of-mind so customers think of you first when they need your service.",
      },
      {
        title: "Professional Brand Image",
        desc: "Polished, consistent visuals build credibility with prospective clients checking your profiles.",
      },
      {
        title: "Organic Community Growth",
        desc: "Attracts followers naturally through shareable, helpful content without relying solely on ads.",
      },
      {
        title: "Time Saved for Owners",
        desc: "Frees business owners from daily social media stress with advance monthly planning.",
      },
    ],
    solution: [
      "Social media marketing and monthly content planning.",
      "Post ideas and branded content designed around the target audience.",
      "Ongoing social media management focused on consistency, engagement, and organic growth.",
    ],
    technology: [
      "Meta Business Suite",
      "Instagram",
      "LinkedIn",
      "Canva / Figma",
      "Analytics",
    ],
    outcome: [
      "A more consistent and organized social media presence.",
      "Content focused on the business's services and target audience.",
      "A practical foundation for long-term organic social media growth.",
    ],
    relatedService: {
      title: "Social Media Marketing",
      href: "/services/social-media-marketing",
      description: "Structured content calendars, custom branded graphics, and ongoing management to keep your audience engaged.",
    },
  },

  // 10. SOCIAL MEDIA LEAD CONTENT
  {
    slug: "social-media-lead-content",
    title: "Social Media Content & Lead Generation Setup",
    clientType: "Service Business — Social Media Example",
    projectType: "Example Project",
    solutionArea: "Customer & Lead Systems",
    solutionAreaSlug: "customer-lead-systems",
    category: "Social Media Marketing",
    categorySlug: "social-media-marketing",
    businessType: "Professional & Advisory Service Firm",
    industry: "Professional & Advisory Services",
    primaryNeed: "Aligning social media content with clear customer enquiry pathways",
    image: "/images/portfolio/dtc.png",
    summary:
      "A conversion-focused social media strategy that transformed informative posts into direct inquiry generators through clear calls to action and frictionless contact pathways.",
    timeline: "Marketing Strategy Example",
    primaryMetric: "Lead Focused",
    primaryMetricLabel: "Primary Goal",
    context:
      "A professional service firm received reasonable impressions on LinkedIn and Instagram, but virtually none of that attention turned into business inquiries. The bio links were generic, posts ended without clear guidance on how to hire the firm, and prospective clients didn't know how to take the next step.",
    aboutBusiness:
      "The firm provides high-value professional services where client trust and problem-solving capability are paramount. Prospective clients spend time evaluating social profiles before reaching out for an initial consultation.",
    challenge: [
      "Content generated passive likes but failed to guide interested readers toward initiating contact.",
      "Profile bios and link-in-bio pages were cluttered and lacked a single clear call to action.",
      "There was no systematic bridge connecting social engagement with the firm's website consultation forms.",
    ],
    approach: [
      "Introduced specific problem-and-solution carousel formats ending with explicit call-to-action slides.",
      "Streamlined the profile bio and link destination into a focused consultation booking page.",
      "Created monthly 'case study breakdown' posts showing concrete examples of how the firm helps clients.",
    ],
    analysis: {
      situation: "Followers found the content interesting, but without an explicit next step, they simply scrolled past.",
      analysis: "High-value clients need a compelling reason and a low-friction pathway to reach out for a consultation.",
      opportunity: "Framing content around specific business problems followed by a direct invitation to discuss their situation drives qualified leads.",
    },
    features: [
      {
        title: "Call-to-Action Architecture",
        desc: "Clear, benefit-driven closing slides directing readers on exactly how to request a consultation.",
      },
      {
        title: "Problem-Solution Carousels",
        desc: "Step-by-step breakdowns of common client challenges and how to overcome them.",
      },
      {
        title: "Optimized Bio & Landing Page",
        desc: "Clean, distraction-free landing link focused solely on scheduling an exploratory call.",
      },
      {
        title: "Direct Message Qualification Prompts",
        desc: "Structured conversation starters encouraging interested prospects to message directly.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Problem Identification",
        desc: "A prospect sees a post detailing an exact challenge their business is currently facing.",
      },
      {
        step: "02",
        title: "Insight & Proof",
        desc: "The carousel provides practical insight, demonstrating the firm's expertise and approach.",
      },
      {
        step: "03",
        title: "Clear Call to Action",
        desc: "The final slide invites the reader to book an exploratory consultation or DM for info.",
      },
      {
        step: "04",
        title: "Qualified Inquiry",
        desc: "The prospect clicks the link and submits a consultation request with full context.",
      },
    ],
    beforeAfter: [
      {
        before: "Posts concluded without guidance, leaving interested readers unsure how to engage.",
        after: "Every piece of content includes an explicit, low-friction pathway to book a consultation.",
      },
      {
        before: "Bio links pointed to a cluttered homepage where visitors struggled to find the contact form.",
        after: "A dedicated mobile landing page guides visitors straight to a consultation booking form.",
      },
      {
        before: "Social media operated as an isolated vanity channel with zero measurable inquiries.",
        after: "Social content serves as an active, dependable source of qualified inbound leads.",
      },
    ],
    businessValues: [
      {
        title: "Tangible Business Results",
        desc: "Shifts social media from vanity metric chasing to actual qualified consultation requests.",
      },
      {
        title: "Educated Prospects",
        desc: "Leads arriving from social content already understand your methodology and value.",
      },
      {
        title: "Shorter Sales Cycles",
        desc: "Educational content addresses common objections before the first conversation begins.",
      },
      {
        title: "Measurable Channel ROI",
        desc: "Clear tracking from social post clicks to booked calls provides visibility into marketing return.",
      },
    ],
    solution: [
      "Social media content planning and marketing support.",
      "Service-focused posts designed to generate customer interest and enquiries.",
      "Consistent calls to action connecting social audiences with business contact channels.",
    ],
    technology: [
      "LinkedIn",
      "Instagram",
      "Meta Business Suite",
      "Figma",
      "Google Analytics",
    ],
    outcome: [
      "Clearer communication of the business's services on social platforms.",
      "A stronger connection between content and customer enquiry paths.",
      "A social media structure that can work alongside SEO and paid advertising.",
    ],
    relatedService: {
      title: "Social Media Marketing",
      href: "/services/social-media-marketing",
      description: "Content planning and audience engagement strategies built to turn social attention into genuine business inquiries.",
    },
  },

  // 11. GOOGLE ADS LEAD GENERATION
  {
    slug: "google-ads-lead-generation",
    title: "Google Ads Lead Generation Campaign",
    clientType: "Service Business — Google Ads Example",
    projectType: "Example Project",
    solutionArea: "Customer & Lead Systems",
    solutionAreaSlug: "customer-lead-systems",
    category: "Paid Advertising",
    categorySlug: "paid-advertising",
    businessType: "Commercial & Business Service Provider",
    industry: "Commercial & Business Services",
    primaryNeed: "Capturing high-intent Google searchers actively looking to hire services",
    image: "/images/portfolio/b2b.png",
    summary:
      "A precision Google Ads search campaign structured around commercial intent keywords, negative keyword filters, and high-converting landing pages to generate verified business leads.",
    timeline: "Campaign Strategy Example",
    primaryMetric: "Lead Generation",
    primaryMetricLabel: "Primary Goal",
    context:
      "A commercial service business attempted to run Google Ads independently but burned budget on irrelevant search terms, job seekers, and students looking for free information. Clicks were expensive, and virtually none converted into paying clients because traffic was sent to a generic homepage.",
    aboutBusiness:
      "The business provides high-ticket commercial services where contracts are substantial. Capturing even 2–3 additional qualified clients each month creates significant revenue, making controlled paid search advertising highly profitable when properly targeted.",
    challenge: [
      "Previous ad spend was wasted on broad match keywords that triggered for irrelevant searches.",
      "Ad copy was generic and failed to filter out low-budget or consumer inquiries.",
      "Traffic was directed to a cluttered homepage rather than a dedicated, conversion-focused landing page.",
    ],
    approach: [
      "Restructured campaigns into tightly themed ad groups targeting high-intent commercial keywords only.",
      "Implemented an exhaustive negative keyword list (excluding 'free', 'jobs', 'DIY', 'courses').",
      "Built dedicated, fast-loading landing pages with clear service scope and simple inquiry forms.",
    ],
    analysis: {
      situation: "Over 60% of past ad spend was spent on queries like 'how to do service yourself' rather than 'hire service company'.",
      analysis: "Without strict keyword match types and negative filters, Google defaults to broad queries that drain budget quickly.",
      opportunity: "Focusing ad budget exclusively on commercial intent phrases and dedicated landing pages maximizes lead volume per dollar spent.",
    },
    features: [
      {
        title: "Exact & Phrase Match Targeting",
        desc: "Filters out casual searchers, focusing budget exclusively on buyers ready to hire.",
      },
      {
        title: "Aggressive Negative Keyword List",
        desc: "Over 300+ negative keywords preventing wasteful clicks from job seekers and research queries.",
      },
      {
        title: "Dedicated Landing Pages",
        desc: "Minimalist, distraction-free landing page matching the exact search intent of the ad.",
      },
      {
        title: "End-to-End Conversion Tracking",
        desc: "Tracks form submissions and phone calls to identify exact cost-per-lead by keyword.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "High-Intent Search",
        desc: "A business manager searches for a commercial service on Google with immediate hiring intent.",
      },
      {
        step: "02",
        title: "Compelling Ad Copy",
        desc: "A targeted text ad highlights key credentials, rapid availability, and direct service terms.",
      },
      {
        step: "03",
        title: "Dedicated Landing Page",
        desc: "The searcher lands on a focused page with clear service details, reviews, and a quote form.",
      },
      {
        step: "04",
        title: "Direct Lead Delivery",
        desc: "The inquiry is captured and delivered directly to the business owner within minutes.",
      },
    ],
    beforeAfter: [
      {
        before: "Budget was drained by broad search queries from students, job seekers, and researchers.",
        after: "Budget is strictly focused on commercial intent searches with verified buying intent.",
      },
      {
        before: "Traffic arrived at a confusing homepage where visitors struggled to find contact info.",
        after: "Searchers arrive on a dedicated landing page designed specifically to convert that query.",
      },
      {
        before: "The owner had no idea which keywords were generating leads vs wasting money.",
        after: "Transparent conversion tracking shows exact cost-per-lead for every ad and keyword.",
      },
    ],
    businessValues: [
      {
        title: "Predictable Lead Flow",
        desc: "Provides a controllable pipeline of inquiries that can be scaled up or down based on capacity.",
      },
      {
        title: "Zero Wasted Budget",
        desc: "Strict negative keywords and match types prevent paying for irrelevant clicks.",
      },
      {
        title: "High Commercial Intent",
        desc: "Reaches decision makers at the exact moment they are actively looking to hire a provider.",
      },
      {
        title: "Transparent Performance",
        desc: "Clear monthly reporting showing total spend, leads generated, and exact acquisition cost.",
      },
    ],
    solution: [
      "Google Ads campaign structure for service-based lead generation.",
      "Search-focused ad copy and landing page recommendations.",
      "Conversion tracking and campaign monitoring to understand advertising performance.",
    ],
    technology: [
      "Google Ads (Search)",
      "Google Tag Manager",
      "Google Analytics 4",
      "CallRail / Call Tracking",
      "Next.js Landing Pages",
    ],
    outcome: [
      "A structured way to reach people actively searching for relevant services.",
      "Clearer connection between paid traffic and customer enquiries.",
      "A campaign foundation that can be improved using ongoing performance data.",
    ],
    relatedService: {
      title: "Paid Advertising",
      href: "/services/paid-advertising",
      description: "Targeted Google Ads and Meta Ads campaigns managed with conversion tracking and disciplined budget control.",
    },
  },

  // 12. META ADS SALES CAMPAIGN
  {
    slug: "meta-ads-sales-campaign",
    title: "Meta Ads Product & Sales Campaign",
    clientType: "Product Business — Meta Ads Example",
    projectType: "Example Project",
    solutionArea: "Digital Presence",
    solutionAreaSlug: "business-websites",
    category: "Paid Advertising",
    categorySlug: "paid-advertising",
    businessType: "Consumer Goods & D2C Brand",
    industry: "Retail & Consumer Goods",
    primaryNeed: "Targeted Facebook & Instagram ads to drive qualified store traffic and online orders",
    image: "/images/portfolio/ecommerce.png",
    summary:
      "A disciplined Meta (Facebook & Instagram) advertising structure combining targeted interest audiences, clear product demonstration creatives, and retargeting to drive online store sales.",
    timeline: "Campaign Strategy Example",
    primaryMetric: "Sales Focus",
    primaryMetricLabel: "Primary Goal",
    context:
      "An e-commerce brand had good customer reviews but struggled to reach new buyers beyond its immediate followers. Previous boosted posts generated vanity likes and comments but virtually zero online sales, leading the business to believe social media advertising didn't work for their product.",
    aboutBusiness:
      "The brand manufactures consumer lifestyle products with clear visual appeal and practical everyday utility. Customers often need to see the product in use before understanding why it is superior to cheaper alternatives.",
    challenge: [
      "Boosted posts targeted overly broad audiences with no clear purchasing objective.",
      "Ad creatives consisted of static product images on white backgrounds that failed to stop mobile scrolling.",
      "Website visitors who added items to cart but left without buying were never retargeted.",
    ],
    approach: [
      "Built a 2-stage campaign structure: cold audience prospecting and warm audience retargeting.",
      "Developed problem-solution video and carousel ads showing the product in real-world use.",
      "Installed Meta Pixel and Conversions API to track add-to-cart actions and purchases accurately.",
    ],
    analysis: {
      situation: "Shoppers rarely buy a new brand on their very first impression; they need social proof and clear demonstration.",
      analysis: "Boosting posts simply pays Meta for engagement metrics, whereas conversion campaigns optimize for actual completed purchases.",
      opportunity: "Demonstrating the product's unique value in video followed by dynamic retargeting recovers interested shoppers and drives profitable sales.",
    },
    features: [
      {
        title: "2-Stage Funnel Architecture",
        desc: "Separates cold prospecting from warm website retargeting to maximize ad spend efficiency.",
      },
      {
        title: "Scroll-Stopping Creative Formats",
        desc: "Short-form video hooks, customer unboxings, and feature-callout carousels.",
      },
      {
        title: "Conversions API (CAPI) Integration",
        desc: "Server-side tracking that ensures accurate conversion measurement despite browser ad blockers.",
      },
      {
        title: "Abandoned Cart Retargeting",
        desc: "Targeted reminder ads for visitors who initiated checkout but didn't complete the purchase.",
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Feed Discovery",
        desc: "A target consumer scrolling Instagram sees a short video highlighting a relatable problem.",
      },
      {
        step: "02",
        title: "Product Demonstration",
        desc: "The ad demonstrates how the product solves the problem and highlights verified customer reviews.",
      },
      {
        step: "03",
        title: "Store Visit",
        desc: "The shopper clicks directly through to the specific product page, exploring options.",
      },
      {
        step: "04",
        title: "Purchase & Retargeting",
        desc: "The customer buys, or receives a gentle reminder ad if they stepped away before paying.",
      },
    ],
    beforeAfter: [
      {
        before: "Boosted posts generated empty likes and comments with zero trackable store sales.",
        after: "Campaigns are optimized for purchases with clear return-on-ad-spend (ROAS) tracking.",
      },
      {
        before: "Static product photos were scrolled past without catching user attention in feeds.",
        after: "Engaging video and carousel formats demonstrate practical value in the first 3 seconds.",
      },
      {
        before: "Shoppers who abandoned carts were permanently lost to the business.",
        after: "Automated retargeting brings back interested shoppers to complete their purchase.",
      },
    ],
    businessValues: [
      {
        title: "Predictable Customer Acquisition",
        desc: "Provides a reliable channel for introducing products to new qualified audiences daily.",
      },
      {
        title: "Recovered Lost Sales",
        desc: "Retargeting campaigns convert shoppers who showed interest but got distracted before buying.",
      },
      {
        title: "Clear Revenue Attribution",
        desc: "Direct tracking shows exactly how many orders were generated by each creative and audience.",
      },
      {
        title: "Scalable Growth Channel",
        desc: "Allows the business to increase ad budget systematically as profitable return is proven.",
      },
    ],
    solution: [
      "Meta Ads campaigns for Facebook and Instagram.",
      "Audience targeting, campaign structure, and ad creative planning.",
      "Conversion tracking to understand website actions after ad clicks.",
    ],
    technology: [
      "Meta Ads Manager",
      "Meta Pixel & Conversions API",
      "Facebook / Instagram",
      "Google Analytics 4",
      "Next.js E-Commerce",
    ],
    outcome: [
      "A structured way to promote products through Facebook and Instagram.",
      "Clearer customer journeys from advertisement to website.",
      "A campaign foundation focused on reaching potential buyers and supporting sales.",
    ],
    relatedService: {
      title: "Paid Advertising",
      href: "/services/paid-advertising",
      description: "Data-driven advertising campaigns across Google and Meta platforms managed with transparent performance reporting.",
    },
  },
];

export const getAllWorkProjects = () => workProjects;

export const getWorkProjectBySlug = (slug: string) =>
  workProjects.find((p) => p.slug === slug);

export const getWorkProjectsByArea = (areaSlug: string) =>
  workProjects.filter((p) => p.solutionAreaSlug === areaSlug);

export const getWorkProjectsByCategory = (category: string) =>
  workProjects.filter((p) => p.category === category || p.categorySlug === category);