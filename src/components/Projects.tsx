'use client'

import { ExternalLink, Github, Star, Code2 } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'Annbu Enterprises',
      description: 'Designed, developed, and deployed a production-ready business website for a real client. Implemented responsive UI, product and service showcase, customer enquiry workflows, and custom domain integration through GoDaddy. Managed the complete development lifecycle from client requirements to live deployment.',
      tech: ['Next.js', 'React.js', 'Tailwind CSS'],
      liveLink: 'https://www.annbuenterprises.com/',
      githubLink: 'https://github.com/Abisha5823/solar-business-website-client-project',
      type: 'Business Website',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'AI Business Chatbot',
      description: 'AI-powered customer support chatbot that handles inquiries, provides instant responses, and improves customer engagement.',
      tech: ['Next.js', 'AI APIs', 'OpenAI'],
      liveLink: 'https://chatbot-client-five-nu.vercel.app/',
      githubLink: 'https://github.com/Abisha5823/Chatbot-client',
      type: 'Business Website with AI Chatbot',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Notes App – Offline-First Draft Assistant',
  description: 'React Native mobile application with offline storage, auto-save every 2 seconds, real-time search, and persistent local data management without internet connection.',
  tech: ['React Native', 'Expo', 'AsyncStorage', 'React Navigation'],
  liveLink: '#',
  githubLink: 'https://github.com/Abisha5823/offline-notes-app',
  type: 'Mobile App',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'WhatsApp Booking Agent',
      description: 'AI-powered conversational assistant for psychology clinics to automate client onboarding and appointment booking through WhatsApp chat experience.',
      tech: ['React', 'JavaScript', 'AI Integration', 'WhatsApp API'],
      liveLink: '#',
      githubLink: 'https://github.com/Abisha5823/Whatsapp-booking-agent',
      type: 'AI Conversational Agent',
      features: [
        'Client information collection',
        'Appointment preference gathering',
        'Therapy service identification',
        'Lead generation & storage'
      ],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'KI Bharath Solar Energies – Business Website',
  description: 'Multi-page business website for solar energy company featuring product showcase, project gallery, customer enquiry system, and JSON-based content management.',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'JSON', 'Vercel'],
  liveLink: 'https://ki-bharat-solar.vercel.app',
  githubLink: 'https://github.com/Abisha5823/ki-bharat-solar',
  type: 'Business Website',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'BizAI',
      description: 'SaaS Platform providing AI-powered business analytics and automation tools.',
      tech: ['Next.js', 'Python', 'AI/ML'],
      liveLink: '#',
      githubLink: 'https://github.com/Abisha5823/bizai',
      type: 'SaaS Platform',
      gradient: 'from-teal-500 to-green-600'
    }
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl`}></div>
              
              <div className="relative bg-white rounded-2xl p-6 m-px">
                {/* Type Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-full`}>
                    <Code2 size={12} />
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>

                {/* Hover Indicator */}
                {hoveredIndex === index && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects