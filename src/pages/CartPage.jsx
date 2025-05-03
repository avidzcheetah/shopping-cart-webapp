import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-16">
          <ShoppingBag className="mx-auto h-16 w-16 text-gray-400" />
          <h2 className="mt-4 text-2xl font-medium text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-500">Looks like you haven't added any products to your cart yet.</p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Your Shopping Cart</h1>
      
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6">
              <div className="hidden sm:flex py-4 border-b border-gray-200 text-sm font-medium text-gray-500">
                <div className="flex-1 sm:w-1/3">Product</div>
                <div className="w-1/3 text-right sm:text-center">Quantity</div>
                <div className="w-1/3 text-right">Subtotal</div>
              </div>
              <div>
                {cart.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>
            <div className="px-6 py-4 flex justify-between">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 font-medium text-sm focus:outline-none"
              >
                Clear Cart
              </button>
              <Link
                to="/"
                className="text-blue-700 hover:text-blue-900 font-medium text-sm focus:outline-none flex items-center"
              >
                Continue Shopping <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${(getCartTotal() * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-4 font-bold text-lg">
                <span>Total</span>
                <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="mt-4 w-full block text-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;