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
            Expert <strong>planning and design services</strong> to create efficient, compliant, and build-ready projects.
            We guide you from <strong>concept to construction</strong>, making the process simple and stress-free.
          </p>
        </motion.div>
      </section>

    {/* ELECTRICAL / PLUMBING */}
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
              Electrical, Plumbing & Mechanical Plans
            </h2>
            <p className="text-neutral-700 text-lg mb-6">
              We create <strong>coordinated, trade-ready plans</strong> for electrical, plumbing, gas, and mechanical systems. Our designs prioritize safety, efficiency, and compliance.
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>• <strong>Electrical layouts & circuit planning</strong></li>
              <li>• <strong>Plumbing & gas line routing</strong></li>
              <li>• <strong>Mechanical system coordination</strong></li>
              <li>• <strong>Clear, permit-ready drawings</strong></li>
            </ul>
          </div>
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
              HVAC System Design
            </h2>
            <p className="text-neutral-700 text-lg mb-6">
              We design <strong>efficient, balanced HVAC systems</strong> tailored to your space. Proper planning ensures comfort, energy savings, and reliable performance.
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>• <strong>Load calculations & system sizing</strong></li>
              <li>• <strong>Ductwork & airflow planning</strong></li>
              <li>• <strong>Equipment selection & layout</strong></li>
              <li>• <strong>Energy efficiency optimization</strong></li>
            </ul>
          </div>

          <div className="bg-neutral-100 rounded-xl h-80 flex items-center justify-center text-6xl">
            ❄️
          </div>
        </motion.div>
      </section>

      {/* PERMITS & CODE */}
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
              We handle <strong>all permitting and code compliance</strong> tasks, ensuring your project moves forward smoothly with minimal delays.
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>• <strong>Code-compliant system designs</strong></li>
              <li>• <strong>Permit-ready documentation</strong></li>
              <li>• <strong>Coordination with local authorities</strong></li>
              <li>• <strong>Faster approvals & fewer delays</strong></li>
            </ul>
          </div>

          <div className="bg-neutral-100 rounded-xl h-80 flex items-center justify-center text-6xl">
            📝
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-slate-600 py-15">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
            Ready to bring your plans to life?
            </h3>
            <p className="text-slate-300 text-lg mb-8">
            Our all-in-one construction services ensure your project is executed with precision, care, and efficiency.
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
