import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/Logo.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 font-sans">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-100">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
        </div>
        
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li>
              <a href="#home" className="text-orange-400 font-semibold">Home</a>
            </li>
            <li>
              <a href="#shop" className="hover:text-orange-400 cursor-pointer">Shop</a>
            </li>
            <li>
              <a href="#categories" className="hover:text-orange-400 cursor-pointer">Categories</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 cursor-pointer">Contact</a>
            </li>
          </ul>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 rounded-xl px-4 py-2 text-sm text-gray-500 focus:outline-none w-[200px] lg:w-[300px] border-none shadow-sm pr-10"
              style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)' }}
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm w-7 h-7 flex items-center justify-center">
              <MagnifyingGlassIcon className="w-5 h-5 text-black" />
            </span>
          </div>
        </div>
        
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-700" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-4">
          <nav className="mb-4">
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>
                <a href="#home" className="block text-orange-400 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              </li>
              <li>
                <a href="#shop" className="block hover:text-orange-400 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Shop</a>
              </li>
              <li>
                <a href="#categories" className="block hover:text-orange-400 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Categories</a>
              </li>
              <li>
                <a href="#contact" className="block hover:text-orange-400 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </li>
            </ul>
          </nav>
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 rounded-xl px-4 py-2 text-sm text-gray-500 focus:outline-none w-full border-none shadow-sm pr-10"
              style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)' }}
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm w-7 h-7 flex items-center justify-center">
              <MagnifyingGlassIcon className="w-5 h-5 text-black" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar; 