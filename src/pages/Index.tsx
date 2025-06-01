import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Handshake, MapPin, Calendar, CheckCircle } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Handshake className="w-8 h-8 text-green-600" />,
      title: "Partnered with Leading Suppliers",
      description: "Authorized distributor ensuring authentic, high-quality seeds"
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "Established in 1996",
      description: "Nearly three decades of trusted service to local farmers"
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      title: "Locally Trusted",
      description: "Deep understanding of regional farming needs and conditions"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "On-time Deliveries",
      description: "Reliable distribution network across all service districts"
    }
  ];

  const testimonials = [
    {
      quote: "Using these seeds boosted my yield by 20%. The quality is consistently excellent.",
      farmer: "Rajesh Kumar",
      location: "Rangareddy District"
    },
    {
      quote: "Their agronomic support helped me choose the right variety for my soil type.",
      farmer: "Sunitha Devi",
      location: "Medak District"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Farmers with Trusted Seeds
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your reliable partner in agriculture since 1996. Quality seeds, expert guidance, 
              and local support across Telangana districts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8">
                  View Products
                </Button>
              </Link>
              <Link to="/agronomy">
                <Button size="lg" variant="outline" className="border-white hover:bg-white text-lg px-8 text-green-700">
                  Get Expert Advice
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supporting Agriculture Across Telangana
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As an authorized distributor for leading seed companies, we've been serving 
              farmers in Hyderabad, Rangareddy, Medak, and Sangareddy districts 
              with dedication and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-600">
              Comprehensive selection of high-quality seeds and agricultural inputs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌽</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Maize Hybrids</h3>
                <p className="text-gray-600">High-yielding maize varieties for optimal productivity</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Rice Hybrids</h3>
                <p className="text-gray-600">Premium rice varieties adapted to local conditions</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🫘</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pulses</h3>
                <p className="text-gray-600">Nutritious pulse varieties for diverse farming needs</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🪱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Vermicompost</h3>
                <p className="text-gray-600">Organic soil enhancement for sustainable farming</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Farmers Say</h2>
            <p className="text-lg text-gray-600">Success stories from our farming community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold text-gray-900">{testimonial.farmer}</div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow with Us?</h2>
          <p className="text-xl mb-8">
            Join thousands of farmers who trust us for their seed requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/customer-portal">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Create Account
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white hover:bg-white text-green-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
