import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Calendar, ArrowRight } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full min-h-[70vh] bg-stone-50 flex flex-col justify-between py-16 px-4">
      <div className="max-w-md mx-auto text-center space-y-5 my-auto">
        <div className="h-16 w-16 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center mx-auto shadow-inner">
          <Compass className="h-8 w-8" />
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600">
          Error 404 • Lost in the Sanctuary
        </span>

        <h1 className="text-3xl font-serif font-bold text-stone-900">
          Page Not Found
        </h1>

        <p className="text-xs text-stone-600 leading-relaxed">
          The studio corridor you followed doesn't seem to lead anywhere. Return to our homepage or explore this week's scheduled workshops.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl text-xs font-semibold shadow hover:bg-orange-700 transition"
          >
            <Home className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/schedule"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-stone-200 text-stone-800 rounded-xl text-xs font-semibold hover:bg-stone-50 transition"
          >
            <Calendar className="h-4 w-4 text-orange-600" />
            <span>View Weekly Schedule</span>
          </Link>
        </div>
      </div>

      <AdBanner slotId="notfound-bottom-ad" className="mt-12" />
    </div>
  );
};
