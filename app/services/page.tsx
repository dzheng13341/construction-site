"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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
            We specialize in building <strong>restaurants, supermarkets, and commercial kitchens</strong>.
            From planning and permits to construction and finishing touches, we offer full-service solutions for your project.
          </p>
        </motion.div>
      </section>

      {/* FULL-SERVICE SOLUTIONS */}
      <section className="bg-white py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Full-Service Construction
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              We handle every step of your project, so you don’t have to worry about the details.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>• Permits & approvals management</strong></li>
              <li><strong>• Custom plan design and layout</strong></li>
              <li><strong>• Integration of HVAC, plumbing, and electrical systems</strong></li>
              <li><strong>• Post-construction support and finishing</strong></li>
            </ul>
          </div>

          <div className="order-2 md:order-1 relative h-80 rounded-xl overflow-hidden bg-neutral-100">
            <Image
              src="/images/full-construction.png"
              alt="Full construction service"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </motion.div>
      </section>

      {/* COMMERCIAL SPECIALTIES */}
      <section className="bg-gray-50 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1 relative h-80 rounded-xl overflow-hidden bg-neutral-100">
            <Image
              src="/images/com-kitchen.jpg"
              alt="Full construction service"
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-black mb-6">
              Commercial Kitchens & Restaurants
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Our expertise includes specialized facilities designed for efficiency and safety.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>• Restaurants and cafés</strong></li>
              <li><strong>• Supermarkets and retail food spaces</strong></li>
              <li><strong>• Commercial kitchens and prep areas</strong></li>
              <li><strong>• Customized layouts for workflow efficiency</strong></li>
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
              Renovations & Upgrades
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              We improve existing spaces to increase functionality, efficiency, and aesthetics. Perfect for restaurants, commercial kitchens, and retail spaces.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>• Interior and exterior renovations</strong></li>
              <li><strong>• Equipment and system upgrades</strong></li>
              <li><strong>• Workflow optimization and layout redesign</strong></li>
              <li><strong>• Integration with existing HVAC, electrical, and plumbing</strong></li>
            </ul>
          </div>

          <div className="order-2 md:order-1 relative h-80 rounded-xl overflow-hidden bg-neutral-100">
            <Image
              src="/images/renovation.jpg"
              alt="Full construction service"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </motion.div>
      </section>

      {/* DESIGN & PLANNING CTA */}
      <section className="bg-slate-600 py-15">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Free Design & Planning Services
          </h3>
          <p className="text-slate-300 text-lg mb-8">
            Our expert team can help design plans for your project at no cost.
            We guide you from concept to completion, making the process stress-free.
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