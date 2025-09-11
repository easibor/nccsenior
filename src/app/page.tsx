'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContactBar from '@/components/ContactBar';
import Welcome from '@/components/Welcome';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ContactBar />
      {/* <Welcome /> */}
      <Services />
      <Footer />
    </div>
  );
}
