import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "AI Automation & System Integration Services for Businesses | Aetibar",
  description:
    "Automate repetitive daily office tasks and connect your business tools with practical AI workflow automation. Eliminate manual data entry and route leads to WhatsApp instantly.",
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
        title="AI Automation & System Integration —"
        titleHighlight="Eliminate Boring Busywork."
        tagline="Practical automation that connects your software, routes new leads in seconds, and saves your team 10+ hours of manual data entry every week."
        description="Most businesses do not need confusing, expensive AI experiments—they need practical tools that stop customer inquiries from getting lost, eliminate hours of manual copy-pasting between spreadsheets, and automate repetitive office chores. We connect your website, WhatsApp, email, and billing software so everything runs smoothly, with a human always in control."
        icon={<SmartToyOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Sales & Support Teams",
            desc: "Teams receiving customer inquiries across WhatsApp, email, and website forms who want every lead organized in one place with instant phone alerts.",
          },
          {
            title: "Offices Processing Invoices",
            desc: "Companies dealing with dozens of vendor bills, receipts, or PDF order forms who want line-item data typed into Excel automatically.",
          },
          {
            title: "Teams Juggling Disconnected Tools",
            desc: "Businesses using separate tools for accounting, inventory, WhatsApp, and email where staff spend hours retyping data back and forth.",
          },
          {
            title: "Owners Wanting to Free Up Time",
            desc: "Founders and managers who want their staff focused on closing deals and talking to customers instead of filing routine paperwork.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Customer inquiries sit unanswered for hours because nobody noticed them",
            howWeHelp:
              "When a customer asks for a quote, they contact several companies and buy from whoever answers first. We build automated lead workflows that ping your phone via WhatsApp immediately, categorize the request, and draft a quick confirmation so you never miss a sale.",
          },
          {
            problem: "Worry that AI will say something embarrassing or give the wrong price",
            howWeHelp:
              "We never let an unsupervised bot talk to your clients. Our automations prepare smart suggested replies based strictly on your official price lists and FAQs. A human on your team does a quick 1-second review and clicks send.",
          },
          {
            problem: "Wasting 2 to 3 hours every day copy-pasting data between spreadsheets",
            howWeHelp:
              "We connect your forms, Google Sheets, WhatsApp, and accounting tools together. When an order or payment comes in, every spreadsheet and ledger updates automatically in the background.",
          },
          {
            problem: "Expensive software subscriptions and concerns about company data privacy",
            howWeHelp:
              "Instead of forcing you onto expensive enterprise software, we connect the tools you already use (Google Sheets, WhatsApp, Gmail, Tally, Zoho). Your company numbers and client contacts stay 100% private and are never shared.",
          },
        ]}
        deliverables={[
          {
            title: "Instant Lead Alerts on WhatsApp & Email",
            desc: "Centralize every website inquiry, form submission, and message into one clean spreadsheet with instant notifications to your phone.",
            items: [
              "Instant lead alerts sent to your sales team's WhatsApp and phone",
              "Auto-organizes leads into a shared Google Sheet or simple CRM",
              "Pre-drafts quick friendly greetings and appointment booking links",
              "Tags urgent inquiries so high-value clients are handled first",
            ],
          },
          {
            title: "Automatic PDF & Invoice Data Extraction",
            desc: "Turn messy vendor bills, delivery notes, and purchase orders into clean, organized spreadsheet rows without manual typing.",
            items: [
              "Automatically extracts bill numbers, vendor names, dates, and amounts",
              "Works on scanned PDFs, camera photos of receipts, and email attachments",
              "Direct export into organized Google Sheets or Excel files",
              "Flags any missing numbers or discrepancies for quick human review",
            ],
          },
          {
            title: "Connecting Everyday Business Software (APIs)",
            desc: "Make your existing business tools talk to each other so information moves automatically between systems.",
            items: [
              "Official WhatsApp Business messaging integration",
              "Payment gateway alerts (Razorpay, Stripe, UPI payments)",
              "Syncing website forms with Google Sheets, Gmail, and Tally/Zoho",
              "Prevents duplicate customer entries and misplaced records",
            ],
          },
          {
            title: "Smart Customer Support Drafting",
            desc: "Equip your customer support staff with instant, verified answers drafted strictly from your company's own price lists and FAQs.",
            items: [
              "Private search across your official company manuals, policies, and prices",
              "Drafts friendly answers for your team to review and send in one tap",
              "Strict rules prevent the system from ever guessing or inventing info",
              "Ensures consistent, polite answers across all your staff members",
            ],
          },
          {
            title: "Automated Daily & Weekly Business Reports",
            desc: "Receive clear summary reports delivered straight to your WhatsApp or inbox every evening without compiling sheets.",
            items: [
              "Daily inquiry, sales, and completed job summaries",
              "Automated weekly performance roundups for management",
              "Instant alerts if any connection goes down or needs attention",
              "Zero manual number-crunching needed at the end of the day",
            ],
          },
        ]}
        benefits={[
          {
            title: "Save 10+ Hours of Busywork Every Week",
            desc: "Free your team from repetitive spreadsheet typing so they can spend their time talking to customers and generating revenue.",
          },
          {
            title: "Reply to Potential Clients in Seconds",
            desc: "Answer inquiries while they are still warm on your website, drastically increasing your chances of winning the project.",
          },
          {
            title: "Zero Typos and Zero Lost Leads",
            desc: "When computers move the data between forms and sheets, misplaced phone numbers and spelling errors vanish completely.",
          },
          {
            title: "You Stay in 100% Control with Strict Privacy",
            desc: "No rogue bots, no surprise bills, and your private company financial figures are never used to train public AI models.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Spot the Bottlenecks",
            desc: "We look at your team's daily routine to identify which tasks, copy-pasting, and spreadsheet chores eat up the most time.",
          },
          {
            num: "02",
            title: "Map the Simple Workflow",
            desc: "We design a clear step-by-step automation map, set up safety checks, and make sure a human stays in control.",
          },
          {
            num: "03",
            title: "Connect Your Tools",
            desc: "We connect your everyday tools—like WhatsApp, Google Sheets, Gmail, and CRM—using secure, reliable links.",
          },
          {
            num: "04",
            title: "Test with Real Data",
            desc: "We run test inquiries and sample invoices through the system to guarantee 100% accuracy and zero glitches.",
          },
          {
            num: "05",
            title: "Go Live & Show Your Team",
            desc: "We launch the automation, show your team how easy it is to use in a 15-minute walkthrough, and provide ongoing support.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "Does my business actually need AI, or is simple automation enough?",
            answer:
              "In many cases, simple automation (like sending a website form directly to your WhatsApp and Google Sheets) is all you need! We only add AI when unstructured information needs reading—like extracting text from a photo of an invoice. If a simple, cheaper rule solves your problem, we will always recommend that first.",
          },
          {
            question: "Can the system say something wrong or offensive to my customers?",
            answer:
              "No! We never build unsupervised bots that converse freely with clients. The system simply prepares a suggested draft based on your verified price list. A human on your team glances at it, makes any tweaks if needed, and clicks send.",
          },
          {
            question: "Is our company data kept private and confidential?",
            answer:
              "Yes, absolutely. We use secure enterprise connections that legally guarantee your company data, client phone numbers, and financial details are never shared or used to train public AI models.",
          },
          {
            question: "Can you connect with tools we already use, like WhatsApp and Excel?",
            answer:
              "Yes! The whole point is to connect what you already use every day—Google Sheets, WhatsApp Business, Gmail, Outlook, Tally, Zoho, and Razorpay—so your staff doesn't have to learn complicated new software.",
          },
          {
            question: "How long does it take to set up an automation?",
            answer:
              "Simple automations (like routing web leads to WhatsApp and Google Sheets) take just 1 to 2 weeks. Workflows involving PDF invoice reading or multiple office systems usually take 3 to 4 weeks.",
          },
        ]}
        ctaTitle="Ready to Automate Repetitive Work in"
        ctaTitleHighlight="Your Business?"
        ctaDescription="Tell us about the manual tasks, spreadsheet copy-pasting, or disconnected software slowing your team down. We'll outline practical, cost-effective automation options."
      />
    </main>
  );
}
