
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Target, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Quality",
      description: "We ensure every seed meets the highest standards for purity and performance"
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: "Sustainability", 
      description: "Promoting eco-friendly farming practices for future generations"
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-600" />,
      title: "Local Support",
      description: "Understanding and addressing the unique needs of regional farmers"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Innovation",
      description: "Bringing the latest agricultural technologies to local farmers"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Nearly three decades of dedicated service to the farming community across Maharashtra
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Since 1996, we have proudly served as an authorized distributor for 
                  leading agricultural seed companies, bringing high-quality 
                  agricultural seeds to farmers across Maharashtra.
                </p>
                <p>
                  Our journey began with a simple mission: to empower local farmers 
                  with access to premium seeds and expert agricultural guidance. Over 
                  the years, we have built strong relationships within the farming 
                  community, understanding their unique challenges and requirements.
                </p>
                <p>
                  Today, we cover Pune, Nashik, Aurangabad, and parts of 
                  Ahmednagar districts, serving thousands of farmers with reliable seed 
                  distribution and comprehensive agricultural support.
                </p>
                <p>
                  Our partnerships with leading seed companies ensure that we offer 
                  only the finest varieties, backed by extensive research and proven 
                  performance in local conditions.
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">1996</div>
                    <div className="text-gray-700">Established partnerships with leading seed companies</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">2000s</div>
                    <div className="text-gray-700">Expanded distribution network across four districts</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">2010s</div>
                    <div className="text-gray-700">Introduced comprehensive agronomic support services</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">2020s</div>
                    <div className="text-gray-700">Launched digital customer portal for enhanced service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To empower farmers with high-quality seeds, expert guidance, and reliable 
                  support services that enhance agricultural productivity and sustainability 
                  across our service regions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the most trusted partner for farmers in Maharashtra, fostering 
                  agricultural growth through innovation, quality, and unwavering 
                  commitment to farmer success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">
              Experienced professionals dedicated to farmer success
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Collaborative Partnership</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our team combines decades of agricultural expertise with deep local knowledge. 
              From agronomists to distribution specialists, we work together to ensure every 
              farmer receives the support they need for successful harvests. Our collaborative 
              approach with leading seed companies brings together the best of research, 
              development, and on-ground experience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
