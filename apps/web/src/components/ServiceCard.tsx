import { Link } from 'react-router-dom';

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

interface ServiceCardProps {
  service: Service;
  index: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isVisible }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Development':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      case 'Smart Cities':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        );
      case 'Infrastructure':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path fillRule="evenodd" d="M3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'Analytics':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
        );
      case 'Municipality':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        );
      case 'Education':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
        );
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Municipality':
        return 'from-blue-500 to-blue-600 text-white';
      case 'Education':
        return 'from-green-500 to-green-600 text-white';
      case 'Development':
        return 'from-purple-500 to-purple-600 text-white';
      case 'Smart Cities':
        return 'from-indigo-500 to-indigo-600 text-white';
      case 'Infrastructure':
        return 'from-gray-500 to-gray-600 text-white';
      case 'Analytics':
        return 'from-orange-500 to-orange-600 text-white';
      default:
        return 'from-[#1873D3] to-[#1237A1] text-white';
    }
  };

  return (
    <>
      <article
        data-index={index}
        className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-100 hover:border-[#1873D3]/20 ${
          isVisible ? 'animate-card-slide-up' : ''
        }`}
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        <div className={`lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          {/* Service Visual */}
          <div className="lg:w-2/5 relative overflow-hidden">
            <div className="aspect-video lg:aspect-auto lg:h-full relative bg-gradient-to-br from-[#1873D3]/5 to-[#FFDE00]/5">
              {service.image ? (
                <img
                  src={service.image}
                  alt={`${service.name} illustration`}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#1873D3] mb-4 opacity-60 flex justify-center">
                    
                    </div>
                    <div className="text-[#1237A1] font-semibold opacity-60">{service.category}</div>
                  </div>
                </div>
              )}
              
              {/* Smooth overlay with fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00017A]/0 via-transparent to-transparent group-hover:from-[#00017A]/20 transition-all duration-700 ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/0 to-[#FFDE00]/0 group-hover:from-[#1873D3]/10 group-hover:to-[#FFDE00]/10 transition-all duration-700 ease-out"></div>
              
              {/* Featured Badge with smooth fade */}
              {service.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] text-[#00017A] px-3 py-1 rounded-full text-sm font-bold shadow-lg transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-xl">
                  Featured
                </div>
              )}
            </div>
          </div>

          {/* Service Content */}
          <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-[#FFDE00] rounded-full"></div>
                <span className="text-[#1237A1] text-sm font-semibold tracking-wide uppercase">
                  {service.category && service.category.length > 0 ? service.category.join(' & ') : 'Development'} Solution
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-[#00017A] mb-4 group-hover:text-[#1873D3] transition-all duration-500 ease-out">
                <a 
                  href={service.url} 
                  className="hover:underline transition-all duration-300 ease-out"
                >
                  {service.name}
                </a>
              </h3>
            </div>

            <p className="text-[#1237A1] text-lg leading-relaxed mb-6">
              {service.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                to = {`/services/${service.slug}`}
                className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-[#1873D3] to-[#1237A1] hover:from-[#1237A1] hover:to-[#00017A] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                target='_blank' 
                to={service.url}
                className="group/btn inline-flex items-center gap-2 border-2 border-[#1873D3] text-[#1873D3] hover:bg-[#1873D3] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-0.5"
              >
                <span>Visit Service</span>
                <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-[#00017A] mb-3 uppercase tracking-wide">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies?.length > 0 ? (
                  service.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-[#1873D3]/10 to-[#FFDE00]/10 text-[#1237A1] text-sm font-semibold rounded-full hover:from-[#1873D3]/20 hover:to-[#FFDE00]/20 transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-0.5 border border-[#1873D3]/20 hover:border-[#1873D3]/40"
                    >
                      {tech}
                    </span>
                  ))
                ) : (
                  ['IoT', 'AI/ML', 'Cloud Infrastructure', 'Data Analytics'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-[#1873D3]/10 to-[#FFDE00]/10 text-[#1237A1] text-sm font-semibold rounded-full border border-[#1873D3]/20"
                    >
                      {tech}
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Category Tags */}
            <div>
              <h4 className="text-sm font-semibold text-[#00017A] mb-3 uppercase tracking-wide">Categories</h4>
              <div className="flex flex-wrap gap-2">
                {service.category && service.category.length > 0 ? (
                  service.category.map((cat, catIndex) => (
                    <span
                      key={cat}
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${getCategoryColor(cat)} rounded-lg shadow-md font-semibold text-sm transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg`}
                    >
                      <span className="flex items-center justify-center">
                        {getCategoryIcon(cat)}
                      </span>
                      <span>{cat}</span>
                    </span>
                  ))
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1873D3] to-[#1237A1] text-white rounded-lg shadow-md font-semibold text-sm">
                    <span className="flex items-center justify-center">
                      {getCategoryIcon('Development')}
                    </span>
                    <span>Development</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced smooth hover glow with fade */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/0 via-[#FFDE00]/0 to-[#FFB900]/0 group-hover:from-[#1873D3]/5 group-hover:via-[#FFDE00]/3 group-hover:to-[#FFB900]/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none rounded-2xl"></div>
        
        {/* Additional subtle inner glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" style={{ boxShadow: 'inset 0 0 60px rgba(24, 115, 211, 0.1)' }}></div>
      </article>

      <style>{`
        /* Card-specific animations */
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
        
        .animate-card-slide-up {
          animation: card-slide-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        /* Enhanced Smooth Transitions for Cards */
        .group {
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .group:hover {
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Smooth button and interactive element transitions */
        .group/btn {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
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
        
        /* Hardware acceleration for smooth animations */
        .group {
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
      `}</style>
    </>
  );
};

export default ServiceCard;