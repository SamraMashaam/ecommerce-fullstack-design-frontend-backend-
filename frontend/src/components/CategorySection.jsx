// src/components/CategorySection.jsx
import React from 'react';

const categories = [
  { name: 'Electronics', icon: 'https://img.icons8.com/ios/100/laptop.png' },
  { name: 'Fashion', icon: 'https://img.icons8.com/ios/100/t-shirt.png' },
  { name: 'Furniture', icon: 'https://img.icons8.com/ios/100/sofa.png' },
  { name: 'Beauty', icon: 'https://img.icons8.com/ios/100/lipstick.png' },
  { name: 'Toys', icon: 'https://img.icons8.com/ios/100/teddy-bear.png' },
  { name: 'Groceries', icon: 'https://img.icons8.com/?size=100&id=AgpNCyq2TYrv&format=png&color=000000' },
];

export default function CategorySection() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white hover:bg-blue-200 hover:text-blue-800 shadow rounded-xl p-4 transition-all duration-300"
          >
            <img src={cat.icon} alt={cat.name} className="h-16 w-16 object-contain mb-2" />
            <span className="text-sm font-medium">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
