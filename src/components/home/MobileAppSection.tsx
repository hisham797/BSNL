
import React from 'react';
import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileAppSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
          <path d="M0 0h80v80H0z" fill="none"/>
          <circle cx="40" cy="40" r="20" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col ${isMobile ? '' : 'md:flex-row'} items-center gap-12`}>
          
          {/* Content section */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mobile App Experience
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              We're bringing the power of our high-speed internet service to your smartphone. 
              Stay connected, manage your account, and enjoy exclusive mobile features.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Smartphone size={20} className="text-primary" />
                </div>
                <p className="text-gray-700">Manage your account on the go</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Download size={20} className="text-primary" />
                </div>
                <p className="text-gray-700">View and pay bills with ease</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Star size={20} className="text-primary" />
                </div>
                <p className="text-gray-700">Access exclusive mobile deals</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-dark hover:bg-dark/90 gap-2 h-14 px-6" size="lg">
                <Smartphone size={20} />
                Join Waitlist
              </Button>
              <div className="flex items-center text-gray-500">
                <span className="text-sm">Launching Q3 2025</span>
              </div>
            </div>
          </div>
          
          {/* Phone mockup section */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[280px] h-[580px] bg-dark rounded-[40px] p-3 shadow-2xl relative z-10 transform rotate-3 transition-all duration-500 hover:rotate-0">
                {/* Phone screen */}
                <div className="w-full h-full bg-gray-100 rounded-[32px] overflow-hidden relative">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-dark rounded-b-xl z-20"></div>
                  
                  {/* Phone content - app mockup */}
                  <div className="w-full h-full bg-white p-6 pt-10 flex flex-col">
                    <div className="w-full h-10 bg-primary/10 rounded-full mb-4 flex items-center px-4">
                      <div className="w-4 h-4 rounded-full bg-primary mr-2"></div>
                      <div className="w-24 h-3 bg-gray-300 rounded"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="aspect-square bg-primary/5 rounded-xl flex items-center justify-center">
                        <Smartphone size={30} className="text-primary" />
                      </div>
                      <div className="aspect-square bg-secondary/5 rounded-xl flex items-center justify-center">
                        <Download size={30} className="text-secondary" />
                      </div>
                      <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                        <Star size={30} className="text-amber-500" />
                      </div>
                      <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1 bg-gray-50 rounded-lg p-4">
                      <div className="w-full h-3 bg-gray-200 rounded-full mb-2"></div>
                      <div className="w-2/3 h-3 bg-gray-200 rounded-full mb-4"></div>
                      <div className="w-full h-24 bg-primary/10 rounded-lg mb-3 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <Smartphone size={24} className="text-primary" />
                        </div>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full mb-2"></div>
                      <div className="w-4/5 h-3 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl z-0"></div>
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-secondary/20 rounded-full filter blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
