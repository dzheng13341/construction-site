"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  }

  return (
    <main className="bg-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side – Info */}
          <div>
            <h1 className="text-5xl font-bold mb-6 text-black">
              Contact Us
            </h1>
            <p className="text-lg mb-10 text-black">
              Have a project in mind? Get in touch with our team and we’ll
              get back to you as soon as possible.
            </p>

            <div className="space-y-6 text-black">
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:info@airandsunco.com"
                  className="text-orange-600 hover:underline"
                >
                  info@airandsunco.com
                </a>
              </div>

              <div>
                <p className="font-semibold">Phone</p>
                <p>(916) 291-9416</p>
              </div>

              <div>
                <p className="font-semibold">Service Area</p>
                <p>Sacramento</p>
              </div>
            </div>
          </div>

          {/* Right Side – Form */}
          <div className="bg-gray-50 p-10 rounded-xl shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded-lg px-4 py-3 text-black placeholder-black"
                required
              />

              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border rounded-lg px-4 py-3 text-black placeholder-black"
                required
              />

              <textarea
                rows={5}
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border rounded-lg px-4 py-3 text-black placeholder-black"
                required
              />

              <button
                type="submit"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700"
              >
                Send Message
              </button>

              {status && <p className="text-sm">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
