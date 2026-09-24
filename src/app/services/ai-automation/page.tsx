import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "AI Development Company | Custom AI Solutions & Automation | Aetibar",
  description:
    "Aetibar develops custom AI solutions, intelligent applications and automation systems that help businesses reduce manual work and improve efficiency.",
  keywords: [
    "AI Automation Services",
    "Business Process Automation",
    "Workflow Automation Services",
    "AI Integration for Small Business",
    "Automated Lead Management",
    "Custom AI Integration Services",
    "AI Document Processing Services",
    "Business Process Automation India",
    "Aetibar AI Automation",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  alternates: {
    canonical: "https://www.aetibar.in/services/ai-automation",
  },
  openGraph: {
    title: "AI Workflow Automation & Integration Services for Businesses | Aetibar",
    description:
      "Practical AI workflow automation and business process integration services. Connect your business tools, eliminate manual data entry, and speed up customer response.",
    url: "https://www.aetibar.in/services/ai-automation",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar AI Automation and Integration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflow Automation & Integration Services for Businesses | Aetibar",
    description:
      "Practical AI workflow automation and system integration services for businesses. Simplify daily tasks and connect existing tools safely.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Workflow Automation and Integration Services for Businesses",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Practical AI workflow automation, business process automation, and third-party software integration designed to eliminate repetitive office tasks.",
  url: "https://www.aetibar.in/services/ai-automation",
};

export default function AiAutomationServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    ["ai-customer-support", "service-lead-pipeline"].includes(p.slug)
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="AI &amp; Workflow Automation"
        title="AI Automation & Integration Services for Businesses"
        tagline="Practical automation that eliminates repetitive data entry, connects your software, and speeds up customer response."
        description="Most businesses do not need confusing, expensive AI experiments—they need practical solutions that stop leads from getting lost, eliminate hours of manual copy-pasting between spreadsheets, and automate repetitive office tasks. We build reliable workflow automations and targeted AI integrations that connect your existing business tools, always keeping human review and strict data security in place."
        icon={<SmartToyOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Sales & Support Teams",
            desc: "Teams receiving customer inquiries across WhatsApp, email, and website forms who need a single centralized pipeline with instant alerts and draft response assistance.",
          },
          {
            title: "Invoice & Document Operations",
            desc: "Companies processing dozens of vendor bills, purchase orders, delivery notes, or customer applications that want structured data extracted automatically into clean spreadsheets.",
          },
          {
            title: "Teams with Disconnected Tools",
            desc: "Organizations using separate software for accounting, customer records, inventory, and messaging that currently require employees to manually retype data between them.",
          },
          {
            title: "Operations & Business Leaders",
            desc: "Business leaders looking to eliminate repetitive quotation drafting and administrative bottlenecks, saving 15+ employee hours every week for core business growth.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Customer inquiries sitting unaddressed across multiple inboxes for hours",
            howWeHelp:
              "Prospective clients often reach out to several providers and buy from the one that answers first. We build automated lead capture workflows that immediately parse new inquiries, categorize urgency, alert the right staff member via WhatsApp, and prepare instant confirmation messages.",
          },
          {
            problem: "Fear of AI making embarrassing mistakes or giving wrong pricing to clients",
            howWeHelp:
              "We follow a strict 'human-in-the-loop' framework: AI is never permitted to send unverified messages directly to customers. Instead, it prepares intelligent drafts based strictly on your official documents, leaving final review and one-click sending to your qualified team members.",
          },
          {
            problem: "Hours wasted every day manually copy-pasting data between spreadsheets and CRM",
            howWeHelp:
              "We build custom, automated bridges between your forms, spreadsheets, email inboxes, and accounting software. When a new order, payment, or inquiry happens, all systems update automatically without human intervention.",
          },
          {
            problem: "Overpriced enterprise software and concerns about proprietary data privacy",
            howWeHelp:
              "Instead of expensive enterprise platforms, we connect the software you already use (Google Sheets, WhatsApp, Gmail, Tally, Zoho) using lightweight custom connectors with strict enterprise privacy guarantees—your data is never used to train public models.",
          },
        ]}
        deliverables={[
          {
            title: "Automated Lead Capture & Instant Inquiry Triage",
            desc: "Centralizing leads from website forms, WhatsApp chats, and emails into a single manageable pipeline with instant routing.",
            items: [
              "Instant lead parsing and classification by service type and urgency",
              "Automated WhatsApp and email alerts sent directly to sales reps",
              "Pre-drafted customer greeting messages and appointment links",
              "Centralized Google Sheets or CRM lead tracking table",
            ],
          },
          {
            title: "Routine Business Process & Workflow Automation",
            desc: "Automating repetitive multi-step operational tasks across your business software without requiring human data entry.",
            items: [
              "Automated customer confirmation emails and order milestone updates",
              "Cross-platform data synchronization between billing and operations",
              "Scheduled automated status reports delivered to company management",
              "Fail-safe error logging with automatic retry mechanisms",
            ],
          },
          {
            title: "AI-Powered Document & Invoice Data Processing",
            desc: "Extracting critical business information from PDFs, scanned receipts, and invoices into organized spreadsheets and database records.",
            items: [
              "Automatic line-item, tax, date, and vendor extraction from PDF invoices",
              "Customer onboarding form processing and field verification",
              "Direct export into organized Google Sheets or accounting databases",
              "Flagging of discrepancies or missing fields for human inspection",
            ],
          },
          {
            title: "Internal Knowledge Search & Smart Support Drafting",
            desc: "Equipping your customer support team with instant answers derived strictly from your verified company documents.",
            items: [
              "Private knowledge base search across company manuals and FAQs",
              "Assisted response drafts prepared for team review in seconds",
              "Strict guardrails preventing the generation of unauthorized info",
              "Consistent, professional brand tone across all customer communications",
            ],
          },
          {
            title: "Software System & Third-Party API Integrations",
            desc: "Connecting your business tools together so information moves automatically between platforms without manual export/import.",
            items: [
              "Official WhatsApp Cloud API messaging integration",
              "Payment gateway webhook synchronization (Razorpay, Stripe)",
              "CRM integrations (Zoho, HubSpot, Google Workspace, custom DBs)",
              "End-to-end data validation to prevent duplicate entries",
            ],
          },
        ]}
        benefits={[
          {
            title: "Reclaim 10+ Hours per Week of Employee Time",
            desc: "Eliminating manual data transfer, document scanning, and status checking allows your staff to focus on customer relationships and core business tasks.",
          },
          {
            title: "Cut Customer Response Time to Seconds",
            desc: "Inquiries are routed and pre-drafted immediately upon receipt, allowing your team to respond to potential clients before your competitors even open the email.",
          },
          {
            title: "Eliminate Human Data Entry Mistakes",
            desc: "Automated data flow between forms, spreadsheets, and databases removes typographical errors, misplaced phone numbers, and lost customer orders.",
          },
          {
            title: "100% Control with Human Review & Strict Privacy",
            desc: "You never have to worry about an AI bot saying the wrong thing. Your team stays in command, and your private company data is never used to train public machine learning models.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Bottleneck & Workflow Audit",
            desc: "We analyze your team's day-to-day routine, identifying repetitive tasks, spreadsheet copy-pasting, and communication delays where automation will provide immediate ROI.",
          },
          {
            num: "02",
            title: "Process Mapping & Guardrail Design",
            desc: "We design the step-by-step automated workflow, define exact business rules, establish human review checkpoints, and ensure data privacy protections.",
          },
          {
            num: "03",
            title: "Connector & Automation Build",
            desc: "We configure the APIs, connectors, and parsing logic, integrating your existing tools (email, WhatsApp, spreadsheets, CRM) into a unified system.",
          },
          {
            num: "04",
            title: "Testing with Real-World Data",
            desc: "We run the automated flow on sample historical inquiries and documents in a test environment to verify accuracy and ensure error-free data formatting.",
          },
          {
            num: "05",
            title: "Live Deployment & Staff Onboarding",
            desc: "We launch the automations, conduct a walkthrough session with your team, and provide simple operating guidelines and monitoring support.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "Does our business actually need AI, or is simple automation enough?",
            answer:
              "In many cases, simple, robust automation (like connecting a form directly to WhatsApp or Google Sheets) is all you need. We only introduce AI when unstructured data needs interpretation—such as extracting data from messy PDF invoices or drafting replies to complex customer inquiries. If a simpler rule-based automation solves your problem, we will always recommend that first.",
          },
          {
            question: "Could an AI automated system say something incorrect or offensive to our clients?",
            answer:
              "We eliminate this risk by implementing a 'human-in-the-loop' framework. We do not set up fully autonomous AI agents that converse with customers unsupervised. Instead, the AI prepares an intelligent draft based strictly on your verified price lists and FAQs. A member of your team reviews the draft, makes any adjustments if needed, and clicks send.",
          },
          {
            question: "Is our proprietary business and customer data kept private?",
            answer:
              "Yes. We configure all AI integrations using secure enterprise APIs that legally guarantee your company data will not be used to train public machine learning models. Your client contact information and financial figures remain strictly confidential.",
          },
          {
            question: "Can you connect the software tools we already use, like WhatsApp and Excel?",
            answer:
              "Yes. Our goal is to connect the tools you already rely on every day—including Google Sheets, Excel, WhatsApp Business, Gmail, Outlook, Tally, Zoho, and Razorpay—so your staff doesn't have to learn complicated new software.",
          },
          {
            question: "How long does it take to implement a custom automation workflow?",
            answer:
              "Targeted lead routing automations (such as sending web inquiries to WhatsApp and Google Sheets) can typically be completed in 1 to 2 weeks. More complex workflows involving PDF document extraction or multi-system synchronization generally take 3 to 5 weeks.",
          },
          {
            question: "What happens if an API or software tool changes in the future?",
            answer:
              "We engineer automations with comprehensive error logging and failure alerts. If a third-party service updates their connection or temporarily goes down, the system queues pending items and alerts our team so nothing is lost.",
          },
          {
            question: "What is the return on investment (ROI) of business process automation?",
            answer:
              "Most businesses save between 10 to 25 staff hours every week by eliminating manual data entry, inquiry forwarding, and status checking. In addition, responding to customer inquiries in minutes rather than hours directly increases closing rates on new business leads.",
          },
        ]}
        ctaTitle="Ready to Automate Repetitive Work in Your Business?"
        ctaDescription="Tell us about the manual tasks, spreadsheet copy-pasting, or disconnected tools slowing your team down. We'll outline practical, cost-effective automation options."
      />
    </main>
  );
}
