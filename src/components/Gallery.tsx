
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, Eye } from 'lucide-react';

const Gallery = () => {
  const designs = [
    {
      id: 1,
      title: "تصميم الجرافيك الحديث",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      likes: 342,
      views: 1250,
      price: "75 ريال"
    },
    {
      id: 2,
      title: "النمط الكلاسيكي الأنيق",
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f824?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      likes: 456,
      views: 2100,
      price: "85 ريال"
    },
    {
      id: 3,
      title: "تصميم عربي أصيل",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      likes: 298,
      views: 890,
      price: "80 ريال"
    },
    {
      id: 4,
      title: "طباعة فنية معاصرة",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
      likes: 187,
      views: 650,
      price: "70 ريال"
    },
    {
      id: 5,
      title: "النمط الرياضي العصري",
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      likes: 521,
      views: 1800,
      price: "90 ريال"
    },
    {
      id: 6,
      title: "التصميم الملون المرح",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      likes: 634,
      views: 2500,
      price: "95 ريال"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">معرض التصاميم</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعة مميزة من التصاميم الجاهزة أو استلهم منها لإنشاء تصميمك الخاص
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {designs.map((design) => (
            <Card key={design.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={design.image} 
                  alt={design.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                        معاينة
                      </Button>
                      <div className="flex items-center space-x-2 space-x-reverse text-white text-sm">
                        <Eye className="h-4 w-4" />
                        <span>{design.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {design.title}
                  </h3>
                  <div className="flex items-center space-x-1 space-x-reverse text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{design.rating}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2 space-x-reverse text-gray-500 text-sm">
                    <Heart className="h-4 w-4" />
                    <span>{design.likes}</span>
                  </div>
                  <div className="text-lg font-bold gradient-text">
                    {design.price}
                  </div>
                </div>
                
                <div className="flex space-x-2 space-x-reverse">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    اطلب الآن
                  </Button>
                  <Button variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50">
                    عدّل التصميم
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="outline" className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full text-lg font-semibold">
            عرض المزيد من التصاميم
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
