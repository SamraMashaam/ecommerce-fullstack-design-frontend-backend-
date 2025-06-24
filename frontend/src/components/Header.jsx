import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };



  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <header className="w-full shadow-md bg-white">
      <div className="flex items-center justify-between px-6 py-3 gap-4 flex-wrap">
        <div className="text-2xl font-bold text-blue-600">Brand</div>

      <div className="flex flex-1 max-w-2xl mx-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
        >
          Search
        </button>
    </div>

        <div className="flex gap-4 text-gray-600 text-lg">
          {!isLoggedIn ? (
            <Link to="/login" className="hover:text-blue-600">Login</Link>
          ) : (
            <button onClick={handleLogout} className="hover:text-blue-600">Logout</button>
          )}
          <Link to="/cart" className="hover:text-blue-600">🛒 Cart</Link>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-white text-sm px-6 py-2 shadow">
        <ul className="flex space-x-6 overflow-x-auto">
          <li><Link to="/" className="hover:underline text-black">Home</Link></li>
          <li><Link to="/products" className="hover:underline text-black">View Products</Link></li>
          <li className="hover:underline text-black">Top Deals</li>
          <li className="hover:underline text-black">Best Sellers</li>
          <li className="hover:underline text-black">New Arrivals</li>
          <li className="hover:underline text-black">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}
