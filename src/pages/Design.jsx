
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ArrowRight, Palette, Upload, Type, Shirt, Save, ShoppingCart, 
  RotateCcw, ZoomIn, ZoomOut, Download, Eye
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Design = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Design States
  const [selectedTool, setSelectedTool] = useState('colors');
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedMaterial, setSelectedMaterial] = useState('cotton');
  const [selectedNeckType, setSelectedNeckType] = useState('round');
  const [quantity, setQuantity] = useState(1);
  const [uploadedImage, setUploadedImage] = useState(null);

  // Pricing
  const basePrices = {
    cotton: 50,
    cotton_blend: 45,
    polyester: 40
  };

  const sizeMultipliers = {
    XS: 0.9, S: 0.95, M: 1, L: 1.05, XL: 1.1, XXL: 1.15
  };

  const calculatePrice = () => {
    const basePrice = basePrices[selectedMaterial];
    const sizeMultiplier = sizeMultipliers[selectedSize];
    return Math.round(basePrice * sizeMultiplier * quantity);
  };

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
    const orderData = {
      design: selectedColor,
      size: selectedSize,
      material: selectedMaterial,
      neckType: selectedNeckType,
      quantity: quantity,
      price: calculatePrice()
    };
    
    navigate('/order', { state: { orderData } });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        toast({
          title: "تم رفع الصورة",
          description: "تم رفع صورتك بنجاح إلى منطقة التصميم"
        });
      };
      reader.readAsDataURL(file);
    }
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

  const materials = [
    { value: 'cotton', label: 'قطن 100%', price: '+0 ريال' },
    { value: 'cotton_blend', label: 'قطن مخلوط', price: '-5 ريال' },
    { value: 'polyester', label: 'بوليستر', price: '-10 ريال' }
  ];

  const neckTypes = [
    { value: 'round', label: 'راوند نيك' },
    { value: 'v_neck', label: 'V-نيك' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
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
                اطلب الآن - {calculatePrice()} ريال
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Tools and Options Panel */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Design Tools */}
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

            {/* Tool Options */}
            <Card>
              <CardHeader>
                <CardTitle>خيارات التصميم</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Colors */}
                {selectedTool === 'colors' && (
                  <div>
                    <Label className="text-base font-medium mb-3 block">اختر لون التيشيرت</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-10 h-10 rounded-full border-2 transition-all ${
                            selectedColor === color ? 'border-gray-800 scale-110' : 'border-gray-300'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Upload */}
                {selectedTool === 'upload' && (
                  <div>
                    <Label className="text-base font-medium mb-3 block">رفع صورة</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <Label htmlFor="image-upload" className="cursor-pointer">
                        <span className="text-blue-600 hover:text-blue-700">اختر صورة</span>
                        <span className="text-gray-500"> أو اسحبها هنا</span>
                      </Label>
                    </div>
                  </div>
                )}

                {/* Text Tool */}
                {selectedTool === 'text' && (
                  <div className="space-y-4">
                    <Label className="text-base font-medium">إضافة نص</Label>
                    <Input placeholder="اكتب النص هنا..." />
                    <Button className="w-full">إضافة النص</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* T-shirt Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>مواصفات التيشيرت</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Size */}
                <div>
                  <Label className="text-base font-medium mb-3 block">المقاس</Label>
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

                {/* Material */}
                <div>
                  <Label className="text-base font-medium mb-3 block">نوع الخامة</Label>
                  <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {materials.map((material) => (
                        <SelectItem key={material.value} value={material.value}>
                          <div className="flex justify-between items-center w-full">
                            <span>{material.label}</span>
                            <span className="text-sm text-gray-500">{material.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Neck Type */}
                <div>
                  <Label className="text-base font-medium mb-3 block">شكل الرقبة</Label>
                  <Select value={selectedNeckType} onValueChange={setSelectedNeckType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {neckTypes.map((neck) => (
                        <SelectItem key={neck.value} value={neck.value}>
                          {neck.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Quantity */}
                <div>
                  <Label className="text-base font-medium mb-3 block">الكمية</Label>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <Input 
                      type="number" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="text-center w-20"
                    />
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Price Display */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">السعر الإجمالي</p>
                    <p className="text-2xl font-bold gradient-text">{calculatePrice()} ريال</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Design Canvas */}
          <div className="lg:col-span-3">
            <Card className="h-[700px]">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center">
                  <CardTitle>منطقة التصميم - معاينة 3D</CardTitle>
                  <div className="flex space-x-2 space-x-reverse">
                    <Button variant="outline" size="sm">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-full p-6">
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  
                  {/* 3D T-shirt Preview */}
                  <div 
                    className="w-80 h-96 rounded-lg flex items-center justify-center text-white text-2xl font-bold relative transition-all duration-300 shadow-2xl"
                    style={{ backgroundColor: selectedColor }}
                  >
                    <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-white/30 rounded-lg flex items-center justify-center">
                      
                      {/* Uploaded Image Preview */}
                      {uploadedImage ? (
                        <img 
                          src={uploadedImage} 
                          alt="تصميم مرفوع" 
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      ) : (
                        <div className="text-center">
                          <Shirt className="h-20 w-20 mx-auto mb-4 opacity-50" />
                          <p className="text-lg opacity-75">منطقة التصميم</p>
                          <p className="text-sm opacity-50 mt-2">المقاس: {selectedSize}</p>
                          <p className="text-xs opacity-50 mt-1">{materials.find(m => m.value === selectedMaterial)?.label}</p>
                        </div>
                      )}
                    </div>

                    {/* 3D Effect Indicators */}
                    <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs">3D</span>
                    </div>
                  </div>

                  {/* Design Position Indicators */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">موضع التصميم</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <Button size="sm" variant="outline" className="text-xs">الصدر</Button>
                        <Button size="sm" variant="outline" className="text-xs">الظهر</Button>
                        <Button size="sm" variant="outline" className="text-xs">الكم</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="text-center text-gray-600">
                  <h3 className="font-medium mb-3 text-gray-800">نصائح للتصميم</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <strong className="text-blue-800">الألوان:</strong> اختر ألوان متباينة للحصول على أفضل ظهور للتصميم
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <strong className="text-green-800">الصور:</strong> استخدم صور عالية الجودة (300 DPI) للحصول على أفضل نتيجة
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <strong className="text-purple-800">المعاينة:</strong> يمكنك تدوير التيشيرت لمشاهدة التصميم من جميع الزوايا
                    </div>
                  </div>
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
