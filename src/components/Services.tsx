'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Activity,
  Utensils,
  Shield
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Activity className="w-8 h-8" />,
    role: 'Engaging Activities',
    href: '#',
    description:
      'Join us for a variety of stimulating activities including trivia, music, art, exercise, and memory games designed to keep you active and engaged.',
  },
  {
    id: 2,
    icon: <Utensils className="w-8 h-8" />,
    role: 'Nutritious Meals',
    href: '#',
    description:
      'Enjoy nutritious snacks and delicious home-style hot lunches prepared with care to support your health and well-being.',
  },
  {
    id: 3,
    icon: <Users className="w-8 h-8" />,
    role: 'Socialization & Support',
    href: '#',
    description:
      'Connect with others through opportunities for socialization, emotional support, and cognitive stimulation in a welcoming environment.',
  },
  {
    id: 4,
    icon: <Shield className="w-8 h-8" />,
    role: 'Professional Care',
    href: '#',
    description:
      'Receive compassionate professional care and support from our dedicated staff who are committed to your comfort and well-being.',
  },
]

export default function Services() {

  return (

    <div id="services" className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Welcome to Seniors Hive Activity Center!
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              A vibrant new daytime activity centre for our beloved seniors is launching soon at New City Church! The Seniors Hive is a welcoming space filled with wellness programs, creative workshops, social gatherings, and support services all designed to foster connection, joy, and purpose.
              {/* We provide a warm, welcoming environment where seniors can socialize, learn new skills, 
              and maintain their independence. Our comprehensive programs are designed to enrich lives 
              and create lasting friendships. */}
            </p>
            <img
              alt=""
              src="/img/4.jpeg"
              className="mt-16 aspect-6/5 w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-138"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Our services</h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {services.map((service) => (
                <li key={service.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dd className="w-full flex items-center gap-x-3 text-lg font-semibold tracking-tight text-gray-900">
                      <div className="text-amber-800">
                        {service.icon}
                      </div>
                      <div>
                        {service.role}
                        {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                      </div>
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base/7 text-gray-600">{service.description}</dd>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
} 