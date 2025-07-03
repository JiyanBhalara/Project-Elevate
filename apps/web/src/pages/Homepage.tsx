import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section') || '';
            setVisibleSections(prev => [...prev, sectionId]);
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    scrollToSection('expertise');
  };

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#1873D3]/5 to-transparent rounded-full animate-float"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#FFDE00]/5 to-transparent rounded-full animate-float-reverse"></div>
      </div>

      <div className="relative z-10">
        <main className="flex flex-1 flex-col">
          
          {/* Hero Section */}
          <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              {/* Minimal floating elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FFDE00]/8 rounded-full blur-xl animate-pulse-gentle"></div>
              <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-[#FFB900]/6 rounded-full blur-2xl animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/4 rounded-full blur-lg animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Enhanced Logo Section */}
              <div className="mb-12 animate-fade-in">
                <div className="relative inline-block group">
                  {/* Simplified Logo Container */}
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFDE00] via-[#FFB900] to-[#FFDE00] animate-spin-slow opacity-60"></div>
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A]"></div>
                    
                    <div className="absolute inset-2 rounded-full overflow-hidden bg-white shadow-2xl">
                      <img 
                        src="/src/assets/logo.png" 
                        alt="Project Elevate Logo" 
                        className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-all duration-500"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          const target = e.target as HTMLImageElement;
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1873D3] to-[#1237A1] text-white text-2xl font-bold">
                                PE
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    
                    <div className="absolute inset-0 rounded-full bg-[#FFDE00]/15 animate-pulse-gentle"></div>
                  </div>
                  
                  {/* Professional Brand Badge */}
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <svg className="w-4 h-4 text-[#FFDE00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                    </svg>
                    <span className="text-white font-semibold tracking-wide text-sm lg:text-base">PROJECT ELEVATE</span>
                    <svg className="w-4 h-4 text-[#FFDE00]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Hero Content */}
                <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-8">
                    Building Tomorrow's
                    <span className="block bg-gradient-to-r from-[#FFDE00] via-[#FFB900] to-[#FFDE00] text-transparent bg-clip-text animate-text-shimmer bg-300%">
                      Smart Cities
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
                    We collaborate with businesses, governments, and municipalities to create AI-enhanced smart city solutions that transform urban infrastructure and make life better for everyone.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                <button
                  onClick={handleExploreServices}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] hover:from-[#FFB900] hover:to-[#FFDE00] text-[#00017A] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative">Explore Smart Solutions</span>
                  <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <Link
                  to="/contact"
                  onClick={handleGetStarted}
                  className="group inline-flex items-center gap-3 border-2 border-white/80 text-white hover:bg-white hover:text-[#1873D3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 backdrop-blur-sm"
                >
                  <span>Start Your Project</span>
                  <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Smooth Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse-gentle"></div>
              </div>
            </div>
          </section>
          
          {/* Mission Section */}
          <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" data-section="contact">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1873D3]/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-t from-[#FFDE00]/10 to-transparent"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ${
                visibleSections.includes('contact') ? 'animate-fade-in-up' : 'opacity-0'
              }`}>
                <div className="inline-block p-1 bg-gradient-to-r from-[#1873D3] to-[#FFDE00] rounded-full mb-6">
                  <div className="bg-white px-6 py-3 rounded-full flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#1237A1]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#1237A1] font-semibold text-sm tracking-wide">OUR MISSION</span>
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00017A] mb-8 leading-tight">
                  Making Cities 
                  <span className="block bg-gradient-to-r from-[#1873D3] to-[#1237A1] text-transparent bg-clip-text">
                    Better Places to Live
                  </span>
                </h2>
                <p className="text-xl sm:text-2xl text-[#1237A1] leading-relaxed max-w-3xl mx-auto">
                  We partner with governments, municipalities, and businesses to deliver AI-enhanced smart city solutions that transform urban infrastructure, improve citizen services, and create sustainable, technology-driven communities.
                </p>
              </div>
            </div>
          </section>
          
          {/* Impact Section */}
          <section id="achievements" className="py-20 lg:py-32 bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A] text-white relative overflow-hidden" data-section="achievements">
            {/* Minimal Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFDE00]/20 rounded-full blur-3xl animate-pulse-gentle"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFB900]/20 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`text-center mb-16 transform transition-all duration-700 ${
                visibleSections.includes('achievements') ? 'animate-fade-in-up' : 'opacity-0'
              }`}>
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white rounded-full px-6 py-3 text-sm font-semibold mb-6 border border-white/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <span className="tracking-wide">OUR IMPACT</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8">
                  Transforming Communities
                  <span className="block bg-gradient-to-r from-[#FFDE00] via-[#FFB900] to-[#FFDE00] text-transparent bg-clip-text animate-text-shimmer bg-300%">
                    Worldwide
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Real impact through innovative smart city solutions and government partnerships.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                    ),
                    label: "Smart Cities Deployed", 
                    value: "50+", 
                    description: "AI-enhanced urban solutions" 
                  },
                  { 
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    ),
                    label: "Citizens Impacted", 
                    value: "2M+", 
                    description: "Lives improved through technology" 
                  },
                  { 
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ),
                    label: "Government Partnerships", 
                    value: "25+", 
                    description: "Municipal collaborations" 
                  }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className={`group transform transition-all duration-700 ${
                      visibleSections.includes('achievements') ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl h-full">
                      <div className="text-[#FFDE00] mb-6 transform group-hover:scale-110 transition-all duration-300 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-5xl font-black text-[#FFDE00] mb-4 group-hover:text-[#FFB900] transition-colors duration-300">
                        {stat.value}
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        {stat.label}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section id="expertise" className="py-20 lg:py-32 bg-white" data-section="expertise">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`text-center mb-16 transform transition-all duration-700 ${
                visibleSections.includes('expertise') ? 'animate-fade-in-up' : 'opacity-0'
              }`}>
                <div className="inline-block p-1 bg-gradient-to-r from-[#1873D3] to-[#FFDE00] rounded-full mb-6">
                  <div className="bg-white px-6 py-3 rounded-full flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#1237A1]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#1237A1] font-semibold text-sm tracking-wide">OUR SOLUTIONS</span>
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00017A] mb-8">
                  AI-Enhanced Smart City
                  <span className="block bg-gradient-to-r from-[#1873D3] to-[#1237A1] text-transparent bg-clip-text">
                    Solutions
                  </span>
                </h2>
                <p className="text-xl text-[#1237A1] max-w-3xl mx-auto leading-relaxed">
                  We deliver comprehensive technology solutions that transform cities into intelligent, sustainable, and citizen-centric environments.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                      </svg>
                    ),
                    title: "Smart Infrastructure",
                    description: "AI-powered infrastructure management systems that optimize traffic flow, energy consumption, and public utilities for sustainable urban development.",
                    features: ["Traffic Management", "Energy Optimization", "Utility Monitoring", "Predictive Maintenance"]
                  },
                  {
                    icon: (
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    ),
                    title: "Digital Government Services",
                    description: "Modern digital platforms that streamline government operations, enhance citizen engagement, and improve public service delivery.",
                    features: ["Citizen Portals", "E-Government", "Digital Services", "Process Automation"]
                  },
                  {
                    icon: (
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                      </svg>
                    ),
                    title: "Data-Driven Insights",
                    description: "Advanced analytics and AI solutions that provide actionable insights for informed decision-making and evidence-based policy development.",
                    features: ["Real-time Analytics", "Predictive Modeling", "Smart Dashboards", "Performance Metrics"]
                  }
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className={`group transform transition-all duration-700 ${
                      visibleSections.includes('expertise') ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/5 via-transparent to-[#FFDE00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative">
                        <div className="text-[#1873D3] mb-6 transform group-hover:scale-110 transition-all duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-black text-[#00017A] mb-4 group-hover:text-[#1873D3] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-[#1237A1] text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-[#1237A1] group-hover:text-[#00017A] transition-colors duration-300">
                              <div className="w-2 h-2 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="inline-flex items-center gap-2 text-[#1873D3] font-bold group-hover:gap-3 transition-all duration-300 cursor-pointer">
                          <span>Learn More</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50" data-section="mission">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`text-center max-w-4xl mx-auto transform transition-all duration-700 ${
                visibleSections.includes('mission') ? 'animate-fade-in-up' : 'opacity-0'
              }`}>
                <div className="inline-block p-1 bg-gradient-to-r from-[#1873D3] to-[#FFDE00] rounded-full mb-6">
                  <div className="bg-white px-6 py-3 rounded-full flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#1237A1]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#1237A1] font-semibold text-sm tracking-wide">LET'S BUILD THE FUTURE</span>
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00017A] mb-8">
                  Ready to Transform
                  <span className="block bg-gradient-to-r from-[#1873D3] to-[#1237A1] text-transparent bg-clip-text">
                    Your Community?
                  </span>
                </h2>
                <p className="text-xl text-[#1237A1] leading-relaxed mb-12 max-w-2xl mx-auto">
                  Partner with us to create smarter, more sustainable cities. Let's collaborate on innovative solutions that enhance urban living and improve citizen experiences.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <Link
                    to="/contact" 
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#1873D3] to-[#1237A1] hover:from-[#1237A1] hover:to-[#00017A] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative">Start Your Project</span>
                    <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </Link>
                  <Link 
                    to="/services"
                    className="group inline-flex items-center gap-3 border-2 border-[#1873D3] text-[#1873D3] hover:bg-[#1873D3] hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105"
                  >
                    <span>View Services</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  {[
                    { 
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      ),
                      text: "Rapid Deployment", 
                      subtext: "Fast implementation" 
                    },
                    { 
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ),
                      text: "Proven Results", 
                      subtext: "Success guaranteed" 
                    },
                    { 
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      ),
                      text: "24/7 Support", 
                      subtext: "Continuous partnership" 
                    }
                  ].map((item, index) => (
                    <div key={index} className="group flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                      <div className="text-[#1873D3] group-hover:scale-110 group-hover:text-[#1237A1] transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="text-center">
                        <span className="font-bold text-[#00017A] block">{item.text}</span>
                        <span className="text-sm text-[#1237A1]">{item.subtext}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
        </main>
      </div>

      <style>{`
        /* Smooth and minimal animations */
        @keyframes text-shimmer {
          0%, 100% { background-position: 0% 50x%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.02);
          }
        }
        
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-8px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
        
        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(10px) rotate(-180deg);
          }
        }
        
        /* Animation Classes */
        .animate-text-shimmer {
          animation: text-shimmer 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-slide-up {
          animation: slide-up 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 12s ease-in-out infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
        
        /* Enhanced Smooth Transitions */
        * {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .group {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .group:hover {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        button, a {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Transform transitions */
        img {
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .transform {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Color transitions */
        .text-\\[\\#00017A\\], .text-\\[\\#1873D3\\], .text-\\[\\#1237A1\\] {
          transition: color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Background transitions */
        .bg-white, .bg-gradient-to-r {
          transition: background 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Shadow transitions */
        .shadow-lg, .shadow-xl, .hover\\:shadow-xl:hover, .hover\\:shadow-2xl:hover {
          transition: box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Opacity transitions */
        .opacity-0 {
          transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Hardware acceleration for smooth animations */
        .group, .animate-text-shimmer, .animate-fade-in, 
        .animate-fade-in-up, .animate-slide-up, 
        .animate-pulse-gentle, .animate-float, .animate-float-reverse {
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        /* Performance optimizations */
        .group:hover img {
          will-change: transform;
        }
        
        .group:not(:hover) img {
          will-change: auto;
        }
        
        /* Responsive animations */
        @media (max-width: 640px) {
          .animate-fade-in-up, .animate-slide-up {
            animation-duration: 1s;
          }
          
          /* Reduce motion for mobile accessibility */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage