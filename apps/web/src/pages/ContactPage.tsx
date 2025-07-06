import React, { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'success' | 'error' | null;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function handleSubmit() {
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    setSubmitStatus('error');
    setTimeout(() => setSubmitStatus(null), 3000);
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error('Network');
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 3000);
  }
}


  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/project-elevate-ai/posts/?feedView=all', '_blank', 'noopener,noreferrer');
  };

  return (
<div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#1873D3]/3 to-transparent rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#FFDE00]/3 to-transparent rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative text-white py-20 sm:py-24 lg:py-32 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
            {/* Multiple overlay layers for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/95 via-[#1237A1]/90 to-[#00017A]/95"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Hero Background Animation */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFDE00]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFB900]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center" data-section="hero">
              <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/30 animate-fade-in">
                <div className="relative">
                  <span className="text-2xl animate-bounce">📞</span>
                  <div className="absolute inset-0 bg-[#FFDE00]/20 rounded-full blur animate-ping"></div>
                </div>
                <span className="text-sm font-semibold tracking-wide">CONTACT US</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8 animate-slide-up">
                Let's{' '}
                <span className="block relative">
                  <span className="bg-gradient-to-r from-[#FFDE00] via-[#FFB900] to-[#FFDE00] text-transparent bg-clip-text animate-gradient bg-300% animate-gradient-shift">
                    Start Something
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] rounded-full transform scale-x-0 animate-scale-x"></div>
                </span>
                <span className="block">Amazing Together</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Ready to transform your business? We're excited to hear from you and discuss how we can help bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Our Office",
                  details: ["211 Warren St", "Newark, NJ 07103"]
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Phone",
                  details: ["+1 (862) 703-8194", "Mon-Fri 9AM-6PM EST"]
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email",
                  details: ["info@projectelevate.us", "We respond within 24 hours"]
                }
              ].map((contact, index) => (
                <div 
                  key={contact.title}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/5 to-[#FFDE00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1873D3] to-[#1237A1] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#00017A] mb-4 group-hover:text-[#1873D3] transition-colors">
                      {contact.title}
                    </h3>
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className={`text-[#1237A1] ${idx === 0 ? 'font-semibold' : 'text-sm opacity-80'}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column - Contact Info */}
              <div className={`transform transition-all duration-700 ${
                visibleSections.includes('contact-info') ? 'animate-slide-in-up' : 'opacity-0'
              }`} data-section="contact-info">
                <div className="sticky top-8">
                  <div className="inline-block p-1 bg-gradient-to-r from-[#1873D3] to-[#FFDE00] rounded-full mb-6">
                    <div className="bg-white px-6 py-2 rounded-full">
                      <span className="text-[#1237A1] font-semibold text-sm tracking-wide">GET IN TOUCH</span>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl font-black text-[#00017A] mb-6">
                    Ready to Discuss Your Project?
                  </h2>
                  
                  <p className="text-xl text-[#1237A1] leading-relaxed mb-8">
                    We're excited to hear from you! Whether you have a question about our services, want to discuss a potential project, or just want to say hello, please don't hesitate to reach out.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1873D3]/10 to-[#FFDE00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#1873D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#00017A] mb-1">Quick Response</h3>
                        <p className="text-[#1237A1] text-sm">We typically respond within 2-4 hours during business hours</p>
                      </div>
                    </div>
                    
                  </div>

                  {/* Social Links */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="font-bold text-[#00017A] mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        aria-label="LinkedIn"
                        className="w-12 h-12 bg-gradient-to-br from-[#1873D3] to-[#1237A1] hover:from-[#1237A1] hover:to-[#00017A] rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                        onClick={handleLinkedInClick}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                        </svg>
                      </button>
                      {/* <button
                        type="button"
                        aria-label="Twitter"
                        className="w-12 h-12 bg-gradient-to-br from-[#1873D3] to-[#1237A1] hover:from-[#1237A1] hover:to-[#00017A] rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z" />
                        </svg>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className={`transform transition-all duration-700 ${
                visibleSections.includes('contact-form') ? 'animate-slide-in-up' : 'opacity-0'
              }`} data-section="contact-form">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1873D3]/5 to-[#FFDE00]/5"></div>
                  <div className="relative p-8 lg:p-12">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-black text-[#00017A] mb-4">
                        Send Us a Message
                      </h3>
                      <p className="text-[#1237A1]">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </p>
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl transform animate-slide-in-up">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-green-800 font-semibold">Message Sent Successfully!</p>
                            <p className="text-green-700 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl transform animate-slide-in-up">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-red-800 font-semibold">Required Fields Missing</p>
                            <p className="text-red-700 text-sm">Please fill in all required fields before submitting.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="group">
                          <label htmlFor="name" className="block text-sm font-semibold text-[#00017A] mb-2">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1873D3] focus:outline-none transition-all duration-300 text-[#00017A] placeholder-gray-400 group-hover:border-gray-300"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="group">
                          <label htmlFor="email" className="block text-sm font-semibold text-[#00017A] mb-2">
                            Your Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1873D3] focus:outline-none transition-all duration-300 text-[#00017A] placeholder-gray-400 group-hover:border-gray-300"
                            name="email"
                            placeholder="your@email.com"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      <div className="group">
                        <label htmlFor="subject" className="block text-sm font-semibold text-[#00017A] mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="subject"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1873D3] focus:outline-none transition-all duration-300 text-[#00017A] placeholder-gray-400 group-hover:border-gray-300"
                          name="subject"
                          placeholder="What can we help you with?"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="group">
                        <label htmlFor="message" className="block text-sm font-semibold text-[#00017A] mb-2">
                          Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1873D3] focus:outline-none transition-all duration-300 text-[#00017A] placeholder-gray-400 resize-none group-hover:border-gray-300"
                          name="message"
                          placeholder="Tell us more about your project or inquiry..."
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="pt-4">
                        <button 
                          type="button"
                          className={`group relative w-full bg-gradient-to-r from-[#1873D3] to-[#1237A1] hover:from-[#1237A1] hover:to-[#00017A] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden ${
                            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                          }`}
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                        >
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          <span className="relative flex items-center justify-center gap-3">
                            {isSubmitting ? (
                              <>
                                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20M2 12h20" />
                                </svg>
                                Sending Message...
                              </>
                            ) : (
                              <>
                                Send Message
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                              </>
                            )}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block p-1 bg-gradient-to-r from-[#1873D3] to-[#FFDE00] rounded-full mb-6">
                <div className="bg-white px-6 py-2 rounded-full">
                  <span className="text-[#1237A1] font-semibold text-sm tracking-wide">FAQ</span>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-[#00017A] mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does it typically take to complete a project?",
                  answer: "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "What is your development process?",
                  answer: "We follow an agile development methodology with regular check-ins, milestone reviews, and iterative improvements. This ensures transparency and allows for adjustments based on your feedback throughout the project."
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer: "Yes! We offer comprehensive support packages including maintenance, updates, hosting assistance, and technical support. We believe in building long-term partnerships with our clients."
                },
                {
                  question: "Can you work with our existing systems?",
                  answer: "Absolutely. We specialize in integrations and can work with most existing systems, APIs, and databases. We'll assess your current infrastructure and recommend the best approach for seamless integration."
                }
              ].map((faq, index) => (
                <div key={index} className="group bg-white rounded-2xl border border-gray-200 hover:border-[#1873D3]/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#00017A] group-hover:text-[#1873D3] transition-colors mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-[#1237A1] leading-relaxed">
                      {faq.answer}
                    </p>
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
              Still Have Questions?
            </h3>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Don't hesitate to reach out. We're here to help you succeed and would love to discuss your project in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FFDE00] to-[#FFB900] hover:from-[#FFB900] hover:to-[#FFDE00] text-[#00017A] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Us Now</span>
              </button>
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

export default ContactPage;
