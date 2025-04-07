
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">BSNL SUPER</span>
              <span className="ml-1 text-2xl font-bold text-secondary"> WIFI VISION</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-800 hover:text-primary transition-colors duration-200">
                Home
              </Link>
              <Link to="/offers" className="text-gray-800 hover:text-primary transition-colors duration-200">
                Offers
              </Link>
              <Link to="/services" className="text-gray-800 hover:text-primary transition-colors duration-200">
                Services
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-primary transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-primary transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link to="/offers">
            <Button className="bg-primary hover:bg-primary-hover text-white">
              Get Started
            </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/offers" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Offers
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4 px-3">
              <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
