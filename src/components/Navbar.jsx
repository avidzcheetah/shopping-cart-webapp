import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { getCartCount } = useCart();
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-700">
              AvidzMart
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/' ? 'text-blue-700' : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                Products
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-blue-700">
              <ShoppingCart className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;