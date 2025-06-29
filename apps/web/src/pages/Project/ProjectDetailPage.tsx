import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Project {
  name: string;
  slug: string;
  url: string;
  summary: string;
  award?: string;
  description: string[];
  pillars: { title: string; capabilities: string[] }[];
  impact?: string;
  image?: string;
  logo?: string;
  technologies?: string[];
  timeline?: string;
  client?: string;
  category?: string;
}

export default function ProjectDetail() {
  const {slug} = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects/${slug}`)
      .then((r) => r.json())
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch(() => {
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center" style={{ fontFamily: "'Work Sans', 'Noto Sans', sans-serif" }}>
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1873D3] mb-4"></div>
          <p className="text-[#1237A1] text-lg">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center" style={{ fontFamily: "'Work Sans', 'Noto Sans', sans-serif" }}>
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-[#00017A] mb-2">Project Not Found</h1>
          <p className="text-[#1237A1] mb-6">The project you're looking for doesn't exist.</p>
          <Link
            to = "/portfolio" 
            className="inline-flex items-center gap-2 bg-[#1873D3] hover:bg-[#1237A1] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Work Sans', 'Noto Sans', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FFDE00 0%, transparent 50%), radial-gradient(circle at 75% 75%, #FFB900 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Breadcrumb Navigation */}
          <div className="mb-8 animate-fade-in">
            <Link
             to="/portfolio"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-6 animate-slide-up">
              {/* Category & Timeline */}
              <div className="flex flex-wrap gap-4 text-sm">
                {project.category && (
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                )}
                {project.timeline && (
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.timeline} project
                  </span>
                )}
                {project.client && (
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    Client: {project.client}
                  </span>
                )}
              </div>

              {/* Project Title */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
                  {project.name}
                </h1>
                {project.award && (
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] text-[#00017A] px-4 py-2 rounded-full text-sm font-bold">
                    <span>{project.award}</span>
                  </div>
                )}
              </div>

              {/* Project Summary */}
              <p className="text-xl text-white/90 leading-relaxed">
                {project.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FFDE00] hover:bg-[#FFB900] text-[#00017A] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Visit Live Site</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button 
                  onClick={() => document.getElementById('project-details')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1873D3] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span>View Details</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative animate-slide-up-delay">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className={`w-full h-96 lg:h-[500px] object-fill transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4 opacity-50">🖥️</div>
                      <p className="text-white/70">Project Preview</p>
                    </div>
                  </div>
                )}
                
                {/* Logo Overlay */}
                {project.logo && (
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const container = target.parentElement;
                        if (container) container.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Loading Placeholder */}
                {!imageLoaded && project.image && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="project-details" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Description */}
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-[#00017A] mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="space-y-4">
                    {project.description.map((line, index) => (
                      <li 
                        key={line} 
                        className="flex items-start gap-3 text-[#1237A1] animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-[#1873D3] rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-lg leading-relaxed">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Pillars */}
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-[#00017A] mb-8">Key Pillars</h2>
                <div className="grid gap-8">
                  {project.pillars.map((pillar, index) => (
                    <div 
                      key={pillar.title} 
                      className="bg-gradient-to-br from-[#1873D3]/5 to-[#FFDE00]/5 rounded-2xl p-8 border border-[#1873D3]/10 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <h3 className="text-2xl font-bold text-[#00017A] mb-4 flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#1873D3] rounded-full"></div>
                        {pillar.title}
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {pillar.capabilities.map((capability, capIndex) => (
                          <li 
                            key={capability} 
                            className="flex items-center gap-3 text-[#1237A1] animate-fade-in-up"
                            style={{ animationDelay: `${(index * 200) + (capIndex * 50)}ms` }}
                          >
                            <svg className="w-5 h-5 text-[#1873D3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Section */}
              {project.impact && (
                <div className="animate-fade-in-up bg-gradient-to-br from-[#FFDE00]/10 to-[#FFB900]/10 rounded-2xl p-8 border border-[#FFDE00]/20">
                  <h2 className="text-3xl font-bold text-[#00017A] mb-6 flex items-center gap-3">
                    <div className="text-4xl">📈</div>
                    Impact & Results
                  </h2>
                  <p className="text-xl text-[#1237A1] leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <div className="bg-gradient-to-br from-[#1873D3]/5 to-[#FFDE00]/5 rounded-2xl p-6 border border-[#1873D3]/10 sticky top-8 animate-fade-in-up">
                <h3 className="text-xl font-bold text-[#00017A] mb-6">Project Details</h3>
                
                <div className="space-y-4">
                  {project.client && (
                    <div>
                      <label className="text-sm font-medium text-[#1237A1] uppercase tracking-wide">Client</label>
                      <p className="text-[#00017A] font-semibold">{project.client}</p>
                    </div>
                  )}
                  
                  {project.timeline && (
                    <div>
                      <label className="text-sm font-medium text-[#1237A1] uppercase tracking-wide">Timeline</label>
                      <p className="text-[#00017A] font-semibold">{project.timeline}</p>
                    </div>
                  )}
                  
                  {project.category && (
                    <div>
                      <label className="text-sm font-medium text-[#1237A1] uppercase tracking-wide">Category</label>
                      <p className="text-[#00017A] font-semibold">{project.category}</p>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                {project.technologies && (
                  <div className="mt-6">
                    <label className="text-sm font-medium text-[#1237A1] uppercase tracking-wide mb-3 block">Technologies</label>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-[#1873D3]/10 text-[#1873D3] text-sm font-medium rounded-full hover:bg-[#1873D3]/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-[#1873D3]/10">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1873D3] hover:bg-[#1237A1] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <span>Visit Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          
          .animate-slide-up {
            animation: slide-up 1s ease-out;
          }
          
          .animate-slide-up-delay {
            animation: slide-up 1s ease-out 0.3s both;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out both;
          }
        `}
      </style>
    </div>
  );
}