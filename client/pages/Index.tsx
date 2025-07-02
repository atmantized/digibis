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
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">
                  AllBook
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Katalog
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tentang
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kontak
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button className="hidden md:flex">Masuk</Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Jelajahi Dunia Lewat
                  <span className="block text-primary">Buku, Mulai dari</span>
                  <span className="block text-primary">AllBook</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Temukan ribuan buku berkualitas dengan harga terjangkau. Dari
                  novel terbaru hingga buku klasik, semua ada di sini untuk
                  memperluas wawasan Anda.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Jelajahi Sekarang
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Play className="mr-2 h-5 w-5" />
                  Tonton Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-amber-300 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-primary font-semibold">
                    Hero Illustration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Temukan Buku Terpopuler Hari Ini
            </h2>
            <p className="text-muted-foreground">
              Koleksi terpilih dari editor kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredBooks.map((book, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-3 h-48">
                  <div className="col-span-1 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-gray-500" />
                  </div>
                  <div className="col-span-2 p-6 flex flex-col justify-between">
                    <div>
                      <Badge className="mb-2">{book.badge}</Badge>
                      <h3 className="font-bold text-lg mb-1">{book.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {book.author}
                      </p>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(book.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">
                          {book.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-lg text-primary">
                          {book.price}
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground line-through">
                          {book.originalPrice}
                        </span>
                      </div>
                      <Button size="sm">Beli</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="h-5 w-5" />
              </div>
              <h2 className="text-4xl font-bold">Book Sale Now</h2>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="h-5 w-5" />
              </div>
            </div>
            <p className="text-xl mb-8">
              Diskon hingga 50% untuk semua kategori buku!
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Belanja Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Books */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Popular Books
            </h2>
            <p className="text-muted-foreground">
              Buku-buku yang paling banyak dibaca
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[...popularBooks, ...popularBooks].map((book, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-gray-500" />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {book.author}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary text-sm">
                      {book.price}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-xs text-muted-foreground">
                        {book.rating}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">Lihat Semua</Button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">About Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                AllBook adalah platform digital terdepan yang menghadirkan
                ribuan koleksi buku berkualitas dari penerbit terpercaya. Kami
                berkomitmen untuk menyediakan akses mudah dan terjangkau
                terhadap pengetahuan melalui buku-buku pilihan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dengan pengalaman lebih dari 10 tahun di industri perbukuan,
                kami memahami kebutuhan pembaca Indonesia dan selalu berupaya
                memberikan pengalaman berbelanja buku yang terbaik.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">
                    Buku Tersedia
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">
                    Pembaca Puas
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">
                    Penerbit Partner
                  </div>
                </div>
              </div>
              <Button className="mt-6">Pelajari Lebih Lanjut</Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-orange-200 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-primary font-semibold">
                    About Illustration
                  </p>
                </div>
              </div>
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

      {/* AllBook's Picks */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              AllBook's Picks
            </h2>
            <p className="text-muted-foreground">
              Rekomendasi khusus dari tim editor kami
            </p>
          </div>
          <div className="space-y-8">
            {bookPicks.map((book, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-4 gap-6 p-6">
                  <div className="md:col-span-1">
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-gray-500" />
                    </div>
                  </div>
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {book.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-1">{book.title}</h3>
                      <p className="text-muted-foreground">{book.author}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>
                    <Button>Baca Selengkapnya</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Partners */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Media Partner
            </h2>
            <p className="text-muted-foreground">
              Dipercaya oleh penerbit terkemuka
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-background rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-600 font-semibold">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">AllBook</span>
              </div>
              <p className="text-background/80 text-sm">
                Platform terpercaya untuk menemukan dan membeli buku berkualitas
                dengan harga terjangkau.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center">
                  <span className="text-xs">i</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Kategori</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Fiksi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Non-Fiksi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Bisnis
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Teknologi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Sejarah
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Layanan</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Bantuan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Pembayaran
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Pengiriman
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-background transition-colors"
                  >
                    Pengembalian
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Kontak</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Email: info@allbook.id</li>
                <li>Telepon: (021) 1234-5678</li>
                <li>Alamat: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2024 AllBook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
