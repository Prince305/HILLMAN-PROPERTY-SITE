import React from 'react';
import { motion } from 'framer-motion';
import { ContactSection } from '../components/ContactSection';
import { Users, Target, Heart } from 'lucide-react';
export function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="About Hillman Property"
          className="absolute inset-0 w-full h-full object-cover" />

        <div className="container-custom relative z-20 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4">

            About Hillman Property
          </motion.h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            Crafting exceptional interiors since 2016.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-6">
                Our Journey
              </h2>
              <div className="w-20 h-1 bg-accent mb-8" />
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Founded in 2016, Hillman Property began with a simple vision:
                  to elevate the standard of home improvements in South Africa.
                  We noticed a gap in the market for reliable, high-quality
                  craftsmanship that didn't compromise on design aesthetics.
                </p>
                <p>
                  What started as a small team passionate about cabinetry has
                  grown into a full-service interior solutions company. We pride
                  ourselves on transforming ordinary spaces into functional,
                  beautiful areas that enhance the way our clients live.
                </p>
                <p>
                  We are not manufacturers; we are designers, sourcers, and
                  installers. This allows us to select the best materials from
                  various suppliers, ensuring that every project is bespoke and
                  of the highest quality.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Workshop detail"
                  className="rounded-sm w-full h-64 object-cover mt-8" />

                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team working"
                  className="rounded-sm w-full h-64 object-cover" />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              icon: Target,
              title: 'Quality',
              desc: 'We never compromise on materials or workmanship. Excellence is our baseline.'
            },
            {
              icon: Users,
              title: 'Integrity',
              desc: 'Honest communication, transparent pricing, and keeping our promises to you.'
            },
            {
              icon: Heart,
              title: 'Client Focus',
              desc: 'Your vision is our blueprint. We listen, adapt, and deliver to your needs.'
            }].
            map((value, idx) =>
            <div
              key={idx}
              className="bg-white p-8 rounded-sm shadow-sm text-center">

                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>);

}