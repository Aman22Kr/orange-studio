import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Compass,
  Heart,
  ShieldCheck,
  Users,
  Feather,
  Sun,
  Flame,
  Award,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { WORKSHOPS_CLASSES, INSTRUCTORS, TESTIMONIALS } from '../data/studioData';
import { ClassCard } from '../components/ClassCard';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { AdBanner } from '../components/AdBanner';
import { useStudio } from '../context/StudioContext';

export const HomePage: React.FC = () => {
  const { brandName } = useStudio();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Sparkles },
    { id: 'pottery', label: 'Wheel Pottery', icon: Flame },
    { id: 'yoga', label: 'Yoga & Pranayama', icon: Sun },
    { id: 'dance', label: 'Dance & Movement', icon: Feather },
    { id: 'mindfulness', label: 'Sound Baths', icon: Heart },
    { id: 'fine-arts', label: 'Botanical Arts', icon: Compass }
  ];

  const filteredWorkshops = selectedCategory === 'all'
    ? WORKSHOPS_CLASSES.slice(0, 6)
    : WORKSHOPS_CLASSES.filter(w => w.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-stone-50 pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-stone-200/60">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-orange-200/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs font-semibold tracking-wide shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-orange-600" />
                <span>Bandra West Sanctuary • Established Creative Haven</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15]">
                A Sanctuary for <span className="text-orange-600 italic">Movement</span>, Tactile Craft & Mindful Living.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Step off the bustle of St. Leo Road into sun-drenched teakwood movement halls, electric potter wheels, Tibetan sound bowls, and tree-lined garden courtyards. Experience curated weekly masterclasses led by master artists.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  to="/classes"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 hover:bg-orange-700 hover:shadow-xl transition-all duration-200"
                >
                  <span>Explore Weekend Workshops</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/schedule"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-stone-300 px-6 py-4 text-sm font-semibold text-stone-800 shadow-xs hover:bg-stone-50 hover:border-stone-400 transition-all duration-200"
                >
                  <Calendar className="h-4 w-4 text-orange-600" />
                  <span>View Weekly Timetable</span>
                </Link>

                <Link
                  to="/rental"
                  className="w-full sm:w-auto text-xs font-semibold text-stone-600 hover:text-orange-600 py-2 sm:px-2 transition"
                >
                  Hire Studio Space →
                </Link>
              </div>

              {/* Trust badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-stone-200/80 text-stone-700">
                <div>
                  <p className="text-2xl font-serif font-bold text-stone-900">1,100<span className="text-orange-600 text-lg">sq.ft</span></p>
                  <p className="text-xs text-stone-500 mt-0.5">Teakwood Studio</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-stone-900">15<span className="text-orange-600 text-lg">Max</span></p>
                  <p className="text-xs text-stone-500 mt-0.5">Intimate Class Size</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-stone-900">4.9<span className="text-amber-500 text-lg">★</span></p>
                  <p className="text-xs text-stone-500 mt-0.5">500+ Reviews</p>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Large Image */}
                <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80"
                    alt="Orange Studio Pottery Wheel Immersion"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Floating Overlay Badge 1 */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-stone-200 max-w-xs animate-slide-up">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                      <Sun className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-900">Morning Ashtanga & Light</p>
                      <p className="text-[11px] text-stone-500">Every morning 7:30 AM in Bandra</p>
                    </div>
                  </div>
                </div>

                {/* Floating Overlay Badge 2 */}
                <div className="absolute -top-4 -right-4 bg-stone-900 text-white p-3.5 rounded-2xl shadow-xl max-w-[190px] border border-stone-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-semibold">Weekend Slots Live</span>
                  </div>
                  <p className="text-[11px] text-stone-300 mt-1">Pottery & Sound Baths booking fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills & Upcoming Workshops */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Curated Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-1">
              Upcoming Workshops & Immersions
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl">
              From mindful wheel pottery to contemporary floorwork and gong sound healing, explore hands-on weekend sessions designed for all levels.
            </p>
          </div>

          <Link
            to="/classes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition self-start md:self-auto"
          >
            <span>View All 8+ Offerings</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-orange-200 hover:bg-orange-50/50'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isSelected ? 'text-white' : 'text-orange-600'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkshops.map((workshop) => (
            <ClassCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </section>

      {/* Video Area Feature (Compliant Blank YouTube Placeholder) */}
      <section className="py-12 sm:py-16 bg-stone-100/70 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Sanctuary Atmosphere
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">
              Step Inside Orange Studio
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Experience the natural wooden flooring, garden breeze, and calm energy of our Bandra studio sanctuary.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VideoPlaceholder
              title="A Day Inside Orange Studio Bandra"
              subtitle="Sunlight filtering through French windows, soothing sound baths, and pottery wheels in motion."
              duration="03:45"
            />
          </div>
        </div>
      </section>

      {/* Studio Spaces & Space Hire Teaser */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase border border-orange-500/30">
                Space Hire & Production
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Hire Our Teakwood Sanctuary for Rehearsals, Shoots & Gatherings
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                Featuring 1,100 sq.ft of sprung Canadian maple wooden flooring, natural sunlight from private garden courtyards, full-length mirrors, aerial rigging, and Hi-Fi acoustic isolation.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                  <span>Choreography Shoots</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                  <span>Private Masterclasses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                  <span>Audio & Podcast Pod</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/rental"
                  className="inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-6 py-3.5 text-xs font-bold text-white shadow hover:bg-orange-500 transition"
                >
                  <span>Explore Rental Specs & Pricing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/schedule"
                  className="inline-flex items-center gap-2 rounded-2xl bg-stone-800 border border-stone-700 px-6 py-3.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
                >
                  <span>Check Timetable Availability</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-800 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
                  alt="Orange Studio Teakwood Hall"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resident Instructors Spotlight */}
      <section className="py-16 bg-stone-50 border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Our Faculty
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">
              Guided by Passionate Resident Artists
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Every mentor brings decades of disciplined practice, international teaching, and a welcoming approach for newcomers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(INSTRUCTORS).slice(0, 4).map((inst) => (
              <div key={inst.id} className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs flex flex-col items-center text-center">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="h-24 w-24 rounded-full object-cover shadow-md mb-4 border-2 border-orange-200"
                />
                <h3 className="font-serif font-bold text-base text-stone-900">{inst.name}</h3>
                <p className="text-xs text-orange-600 font-medium mt-0.5">{inst.role}</p>
                <p className="text-[11px] text-stone-500 font-mono mt-1">{inst.experience}</p>
                <p className="text-xs text-stone-600 mt-3 line-clamp-3 leading-relaxed">
                  {inst.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-700 hover:text-orange-800"
            >
              <span>Learn more about our team and founder story</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Community Love
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">
            Voices from Our Studio Family
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-stone-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover border border-stone-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{item.name}</h4>
                  <p className="text-[11px] text-stone-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compact Advertisement Placeholder near bottom of page */}
      <AdBanner slotId="homepage-bottom-slot" />
    </div>
  );
};
