import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
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
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#1873D3]/3 to-transparent rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#FFDE00]/3 to-transparent rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A] text-white py-20 sm:py-24 lg:py-32 overflow-hidden">
          {/* Hero Background Animation */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFDE00]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFB900]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center" data-section="hero">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20 animate-fade-in">
                <div className="relative">
                  <span className="text-2xl animate-bounce">👥</span>
                  <div className="absolute inset-0 bg-[#FFDE00]/20 rounded-full blur animate-ping"></div>
                </div>
                <span className="text-sm font-semibold tracking-wide">ABOUT US</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8 animate-slide-up">
                About{' '}
                <span className="block relative">
                  <span className="bg-gradient-to-r from-[#FFDE00] via-[#FFB900] to-[#FFDE00] text-transparent bg-clip-text animate-gradient bg-300% animate-gradient-shift">
                    Project Elevate
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] rounded-full transform scale-x-0 animate-scale-x"></div>
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                A leading technology company dedicated to providing innovative solutions to businesses of all sizes. Founded in 2020, we have a proven track record of delivering excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '4+', label: 'Years of Excellence' },
                { number: '100+', label: 'Projects Delivered' },
                { number: '50+', label: 'Happy Clients' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl lg:text-4xl font-black text-[#00017A] mb-2 group-hover:text-[#1873D3] transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-[#1237A1] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700 ${
              visibleSections.includes('mission') ? 'animate-slide-in-up' : 'opacity-0'
            }`} data-section="mission">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/5 to-[#FFDE00]/5"></div>
              <div className="relative p-8 lg:p-16">
                <div className="text-center mb-8">
                  <div className="inline-block p-1 bg-gradient-to-r from-[#1873D3] to-[#FFDE00] rounded-full mb-6">
                    <div className="bg-white px-6 py-2 rounded-full">
                      <span className="text-[#1237A1] font-semibold text-sm tracking-wide">OUR MISSION</span>
                    </div>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black text-[#00017A] mb-6">
                    Our Mission
                  </h2>
                </div>
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-xl text-[#1237A1] leading-relaxed">
                    To be the catalyst for digital transformation, empowering businesses with innovative technology solutions that drive growth, efficiency, and success in the ever-evolving digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-section="values">
              <div className="inline-block p-1 bg-gradient-to-r from-[#1873D3] to-[#FFDE00] rounded-full mb-6">
                <div className="bg-white px-6 py-2 rounded-full">
                  <span className="text-[#1237A1] font-semibold text-sm tracking-wide">OUR VALUES</span>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-[#00017A] mb-6">
                What Drives Us
              </h2>
              <p className="text-xl text-[#1237A1] max-w-3xl mx-auto">
                Our core values guide every decision we make and every solution we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Client-Centric",
                  description: "We prioritize our clients' needs and strive to exceed their expectations.",
                  icon: (
                    <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
                    </svg>
                  )
                },
                {
                  title: "Integrity",
                  description: "We uphold the highest ethical standards in all our interactions.",
                  icon: (
                    <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" />
                    </svg>
                  )
                },
                {
                  title: "Innovation",
                  description: "We embrace creativity and continuously seek new and improved solutions.",
                  icon: (
                    <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" />
                    </svg>
                  )
                },
                {
                  title: "Collaboration",
                  description: "We foster a collaborative environment to achieve shared goals.",
                  icon: (
                    <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <div 
                  key={value.title}
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                    visibleSections.includes('values') ? 'animate-slide-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/5 to-[#FFDE00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1873D3] to-[#1237A1] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#00017A] mb-4 group-hover:text-[#1873D3] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-[#1237A1] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-section="team">
              <div className="inline-block p-1 bg-gradient-to-r from-[#1873D3] to-[#FFDE00] rounded-full mb-6">
                <div className="bg-white px-6 py-2 rounded-full">
                  <span className="text-[#1237A1] font-semibold text-sm tracking-wide">OUR TEAM</span>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-[#00017A] mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-[#1237A1] max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions and exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {[
                {
                  name: "Fakhair Spence",
                  role: "Co-Founder | CEO",
                  image: "/src/assets/fakhair.jpeg"
                },
                {
                  name: "Anthony Caruso",
                  role: "Co-Founder | CTO",
                  image: "/src/assets/anthony.jpeg"
                },
                {
                  name: "Jiyan Bhalara",
                  role: "Full Stack Developer",
                  image: "/src/assets/jiyan.jpeg"
                }
              ].map((member, index) => (
                <div 
                  key={member.name}
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 ${
                    visibleSections.includes('team') ? 'animate-slide-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/5 to-[#FFDE00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto relative">
                        <img
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300"
                          src={member.image}
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1873D3]/20 to-[#FFDE00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#00017A] mb-2 group-hover:text-[#1873D3] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#1237A1] font-medium mb-4">
                      {member.role}
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] rounded-full mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl lg:text-5xl font-black mb-6">
              Ready to Work With Us?
            </h3>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] hover:from-[#FFB900] hover:to-[#FFDE00] text-[#00017A] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <span>Get In Touch</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <Link to="/portfolio" className="group inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#1873D3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <span>View Portfolio</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
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
        
        @keyframes slide-in-up {
          from { 
            opacity: 0; 
            transform: translateY(60px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out 1s forwards;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;