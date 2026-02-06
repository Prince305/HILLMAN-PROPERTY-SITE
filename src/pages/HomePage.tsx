import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesOverview } from '../components/ServicesOverview';
import { GallerySection } from '../components/GallerySection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProcessSection } from '../components/ProcessSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <GallerySection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </main>);

}