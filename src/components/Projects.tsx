import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Annbu Enterprises',
      description: 'Professional business website with modern design and responsive layout. Built for a real client with full deployment.',
      tech: ['Next.js', 'React.js', 'Tailwind CSS'],
      liveLink: 'https://www.annbuenterprises.com/',
      githubLink: 'https://github.com/Abisha5823/solar-business-website-client-project',
      type: 'Business Website'
    },
    {
      title: 'AI Business Chatbot',
      description: 'AI-powered customer support chatbot that handles inquiries, provides instant responses, and improves customer engagement.',
      tech: ['Next.js', 'AI APIs', 'OpenAI'],
      liveLink: 'https://chatbot-client-five-nu.vercel.app/',
      githubLink: 'https://github.com/Abisha5823/Chatbot-client',
      type: 'AI Solutions'
    },
    {
      title: 'BizAI',
      description: 'SaaS Platform currently in development. Will provide AI-powered business analytics and automation tools.',
      tech: ['Next.js', 'Python', 'AI/ML'],
      liveLink: '#',
      githubLink: '#',
      type: 'SaaS Platform'
    },
    {
      title: 'WhatsApp Booking Agent',
      description: 'AI-powered conversational assistant for psychology clinics to automate client onboarding and appointment booking through WhatsApp chat experience.',
      tech: ['React', 'JavaScript', 'AI Integration', 'WhatsApp API'],
      liveLink: '#',
      githubLink: '#',
      type: 'AI Conversational Agent',
      features: [
        'Client information collection',
        'Appointment preference gathering',
        'Therapy service identification',
        'Lead generation & storage'
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-primary font-semibold">{project.type}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-white text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="inline-flex items-center gap-1 text-primary hover:text-blue-700"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects