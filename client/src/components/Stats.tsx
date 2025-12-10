interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16 bg-primary" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-item-${index}`}
            >
              <div
                className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2"
                data-testid={`text-stat-value-${index}`}
              >
                {stat.value}
              </div>
              <div
                className="text-primary-foreground/80 text-sm md:text-base"
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
