import { Card } from "@/components/ui/card";

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

interface ContactProps {
  title: string;
  subtitle: string;
  contactInfo: ContactInfo;
}

export default function Contact({ title, subtitle, contactInfo }: ContactProps) {
  return (
    <section className="py-20 bg-card" id="contact" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-contact-title"
          >
            {title}
          </h2>
          <p
            className="text-lg text-muted-foreground"
            data-testid="text-contact-subtitle"
          >
            {subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center" data-testid="card-contact-email">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10">
                <i className="fa-solid fa-envelope text-xl text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                {contactInfo.email}
              </a>
            </Card>

            <Card className="p-6 text-center" data-testid="card-contact-phone">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10">
                <i className="fa-solid fa-phone text-xl text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-phone"
              >
                {contactInfo.phone}
              </a>
            </Card>

            <Card className="p-6 text-center" data-testid="card-contact-address">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10">
                <i className="fa-solid fa-location-dot text-xl text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p
                className="text-muted-foreground"
                data-testid="text-address"
              >
                {contactInfo.address}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
