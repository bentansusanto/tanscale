export interface MetricComparison {
  metric: string;
  before: string;
  after: string;
  change: string;
  isPositive: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  summarySnippet: string;
  impactChips: string[];
  clientName: string;
  clientIndustry: string;
  location: string;
  duration: string;
  category: "Pertumbuhan Omset" | "Lead Generation" | "Otomasi Proses";
  heroMetric: string;
  heroMetricSub: string;
  heroImage: string;
  executiveQuote: string;
  quoteAuthor: string;
  quoteRole: string;
  avatarInitials: string;

  // The Problem (Pre-Tanscale)
  problemTitle: string;
  problemDescription: string;
  problemPoints: string[];

  // The Solution (Tanscale Engine)
  solutionTitle: string;
  solutionDescription: string;
  solutionPhases: {
    phase: string;
    title: string;
    description: string;
  }[];

  // The Achievement (Results)
  achievementTitle: string;
  achievementDescription: string;
  metricsTable: MetricComparison[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "wanderlust-travel",
    title: "Bagaimana Wanderlust Travel Menaikkan Omset +240% Dalam 90 Hari",
    summarySnippet: "Menembus batas omset Rp 450 Juta/bulan yang stagnan 2 tahun dengan optimasi paket tur & otomasi respons lead WhatsApp.",
    impactChips: ["+240% Omset", "-69% Biaya Lead", "3× Konversi Penjualan"],
    clientName: "Wanderlust Travel Co.",
    clientIndustry: "Travel Agent Tur Mewah & Custom",
    location: "Jakarta & Bali, Indonesia",
    duration: "Kerja Sama 6 Bulan",
    category: "Pertumbuhan Omset",
    heroMetric: "+240%",
    heroMetricSub: "Kenaikan Omset Bulanan",
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
    executiveQuote:
      "Tanscale benar-benar mengubah arah bisnis kami. Bisnis kami stagnan di omset Rp 450 juta/bulan selama dua tahun. Dalam 90 hari setelah intervensi strategi dari Tanscale, kami memecahkan rekor booking bulanan tertinggi sepanjang sejarah perusahaan, mencapai Rp 1,53 Miliar dalam satu bulan.",
    quoteAuthor: "Sarah Mitchell",
    quoteRole: "CEO & Pendiri, Wanderlust Travel Co.",
    avatarInitials: "SM",

    // Problem
    problemTitle: "Stagnan di Batas Omset Rp 450 Juta/Bulan Selama 24 Bulan",
    problemDescription:
      "Meskipun rajin menjalankan iklan online dan memiliki paket tur custom berkualitas tinggi, Wanderlust Travel kesulitan menembus stagnasi omset.",
    problemPoints: [
      "Omset bulanan stagnan di angka Rp 450 Juta selama 2 tahun berturut-turut.",
      "Biaya per lead sangat mahal (Rp 1,2 Juta/lead) dengan tingkat konversi pemesanan rendah (1,8%).",
      "Proses balasan inquiry calon pembeli manual dan lambat (24–48 jam), menyebabkan tingginya pembeli yang kabur.",
      "Tidak ada data atribusi pemasaran yang jelas untuk mengukur ROI setiap channel iklan.",
    ],

    // Solution
    solutionTitle: "Sistem Pertumbuhan Omset 3-Fase Dari Tanscale",
    solutionDescription:
      "Tanscale melakukan audit funnel secara menyeluruh, merestrukturisasi penawaran paket wisata, dan membangun otomasi respons lead instan.",
    solutionPhases: [
      {
        phase: "Fase 1: Optimasi Penawaran & Harga",
        title: "Restrukturisasi Paket Tur High-Ticket",
        description:
          "Mengemas ulang paket tur standar menjadi pengalaman wisata bertingkat (tiered premium), menaikkan rata-rata nilai transaksi (AOV) sebesar 35%.",
      },
      {
        phase: "Fase 2: Generasi Lead Beriklan Presisi",
        title: "Perombakan Iklan Google Search & Meta",
        description:
          "Menargetkan wisatawan kelas atas yang mencari liburan eksklusif, menekan biaya per lead dari Rp 1,2 Juta menjadi Rp 380 Ribu.",
      },
      {
        phase: "Fase 3: Otomasi Respons CRM 2 Menit",
        title: "Respons Prospek Otomatis Instan",
        description:
          "Mengintegrasikan alur kerja WhatsApp & Email otomatis dalam 2 menit pertama saat minat prospek paling tinggi, menggenjot konversi lead dari 1,8% menjadi 5,4%.",
      },
    ],

    // Achievement
    achievementTitle: "Transformasi Bisnis Yang Terbukti Dalam 90 Hari",
    achievementDescription:
      "Kombinasi antara strategi iklan presisi dan respons cepat otomatis memberikan hasil yang berlipat ganda pada seluruh indikator bisnis.",
    metricsTable: [
      { metric: "Omset Bulanan", before: "Rp 450 Juta / bln", after: "Rp 1,53 Miliar / bln", change: "+240%", isPositive: true },
      { metric: "Total Booking Tur Bulanan", before: "18 Pemesanan", after: "48 Pemesanan", change: "+166%", isPositive: true },
      { metric: "Biaya Per Lead Berkualitas", before: "Rp 1.200.000", after: "Rp 380.000", change: "-69%", isPositive: true },
      { metric: "Tingkat Konversi Lead", before: "1,8%", after: "5,4%", change: "3× Lebih Tinggi", isPositive: true },
      { metric: "Waktu Balas Inquiry", before: "28 Jam", after: "2 Menit", change: "99% Lebih Cepat", isPositive: true },
    ],
  },
  {
    slug: "eurovoyage-agency",
    title: "Menekan Biaya Akuisisi Pelanggan 69% Untuk EuroVoyage Agency",
    summarySnippet: "Menurunkan biaya pemesanan tur dari Rp 6,5 Juta jadi Rp 810 Ribu sekaligus melipatgandakan booking bulanan.",
    impactChips: ["4× Booking Tur", "Hemat Budget 50%", "ROAS 6,8×"],
    clientName: "EuroVoyage Agency",
    clientIndustry: "Paket Wisata Eropa & Umroh Plus",
    location: "Surabaya, Indonesia",
    duration: "Kerja Sama 4 Bulan",
    category: "Lead Generation",
    heroMetric: "4×",
    heroMetricSub: "Booking Dengan 50% Ad Spend",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    executiveQuote:
      "Sebelum bertemu Tanscale, kami menghamburkan Rp 150 juta setiap bulan untuk iklan Google dan Meta tanpa hasil yang jelas. Tanscale mengaudit iklan kami, membuang budget yang terbuang sia-sia, dan memberikan booking 4 kali lebih banyak hanya dengan separuh anggaran iklan sebelumnya.",
    quoteAuthor: "Marco Rossi",
    quoteRole: "Direktur Penjualan, EuroVoyage Agency",
    avatarInitials: "MR",

    // Problem
    problemTitle: "Boros Anggaran Iklan Rp 150 Juta/Bulan Tanpa Hasil Jelas",
    problemDescription:
      "EuroVoyage Agency mengeluarkan biaya besar untuk promosi digital namun mengalami penurunan efisiensi iklan, kualitas lead buruk, dan data yang membingungkan.",
    problemPoints: [
      "Anggaran iklan Rp 150 Juta/bulan tanpa lacak atribusi transaksi yang akurat.",
      "Biaya per pemesanan mencapai Rp 6,5 Juta, membuat akuisisi pelanggan tidak menguntungkan.",
      "Konten iklan generik tidak menarik bagi calon wisatawan premium.",
      "Tingkat rasio pentalan (bounce rate) website tinggi mencapai 68%.",
    ],

    // Solution
    solutionTitle: "Penargetan Presisi & Landing Page Berkonversi Tinggi",
    solutionDescription:
      "Tanscale mengaudit data iklan 12 bulan terakhir, merancang ulang landing page destinasi wisata, dan memasang lacak konversi server-side.",
    solutionPhases: [
      {
        phase: "Fase 1: Audit Konten & Pesan Promosi",
        title: "Storytelling Destinasi Premium",
        description:
          "Mengganti foto stok generik dengan video pengalaman liburan nyata yang menampilkan kenyamanan vila privat dan pengalaman eksklusif.",
      },
      {
        phase: "Fase 2: Halaman Landing Khusus",
        title: "Funnel Landing Page Mobile-First",
        description:
          "Membangun halaman penawaran khusus destinasi dengan formulir interaktif, menekan bounce rate dari 68% menjadi 24%.",
      },
      {
        phase: "Fase 3: Pelacakan Conversion API",
        title: "Atribusi Data Multi-Channel Akurat",
        description:
          "Memasang Meta Conversions API dan Google Enhanced Conversions untuk mengoptimalkan algoritma iklan langsung ke audiens yang paling berpotensi membeli.",
      },
    ],

    // Achievement
    achievementTitle: "Return On Ad Spend (ROAS) Tertinggi",
    achievementDescription:
      "Efisiensi promosi melonjak pesat, memungkinkan EuroVoyage menghasilkan 4 kali pemesanan lebih banyak sambil memotong separuh anggaran iklan bulanan.",
    metricsTable: [
      { metric: "Anggaran Iklan Bulanan", before: "Rp 150 Juta / bln", after: "Rp 75 Juta / bln", change: "-50%", isPositive: true },
      { metric: "Booking Terkonfirmasi", before: "23 Booking", after: "92 Booking", change: "+300%", isPositive: true },
      { metric: "Biaya Per Booking", before: "Rp 6.520.000", after: "Rp 810.000", change: "-87,5%", isPositive: true },
      { metric: "Landing Page Bounce Rate", before: "68%", after: "24%", change: "-64%", isPositive: true },
      { metric: "ROAS (Return On Ad Spend)", before: "1,4×", after: "6,8×", change: "4,8× Lebih Tinggi", isPositive: true },
    ],
  },
  {
    slug: "silk-road-journeys",
    title: "Memangkas Waktu Balas Inquiry Dari 24 Jam Menjadi 2 Menit",
    summarySnippet: "Eliminasi kendala pembuatan penawaran manual, menghemat 15 jam/minggu per staf dan melipatgandakan kecepatan closing.",
    impactChips: ["Estimasi 99% Cepat", "Hemat 15j/Staf", "3× Rate Closing"],
    clientName: "Silk Road Journeys",
    clientIndustry: "Tur Petualangan & Outbound Specialist",
    location: "Medan, Indonesia",
    duration: "Kerja Sama 5 Bulan",
    category: "Otomasi Proses",
    heroMetric: "3×",
    heroMetricSub: "Kecepatan Konversi Lead",
    heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85",
    executiveQuote:
      "Audit operasional dari Tanscale sangat membuka mata kami. Kami baru sadar telah kehilangan 30% calon pembeli hanya karena staf membutuhkan waktu hingga 24 jam untuk menyusun proposal penawaran secara manual. Tanscale mengotomasikan alur kerja CRM kami — kini setiap prospek menerima estimasi dalam waktu 2 menit.",
    quoteAuthor: "Aisha Patel",
    quoteRole: "Pendiri, Silk Road Journeys",
    avatarInitials: "AP",

    // Problem
    problemTitle: "Penyusunan Proposal Manual Menghilangkan 30% Calon Pembeli",
    problemDescription:
      "Silk Road Journeys menerima banyak calon pembeli berpotensi, tetapi sering kalah cepat dari kompetitor karena proses pembuatan proposal perjalanan yang lambat.",
    problemPoints: [
      "Staf konsultan menghabiskan 3+ jam secara manual menyusun itinerary untuk setiap prospek.",
      "Rata-rata waktu pengiriman proposal membutuhkan 24 hingga 36 jam.",
      "Lebih dari 30% calon pembeli sudah memesan di travel agent lain sebelum menerima proposal.",
      "Tim kelelahan akibat tugas administrasi berulang dan tidak fokus pada penutupan penjualan.",
    ],

    // Solution
    solutionTitle: "Sistem Pembuat Proposal Otomatis & CRM Respons Cepat",
    solutionDescription:
      "Tanscale merancang sistem otomasi CRM khusus yang menghasilkan proposal PDF terpersonalisasi secara otomatis saat prospek mengisi formulir.",
    solutionPhases: [
      {
        phase: "Fase 1: Pemetaan Alur Kerja Operasional",
        title: "Identifikasi Kendala & SOP Baru",
        description:
          "Menganalisis 14 tahapan interaksi pelanggan, menemukan 8 proses manual yang bisa diotomatisasi penuh.",
      },
      {
        phase: "Fase 2: Integrasi CRM & Engine Proposal",
        title: "Otomasi Proposal PDF Dinamis",
        description:
          "Menghubungkan formulir kontak di website ke generator proposal CRM, mengirimkan PDF itinerary resmi ke WhatsApp prospek dalam 120 detik.",
      },
      {
        phase: "Fase 3: Alur Follow-Up Otomatis",
        title: "Nurturing Prospek Multi-Pesan",
        description:
          "Membangun rantai pesan follow-up otomatis 5 tahap via WhatsApp & Email untuk menjaga ketertarikan prospek hingga jadwal konsultasi terjadwal.",
      },
    ],

    // Achievement
    achievementTitle: "Peningkatan Kecepatan Pemesanan Hingga 300%",
    achievementDescription:
      "Staf menghemat 15+ jam setiap minggu, sementara kecepatan konversi pemesanan melonjak 3 kali lipat.",
    metricsTable: [
      { metric: "Rata-rata Waktu Balas Inquiry", before: "28 Jam", after: "2 Menit", change: "99% Lebih Cepat", isPositive: true },
      { metric: "Persentase Inquiry Jadi Proposal", before: "45%", after: "98%", change: "+117%", isPositive: true },
      { metric: "Jam Kerja Staf Yang Dihemat", before: "0 Jam", after: "15 Jam / mggu / staf", change: "15 Jam Hemat", isPositive: true },
      { metric: "Closing Rate Dari Proposal", before: "12%", after: "36%", change: "3× Lebih Tinggi", isPositive: true },
      { metric: "Total Kenaikan Omset Tahunan", before: "Rp 6,2 Miliar", after: "Rp 18,5 Miliar", change: "+198%", isPositive: true },
    ],
  },
];
