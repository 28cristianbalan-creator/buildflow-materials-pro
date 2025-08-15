import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer id="contact" className="bg-construction-slate text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <Logo className="brightness-0 invert" />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted partner for premium construction materials. 
              Quality, reliability, and service excellence since 2008.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-bold">@</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">Clay Bricks</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">BCA Blocks</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">Aggregates</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">Concrete Blocks</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">Building Sand</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">Material Supply</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">Bulk Orders</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">Site Delivery</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">Project Consultation</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors duration-300">Quality Testing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">123 Industrial Avenue</p>
                  <p className="text-white/80">Construction District, CD 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-white/80">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-white/80">info@buildflow.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Mon-Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-white/80">Sat: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 BuildFlow. All rights reserved. Built with quality and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;