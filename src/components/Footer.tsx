import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 dark:bg-slate-950 dark:text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                aNquest
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              The modern ERP platform for real estate professionals. Built to
              scale with your portfolio.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center transition-all hover:bg-brand-600 hover:border-brand-600 hover:text-white dark:bg-slate-900 dark:border-slate-800"
              >
                <Facebook
                  size={16}
                  className="text-blue-600 dark:text-slate-400"
                />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center transition-all hover:bg-brand-600 hover:border-brand-600 hover:text-white dark:bg-slate-900 dark:border-slate-800"
              >
                <Twitter
                  size={16}
                  className="text-sky-500 dark:text-slate-400"
                />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center transition-all hover:bg-brand-600 hover:border-brand-600 hover:text-white dark:bg-slate-900 dark:border-slate-800"
              >
                <Linkedin
                  size={16}
                  className="text-blue-700 dark:text-slate-400"
                />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center transition-all hover:bg-brand-600 hover:border-brand-600 hover:text-white dark:bg-slate-900 dark:border-slate-800"
              >
                <Instagram
                  size={16}
                  className="text-pink-500 dark:text-slate-400"
                />
              </a>

            </div>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="text-slate-900 dark:text-white font-bold mb-6">
              Company
            </h5>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-4">
              Contact Information
            </h3>

            <div className="space-y-3 text-sm">

              <a
                href="https://www.google.com/maps?q=431+4th+Floor+Orbit+Plaza+Crossing+Republik+Ghaziabad+India+201016"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-brand-500 dark:hover:text-brand-400 transition"
              >
                <MapPin size={18} />
                <p>
                  431, 4th Floor, Orbit Plaza Crossing Republik, Ghaziabad
                  India, 201016
                </p>
              </a>

              <div className="flex gap-2  hover:text-brand-500 dark:hover:text-brand-400 transition">
                <Mail size={18} />
                <a href="mailto:info@anquestmedia.com">
                  info@anquestmedia.com
                </a>
              </div>

              <div className="flex gap-2 hover:text-brand-500 dark:hover:text-brand-400 transition">
                <Phone size={18} />
                <a href="tel:+917678279151">
                  +91 76782 79151
                </a>
              </div>

            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-slate-900 dark:text-white font-bold mb-6">
              Newsletter
            </h5>

            <p className="text-sm mb-4">
              Get the latest real estate tech insights.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm w-full text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200"
              />

              <button className="bg-blue-600 dark:bg-brand-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-500 dark:hover:bg-brand-700 transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">

          <div className="text-slate-500">
            © 2026 EstateFlow ERP. All rights reserved.
          </div>

          <div className="flex gap-8">
            <Link
              to="/privacy-policy"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;