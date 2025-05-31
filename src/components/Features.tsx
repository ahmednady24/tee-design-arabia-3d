
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Shirt, Upload, Sparkles, Truck, CreditCard } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="h-12 w-12 text-blue-600" />,
      title: "تصميم ثلاثي الأبعاد",
      description: "شاهد تيشيرتك بزاوية 360 درجة واختبر التصميم قبل الطباعة",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Palette className="h-12 w-12 text-purple-600" />,
      title: "رسم حر وإبداعي",
      description: "ارسم تصميمك بنفسك باستخدام أدوات الرسم المتقدمة",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Upload className="h-12 w-12 text-pink-600" />,
      title: "رفع الصور",
      description: "اختر صورة من جهازك وحولها إلى تصميم رائع على التيشيرت",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: <Shirt className="h-12 w-12 text-green-600" />,
      title: "خيارات متنوعة",
      description: "اختر من مجموعة واسعة من الألوان والمقاسات والخامات",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Truck className="h-12 w-12 text-orange-600" />,
      title: "توصيل سريع",
      description: "نوصل طلبك في خلال 48 ساعة إلى باب منزلك",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-teal-600" />,
      title: "أسعار منافسة",
      description: "أفضل الأسعار مع ضمان الجودة العالية وخدمة ما بعد البيع",
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">لماذا نحن؟</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم لك تجربة فريدة في تصميم وطلب التيشيرتات المخصصة بأحدث التقنيات
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="bg-white/20 rounded-full p-2">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">جاهز لبدء التصميم؟</h3>
            <p className="text-xl mb-6 text-blue-100">
              انضم إلى آلاف العملاء السعداء واحصل على تيشيرتك المثالي اليوم
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              🚀 ابدأ التصميم الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
