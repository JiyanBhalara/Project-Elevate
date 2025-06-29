import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  name: string;
  url: string;
  summary: string;
  award?: string;
  image?: string;
  logo?: string;
  technologies: string[];
  slug: string;
}

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects`)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to fetch projects');
        return r.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load projects');
        setLoading(false);
      });

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A]">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-24 h-24 border-4 border-white/20 rounded-full animate-spin mx-auto"></div>
              <div className="absolute top-0 left-0 w-24 h-24 border-4 border-[#FFDE00] rounded-full animate-spin mx-auto border-t-transparent" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <div className="space-y-2">
              <p className="text-white text-xl font-semibold animate-pulse">Loading Portfolio</p>
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-[#FFDE00] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-[#FFDE00] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-[#FFDE00] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#1873D3]/5 to-transparent rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#FFDE00]/5 to-transparent rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
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
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20 animate-fade-in">
                <div className="relative">
                  <span className="text-2xl animate-bounce">🚀</span>
                  <div className="absolute inset-0 bg-[#FFDE00]/20 rounded-full blur animate-ping"></div>
                </div>
                <span className="text-sm font-semibold tracking-wide">PORTFOLIO SHOWCASE</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8 animate-slide-up">
                Transforming Ideas Into{' '}
                <span className="block relative">
                  <span className="bg-gradient-to-r from-[#FFDE00] via-[#FFB900] to-[#FFDE00] text-transparent bg-clip-text animate-gradient bg-300% animate-gradient-shift">
                    Digital Excellence
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] rounded-full transform scale-x-0 animate-scale-x"></div>
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Explore our portfolio of successful projects that have helped businesses achieve their digital transformation goals and drive measurable results through innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] hover:from-[#FFB900] hover:to-[#FFDE00] text-[#00017A] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative">Start Your Project</span>
                  <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="group inline-flex items-center gap-3 border-2 border-white/80 text-white hover:bg-white hover:text-[#1873D3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:shadow-xl"
                >
                  <span>View Projects</span>
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Projects Completed', icon: '🎯' },
                { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
                { number: '$10M+', label: 'Revenue Generated', icon: '💰' },
                { number: '5★', label: 'Average Rating', icon: '🏆' }
              ].map((stat, index) => (
                <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-black text-[#00017A] mb-2 group-hover:text-[#1873D3] transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-[#1237A1] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block p-1 bg-gradient-to-r from-[#1873D3] to-[#FFDE00] rounded-full mb-6">
                <div className="bg-white px-6 py-2 rounded-full">
                  <span className="text-[#1237A1] font-semibold text-sm tracking-wide">FEATURED WORK</span>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#00017A] mb-6">
                Our Best Projects
              </h2>
              <p className="text-xl text-[#1237A1] max-w-3xl mx-auto leading-relaxed">
                Discover how we've helped businesses across various industries achieve their digital goals through innovative solutions and cutting-edge technology.
              </p>
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
                    <p className="text-red-800 font-semibold">⚠️ {error}</p>
                    <p className="text-red-700 text-sm">Unable to load projects from API</p>
                  </div>
                </div>
              </div>
            )}

            {projects.length === 0 && !loading && !error ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-6 opacity-20">📂</div>
                <h3 className="text-2xl font-bold text-[#00017A] mb-4">No Projects Available</h3>
                <p className="text-[#1237A1] text-lg">Check back soon for our latest work!</p>
              </div>
            ) : (
              <div className="space-y-20">
                {projects.map((project, index) => (
                  <article
                    key={project.name}
                    data-index={index}
                    className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 overflow-hidden border border-gray-100 ${
                      visibleProjects.includes(index) ? 'animate-slide-in-up' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      {/* Project Image */}
                      <div className="lg:w-3/5 relative overflow-hidden">
                        <div className="aspect-video lg:aspect-auto lg:h-full relative bg-gradient-to-br from-[#1873D3]/10 to-[#FFDE00]/10">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={`${project.name} preview`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1873D3]/10 via-[#1237A1]/10 to-[#FFDE00]/10">
                                      <div class="text-center">
                                        <div class="text-8xl mb-4 opacity-20">
                                          ${index % 3 === 0 ? '🖥️' : index % 3 === 1 ? '📱' : '🚀'}
                                        </div>
                                        <div class="text-[#1237A1] font-semibold opacity-60">Project Preview</div>
                                      </div>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-8xl mb-4 opacity-20 animate-pulse">
                                  {index % 3 === 0 ? '🖥️' : index % 3 === 1 ? '📱' : '🚀'}
                                </div>
                                <div className="text-[#1237A1] font-semibold opacity-60">Project Preview</div>
                              </div>
                            </div>
                          )}
                          
                          {/* Overlay Effects */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#00017A]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Award Badge */}
                          {project.award && (
                            <div className="absolute top-6 left-6 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] text-[#00017A] px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                              {project.award}
                            </div>
                          )}

                          {/* Project Logo Overlay */}
                          {project.logo && (
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md">
                              <img
                                src={project.logo}
                                alt={`${project.name} logo`}
                                className="w-8 h-8 object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  const container = target.parentElement;
                                  if (container) {
                                    container.style.display = 'none';
                                  }
                                }}
                              />
                            </div>
                          )}
                          
                          {/* External Link Icon */}
                          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <svg className="w-5 h-5 text-[#1873D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>

                          {/* Project Number */}
                          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                            <span className="text-[#1873D3] font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-[#FFDE00] rounded-full"></div>
                            <span className="text-[#1237A1] text-sm font-semibold tracking-wide uppercase">Project
                            </span>
                          </div>
                          <h3 className="text-3xl lg:text-4xl font-black text-[#00017A] mb-4 group-hover:text-[#1873D3] transition-colors">
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {project.name}
                            </a>
                          </h3>
                        </div>

                        <p className="text-[#1237A1] text-lg leading-relaxed mb-8">
                          {project.summary}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-[#1873D3] to-[#1237A1] hover:from-[#1237A1] hover:to-[#00017A] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <span>Visit Project</span>
                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <button 
                            onClick={() => window.location.href = `/portfolio/${project.slug}`}
                            className="group/btn inline-flex items-center gap-3 border-2 border-[#1873D3] text-[#1873D3] hover:bg-[#1873D3] hover:text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                          >
                            <span>Learn More</span>
                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="text-sm font-semibold text-[#00017A] mb-3 uppercase tracking-wide">Technologies Used</h4>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies?.length > 0 ? (
                              project.technologies.map((tech, techIndex) => (
                                <span 
                                  key={tech}
                                  className="px-4 py-2 bg-gradient-to-r from-[#1873D3]/10 to-[#FFDE00]/10 text-[#1237A1] text-sm font-semibold rounded-full hover:from-[#1873D3]/20 hover:to-[#FFDE00]/20 transition-all duration-300 transform hover:scale-105 border border-[#1873D3]/20"
                                  style={{ animationDelay: `${techIndex * 0.1}s` }}
                                >
                                  {tech}
                                </span>
                              ))
                            ) : (
                              ['React', 'TypeScript', 'Node.js'].map((tech, techIndex) => (
                                <span 
                                  key={tech}
                                  className="px-4 py-2 bg-gradient-to-r from-[#1873D3]/10 to-[#FFDE00]/10 text-[#1237A1] text-sm font-semibold rounded-full border border-[#1873D3]/20"
                                  style={{ animationDelay: `${techIndex * 0.1}s` }}
                                >
                                  {tech}
                                </span>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/5 via-transparent to-[#FFDE00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                  </article>
                ))}
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-24 relative">
              <div className="relative bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A] rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-40 h-40 border border-white rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-60 h-60 border border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-4xl lg:text-5xl font-black text-white mb-6">
                    Ready to Create Something Amazing?
                  </h3>
                  <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Join our satisfied clients and let us help you transform your business with innovative digital solutions that drive real results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link to = "/contact" className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] hover:from-[#FFB900] hover:to-[#FFDE00] text-[#00017A] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                      <span>Get Free Consultation</span>
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </Link>
                    <Link to = "/about" className="group inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#1873D3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                      <span>Learn About Us</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
}