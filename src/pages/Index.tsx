
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import OffersSection from '@/components/home/OffersSection';
import ServicesSection from '@/components/home/ServicesSection';
import ContactSection from '@/components/home/ContactSection';
import MobileAppSection from '@/components/home/MobileAppSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
      <Navbar />
        
        <Hero />
        <OffersSection />
        <ServicesSection />
        <MobileAppSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
