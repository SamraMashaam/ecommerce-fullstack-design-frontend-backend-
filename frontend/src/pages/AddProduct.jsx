import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [form, setForm] = useState({ name: '', price: '', image: '', description: '', rating: 0 });
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products/add', form, {
        headers: { Authorization: token },
      });
      alert('Product added');
      navigate('/admin');
    } catch (err) {
      console.log(err); 
      alert(err.response?.data?.msg || 'Add failed');
    }
  };

  return (
    <section className="max-w-xl mx-auto p-6 mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
        <input type="text" name="price" placeholder="Price" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
        <input type="number" name="rating" placeholder="Rating" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Product</button>
      </form>
    </section>
  );
}
