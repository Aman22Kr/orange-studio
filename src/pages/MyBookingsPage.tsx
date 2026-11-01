import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Calendar,
  Heart,
  Layers,
  CheckCircle2,
  Clock,
  MapPin,
  Trash2,
  Sparkles,
  ArrowRight,
  Database
} from 'lucide-react';
import { useStudio } from '../context/StudioContext';
import { WORKSHOPS_CLASSES } from '../data/studioData';
import { ClassCard } from '../components/ClassCard';
import { AdBanner } from '../components/AdBanner';

export const MyBookingsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabParam = searchParams.get('tab') || 'bookings';
  const [activeTab, setActiveTab] = useState<'bookings' | 'favorites' | 'rentals'>(
    activeTabParam as any
  );

  const { bookings, cancelBooking, favorites, rentalInquiries } = useStudio();

  const handleTabChange = (tab: 'bookings' | 'favorites' | 'rentals') => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const favoriteWorkshops = WORKSHOPS_CLASSES.filter((w) => favorites.includes(w.id));

  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-14 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase border border-orange-500/30 mb-2">
                Client-Side Profile
              </span>
              <h1 className="text-3xl font-serif font-bold text-white">
                My Studio Pass & Saved Wishlist
              </h1>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Persisted in your browser localStorage. Verified across page refreshes.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-stone-800/80 px-3.5 py-2 rounded-2xl border border-stone-700 text-xs text-stone-300">
              <Database className="h-4 w-4 text-orange-400 shrink-0" />
              <span>Offline localStorage Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-3xl p-2 shadow-xl border border-stone-200/90 mb-8 max-w-xl flex items-center gap-1">
          <button
            onClick={() => handleTabChange('bookings')}
            className={`flex-1 py-3 px-4 rounded-2xl text-xs font-bold transition flex items-center justify-center gap-2 ${
              activeTab === 'bookings'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>Bookings ({bookings.length})</span>
          </button>

          <button
            onClick={() => handleTabChange('favorites')}
            className={`flex-1 py-3 px-4 rounded-2xl text-xs font-bold transition flex items-center justify-center gap-2 ${
              activeTab === 'favorites'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
            }`}
          >
            <Heart className="h-4 w-4" />
            <span>Saved ({favorites.length})</span>
          </button>

          <button
            onClick={() => handleTabChange('rentals')}
            className={`flex-1 py-3 px-4 rounded-2xl text-xs font-bold transition flex items-center justify-center gap-2 ${
              activeTab === 'rentals'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Rentals ({rentalInquiries.length})</span>
          </button>
        </div>

        {/* Tab 1: Workshop Bookings */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            {bookings.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-stone-300 max-w-lg mx-auto">
                <Calendar className="h-10 w-10 text-stone-300 mx-auto mb-3" />
                <h3 className="font-serif font-bold text-lg text-stone-900">No Workshop Bookings Yet</h3>
                <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                  Reserve a pottery wheel, yoga alignment, or sound bath slot to see your confirmation details here.
                </p>
                <Link
                  to="/classes"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white rounded-xl text-xs font-semibold shadow hover:bg-orange-700 transition"
                >
                  <span>Explore Workshops</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.bookingId}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200">
                            {booking.bookingId}
                          </span>
                          <span
                            className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                              booking.status === 'Confirmed'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-stone-100 text-stone-600'
                            }`}
                          >
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-xs text-stone-400 mt-1">
                          Booked on {new Date(booking.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <span className="text-base font-bold text-stone-900">
                          ₹{booking.totalAmount.toLocaleString('en-IN')}
                        </span>
                        <p className="text-[10px] text-stone-500">{booking.paymentMethod}</p>
                      </div>
                    </div>

                    {/* Booked Items list */}
                    <div className="space-y-3">
                      {booking.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-14 w-14 rounded-xl object-cover border border-stone-200 shrink-0"
                          />
                          <div className="text-xs space-y-0.5">
                            <h4 className="font-bold text-stone-900">{item.title}</h4>
                            <p className="text-stone-500">Instructor: {item.instructorName}</p>
                            <p className="text-stone-600 font-mono text-[11px]">
                              {item.date} • {item.timeSlot} • {item.quantity} Attendee{item.quantity > 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-stone-400" />
                        <span>Orange Studio, St. Leo Road, Bandra West, Mumbai</span>
                      </div>

                      {booking.status === 'Confirmed' && (
                        <button
                          onClick={() => cancelBooking(booking.bookingId)}
                          className="text-stone-400 hover:text-rose-600 underline text-xs"
                        >
                          Cancel Booking
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Saved Favorites */}
        {activeTab === 'favorites' && (
          <div>
            {favoriteWorkshops.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-stone-300 max-w-lg mx-auto">
                <Heart className="h-10 w-10 text-stone-300 mx-auto mb-3" />
                <h3 className="font-serif font-bold text-lg text-stone-900">Your Wishlist is Empty</h3>
                <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                  Click the heart icon on any workshop or masterclass card to save it to your wishlist.
                </p>
                <Link
                  to="/classes"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white rounded-xl text-xs font-semibold shadow hover:bg-orange-700 transition"
                >
                  <span>Explore Workshops</span>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {favoriteWorkshops.map((w) => (
                  <ClassCard key={w.id} workshop={w} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Space Rental Inquiries */}
        {activeTab === 'rentals' && (
          <div className="space-y-4">
            {rentalInquiries.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-stone-300 max-w-lg mx-auto">
                <Layers className="h-10 w-10 text-stone-300 mx-auto mb-3" />
                <h3 className="font-serif font-bold text-lg text-stone-900">No Studio Rental Inquiries</h3>
                <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                  Interested in renting our Teakwood Movement Sanctuary or Glass Atelier for shoots or workshops?
                </p>
                <Link
                  to="/rental"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white rounded-xl text-xs font-semibold shadow hover:bg-orange-700 transition"
                >
                  <span>Check Studio Rental Specs</span>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {rentalInquiries.map((inq) => (
                  <div
                    key={inq.inquiryId}
                    className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-stone-800 bg-stone-100 px-2 py-0.5 rounded">
                          {inq.inquiryId}
                        </span>
                        <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                          {inq.status}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-base text-stone-900 mt-1">
                        {inq.spaceName}
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Date: <strong className="text-stone-800">{inq.requestedDate}</strong> • Duration: <strong className="text-stone-800">{inq.durationHours} Hours</strong> • Purpose: {inq.purpose}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-base font-bold text-stone-900">
                        ₹{inq.estimatedCost.toLocaleString('en-IN')}
                      </span>
                      <span className="block text-[10px] text-stone-400">Estimated Quote</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <AdBanner slotId="bookings-bottom-ad" className="mt-16" />
    </div>
  );
};
