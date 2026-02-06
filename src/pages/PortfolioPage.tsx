import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactSection } from '../components/ContactSection';
const projects = [
{
  id: 1,
  title: 'Modern Kitchen',
  category: 'Kitchens',
  location: 'Sandton',
  image:
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
},
{
  id: 2,
  title: 'Luxury Walk-in',
  category: 'Cupboards',
  location: 'Camps Bay',
  image:
  'https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
},
{
  id: 3,
  title: 'Minimalist Office',
  category: 'Office',
  location: 'Midrand',
  image:
  'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
},
{
  id: 4,
  title: 'Feature Wall',
  category: 'Interior',
  location: 'Pretoria',
  image:
  'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
},
{
  id: 5,
  title: 'Classic Kitchen',
  category: 'Kitchens',
  location: 'Fourways',
  image:
  'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
},
{
  id: 6,
  title: 'Master Bedroom',
  category: 'Cupboards',
  location: 'Bryanston',
  image:
  'https://images.unsplash.com/photo-1616594039964-40891a909d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
},
{
  id: 7,
  title: 'TV Unit',
  category: 'Interior',
  location: 'Rosebank',
  image:
  'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
},
{
  id: 8,
  title: 'Executive Study',
  category: 'Office',
  location: 'Waterfall',
  image:
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
}];

const categories = ['All', 'Kitchens', 'Cupboards', 'Interior', 'Office'];
export function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const filteredProjects =
  filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  return (
    <main className="pt-20">
      <section className="bg-primary-dark py-20 text-center text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            A showcase of our finest work and craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat ? 'bg-primary text-white shadow-md' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}>

                {cat}
              </button>
            )}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <AnimatePresence>
              {filteredProjects.map((project) =>
              <motion.div
                layout
                key={project.id}
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9
                }}
                transition={{
                  duration: 0.3
                }}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer">

                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute inset-0 bg-primary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                    <h3 className="text-2xl font-serif font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.title}
                    </h3>
                    <p className="text-accent text-sm uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.location}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </main>);

}