import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function ProductDetail() {
  const { id } = useParams(); // ID from URL
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError('Product not found.');
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return (
      <div>
        <Header />
        <div className="p-8 text-center text-red-600 text-lg">{error}</div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <Header />
        <div className="p-8 text-center text-gray-500 text-lg">Loading...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section className="px-4 py-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img src={product.image} alt={product.name} className="w-full h-auto object-contain rounded shadow" />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-xl text-blue-600 font-semibold">{product.price}</p>
          <p className="text-yellow-500">⭐ {product.rating} / 5</p>
          <button onClick={() => addToCart(product)} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Add to Cart</button>
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Product Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
