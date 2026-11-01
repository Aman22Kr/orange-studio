import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Sun, Feather, Flame, ArrowRight, MapPin, Users, Award } from 'lucide-react';
import { INSTRUCTORS } from '../data/studioData';
import { AdBanner } from '../components/AdBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-16 sm:py-24 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase border border-orange-500/30 mb-3">
            Our Story & Space
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Rooted in Creativity, Movement & Calm
          </h1>
          <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
            Orange Studio was founded as an intimate urban sanctuary where body, breath, and hands come alive through conscious practice and tactile arts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 space-y-16">
        {/* Story Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-stone-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">The Genesis</span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              A Quiet Corner in the Vibrant Heart of Bandra
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed">
              Living in Mumbai is exhilarating, but the constant velocity often pulls us out of our bodies and into our analytical minds. Orange Studio was envisioned as an antidote to screen fatigue—a place where you can take off your shoes, feel real Canadian maple wood under your soles, and shape raw earth on a potter wheel.
            </p>
            <p className="text-sm text-stone-700 leading-relaxed">
              We started with a single sunlit room overlooking an old frangipani tree on St. Leo Road. Over the years, our sanctuary expanded to host daily Ashtanga flows, contemporary floorwork releases, vibrational Tibetan singing bowl sound baths, and ceramic sculpture masterclasses.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-orange-200">
                <img
                  src={INSTRUCTORS.tanvi.image}
                  alt="Tanvi Mehra"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-900">Tanvi Mehra</p>
                <p className="text-xs text-stone-500">Founder & Movement Director, Orange Studio</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-100">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80"
                alt="Studio founder and space"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Pillars / Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Our Guiding Values</span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">What Shapes Our Sanctuary</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Tactile & Organic Arts</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We believe in genuine materials: stoneware clay, natural water-based pigments, cold-pressed paper, and organic cotton mats. No shortcuts, just real sensory connection.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Intimate Scale, Zero Ego</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Classes are strictly kept between 8 to 15 students. Whether you are stepping onto a dance floor for the first time or returning after years, you are met with warmth and encouragement.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Sun className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Holistic Equilibrium</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Movement and stillness are two halves of the same circle. We balance vigorous physical choreography with deeply restful sound baths, restorative Yin, and slow craft.
              </p>
            </div>
          </div>
        </div>

        {/* Complete Faculty Roster */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Resident Faculty</span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">Meet the Masters Behind the Classes</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(INSTRUCTORS).map((inst) => (
              <div key={inst.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="aspect-4/3 overflow-hidden bg-stone-100">
                    <img src={inst.image} alt={inst.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                      {inst.experience}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-stone-900 mt-2">{inst.name}</h3>
                    <p className="text-xs font-medium text-orange-700">{inst.role}</p>
                    <p className="text-xs text-stone-500 mt-0.5">{inst.specialty}</p>
                    <p className="text-xs text-stone-600 leading-relaxed mt-3 pt-3 border-t border-stone-100">
                      {inst.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/classes?query=${encodeURIComponent(inst.name.split(' ')[0])}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-stone-100 hover:bg-orange-50 text-stone-800 hover:text-orange-700 text-xs font-semibold transition"
                  >
                    <span>View Classes with {inst.name.split(' ')[0]}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compact Ad Banner */}
      <AdBanner slotId="about-bottom-ad" className="mt-16" />
    </div>
  );
};
