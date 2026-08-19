import type { OfferingItem } from "@/lib/catalog";

export type Industry = OfferingItem & {
  overview: string[];
  solutionsIntro: string;
};

const genericOverview = (name: string) => [
  `${name} organizations are balancing customer expectations, operational resilience, and the need to modernize responsibly. CloudSwift helps teams turn complex technology estates into secure, measurable platforms for growth.`,
  `We bring together cloud, data, applications, and managed services to address the practical constraints of the sector. Our approach is designed to improve visibility, reduce friction, and create a foundation for continuous change.`,
];

const genericSolutions = (name: string) => [
  `${name} cloud and application modernization`,
  "Data platforms, reporting, and intelligent automation",
  "Security, governance, and compliance foundations",
  "Managed operations and continuous improvement",
];

const industry = (
  id: string,
  title: string,
  desc: string,
  overview = genericOverview(title),
  solutions = genericSolutions(title),
  solutionsIntro = "A practical set of capabilities to help your organization modernize with confidence."
): Industry => ({
  id,
  title,
  desc,
  detailedContent: desc,
  image: "",
  tags: ["Industry"],
  capabilities: solutions,
  steps: [],
  overview,
  solutionsIntro,
});

export const industries: Industry[] = [
  industry(
    "manufacturing",
    "Manufacturing",
    "Modernize production, supply chain, and workforce operations with connected, resilient technology platforms."
  ),
  industry(
    "healthcare",
    "Healthcare",
    "Build secure digital experiences and connected systems that help care teams coordinate better outcomes.",
    [
      "Healthcare providers need technology that makes information available to the right people at the right time while protecting patient trust. We help connect clinical, operational, and patient-facing systems across complex environments.",
      "Our work supports organizations navigating privacy obligations, legacy platforms, and rising demand for accessible care. We focus on secure foundations that enable better coordination without disrupting critical services.",
      "From patient data systems to telehealth experiences, CloudSwift helps healthcare teams create dependable digital services with governance built in from the start.",
    ],
    [
      "Patient data platforms with secure integration and governed access",
      "Compliance-ready cloud foundations for clinical workloads",
      "Care coordination and referral management experiences",
      "Telehealth, patient engagement, and intelligent automation",
    ],
    "Technology solutions for safer data exchange, more coordinated care, and accessible patient experiences."
  ),
  industry(
    "education",
    "Education",
    "Create flexible learning and administration platforms that connect students, educators, and institutions."
  ),
  industry(
    "banking",
    "Banking",
    "Strengthen digital banking experiences, data operations, and risk controls across a changing financial landscape."
  ),
  industry(
    "retail",
    "Retail",
    "Unify customer, commerce, and supply chain experiences with scalable platforms built for constant change."
  ),
  industry(
    "non-profit",
    "Non-Profit",
    "Help mission-led organizations make more impact through efficient operations, trusted data, and accessible services."
  ),
  industry(
    "insurance",
    "Insurance",
    "Modernize policy, claims, and customer journeys while improving insight, governance, and operational agility."
  ),
  industry(
    "security",
    "Security",
    "Build a stronger security posture with connected monitoring, identity, response, and resilience capabilities."
  ),
];

export function findIndustry(slug: string) {
  return industries.find((item) => item.id === slug);
}