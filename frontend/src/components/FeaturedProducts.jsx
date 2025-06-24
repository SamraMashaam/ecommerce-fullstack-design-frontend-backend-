// src/components/FeaturedProducts.jsx
import React from 'react';

const products = [
  {
    name: 'Wireless Headphones',
    price: '$89.99',
    image: 'https://via.placeholder.com/300x200?text=Headphones',
  },
  {
    name: 'Smartwatch Series 5',
    price: '$129.00',
    image: 'https://via.placeholder.com/300x200?text=Smartwatch',
  },
  {
    name: '4K Action Camera',
    price: '$149.50',
    image: 'https://via.placeholder.com/300x200?text=Camera',
  },
  {
    name: 'Bluetooth Speaker',
    price: '$49.00',
    image: 'https://via.placeholder.com/300x200?text=Speaker',
  },
  {
    name: 'Gaming Keyboard',
    price: '$69.99',
    image: 'https://via.placeholder.com/300x200?text=Keyboard',
  },
  {
    name: 'Portable SSD 1TB',
    price: '$119.00',
    image: 'https://via.placeholder.com/300x200?text=SSD',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white hover:bg-blue-100 hover:text-blue-800 shadow rounded-lg overflow-hidden transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
