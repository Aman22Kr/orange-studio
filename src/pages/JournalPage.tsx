import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/studioData';
import { AdBanner } from '../components/AdBanner';

export const JournalPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase border border-orange-500/30 mb-3">
            Mindful Notes
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            The Studio Journal
          </h1>
          <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
            Reflections on somatics, the neuropsychology of clay, acoustic sound therapy, and the art of slowing down in modern Mumbai.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-16/10 overflow-hidden bg-stone-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                    <span className="text-orange-600 font-bold uppercase tracking-wider text-[10px]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <Link to={`/journal/${article.slug}`}>
                    <h3 className="font-serif font-bold text-lg text-stone-900 hover:text-orange-600 transition leading-snug">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>By <strong className="text-stone-800">{article.author}</strong></span>
                <Link
                  to={`/journal/${article.slug}`}
                  className="font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Compact Ad Banner */}
      <AdBanner slotId="journal-bottom-ad" className="mt-16" />
    </div>
  );
};
