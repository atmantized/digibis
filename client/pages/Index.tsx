import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  BookOpen,
  Users,
  Award,
  ChevronDown,
  Play,
  Heart,
  ShoppingCart,
  Menu,
  Search,
} from "lucide-react";

export default function Index() {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [isBookSectionVisible, setIsBookSectionVisible] = useState(false);
  const bookSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBookSectionVisible(true);
        } else {
          setIsBookSectionVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    if (bookSectionRef.current) {
      observer.observe(bookSectionRef.current);
    }

    return () => {
      if (bookSectionRef.current) {
        observer.unobserve(bookSectionRef.current);
      }
    };
  }, []);

  const featuredBooks = [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: "Rp 89,000",
      originalPrice: "Rp 120,000",
      cover: "/placeholder.svg",
      rating: 4.8,
      badge: "Bestseller",
    },
    {
      title: "Start With Why",
      author: "Simon Sinek",
      price: "Rp 95,000",
      originalPrice: "Rp 130,000",
      cover: "/placeholder.svg",
      rating: 4.9,
      badge: "Popular",
    },
  ];

  const weeklyPicks = [
    {
      week: 1,
      books: [
        {
          title: "Modern Philosophy",
          author: "Alex Turner",
          image: "/placeholder.svg",
        },
        {
          title: "Data Science Basics",
          author: "Lisa Park",
          image: "/placeholder.svg",
        },
      ],
    },
    {
      week: 2,
      books: [
        {
          title: "The Art of Code",
          author: "James Wilson",
          image: "/placeholder.svg",
        },
        {
          title: "Sustainable Living",
          author: "Maria Garcia",
          image: "/placeholder.svg",
        },
      ],
    },
    {
      week: 3,
      books: [
        {
          title: "Digital Marketing",
          author: "Robert Kim",
          image: "/placeholder.svg",
        },
        {
          title: "Psychology Today",
          author: "Jennifer Lee",
          image: "/placeholder.svg",
        },
      ],
    },
    {
      week: 4,
      books: [
        {
          title: "Laut Bercerita",
          author: "Leila C",
          image: "/placeholder.svg",
        },
        {
          title: "Animal Farm",
          author: "Jennifer Lee",
          image: "/placeholder.svg",
        },
      ],
    },
  ];

  const popularBooks = [
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: "Rp 75,000",
      cover: "/placeholder.svg",
      rating: 4.7,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: "Rp 85,000",
      cover: "/placeholder.svg",
      rating: 4.9,
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      price: "Rp 65,000",
      cover: "/placeholder.svg",
      rating: 4.6,
    },
    {
      title: "The 7 Habits",
      author: "Stephen Covey",
      price: "Rp 90,000",
      cover: "/placeholder.svg",
      rating: 4.8,
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: "Rp 70,000",
      cover: "/placeholder.svg",
      rating: 4.5,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Ahmad",
      role: "Mahasiswa",
      text: "Platform terbaik untuk menemukan buku-buku berkualitas dengan harga terjangkau. Koleksinya sangat lengkap!",
      avatar: "/placeholder.svg",
    },
    {
      name: "Budi Santoso",
      role: "Profesional",
      text: "Pengalaman berbelanja yang luar biasa. Pengiriman cepat dan buku selalu dalam kondisi sempurna.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Maya Indira",
      role: "Penulis",
      text: "Sebagai penulis, saya sangat menghargai platform yang memberikan eksposur yang baik untuk karya-karya lokal.",
      avatar: "/placeholder.svg",
    },
  ];

  const bookPicks = [
    {
      title: "Little Women",
      author: "Louisa May Alcott",
      description:
        "Kisah empat bersaudara yang tumbuh dewasa di masa Perang Saudara Amerika. Novel klasik yang penuh dengan pelajaran hidup tentang keluarga, cinta, dan impian.",
      cover: "/placeholder.svg",
      category: "Classic Literature",
    },
    {
      title: "They Both Die at the End",
      author: "Adam Silvera",
      description:
        "Novel yang menyentuh hati tentang dua remaja yang mendapat kabar akan meninggal dalam 24 jam. Cerita tentang persahabatan dan menghargai hidup.",
      cover: "/placeholder.svg",
      category: "Young Adult",
    },
    {
      title: "The Art of War",
      author: "Sun Tzu",
      description:
        "Karya klasik tentang strategi militer yang telah menjadi panduan dalam berbagai aspek kehidupan, termasuk bisnis dan leadership.",
      cover: "/placeholder.svg",
      category: "Philosophy",
    },
  ];

  const partners = [
    { name: "Gramedia", logo: "/placeholder.svg" },
    { name: "Mizan", logo: "/placeholder.svg" },
    { name: "Erlangga", logo: "/placeholder.svg" },
    { name: "Bentang Pustaka", logo: "/placeholder.svg" },
    { name: "Kompas", logo: "/placeholder.svg" },
    { name: "Elex Media", logo: "/placeholder.svg" },
    { name: "Gema Insani", logo: "/placeholder.svg" },
    { name: "Alvabet", logo: "/placeholder.svg" },
  ];

  const faqs = [
    {
      question: "Bagaimana cara melakukan pemesanan buku?",
      answer:
        "Anda dapat melakukan pemesanan dengan mudah melalui website kami. Pilih buku yang diinginkan, masukkan ke keranjang, dan lakukan pembayaran.",
    },
    {
      question: "Apakah ada garansi untuk buku yang rusak?",
      answer:
        "Ya, kami memberikan garansi 100% untuk buku yang rusak atau cacat. Anda dapat menukar atau mengembalikan buku dalam 7 hari.",
    },
    {
      question: "Berapa lama waktu pengiriman?",
      answer:
        "Waktu pengiriman bervariasi tergantung lokasi. Untuk area Jabodetabek 1-2 hari kerja, luar kota 3-5 hari kerja.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/airbook_logo.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-medium text-foreground">
                AIRBook
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Collection
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About us
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <Button
                  variant="outline"
                  className="border-[#664229] text-[#664229] hover:bg-[#664229] hover:text-white px-4 py-2 h-10"
                >
                  Partner With Us
                </Button>
                <Button className="bg-[#664229] text-white hover:bg-[#664229]/90 px-4 py-2 h-10">
                  Register As Client
                </Button>
              </div>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content - Adjusted for smaller size */}
            <div className="space-y-6 text-center md:text-left md:pl-8">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-serif font-medium text-stone-800 leading-tight">
                Jelajahi Dunia Lewat
                <br />
                Buku, Mulai dari
                <br />
                <span className="font-bold">AIRBook</span>
              </h1>
              <p className="text-lg text-stone-600 max-w-md mx-auto md:mx-0">
                Nikmati kemudahan membeli buku kapan saja dan di mana saja,
                hanya dengan beberapa klik.
              </p>
              <div className="pt-4">
                <button className="bg-[#664229] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#664229]/90 transition-all duration-300 shadow-lg">
                  Mulai Berbelanja
                </button>
              </div>
            </div>

            {/* Image Content - Using the illustration from your original code */}
            <div className="flex justify-center items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F3932a6b5696a4ffab89fc4c5aa10f6d8%2F16232a4b310c4e859ce7f6c01ff260e6?format=webp&width=800"
                alt="Ilustrasi seseorang sedang membaca buku di atas tumpukan buku besar"
                className="w-full max-w-md lg:max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="flex justify-center mt-8">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
            <ChevronDown className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </section>

      {/* Book Showcase Section */}
      <section
        ref={bookSectionRef}
        className="py-16 bg-gray-50 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Book Grid with Staggered Animation */}
            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-1000 ease-out ${
                isBookSectionVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              {/* Top row books */}
              <div
                className={`space-y-4 transition-all duration-1000 ease-out ${
                  isBookSectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div
                  className={`aspect-[3/4] rounded-lg overflow-hidden shadow-lg transition-all duration-700 ease-out hover:shadow-2xl hover:scale-105 ${
                    isBookSectionVisible
                      ? "scale-100 rotate-0"
                      : "scale-95 -rotate-2"
                  }`}
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3932a6b5696a4ffab89fc4c5aa10f6d8%2Fe6c2111709f8400aa3900aae1a0b7abd"
                    alt="Kamu gak sendiri book cover"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
              <div
                className={`space-y-4 transition-all duration-1000 ease-out ${
                  isBookSectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div
                  className={`aspect-[3/4] rounded-lg overflow-hidden shadow-lg transition-all duration-700 ease-out hover:shadow-2xl hover:scale-105 ${
                    isBookSectionVisible
                      ? "scale-100 rotate-0"
                      : "scale-95 rotate-2"
                  }`}
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3932a6b5696a4ffab89fc4c5aa10f6d8%2F8aeedc592c71447882f8fa54f0853d4a"
                    alt="Laut Bercerita book cover"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>

              {/* Bottom row books */}
              <div
                className={`space-y-4 transition-all duration-1000 ease-out ${
                  isBookSectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div
                  className={`aspect-[3/4] rounded-lg overflow-hidden shadow-lg transition-all duration-700 ease-out hover:shadow-2xl hover:scale-105 ${
                    isBookSectionVisible
                      ? "scale-100 rotate-0"
                      : "scale-95 rotate-2"
                  }`}
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3932a6b5696a4ffab89fc4c5aa10f6d8%2Ffe044db04e67486eb2a974f49091b8d4"
                    alt="Sapiens Grafis vol.2 book cover"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
              <div
                className={`space-y-4 transition-all duration-1000 ease-out ${
                  isBookSectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <div
                  className={`aspect-[3/4] rounded-lg overflow-hidden shadow-lg transition-all duration-700 ease-out hover:shadow-2xl hover:scale-105 ${
                    isBookSectionVisible
                      ? "scale-100 rotate-0"
                      : "scale-95 -rotate-2"
                  }`}
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3932a6b5696a4ffab89fc4c5aa10f6d8%2Fd1012090813142299708a56fa09c5993"
                    alt="Start With Why book cover"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Text Content with Animation */}
            <div
              className={`space-y-6 transition-all duration-1000 ease-out ${
                isBookSectionVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h2
                className={`text-3xl md:text-4xl font-bold text-foreground transition-all duration-800 ease-out ${
                  isBookSectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                Temukan Buku Favoritmu Disini
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed transition-all duration-800 ease-out ${
                  isBookSectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                Dengan buku fisik, Anda dapat merasakan pengalaman membaca yang
                lebih nyata dan mendalam. Nikmati aroma khas kertas, sensasi
                membalik halaman, dan fokus penuh tanpa gangguan layar. Bawa
                buku favorit Anda ke taman, kafe, atau ruang santai, dan rasakan
                kenikmatan membaca secara langsung di setiap tempat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-16 relative overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F3932a6b5696a4ffab89fc4c5aa10f6d8%2F609323a6c67e4188bc36f492688b7433"
          alt="Book Sale Now - Discover literary treasures at incredible prices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" />
      </section>

      {/* Popular Books */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {/* Glossy Gentleman Guide */}
            <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full aspect-[3/4] bg-black rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-black flex flex-col items-center justify-between text-white p-4">
                  <div className="flex items-center space-x-1 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <div className="w-10 h-10 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-sm font-light leading-tight tracking-wide">
                      GLOSSY
                      <br />
                      GENTLEMAN
                      <br />
                      GUIDE
                    </div>
                  </div>
                  <div className="text-[10px] text-center opacity-90 leading-tight">
                    JET WIDODO, ADI SAPOETRO, LEO SIRTHUAS
                  </div>
                </div>
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-semibold text-gray-900 text-sm">
                  Glossy Gentleman Guide
                </h3>
                <p className="text-xs text-gray-600">
                  Jet Widodo, Adi Sapoetro, Leo Sirthuas
                </p>
              </div>
            </div>

            {/* Start With Why */}
            <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full aspect-[3/4] bg-red-600 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                <div className="text-white text-center font-black text-2xl leading-none tracking-wider">
                  <div className="mb-2">START</div>
                  <div className="mb-2">WITH</div>
                  <div>WHY</div>
                </div>
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-semibold text-gray-900 text-sm">
                  Start With Why
                </h3>
                <p className="text-xs text-gray-600">Simon Sinek</p>
              </div>
            </div>

            {/* Sapiens Grafis vol.2 */}
            <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full aspect-[3/4] bg-white rounded-xl overflow-hidden mb-4 relative border border-gray-200">
                <div className="absolute inset-0 flex flex-col p-3">
                  <div className="text-center mb-3">
                    <div className="text-lg font-bold text-gray-800 mb-1">
                      Sapiens
                    </div>
                    <div className="text-xs text-gray-600 font-medium tracking-wide">
                      GRAFIS VOL.2
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center relative">
                    {/* Archaeological/cave painting style illustration */}
                    <div className="relative w-full h-24 bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg overflow-hidden">
                      <div className="absolute inset-2">
                        {/* Simple cave painting style figures */}
                        <div className="w-8 h-8 bg-orange-600 rounded-full absolute top-1 left-2"></div>
                        <div className="w-6 h-6 bg-amber-700 rounded-full absolute top-3 right-3"></div>
                        <div className="w-4 h-8 bg-orange-800 absolute bottom-2 left-4"></div>
                        <div className="w-3 h-6 bg-amber-800 absolute bottom-1 right-2"></div>
                        {/* Simple landscape elements */}
                        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-orange-300 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-gray-700 text-center font-medium tracking-wider mt-2">
                    YUVAL NOAH HARARI
                  </div>
                </div>
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-semibold text-gray-900 text-sm">
                  Sapiens Grafis vol.2
                </h3>
                <p className="text-xs text-gray-600">Yuval Noah Harari</p>
              </div>
            </div>

            {/* Laut Bercerita */}
            <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-sky-300 via-blue-400 to-blue-500 rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 p-3">
                  {/* Ocean waves and maritime elements */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-blue-200/40 to-transparent"></div>
                  <div className="absolute top-6 left-2 right-2 h-6 bg-blue-300/30 rounded-full"></div>
                  <div className="absolute top-10 left-4 right-4 h-4 bg-blue-400/40 rounded-full"></div>

                  {/* Central illustration area */}
                  <div className="absolute inset-x-4 top-16 bottom-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-12 bg-white/30 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-1 bg-blue-600/40 rounded"></div>
                      <div className="absolute top-2 left-2 w-4 h-3 bg-white/60 rounded-sm"></div>
                      <div className="absolute bottom-2 right-2 w-3 h-2 bg-blue-200/80 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-8 left-0 right-0 text-center text-white">
                    <div className="text-sm font-bold tracking-wide mb-1">
                      LAUT
                    </div>
                    <div className="text-sm font-bold tracking-wide">
                      BERCERITA
                    </div>
                  </div>

                  {/* Author */}
                  <div className="absolute bottom-2 left-0 right-0 text-center">
                    <div className="text-[10px] text-white/90 tracking-wider">
                      LEILA S. CHUDORI
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-semibold text-gray-900 text-sm">
                  Laut Bercerita
                </h3>
                <p className="text-xs text-gray-600">Leila S. Chudori</p>
              </div>
            </div>

            {/* Glossy Gentleman Guide (repeat) */}
            <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full aspect-[3/4] bg-black rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-black flex flex-col items-center justify-between text-white p-4">
                  <div className="flex items-center space-x-1 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <div className="w-10 h-10 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-sm font-light leading-tight tracking-wide">
                      GLOSSY
                      <br />
                      GENTLEMAN
                      <br />
                      GUIDE
                    </div>
                  </div>
                  <div className="text-[10px] text-center opacity-90 leading-tight">
                    JET WIDODO, ADI SAPOETRO, LEO SIRTHUAS
                  </div>
                </div>
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-semibold text-gray-900 text-sm">
                  Glossy Gentleman Guide
                </h3>
                <p className="text-xs text-gray-600">
                  Jet Widodo, Adi Sapoetro, Leo Sirthuas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F3932a6b5696a4ffab89fc4c5aa10f6d8%2Fa66a1fd0a10a4f87b0a512bfa2b6dfb5?format=webp&width=800"
                alt="P.G Turner's Bookstore illustration"
                className="max-w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Kami bukan sekadar toko buku online. Kami adalah komunitas
                pembaca, penulis, dan pecinta literatur yang memiliki kesamaan
                yang sama terhadap kekuatan dan keajaiban kata-kata. Didirikan
                dengan visi untuk membuat buku lebih mudah diakses oleh semua
                orang, AirBook dan kami berpacu menjadi wadah bagi para pembaca
                untuk menemukan serta menyesuaikan klasik- klasik terbebut.
                Platform kami bertujuan untuk menghubungkan individu yang
                memiliki semangat terhadap dunia sastra, mendorong diskusi,
                serta berbagi wawasan yang memperkaya pengalaman membaca.
                Bergabunglah bersama kami dalam perjalanan literasi ini,
                menjelajahi keajaiban cerita, dan memperluas wawasan melalui
                buku-buku yang tentara.
              </p>
              <Button className="bg-[#664229] hover:bg-[#664229]/90 text-white px-6 py-2 rounded-md">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-muted-foreground">
              Testimoni dari pembaca setia kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Weekly Picks
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover our staff's favorite selections, updated every week.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-muted rounded-lg p-1">
              {weeklyPicks.map((week) => (
                <button
                  key={week.week}
                  onClick={() => setCurrentWeek(week.week)}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    currentWeek === week.week
                      ? "bg-[#664229] text-white"
                      : "text-muted-foreground hover:text-[#664229]"
                  }`}
                >
                  WEEK {week.week}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {weeklyPicks
              .find((w) => w.week === currentWeek)
              ?.books.map((book, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex space-x-6">
                      <div className="w-24 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-paper-100 to-cream-100 flex-shrink-0">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-semibold text-primary mb-2 group-hover:text-sage-600 transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          by {book.author}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          This week's carefully selected title offers readers an
                          exceptional journey through compelling storytelling
                          and profound insights.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#664229] text-[#664229] hover:bg-[#664229] hover:text-white"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Media Partners */}
      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Media Partner
            </h2>
            <p className="text-muted-foreground">
              Dipercaya oleh penerbit terkemuka
            </p>
          </div>

          {/* Animated Partner Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-background rounded-lg hover:shadow-lg transition-all duration-500 hover:scale-105"
                style={{
                  animation: `floatLR ${3 + (index % 3)}s ease-in-out ${index * 0.2}s infinite alternate`,
                }}
              >
                <div className="w-24 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center transition-all duration-300 hover:from-[#664229]/10 hover:to-[#664229]/20">
                  <span className="text-xs text-gray-600 font-semibold hover:text-[#664229] transition-colors">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Keyframes for floating animation */}
        <style jsx>{`
          @keyframes floatLR {
            0% {
              transform: translateX(-8px) translateY(-2px);
            }
            50% {
              transform: translateX(0px) translateY(2px);
            }
            100% {
              transform: translateX(8px) translateY(-2px);
            }
          }

          @keyframes floatLR2 {
            0% {
              transform: translateX(6px) translateY(1px);
            }
            50% {
              transform: translateX(-2px) translateY(-3px);
            }
            100% {
              transform: translateX(-6px) translateY(1px);
            }
          }
        `}</style>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Yusno Kami Percayakan Ketika Berbagia di Toko Kami
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Koleksi Lengkap</h3>
              <p className="text-muted-foreground text-sm">
                Ribuan buku dari berbagai kategori dan penerbit terpercaya
                tersedia untuk Anda.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Kualitas Terjamin</h3>
              <p className="text-muted-foreground text-sm">
                Semua buku original dan berkualitas tinggi langsung dari
                penerbit resmi.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Layanan Terbaik</h3>
              <p className="text-muted-foreground text-sm">
                Tim customer service yang responsif dan pengiriman cepat ke
                seluruh Indonesia.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Question
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">
                      {faq.answer}
                    </p>
                  </div>
                  <ChevronDown className="h-5 w-5 text-muted-foreground mt-1 ml-4" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#664229] text-stone-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Brand and Social Media */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-white" />
                <span className="text-xl font-bold text-white">AirBook</span>
              </div>
              <p className="text-stone-300 text-sm">
                Platform terpercaya untuk menemukan dan membeli buku berkualitas
                dengan harga terjangkau.
              </p>
            </div>

            {/* Column 2: Categories */}
            <div>
              <h3 className="font-bold text-white mb-4">Kategori</h3>
              <ul className="space-y-2 text-sm text-stone-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fiksi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Non-Fiksi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bisnis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Teknologi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sejarah
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="font-bold text-white mb-4">Layanan</h3>
              <ul className="space-y-2 text-sm text-stone-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bantuan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pembayaran
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pengiriman
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pengembalian
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="font-bold text-white mb-4">Kontak</h3>
              <ul className="space-y-2 text-sm text-stone-300">
                <li>Email: info@airbook.id</li>
                <li>Telepon: (021) 1234-5678</li>
                <li>Alamat: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-stone-400">
            <p>
              &copy; {new Date().getFullYear()} AirBook. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
