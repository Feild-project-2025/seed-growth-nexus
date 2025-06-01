
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Agronomy = () => {
  const bestPractices = [
    {
      title: "Soil Testing",
      description: "Regular soil analysis for optimal nutrient management",
      tips: [
        "Test soil pH and nutrient levels before planting",
        "Conduct tests every 2-3 years for accurate monitoring", 
        "Collect samples from multiple field locations"
      ]
    },
    {
      title: "Planting Times",
      description: "Strategic timing for maximum yield potential",
      tips: [
        "Follow regional sowing calendars for different crops",
        "Monitor weather patterns and rainfall predictions",
        "Consider monsoon timing for rain-fed crops"
      ]
    },
    {
      title: "Pest Control",
      description: "Integrated pest management for healthy crops",
      tips: [
        "Use biological control methods when possible",
        "Apply pesticides only when necessary and as recommended",
        "Rotate crops to break pest cycles"
      ]
    },
    {
      title: "Water Management",
      description: "Efficient irrigation and water conservation",
      tips: [
        "Install drip irrigation for water efficiency",
        "Practice mulching to retain soil moisture",
        "Harvest rainwater for supplemental irrigation"
      ]
    }
  ];

  const downloadableResources = [
    {
      title: "Crop Calendar for Telangana",
      description: "Seasonal planting guide for all major crops",
      size: "2.5 MB PDF"
    },
    {
      title: "Integrated Pest Management Guide",
      description: "Comprehensive IPM strategies for common pests",
      size: "4.1 MB PDF"
    },
    {
      title: "Soil Health Management",
      description: "Best practices for maintaining soil fertility",
      size: "3.2 MB PDF"
    },
    {
      title: "Water-Wise Farming Techniques",
      description: "Efficient irrigation and water conservation methods",
      size: "2.8 MB PDF"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Agronomy & Support</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert guidance and resources to maximize your farming success
          </p>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agricultural Best Practices</h2>
            <p className="text-lg text-gray-600">
              Essential farming techniques for optimal crop performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold">{index + 1}</span>
                    </div>
                    {practice.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{practice.description}</p>
                  <ul className="space-y-2">
                    {practice.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Downloadable Resources</h2>
            <p className="text-lg text-gray-600">
              Comprehensive guides and reference materials for farmers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-3">{resource.description}</p>
                      <p className="text-sm text-gray-500">{resource.size}</p>
                    </div>
                    <div className="ml-4">
                      <Button className="bg-green-600 hover:bg-green-700">
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Consultation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ask an Expert</h2>
            <p className="text-lg text-gray-600">
              Get personalized agronomic advice from our experienced team
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Submit Your Question</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="district">District *</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your district" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ranga-reddy">Ranga Reddy</SelectItem>
                        <SelectItem value="nalgonda">Nalgonda</SelectItem>
                        <SelectItem value="mahabubnagar">Mahabubnagar</SelectItem>
                        <SelectItem value="medak">Medak</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="crop">Primary Crop</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your crop" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maize">Maize</SelectItem>
                        <SelectItem value="rice">Rice</SelectItem>
                        <SelectItem value="cotton">Cotton</SelectItem>
                        <SelectItem value="pulses">Pulses</SelectItem>
                        <SelectItem value="vegetables">Vegetables</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="farmSize">Farm Size (in acres)</Label>
                  <Input
                    id="farmSize"
                    type="number"
                    placeholder="Enter your farm size"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="question">Your Question *</Label>
                  <Textarea
                    id="question"
                    placeholder="Describe your farming challenge or question in detail..."
                    required
                    className="mt-1 min-h-[120px]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - General inquiry</SelectItem>
                      <SelectItem value="medium">Medium - Planning for next season</SelectItem>
                      <SelectItem value="high">High - Current crop issue</SelectItem>
                      <SelectItem value="urgent">Urgent - Immediate problem</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                >
                  Submit Question
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Response Timeline</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• General inquiries: Within 24-48 hours</li>
                  <li>• Seasonal planning: Within 12-24 hours</li>
                  <li>• Current crop issues: Within 6-12 hours</li>
                  <li>• Urgent problems: Within 2-4 hours</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Support Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive assistance for all your agricultural needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Crop Selection Guidance</h3>
                <p className="text-gray-600">
                  Expert advice on choosing the right varieties for your soil and climate conditions
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Mobile Support</h3>
                <p className="text-gray-600">
                  Phone and WhatsApp support for quick assistance and real-time problem solving
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Field Visits</h3>
                <p className="text-gray-600">
                  On-site consultations for complex issues and personalized farming strategies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agronomy;
