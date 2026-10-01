import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "App Development Company in Udaipur | Mobile App Development | Aetibar",
  description:
    "Aetibar is a premier app development company in Udaipur building smooth, reliable iOS and Android mobile applications designed to streamline business operations and engage users.",
  keywords: [
    "App Development Company in Udaipur",
    "Mobile App Development Company in Udaipur",
    "Best App Development Company in Udaipur",
    "Android App Development Udaipur",
    "iOS App Development Udaipur",
    "Cross-Platform App Development Udaipur",
    "Custom Mobile App Development India",
    "Aetibar Technologies",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  alternates: {
    canonical: "https://www.aetibar.in/services/app-development-company-in-udaipur",
  },
  openGraph: {
    title: "App Development Company in Udaipur | Mobile App Development | Aetibar",
    description:
      "Aetibar is a premier app development company in Udaipur building smooth, reliable iOS and Android mobile applications designed around your business workflows.",
    url: "https://www.aetibar.in/services/app-development-company-in-udaipur",
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
    title: "App Development Company in Udaipur | Mobile App Development | Aetibar",
    description:
      "Practical, user-friendly iOS and Android mobile apps designed around your business workflows.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "App Development Company in Udaipur",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar is a top app development company in Udaipur providing custom cross-platform iOS and Android mobile application development for businesses, on-the-ground field teams, and customer portals.",
  url: "https://www.aetibar.in/services/app-development-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
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
        badge="App Development Company in Udaipur"
        title="Custom Mobile Apps Built for iPhone & Android —"
        titleHighlight="Apps Your Customers Love."
        tagline="Smooth iOS and Android mobile apps that keep your clients connected and your team organized, with zero technical headaches."
        description="As an experienced app development company in Udaipur, we build practical mobile apps for iPhones and Android phones that just work—whether you want to put your business right inside your customer's pocket, or you need an easy mobile tool for your field staff to log jobs and capture signatures, even when there's zero mobile internet signal."
        icon={<PhoneIphoneIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Field Teams & Drivers",
            desc: "Technicians, inspectors, and drivers who need simple mobile screens to log work, take photo proofs, and collect signatures on-site.",
          },
          {
            title: "Retailers & Consumer Brands",
            desc: "Businesses wanting a convenient smartphone app for easy customer reordering, instant push notifications, and quick UPI checkout.",
          },
          {
            title: "Businesses Drowning in Paper Slips",
            desc: "Companies struggling with lost paper receipts, messy photo updates across WhatsApp groups, and constant check-in phone calls.",
          },
          {
            title: "Founders Launching an App Idea",
            desc: "Entrepreneurs who want to launch their startup on both Apple App Store and Google Play Store without paying double the development cost.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Apps stop working and lose customer data when there is no mobile signal",
            howWeHelp:
              "Staff frequently work in basements or remote transit spots. We build offline-first apps that save photos, forms, and signatures safely on the phone and auto-sync the second internet returns.",
          },
          {
            problem: "Paying double the price to build separate apps for iPhone and Android",
            howWeHelp:
              "Building two completely separate native apps doubles your cost and maintenance. We build one unified, high-performance app that runs natively on both Apple and Android devices at half the price.",
          },
          {
            problem: "Lost paper receipts and unverified job status",
            howWeHelp:
              "Our apps replace messy paperwork with digital signature collection, instant photo proofs with timestamps, and live status updates that immediately reflect on your central office screen.",
          },
          {
            problem: "Overcomplicated screens that staff resist using",
            howWeHelp:
              "Many enterprise apps are confusing. We design big, clear buttons and simple 2-tap screens that non-technical workers can use in seconds, even while walking outside in the sun.",
          },
        ]}
        deliverables={[
          {
            title: "iPhone & Android Mobile App (One Unified Codebase)",
            desc: "A smooth, responsive smartphone app that feels completely native on both Apple iPhones and Android devices.",
            items: [
              "Runs fast on both iOS and Android from a single unified codebase",
              "Smooth touch navigation and simple screen transitions",
              "Camera, GPS location, and offline local storage support",
              "Low battery usage and fast startup times",
            ],
          },
          {
            title: "Field Operations & Driver Mobile Tools",
            desc: "Practical mobile apps designed for delivery drivers, field technicians, warehouse workers, and on-site staff.",
            items: [
              "Works 100% offline with automatic background sync when online",
              "Digital signature collection and photo delivery verification",
              "Job status milestone check-ins with GPS timestamping",
              "Urgent push notifications and daily dispatch alerts",
            ],
          },
          {
            title: "Customer-Facing & Self-Service Mobile Apps",
            desc: "A convenient smartphone app that makes it effortless for your clients to order, book, and pay right from their home screen.",
            items: [
              "Quick phone number or OTP login with profile management",
              "Fast product catalog, appointment booking, and ordering",
              "Safe, one-tap mobile payments (UPI, Google Pay, cards)",
              "Live order tracking and delivery progress notifications",
            ],
          },
          {
            title: "Connecting with Your Office Database & CRM",
            desc: "We connect your mobile app directly to your website, inventory, accounting software, or CRM so everything stays updated.",
            items: [
              "Instant data sync between mobile phones and office computers",
              "Role-based staff logins so sensitive company data stays private",
              "Automatic alerts sent to office dispatchers when jobs finish",
              "Fail-safe local storage so no customer order is ever lost",
            ],
          },
          {
            title: "App Store & Google Play Publishing",
            desc: "We handle the entire approval and submission process for the Apple App Store and Google Play Store until your app is live.",
            items: [
              "We help you set up your official Apple & Google developer accounts",
              "App Store graphics, icons, screenshots, and privacy policy preparation",
              "Private beta testing so your team can try the app before launch",
              "We handle compliance reviews until your app is officially approved",
            ],
          },
        ]}
        benefits={[
          {
            title: "Cut Development & Maintenance Costs in Half",
            desc: "One unified app for iPhone and Android saves you months of work and cuts ongoing maintenance bills in half.",
          },
          {
            title: "Works Anywhere, Even Without Internet",
            desc: "Your staff won't get stuck. The app saves everything locally on the device and syncs automatically when signal returns.",
          },
          {
            title: "Know Exactly What's Happening in Real Time",
            desc: "No more phone tag. When a technician finishes a job or a delivery is made, you see it on your office screen instantly.",
          },
          {
            title: "You Own 100% of Your App & Store Accounts",
            desc: "Everything is published under your company name, and all source code belongs to you from day one.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Workflow & Needs Review",
            desc: "We discuss what your business does, what problems your team or customers face, and what screens your app needs.",
          },
          {
            num: "02",
            title: "Simple Screen Mockups",
            desc: "We design simple, high-contrast screens for every step so you can tap through and approve the design before we code.",
          },
          {
            num: "03",
            title: "Building the App",
            desc: "We code the mobile app with offline storage, camera and location tools, and seamless connection to your office database.",
          },
          {
            num: "04",
            title: "Testing on Real Phones",
            desc: "We install the app on real iPhones and Android devices and test it in low-signal spots to guarantee zero lost data.",
          },
          {
            num: "05",
            title: "App Store Launch & Training",
            desc: "We submit your app to Apple and Google for approval, get it live, and guide your team on how to use it effortlessly.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "Do you build separate apps for iPhone and Android?",
            answer:
              "We build using React Native, which means one clean, high-performance app runs smoothly on both Apple iPhones and Android devices. This cuts your upfront development cost and future maintenance in half while feeling 100% native.",
          },
          {
            question: "Will the app work when my team has no mobile signal?",
            answer:
              "Yes! We specialize in offline-first apps. Your staff can fill out forms, take photos, and collect signatures in basements or remote spots. Everything is saved safely on the phone and uploads automatically the moment signal returns.",
          },
          {
            question: "Who handles getting the app onto the Apple App Store and Google Play Store?",
            answer:
              "We handle everything. Apple and Google have strict security and design rules. We create the store screenshots, write the descriptions, configure the privacy policies, and resolve all review questions until your app is approved and live.",
          },
          {
            question: "Who owns the code and store accounts?",
            answer:
              "You do, 100%. We help you set up your own Apple Developer and Google Play Console accounts, so the app is published directly under your company's name. You own all the source code forever.",
          },
          {
            question: "Can the mobile app connect to our existing website or software?",
            answer:
              "Yes. We build secure bridges (APIs) so data flows automatically between your mobile app and your website, CRM, Excel sheets, or accounting software.",
          },
          {
            question: "How long does it take to build a custom mobile app?",
            answer:
              "A focused business tool or field operations app typically takes 6 to 10 weeks from concept to App Store launch. Larger customer apps with extensive catalogs or marketplaces take 10 to 14 weeks.",
          },
        ]}
        ctaTitle="Ready to Build a Mobile App That"
        ctaTitleHighlight="Makes Your Business Run Smoother?"
        ctaDescription="Tell us about your team's operational challenges or app concept. We'll give you honest advice, outline realistic timelines, and build a practical plan."
      />
    </main>
  );
}
