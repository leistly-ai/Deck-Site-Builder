import Services from "../Services";
import digitalImage from "@assets/generated_images/digital_innovation_abstract_background.png";
import analyticsImage from "@assets/generated_images/business_growth_analytics_illustration.png";
import productivityImage from "@assets/generated_images/productivity_workspace_setup.png";

// todo: remove mock functionality
const mockServices = [
  {
    title: "Digital Transformation",
    description:
      "Modernize your business with cutting-edge digital solutions that enhance customer experiences and operational efficiency. We guide you through every step of your digital journey.",
    features: [
      "Process automation and optimization",
      "Cloud migration and management",
      "Digital strategy consulting",
    ],
    image: digitalImage,
  },
  {
    title: "Business Analytics",
    description:
      "Transform raw data into actionable insights that drive strategic decision-making. Our analytics solutions help you understand trends, predict outcomes, and optimize performance.",
    features: [
      "Custom dashboard development",
      "Predictive analytics modeling",
      "Performance tracking and reporting",
    ],
    image: analyticsImage,
  },
  {
    title: "Productivity Solutions",
    description:
      "Boost team productivity with tools and workflows designed for modern workplaces. We implement solutions that help your team work smarter, not harder.",
    features: [
      "Workflow optimization",
      "Collaboration tool integration",
      "Training and enablement programs",
    ],
    image: productivityImage,
  },
];

export default function ServicesExample() {
  return <Services title="Our Services" services={mockServices} />;
}
