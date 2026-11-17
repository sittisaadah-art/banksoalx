import {
  AvatarDefinition,
  BuildingCode,
  BuildingMeta,
  CanteenItem,
  LevelDefinition,
  QuestionItem,
} from '../types/edublox';

export const AVATARS: AvatarDefinition[] = [
  { id: 'raja', name: 'Raja Blox', icon: '👑', desc: 'Mahkota Emas', color: '#facc15' },
  { id: 'neko', name: 'Neko Pink', icon: '🐱', desc: 'Telinga Kucing', color: '#ec4899' },
  { id: 'kapten', name: 'Kapten Bintang', icon: '🛸', desc: 'Antena Angkasa', color: '#38bdf8' },
  { id: 'knight', name: 'Emerald Knight', icon: '🛡️', desc: 'Kostum Hijau', color: '#10b981' },
  { id: 'wizard', name: 'Rainbow Wizard', icon: '🧙', desc: 'Topi Penyihir', color: '#8b5cf6' },
  { id: 'noob', name: 'Classic Noob', icon: '🧱', desc: 'Blocky Klasik', color: '#f97316' },
];

export const OUTFIT_COLORS = [
  '#38bdf8',
  '#10b981',
  '#8b5cf6',
  '#f97316',
  '#facc15',
  '#ec4899',
];

export const LEVELS: LevelDefinition[] = [
  { level: 1, title: 'New Explorer', minXP: 0 },
  { level: 2, title: 'Search Navigator', minXP: 150 },
  { level: 3, title: 'Fact Checker', minXP: 350 },
  { level: 4, title: 'Web Scraper', minXP: 600 },
  { level: 5, title: 'Flowchart Architect', minXP: 900 },
  { level: 6, title: 'Algorithm Master', minXP: 1250 },
];

export const CANTEEN_ITEMS: CanteenItem[] = [
  { id: 'esteh', name: 'Es Teh Manis', icon: '🧋', price: 20, xp: 15, desc: 'Segar setelah mikir algoritma!' },
  { id: 'burger', name: 'Burger Blox', icon: '🍔', price: 50, xp: 45, desc: 'Energi ekstra menjelajah kota!' },
  { id: 'pizza', name: 'Pizza Voxel', icon: '🍕', price: 70, xp: 65, desc: 'Lezatnya bikin fokus kuis!' },
  { id: 'donat', name: 'Donat Pelangi', icon: '🍩', price: 30, xp: 25, desc: 'Manis ceria ala Edublox!' },
  { id: 'eskrim', name: 'Es Krim Sundae', icon: '🍨', price: 35, xp: 30, desc: 'Dingin menyegarkan pikiran!' },
  { id: 'bakso', name: 'Bakso Spesial', icon: '🍜', price: 60, xp: 55, desc: 'Hangat & mengenyangkan!' },
];

export const BUILDINGS_META: Record<BuildingCode, BuildingMeta> = {
  A: {
    name: 'Gedung A – Mesin Pencari & Operator',
    short: 'Gedung A: Pencarian Web',
    color: 0xf97316,
    hex: '#f97316',
    pos: { x: -65, z: -65 },
    icon: '🔍',
    desc: 'Mesin Pencari, Operator & Google Lens',
  },
  B: {
    name: 'Gedung B – Evaluasi & Literasi Digital',
    short: 'Gedung B: Literasi & CRAAP',
    color: 0x38bdf8,
    hex: '#38bdf8',
    pos: { x: 65, z: -65 },
    icon: '🛡️',
    desc: 'CRAAP Test, Lateral Reading & Cek Fakta',
  },
  C: {
    name: 'Gedung C – Web Scraping & Python Lab',
    short: 'Gedung C: Web Scraping',
    color: 0x10b981,
    hex: '#10b981',
    pos: { x: -75, z: 45 },
    icon: '🕷️',
    desc: 'Requests, BeautifulSoup, HTML & Colab',
  },
  D: {
    name: 'Gedung D – Algoritma & Diagram Alir',
    short: 'Gedung D: Diagram Alir',
    color: 0x8b5cf6,
    hex: '#8b5cf6',
    pos: { x: 75, z: 45 },
    icon: '📐',
    desc: 'Simbol Flowchart ANSI/ISO & Penelusuran',
  },
  E: {
    name: 'Gedung E – Pseudocode & Pemrograman',
    short: 'Gedung E: Pseudocode',
    color: 0xec4899,
    hex: '#ec4899',
    pos: { x: 0, z: 85 },
    icon: '💻',
    desc: 'Variabel, Array, Operator & Tracing',
  },
};

export const DEFAULT_QUESTIONS: QuestionItem[] = [
  // =========================================================================
  // 40 SOAL DARI PSAS INFORMATIKA KELAS X SMA (NO. 1–40)
  // =========================================================================

  // --- Bagian A: Pilihan Ganda A–E (PSAS X No. 1–10) ---
  {
    id: 1,
    building: 'A',
    category: 'Mesin Pencari',
    source: 'PSAS X',
    type: 'single',
    question:
      'Dina mengetik kata kunci "manfaat membaca" pada Google dan dalam hitungan detik muncul ribuan halaman web. Pernyataan yang paling tepat tentang mesin pencari adalah ....',
    options: {
      A: 'Program yang hanya menyimpan satu halaman web dan tidak dapat diperbarui',
      B: 'Program komputer yang membantu menemukan informasi dari berbagai sumber di internet berdasarkan kata kunci',
      C: 'Perangkat keras yang dipakai untuk menyimpan seluruh data di internet',
      D: 'Aplikasi yang berfungsi mengedit halaman web milik orang lain',
      E: 'Situs yang hanya memuat informasi yang sudah diperiksa kebenarannya oleh manusia',
    },
    answer: 'B',
    explanation:
      'Mesin pencari (search engine) adalah program komputer yang membantu pengguna menemukan informasi dari berbagai halaman web di internet berdasarkan kata kunci yang dimasukkan.',
  },
  {
    id: 2,
    building: 'A',
    category: 'Operator Pencarian',
    source: 'PSAS X',
    type: 'single',
    question:
      'Rani ingin mencari informasi tentang "jaguar" sebagai hewan, tetapi ia tidak ingin hasil pencarian yang membahas mobil. Kata kunci yang paling tepat ditulis pada kotak pencarian Google adalah ....',
    options: {
      A: 'jaguar OR mobil',
      B: '"jaguar mobil"',
      C: 'jaguar ~mobil',
      D: 'jaguar -mobil',
      E: 'jaguar #mobil',
    },
    answer: 'D',
    explanation:
      'Tanda minus (-) di depan kata kunci berfungsi mengecualikan kata tersebut dari hasil pencarian, sehingga "jaguar -mobil" menampilkan halaman tentang jaguar tanpa kata mobil.',
  },
  {
    id: 3,
    building: 'B',
    category: 'Evaluasi Informasi',
    source: 'PSAS X',
    type: 'single',
    question:
      'Dani reads an online article claiming that a certain herbal drink can cure all diseases. Instead of trusting the article, he opens several other trusted websites to compare what they say about the same claim. This reading strategy is called ....',
    options: {
      A: 'speed reading',
      B: 'silent reading',
      C: 'lateral reading',
      D: 'proofreading',
      E: 'reading aloud',
    },
    answer: 'C',
    explanation:
      'Lateral reading adalah strategi membaca dengan membuka sumber-sumber tepercaya lain untuk membandingkan dan memverifikasi kebenaran informasi pada suatu situs.',
  },
  {
    id: 4,
    building: 'C',
    category: 'Web Scraping Python',
    source: 'PSAS X',
    type: 'single',
    visualId: 'kode_html_program_1',
    question:
      'Perhatikan Kode HTML 1 dan Kode Program 1! Dimas menjalankan Kode Program 1 pada halaman yang memuat Kode HTML 1. Koneksi ke halaman berhasil (status 200), tetapi program tidak menampilkan data harga apa pun dan tidak muncul pesan kesalahan. Penyebab yang paling mungkin adalah ....',
    options: {
      A: 'library Requests belum dipasang sehingga halaman tidak dapat diambil',
      B: 'alamat url salah sehingga halaman web tidak ditemukan',
      C: 'program tidak menggunakan Pandas untuk membuat tabel data',
      D: 'fungsi print() tidak dapat menampilkan teks dari elemen HTML',
      E: 'nama kelas yang dicari ("price") tidak ada pada HTML sehingga find_all menghasilkan daftar kosong',
    },
    answer: 'E',
    explanation:
      'Pada Kode HTML 1, elemen <span> memakai class="harga", sedangkan pada Kode Program 1 ditulis class_="price". Akibatnya find_all menghasilkan daftar kosong [] dan loop tidak mencetak apa pun.',
  },
  {
    id: 5,
    building: 'D',
    category: 'Simbol Diagram Alir',
    source: 'PSAS X',
    type: 'single',
    question:
      'Pada diagram alir, simbol berbentuk jajar genjang digunakan untuk menunjukkan ....',
    options: {
      A: 'masukan (input) atau keluaran (output) data',
      B: 'titik awal atau titik akhir suatu proses',
      C: 'proses pengolahan atau perhitungan data',
      D: 'pengambilan keputusan dengan jalur ya atau tidak',
      E: 'penghubung ke bagian diagram alir pada halaman lain',
    },
    answer: 'A',
    explanation:
      'Dalam standar diagram alir, simbol jajar genjang (parallelogram) melambangkan masukan (input) atau keluaran (output) data.',
  },
  {
    id: 6,
    building: 'D',
    category: 'Penelusuran Diagram Alir',
    source: 'PSAS X',
    type: 'single',
    visualId: 'gambar1_flowchart_nilai',
    question:
      'Perhatikan Gambar 1! Jika pengguna memasukkan nilai 75, keluaran yang ditampilkan oleh diagram alir tersebut adalah ....',
    options: {
      A: 'Remedial',
      B: 'Lulus dan Remedial',
      C: 'Lulus',
      D: '75',
      E: 'Tidak ada keluaran',
    },
    answer: 'C',
    explanation:
      'Kondisi percabangan adalah "nilai ≥ 75 ?". Untuk nilai = 75, kondisi 75 ≥ 75 bernilai Ya sehingga jalur yang dijalankan adalah Cetak "Lulus".',
  },
  {
    id: 7,
    building: 'C',
    category: 'Web Scraping Python',
    source: 'PSAS X',
    type: 'single',
    visualId: 'program_code_2',
    question:
      'Look at Program Code 2! The program above is run and the request to the web server is processed successfully. What is displayed on the screen?',
    options: {
      A: 'Connection status: 100',
      B: 'Connection status: 200',
      C: 'Connection status: 404',
      D: 'Connection status: 500',
      E: 'Connection status: True',
    },
    answer: 'B',
    explanation:
      'Kode status HTTP 200 OK menandakan permintaan (request) ke server web berhasil diproses dengan sukses.',
  },
  {
    id: 8,
    building: 'E',
    category: 'Penelusuran Pseudocode',
    source: 'PSAS X',
    type: 'single',
    visualId: 'pseudocode_1_balok',
    question:
      'Perhatikan Pseudocode 1! Jika nilai yang dimasukkan adalah p = 5, l = 4, dan t = 3, nilai yang dicetak oleh pseudocode tersebut adalah ....',
    options: {
      A: '12',
      B: '15',
      C: '20',
      D: '60',
      E: 'Tidak ada nilai yang dicetak',
    },
    answer: 'D',
    explanation:
      'Luas = p * l = 5 * 4 = 20, kemudian Volume = Luas * t = 20 * 3 = 60. Nilai yang dicetak adalah 60.',
  },
  {
    id: 9,
    building: 'D',
    category: 'Logika Algoritma',
    source: 'PSAS X',
    type: 'single',
    question:
      'Raka designs an algorithm to calculate the average of two numbers. He writes the steps in the following order:\n1. Print the average.\n2. Divide the sum by 2.\n3. Read the values of a and b.\n4. Add a and b.\nWhich statement is correct?',
    options: {
      A: 'His order is correct because an algorithm always starts by printing the result.',
      B: 'His order is correct because the steps can be written in any order as long as all steps are included.',
      C: 'His order is incorrect; the logical order is 3, 2, 4, 1.',
      D: 'His order is incorrect; the logical order is 4, 3, 2, 1.',
      E: 'His order is incorrect; the logical order is 3, 4, 2, 1 because each step needs the result of the previous step.',
    },
    answer: 'E',
    explanation:
      'Algoritma harus berurutan secara logis: baca nilai a dan b (3), jumlahkan a dan b (4), bagi jumlahnya dengan 2 (2), lalu cetak rata-rata (1).',
  },
  {
    id: 10,
    building: 'D',
    category: 'Perulangan Diagram Alir',
    source: 'PSAS X',
    type: 'single',
    visualId: 'gambar2_flowchart_loop',
    question:
      'Perhatikan Gambar 2! Nilai yang ditampilkan pada simbol keluaran "Cetak total" setelah diagram alir tersebut dijalankan adalah ....',
    options: {
      A: '10',
      B: '4',
      C: '5',
      D: '6',
      E: '15',
    },
    answer: 'A',
    explanation:
      'Perulangan berjalan untuk i = 1, 2, 3, 4 (selama i ≤ 4): total = 0 + 1 + 2 + 3 + 4 = 10. Saat i = 5, kondisi bernilai Tidak sehingga dicetak 10.',
  },

  // --- Bagian B: Pilihan Ganda Kompleks A–E (>1 jawaban benar) (PSAS X No. 11–20) ---
  {
    id: 11,
    building: 'A',
    category: 'Operator Pencarian',
    source: 'PSAS X',
    type: 'complex',
    question:
      'Raka ingin menampilkan hanya dokumen berformat PDF tentang energi terbarukan yang berasal dari situs esdm.go.id. Pilihlah semua kata kunci yang tepat untuk tujuan tersebut!',
    options: {
      A: 'energi terbarukan site:esdm.go.id filetype:pdf',
      B: 'energi terbarukan filetype:esdm.go.id site:pdf',
      C: 'filetype:pdf site:esdm.go.id energi terbarukan',
      D: 'energi terbarukan site:esdm.go.id',
      E: '"energi terbarukan" site:esdm.go.id filetype:pdf',
    },
    complexAnswers: ['A', 'C', 'E'],
    explanation:
      'Operator site:esdm.go.id membatasi situs dan filetype:pdf membatasi jenis dokumen PDF. Urutan operator bebas (A, C), dan penambahan tanda kutip pada frasa "energi terbarukan" (E) juga tepat.',
  },
  {
    id: 12,
    building: 'A',
    category: 'Jenis Mesin Pencari',
    source: 'PSAS X',
    type: 'complex',
    question:
      'Rina is learning about the types of search engines. Select ALL correct pairs of a search engine type and its description!',
    options: {
      A: 'Computer Created Search Engine – the results are sorted with the direct help of human editors',
      B: 'Human Organized Search Engine – the results are arranged with human participation',
      C: 'Hybrid Search Engine – combines machine algorithms and human interaction',
      D: 'MetaCrawler – searches only the database of one search engine',
      E: 'MetaCrawler – collects results from several search engines at the same time',
    },
    complexAnswers: ['B', 'C', 'E'],
    explanation:
      'Human Organized Search Engine disusun dengan partisipasi manusia (B), Hybrid Search Engine menggabungkan algoritma mesin dan interaksi manusia (C), dan MetaCrawler mengumpulkan hasil dari beberapa mesin pencari sekaligus (E).',
  },
  {
    id: 13,
    building: 'C',
    category: 'Library Web Scraping',
    source: 'PSAS X',
    type: 'complex',
    question:
      'Sebuah tim menyusun program Python untuk mengumpulkan data harga produk dari toko daring. Pilihlah semua pasangan kebutuhan dan library Python yang tepat!',
    options: {
      A: 'Mengambil isi halaman web dari internet – Pandas',
      B: 'Mengambil isi halaman web dari internet – Requests',
      C: 'Membuat grafik dari data hasil scraping – Scrapy',
      D: 'Membaca dan mengekstrak struktur HTML – BeautifulSoup',
      E: 'Mengolah data hasil scraping menjadi tabel – Requests',
    },
    complexAnswers: ['B', 'D'],
    explanation:
      'Requests digunakan untuk mengambil isi halaman web melalui HTTP (B), sedangkan BeautifulSoup digunakan untuk membaca dan mengekstrak elemen dari struktur HTML (D).',
  },
  {
    id: 14,
    building: 'E',
    category: 'Penelusuran Pseudocode',
    source: 'PSAS X',
    type: 'complex',
    visualId: 'pseudocode_2_swap',
    question:
      'Perhatikan Pseudocode 2! Pilihlah semua pernyataan yang benar berdasarkan penelusuran pseudocode tersebut!',
    options: {
      A: 'Setelah baris 3 dijalankan, nilai a menjadi 8.',
      B: 'Setelah baris 4 dijalankan, nilai b menjadi 2.',
      C: 'Keluaran pada baris 6 adalah 8 dan 2.',
      D: 'Setelah baris 5 dijalankan, nilai a menjadi 3.',
      E: 'Nilai a dan b pada akhir program telah bertukar dari nilai awalnya.',
    },
    complexAnswers: ['A', 'D', 'E'],
    explanation:
      'Awal: a=5, b=3. Baris 3: a=5+3=8 (A benar). Baris 4: b=8-3=5. Baris 5: a=8-5=3 (D benar). Akhirnya a=3 dan b=5, sehingga nilai a dan b bertukar (E benar).',
  },
  {
    id: 15,
    building: 'E',
    category: 'Struktur Pseudocode',
    source: 'PSAS X',
    type: 'complex',
    visualId: 'pseudocode_3_lingkaran',
    question:
      'Perhatikan Pseudocode 3! Pilihlah semua pernyataan yang benar tentang pseudocode tersebut!',
    options: {
      A: 'Baris pertama merupakan deskripsi singkat tentang tujuan algoritma.',
      B: 'Perintah Input r berfungsi mencetak nilai r ke layar.',
      C: 'Teks setelah tanda // merupakan komentar yang menjelaskan baris rumus.',
      D: 'Jika nilai r yang dimasukkan adalah 14, nilai yang dicetak adalah 88.',
      E: 'Pseudocode tersebut hanya dapat dipahami jika ditulis dengan sintaks bahasa Python.',
    },
    complexAnswers: ['A', 'C', 'D'],
    explanation:
      'Baris 1 menjelaskan tujuan algoritma (A), tanda // menandai komentar (C), dan untuk r=14 keliling = 2 × 22 × 14 / 7 = 88 (D). Input r membaca masukan, bukan mencetak, dan pseudocode tidak terikat sintaks Python.',
  },
  {
    id: 16,
    building: 'D',
    category: 'Penelusuran Diagram Alir',
    source: 'PSAS X',
    type: 'complex',
    visualId: 'gambar3_flowchart_terbesar',
    question:
      'Perhatikan Gambar 3! Diagram alir tersebut dijalankan dengan masukan A = 12, B = 20, dan C = 15. Pilihlah semua pernyataan yang benar!',
    options: {
      A: 'Keluaran diagram alir tersebut adalah 15.',
      B: 'Diagram alir tersebut memuat dua simbol percabangan.',
      C: 'Jika masukan diubah menjadi A = 30, B = 20, dan C = 15, pemeriksaan pertama berjawaban "Ya".',
      D: 'Pada pemeriksaan kedua, jawabannya "Tidak" sehingga nilai terbesar tetap 20.',
      E: 'Setelah pemeriksaan pertama, nilai terbesar menjadi 12.',
    },
    complexAnswers: ['B', 'D'],
    explanation:
      'Diagram memiliki dua belah ketupat percabangan (B). Dengan A=12, B=20, C=15: mula-mula terbesar=12, cek B>terbesar (20>12 -> Ya, terbesar=20), cek C>terbesar (15>20 -> Tidak, tetap 20) (D). Jika A=30, 20>30 bernilai Tidak.',
  },
  {
    id: 17,
    building: 'A',
    category: 'Operator Pencarian',
    source: 'PSAS X',
    type: 'complex',
    question:
      'Select ALL search goals that are matched with the correct search query!',
    options: {
      A: 'Finding pages whose title contains the word "python" – site:python',
      B: 'Finding only PDF files about digital marketing – digital marketing site:pdf',
      C: 'Finding pages that contain the exact phrase "internet of things" – "internet of things"',
      D: 'Finding pages about Python but not about snakes – python -snake',
      E: 'Finding results about Windows versions 7 to 10 – Windows 7..10',
    },
    complexAnswers: ['C', 'D', 'E'],
    explanation:
      'Tanda kutip "..." mencari frasa persis (C), tanda minus - mengecualikan kata (D), dan operator rentang .. mencari rentang angka (E). Pencarian judul menggunakan intitle: dan tipe file menggunakan filetype:.',
  },
  {
    id: 18,
    building: 'B',
    category: 'Ekosistem Periksa Fakta',
    source: 'PSAS X',
    type: 'complex',
    question:
      'Cermati kasus berikut! Sebuah pesan berantai beredar di grup WhatsApp: "Minum air rebusan daun X tiga kali sehari menyembuhkan semua penyakit. Bagikan agar semua orang selamat!" Pesan itu dibuat oleh akun anonim @sehatalami tanpa menyebut sumber penelitian. Dina meneruskan pesan tersebut ke sepuluh grup tanpa memeriksanya. Seorang jurnalis pemeriksa fakta kemudian memverifikasi klaim itu dan menerbitkan artikel bantahan. Pak Joko membaca artikel bantahan tersebut dan memutuskan tidak memercayai pesan berantai itu. Pilihlah semua pernyataan yang benar berdasarkan kasus tersebut!',
    options: {
      A: 'Pak Joko berperan sebagai pembuat informasi.',
      B: 'Akun @sehatalami berperan sebagai pembuat informasi.',
      C: 'Jurnalis pemeriksa fakta berperan sebagai pemeriksa informasi.',
      D: 'Dina belum menjalankan tanggung jawab penyebar informasi karena meneruskan pesan tanpa memverifikasinya.',
      E: 'Dina berperan sebagai pemeriksa informasi karena meneruskan pesan ke banyak grup.',
    },
    complexAnswers: ['B', 'C', 'D'],
    explanation:
      'Akun @sehatalami adalah pembuat informasi (B), jurnalis adalah pemeriksa informasi (C), dan Dina adalah penyebar informasi yang abai memverifikasi pesan sebelum meneruskannya (D).',
  },
  {
    id: 19,
    building: 'D',
    category: 'Konsep Algoritma',
    source: 'PSAS X',
    type: 'complex',
    question:
      'An algorithm is used to solve problems systematically. Select ALL correct statements about algorithms!',
    options: {
      A: 'The steps of an algorithm can be swapped randomly because the result is always the same.',
      B: 'An algorithm is a sequence of steps arranged logically and systematically to solve a problem.',
      C: 'An algorithm can only be written using a programming language.',
      D: 'A good algorithm does not need to produce a solution to the given problem.',
      E: 'A good algorithm has a clear beginning and a clear end.',
    },
    complexAnswers: ['B', 'E'],
    explanation:
      'Algoritma adalah urutan langkah yang logis dan sistematis untuk menyelesaikan masalah (B) serta memiliki awal dan akhir yang jelas (E). Algoritma juga dapat ditulis dalam bahasa alami, flowchart, atau pseudocode.',
  },
  {
    id: 20,
    building: 'E',
    category: 'Perulangan & Kondisi Pseudocode',
    source: 'PSAS X',
    type: 'complex',
    visualId: 'pseudocode_4_loop_if',
    question:
      'Perhatikan Pseudocode 4! Pilihlah semua pernyataan yang benar berdasarkan penelusuran pseudocode tersebut!',
    options: {
      A: 'Proses penjumlahan dilakukan sebanyak 5 kali.',
      B: 'Ketika i = 2, nilai total masih 0.',
      C: 'Nilai total yang dicetak adalah 15.',
      D: 'Ketika i = 3, nilai total menjadi 3.',
      E: 'Nilai total yang dicetak adalah 12.',
    },
    complexAnswers: ['B', 'D', 'E'],
    explanation:
      'Kondisi i > 2 hanya terpenuhi saat i = 3, 4, dan 5 (3 kali penjumlahan). Saat i=2, total masih 0 (B). Saat i=3, total = 0+3 = 3 (D). Saat i=4, total = 7; saat i=5, total = 12 yang kemudian dicetak (E).',
  },

  // --- Bagian C: Benar / Salah (PSAS X No. 21–30) ---
  {
    id: 21,
    building: 'A',
    category: 'Operator Pencarian',
    source: 'PSAS X',
    type: 'truefalse',
    visualId: 'kata_kunci_rafi',
    question:
      'Perhatikan kata kunci pencarian Rafi di atas! Rafi mencari artikel tentang tren keamanan siber. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Hasil pencarian hanya memuat artikel yang dipublikasikan setelah tahun 2022.',
      'Operator after: digunakan untuk membatasi pencarian pada satu situs web tertentu.',
      'Untuk melihat versi arsip dari halaman web yang sudah tidak aktif, Rafi dapat memakai operator cache:.',
    ],
    tfAnswers: ['Benar', 'Salah', 'Benar'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Operator after:2022 menyaring hasil setelah tahun 2022 (Benar), membatasi situs memakai site: bukan after: (Salah), dan operator cache: menampilkan versi arsip halaman web (Benar).',
  },
  {
    id: 22,
    building: 'A',
    category: 'Cara Kerja Mesin Pencari',
    source: 'PSAS X',
    type: 'truefalse',
    question:
      'A user types "healthy breakfast" into a search engine. The search engine works through three stages: crawling, indexing, and ranking, before showing the results. Decide whether each statement is True or False!',
    statements: [
      'Crawling is the stage in which the search engine explores web pages automatically.',
      'Indexing is the stage that arranges the order of the results shown to the user.',
      'The results appear in a random order because the search engine does not rank web pages.',
    ],
    tfAnswers: ['Benar', 'Salah', 'Salah'],
    tfLabels: ['True', 'False'],
    explanation:
      'Crawling menjelajahi halaman web otomatis (True). Pengurutan peringkat hasil adalah tahap ranking, bukan indexing (False), sehingga hasil tidak muncul acak (False).',
  },
  {
    id: 23,
    building: 'C',
    category: 'Web Scraping Python',
    source: 'PSAS X',
    type: 'truefalse',
    visualId: 'kode_program_3',
    question:
      'Perhatikan Kode Program 3! Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Perintah requests.get(url) bertugas membaca dan memilih elemen <h3> pada halaman web.',
      'Jika halaman web tidak memiliki elemen <h3>, program tidak mencetak apa pun dan tidak menampilkan pesan kesalahan.',
      'Jika "h3" diganti menjadi "p", program akan mengambil teks dari elemen paragraf.',
    ],
    tfAnswers: ['Salah', 'Benar', 'Benar'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'requests.get(url) mengambil konten halaman web, sedangkan pemilihan elemen <h3> dilakukan oleh soup.find_all("h3") (Salah). Jika tidak ada <h3>, find_all mengembalikan list kosong tanpa error (Benar), dan tag "p" mengambil elemen paragraf (Benar).',
  },
  {
    id: 24,
    building: 'D',
    category: 'Simbol Diagram Alir',
    source: 'PSAS X',
    type: 'truefalse',
    visualId: 'gambar4_simbol_flowchart',
    question:
      'Perhatikan Gambar 4! Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Simbol (1) digunakan untuk menandai titik awal atau titik akhir suatu proses.',
      'Simbol (2) digunakan untuk menunjukkan suatu proses atau perhitungan.',
      'Simbol (3) digunakan untuk menunjukkan pengambilan keputusan dengan jalur ya atau tidak.',
    ],
    tfAnswers: ['Benar', 'Benar', 'Salah'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Simbol (1) oval/terminator menandai awal/akhir (Benar), simbol (2) persegi panjang menunjukkan proses (Benar), sedangkan simbol (3) jajar genjang adalah input/output bukan keputusan (Salah).',
  },
  {
    id: 25,
    building: 'D',
    category: 'Logika Algoritma',
    source: 'PSAS X',
    type: 'truefalse',
    question:
      'Doni menuliskan algoritma mencuci tangan dengan urutan langkah berikut:\n1. Bilas tangan dengan air bersih.\n2. Basahi tangan dengan air mengalir.\n3. Gosok seluruh permukaan tangan dengan sabun.\n4. Keringkan tangan dengan lap bersih.\nTentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Urutan langkah yang ditulis Doni sudah logis.',
      'Urutan langkah yang logis adalah 2, 3, 1, 4.',
      'Algoritma yang baik boleh tidak memiliki akhir yang jelas karena langkahnya dapat berlanjut tanpa batas.',
    ],
    tfAnswers: ['Salah', 'Benar', 'Salah'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Urutan Doni tidak logis karena membilas sebelum membasahi dan memakai sabun (Salah). Urutan yang tepat: basahi (2), gosok sabun (3), bilas (1), keringkan (4) (Benar). Algoritma wajib memiliki akhir yang pasti (Salah).',
  },
  {
    id: 26,
    building: 'E',
    category: 'Representasi Algoritma',
    source: 'PSAS X',
    type: 'truefalse',
    question:
      'Algoritma dapat disajikan dalam beberapa bentuk agar mudah dipahami dan diterjemahkan ke dalam bahasa pemrograman. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Diagram alir adalah penyajian algoritma dalam bentuk teks terstruktur yang menyerupai kode program.',
      'Pseudocode harus ditulis dengan sintaks seketat bahasa pemrograman sebenarnya.',
      'Algoritma dapat disajikan secara visual (diagram alir) maupun dalam tulisan terstruktur (pseudocode).',
    ],
    tfAnswers: ['Salah', 'Salah', 'Benar'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Diagram alir berbentuk visual/gambar bukan teks (Salah). Pseudocode tidak terikat aturan sintaks ketat (Salah). Algoritma memang dapat disajikan secara visual maupun tulisan terstruktur (Benar).',
  },
  {
    id: 27,
    building: 'E',
    category: 'Perulangan Pseudocode',
    source: 'PSAS X',
    type: 'truefalse',
    visualId: 'pseudocode_5_pangkat',
    question:
      'Perhatikan Pseudocode 5! Pseudocode tersebut dijalankan dengan masukan bilangan = 2 dan pangkat = 3. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Setelah perulangan kedua selesai, nilai hasil adalah 4.',
      'Perulangan berhenti ketika nilai pangkat sudah mencapai 0.',
      'Jika pangkat yang dimasukkan adalah 0, perulangan tetap dijalankan satu kali sebelum berhenti.',
    ],
    tfAnswers: ['Benar', 'Benar', 'Salah'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Putaran 1: hasil=2, pangkat=2. Putaran 2: hasil=4, pangkat=1 (Benar). Putaran 3: hasil=8, pangkat=0 lalu berhenti (Benar). Karena kondisi "Selama pangkat > 0" diperiksa di awal, jika pangkat = 0 maka perulangan tidak dijalankan sama sekali (Salah).',
  },
  {
    id: 28,
    building: 'E',
    category: 'Penelusuran Pseudocode',
    source: 'PSAS X',
    type: 'truefalse',
    visualId: 'pseudocode_6_average',
    question:
      'Look at Pseudocode 6! Decide whether each statement is True or False!',
    statements: [
      'The command Input t, u displays the values of t and u on the screen.',
      'If t = 80 and u = 90, the printed value is 85.',
      'The text after // is a comment and is executed as a calculation step.',
    ],
    tfAnswers: ['Salah', 'Benar', 'Salah'],
    tfLabels: ['True', 'False'],
    explanation:
      'Input t, u membaca data masukan dari pengguna, bukan mencetak ke layar (False). Rata-rata (80+90)/2 = 85 (True). Komentar setelah // hanya catatan untuk pembaca dan tidak dieksekusi (False).',
  },
  {
    id: 29,
    building: 'B',
    category: 'CRAAP Test',
    source: 'PSAS X',
    type: 'truefalse',
    question:
      'Tentukan Benar atau Salah untuk setiap penilaian berikut berdasarkan CRAAP Test! Sebuah artikel berjudul "Obat Ajaib Sembuhkan Semua Penyakit" diunggah pada tahun 2015. Artikel itu ditulis oleh penulis anonim, tidak mencantumkan referensi atau data pendukung, dan memuat tautan untuk membeli produk obat tersebut.',
    statements: [
      'Tidak adanya referensi dan data pendukung terutama berkaitan dengan aspek Currency.',
      'Penulis yang anonim membuat aspek Authority artikel tersebut diragukan.',
      'Tautan pembelian produk menunjukkan tujuan penulisan (Purpose) yang kemungkinan promosi sehingga berpotensi bias.',
    ],
    tfAnswers: ['Salah', 'Benar', 'Benar'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Ketiadaan referensi dan data pendukung berkaitan dengan aspek Accuracy (keakuratan), bukan Currency (kebaruan) (Salah). Penulis anonim meragukan aspek Authority (Benar), dan tautan penjualan menunjukkan aspek Purpose bersifat promosi/komersial (Benar).',
  },
  {
    id: 30,
    building: 'C',
    category: 'Alur Web Scraping',
    source: 'PSAS X',
    type: 'truefalse',
    visualId: 'gambar5_web_scraping',
    question:
      'Perhatikan Gambar 5! Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      'Program web scraping membaca struktur HTML halaman web untuk mengambil data tertentu.',
      'Data yang berhasil diambil langsung berbentuk grafik sehingga tidak perlu disimpan dalam tabel atau dataset.',
      'Google Colab memungkinkan kode Python dijalankan melalui peramban web tanpa menginstal perangkat lunak tambahan.',
    ],
    tfAnswers: ['Benar', 'Salah', 'Benar'],
    tfLabels: ['Benar', 'Salah'],
    explanation:
      'Web scraping mengekstrak data dari struktur HTML (Benar). Data hasil scraping disimpan ke tabel/dataset terlebih dahulu sebelum diolah atau dibuat grafik (Salah). Google Colab berjalan berbasis cloud lewat browser (Benar).',
  },

  // --- Bagian D: Isian Singkat (PSAS X No. 31–40) ---
  {
    id: 31,
    building: 'A',
    category: 'Pencarian Visual',
    source: 'PSAS X',
    type: 'short',
    question:
      'Seorang murid memotret sebuah bangunan bersejarah menggunakan ponselnya. Ia ingin mengetahui nama dan sejarah bangunan itu tanpa mengetik kata kunci. Fitur milik Google yang dapat mengenali objek pada gambar dan menampilkan informasi terkait dari internet disebut Google ....',
    acceptedAnswers: ['lens', 'google lens', 'レンズ'],
    displayAnswer: 'Lens',
    explanation:
      'Google Lens adalah fitur pencarian visual berbasis gambar yang mampu mengenali objek, tempat, atau teks dari kamera/foto.',
  },
  {
    id: 32,
    building: 'A',
    category: 'Operator Pencarian',
    source: 'PSAS X',
    type: 'short',
    question:
      'Bayu ingin mencari informasi tentang kata Python hanya pada situs wikipedia.org. Agar hasil pencarian dibatasi pada satu situs tersebut, ia menulis kata kunci "Python ______:wikipedia.org". Kata yang tepat untuk mengisi bagian kosong (operator pencarian) adalah ....',
    acceptedAnswers: ['site', 'site:'],
    displayAnswer: 'site',
    explanation:
      'Operator "site:" membatasi hasil pencarian mesin pencari agar hanya berasal dari domain atau situs web tertentu.',
  },
  {
    id: 33,
    building: 'C',
    category: 'Web Scraping Python',
    source: 'PSAS X',
    type: 'short',
    visualId: 'program_code_4',
    question:
      'Look at Program Code 4! The variable soup stores the HTML structure of a web page. Write the name of the command that completes the code above so that it finds ALL <h3> elements on the page.',
    acceptedAnswers: ['find_all', 'findall', 'find_all()'],
    displayAnswer: 'find_all',
    explanation:
      'Dalam BeautifulSoup, metode find_all("h3") digunakan untuk menemukan dan mengambil seluruh elemen <h3> di dalam dokumen HTML.',
  },
  {
    id: 34,
    building: 'E',
    category: 'Penelusuran Pseudocode',
    source: 'PSAS X',
    type: 'short',
    visualId: 'pseudocode_7_fibonacci',
    question:
      'Perhatikan Pseudocode 7! Nilai yang dicetak oleh pseudocode tersebut adalah ....',
    acceptedAnswers: ['8', 'delapan', 'eight', 'はち', 'ハチ'],
    displayAnswer: '8',
    explanation:
      'Awal: a=0, b=1. Ulangi 5 kali: (1) c=1, a=1, b=1; (2) c=2, a=1, b=2; (3) c=3, a=2, b=3; (4) c=5, a=3, b=5; (5) c=8, a=5, b=8. Maka Cetak b menampilkan 8.',
  },
  {
    id: 35,
    building: 'D',
    category: 'Simbol Diagram Alir',
    source: 'PSAS X',
    type: 'short',
    visualId: 'gambar1_flowchart_nilai',
    question:
      'Perhatikan kembali Gambar 1! Simbol berbentuk belah ketupat yang memuat tulisan "nilai ≥ 75 ?" pada diagram alir tersebut dinamakan simbol ....',
    acceptedAnswers: [
      'keputusan',
      'percabangan',
      'decision',
      'simbol keputusan',
      'branch',
      '判断',
      '決定',
      '分岐',
      '判断記号',
    ],
    displayAnswer: 'keputusan',
    explanation:
      'Simbol berbentuk belah ketupat pada diagram alir disebut simbol keputusan (decision/percabangan) untuk memeriksa kondisi Ya atau Tidak.',
  },
  {
    id: 36,
    building: 'E',
    category: 'Penelusuran Pseudocode',
    source: 'PSAS X',
    type: 'short',
    visualId: 'pseudocode_8_terbesar',
    question:
      'Perhatikan Pseudocode 8! Pengguna memasukkan N = 3, kemudian memasukkan bilangan 4, 9, dan 6 secara berurutan. Nilai yang dicetak oleh pseudocode tersebut adalah ....',
    acceptedAnswers: ['9', 'sembilan', 'nine', 'きゅう', 'く'],
    displayAnswer: '9',
    explanation:
      'terbesar awal = 0. Input 4 → terbesar=4. Input 9 → terbesar=9. Input 6 → 9<6 salah, terbesar tetap 9. Cetak 9.',
  },
  {
    id: 37,
    building: 'B',
    category: 'CRAAP Test',
    source: 'PSAS X',
    type: 'short',
    question:
      'Metode CRAAP Test digunakan untuk menilai kredibilitas sumber informasi melalui lima aspek, yaitu Currency, Relevance, Authority, Accuracy, dan Purpose. Aspek yang digunakan untuk menilai tujuan penulisan informasi, seperti edukasi, hiburan, atau promosi, adalah ....',
    acceptedAnswers: ['purpose', 'tujuan', '目的'],
    displayAnswer: 'Purpose',
    explanation:
      'Purpose (tujuan) pada CRAAP Test mengevaluasi alasan dibuatnya informasi, apakah untuk mengedukasi, menghibur, meyakinkan, atau menjual/promosi.',
  },
  {
    id: 38,
    building: 'B',
    category: 'CRAAP Test',
    source: 'PSAS X',
    type: 'short',
    question:
      'Sinta finds an article about smartphone prices that was published in 2014. She wants to use it as a reference in a report written in 2026. Which CRAAP aspect should she check first to decide whether the article is still suitable? The aspect is ....',
    acceptedAnswers: ['currency', 'kebaruan', '最新性', '適時性'],
    displayAnswer: 'Currency',
    explanation:
      'Currency menilai kebaruan dan ketepatan waktu publikasi informasi. Harga ponsel tahun 2014 sudah usang untuk laporan tahun 2026.',
  },
  {
    id: 39,
    building: 'B',
    category: 'Ekosistem Periksa Fakta',
    source: 'PSAS X',
    type: 'short',
    question:
      'Sebuah organisasi menerima klaim viral bahwa minuman herbal tertentu dapat meningkatkan daya ingat secara drastis. Organisasi itu meneliti klaim tersebut, membandingkannya dengan sumber ilmiah, lalu menerbitkan hasil verifikasinya. Dalam ekosistem periksa fakta, organisasi tersebut berperan sebagai ... informasi.',
    acceptedAnswers: [
      'pemeriksa',
      'verifikator',
      'pemeriksa fakta',
      'pengecek',
      'checker',
      'fact-checker',
      'verifier',
      '検証者',
      'ファクトチェッカー',
    ],
    displayAnswer: 'pemeriksa',
    explanation:
      'Organisasi atau pihak yang meneliti, memverifikasi, dan menerbitkan hasil cek fakta berperan sebagai pemeriksa informasi.',
  },
  {
    id: 40,
    building: 'E',
    category: 'Penelusuran Pseudocode',
    source: 'PSAS X',
    type: 'short',
    visualId: 'pseudocode_8_terbesar',
    question:
      'Perhatikan kembali Pseudocode 8! Pengguna memasukkan N = 3, kemudian memasukkan bilangan -5, -2, dan -9 secara berurutan. Nilai yang dicetak oleh pseudocode tersebut adalah ....',
    acceptedAnswers: ['0', 'nol', 'zero', 'ゼロ', 'れい'],
    displayAnswer: '0',
    explanation:
      'Variabel terbesar diberi nilai awal 0. Ketika bilangan yang masuk -5, -2, dan -9, kondisi "terbesar < bilangan" (0 < -5, 0 < -2, 0 < -9) selalu salah sehingga nilai terbesar tetap 0.',
  },

  // =========================================================================
  // 10 SOAL DARI BANK SOAL BAB 2: DIAGRAM ALIR & PSEUDOCODE (NO. 41–50)
  // =========================================================================
  {
    id: 41,
    building: 'D',
    category: 'Standar Diagram Alir',
    source: 'Bank Soal',
    type: 'single',
    question: 'Simbol standar diagram alir ditetapkan oleh ....',
    options: {
      A: 'Microsoft dan Google',
      B: 'ANSI dan ISO',
      C: 'IEEE dan Intel',
      D: 'Apple dan Samsung',
    },
    answer: 'B',
    explanation:
      'Simbol standar diagram alir (flowchart) ditetapkan oleh ANSI (American National Standards Institute) dan ISO (International Organization for Standardization) agar seragam di seluruh dunia.',
  },
  {
    id: 42,
    building: 'D',
    category: 'Simbol Diagram Alir',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Simbol persegi panjang dengan garis ganda di kedua sisinya melambangkan ....',
    options: {
      A: 'subprogram, yaitu kegiatan atau proses lain yang telah didefinisikan sebelumnya',
      B: 'terminator',
      C: 'percabangan',
      D: 'penghubung dalam halaman',
    },
    answer: 'A',
    explanation:
      'Persegi panjang dengan garis ganda di sisi kiri dan kanan melambangkan subprogram (predefined process) yang merujuk pada proses/fungsi terpisah.',
  },
  {
    id: 43,
    building: 'D',
    category: 'Simbol Diagram Alir',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Simbol lingkaran kecil pada diagram alir digunakan sebagai ....',
    options: {
      A: 'penghubung antarhalaman',
      B: 'penghubung dalam halaman yang sama',
      C: 'terminator',
      D: 'proses',
    },
    answer: 'B',
    explanation:
      'Simbol lingkaran kecil (on-page connector) digunakan sebagai penghubung alur diagram pada halaman yang sama.',
  },
  {
    id: 44,
    building: 'D',
    category: 'Menelusuri Diagram Alir',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Proses membaca dan mengikuti alur langkah dalam diagram alir disebut ....',
    options: {
      A: 'deklarasi',
      B: 'kompilasi',
      C: 'iterasi',
      D: 'penelusuran (tracing)',
    },
    answer: 'D',
    explanation:
      'Penelusuran (tracing) adalah proses membaca dan mengikuti langkah algoritma secara bertahap untuk memahami perilaku dan memastikan kebenaran logikanya.',
  },
  {
    id: 45,
    building: 'D',
    category: 'Tabel Penelusuran',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Tabel penelusuran (trace table) terbagi menjadi tiga bagian, yaitu ....',
    options: {
      A: 'masukan, nilai variabel, dan keluaran',
      B: 'simbol, nama, dan deskripsi',
      C: 'deskripsi, langkah, dan komentar',
      D: 'variabel, array, dan operator',
    },
    answer: 'A',
    explanation:
      'Tabel penelusuran terdiri dari bagian masukan (data awal), nilai variabel (perubahan nilai selama berjalan), dan keluaran (hasil akhir).',
  },
  {
    id: 46,
    building: 'E',
    category: 'Struktur Pseudocode',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Tiga bagian penting dalam penulisan pseudocode adalah ....',
    options: {
      A: 'deskripsi, langkah-langkah, dan komentar',
      B: 'input, proses, dan output',
      C: 'mulai, proses, dan selesai',
      D: 'variabel, array, dan operator',
    },
    answer: 'A',
    explanation:
      'Penulisan pseudocode memiliki tiga bagian penting: deskripsi (tujuan algoritma), langkah-langkah (alur kerja terstruktur), dan komentar (klarifikasi tambahan).',
  },
  {
    id: 47,
    building: 'E',
    category: 'Prinsip Pseudocode',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Proses mengalokasikan ruang memori untuk menyimpan data dalam program disebut ....',
    options: {
      A: 'input-output',
      B: 'operator',
      C: 'deklarasi variabel',
      D: 'array',
    },
    answer: 'C',
    explanation:
      'Deklarasi variabel adalah proses mengalokasikan ruang memori dengan menentukan tipe data dan nama variabelnya.',
  },
  {
    id: 48,
    building: 'E',
    category: 'Array dalam Pseudocode',
    source: 'Bank Soal',
    type: 'single',
    question: 'Array adalah struktur data yang ....',
    options: {
      A: 'hanya menyimpan satu nilai',
      B: 'menyimpan beberapa nilai dengan tipe data yang sama dalam urutan yang terorganisasi',
      C: 'menyimpan gambar saja',
      D: 'menyimpan nilai dengan tipe data berbeda tanpa urutan',
    },
    answer: 'B',
    explanation:
      'Array menyimpan kumpulan beberapa nilai bertipe data sama secara berurutan dan terorganisasi yang diakses melalui indeks.',
  },
  {
    id: 49,
    building: 'E',
    category: 'Operator Pseudocode',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Operator "lebih besar dari" dan "sama dengan" termasuk operator ....',
    options: {
      A: 'aritmetika',
      B: 'logika',
      C: 'array',
      D: 'perbandingan',
    },
    answer: 'D',
    explanation:
      'Operator seperti >, <, >=, <=, dan == digunakan untuk membandingkan dua nilai sehingga termasuk operator perbandingan (relasional).',
  },
  {
    id: 50,
    building: 'E',
    category: 'Perulangan Pseudocode',
    source: 'Bank Soal',
    type: 'single',
    question:
      'Pada pseudocode mencetak bilangan dari awal sampai akhir, perulangan berlangsung selama ....',
    options: {
      A: 'awal > akhir',
      B: 'awal = 0',
      C: 'akhir = 0',
      D: 'awal <= akhir',
    },
    answer: 'D',
    explanation:
      'Perulangan mencetak bilangan dari awal hingga akhir berjalan dengan kondisi WHILE awal <= akhir, lalu nilai awal ditambah 1 setiap putaran.',
  },
];
