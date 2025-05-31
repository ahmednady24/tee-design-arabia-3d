
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Shirt, ArrowLeft, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartDesign = () => {
    navigate('/design');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 ml-2" />
                تصميم ثلاثي الأبعاد متطور
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">صمّم</span> تيشيرتك
                <br />
                <span className="text-gray-800">المثالي</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                احترف التصميم مع أدواتنا المتطورة. ارسم، ارفع صورك، أو اختر من مكتبتنا الحصرية.
                اطلب تيشيرتك المخصص بأعلى جودة وأسرع تسليم.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleStartDesign}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Shirt className="h-5 w-5 ml-2" />
                ابدأ التصميم الآن
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold"
              >
                <Play className="h-5 w-5 ml-2" />
                شاهد العرض التوضيحي
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-8 space-x-reverse pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">+5000</div>
                <div className="text-gray-600">تصميم تم إنشاؤه</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">+2000</div>
                <div className="text-gray-600">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4.9★</div>
                <div className="text-gray-600">تقييم العملاء</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative z-10">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-4 border-4 border-white/30 rounded-xl"></div>
                    <div className="text-center text-white">
                      <Shirt className="h-20 w-20 mx-auto mb-4 opacity-90" />
                      <h3 className="text-2xl font-bold mb-2">معاينة 3D</h3>
                      <p className="text-blue-100">تصميم تفاعلي بزاوية 360°</p>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <p className="text-gray-500 font-medium">يثق بنا أكثر من 2000 عميل</p>
          </div>
          <div className="flex justify-center items-center space-x-12 space-x-reverse opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">StartupHub</div>
            <div className="text-2xl font-bold text-gray-400">CreativeStudio</div>
            <div className="text-2xl font-bold text-gray-400">DesignPro</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
