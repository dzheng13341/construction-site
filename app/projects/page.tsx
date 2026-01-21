"use client";

import { motion } from "framer-motion";
import ProjectsCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Electrical Installation",
    category: "Commercial Electrical",
    description: "Electrical installation for a commercial facility, including power distribution and lighting systems.",
    image: "/projects/electrical1.png",
  },
  {
    title: "Commercial HVAC Installation",
    category: "HVAC Systems",
    description: "Installation of a high-efficiency HVAC system for commercial applications.",
    image: "/projects/ductwork.jpeg",
  },
  {
    title: "Stainless Steel Kitchen",
    category: "Commercial Construction",
    description: "Installation and integration of stainless steel commercial kitchen equipment.",
    image: "/projects/commercial-kitchen1.jpg",
  },
  {
    title: "Office Renovation",
    category: "Renovation",
    description: "Complete office renovation including electrical and HVAC systems.",
    image: "/projects/office-buildout1.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-black text-center">
            Our Projects
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl text-center">
            A selection of projects showcasing our commitment to quality,
            craftsmanship, and attention to detail.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectsCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
