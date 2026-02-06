import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export function ContactSection() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/5 mix-blend-multiply" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 border-4 border-white/20 rounded-full" />
      <div className="absolute -right-20 -top-20 w-80 h-80 border-4 border-white/20 rounded-full" />

      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-dark mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-primary-dark/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Book a free consultation and let us bring your vision to life with our
          premium design and installation services.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/contact"
            className="btn-primary bg-primary-dark text-white hover:bg-primary hover:text-white border-none min-w-[200px]">

            Schedule Consultation
          </Link>
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-sm font-bold uppercase tracking-wider text-primary-dark/50">
              Or call us directly
            </span>
            <a
              href="tel:+27112345678"
              className="text-2xl font-serif font-bold text-primary-dark hover:text-primary-dark/70 transition-colors">

              +27 (0) 11 234 5678
            </a>
          </div>
        </div>
      </div>
    </section>);

}