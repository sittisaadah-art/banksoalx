import { BuildingCode, LanguageCode } from '../types/edublox';

export interface LanguageOption {
  code: LanguageCode;
  shortLabel: string;
  name: string;
  flag: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'id', shortLabel: 'ID', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'en', shortLabel: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'ja', shortLabel: 'JP', name: '日本語', flag: '🇯🇵' },
];

export interface UITranslations {
  languageName: string;
  languageLabel: string;
  landing: {
    subjectHeader: string;
    subtitleBadge: string;
    tagline: string;
    startAdventure: string;
    chooseCharacter: string;
    quizChallenge: string;
    practiceMode: string;
    teacherSettings: string;
    scoreRecap: string;
    audioTitle: string;
    buildingsCount: string;
    questionsCount: (n: number) => string;
  };
  hud: {
    modeLabels: Record<'adventure' | 'challenge' | 'practice', string>;
    coinsUnit: string;
    questionsUnit: string;
    quizAllBtn: (n: number) => string;
    canteenBtn: string;
    rankingBtn: string;
    recapBtn: string;
    teacherBtn: string;
    homeTitle: string;
    canteenPromptBadge: string;
    canteenPromptTitle: string;
    canteenPromptDesc: string;
    openCanteenBtn: string;
    startBuildingQuizBtn: string;
    joystickLabel: string;
    showControls: string;
    hideControls: string;
    plazaBtn: string;
    canteenShortBtn: string;
    cameraLabel: string;
    camLeft: string;
    camRight: string;
    camFocus: string;
    avatarMultiBtn: string;
    jumpBtn: string;
    buildingPrefix: string;
  };
  buildings: Record<
    BuildingCode,
    { name: string; shortLabel: string; badge: string; desc: string }
  >;
  levels: Record<number, string>;
  avatars: Record<string, string>;
  canteen: {
    title: string;
    subtitle: string;
    coinsLabel: string;
    buyBtn: (price: number) => string;
    items: Record<string, { name: string; desc: string }>;
  };
  character: {
    title: string;
    subtitle: string;
    playerNameLabel: string;
    playerNamePlaceholder: string;
    outfitColorLabel: string;
    playerCountLabel: string;
    soloLabel: string;
    controlsHint: string;
    avatarListLabel: string;
    languageSectionLabel: string;
    saveBtn: string;
  };
  leaderboard: {
    title: string;
    subtitle: string;
    empty: string;
    correctSummary: (correct: number, total: number) => string;
  };
  rekap: {
    title: string;
    subtitle: string;
    exportCsv: string;
    exportJson: string;
    copyTable: string;
    resetLog: string;
    totalActivity: string;
    correctAnswers: string;
    wrongAnswers: string;
    avgScore: string;
    accuracy: string;
    empty: string;
    colTime: string;
    colPlayer: string;
    colClass: string;
    colNo: string;
    colCategory: string;
    colQuestion: string;
    colAnswer: string;
    colKey: string;
    colStatus: string;
    colPoints: string;
    statusCorrect: string;
    statusWrong: string;
  };
  quiz: {
    buildingLabel: (code: BuildingCode) => string;
    typeLabels: {
      single: string;
      complex: string;
      truefalse: string;
      short: string;
    };
    modeBadges: Record<'adventure' | 'challenge' | 'practice', string>;
    unlimitedTime: string;
    questionOf: (current: number, total: number) => string;
    complexHint: (count: number) => string;
    statementHeader: string;
    tfDefaultLabels: [string, string];
    shortLabel: string;
    shortPlaceholder: string;
    backToCity: string;
    submitBtn: string;
    viewResultBtn: string;
    nextQuestionBtn: string;
    correctFeedbackTitle: (coin: number, xp: number, bonus: string) => string;
    wrongFeedbackTitle: (key: string) => string;
    explanationPrefix: string;
    warnSelectSingle: string;
    warnSelectComplex: string;
    warnSelectTF: string;
    warnEnterShort: string;
    bonus5Msg: string;
    bonus10Msg: string;
    predicates: {
      champion: string;
      genius: string;
      smart: string;
      apprentice: string;
      keepLearning: string;
    };
  };
  result: {
    headerBadge: string;
    title: string;
    finalScore: string;
    correctWrong: string;
    sessionCoinsXp: string;
    accuracyTime: string;
    playerLabel: string;
    avatarLabel: string;
    levelLabel: string;
    totalQuestionsLabel: string;
    playAgainBtn: string;
    reviewBtn: string;
    downloadBtn: string;
    toCityBtn: string;
    reviewTitle: string;
    yourAnswer: string;
    keyAnswer: string;
  };
  toasts: {
    languageChanged: (langName: string) => string;
    audioOn: string;
    audioOff: string;
    welcomeAdventure: (name: string) => string;
    levelUp: (level: number, title: string) => string;
    characterSaved: (name: string) => string;
    notEnoughCoins: string;
    boughtItem: (name: string, xp: number) => string;
    teleportTo: (label: string) => string;
    plazaLabel: string;
    canteenLabel: string;
    buildingLabel: (code: BuildingCode) => string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, UITranslations> = {
  id: {
    languageName: 'Bahasa Indonesia',
    languageLabel: 'Bahasa',
    landing: {
      subjectHeader: 'Mata Pelajaran Informatika',
      subtitleBadge: 'Mata Pelajaran Informatika · Kelas X SMA · By Sitty',
      tagline: 'Petualangan Seru Menjelajahi Dunia Informatika',
      startAdventure: 'MULAI PETUALANGAN',
      chooseCharacter: 'PILIH KARAKTER',
      quizChallenge: 'QUIZ CHALLENGE',
      practiceMode: 'PRACTICE MODE',
      teacherSettings: 'PENGATURAN GURU',
      scoreRecap: 'Rekap Nilai',
      audioTitle: 'Musik & Suara',
      buildingsCount: '5 Gedung Pembelajaran',
      questionsCount: (n) => `${n} Soal Interaktif`,
    },
    hud: {
      modeLabels: {
        adventure: 'Mode Petualangan Kota',
        challenge: 'Quiz Challenge',
        practice: 'Practice Mode',
      },
      coinsUnit: 'Koin',
      questionsUnit: 'Soal',
      quizAllBtn: (n) => `Kuis ${n} Soal`,
      canteenBtn: 'Kantin',
      rankingBtn: 'Ranking',
      recapBtn: 'Rekap',
      teacherBtn: 'Guru',
      homeTitle: 'Menu Utama',
      canteenPromptBadge: 'KANTIN & ENERGI',
      canteenPromptTitle: 'Kantin Edublox By Sitty',
      canteenPromptDesc: 'Belanja makanan & minuman lezat memakai koin kuis untuk bonus XP!',
      openCanteenBtn: 'BUKA KANTIN EDUBLOX',
      startBuildingQuizBtn: 'MULAI KUIS GEDUNG INI',
      joystickLabel: 'WASD / GERAK',
      showControls: 'Tampilkan Navigasi & Kamera',
      hideControls: 'Sembunyikan Kontrol',
      plazaBtn: '🏛️ Plaza',
      canteenShortBtn: '🍔 Kantin',
      cameraLabel: 'Kamera 360°:',
      camLeft: 'Kiri',
      camRight: 'Kanan',
      camFocus: 'Fokus',
      avatarMultiBtn: 'Avatar & P1–P4',
      jumpBtn: 'LOMPAT',
      buildingPrefix: 'Gd.',
    },
    buildings: {
      A: {
        name: 'Gedung A – Mesin Pencari & Operator',
        shortLabel: 'Gd. A',
        badge: 'GEDUNG A • MATERI INFORMATIKA',
        desc: 'Mesin Pencari, Operator & Google Lens',
      },
      B: {
        name: 'Gedung B – Evaluasi & Literasi Digital',
        shortLabel: 'Gd. B',
        badge: 'GEDUNG B • MATERI INFORMATIKA',
        desc: 'CRAAP Test, Lateral Reading & Cek Fakta',
      },
      C: {
        name: 'Gedung C – Web Scraping & Python Lab',
        shortLabel: 'Gd. C',
        badge: 'GEDUNG C • MATERI INFORMATIKA',
        desc: 'Requests, BeautifulSoup, HTML & Colab',
      },
      D: {
        name: 'Gedung D – Algoritma & Diagram Alir',
        shortLabel: 'Gd. D',
        badge: 'GEDUNG D • MATERI INFORMATIKA',
        desc: 'Simbol Flowchart ANSI/ISO & Penelusuran',
      },
      E: {
        name: 'Gedung E – Pseudocode & Pemrograman',
        shortLabel: 'Gd. E',
        badge: 'GEDUNG E • MATERI INFORMATIKA',
        desc: 'Variabel, Array, Operator & Tracing',
      },
    },
    levels: {
      1: 'New Explorer',
      2: 'Search Navigator',
      3: 'Fact Checker',
      4: 'Web Scraper',
      5: 'Flowchart Architect',
      6: 'Algorithm Master',
    },
    avatars: {
      raja: 'Mahkota Emas',
      neko: 'Telinga Kucing',
      kapten: 'Antena Angkasa',
      knight: 'Kostum Hijau',
      wizard: 'Topi Penyihir',
      noob: 'Blocky Klasik',
    },
    canteen: {
      title: '🍔 Kantin Edublox By Sitty',
      subtitle: 'Tukarkan koin belajarmu dengan jajanan lezat untuk bonus XP!',
      coinsLabel: 'Koin',
      buyBtn: (price) => `Beli (${price} 🪙)`,
      items: {
        esteh: { name: 'Es Teh Manis', desc: 'Segar setelah mikir algoritma!' },
        burger: { name: 'Burger Blox', desc: 'Energi ekstra menjelajah kota!' },
        pizza: { name: 'Pizza Voxel', desc: 'Lezatnya bikin fokus kuis!' },
        donat: { name: 'Donat Pelangi', desc: 'Manis ceria ala Edublox!' },
        eskrim: { name: 'Es Krim Sundae', desc: 'Dingin menyegarkan pikiran!' },
        bakso: { name: 'Bakso Spesial', desc: 'Hangat & mengenyangkan!' },
      },
    },
    character: {
      title: 'Kustomisasi Karakter & Multi-Player',
      subtitle: 'EDUBLOX – INFORMATICS ADVENTURE CITY · By Sitty',
      playerNameLabel: 'Nama Pemain Utama (P1)',
      playerNamePlaceholder: 'Masukkan nama kamu...',
      outfitColorLabel: 'Warna Pakaian Utama',
      playerCountLabel: 'Jumlah Pemain Satu Layar (Multi-Player)',
      soloLabel: '1P (Solo)',
      controlsHint: 'P1: WASD + Spasi · P2: Arrow Keys + Right Shift · P3 & P4: Pendamping Kota Aktif.',
      avatarListLabel: 'Pilih 1 dari 6 Avatar Lucu',
      languageSectionLabel: 'Bahasa Game & Soal (Siswa)',
      saveBtn: 'SIMPAN & MASUK KOTA',
    },
    leaderboard: {
      title: 'Leaderboard Juara Edublox',
      subtitle: 'Peringkat Explorer Terbaik Informatika · By Sitty',
      empty: 'Belum ada catatan skor selesai. Ayo selesaikan kuis pertamamu!',
      correctSummary: (c, t) => `Benar ${c}/${t}`,
    },
    rekap: {
      title: '📊 Rekap Nilai Otomatis – Informatika',
      subtitle: 'EDUBLOX – INFORMATICS ADVENTURE CITY · By Sitty',
      exportCsv: 'Download CSV',
      exportJson: 'Download JSON',
      copyTable: 'Salin Tabel',
      resetLog: 'Reset Log',
      totalActivity: 'Total Aktivitas',
      correctAnswers: 'Jawaban Benar',
      wrongAnswers: 'Jawaban Salah',
      avgScore: 'Rata-Rata Nilai',
      accuracy: 'Akurasi',
      empty: 'Belum ada aktivitas jawaban tercatat.',
      colTime: 'Waktu',
      colPlayer: 'Pemain',
      colClass: 'Kelas',
      colNo: 'No',
      colCategory: 'Kategori Materi',
      colQuestion: 'Pertanyaan',
      colAnswer: 'Jawab',
      colKey: 'Kunci',
      colStatus: 'Status',
      colPoints: 'Poin',
      statusCorrect: 'Benar',
      statusWrong: 'Salah',
    },
    quiz: {
      buildingLabel: (code) => `Gedung ${code}`,
      typeLabels: {
        single: 'Pilihan Ganda',
        complex: 'Pilihan Ganda Kompleks (>1 Jawaban)',
        truefalse: 'Benar / Salah (3 Pernyataan)',
        short: 'Isian Singkat',
      },
      modeBadges: {
        adventure: 'Petualangan Kota',
        challenge: 'Quiz Challenge',
        practice: 'Practice Mode',
      },
      unlimitedTime: 'Tanpa Batas',
      questionOf: (curr, total) => `Soal Nomor ${curr} dari ${total}`,
      complexHint: (count) => `Pilih semua pernyataan yang benar (${count} dipilih):`,
      statementHeader: 'Pernyataan',
      tfDefaultLabels: ['Benar', 'Salah'],
      shortLabel: 'Ketik Jawaban Singkat Kamu:',
      shortPlaceholder: 'Tulis jawaban di sini...',
      backToCity: 'KEMBALI KE KOTA',
      submitBtn: 'JAWAB',
      viewResultBtn: 'LIHAT HASIL AKHIR',
      nextQuestionBtn: 'SOAL BERIKUTNYA',
      correctFeedbackTitle: (coin, xp, bonus) => `BENAR! (+${coin} Koin, +${xp} XP)${bonus}`,
      wrongFeedbackTitle: (key) => `BELUM TEPAT · Kunci Jawaban: ${key}`,
      explanationPrefix: 'Pembahasan:',
      warnSelectSingle: '⚠️ Pilih salah satu jawaban terlebih dahulu!',
      warnSelectComplex: '⚠️ Pilih minimal satu jawaban yang benar!',
      warnSelectTF: '⚠️ Tentukan Benar atau Salah untuk seluruh pernyataan!',
      warnEnterShort: '⚠️ Ketik jawaban singkat kamu terlebih dahulu!',
      bonus5Msg: ' +25 Bonus Koin (5 Soal)!',
      bonus10Msg: ' +100 Bonus XP (10 Soal)!',
      predicates: {
        champion: '🏆 Informatics Champion',
        genius: '🌟 Genius Explorer',
        smart: '💡 Smart Thinker',
        apprentice: '📊 Data Apprentice',
        keepLearning: '📘 Keep Learning',
      },
    },
    result: {
      headerBadge: 'EDUBLOX – INFORMATIKA · HASIL PETUALANGAN · BY SITTY',
      title: 'PETUALANGAN SELESAI!',
      finalScore: 'Nilai Akhir',
      correctWrong: 'Benar / Salah',
      sessionCoinsXp: 'Koin & XP Sesi',
      accuracyTime: 'Akurasi & Waktu',
      playerLabel: 'Pemain:',
      avatarLabel: 'Avatar:',
      levelLabel: 'Level:',
      totalQuestionsLabel: 'Total Soal:',
      playAgainBtn: 'MAIN LAGI',
      reviewBtn: 'PEMBAHASAN',
      downloadBtn: 'DOWNLOAD HASIL',
      toCityBtn: 'KE KOTA',
      reviewTitle: 'Pembahasan Jawaban Sesi Ini',
      yourAnswer: 'Jawabanmu:',
      keyAnswer: 'Kunci:',
    },
    toasts: {
      languageChanged: (langName) => `🌐 Bahasa game diubah ke ${langName}`,
      audioOn: '🔊 Musik & Efek Suara AKTIF',
      audioOff: '🔇 Suara NONAKTIF',
      welcomeAdventure: (name) =>
        `Selamat datang di Edublox, ${name}! Jelajahi 5 gedung materi!`,
      levelUp: (level, title) =>
        `🎉 NAIK LEVEL! Sekarang kamu Level ${level}: ${title}!`,
      characterSaved: (name) => `✅ Karakter ${name} siap bertualang!`,
      notEnoughCoins: '🪙 Koin belum cukup! Jawab kuis untuk mengumpulkan koin.',
      boughtItem: (name, xp) => `😋 Nyam! Membeli ${name} (+${xp} XP)!`,
      teleportTo: (label) => `🚀 Teleportasi menuju ${label}!`,
      plazaLabel: 'Plaza Utama',
      canteenLabel: 'Kantin Edublox',
      buildingLabel: (code) => `Gedung ${code}`,
    },
  },

  en: {
    languageName: 'English',
    languageLabel: 'Language',
    landing: {
      subjectHeader: 'Informatics Subject',
      subtitleBadge: 'Informatics · Grade X High School · By Sitty',
      tagline: 'An Exciting 3D Adventure Exploring the World of Informatics',
      startAdventure: 'START ADVENTURE',
      chooseCharacter: 'CHOOSE CHARACTER',
      quizChallenge: 'QUIZ CHALLENGE',
      practiceMode: 'PRACTICE MODE',
      teacherSettings: 'TEACHER SETTINGS',
      scoreRecap: 'Score Recap',
      audioTitle: 'Music & Sound',
      buildingsCount: '5 Learning Buildings',
      questionsCount: (n) => `${n} Interactive Questions`,
    },
    hud: {
      modeLabels: {
        adventure: 'City Adventure Mode',
        challenge: 'Quiz Challenge',
        practice: 'Practice Mode',
      },
      coinsUnit: 'Coins',
      questionsUnit: 'Qs',
      quizAllBtn: (n) => `Quiz (${n} Qs)`,
      canteenBtn: 'Canteen',
      rankingBtn: 'Ranking',
      recapBtn: 'Recap',
      teacherBtn: 'Teacher',
      homeTitle: 'Main Menu',
      canteenPromptBadge: 'CANTEEN & ENERGY',
      canteenPromptTitle: 'Edublox Canteen By Sitty',
      canteenPromptDesc: 'Spend quiz coins on tasty snacks and drinks for bonus XP!',
      openCanteenBtn: 'OPEN EDUBLOX CANTEEN',
      startBuildingQuizBtn: 'START THIS BUILDING QUIZ',
      joystickLabel: 'WASD / MOVE',
      showControls: 'Show Navigation & Camera',
      hideControls: 'Hide Controls',
      plazaBtn: '🏛️ Plaza',
      canteenShortBtn: '🍔 Canteen',
      cameraLabel: '360° Camera:',
      camLeft: 'Left',
      camRight: 'Right',
      camFocus: 'Focus',
      avatarMultiBtn: 'Avatar & P1–P4',
      jumpBtn: 'JUMP',
      buildingPrefix: 'Bldg.',
    },
    buildings: {
      A: {
        name: 'Building A – Search Engines & Operators',
        shortLabel: 'Bldg. A',
        badge: 'BUILDING A • INFORMATICS TOPIC',
        desc: 'Search Engines, Operators & Google Lens',
      },
      B: {
        name: 'Building B – Digital Literacy & Evaluation',
        shortLabel: 'Bldg. B',
        badge: 'BUILDING B • INFORMATICS TOPIC',
        desc: 'CRAAP Test, Lateral Reading & Fact-Checking',
      },
      C: {
        name: 'Building C – Web Scraping & Python Lab',
        shortLabel: 'Bldg. C',
        badge: 'BUILDING C • INFORMATICS TOPIC',
        desc: 'Requests, BeautifulSoup, HTML & Colab',
      },
      D: {
        name: 'Building D – Algorithms & Flowcharts',
        shortLabel: 'Bldg. D',
        badge: 'BUILDING D • INFORMATICS TOPIC',
        desc: 'ANSI/ISO Flowchart Symbols & Tracing',
      },
      E: {
        name: 'Building E – Pseudocode & Programming',
        shortLabel: 'Bldg. E',
        badge: 'BUILDING E • INFORMATICS TOPIC',
        desc: 'Variables, Arrays, Operators & Tracing',
      },
    },
    levels: {
      1: 'New Explorer',
      2: 'Search Navigator',
      3: 'Fact Checker',
      4: 'Web Scraper',
      5: 'Flowchart Architect',
      6: 'Algorithm Master',
    },
    avatars: {
      raja: 'Golden Crown',
      neko: 'Cat Ears',
      kapten: 'Space Antenna',
      knight: 'Emerald Suit',
      wizard: 'Wizard Hat',
      noob: 'Classic Blocky',
    },
    canteen: {
      title: '🍔 Edublox Canteen By Sitty',
      subtitle: 'Trade your study coins for delicious treats and earn bonus XP!',
      coinsLabel: 'Coins',
      buyBtn: (price) => `Buy (${price} 🪙)`,
      items: {
        esteh: { name: 'Sweet Iced Tea', desc: 'Refreshing after solving algorithms!' },
        burger: { name: 'Blox Burger', desc: 'Extra energy to explore the city!' },
        pizza: { name: 'Voxel Pizza', desc: 'Delicious fuel for quiz focus!' },
        donat: { name: 'Rainbow Donut', desc: 'Sweet and cheerful Edublox treat!' },
        eskrim: { name: 'Ice Cream Sundae', desc: 'Cool treat to refresh your mind!' },
        bakso: { name: 'Special Meatball Soup', desc: 'Warm and filling meal!' },
      },
    },
    character: {
      title: 'Character Customization & Multi-Player',
      subtitle: 'EDUBLOX – INFORMATICS ADVENTURE CITY · By Sitty',
      playerNameLabel: 'Main Player Name (P1)',
      playerNamePlaceholder: 'Enter your name...',
      outfitColorLabel: 'Main Outfit Color',
      playerCountLabel: 'Number of Local Players (Multi-Player)',
      soloLabel: '1P (Solo)',
      controlsHint: 'P1: WASD + Space · P2: Arrow Keys + Right Shift · P3 & P4: Active City Companions.',
      avatarListLabel: 'Pick 1 of 6 Cute Avatars',
      languageSectionLabel: 'Game & Question Language (Student)',
      saveBtn: 'SAVE & ENTER CITY',
    },
    leaderboard: {
      title: 'Edublox Champions Leaderboard',
      subtitle: 'Top Informatics Explorers Ranking · By Sitty',
      empty: 'No completed scores yet. Finish your first quiz to appear here!',
      correctSummary: (c, t) => `${c}/${t} correct`,
    },
    rekap: {
      title: '📊 Automatic Score Recap – Informatics',
      subtitle: 'EDUBLOX – INFORMATICS ADVENTURE CITY · By Sitty',
      exportCsv: 'Download CSV',
      exportJson: 'Download JSON',
      copyTable: 'Copy Table',
      resetLog: 'Reset Log',
      totalActivity: 'Total Activity',
      correctAnswers: 'Correct',
      wrongAnswers: 'Wrong',
      avgScore: 'Average Score',
      accuracy: 'Accuracy',
      empty: 'No answer activity recorded yet.',
      colTime: 'Time',
      colPlayer: 'Player',
      colClass: 'Class',
      colNo: 'No',
      colCategory: 'Topic',
      colQuestion: 'Question',
      colAnswer: 'Answer',
      colKey: 'Key',
      colStatus: 'Status',
      colPoints: 'Points',
      statusCorrect: 'Correct',
      statusWrong: 'Wrong',
    },
    quiz: {
      buildingLabel: (code) => `Building ${code}`,
      typeLabels: {
        single: 'Multiple Choice',
        complex: 'Complex Multiple Choice (>1 Answer)',
        truefalse: 'True / False (3 Statements)',
        short: 'Short Answer',
      },
      modeBadges: {
        adventure: 'City Adventure',
        challenge: 'Quiz Challenge',
        practice: 'Practice Mode',
      },
      unlimitedTime: 'Unlimited',
      questionOf: (curr, total) => `Question ${curr} of ${total}`,
      complexHint: (count) => `Select all correct statements (${count} selected):`,
      statementHeader: 'Statement',
      tfDefaultLabels: ['True', 'False'],
      shortLabel: 'Type Your Short Answer:',
      shortPlaceholder: 'Write your answer here...',
      backToCity: 'BACK TO CITY',
      submitBtn: 'SUBMIT',
      viewResultBtn: 'VIEW FINAL RESULT',
      nextQuestionBtn: 'NEXT QUESTION',
      correctFeedbackTitle: (coin, xp, bonus) => `CORRECT! (+${coin} Coins, +${xp} XP)${bonus}`,
      wrongFeedbackTitle: (key) => `NOT QUITE · Answer Key: ${key}`,
      explanationPrefix: 'Explanation:',
      warnSelectSingle: '⚠️ Please choose one answer first!',
      warnSelectComplex: '⚠️ Please select at least one correct answer!',
      warnSelectTF: '⚠️ Choose True or False for every statement!',
      warnEnterShort: '⚠️ Please type your short answer first!',
      bonus5Msg: ' +25 Bonus Coins (5 Qs)!',
      bonus10Msg: ' +100 Bonus XP (10 Qs)!',
      predicates: {
        champion: '🏆 Informatics Champion',
        genius: '🌟 Genius Explorer',
        smart: '💡 Smart Thinker',
        apprentice: '📊 Data Apprentice',
        keepLearning: '📘 Keep Learning',
      },
    },
    result: {
      headerBadge: 'EDUBLOX – INFORMATICS · ADVENTURE RESULT · BY SITTY',
      title: 'ADVENTURE COMPLETE!',
      finalScore: 'Final Score',
      correctWrong: 'Correct / Wrong',
      sessionCoinsXp: 'Session Coins & XP',
      accuracyTime: 'Accuracy & Time',
      playerLabel: 'Player:',
      avatarLabel: 'Avatar:',
      levelLabel: 'Level:',
      totalQuestionsLabel: 'Total Questions:',
      playAgainBtn: 'PLAY AGAIN',
      reviewBtn: 'REVIEW',
      downloadBtn: 'DOWNLOAD RESULT',
      toCityBtn: 'TO CITY',
      reviewTitle: 'Answer Review for This Session',
      yourAnswer: 'Your Answer:',
      keyAnswer: 'Key:',
    },
    toasts: {
      languageChanged: (langName) => `🌐 Game language switched to ${langName}`,
      audioOn: '🔊 Music & Sound Effects ON',
      audioOff: '🔇 Sound OFF',
      welcomeAdventure: (name) =>
        `Welcome to Edublox, ${name}! Explore all 5 learning buildings!`,
      levelUp: (level, title) => `🎉 LEVEL UP! You are now Level ${level}: ${title}!`,
      characterSaved: (name) => `✅ Character ${name} is ready for adventure!`,
      notEnoughCoins: '🪙 Not enough coins! Answer quiz questions to earn coins.',
      boughtItem: (name, xp) => `😋 Yummy! Bought ${name} (+${xp} XP)!`,
      teleportTo: (label) => `🚀 Teleporting to ${label}!`,
      plazaLabel: 'Main Plaza',
      canteenLabel: 'Edublox Canteen',
      buildingLabel: (code) => `Building ${code}`,
    },
  },

  ja: {
    languageName: '日本語',
    languageLabel: '言語',
    landing: {
      subjectHeader: '情報科 (Informatics)',
      subtitleBadge: '情報科 · 高校1年生 (Kelas X) · By Sitty',
      tagline: '3Dシティを探検しながら楽しく学ぶ情報の冒険！',
      startAdventure: '冒険をはじめる',
      chooseCharacter: 'キャラ設定',
      quizChallenge: 'クイズチャレンジ',
      practiceMode: '練習モード',
      teacherSettings: '先生用設定',
      scoreRecap: '成績記録',
      audioTitle: '音楽・効果音',
      buildingsCount: '5つの学習ビル',
      questionsCount: (n) => `全${n}問のインタラクティブ問題`,
    },
    hud: {
      modeLabels: {
        adventure: 'シティ冒険モード',
        challenge: 'クイズチャレンジ',
        practice: '練習モード',
      },
      coinsUnit: 'コイン',
      questionsUnit: '問',
      quizAllBtn: (n) => `全${n}問クイズ`,
      canteenBtn: '食堂',
      rankingBtn: 'ランキング',
      recapBtn: '成績記録',
      teacherBtn: '先生',
      homeTitle: 'メインメニュー',
      canteenPromptBadge: '食堂 ＆ エネルギー',
      canteenPromptTitle: 'エデュブロックス食堂 By Sitty',
      canteenPromptDesc: 'クイズで集めたコインでおやつを買ってボーナスXPをゲット！',
      openCanteenBtn: '食堂をひらく',
      startBuildingQuizBtn: 'このビルのクイズを開始',
      joystickLabel: 'WASD / 移動',
      showControls: '操作・カメラを表示',
      hideControls: '操作パネルを隠す',
      plazaBtn: '🏛️ 広場',
      canteenShortBtn: '🍔 食堂',
      cameraLabel: '360°カメラ:',
      camLeft: '左',
      camRight: '右',
      camFocus: '正面',
      avatarMultiBtn: 'アバター & P1–P4',
      jumpBtn: 'ジャンプ',
      buildingPrefix: 'ビル',
    },
    buildings: {
      A: {
        name: 'A棟 – 検索エンジンと演算子',
        shortLabel: 'A棟',
        badge: 'A棟 • 情報科トピック',
        desc: '検索エンジン・検索演算子・Googleレンズ',
      },
      B: {
        name: 'B棟 – 情報評価とデジタルリテラシー',
        shortLabel: 'B棟',
        badge: 'B棟 • 情報科トピック',
        desc: 'CRAAPテスト・水平読み・ファクトチェック',
      },
      C: {
        name: 'C棟 – Webスクレイピング & Pythonラボ',
        shortLabel: 'C棟',
        badge: 'C棟 • 情報科トピック',
        desc: 'Requests・BeautifulSoup・HTML・Colab',
      },
      D: {
        name: 'D棟 – アルゴリズムとフローチャート',
        shortLabel: 'D棟',
        badge: 'D棟 • 情報科トピック',
        desc: 'ANSI/ISO記号とトレース演習',
      },
      E: {
        name: 'E棟 – 擬似コードとプログラミング基礎',
        shortLabel: 'E棟',
        badge: 'E棟 • 情報科トピック',
        desc: '変数・配列・演算子・トレース',
      },
    },
    levels: {
      1: 'New Explorer',
      2: 'Search Navigator',
      3: 'Fact Checker',
      4: 'Web Scraper',
      5: 'Flowchart Architect',
      6: 'Algorithm Master',
    },
    avatars: {
      raja: '黄金の王冠',
      neko: 'ネコ耳',
      kapten: '宇宙アンテナ',
      knight: 'エメラルド鎧',
      wizard: '魔法使いの帽子',
      noob: 'クラシックブロック',
    },
    canteen: {
      title: '🍔 エデュブロックス食堂 By Sitty',
      subtitle: '学習コインでおいしい軽食を買ってボーナスXPを手に入れよう！',
      coinsLabel: 'コイン',
      buyBtn: (price) => `購入 (${price} 🪙)`,
      items: {
        esteh: { name: '甘いアイスティー', desc: 'アルゴリズムを考えた後にぴったり！' },
        burger: { name: 'ブロックスバーガー', desc: '街を探検するためのパワーチャージ！' },
        pizza: { name: 'ボクセルピザ', desc: 'クイズの集中力アップに最適！' },
        donat: { name: 'レインボードーナツ', desc: '甘くてハッピーな特製スイーツ！' },
        eskrim: { name: 'アイスクリームサンデー', desc: 'ひんやり頭をリフレッシュ！' },
        bakso: { name: '特製肉団子スープ', desc: '温かくてお腹もいっぱい！' },
      },
    },
    character: {
      title: 'キャラクター設定 ＆ マルチプレイ',
      subtitle: 'EDUBLOX – INFORMATICS ADVENTURE CITY · By Sitty',
      playerNameLabel: 'メインプレイヤー名 (P1)',
      playerNamePlaceholder: '名前を入力...',
      outfitColorLabel: 'メイン衣装カラー',
      playerCountLabel: '同時プレイ人数 (マルチプレイ)',
      soloLabel: '1人 (ソロ)',
      controlsHint: 'P1: WASD + Space · P2: 矢印キー + Right Shift · P3 & P4: サポート仲間。',
      avatarListLabel: '6種類のアバターから選択',
      languageSectionLabel: 'ゲーム・問題の表示言語 (生徒用)',
      saveBtn: '保存して街へ入る',
    },
    leaderboard: {
      title: 'エデュブロックス ランキング',
      subtitle: '情報科トップ探検家ランキング · By Sitty',
      empty: 'まだ記録がありません。最初のクイズをクリアしよう！',
      correctSummary: (c, t) => `正解 ${c}/${t}`,
    },
    rekap: {
      title: '📊 自動成績レポート – 情報科',
      subtitle: 'EDUBLOX – INFORMATICS ADVENTURE CITY · By Sitty',
      exportCsv: 'CSV出力',
      exportJson: 'JSON出力',
      copyTable: '表をコピー',
      resetLog: 'ログ消去',
      totalActivity: '総解答数',
      correctAnswers: '正解数',
      wrongAnswers: '不正解数',
      avgScore: '平均点',
      accuracy: '正答率',
      empty: 'まだ解答履歴がありません。',
      colTime: '日時',
      colPlayer: 'プレイヤー',
      colClass: 'クラス',
      colNo: '番号',
      colCategory: '分野',
      colQuestion: '問題文',
      colAnswer: '解答',
      colKey: '正解',
      colStatus: '判定',
      colPoints: '得点',
      statusCorrect: '正解',
      statusWrong: '不正解',
    },
    quiz: {
      buildingLabel: (code) => `${code}棟`,
      typeLabels: {
        single: '単一選択問題',
        complex: '複数選択問題（複数正解）',
        truefalse: '正誤問題（3つの文）',
        short: '記述・短答問題',
      },
      modeBadges: {
        adventure: 'シティ冒険',
        challenge: 'クイズチャレンジ',
        practice: '練習モード',
      },
      unlimitedTime: '時間無制限',
      questionOf: (curr, total) => `第 ${curr} 問 / 全 ${total} 問`,
      complexHint: (count) => `正しい文をすべて選んでください（${count}個選択中）:`,
      statementHeader: '記述',
      tfDefaultLabels: ['正しい', '誤り'],
      shortLabel: '答えを入力してください:',
      shortPlaceholder: 'ここに答えを入力...',
      backToCity: '街にもどる',
      submitBtn: '解答する',
      viewResultBtn: '最終結果を見る',
      nextQuestionBtn: '次の問題へ',
      correctFeedbackTitle: (coin, xp, bonus) => `正解！ (+${coin} コイン, +${xp} XP)${bonus}`,
      wrongFeedbackTitle: (key) => `惜しい！ · 正解: ${key}`,
      explanationPrefix: '解説:',
      warnSelectSingle: '⚠️ 選択肢を1つ選んでください！',
      warnSelectComplex: '⚠️ 正しいと思う選択肢を1つ以上選んでください！',
      warnSelectTF: '⚠️ すべての文について正誤を選んでください！',
      warnEnterShort: '⚠️ 答えを入力してください！',
      bonus5Msg: ' +25 ボーナスコイン (5問達成)!',
      bonus10Msg: ' +100 ボーナスXP (10問達成)!',
      predicates: {
        champion: '🏆 情報マスター',
        genius: '🌟 天才エクスプローラー',
        smart: '💡 スマートシンカー',
        apprentice: '📊 データ見習い',
        keepLearning: '📘 さらに学ぼう',
      },
    },
    result: {
      headerBadge: 'EDUBLOX – 情報科 · 冒険結果 · BY SITTY',
      title: '冒険クリア！',
      finalScore: '最終スコア',
      correctWrong: '正解 / 不正解',
      sessionCoinsXp: '獲得コイン & XP',
      accuracyTime: '正答率 & タイム',
      playerLabel: 'プレイヤー:',
      avatarLabel: 'アバター:',
      levelLabel: 'レベル:',
      totalQuestionsLabel: '出題数:',
      playAgainBtn: 'もう一度',
      reviewBtn: '解説を見る',
      downloadBtn: '結果を保存',
      toCityBtn: '街へ戻る',
      reviewTitle: '今回の解答レビュー',
      yourAnswer: 'あなたの解答:',
      keyAnswer: '正解:',
    },
    toasts: {
      languageChanged: (langName) => `🌐 表示言語を「${langName}」に変更しました`,
      audioOn: '🔊 BGM・効果音 ON',
      audioOff: '🔇 サウンド OFF',
      welcomeAdventure: (name) =>
        `エデュブロックスへようこそ、${name}さん！5つの学習ビルを探検しよう！`,
      levelUp: (level, title) => `🎉 レベルアップ！ Lv.${level}: ${title} になりました！`,
      characterSaved: (name) => `✅ ${name} のキャラクター設定を保存しました！`,
      notEnoughCoins: '🪙 コインが足りません！クイズに答えてコインを集めよう。',
      boughtItem: (name, xp) => `😋 おいしい！${name} を購入しました (+${xp} XP)！`,
      teleportTo: (label) => `🚀 ${label} へテレポート！`,
      plazaLabel: '中央広場',
      canteenLabel: 'エデュブロックス食堂',
      buildingLabel: (code) => `${code}棟`,
    },
  },
};

export function getTranslations(lang: LanguageCode): UITranslations {
  return TRANSLATIONS[lang] || TRANSLATIONS.id;
}
