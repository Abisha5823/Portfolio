const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'HTML/CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express.js', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'AI & ML',
      skills: ['AI APIs', 'OpenAI', 'TensorFlow', 'Pandas', 'NumPy']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Postman']
    }
  ]

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-900/50 hover:text-blue-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills