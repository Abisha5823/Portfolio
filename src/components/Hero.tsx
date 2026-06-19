'use client'

import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">Open for opportunities</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abisha B
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            AI & Data Science Student
          </p>
          
          <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-8">
            Full Stack Developer | AI Solutions Builder | Mobile Developer
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Building innovative solutions with cutting-edge technology
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['React', 'Next.js', 'React Native', 'Python', 'AI/ML', 'TypeScript'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm shadow-md rounded-full text-gray-300 text-sm font-medium hover:shadow-lg transition-all">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 text-gray-300 rounded-full border-2 border-gray-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mt-12">
            <a href="https://github.com/Abisha5823" target="_blank" className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <Github size={20} className="text-gray-300" />
            </a>
            <a href="https://linkedin.com/in/b-abisha" target="_blank" className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <Linkedin size={20} className="text-gray-300" />
            </a>
            <a href="mailto:abisha@example.com" className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <Mail size={20} className="text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero