import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import craneLogo from "@/assets/crane-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={craneLogo} alt="BuildFlow Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold construction-orange">BuildFlow</h3>
                <p className="text-sm text-gray-300">Construction Materials</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for high-quality construction materials. 
              Building the future, one project at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold construction-orange">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/categories" className="block text-gray-300 hover:text-white transition-colors">
                Categories
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/cart" className="block text-gray-300 hover:text-white transition-colors">
                Shopping Cart
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold construction-orange">Categories</h4>
            <nav className="space-y-2">
              <Link to="/categories/concrete" className="block text-gray-300 hover:text-white transition-colors">
                Concrete & Cement
              </Link>
              <Link to="/categories/steel" className="block text-gray-300 hover:text-white transition-colors">
                Steel & Metal
              </Link>
              <Link to="/categories/aggregates" className="block text-gray-300 hover:text-white transition-colors">
                Aggregates
              </Link>
              <Link to="/categories/tools" className="block text-gray-300 hover:text-white transition-colors">
                Tools & Equipment
              </Link>
              <Link to="/categories/safety" className="block text-gray-300 hover:text-white transition-colors">
                Safety Equipment
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold construction-orange">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 construction-orange mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-base">
                    123 Industrial Avenue<br />
                    Construction District<br />
                    Building City, BC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 construction-orange flex-shrink-0" />
                <p className="text-white font-bold text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 construction-orange flex-shrink-0" />
                <p className="text-white font-semibold text-base">info@buildflow.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 construction-orange mt-0.5 flex-shrink-0" />
                <div className="text-white font-medium text-base">
                  <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p>Sat: 8:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} BuildFlow Construction Materials. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};