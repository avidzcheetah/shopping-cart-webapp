import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to AvidzMart
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              Discover the latest tech products at amazing prices.
            </p>
            <div className="mt-8">
              <a
                href="#products"
                className="inline-block bg-white text-blue-700 py-3 px-8 rounded-md font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="products">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default HomePage;