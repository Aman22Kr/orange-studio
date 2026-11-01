import React, { useState } from 'react';
import { Calendar, MapPin, Users, CheckCircle2, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { RETREATS, Retreat } from '../data/studioData';
import { useStudio } from '../context/StudioContext';
import { AdBanner } from '../components/AdBanner';

export const RetreatsPage: React.FC = () => {
  const { addToast } = useStudio();
  const [selectedRetreat, setSelectedRetreat] = useState<Retreat | null>(null);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');

  const handleInquire = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;
    setInquirySent(true);
    addToast('Retreat Inquiry Sent', `We have received your retreat interest for ${selectedRetreat?.title}. Our coordinator will contact you.`, 'success');
  };

  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase border border-orange-500/30 mb-3">
            Mindful Escapes
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Curated Immersions & Retreats
          </h1>
          <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
            Multi-day nature journeys designed to deepen your practice. Combining ocean breezes, Himalayan serenity, daily somatic dance, clay sculpting, and nourishing farm cuisine.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 space-y-12">
        {/* Retreats List */}
        <div className="space-y-10">
          {RETREATS.map((retreat) => (
            <div
              key={retreat.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-lg grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image side */}
              <div className="lg:col-span-5 relative aspect-4/3 lg:aspect-auto">
                <img
                  src={retreat.image}
                  alt={retreat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-orange-400" />
                  <span>{retreat.destination}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-stone-950/70 backdrop-blur-md text-white p-3 rounded-2xl flex items-center justify-between text-xs">
                  <span className="font-mono text-orange-300 font-bold">{retreat.duration}</span>
                  <span className="bg-orange-600 px-2 py-0.5 rounded-full font-bold text-[11px]">
                    {retreat.spotsRemaining} spots left
                  </span>
                </div>
              </div>

              {/* Details side */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-orange-600 font-semibold mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{retreat.dates}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-snug">
                    {retreat.title}
                  </h2>

                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    {retreat.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 pt-6 border-t border-stone-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">Retreat Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {retreat.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-orange-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">Package Inclusions</h5>
                    <div className="flex flex-wrap gap-2">
                      {retreat.included.map((inc, i) => (
                        <span key={i} className="text-xs bg-white px-2.5 py-1 rounded-lg border border-stone-200 text-stone-700">
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-2xl font-bold text-stone-900">
                      ₹{retreat.pricePerPerson.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-stone-500 block">per person / all-inclusive</span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedRetreat(retreat);
                      setInquirySent(false);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-xs font-semibold shadow transition"
                  >
                    <span>Request Retreat Brochure & Reserve</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Inquiry */}
        {selectedRetreat && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-stone-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Reserve Your Spot</span>
                  <h3 className="text-lg font-serif font-bold text-stone-900 mt-0.5">{selectedRetreat.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedRetreat(null)}
                  className="text-stone-400 hover:text-stone-700 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              {inquirySent ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif font-bold text-lg text-stone-900">Thank You!</h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto">
                    We have received your reservation request for {selectedRetreat.title}. Our retreat curator will reach out with the full PDF brochure and room selection details.
                  </p>
                  <button
                    onClick={() => setSelectedRetreat(null)}
                    className="mt-4 px-6 py-2.5 bg-orange-600 text-white rounded-xl text-xs font-semibold"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquire} className="space-y-4">
                  <p className="text-xs text-stone-600">
                    Spots are strictly limited to 12 participants. Complete this quick form to hold a provisional spot.
                  </p>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Radhika Sen"
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      placeholder="radhika@example.com"
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold shadow"
                  >
                    Submit Reservation Interest
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Compact Ad Banner */}
      <AdBanner slotId="retreats-bottom-ad" className="mt-16" />
    </div>
  );
};
