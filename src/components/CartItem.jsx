import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
const CartItemSkeleton = () => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200 animate-pulse">
    <div className="w-24 h-24 bg-gray-200 rounded-md mr-4 mb-4 sm:mb-0" />
    <div className="flex-1">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
      <div className="h-5 bg-gray-200 rounded w-1/4" />
    </div>
    <div className="mt-4 sm:mt-0">
      <div className="h-10 w-32 bg-gray-200 rounded-md" />
    </div>
    <div className="mt-4 sm:mt-0 ml-0 sm:ml-8">
      <div className="h-6 w-20 bg-gray-200 rounded" />
    </div>
  </div>
);

const CartItemError = ({ onRetry }) => (
  <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-md">
    <p className="text-red-600">Failed to load cart item</p>
    <button 
      onClick={onRetry}
      className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 focus:outline-none"
    >
      Retry
    </button>
  </div>
);

const QuantityBadge = ({ quantity }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
    Qty: {quantity}
  </span>
);

const PriceTag = ({ price }) => (
  <div className="flex items-center text-lg font-semibold text-gray-900">
    <span className="text-sm font-normal text-gray-500 mr-1">$</span>
    {price.toFixed(2)}
  </div>
);

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