import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';



export default function ProductListing() {
  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState('grid'); // 'grid' or 'list'
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const search = query.get('search')?.toLowerCase() || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        let filtered = res.data;

        if (search) {
          filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(search)
          );
        }

        setProducts(filtered);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchProducts();
  }, [search]);


  return (
    <div>
      <Header />

      {/* Main layout */}
      <section className="px-4 py-6 flex flex-col md:flex-row gap-6">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white p-4 shadow rounded space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="font-bold mb-2">Categories</h3>
            <div className="space-y-1">
              <label className="block"><input type="checkbox" className="mr-2" /> Electronics</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Fashion</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Furniture</label>
              <label className="block"><input type="checkbox" className="mr-2" /> Toys</label>
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-bold mb-2">Price Range</h3>
            <div className="flex gap-2">
              <input type="number" placeholder="Min" className="w-1/2 px-2 py-1 border border-gray-300 rounded" />
              <input type="number" placeholder="Max" className="w-1/2 px-2 py-1 border border-gray-300 rounded" />
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="font-bold mb-2">Customer Rating</h3>
            <div className="space-y-1">
              <label className="block"><input type="radio" name="rating" className="mr-2" /> 4★ & above</label>
              <label className="block"><input type="radio" name="rating" className="mr-2" /> 3★ & above</label>
              <label className="block"><input type="radio" name="rating" className="mr-2" /> All Ratings</label>
            </div>
          </div>
        </aside>

        {/* Products Section */}
        <div className="flex-1">
          {/* Layout Toggle Buttons */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">All Products</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setLayout('grid')}
                className={`px-3 py-1 rounded ${layout === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                Grid
              </button>
              <button
                onClick={() => setLayout('list')}
                className={`px-3 py-1 rounded ${layout === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                List
              </button>
            </div>
          </div>

          {/* Product Cards */}
          <div className={`grid ${layout === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' : 'grid-cols-1 gap-4'}`}>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} layout={layout} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
