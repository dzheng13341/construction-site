"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <main>

      {/* PAGE HEADER */}
      <section className="bg-gray-50 py-28 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl font-bold text-black mb-6">
            Our Services
          </h1>
          <p className="text-gray-700 text-xl">
            Comprehensive construction and HVAC services tailored to your needs.
          </p>
        </motion.div>
      </section>

      {/* HVAC */}
      <section className="bg-white py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              HVAC Services
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Installation, repair, and maintenance of residential and
              commercial HVAC systems. We ensure efficiency, comfort, and
              long-term reliability.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• System installation & replacement</li>
              <li>• Preventative maintenance</li>
              <li>• Repairs & diagnostics</li>
              <li>• Energy efficiency upgrades</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center text-6xl">
            ❄️
          </div>
        </motion.div>
      </section>

      {/* CONSTRUCTION */}
      <section className="bg-gray-50 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1 bg-gray-100 rounded-xl h-80 flex items-center justify-center text-6xl">
            🏠
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-black mb-6">
              Construction
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              From ground-up builds to structural improvements, we handle every
              phase of construction with precision and care.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Residential & commercial construction</li>
              <li>• Structural upgrades</li>
              <li>• Project management</li>
              <li>• Code-compliant builds</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* RENOVATIONS */}
      <section className="bg-white py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Renovations
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              High-quality renovation services designed to modernize,
              improve functionality, and add lasting value to your property.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Kitchen & bathroom remodels</li>
              <li>• Interior & exterior renovations</li>
              <li>• Flooring, drywall, & finishes</li>
              <li>• Custom solutions</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center text-6xl">
            🔨
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-600 py-15">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Need help planning before you build?
          </h3>
          <p className="text-slate-300 text-lg mb-8">
            Our design and planning services help turn ideas into clear,
            build-ready plans.
          </p>
          <Link
            href="/design"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            View Design & Planning
          </Link>
        </div>
      </section>

    </main>
  );
}
