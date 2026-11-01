import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { WorkshopClass } from '../data/studioData';

export interface CartItem {
  id: string; // unique item id (classId + date + slot)
  classId: string;
  title: string;
  instructorName: string;
  date: string;
  timeSlot: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export interface ConfirmedBooking {
  bookingId: string;
  createdAt: string;
  items: CartItem[];
  totalAmount: number;
  discountAmount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  specialRequests?: string;
  paymentMethod: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface RentalInquiry {
  inquiryId: string;
  createdAt: string;
  spaceId: string;
  spaceName: string;
  requestedDate: string;
  durationHours: number;
  estimatedCost: number;
  name: string;
  email: string;
  phone: string;
  purpose: string;
  guestCount: number;
  status: 'Received' | 'In Review' | 'Accepted';
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'favorite';
}

interface StudioContextType {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;

  favorites: string[]; // classIds
  toggleFavorite: (classId: string) => void;
  isFavorite: (classId: string) => boolean;

  bookings: ConfirmedBooking[];
  createBooking: (bookingData: {
    name: string;
    email: string;
    phone: string;
    specialRequests?: string;
    discountCode?: string;
  }) => Promise<ConfirmedBooking>;
  cancelBooking: (bookingId: string) => void;

  rentalInquiries: RentalInquiry[];
  submitRentalInquiry: (inquiry: Omit<RentalInquiry, 'inquiryId' | 'createdAt' | 'status'>) => RentalInquiry;

  subscribedEmails: string[];
  subscribeNewsletter: (email: string) => boolean;

  toasts: ToastMessage[];
  addToast: (title: string, message: string, type?: 'success' | 'info' | 'favorite') => void;
  removeToast: (id: string) => void;

  // Settings
  brandName: string;
  githubUser: string;
  referenceUrl: string;
  resetAllDemoData: () => void;
}

const StudioContext = createContext<StudioContextType | undefined>(undefined);

const STORAGE_KEYS = {
  CART: 'orangestudio_cart',
  FAVORITES: 'orangestudio_favorites',
  BOOKINGS: 'orangestudio_bookings',
  RENTALS: 'orangestudio_rentals',
  NEWSLETTER: 'orangestudio_newsletter'
};

export const StudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Brand Configuration constants
  const brandName = 'Orange Studio';
  const githubUser = 'Aman22kr';
  const referenceUrl = 'https://www.tangerineartsstudio.com/';

  // LocalStorage initialization with safety fallbacks
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return saved ? JSON.parse(saved) : ['wheel-pottery-weekend', 'ashtanga-vinyasa-morning'];
    } catch {
      return ['wheel-pottery-weekend', 'ashtanga-vinyasa-morning'];
    }
  });

  const [bookings, setBookings] = useState<ConfirmedBooking[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      return saved ? JSON.parse(saved) : [
        {
          bookingId: 'OS-2026-8841',
          createdAt: new Date().toISOString(),
          items: [
            {
              id: 'wheel-pottery-weekend-demo',
              classId: 'wheel-pottery-weekend',
              title: 'Mindful Wheel Pottery & Hand-Building Immersion',
              instructorName: 'Ananya Sen',
              date: '2026-11-07',
              timeSlot: '11:30 AM',
              price: 2400,
              quantity: 1,
              image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80',
              category: 'pottery'
            }
          ],
          totalAmount: 2400,
          discountAmount: 0,
          customerName: 'Aman Kumar',
          customerEmail: 'amankr45654@gmail.com',
          customerPhone: '+91 98765 43210',
          specialRequests: 'Excited for first pottery session! Please provide extra apron.',
          paymentMethod: 'UPI / Demo Pass',
          status: 'Confirmed'
        }
      ];
    } catch {
      return [];
    }
  });

  const [rentalInquiries, setRentalInquiries] = useState<RentalInquiry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RENTALS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [subscribedEmails, setSubscribedEmails] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NEWSLETTER);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // LocalStorage synchronizers
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch (e) {
      console.warn('Storage sync error:', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (e) {
      console.warn('Storage sync error:', e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    } catch (e) {
      console.warn('Storage sync error:', e);
    }
  }, [bookings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RENTALS, JSON.stringify(rentalInquiries));
    } catch (e) {
      console.warn('Storage sync error:', e);
    }
  }, [rentalInquiries]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.NEWSLETTER, JSON.stringify(subscribedEmails));
    } catch (e) {
      console.warn('Storage sync error:', e);
    }
  }, [subscribedEmails]);

  // Toast feedback
  const addToast = (title: string, message: string, type: 'success' | 'info' | 'favorite' = 'success') => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Cart operations
  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const itemId = `${item.classId}-${item.date}-${item.timeSlot.replace(/\s+/g, '')}`;
    setCart(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (existing) {
        return prev.map(i => i.id === itemId ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i);
      }
      return [...prev, { ...item, id: itemId }];
    });
    addToast('Added to Cart', `${item.title} has been added for ${item.date}.`, 'success');
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
    addToast('Removed from Cart', 'Workshop removed from your booking bag.', 'info');
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === itemId) {
          const newQty = Math.max(1, Math.min(6, item.quantity + delta));
          return { ...item, quantity: newQty };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Favorites
  const toggleFavorite = (classId: string) => {
    setFavorites(prev => {
      if (prev.includes(classId)) {
        addToast('Removed from Saved', 'Class removed from your wishlist.', 'info');
        return prev.filter(id => id !== classId);
      } else {
        addToast('Saved to Wishlist', 'Class saved to your studio favorites!', 'favorite');
        return [...prev, classId];
      }
    });
  };

  const isFavorite = (classId: string) => favorites.includes(classId);

  // Booking Flow
  const createBooking = async (bookingData: {
    name: string;
    email: string;
    phone: string;
    specialRequests?: string;
    discountCode?: string;
  }): Promise<ConfirmedBooking> => {
    let discount = 0;
    if (bookingData.discountCode?.toUpperCase() === 'ORANGE10') {
      discount = Math.round(cartTotal * 0.1);
    } else if (bookingData.discountCode?.toUpperCase() === 'WELCOME20') {
      discount = Math.round(cartTotal * 0.2);
    }

    const finalAmount = Math.max(0, cartTotal - discount);
    const bookingCode = `OS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking: ConfirmedBooking = {
      bookingId: bookingCode,
      createdAt: new Date().toISOString(),
      items: [...cart],
      totalAmount: finalAmount,
      discountAmount: discount,
      customerName: bookingData.name,
      customerEmail: bookingData.email,
      customerPhone: bookingData.phone,
      specialRequests: bookingData.specialRequests,
      paymentMethod: 'Instant Confirmation (Mock UPI / Card)',
      status: 'Confirmed'
    };

    setBookings(prev => [newBooking, ...prev]);
    clearCart();
    addToast('Booking Confirmed!', `Reservation ${bookingCode} confirmed. See you at Orange Studio!`, 'success');
    return newBooking;
  };

  const cancelBooking = (bookingId: string) => {
    setBookings(prev => prev.map(b => b.bookingId === bookingId ? { ...b, status: 'Cancelled' as const } : b));
    addToast('Booking Cancelled', `Reservation ${bookingId} has been marked as cancelled.`, 'info');
  };

  // Studio Rental Inquiries
  const submitRentalInquiry = (inquiry: Omit<RentalInquiry, 'inquiryId' | 'createdAt' | 'status'>): RentalInquiry => {
    const inquiryId = `RENT-${Math.floor(10000 + Math.random() * 90000)}`;
    const newInq: RentalInquiry = {
      ...inquiry,
      inquiryId,
      createdAt: new Date().toISOString(),
      status: 'Received'
    };
    setRentalInquiries(prev => [newInq, ...prev]);
    addToast('Inquiry Received', `Studio rental inquiry ${inquiryId} submitted successfully.`, 'success');
    return newInq;
  };

  // Newsletter
  const subscribeNewsletter = (email: string): boolean => {
    if (!email || !email.includes('@')) return false;
    if (subscribedEmails.includes(email.toLowerCase())) {
      addToast('Already Subscribed', 'You are already on the Orange Studio journal list!', 'info');
      return true;
    }
    setSubscribedEmails(prev => [...prev, email.toLowerCase()]);
    addToast('Subscribed!', 'Welcome to the Orange Studio creative circle.', 'success');
    return true;
  };

  const resetAllDemoData = () => {
    localStorage.removeItem(STORAGE_KEYS.CART);
    localStorage.removeItem(STORAGE_KEYS.FAVORITES);
    localStorage.removeItem(STORAGE_KEYS.BOOKINGS);
    localStorage.removeItem(STORAGE_KEYS.RENTALS);
    localStorage.removeItem(STORAGE_KEYS.NEWSLETTER);
    setCart([]);
    setFavorites(['wheel-pottery-weekend', 'ashtanga-vinyasa-morning']);
    setBookings([]);
    setRentalInquiries([]);
    setSubscribedEmails([]);
    addToast('Data Reset', 'All demo localStorage records reset to defaults.', 'info');
  };

  return (
    <StudioContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        favorites,
        toggleFavorite,
        isFavorite,
        bookings,
        createBooking,
        cancelBooking,
        rentalInquiries,
        submitRentalInquiry,
        subscribedEmails,
        subscribeNewsletter,
        toasts,
        addToast,
        removeToast,
        brandName,
        githubUser,
        referenceUrl,
        resetAllDemoData
      }}
    >
      {children}
    </StudioContext.Provider>
  );
};

export const useStudio = () => {
  const context = useContext(StudioContext);
  if (!context) {
    throw new Error('useStudio must be used within a StudioProvider');
  }
  return context;
};
