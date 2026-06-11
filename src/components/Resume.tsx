'use client'

import { Download, FileText, Code, Cloud, Database, Brain, Award, Briefcase, GraduationCap, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const Resume = () => {
  const skills = {
    'Frontend': ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    'Backend': ['Node.js', 'Python', 'Express.js', 'PostgreSQL', 'MongoDB'],
    'Mobile': ['React Native', 'Expo', 'AsyncStorage'],
    'AI/ML': ['OpenAI API', 'TensorFlow', 'Pandas', 'NumPy'],
    'Tools': ['Git', 'GitHub', 'Vercel', 'VS Code', 'Postman']
  }

  const certifications = [
    { name: 'Agentic AI(In Progress)', issuer: 'Udemy', year: '2026' },
    { name: 'Python', issuer: 'IBM', year: '2023' },
    { name: 'International Workshop - Data Analysis Using AI and LLM Models', issuer: 'Global Research and Training Centre', year: '2025' }
  ]

  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Resume</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Download & Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl text-white font-bold">AB</span>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-2">Abisha B</h3>
              <p className="text-gray-600 text-center mb-6">AI & Data Science Student</p>
              
              {/* Stylish Download Button - OPTION 1 */}
              <a
  href="/resume.pdf"
  download
  className="group relative w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
>
  <Download size={18} className="group-hover:animate-spin transition-all" style={{ animationDuration: '0.3s' }} />
  <span>Download Resume</span>
  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"></div>
  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping delay-100"></div>
</a>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                PDF Format • Updated 2024
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Certifications - Same as before */}
          <div className="lg:col-span-2 space-y-8">
            {/* Content remains the same */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Brain className="text-blue-600" size={24} />
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                AI & Data Science undergraduate with hands-on experience building and deploying real-world web applications for business clients. Experienced in developing responsive websites, AI-powered chatbot solutions, and SaaS products using React, Next.js, JavaScript, and modern web technologies. Passionate about building scalable software products and solving real business problems through technology.AI & Data Science undergraduate with hands-on experience building and deploying real-world web applications for business clients. Experienced in developing responsive websites, AI-powered chatbot solutions, and SaaS products using React, Next.js, JavaScript, and modern web technologies. Passionate about building scalable software products and solving real business problems through technology.
              </p>
            </div>

            {/* Technical Skills Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code className="text-blue-600" size={24} />
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-800 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-blue-600" size={24} />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div>
                      <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-500">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Ready to Collaborate?</h3>
              <p className="text-blue-100 mb-4">Let's work together on your next project</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Get in Touch
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume