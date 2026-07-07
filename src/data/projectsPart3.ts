import { PortfolioProject } from "./portfolioTypes";

export const projectsPart3: PortfolioProject[] = [
  {
    slug: 'enterprise-seo-migration',
    title: 'Enterprise SEO Site Migration',
    client: 'National News Network',
    category: 'SEO',
    categorySlug: 'seo',
    thumbnailColor: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)',
    image: '/images/services/seo.png',
    summary: 'Successfully migrated a 500,000+ page website to a new architecture with zero traffic loss.',
    challenge: [
      'National News Network (NNN), a massive digital publisher, was sitting on a ticking time bomb. Their legacy Content Management System (CMS) was over a decade old, incredibly slow, and structurally incapable of supporting modern web vitals. They made the executive decision to migrate to a state-of-the-art Headless CMS with a Next.js frontend to radically improve page speed and developer velocity.',
      'However, this migration posed an existential threat to the business. NNN’s entire revenue model relied on programmatic advertising driven by organic search traffic. They had over 500,000 indexed URLs, thousands of high-authority backlinks, and top rankings for highly competitive global news keywords. Historically, enterprise migrations of this scale result in a catastrophic 20% to 40% loss of organic traffic due to broken URLs, lost indexing, and crawl errors.',
      'The stakes were astronomical. A 30% drop in organic traffic would equate to millions of dollars in lost ad revenue within weeks. They needed a flawless, surgically precise technical SEO migration plan to ensure that Google transferred all historical authority to the new React-based architecture without skipping a beat.'
    ],
    execution: [
      'We executed a military-grade technical SEO migration sprint over a period of 6 months. The absolute most critical phase was the URL mapping. Because the URL structure of the new site was changing entirely, we had to manually and programmatically map over 150,000 high-value legacy URLs to their exact new counterparts, implementing permanent 301 redirects to ensure seamless authority transfer.',
      'Secondly, we heavily optimized the new Next.js architecture for search engine crawlability. React applications (SPAs) are notorious for causing indexing issues because Googlebot sometimes struggles to execute the JavaScript necessary to render the page. We configured Next.js to utilize Server-Side Rendering (SSR) for all news articles, meaning Googlebot received a fully formed, lightning-fast HTML document the millisecond it hit the server, requiring zero JS rendering on their end.',
      'Finally, we conducted exhaustive pre-launch staging environment crawls using enterprise tools like Screaming Frog and Sitebulb. We simulated millions of Googlebot requests against the staging server, meticulously hunting for redirect loops, broken canonical tags, missing alt attributes, and orphaned pages. We refused to greenlight the launch until the staging environment passed a 100-point technical SEO audit with absolute perfection.'
    ],
    solution: [
      'The actual migration took place at 2:00 AM on a Sunday. By Monday morning, Google had already begun re-crawling the massive site. The results were nothing short of miraculous. Thanks to the meticulous 301 redirect mapping, Google seamlessly transferred the authority of the old URLs to the new architecture. There were zero broken links, zero 404 spikes in Google Search Console, and absolutely zero drop in organic rankings for their core news keywords.',
      'In fact, because the new Next.js architecture was drastically faster and passed all Core Web Vitals assessments with flying colors, Google actually rewarded the site. The Server-Side Rendering (SSR) approach meant that the massive 500,000-page archive was re-indexed at an unprecedented speed. The technical foundation was finally as strong as their journalism.',
      'Instead of the dreaded 30% traffic loss, National News Network actually experienced an 18% increase in overall organic traffic within 60 days post-launch. The faster page speeds increased user dwell time, reduced bounce rates, and significantly boosted their programmatic ad revenue. The migration was universally hailed internally as a massive, flawless victory.'
    ],
    results: [
      'Zero organic traffic lost post-migration (an industry rarity)',
      'Organic traffic grew by 18% within 60 days due to Core Web Vitals boost',
      'Successfully mapped and executed over 150,000 301 redirects',
      'Increased overall Googlebot indexation speed by 400%'
    ]
  },
  {
    slug: 'local-seo-dominance',
    title: 'Franchise Local SEO Dominance',
    client: 'Elite Dental Group',
    category: 'SEO',
    categorySlug: 'seo',
    thumbnailColor: 'linear-gradient(135deg, #8E0E00 0%, #1F1C18 100%)',
    image: '/images/services/seo.png',
    summary: 'Ranked 45 separate franchise locations in the Google Local Pack (Top 3) within 6 months.',
    challenge: [
      'Elite Dental Group was expanding aggressively, opening new franchise locations across multiple states. However, their patient acquisition strategy was fundamentally flawed. They were relying entirely on exorbitant Google Search Ads to drive local traffic to their new clinics. While this generated leads, the Customer Acquisition Cost (CAC) was unsustainably high, bleeding their marketing budget dry.',
      'The core issue was their complete lack of organic local presence. When potential patients searched for "dentist near me" or "emergency root canal [City Name]," Elite Dental was nowhere to be found in the highly coveted Google Local Pack (the top 3 map listings). They were losing hundreds of high-intent, local patients every day to older, more established local competitors who dominated the organic map results.',
      'They needed a massive, coordinated Local SEO sprint. They needed to systematically dominate the local search results for all 45 of their physical locations simultaneously, driving a massive influx of "free" organic patient calls and allowing them to drastically reduce their reliance on paid advertising.'
    ],
    execution: [
      'We launched a highly systematic, multi-tiered Local SEO campaign across all 45 locations. The first step was absolute standardization. We claimed, verified, and meticulously optimized the Google Business Profiles (GBP) for every single clinic. We ensured strict NAP (Name, Address, Phone number) consistency across the entire web, utilizing Yext and manual outreach to fix hundreds of conflicting local citations on directories like Yelp, Healthgrades, and YellowPages.',
      'Next, we overhauled the local landing pages on their main website. Instead of a generic "Locations" page, we built highly optimized, location-specific pages for each clinic. We injected hyper-local keywords, embedded interactive Google Maps, added local schema markup (LocalBusiness JSON-LD), and wrote unique, authoritative content about the specific dental services offered in that specific city, proving local relevance to Google’s algorithm.',
      'Finally, we implemented an automated review generation system. Local rankings are heavily influenced by review velocity and sentiment. We integrated a software tool directly into their patient management system that automatically sent an SMS review request to patients immediately after a successful appointment. This generated a massive influx of 5-star reviews across all 45 locations, sending massive trust signals to Google.'
    ],
    solution: [
      'The coordinated Local SEO strategy yielded phenomenal results. The strict NAP consistency and perfectly optimized Google Business Profiles established absolute entity trust with Google. The hyper-local landing pages ensured that when Google crawled the site, it explicitly understood the geographical relevance of every single clinic. The automated review system acted as rocket fuel, rapidly pushing the clinics past their stagnant competitors.',
      'Within six months, Elite Dental Group had achieved total local search dominance. An incredible 92% of their targeted local keywords (e.g., "dentist near me," "teeth whitening [City]") were ranking in the Top-3 Google Local Pack for their respective geographic areas. When users searched for dental services, Elite Dental was the most prominent, highest-rated option on the map.',
      'The financial ROI was massive. The sheer volume of highly qualified, high-intent organic phone calls generated by the Map Pack listings allowed Elite Dental to slash their Google Ads budget by $40,000 per month. The organic patient pipeline was not only cheaper to acquire, but the patients showed higher retention rates. The Local SEO campaign became the most profitable marketing channel in the company’s history.'
    ],
    results: [
      'Achieved Top-3 Local Pack rankings for 92% of targeted keywords',
      'Increased organic patient phone calls by a staggering 310%',
      'Reduced monthly paid ad spend by $40,000',
      'Generated over 4,500 new 5-star Google Reviews across the network'
    ]
  },
  {
    slug: 'tech-product-launch-video',
    title: 'Cinematic Product Launch Campaign',
    client: 'Aero Dynamics Drones',
    category: 'Video Editing',
    categorySlug: 'video-editing',
    thumbnailColor: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
    image: '/images/services/video-editing.png',
    summary: 'Produced a high-octane cinematic trailer for a flagship commercial drone launch.',
    challenge: [
      'Aero Dynamics, an aerospace startup, was preparing to launch their flagship commercial drone, the "Apex-Pro." This drone was packed with revolutionary LiDAR technology and advanced obstacle avoidance AI, designed specifically for industrial surveying and search-and-rescue operations. The engineering was phenomenal, but their marketing assets were incredibly dry and heavily technical.',
      'They had plenty of raw, shaky test footage and boring PowerPoint slides explaining the specs. They needed a launch asset that would stop people scrolling. They needed a high-octane, cinematic trailer that didn’t just list the features, but viscerally communicated the immense power, speed, and revolutionary capabilities of the drone to potential enterprise buyers and investors.',
      'The challenge was blending highly technical engineering specs with an emotionally engaging, cinematic narrative. The video had to appeal to both the gritty industrial workers who would use the drone, and the high-level executives who would sign the purchase orders. They needed a masterpiece of visual storytelling.'
    ],
    execution: [
      'We approached this project like a Hollywood blockbuster trailer. We started by meticulously sorting through terabytes of raw 8K test flight footage, selecting only the most dramatic, high-speed maneuvers. To showcase the internal technology (like the LiDAR sensors), we didn’t rely on boring text overlays. Instead, we used advanced 3D motion graphics (Cinema 4D and After Effects) to create stunning, wireframe "x-ray" renders of the drone, seamlessly tracking these graphics onto the real-world footage.',
      'The pacing of the edit was critical. We used Premiere Pro to cut the footage to a relentless, building rhythm, utilizing speed ramps and dramatic smash cuts to emphasize the drone’s agility. We spent days in DaVinci Resolve executing a highly aggressive, cinematic color grade—crushing the blacks, boosting the contrast, and giving the footage a cool, industrial, sci-fi aesthetic that screamed "future technology."',
      'Finally, we knew that sound design would be 50% of the impact. We didn’t just lay a generic music track over the video. We layered deep, rumbling synth bass, sharp metallic sound effects, and custom whooshes to emphasize every rapid movement of the drone. The audio was mixed in Dolby Atmos for an incredibly immersive, theater-like experience.'
    ],
    solution: [
      'The final "Apex-Pro" launch trailer was an absolute visceral thrill ride. It opened with a slow, tense buildup showcasing the sleek design, before exploding into a rapid-fire montage of the drone navigating treacherous industrial environments at blinding speeds. The 3D tracking graphics perfectly explained the complex LiDAR technology without requiring a single spoken word. It was a perfect fusion of engineering data and cinematic art.',
      'When the trailer dropped across LinkedIn, YouTube, and industry forums, it went immediately viral within the aerospace and surveying communities. The sheer production value established Aero Dynamics not as a scrappy startup, but as a serious, premium player in the commercial drone space. The video was shared wildly by industry influencers and tech journalists.',
      'The impact on the bottom line was immediate. The trailer served as the core asset for their pre-order campaign. The intense visual demonstration of the drone’s capabilities gave enterprise buyers the confidence to commit. The video contributed directly to $5 million in pre-orders within the first 48 hours of launch, and went on to win a prestigious industry award for Best Product Marketing Asset.'
    ],
    results: [
      'Video generated 2.5 million organic views across technical platforms',
      'Contributed directly to $5M in enterprise pre-orders within 48 hours',
      'Won the industry award for Best Product Marketing Asset',
      'Increased Aero Dynamics brand search volume by 400%'
    ]
  },
  {
    slug: 'rebranding-fintech-identity',
    title: 'Complete Visual Rebranding',
    client: 'Vault Finance',
    category: 'Graphics Designing',
    categorySlug: 'graphics-designing',
    thumbnailColor: 'linear-gradient(135deg, #141E30 0%, #243B55 100%)',
    image: '/images/services/graphics-designing.png',
    summary: 'Designed a premium, trustworthy visual identity for a disruptive modern banking startup.',
    challenge: [
      'Vault Finance was a highly disruptive fintech startup offering a revolutionary mobile banking experience aimed at Gen-Z and Millennials. However, their branding was a massive liability. They had launched with a cheap, generic logo purchased from a stock website, paired with a chaotic, neon color palette that screamed "untrustworthy crypto scam" rather than "secure, modern bank."',
      'To successfully acquire users and secure Series B funding, they needed to completely overhaul their visual identity. In the highly regulated financial sector, trust is the ultimate currency. Their branding needed to simultaneously communicate absolute security, institutional stability, and modern, frictionless agility. The current chaotic design was actively scaring away both users and serious investors.',
      'They needed a comprehensive design system—a new logo, a bespoke typography system, a mature color palette, and a complete UI kit for their mobile application—that could carry them confidently into the enterprise financial space.'
    ],
    execution: [
      'We initiated the project with deep brand archaeology, interviewing the founders to distill the core ethos of the company: "Security meets Speed." We discarded the chaotic neon colors and developed a sophisticated, high-contrast palette anchored by a deep "Obsidian Navy" to project institutional strength, accented with a vibrant "Electric Mint" to symbolize digital agility and modern tech.',
      'For the logo, we wanted to avoid the cliché imagery of vaults or shields. We designed a sleek, abstract geometric monogram that subtly hinted at forward momentum and locked security, crafted with perfectly balanced mathematical proportions. We paired this with a bespoke, custom-kerned sans-serif typography system (using a modified version of Inter) that offered maximum legibility on small mobile screens while looking incredibly elegant on massive billboards.',
      'With the core identity locked in, we built out a massive, comprehensive Design System in Figma. This wasn’t just a logo pack; it was a living, breathing ecosystem containing hundreds of meticulously designed UI components, micro-interactions, iconography sets, and high-fidelity mockups of the mobile application. We ensured absolute visual consistency across every single touchpoint, from the physical debit card design to the app loading animations.'
    ],
    solution: [
      'The relaunch of the Vault Finance brand was a massive success. The new visual identity is breathtakingly premium. It feels like a high-end tech product rather than a dusty old bank. The deep navy blue inspires absolute trust and security, while the electric mint accents guide the user’s eye through the app’s intuitive interface. The new geometric logo is instantly recognizable and looks incredible stamped on their sleek metal debit cards.',
      'The comprehensive Figma Design System empowered Vault’s engineering team. Because every component was pre-designed, documented, and perfectly aligned with the new brand guidelines, the developers were able to build and deploy new features 3x faster without constantly consulting the design team. The UI of the mobile app became a massive selling point in itself.',
      'The market response was overwhelming. The premium, trustworthy aesthetic drastically lowered the barrier to entry for new users, directly resulting in a 22% increase in app store conversion rates purely based on the new screenshots. Most importantly, the sophisticated new brand identity projected the maturity necessary to impress institutional investors, directly contributing to Vault successfully closing a $40M Series B funding round.'
    ],
    results: [
      'Successfully launched the new brand identity to 100,000+ waitlist users',
      'Increased app store conversion rates by 22% due to premium visual assets',
      'Brand design was featured in top design publications (Awwwards, Dribbble)',
      'Contributed directly to the successful closing of a $40M Series B round'
    ]
  }
];
