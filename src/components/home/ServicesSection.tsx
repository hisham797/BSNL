
import React from 'react';
import { Button } from "@/components/ui/button";
import { Wifi, Tv, Shield, Headphones, Globe, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-6 group">
      <div className="mb-4 p-3 bg-primary/10 rounded-full inline-block">
        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Wifi size={24} />,
      title: "Fast Internet",
      description: "High-speed fiber internet with speeds up to 500 Mbps for seamless browsing and streaming."
    },
    {
      icon: <Tv size={24} />,
      title: "Entertainment Packs",
      description: "Access to premium OTT platforms including Disney+, Netflix, Amazon Prime, and more."
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Connection",
      description: "Advanced security features to protect your network and devices from threats."
    },
    {
      icon: <Headphones size={24} />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with any issues or queries."
    },
    {
      icon: <Globe size={24} />,
      title: "Wide Coverage",
      description: "Extensive network coverage across Kerala to provide reliable connectivity."
    },
    {
      icon: <Layers size={24} />,
      title: "Flexible Plans",
      description: "Customizable plans to suit your needs and budget with no hidden charges."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of services designed to provide you with the best internet and entertainment experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-primary hover:bg-primary-hover text-white">
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
