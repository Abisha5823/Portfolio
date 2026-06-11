const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Abisha B
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            AI & Data Science Student
          </p>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-8">
            Full Stack Developer | AI Solutions Builder
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Built and deployed real-world client projects including:
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <span className="px-4 py-2 bg-white shadow-md rounded-full text-gray-700">• Anbu Enterprises Website</span>
            <span className="px-4 py-2 bg-white shadow-md rounded-full text-gray-700">• AI Business Chatbot</span>
            <span className="px-4 py-2 bg-white shadow-md rounded-full text-gray-700">• BizAI SaaS Platform</span>
          </div>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#resume"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero