import { PortfolioProject } from "./portfolioTypes";

export const projectsPart2: PortfolioProject[] = [
  {
  slug: 'automated-invoice-processing',
  title: 'AI Invoice Processing & Document Automation',
  client: 'Global Logistics Corp',
  category: 'AI Automation',
  categorySlug: 'ai-automation',
  thumbnailColor: 'linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)',
  image: '/images/services/ai-automation.png',

  summary:
    'Built an AI-powered document processing platform that automated invoice extraction, approval workflows, and ERP integration, significantly reducing manual processing time and operational overhead.',

  challenge: [
    'Global Logistics Corp was processing a large volume of invoices from suppliers across multiple regions. Documents arrived in various formats including PDFs, scanned copies, and emailed attachments, making manual processing slow, inconsistent, and resource intensive.',

    'The finance team relied heavily on manual data entry to capture invoice information, verify purchase orders, and update their ERP system. This repetitive workflow delayed approvals, increased administrative workload, and occasionally introduced avoidable human errors.',

    'The organization required an intelligent automation platform capable of accurately extracting invoice information, validating business data, and integrating directly with existing financial systems while maintaining complete visibility throughout the approval process.'
  ],

  execution: [
    'We developed an AI-powered Intelligent Document Processing (IDP) pipeline combining OCR, machine learning, and document understanding models capable of extracting structured information from invoices regardless of layout or supplier format.',

    'The platform automatically monitored designated inboxes and upload portals, classified incoming documents, extracted invoice fields, validated purchase order information, and prepared structured records for finance teams. Built-in validation rules and confidence scoring ensured that uncertain entries were automatically routed for human review before approval.',

    'After verification, the processed data was securely synchronized with the client’s ERP system through API integrations. Real-time dashboards, audit logs, workflow tracking, and approval notifications provided complete transparency across the entire invoice lifecycle.'
  ],

  solution: [
    'The completed automation platform transformed invoice processing into a streamlined digital workflow. Finance teams could review, approve, and process invoices significantly faster while eliminating repetitive manual data entry and reducing operational delays.',

    'AI-assisted extraction delivered highly consistent results across invoices from multiple suppliers, while the human review layer ensured business-critical financial records remained accurate and compliant. Teams were able to focus on financial analysis, vendor management, and exception handling instead of repetitive administrative tasks.',

    'The new workflow improved collaboration between finance, procurement, and operations departments by providing centralized document management, faster approvals, and real-time visibility into invoice status from submission through final payment.'
  ],

  results: [
    'Reduced manual invoice processing time by more than 90%',
    'Accelerated invoice approval and ERP data entry workflows',
    'Improved extraction accuracy across multiple invoice formats',
    'Reduced administrative workload through AI-driven automation'
  ]
},
  {
  slug: 'legal-contract-analyzer',
  title: 'AI Contract Review & Legal Document Analysis',
  client: 'LexCorp Legal',
  category: 'AI Tools',
  categorySlug: 'ai-tools',
  thumbnailColor: 'linear-gradient(135deg, #3a7bd5 0%, #3a6073 100%)',
  image: '/images/services/ai-tools.png',

  summary:
    'Developed a secure AI-powered legal document analysis platform that accelerates contract review while maintaining enterprise-grade privacy and compliance.',

  challenge: [
    'LexCorp Legal handled a high volume of commercial agreements, vendor contracts, and legal documentation that required extensive manual review before approval. Legal professionals spent significant time identifying unusual clauses, compliance risks, and contractual inconsistencies across lengthy documents.',

    `The manual review process slowed contract turnaround, reduced operational efficiency, and limited the firm's ability to manage increasing workloads without expanding legal resources. Maintaining consistency across multiple reviewers also became increasingly challenging.`,

    'Due to strict confidentiality requirements, the firm required an AI solution that could analyze sensitive legal documents without exposing confidential client information to external platforms while remaining fully compliant with internal security policies.'
  ],

  execution: [
    'We designed a secure AI document analysis platform capable of processing lengthy legal agreements using advanced natural language processing and Retrieval-Augmented Generation (RAG). The system analyzes contractual language, identifies key clauses, detects deviations from predefined standards, and generates structured legal summaries for review.',

    `The platform was trained using the firm's approved legal templates, clause libraries, and internal review guidelines, allowing the AI assistant to provide context-aware recommendations while remaining aligned with organizational legal standards.`,

    'A secure web portal enabled legal teams to upload documents, review highlighted sections, compare contract clauses, and generate structured reports. Permission-based access controls, audit logging, and encrypted document processing ensured enterprise-grade security throughout the review workflow.'
  ],

  solution: [
    'The completed platform significantly accelerated the initial contract review process by automating repetitive document analysis while keeping legal professionals fully in control of final decisions. Lawyers could quickly identify high-risk clauses, review AI-generated summaries, and focus their expertise on negotiation and strategic legal evaluation.',

    'The AI assistant delivered consistent analysis across multiple document types while supporting collaboration between legal teams through centralized reporting, searchable document history, and standardized review workflows.',

    'By combining intelligent document analysis with secure enterprise deployment, LexCorp established a scalable legal review process capable of supporting growing client demands without compromising confidentiality or regulatory compliance.'
  ],

  results: [
    'Reduced manual effort required for initial contract reviews',
    'Accelerated legal document analysis and approval workflows',
    'Improved consistency across contract review processes',
    'Maintained secure processing for confidential legal documents'
  ]
},
  {
  slug: 'predictive-inventory-ai',
  title: 'AI Inventory Forecasting & Demand Prediction',
  client: 'MegaMart Retail',
  category: 'AI Tools',
  categorySlug: 'ai-tools',
  thumbnailColor: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
  image: '/images/services/ai-tools.png',

  summary:
    'Built an AI-powered demand forecasting platform that helps retail businesses optimize inventory planning, reduce stock shortages, and improve supply chain decision-making.',

  challenge: [
    'MegaMart Retail was managing inventory across multiple product categories and store locations using traditional forecasting methods that relied primarily on historical sales. This approach struggled to adapt to changing customer behavior, seasonal demand, and rapidly shifting market conditions.',

    'Frequent stock shortages for high-demand products and excess inventory for slower-moving items created operational inefficiencies throughout the supply chain. Manual forecasting required significant effort while providing limited visibility into future purchasing trends.',

    'The company required an intelligent forecasting platform capable of combining historical sales data with external business signals to generate more accurate demand predictions and support proactive inventory planning.'
  ],

  execution: [
    'We developed an AI-driven forecasting platform that combines historical sales records, seasonal purchasing patterns, promotional campaigns, market trends, and external business signals into a unified prediction engine. Advanced machine learning models continuously analyze these datasets to identify demand fluctuations across products and locations.',

    'The platform provides inventory planners with predictive insights, automated recommendations, demand forecasting dashboards, and configurable business rules for replenishment planning. Forecasts are continuously updated as new sales and operational data become available.',

    'The forecasting engine integrates directly with existing ERP and inventory management systems through secure APIs, enabling businesses to automate replenishment workflows, monitor inventory performance, and make data-driven purchasing decisions from a centralized dashboard.'
  ],

  solution: [
    'The completed solution transformed inventory planning from a reactive process into a proactive, AI-assisted workflow. Supply chain teams gained greater visibility into future demand, allowing them to optimize purchasing decisions and allocate inventory more effectively across multiple locations.',

    'Interactive dashboards enabled managers to compare forecast accuracy, monitor inventory health, identify potential shortages, and evaluate seasonal demand patterns in real time. Automated insights reduced manual analysis while supporting faster operational decision-making.',

    'By combining machine learning with business intelligence and enterprise integrations, MegaMart established a scalable inventory planning platform capable of adapting to evolving customer demand while supporting long-term operational growth.'
  ],

  results: [
    'Improved demand forecasting accuracy across product categories',
    'Reduced manual effort required for inventory planning',
    'Optimized inventory allocation across multiple retail locations',
    'Enabled AI-driven purchasing and replenishment decisions'
  ]
},
  {
  slug: 'global-saas-marketing',
  title: 'Omnichannel B2B Growth Strategy',
  client: 'CloudScale CRM',
  category: 'Digital Marketing',
  categorySlug: 'digital-marketing',
  thumbnailColor: 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)',
  image: '/images/services/digital-marketing.png',

  summary:
    'Designed and executed an omnichannel B2B marketing strategy focused on lead generation, brand positioning, and enterprise customer acquisition.',

  challenge: [
    'CloudScale CRM offered a competitive SaaS platform but struggled to establish visibility in a highly competitive B2B software market. Marketing efforts generated traffic but failed to consistently attract qualified enterprise decision-makers.',

    'The sales team faced long sales cycles and limited engagement from high-value prospects due to low brand awareness and inconsistent lead quality. Existing campaigns lacked personalization and failed to support enterprise buying journeys.',

    'The company required a scalable digital marketing strategy capable of strengthening brand authority, generating qualified leads, and aligning marketing activities with enterprise sales objectives.'
  ],

  execution: [
    'We developed an account-focused omnichannel marketing strategy combining content marketing, LinkedIn campaigns, email automation, SEO, and marketing analytics. Target audience segmentation allowed messaging to be tailored for decision-makers across different industries and business sizes.',

    'High-value educational assets including landing pages, webinars, industry guides, and case studies were created to nurture prospects throughout the buying journey. Automated lead nurturing workflows ensured consistent engagement based on user behavior and intent signals.',

    'Performance dashboards provided continuous visibility into campaign effectiveness, allowing rapid optimization of messaging, audience targeting, and conversion funnels while maintaining alignment between marketing and sales teams.'
  ],

  solution: [
    'The integrated marketing strategy established a stronger digital presence while creating a predictable pipeline of qualified business opportunities. Marketing and sales operated through a unified funnel supported by automation, analytics, and personalized customer journeys.',

    'Prospects experienced a consistent brand journey across multiple channels, improving trust and increasing engagement before entering the sales process. Educational content positioned the company as a credible solution provider within its target market.',

    'By combining strategic content, automation, and performance optimization, CloudScale created a scalable marketing ecosystem capable of supporting long-term business growth.'
  ],

  results: [
    'Generated a consistent pipeline of qualified enterprise leads',
    'Improved lead quality through audience segmentation and automation',
    'Strengthened brand visibility across multiple digital channels',
    'Created a scalable omnichannel marketing framework'
  ]
},
  {
  slug: 'dtc-brand-scaling',
  title: 'DTC Customer Retention & Growth Strategy',
  client: 'Aura Skincare',
  category: 'Digital Marketing',
  categorySlug: 'digital-marketing',
  thumbnailColor: 'linear-gradient(135deg, #e65c00 0%, #F9D423 100%)',
  image: '/images/services/digital-marketing.png',

  summary:
    'Developed a customer retention and lifecycle marketing strategy that improved engagement, repeat purchases, and long-term customer value.',

  challenge: [
    'Aura Skincare had successfully attracted new customers through paid advertising but struggled to retain them after their initial purchase. Customer acquisition continued to grow while repeat purchase rates remained relatively low.',

    'Marketing efforts focused heavily on acquiring new customers with limited investment in lifecycle communication, customer engagement, and post-purchase experiences. As acquisition costs increased, long-term profitability became more difficult to sustain.',

    'The company required a retention-focused marketing strategy capable of strengthening customer relationships, improving repeat purchases, and maximizing lifetime customer value.'
  ],

  execution: [
    'We redesigned the complete customer lifecycle using email marketing, SMS automation, customer segmentation, and personalized communication workflows. Post-purchase campaigns, replenishment reminders, loyalty initiatives, and educational content were introduced to increase ongoing engagement.',

    'Behavior-based automation allowed customers to receive personalized recommendations, abandoned cart reminders, promotional offers, and product education based on their purchasing history and browsing activity.',

    'Performance analytics and customer journey reporting provided continuous optimization opportunities, enabling marketing campaigns to adapt as customer behavior evolved over time.'
  ],

  solution: [
    'The new lifecycle marketing system created stronger relationships between the brand and its customers while reducing dependence on continuous paid acquisition. Personalized communication encouraged repeat purchases and strengthened long-term customer engagement.',

    'Automation simplified marketing operations by delivering relevant messages throughout every stage of the customer journey, from first purchase through repeat orders and loyalty campaigns.',

    'With a stronger retention strategy and data-driven customer insights, Aura Skincare established a scalable foundation for sustainable business growth and improved customer lifetime value.'
  ],

  results: [
    'Improved repeat purchase performance through lifecycle automation',
    'Increased customer engagement across email and SMS channels',
    'Strengthened long-term customer retention strategies',
    'Created a scalable retention marketing framework'
  ]
}
];
