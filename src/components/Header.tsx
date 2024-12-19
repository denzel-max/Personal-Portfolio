import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-black">Dev Ellis</div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-black hover:text-primary">Home</a>
            <a href="#about" className="text-black hover:text-primary">About</a>
            <a href="#portfolio" className="text-black hover:text-primary">Portfolio</a>
            <a href="#blog" className="text-black hover:text-primary">Blog</a>
            <a href="#contact" className="text-black hover:text-primary">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com" className="text-black hover:text-primary">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-black hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@devellis.com" className="text-black hover:text-primary">
              <Mail size={20} />
            </a>
          </div>

          <button 
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-black hover:text-primary">Home</a>
            <a href="#about" className="block px-3 py-2 text-black hover:text-primary">About</a>
            <a href="#portfolio" className="block px-3 py-2 text-black hover:text-primary">Portfolio</a>
            <a href="#blog" className="block px-3 py-2 text-black hover:text-primary">Blog</a>
            <a href="#contact" className="block px-3 py-2 text-black hover:text-primary">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;