
import { Link } from "react-router-dom";
import { Phone, Bell, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Seed Distribution Company</span>
            </div>
            <p className="text-gray-300 mb-4">
              Authorized distributor for quality seed suppliers, serving farmers across 
              multiple regions with premium seeds since 1996.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">Sample City, Sample State</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">info@seedcompany.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-green-400 transition-colors">Our Products</Link></li>
              <li><Link to="/service-areas" className="text-gray-300 hover:text-green-400 transition-colors">Service Areas</Link></li>
              <li><Link to="/agronomy" className="text-gray-300 hover:text-green-400 transition-colors">Agronomy Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Maize Hybrids</li>
              <li>Rice Hybrids</li>
              <li>Pulses & Cereals</li>
              <li>Vermicompost</li>
              <li>Expert Consultation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Seed Distribution Company. All rights reserved. | Serving farmers since 1996
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
