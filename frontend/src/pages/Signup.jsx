import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      alert('Please fill in all fields');
      return;
    }

    if (form.password !== form.confirm) {
      alert("Passwords don't match");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      alert('Signup successful!');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.msg || 'Signup failed');
    }
    console.log('Signing up with', form);
  }

  return (
    <div>
      <Header />
      <section className="max-w-md mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              name="name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              name="confirm"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={form.confirm}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
          <p className="text-sm mt-4 text-center">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
}
