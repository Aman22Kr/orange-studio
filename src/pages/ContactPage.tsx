import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Compass,
  Car,
  Train
} from 'lucide-react';
import { useStudio } from '../context/StudioContext';
import { AdBanner } from '../components/AdBanner';

export const ContactPage: React.FC = () => {
  const { addToast } = useStudio();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Workshops & Classes Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    addToast('Message Received', 'Thank you! Our studio team will get back to you shortly.', 'success');
  };

  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase border border-orange-500/30 mb-3">
            Visit Our Sanctuary
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Connect with Orange Studio
          </h1>
          <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
            Have questions about weekend pottery slots, yoga alignment, or hosting a private event in Bandra? We would love to welcome you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Contact Information & Directions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-5">
              <h2 className="text-xl font-serif font-bold text-stone-900">
                Studio Address & Hours
              </h2>

              <div className="space-y-4 text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold mb-0.5">Location</strong>
                    <span>Villa A, Wilfred Heritage, Plot 112, St. Leo Road, Bandra West, Mumbai, Maharashtra 400050</span>
                    <span className="block text-stone-400 mt-1">Landmark: Near St. Stanislaus High School / Off Carter Road</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold mb-0.5">Sanctuary Hours</strong>
                    <span>Monday to Sunday: 7:00 AM – 9:30 PM IST</span>
                    <span className="block text-stone-400 mt-0.5">Studio opens 20 minutes prior to first class</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold mb-0.5">Telephone & WhatsApp</strong>
                    <span>+91 98201 44520 / +91 22 2640 8891</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold mb-0.5">Email</strong>
                    <span>hello@orangestudio.in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Reach Us */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
              <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                <Compass className="h-4 w-4 text-orange-600" />
                <span>How to Reach Us in Bandra</span>
              </h3>

              <div className="space-y-3 text-xs text-stone-600">
                <div className="flex items-start gap-2.5">
                  <Train className="h-4 w-4 text-stone-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>By Local Train:</strong> 10 minutes by auto-rickshaw from Bandra Railway Station (West side).
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Car className="h-4 w-4 text-stone-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>By Cab / Car:</strong> Enter via St. Leo Road. Street parking is available along the residential lane.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Direct Inquiries</span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Send Us a Note
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  We typically respond within 3 hours during studio operating hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h3 className="font-serif font-bold text-lg text-stone-900">Message Received!</h3>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto">
                    Thank you, {formData.name}. We have logged your inquiry and sent a receipt confirmation to {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', category: 'Workshops & Classes Inquiry', message: '' });
                    }}
                    className="mt-4 px-5 py-2 bg-orange-600 text-white rounded-xl text-xs font-semibold"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alisha Merchant"
                        className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alisha@example.com"
                        className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98200 00000"
                        className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Topic of Inquiry
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                      >
                        <option value="Workshops & Classes Inquiry">Workshops & Classes</option>
                        <option value="Studio Space Rental">Studio Space Rental</option>
                        <option value="Corporate / Private Workshop">Corporate or Private Workshop</option>
                        <option value="Retreat Information">Upcoming Retreats</option>
                        <option value="General Question">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you are looking for..."
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-orange-500 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-xs font-bold shadow-md shadow-orange-600/25 transition flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <AdBanner slotId="contact-bottom-ad" className="mt-16" />
    </div>
  );
};
