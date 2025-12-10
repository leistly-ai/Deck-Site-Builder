interface AboutProps {
  title: string;
  story: string;
  mission: string;
}

export default function About({ title, story, mission }: AboutProps) {
  return (
    <section className="py-20 bg-muted/30" id="about" data-testid="section-about">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          data-testid="text-about-title"
        >
          {title}
        </h2>
        <p
          className="text-lg text-muted-foreground leading-relaxed mb-8"
          data-testid="text-about-story"
        >
          {story}
        </p>
        <div className="bg-card rounded-lg p-8 border border-card-border">
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p
            className="text-muted-foreground leading-relaxed"
            data-testid="text-about-mission"
          >
            {mission}
          </p>
        </div>
      </div>
    </section>
  );
}
