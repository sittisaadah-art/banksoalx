export type BuildingCode = 'A' | 'B' | 'C' | 'D' | 'E';
export type OptionLetter = 'A' | 'B' | 'C' | 'D' | 'E';
export type QuestionType = 'single' | 'complex' | 'truefalse' | 'short';
export type TrueFalseChoice = 'Benar' | 'Salah';
export type GameMode = 'adventure' | 'challenge' | 'practice';
export type DifficultyLevel = 'Mudah' | 'Normal' | 'Tantangan';
export type OrnamentType = 'sakura' | 'gazebo' | 'robot' | 'picnic' | 'bench' | 'flowers' | 'infoboard';

export type QuestionVisualId =
  | 'kode_html_program_1'
  | 'gambar1_flowchart_nilai'
  | 'program_code_2'
  | 'pseudocode_1_balok'
  | 'gambar2_flowchart_loop'
  | 'pseudocode_2_swap'
  | 'pseudocode_3_lingkaran'
  | 'gambar3_flowchart_terbesar'
  | 'pseudocode_4_loop_if'
  | 'kata_kunci_rafi'
  | 'kode_program_3'
  | 'gambar4_simbol_flowchart'
  | 'pseudocode_5_pangkat'
  | 'pseudocode_6_average'
  | 'gambar5_web_scraping'
  | 'program_code_4'
  | 'pseudocode_7_fibonacci'
  | 'pseudocode_8_terbesar';

export interface QuestionItem {
  id: number;
  building: BuildingCode;
  category: string;
  source?: 'PSAS X' | 'Bank Soal';
  type: QuestionType;
  visualId?: QuestionVisualId;
  question: string;
  // For 'single' and 'complex' (4 options A-D or 5 options A-E)
  options?: Partial<Record<OptionLetter, string>>;
  // For 'single'
  answer?: OptionLetter;
  // For 'complex' (multiple correct answers)
  complexAnswers?: OptionLetter[];
  // For 'truefalse' (3 statements)
  statements?: string[];
  tfAnswers?: TrueFalseChoice[];
  tfLabels?: [string, string]; // e.g., ['Benar', 'Salah'] or ['True', 'False']
  // For 'short' (fill-in-the-blank)
  acceptedAnswers?: string[];
  displayAnswer?: string;
  explanation: string;
}

export interface AvatarDefinition {
  id: string;
  name: string;
  icon: string;
  desc: string;
  color: string;
}

export interface LevelDefinition {
  level: number;
  title: string;
  minXP: number;
}

export interface CanteenItem {
  id: string;
  name: string;
  icon: string;
  price: number;
  xp: number;
  desc: string;
}

export interface BuildingMeta {
  name: string;
  short: string;
  color: number;
  hex: string;
  pos: { x: number; z: number };
  icon: string;
  desc: string;
}

export interface TeacherConfig {
  gameTitle: string;
  className: string;
  arenaName: string;
  questionLimit: number;
  quizMinutes: number;
  coinReward: number;
  difficulty: DifficultyLevel;
}

export interface AppState {
  playerName: string;
  avatarId: string;
  outfitColor: string;
  playerCount: number;
  coins: number;
  xp: number;
  solvedIds: number[];
  gameMode: GameMode;
  config: TeacherConfig;
}

export interface RekapLogItem {
  timestamp: string;
  playerName: string;
  className: string;
  qNumber: number;
  category: string;
  question: string;
  playerAnswer: string;
  correctAnswer: string;
  status: 'Benar' | 'Salah';
  points: number;
}

export interface LeaderboardEntry {
  name: string;
  className: string;
  avatar: string;
  score: number;
  correct: number;
  total: number;
  coins: number;
  xp: number;
  time: string;
  date: string;
}

export interface CustomOrnament {
  type: OrnamentType;
  x: number;
  z: number;
}

export interface ProximityTarget {
  type: 'building' | 'canteen';
  code?: BuildingCode;
  x: number;
  z: number;
  radius: number;
  title: string;
  desc: string;
  badge: string;
}

export interface QuizResultSummary {
  score: number;
  correct: number;
  wrong: number;
  total: number;
  sessionCoins: number;
  sessionXP: number;
  accuracy: number;
  elapsedSeconds: number;
  predicate: string;
  history: RekapLogItem[];
  filterBuilding: BuildingCode | 'ALL';
  mode: GameMode;
}
