import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Heart,
  Star,
  Share2,
  ArrowLeft,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { WORKSHOPS_CLASSES } from '../data/studioData';
import { useStudio } from '../context/StudioContext';
import { ClassCard } from '../components/ClassCard';
import { AdBanner } from '../components/AdBanner';

export const ClassDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, isFavorite, toggleFavorite, addToast } = useStudio();

  const workshop = WORKSHOPS_CLASSES.find((w) => w.id === id || w.slug === id);

  const [selectedDate, setSelectedDate] = useState<string>(
    workshop?.availableDates[0] || '2026-11-07'
  );
  const [selectedSlot, setSelectedSlot] = useState<string>('Morning Session (11:30 AM)');
  const [attendeeCount, setAttendeeCount] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  if (!workshop) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-serif font-bold text-stone-900">Workshop Not Found</h2>
        <p className="text-sm text-stone-500 mt-2">
          The workshop or class you are looking for does not exist or has concluded.
        </p>
        <Link
          to="/classes"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-2xl text-xs font-semibold shadow hover:bg-orange-700 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Browse All Available Classes</span>
        </Link>
      </div>
    );
  }

  const favorited = isFavorite(workshop.id);
  const totalPrice = workshop.price * attendeeCount;
  const gallery = workshop.galleryImages && workshop.galleryImages.length > 0
    ? workshop.galleryImages
    : [workshop.image];

  const handleAddToCart = () => {
    addToCart({
      classId: workshop.id,
      title: workshop.title,
      instructorName: workshop.instructor.name,
      date: selectedDate,
      timeSlot: selectedSlot,
      price: workshop.price,
      quantity: attendeeCount,
      image: workshop.image,
      category: workshop.category
    });
  };

  const handleBookNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('Link Copied', 'Workshop URL copied to clipboard.', 'info');
  };

  const related = WORKSHOPS_CLASSES.filter(
    (w) => w.id !== workshop.id && w.category === workshop.category
  ).slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-1.5 overflow-hidden">
            <Link to="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <Link to="/classes" className="hover:text-stone-900">Workshops & Classes</Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-stone-900 font-medium truncate max-w-xs">{workshop.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-xs text-stone-600 hover:text-stone-900 px-2.5 py-1 rounded-lg border border-stone-200 hover:bg-stone-50 transition"
              title="Share workshop link"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>
            <button
              onClick={() => toggleFavorite(workshop.id)}
              className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border transition ${
                favorited
                  ? 'border-rose-200 bg-rose-50 text-rose-600'
                  : 'border-stone-200 text-stone-600 hover:text-rose-600 hover:bg-stone-50'
              }`}
            >
              <Heart className={`h-3.5 w-3.5 ${favorited ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{favorited ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Left Content Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {workshop.categoryLabel}
                </span>
                <span className="bg-stone-200 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">
                  {workshop.level}
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold bg-white border border-stone-200 px-3 py-1 rounded-full">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-stone-900">{workshop.rating.toFixed(1)}</span>
                  <span className="text-stone-400">({workshop.reviewsCount} reviews)</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
                {workshop.title}
              </h1>

              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                {workshop.shortDescription}
              </p>

              {/* Quick specs pill strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-200">
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <Clock className="h-4 w-4 text-orange-600 shrink-0" />
                  <div>
                    <span className="block text-stone-400 text-[10px]">Duration</span>
                    <strong className="font-semibold">{workshop.duration}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <Users className="h-4 w-4 text-orange-600 shrink-0" />
                  <div>
                    <span className="block text-stone-400 text-[10px]">Class Size</span>
                    <strong className="font-semibold">Max 12-15 Students</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <MapPin className="h-4 w-4 text-orange-600 shrink-0" />
                  <div>
                    <span className="block text-stone-400 text-[10px]">Sanctuary Space</span>
                    <strong className="font-semibold truncate block max-w-[120px]">{workshop.locationRoom}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-700">
                  <Sparkles className="h-4 w-4 text-orange-600 shrink-0" />
                  <div>
                    <span className="block text-stone-400 text-[10px]">Skill Tier</span>
                    <strong className="font-semibold">{workshop.level}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Display */}
            <div className="space-y-3">
              <div className="aspect-16/10 rounded-3xl overflow-hidden bg-stone-200 border border-stone-200 shadow-md">
                <img
                  src={gallery[activeImageIndex] || workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative h-18 w-24 rounded-2xl overflow-hidden border-2 shrink-0 transition ${
                        activeImageIndex === idx
                          ? 'border-orange-600 shadow-md scale-102'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Deep Description & Itinerary */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">About This Immersion</h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {workshop.fullDescription}
                </p>
              </div>

              {/* What you will learn */}
              <div className="pt-6 border-t border-stone-100">
                <h4 className="text-base font-serif font-bold text-stone-900 mb-4">What You Will Explore & Learn</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {workshop.whatYouWillLearn.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials & What to bring */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-stone-100">
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-orange-800 mb-2">Included Materials</h5>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {workshop.includedMaterials.map((mat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">What to Bring</h5>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {workshop.whatToBring.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-stone-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Instructor Profile Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600 block mb-2">
                Resident Instructor
              </span>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img
                  src={workshop.instructor.image}
                  alt={workshop.instructor.name}
                  className="h-20 w-20 rounded-2xl object-cover border-2 border-orange-200 shadow-sm"
                />
                <div className="space-y-1.5 text-center sm:text-left">
                  <h3 className="text-lg font-serif font-bold text-stone-900">{workshop.instructor.name}</h3>
                  <p className="text-xs font-medium text-orange-700">{workshop.instructor.role}</p>
                  <p className="text-[11px] font-mono text-stone-500">{workshop.instructor.experience} • {workshop.instructor.specialty}</p>
                  <p className="text-xs text-stone-600 leading-relaxed pt-2">
                    {workshop.instructor.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sticky Booking Widget */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xl space-y-5">
              {/* Pricing Header */}
              <div className="flex items-baseline justify-between border-b border-stone-100 pb-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-stone-900">₹{workshop.price.toLocaleString('en-IN')}</span>
                    {workshop.originalPrice && (
                      <span className="text-sm text-stone-400 line-through">
                        ₹{workshop.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-stone-500">per person • materials included</span>
                </div>

                <div className="text-right">
                  <span className="inline-block bg-orange-100 text-orange-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    {workshop.slotsAvailable} spots left
                  </span>
                </div>
              </div>

              {/* Step 1: Select Date */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Select Workshop Date
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {workshop.availableDates.map((dateStr) => {
                    const d = new Date(dateStr + 'T00:00:00');
                    const formatted = d.toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    });
                    const isSelected = selectedDate === dateStr;
                    return (
                      <button
                        key={dateStr}
                        type="button"
                        onClick={() => setSelectedDate(dateStr)}
                        className={`p-2.5 rounded-xl text-left border text-xs transition ${
                          isSelected
                            ? 'border-orange-600 bg-orange-50 font-bold text-orange-900 shadow-xs'
                            : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-300'
                        }`}
                      >
                        <Calendar className="h-3 w-3 text-orange-600 mb-1" />
                        <span className="block">{formatted}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Time Slot */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Select Time Slot
                </label>
                <select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                >
                  <option value="Morning Session (11:30 AM)">Morning Session (11:30 AM – 02:00 PM)</option>
                  <option value="Afternoon Session (04:00 PM)">Afternoon Session (04:00 PM – 06:30 PM)</option>
                  <option value="Twilight Session (07:00 PM)">Twilight Session (07:00 PM – 09:30 PM)</option>
                </select>
              </div>

              {/* Step 3: Attendees Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-700">
                  <span>Number of Attendees</span>
                  <span className="text-stone-400 font-normal">Max 6 per booking</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-stone-50 border border-stone-200 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setAttendeeCount(Math.max(1, attendeeCount - 1))}
                    disabled={attendeeCount <= 1}
                    className="h-8 w-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center font-bold text-stone-700 disabled:opacity-40 hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-stone-900">{attendeeCount} Attendee{attendeeCount > 1 ? 's' : ''}</span>
                  <button
                    type="button"
                    onClick={() => setAttendeeCount(Math.min(6, attendeeCount + 1))}
                    disabled={attendeeCount >= 6}
                    className="h-8 w-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center font-bold text-stone-700 disabled:opacity-40 hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="p-3.5 bg-orange-50/70 border border-orange-100 rounded-xl space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>₹{workshop.price} × {attendeeCount} attendee{attendeeCount > 1 ? 's' : ''}</span>
                  <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between font-bold text-stone-900 text-sm pt-1 border-t border-orange-200/60">
                  <span>Total Amount</span>
                  <span className="text-orange-700">₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="w-full py-3.5 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-xs font-bold shadow-lg shadow-orange-600/25 transition flex items-center justify-center gap-2"
                >
                  <span>Book Workshop Directly</span>
                  <ChevronRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full py-3 px-4 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-2xl text-xs font-semibold shadow-xs transition flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="h-4 w-4 text-orange-600" />
                  <span>Add to Booking Bag</span>
                </button>
              </div>

              {/* Guarantees */}
              <div className="pt-2 text-[11px] text-stone-600 space-y-1">
                <p className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Free reschedule up to 24 hours prior to class</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>All art supplies, glazes & yoga props provided</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Workshops */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-stone-200">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8">
              More in {workshop.categoryLabel}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <ClassCard key={item.id} workshop={item} />
              ))}
            </div>
          </div>
        )}

        {/* Compact Ad Banner */}
        <AdBanner slotId="detail-page-bottom" className="mt-16" />
      </div>
    </div>
  );
};
