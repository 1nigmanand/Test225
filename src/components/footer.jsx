import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { LinkedinIcon, TwitterIcon, FacebookIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Schollers Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Schollers</h3>
            <p className="text-gray-400">Transforming education through artificial intelligence.</p>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/products" className="hover:text-blue-500">SAI Platform</Link>
              </li>
              <li>
                <Link to="/ai-analytics" className="hover:text-blue-500">AI Analytics</Link>
              </li>
              <li>
                <Link to="/custom-solutions" className="hover:text-blue-500">Custom Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-blue-500">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-500">Careers</Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-blue-500">Contact</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-500">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/refund-cancellation" className="hover:text-blue-500">Refund & Cancellation</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-2xl">
              <a href="https://www.linkedin.com" className="hover:text-blue-500 transition" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={24} />
              </a>
              <a href="https://www.twitter.com" className="hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">
                <TwitterIcon size={24} />
              </a>
              <a href="https://www.facebook.com" className="hover:text-blue-600 transition" target="_blank" rel="noopener noreferrer">
                <FacebookIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
