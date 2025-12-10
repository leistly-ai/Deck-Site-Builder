import Stats from "../Stats";

// todo: remove mock functionality
const mockStats = [
  { value: "500+", label: "Clients Served" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Experience" },
  { value: "50M+", label: "Revenue Generated" },
];

export default function StatsExample() {
  return <Stats stats={mockStats} />;
}
