
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlansTable from '@/components/PlansTable';
import PriceBox from '@/components/PriceBox';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';

const Offers = () => {
  const homeBroadbandPlans = [
    {
      slNo: 1,
      planName: "Fibre Entry Quarterly",
      price: "999",
      fupData: "1200 GB",
      maxSpeed: "25 Mbps",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 2,
      planName: "Fibre Entry Half Yearly",
      price: "1999",
      fupData: "1300 GB",
      maxSpeed: "25 Mbps",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 3,
      planName: "Home WiFi 6-Month",
      price: "1999",
      fupData: "1000 GB",
      maxSpeed: "30 Mbps",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 4,
      planName: "Fibre Basic",
      price: "499",
      fupData: "3300 GB",
      maxSpeed: "60 Mbps",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 5,
      planName: "Fibre Basic Neo",
      price: "449",
      fupData: "3300 GB",
      maxSpeed: "50 Mbps",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 6,
      planName: "Home WiFi",
      price: "399",
      fupData: "1400 GB",
      maxSpeed: "30 Mbps",
      postFupSpeed: "4 Mbps"
    }
  ];

  const ottBundledPlans = [
    {
      slNo: 1,
      planName: "Fibre Basic OTT",
      price: "599",
      fupData: "4000 GB",
      maxSpeed: "75 Mbps",
      ottPack: "OTT3",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 2,
      planName: "Fibre Basic Plus OTT",
      price: "699",
      fupData: "4000 GB",
      maxSpeed: "100 Mbps",
      ottPack: "OTT1",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 3,
      planName: "Fibre Value OTT",
      price: "799",
      fupData: "4000 GB",
      maxSpeed: "125 Mbps",
      ottPack: "OTT4",
      postFupSpeed: "8 Mbps"
    },
    {
      slNo: 4,
      planName: "Superstar Premium +",
      price: "999",
      fupData: "5000 GB",
      maxSpeed: "200 Mbps",
      ottPack: "OTT4",
      postFupSpeed: "10 Mbps"
    },
    {
      slNo: 5,
      planName: "Fibre Premium Plus OTT",
      price: "1499",
      fupData: "5000 GB",
      maxSpeed: "250 Mbps",
      ottPack: "OTT4+",
      postFupSpeed: "15 Mbps"
    }
  ];

  const ottAddOnPlans = [
    {
      planName: "Pack 1",
      price: "30",
      ottServices: "Disney+ Hotstar Super, Hungama, Lionsgate, ShemarooMe, EpicOn"
    },
    {
      planName: "Pack 2",
      price: "49",
      ottServices: "YuppTV (Zee5 Premium, SonyLiv Premium, YuppTV Live)"
    },
    {
      planName: "Pack 3",
      price: "199",
      ottServices: "Disney+ Hotstar Super, ZEE5, Sony LIV Premium, Lions Gate, ShemarooMe, Hungama, YuppTV, EpicOn"
    },
    {
      planName: "Pack 4",
      price: "249",
      ottServices: "All of the above combined"
    }
  ];

  const governmentPlans = [
    {
      planName: "Video Surveillance Plan",
      price: "3899",
      maxSpeed: "500 Mbps",
      specialBenefits: "Unlimited Data + CS397"
    }
  ];

  const longTermBenefits = [
    {
      planName: "12 Months",
      price: "As per plan",
      specialBenefits: "+1 Month Free"
    },
    {
      planName: "24 Months",
      price: "As per plan",
      specialBenefits: "+3 Months Free"
    },
    {
      planName: "36 Months",
      price: "As per plan",
      specialBenefits: "+4 Months Free"
    }
  ];

  const studentPlans = [
    {
      planName: "3 Students",
      price: "11,000",
      specialBenefits: "1000GB @ 25 Mbps (Unlimited Calls)"
    },
    {
      planName: "6 Students",
      price: "21,000",
      specialBenefits: "1000GB @ 25 Mbps (Unlimited Calls)"
    },
    {
      planName: "10 Students",
      price: "35,000",
      specialBenefits: "1000GB @ 25 Mbps (Unlimited Calls)"
    }
  ];

  const basicPlans = [
    {
      slNo: 1,
      planName: "Fibre Entry Quarterly",
      price: "999",
      fupData: "1200 GB",
      maxSpeed: "25 Mbps",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 2,
      planName: "Fibre Entry Half Yearly",
      price: "1999",
      fupData: "1300 GB",
      maxSpeed: "25 Mbps",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 3,
      planName: "Home WiFi 6-Month",
      price: "1999",
      fupData: "1000 GB",
      maxSpeed: "30 Mbps",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 4,
      planName: "Fibre Basic",
      price: "499",
      fupData: "3300 GB",
      maxSpeed: "60 Mbps",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 5,
      planName: "Fibre Basic Neo",
      price: "449",
      fupData: "3300 GB",
      maxSpeed: "50 Mbps",
      postFupSpeed: "4 Mbps"
    },
    {
      slNo: 6,
      planName: "Home WiFi",
      price: "399",
      fupData: "1400 GB",
      maxSpeed: "30 Mbps",
      postFupSpeed: "4 Mbps"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-10">
        {/* Header Section */}
        <section className="bg-secondary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Broadband Plans & Offers</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Choose from our range of high-speed internet plans with premium entertainment services.
            </p>
          </div>
        </section>

        {/* NEW PRICE BOXES SECTION */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Plans</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our range of high-speed internet plans with premium OTT services included.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <PriceBox 
                title="Fibre Basic" 
                price="599" 
                speed="75 Mbps"
                features={[
                  "4000 GB FUP Data",
                  "Post-FUP: 4 Mbps",
                  "OTT Pack Included",
                  "24/7 Customer Support",
                  "Free Installation"
                ]}
              />
              
              <PriceBox 
                title="Fibre Value" 
                price="799" 
                speed="125 Mbps"
                features={[
                  "4000 GB FUP Data",
                  "Post-FUP: 8 Mbps",
                  "Premium OTT Pack",
                  "24/7 Customer Support",
                  "Free Installation & Router"
                ]}
                popular={true}
              />
              
              <PriceBox 
                title="Fibre Premium" 
                price="1499" 
                speed="250 Mbps"
                features={[
                  "5000 GB FUP Data",
                  "Post-FUP: 15 Mbps",
                  "All OTT Services",
                  "24/7 Priority Support",
                  "Free Installation & Premium Router"
                ]}
              />
            </div>
          </div>
        </section>
        
        {/* Plans Tabs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="home" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="home">Home Broadband</TabsTrigger>
                <TabsTrigger value="ott">OTT Bundled</TabsTrigger>
                <TabsTrigger value="special">Special Plans</TabsTrigger>
                <TabsTrigger value="addons">Add-Ons</TabsTrigger>
              </TabsList>
              
              <TabsContent value="home" className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Broadband Plans</h2>
                  <p className="text-gray-600 mb-6">
                    Basic high-speed internet plans for home users with generous data limits.
                  </p>
                  
                  <PlansTable
                    title="Home Broadband Plans"
                    description="Basic high-speed internet plans - (Jan 2025)"
                    plans={homeBroadbandPlans}
                    columns={["Sl No", "Plan Name", "Price (₹)", "FUP Data", "Max Speed", "Post-FUP Speed"]}
                  />
                  
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm text-yellow-800">
                      * New Bharatfiber connections in ₹449/₹499 plans get free service for the first calendar month & ₹399 for the next 3 months (GST Extra). Offer valid till 31.03.25.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ott" className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">OTT Bundled Plans</h2>
                  <p className="text-gray-600 mb-6">
                    High-speed internet plans with premium OTT entertainment services included.
                  </p>
                  
                  <PlansTable
                    title="OTT Bundled Plans"
                    description="Internet plans with OTT services - (Jan 2025)"
                    plans={ottBundledPlans}
                    columns={["Sl No", "Plan Name", "Price (₹)", "FUP Data", "Max Speed", "OTT Pack", "Post-FUP Speed"]}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="special" className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Plans</h2>
                  <p className="text-gray-600 mb-6">
                    Special purpose plans for government, institutions, and students.
                  </p>
                  
                  <div className="space-y-8">
                    <PlansTable
                      title="Government & Institutional Plans"
                      description="Special plans for government and institutions - (Jan 2025)"
                      plans={governmentPlans}
                      columns={["Plan Name", "Price (₹)", "Max Speed", "Special Benefits"]}
                    />
                    
                    <PlansTable
                      title="Student Sponsorship Scheme"
                      description="Special plans for students - (Jan 2025)"
                      plans={studentPlans}
                      columns={["Plan Name", "Price (₹)", "Special Benefits"]}
                    />
                    
                    <PlansTable
                      title="Long-Term Payment Benefits"
                      description="Benefits for long-term plan purchases - (Jan 2025)"
                      plans={longTermBenefits}
                      columns={["Plan Name", "Price (₹)", "Special Benefits"]}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="addons" className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">OTT Add-On Plans</h2>
                  <p className="text-gray-600 mb-6">
                    Additional OTT service packs that can be added to any broadband plan.
                  </p>
                  
                  <PlansTable
                    title="OTT Add-On Plans"
                    description="Additional OTT service packs - (Jan 2025)"
                    plans={ottAddOnPlans}
                    columns={["Plan Name", "Price (₹)", "OTT Services Included"]}
                    isOttPlans={true}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Contact our team today to find the perfect plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
              <Button className="bg-primary hover:bg-primary-hover text-white px-8">
                Contact Us
              </Button>
              </Link>
              <Link to="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
                Learn More
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

export default Offers;
