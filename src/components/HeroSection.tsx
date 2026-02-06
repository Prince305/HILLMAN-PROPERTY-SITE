import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Background — solid navy gradient matching reference */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary-light rounded-full blur-[120px]" />
      </div>

      {/* Decorative Geometric Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-40 left-20 w-96 h-96 border border-white rounded-full" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>

            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium tracking-wider mb-8">
              ESTABLISHED 2016
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">

            Crafting Iconic Properties <br />
            <span className="text-accent">& Spaces</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">

            Your Vision, Our Expertise. Premium kitchen design, built-in
            cupboards, and bespoke interior solutions in Johannesburg since
            2016.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.6
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link to="/portfolio" className="btn-accent w-full sm:w-auto group">
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="btn-outline-white w-full sm:w-auto">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider — matching reference */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none">

          <path
            d="M0 120L0 60C240 20 480 0 720 20C960 40 1200 80 1440 60L1440 120L0 120Z"
            fill="#FAFAF8" />

        </svg>
      </div>
    </section>);

}