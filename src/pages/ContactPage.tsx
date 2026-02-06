import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  return (
    <main className="pt-20">
      <section className="bg-primary-dark py-20 text-center text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Start your journey to a beautiful home today.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary-dark mb-8">
                Contact Information
              </h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-dark mb-1">
                      Phone
                    </h3>
                    <p className="text-neutral-600">+27 (0) 11 234 5678</p>
                    <p className="text-sm text-neutral-400 mt-1">
                      Mon-Fri, 8am - 5pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-dark mb-1">
                      Email
                    </h3>
                    <p className="text-neutral-600">
                      info@hillmanproperty.co.za
                    </p>
                    <p className="text-sm text-neutral-400 mt-1">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-dark mb-1">
                      Office
                    </h3>
                    <p className="text-neutral-600">
                      123 Design Avenue, Sandton
                    </p>
                    <p className="text-neutral-600">
                      Johannesburg, South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-dark mb-1">
                      Hours
                    </h3>
                    <p className="text-neutral-600">Mon - Fri: 08:00 - 17:00</p>
                    <p className="text-neutral-600">Sat: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-neutral-100 rounded-sm relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-50 grayscale" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-4 py-2 rounded-sm shadow-md text-sm font-bold text-primary-dark">
                    Sandton, Johannesburg
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-50 p-8 md:p-10 rounded-sm shadow-sm">
              <h2 className="text-3xl font-serif font-bold text-primary-dark mb-2">
                Send Us a Message
              </h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and we'll get back to you shortly.
              </p>

              {submitted ?
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-sm text-center">
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p>Thank you for contacting us. We will be in touch soon.</p>
                  <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-bold underline">

                    Send another message
                  </button>
                </div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-1">

                        Name
                      </label>
                      <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="John Doe" />

                    </div>
                    <div>
                      <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 mb-1">

                        Phone
                      </label>
                      <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="+27..." />

                    </div>
                  </div>

                  <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-1">

                      Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="john@example.com" />

                  </div>

                  <div>
                    <label
                    htmlFor="service"
                    className="block text-sm font-medium text-neutral-700 mb-1">

                      Service Interested In
                    </label>
                    <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">

                      <option value="">Select a service...</option>
                      <option value="kitchen">Kitchen Design</option>
                      <option value="cupboards">Built-in Cupboards</option>
                      <option value="interior">Interior Upgrades</option>
                      <option value="office">Home Office</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-1">

                      Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your project..." />

                  </div>

                  <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">

                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              }
            </div>
          </div>
        </div>
      </section>
    </main>);

}