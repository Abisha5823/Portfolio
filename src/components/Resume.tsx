import { Download } from 'lucide-react'

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Resume</h2>
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-8">
            Download my resume to learn more about my skills, experience, and education.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={20} />
            Download Resume (PDF)
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Note: The resume is in PDF format for easy viewing.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Resume