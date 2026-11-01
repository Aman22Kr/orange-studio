/**
 * Orange Studio (formerly Tangerine Arts Studio) Mock Data Layer
 * Represents creative arts, dance, yoga, movement, pottery, retreats, and studio spaces in Bandra, Mumbai.
 */

export interface Instructor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  experience: string;
}

export interface WorkshopClass {
  id: string;
  slug: string;
  title: string;
  category: 'yoga' | 'dance' | 'pottery' | 'mindfulness' | 'fine-arts' | 'kids';
  categoryLabel: string;
  level: 'All Levels' | 'Beginner Friendly' | 'Intermediate / Advanced';
  instructor: Instructor;
  price: number; // in INR
  originalPrice?: number;
  duration: string;
  scheduleDescription: string;
  availableDates: string[];
  slotsAvailable: number;
  image: string;
  galleryImages: string[];
  shortDescription: string;
  fullDescription: string;
  whatYouWillLearn: string[];
  includedMaterials: string[];
  whatToBring: string[];
  locationRoom: string;
  featured?: boolean;
  rating: number;
  reviewsCount: number;
}

export interface ScheduleSlot {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  time: string;
  period: 'Morning' | 'Afternoon' | 'Evening';
  classId: string;
  className: string;
  instructorName: string;
  category: 'yoga' | 'dance' | 'pottery' | 'mindfulness' | 'fine-arts' | 'kids';
  room: string;
  spotsLeft: number;
  price: number;
}

export interface StudioSpace {
  id: string;
  name: string;
  tagline: string;
  capacity: string;
  areaSqFt: number;
  hourlyRate: number;
  minHours: number;
  image: string;
  features: string[];
  idealFor: string[];
  includedEquipment: string[];
}

export interface Retreat {
  id: string;
  title: string;
  destination: string;
  dates: string;
  duration: string;
  pricePerPerson: number;
  image: string;
  description: string;
  highlights: string[];
  included: string[];
  spotsRemaining: number;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking & Passes' | 'First-Timers' | 'Studio Etiquette' | 'Space Rental' | 'Pottery & Craft';
}

export const INSTRUCTORS: Record<string, Instructor> = {
  tanvi: {
    id: 'tanvi',
    name: 'Tanvi Mehra',
    role: 'Founder & Movement Director',
    specialty: 'Ashtanga Yoga & Movement Conditioning',
    bio: 'Tanvi founded Orange Studio to build a conscious sanctuary where community, movement, and artistic expression converge. With over 12 years of teaching across India and Bali, she guides practitioners to find balance through alignment and breath.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80',
    experience: '12+ Years Experience'
  },
  rohan: {
    id: 'rohan',
    name: 'Rohan Deshmukh',
    role: 'Resident Dance Artist',
    specialty: 'Contemporary Dance & Floorwork',
    bio: 'Trained at London Contemporary Dance School, Rohan brings an organic, athletic, and emotive approach to modern movement, breaking down complex mechanics into accessible somatic flows.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    experience: '9 Years Experience'
  },
  ananya: {
    id: 'ananya',
    name: 'Ananya Sen',
    role: 'Master Ceramist',
    specialty: 'Wheel Throwing & Terracotta Glazing',
    bio: 'Ananya studied ceramic sculpture in Shantiniketan and Kyoto. Her studio sessions focus on the meditative relationship between touch, centering clay, and functional ceramic art.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    experience: '11 Years Experience'
  },
  karan: {
    id: 'karan',
    name: 'Karan Malhotra',
    role: 'Sound Alchemist & Breath Guide',
    specialty: 'Tibetan Singing Bowls & Pranayama',
    bio: 'Karan creates deep sonic restoration journeys utilizing handcrafted Himalayan singing bowls, planetary gongs, and restorative breathwork protocols.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    experience: '8 Years Experience'
  },
  meera: {
    id: 'meera',
    name: 'Meera Chawla',
    role: 'Botanical Watercolor Artist',
    specialty: 'Botanical Illustration & Linocut Print',
    bio: 'Meera bridges traditional printmaking with botanical watercolor exploration, teaching students how to slow down and observe light, texture, and organic forms.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    experience: '7 Years Experience'
  },
  neha: {
    id: 'neha',
    name: 'Neha Roy',
    role: 'Choreographer & Heels Specialist',
    specialty: 'Commercial Jazz, Heels & Bollywood',
    bio: 'Neha brings high energy, poise, and body empowerment to the studio floor. Her choreography classes are designed to build confidence, musicality, and stage presence.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    experience: '6 Years Experience'
  }
};

export const WORKSHOPS_CLASSES: WorkshopClass[] = [
  {
    id: 'wheel-pottery-weekend',
    slug: 'wheel-pottery-weekend',
    title: 'Mindful Wheel Pottery & Hand-Building Immersion',
    category: 'pottery',
    categoryLabel: 'Pottery & Ceramics',
    level: 'Beginner Friendly',
    instructor: INSTRUCTORS.ananya,
    price: 2400,
    originalPrice: 2800,
    duration: '2.5 Hours',
    scheduleDescription: 'Every Saturday & Sunday • 11:30 AM & 4:00 PM',
    availableDates: ['2026-11-07', '2026-11-08', '2026-11-14', '2026-11-15', '2026-11-21'],
    slotsAvailable: 6,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594897030560-69212c14041a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Discover the meditative art of centering clay on the potter wheel. Create your own cups and bowls with personalized glazing.',
    fullDescription: 'Our weekend pottery immersion at Orange Studio is designed as an intimate, tactile escape from screen-heavy city life. Under the guidance of master ceramist Ananya Sen, you will learn the fundamentals of wedging clay, centering on an electric wheel, pulling walls, and sculpting functional ceramics. All creations will be fired in our kiln and glazed ready for pickup in 14 days.',
    whatYouWillLearn: [
      'Clay wedging, body posture, and centering mechanics on the wheel',
      'Opening, pulling cylinders, shaping bowls, and trimming feet',
      'Surface texturing and underglaze decorating techniques',
      'Understanding bisque firing, earthenware vs stoneware basics'
    ],
    includedMaterials: [
      '2.5 kg specialized terracotta & stoneware clay',
      'Full access to Shimpo electric pottery wheels & carving tools',
      'Underglazes, brushes, and studio apron for class use',
      'Kiln bisque and transparent food-safe glaze firing for 2 of your pieces'
    ],
    whatToBring: [
      'Comfortable clothes that can get dusty/muddy',
      'Short-trimmed fingernails for best wheel control',
      'Hair tie for long hair'
    ],
    locationRoom: 'The Ceramics Atelier (Garden Level)',
    featured: true,
    rating: 4.9,
    reviewsCount: 142
  },
  {
    id: 'ashtanga-vinyasa-morning',
    slug: 'ashtanga-vinyasa-morning',
    title: 'Morning Ashtanga & Pranayama Alignment Sanctuary',
    category: 'yoga',
    categoryLabel: 'Yoga & Breathwork',
    level: 'All Levels',
    instructor: INSTRUCTORS.tanvi,
    price: 950,
    originalPrice: 1200,
    duration: '75 Minutes',
    scheduleDescription: 'Monday to Friday • 7:30 AM & 9:00 AM',
    availableDates: ['2026-11-03', '2026-11-04', '2026-11-05', '2026-11-06', '2026-11-09'],
    slotsAvailable: 10,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Wake up to sunlight filtering through teakwood trees with traditional Ashtanga vinyasa flow, bandha engagement, and cleansing pranayama.',
    fullDescription: 'Ground your mornings in our light-filled Main Studio with direct garden views. Guided by Tanvi Mehra, this class blends breath synchronicity with structured sun salutations, standing postures, hip openers, and restorative inversions. We utilize Manduka eco-mats and our Iyengar rope wall for mindful alignment adjustments.',
    whatYouWillLearn: [
      'Ujjayi breath cultivation and bandha stabilization',
      'Classical Surya Namaskar A & B sequence breakdown',
      'Hip mobilization, hamstring opening, and spinal decompressions',
      'Nadi Shodhana and cooling Kapalabhati breathwork'
    ],
    includedMaterials: [
      'Manduka PRO yoga mats and organic cotton bolsters',
      'High-density cork blocks, straps, and Iyengar wall ropes',
      'Freshly brewed ginger-lemongrass herbal infusion post practice'
    ],
    whatToBring: [
      'Breathable, stretchable workout attire',
      'A personal sweat towel and water bottle',
      'Empty stomach (eat at least 2 hours prior)'
    ],
    locationRoom: 'The Main Movement Hall (Teakwood Studio)',
    featured: true,
    rating: 5.0,
    reviewsCount: 218
  },
  {
    id: 'contemporary-floorwork-release',
    slug: 'contemporary-floorwork-release',
    title: 'Contemporary Dance: Organic Floorwork & Somatics',
    category: 'dance',
    categoryLabel: 'Dance & Choreography',
    level: 'Beginner Friendly',
    instructor: INSTRUCTORS.rohan,
    price: 1100,
    duration: '90 Minutes',
    scheduleDescription: 'Tuesday & Thursday • 6:30 PM & Saturday 5:30 PM',
    availableDates: ['2026-11-05', '2026-11-07', '2026-11-10', '2026-11-12', '2026-11-14'],
    slotsAvailable: 8,
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Explore momentum, gravity, and effortless floor transitions. Learn how to glide, spiral, and express emotion through contemporary movement.',
    fullDescription: 'Rohan Deshmukh breaks down contemporary dance fundamentals into intuitive body mechanics. You will explore momentum, spiral dynamics, sliding floor transitions, and dynamic weight distribution, culminating in an evocative short choreographic phrase set to indie acoustic scores.',
    whatYouWillLearn: [
      'Safe landing and rolling techniques on sprung wooden floors',
      'Weight shifts, kinetic momentum, and floor-to-standing spirals',
      'Somatic body awareness and musical articulation',
      'A complete 1-minute expressive contemporary phrase'
    ],
    includedMaterials: [
      'Sprung hardwood floor designed for low joint impact',
      'Studio sound immersion with ambient acoustic lighting',
      'Professional dance mirrors with blackout curtains'
    ],
    whatToBring: [
      'Comfortable clothing covering knees and shoulders (t-shirt/track pants)',
      'Cotton dance socks or bare feet (no street shoes)'
    ],
    locationRoom: 'The Main Movement Hall',
    featured: true,
    rating: 4.9,
    reviewsCount: 89
  },
  {
    id: 'sound-bath-gong-healing',
    slug: 'sound-bath-gong-healing',
    title: 'Candlelight Sound Bath & Vibrational Gong Healing',
    category: 'mindfulness',
    categoryLabel: 'Sound & Mindfulness',
    level: 'All Levels',
    instructor: INSTRUCTORS.karan,
    price: 1500,
    originalPrice: 1800,
    duration: '75 Minutes',
    scheduleDescription: 'Every Friday & Sunday Evening • 7:45 PM',
    availableDates: ['2026-11-06', '2026-11-08', '2026-11-13', '2026-11-15', '2026-11-20'],
    slotsAvailable: 12,
    image: 'https://images.unsplash.com/photo-1512290900672-1f4869509df6?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512290900672-1f4869509df6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'A deeply restorative acoustic experience. Lie back on plush bolsters as handcrafted Himalayan singing bowls wash away nervous tension.',
    fullDescription: 'Enter a candlelit haven wrapped in essential oils of frankincense and cedar. Karan utilizes 7-metal Tibetan bowls tuned to theta brainwave frequencies, ocean drums, and a 32-inch symphonic gong to induce profound somatic relaxation and restorative cellular recalibration.',
    whatYouWillLearn: [
      'Techniques for conscious body scanning and parasympathetic nervous activation',
      'Deep listening (Nada Yoga) meditation principles',
      'Breath pacing for natural sleep improvement'
    ],
    includedMaterials: [
      'Plush organic cotton yoga mats with lavender eye pillows',
      'Woolen blankets and ergonomic neck cushions',
      'Warm post-bath Ayurvedic chamomile brew'
    ],
    whatToBring: [
      'Warm, loose, cozy clothing (socks recommended)',
      'An open mind ready to surrender to restorative rest'
    ],
    locationRoom: 'The Zen Pavilion (Garden Facing)',
    featured: true,
    rating: 5.0,
    reviewsCount: 174
  },
  {
    id: 'botanical-watercolor-monsoon',
    slug: 'botanical-watercolor-monsoon',
    title: 'Botanical Watercolor & Wet-on-Wet Masterclass',
    category: 'fine-arts',
    categoryLabel: 'Fine Arts & Craft',
    level: 'Beginner Friendly',
    instructor: INSTRUCTORS.meera,
    price: 1950,
    duration: '2 Hours',
    scheduleDescription: 'Every Saturday • 3:00 PM to 5:00 PM',
    availableDates: ['2026-11-07', '2026-11-14', '2026-11-21', '2026-11-28'],
    slotsAvailable: 8,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Paint lush tropical foliage, Monstera leaves, and Indian wildflowers using pure artist-grade watercolors and 300gsm cold-pressed cotton paper.',
    fullDescription: 'Meera Chawla leads a calming weekend afternoon exploring watercolor transparency, color mixing, pigment bleed control, and fine botanical brushwork. Beginners walk away with two mounted fine art prints of their own creation.',
    whatYouWillLearn: [
      'Water-to-pigment ratios and wet-on-wet vs wet-on-dry techniques',
      'Mixing realistic greens and earthy botanical shadows',
      'Brush handling for fine leaf veins and organic textures',
      'Mounting your artwork for framing'
    ],
    includedMaterials: [
      'Arches 300 GSM 100% Cotton cold-pressed watercolor sheets',
      'Artist-grade Daniel Smith watercolor pans and palette',
      'Princeton velvet-touch round brushes (#2, #6, #10)',
      'Protective art portfolio folder to take home'
    ],
    whatToBring: [
      'Just your curiosity and love for nature!'
    ],
    locationRoom: 'The Glass Garden Atelier',
    featured: false,
    rating: 4.8,
    reviewsCount: 64
  },
  {
    id: 'bollywood-heels-choreography',
    slug: 'bollywood-heels-choreography',
    title: 'Commercial Heels & Bollywood Dance Fusion',
    category: 'dance',
    categoryLabel: 'Dance & Choreography',
    level: 'Beginner Friendly',
    instructor: INSTRUCTORS.neha,
    price: 1200,
    duration: '90 Minutes',
    scheduleDescription: 'Every Wednesday • 7:30 PM & Sunday 5:00 PM',
    availableDates: ['2026-11-04', '2026-11-08', '2026-11-11', '2026-11-15'],
    slotsAvailable: 10,
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Unleash confidence, sensual lines, and high-energy choreographies blending Bollywood storytelling with contemporary commercial heels.',
    fullDescription: 'Neha Roy creates an encouraging, joyful space where anyone can step into their power. The session covers heel balance basics, clean footwork, expressive theatricality, and a dynamic routine filmed at the end of class for personal keepsakes.',
    whatYouWillLearn: [
      'Ankle stability, weight transfer, and posture when dancing in heels',
      'Sharp musicality and dynamic facial expression',
      'Signature choreography with performance angles'
    ],
    includedMaterials: [
      'Warmup conditioning and ankle resistance bands',
      'Studio ring lights and optional choreography video clip'
    ],
    whatToBring: [
      'Supportive ankle-strap dance heels (2-3.5 inches) or sneakers if preferred',
      'Fitted dancewear that allows you to move freely'
    ],
    locationRoom: 'The Main Movement Hall',
    featured: false,
    rating: 4.9,
    reviewsCount: 95
  },
  {
    id: 'kids-creative-clay-movement',
    slug: 'kids-creative-clay-movement',
    title: 'Little Creators: Clay Sculpting & Animal Movement',
    category: 'kids',
    categoryLabel: 'Kids & Teens',
    level: 'Beginner Friendly',
    instructor: INSTRUCTORS.ananya,
    price: 1600,
    duration: '2 Hours',
    scheduleDescription: 'Saturday Mornings • 10:00 AM to 12:00 PM',
    availableDates: ['2026-11-07', '2026-11-14', '2026-11-21'],
    slotsAvailable: 8,
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'For ages 6-12: A tactile combination of imaginative clay creature sculpting, animal-flow yoga poses, and storytelling.',
    fullDescription: 'Designed to spark sensory creativity and motor coordination away from digital screens. Kids sculpt their own mythical forest creatures in non-toxic clay, followed by playful movement games inspired by jungle fauna.',
    whatYouWillLearn: [
      'Pinch pot & coil construction techniques',
      'Balance, coordination, and cooperative movement',
      'Creative confidence through storytelling'
    ],
    includedMaterials: [
      'Non-toxic natural clay and kid-safe sculpting tools',
      'Healthy fruit snacks and organic juices',
      'Child-sized studio aprons'
    ],
    whatToBring: [
      'Clothing suitable for art play',
      'Water bottle'
    ],
    locationRoom: 'The Glass Garden Atelier',
    featured: false,
    rating: 4.9,
    reviewsCount: 42
  },
  {
    id: 'iyengar-rope-wall-intensive',
    slug: 'iyengar-rope-wall-intensive',
    title: 'Iyengar Yoga: Rope Wall & Decompression Intensive',
    category: 'yoga',
    categoryLabel: 'Yoga & Breathwork',
    level: 'Intermediate / Advanced',
    instructor: INSTRUCTORS.tanvi,
    price: 1350,
    duration: '90 Minutes',
    scheduleDescription: 'Sunday Mornings • 8:30 AM to 10:00 AM',
    availableDates: ['2026-11-08', '2026-11-15', '2026-11-22'],
    slotsAvailable: 8,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Experience gravity-assisted spinal decompression and deep shoulder opening using Orange Studio custom Iyengar rope wall setup.',
    fullDescription: 'Wall ropes (Yoga Kurunta) offer traction that allows deep release of spinal compression, sacroiliac relief, and extended inverted postures without cervical strain. Taught with Tanvi precision alignment corrections.',
    whatYouWillLearn: [
      'Safe rigging and knot adjustments for bodyweight support',
      'Inverted Adho Mukha Svanasana with rope traction',
      'Backbend opening without lumbar pinching'
    ],
    includedMaterials: [
      'Custom wall ropes and padded slings',
      'Wooden yoga blocks and heavy cotton bolsters'
    ],
    whatToBring: [
      'Form-fitting athletic wear',
      'Water bottle'
    ],
    locationRoom: 'The Main Movement Hall',
    featured: false,
    rating: 5.0,
    reviewsCount: 76
  }
];

export const WEEKLY_SCHEDULE: ScheduleSlot[] = [
  // Monday
  { id: 's-mon-1', day: 'Monday', time: '07:30 AM', period: 'Morning', classId: 'ashtanga-vinyasa-morning', className: 'Morning Ashtanga Vinyasa', instructorName: 'Tanvi Mehra', category: 'yoga', room: 'Main Hall', spotsLeft: 6, price: 950 },
  { id: 's-mon-2', day: 'Monday', time: '10:00 AM', period: 'Morning', classId: 'ashtanga-vinyasa-morning', className: 'Gentle Hatha & Breath', instructorName: 'Tanvi Mehra', category: 'yoga', room: 'Garden Room', spotsLeft: 8, price: 950 },
  { id: 's-mon-3', day: 'Monday', time: '05:00 PM', period: 'Evening', classId: 'contemporary-floorwork-release', className: 'Contemporary Conditioning', instructorName: 'Rohan Deshmukh', category: 'dance', room: 'Main Hall', spotsLeft: 5, price: 1100 },
  { id: 's-mon-4', day: 'Monday', time: '07:00 PM', period: 'Evening', classId: 'sound-bath-gong-healing', className: 'Pranayama & Tibetan Bowls', instructorName: 'Karan Malhotra', category: 'mindfulness', room: 'Zen Pavilion', spotsLeft: 7, price: 1500 },

  // Tuesday
  { id: 's-tue-1', day: 'Tuesday', time: '07:30 AM', period: 'Morning', classId: 'ashtanga-vinyasa-morning', className: 'Mysore Style Practice', instructorName: 'Tanvi Mehra', category: 'yoga', room: 'Main Hall', spotsLeft: 4, price: 950 },
  { id: 's-tue-2', day: 'Tuesday', time: '11:00 AM', period: 'Morning', classId: 'botanical-watercolor-monsoon', className: 'Botanical Sketching Open Lab', instructorName: 'Meera Chawla', category: 'fine-arts', room: 'Atelier', spotsLeft: 6, price: 1400 },
  { id: 's-tue-3', day: 'Tuesday', time: '06:30 PM', period: 'Evening', classId: 'contemporary-floorwork-release', className: 'Contemporary Floorwork & Release', instructorName: 'Rohan Deshmukh', category: 'dance', room: 'Main Hall', spotsLeft: 6, price: 1100 },

  // Wednesday
  { id: 's-wed-1', day: 'Wednesday', time: '07:30 AM', period: 'Morning', classId: 'ashtanga-vinyasa-morning', className: 'Vinyasa Flow & Arm Balances', instructorName: 'Tanvi Mehra', category: 'yoga', room: 'Main Hall', spotsLeft: 5, price: 950 },
  { id: 's-wed-2', day: 'Wednesday', time: '04:00 PM', period: 'Afternoon', classId: 'wheel-pottery-weekend', className: 'Midweek Wheel Pottery Lab', instructorName: 'Ananya Sen', category: 'pottery', room: 'Ceramics Atelier', spotsLeft: 3, price: 2200 },
  { id: 's-wed-3', day: 'Wednesday', time: '07:30 PM', period: 'Evening', classId: 'bollywood-heels-choreography', className: 'Commercial Heels & Bollywood', instructorName: 'Neha Roy', category: 'dance', room: 'Main Hall', spotsLeft: 9, price: 1200 },

  // Thursday
  { id: 's-thu-1', day: 'Thursday', time: '07:30 AM', period: 'Morning', classId: 'ashtanga-vinyasa-morning', className: 'Ashtanga Alignment & Core', instructorName: 'Tanvi Mehra', category: 'yoga', room: 'Main Hall', spotsLeft: 7, price: 950 },
  { id: 's-thu-2', day: 'Thursday', time: '06:30 PM', period: 'Evening', classId: 'contemporary-floorwork-release', className: 'Contemporary Partnering & Lift Basics', instructorName: 'Rohan Deshmukh', category: 'dance', room: 'Main Hall', spotsLeft: 4, price: 1100 },
  { id: 's-thu-3', day: 'Thursday', time: '08:00 PM', period: 'Evening', classId: 'sound-bath-gong-healing', className: 'Yin Yoga & Crystal Bowls', instructorName: 'Karan Malhotra', category: 'mindfulness', room: 'Zen Pavilion', spotsLeft: 8, price: 1500 },

  // Friday
  { id: 's-fri-1', day: 'Friday', time: '07:30 AM', period: 'Morning', classId: 'ashtanga-vinyasa-morning', className: 'Full Primary Series Ashtanga', instructorName: 'Tanvi Mehra', category: 'yoga', room: 'Main Hall', spotsLeft: 5, price: 950 },
  { id: 's-fri-2', day: 'Friday', time: '05:30 PM', period: 'Evening', classId: 'wheel-pottery-weekend', className: 'Pottery Clay & Chai Session', instructorName: 'Ananya Sen', category: 'pottery', room: 'Ceramics Atelier', spotsLeft: 2, price: 2400 },
  { id: 's-fri-3', day: 'Friday', time: '07:45 PM', period: 'Evening', classId: 'sound-bath-gong-healing', className: 'Friday Candlelight Sound Bath & Gong', instructorName: 'Karan Malhotra', category: 'mindfulness', room: 'Zen Pavilion', spotsLeft: 10, price: 1500 },

  // Saturday
  { id: 's-sat-1', day: 'Saturday', time: '08:30 AM', period: 'Morning', classId: 'iyengar-rope-wall-intensive', className: 'Iyengar Rope Wall & Traction', instructorName: 'Tanvi Mehra', category: 'yoga', room: 'Main Hall', spotsLeft: 4, price: 1350 },
  { id: 's-sat-2', day: 'Saturday', time: '10:00 AM', period: 'Morning', classId: 'kids-creative-clay-movement', className: 'Little Creators: Clay & Movement', instructorName: 'Ananya Sen', category: 'kids', room: 'Glass Atelier', spotsLeft: 6, price: 1600 },
  { id: 's-sat-3', day: 'Saturday', time: '11:30 AM', period: 'Morning', classId: 'wheel-pottery-weekend', className: 'Wheel Pottery Intensive (Slot 1)', instructorName: 'Ananya Sen', category: 'pottery', room: 'Ceramics Atelier', spotsLeft: 1, price: 2400 },
  { id: 's-sat-4', day: 'Saturday', time: '03:00 PM', period: 'Afternoon', classId: 'botanical-watercolor-monsoon', className: 'Botanical Watercolor Masterclass', instructorName: 'Meera Chawla', category: 'fine-arts', room: 'Garden Room', spotsLeft: 5, price: 1950 },
  { id: 's-sat-5', day: 'Saturday', time: '05:30 PM', period: 'Evening', classId: 'contemporary-floorwork-release', className: 'Contemporary Improvisation Jam', instructorName: 'Rohan Deshmukh', category: 'dance', room: 'Main Hall', spotsLeft: 7, price: 1100 },

  // Sunday
  { id: 's-sun-1', day: 'Sunday', time: '08:30 AM', period: 'Morning', classId: 'iyengar-rope-wall-intensive', className: 'Sunday Deep Decompression Inversions', instructorName: 'Tanvi Mehra', category: 'yoga', room: 'Main Hall', spotsLeft: 3, price: 1350 },
  { id: 's-sun-2', day: 'Sunday', time: '11:30 AM', period: 'Morning', classId: 'wheel-pottery-weekend', className: 'Sunday Wheel Pottery Masterclass', instructorName: 'Ananya Sen', category: 'pottery', room: 'Ceramics Atelier', spotsLeft: 2, price: 2400 },
  { id: 's-sun-3', day: 'Sunday', time: '04:00 PM', period: 'Afternoon', classId: 'wheel-pottery-weekend', className: 'Sunday Sunset Pottery & Glazing', instructorName: 'Ananya Sen', category: 'pottery', room: 'Ceramics Atelier', spotsLeft: 4, price: 2400 },
  { id: 's-sun-4', day: 'Sunday', time: '05:00 PM', period: 'Evening', classId: 'bollywood-heels-choreography', className: 'Heels & Sizzle Choreography', instructorName: 'Neha Roy', category: 'dance', room: 'Main Hall', spotsLeft: 6, price: 1200 },
  { id: 's-sun-5', day: 'Sunday', time: '07:45 PM', period: 'Evening', classId: 'sound-bath-gong-healing', className: 'Sunday Reset: Symphonic Gong Bath', instructorName: 'Karan Malhotra', category: 'mindfulness', room: 'Zen Pavilion', spotsLeft: 8, price: 1500 }
];

export const STUDIO_SPACES: StudioSpace[] = [
  {
    id: 'main-movement-hall',
    name: 'The Teakwood Movement Sanctuary',
    tagline: 'Sunlit wooden floor with tree-canopy views & acoustic insulation',
    capacity: '25-30 people for movement / 40 seated',
    areaSqFt: 1100,
    hourlyRate: 2200,
    minHours: 2,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Imported sprung Canadian maple wooden flooring (joint-friendly)',
      'Floor-to-ceiling French windows opening into private courtyard',
      'Full-length wall mirrors with sliding linen drape options',
      'Custom Iyengar rope wall setup and aerial rigging points',
      'Studio ambient lighting presets (Daylight, Sunset Amber, Candlelight)'
    ],
    idealFor: [
      'Dance rehearsals & choreography video shoots',
      'Yoga teacher trainings & masterclass workshops',
      'Sound healing & mindfulness circles',
      'Acoustic music sessions & book launches'
    ],
    includedEquipment: [
      'Yamaha Hi-Fi Bluetooth sound system with wireless lapel mics',
      '25 Manduka yoga mats, cork blocks, straps, and bolsters',
      'Changing rooms, clean shower facilities, and RO drinking water'
    ]
  },
  {
    id: 'garden-courtyard-atelier',
    name: 'The Glass Garden Atelier',
    tagline: 'An open-air private courtyard bathed in natural foliage and light',
    capacity: '15-20 people',
    areaSqFt: 650,
    hourlyRate: 1600,
    minHours: 2,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Natural terracotta tile flooring surrounded by ficus and frangipani trees',
      'High glass conservatory ceiling with filtered sunlight',
      'Custom solid teak workshop tables and ergonomic benches',
      'Direct outdoor wash sinks for clay, paint, and botanical crafts'
    ],
    idealFor: [
      'Pottery hand-building & ceramic workshops',
      'Watercolor, calligraphy, and botanical painting',
      'Intimate pop-up markets, trunk shows & tea tastings',
      'Creative corporate team bonding afternoons'
    ],
    includedEquipment: [
      '4 Shimpo electric potter wheels',
      'Art easels, apron sets, and washing basins',
      'Specialty herbal tea station and electric kettle'
    ]
  },
  {
    id: 'wellness-pod-suite',
    name: 'The Zen Healing Pod',
    tagline: 'A private sound-isolated chamber for 1-on-1 therapy & small circles',
    capacity: '4-6 people',
    areaSqFt: 300,
    hourlyRate: 1100,
    minHours: 1,
    image: 'https://images.unsplash.com/photo-1512290900672-1f4869509df6?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Acoustically treated walls with warm natural cork and linen acoustic panels',
      'Low floor seating with handwoven wool rugs and zafu meditation cushions',
      'Dimmable salt lamp and candle niches',
      'Dedicated aromatherapy diffuser with certified essential oils'
    ],
    idealFor: [
      'Private sound therapy & Tibetan bowl sessions',
      'Reiki, somatic therapy, and psychotherapy consults',
      'Private yoga alignment sessions',
      'Podcast recording and meditation audio voiceovers'
    ],
    includedEquipment: [
      'Complete set of 7 Chakra Tibetan singing bowls & wind gong',
      '2 comfortable ergonomic massage/bodywork futons',
      'Bose noise-cancelling soundbar'
    ]
  }
];

export const RETREATS: Retreat[] = [
  {
    id: 'goa-mindful-flow-2026',
    title: 'Coastal Somatics & Sunset Sound Retreat',
    destination: 'Mandrem, North Goa',
    dates: 'February 19 - 22, 2027',
    duration: '4 Days / 3 Nights',
    pricePerPerson: 38500,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    description: 'Immerse in daily morning oceanfront Ashtanga yoga, afternoon contemporary movement releases, sound bath rituals at twilight, and farm-to-table organic meals in a secluded heritage eco-villa.',
    highlights: [
      'Daily morning Ashtanga & pranayama with Tanvi Mehra',
      'Beachside floorwork & expressive dance sessions with Rohan',
      'Starlit ocean sound journey with Tibetan bowls & gongs',
      'Private chef-curated plant-based coastal meals'
    ],
    included: [
      'Luxury eco-cottage accommodation (twin sharing)',
      'All gourmet vegetarian/vegan meals & cold-pressed tonics',
      'Complete yoga & movement workshop curriculum',
      'Airport transfer from MOPA / Dabolim'
    ],
    spotsRemaining: 4
  },
  {
    id: 'rishikesh-breath-immersion',
    title: 'Himalayan Pranayama, Silence & Sacred Clay',
    destination: 'Tapovan, Rishikesh',
    dates: 'March 12 - 16, 2027',
    duration: '5 Days / 4 Nights',
    pricePerPerson: 46000,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80',
    description: 'Perched overlooking the sacred Ganga, experience high-altitude breathwork, silent dawn meditation, riverside clay sculpting, and Ayurvedic lifestyle integration.',
    highlights: [
      'Advanced Kumbhaka pranayama & Vedic meditation guidance',
      'Sacred river clay sculpting with Ananya Sen',
      'Sunrise temple walks and Ganga Aarti private experience',
      'Sound resonance immersion inside ancient caves'
    ],
    included: [
      'Boutique riverside retreat suite',
      'Sattvic organic Ayurvedic dining',
      'Retreat workbook & handmade pottery keepsake kit',
      'Dehradun airport transfers'
    ],
    spotsRemaining: 3
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'centering-clay-centering-mind',
    slug: 'centering-clay-centering-mind',
    title: 'The Alchemy of Mud: Why Centering on the Potter Wheel Calms the Mind',
    subtitle: 'How tactile somatic arts help the urban brain exit fight-or-flight mode',
    category: 'Craft & Mindfulness',
    author: 'Ananya Sen',
    date: 'October 18, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'On the pottery wheel, you cannot be somewhere else. If your thoughts wander to your inbox, the clay collapses. Discover the neuropsychology behind tactile arts.',
    content: [
      'When you sit before a pottery wheel, your elbows lock into your thighs, your palms press with deliberate pressure against a spinning lump of stoneware, and the outside world fades into quiet focus.',
      'Unlike our digital devices—where fingers tap frictionless glass—clay provides visceral, unforgiving, and compassionate feedback. It requires both firmness and yielding.',
      'In our studio sessions in Bandra, we frequently see people who arrive tense from Mumbai traffic breathe out a deep sigh the moment wet terracotta touches their skin. It engages both hemispheres of the brain, releasing dopamine and soothing the amygdala.',
      'Centering clay is ultimately about centering oneself. When your base is balanced, what rises up holds form.'
    ]
  },
  {
    id: 'breathing-beyond-pranayama',
    slug: 'breathing-beyond-pranayama',
    title: 'Finding Your Ground: The Power of Gravity in Contemporary Floorwork',
    subtitle: 'Rethinking movement as a conversation with the floor rather than a fight against it',
    category: 'Movement & Dance',
    author: 'Rohan Deshmukh',
    date: 'September 29, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Many adults stop moving down towards the floor the day they grow up. In contemporary dance, the floor is your most trustworthy partner.',
    content: [
      'Watch a child play and you will notice how casually they roll, crouch, crawl, and spring back up. As adults, chairs and rigid shoes divorce us from the ground.',
      'At Orange Studio, our floorwork sessions teach you how to yield to gravity instead of bracing against it. By distributing weight across bones rather than tense muscles, movement becomes fluid and effortless.',
      'When we stop fearing the fall, our dancing gains courage. You glide into spirals, roll through the shoulder blades, and arrive upright with momentum rather than muscular strain.'
    ]
  },
  {
    id: 'sound-frequencies-cellular-rest',
    slug: 'sound-frequencies-cellular-rest',
    title: 'The Science of Sound Baths: How Singing Bowls Alter Brainwaves',
    subtitle: 'From beta to theta: why an hour in a sound bath equals hours of deep restorative sleep',
    category: 'Sound Therapy',
    author: 'Karan Malhotra',
    date: 'September 12, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1512290900672-1f4869509df6?auto=format&fit=crop&w=1000&q=80',
    excerpt: 'Vibrational acoustic frequencies bypass intellectual resistance to drop your autonomic nervous system straight into restorative parasympathetic dominance.',
    content: [
      'A sound bath is not a performance; it is an acoustic environment. When you lie down on our organic cotton mats and close your eyes, the overtone-rich pulses of Tibetan singing bowls and planetary gongs begin a process called brainwave entrainment.',
      'Within ten minutes, active beta brainwaves (associated with analysis and stress) slow down to alpha (relaxed awareness) and eventually theta (the liminal state between dreaming and meditation).',
      'It is in theta that cellular repair accelerates and accumulated mental fatigue melts away.'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Pooja Bhatt',
    role: 'Architect & Weekend Potter',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Orange Studio is pure magic in the heart of Bandra. You step off St. Leo Road through the wooden gate, and suddenly you are enveloped in lush green trees, calming incense, and the sound of clay spinning on wheels. Ananya and Tanvi have created something truly rare.'
  },
  {
    id: 't-2',
    name: 'Vikramaditya Roy',
    role: 'Creative Producer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'We booked the Teakwood Movement Sanctuary for a 3-day brand movement shoot and intimate workshop. The natural light, acoustics, and hospitality exceeded every expectation. The team attended to every detail with warmth.'
  },
  {
    id: 't-3',
    name: 'Sanjana Kapoor',
    role: 'Yoga Practitioner',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'The Friday night sound bath with Karan has become my sacred ritual. Living in Mumbai can be overwhelming, but 75 minutes at Orange Studio completely resets my nervous system. Highly recommend!'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'First-Timers',
    question: 'I have never done pottery, dance, or yoga before. Can I still join?',
    answer: 'Absolutely! More than 80% of our workshop attendees are complete beginners. Every instructor at Orange Studio crafts classes with step-by-step guidance, personal attention, and zero intimidation. We maintain small class sizes (usually 8 to 15 students) to ensure everyone receives caring mentorship.'
  },
  {
    id: 'faq-2',
    category: 'Booking & Passes',
    question: 'How do workshop bookings, cancellations, and reschedules work?',
    answer: 'You can reserve your spot online with instant confirmation. If you need to reschedule, simply notify us at least 24 hours prior to class time and we will gladly credit your booking towards any future workshop or slot within 60 days.'
  },
  {
    id: 'faq-3',
    category: 'Pottery & Craft',
    question: 'When do I get to pick up my ceramic pieces after the pottery workshop?',
    answer: 'Handmade pottery must slowly air-dry for 5-7 days to prevent cracking, after which it undergoes a first bisque firing at 950°C, is hand-dipped in your chosen glaze, and fired again at 1220°C. Your finished, food-safe ceramic pieces will be ready for studio collection (or couriered to your doorstep) in approximately 12 to 14 days.'
  },
  {
    id: 'faq-4',
    category: 'Space Rental',
    question: 'Can I rent Orange Studio for rehearsals, photo shoots, or private gatherings?',
    answer: 'Yes! Both our Teakwood Movement Sanctuary and Glass Garden Atelier are available for rental. We offer tiered rates for rehearsals, editorial/film shoots, and private corporate or family workshops. Check our Studio Rental page for instant price estimation and online inquiries.'
  },
  {
    id: 'faq-5',
    category: 'Studio Etiquette',
    question: 'What is the studio dress code and footwear policy?',
    answer: 'We remove all outdoor shoes at the garden entryway to keep our natural teakwood floors pristine. For yoga and dance, barefoot or grip socks are best. For pottery and painting, wear comfortable clothes you do not mind getting a bit of clay or pigment on (aprons are provided).'
  },
  {
    id: 'faq-6',
    category: 'First-Timers',
    question: 'Where is Orange Studio located and is parking available?',
    answer: 'We are situated at Villa A, Wilfred Heritage, Plot 112, St. Leo Road, Bandra West, Mumbai (just off Carter Road and St. Andrews). There is street parking along St. Leo Road, and auto-rickshaws and cabs drop right at our gate.'
  }
];
