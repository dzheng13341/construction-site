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
            Professional general contracting services specializing in HVAC, renovations,
            and essential electrical, mechanical, and plumbing work.
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
              We provide reliable installation, repair,
              and maintenance services for residential and light commercial systems, with a
              strong focus on efficiency, comfort, and long-term performance.
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
              General Contracting
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              We handle a wide range of residential and small
              commercial projects. We focus on well-planned, high-quality work rather than
              large-scale new construction.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Electrical, mechanical, & plumbing work</li>
              <li>• Coordinated multi-trade projects</li>
              <li>• Code-compliant installations & upgrades</li>
              <li>• Project oversight from start to finish</li>
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
              We specialize in renovation projects that improve comfort, functionality, and
              value. Whether it’s a single-room upgrade or a full interior refresh, we focus
              on quality craftsmanship and attention to detail.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Kitchen & bathroom renovations</li>
              <li>• Interior & exterior upgrades</li>
              <li>• Drywall, flooring, and finish work</li>
              <li>• HVAC, electrical, & plumbing integration</li>
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
