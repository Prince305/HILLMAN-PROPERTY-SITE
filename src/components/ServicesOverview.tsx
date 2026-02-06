import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChefHat,
  DoorOpen,
  Paintbrush,
  Bath,
  Monitor,
  ClipboardCheck,
  ArrowRight } from
'lucide-react';
const services = [
{
  icon: ChefHat,
  title: 'Kitchen Design',
  description:
  'Bespoke kitchen solutions that blend functionality with stunning aesthetics.',
  link: '/services'
},
{
  icon: DoorOpen,
  title: 'Built-in Cupboards',
  description:
  'Custom wardrobes and storage solutions maximizing space and style.',
  link: '/services'
},
{
  icon: Paintbrush,
  title: 'Interior Upgrades',
  description:
  'Transformative renovations including feature walls and cabinetry updates.',
  link: '/services'
},
{
  icon: Bath,
  title: 'Bathroom Vanities',
  description:
  'Elegant, moisture-resistant vanity units designed for your sanctuary.',
  link: '/services'
},
{
  icon: Monitor,
  title: 'Home Office',
  description:
  'Productive workspaces tailored to your specific professional needs.',
  link: '/services'
},
{
  icon: ClipboardCheck,
  title: 'Project Management',
  description:
  'End-to-end coordination ensuring your renovation runs smoothly.',
  link: '/services'
}];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-4">
            Our Expertise
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-neutral-600 text-lg">
            We specialize in creating beautiful, functional interiors through
            expert design, sourcing, and installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
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
            className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-accent">

              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-dark mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
              to={service.link}
              className="inline-flex items-center text-accent font-medium hover:text-accent-dark transition-colors">

                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}