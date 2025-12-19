"use client";

import { useState } from "react";

export default function JobsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    jobType: "HVAC",
    message: "",
    file: null as File | null,
  });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("jobType", form.jobType);
    formData.append("message", form.message);
    if (form.file) formData.append("file", form.file);

    const res = await fetch("/api/jobs", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("Application sent successfully!");
      setForm({ name: "", email: "", jobType: "HVAC", message: "", file: null });
    } else {
      setStatus("Failed to send application. Please try again.");
    }
  }

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left Side Info */}
        <div>
          <h1 className="text-5xl font-bold mb-6 text-black">Join Our Team</h1>
          <p className="text-lg mb-10 text-black">
            Interested in working with us? Fill out the form to apply. You can
            optionally attach your resume.
          </p>

          <div className="space-y-6 text-black">
            <div>
              <p className="font-semibold">Email</p>
              <a href="mailto:info@airandsunco.com" className="text-orange-600 hover:underline">
                info@airandsunco.com
              </a>
            </div>

            <div>
              <p className="font-semibold">Phone</p>
              <p>(555) 123-4567</p>
            </div>

            <div>
              <p className="font-semibold">Location</p>
              <p>8982 Elder Creek Rd Sacramento, CA 95829</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
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

            <select
              value={form.jobType}
              onChange={(e) => setForm({ ...form, jobType: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 text-black"
            >
              <option value="HVAC">HVAC</option>
              <option value="Construction">Construction</option>
              <option value="Electrical">Electrical</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              rows={5}
              placeholder="Tell us about yourself / message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 text-black placeholder-black"
            />

            <div className="relative flex items-center gap-4">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={(e) =>
                  setForm({ ...form, file: e.target.files?.[0] || null })
                }
              />
              <button
                type="button"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-600"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                Browse Files
              </button>
              {form.file && (
                <span className="text-black font-medium truncate max-w-xs">
                  {form.file.name}
                </span>
              )}
            </div>
            
            <button
              type="submit"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700"
            >
              Submit Application
            </button>

            {status && <p className="text-sm mt-2">{status}</p>}
          </form>
        </div>

      </div>
    </section>
  );
}
