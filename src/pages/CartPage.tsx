import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Tag,
  CheckCircle2,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { useStudio, ConfirmedBooking } from '../context/StudioContext';
import { AdBanner } from '../components/AdBanner';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, createBooking, addToast } = useStudio();
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoDiscount, setPromoDiscount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);

  // Form Fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'ORANGE10') {
      const discount = Math.round(cartTotal * 0.1);
      setPromoDiscount(discount);
      setAppliedPromo('ORANGE10 (10% Off)');
      addToast('Promo Applied', '10% discount applied to your booking bag!', 'success');
    } else if (code === 'WELCOME20') {
      const discount = Math.round(cartTotal * 0.2);
      setPromoDiscount(discount);
      setAppliedPromo('WELCOME20 (20% Off)');
      addToast('Promo Applied', '20% welcome discount applied to your booking bag!', 'success');
    } else {
      addToast('Invalid Code', 'Try "ORANGE10" or "WELCOME20" for demo discounts.', 'info');
    }
  };

  const finalTotal = Math.max(0, cartTotal - promoDiscount);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      addToast('Missing Info', 'Please enter your name, email, and mobile number.', 'info');
      return;
    }

    setIsSubmitting(true);
    try {
      const booking = await createBooking({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        specialRequests: formData.specialRequests,
        discountCode: appliedPromo ? promoCode : undefined
      });
      setConfirmedBooking(booking);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (confirmedBooking) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-2xl space-y-6">
          <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Booking Confirmed</span>
            <h1 className="text-3xl font-serif font-bold text-stone-900 mt-1">
              We Look Forward to Welcoming You!
            </h1>
            <p className="text-sm text-stone-500 mt-2">
              Your booking reservation code is:
            </p>
            <div className="inline-block bg-orange-50 border border-orange-200 rounded-2xl px-5 py-2 mt-2 font-mono font-bold text-lg text-orange-700">
              {confirmedBooking.bookingId}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 text-left text-xs space-y-2 border border-stone-200 max-w-md mx-auto">
            <p><strong className="text-stone-800">Primary Attendee:</strong> {confirmedBooking.customerName}</p>
            <p><strong className="text-stone-800">Confirmation Sent To:</strong> {confirmedBooking.customerEmail}</p>
            <p><strong className="text-stone-800">Studio Location:</strong> Villa A, Wilfred Heritage, St. Leo Road, Bandra West, Mumbai</p>
            <p><strong className="text-stone-800">Amount Paid (Demo):</strong> ₹{confirmedBooking.totalAmount.toLocaleString('en-IN')}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to="/bookings"
              className="w-full sm:w-auto px-6 py-3 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition"
            >
              View in My Bookings
            </Link>
            <Link
              to="/classes"
              className="w-full sm:w-auto px-6 py-3 bg-orange-600 text-white rounded-xl text-xs font-semibold hover:bg-orange-700 transition"
            >
              Explore More Classes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-3xl p-12 border border-dashed border-stone-300 max-w-md mx-auto space-y-4">
          <ShoppingBag className="h-12 w-12 text-stone-300 mx-auto" />
          <h2 className="text-xl font-serif font-bold text-stone-900">Your Booking Bag is Empty</h2>
          <p className="text-xs text-stone-500 max-w-xs mx-auto leading-relaxed">
            You haven't added any workshops or masterclasses yet. Choose from our upcoming pottery, movement, and sound sessions.
          </p>
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl text-xs font-semibold shadow hover:bg-orange-700 transition"
          >
            <span>Browse Classes & Workshops</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      <div className="bg-stone-900 text-white py-12 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Your Booking Bag ({cart.length} {cart.length === 1 ? 'Workshop' : 'Workshops'})
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            Complete your registration for upcoming studio sessions in Bandra West.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex justify-between items-center text-xs text-stone-500 px-1">
              <span>Selected Sessions</span>
              <button
                onClick={clearCart}
                className="text-stone-400 hover:text-stone-700 underline text-xs"
              >
                Clear Bag
              </button>
            </div>

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 border border-stone-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 rounded-2xl object-cover border border-stone-200 shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500">Instructor: {item.instructorName}</p>
                    <div className="flex items-center gap-3 text-xs text-stone-600 pt-1">
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <Calendar className="h-3 w-3 text-stone-400" />
                        <span>{item.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <Clock className="h-3 w-3 text-stone-400" />
                        <span>{item.timeSlot}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                  {/* Quantity selector */}
                  <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl p-1">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="h-6 w-6 rounded bg-white flex items-center justify-center text-xs font-bold shadow-xs hover:bg-stone-100"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-stone-800 px-1.5">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="h-6 w-6 rounded bg-white flex items-center justify-center text-xs font-bold shadow-xs hover:bg-stone-100"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-stone-900">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-400 hover:text-rose-600 transition p-1"
                      title="Remove from bag"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/classes"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 pt-2"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Continue browsing workshops</span>
            </Link>
          </div>

          {/* Attendee Details & Checkout Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl space-y-6">
              <h2 className="text-lg font-serif font-bold text-stone-900">
                Attendee & Booking Details
              </h2>

              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Kapoor"
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="radhika@example.com"
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Mobile Number *
                    </label>
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

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Special Notes / Wheel Preference
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="Left-handed pottery wheel, injury adjustments, etc."
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                  />
                </div>

                {/* Promo Code Form */}
                <div className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code (try 'ORANGE10')"
                      className="flex-1 p-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 uppercase font-mono"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                      ✓ Promo applied: {appliedPromo}
                    </p>
                  )}
                </div>

                {/* Totals Breakdown */}
                <div className="pt-4 border-t border-stone-100 space-y-2 text-xs">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Discount</span>
                      <span>-₹{promoDiscount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-stone-600">
                    <span>Studio Equipment & Materials</span>
                    <span className="text-emerald-600 font-semibold">Included (₹0)</span>
                  </div>
                  <div className="flex justify-between text-stone-900 font-bold text-base pt-2 border-t border-stone-200">
                    <span>Total Payable</span>
                    <span className="text-orange-700">₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-xs font-bold shadow-lg shadow-orange-600/25 transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Confirming Reservation...' : 'Confirm & Reserve Workshop Spots'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-[11px] text-stone-400 text-center">
                  Instant reservation saved to browser localStorage. No real card charge incurred in demo mode.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <AdBanner slotId="cart-bottom-ad" className="mt-16" />
    </div>
  );
};
