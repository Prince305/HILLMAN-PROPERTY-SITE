import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowRight } from
'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/HILLMAN_PROPERTY_LOGO.png"
                alt="Hillman Property"
                className="h-10 w-auto bg-white rounded p-1.5" />

              <span className="font-serif text-xl font-bold tracking-wide">
                HILLMAN{' '}
                <span className="text-accent font-normal">PROPERTY</span>
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Transforming homes through premium kitchens, built-in cupboards,
              and bespoke interior upgrades. Quality craftsmanship since 2016.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all">

                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all">

                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all">

                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Portfolio', 'Contact'].map((item) =>
              <li key={item}>
                  <Link
                  to={
                  item === 'Home' ?
                  '/' :
                  `/${item.toLowerCase().replace(' ', '-')}`
                  }
                  className="text-neutral-300 hover:text-white flex items-center gap-2 transition-colors group">

                    <ArrowRight
                    size={14}
                    className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-accent">
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
              'Kitchen Design',
              'Built-in Cupboards',
              'Interior Upgrades',
              'Home Office',
              'Project Management'].
              map((item) =>
              <li key={item}>
                  <Link
                  to="/services"
                  className="text-neutral-300 hover:text-white flex items-center gap-2 transition-colors group">

                    <ArrowRight
                    size={14}
                    className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-accent">
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <span className="text-neutral-300">
                  123 Design Avenue, Sandton, Johannesburg, South Africa
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-accent shrink-0" size={20} />
                <span className="text-neutral-300">+27 (0) 11 234 5678</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-accent shrink-0" size={20} />
                <span className="text-neutral-300">
                  info@hillmanproperty.co.za
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>&copy; {currentYear} Hillman Property. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}