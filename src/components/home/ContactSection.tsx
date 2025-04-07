import React from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team and we'll
            get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* WhatsApp Chat Box */}
          <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-lg order-2 lg:order-1">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Chat With Us on WhatsApp
              </h3>
              <p className="text-gray-600 mb-6">
                Get quick responses to your queries through WhatsApp. Our team
                is ready to assist you!
              </p>
              <a
                href="https://wa.me/919400485966"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors font-medium text-lg"
              >
                <MessageCircle size={20} />
                Chat with WhatsApp
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                Why Chat With Us?
              </h4>
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
          </div>

          {/* Contact Information */}
          <div className="flex flex-col mb-28 justify-center order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">
                    +91 9400 4859 66
                    <br />
                    {/* +91 1800 123 4568 */}
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">
                    support@vidigital.com<br />
                    info@vidigital.com
                  </p>
                </div>
              </div> */}

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="mt-1 text-gray-600">
                    BSNL super wifi vision Digital Office
                    <br />
                    Kolathur, Kurupathal, Kerala
                    <br />
                    India - 679338
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Working Hours
              </h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 8:00 PM
                <br />
                Saturday: 9:00 AM - 5:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
