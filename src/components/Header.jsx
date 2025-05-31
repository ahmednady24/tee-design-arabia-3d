
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shirt, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleStartDesign = () => {
    navigate('/design');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Shirt className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">TeeDesign</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              الرئيسية
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              معرض التصاميم
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              من نحن
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              تواصل معنا
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleStartDesign}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              ابدأ التصميم
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                معرض التصاميم
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </a>
              <div className="px-3 py-2">
                <Button 
                  onClick={handleStartDesign}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                >
                  ابدأ التصميم
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
