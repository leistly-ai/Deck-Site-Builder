import Navigation from "../Navigation";

// todo: remove mock functionality
const mockLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function NavigationExample() {
  return <Navigation companyName="Leistly" links={mockLinks} />;
}
