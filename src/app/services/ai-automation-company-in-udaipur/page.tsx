import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "AI Automation Company in Udaipur | Workflow Automation | Aetibar",

  description:
    "Aetibar provides AI automation services in Udaipur, helping businesses automate repetitive workflows, connect existing tools, process business data, and improve day-to-day operations.",

  keywords: [
    "AI Automation Company in Udaipur",
    "Business Process Automation Udaipur",
    "AI Workflow Automation Udaipur",
    "AI Integration Services Udaipur",
    "Lead Automation Udaipur",
    "AI Automation Agency Udaipur",
    "Workflow Automation Services",
  ],

  authors: [
    {
      name: "Aetibar",
      url: "https://www.aetibar.in",
    },
  ],

  creator: "Aetibar",
  publisher: "Aetibar",

  alternates: {
    canonical:
      "https://www.aetibar.in/services/ai-automation-company-in-udaipur",
  },

  openGraph: {
    title: "AI Automation Company in Udaipur | Workflow Automation | Aetibar",

    description:
      "Practical AI automation and workflow integration services to reduce repetitive work, connect business tools, and improve everyday processes.",

    url: "https://www.aetibar.in/services/ai-automation-company-in-udaipur",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - AI Automation Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "AI Automation Company in Udaipur | Workflow Automation | Aetibar",

    description:
      "Practical AI automation and workflow integration services to reduce repetitive work and connect your existing business tools.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation Company in Udaipur",
  serviceType: "AI Automation Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides AI automation services in Udaipur, including workflow automation, business process automation, AI-assisted tasks, document data extraction, and integrations between business software and everyday tools.",
  url: "https://www.aetibar.in/services/ai-automation-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};

export default function AiAutomationServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    ["ai-customer-support", "service-lead-pipeline"].includes(p.slug),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="AI Automation Services"
        title="AI Automation Company in Udaipur — "
        titleHighlight="Automate Repetitive Work & Connect Your Systems"
        tagline="Practical automation that connects your software, reduces repetitive manual work, and helps your team spend more time on tasks that need human attention."
        description="As an AI automation company in Udaipur, we build practical workflows that connect the tools your business already uses. From routing new enquiries and organizing customer information to automating repetitive tasks across your website, WhatsApp, email, and business software, we help reduce manual work while keeping people in control of important decisions."
        icon={<SmartToyOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Sales & Support Teams",
            desc: "Teams receiving enquiries through WhatsApp, email, and website forms who want customer information organized in one place with automated notifications and follow-up workflows.",
          },
          {
            title: "Offices Handling Invoices & Documents",
            desc: "Companies processing vendor invoices, receipts, PDFs, or order forms that want to reduce repetitive data entry and move information into spreadsheets or business systems more efficiently.",
          },
          {
            title: "Teams Using Disconnected Software",
            desc: "Businesses working across separate accounting, inventory, CRM, messaging, and email tools where employees spend time manually transferring information between systems.",
          },
          {
            title: "Owners Looking to Reduce Manual Work",
            desc: "Founders and managers who want their teams to spend less time on repetitive administrative tasks and more time on customer conversations, operations, and business priorities.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Customer enquiries are missed or followed up too late",
            howWeHelp:
              "We build automated lead workflows that can notify the right team member when a new enquiry arrives, organize the incoming information, and prepare follow-up messages or tasks so enquiries are easier to manage.",
          },
          {
            problem:
              "You want to use AI without giving it uncontrolled access to customer conversations",
            howWeHelp:
              "We can design workflows where AI assists with tasks such as drafting replies, summarizing enquiries, or extracting information while keeping human approval in the loop for customer-facing actions and important decisions.",
          },
          {
            problem:
              "Your team spends too much time moving data between different tools",
            howWeHelp:
              "We connect forms, spreadsheets, messaging platforms, CRM systems, accounting software, and other supported tools so information can move between them automatically instead of being entered manually at every step.",
          },
          {
            problem:
              "You have concerns about adding more software or exposing business data",
            howWeHelp:
              "We first look at the tools and workflows you already use and identify where automation can be added without unnecessary software changes. Access, data handling, and permissions are configured according to the platforms and workflow involved.",
          },
        ]}
        deliverables={[
          {
            title: "Automated Lead Alerts & Routing",
            desc: "Connect website forms, enquiries, and supported messaging channels so new leads can be organized, routed, and followed up more efficiently.",
            items: [
              "Automated notifications for new enquiries through supported channels",
              "Lead information organized in Google Sheets, CRM, or another connected system",
              "Draft follow-up messages and appointment links where appropriate",
              "Lead tagging and routing based on enquiry type, location, or other defined rules",
            ],
          },
          {
            title: "PDF & Invoice Data Extraction",
            desc: "Extract useful information from invoices, receipts, purchase orders, and other documents to reduce repetitive data entry.",
            items: [
              "Extraction of fields such as invoice numbers, vendor names, dates, and amounts",
              "Processing of supported PDFs, scanned documents, images, and email attachments",
              "Structured output to Google Sheets, Excel, or connected business systems",
              "Flagging missing or unusual information for human review",
            ],
          },
          {
            title: "Business Software & API Integrations",
            desc: "Connect the business tools you already use so relevant information can move between systems with less manual work.",
            items: [
              "WhatsApp Business integrations using supported APIs and platforms",
              "Payment-related workflows for services such as Razorpay, Stripe, and supported UPI setups",
              "Connecting website forms with Google Sheets, Gmail, CRM, Tally, Zoho, and other supported tools",
              "Workflow rules to reduce duplicate records and inconsistent data",
            ],
          },
          {
            title: "AI-Assisted Customer Support",
            desc: "Use your existing business information to help your team prepare more accurate customer responses while keeping human review in the workflow.",
            items: [
              "Search and retrieval across approved company documents, policies, FAQs, and product information",
              "AI-generated response drafts for your team to review before sending",
              "Defined instructions and validation rules to reduce unsupported responses",
              "Consistent response guidance across different team members and customer interactions",
            ],
          },
          {
            title: "Automated Business Reports & Alerts",
            desc: "Turn information from connected systems into scheduled summaries and notifications without requiring the team to compile every report manually.",
            items: [
              "Scheduled summaries of enquiries, sales, orders, or other selected business data",
              "Daily or weekly reports delivered through supported email or messaging workflows",
              "Notifications for defined workflow errors, failed integrations, or missing data",
              "Automated calculations and summaries for recurring reporting tasks",
            ],
          },
        ]}
        benefits={[
          {
            title: "Reduce Repetitive Administrative Work",
            desc: "Automating recurring data entry, notifications, document processing, and reporting can free your team from routine tasks and give them more time for customer and business priorities.",
          },
          {
            title: "Respond to Enquiries More Efficiently",
            desc: "Automated alerts, lead routing, and AI-assisted response drafts can help your team notice and handle new enquiries sooner while keeping important customer interactions under human control.",
          },
          {
            title: "Reduce Manual Data Entry & Errors",
            desc: "Moving information between connected systems automatically can reduce repetitive copy-pasting and the risk of common manual mistakes, while important data can still be reviewed by your team.",
          },
          {
            title: "Keep People in Control of Automation",
            desc: "Workflows can be designed with approval steps, defined permissions, and clear rules so your team decides where automation should act independently and where human review is required.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Identify the Bottlenecks",
            desc: "We understand your team's current workflow and identify repetitive tasks, manual data entry, follow-ups, and other processes that could benefit from automation.",
          },
          {
            num: "02",
            title: "Map the Automation Workflow",
            desc: "We define the steps, inputs, outputs, rules, and approval points for the workflow, including where human review should remain part of the process.",
          },
          {
            num: "03",
            title: "Connect Your Business Tools",
            desc: "We integrate the relevant tools such as WhatsApp, Google Sheets, Gmail, CRM, accounting software, or other supported systems based on the workflow requirements.",
          },
          {
            num: "04",
            title: "Test & Refine the Workflow",
            desc: "We test the automation with sample and realistic scenarios, check data flow and edge cases, and make adjustments before the workflow is used in day-to-day operations.",
          },
          {
            num: "05",
            title: "Launch & Support Your Team",
            desc: "We put the workflow into use, explain how it works to the relevant team members, and provide support for improvements or adjustments as the business workflow evolves.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question:
              "Does my business actually need AI, or is simple automation enough?",
            answer:
              "Not always. Many business workflows can be handled with straightforward rules and integrations, such as sending a website enquiry to a CRM or Google Sheet. We recommend using AI where it adds genuine value, such as understanding documents, extracting information from unstructured content, or preparing response drafts. If a simpler approach can solve the problem, we will consider that first.",
          },
          {
            question:
              "Can an AI automation give an incorrect response to my customers?",
            answer:
              "AI systems can make mistakes, which is why we can design workflows with human review for customer-facing or important actions. For example, an automation can prepare a response using your approved information, while a team member reviews it before sending. The exact level of human involvement depends on the workflow and its risk.",
          },
          {
            question: "How is our company data handled?",
            answer:
              "Data handling depends on the tools, APIs, AI services, and integrations used in your workflow. We configure access permissions and data flows based on the requirements of the system and avoid requesting access that the workflow does not need. Where third-party services are involved, their own privacy and data-handling policies also apply.",
          },
          {
            question:
              "Can you connect with tools we already use, like WhatsApp and Excel?",
            answer:
              "Often, yes. We can work with supported tools and APIs such as WhatsApp Business, Google Sheets, Gmail, Outlook, Tally, Zoho, Razorpay, and other business software. The exact integration depends on the platform's available APIs, account type, permissions, and the workflow you want to automate.",
          },
          {
            question: "How long does it take to set up an automation?",
            answer:
              "It depends on the workflow. A simple integration involving a few systems may take considerably less time than a workflow involving document processing, AI, multiple APIs, approvals, and custom business rules. After understanding your process, we can provide a more realistic implementation timeline.",
          },
        ]}
        ctaTitle="Ready to Automate Repetitive Work in"
        ctaTitleHighlight="Your Business?"
        ctaDescription="Tell us about the manual tasks, repetitive data entry, or disconnected software slowing your team down. We'll understand your workflow and discuss practical automation options that fit your business."
      />
    </main>
  );
}
