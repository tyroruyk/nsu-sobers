import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Rocket, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-red-600 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src='/logo.png' alt="NSU Sobers Logo" className="h-10 w-10 object-contain" />
              <div>
                <h3 className="text-white font-bold text-base tracking-widest">NSU SOBERS</h3>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mt-4">
              Engineering excellence in robotics. Competing in the Australian Rover Challenge 2026.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 border-b-2 border-red-600 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Team'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-red-500 text-xs transition-colors duration-200 font-semibold uppercase tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="space-y-2 pt-10">
              {['Roadmap', 'Rules', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-red-500 text-xs transition-colors duration-200 font-semibold uppercase tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Competition Info */}
          {/* <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 border-b-2 border-red-600 pb-2">
              Competition
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-gray-400">
                <span className="text-red-500 font-semibold">Event:</span> Australian Rover Challenge
              </li>
              <li className="text-gray-400">
                <span className="text-red-500 font-semibold">Location:</span> Roseworthy Campus, SA
              </li>
              <li className="text-gray-400">
                <span className="text-red-500 font-semibold">Date:</span> March 26-29, 2026
              </li>
              <li className="text-gray-400">
                <span className="text-red-500 font-semibold">Institution:</span> North South University
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 border-b-2 border-red-600 pb-2">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="text-red-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-xs">North South University, Dhaka, BD</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="text-red-500 w-4 h-4 flex-shrink-0" />
                <a href="mailto:sobers@nsu.edu.bd" className="text-gray-400 hover:text-red-500 text-xs transition-colors">
                  sobers@nsu.edu.bd
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="text-red-500 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-400 text-xs">+880-XXX-XXX-XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-600 border-opacity-30 my-6"></div>

        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Social Links */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <span className="text-gray-400 font-semibold uppercase tracking-widest text-xs">Follow Us:</span>
            <div className="flex space-x-2">
              {[
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Github, href: '#', label: 'GitHub' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-8 h-8 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">
              © {currentYear} <a href="https://nsucec.com" className='hover:text-red-500 transition duration-300' target='_blank'>NSU Sobers.</a> All Rights Reserved.
            </p>
            {/* <p className="text-gray-600 text-xs mt-1">
              All Rights Reserved.
            </p> */}
          </div>
        </div>

      </div>
    </footer>
  );
}
