
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PriceCard = ({ 
  title, 
  price, 
  speed, 
  features,
  popular = false
}: { 
  title: string; 
  price: string; 
  speed: string; 
  features: string[];
  popular?: boolean;
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-8px] ${popular ? 'border-2 border-primary relative' : 'border border-gray-200'}`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Most Popular
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold text-gray-900">₹{price}</span>
          <span className="ml-1 text-xl font-medium text-gray-500">/mo</span>
        </div>
        <p className="mt-2 text-gray-600">{speed}</p>
      </div>
      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
        <Link to="/offers">
          <Button 
            className={`w-full ${popular ? 'bg-primary hover:bg-primary-hover' : 'bg-gray-800 hover:bg-gray-900'} text-white`}
          >
            Explore Offer
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const OffersSection = () => {
  return (
    <section className="py-20 bg-white">
      

      <div className="container mx-auto  px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Exclusive Offers Just for You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of high-speed internet plans with premium OTT services included.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="relative">
                {/* Red div overlaying the first box */}
                <div className="absolute -top-6  bg-[#ea384c] text-white font-bold py-2 px-4 rounded-lg shadow-lg transform -rotate-3 z-10">
                  Unlimited Data & calls
                </div>
                
                <PriceCard 
                  title="Fibre Basic" 
                  price="399" 
                  speed="60mbps"
                  features={[
                    "3300 GB FUP Data",
                    "Post-FUP: 4 Mbps",
                    "Post-FUP Speed: 4 Mbps",
                    "Entry level plans ( monthly )",
                    "24/7 Customer Support",
                  ]}
                />
              </div>
              
              <div className="relative">
                {/* Red div overlaying the second Card */}
                <div className="absolute -top-6  bg-[#ea384c] text-white font-bold py-2 px-4 rounded-lg shadow-lg transform -rotate-3 z-10">
                  Unlimited Data & calls
                </div>
                
                <PriceCard 
                  title="	Superstar Premium +" 
                  price="999" 
                  speed="200 Mbps"
                  features={[
                    "5000 GB Data FUP Data",
                    "Max Speed: 200 Mbps",
                    "Post-FUP: 10mbps",
                    "OTT4",
                    "24/7 Customer Support",
                  ]}
                  popular={true}
                />
              </div>
              
              <div className="relative">
                {/* Red div overlaying the third Card */}
                <div className="absolute -top-6  bg-[#ea384c] text-white font-bold py-2 px-4 rounded-lg shadow-lg transform -rotate-3 z-10">
                  Unlimited Data & calls
                </div>
                
                <PriceCard 
                  title="Fibre Premium Plus OTT" 
                  price="1499" 
                  speed="250 Mbps"
                  features={[
                    "5000 GB FUP Data",
                    "Post-FUP: 15 Mbps",
                    "OTT4+",
                    "24/7 Priority Support",
                    "Max Speed: 250 Mbps",
                  ]}
                />
              </div>
            </div>
        
        <div className="text-center mt-12">
          <Link to="/offers">
            <Button variant="link" className="text-primary hover:text-primary-hover text-lg flex items-center gap-1 mx-auto">
              View All Offers <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
