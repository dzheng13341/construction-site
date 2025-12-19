import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Modern Office Renovation",
    category: "Commercial Renovation",
    image: "🏢",
  },
  {
    title: "Luxury Home Remodel",
    category: "Residential Renovation",
    image: "🏠",
  },
  {
    title: "Industrial HVAC Upgrade",
    category: "HVAC",
    image: "❄️",
  },
  {
    title: "Retail Space Build-Out",
    category: "Commercial Construction",
    image: "🏗️",
  },
  {
    title: "Electrical System Overhaul",
    category: "Electrical",
    image: "⚡",
  },
  {
    title: "Apartment Complex Renovation",
    category: "Residential",
    image: "🏘️",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-black">
            Our Projects
          </h1>
          <p className="text-lg text-black max-w-3xl mx-auto">
            A selection of projects showcasing our commitment to quality,
            craftsmanship, and attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
