
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, MessageSquare, Users } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-10">
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
                <a href="tel:+911800123456" className="text-primary font-semibold">
                  +91 1800 123 4567
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Mail size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll get back to you as soon as possible.
                </p>
                <a href="mailto:support@vidigital.com" className="text-primary font-semibold">
                  support@vidigital.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <MapPin size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  Come visit our office to learn more about our services.
                </p>
                <address className="not-italic text-primary font-semibold">
                  123 Tech Park, Kerala, India - 682030
                </address>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Service Inquiry"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        required
                        className="w-full min-h-[150px]"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white">
                      Send Message
                    </Button>
                  </div>
                </form>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">VI Digital Office</h3>
                  <p className="text-gray-600">
                    123 Tech Park, Kerala, India - 682030
                  </p>
                  <div className="mt-4">
                    <Button className="bg-primary hover:bg-primary-hover text-white">
                      Get Directions
                    </Button>
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
