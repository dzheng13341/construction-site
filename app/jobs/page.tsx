"use client";

import { useState } from "react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx"];

export default function JobsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    jobType: "HVAC",
    message: "",
    file: null as File | null,
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("jobType", form.jobType);
    formData.append("message", form.message);

    if (form.file) {
      formData.append("file", form.file);
    }

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit application");
      }

      setStatus("Application submitted successfully!");
      setForm({
        name: "",
        email: "",
        jobType: "HVAC Team",
        message: "",
        file: null,
      });
    } catch (err: any) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  };

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
              <p>(916) 291-9416</p>
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
              <option value="HVAC Team">HVAC Team</option>
              <option value="Construction Team">Construction Team</option>
              <option value="Electrical Team">Electrical Team</option>
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
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  if (file.size > MAX_FILE_SIZE) {
                    alert("File must be 5MB or smaller.");
                    e.target.value = "";
                    return;
                  }

                  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                    alert("Only PDF, DOC, or DOCX files are allowed.");
                    e.target.value = "";
                    return;
                  }

                  const extension = file.name.split(".").pop()?.toLowerCase();
                  if (!extension || !ALLOWED_EXTENSIONS.includes(extension)) {
                    alert("Invalid file format.");
                    e.target.value = "";
                    return;
                  }

                  setForm({ ...form, file: e.target.files?.[0] || null })
                }}
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
            <p className="text-sm text-gray-500">
                Accepted formats: PDF, DOC, DOCX (max 5MB)
            </p>
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-8 py-3 rounded-lg font-semibold text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-600 hover:bg-orange-700"
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

            {status && <p className="text-sm mt-2">{status}</p>}
          </form>
        </div>

      </div>
    </section>
  );
}
