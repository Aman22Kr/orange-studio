import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, Filter, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WEEKLY_SCHEDULE, ScheduleSlot } from '../data/studioData';
import { useStudio } from '../context/StudioContext';
import { AdBanner } from '../components/AdBanner';

export const SchedulePage: React.FC = () => {
  const { addToCart } = useStudio();
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const periods = ['All', 'Morning', 'Afternoon', 'Evening'];
  const categories = [
    { id: 'All', label: 'All Disciplines' },
    { id: 'yoga', label: 'Yoga & Pranayama' },
    { id: 'dance', label: 'Dance & Movement' },
    { id: 'pottery', label: 'Wheel Pottery' },
    { id: 'mindfulness', label: 'Sound Baths' },
    { id: 'fine-arts', label: 'Botanical Art' },
    { id: 'kids', label: 'Kids & Teens' }
  ];

  const filteredSlots = WEEKLY_SCHEDULE.filter((slot) => {
    if (slot.day !== selectedDay) return false;
    if (selectedPeriod !== 'All' && slot.period !== selectedPeriod) return false;
    if (selectedCategory !== 'All' && slot.category !== selectedCategory) return false;
    return true;
  });

  const handleBookSlot = (slot: ScheduleSlot) => {
    // Generate date for the upcoming selected day of the week
    const now = new Date();
    const targetDayIndex = days.indexOf(slot.day) + 1; // 1 = Mon, 7 = Sun
    const currentDayIndex = now.getDay() === 0 ? 7 : now.getDay();
    let daysToAdd = targetDayIndex - currentDayIndex;
    if (daysToAdd <= 0) daysToAdd += 7;
    const targetDate = new Date(now.setDate(now.getDate() + daysToAdd));
    const dateStr = targetDate.toISOString().split('T')[0];

    addToCart({
      classId: slot.classId,
      title: slot.className,
      instructorName: slot.instructorName,
      date: dateStr,
      timeSlot: slot.time,
      price: slot.price,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      category: slot.category
    });
  };

  return (
    <div className="w-full min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase border border-orange-500/30 mb-3">
            Weekly Timetable
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Class Schedule & Open Sessions
          </h1>
          <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
            Plan your week at Orange Studio. All morning, twilight, and weekend sessions are limited to 15 students to maintain an intimate learning sanctuary.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7">
        {/* Day of Week Tabs */}
        <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-stone-200/80 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-1.5">
            {days.map((day) => {
              const count = WEEKLY_SCHEDULE.filter(s => s.day === day).length;
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`py-3 px-2 rounded-2xl text-center transition flex flex-col items-center justify-center ${
                    isSelected
                      ? 'bg-orange-600 text-white shadow-md font-bold'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700'
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider">{day.slice(0, 3)}</span>
                  <span className={`text-[10px] mt-0.5 ${isSelected ? 'text-orange-200' : 'text-stone-400'}`}>
                    {count} {count === 1 ? 'Class' : 'Classes'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Secondary Filter Chips */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-3 border-t border-stone-100">
            {/* Periods */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
              <span className="text-stone-400 font-medium mr-1">Time:</span>
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPeriod(p)}
                  className={`px-3 py-1 rounded-xl font-medium transition ${
                    selectedPeriod === p
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Category selection */}
            <div className="flex items-center gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter schedule by discipline"
                className="py-1.5 px-3 bg-stone-100 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-orange-500"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Schedule Slots Timeline */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-stone-500 px-2">
            <h3 className="font-bold text-stone-900 uppercase tracking-wider">
              {selectedDay} Schedule ({filteredSlots.length} sessions)
            </h3>
            <span>Studio doors open 20 minutes prior to session</span>
          </div>

          {filteredSlots.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200">
              <Calendar className="h-10 w-10 text-orange-400 mx-auto mb-2" />
              <h4 className="font-serif font-bold text-base text-stone-900">No Sessions Match This Filter</h4>
              <p className="text-xs text-stone-500 mt-1">Try selecting another time of day or discipline.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-orange-200 transition flex flex-col md:flex-row md:items-center justify-between gap-5"
                >
                  {/* Left Time & Icon */}
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex flex-col items-center justify-center h-16 w-20 rounded-2xl bg-orange-50 text-orange-700 border border-orange-100 shrink-0">
                      <Clock className="h-4 w-4 mb-0.5 text-orange-600" />
                      <span className="text-xs font-bold font-mono">{slot.time}</span>
                      <span className="text-[10px] text-orange-600 uppercase tracking-widest">{slot.period}</span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          to={`/classes/${slot.classId}`}
                          className="font-serif font-bold text-base sm:text-lg text-stone-900 hover:text-orange-600 transition"
                        >
                          {slot.className}
                        </Link>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                          {slot.category}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500">
                        <span>Instructor: <strong className="text-stone-800">{slot.instructorName}</strong></span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-stone-400" />
                          <span>{slot.room}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Pricing & Quick Book */}
                  <div className="flex items-center justify-between md:justify-end gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-stone-100">
                    <div className="text-left md:text-right">
                      <span className="text-base font-bold text-stone-900">₹{slot.price.toLocaleString('en-IN')}</span>
                      <span className="block text-[10px] text-stone-400 font-medium">
                        {slot.spotsLeft} spots remaining
                      </span>
                    </div>

                    <button
                      onClick={() => handleBookSlot(slot)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold shadow-xs hover:shadow transition"
                    >
                      <span>Book Slot</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Compact Ad Banner */}
      <AdBanner slotId="schedule-bottom-slot" className="mt-16" />
    </div>
  );
};
