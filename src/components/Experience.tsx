'use client'

import { Briefcase, Calendar, MapPin, Award, TrendingUp, Users, Code, Smartphone } from 'lucide-react'
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
      company: 'Hostwire',
      period: '2026',
      location: 'Chennai, India',
      type: 'Internship',
      icon: <Smartphone className="w-5 h-5" />,
      achievements: [
        'Worked on Talkzie client application development',
        'Implemented 5+ new features and enhancements',
        'Collaborated with 5-member development team',
        'Participated in code reviews and agile ceremonies'
      ],
      skills: ['React Native', 'JavaScript', 'Git', 'REST APIs']
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
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom relative">
        <h2 className="section-title">Experience & Education</h2>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-md inline-flex">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
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
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
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
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative">
                    {/* Gradient bar at top */}
                    <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
                    
                    <div className="p-8">
                      <div className="flex flex-wrap justify-between items-start mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                            <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1 text-gray-500 text-sm">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors">
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
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="relative">
                    {/* Gradient bar at top */}
                    <div className="h-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600"></div>
                    
                    <div className="p-8">
                      <div className="flex flex-wrap justify-between items-start mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            {edu.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                            <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                          <span className="inline-flex items-center gap-1 text-gray-500 text-sm">
                            <MapPin size={14} />
                            {edu.location}
                          </span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Highlights:</h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Core Subjects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-green-50 hover:text-green-600 transition-colors">
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
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2+</div>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10+</div>
            <p className="text-gray-600 mt-2">Technologies</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2+</div>
            <p className="text-gray-600 mt-2">Live Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience