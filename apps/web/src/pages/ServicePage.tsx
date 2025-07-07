import { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

interface Service {
  name: string;
  url: string;
  summary: string;
  featured?: boolean;
  image?: string;
  icon?: string;
  technologies: string[];
  slug: string;
  category: string[];
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects`)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to fetch services');
        return r.json();
      })
      .then((data) => {
        // Transform projects data to services format
        const transformedServices = data.map((project: any) => ({
          name: project.name,
          url: project.url,
          summary: project.summary,
          featured: project.award ? true : false,
          image: project.image,
          icon: project.logo,
          technologies: project.technologies || [],
          slug: project.slug,
          category: project.category || ["Development"]
        }));
        console.log(data)
        console.log(transformedServices);
        setServices(transformedServices);
        setFilteredServices(transformedServices);
        
        // Extract unique categories
        const categories = new Set<string>();
        transformedServices.forEach((service: Service) => {
          service.category.forEach((cat: string) => categories.add(cat));
        });
        setAvailableCategories(['All', ...Array.from(categories).sort()]);
        
        setLoading(false);
      })
      // .catch((err) => {
      //   console.error(err);
      //   setError('Failed to load services');
      //   setLoading(false);
      // });

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleServices(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observer.disconnect();
  }, []);

  // Filter services when category changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredServices(services);
    } else {
      const filtered = services.filter(service => 
        service.category.includes(selectedCategory)
      );
      setFilteredServices(filtered);
    }
    // Reset visible services when filter changes
    setVisibleServices([]);
  }, [selectedCategory, services]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Municipality':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
          </svg>
        );
      case 'Education':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
          </svg>
        );
      case 'Development':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      case 'All':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  if (loading) {
    return (
      <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A]">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-16 h-16 border-4 border-white/20 rounded-full animate-spin mx-auto"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-[#FFDE00] rounded-full animate-spin mx-auto border-t-transparent" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <div className="space-y-2">
              <p className="text-white text-xl font-semibold">Loading Services</p>
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-[#FFDE00] rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-[#FFDE00] rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-[#FFDE00] rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#1873D3]/5 to-transparent rounded-full animate-float"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#FFDE00]/5 to-transparent rounded-full animate-float-reverse"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative text-white py-20 sm:py-24 lg:py-32 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            {/* Multiple overlay layers for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/95 via-[#1237A1]/90 to-[#00017A]/95"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20 animate-fade-in">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-sm font-semibold tracking-wide">SMART CITY SOLUTIONS</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8 animate-slide-up">
                Building Tomorrow's{' '}
                <span className="block relative">
                  <span className="bg-gradient-to-r from-[#FFDE00] via-[#FFB900] to-[#FFDE00] text-transparent bg-clip-text animate-text-shimmer bg-300%">
                    Smart Cities
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] rounded-full transform scale-x-0 animate-scale-x"></div>
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                We collaborate with businesses and government agencies to create innovative digital solutions that transform urban infrastructure and enhance city living through cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] hover:from-[#FFB900] hover:to-[#FFDE00] text-[#00017A] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative">Start Your Project</span>
                  <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <button 
                  onClick={() => scrollToSection('services')}
                  className="group inline-flex items-center gap-3 border-2 border-white/80 text-white hover:bg-white hover:text-[#1873D3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <span>Explore Services</span>
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Highlight */}
        <section className="py-16 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] text-[#00017A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                Private & Public Sector Collaboration
              </h2>
              <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
                We bridge the gap between innovative technology and practical implementation, working alongside government agencies, municipalities, and private enterprises to create sustainable, intelligent urban solutions that improve quality of life for citizens.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  number: '50+', 
                  label: 'Smart Solutions Deployed', 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )
                },
                { 
                  number: '15', 
                  label: 'Government Partnerships', 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                    </svg>
                  )
                },
                { 
                  number: '1M+', 
                  label: 'Citizens Impacted', 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  )
                },
                { 
                  number: '24/7', 
                  label: 'Infrastructure Support', 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  )
                }
              ].map((stat, index) => (
                <div key={index} className="text-center group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-[#1873D3] mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-[#00017A] mb-2 group-hover:text-[#1873D3] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-[#1237A1] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block p-0.5 bg-gradient-to-r from-[#1873D3] to-[#FFDE00] rounded-full mb-6">
                <div className="bg-white px-6 py-2 rounded-full">
                  <span className="text-[#1237A1] font-semibold text-sm tracking-wide">OUR SOLUTIONS</span>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00017A] mb-6">
                Comprehensive Digital Ecosystem
              </h2>
              <p className="text-xl text-[#1237A1] max-w-3xl mx-auto leading-relaxed mb-12">
                From enterprise solutions to municipal infrastructure, we deliver technology that drives efficiency, sustainability, and innovation across public and private sectors.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {availableCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`group inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-[#1873D3] to-[#1237A1] text-white shadow-lg'
                        : 'bg-white/80 text-[#1237A1] border border-[#1873D3]/20 hover:bg-[#1873D3]/10 hover:border-[#1873D3]/40'
                    }`}
                  >
                    <span className="flex items-center justify-center">
                      {getCategoryIcon(category)}
                    </span>
                    <span>{category}</span>
                    {selectedCategory === category && (
                      <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
                        {category === 'All' ? filteredServices.length : filteredServices.length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="mb-12 p-6 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-red-800 font-semibold">{error}</p>
                    <p className="text-red-700 text-sm">Unable to load services</p>
                  </div>
                </div>
              </div>
            )}

            {filteredServices.length === 0 && !loading && !error ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-6 opacity-20">
                  <svg className="w-24 h-24 mx-auto text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#00017A] mb-4">
                  {selectedCategory === 'All' ? 'Smart Solutions Coming Soon' : `No ${selectedCategory} Solutions Available`}
                </h3>
                <p className="text-[#1237A1] text-lg">
                  {selectedCategory === 'All' 
                    ? "We're building the future of smart cities!" 
                    : `Try selecting a different category to see available solutions.`
                  }
                </p>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredServices.map((service, index) => (
                  <ServiceCard
                    key={`${service.slug}-${selectedCategory}`}
                    service={service}
                    index={index}
                    isVisible={visibleServices.includes(index)}
                  />
                ))}
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-20 relative">
              <div className="relative bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A] rounded-2xl p-10 lg:p-12 text-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 border border-white rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-48 h-48 border border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
                    Ready to Build the Future Together?
                  </h3>
                  <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Join us in creating smarter, more sustainable cities. Whether you're a government agency or private enterprise, let's collaborate to transform communities through innovative technology.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/contact" 
                      className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] hover:from-[#FFB900] hover:to-[#FFDE00] text-[#00017A] px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      <span>Get Consultation</span>
                      <svg className="w-5 h-5 group-hover:scale-105 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        /* Smooth and Simple Animations */
        @keyframes text-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes fade-up {
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
        
        @keyframes card-slide-up {
          from { 
            opacity: 0; 
            transform: translateY(50px);
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
        
        @keyframes pulse-gentle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.02);
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
        .animate-scale-x {
          animation: scale-x 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
        
        /* Enhanced Smooth Transitions for Cards */
        .group {
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .group:hover {
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Smooth button and interactive element transitions */
        button, a, .group/btn {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Enhanced hover transitions */
        .group:hover {
          transition-duration: 0.7s;
        }
        
        /* Enhanced transform transitions */
        img {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .transform {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Enhanced color transitions */
        .text-\\[\\#00017A\\], .text-\\[\\#1873D3\\], .text-\\[\\#1237A1\\] {
          transition: color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Enhanced background transitions */
        .bg-white, .bg-gradient-to-r {
          transition: background 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Enhanced shadow transitions */
        .shadow-lg, .shadow-xl, .hover\\:shadow-xl:hover, .hover\\:shadow-2xl:hover {
          transition: box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Enhanced opacity transitions */
        .opacity-0, .group-hover\\:opacity-100 {
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Performance optimizations */
        .group:hover img {
          will-change: transform;
        }
        
        .group:not(:hover) img {
          will-change: auto;
        }
        
        /* Hardware acceleration for smooth animations */
        .group, .animate-text-shimmer, .animate-fade-in, 
        .animate-fade-up, .animate-slide-up, 
        .animate-card-slide-up, .animate-pulse-gentle, 
        .animate-float, .animate-float-reverse {
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        /* Responsive animations */
        @media (max-width: 640px) {
          .animate-card-slide-up {
            animation-duration: 0.8s;
          }
          
          .animate-fade-in, .animate-fade-up, .animate-slide-up {
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
}