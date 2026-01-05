"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PlanningPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="bg-neutral-50 py-28 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl font-bold text-black mb-6">
            Design & Planning
          </h1>
          <p className="text-neutral-700 text-xl">
            Smart planning and professional design to ensure efficient,
            compliant, and build-ready projects.
          </p>
        </motion.div>
      </section>

      {/* HVAC PLANNING */}
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
              HVAC System Planning
            </h2>
            <p className="text-neutral-700 text-lg mb-6">
              We design HVAC systems that are efficient, balanced, and tailored
              to your space. Proper planning ensures comfort, energy savings,
              and long-term performance.
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>• Load calculations & system sizing</li>
              <li>• Ductwork & airflow planning</li>
              <li>• Equipment selection</li>
              <li>• Energy efficiency optimization</li>
            </ul>
          </div>

          <div className="bg-neutral-100 rounded-xl h-80 flex items-center justify-center text-6xl">
            ❄️
          </div>
        </motion.div>
      </section>

      {/* LAYOUT & SPACE DESIGN */}
      <section className="bg-neutral-50 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1 bg-neutral-100 rounded-xl h-80 flex items-center justify-center text-6xl">
            📐
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-black mb-6">
              Layout & Space Design
            </h2>
            <p className="text-neutral-700 text-lg mb-6">
              We create functional layouts that maximize space, improve flow,
              and support your lifestyle or business operations.
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>• Floor plan development</li>
              <li>• Room flow & space optimization</li>
              <li>• Residential & commercial layouts</li>
              <li>• Build-ready drawings</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* PERMIT & CODE PLANNING */}
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
              Permit & Code Planning
            </h2>
            <p className="text-neutral-700 text-lg mb-6">
              We prepare plans that meet local building codes and permitting
              requirements, helping your project move forward smoothly and
              without delays.
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>• Code-compliant designs</li>
              <li>• Permit-ready documentation</li>
              <li>• Coordination with inspectors</li>
              <li>• Reduced approval delays</li>
            </ul>
          </div>

          <div className="bg-neutral-100 rounded-xl h-80 flex items-center justify-center text-6xl">
            📝
          </div>
        </motion.div>
      </section>

      {/* PRE-CONSTRUCTION PLANNING */}
      <section className="bg-neutral-50 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1 bg-neutral-100 rounded-xl h-80 flex items-center justify-center text-6xl">
            🏗️
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-black mb-6">
              Pre-Construction Planning
            </h2>
            <p className="text-neutral-700 text-lg mb-6">
              Before construction begins, we help define scope, timelines, and
              materials to minimize surprises and keep your project on track.
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>• Project scope definition</li>
              <li>• Timeline & milestone planning</li>
              <li>• Material & system coordination</li>
              <li>• Cost planning support</li>
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-600 py-15">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
            Ready to bring your plans to life?
            </h3>
            <p className="text-slate-300 text-lg mb-8">
            Our construction and HVAC teams are ready to build with precision and care.
            </p>
            <Link
            href="/services"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
            View Our Services
            </Link>
        </div>
        </section>

    </main>
  );
}
