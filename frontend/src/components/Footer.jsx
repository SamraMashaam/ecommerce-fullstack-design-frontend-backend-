// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-black-200 px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-bold mb-3 text-blue-600">Brand</h4>
          <p>Best information about the company</p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Customer Service</h4>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">About Us</h4>
          <ul className="space-y-2">
            <li>Company Info</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Connect</h4>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-500">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
}
