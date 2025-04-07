
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Phone, MapPin, Clock, MessageSquare, MessageCircle, Users } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <section className="bg-secondary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              We're here to help. Reach out to us with any questions or concerns about our services.
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Phone size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Our customer support team is available to help you 24/7.
                </p>
                <a href="tel:+919400485966" className="text-primary font-semibold">
                  +91 9400 4859 66
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <MessageCircle size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  Chat with us on WhatsApp for quick responses to your queries.
                </p>
                <a href="https://wa.me/919400485966" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold">
                  Chat Now
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <MapPin size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600 mb-4">
                Located in Kolathur, Kurupathal easily accessible across Kerala.
                </p>
                <a 
                    href="https://maps.google.com/?q=Kolathur,Kerala" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <span>Get directions</span>
                  </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* WhatsApp Chat Box - replacing the contact form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                    <MessageCircle size={40} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Chat With Us on WhatsApp</h2>
                  <p className="text-gray-600 mb-8 max-w-md">
                    Get quick responses to your queries through WhatsApp. Our team is ready to assist you with any questions, troubleshooting, or service inquiries!
                  </p>
                  <a 
                    href="https://wa.me/919400485966" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full transition-colors font-medium text-lg w-full sm:w-auto justify-center"
                  >
                    <MessageCircle size={24} />
                    Start WhatsApp Chat
                  </a>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Chat With Us via WhatsApp?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <span className="text-green-500 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">Instant responses</p>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <span className="text-green-500 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">No waiting on hold</p>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <span className="text-green-500 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">Share screenshots easily</p>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <span className="text-green-500 text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">24/7 support</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Users size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Our Support Team is Online Now</h5>
                        <p className="text-sm text-gray-600">Average response time: under 5 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Information */}
              <div>
                <div className="bg-gray-50 rounded-xl shadow-md p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock size={20} className="mr-2 text-primary" />
                    Business Hours
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-xl shadow-md p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MessageSquare size={20} className="mr-2 text-primary" />
                    Customer Support
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our dedicated customer support team is available 24/7 to assist you with:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-primary text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">Technical support and troubleshooting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-primary text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">Plan upgrades and changes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-primary text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">Billing inquiries and payment options</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-primary text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">Service installation and setup</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-primary text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">General inquiries and information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-96 w-full bg-gray-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">BSNL SUPER WIFI VISION</h3>
                  <p className="text-gray-600">
                  BSNL super wifi vision Digital Office, Kerala, India - 679338
                  </p>
                  <div className="mt-4">
                  <a 
                    href="https://maps.google.com/?q=Kolathur,Kerala" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                  >
                    <Button className="bg-primary hover:bg-primary-hover text-white">
                      Get Directions
                    </Button>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How do I upgrade my current plan?</h3>
                <p className="text-gray-600">
                  You can upgrade your plan by contacting our customer support team via phone, email, or by visiting our office. Our team will assist you with the upgrade process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What should I do if my internet is not working?</h3>
                <p className="text-gray-600">
                  First, try restarting your router. If the issue persists, please contact our technical support team at +91 1800 123 4567 for immediate assistance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How do I pay my bill?</h3>
                <p className="text-gray-600">
                  You can pay your bill online through our website, mobile app, or at our office. We accept all major credit cards, UPI, and bank transfers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How long does installation take?</h3>
                <p className="text-gray-600">
                  Once your application is approved, our team will schedule an installation appointment. Typically, the installation process takes 1-2 working days.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;