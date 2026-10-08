import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title:
    "App Development Company in Udaipur | Mobile App Development | Aetibar",

  description:
    "Aetibar provides app development services in Udaipur, including custom iOS and Android apps, cross-platform development, field operations tools, and customer-facing mobile applications.",

  keywords: [
    "App Development Company in Udaipur",
    "Mobile App Development Company in Udaipur",
    "Android App Development Udaipur",
    "iOS App Development Udaipur",
    "Cross-Platform App Development Udaipur",
    "Custom Mobile App Development Udaipur",
    "Mobile App Development Services",
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
      "https://www.aetibar.in/services/mobile-app-development-company-in-udaipur",
  },

  openGraph: {
    title:
      "App Development Company in Udaipur | Mobile App Development | Aetibar",

    description:
      "Custom iOS and Android app development for customer-facing products, field operations, and business workflows.",

    url: "https://www.aetibar.in/services/mobile-app-development-company-in-udaipur",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - App Development Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "App Development Company in Udaipur | Mobile App Development | Aetibar",

    description:
      "Custom iOS and Android mobile apps designed around your customers, teams, and business workflows.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "App Development Company in Udaipur",
  serviceType: "Mobile App Development Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides custom mobile app development services in Udaipur, including iOS and Android applications, cross-platform development, field operations tools, customer-facing apps, and business software integrations.",
  url: "https://www.aetibar.in/services/mobile-app-development-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};

export default function AppDevelopmentServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    ["mobile-booking-app", "field-service-mobile-app"].includes(p.slug),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="Custom Mobile App Development"
        title="App Development Company in Udaipur — "
        titleHighlight="Custom Apps for iPhone & Android"
        tagline="Practical iOS and Android apps designed to help your customers stay connected with your business and your teams work more efficiently on the go."
        description="As an app development company in Udaipur, we build custom mobile applications around your business requirements—from customer-facing apps for services, bookings, and orders to internal tools for field teams, job management, and data collection. Where your workflow requires it, we can also support features such as offline data capture and synchronization."
        icon={<PhoneIphoneIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Field Teams & Drivers",
            desc: "Technicians, inspectors, and drivers who need simple mobile tools to log work, capture photos, update job status, and collect signatures while working on-site.",
          },
          {
            title: "Retailers & Consumer Brands",
            desc: "Businesses looking to give customers a convenient way to browse products, place repeat orders, receive updates, and complete payments from their phones.",
          },
          {
            title: "Businesses Moving Beyond Paper & WhatsApp",
            desc: "Companies that rely on paper records, WhatsApp updates, or repeated phone calls and want a more organized way to collect, share, and manage information.",
          },
          {
            title: "Founders Launching an App Idea",
            desc: "Entrepreneurs who want to turn a mobile app idea into a working product for both iPhone and Android, with a development approach suited to their features and budget.",
          },
        ]}
        problemsAddressed={[
          {
            problem:
              "Your field team struggles to work when there is little or no mobile signal",
            howWeHelp:
              "For workflows that need offline access, we can build apps that store forms, photos, signatures, and other required information on the device and synchronize the data when an internet connection becomes available again.",
          },
          {
            problem:
              "You need an app for both iPhone and Android without maintaining completely separate products",
            howWeHelp:
              "We can use a suitable cross-platform development approach where the project requirements allow it, helping your business share the core application across iOS and Android while keeping the experience appropriate for each platform.",
          },
          {
            problem:
              "Paper records and scattered WhatsApp updates make it difficult to verify completed work",
            howWeHelp:
              "We can replace manual records with digital forms, photo capture, signatures, job-status updates, and centralized data so your office team has a clearer view of field activity.",
          },
          {
            problem:
              "Complicated mobile screens make apps difficult for field staff to use",
            howWeHelp:
              "We design mobile workflows around the tasks your team actually performs, using clear navigation, readable information, straightforward forms, and focused actions that make the app easier to use in real working conditions.",
          },
        ]}
        deliverables={[
          {
            title: "iPhone & Android Apps",
            desc: "Custom mobile applications designed for iOS and Android, with a consistent experience across supported devices.",
            items: [
              "Cross-platform development from a shared codebase where suitable for the project",
              "Touch-friendly navigation and focused mobile workflows",
              "Camera, GPS, notifications, and local device storage where required",
              "Performance optimization and testing across relevant devices and screen sizes",
            ],
          },

          {
            title: "Field Operations & Driver Mobile Tools",
            desc: "Practical mobile tools for delivery drivers, field technicians, warehouse workers, and other teams working away from the office.",
            items: [
              "Offline data capture and synchronization for workflows that need to work without an internet connection",
              "Digital signature collection and photo-based delivery or job verification",
              "Job status updates with location and timestamps where required",
              "Push notifications for dispatch updates, task assignments, and important alerts",
            ],
          },

          {
            title: "Customer-Facing & Self-Service Apps",
            desc: "Mobile apps that give customers a convenient way to browse, book, order, pay, and manage their interactions with your business.",
            items: [
              "Phone, email, or OTP-based authentication with profile management",
              "Product catalogs, appointment booking, ordering, and other self-service workflows",
              "Payment integration with supported providers and methods such as UPI and cards",
              "Order status, booking updates, and relevant push notifications",
            ],
          },

          {
            title: "Business System & CRM Integrations",
            desc: "Connect your mobile application with the business systems your team already uses so information can move between field staff, customers, and your office.",
            items: [
              "API-based integration with websites, CRMs, inventory systems, and other supported software",
              "Role-based access for different staff members and user types",
              "Automated notifications and workflow updates when defined actions are completed",
              "Local data handling and synchronization logic for workflows that need reliable offline operation",
            ],
          },

          {
            title: "App Store & Google Play Publishing",
            desc: "Support with preparing and submitting your application to the Apple App Store and Google Play, including the assets and information required for launch.",
            items: [
              "Guidance for setting up your official Apple and Google developer accounts",
              "App icons, screenshots, store listing content, and required submission information",
              "Test builds and beta testing through the relevant platform tools",
              "Submission support and assistance with addressing store review feedback where required",
            ],
          },
        ]}
        benefits={[
          {
            title: "Build for iPhone & Android More Efficiently",
            desc: "A suitable cross-platform approach can allow your core application to be developed and maintained across iOS and Android without managing completely separate codebases.",
          },
          {
            title: "Keep Field Work Moving Without Internet",
            desc: "For workflows that require offline support, the app can capture relevant information on the device and synchronize it when connectivity becomes available again.",
          },
          {
            title: "Keep Your Office & Field Teams Connected",
            desc: "Mobile updates can flow back to your central system, giving office teams a clearer view of job progress, customer activity, deliveries, and other field operations.",
          },
          {
            title: "Maintain Control of Your App",
            desc: "We can publish the application through your own Apple and Google developer accounts and provide the agreed project code and assets, helping your business retain control of its mobile product.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Requirements & Workflow Review",
            desc: "We understand your business, users, current processes, and the problems the app needs to solve, then define the key features, screens, and integrations required.",
          },
          {
            num: "02",
            title: "User Flow & Screen Design",
            desc: "We map the main user journeys and create clear mobile screen designs so you can review the experience and provide feedback before development begins.",
          },
          {
            num: "03",
            title: "App Development & Integration",
            desc: "We build the mobile application and connect the required backend services, APIs, databases, authentication, notifications, and device features such as camera or location.",
          },
          {
            num: "04",
            title: "Testing on Real Devices",
            desc: "We test the application across relevant iOS and Android devices and check important workflows such as connectivity changes, data synchronization, permissions, notifications, and device-specific behavior.",
          },
          {
            num: "05",
            title: "Store Submission & Handover",
            desc: "We prepare the required store assets, help submit the app to Apple and Google, address relevant review feedback, and provide the agreed project files and guidance for your team.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "Do you build separate apps for iPhone and Android?",
            answer:
              "Not necessarily. We can use React Native and other suitable cross-platform approaches to share the core application across iOS and Android. This can reduce duplicated development and maintenance work while still allowing platform-specific features where required. The right approach depends on your app's requirements.",
          },
          {
            question: "Will the app work when my team has no mobile signal?",
            answer:
              "It can, when offline support is part of the project requirements. We can design offline-capable workflows where forms, photos, signatures, and other required information are stored on the device and synchronized when connectivity becomes available again.",
          },
          {
            question:
              "Who handles getting the app onto the Apple App Store and Google Play Store?",
            answer:
              "We support the store submission process, including preparing required app assets and submission information, configuring the relevant settings, and helping address review feedback. The final approval decision is made by Apple or Google.",
          },
          {
            question: "Who owns the code and store accounts?",
            answer:
              "We recommend publishing your app through your own Apple Developer and Google Play Console accounts, so your business retains access to its store listings and account information. Project code and ownership are handled according to the agreed scope and terms of the development project.",
          },
          {
            question:
              "Can the mobile app connect to our existing website or software?",
            answer:
              "Yes, where the existing system provides a suitable API or integration method. We can connect the app with websites, CRMs, databases, inventory systems, accounting software, and other supported business tools so relevant information can move between systems.",
          },
          {
            question: "How long does it take to build a custom mobile app?",
            answer:
              "The timeline depends on the app's features, number of screens, integrations, backend requirements, testing, and store submission process. A focused business or field-operations app may take less time than a larger customer-facing product with payments, catalogs, complex workflows, or multiple integrations. After reviewing the requirements, we can provide a more realistic timeline for your project.",
          },
        ]}
        ctaTitle="Ready to Build a Mobile App That"
        ctaTitleHighlight="Fits Your Business?"
        ctaDescription="Tell us about your app idea, customer needs, or field workflow. We'll understand your requirements and discuss the right features, development approach, integrations, and a realistic implementation plan."
      />
    </main>
  );
}
