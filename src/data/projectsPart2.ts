import { PortfolioProject } from "./portfolioTypes";

export const projectsPart2: PortfolioProject[] = [
  {
    slug: 'automated-invoice-processing',
    title: 'AI-Powered Invoice Data Extraction',
    client: 'Global Logistics Corp',
    category: 'AI Automation',
    categorySlug: 'ai-automation',
    thumbnailColor: 'linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)',
    image: '/images/services/ai-automation.png',
    summary: 'An intelligent document processing pipeline that eliminates manual data entry for accounts payable.',
    challenge: [
      'Global Logistics Corp operates a sprawling international network, managing thousands of shipments daily. Their accounts payable department was a massive bottleneck, completely overwhelmed by the sheer volume of incoming invoices. Every month, they received over 10,000 invoices in wildly varying formats—PDFs, scanned physical documents, distorted faxes, and EDI streams—from hundreds of different global vendors.',
      'A team of 40 data entry clerks was dedicated solely to manually reading these documents, extracting line items, matching them against purchase orders, and typing the data into their massive SAP ERP system. This manual process was excruciatingly slow, taking an average of 14 days to process a single invoice. More critically, human error was rampant, leading to incorrect payments, missing decimal points, and endless reconciliation nightmares.',
      'The delays meant Global Logistics routinely missed early-payment discounts and frequently incurred severe late-payment penalties from critical vendors. They needed a fully automated, highly intelligent document processing system that could instantly "read" and extract structured data from unstructured, messy documents with near-perfect accuracy.'
    ],
    execution: [
      'We architected a robust Intelligent Document Processing (IDP) pipeline leveraging advanced Machine Learning and Computer Vision. We didn’t rely on brittle template-based OCR (which breaks the moment a vendor changes their invoice layout). Instead, we utilized state-of-the-art deep learning models (like LayoutLM) designed specifically to understand the spatial relationship of text on a page, allowing the system to comprehend the context of a document just like a human would.',
      'The pipeline begins with an automated ingestion layer that monitors designated email inboxes and SFTP servers, instantly intercepting new invoices. The documents are first passed through an image enhancement microservice that de-skews, crops, and sharpens the images to maximize optical clarity. Then, our custom-trained neural network analyzes the document, accurately identifying and extracting complex tables, vendor names, total amounts, and tax IDs, regardless of where they appear on the page.',
      'To guarantee accuracy, we implemented a sophisticated confidence-scoring mechanism. If the AI is unsure about a specific extraction (e.g., a heavily smudged handwritten total), it flags the document for human review. The human corrects the error in a clean web UI, and the system uses that correction to continuously retrain and improve the model. Finally, the structured, verified data is pushed directly into the SAP ERP via secure API endpoints.'
    ],
    solution: [
      'The deployment of the AI processing pipeline completely revolutionized the accounts payable department. The system now ingests and processes an invoice in under 3 seconds—a task that previously took a human clerk an average of 12 minutes. The pipeline easily handles the immense volume of 10,000+ monthly documents without breaking a sweat, operating 24/7.',
      'The accuracy of the extraction is phenomenal. The model achieved a 99.8% precision rate on line-item extraction, virtually eliminating the data entry errors that had plagued the department for years. The human team, previously bogged down by mind-numbing data entry, was radically downsized and the remaining staff were upskilled to focus solely on complex exception handling and strategic vendor relationship management.',
      'Financially, the impact was massive. By accelerating the processing time from 14 days to minutes, Global Logistics completely eliminated all late payment penalties. Furthermore, they were finally able to capitalize on early-payment discounts offered by vendors, unlocking a new stream of working capital. The entire investment in the AI infrastructure paid for itself within the first four months of deployment.'
    ],
    results: [
      'Reduced manual invoice processing time by 94%',
      'Achieved 99.8% data extraction accuracy on complex tabular data',
      'Eliminated late payment penalties completely, saving $120k annually',
      'Unlocked $250k in early-payment vendor discounts'
    ]
  },
  {
    slug: 'legal-contract-analyzer',
    title: 'Proprietary Legal Contract Analyzer',
    client: 'LexCorp Legal',
    category: 'AI Tools',
    categorySlug: 'ai-tools',
    thumbnailColor: 'linear-gradient(135deg, #3a7bd5 0%, #3a6073 100%)',
    image: '/images/services/ai-tools.png',
    summary: 'A secure, on-premise AI tool that reviews 100-page contracts in seconds to highlight risky clauses.',
    challenge: [
      'LexCorp Legal, a premier corporate law firm specializing in massive Mergers & Acquisitions (M&A), was facing a severe scaling issue. Their senior partners, whose time is billed at over $1,000 an hour, were spending an exorbitant amount of time reviewing incredibly dense, 100+ page boilerplate contracts. Their primary task was to hunt for subtle deviations from standard indemnification clauses, hidden liabilities, and unusual termination conditions.',
      'This manual review process was mentally exhausting, highly prone to human fatigue, and severely limited the firm’s capacity to take on new clients. A single contract could take a senior partner 4 to 6 hours to fully dissect and annotate. The firm tried using off-the-shelf AI legal tools, but ran into a massive roadblock: data sovereignty.',
      'LexCorp’s clients demand absolute confidentiality. Uploading highly sensitive, unannounced M&A contracts to cloud-based AI providers like OpenAI or Google was a strict violation of their non-disclosure agreements. They needed a cutting-edge AI solution that was as smart as GPT-4, but could be deployed entirely on-premise, guaranteeing that no data ever left their secure servers.'
    ],
    execution: [
      'To solve the data sovereignty issue, we bypassed cloud providers entirely and architected a custom, on-premise AI solution. We provisioned powerful, local GPU clusters securely within LexCorp’s internal air-gapped network. We then selected a top-tier open-source Large Language Model (Llama 3) as our foundational base, ensuring we had full control over the model weights and data flow.',
      'The real magic happened in the fine-tuning phase. We took the foundational model and rigorously trained it on LexCorp’s massive historical archive of thousands of reviewed contracts, standard clause libraries, and partner annotations. This process specialized the AI, teaching it the exact linguistic nuances, acceptable risk parameters, and specific legal jargon that LexCorp partners look for when dissecting a contract.',
      'We built a highly secure, intuitive web interface for the lawyers. They simply drag and drop a massive PDF into the portal. The backend utilizes advanced OCR to extract the text, chunks it intelligently to bypass context-window limits, and feeds it into the local AI model. The AI analyzes the entire document against LexCorp’s standards and generates a comprehensive, annotated report highlighting every risky clause, explaining why it deviates from the norm.'
    ],
    solution: [
      'The LexCorp Contract Analyzer is a phenomenal example of secure, enterprise-grade AI deployment. The web portal is sleek and blazing fast. When a partner uploads a 150-page M&A contract, the system processes it entirely locally and returns a highly detailed risk assessment report in under 45 seconds. The report highlights dangerous clauses in red, acceptable deviations in yellow, and provides suggested redline revisions based on historical firm data.',
      'The accuracy of the model shocked the senior partners. In rigorous blind testing against human lawyers, the AI identified 100% of the hidden liabilities and non-standard indemnification clauses that had been intentionally planted in test documents. It never gets tired, it never loses focus, and it reviews the 100th page with the exact same scrutiny as the first.',
      'The business impact was staggering. By reducing the initial review time from 6 hours to 45 seconds, senior partners were freed to focus on high-level negotiation strategy and client relations. LexCorp was able to increase their M&A caseload by 40% without hiring additional senior staff, dramatically increasing their overall billable revenue while maintaining absolute, ironclad data security for their clients.'
    ],
    results: [
      'Contract review time reduced from 4-6 hours to 45 seconds',
      'Identified 100% of non-standard liability clauses in blind testing',
      'Deployed completely on-premise, ensuring 100% data sovereignty',
      'Increased firm capacity for massive M&A deals by 40%'
    ]
  },
  {
    slug: 'predictive-inventory-ai',
    title: 'Predictive Inventory Forecasting Engine',
    client: 'MegaMart Retail',
    category: 'AI Tools',
    categorySlug: 'ai-tools',
    thumbnailColor: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
    image: '/images/services/ai-tools.png',
    summary: 'A machine learning tool that predicts product demand based on weather, trends, and historical data.',
    challenge: [
      'MegaMart Retail, a massive national grocery chain, was hemorrhaging millions of dollars annually due to incredibly inaccurate inventory forecasting. Their existing system relied on simplistic, historical moving averages. If they sold 100 units of an item last week, the system ordered 100 units for next week. This rigid approach completely failed to account for the immense complexity of consumer behavior in the modern world.',
      'The consequences were catastrophic on both ends of the spectrum. During unexpected heat waves, they would instantly sell out of bottled water and ice cream, leading to massive missed revenue and furious customers. Conversely, when a predicted trend failed to materialize, their warehouses would be overflowing with perishable goods that ultimately had to be thrown away, destroying their profit margins.',
      'MegaMart needed a highly advanced predictive engine. They needed a system that could look beyond simple past sales and ingest vast amounts of external data—hyper-local weather forecasts, upcoming local events, social media trends, and economic indicators—to accurately predict what their customers would buy tomorrow, next week, and next month.'
    ],
    execution: [
      'We engineered a highly sophisticated, multi-modal machine learning pipeline. The foundation was a massive data lake built on AWS (Amazon S3 and Redshift), which centralized their decade of historical sales data (billions of rows). We then built intricate data pipelines using Apache Airflow to continuously ingest real-time external data streams, including hyper-local weather APIs, social media sentiment analysis (Twitter/Reddit), and localized event calendars.',
      'For the predictive engine, we utilized advanced time-series forecasting models, specifically an ensemble of XGBoost and Deep Learning algorithms (LSTMs). These models were incredibly adept at identifying complex, non-linear relationships in the data. For example, the model learned exactly how a 5-degree spike in temperature combined with a local football game would exponentially increase the demand for specific brands of beer and snack foods at very specific store locations.',
      'We exposed this powerful AI engine through a clean, intuitive React dashboard designed specifically for MegaMart’s supply chain managers. Instead of raw data, the dashboard provided clear, actionable recommendations: "Increase inventory of Item X by 40% at Store Y due to an upcoming heatwave and high social media trending." The system integrated directly with their ERP to automate the actual purchase orders if approved.'
    ],
    solution: [
      'The Predictive Inventory Engine transformed MegaMart’s supply chain from a reactive, guessing game into a proactive, data-driven powerhouse. The dashboard provides supply chain managers with an unprecedented level of visibility into future demand. The predictions are incredibly granular, forecasting demand down to the specific SKU at a specific store location on a specific day.',
      'The impact on their perishable goods department was immediate and dramatic. Because the system accurately predicted demand fluctuations based on weather and local events, they stopped over-ordering highly perishable items. This led to a massive 31% reduction in food waste across the entire national chain, a figure that translated directly to millions of dollars added straight to their bottom line.',
      'Simultaneously, the system virtually eliminated stockouts of high-demand items during critical periods. Customers were happier because their favorite products were always on the shelf, leading to increased brand loyalty and higher overall basket sizes. The machine learning models continuously retrain themselves every night, meaning the system gets smarter and more accurate with every passing day.'
    ],
    results: [
      'Reduced perishable inventory waste by a massive 31%',
      'Decreased stockouts of top-selling items by 45%',
      'Increased overall corporate profit margins by 4.2%',
      'Ingests and analyzes over 50TB of external data daily'
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
    summary: 'Executed a 360-degree marketing campaign that generated $2.4M in enterprise pipeline.',
    challenge: [
      'CloudScale CRM had engineered a genuinely superior product that was faster, more intuitive, and highly cost-effective compared to industry giants like Salesforce. However, they were practically invisible in the enterprise market. Their incredible product was languishing because their marketing strategy was entirely reliant on broad, generic inbound tactics that were only attracting small, low-value startups.',
      'When they tried to pivot to enterprise sales, they hit a massive wall. Their sales team was cold-calling CTOs and VPs of Sales at Fortune 500 companies, but they were being completely ignored. CloudScale had zero brand authority or trust in the enterprise space. They were seen as a risky, unknown startup rather than a viable enterprise solution.',
      'They urgently needed to transition upmarket. They needed a highly targeted, aggressive, and incredibly sophisticated Account-Based Marketing (ABM) strategy that could penetrate massive organizations, build immense brand authority with key decision-makers, and generate high-value, qualified enterprise pipeline.'
    ],
    execution: [
      'We designed a highly surgical Account-Based Marketing (ABM) campaign, shifting their focus entirely away from broad lead generation to hyper-targeted account penetration. We worked closely with their sales leadership to identify 200 "whale" accounts—massive enterprise targets that perfectly fit their Ideal Customer Profile (ICP). We then used advanced data enrichment tools (Clearbit, ZoomInfo) to identify the specific buying committee members (CTOs, VPs, Directors) within those 200 accounts.',
      'With the targets locked in, we deployed a heavily personalized omnichannel strategy. We utilized LinkedIn Ads to serve hyper-targeted, educational content specifically to those exact individuals. Simultaneously, we launched programmatic display campaigns to "surround" the target accounts, ensuring that whenever a decision-maker browsed industry websites, they saw CloudScale branding, establishing passive brand authority.',
      'The core of the conversion strategy was high-value, proprietary content. We authored deep-dive whitepapers and hosted exclusive webinars tailored to the specific pain points of enterprise CRMs (e.g., "The Hidden Cost of Legacy CRM Tech Debt"). When a target engaged with this content, our marketing automation platform (HubSpot) triggered highly personalized email sequences, gently nurturing them until they exhibited high buying intent, at which point they were seamlessly handed off to the enterprise sales team.'
    ],
    solution: [
      'The campaign was an absolute masterclass in enterprise B2B marketing. The surgical precision of the ABM approach meant that zero budget was wasted on unqualified clicks. By surrounding the buying committees with consistent, high-value, and educational messaging across LinkedIn, programmatic display, and email, CloudScale rapidly built massive brand authority. When the sales team finally made contact, they were no longer cold calling; they were following up with highly engaged prospects who already respected the brand.',
      'The proprietary whitepapers served as incredible lead magnets. Because the content was genuinely valuable and specifically addressed the agonizing pain points of enterprise tech debt, CTOs and VPs willingly handed over their contact information to access it. The automated nurture sequences kept CloudScale top-of-mind, ensuring that when the prospect was finally ready to evaluate new CRM solutions, CloudScale was the first company they called.',
      'The financial results completely transformed the trajectory of the company. Within six months, this hyper-targeted omnichannel strategy generated $2.4 million in highly qualified, enterprise-grade sales pipeline. Furthermore, by abandoning broad targeting, we actually reduced their overall Cost Per Lead (CPL) by 42%, proving that precision marketing is infinitely more profitable than the "spray and pray" approach.'
    ],
    results: [
      'Generated $2.4M in qualified enterprise pipeline in 6 months',
      'Reduced overall Cost Per Lead (CPL) by 42%',
      'Increased targeted email sequence open rates to a massive 38%',
      'Successfully penetrated 45 of the 200 targeted "whale" accounts'
    ]
  },
  {
    slug: 'dtc-brand-scaling',
    title: 'DTC Brand Scaling & Retention',
    client: 'Aura Skincare',
    category: 'Digital Marketing',
    categorySlug: 'digital-marketing',
    thumbnailColor: 'linear-gradient(135deg, #e65c00 0%, #F9D423 100%)',
    image: '/images/services/digital-marketing.png',
    summary: 'Revamped the entire marketing funnel for a DTC skincare brand, focusing on Lifetime Value (LTV).',
    challenge: [
      'Aura Skincare, a rapidly growing Direct-to-Consumer (DTC) beauty brand, was facing a classic e-commerce death spiral. They had mastered Facebook and Instagram ads, and were acquiring thousands of new customers every month. However, their Customer Acquisition Cost (CAC) was skyrocketing due to increased ad platform competition, and it was quickly approaching their average order value.',
      'The core issue was a catastrophic lack of customer retention. Customers would buy a product once, propelled by a flashy ad, but they would never return to buy again. Their Customer Lifetime Value (LTV) was essentially flat. In the DTC space, if your CAC equals your LTV, your business is a leaky bucket that cannot scale profitably. They were burning venture capital just to stand still.',
      'Aura needed a massive strategic pivot. They needed to stop relying solely on expensive paid acquisition and focus obsessively on retaining the customers they had already paid to acquire. They needed a sophisticated, automated retention engine that would turn one-time buyers into fiercely loyal, repeat purchasers.'
    ],
    execution: [
      'We executed a complete overhaul of their backend marketing infrastructure, migrating them to Klaviyo to unlock advanced segmentation and automation. We started by mapping the entire post-purchase customer journey. Skincare is a consumable product, so we calculated exactly how long it takes an average user to finish a bottle of serum. Based on this data, we built highly intelligent, automated replenishment flows via email and SMS that perfectly timed a re-order reminder just as the customer was running out.',
      'We also built a highly engaging VIP Loyalty Program. We segmented their audience based on purchasing behavior, identifying their top 10% of customers ("Brand Evangelists"). We created exclusive, VIP-only email flows that offered these evangelists early access to new product drops, secret discounts, and invites to private online events. This fostered a deep sense of community and exclusivity.',
      'To capture lost revenue, we completely revamped their abandoned cart and browse abandonment flows. Instead of generic "You forgot something!" emails, we injected dynamic social proof, customer reviews, and urgency timers directly into the emails. We heavily optimized the design of these emails for mobile devices, ensuring a frictionless, one-click return to the checkout page.'
    ],
    solution: [
      'The implementation of this sophisticated retention engine completely reversed Aura Skincare’s trajectory. The automated replenishment flows acted like a massive, silent sales team. Customers appreciated the timely reminders via SMS, resulting in a massive surge of effortless, high-margin repeat purchases. The brand transitioned from a transactional relationship with their customers to a deeply integrated, habitual one.',
      'The VIP Loyalty program was incredibly successful. The "Brand Evangelists" loved the exclusive treatment, and their average order frequency skyrocketed. Furthermore, they began organically referring their friends, driving down the blended Customer Acquisition Cost (CAC) across the entire business. The beautifully designed, conversion-optimized abandoned cart flows began recovering thousands of dollars of lost revenue every single week.',
      'The financial metrics tell the story of a complete turnaround. Before our intervention, email marketing accounted for a measly 5% of their total revenue. Within four months of deploying our Klaviyo automation matrix, email and SMS marketing were driving a staggering 28% of their total sales. By focusing intensely on the post-purchase experience, we effectively tripled their average Customer Lifetime Value (LTV), making the brand wildly profitable and ready for massive scale.'
    ],
    results: [
      'Increased repeat customer rate from a dismal 14% to 41%',
      'Boosted email/SMS marketing revenue from 5% to 28% of total sales',
      'Tripled the average Customer Lifetime Value (LTV) within 6 months',
      'Recovered $150k in abandoned cart revenue in Q3 alone'
    ]
  }
];
