
import { Button } from '@/components/ui/button';
import { Shirt, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Shirt className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TeeDesign</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              منصة تصميم التيشيرتات المخصصة الأولى في المنطقة. نجعل أحلامك التصميمية حقيقة بأعلى جودة وأسرع تسليم.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">معرض التصاميم</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">من نحن</a>
              </li>
              <li>
                <a href="/design" className="text-gray-300 hover:text-white transition-colors">ابدأ التصميم</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">خدماتنا</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">تصميم ثلاثي الأبعاد</li>
              <li className="text-gray-300">طباعة عالية الجودة</li>
              <li className="text-gray-300">توصيل سريع</li>
              <li className="text-gray-300">ضمان الجودة</li>
              <li className="text-gray-300">خدمة عملاء 24/7</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@teedesign.com</span>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-right">
            © 2024 TeeDesign. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              شروط الاستخدام
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              سياسة الاسترداد
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
