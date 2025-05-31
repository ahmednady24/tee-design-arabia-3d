
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Palette, Upload, Type, Shirt, Save, ShoppingCart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Design = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [selectedTool, setSelectedTool] = useState('colors');
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const [selectedSize, setSelectedSize] = useState('M');

  useEffect(() => {
    if (location.state?.editingDesign) {
      toast({
        title: "تحرير التصميم",
        description: `بدء تحرير تصميم: ${location.state.editingDesign}`,
      });
    }
  }, [location.state, toast]);

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleSaveDesign = () => {
    toast({
      title: "تم حفظ التصميم",
      description: "تم حفظ تصميمك بنجاح. يمكنك العودة إليه لاحقاً",
    });
  };

  const handleOrderNow = () => {
    toast({
      title: "تم إضافة التصميم إلى السلة",
      description: "تم إضافة تصميمك المخصص إلى سلة التسوق",
    });
  };

  const tools = [
    { id: 'colors', name: 'الألوان', icon: <Palette className="h-5 w-5" /> },
    { id: 'upload', name: 'رفع صورة', icon: <Upload className="h-5 w-5" /> },
    { id: 'text', name: 'إضافة نص', icon: <Type className="h-5 w-5" /> },
    { id: 'shapes', name: 'الأشكال', icon: <Shirt className="h-5 w-5" /> }
  ];

  const colors = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B', 
    '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16',
    '#000000', '#FFFFFF', '#6B7280', '#F3F4F6'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Button 
              onClick={handleBackToHome}
              variant="outline" 
              className="flex items-center space-x-2 space-x-reverse"
            >
              <ArrowRight className="h-4 w-4" />
              <span>العودة للرئيسية</span>
            </Button>
            
            <h1 className="text-2xl font-bold gradient-text">استوديو التصميم</h1>
            
            <div className="flex space-x-2 space-x-reverse">
              <Button onClick={handleSaveDesign} variant="outline">
                <Save className="h-4 w-4 ml-2" />
                حفظ التصميم
              </Button>
              <Button onClick={handleOrderNow} className="bg-gradient-to-r from-blue-600 to-purple-600">
                <ShoppingCart className="h-4 w-4 ml-2" />
                اطلب الآن
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tools Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>أدوات التصميم</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tools.map((tool) => (
                  <Button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool.id)}
                    variant={selectedTool === tool.id ? "default" : "outline"}
                    className="w-full justify-start"
                  >
                    {tool.icon}
                    <span className="mr-2">{tool.name}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Options Panel */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>خيارات التصميم</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedTool === 'colors' && (
                  <div>
                    <h4 className="font-medium mb-2">اختر اللون</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border-2 ${
                            selectedColor === color ? 'border-gray-800' : 'border-gray-300'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-medium mb-2">المقاس</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <Button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Design Canvas */}
          <div className="lg:col-span-3">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle>منطقة التصميم</CardTitle>
              </CardHeader>
              <CardContent className="h-full">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* T-shirt Preview */}
                  <div 
                    className="w-64 h-80 rounded-lg flex items-center justify-center text-white text-2xl font-bold relative"
                    style={{ backgroundColor: selectedColor }}
                  >
                    <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-white/30 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Shirt className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm opacity-75">منطقة التصميم</p>
                        <p className="text-xs opacity-50 mt-2">المقاس: {selectedSize}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="mt-4">
              <CardContent className="p-4">
                <div className="text-center text-gray-600">
                  <h3 className="font-medium mb-2">كيفية الاستخدام</h3>
                  <p className="text-sm">
                    استخدم الأدوات على اليسار لتخصيص تصميمك. اختر الألوان، ارفع الصور، أضف النصوص والأشكال لإنشاء تيشيرتك المثالي.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
