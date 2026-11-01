import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, Sparkles } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/studioData';
import { AdBanner } from '../components/AdBanner';
import { useStudio } from '../context/StudioContext';

export const JournalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToast } = useStudio();
  const article = JOURNAL_ARTICLES.find((a) => a.id === id || a.slug === id);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-serif font-bold text-stone-900">Article Not Found</h2>
        <p className="text-sm text-stone-500 mt-2">The requested journal piece is unavailable.</p>
        <Link
          to="/journal"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-2xl text-xs font-semibold"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Journal</span>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('Article Link Copied', 'Shared link copied to clipboard.', 'info');
  };

  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Back Link */}
        <Link
          to="/journal"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-orange-600 mb-6 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Container */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 border border-stone-200 shadow-xl space-y-8">
          <div>
            <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
              <span className="bg-orange-100 text-orange-800 font-bold uppercase tracking-wider text-[11px] px-3 py-0.5 rounded-full">
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-stone-400" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-stone-400" />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              {article.title}
            </h1>
            <p className="text-base text-stone-600 mt-3 font-serif italic">
              {article.subtitle}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-stone-100 mt-6">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">{article.author}</p>
                  <p className="text-[10px] text-stone-500">Resident Artist & Contributor</p>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 px-3 py-1.5 rounded-xl border border-stone-200 hover:bg-stone-50 transition"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share Note</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-16/9 rounded-2xl overflow-hidden shadow-md">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Call to Experience */}
          <div className="pt-8 border-t border-stone-200 mt-10 p-6 rounded-2xl bg-orange-50/70 border border-orange-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-stone-900">Experience this in Person at Bandra</h4>
              <p className="text-xs text-stone-600 mt-0.5">Explore our upcoming weekend masterclasses in ceramics, movement, and sound.</p>
            </div>
            <Link
              to="/classes"
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-semibold shadow shrink-0"
            >
              Browse Classes
            </Link>
          </div>
        </article>
      </div>

      <AdBanner slotId="journal-detail-bottom-ad" className="mt-16" />
    </div>
  );
};
