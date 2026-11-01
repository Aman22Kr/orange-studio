import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Clock,
  ArrowRight,
  CheckCircle,
  Github,
  Heart
} from 'lucide-react';
import { useStudio } from '../context/StudioContext';

export const Footer: React.FC = () => {
  const { subscribeNewsletter, githubUser, brandName, referenceUrl } = useStudio();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput && emailInput.includes('@')) {
      subscribeNewsletter(emailInput);
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Brand & Story */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-md">
                <div className="h-4 w-4 rounded-full border-2 border-white/80" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                orange<span className="text-orange-500 italic">studio</span>
              </span>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              A serene multi-disciplinary arts and movement sanctuary nestled in Bandra West, Mumbai. Offering mindful wheel pottery, Ashtanga yoga, contemporary dance, sound baths, and spaces for creative exploration.
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Villa A, Wilfred Heritage, Plot 112, St. Leo Road, Bandra West, Mumbai, MH 400050</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-orange-400 shrink-0" />
                <span>+91 98201 44520 / +91 22 2640 8891</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-orange-400 shrink-0" />
                <span>hello@orangestudio.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-orange-400 shrink-0" />
                <span>Open Daily: 7:00 AM – 9:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-100">Disciplines</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/classes?category=pottery" className="hover:text-orange-400 transition">
                  Wheel Pottery & Ceramics
                </Link>
              </li>
              <li>
                <Link to="/classes?category=yoga" className="hover:text-orange-400 transition">
                  Ashtanga & Iyengar Yoga
                </Link>
              </li>
              <li>
                <Link to="/classes?category=dance" className="hover:text-orange-400 transition">
                  Contemporary & Commercial Dance
                </Link>
              </li>
              <li>
                <Link to="/classes?category=mindfulness" className="hover:text-orange-400 transition">
                  Tibetan Sound Baths & Breath
                </Link>
              </li>
              <li>
                <Link to="/classes?category=fine-arts" className="hover:text-orange-400 transition">
                  Botanical Watercolors
                </Link>
              </li>
              <li>
                <Link to="/classes?category=kids" className="hover:text-orange-400 transition">
                  Kids Creative Movement
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-100">Studio & Events</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/schedule" className="hover:text-orange-400 transition">
                  Weekly Class Timetable
                </Link>
              </li>
              <li>
                <Link to="/rental" className="hover:text-orange-400 transition">
                  Space Rental for Shoots & Workshops
                </Link>
              </li>
              <li>
                <Link to="/retreats" className="hover:text-orange-400 transition">
                  Goa & Rishikesh Retreats
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition">
                  Our Story & Instructors
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-orange-400 transition">
                  Studio Journal & Articles
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-orange-400 transition">
                  First-Timer FAQs & Etiquette
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-100">The Studio Circle</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Receive early-bird invitations to guest artist workshops, seasonal retreats, and weekend pottery slots.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl py-2 px-3 text-xs font-semibold shadow transition"
              >
                <span>Join Studio Circle</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>

            {subscribed && (
              <p className="flex items-center gap-1.5 text-xs text-emerald-400 animate-fade-in">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>You are on our guest list!</span>
              </p>
            )}

            <div className="flex items-center gap-3 pt-2">
              <span className="text-stone-400 hover:text-orange-400 transition cursor-pointer" title="Instagram">
                <Instagram className="h-4 w-4" />
              </span>
              <span className="text-stone-400 hover:text-orange-400 transition cursor-pointer" title="Facebook">
                <Facebook className="h-4 w-4" />
              </span>
              <span className="text-stone-400 hover:text-orange-400 transition cursor-pointer" title="YouTube">
                <Youtube className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with deployment notes */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} {brandName}. All rights reserved.</span>
            <span>•</span>
            <span className="text-stone-400">
              Recreation of{' '}
              <a
                href={referenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 underline hover:text-orange-400 transition"
              >
                Tangerine Arts Studio
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-stone-400">
              <Github className="h-3.5 w-3.5" />
              <span>GitHub Pages: <strong className="text-stone-200">{githubUser}</strong></span>
            </span>
            <span>•</span>
            <Link to="/faq" className="hover:text-stone-200 transition">
              Terms & Etiquette
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
