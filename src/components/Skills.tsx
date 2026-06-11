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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
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