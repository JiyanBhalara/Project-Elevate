import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TeamSection from '../components/TeamSection';

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
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleSections.includes(sectionId);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
          }}
        >
          {/* Multiple overlay layers for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/95 via-[#1237A1]/90 to-[#00017A]/95"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl" data-section="hero">
            <div
              className={`transition-all duration-1000 ${isVisible("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-sm font-semibold tracking-wide">
                  ABOUT PROJECT ELEVATE
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-shadow-lg">
                Transforming Cities Through
                <span className="block text-[#FFDE00]">Human-Centered AI</span>
              </h1>

              <p className="text-xl text-white/95 leading-relaxed mb-8 drop-shadow-sm">
                We help cities, schools, and public-serving organizations solve
                stubborn social problems with practical, human-centered AI
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${isVisible("mission") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            data-section="mission"
          >
            <div className="inline-flex items-center gap-2 text-[#1873D3] font-semibold text-sm tracking-wide mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              OUR MISSION
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00017A] mb-8 max-w-4xl mx-auto">
              To help cities, schools, and public-serving organizations solve
              stubborn social problems with practical, human-centered AI
            </h2>
          </div>
        </div>
      </section>

      {/* Current Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${isVisible("challenges") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            data-section="challenges"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-[#1873D3] font-semibold text-sm tracking-wide mb-6">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                TODAY'S CHALLENGES
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00017A] mb-6">
                The Problems We're Solving
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Picture a modern city: overflowing dumpsters behind corner
                stores, students who've never cast a real ballot, and classrooms
                stretched too thin to give personalized attention. While private
                apps refine one-click shopping, core civic systems stay stuck in
                the past—fragmented data, paper workflows, and aging CCTV that
                no one watches.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5v-2h7v2zm3-4H5v-2h10v2zm0-4H5V7h10v2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Dirty Streets
                  </h3>
                  <p className="text-sm text-gray-600">
                    Illegal dumping and poor street hygiene sap community pride
                  </p>
                </div>

                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Disengaged Youth
                  </h3>
                  <p className="text-sm text-gray-600">
                    Young people avoid the polls due to lack of civic engagement
                  </p>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Unequal Education
                  </h3>
                  <p className="text-sm text-gray-600">
                    Overworked teachers can't meet every learner where they are
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${isVisible("expertise") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            data-section="expertise"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-[#1873D3] font-semibold text-sm tracking-wide mb-6">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5v-2h7v2zm3-4H5v-2h10v2zm0-4H5V7h10v2z" />
                </svg>
                OUR CORE EXPERTISE
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00017A] mb-6">
                What We Do
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Smart City Solutions",
                  description:
                    "Camera systems and mobile apps that help cities spot problems like illegal dumping and fix them faster than ever before.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Youth Engagement Tools",
                  description:
                    "Fun, secure voting and education apps that help teenagers become informed, lifelong participants in democracy.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16.5c-.8 0-1.54.37-2.01 1.01L12 14v6h4v-6l1.5-2.5L19 14.5V22h1z" />
                    </svg>
                  ),
                },
                {
                  title: "Personalized Learning",
                  description:
                    "Smart learning apps that adapt to each student's pace and interests, making quality education accessible to everyone.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    </svg>
                  ),
                },
                {
                  title: "Quick Government Innovation",
                  description:
                    "Fast development processes that help government agencies test new ideas quickly while meeting all the necessary requirements.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1873D3] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#00017A] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${isVisible("solutions") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            data-section="solutions"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-[#1873D3] font-semibold text-sm tracking-wide mb-6">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                HOW WE MAKE A DIFFERENCE
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00017A] mb-6">
                Real Solutions for Real Problems
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're making communities cleaner, students more engaged, and
                learning more accessible with smart technology that actually
                works.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5v-2h7v2zm3-4H5v-2h10v2zm0-4H5V7h10v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#00017A] mb-4">
                  Cleaner Streets
                </h3>
                <p className="text-gray-700 mb-4">
                  Our Newark Residents App lets people report problems instantly
                  while smart cameras spot illegal dumping automatically.
                </p>
                <p className="text-sm text-green-600 font-semibold">
                  Result: City crews can clean up in hours instead of weeks
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#00017A] mb-4">
                  Engaged Youth
                </h3>
                <p className="text-gray-700 mb-4">
                  Youth Ballot® turns voting into an engaging classroom
                  experience with real local issues and easy-to-understand
                  explanations.
                </p>
                <p className="text-sm text-blue-600 font-semibold">
                  Result: Students become confident, informed voters for life
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#00017A] mb-4">
                  Better Learning
                </h3>
                <p className="text-gray-700 mb-4">
                  School of Thought™ adapts to each student's learning style
                  with bite-sized lessons and career exploration that fits any
                  schedule.
                </p>
                <p className="text-sm text-purple-600 font-semibold">
                  Result: Every student gets personalized attention and support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${isVisible("partners") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            data-section="partners"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-[#1873D3] font-semibold text-sm tracking-wide mb-6">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16.5c-.8 0-1.54.37-2.01 1.01L12 14v6h4v-6l1.5-2.5L19 14.5V22h1z" />
                </svg>
                WORKING TOGETHER
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00017A] mb-6">
                Our Partners in Progress
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                We're proud to work alongside dedicated organizations who share
                our vision of stronger, smarter communities. Together, we're
                turning great ideas into real solutions that make a difference
                every day.
              </p>
            </div>

            {/* Partner logos grid */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                <div className="w-40 h-30 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <img
                    src="/src/assets/njit.png"
                    alt="New Jersey Institute of Technology"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-40 h-30 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <img
                    src="/src/assets/njii.png"
                    alt="New Jersey Innovation Institute"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-40 h-30 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <img
                    src="/src/assets/cityofnewark.png"
                    alt="City of Newark"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-40 h-30 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <img
                    src="/src/assets/nboe.png"
                    alt="Newark Board of Education"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-40 h-30 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-4 hover:shadow-md transition-shadow lg:col-span-1 md:col-span-3 col-span-2 mx-auto">
                  <img
                    src="/src/assets/marco.png"
                    alt="MarCO Health"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#00017A] mb-3">
                  City Leadership
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Working directly with Newark's government to implement
                  solutions that serve residents better.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>City of Newark</li>
                  <li>Department of Public Works</li>
                  <li>Newark City Hall</li>
                  <li>Newark Board of Education</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#00017A] mb-3">
                  Academic Excellence
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Partnering with leading institutions to bring cutting-edge
                  research to everyday challenges.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>New Jersey Institute of Technology</li>
                  <li>New Jersey Innovation Institute</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5v-2h7v2zm3-4H5v-2h10v2zm0-4H5V7h10v2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#00017A] mb-3">
                  Community Health
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Collaborating with health organizations to understand and
                  improve community wellbeing.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>MarCO Health</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection 
        isVisible={isVisible("team")} 
        sectionId="team" 
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1873D3] via-[#1237A1] to-[#00017A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Community?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help solve your community's challenges with
            innovative AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#FFDE00] hover:bg-[#FFB900] text-[#00017A] px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <span>Get In Touch</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#1873D3] px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <span>View Our Services</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;