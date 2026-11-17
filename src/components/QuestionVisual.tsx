import { QuestionVisualId } from '../types/edublox';

interface QuestionVisualProps {
  visualId: QuestionVisualId;
}

export function QuestionVisual({ visualId }: QuestionVisualProps) {
  if (visualId === 'kode_html_program_1') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs space-y-3">
        <div>
          <div className="font-bold text-slate-700 mb-1.5 text-center">
            Kode HTML 1. Potongan halaman web daftar buku
          </div>
          <pre className="max-w-xl mx-auto bg-slate-900 text-sky-300 font-mono text-[11px] sm:text-xs p-3 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`<div class="item">
  <span class="nama">Buku Pemrograman Dasar</span>
  <span class="harga">45000</span>
</div>
<div class="item">
  <span class="nama">Buku Desain Grafis</span>
  <span class="harga">52000</span>
</div>`}
          </pre>
        </div>

        <div>
          <div className="font-bold text-slate-700 mb-1.5 text-center">
            Kode Program 1. Mengambil harga buku dari halaman web
          </div>
          <pre className="max-w-xl mx-auto bg-slate-900 text-emerald-300 font-mono text-[11px] sm:text-xs p-3 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`import requests
from bs4 import BeautifulSoup

url = "https://tokobuku.example/daftar"
page = requests.get(url)
soup = BeautifulSoup(page.text, "html.parser")
daftar = soup.find_all("span", class_="price")
for d in daftar:
    print(d.text)`}
          </pre>
        </div>
      </div>
    );
  }

  if (visualId === 'gambar1_flowchart_nilai') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Gambar 1. Diagram alir penentuan status nilai
        </div>
        <div className="max-w-sm mx-auto bg-white border border-slate-200 rounded-lg p-2">
          <svg
            viewBox="0 0 360 320"
            className="w-full h-auto"
            role="img"
            aria-label="Diagram alir penentuan status nilai"
          >
            <defs>
              <marker id="arrow1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
              </marker>
            </defs>

            {/* Mulai (Terminator) */}
            <rect x="130" y="10" width="100" height="32" rx="16" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
            <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              Mulai
            </text>
            <line x1="180" y1="42" x2="180" y2="62" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow1)" />

            {/* Input nilai (Jajar genjang) */}
            <polygon points="122,64 252,64 238,98 108,98" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
            <text x="180" y="85" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              Input nilai
            </text>
            <line x1="180" y1="98" x2="180" y2="120" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow1)" />

            {/* Keputusan: nilai >= 75 ? (Belah ketupat) */}
            <polygon points="180,122 246,154 180,186 114,154" fill="#fef9c3" stroke="#1e293b" strokeWidth="1.8" />
            <text x="180" y="158" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              nilai ≥ 75 ?
            </text>

            {/* Branch Tidak (Left) */}
            <polyline points="114,154 75,154 75,196" fill="none" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow1)" />
            <text x="88" y="147" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">
              Tidak
            </text>
            <polygon points="24,198 136,198 124,232 12,232" fill="#fee2e2" stroke="#1e293b" strokeWidth="1.8" />
            <text x="74" y="219" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
              Cetak "Remedial"
            </text>

            {/* Branch Ya (Right) */}
            <polyline points="246,154 285,154 285,196" fill="none" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow1)" />
            <text x="272" y="147" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#059669">
              Ya
            </text>
            <polygon points="236,198 348,198 336,232 224,232" fill="#dcfce7" stroke="#1e293b" strokeWidth="1.8" />
            <text x="286" y="219" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
              Cetak "Lulus"
            </text>

            {/* Join to Selesai */}
            <polyline points="74,232 74,254 180,254 180,274" fill="none" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow1)" />
            <polyline points="286,232 286,254 180,254" fill="none" stroke="#1e293b" strokeWidth="1.6" />

            {/* Selesai */}
            <rect x="130" y="276" width="100" height="32" rx="16" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
            <text x="180" y="296" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              Selesai
            </text>
          </svg>
        </div>
      </div>
    );
  }

  if (visualId === 'program_code_2') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Program Code 2. Fetching a web page with Requests
        </div>
        <pre className="max-w-lg mx-auto bg-slate-900 text-emerald-300 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`import requests

url = "https://books.toscrape.com/"
response = requests.get(url)
print("Connection status:", response.status_code)`}
        </pre>
      </div>
    );
  }

  if (visualId === 'pseudocode_1_balok') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Pseudocode 1. Menghitung volume balok
        </div>
        <pre className="max-w-lg mx-auto bg-slate-900 text-amber-200 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`Menghitung volume balok
Input: nilai panjang, lebar, dan tinggi balok
Output: nilai volume tercetak

Input p, l, t
Luas = p * l
Volume = Luas * t
Cetak Volume`}
        </pre>
      </div>
    );
  }

  if (visualId === 'gambar2_flowchart_loop') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Gambar 2. Diagram alir dengan perulangan
        </div>
        <div className="max-w-sm mx-auto bg-white border border-slate-200 rounded-lg p-2">
          <svg
            viewBox="0 0 370 365"
            className="w-full h-auto"
            role="img"
            aria-label="Diagram alir dengan perulangan"
          >
            <defs>
              <marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
              </marker>
            </defs>

            {/* Mulai */}
            <rect x="85" y="10" width="96" height="30" rx="15" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="29" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              Mulai
            </text>
            <line x1="133" y1="40" x2="133" y2="56" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow2)" />

            {/* total = 0 */}
            <rect x="78" y="58" width="110" height="30" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="77" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              total = 0
            </text>
            <line x1="133" y1="88" x2="133" y2="104" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow2)" />

            {/* i = 1 */}
            <rect x="78" y="106" width="110" height="30" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              i = 1
            </text>
            <line x1="133" y1="136" x2="133" y2="156" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow2)" />

            {/* i <= 4 ? */}
            <polygon points="133,158 193,188 133,218 73,188" fill="#fef9c3" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="192" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              i ≤ 4 ?
            </text>

            {/* Ya -> total = total + i -> i = i + 1 -> loop back */}
            <line x1="193" y1="188" x2="232" y2="188" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow2)" />
            <text x="212" y="180" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#059669">
              Ya
            </text>

            <rect x="234" y="172" width="106" height="32" fill="#e0f2fe" stroke="#1e293b" strokeWidth="1.8" />
            <text x="287" y="192" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
              total = total + i
            </text>
            <line x1="287" y1="204" x2="287" y2="226" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow2)" />

            <rect x="234" y="228" width="106" height="32" fill="#e0f2fe" stroke="#1e293b" strokeWidth="1.8" />
            <text x="287" y="248" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
              i = i + 1
            </text>

            {/* Loop back arrow above decision */}
            <polyline points="340,244 356,244 356,146 135,146" fill="none" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow2)" />

            {/* Tidak -> Cetak total -> Selesai */}
            <line x1="133" y1="218" x2="133" y2="262" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow2)" />
            <text x="150" y="244" textAnchor="start" fontSize="10" fontWeight="bold" fill="#dc2626">
              Tidak
            </text>

            <polygon points="82,264 196,264 184,298 70,298" fill="#dcfce7" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="285" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              Cetak total
            </text>
            <line x1="133" y1="298" x2="133" y2="318" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow2)" />

            <rect x="85" y="320" width="96" height="30" rx="15" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="339" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              Selesai
            </text>
          </svg>
        </div>
      </div>
    );
  }

  if (visualId === 'pseudocode_2_swap') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Pseudocode 2. Menukar nilai dua variabel
        </div>
        <pre className="max-w-md mx-auto bg-slate-900 text-amber-200 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`1  a = 5
2  b = 3
3  a = a + b
4  b = a - b
5  a = a - b
6  Cetak a, b`}
        </pre>
      </div>
    );
  }

  if (visualId === 'pseudocode_3_lingkaran') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Pseudocode 3. Menghitung keliling lingkaran
        </div>
        <pre className="max-w-lg mx-auto bg-slate-900 text-amber-200 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`Menghitung keliling lingkaran
Input: jari-jari lingkaran (r)
Output: keliling lingkaran tercetak

Input r
keliling = 2 * 22 * r / 7   // rumus keliling dengan pi = 22/7
Cetak keliling`}
        </pre>
      </div>
    );
  }

  if (visualId === 'gambar3_flowchart_terbesar') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Gambar 3. Diagram alir pencarian bilangan terbesar
        </div>
        <div className="max-w-sm mx-auto bg-white border border-slate-200 rounded-lg p-2">
          <svg
            viewBox="0 0 370 420"
            className="w-full h-auto"
            role="img"
            aria-label="Diagram alir pencarian bilangan terbesar"
          >
            <defs>
              <marker id="arrow3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
              </marker>
            </defs>

            {/* Mulai */}
            <rect x="85" y="8" width="96" height="28" rx="14" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="26" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              Mulai
            </text>
            <line x1="133" y1="36" x2="133" y2="50" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow3)" />

            {/* Input A, B, C */}
            <polygon points="75,52 203,52 191,82 63,82" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="71" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              Input A, B, C
            </text>
            <line x1="133" y1="82" x2="133" y2="96" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow3)" />

            {/* terbesar = A */}
            <rect x="78" y="98" width="110" height="28" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="116" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              terbesar = A
            </text>
            <line x1="133" y1="126" x2="133" y2="142" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow3)" />

            {/* B > terbesar ? */}
            <polygon points="133,144 203,174 133,204 63,174" fill="#fef9c3" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="178" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
              B &gt; terbesar ?
            </text>

            {/* Ya -> terbesar = B */}
            <line x1="203" y1="174" x2="246" y2="174" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow3)" />
            <text x="224" y="167" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#059669">
              Ya
            </text>
            <rect x="248" y="159" width="104" height="30" fill="#e0f2fe" stroke="#1e293b" strokeWidth="1.8" />
            <text x="300" y="178" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
              terbesar = B
            </text>
            <polyline points="300,189 300,224 135,224" fill="none" stroke="#1e293b" strokeWidth="1.6" />

            {/* Tidak -> C > terbesar ? */}
            <line x1="133" y1="204" x2="133" y2="240" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow3)" />
            <text x="148" y="218" textAnchor="start" fontSize="10" fontWeight="bold" fill="#dc2626">
              Tidak
            </text>

            {/* C > terbesar ? */}
            <polygon points="133,242 203,272 133,302 63,272" fill="#fef9c3" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="276" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
              C &gt; terbesar ?
            </text>

            {/* Ya -> terbesar = C */}
            <line x1="203" y1="272" x2="246" y2="272" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow3)" />
            <text x="224" y="265" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#059669">
              Ya
            </text>
            <rect x="248" y="257" width="104" height="30" fill="#e0f2fe" stroke="#1e293b" strokeWidth="1.8" />
            <text x="300" y="276" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
              terbesar = C
            </text>
            <polyline points="300,287 300,320 135,320" fill="none" stroke="#1e293b" strokeWidth="1.6" />

            {/* Tidak -> Cetak terbesar */}
            <line x1="133" y1="302" x2="133" y2="334" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow3)" />
            <text x="148" y="315" textAnchor="start" fontSize="10" fontWeight="bold" fill="#dc2626">
              Tidak
            </text>

            <polygon points="75,336 203,336 191,366 63,366" fill="#dcfce7" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="355" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
              Cetak terbesar
            </text>
            <line x1="133" y1="366" x2="133" y2="382" stroke="#1e293b" strokeWidth="1.6" markerEnd="url(#arrow3)" />

            <rect x="85" y="384" width="96" height="28" rx="14" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.8" />
            <text x="133" y="402" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">
              Selesai
            </text>
          </svg>
        </div>
      </div>
    );
  }

  if (visualId === 'pseudocode_4_loop_if') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Pseudocode 4. Perulangan dengan kondisi
        </div>
        <pre className="max-w-md mx-auto bg-slate-900 text-amber-200 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`total = 0
Untuk i = 1 sampai 5 ulangi:
    Jika i > 2 maka
        total = total + i
Cetak total`}
        </pre>
      </div>
    );
  }

  if (visualId === 'kata_kunci_rafi') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Kata kunci pencarian Rafi
        </div>
        <div className="max-w-md mx-auto bg-white border-2 border-sky-400 rounded-xl px-4 py-2.5 font-mono text-sm font-bold text-slate-900 text-center">
          cybersecurity after:2022
        </div>
      </div>
    );
  }

  if (visualId === 'kode_program_3') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Kode Program 3. Mengambil judul dari halaman web
        </div>
        <pre className="max-w-lg mx-auto bg-slate-900 text-emerald-300 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`import requests
from bs4 import BeautifulSoup

url = "https://contoh.example/buku"
r = requests.get(url)
soup = BeautifulSoup(r.text, "html.parser")
judul = soup.find_all("h3")
for j in judul:
    print(j.text)`}
        </pre>
      </div>
    );
  }

  if (visualId === 'gambar4_simbol_flowchart') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Gambar 4. Tiga simbol diagram alir
        </div>
        <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-lg p-3">
          <svg
            viewBox="0 0 420 80"
            className="w-full h-auto"
            role="img"
            aria-label="Tiga simbol diagram alir"
          >
            {/* (1) Oval / Terminator */}
            <rect x="20" y="18" width="105" height="44" rx="22" fill="#e0f2fe" stroke="#1e293b" strokeWidth="2" />
            <text x="72" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">
              (1)
            </text>

            {/* (2) Persegi panjang / Proses */}
            <rect x="155" y="18" width="105" height="44" fill="#fef9c3" stroke="#1e293b" strokeWidth="2" />
            <text x="207" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">
              (2)
            </text>

            {/* (3) Jajar genjang / Input-Output */}
            <polygon points="300,18 405,18 385,62 280,62" fill="#dcfce7" stroke="#1e293b" strokeWidth="2" />
            <text x="342" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">
              (3)
            </text>
          </svg>
        </div>
      </div>
    );
  }

  if (visualId === 'pseudocode_5_pangkat') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Pseudocode 5. Menghitung bilangan berpangkat
        </div>
        <pre className="max-w-md mx-auto bg-slate-900 text-amber-200 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`Input bilangan, pangkat
hasil = 1
Selama pangkat > 0 ulangi:
    hasil = hasil * bilangan
    pangkat = pangkat - 1
Cetak hasil`}
        </pre>
      </div>
    );
  }

  if (visualId === 'pseudocode_6_average') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Pseudocode 6. Calculating the average of two scores
        </div>
        <pre className="max-w-lg mx-auto bg-slate-900 text-amber-200 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`Calculate the average of two scores
Input: assignment score (t) and exam score (u)
Output: the average score is printed

Input t, u
average = (t + u) / 2    // average of the two scores
Print average`}
        </pre>
      </div>
    );
  }

  if (visualId === 'gambar5_web_scraping') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs overflow-x-auto">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Gambar 5. Alur pengumpulan data dari internet menggunakan web scraping
        </div>
        <div className="min-w-[480px] max-w-2xl mx-auto bg-white border border-slate-200 rounded-lg p-2">
          <svg
            viewBox="0 0 650 78"
            className="w-full h-auto"
            role="img"
            aria-label="Alur web scraping"
          >
            <defs>
              <marker id="arrow5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
              </marker>
            </defs>

            {[
              { x: 8, l1: 'Internet /', l2: 'Situs web', fill: '#e0f2fe' },
              { x: 138, l1: 'Halaman web', l2: '(HTML)', fill: '#fef9c3' },
              { x: 268, l1: 'Program', l2: 'web scraping', fill: '#ede9fe' },
              { x: 398, l1: 'Data yang', l2: 'dikumpulkan', fill: '#fce7f3' },
              { x: 528, l1: 'Penyimpanan data', l2: '(tabel / dataset)', fill: '#dcfce7' },
            ].map((b, i) => (
              <g key={b.l1}>
                <rect x={b.x} y="14" width="112" height="48" rx="8" fill={b.fill} stroke="#1e293b" strokeWidth="1.6" />
                <text x={b.x + 56} y="34" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#0f172a">
                  {b.l1}
                </text>
                <text x={b.x + 56} y="49" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">
                  {b.l2}
                </text>
                {i < 4 && (
                  <line
                    x1={b.x + 112}
                    y1="38"
                    x2={b.x + 128}
                    y2="38"
                    stroke="#1e293b"
                    strokeWidth="1.8"
                    markerEnd="url(#arrow5)"
                  />
                )}
              </g>
            ))}
          </svg>
        </div>
      </div>
    );
  }

  if (visualId === 'program_code_4') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Program Code 4. Finding all book titles
        </div>
        <pre className="max-w-lg mx-auto bg-slate-900 text-emerald-300 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`soup = BeautifulSoup(response.text, "html.parser")
titles = soup.______("h3")`}
        </pre>
      </div>
    );
  }

  if (visualId === 'pseudocode_7_fibonacci') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Pseudocode 7. Perulangan dengan tiga variabel
        </div>
        <pre className="max-w-md mx-auto bg-slate-900 text-amber-200 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`a = 0
b = 1
Ulangi 5 kali:
    c = a + b
    a = b
    b = c
Cetak b`}
        </pre>
      </div>
    );
  }

  if (visualId === 'pseudocode_8_terbesar') {
    return (
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs">
        <div className="font-bold text-slate-700 mb-2 text-center">
          Pseudocode 8. Mencari bilangan terbesar
        </div>
        <pre className="max-w-lg mx-auto bg-slate-900 text-amber-200 font-mono text-[11px] sm:text-xs p-3.5 rounded-xl overflow-x-auto leading-relaxed border border-slate-700">
{`Mencari bilangan terbesar dari sejumlah bilangan
Input: N = jumlah bilangan, lalu N buah bilangan
Output: bilangan terbesar tercetak

Input N
terbesar = 0
Selama N > 0 ulangi:
    Input bilangan
    Jika terbesar < bilangan maka
        terbesar = bilangan
    N = N - 1
Cetak terbesar`}
        </pre>
      </div>
    );
  }

  return null;
}
