import React from "react";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServices } from "../../../data/detailedServices";

// Import Unique Page Templates
import WebDevelopmentPage from "../../../components/services/pages/WebDevelopmentPage";
import VideoEditingPage from "../../../components/services/pages/VideoEditingPage";
import AppDevelopmentPage from "../../../components/services/pages/AppDevelopmentPage";
import AiAutomationPage from "../../../components/services/pages/AiAutomationPage";
import AiToolsPage from "../../../components/services/pages/AiToolsPage";
import DigitalMarketingPage from "../../../components/services/pages/DigitalMarketingPage";
import PaidAdvertisingPage from "../../../components/services/pages/PaidAdvertisingPage";
import SeoPage from "../../../components/services/pages/SeoPage";
import GraphicsDesigningPage from "../../../components/services/pages/GraphicsDesigningPage";
import ContentCreationPage from "../../../components/services/pages/ContentCreationPage";
import ServiceBackButton from "../../../components/services/ServiceBackButton";

// Generic Fallback components
import ServiceHeroSection from "../../../components/services/ServiceHeroSection";
import CoreOfferingsSection from "../../../components/services/CoreOfferingsSection";
import TechStackSection from "../../../components/services/TechStackSection";
import DomainsSection from "../../../components/services/DomainsSection";
import CtaSection from "../../../components/home/CtaSection";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Determine Page Content
  let PageContent = null;

  if (resolvedParams.slug === 'web-development') {
    PageContent = <WebDevelopmentPage service={service} />;
  } else if (resolvedParams.slug === 'video-editing') {
    PageContent = <VideoEditingPage service={service} />;
  } else if (resolvedParams.slug === 'app-development') {
    PageContent = <AppDevelopmentPage service={service} />;
  } else if (resolvedParams.slug === 'ai-automation') {
    PageContent = <AiAutomationPage service={service} />;
  } else if (resolvedParams.slug === 'ai-tools') {
    PageContent = <AiToolsPage service={service} />;
  } else if (resolvedParams.slug === 'digital-marketing') {
    PageContent = <DigitalMarketingPage service={service} />;
  } else if (resolvedParams.slug === 'paid-advertising') {
    PageContent = <PaidAdvertisingPage service={service} />;
  } else if (resolvedParams.slug === 'seo') {
    PageContent = <SeoPage service={service} />;
  } else if (resolvedParams.slug === 'graphics-designing') {
    PageContent = <GraphicsDesigningPage service={service} />;
  } else if (resolvedParams.slug === 'content-creation') {
    PageContent = <ContentCreationPage service={service} />;
  } else {
    // Fallback for missing services
    PageContent = (
      <>
        <ServiceHeroSection service={service} />
        <CoreOfferingsSection service={service} />
        <TechStackSection service={service} />
        <DomainsSection service={service} />
        <CtaSection />
      </>
    );
  }

  return (
    <>
      <ServiceBackButton />
      {PageContent}
    </>
  );
}
