import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container-custom text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            Home
          </a>
          <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            Projects
          </a>
          <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            Contact
          </a>
        </div>
        <p className="text-gray-500">
  <Heart className="inline w-4 h-4 text-red-500 animate-pulse" /> Turning ideas into scalable software products and AI-powered business solutions. <Heart className="inline w-4 h-4 text-red-500 animate-pulse" />
</p>

<p className="text-gray-600 text-sm mt-4">
  © {new Date().getFullYear()} Abisha B. All rights reserved.
</p>
      </div>
    </footer>
  )
}

export default Footer