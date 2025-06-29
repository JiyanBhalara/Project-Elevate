import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-[#1873D3]/20' 
          : 'bg-white/90 backdrop-blur-lg border-b border-[#1873D3]/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <Link to = "/"className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3] to-[#1237A1] rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"></div>
                <img 
                  src="./src/assets/logo2.jpg" 
                  alt="Project Elevate Logo" 
                  className="relative w-full h-full object-contain rounded-xl z-10"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    const nextSibling = target.nextElementSibling as HTMLElement;
                    if (target && nextSibling) {
                      target.style.display = 'none';
                      nextSibling.style.display = 'block';
                    }
                  }}
                />
                <div className="relative w-full h-full bg-gradient-to-br from-[#1873D3] to-[#1237A1] rounded-xl hidden items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#00017A] text-lg lg:text-xl font-black leading-tight tracking-tight group-hover:text-[#1873D3] transition-colors">
                  Project Elevate
                </span>
                <span className="text-[#1237A1] text-xs font-medium hidden sm:block">
                  Elevated Thinking
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  to = {item.path}
                  key={item.name}
                  className="relative text-[#00017A] hover:text-[#1873D3] text-sm font-semibold leading-normal transition-all duration-300 group py-2"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1873D3] to-[#FFDE00] group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link
                to = "/contact"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#1873D3] to-[#1237A1] hover:from-[#1237A1] hover:to-[#00017A] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative">Get Started</span>
                <svg className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              type="button"
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-[#00017A] hover:text-[#1873D3] bg-gradient-to-br from-[#1873D3]/5 to-[#FFDE00]/5 hover:from-[#1873D3]/10 hover:to-[#FFDE00]/10 rounded-xl transition-all duration-300 transform hover:scale-105"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-[#1873D3]/10 shadow-xl">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <div className="flex flex-col gap-4">
                {[
                  { name: 'Home', path: '/', icon: '🏠' },
                  { name: 'About', path: '/about', icon: '👥' },
                  { name: 'Services', path: '/services', icon: '⚡' },
                  { name: 'Portfolio', path: '/portfolio', icon: '🚀' },
                  { name: 'Contact', path: '/contact', icon: '📞' }
                ].map((item, index) => (
                  <Link
                    to = {item.path}
                    key={item.name}
                    className="group flex items-center gap-4 text-[#00017A] hover:text-[#1873D3] text-base font-semibold leading-normal transition-all duration-300 p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#1873D3]/5 hover:to-[#FFDE00]/5 text-left transform hover:scale-105"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#1873D3]/10 to-[#FFDE00]/10 rounded-lg flex items-center justify-center group-hover:from-[#1873D3]/20 group-hover:to-[#FFDE00]/20 transition-all duration-300">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <span className="flex-1">{item.name}</span>
                    <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-[#1873D3]/10 mt-2">
                  <Link
                    to = "/contact"
                    className="group w-full relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#1873D3] to-[#1237A1] hover:from-[#1237A1] hover:to-[#00017A] text-white px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative">Get Started Today</span>
                    <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                {/* Contact Info */}
                <div className="pt-4 border-t border-[#1873D3]/10 mt-4">
                  <div className="text-center space-y-2">
                    <p className="text-[#1237A1] text-sm font-medium">Ready to start your project?</p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center text-xs text-[#00017A]">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        info@projectelevate.com
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +1 (862) 703-8194
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-20"></div>

      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-down {
          animation: slideInDown 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;