import { Card } from "@/components/ui/card";

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface ValuePropositionProps {
  title: string;
  subtitle: string;
  values: ValueItem[];
}

export default function ValueProposition({ title, subtitle, values }: ValuePropositionProps) {
  return (
    <section className="py-20 bg-background" id="services" data-testid="section-value-proposition">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-value-title"
          >
            {title}
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-value-subtitle"
          >
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 text-center hover-elevate transition-all duration-200"
              data-testid={`card-value-${index}`}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-lg bg-primary/10">
                <i className={`${value.icon} text-2xl text-primary`} />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                data-testid={`text-value-item-title-${index}`}
              >
                {value.title}
              </h3>
              <p
                className="text-muted-foreground leading-relaxed"
                data-testid={`text-value-item-description-${index}`}
              >
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
