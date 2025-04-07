
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Target, ArrowRight } from 'lucide-react';



const About = () => {
  

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '99.9%', label: 'Service Uptime' },
    { value: '5M+', label: 'Happy Customers' },
    { value: '200+', label: 'Cities Served' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-10">
        {/* Header Section */}
        <section className="bg-secondary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About VI Digital</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Learn more about our mission to provide high-quality internet and entertainment services across Kerala.
            </p>
          </div>
        </section>
        
        {/* Company Overview */}
        <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2008, VI emerged with a bold vision to transform the telecommunications landscape by offering innovative, affordable, and reliable services to customers across the nation.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small startup has grown into a leading telecommunications company, reaching millions of customers and expanding our service offerings to include high-speed internet, premium entertainment, mobile plans, and business solutions.
              </p>
              <p className="text-gray-600 mb-4">
                Through the years, we've remained committed to our core values of customer satisfaction, technological innovation, and service excellence. Our journey continues as we embrace new technologies and expand our reach, always with our customers at the heart of everything we do.
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-brand-red hover:bg-red-700 text-white">
                    Get to Know Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-red rounded-full opacity-20 blur-xl"></div>
              <div className="absolute bottom-10 -right-10 w-32 h-32 bg-brand-red rounded-full opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Modern office building"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2 text-primary ">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
        
        {/* Mission and Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Driving connectivity and entertainment excellence through innovation and customer-centric services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <Target size={32} className="text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  To provide reliable, high-speed internet connectivity and premium entertainment services that enhance the digital lives of our customers.
                </p>
                <p className="text-gray-600">
                  We are committed to delivering exceptional value through innovative technologies, competitive pricing, and superior customer service.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <Award size={32} className="text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  To be the most trusted telecom service provider in Kerala, connecting people, businesses, and communities with cutting-edge digital services.
                </p>
                <p className="text-gray-600">
                  We envision a future where every household and business in Kerala has access to fast, reliable internet and premium entertainment options.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose VI Digital</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We stand out from the competition with our commitment to quality, affordability, and customer satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary mb-4">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Service</h3>
                <p className="text-gray-600">
                  Our network infrastructure is designed for 99.9% uptime, ensuring you stay connected at all times.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary mb-4">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  We offer the best value for your money with transparent pricing and no hidden charges.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary mb-4">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Entertainment</h3>
                <p className="text-gray-600">
                  Access to a wide range of OTT platforms bundled with your internet connection.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary mb-4">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Our dedicated team is available 24/7 to assist you with any technical issues or queries.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experienced professionals who lead our company towards excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://i.pinimg.com/736x/6b/b6/d0/6bb6d094147301f3ccce198b6d6179bc.jpg" 
                  alt="CEO" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Rajesh Kumar</h3>
                  <p className="text-primary font-medium mb-4">Chief Executive Officer</p>
                  <p className="text-gray-600">
                    With over 20 years of experience in the telecom industry, Rajesh leads our company with vision and expertise.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://i.pinimg.com/736x/bb/f7/79/bbf7790a9929f04b3c25824125dcdade.jpg" 
                  alt="CTO" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Priya Nair</h3>
                  <p className="text-primary font-medium mb-4">Chief Technology Officer</p>
                  <p className="text-gray-600">
                    Priya oversees our technical operations and ensures the delivery of cutting-edge solutions to our customers.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://i.pinimg.com/736x/38/54/a8/3854a8e825bc816e7d7c2caa2c255460.jpg" 
                  alt="COO" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Anand Varma</h3>
                  <p className="text-primary font-medium mb-4">Chief Operations Officer</p>
                  <p className="text-gray-600">
                    Anand ensures smooth operations and exceptional service delivery across all our service areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Family of Satisfied Customers</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Experience the VI Digital difference with our premium internet and entertainment services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/offers">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 flex items-center gap-2">
                Get Started Now <ArrowRight size={18} />
              </Button>
              </Link>
              <Link to="/contact">
              <Button variant="outline" className="border-white text-black hover:text-white hover:bg-white/10 px-8">
                Contact Us
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

export default About;
