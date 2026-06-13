export type Package = {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  highlights: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    id: 'beach-leisure',
    title: 'Beach & Leisure',
    description: 'Relax on the golden sands of Sri Lanka’s south coast with luxury beach stays, sunsets, and spa rejuvenation.',
    price: '$450',
    duration: '5 Days',
    highlights: ['Beachfront resorts', 'Sunset catamaran', 'Ayurvedic spa', 'Seafood dining'],
  },
  {
    id: 'classic-sri-lanka',
    title: 'Classic Sri Lanka',
    description: 'A curated journey across cultural gems, tea hills, and coastal charm for a complete Sri Lanka introduction.',
    price: '$890',
    duration: '9 Days',
    highlights: ['Kandy temple', 'Tea estate tour', 'Galle fort', 'Traditional cooking'],
    featured: true,
  },
  {
    id: 'wildlife-expedition',
    title: 'Wildlife Expedition',
    description: 'Track elephants, leopards, and birdlife on a safari through Sri Lanka’s richest national parks.',
    price: '$680',
    duration: '7 Days',
    highlights: ['Yala safari', 'Elephant transit home', 'Birding at dawn', 'Luxury tented camp'],
  },
  {
    id: 'cultural-triangle',
    title: 'Cultural Triangle',
    description: 'Explore ancient cities, UNESCO temples, and the iconic rock fortress of Sigiriya.',
    price: '$520',
    duration: '6 Days',
    highlights: ['Sigiriya sunrise', 'Polonnaruwa ruins', 'Dambulla cave temple', 'Village experience'],
  },
  {
    id: 'honeymoon-special',
    title: 'Honeymoon Special',
    description: 'A romantic island escape with candlelit dinners, private beach picnics, and scenic train rides.',
    price: 'Custom',
    duration: 'Flexible',
    highlights: ['Private sunset cruise', 'Couples spa', 'Secluded villa', 'Romantic dinners'],
  },
  {
    id: 'custom-tour',
    title: 'Custom Tour',
    description: 'Handcrafted journeys tailored to your interests, rhythm, and dream experiences in Sri Lanka.',
    price: 'From $600',
    duration: 'Tailored',
    highlights: ['Personalised itinerary', 'Local guides', 'Flexible pacing', 'Tailored adventures'],
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Maya Fernando',
    location: 'Colombo, Sri Lanka',
    quote: 'Fernando Tours made our family holiday flawless. Every detail felt warm, personal, and truly authentic.',
  },
  {
    name: 'Sophie Lee',
    location: 'London, UK',
    quote: 'From Sigiriya to the southern beaches, the trip was magical. The guides knew every hidden gem.',
  },
  {
    name: 'Arjun Patel',
    location: 'Mumbai, India',
    quote: 'A timeless Sri Lanka experience with impeccable planning. The cultural sights and wildlife safaris were unforgettable.',
  },
];
