import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onLinkedInClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkedInClick }) => {
  const handleLinkedInClick = () => {
    if (onLinkedInClick) {
      onLinkedInClick();
    } else {
      window.open('https://www.linkedin.com/company/project-elevate-ai/posts/?feedView=all', '_blank', 'noopener,noreferrer');
    }
  };

  const handleNavigation = (path: string) => {
    // For demo purposes, we'll just log the navigation
    console.log(`Navigating to: ${path}`);
    // In a real app with React Router, you would use:
    // navigate(path);
  };

  return (
    <footer className="bg-[#00017A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-[#FFDE00]">
              Project Elevate
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with innovative technology solutions that drive growth, efficiency, and success in the digital landscape.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                aria-label="Twitter"
                className="w-10 h-10 bg-white/10 hover:bg-[#FFDE00] hover:text-[#00017A] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/10 hover:bg-[#FFDE00] hover:text-[#00017A] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                onClick={handleLinkedInClick}
              >
                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="GitHub"
                className="w-10 h-10 bg-white/10 hover:bg-[#FFDE00] hover:text-[#00017A] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to = "/" 
                  onClick={() => handleNavigation('/')}
                  className="text-gray-300 hover:text-[#FFDE00] transition-colors text-left w-full"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to = "/services" 
                  onClick={() => handleNavigation('/#services')}
                  className="text-gray-300 hover:text-[#FFDE00] transition-colors text-left w-full"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to = "/portfolio" 
                  onClick={() => handleNavigation('/portfolio')}
                  className="text-gray-300 hover:text-[#FFDE00] transition-colors text-left w-full"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to = "/about" 
                  onClick={() => handleNavigation('/about')}
                  className="text-gray-300 hover:text-[#FFDE00] transition-colors text-left w-full"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to = "/contact" 
                  onClick={() => handleNavigation('/contact')}
                  className="text-gray-300 hover:text-[#FFDE00] transition-colors text-left w-full"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contact & Legal</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">
                <strong className="text-white">Address:</strong><br />
                211 Warren St<br />
                Newark, NJ 07103
              </li>
              <li className="text-gray-300 text-sm">
                <strong className="text-white">Phone:</strong><br />
                +1 (862) 703-8194
              </li>
              <li className="text-gray-300 text-sm">
                <strong className="text-white">Email:</strong><br />
                info@projectelevate.us
              </li>
              <li className="pt-3 border-t border-gray-600">
                <button 
                  type="button"
                  className="text-gray-300 hover:text-[#FFDE00] transition-colors text-sm text-left w-full mb-2"
                >
                  Privacy Policy
                </button>
                <button 
                  type="button"
                  className="text-gray-300 hover:text-[#FFDE00] transition-colors text-sm text-left w-full"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 mb-2">
                © 2024 Project Elevate. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Empowering businesses with innovative technology solutions.
              </p>
            </div>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;