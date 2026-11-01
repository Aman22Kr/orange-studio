import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Layers,
  Users,
  Send,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { STUDIO_SPACES, StudioSpace } from '../data/studioData';
import { useStudio } from '../context/StudioContext';
import { AdBanner } from '../components/AdBanner';

export const RentalPage: React.FC = () => {
  const { submitRentalInquiry } = useStudio();
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>(STUDIO_SPACES[0].id);
  const [hours, setHours] = useState<number>(3);
  const [includeAudioRig, setIncludeAudioRig] = useState<boolean>(true);
  const [includeTeaStation, setIncludeTeaStation] = useState<boolean>(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requestedDate: '2026-11-15',
    purpose: 'Dance Rehearsal & Video Shoot',
    guestCount: 15,
    notes: ''
  });
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);

  const currentSpace = STUDIO_SPACES.find((s) => s.id === selectedSpaceId) || STUDIO_SPACES[0];

  // Pricing calculation
  const baseSpaceCost = currentSpace.hourlyRate * hours;
  const audioRigCost = includeAudioRig ? 800 : 0;
  const teaCost = includeTeaStation ? 1200 : 0;
  const totalEstimatedCost = baseSpaceCost + audioRigCost + teaCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    const inq = submitRentalInquiry({
      spaceId: currentSpace.id,
      spaceName: currentSpace.name,
      requestedDate: formData.requestedDate,
      durationHours: hours,
      estimatedCost: totalEstimatedCost,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      purpose: formData.purpose,
      guestCount: Number(formData.guestCount)
    });

    setSubmittedInquiryId(inq.inquiryId);
  };

  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase border border-orange-500/30 mb-3">
            Space Hire & Studio Rental
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Rent Our Bandra Sanctuary
          </h1>
          <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
            From choreographer rehearsals and commercial shoots to intimate wellness circles and corporate creative workshops. Sunlit, private, and fully equipped.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7">
        {/* Space Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {STUDIO_SPACES.map((space) => {
            const isSelected = space.id === selectedSpaceId;
            return (
              <div
                key={space.id}
                onClick={() => setSelectedSpaceId(space.id)}
                className={`cursor-pointer rounded-3xl bg-white border p-5 transition-all duration-300 shadow-sm flex flex-col justify-between ${
                  isSelected
                    ? 'border-orange-600 ring-2 ring-orange-500/30 shadow-lg scale-102'
                    : 'border-stone-200 hover:border-stone-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="aspect-16/10 rounded-2xl overflow-hidden mb-4 bg-stone-100">
                    <img src={space.image} alt={space.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-orange-600 font-mono">
                      {space.areaSqFt} SQ.FT
                    </span>
                    <span className="text-xs font-bold text-stone-900">
                      ₹{space.hourlyRate}/hr
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 leading-snug">{space.name}</h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">{space.tagline}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400">Min. {space.minHours} hours booking</span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                      isSelected ? 'bg-orange-600 text-white' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Select Space'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Space Deep Dive & Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Space Details */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Detailed Space Specifications
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                {currentSpace.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {currentSpace.tagline}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-200 text-center">
              <div>
                <p className="text-lg font-bold text-stone-900">{currentSpace.areaSqFt}</p>
                <p className="text-[11px] text-stone-500 uppercase tracking-wider">Usable Sq.Ft</p>
              </div>
              <div>
                <p className="text-lg font-bold text-stone-900">{currentSpace.capacity.split(' ')[0]}</p>
                <p className="text-[11px] text-stone-500 uppercase tracking-wider">Max Capacity</p>
              </div>
              <div>
                <p className="text-lg font-bold text-stone-900">₹{currentSpace.hourlyRate}</p>
                <p className="text-[11px] text-stone-500 uppercase tracking-wider">Hourly Tier</p>
              </div>
            </div>

            {/* Architectural Features */}
            <div>
              <h4 className="text-sm font-serif font-bold text-stone-900 mb-3">Architectural & Flooring Features</h4>
              <ul className="space-y-2 text-xs text-stone-700">
                {currentSpace.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included Equipment */}
            <div className="pt-4 border-t border-stone-100">
              <h4 className="text-sm font-serif font-bold text-stone-900 mb-3">Included Sound & Equipment</h4>
              <ul className="space-y-2 text-xs text-stone-700">
                {currentSpace.includedEquipment.map((eq, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cost Estimator & Inquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-stone-900">Rental Calculator & Inquiry</h3>
              <p className="text-xs text-stone-500 mt-1">Estimate your session cost and submit your reservation request.</p>
            </div>

            {/* Estimator Controls */}
            <div className="space-y-4 p-4 bg-orange-50/60 rounded-2xl border border-orange-100">
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Duration</span>
                  <span className="text-orange-700 font-mono">{hours} Hours</span>
                </div>
                <input
                  type="range"
                  min={currentSpace.minHours}
                  max={12}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-orange-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-600 mt-1 font-mono">
                  <span>Min {currentSpace.minHours} hrs</span>
                  <span>Full Day (12 hrs)</span>
                </div>
              </div>

              {/* Addons */}
              <div className="space-y-2 pt-2 border-t border-orange-200/60 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeAudioRig}
                    onChange={(e) => setIncludeAudioRig(e.target.checked)}
                    className="rounded text-orange-600 focus:ring-orange-500"
                  />
                  <span>Wireless Lapel Mic + Audio Technician Setup (+₹800)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeTeaStation}
                    onChange={(e) => setIncludeTeaStation(e.target.checked)}
                    className="rounded text-orange-600 focus:ring-orange-500"
                  />
                  <span>Unlimited Garden Herbal Tea & Brew Bar (+₹1,200)</span>
                </label>
              </div>

              {/* Total Calculation */}
              <div className="pt-3 border-t border-orange-200/60 flex items-center justify-between text-sm">
                <span className="font-semibold text-stone-800">Estimated Total:</span>
                <span className="text-xl font-bold text-orange-700">₹{totalEstimatedCost.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Submission Form */}
            {submittedInquiryId ? (
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fade-in">
                <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-bold text-stone-900">Rental Inquiry Received!</h4>
                <p className="text-xs text-stone-600">
                  Your reference ID is <strong className="font-mono text-emerald-800">{submittedInquiryId}</strong>.
                  Our studio director will review availability and call you within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmittedInquiryId(null)}
                  className="text-xs font-semibold text-emerald-700 underline mt-2 block mx-auto"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priya@example.com"
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 00000"
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Requested Date</label>
                    <input
                      type="date"
                      required
                      value={formData.requestedDate}
                      onChange={(e) => setFormData({ ...formData, requestedDate: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Est. Guests</label>
                    <input
                      type="number"
                      min={1}
                      max={40}
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-xs font-bold shadow-md shadow-orange-600/20 transition flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Studio Space Reservation Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Compact Ad Banner */}
      <AdBanner slotId="rental-bottom-ad" className="mt-16" />
    </div>
  );
};
