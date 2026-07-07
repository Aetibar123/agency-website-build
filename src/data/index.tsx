import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CampaignIcon from "@mui/icons-material/Campaign";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

export const services = [
  {
    title: "Enterprise Web Development",
    icon: <CodeIcon fontSize="large" color="primary" />,
    description:
      "In today's hyper-connected digital landscape, your website is more than just a digital brochure; it is the core engine of your online business operations. We specialize in engineering high-performance, scalable, and fully responsive web architectures tailored to your specific enterprise needs. Utilizing cutting-edge frameworks like React, Next.js, and Node.js, we build robust full-stack applications, custom SaaS platforms, and dynamic portals that handle massive traffic seamlessly. Our development process prioritizes blazing-fast load times, ironclad security protocols, and intuitive user experiences (UX) to ensure maximum engagement and unparalleled conversion rates across all devices and browsers.",
  },
  {
    title: "Next-Gen Mobile App Development",
    icon: <SmartphoneIcon fontSize="large" color="primary" />,
    description:
      "Mobile presence is no longer a luxury—it is an absolute necessity for global market penetration. Our mobile app development team designs and deploys sophisticated iOS and Android applications that captivate users and drive brand loyalty. Whether you require a platform-specific native app using Swift and Kotlin, or a highly efficient cross-platform solution utilizing Flutter or React Native, we deliver exceptional results. We focus on creating seamless animations, offline capabilities, secure payment gateways, and real-time database synchronizations. From initial wireframing to final App Store deployment, we ensure your mobile application stands out in a crowded marketplace.",
  },
  {
    title: "Intelligent AI Automations",
    icon: <SmartToyIcon fontSize="large" color="primary" />,
    description:
      "Artificial Intelligence is rapidly redefining operational efficiency and business scalability. We empower your organization by integrating intelligent AI automations that eliminate redundant manual tasks, reduce human error, and drastically cut operational costs. Our solutions include automated CRM workflows, intelligent email routing, predictive data entry, and smart inventory management. By deploying state-of-the-art automation tools like Make, Zapier, and custom Python scripts, we connect your disparate software systems into a unified, autonomous ecosystem. This allows your human workforce to transition from mundane administrative duties to high-level strategic thinking, ultimately accelerating your overall business growth and profitability.",
  },
  {
    title: "Custom AI Tools & LLM Integrations",
    icon: <AutoAwesomeIcon fontSize="large" color="primary" />,
    description:
      "Stay ahead of the technological curve by leveraging the immense power of Large Language Models (LLMs) and custom Artificial Intelligence tools. We build proprietary AI solutions fine-tuned exclusively for your business data and industry nuances. From deploying advanced AI calling agents and intelligent 24/7 customer support chatbots to developing internal knowledge-base assistants and automated report generators, our AI tools revolutionize how you interact with data. We seamlessly integrate APIs from OpenAI, Anthropic, and open-source models directly into your existing infrastructure, ensuring you harness the full potential of machine learning to drive innovation and maintain a distinct competitive edge.",
  },
  {
    title: "Data-Driven Digital Marketing & Ads",
    icon: <CampaignIcon fontSize="large" color="primary" />,
    description:
      "Visibility is the ultimate currency of the digital age. Our comprehensive digital marketing and paid advertising services are meticulously engineered to maximize your Return on Investment (ROI) and generate high-quality leads. We do not just run ads; we architect full-funnel marketing campaigns across Meta (Facebook & Instagram), Google Ads, LinkedIn, and TikTok. By utilizing advanced audience targeting, pixel tracking, A/B testing, and continuous performance optimization, we ensure every dollar of your ad spend works tirelessly for you. Our strategies are designed to lower your Customer Acquisition Cost (CAC) while scaling your revenue exponentially in competitive global markets.",
  },
  {
    title: "Advanced SEO & Organic Growth",
    icon: <TrendingUpIcon fontSize="large" color="primary" />,
    description:
      "Achieving sustainable, long-term digital success requires dominating search engine results pages (SERPs). Our advanced Search Engine Optimization (SEO) strategies are built on a foundation of deep technical audits, comprehensive keyword research, and high-authority link-building campaigns. We meticulously optimize your website's architecture, improve Core Web Vitals, and implement strategic schema markup to ensure search engines perfectly understand and prioritize your content. By focusing on both localized SEO for regional dominance and global SEO for international reach, we drive a consistent stream of targeted, high-intent organic traffic to your digital assets without the recurring costs of paid media.",
  },
  {
    title: "Premium Graphic Design & Branding",
    icon: <DesignServicesIcon fontSize="large" color="primary" />,
    description:
      "First impressions in the digital world are formulated within milliseconds. Our premium graphic design and brand identity services ensure that your visual presence communicates trust, authority, and innovation at first glance. We craft cohesive brand ecosystems encompassing memorable logos, stunning typography, sophisticated color palettes, and comprehensive brand guidelines. Beyond branding, we design high-converting UI/UX interfaces for your applications, engaging social media graphics, and persuasive marketing collateral. Our design philosophy marries aesthetic brilliance with psychological principles of user behavior, ensuring that your visuals not only look spectacular but also actively drive user engagement and business conversions.",
  },
  {
    title: "Cinematic Video Editing & Content",
    icon: <VideoLibraryIcon fontSize="large" color="primary" />,
    description:
      "In an era dominated by short attention spans and dynamic media, high-quality video content is the most powerful tool for storytelling and audience retention. Our dedicated video editing and content creation team produces cinematic-grade corporate videos, compelling product demonstrations, and viral-worthy social media reels (Shorts, TikToks, Reels). We handle the entire post-production pipeline, including advanced color grading, motion graphics, professional sound design, and narrative pacing. By transforming raw footage into captivating visual narratives, we help you articulate your brand's message powerfully, ensuring maximum viewer retention, shareability, and emotional connection with your target audience.",
  },
];

export const faqs = [
  {
    question: "How long does a typical digital transformation project take to complete?",
    answer:
      "The timeline for a digital transformation project varies significantly based on its complexity, scope, and specific technical requirements. A standard corporate website or landing page optimization might take 3 to 6 weeks. However, developing a fully customized Next.js web application, a complex mobile app, or integrating bespoke AI automation workflows generally ranges from 3 to 6 months. We utilize an Agile development methodology, dividing the project into manageable 2-week sprints. This approach ensures you receive continuous updates, transparent communication, and the flexibility to adapt to changing market requirements without derailing the overall project timeline.",
  },
  {
    question: "Do you cater to international clients or only local businesses?",
    answer:
      "We are a truly global digital agency. While we maintain a strong foundational presence and deep roots in our local market, our operational infrastructure, communication protocols, and technological expertise are designed to seamlessly serve international clients. We currently collaborate with visionary enterprises across North America, Europe, Australia, and the Middle East. We accommodate various global time zones for meetings and utilize asynchronous communication tools to ensure project momentum is never lost, regardless of geographical boundaries.",
  },
  {
    question: "What makes your AI Automation services different from standard SaaS tools?",
    answer:
      "Off-the-shelf SaaS tools force your unique business processes to adapt to their rigid limitations. Our approach to AI Automation is fundamentally different. We build custom-tailored, agnostic solutions that integrate directly into your existing software stack (CRMs, ERPs, communication channels). Instead of just providing a tool, we analyze your specific operational bottlenecks and engineer bespoke AI workflows—such as personalized AI calling agents or custom LLMs trained strictly on your proprietary data. This custom engineering ensures a perfect fit for your workflow, maximizing efficiency and providing a competitive moat that off-the-shelf software simply cannot offer.",
  },
  {
    question: "How do you measure the success of your Digital Marketing and SEO campaigns?",
    answer:
      "We believe in strict, data-driven accountability. Success is not measured by vanity metrics like 'likes' or 'impressions,' but by tangible business growth. For paid advertising campaigns, our primary KPIs (Key Performance Indicators) include Return on Ad Spend (ROAS), Customer Acquisition Cost (CAC), and overall conversion rates. For SEO, we track organic traffic growth, keyword ranking improvements for high-intent search terms, and the resulting inbound lead volume. We provide our clients with live, transparent dashboards and conduct comprehensive monthly strategy reviews to ensure our marketing efforts are directly contributing to your bottom line.",
  },
  {
    question: "Will we own the source code and assets after the project is completed?",
    answer:
      "Absolutely. Transparency and client ownership are core pillars of our agency's philosophy. Upon the successful completion of a project and final settlement of accounts, all intellectual property (IP), including custom source code, design files (Figma, Adobe CC), video assets, and marketing collateral, is fully transferred to your organization. We ensure you have total administrative control over your digital assets, web hosting environments, and marketing accounts. We build partnerships based on value and trust, never by holding our clients' digital infrastructure hostage.",
  },
  {
    question: "Do you offer post-launch support and ongoing maintenance services?",
    answer:
      "Yes, the launch of a project is merely the beginning of its digital lifecycle. We offer comprehensive, ongoing Service Level Agreements (SLAs) tailored to your needs. Our post-launch support includes critical security patching, performance monitoring, server maintenance, SEO adjustments, and feature updates. For our digital marketing and AI clients, we provide continuous campaign optimization and model fine-tuning. Our dedicated support team ensures your digital ecosystem remains secure, up-to-date, and consistently performs at peak efficiency long after the initial deployment.",
  },
];
