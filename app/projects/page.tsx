"use client";

import { motion } from "framer-motion";
import ProjectsCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Ductwork Installation",
    category: "Renovation",
    description: "Ductwork installation for a commercial restaurant.",
    image: "/projects/ductwork.jpeg",
  },
  {
    title: "Commercial HVAC Installation",
    category: "HVAC",
    description: "High-efficiency HVAC system for a commercial building.",
    image: "/projects/commercial-hvac1.jpg",
  },
  {
    title: "Kitchen Remodel",
    category: "Construction",
    description: "Custom cabinetry, countertops, and lighting upgrades.",
    image: "/projects/kitchen-remodel.jpg",
  },
  {
    title: "Office Build-Out",
    category: "Commercial",
    description: "Full office construction with electrical and HVAC work.",
    image: "/projects/office-buildout.jpg",
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
