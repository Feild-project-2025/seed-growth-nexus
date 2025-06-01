
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "maize", name: "Maize Hybrids" },
    { id: "rice", name: "Rice Hybrids" },
    { id: "pulses", name: "Pulses" },
    { id: "organic", name: "Organic Inputs" }
  ];

  const products = [
    {
      id: 1,
      name: "Kaveri Super 981",
      category: "maize",
      type: "Maize Hybrid",
      description: "High-yielding maize variety with excellent grain quality",
      features: ["90-95 days maturity", "Drought tolerant", "Disease resistant"],
      price: "₹450/kg",
      availability: "In Stock"
    },
    {
      id: 2,
      name: "Kaveri Yellow Gold",
      category: "maize",
      type: "Maize Hybrid",
      description: "Premium yellow maize with superior kernel characteristics",
      features: ["85-90 days maturity", "High protein content", "Weather resilient"],
      price: "₹480/kg",
      availability: "In Stock"
    },
    {
      id: 3,
      name: "Kaveri 468",
      category: "rice",
      type: "Rice Hybrid",
      description: "Long grain rice variety with excellent cooking quality",
      features: ["120-125 days maturity", "High milling recovery", "Aromatic"],
      price: "₹350/kg",
      availability: "In Stock"
    },
    {
      id: 4,
      name: "Kaveri Sampada",
      category: "rice",
      type: "Rice Hybrid",
      description: "Medium grain rice suitable for various growing conditions",
      features: ["110-115 days maturity", "Good tillering", "Pest resistant"],
      price: "₹320/kg",
      availability: "Limited Stock"
    },
    {
      id: 5,
      name: "Kaveri Tur (Arhar)",
      category: "pulses",
      type: "Pulse Variety",
      description: "High-yielding pigeon pea variety",
      features: ["150-160 days maturity", "Bold grain size", "Machine harvestable"],
      price: "₹280/kg",
      availability: "In Stock"
    },
    {
      id: 6,
      name: "Premium Vermicompost",
      category: "organic",
      type: "Organic Input",
      description: "Rich organic fertilizer for soil health improvement",
      features: ["100% organic", "Improves soil structure", "Slow release nutrients"],
      price: "₹15/kg",
      availability: "In Stock"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Premium quality seeds and agricultural inputs for enhanced productivity
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge 
                      variant={product.availability === "In Stock" ? "default" : "secondary"}
                      className={product.availability === "In Stock" ? "bg-green-600" : ""}
                    >
                      {product.availability}
                    </Badge>
                  </div>
                  <p className="text-sm text-green-600 font-medium">{product.type}</p>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">
                      {product.category === "maize" ? "🌽" :
                       product.category === "rice" ? "🌾" :
                       product.category === "pulses" ? "🫘" : "🪱"}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">
              Our most popular and high-performing varieties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌽</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Kaveri Super 981</h3>
                <p className="text-gray-600 mb-4">Top-selling maize hybrid with proven performance</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-2 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌾</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Kaveri 468</h3>
                <p className="text-gray-600 mb-4">Premium rice variety for discerning farmers</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-2 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🪱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Vermicompost</h3>
                <p className="text-gray-600 mb-4">Organic soil enhancement for sustainable farming</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
