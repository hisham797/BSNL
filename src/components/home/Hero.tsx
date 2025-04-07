import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-secondary to-dark pt-36 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto px-10 mb-20 ">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ">
              Super Fast Internet & Entertainment
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Experience lightning-fast fiber internet with premium OTT services
              at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/offers">
                <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg flex items-center gap-2">
                  Explore Our Plans <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-white text-black hover:text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute top-20 -left-20 w-30 h-30 bg-primary/30 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/30 rounded-full filter blur-3xl"></div>
              <img
                src="/images/vector.png"
                alt="High-speed internet"
                className="relative z-10 w-full  mb-16 sm:block hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Curved shape at bottom */}
      <div className="absolute bottom-[-260px]  md:bottom-[-280px] sm:bottom-[-260px]   left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 390"
          className="fill-white w-full h-[520px]"
        >
          <path d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,64C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,240L1380,240C1320,240,1200,240,1080,240C960,240,840,240,720,240C600,240,480,240,360,240C240,240,120,240,60,240L0,240Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
