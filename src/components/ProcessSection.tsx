import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Package, Wrench } from 'lucide-react';
const steps = [
{
  icon: MessageSquare,
  title: 'Consult',
  description:
  'We discuss your vision, needs, and budget to understand your goals.'
},
{
  icon: PenTool,
  title: 'Design',
  description:
  'Our team creates a custom design plan tailored to your space.'
},
{
  icon: Package,
  title: 'Source',
  description:
  'We procure high-quality materials and fittings for your project.'
},
{
  icon: Wrench,
  title: 'Install',
  description:
  'Professional installation with meticulous attention to detail.'
}];

export function ProcessSection() {
  return (
    <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#E8A830_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-neutral-300 text-lg">
            A seamless journey from concept to completion.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
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
                delay: index * 0.2
              }}
              className="relative flex flex-col items-center text-center">

                <div className="w-24 h-24 rounded-full bg-primary border-4 border-primary-dark shadow-xl flex items-center justify-center mb-6 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-primary-light flex items-center justify-center">
                    <step.icon size={32} className="text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-primary-dark font-bold flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}