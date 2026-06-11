import { Mail, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-6">
            <p className="text-lg text-gray-700">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a
                href="mailto:abisha@example.com"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
                Email
              </a>
              
              <a
                href="https://www.linkedin.com/in/b-abisha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              
              <a
                href="https://github.com/Abisha5823"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> abisha5823@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact