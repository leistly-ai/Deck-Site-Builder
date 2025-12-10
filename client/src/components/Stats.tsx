interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
  title?: string;
}

export default function Stats({ stats, title }: StatsProps) {
  return (
    <section className="py-20 bg-muted/50" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-card-border"
              data-testid={`stat-item-${index}`}
            >
              <div
                className="text-3xl md:text-4xl font-bold text-primary mb-3"
                data-testid={`text-stat-value-${index}`}
              >
                {stat.value}
              </div>
              <div
                className="text-muted-foreground text-sm leading-relaxed"
                data-testid={`text-stat-label-${index}`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
