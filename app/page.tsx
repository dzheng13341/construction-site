"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">

      {/* MOBILE HERO IMAGE */}
      <section className="md:hidden w-full">
        <img
          src="/mobileback.png"
          alt="Air and Sun Construction"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* MOBILE TEXT CONTENT */}
      <section className="md:hidden py-16 px-6 text-center bg-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-black mb-4">
            Quality Construction You Can Trust
          </h1>

          <p className="text-slate-800 text-lg mb-8">
            Specializing in restaurants, supermarkets, and commercial kitchens — from design and permits to final build.
          </p>

          <div className="flex flex-col gap-4">
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

      {/* MAIN – Desktop */}
      <section
        className="hidden md:block bg-contain bg-center bg-no-repeat py-26"
        style={{ backgroundImage: "url('/logo4.png')" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl font-bold text-black mb-6">
            Quality Construction You Can Trust
          </h1>
          <p className="text-slate-800 text-xl">
            Specializing in restaurants, supermarkets, and commercial kitchens.
          </p>
          <p className="text-slate-800 text-xl mb-10">
            From design and permits to final build.
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
              Specialists in Commercial Food & Retail Construction
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Air & Sun Construction is a full-service commercial contractor specializing in restaurants,
              supermarkets, and commercial kitchen environments.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              We manage every phase of your project: planning, permitting, design, construction,
              HVAC, electrical, and plumbing. Ensuring a smooth, compliant, and on-time delivery.
            </p>
            <p className="text-gray-700 text-lg">
              We also offer <strong>FREE plan and layout design services</strong> to help you get started
              with confidence and clarity.
            </p>
          </div>

          <BeforeAfterSlider />
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
              { title: "Restaurant & Retail Construction", icon: "🛒" },
              { title: "Kitchen Build-Outs & Renovations", icon: "🔨" },
              { title: "Commercial HVAC Systems", icon: "❄️" },
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
            Why Choose Air & Sun Construction
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Restaurant & Commercial Specialists",
              "Permit & Code Compliance Experts",
              "Free Plan & Layout Design Assistance",
              "One Team From Concept to Completion",
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
