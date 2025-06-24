// src/components/Newsletter.jsx
import React from 'react';

export default function Newsletter() {
  return (
    <section className="bg-blue-50 py-10 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Subscribe to our Newsletter</h2>
      <p className="text-gray-600 mb-6">Get the latest deals, offers, and product updates</p>

      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
