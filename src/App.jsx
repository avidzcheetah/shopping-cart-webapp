import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <CartProvider>
      <Router>
      <div className="min-h-screen bg-gray-50">
      <Navbar />
          <main>
            <Routes>
            </Routes>
          </main>
          <footer className="bg-white border-t border-gray-200 py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Avidu Witharana. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;