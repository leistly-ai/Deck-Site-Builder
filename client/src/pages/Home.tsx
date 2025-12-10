import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import heroImage from "@assets/generated_images/professional_office_hero_image.png";
import digitalImage from "@assets/generated_images/digital_innovation_abstract_background.png";
import analyticsImage from "@assets/generated_images/business_growth_analytics_illustration.png";
import productivityImage from "@assets/generated_images/productivity_workspace_setup.png";

// todo: remove mock functionality - replace with actual content from PowerPoint
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const values = [
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

const services = [
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

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Experience" },
  { value: "50M+", label: "Revenue Generated" },
];

const socialLinks = [
  { icon: "fa-brands fa-linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  { icon: "fa-brands fa-twitter", href: "https://twitter.com", label: "Twitter" },
  { icon: "fa-brands fa-facebook", href: "https://facebook.com", label: "Facebook" },
];

export default function Home() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation companyName="Leistly" links={navLinks} />
      
      <Hero
        headline="Streamline Your Business Operations"
        subheadline="Leistly helps businesses achieve operational excellence through innovative solutions, expert guidance, and proven strategies for sustainable growth."
        ctaText="Get Started Today"
        ctaAction={scrollToContact}
        backgroundImage={heroImage}
      />

      <ValueProposition
        title="Why Choose Leistly"
        subtitle="We combine innovation with expertise to deliver transformative solutions that drive real business value."
        values={values}
      />

      <Services title="Our Services" services={services} />

      <Stats stats={stats} />

      <About
        title="About Leistly"
        story="Founded with a vision to transform how businesses operate, Leistly has grown into a trusted partner for organizations seeking operational excellence. Our team of experts brings decades of combined experience in business optimization, digital transformation, and strategic consulting. We believe that every business, regardless of size, deserves access to world-class solutions that drive growth and efficiency."
        mission="To empower businesses worldwide with innovative solutions and expert guidance, enabling them to achieve sustainable growth, operational excellence, and lasting success in an ever-evolving marketplace."
      />

      <Contact
        title="Get In Touch"
        subtitle="Ready to transform your business? Let's start a conversation."
        contactInfo={{
          email: "hello@leistly.com",
          phone: "+1 (555) 123-4567",
          address: "123 Business Ave, Suite 100, San Francisco, CA 94105",
        }}
      />

      <Footer
        companyName="Leistly"
        description="Helping businesses achieve operational excellence through innovative solutions and expert guidance."
        links={navLinks}
        socialLinks={socialLinks}
      />
    </div>
  );
}
