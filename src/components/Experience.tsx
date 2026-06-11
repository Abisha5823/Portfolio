const Experience = () => {
  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      period: '2025',
      responsibilities: [
        'Built responsive websites for businesses',
        'Developed AI chatbot solutions for clients',
        'Handled deployment and maintenance',
        'Provided ongoing technical support'
      ]
    },
    {
      title: 'App Developer Intern',
      company: 'Hostwire, Chennai',
      period: '2025',
      responsibilities: [
        'Worked on Topsy client application development',
        'Implemented new features and enhancements',
        'Collaborated with development team',
        'Participated in code reviews and testing'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <p className="text-gray-500 font-semibold mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience