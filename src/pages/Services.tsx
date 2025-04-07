
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { 
  Check, 
  Wifi, 
  Tv, 
  Headphones, 
  ShieldCheck, 
  Upload, 
  Download,
  Zap,
  Globe,
  Network 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features,
  bgClass = "bg-white",
  iconClass = "text-primary"
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  features: string[];
  bgClass?: string;
  iconClass?: string;
}) => {
  return (
    <Card className={`${bgClass} border-0 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group hover:-translate-y-2`}>
      <CardHeader>
        <div className={`${iconClass} rounded-full p-3 inline-flex mb-4 group-hover:scale-110 transition-transform duration-300 bg-primary/10`}>
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-10">
        {/* Header Section with Pattern Background */}
        <section className="bg-gradient-to-r from-secondary to-secondary/90 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Our Services</h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Experience premium connectivity and entertainment solutions tailored to your needs.
            </p>
          </div>
        </section>
        
        {/* Services Section with Enhanced Design */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive range of services designed to provide you with the best internet and entertainment experience.
              </p>
              <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Wifi size={30} />}
                title="High-Speed Internet"
                description="Blazing fast fiber internet for seamless browsing, streaming, and gaming."
                features={[
                  "Speeds up to 500 Mbps",
                  "Low latency connections",
                  "Unlimited data options",
                  "No buffering or lag",
                  "Reliable uptime"
                ]}
                iconClass="text-blue-500"
              />
              
              <ServiceCard 
                icon={<Tv size={30} />}
                title="Entertainment Packages"
                description="Premium OTT platform access bundled with your internet connection."
                features={[
                  "Disney+ Hotstar Premium",
                  "Netflix, Amazon Prime Video",
                  "ZEE5, SonyLIV, and more",
                  "Combined OTT packages",
                  "Watch on multiple devices"
                ]}
                bgClass="bg-primary/5"
                iconClass="text-purple-500"
              />
              
              <ServiceCard 
                icon={<Headphones size={30} />}
                title="Customer Support"
                description="Dedicated customer service to assist you 24/7 with any issues."
                features={[
                  "24/7 customer helpline",
                  "Fast issue resolution",
                  "Online chat support",
                  "Technical assistance",
                  "Service status updates"
                ]}
                iconClass="text-green-500"
              />
              
              <ServiceCard 
                icon={<ShieldCheck size={30} />}
                title="Network Security"
                description="Advanced security features to protect your connection and devices."
                features={[
                  "Firewall protection",
                  "Anti-virus solutions",
                  "Parental controls",
                  "Secure WiFi networks",
                  "Regular security updates"
                ]}
                bgClass="bg-primary/5"
                iconClass="text-red-500"
              />
              
              <ServiceCard 
                icon={<Upload size={30} />}
                title="Business Solutions"
                description="Specialized internet plans for businesses and institutions."
                features={[
                  "Symmetric upload/download",
                  "Dedicated bandwidth",
                  "Static IP options",
                  "Business-grade support",
                  "Custom network solutions"
                ]}
                iconClass="text-amber-500"
              />
              
              <ServiceCard 
                icon={<Download size={30} />}
                title="Special Plans"
                description="Customized plans for students, government, and specific purposes."
                features={[
                  "Student sponsorship schemes",
                  "Government institution plans",
                  "Video surveillance solutions",
                  "Long-term benefits",
                  "Flexible payment options"
                ]}
                bgClass="bg-primary/5"
                iconClass="text-teal-500"
              />
            </div>
          </div>
        </section>
        
        {/* Additional Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enhanced features to complement your connectivity experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-primary mb-4 p-3 bg-primary/10 rounded-full inline-block">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Speed Booster</h3>
                <p className="text-gray-600">
                  Temporarily upgrade your plan speed for bandwidth-intensive activities
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-primary mb-4 p-3 bg-primary/10 rounded-full inline-block">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Access</h3>
                <p className="text-gray-600">
                  Access special content from around the world with our global IP service
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-primary mb-4 p-3 bg-primary/10 rounded-full inline-block">
                  <Network size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Mesh WiFi</h3>
                <p className="text-gray-600">
                  Extended WiFi coverage throughout your home with our premium mesh system
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section with Gradient Background */}
        <section className="bg-gradient-to-r from-primary to-primary-hover py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience High-Speed Internet?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Contact our team today to find the perfect service for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8">
                Contact Us
              </Button>
              </Link>
              <Link to="/offers">
              <Button variant="outline" className="border-white text-black hover:text-white hover:bg-white/10 px-8">
                View All Plans
              </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
