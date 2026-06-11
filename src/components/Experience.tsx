'use client'

import { Briefcase, Calendar, MapPin, Award, TrendingUp, Users, Code, Smartphone, Brain } from 'lucide-react'
import { useState } from 'react'

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work')

  const workExperiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      period: '2025',
      location: 'Remote',
      type: 'Full-time',
      icon: <Code className="w-5 h-5" />,
      achievements: [
        'Built and deployed 5+ responsive websites for businesses',
        'Developed AI chatbot solutions increasing customer engagement by 40%',
        'Handled end-to-end deployment and maintenance',
        'Provided ongoing technical support and feature enhancements'
      ],
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB']
    },
    {
      title: 'App Developer Intern',
      company: 'Hostwire Pvt.Ltd',
      period: '2026',
      location: 'Remote',
      type: 'Internship',
      icon: <Smartphone className="w-5 h-5" />,
      achievements: [
        'Worked on Talkzie client application development',
        'Implemented 5+ new features and enhancements',
        'Collaborated with 5-member development team',
        'Participated in code reviews and agile ceremonies'
      ],
      skills: ['React Native', 'JavaScript', 'Git', 'REST APIs']
    },
    {
      title: 'AI Intern',
      company: 'Shan AI Technologies Pvt.Ltd',
      period: '2022',
      location: 'Remote',
      type: 'Internship',
      icon: <Brain className="w-5 h-5" />,
      achievements: [
        'Proposed and designed VisionMate, an AI-powered assistant for visually impaired users',
        'Developed concepts for voice-guided navigation and accessibility-focused AI solutions',
        'Contributed ideas and research for an internal AI productivity tool',
        'Gained hands-on experience in AI solution design, problem-solving, and user-centered development'
      ],
      skills: ['Artificial Intelligence', 'Python', 'Prompt Engineering', 'Research', 'Problem Solving']
    }
  ]

  const education = [
    {
      degree: 'AI & Data Science',
      institution: 'Bachelor of Engineering',
      period: '2023 - 2027',
      location: 'Kovilpatti, Tamil Nadu, India',
      icon: <Award className="w-5 h-5" />,
      achievements: [
        'CGPA: 7.1/10',
        'Relevant Courses: Machine Learning, Deep Learning, Data Science',
        'Projects: AI Chatbot, AI-based Sentiment Analysis, Data Visualization Dashboard',
      ],
      skills: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'SQL']
    }
  ]

  return (
    <section id="experience" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container-custom relative">
        <h2 className="section-title">Experience & Education</h2>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-1 rounded-full shadow-md inline-flex">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                Work Experience
              </div>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Award size={18} />
                Education
              </div>
            </button>
          </div>
        </div>

        {/* Work Experience Tab */}
        {activeTab === 'work' && (
          <div className="space-y-8 animate-fadeInUp">
            {workExperiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative">
                    {/* Gradient bar at top */}
                    <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    
                    <div className="p-8">
                      <div className="flex flex-wrap justify-between items-start mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="text-blue-400">
                              {exp.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                            <p className="text-lg text-blue-400 font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1 text-gray-400 text-sm">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-300 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-400">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-gray-300 mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-900/50 hover:text-blue-400 transition-colors">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="animate-fadeInUp">
            {education.map((edu, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative">
                    {/* Gradient bar at top */}
                    <div className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
                    
                    <div className="p-8">
                      <div className="flex flex-wrap justify-between items-start mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="text-green-400">
                              {edu.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                            <p className="text-lg text-green-400 font-semibold">{edu.institution}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                          <span className="inline-flex items-center gap-1 text-gray-400 text-sm">
                            <MapPin size={14} />
                            {edu.location}
                          </span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-300 mb-3">Highlights:</h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-400">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-gray-300 mb-3">Core Subjects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-green-900/50 hover:text-green-400 transition-colors">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">5+</div>
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">3+</div>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">10+</div>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">3+</div>
            <p className="text-gray-400 mt-2">Live Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience