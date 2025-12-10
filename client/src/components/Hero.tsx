import { Button } from "@/components/ui/button";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaAction: () => void;
  backgroundImage: string;
}

export default function Hero({
  headline,
  subheadline,
  ctaText,
  ctaAction,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          data-testid="text-hero-headline"
        >
          {headline}
        </h1>
        <p
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
          data-testid="text-hero-subheadline"
        >
          {subheadline}
        </p>
        <Button
          size="lg"
          onClick={ctaAction}
          className="px-8 py-6 text-lg bg-primary/90 backdrop-blur-md border border-primary-border"
          data-testid="button-hero-cta"
        >
          {ctaText}
        </Button>
      </div>
    </section>
  );
}
