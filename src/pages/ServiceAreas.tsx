
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Truck, CheckCircle } from "lucide-react";

const ServiceAreas = () => {
  const districts = [
    {
      name: "Pune",
      description: "Comprehensive coverage including urban periphery and rural farming areas",
      highlights: ["Urban-rural farming", "Vegetable cultivation", "Commercial crops"]
    },
    {
      name: "Nashik",
      description: "Serving traditional agricultural regions with diverse crop patterns", 
      highlights: ["Rice cultivation", "Cotton farming", "Horticulture"]
    },
    {
      name: "Aurangabad",
      description: "Supporting dryland farming and sustainable agriculture practices",
      highlights: ["Dryland crops", "Pulses", "Millets"]
    },
    {
      name: "Ahmednagar (Partial)",
      description: "Selected areas with focus on emerging agricultural opportunities",
      highlights: ["Mixed farming", "Dairy support", "Crop diversification"]
    }
  ];

  const deliveryFeatures = [
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Reliable Delivery Network",
      description: "Established logistics covering all service districts with timely deliveries"
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      title: "Local Presence", 
      description: "Deep understanding of regional farming patterns and seasonal requirements"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Quality Assurance",
      description: "Proper storage and handling ensuring seed quality throughout the supply chain"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Areas</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Delivering high-quality seeds to farmers across four key districts in Maharashtra
          </p>
        </div>
      </section>

      {/* Districts Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Coverage Areas</h2>
            <p className="text-lg text-gray-600">
              Serving farmers across diverse agricultural landscapes since 1996
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {districts.map((district, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{district.name}</h3>
                      <p className="text-gray-700 mb-4">{district.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Focus Areas:</h4>
                        <ul className="space-y-1">
                          {district.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Delivery Network</h2>
            <p className="text-lg text-gray-600">
              Strategic distribution points ensuring efficient seed delivery
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center relative">
              {/* Stylized Map Representation */}
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Service Area Map</h3>
                <p className="text-gray-600">
                  Interactive map showing our delivery coverage across<br />
                  Pune • Nashik • Aurangabad • Ahmednagar districts
                </p>
              </div>
              
              {/* District Markers */}
              <div className="absolute top-4 left-4 bg-white p-2 rounded shadow">
                <span className="text-sm font-medium">Ahmednagar</span>
              </div>
              <div className="absolute top-8 right-8 bg-white p-2 rounded shadow">
                <span className="text-sm font-medium">Pune</span>
              </div>
              <div className="absolute bottom-8 left-8 bg-white p-2 rounded shadow">
                <span className="text-sm font-medium">Aurangabad</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow">
                <span className="text-sm font-medium">Nashik</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Distribution Network</h2>
            <p className="text-lg text-gray-600">
              Advantages of our established logistics and local expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-green-100">Districts Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">28+</div>
              <div className="text-green-100">Years of Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-green-100">Villages Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Seeds in Your Area?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to confirm delivery availability to your specific location
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">Delivery Inquiry</p>
                  <p className="text-sm text-gray-600">Check if we deliver to your village</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <span className="text-green-600">📞</span>
                <div>
                  <p className="font-medium">Call: +91 20 1234 5678</p>
                  <p className="text-sm text-gray-600">Speak with our delivery team</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAreas;
