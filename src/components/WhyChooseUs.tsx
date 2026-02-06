import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Hammer, PenTool, Smile } from 'lucide-react';
const reasons = [
{
  icon: ShieldCheck,
  title: 'Quality Materials',
  description:
  'We source only premium-grade materials that ensure durability and lasting beauty for your home.'
},
{
  icon: Hammer,
  title: 'Expert Installation',
  description:
  'Our experienced craftsmen ensure precision fitting and attention to detail in every corner.'
},
{
  icon: PenTool,
  title: 'Bespoke Design',
  description:
  'Every project is uniquely tailored to your specific space, style preferences, and functional needs.'
},
{
  icon: Smile,
  title: 'Stress-Free Process',
  description:
  'From initial consultation to final handover, we handle everything to give you peace of mind.'
}];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-neutral-100">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-4">
            Why Choose Hillman Property
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-white p-8 rounded-sm shadow-sm text-center group hover:-translate-y-2 transition-transform duration-300">

              <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                <reason.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-dark mb-3">
                {reason.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}