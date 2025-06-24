import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, layout = 'grid' }) {
  const isGrid = layout === 'grid';

  return (
    <Link to={`/products/${product._id}`} className="block">
      <div className={`flex ${isGrid ? 'flex-col' : 'flex-row'} bg-white hover:bg-blue-100 hover:text-blue-800 shadow rounded overflow-hidden transition-all duration-300`}>
        <img
          src={product.image}
          alt={product.name}
          className={`${isGrid ? 'h-48 w-full' : 'w-48 h-48'} object-cover`}
        />
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-blue-600 font-bold">{product.price}</p>
          </div>
          <p className="text-sm text-yellow-500 mt-2">⭐ {product.rating} rating</p>
        </div>
      </div>
    </Link>
  );
}
