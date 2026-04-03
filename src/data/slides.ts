export interface Slide {
  id: number;
  keyword: string;
  category: string;
  headline: string;
  subtext: string;
  dominantColor: string;
  bgTint: string;
  textColor: string;
  image: string;
}

export const heroSlides: Slide[] = [
  {
    id: 1,
    keyword: "madhubani,painting,india",
    category: "Madhubani Art",
    headline: "Stories Painted\nFrom The Earth",
    subtext: "Traditional Bihar folk art, alive in every line",
    dominantColor: "#D4A017", // Turmeric gold
    bgTint: "#EDE0C8", // Aged parchment
    textColor: "#1A1208", // Indian ink black
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1200", // using specific art images if possible, or fallback
  },
  {
    id: 2,
    keyword: "sculpture,bronze,indian",
    category: "Sculpture",
    headline: "Form That\nSpeaks Silence",
    subtext: "Cast in bronze, held in time",
    dominantColor: "#5C3D2E", // Deep brown
    bgTint: "#F5EFE0", // Deep canvas cream
    textColor: "#1A1208",
    image: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?q=80&w=1200",
  },
  {
    id: 3,
    keyword: "watercolor,contemporary,art",
    category: "Contemporary",
    headline: "Where Tradition\nMeets Now",
    subtext: "Indian artists redefining modern expression",
    dominantColor: "#2C3E6B", // Twilight indigo
    bgTint: "#1A1208", // Very dark
    textColor: "#F5EFE0", // Cream text
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1200",
  },
  {
    id: 4,
    keyword: "warli,tribal,painting",
    category: "Warli Tribal",
    headline: "Ancient Lines,\nLiving Stories",
    subtext: "Maharashtra's tribal art, centuries of wisdom",
    dominantColor: "#C0392B", // Vermillion red
    bgTint: "#FDFAF5", // Warm cream
    textColor: "#1A1208",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
  },
  {
    id: 5,
    keyword: "miniature,painting,rajasthan",
    category: "Miniature Art",
    headline: "Worlds Within\nWorlds",
    subtext: "Rajasthani miniature — detail beyond imagination",
    dominantColor: "#7D8C6B", // Sage green
    bgTint: "#EDE0C8", // Parchment
    textColor: "#1A1208",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200",
  },
];
