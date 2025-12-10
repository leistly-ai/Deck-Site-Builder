import Contact from "../Contact";

export default function ContactExample() {
  return (
    <Contact
      title="Get In Touch"
      subtitle="Ready to transform your business? Let's start a conversation."
      contactInfo={{
        email: "hello@leistly.com",
        phone: "+1 (555) 123-4567",
        address: "123 Business Ave, Suite 100, San Francisco, CA 94105",
      }}
    />
  );
}
