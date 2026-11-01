import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ShoppingBag,
  Heart,
  Calendar,
  Settings,
  Sparkles,
  PhoneCall,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { useStudio } from '../context/StudioContext';
import { QuickSettingsModal } from './QuickSettingsModal';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { cartCount, favorites, brandName } = useStudio();
  const location = useLocation();

  const navLinks = [
    { label: 'Workshops & Classes', path: '/classes' },
    { label: 'Weekly Schedule', path: '/schedule' },
    { label: 'Studio Space Rental', path: '/rental' },
    { label: 'Retreats', path: '/retreats' },
    { label: 'About Us', path: '/about' },
    { label: 'Journal', path: '/journal' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
        {/* Top Announcement Bar */}
        <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse shrink-0" />
              <span className="text-stone-300">
                <span className="font-semibold text-white">Bandra Sanctuary</span> • Weekend Wheel Pottery, Contemporary Dance & Gong Baths Open
              </span>
            </div>

            <div className="hidden md:flex items-center gap-4 text-stone-400 shrink-0">
              <span className="flex items-center gap-1 hover:text-stone-200 transition">
                <MapPin className="h-3 w-3 text-orange-400" />
                <span>St. Leo Road, Bandra West, Mumbai</span>
              </span>
              <span className="text-stone-700">|</span>
              <a
                href="tel:+919820144520"
                className="flex items-center gap-1 text-stone-300 hover:text-orange-400 transition"
              >
                <PhoneCall className="h-3 w-3" />
                <span>+91 98201 44520</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-500 text-white shadow-md shadow-orange-600/20 group-hover:scale-105 transition-transform duration-300">
                <div className="h-5 w-5 rounded-full border-2 border-white/80 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
              </div>

              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-orange-600 transition-colors">
                  orange<span className="text-orange-600 font-serif italic">studio</span>
                </span>
                <span className="block text-[10px] tracking-widest uppercase font-semibold text-stone-600">
                  Arts • Movement • Sanctuary
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
              {navLinks.slice(0, 6).map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-xs font-semibold tracking-wide transition-colors rounded-xl ${
                      isActive
                        ? 'text-orange-600 bg-orange-50/80 font-bold'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* More dropdown for Contact / FAQ */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-wide text-stone-600 hover:text-stone-900 rounded-xl transition">
                  <span>More</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                <div className="absolute right-0 top-full hidden group-hover:block w-44 bg-white rounded-2xl shadow-xl border border-stone-200 py-2 animate-fade-in">
                  <Link
                    to="/faq"
                    className="block px-4 py-2 text-xs font-medium text-stone-700 hover:bg-orange-50 hover:text-orange-700"
                  >
                    Studio FAQs
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-xs font-medium text-stone-700 hover:bg-orange-50 hover:text-orange-700"
                  >
                    Visit & Contact
                  </Link>
                  <Link
                    to="/bookings"
                    className="block px-4 py-2 text-xs font-medium text-stone-700 hover:bg-orange-50 hover:text-orange-700"
                  >
                    My Bookings & Saved
                  </Link>
                </div>
              </div>
            </nav>

            {/* Right Interactive Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Settings / Brand inspect button */}
              <button
                onClick={() => setSettingsOpen(true)}
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200/90 text-stone-600 hover:text-orange-600 hover:border-orange-300 hover:bg-white transition"
                title="Orange Studio Parameters & Settings"
                aria-label="Settings"
              >
                <Settings className="h-4 w-4" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/bookings?tab=favorites"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200/90 text-stone-600 hover:text-rose-600 hover:border-rose-200 hover:bg-white transition"
                aria-label="Saved workshops"
                title="Wishlist"
              >
                <Heart className="h-4 w-4" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow">
                    {favorites.length}
                  </span>
                )}
              </Link>

              {/* Cart Button */}
              <Link
                to="/cart"
                className="relative flex h-10 items-center gap-2 px-3.5 rounded-xl border border-stone-200/90 bg-white text-stone-700 hover:border-orange-300 hover:text-orange-600 shadow-xs transition"
                aria-label="View booking bag"
              >
                <ShoppingBag className="h-4 w-4 text-orange-600" />
                <span className="text-xs font-bold hidden sm:inline">Bag</span>
                {cartCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-600 px-1 text-[11px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Primary Book CTA */}
              <Link
                to="/classes"
                className="hidden lg:inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-orange-700 hover:shadow-md transition"
              >
                Book Workshop
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-700 hover:bg-stone-100 transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-stone-50 border-b border-stone-200 px-4 pt-3 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                    location.pathname === item.path
                      ? 'bg-orange-100/80 text-orange-700'
                      : 'text-stone-700 hover:bg-stone-200/60'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-3 border-t border-stone-200 mt-2 space-y-2">
                <Link
                  to="/bookings"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm font-medium text-stone-800"
                >
                  <span>My Bookings & Saved</span>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold">
                    {favorites.length} saved
                  </span>
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSettingsOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-200 text-stone-700 text-xs font-semibold"
                >
                  <Settings className="h-4 w-4" />
                  <span>Deployment & Brand Settings</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quick Settings Modal */}
      <QuickSettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
};
