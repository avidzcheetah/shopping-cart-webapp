import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200 animate-fadeIn">
      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden mr-4 mb-4 sm:mb-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-blue-700 font-bold mt-1">${product.price.toFixed(2)}</p>
      </div>
      <div className="mt-4 sm:mt-0 flex items-center">
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 focus:outline-none text-gray-600"
          >
            <Minus size={16} />
          </button>
          <span className="px-3 py-1">{quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 focus:outline-none text-gray-600"
          >
            <Plus size={16} />
          </button>
        </div>
        <button
          onClick={() => removeFromCart(product.id)}
          className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
        >
          <Trash2 size={20} />
        </button>
      </div>
      <div className="mt-4 sm:mt-0 ml-0 sm:ml-8 font-bold text-right">
        ${(product.price * quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;