import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import { WorkshopClass } from '../data/studioData';
import { useStudio } from '../context/StudioContext';

interface ClassCardProps {
  workshop: WorkshopClass;
  onQuickBook?: (workshop: WorkshopClass) => void;
}

export const ClassCard: React.FC<ClassCardProps> = ({ workshop, onQuickBook }) => {
  const { isFavorite, toggleFavorite, addToCart } = useStudio();
  const favorited = isFavorite(workshop.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickBook) {
      onQuickBook(workshop);
    } else {
      addToCart({
        classId: workshop.id,
        title: workshop.title,
        instructorName: workshop.instructor.name,
        date: workshop.availableDates[0] || '2026-11-07',
        timeSlot: workshop.scheduleDescription.split('•')[1]?.trim() || '11:30 AM',
        price: workshop.price,
        quantity: 1,
        image: workshop.image,
        category: workshop.category
      });
    }
  };

  return (
    <div className="group relative flex flex-col rounded-3xl bg-white border border-stone-200/80 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 overflow-hidden">
      {/* Image Container with Badges */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-80" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="inline-block rounded-full bg-stone-900/80 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-stone-100 uppercase tracking-wider border border-white/10">
            {workshop.categoryLabel}
          </span>
          {workshop.featured && (
            <span className="inline-block rounded-full bg-orange-600 px-2.5 py-1 text-[11px] font-semibold text-white uppercase tracking-wider shadow">
              Featured
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(workshop.id);
          }}
          className={`absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 ${
            favorited
              ? 'bg-rose-500 text-white shadow-md'
              : 'bg-white/80 text-stone-700 hover:bg-white hover:text-rose-500'
          }`}
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`h-4 w-4 ${favorited ? 'fill-current' : ''}`} />
        </button>

        {/* Rating and Duration overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-200">
          <div className="flex items-center gap-1 bg-stone-950/60 backdrop-blur-md px-2.5 py-1 rounded-full">
            <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span className="font-semibold text-white">{workshop.rating.toFixed(1)}</span>
            <span className="text-stone-300 text-[10px]">({workshop.reviewsCount})</span>
          </div>

          <div className="flex items-center gap-1 bg-stone-950/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px]">
            <Clock className="h-3 w-3 text-orange-300" />
            <span>{workshop.duration}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Level and Schedule description */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
            <span className="font-medium text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-md">
              {workshop.level}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-stone-500">
              <Users className="h-3 w-3" />
              <span>{workshop.slotsAvailable} spots left</span>
            </span>
          </div>

          {/* Title */}
          <Link to={`/classes/${workshop.id}`} className="group-hover:text-orange-600 transition">
            <h3 className="text-lg font-serif font-bold text-stone-900 line-clamp-2 leading-snug">
              {workshop.title}
            </h3>
          </Link>

          {/* Short description */}
          <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {workshop.shortDescription}
          </p>

          {/* Instructor line */}
          <div className="mt-4 flex items-center gap-2.5 pt-3 border-t border-stone-100">
            <img
              src={workshop.instructor.image}
              alt={workshop.instructor.name}
              className="h-7 w-7 rounded-full object-cover border border-stone-200"
            />
            <div className="text-xs">
              <p className="font-medium text-stone-900">{workshop.instructor.name}</p>
              <p className="text-[10px] text-stone-500">{workshop.instructor.specialty}</p>
            </div>
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="mt-5 flex items-center justify-between pt-4 border-t border-stone-100">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-stone-900">₹{workshop.price.toLocaleString('en-IN')}</span>
              {workshop.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  ₹{workshop.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-[10px] text-stone-500 block">per attendee / materials inc.</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/classes/${workshop.id}`}
              className="text-xs font-semibold text-stone-700 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition"
            >
              Details
            </Link>
            <button
              onClick={handleQuickAdd}
              className="inline-flex items-center gap-1 rounded-xl bg-orange-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-orange-700 hover:shadow transition"
            >
              <span>Book</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
