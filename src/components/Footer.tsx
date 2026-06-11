import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container-custom text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-gray-400">
          Built with <Heart className="inline w-4 h-4 text-red-500" /> using Next.js & Tailwind CSS
        </p>
        <p className="text-gray-500 text-sm mt-4">
          &copy; {new Date().getFullYear()} Abisha B. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer