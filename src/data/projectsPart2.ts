import { PortfolioProject } from "./portfolioTypes";

export const projectsPart2: PortfolioProject[] = [

  {
  slug: 'dtc-brand-scaling',
  title: 'DTC Customer Retention & Growth Strategy',
  client: 'Aura Skincare',
  category: 'Digital Marketing',
  categorySlug: 'digital-marketing',
  thumbnailColor: 'linear-gradient(135deg, #e65c00 0%, #F9D423 100%)',
  image: '/images/portfolio/dtc.png',
  metric: "+42% LTV Lift",
  metricLabel: "Cohort Retention",
  timeline: "6 Weeks",
  techStack: ["Klaviyo", "Meta CAPI", "Google Tag Manager", "Attribution AI", "Figma"],
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
