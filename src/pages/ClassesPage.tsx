import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Sparkles, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { WORKSHOPS_CLASSES, WorkshopClass } from '../data/studioData';
import { ClassCard } from '../components/ClassCard';
import { AdBanner } from '../components/AdBanner';

export const ClassesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'pottery', label: 'Pottery & Ceramics' },
    { id: 'yoga', label: 'Yoga & Breathwork' },
    { id: 'dance', label: 'Dance & Choreography' },
    { id: 'mindfulness', label: 'Sound & Mindfulness' },
    { id: 'fine-arts', label: 'Fine Arts & Botanical' },
    { id: 'kids', label: 'Kids & Teens' }
  ];

  const levels = [
    { id: 'all', label: 'All Skill Levels' },
    { id: 'Beginner Friendly', label: 'Beginner Friendly' },
    { id: 'All Levels', label: 'Open Level' },
    { id: 'Intermediate / Advanced', label: 'Intermediate / Advanced' }
  ];

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredWorkshops = useMemo(() => {
    return WORKSHOPS_CLASSES.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Level filter
      if (selectedLevel !== 'all' && item.level !== selectedLevel) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesInstructor = item.instructor.name.toLowerCase().includes(query);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(query);
        const matchesDesc = item.shortDescription.toLowerCase().includes(query);
        if (!matchesTitle && !matchesInstructor && !matchesCategory && !matchesDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedLevel, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedLevel('all');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      {/* Header Banner */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase border border-orange-500/30 mb-3">
            Creative Curriculum
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Workshops, Classes & Intensives
          </h1>
          <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
            Discover regular group classes, weekend masterclasses, and tactile craft laboratories conducted inside our tranquil Bandra sanctuary.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7">
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-stone-200/80 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by workshop name, discipline, or instructor (e.g. Pottery, Tanvi, Sound)..."
                className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl text-xs sm:text-sm text-stone-900 placeholder-stone-500 focus:outline-none focus:border-orange-500 focus:bg-white transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 bg-stone-200 px-2 py-0.5 rounded-full"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Level Selector */}
            <div className="w-full md:w-56">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                aria-label="Filter by skill level"
                className="w-full py-3 px-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-orange-500 focus:bg-white transition"
              >
                {levels.map(l => (
                  <option key={l.id} value={l.id}>{l.label}</option>
                ))}
              </select>
            </div>

            {/* Sort Selector */}
            <div className="w-full md:w-52">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort workshops"
                className="w-full py-3 px-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-orange-500 focus:bg-white transition"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none border-t border-stone-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat.id
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}

            {(selectedCategory !== 'all' || selectedLevel !== 'all' || searchQuery || sortBy !== 'featured') && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium text-orange-600 hover:bg-orange-50 transition ml-auto"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Results Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex items-center justify-between mb-6 text-xs text-stone-500">
          <p>
            Showing <strong className="text-stone-900 font-bold">{filteredWorkshops.length}</strong> workshops & classes
          </p>
          <span className="hidden sm:inline">All classes include required materials & studio props</span>
        </div>

        {filteredWorkshops.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-stone-300 max-w-xl mx-auto my-12">
            <Sparkles className="h-10 w-10 text-orange-400 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-stone-900">No Workshops Found</h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              We couldn't find any sessions matching your current filters. Try resetting the search or category criteria.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-5 py-2.5 bg-orange-600 text-white rounded-xl text-xs font-semibold hover:bg-orange-700 transition"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop) => (
              <ClassCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        )}
      </div>

      {/* Compact Ad Banner Placeholder */}
      <AdBanner slotId="classes-page-ad" className="mt-16" />
    </div>
  );
};
