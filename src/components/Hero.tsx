
import { Button } from '@/components/ui/button';
import { Sparkles, Palette, Shirt } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 text-blue-300 float-animation">
        <Sparkles className="h-12 w-12" />
      </div>
      <div className="absolute bottom-20 left-20 text-purple-300 float-animation" style={{ animationDelay: '2s' }}>
        <Palette className="h-16 w-16" />
      </div>
      <div className="absolute top-1/2 right-10 text-pink-300 float-animation" style={{ animationDelay: '4s' }}>
        <Shirt className="h-10 w-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">صمّم</span>
            <br />
            <span className="text-gray-800">تيشيرتك المثالي</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            اختر، صمم، واطلب تيشيرتك المخصص بتقنية ثلاثية الأبعاد المتطورة
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <span className="text-sm font-medium text-gray-700">✨ تصميم ثلاثي الأبعاد</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🎨 رسم حر</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <span className="text-sm font-medium text-gray-700">📱 رفع الصور</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <span className="text-sm font-medium text-gray-700">🚚 توصيل سريع</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              🎨 ابدأ التصميم الآن
            </Button>
            <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              📖 تصفح المعرض
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
              <div className="text-sm text-gray-600">تصميم مكتمل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-sm text-gray-600">عميل سعيد</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-gray-600">دعم فني</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">48س</div>
              <div className="text-sm text-gray-600">وقت التسليم</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
