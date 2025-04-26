import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <Link 
            to={`/product/${product.id}`}
            className="bg-white text-blue-700 p-2 rounded-full hover:bg-blue-700 hover:text-white transition-colors duration-300"
            title="View details"
          >
            <Eye size={20} />
          </Link>
          <button 
            onClick={() => addToCart(product)} 
            className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors duration-300"
            title="Add to cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-blue-600 font-medium">{product.category}</p>
        <h3 className="text-lg font-semibold mt-1 text-gray-800">{product.name}</h3>
        <div className="mt-2 flex justify-between items-center">
          <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
          <button 
            onClick={() => addToCart(product)}
            className="text-sm px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;