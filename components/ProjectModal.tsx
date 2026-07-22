"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  images: string[];
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);

  // Reset image index whenever a new project is opened
  useEffect(() => {
    setIndex(0);
  }, [project]);

  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  if (!project) return null;

  const next = () => setIndex((i) => (i + 1) % project.images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            {/* Image */}
            <div className="relative w-full aspect-video bg-gray-100">
              <Image
                src={project.images[index]}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-black" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-black" />
                  </button>
                </>
              )}
            </div>

            {/* Text content */}
            <div className="p-6">
              <p className="text-sm text-orange-600 font-medium mb-1">
                {project.category}
              </p>
              <h2 className="text-2xl font-bold text-black mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700">{project.description}</p>

              {project.images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {project.images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setIndex(i)}
                      className={`relative w-16 h-16 rounded-md overflow-hidden border-2 ${
                        i === index ? "border-blue-600" : "border-transparent"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}