"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectsCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const projects = [
  {
    title: "Electrical Installation",
    category: "Commercial Electrical",
    description: "Electrical installation for a commercial facility, including power distribution and lighting systems.",
    images: ["/projects/electrical1.png"], // add more paths here as you get them
  },
  {
    title: "Commercial HVAC Installation",
    category: "HVAC Systems",
    description: "Installation of a high-efficiency HVAC system for commercial applications.",
    images: ["/projects/ductwork.jpeg"],
  },
  {
    title: "Stainless Steel Kitchen",
    category: "Commercial Construction",
    description: "Installation and integration of stainless steel commercial kitchen equipment.",
    images: ["/projects/commercial-kitchen1.jpg"],
  },
  {
    title: "Office Renovation",
    category: "Renovation",
    description: "Complete office renovation including electrical and HVAC systems.",
    images: ["/projects/office-buildout1.jpg"],
  },
  {
    title: "Grease Trap & Pump Station Installation",
    category: "Plumbing",
    description: "Complete underground plumbing installation featuring a grease interceptor and full-service pump station system.",
    images: ["/projects/greasetrap.png","/projects/pumpstation.jpg"],
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectsCard
              key={project.title}
              {...project}
              image={project.images[0]}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
