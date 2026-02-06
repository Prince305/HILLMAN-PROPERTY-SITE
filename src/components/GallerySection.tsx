import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export function GallerySection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="w-full lg:w-1/2 relative">

            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Craftsmanship detail"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-accent font-serif italic text-lg mb-2">
                  Our Craftsmanship
                </p>
                <h3 className="text-3xl font-bold">Detail Oriented</h3>
              </div>
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/30 -z-10 rounded-sm hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="w-full lg:w-1/2">

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-6 leading-tight">
              Crafted With Precision, <br />
              <span className="text-accent">Designed For Living</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
              At Hillman Property, we believe that true luxury lies in the
              details. Since 2016, we have been dedicated to elevating ordinary
              spaces into functional, beautiful areas that reflect the unique
              lifestyles of our clients.
            </p>
            <p className="text-neutral-600 text-lg mb-10 leading-relaxed">
              We don't just install cupboards; we create environments. From the
              initial consultation to the final polish, our focus is on quality
              materials, precise installation, and a stress-free experience.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-10 border-t border-b border-neutral-200 py-8">
              <div>
                <p className="text-3xl font-bold text-primary mb-1">500+</p>
                <p className="text-sm text-neutral-500 uppercase tracking-wider">
                  Projects
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">8+</p>
                <p className="text-sm text-neutral-500 uppercase tracking-wider">
                  Years Exp.
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-sm text-neutral-500 uppercase tracking-wider">
                  Satisfaction
                </p>
              </div>
            </div>

            <Link to="/about" className="btn-primary group">
              Read Our Story
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>);

}