import Hero from "../Hero";
import heroImage from "@assets/generated_images/professional_office_hero_image.png";

export default function HeroExample() {
  return (
    <Hero
      headline="Streamline Your Business Operations"
      subheadline="Leistly helps businesses achieve operational excellence through innovative solutions, expert guidance, and proven strategies for sustainable growth."
      ctaText="Get Started Today"
      ctaAction={() => console.log("CTA clicked")}
      backgroundImage={heroImage}
    />
  );
}
