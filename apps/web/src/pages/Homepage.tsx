import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
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
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col bg-white" style={{ fontFamily: "'Inter', 'Work Sans', 'Noto Sans', sans-serif" }}>

        <main className="flex flex-1 flex-col">
          
          {/* Hero Section */}
          <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FFDE00]/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-[#FFB900]/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                  <span className="text-2xl">🚀</span>
                  <span className="text-white font-medium">Project Elevate</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-6">
                  Elevate Your Business with
                  <span className="block bg-gradient-to-r from-[#FFDE00] to-[#FFB900] text-transparent bg-clip-text">
                    Innovative Solutions
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10">
                  We are a team of experienced professionals dedicated to providing cutting-edge technology solutions that help businesses thrive in today's competitive digital landscape.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleExploreServices}
                  className="group relative inline-flex items-center gap-3 bg-[#FFDE00] hover:bg-[#FFB900] text-[#00017A] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Explore Our Services</span>
                  <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFB900] to-[#FFDE00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={handleGetStarted}
                  className="group inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#1873D3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <span>Get Started</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-[#1873D3]/10 text-[#1873D3] rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  <span>💡</span>
                  <span>Our Mission</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00017A] mb-8 leading-tight">
                  Empowering Digital 
                  <span className="block text-[#1873D3]">Transformation</span>
                </h2>
                <p className="text-xl sm:text-2xl text-[#1237A1] leading-relaxed max-w-3xl mx-auto">
                  At Project Elevate, our mission is to empower businesses with innovative technology solutions that drive growth, efficiency, and success. We are committed to delivering exceptional results through our expertise, creativity, and client-centric approach.
                </p>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-20 lg:py-28 bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FFDE00]/20 to-transparent"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  <span>📊</span>
                  <span>Our Impact</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Proven Track Record of
                  <span className="block bg-gradient-to-r from-[#FFDE00] to-[#FFB900] text-transparent bg-clip-text">
                    Excellence
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Numbers that showcase our commitment to delivering exceptional results for our clients.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: "🏆", label: "Projects Completed", value: "150+", description: "Successfully delivered projects" },
                  { icon: "😊", label: "Client Satisfaction", value: "98%", description: "Happy clients who trust us" },
                  { icon: "🥇", label: "Industry Awards", value: "10+", description: "Recognition for excellence" }
                ].map((stat, index) => (
                  <div key={index} className="group text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-5xl font-bold text-[#FFDE00] mb-2">
                        {stat.value}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
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
          <section id="expertise" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-[#1873D3]/10 text-[#1873D3] rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  <span>⚡</span>
                  <span>Our Services</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#00017A] mb-6">
                  Comprehensive Digital
                  <span className="block text-[#1873D3]">Expertise</span>
                </h2>
                <p className="text-xl text-[#1237A1] max-w-3xl mx-auto leading-relaxed">
                  We specialize in a comprehensive range of services designed to meet the evolving needs of modern businesses in the digital age.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "📊",
                    title: "Strategic Consulting",
                    description: "Expert guidance to align technology with business goals and drive sustainable growth.",
                    features: ["Digital Strategy", "Technology Roadmaps", "Business Analysis", "ROI Optimization"]
                  },
                  {
                    icon: "💻",
                    title: "Custom Software Development",
                    description: "Tailored software solutions built to address your unique business challenges and requirements.",
                    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"]
                  },
                  {
                    icon: "🌐",
                    title: "Digital Transformation",
                    description: "Comprehensive transformation services to help businesses adapt and thrive in the digital landscape.",
                    features: ["Process Automation", "Cloud Migration", "Data Analytics", "Digital Workflows"]
                  }
                ].map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full">
                      <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[#00017A] mb-4">
                        {service.title}
                      </h3>
                      <p className="text-[#1237A1] text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-[#1237A1]">
                            <div className="w-2 h-2 bg-[#FFDE00] rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <div className="inline-flex items-center gap-2 text-[#1873D3] font-semibold group-hover:gap-3 transition-all duration-300">
                          <span>Learn More</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1873D3]/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-t from-[#FFDE00]/10 to-transparent"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-[#1873D3]/10 text-[#1873D3] rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  <span>🚀</span>
                  <span>Let's Work Together</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#00017A] mb-6">
                  Ready to Elevate
                  <span className="block bg-gradient-to-r from-[#1873D3] to-[#1237A1] text-transparent bg-clip-text">
                    Your Business?
                  </span>
                </h2>
                <p className="text-xl text-[#1237A1] leading-relaxed mb-12 max-w-2xl mx-auto">
                  Join our satisfied clients and let us help you transform your business with innovative digital solutions. Contact us today to discuss your project.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center gap-3 bg-[#1873D3] hover:bg-[#1237A1] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                  >
                    <span>Start Your Project</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </Link>
                  <Link 
                    to="/portfolio"
                    className="group inline-flex items-center gap-3 border-2 border-[#1873D3] text-[#1873D3] hover:bg-[#1873D3] hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span>View Our Work</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </Link>
                </div>
                
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  {[
                    { icon: "⚡", text: "Fast Response" },
                    { icon: "💯", text: "Quality Assured" },
                    { icon: "🤝", text: "Long-term Support" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-3 text-[#1237A1]">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;