import ServiceSection from "@/components/ServiceSection";

const services = [
  {
    title: "Renovations",
    description:
      "High-quality residential and commercial renovations designed to improve functionality, appearance, and long-term value.",
    icon: "🏠",
  },
  {
    title: "HVAC",
    description:
      "Professional installation, repair, and maintenance of heating and cooling systems for comfort and efficiency.",
    icon: "❄️",
  },
  {
    title: "Electrical",
    description:
      "Safe, code-compliant electrical services for homes, offices, and commercial buildings.",
    icon: "⚡",
  },
  {
    title: "Mechanical",
    description:
      "Professional mechanical services for residential and commercial properties.",
    icon: "🏢",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold mb-6 text-black">
          Our Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-black">
          We provide reliable construction services built on experience,
          craftsmanship, and attention to detail.
        </p>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <ServiceSection
          key={service.title}
          title={service.title}
          description={service.description}
          icon={service.icon}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}
