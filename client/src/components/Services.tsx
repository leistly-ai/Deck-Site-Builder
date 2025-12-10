interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface ServicesProps {
  title: string;
  services: ServiceItem[];
}

export default function Services({ title, services }: ServicesProps) {
  return (
    <section className="py-20 bg-card" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-testid="text-services-title"
        >
          {title}
        </h2>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
              data-testid={`service-item-${index}`}
            >
              <div className="flex-1">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-lg object-cover aspect-video"
                  data-testid={`img-service-${index}`}
                />
              </div>
              <div className="flex-1 space-y-6">
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  data-testid={`text-service-title-${index}`}
                >
                  {service.title}
                </h3>
                <p
                  className="text-lg text-muted-foreground leading-relaxed"
                  data-testid={`text-service-description-${index}`}
                >
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3"
                      data-testid={`text-service-feature-${index}-${featureIndex}`}
                    >
                      <i className="fa-solid fa-check text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
