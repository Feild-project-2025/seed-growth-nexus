
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, ShoppingCart, UserPlus, LogIn } from "lucide-react";

const CustomerPortal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Portal</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Access your account, browse products, and manage orders with ease
          </p>
        </div>
      </section>

      {/* Portal Options */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Login */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LogIn className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Existing Customer</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Sign in to access your dashboard, view order history, and place new orders
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• View past orders and track deliveries</li>
                  <li>• Access your saved favorites</li>
                  <li>• Quick reorder functionality</li>
                  <li>• Manage delivery preferences</li>
                </ul>
                <Link to="/login">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                    Sign In
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Register */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">New Customer</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Create your account to start ordering premium seeds and get expert support
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Access to our complete product catalog</li>
                  <li>• Personalized product recommendations</li>
                  <li>• Expert agronomic consultation</li>
                  <li>• Flexible delivery options</li>
                </ul>
                <Link to="/register">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                    Create Account
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Creating an Account</h2>
            <p className="text-lg text-gray-600">
              Enjoy enhanced features and personalized service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Easy Ordering</h3>
                <p className="text-gray-600">
                  Browse our catalog, add items to cart, and checkout securely with saved preferences
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
                <p className="text-gray-600">
                  Get product recommendations based on your farming profile and past orders
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">24/7</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Access</h3>
                <p className="text-gray-600">
                  Access your account, place orders, and get support anytime, anywhere
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              Simple steps to get started with our customer portal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Create Account</h3>
              <p className="text-gray-600">Sign up with your basic details and farming information</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Browse Products</h3>
              <p className="text-gray-600">Explore our catalog and select the right seeds for your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Place Order</h3>
              <p className="text-gray-600">Add items to cart and complete secure checkout</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Delivery</h3>
              <p className="text-gray-600">Receive your quality seeds at your preferred location</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerPortal;
