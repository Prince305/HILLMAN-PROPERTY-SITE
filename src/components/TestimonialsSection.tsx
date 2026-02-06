import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const testimonials = [
{
  quote:
  'Hillman Property transformed our kitchen beyond what we imagined. The attention to detail was exceptional and the team was a pleasure to work with.',
  author: 'Sarah M.',
  location: 'Cape Town',
  rating: 5
},
{
  quote:
  'Professional from start to finish. Our built-in cupboards are stunning and perfectly fitted. Highly recommend their services for any interior work.',
  author: 'James & Linda K.',
  location: 'Johannesburg',
  rating: 5
},
{
  quote:
  'We renovated our entire home with Hillman. The process was smooth, transparent, and the results speak for themselves. Truly premium quality.',
  author: 'David R.',
  location: 'Pretoria',
  rating: 5
}];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-4">
            Client Stories
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) =>
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
            className="bg-white p-8 rounded-sm shadow-sm relative">

              <Quote className="absolute top-8 right-8 text-neutral-100 w-12 h-12" />

              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(item.rating)].map((_, i) =>
              <Star key={i} size={16} fill="currentColor" />
              )}
              </div>

              <p className="text-neutral-600 italic mb-8 leading-relaxed relative z-10">
                "{item.quote}"
              </p>

              <div className="border-t border-neutral-100 pt-6">
                <p className="font-serif font-bold text-primary-dark">
                  {item.author}
                </p>
                <p className="text-sm text-neutral-500">{item.location}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}