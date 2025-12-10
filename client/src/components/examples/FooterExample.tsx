import Footer from "../Footer";

// todo: remove mock functionality
const mockLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const mockSocialLinks = [
  { icon: "fa-brands fa-linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  { icon: "fa-brands fa-twitter", href: "https://twitter.com", label: "Twitter" },
  { icon: "fa-brands fa-facebook", href: "https://facebook.com", label: "Facebook" },
];

export default function FooterExample() {
  return (
    <Footer
      companyName="Leistly"
      description="Helping businesses achieve operational excellence through innovative solutions and expert guidance."
      links={mockLinks}
      socialLinks={mockSocialLinks}
    />
  );
}
