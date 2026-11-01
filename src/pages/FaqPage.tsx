import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS } from '../data/studioData';
import { AdBanner } from '../components/AdBanner';

export const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>(['faq-1', 'faq-2']);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'First-Timers', 'Booking & Passes', 'Pottery & Craft', 'Space Rental', 'Studio Etiquette'];

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter((faq) => {
    if (selectedCategory !== 'All' && faq.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase border border-orange-500/30 mb-3">
            Help Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
            Everything you need to know about our Bandra studio policies, what to bring to pottery workshops, footwear etiquette, and space rental.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7">
        {/* Search and Category Filters */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-stone-200 mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. beginner, shoes, cancellation, kiln)..."
              className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl text-xs sm:text-sm text-stone-900 placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center border border-stone-200">
              <HelpCircle className="h-8 w-8 text-stone-300 mx-auto mb-2" />
              <h4 className="font-serif font-bold text-stone-900">No Questions Match Your Search</h4>
              <p className="text-xs text-stone-500 mt-1">Have a specific question? Contact our team directly.</p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600"
              >
                <span>Go to Contact Page</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-3xl border border-stone-200/90 shadow-xs overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-orange-600">
                        {faq.category}
                      </span>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-600">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Need more help card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-orange-50 border border-orange-200 text-center space-y-3">
          <h3 className="font-serif font-bold text-lg text-stone-900">Still have a question?</h3>
          <p className="text-xs text-stone-600 max-w-md mx-auto">
            Our studio assistants and teachers are happy to assist with any personal queries or custom private bookings.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white rounded-xl text-xs font-semibold shadow hover:bg-orange-700 transition"
          >
            <span>Talk to Us</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <AdBanner slotId="faq-bottom-ad" className="mt-16" />
    </div>
  );
};
