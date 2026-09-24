import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "Aetibar | Mobile App Development Services.",
  description:
    " Aetibar Build scalable and user-friendly mobile applications with Aetibar's mobile app development company, delivering custom Android and iOS solutions.",
  keywords: [
    "Mobile App Development Services",
    "Mobile App Development Company",
    "Custom Mobile App Development",
    "iOS and Android App Development",
    "Cross-Platform App Development",
    "Business Mobile Applications",
    "Field Service Mobile Apps",
    "Customer Service Mobile App",
    "Mobile App Development in India",
    "Aetibar App Development",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  alternates: {
    canonical: "https://www.aetibar.in/services/app-development",
  },
  openGraph: {
    title: "Mobile App Development Services for Businesses | Aetibar",
    description:
      "Custom mobile app development company. Practical, user-friendly iOS and Android applications designed around your business operations and customer needs.",
    url: "https://www.aetibar.in/services/app-development",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Mobile App Development Services for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services for Businesses | Aetibar",
    description:
      "Practical, user-friendly iOS and Android mobile apps designed around your business workflows.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development Services for Businesses",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Custom cross-platform iOS and Android mobile application development for businesses, on-the-ground field teams, and customer portals.",
  url: "https://www.aetibar.in/services/app-development",
};

export default function AppDevelopmentServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    ["logix-driver-app", "internal-ops-portal"].includes(p.slug)
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="Mobile App Development"
        title="Mobile App Development Services for Businesses"
        tagline="Practical iOS and Android mobile applications designed to streamline daily operations and engage your customers."
        description="Whether you need to empower on-the-ground field staff, replace messy paper slips and WhatsApp groups, or give your clients a simple mobile app to book appointments and track orders, we build practical mobile applications that run smoothly on iPhones and Android devices alike."
        icon={<PhoneIphoneIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Logistics & Field Service Teams",
            desc: "Businesses managing drivers, technicians, or inspectors who need fast mobile tools to log work, capture signatures, and upload photos on-site.",
          },
          {
            title: "Customer Brands & Retailers",
            desc: "Companies wanting to give their customers a convenient smartphone app to browse catalogs, place recurring orders, make payments, and track delivery status.",
          },
          {
            title: "Operations Replacing Paper Chaos",
            desc: "Businesses currently struggling with lost physical receipts, unorganized photo updates across messaging groups, and constant phone check-ins from the field.",
          },
          {
            title: "B2B Portals & Product Founders",
            desc: "Companies providing corporate clients with branded mobile dashboards to track jobs, or founders launching a cross-platform mobile application from scratch.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Losing data and progress when field staff lose cellular connection",
            howWeHelp:
              "Field teams frequently work in basements, warehouses, or transit areas with poor network reception. We build offline-first apps that store form entries, digital signatures, and photos locally on the device and sync automatically with your office database the moment connection returns.",
          },
          {
            problem: "Paying double the cost to build separate apps for Apple and Android",
            howWeHelp:
              "Building separate native apps for iPhone and Android requires two different development teams and doubles maintenance costs. We use industry-standard cross-platform frameworks to build both apps from a single codebase, delivering native responsiveness at a fraction of the cost.",
          },
          {
            problem: "Lost paperwork, missing delivery receipts, and unverified work",
            howWeHelp:
              "Our mobile applications replace loose paper manifests with digital signature capture, photo proofs with timestamping, and instant status updates that immediately reflect on your central office dashboard.",
          },
          {
            problem: "Complex interfaces that employees resist using",
            howWeHelp:
              "Many enterprise apps are overly complicated. We design high-contrast, large-button interfaces tailored for fast, minimal-tap usage, making it simple for non-technical workers to complete tasks in seconds even under bright sunlight.",
          },
        ]}
        deliverables={[
          {
            title: "Cross-Platform iOS & Android Mobile Apps",
            desc: "High-performance smartphone applications developed from a single, unified codebase that feels native and responsive on both Apple iPhones and Android devices.",
            items: [
              "Unified cross-platform architecture for iPhone and Android",
              "Smooth touch navigation and responsive gestures",
              "Access to device features (camera, GPS location, local storage)",
              "Optimized battery and storage consumption",
            ],
          },
          {
            title: "Field Service & Operational Mobile Tools",
            desc: "Purpose-built mobile applications engineered for delivery drivers, field technicians, warehouse staff, and inspectors.",
            items: [
              "Offline data queueing with automatic background sync",
              "Digital signature capture and photo delivery verification",
              "Milestone status check-ins and GPS route logging",
              "Instant push notifications and urgent job alerts",
            ],
          },
          {
            title: "Customer-Facing & Self-Service Mobile Apps",
            desc: "Engaging, user-friendly mobile applications that make it easy for your clients to access your services directly from their home screen.",
            items: [
              "Simple mobile onboarding and secure profile management",
              "Interactive service booking, catalog browsing, and ordering",
              "Integration with secure mobile payment gateways (UPI, cards)",
              "Real-time order tracking and shipment milestone updates",
            ],
          },
          {
            title: "Central Database & Backend System Synchronization",
            desc: "Connecting your mobile applications securely to your existing website, CRM, warehouse management system, or accounting software.",
            items: [
              "Secure data synchronization between mobile devices and office servers",
              "Role-based access controls to protect sensitive customer data",
              "Automated alerts sent to office dispatchers when jobs are completed",
              "Fail-safe data queues that prevent lost records during network drops",
            ],
          },
          {
            title: "App Store Publishing & Release Support",
            desc: "Navigating the complete submission, compliance, and approval process for both the Apple App Store and Google Play Store.",
            items: [
              "Guidance on setting up your own Apple & Google developer accounts",
              "Preparation of store screenshots, privacy policies, and app descriptions",
              "Internal beta testing distribution for your team prior to launch",
              "Handling store compliance requirements and approval reviews",
            ],
          },
        ]}
        benefits={[
          {
            title: "Cut Development & Maintenance Costs in Half",
            desc: "By building for iOS and Android simultaneously from one unified codebase, you save months of development time and drastically reduce long-term maintenance costs.",
          },
          {
            title: "Reliable Operation Anywhere, Even Without Signal",
            desc: "Your staff or customers won't be blocked by poor cellular coverage. The app stores entries locally and syncs automatically when internet returns, eliminating lost work.",
          },
          {
            title: "Immediate Operational Visibility for Managers",
            desc: "Eliminate constant check-in phone calls. As soon as a delivery is made or a job is completed on-site, managers and dispatchers see the update on their central dashboard.",
          },
          {
            title: "100% Code & App Store Account Ownership",
            desc: "You own all mobile source code, backend scripts, and store listings. The app is published under your company's own Apple and Google accounts with zero proprietary lock-in.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Operational Workflow Review",
            desc: "We review your business processes, team roles, field challenges, and data requirements to define the exact functionality your app needs.",
          },
          {
            num: "02",
            title: "User Experience & Screen Design",
            desc: "We design simple, high-contrast screen mockups for every step, ensuring clear buttons and straightforward navigation before writing code.",
          },
          {
            num: "03",
            title: "Cross-Platform Development",
            desc: "We build the mobile application with offline data storage, camera and location integration, and secure synchronization to your backend system.",
          },
          {
            num: "04",
            title: "Real-Device & Offline Testing",
            desc: "We test the application on physical iPhones and Android smartphones under poor connectivity conditions to verify that data queues and syncs flawlessly.",
          },
          {
            num: "05",
            title: "App Store Launch & Staff Rollout",
            desc: "We guide the app through Apple and Google approval, deploy the production release, and assist your team with internal staff onboarding.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "Do you build separate apps for iPhone and Android, or one cross-platform app?",
            answer:
              "We primarily build cross-platform mobile apps using React Native. This allows your business to launch on both the Apple App Store (iOS) and Google Play Store (Android) using a single codebase. It looks, feels, and performs like a native application while cutting initial development costs and future maintenance in half.",
          },
          {
            question: "Will the mobile app work in basements or remote locations without internet?",
            answer:
              "Yes. We specialize in offline-first mobile applications. If a field technician, driver, or customer loses cellular signal, the app continues to function locally. Data entries, signatures, and photos are saved securely on the phone and automatically synced to your servers once connectivity is restored.",
          },
          {
            question: "How do you handle the Apple App Store and Google Play Store approval process?",
            answer:
              "Apple and Google have strict security, design, and privacy guidelines. We handle the entire technical preparation—including creating required store assets, configuring privacy declarations, setting up beta testing, and resolving review feedback until your app is officially approved and live.",
          },
          {
            question: "Who owns the mobile application and the developer accounts?",
            answer:
              "You own 100% of the mobile application source code and design assets. We help you create and configure your own Apple Developer and Google Play Console accounts, ensuring that your app is published directly under your company's official name.",
          },
          {
            question: "Can the mobile app connect with our existing website, database, or CRM?",
            answer:
              "Yes. We build secure communication bridges (APIs) that connect the mobile app directly to your existing business systems. Whether you use a custom database, a web portal, or third-party CRM tools, data flows seamlessly between mobile and desktop.",
          },
          {
            question: "How long does it take to develop a custom business mobile application?",
            answer:
              "A focused business or field operations app typically takes 6 to 10 weeks from initial workflow mapping to app store launch. More extensive customer portals with complex marketplace or catalog features may take 10 to 14 weeks depending on scope.",
          },
          {
            question: "What happens when Apple or Android release new operating system updates?",
            answer:
              "Mobile operating systems update regularly. Because we write clean, standard-compliant code, apps generally continue running smoothly. We also offer ongoing maintenance retainers to test and update your app whenever major iOS or Android updates are released.",
          },
        ]}
        ctaTitle="Ready to Build a Mobile App for Your Business?"
        ctaDescription="Tell us about your team's operational needs or app concept. We'll provide honest advice, outline realistic timelines, and design a practical development plan."
      />
    </main>
  );
}
