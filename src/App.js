import React, { useState } from "react";

export default function ITTalentHub() {
  const [form, setForm] = useState({ name: "", email: "", requirement: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted! We will contact you soon.");
  };

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-blue-900 text-white p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">IT Talent Hub</h1>
        <p className="text-lg mb-6">
          Connecting Top IT Talent with Leading Companies
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-900 px-6 py-2 rounded-xl font-semibold">
            Hire Talent
          </button>
          <button className="bg-yellow-500 px-6 py-2 rounded-xl font-semibold">
            Submit Requirement
          </button>
        </div>
      </section>

      {/* About */}
      <section className="p-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto">
          IT Talent Hub is a specialized IT recruitment partner with 12+ years
          of experience in US IT staffing. We connect companies with highly
          skilled professionals across Cloud, DevOps, Data Engineering, QA, and
          Full-Stack development.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-100 p-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "IT Contract Staffing",
            "Full-Time Hiring",
            "C2C / W2 Hiring",
            "Niche Talent Hiring",
          ].map((service) => (
            <div key={service} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="p-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Submit Requirement</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <textarea
            name="requirement"
            placeholder="Your Requirement"
            value={form.requirement}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <button className="bg-blue-900 text-white px-6 py-2 rounded-xl">
            Submit
          </button>
        </form>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917036727081"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2026 IT Talent Hub
      </footer>
    </div>
  );
}
