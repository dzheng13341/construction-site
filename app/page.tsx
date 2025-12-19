"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">

      {/* MAIN */}
      <section className="bg-gray-50 py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl font-bold text-black mb-6">
            Quality Construction & HVAC You Can Trust
          </h1>
          <p className="text-gray-700 text-xl mb-10">
            Reliable service, skilled craftsmanship, and honest work from start to finish.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              View Our Work
            </Link>

            <Link
              href="/contact"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
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
              Built on Quality & Trust
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Air & Sun Co is a full-service construction and HVAC company
              dedicated to delivering high-quality workmanship and dependable service.
            </p>
            <p className="text-gray-700 text-lg">
              From renovations to system installations, we take pride in doing
              the job right the first time.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center text-6xl">
            🏗️
          </div>
        </motion.div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="bg-gray-50 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "HVAC Services", icon: "❄️" },
              { title: "Construction", icon: "🏠" },
              { title: "Renovations", icon: "🔨" },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-10 rounded-xl shadow-sm text-center hover:shadow-md transition"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-black">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Why Choose Air & Sun Co
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Licensed & Insured",
              "Experienced Team",
              "Quality Craftsmanship",
              "Reliable & On-Time",
            ].map((item) => (
              <div key={item} className="p-6">
                <div className="text-4xl mb-4">✔️</div>
                <p className="text-lg font-medium text-black">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* QUOTE */}
      <section className="bg-orange-600 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
