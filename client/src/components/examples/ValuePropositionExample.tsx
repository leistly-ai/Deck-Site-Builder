import ValueProposition from "../ValueProposition";

// todo: remove mock functionality
const mockValues = [
  {
    icon: "fa-solid fa-rocket",
    title: "Accelerate Growth",
    description:
      "Drive rapid business expansion with data-driven strategies and proven methodologies that deliver measurable results.",
  },
  {
    icon: "fa-solid fa-cogs",
    title: "Optimize Operations",
    description:
      "Streamline workflows and eliminate inefficiencies to boost productivity and reduce operational costs across your organization.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Maximize Performance",
    description:
      "Leverage analytics and insights to make informed decisions and continuously improve your business outcomes.",
  },
];

export default function ValuePropositionExample() {
  return (
    <ValueProposition
      title="Why Choose Leistly"
      subtitle="We combine innovation with expertise to deliver transformative solutions that drive real business value."
      values={mockValues}
    />
  );
}
