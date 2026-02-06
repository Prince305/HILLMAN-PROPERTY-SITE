import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
const services = [
{
  id: 'kitchens',
  title: 'Kitchen Design & Installation',
  description:
  'The heart of your home deserves the best. We design and install premium kitchens that blend functionality with stunning aesthetics. Whether you prefer modern minimalism or classic elegance, we bring your dream kitchen to life.',
  features: [
  'Custom layout design',
  'Premium cabinetry & hardware',
  'Countertop sourcing (Granite, Quartz, etc.)',
  'Appliance integration'],

  image:
  'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
},
{
  id: 'cupboards',
  title: 'Built-in Cupboards',
  description:
  'Maximize your space with our custom built-in cupboard solutions. From luxurious walk-in closets to practical bedroom storage, we create organized spaces that look beautiful.',
  features: [
  'Bedroom wardrobes',
  'Walk-in closets',
  'Linen cupboards',
  'Custom internal organizers'],

  image:
  'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
},
{
  id: 'interior',
  title: 'Interior Upgrades',
  description:
  'Refresh your home without a complete rebuild. Our interior upgrade services focus on high-impact changes like cabinet replacements, feature walls, and custom joinery.',
  features: [
  'Cabinet door replacements',
  'TV units & media centers',
  'Feature wall cladding',
  'Floating shelves'],

  image:
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
},
{
  id: 'office',
  title: 'Home Office Cabinetry',
  description:
  'Create a productive workspace right at home. We design custom home office solutions that provide ample storage and ergonomic layouts tailored to your workflow.',
  features: [
  'Custom desks',
  'Filing & storage units',
  'Bookshelves',
  'Cable management solutions'],

  image:
  'https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
}];

export function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary-dark py-20 text-center text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Comprehensive interior solutions tailored to your lifestyle.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="bg-neutral-50">
        {services.map((service, index) =>
        <section
          key={service.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>

            <div className="container-custom">
              <div
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Image */}
                <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6
                }}
                className="w-full lg:w-1/2">

                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                    <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />

                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? 30 : -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6
                }}
                className="w-full lg:w-1/2">

                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-6">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, idx) =>
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-neutral-700">

                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                  )}
                  </ul>

                  <Link to="/contact" className="btn-outline-primary">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        )}
      </div>

      <ContactSection />
    </main>);

}