'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

export default function ContactBar() {
  const contactItems = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Call Us',
      value: '+1-226-450-1303',
      action: 'tel:+1-226-450-1303'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '+1-226-450-1303',
      action: 'https://wa.me/12264501303'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Find Us',
      value: 'New City Church – 190 Lynden Road, Brantford, Ontario',
      action: 'https://maps.google.com/?q=190+Lynden+Road+Brantford+Ontario'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email Us',
      value: 'Nccseniorshive@gmail.com',
      action: 'mailto:Nccseniorshive@gmail.com'
    }
  ];

  return (
    <div id="contact" className="overflow-hidden bg-gray-50 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mt-6 text-xl/8 text-gray-700">
                Ready to join our community? We&apos;re here to help you get started and answer any questions you might have.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-full"
                  >
                    <a 
                      href={item.action}
                      className="block h-full"
                      target={item.label === 'Find Us' ? '_blank' : undefined}
                      rel={item.label === 'Find Us' ? 'noopener noreferrer' : undefined}
                    >
                      <div className="group relative bg-white p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-200 h-full flex flex-col cursor-pointer">
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10" />
                        <div className="relative flex flex-col h-full">
                          <div className="text-amber-800 mb-4 group-hover:text-amber-700 transition-colors duration-200">
                            {item.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                            {item.label}
                          </h3>
                          <p className="text-gray-600 flex-grow break-words overflow-hidden group-hover:text-gray-500 transition-colors duration-200">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 