const fs = require('fs');
const path = require('path');

const faqsData = {
  'DigitalMarketingPage.tsx': `
const digitalFaqs = [
  {
    question: "How do you measure marketing success?",
    answer: "We strictly focus on bottom-line metrics: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and Customer Lifetime Value (LTV). We don't hide behind 'vanity metrics' like impressions or likes unless they directly attribute to revenue."
  },
  {
    question: "Do you handle both B2B and B2C marketing?",
    answer: "Yes. Our strategies are highly customized. For B2B, we focus on Account-Based Marketing (ABM) and LinkedIn lead generation. For B2C and DTC, we dominate paid social platforms (Meta, TikTok) and high-converting influencer campaigns."
  },
  {
    question: "How often will we get performance reports?",
    answer: "You will have 24/7 access to a custom real-time analytics dashboard. Additionally, we provide comprehensive strategic reviews bi-weekly or monthly, depending on your retainer, where we analyze the data and pitch our next strategic moves."
  }
];
`,
  'PaidAdvertisingPage.tsx': `
const paidFaqs = [
  {
    question: "What is the minimum ad spend you manage?",
    answer: "To ensure we can gather enough statistically significant data for machine learning optimization, we typically require a minimum ad spend of $10,000 per month across your chosen platforms."
  },
  {
    question: "Who creates the ad creatives (images/videos)?",
    answer: "We offer end-to-end solutions. Our in-house creative team can produce highly engaging, conversion-optimized video and image assets, or we can use your existing brand assets if they meet our performance standards."
  },
  {
    question: "What happens if a campaign isn't working?",
    answer: "We monitor campaigns daily. If a campaign isn't hitting our projected KPIs, we aggressively A/B test new variables (audiences, creatives, copy, landing pages) until we find the winning combination. We never 'set it and forget it'."
  }
];
`,
  'ContentCreationPage.tsx': `
const contentFaqs = [
  {
    question: "Do you shoot on location?",
    answer: "Yes. We have mobile production crews equipped with RED cameras and cinema lenses ready to travel globally to capture your brand's essence, facilities, and leadership team in 4K/8K resolution."
  },
  {
    question: "Can you manage our social media accounts completely?",
    answer: "Absolutely. We offer full-service Social Media Management. We don't just create the content; we handle the posting schedule, community management, and growth strategies across all major platforms."
  },
  {
    question: "How do you ensure the content matches our brand voice?",
    answer: "Before any cameras roll or copy is written, we conduct a deep 'Brand Discovery' workshop. We build a comprehensive brand Bible that dictates tone, visual aesthetics, and messaging pillars, ensuring 100% consistency."
  }
];
`,
  'GraphicsDesigningPage.tsx': `
const graphicsFaqs = [
  {
    question: "Do you offer unlimited design subscriptions?",
    answer: "No. We do not operate a 'design factory' model. We are a premium agency that focuses on high-impact, strategic design (like full rebranding, enterprise UI/UX, or flagship product packaging). Every pixel is intentionally crafted, not rushed."
  },
  {
    question: "What do we receive at the end of a branding project?",
    answer: "You receive a comprehensive Brand Guidelines document, all vector logo files (AI, EPS, SVG), typography licenses, color palette codes (HEX, RGB, CMYK), and all custom UI assets ready for developer handoff."
  },
  {
    question: "Can you redesign our existing software interface?",
    answer: "Yes. Our UI/UX specialists excel at taking complex, outdated legacy software and transforming it into modern, intuitive, and highly engaging user experiences that drastically improve user retention and satisfaction."
  }
];
`
};

const pagesDir = path.join(__dirname, 'src/components/services/pages');

for (const [filename, faqCode] of Object.entries(faqsData)) {
  const filePath = path.join(pagesDir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: \${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already processed
  if (content.includes('ServiceFaqSection')) {
    console.log(`Skipping ${filename}, already contains ServiceFaqSection`);
    continue;
  }

  // 1. Add imports at the top (after the last import)
  const importLines = [
    "import ServiceFaqSection from '../ServiceFaqSection';",
    "import CtaSection from '../../home/CtaSection';"
  ].join('\\n');

  // Find the last import
  const lines = content.split('\\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) {
      lastImportIdx = i;
    }
  }

  if (lastImportIdx !== -1) {
    lines.splice(lastImportIdx + 1, 0, importLines);
  }

  content = lines.join('\n');

  // 2. Add faq array before the export default function
  content = content.replace('export default function', faqCode + '\nexport default function');

  // 3. Find the final </Box> and inject components before it
  // Get the name of the faq array
  const faqArrayMatch = faqCode.match(/const (\w+) =/);
  const faqArrayName = faqArrayMatch ? faqArrayMatch[1] : 'faqs';

  const injection = `      <ServiceFaqSection faqs={${faqArrayName}} />\n      <CtaSection />\n    </Box>\n  );\n}`;
  
  // Replace the exact ending
  content = content.replace(/    <\/Box>\s*<\/Box>\s*\);\s*}\s*$/, `    </Box>\n${injection}`);
  content = content.replace(/      <Box sx={{ height: 100 }} \/>\s*<\/Box>\s*\);\s*}\s*$/, `${injection}`);

  fs.writeFileSync(filePath, content);
  console.log(`Successfully updated ${filename}`);
}
