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
    <section id="resume" className="py-24 bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Resume</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Download & Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 sticky top-24">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl text-white font-bold">AB</span>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-2 text-white">Abisha B</h3>
              <p className="text-gray-400 text-center mb-6">AI & Data Science Student</p>
              
              {/* Stylish Download Button */}
              <a
  href="/resume.pdf"
  download
  className="group relative w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
>
  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
  <Download size={18} className="group-hover:animate-bounce" />
  <span>Download Resume</span>
</a>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                PDF Format • Updated 2024
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Certifications */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Brain className="text-blue-400" size={24} />
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed">
                AI & Data Science undergraduate with hands-on experience building and deploying real-world web applications for business clients. Experienced in developing responsive websites, AI-powered chatbot solutions, and SaaS products using React, Next.js, JavaScript, and modern web technologies. Passionate about building scalable software products and solving real business problems through technology.
              </p>
            </div>

            {/* Technical Skills Section */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code className="text-blue-400" size={24} />
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-300 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg text-sm hover:bg-blue-900/50 hover:text-blue-400 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-blue-400" size={24} />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start justify-between p-4 bg-gray-700 rounded-xl hover:bg-gray-700/80 transition-colors">
                    <div>
                      <h4 className="font-semibold text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-400">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action - Reduced Brightness for Dark Theme */}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume