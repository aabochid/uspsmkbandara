
import { Subject, Question, User, ExamSession, Schedule } from './types';

const STORAGE_KEYS = {
  SUBJECTS: 'cbt_subjects',
  QUESTIONS: 'cbt_questions',
  USERS: 'cbt_users',
  EXAMS: 'cbt_exams',
  SCHEDULES: 'cbt_schedules'
};

const BIN_SUBJECT_ID = '1';
const MATH_SUBJECT_ID = '2';
const ENGLISH_CONV_ID = '4';
const PAI_SUBJECT_ID = '12';

const DEFAULT_SUBJECTS: Subject[] = [
  { id: '1', name: 'Bahasa Indonesia', questionCount: 40 },
  { id: '2', name: 'Matematika', questionCount: 40 },
  { id: '3', name: 'Bahasa Inggris', questionCount: 40 },
  { id: '4', name: 'English Conversation', questionCount: 100 },
  { id: '5', name: 'Fisika', questionCount: 40 },
  { id: '6', name: 'Kimia', questionCount: 40 },
  { id: '7', name: 'Biologi', questionCount: 40 },
  { id: '8', name: 'Ekonomi', questionCount: 40 },
  { id: '9', name: 'Geografi', questionCount: 40 },
  { id: '10', name: 'Sosiologi', questionCount: 40 },
  { id: '11', name: 'Sejarah', questionCount: 40 },
  { id: '12', name: 'PAI', questionCount: 40 },
  { id: '13', name: 'PKn', questionCount: 40 },
  { id: '14', name: 'Seni Budaya', questionCount: 40 },
  { id: '15', name: 'PJOK', questionCount: 40 },
  { id: '16', name: 'Informatika', questionCount: 40 },
  { id: '17', name: 'Prakarya', questionCount: 40 },
  { id: '18', name: 'Bahasa Arab', questionCount: 40 },
  { id: '19', name: 'Tahfidz', questionCount: 40 }
];

const INITIAL_MATH_QUESTIONS: Question[] = [
  {
    id: 'm1', subjectId: MATH_SUBJECT_ID, text: 'Hasil penyederhanaan dari (a^3 * a^-2)^4 / a^2 adalah...',
    options: { A: { text: 'a^2' }, B: { text: 'a^3' }, C: { text: 'a^4' }, D: { text: 'a^6' }, E: { text: 'a' } },
    correctAnswer: 'A'
  },
  {
    id: 'm2', subjectId: MATH_SUBJECT_ID, text: 'Bentuk sederhana dari 3√24 - √150 + 2√54 adalah...',
    options: { A: { text: '5√6' }, B: { text: '7√6' }, C: { text: '6√6' }, D: { text: '4√6' }, E: { text: '3√6' } },
    correctAnswer: 'B'
  },
  {
    id: 'm3', subjectId: MATH_SUBJECT_ID, text: 'Nilai dari ^2log 48 + ^2log √2 - ^2log 3 adalah...',
    options: { A: { text: '4' }, B: { text: '5' }, C: { text: '4,5' }, D: { text: '5,5' }, E: { text: '6' } },
    correctAnswer: 'C'
  },
  {
    id: 'm4', subjectId: MATH_SUBJECT_ID, text: 'Diketahui sistem persamaan 3x + 2y = 12 dan 2x - y = 1. Nilai dari 2x + 3y adalah...',
    options: { A: { text: '11' }, B: { text: '12' }, C: { text: '15' }, D: { text: '13' }, E: { text: '14' } },
    correctAnswer: 'D'
  },
  {
    id: 'm5', subjectId: MATH_SUBJECT_ID, text: 'Harga 3 buku dan 2 pensil Rp 14.500. Harga 2 buku dan 1 pensil Rp 9.000. Harga 1 buku dan 1 pensil adalah...',
    options: { A: { text: 'Rp 4.500' }, B: { text: 'Rp 5.000' }, C: { text: 'Rp 6.000' }, D: { text: 'Rp 6.500' }, E: { text: 'Rp 5.500' } },
    correctAnswer: 'E'
  },
  {
    id: 'm6', subjectId: MATH_SUBJECT_ID, text: 'Nilai maksimum f(x, y) = 3x + 5y dari sistem pertidaksamaan x + 2y ≤ 10, x + y ≤ 7, x ≥ 0, y ≥ 0 adalah...',
    options: { A: { text: '26' }, B: { text: '25' }, C: { text: '27' }, D: { text: '28' }, E: { text: '30' } },
    correctAnswer: 'A'
  },
  {
    id: 'm7', subjectId: MATH_SUBJECT_ID, text: 'Seorang penjahit punya 60m wol dan 40m katun. Model I butuh 3m wol, 1m katun. Model II butuh 2m wol, 2m katun. Model matetatikanya adalah...',
    options: { A: { text: '2x + 3y ≤ 60; 2x + y ≤ 40' }, B: { text: '3x + 2y ≤ 60; x + 2y ≤ 40; x,y ≥ 0' }, C: { text: '3x + y ≤ 60; 2x + 2y ≤ 40' }, D: { text: 'x + 3y ≤ 60; 2x + 2y ≤ 40' }, E: { text: '3x + 2y ≥ 60; x + 2y ≥ 40' } },
    correctAnswer: 'B'
  },
  {
    id: 'm8', subjectId: MATH_SUBJECT_ID, text: 'Daerah penyelesaian dari 2x + y ≤ 6; x + 3y ≥ 6; x ≥ 0; y ≥ 0 terletak pada...',
    options: { A: { text: 'Kuadran IV' }, B: { text: 'Kuadran II' }, C: { text: 'Kuadran I' }, D: { text: 'Kuadran III' }, E: { text: 'Sumbu X' } },
    correctAnswer: 'C'
  },
  {
    id: 'm9', subjectId: MATH_SUBJECT_ID, text: 'Suku ke-4 dan ke-9 barisan aritmetika adalah 110 dan 150. Suku ke-30 adalah...',
    options: { A: { text: '310' }, B: { text: '326' }, C: { text: '320' }, D: { text: '318' }, E: { text: '340' } },
    correctAnswer: 'D'
  },
  {
    id: 'm10', subjectId: MATH_SUBJECT_ID, text: 'Jumlah n suku pertama Sn = n^2 + 3n. Suku ke-10 adalah...',
    options: { A: { text: '20' }, B: { text: '24' }, C: { text: '26' }, D: { text: '28' }, E: { text: '22' } },
    correctAnswer: 'E'
  },
  {
    id: 'm11', subjectId: MATH_SUBJECT_ID, text: 'Tali dipotong 5 bagian (geometri). Terpendek 2cm, terpanjang 162cm. Panjang total tali adalah...',
    options: { A: { text: '242 cm' }, B: { text: '240 cm' }, C: { text: '250 cm' }, D: { text: '230 cm' }, E: { text: '260 cm' } },
    correctAnswer: 'A'
  },
  {
    id: 'm12', subjectId: MATH_SUBJECT_ID, text: 'Bola jatuh dari 10m, memantul 3/4 kali tinggi sebelumnya. Panjang lintasan sampai berhenti adalah...',
    options: { A: { text: '60 m' }, B: { text: '70 m' }, C: { text: '80 m' }, D: { text: '40 m' }, E: { text: '50 m' } },
    correctAnswer: 'B'
  },
  {
    id: 'm13', subjectId: MATH_SUBJECT_ID, text: 'Diketahui sin A = 8/17 (sudut lancip). Nilai cos A adalah...',
    options: { A: { text: '8/15' }, B: { text: '17/15' }, C: { text: '15/17' }, D: { text: '15/8' }, E: { text: '7/17' } },
    correctAnswer: 'C'
  },
  {
    id: 'm14', subjectId: MATH_SUBJECT_ID, text: 'Tangga 10m bersandar di tembok dengan sudut 60 derajat ke lantai. Tinggi tembok adalah...',
    options: { A: { text: '5 m' }, B: { text: '10√3 m' }, C: { text: '5√2 m' }, D: { text: '5√3 m' }, E: { text: '10 m' } },
    correctAnswer: 'D'
  },
  {
    id: 'm15', subjectId: MATH_SUBJECT_ID, text: 'Jika cos X = -1/2 (Kuadran II), nilai sin X adalah...',
    options: { A: { text: '1/2' }, B: { text: '-1/2√3' }, C: { text: '1' }, D: { text: '0' }, E: { text: '1/2√3' } },
    correctAnswer: 'E'
  },
  {
    id: 'm16', subjectId: MATH_SUBJECT_ID, text: 'Koordinat kutub P(8, 150°) diubah ke kartesius menjadi...',
    options: { A: { text: '(-4√3, 4)' }, B: { text: '(4√3, -4)' }, C: { text: '(-4, 4√3)' }, D: { text: '(4, -4√3)' }, E: { text: '(-8, 8)' } },
    correctAnswer: 'A'
  },
  {
    id: 'm17', subjectId: MATH_SUBJECT_ID, text: 'Segitiga ABC: sudut A=30°, B=45°, sisi a=10cm. Panjang sisi b adalah...',
    options: { A: { text: '5√2 cm' }, B: { text: '10√2 cm' }, C: { text: '10√3 cm' }, D: { text: '5√3 cm' }, E: { text: '20 cm' } },
    correctAnswer: 'B'
  },
  {
    id: 'm18', subjectId: MATH_SUBJECT_ID, text: 'Matriks A=[[2,1],[4,3]], B=[[1,0],[2,1]]. Pernyataan yang benar dari pilihan berikut adalah...',
    options: { A: { text: 'Det(A) = 4' }, B: { text: 'Det(B) = 2' }, C: { text: 'A + B = [[3, 1], [6, 4]]' }, D: { text: 'A - B = [[1, 0], [2, 2]]' }, E: { text: 'A x B = [[4, 1], [10, 3]]' } },
    correctAnswer: 'C'
  },
  {
    id: 'm19', subjectId: MATH_SUBJECT_ID, text: 'A = [[1, 2, 3], [0, 1, 4]], B = [[1, 2], [3, 4], [0, 1]]. Jika C = A x B, determinan C adalah...',
    options: { A: { text: '5' }, B: { text: '4' }, C: { text: '6' }, D: { text: '3' }, E: { text: '7' } },
    correctAnswer: 'D'
  },
  {
    id: 'm20', subjectId: MATH_SUBJECT_ID, text: 'Vektor u = 3i - 4j dan v = 2i + j. Hasil u . v adalah...',
    options: { A: { text: '10' }, B: { text: '5' }, C: { text: '7' }, D: { text: '3' }, E: { text: '2' } },
    correctAnswer: 'E'
  },
  {
    id: 'm21', subjectId: MATH_SUBJECT_ID, text: 'Akar-akar dari persamaan kuadrat x^2 - 5x + 6 = 0 adalah...',
    options: { A: { text: '2 dan 3' }, B: { text: '-2 dan -3' }, C: { text: '1 dan 6' }, D: { text: '-1 dan -6' }, E: { text: '2 dan -3' } },
    correctAnswer: 'A'
  },
  {
    id: 'm22', subjectId: MATH_SUBJECT_ID, text: 'Persamaan fungsi kuadrat dengan puncak (1, 4) melalui (0, 3) adalah...',
    options: { A: { text: 'y = x^2 - 2x + 3' }, B: { text: 'y = -x^2 + 2x + 3' }, C: { text: 'y = -x^2 - 2x + 3' }, D: { text: 'y = -x^2 + 2x - 3' }, E: { text: 'y = x^2 + 2x + 3' } },
    correctAnswer: 'B'
  },
  {
    id: 'm23', subjectId: MATH_SUBJECT_ID, text: 'f(x) = 2x + 1, g(x) = x^2 - 3. Nilai (f o g)(x) adalah...',
    options: { A: { text: '2x^2 - 6' }, B: { text: 'x^2 + 2x - 2' }, C: { text: '2x^2 - 5' }, D: { text: '4x^2 + 4x - 2' }, E: { text: '2x^2 + 1' } },
    correctAnswer: 'C'
  },
  {
    id: 'm24', subjectId: MATH_SUBJECT_ID, text: 'Jika f(x) = (3x + 4) / (2x - 1), nilai f^-1(2) adalah...',
    options: { A: { text: '6' }, B: { text: '1/6' }, C: { text: '2' }, D: { text: '-6' }, E: { text: '0' } },
    correctAnswer: 'D'
  },
  {
    id: 'm25', subjectId: MATH_SUBJECT_ID, text: 'Balok ABCD.EFGH panjang AB=8, BC=6, CG=5. Jarak A ke G adalah...',
    options: { A: { text: '10√2' }, B: { text: '125' }, C: { text: '5√2' }, D: { text: '10' }, E: { text: '5√5' } },
    correctAnswer: 'E'
  },
  {
    id: 'm26', subjectId: MATH_SUBJECT_ID, text: 'Titik A(1, 2) ditranslasikan T(3, 4). Bayangan A adalah...',
    options: { A: { text: '(4, 6)' }, B: { text: '(2, 2)' }, C: { text: '(3, 4)' }, D: { text: '(5, 5)' }, E: { text: '(1, 1)' } },
    correctAnswer: 'A'
  },
  {
    id: 'm27', subjectId: MATH_SUBJECT_ID, text: 'Banyak susunan 3 angka berbeda dari angka 1, 2, 3, 4, 5 adalah...',
    options: { A: { text: '120' }, B: { text: '60' }, C: { text: '20' }, D: { text: '10' }, E: { text: '15' } },
    correctAnswer: 'B'
  },
  {
    id: 'm28', subjectId: MATH_SUBJECT_ID, text: 'Cara memilih 3 pengurus dari 10 siswa adalah...',
    options: { A: { text: '720' }, B: { text: '30' }, C: { text: '120' }, D: { text: '100' }, E: { text: '240' } },
    correctAnswer: 'C'
  },
  {
    id: 'm29', subjectId: MATH_SUBJECT_ID, text: 'Dua koin dilempar. Peluang muncul paling sedikit satu angka adalah...',
    options: { A: { text: '1/4' }, B: { text: '1/2' }, C: { text: '1' }, D: { text: '3/4' }, E: { text: '0' } },
    correctAnswer: 'D'
  },
  {
    id: 'm30', subjectId: MATH_SUBJECT_ID, text: 'Peluang hujan 0,6. Frekuensi harapan TIDAK hujan dalam 30 hari adalah...',
    options: { A: { text: '18 hari' }, B: { text: '10 hari' }, C: { text: '20 hari' }, D: { text: '15 hari' }, E: { text: '12 hari' } },
    correctAnswer: 'E'
  },
  {
    id: 'm31', subjectId: MATH_SUBJECT_ID, text: 'Diagram lingkaran: Olahraga 40%, Seni 30%, Baca sisanya. Jika total 200 siswa, jumlah hobi membaca adalah...',
    options: { A: { text: '60' }, B: { text: '80' }, C: { text: '70' }, D: { text: '50' }, E: { text: '40' } },
    correctAnswer: 'A'
  },
  {
    id: 'm32', subjectId: MATH_SUBJECT_ID, text: 'Median dari data: 7, 8, 6, 9, 7, 10, 8 adalah...',
    options: { A: { text: '7' }, B: { text: '8' }, C: { text: '7,5' }, D: { text: '9' }, E: { text: '6' } },
    correctAnswer: 'B'
  },
  {
    id: 'm33', subjectId: MATH_SUBJECT_ID, text: 'Mean data berkelompok (x=[10,20,30], f=[2,5,3]) adalah...',
    options: { A: { text: '20' }, B: { text: '22' }, C: { text: '21' }, D: { text: '19' }, E: { text: '25' } },
    correctAnswer: 'C'
  },
  {
    id: 'm34', subjectId: MATH_SUBJECT_ID, text: 'Modus pada tabel distribusi frekuensi adalah data dengan...',
    options: { A: { text: 'Nilai tengah' }, B: { text: 'Frekuensi terendah' }, C: { text: 'Total frekuensi' }, D: { text: 'Frekuensi tertinggi' }, E: { text: 'Rata-rata' } },
    correctAnswer: 'D'
  },
  {
    id: 'm35', subjectId: MATH_SUBJECT_ID, text: 'Simpangan kuartil dari data: 2, 4, 6, 8, 10 adalah...',
    options: { A: { text: '2' }, B: { text: '4' }, C: { text: '5' }, D: { text: '1' }, E: { text: '3' } },
    correctAnswer: 'E'
  },
  {
    id: 'm36', subjectId: MATH_SUBJECT_ID, text: 'Letak Kuartil Atas (Q3) pada data berkelompok adalah data ke...',
    options: { A: { text: '3/4 n' }, B: { text: '1/4 n' }, C: { text: '1/2 n' }, D: { text: 'n' }, E: { text: '1/3 n' } },
    correctAnswer: 'A'
  },
  {
    id: 'm37', subjectId: MATH_SUBJECT_ID, text: 'Simpangan baku dari data: 3, 3, 3, 3, 3 adalah...',
    options: { A: { text: '3' }, B: { text: '0' }, C: { text: '1' }, D: { text: '9' }, E: { text: '15' } },
    correctAnswer: 'B'
  },
  {
    id: 'm38', subjectId: MATH_SUBJECT_ID, text: 'Nilai limit x->2 dari (x^2 - 4)/(x - 2) adalah...',
    options: { A: { text: '2' }, B: { text: '0' }, C: { text: '4' }, D: { text: 'tak hingga' }, E: { text: '1' } },
    correctAnswer: 'C'
  },
  {
    id: 'm39', subjectId: MATH_SUBJECT_ID, text: 'Nilai limit x->tak hingga dari (3x^2 + 2x)/(x^2 - 5) adalah...',
    options: { A: { text: '2' }, B: { text: '0' }, C: { text: 'tak hingga' }, D: { text: '3' }, E: { text: '-3' } },
    correctAnswer: 'D'
  },
  {
    id: 'm40', subjectId: MATH_SUBJECT_ID, text: 'Turunan pertama dari f(x) = 3x^2 + 5x - 7 adalah...',
    options: { A: { text: '6x - 7' }, B: { text: '3x + 5' }, C: { text: 'x^2 + 5' }, D: { text: '6x' }, E: { text: '6x + 5' } },
    correctAnswer: 'E'
  }
];

const INITIAL_PAI_QUESTIONS: Question[] = [
  {
    id: 'pai-1', subjectId: PAI_SUBJECT_ID, text: '1. Perhatikan QS. An-Nur /24: 2 berikut: اَلزَّانِيَةُ وَالزَّانِيْ فَاجْلِدُوْا كُلَّ وَاحِدٍ مِّنْهُمَا مِائَةَ جَلْدَةٍ. Penjelasan yang tepat terkait makna ayat di atas adalah ....',
    options: { A: { text: 'Hukuman bagi Pezina perawan dan jejaka adalah masing-masing dicambuk 100 kali' }, B: { text: 'Pelaksanaan hukuman bagi Pelaku Perzinaan, harus disaksikan oleh dua orang saksi' }, C: { text: 'Perbuatan mendekati zina adalah haram hukumnya, apalagi melakukannya.' }, D: { text: 'Haram hukumnya masuk ke kawasan yang dijadikan tempat perzinaan' }, E: { text: 'Yang dilarang adalah perbuatan mendekati zina sedangkan zinanya tidak dilarang' } },
    correctAnswer: 'A'
  },
  {
    id: 'pai-2', subjectId: PAI_SUBJECT_ID, text: '2. Perhatikan QS. al-Hujarat/49: 12. Pasangan potongan ayat dan terjemahnya yang benar adalah ....',
    options: { A: { text: '1=a, 2=b, 3=c, 4=d, 5=e' }, B: { text: '1=d, 2=b, 3=e, 4=c, 5=a' }, C: { text: '1=e, 2=c, 3=b, 4=e, 5=d' }, D: { text: '1=d, 2=a, 3=c, 4=b, 5=e' }, E: { text: '1=c, 2=d, 3=e, 4=a, 5=b' } },
    correctAnswer: 'B'
  },
  {
    id: 'pai-3', subjectId: PAI_SUBJECT_ID, text: '3. Di bawah ini yang BUKAN manfaat dan hikmah mujahadah an-nafs (kontrol diri) adalah ...',
    options: { A: { text: 'Hati semakin bersih dan tenang' }, B: { text: 'Memperoleh kebahagiaan lahir dan batin' }, C: { text: 'Dicintai baik oleh Allah SWT maupun oleh sesame manusia' }, D: { text: 'Merasa hidup menjadi kurang bersyukur' }, E: { text: 'Mendapatkan ridha dari Allah SWT' } },
    correctAnswer: 'D'
  },
  {
    id: 'pai-4', subjectId: PAI_SUBJECT_ID, text: '4. Perhatikan pernyataan tentang kejujuran. Potret perilaku TIDAK JUJUR terlihat pada ....',
    options: { A: { text: 'Shela dan Ali' }, B: { text: 'Shela dan Sudin' }, C: { text: 'Nina dan Agung' }, D: { text: 'Sudin dan Agung' }, E: { text: 'Ali dan Nina' } },
    correctAnswer: 'C'
  },
  {
    id: 'pai-5', subjectId: PAI_SUBJECT_ID, text: '5. Berikut ini adalah tanda-tanda orang yang beriman kepada Malaikat, yaitu ....',
    options: { A: { text: 'Alia berhati-hati dalam berbuat karena ia yakin ada malaikat yang mencatat' }, B: { text: 'Anisa bila salat fardu selalu di akhir waktu' }, C: { text: 'Ami beranggapan tidak masalah berbuat maksiat asalkan tidak terlihat orang' }, D: { text: 'Agus masih suka membuat onar yang meresahkan masyarakat' }, E: { text: 'Tidak adanya rasa bersalah ketika berbuat zalim' } },
    correctAnswer: 'A'
  },
  {
    id: 'pai-6', subjectId: PAI_SUBJECT_ID, text: '6. Berikut adalah ketentuan aturan Syar’i khusus untuk busana muslimah, KECUALI ....',
    options: { A: { text: 'Bahan yang digunakan tidak tipis' }, B: { text: 'Tidak menyerupai pakaian laki-laki' }, C: { text: 'Bentuknya longgar, atau tidak ketat' }, D: { text: 'Menutupi aurat kecuali yang dikecualikan' }, E: { text: 'Harus mengikuti model dari jazirah Arab' } },
    correctAnswer: 'E'
  },
  {
    id: 'pai-7', subjectId: PAI_SUBJECT_ID, text: '7. Pernyataan berikut yang BUKAN termasuk hikmah berbusana muslimah adalah ....',
    options: { A: { text: 'Sebagai motivasi untuk lebih baik lagi dalam beribadah' }, B: { text: 'Senantiasa menerapkan sikap tawakal dan mawas diri' }, C: { text: 'Mendapatkan ganjaran dari Allah Swt. berupa pahala' }, D: { text: 'Terhindar dari murka dan laknat Allah Swt.' }, E: { text: 'Terjaga dari fitnah dan pelecehan seksual' } },
    correctAnswer: 'B'
  },
  {
    id: 'pai-8', subjectId: PAI_SUBJECT_ID, text: '8. Contoh sungguh-sungguh dalam menuntut ilmu seperti pernyataan di bawah ini, KECUALI ....',
    options: { A: { text: 'Tidak pernah mengulang pelajaran yang sudah dipelajari' }, B: { text: 'Membaca berulang-ulang hingga paham dan hafal' }, C: { text: 'Mencatat dengan baik hal-hal yang dijelaskan oleh guru' }, D: { text: 'Menyisihkan uang jajan untuk membeli buku' }, E: { text: 'Bertanya secara kritis kepada guru jika tidak paham' } },
    correctAnswer: 'A'
  },
  {
    id: 'pai-9', subjectId: PAI_SUBJECT_ID, text: '9. Pernyataan di bawah ini adalah makna dari sumber hukum (Al-Qur’an dan Hadis), KECUALI ....',
    options: { A: { text: 'Sesuatu yang dijadikan landasan penetapan hukum' }, B: { text: 'Sesuatu yang dijadikan dasar pengambilan hukum' }, C: { text: 'Segala sesuatu yang terkait dengan masalah hukum' }, D: { text: 'Sebagai sandaran dalam mengeluarkan hukum' }, E: { text: 'Sebagai rujukan untuk menetapkan hukum' } },
    correctAnswer: 'C'
  },
  {
    id: 'pai-10', subjectId: PAI_SUBJECT_ID, text: '10. Berdasarkan tabel rukun haji, pasangan yang benar antara nama kegiatan dan deskripsinya adalah ....',
    options: { A: { text: '1)=a), 2)=b), 3)=c), 4)=e), 5)=d)' }, B: { text: '1)=c), 2)=d), 3)=a), 4)=e), 5)=b)' }, C: { text: '1)=b), 5)=c), 3)=a), 4)=d), 2)=e)' }, D: { text: '1)=e), 2)=b), 5)=c), 4)=a), 3)=d)' }, E: { text: '1)=d), 2)=e), 3)=a), 5)=c), 4)=b)' } },
    correctAnswer: 'B'
  },
  {
    id: 'pai-11', subjectId: PAI_SUBJECT_ID, text: '11. Substansi dakwah yang paling mempengaruhi keberhasilan dakwah Rasulullah saw. di Madinah ditunjukkan nomor ....',
    options: { A: { text: '(1), (2) dan (3)' }, B: { text: '(1), (2) dan (4)' }, C: { text: '(1), (3) dan (4)' }, D: { text: '(2), (3) dan (5)' }, E: { text: '(2), (4) dan (5)' } },
    correctAnswer: 'A'
  },
  {
    id: 'pai-12', subjectId: PAI_SUBJECT_ID, text: '12. Dari tabel delapan ashnaf (golongan) mustahik zakat, lima yang sesuai antara nama dan deskripsinya adalah nomor .....',
    options: { A: { text: '1)=c), 2)=b), 3)=d), 4)=e), 5)=f)' }, B: { text: '1)=d), 2)=d), 5)=e), 3)=f), 4)=g)' }, C: { text: '1)=h), 5)=a), 3)=b), 4)=c), 2)=d)' }, D: { text: '1)=c), 2)=b), 5)=a), 4)=f), 3)=e)' }, E: { text: '1)=d), 2)=e), 3)=f), 5)=g), 4)=h)' } },
    correctAnswer: 'A'
  },
  {
    id: 'pai-13', subjectId: PAI_SUBJECT_ID, text: '13. Di antara ciri etos kerja yang tinggi bagi seorang muslim adalah … .',
    options: { A: { text: 'Menjalin kerjasama yang menguntungkan' }, B: { text: 'Lebih mementingkan rasio/akal daripada emosi' }, C: { text: 'Peka dan tanggap terhadap permasalahan ekonomi' }, D: { text: 'Bekerja dengan kesungguhan sehingga hasilnya maksimal' }, E: { text: 'Memacu perubahan sosial untuk perkembangan ekonomi' } },
    correctAnswer: 'D'
  },
  {
    id: 'pai-14', subjectId: PAI_SUBJECT_ID, text: '14. Perhatikan Q.S. Al-Maidah/ 5: 32. Makna dari kalimat مَنْ قَتَلَ نَفْسًاۢ بِغَيْرِ نَفْسٍ adalah …',
    options: { A: { text: 'Membunuh seorang manusia sama halnya dengan membunuh semua manusia' }, B: { text: 'Memelihara kehidupan seorang manusia sama halnya dengan memelihara semua manusia' }, C: { text: 'Membunuh adalah tindakan kekerasan yang paling berat' }, D: { text: 'Membunuh karena alasan membela diri dibenarkan' }, E: { text: 'Memelihara seekor binatang sama halnya memelihara ekosistem' } },
    correctAnswer: 'A'
  },
  {
    id: 'pai-15', subjectId: PAI_SUBJECT_ID, text: '15. Seseorang mendapatkan predikat syaja’ah (berani), jika ... .',
    options: { A: { text: 'Mengingatkan bahwa hidup itu sungguh-sungguh' }, B: { text: 'Melaksakan apa saja meski masih syubhat' }, C: { text: 'Memberikan keteladanan luar biasa' }, D: { text: 'Menapaki langkah dan sikap jiwa amanah' }, E: { text: 'Mengendalikan nafsu agar tidak berbuat semaunya' } },
    correctAnswer: 'E'
  },
  {
    id: 'pai-16', subjectId: PAI_SUBJECT_ID, text: '16. Di bawah ini adalah persamaan fungsi orang tua dan guru yang sama, KECUALI...',
    options: { A: { text: 'Mendidik dan mengajari' }, B: { text: 'Mencukupi kebutuhan sehari-hari' }, C: { text: 'Membina dan merawat' }, D: { text: 'Melatih sehingga ia mandiri' }, E: { text: 'Menjadi tempat curhat' } },
    correctAnswer: 'B'
  },
  {
    id: 'pai-17', subjectId: PAI_SUBJECT_ID, text: '17. Pernyataan di bawah ini BUKAN hikmah beriman kepada Kitabullah dalam kehidupan pribadi adalah ... .',
    options: { A: { text: 'Memperoleh sumber petunjuk kehidupan yang benar' }, B: { text: 'Mendapatkan ajaran tauhid' }, C: { text: 'Dapat belajar dari kisah umat terdahulu' }, D: { text: 'Lebih bersemangat dalam beribadah' }, E: { text: 'Mengamalkan semua ajaran kitab-kitab terdahulu' } },
    correctAnswer: 'E'
  },
  {
    id: 'pai-18', subjectId: PAI_SUBJECT_ID, text: '18. Perilaku ideal siswa yang gemar beribadah dan hidup teratur akan terwujud jika siswa tersebut ....',
    options: { A: { text: 'Sering membaca surat Yasin tanpa paham isinya' }, B: { text: 'Berkeyakinan terhadap adanya sunatullah' }, C: { text: 'Meyakini hukum sebab akibat' }, D: { text: 'Meyakini hidup ibarat pementasan' }, E: { text: 'Mampu mengimplementasikan keimanan kepada kitab Allah' } },
    correctAnswer: 'E'
  },
  {
    id: 'pai-19', subjectId: PAI_SUBJECT_ID, text: '19. Mahmud disiplin membayar SPP tepat waktu karena dititipi orang tuanya. Mahmud mengamalkan sifat Rasul yaitu …',
    options: { A: { text: 'Sidiq dan Kidzib' }, B: { text: 'Sidiq dan Amanah' }, C: { text: 'Amanah dan Khiyanah' }, D: { text: 'Amanah dan Fathanah' }, E: { text: 'Sidiq dan Fathanah' } },
    correctAnswer: 'B'
  },
  {
    id: 'pai-20', subjectId: PAI_SUBJECT_ID, text: '20. Do’a "Ya Allah ampunilah ia, rahmatilah ia..." dalam shalat jenazah dibaca setelah ... .',
    options: { A: { text: 'Takbir pertama' }, B: { text: 'Takbir kedua' }, C: { text: 'Takbir ketiga' }, D: { text: 'Takbir keempat' }, E: { text: 'Takbir kelima' } },
    correctAnswer: 'C'
  },
  {
    id: 'pai-21', subjectId: PAI_SUBJECT_ID, text: '21. Yang termasuk tata cara mengafani jenazah ditandai dengan nomor ....',
    options: { A: { text: '1), 2) dan 3)' }, B: { text: '1), 2) dan 4)' }, C: { text: '1), 3) dan 5)' }, D: { text: '1), 2) dan 5)' }, E: { text: '2), 3) dan 4)' } },
    correctAnswer: 'D'
  },
  {
    id: 'pai-22', subjectId: PAI_SUBJECT_ID, text: '22. Fungsi lain dari khutbah selain memenuhi syarat shalat Jum’at adalah ... .',
    options: { A: { text: 'Mengingatkan kembali akan makna kehidupan' }, B: { text: 'Timbulnya kesadaran mendalam tentang shalat' }, C: { text: 'Membebaskan muslim dari kewajiban shalat' }, D: { text: 'Gugurnya kewajiban shalat fardhu' }, E: { text: 'Terbebasnya seorang dari fardhu ‘ain' } },
    correctAnswer: 'A'
  },
  {
    id: 'pai-23', subjectId: PAI_SUBJECT_ID, text: '23. Pernyataan yang termasuk asas-asas transaksi ekonomi dalam Islam ialah nomor ....',
    options: { A: { text: '(1), (2) dan (3)' }, B: { text: '(3), (4) dan (5)' }, C: { text: '(2), (4) dan (5)' }, D: { text: '(2), (3) dan (4)' }, E: { text: '(1), (3) dan (4)' } },
    correctAnswer: 'E'
  },
  {
    id: 'pai-24', subjectId: PAI_SUBJECT_ID, text: '24. Berikut usaha para khalifah Bani Abbasiyah untuk meningkatkan ilmu pengetahuan, KECUALI ….',
    options: { A: { text: 'Mendirikan sekolah-sekolah' }, B: { text: 'Membangun perpustakaan untuk umum' }, C: { text: 'Menggalakkan penerjemahan bahasa asing' }, D: { text: 'Memberikan gaji tinggi bagi penerjemah' }, E: { text: 'Diberikannya fasilitas kekuasaan tanpa batas' } },
    correctAnswer: 'E'
  },
  {
    id: 'pai-25', subjectId: PAI_SUBJECT_ID, text: '25. Terkait QS Ali Imran 190-191, perilaku terpuji berpikir kritis harus dikembangkan, KECUALI …',
    options: { A: { text: 'Bersyukur atas anugerah akal sehat' }, B: { text: 'Bersyukur atas anugerah alam semesta' }, C: { text: 'Melakukan kajian mendalam bersama pakar' }, D: { text: 'Menjadikan Al-Qur’an inspirasi penelitian' }, E: { text: 'Membiasakan membaca Yasin setiap malam Jumat' } },
    correctAnswer: 'E'
  },
  {
    id: 'pai-26', subjectId: PAI_SUBJECT_ID, text: '26. Pernyataan yang mencerminkan pengamalan musyawarah (Q.S. Ali Imran: 159) adalah nomor ….',
    options: { A: { text: '1, 2, dan 3' }, B: { text: '1, 2, dan 4' }, C: { text: '1, 3, dan 4' }, D: { text: '2, 3, dan 4' }, E: { text: '2, 4, dan 5' } },
    correctAnswer: 'C'
  },
  {
    id: 'pai-27', subjectId: PAI_SUBJECT_ID, text: '27. Perintah bertutur kata baik (Q.S. Al-Baqarah: 83) terdapat pada potongan ayat ….',
    options: { A: { text: 'لَا تَعْبُدُوْنَ اِلَّا اللّٰهَ' }, B: { text: 'وَبِالْوَالِدَيْنِ اِحْسَانًا' }, C: { text: 'وَّذِى الْقُرْبٰى' }, D: { text: 'وَالْيَتٰمٰى وَالْمَسٰكِيْنِ' }, E: { text: 'وَقُوْلُوْا لِلنَّاسِ حُسْنًا' } },
    correctAnswer: 'E'
  },
  {
    id: 'pai-28', subjectId: PAI_SUBJECT_ID, text: '28. Perilaku yang TIDAK sesuai dengan QS Luqman: 14 adalah ….',
    options: { A: { text: 'Berdo’a agar orang tua mendapat hidayah' }, B: { text: 'Berbuat baik meski beda keyakinan' }, C: { text: 'Menghormati orang tua hanya jika seiman' }, D: { text: 'Tidak mematuhi perintah maksiat' }, E: { text: 'Tidak berperilaku yang menyakiti hati' } },
    correctAnswer: 'C'
  },
  {
    id: 'pai-29', subjectId: PAI_SUBJECT_ID, text: '29. Berikut perilaku orang yang beriman kepada Hari Akhir, KECUALI …..',
    options: { A: { text: 'Rasa benci kepada kemaksiatan' }, B: { text: 'Menghindari niat buruk' }, C: { text: 'Bertekad menjauhi kehidupan dunia' }, D: { text: 'Termotivasi beramal shalih ikhlas' }, E: { text: 'Ketaatan terhadap Allah swt.' } },
    correctAnswer: 'C'
  },
  {
    id: 'pai-30', subjectId: PAI_SUBJECT_ID, text: '30. Pernyataan yang termasuk contoh takdir mubram (ketentuan mutlak) adalah …',
    options: { A: { text: 'Beriman atau kafir, sukses atau gagal' }, B: { text: 'Kaya dan miskin, cerdas dan bodoh' }, C: { text: 'Karier bagus, anak shalih' }, D: { text: 'Kematian, kelahiran, jenis kelamin' }, E: { text: 'Harapan, cita-cita, ilmu' } },
    correctAnswer: 'D'
  },
  {
    id: 'pai-31', subjectId: PAI_SUBJECT_ID, text: '31. Pernyataan berikut yang TIDAK mencerminkan iman kepada qadha dan qadar adalah ….',
    options: { A: { text: 'Ali bersyukur saat berhasil, tidak putus asa saat gagal' }, B: { text: 'Rusydi tidak sombong saat beruntung' }, C: { text: 'Alia selalu optimis dan gigih' }, D: { text: 'Ilham menyerahkan urusan kepada Allah' }, E: { text: 'Amir malas berdoa karena keinginannya tidak nyata' } },
    correctAnswer: 'E'
  },
  {
    id: 'pai-32', subjectId: PAI_SUBJECT_ID, text: '32. Isi kandungan Q.S. at-Taubah: 105 tentang etos kerja adalah sebagai berikut, KECUALI ... .',
    options: { A: { text: 'Perintah melakukan amal shaleh karena Allah' }, B: { text: 'Peringatan agar tidak mengulangi maksiat' }, C: { text: 'Saling menghormati antara atasan dan bawahan' }, D: { text: 'Hindari rasa puas diri akan amal' }, E: { text: 'Amal akan diperlihatkan di Hari Kiamat' } },
    correctAnswer: 'C'
  },
  {
    id: 'pai-33', subjectId: PAI_SUBJECT_ID, text: '33. Berdasarkan analisis kesenjangan teori "Man jadda wajada" dan kenyataan ekonomi, kesimpulannya adalah …',
    options: { A: { text: 'Usaha belum diimbangi doa' }, B: { text: 'Kata hikmah hanya motivasi' }, C: { text: 'Usaha belum memenuhi kriteria' }, D: { text: 'Mendapatkan hasil sesuai kadar usaha' }, E: { text: 'Hanya berlaku bagi orang rajin ibadah' } },
    correctAnswer: 'D'
  },
  {
    id: 'pai-34', subjectId: PAI_SUBJECT_ID, text: '34. Berikut adalah wanita yang haram dinikahi (mahram) karena keturunan, KECUALI ….',
    options: { A: { text: 'Ibu dan seterusnya ke atas' }, B: { text: 'Anak perempuan seterusnya ke bawah' }, C: { text: 'Bibi dari bapak atau ibu' }, D: { text: 'Saudara sepupu' }, E: { text: 'Anak perempuan dari saudara' } },
    correctAnswer: 'D'
  },
  {
    id: 'pai-35', subjectId: PAI_SUBJECT_ID, text: '35. Pemuda 27 thn ingin nikah tapi belum mampu ekonomi. Tip Nabi s.a.w agar selamat dari dosa adalah . . .',
    options: { A: { text: 'Menikah dengan bantuan orang tua' }, B: { text: 'Menikah dengan resepsi sederhana' }, C: { text: 'Menahan keinginan' }, D: { text: 'Tunda sampai cukup materi' }, E: { text: 'Banyak berpuasa untuk meredam nafsu' } },
    correctAnswer: 'E'
  },
  {
    id: 'pai-36', subjectId: PAI_SUBJECT_ID, text: '36. Islam memberikan hak waris kepada perempuan karena . . .',
    options: { A: { text: 'Ketentuan dari Allah Swt.' }, B: { text: 'Belas kasihan' }, C: { text: 'Mereka berhak menerimanya' }, D: { text: 'Membela kehormatan mereka' }, E: { text: 'Menghargai jasa besar mereka' } },
    correctAnswer: 'C'
  },
  {
    id: 'pai-37', subjectId: PAI_SUBJECT_ID, text: '37. Harta 15.865.000. Hutang 2.400.000, Wasiat 1.200.000, Kain kafan 265.000. Bagian istri (dengan anak) adalah ….',
    options: { A: { text: 'Rp. 1.500.000,-' }, B: { text: 'Rp. 1.625.000,-' }, C: { text: 'Rp. 2.000.000,-' }, D: { text: 'Rp. 6.500.000,-' }, E: { text: 'Rp. 3.250.000,-' } },
    correctAnswer: 'A'
  },
  {
    id: 'pai-38', subjectId: PAI_SUBJECT_ID, text: '38. Munculnya tokoh pembaharuan Islam atau modernis memiliki satu tujuan sama yaitu …',
    options: { A: { text: 'Membangkitkan kesadaran umat akan ajaran mulia' }, B: { text: 'Meninggalkan dunia politik' }, C: { text: 'Mengurangi pemikiran ekonomi' }, D: { text: 'Westernisasi ajaran Islam' }, E: { text: 'Membatasi pergaulan non-Islam' } },
    correctAnswer: 'A'
  },
  {
    id: 'pai-39', subjectId: PAI_SUBJECT_ID, text: '39. Strategi dakwah Walisongo yang paling menonjol di Indonesia adalah melalui jalur …',
    options: { A: { text: 'Politik' }, B: { text: 'Kultural' }, C: { text: 'Kekuasaan' }, D: { text: 'Pernikahan' }, E: { text: 'Perdagangan' } },
    correctAnswer: 'B'
  },
  {
    id: 'pai-40', subjectId: PAI_SUBJECT_ID, text: '40. Faktor-faktor penyebab kemajuan peradaban Islam di dunia ditandai pada pernyataan nomor …',
    options: { A: { text: '(1), (2) dan (3)' }, B: { text: '(1), (2) dan (4)' }, C: { text: '(1), (3) dan (5)' }, D: { text: '(2), (3) dan (4)' }, E: { text: '(3), (4) dan (5)' } },
    correctAnswer: 'C'
  }
];

const INITIAL_BIN_QUESTIONS: Question[] = [
  {
    id: 'bin-1', subjectId: BIN_SUBJECT_ID, text: '1. Cermati kalimat berikut!\n"Berdasarkan surat lamaran pekerjaan yang saudara kirim, kami beritahukan bahwa saat ini kami belum dapat menerima Saudara untuk bergabung dengan perusahaan kami."\n\nKalimat tersebut merupakan bagian dari ....',
    options: { A: { text: 'Isi balasan surat lamaran pekerjaan' }, B: { text: 'Ucapan selamat dari perusahaan' }, C: { text: 'Pembuka surat balasan pekerjaan' }, D: { text: 'Balasan surat lamaran pekerjaan' }, E: { text: 'Penutup surat balasan pekerjaan' } },
    correctAnswer: 'A'
  },
  {
    id: 'bin-2', subjectId: BIN_SUBJECT_ID, text: '2. "Saya adalah penulis lepas di beberapa penerbit di Jakarta. Profesi sebagai penulis saya jalani sejak 2010 hingga sekarang."\nHal yang dikemukakan dalam surat lamaran tersebut adalah ….',
    options: { A: { text: 'Potensi diri pelamar' }, B: { text: 'Kualifikasi diri pelamar' }, C: { text: 'Loyalitas pelamar' }, D: { text: 'Kemampuan diri pelamar' }, E: { text: 'Bakat yang dimiliki pelamar' } },
    correctAnswer: 'B'
  },
  {
    id: 'bin-3', subjectId: BIN_SUBJECT_ID, text: '3. Pengumuman: Dibutuhkan tenaga kasir minimal lulusan SMA/SMK untuk ditempatkan di kantor cabang di Semarang. Surat lamaran dialamatkan kepada PT Gemilang Raya di Jalan Dr Saharjo No. 34 Jakarta Selatan.\n\nPenutup surat lamaran pekerjaan sesuai dengan pengumuman di atas adalah …',
    options: { A: { text: 'Bapak/Ibu pimpinan saya merasa sesuai dengan kualifikasi pekerjaan sebagai tenaga kasir. Untuk itu dapatlah diterima di perusahaan.' }, B: { text: 'Demikianlah surat lamaran pekerjaan ini. Besar harapan saya untuk dapat diterima di perusahaan yang Bapak/ Ibu Pimpin. Atas perhatian Bapak/ Ibu, saya ucapkan terima kasih.' }, C: { text: 'Demikianlah pemberitahuan lamaran pekerjaan ini, besar harapan saya untuk diterima di perusahaan yang Bapak/ Ibu Pimpin. Atas perhatiannya terima kasih.' }, D: { text: 'Kiranya surat lamaran saya ini dapat Bapak/ Ibu pertimbangkan sehingga saya bisa mengabdi sebagai karyawan bagian kasir di cabang Semarang.' }, E: { text: 'Saya sangat berharap agar dapat diterima menjadi karyawan di bagian kasir PT Gemilang Raya. Atas perhatian Saudara pimpinan, saya sampaikan beribu terima kasih.' } },
    correctAnswer: 'B'
  },
  {
    id: 'bin-4', subjectId: BIN_SUBJECT_ID, text: '4. Perhatikan paragraf pembuka surat lamaran berikut!\n"Berdasarkan iklan di harian Jakarta Pos, 23 Januari 2024, saya sangat ingin menjadi staf redaksi pada perusahaan yang Bapak/Ibu pimpin."\n\nPerbaikan kalimat pembuka surat lamaran pekerjaan tersebut adalah …..',
    options: { A: { text: 'Mengganti sangat ingin menjadi menginginkan' }, B: { text: 'Mengganti sangat ingin menjadi dengan ini melamarnya' }, C: { text: 'Mengganti sangat ingin menjadi mengajukan lamaran pekerjaan' }, D: { text: 'Mengganti sangat ingin menjadi bermaksud ingin' }, E: { text: 'Mengganti sangat ingin menjadi dengan ini menginginkan' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-5', subjectId: BIN_SUBJECT_ID, text: '5. Berikut yang BUKAN langkah-langkah dalam menulis teks editorial adalah ....',
    options: { A: { text: 'Tentukan topik yang signifikan dengan sudut pandang' }, B: { text: 'Kumpulan berbagai informasi dan fakta' }, C: { text: 'Hindari kalimat fakta dalam membuat teks editorial' }, D: { text: 'Kemukakan isu tertentu secara objektif' }, E: { text: 'Berikan terlebih dahulu sudut pandang' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-6', subjectId: BIN_SUBJECT_ID, text: '6. Keterangan pertama menyebutkan, nama Surabaya awalnya adalah Churabaya, desa tempat menyeberang di tepian Sungai Brantas. Keterangan pertama tercantum dalam prasasti Trowulan I tahun 1358 M. Nama Surabaya juga tercantum dalam Pujasastra Negara Kertagama yang ditulis Mpu Prapanca.\n\nPenggalan teks cerita sejarah di atas merupakan bagian …',
    options: { A: { text: 'Orientasi' }, B: { text: 'Pengungkapan peristiwa' }, C: { text: 'Konflik (rising action)' }, D: { text: 'Komplikasi' }, E: { text: 'Resolusi' } },
    correctAnswer: 'A'
  },
  {
    id: 'bin-7', subjectId: BIN_SUBJECT_ID, text: '7. Namun, Surabaya sendiri diyakini oleh para ahli telah ada pada tahun-tahun sebelum prasasti-prasasti tersebut dibuat. Seorang peneliti Belanda bernama G.H. Von Faber dalam karyanya, En Werd Een Stad Geboren (Telah Lahir Sebuah Kota) membuat hipotesis, Surabaya didirikan oleh Raja Kertanegara tahun 1275. Kota itu dibangun sebagai pemukiman baru bagi para prajuritnya yang telah berhasil menumpas pemberontakan Kemuruhan tahun 1270 M.\n\nKalimat utama teks di atas adalah …..',
    options: { A: { text: 'Peneliti Belanda bernama G.H. Von Faber dalam karyanya, En Werd Een Stad Geboren membuat hipotesis.' }, B: { text: 'Hipotesis Von Faber, Surabaya didirikan oleh Raja Kertanegara tahun 1275.' }, C: { text: 'Surabaya didirikan oleh Raja Kertanegara tahun 1275.' }, D: { text: 'Surabaya diyakini oleh para ahli telah ada pada tahun sebelum prasasti dibuat.' }, E: { text: 'Kota itu dibangun sebagai pemukiman baru untuk para prajuritnya.' } },
    correctAnswer: 'D'
  },
  {
    id: 'bin-8', subjectId: BIN_SUBJECT_ID, text: '8. "Di dalam kemarahan dan kekecewaan, Adipati Ronggo Lawe masih ingat untuk menghaturkan sembahnya, tetapi setelah semua salam tata susila ini selesai, serta merta Ronggo Lawe menyembah dan berkata dengan suara lantang... Kemudian dengan suara tenang bertanya, Kakang Ronggo Lawe, apakah maksudmu dengan ucapan itu?"\n\nKonjungsi antarkalimat yang kita temukan dalam teks di atas adalah …',
    options: { A: { text: 'dan' }, B: { text: 'yang' }, C: { text: 'kemudian' }, D: { text: 'tetapi' }, E: { text: 'untuk' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-9', subjectId: BIN_SUBJECT_ID, text: '9. Berdasarkan kutipan "Kemelut di Majapahit", pelajaran hidup yang kita temukan dalam teks tersebut adalah …',
    options: { A: { text: 'Tetap menjaga sopan santun dan berani berkata benar' }, B: { text: 'Tidak emosional jika berhadapan dengan pemimpin.' }, C: { text: 'Tidak memandang sebelah mata lawan bicara' }, D: { text: 'Terus maju dalam mencapai keinginan' }, E: { text: 'Selalu bersuara lantang dalam berbicara' } },
    correctAnswer: 'A'
  },
  {
    id: 'bin-10', subjectId: BIN_SUBJECT_ID, text: '10. "Kalau dugaan kita yang seperti itu benar adanya, bisa saja di antara kita menengarai langkah pemerintah itu sebagai reaksi semu... ada politisi yang mengategorikannya sebagai reaksi yang cenderung bersifat pencitraan..." \n\nMakna kata menengarai dan pencitraan dalam teks di atas adalah ……',
    options: { A: { text: 'Menunjukkan tanda, penggambaran' }, B: { text: 'Mengunjungi, keadaan berupa kenyataan' }, C: { text: 'Memandang ke atas, pengaruh kuat' }, D: { text: 'Memberikan, gambaran visual' }, E: { text: 'Berpendirian, kemampuan berpikir' } },
    correctAnswer: 'A'
  },
  {
    id: 'bin-11', subjectId: BIN_SUBJECT_ID, text: '11. Manfaat teks editorial adalah …....',
    options: { A: { text: 'Menyampaikan opini masyarakat yang saling bertentangan.' }, B: { text: 'Peristiwa yang merupakan sesuatu yang benar-benar terjadi.' }, C: { text: 'mengajak pembaca untuk ikut memberikan pandangan terhadap isu yang sedang dibicarakan masyarakat.' }, D: { text: 'Mempersiapkan masyarakat akan adanya kemungkinan yang terjadi' }, E: { text: 'Menjelaskan berita dan akibatnya kepada masyarakat.' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-12', subjectId: BIN_SUBJECT_ID, text: '12. "Dalam beberapa tahun terakhir, bahkan keindahan sejumlah tempat terancam oleh eksploitasi alam yang salah dan serakah... Keinginan pemerintah pusat menjadikannya sebagai taman nasional ditentang justru oleh pemerintah daerah."\n\nParagraf di atas meruapakan bagian…. dari teks editorial.',
    options: { A: { text: 'Pengenalan isu' }, B: { text: 'Penegasan' }, C: { text: 'konflikasi' }, D: { text: 'Pernyataan pendapat atau argumentasi' }, E: { text: 'Koda atau penutup' } },
    correctAnswer: 'D'
  },
  {
    id: 'bin-13', subjectId: BIN_SUBJECT_ID, text: '13. Pernyataan berikut yang berupa opini adalah …',
    options: { A: { text: 'Ada begitu banyak tempat indah yang tersembunyi dan masih belum tersentuh.' }, B: { text: 'Resor tumbuh menjamur, tetapi kontribusi mereka kepada ekonomi daerah amat minimal.' }, C: { text: 'Dalam beberapa tahun terakhir, bahkan keindahan sejumlah tempat terancam oleh eksploitasi alam yang salah.' }, D: { text: 'Di dunia ini hanya ada tiga tempat yang memiliki barrel-ombak berbentuk terowongan yang dapat ditemui sepanjang waktu: Hawaii, Haiti, dan Mentawai.' }, E: { text: 'Kepulauan Togean memiliki pantai- pantai indah, laut yang bening dan tenang, serta ikan berwarna-warni yang menyelinap di antara terumbu karang.' } },
    correctAnswer: 'A'
  },
  {
    id: 'bin-14', subjectId: BIN_SUBJECT_ID, text: '14. Setelah Raden Wijaya berhasil menjadi Raja Majapahit pertama, beliau tidak melupakan jasa para senopati (perwira) yang setia dan banyak membantunya. Beliau membagi-bagikan pangkat kepada mereka.\n\nNilai kehidupan yang kita temukan dalam cerita di atas adalah …',
    options: { A: { text: 'Nilai agama' }, B: { text: 'Nilai budaya' }, C: { text: 'Nilai sosial' }, D: { text: 'Nilai pendidikan' }, E: { text: 'Nilai moral' } },
    correctAnswer: 'E'
  },
  {
    id: 'bin-15', subjectId: BIN_SUBJECT_ID, text: '15. "Sungguh, kenaikan harga itu merupakan kado yang tidak simpatik, tidak bijak, dan tidak logis. Masyarakat sebagai konsumen menjadi terkaget-kaget karena kenaikan tanpa didahului sosialisasi."\n\nPenggalan teks editorial di atas merupakan ….',
    options: { A: { text: 'Pengenalan isu' }, B: { text: 'Penyampaian pendapat atau argumen' }, C: { text: 'Penegasan' }, D: { text: 'komplikasi' }, E: { text: 'koda' } },
    correctAnswer: 'B'
  },
  {
    id: 'bin-16', subjectId: BIN_SUBJECT_ID, text: '16. Manakah di antara kalimat berikut yang termasuk ke dalam opini berupa saran …',
    options: { A: { text: 'Pertamina tidak bisa semata-mata menjadikan harga pasar dunia sebagai kiblat dalam membuat suatu keputusan.' }, B: { text: 'Redaksi menduga bahwa pengakuan pemerintah yang tidak mengetahui tentang rencana kenaikan harga elpiji sangatlah tidak benar.' }, C: { text: 'Pemerintah harusnya memanfaatkan keuntungan besar dari hasil tambang minyak dan gas demi kesejahteraan dan kemakmuran rakyat.' }, D: { text: 'Caranya yaitu dengan menyisihkan sekian persen keuntungan yang didapat untuk memberikan subsidi kebutuhan bahan bakar.' }, E: { text: 'Kenaikan harga elpiji merupakan kado ulang tahun baru di 2021 yang tidak simpatik, tidak logis, dan tidak bijak.' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-17', subjectId: BIN_SUBJECT_ID, text: '17. "Sejumlah penelitian telah membuktikan bahwa keseringan mengonsumsi makanan cepat saji saja memang tidak berdampak secara langsung ke tubuh. Namun, makanan-makanan tersebut akan tertimbun di dalam tubuh yang kemudian menjadi penyebab penyakit mematikan..." \n\nKonjungsi yang terdapat dalam paragraf di atas adalah …',
    options: { A: { text: 'bahwa, namun, kemudian' }, B: { text: 'yang, secara, namun' }, C: { text: 'telah, secara, akan' }, D: { text: 'bahwa, secara, hanya' }, E: { text: 'yang, dan, juga' } },
    correctAnswer: 'A'
  },
  {
    id: 'bin-18', subjectId: BIN_SUBJECT_ID, text: '18. Bacalah paragraf berikut!\n(1) Proses saintifikasi jamu pada saat ini belum optimal.\n(2) Hal ini ditandai oleh minimnya jumlah jamu yang telah dibuktikan secara ilmiah.\n(3) Potensi kenaekaragaman bahan baku tersedia berlimpah di alam Indonesia.\n(4) Kondisi ini disebabkan oleh lemahnya manajemen riset jamu.\n(5) Ketidakadaan kebijakan yang mengatur tentang jamu semakin memperparah keadaan ini.\n\nKalimat sumbang pada paragraf di atas adalah ….',
    options: { A: { text: 'Kalimat (1)' }, B: { text: 'Kalimat (2)' }, C: { text: 'Kalimat (3)' }, D: { text: 'Kalimat (4)' }, E: { text: 'Kalimat (5)' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-19', subjectId: BIN_SUBJECT_ID, text: '19. Indonesia sering disebut sebagai salah satu di antara paru-paru dunia karena luasnya wilayah tropis. Wilayah hutan kita yang luas menyumbang banyak oksigen yang dibutuhkan masyarakat. Namun, apakah ini akan terus berlanjut melihat tingginya kerusakan hutan di Indonesia?\n\nYang merupakan bagian pengenalan isu adalah …',
    options: { A: { text: 'Paragraf ke-1' }, B: { text: 'Paragraf ke-2' }, C: { text: 'Paragraf ke- 1 dan ke-2' }, D: { text: 'Paragraf ke-3' }, E: { text: 'Paragraf ke-3 dan ke-4' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-20', subjectId: BIN_SUBJECT_ID, text: '20. Kalimat berikut yang berupa kalimat retoris adalah …',
    options: { A: { text: 'Sebaiknya masyarakat bersama pemerintah bersama-sama menjaga dan memberi perhatian lebih terhadap hutan di Indonesia.' }, B: { text: 'Dari Januari hingga Mei, tercatat kebakaran yang terjadi di Indonesia sudah seluas 42.740 hektar.' }, C: { text: 'Apa peran hutan bagi kelangsungan makhluk hidup?' }, D: { text: 'Indonesia sering disebut sebagai salah satu di antara paru-paru dunia.' }, E: { text: 'Apakah ini akan terus berlanjut melihat tingginya kerusakan hutan dan kebakaran hutan di Indonesia?' } },
    correctAnswer: 'E'
  },
  {
    id: 'bin-21', subjectId: BIN_SUBJECT_ID, text: '21. Berikut yang tidak termasuk ciri teks editorial adalah….',
    options: { A: { text: 'Berisi opini redaksi tentang peristiwa yang sedang hangat dibicarakan' }, B: { text: 'Berisi ulasan tentang suatu masalah yang dimuat.' }, C: { text: 'Biasanya bersekala nasional atau berita internasional yang berdampak nasional.' }, D: { text: 'Tentang pikiran subjektif redaksi' }, E: { text: 'Bersifat cerita rekaan' } },
    correctAnswer: 'E'
  },
  {
    id: 'bin-22', subjectId: BIN_SUBJECT_ID, text: '22. "Prajurit-prajurit yang telah diperintahkan membersihkan gedung bekas asrama telah menyelesaikan tugasnya."\n\nKata "telah diperintahkan" pada kalimat di atas menunjukkan....',
    options: { A: { text: 'Menggunakan kata yang menyatakan urutan' }, B: { text: 'Menggunakan kalimat bermakna lampau' }, C: { text: 'Menggunakan kata kerja material' }, D: { text: 'Menggunakan kalimat langsung' }, E: { text: 'Menggunakan kata sifat' } },
    correctAnswer: 'B'
  },
  {
    id: 'bin-23', subjectId: BIN_SUBJECT_ID, text: '23. "Bapaknya yang masih duduk senang di atas kursi rotan itu, jadi Manteri Kabupaten di kantor Patih Sumedang... Barang dimana ada keramaian... hampir selalu ia keliatan. Hampir di dalam segala perkara ia hendak di atas..." \n\nSudut pandang yang digunakan pengarang dalam kutipan cerpen tersebut adalah …',
    options: { A: { text: 'orang pertama' }, B: { text: 'orang kedua' }, C: { text: 'orang ketiga' }, D: { text: 'orang pertama dan kedua' }, E: { text: 'orang kedua dan ketiga' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-24', subjectId: BIN_SUBJECT_ID, text: '24. Cermati penggalan iklan: "Sampah menimbulkan bau tidak sedap dan menyebabkan penyakit. Sampah juga dapat menyebabkan banjir." \n\nPada contoh iklan tersebut, kalimat tersebut merupakan struktur bagian....',
    options: { A: { text: 'Judul/Nama Produk' }, B: { text: 'Slogan' }, C: { text: 'Visualisasi' }, D: { text: 'Justifikasi/Penjelasan' }, E: { text: 'Instruksi' } },
    correctAnswer: 'D'
  },
  {
    id: 'bin-25', subjectId: BIN_SUBJECT_ID, text: '25. Iklan: "Telah lama saya menderita penyakit jantung... Akhirnya saya bertemu teman dan diberi saran mengonsumsi Lenatrov Nawasena. Penyakit jantung saya sembuh tanpa harus dioperasi. Terima kasih Lenatrov Nawasena."\n\nTeks tersebut merupakan bentuk iklan yang berupa...',
    options: { A: { text: 'berita' }, B: { text: 'advertorial' }, C: { text: 'testimoni' }, D: { text: 'layanan masyarakat' }, E: { text: 'penawaran' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-26', subjectId: BIN_SUBJECT_ID, text: '26. Kalimat berikut ini yang merupakan kalimat persuasif yaitu...',
    options: { A: { text: 'Wardah Cosmetics sangat cocok untuk muslimah Indonesia.' }, B: { text: 'Bandingkan hasil kerja kami dengan yang lain.' }, C: { text: 'Silakan berbelanja di warung Bu Broto.' }, D: { text: 'Bank SAWAN memberikan layanan sepenuh hati.' }, E: { text: 'Dengan sekali usap noda membandel akan menghilang.' } },
    correctAnswer: 'E'
  },
  {
    id: 'bin-27', subjectId: BIN_SUBJECT_ID, text: '27. Iklan: "Dijual 5 unit motor, mesin istimewa. Berminat, hubungi Nona Melati, Telp. 081310102025."\n\nBagian iklan tersebut yang merupakan opini adalah …',
    options: { A: { text: 'Dijual 5 unit motor' }, B: { text: 'Mesin istimewa' }, C: { text: 'Berminat' }, D: { text: 'Hubungi Nona Melati' }, E: { text: 'Telp. 081310102025' } },
    correctAnswer: 'B'
  },
  {
    id: 'bin-28', subjectId: BIN_SUBJECT_ID, text: '28. Di antara kalimat berikut ini, manakah yang menggunakan majas personifikasi?',
    options: { A: { text: 'Minyak telon “ My Baby” sehangat belaian ibu.' }, B: { text: 'Lebih baik naik Scoopy.' }, C: { text: 'Dengan sekali bilas, rambut Anda jadi bersinar.' }, D: { text: 'Kecap merpati benar-benar kecap.' }, E: { text: 'Rinso mencuci sendiri hingga bersih.' } },
    correctAnswer: 'E'
  },
  {
    id: 'bin-29', subjectId: BIN_SUBJECT_ID, text: '29. "Setitik ilmu jauh lebih berharga dibandingkan dengan setumpuk harta."\n\nTeks iklan tersebut merupakan iklan...',
    options: { A: { text: 'Penawaran' }, B: { text: 'Permintaan' }, C: { text: 'Layanan masyarakat' }, D: { text: 'Keluarga' }, E: { text: 'Niaga' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-30', subjectId: BIN_SUBJECT_ID, text: '30. "....kuota terbatas, siap cepat dapat...."\n\nPenggalan tersebut merupakan bagian rumus AIDCA yang berupa....',
    options: { A: { text: 'Attention (perhatian)' }, B: { text: 'Interest (minat)' }, C: { text: 'Desire (kebutuhan/keinginan)' }, D: { text: 'Conviction (rasa percaya)' }, E: { text: 'Action (tindakan)' } },
    correctAnswer: 'E'
  },
  {
    id: 'bin-31', subjectId: BIN_SUBJECT_ID, text: '31. Untuk mendorong perusahaan industri menerapkan prinsip Industri Hijau... Perusahaan industri penerima Penghargaan Industri Hijau dipastikan memenuhi kriteria sebagai industri maju yang tingkat profitabilitasnya tinggi.\n\nSimpulan yang tepat untuk penggalan teks artikel tersebut yaitu...',
    options: { A: { text: 'Perusahaan industri penerima Penghargaan Industri Hijau dipastikan memenuhi kriteria sebagai industri maju yang keuntungannya tinggi.' }, B: { text: 'Perusahaan industri penerima Penghargaan Industri Hijau dipastikan memenuhi kriteria sebagai industri maju yang kinerja keuangannya bagus.' }, C: { text: 'Perusahaan industri penerima Penghargaan Industri Hijau dipastikan memenuhi kriteria sebagai industri maju yang efisien dalam penggunaan sumber daya material, energi, dan air.' }, D: { text: 'Perusahaan industri penerima Penghargaan Industri Hijau dipastikan memenuhi kriteria sebagai industri maju yang bergerak di bidang manufaktur.' }, E: { text: 'Perusahaan industri penerima Penghargaan Industri Hijau dipastikan memenuhi kriteria sebagai industri kecil, menengah, dan besar yang efisein dalam pemakaian bahan bakar.' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-32', subjectId: BIN_SUBJECT_ID, text: '32. "Mengurangi limbah plastik dengan menggunakan kemasan ulang atau yang mudah [...] merupakan langkah [...] mengurangi dampak lingkungan... Gerakan membersihkan sampah merupakan bagian penting dalam masalah [...] plastik."\n\nKata-kata yang tepat untuk melengkapi kalimat rumpang tersebut yaitu...',
    options: { A: { text: 'Tergradasi, strategis, polusi' }, B: { text: 'Tergeradasi, seterategis, polutan' }, C: { text: 'Gradasi, strategis, polusi' }, D: { text: 'Tergradasi, strategis, Polutan' }, E: { text: 'Terdegradasi, strategis, polusi' } },
    correctAnswer: 'E'
  },
  {
    id: 'bin-33', subjectId: BIN_SUBJECT_ID, text: '33. Indonesia menghasilkan sampah sebanyak 175.000 ton per hari, dengan masing-masing orang menyumbang 0,7 kilogram sampah. Persoalan sampah plastik menjadi masalah serius karena sulit terurai oleh alam.\n\nPada penggalan teks artikel tersebut, kalimat yang merupakan FAKTA yaitu....',
    options: { A: { text: 'Indonesia menghasilkan sampah sebanyak 175.000 ton per hari, dengan masing-masing orang menyumbang 0,7 kilogram sampah.' }, B: { text: 'Persoalan sampah, terutama plastik, memang menjadi masalah serius, karena sulit terurai oleh alam.' }, C: { text: 'Secara umum masyarakat Indonesia menanggulangi sampah plastik dengan cara membakar sampah, menimbun, dan membuangnya ke laut.' }, D: { text: 'Sampah plastik terus terakumulasi dan mengancam kehidupan jika tidak ditangani atau dikelola dengan tepat.' }, E: { text: 'Namun, cara ini tidak dianjurkan sebab asap yang dihasilkan dapat menyebabkan racun bagi masyarakat.' } },
    correctAnswer: 'A'
  },
  {
    id: 'bin-34', subjectId: BIN_SUBJECT_ID, text: '34. (2) Bisnis online ditengarai sebagai penyebab melesunya belanja di mall. (5) Fenomena tutupnya mall diperkirakan akan terus bertambah. (6) Masyarakat mulai beralih ke aktivitas outdoor leasure seperti bisnis kuliner.\n\nKalimat OPINI dalam teks tersebut terdapat pada kalimat nomor....',
    options: { A: { text: '(1) dan (2)' }, B: { text: '(2) dan (5)' }, C: { text: '(2) dan (6)' }, D: { text: '(3) dan (4)' }, E: { text: '(5) dan (6)' } },
    correctAnswer: 'B'
  },
  {
    id: 'bin-35', subjectId: BIN_SUBJECT_ID, text: '35. Kalimat berikut ini yang menggunakan verba transitif yaitu...',
    options: { A: { text: 'Masyarakat Indonesia menanggulangi sampah plastik.' }, B: { text: 'Wahyu bermain bola voli di tanah lapang dekat sekolah.' }, C: { text: 'Indah bernyanyi dengan penuh penghayatan pada saat membawakan lagu Indonesia Raya.' }, D: { text: 'Sepeda motor tertabrak oleh sebuah bus yang meyebabkan pengendara mengalami luka serius.' }, E: { text: 'Burung-burung bersahutan di dahan pohon ketika pagi tiba.' } },
    correctAnswer: 'A'
  },
  {
    id: 'bin-36', subjectId: BIN_SUBJECT_ID, text: '36. Pendidikan sebagai wahana penyiapan sumber daya manusia harus [...] terhadap tuntutan dunia industri. [...] antara dunia pendidikan dan industri merupakan sesuatu yang tidak terpisahkan.\n\nIstilah yang tepat untuk menisi klaimat rumpang tersebut yaitu...',
    options: { A: { text: 'selektif, Partisipasi' }, B: { text: 'variatif, Intervensi' }, C: { text: 'adaptif, Interaksi' }, D: { text: 'interaktif, Interkoneksi' }, E: { text: 'fluktuatif, Asosiasi' } },
    correctAnswer: 'C'
  },
  {
    id: 'bin-37', subjectId: BIN_SUBJECT_ID, text: '37. Konsumen percaya bahwa pemerintah telah bekerja dengan baik, ini tercermin pada laju [...] yang terkendali, yang terefleksi pada harga pangan yang relatif [...]\n\nIstilah yang tepat untuk mengisi kalimat rumpang tersebut yaitu...',
    options: { A: { text: 'Akumulasi, inflasi' }, B: { text: 'Akselerasi, akumulasi' }, C: { text: 'Akuntabel, inflasi' }, D: { text: 'Ekspektasi, stabil' }, E: { text: 'Inflasi, stabil' } },
    correctAnswer: 'E'
  },
  {
    id: 'bin-38', subjectId: BIN_SUBJECT_ID, text: '38. Penulisan nomor, lampiran, dan hal pada surat dinas yang tepat yaitu...',
    options: { A: { text: 'Nomor: 120/A/5/2024; Lamp: Tiga Bendel; Hal: PEMBENTUKAN PANITIA' }, B: { text: 'Nomor: 120/A.V/2024; Lamp: tiga bendel; Hal: pembentukan panitia' }, C: { text: 'Nomor: 120/A/V/2024; Lamp: Tiga bendel; Hal: Pembentukan panitia' }, D: { text: 'Nomor: 120/A/V/2024; Lamp: Tiga Bendel; Hal: Pembentukan Panitia' }, E: { text: 'Nomor: 120.A.V.2024; Lamp: 3 (tiga) bendel; Hal: Pembentukan panitia' } },
    correctAnswer: 'D'
  },
  {
    id: 'bin-39', subjectId: BIN_SUBJECT_ID, text: '39. Penulisan tanggal pada surat dinas yang tepat adalah...',
    options: { A: { text: 'Tangerang, 12 September 2023' }, B: { text: 'tangerang, 12 - 9 -2023' }, C: { text: 'Tangerang, 12 – 9 - 2023' }, D: { text: 'Tangerang.12 September 2023' }, E: { text: 'TANGERANG, 12 September 2023' } },
    correctAnswer: 'A'
  },
  {
    id: 'bin-40', subjectId: BIN_SUBJECT_ID, text: '40. Cermati penggalan surat dinas: YTH. Bapak Prof. Dr. H. Amir Mahmud, M.Pd. JL. Kenanga Km. 08, Tangerang.\n\nPerbaikan penulisan alamat pada surat dinas yang tepat yaitu...',
    options: { A: { text: 'Yth. Bapak Prof. Dr. H. Amir Mahmud, M.Pd.\nJalan Kenanga Km. 08\nTangerang' }, B: { text: 'Yth. Bapak Amir Mahmud\nJln Kenanga Km. 08\nTangerang' }, C: { text: 'YTH. Bapak Prof. Dr. H. Amir Mahmud, M.Pd.\nJalan Kenanga Km. 08\nTangerang' }, D: { text: 'yth. Bapak Prof. Dr. H. Amir Mahmud, M.Pd.\nJalan Kenanga Km. 08\nTangerang' }, E: { text: 'Yth. Bapak Amir Mahmud\nJalan Kenanga Km. 08\nTangerang' } },
    correctAnswer: 'A'
  }
];

const rawScenarios = [
  ["Interviewer: 'What is your biggest weakness?' Candidate: '...'", "I tend to focus too much on details, but I am working on time management.", "I don't have any weaknesses.", "I like sleeping late.", "My cat is very naughty.", "I want a high salary."],
  ["Caller: 'Could I speak to the manager, please?' You: '...'", "I'm sorry, she is in a meeting at the moment. Can I take a message?", "She is not here.", "Who are you?", "Why do you want to talk to her?", "Call again later."],
  ["Customer: 'I'm looking for a gift for my sister.' Assistant: '...'", "How about this latest smartphone model? It's very popular.", "I don't know your sister.", "She is over there.", "What is her name?", "Give her money."],
  ["Technician: 'The machine is broken.' Manager: '...'", "Have you tried checking the fuse box yet?", "Just throw it away.", "It's your fault.", "I am busy.", "Buy a new one."],
  ["Tourist: 'Excuse me, is there a bank near here?' You: '...'", "Yes, there's one just around the corner, next to the post office.", "Banks are closed.", "I am poor.", "Go to Jakarta.", "Follow me."],
  ["Chef: 'We are out of onions.' Assistant: '...'", "I will go to the market immediately to buy some.", "We don't need onions.", "Use garlic instead.", "It's not my job.", "Cry."],
  ["Receptionist: 'Welcome to Grand Hotel. How can I help you?' Guest: '...'", "I'd like to check in, please. I have a reservation.", "Where is my room?", "I am hungry.", "The lobby is beautiful.", "Goodbye."],
  ["Friend: 'Let's go to the cinema tonight.' You: '...'", "That sounds like a great idea! What movie should we watch?", "I am tired.", "The cinema is far.", "I have no money.", "No."],
  ["Teacher: 'Can you summarize the main point of this text?' Student: '...'", "Basically, the author argues that technology affects social skills.", "The text is long.", "I didn't read it.", "It's about a cat.", "I don't know."],
  ["Waiter: 'How would you like your steak?' Customer: '...'", "Medium rare, please.", "On a plate.", "With a fork.", "Hot.", "Fast."],
  ["Flight Attendant: 'Would you like something to drink?' Passenger: '...'", "A cup of hot coffee, please.", "I am flying.", "Where are we?", "No, I am full.", "Give me money."],
  ["Shopkeeper: 'That will be twenty dollars.' Customer: '...'", "Here is a fifty-dollar note.", "It's too expensive.", "Can I have it for free?", "Where is the exit?", "I'll be back."],
  ["Colleague: 'Do you need any help with that report?' You: '...'", "Yes, that would be very kind of you. Thanks!", "I can do it myself.", "Go away.", "The report is boring.", "Maybe."],
  ["Doctor: 'How long have you felt this way?' Patient: '...'", "Since last Monday, Doctor.", "I am sick.", "Where am I?", "I don't like hospitals.", "Fix me."],
  ["Security Guard: 'Please show me your ID card.' Visitor: '...'", "Here it is, Sir.", "I forgot it.", "Why?", "No.", "I am a boss."],
  ["Secretary: 'Mr. Lee is on the other line. Will you hold?' Caller: '...'", "Yes, I'll wait.", "No, tell him to call me.", "Who is Mr. Lee?", "Hang up.", "Wait."],
  ["Cashier: 'Would you like a bag for these?' Customer: '...'", "No thanks, I have my own reusable bag.", "Yes, a big one.", "How much?", "The bag is red.", "Okay."],
  ["Barista: 'What name should I put on the cup?' Customer: '...'", "Please write 'Alex'.", "My name is secret.", "Just 'Coffee'.", "I don't have a name.", "Whatever."],
  ["Travel Agent: 'When do you plan to travel?' Client: '...'", "Next summer, around July.", "Tomorrow.", "I don't know.", "Somewhere far.", "Never."],
  ["HR Manager: 'Why do you want to work for this company?' Applicant: '...'", "I've always admired your innovative approach to engineering.", "I need money.", "My house is near.", "I am bored.", "Why not?"],
  ["Librarian: 'The book you requested is now available.' Student: '...'", "Great! I'll come by this afternoon to pick it up.", "I don't need it anymore.", "Where is it?", "Thanks.", "Keep it."],
  ["Nurse: 'Does it hurt when I press here?' Patient: '...'", "Yes, quite a bit actually.", "No.", "Maybe.", "Stop it.", "Ow!"],
  ["Real Estate Agent: 'This house has three bedrooms.' Buyer: '...'", "Is there a garden in the back as well?", "The house is old.", "I don't like it.", "Too small.", "Cheap."],
  ["Tour Guide: 'On your left is the national monument.' Tourist: '...'", "Wow, it looks impressive! Can we take photos?", "I am tired of walking.", "Where is the toilet?", "It's tall.", "Next."],
  ["Mechanic: 'Your brake pads need replacing.' Car Owner: '...'", "How much will that cost in total?", "Fix it now.", "I don't believe you.", "Can I do it later?", "Expensive."],
  ["Tailor: 'I can have the suit ready by Friday.' Customer: '...'", "That's perfect. I need it for a wedding on Saturday.", "Too slow.", "Make it faster.", "I'll pay later.", "Thanks."],
  ["Hairdresser: 'How would you like your hair cut today?' Client: '...'", "Just a trim on the ends, please.", "Short.", "Like a star.", "Surprise me.", "I don't know."],
  ["Launderette: 'Your laundry will be ready in two hours.' Customer: '...'", "Okay, I'll go grab some lunch and come back then.", "Can you deliver it?", "Too long.", "I need it now.", "Fine."],
  ["Pharmacist: 'Take one tablet after every meal.' Customer: '...'", "Should I take it with water or milk?", "Is it bitter?", "I don't like tablets.", "Okay.", "Thanks."],
  ["Electrician: 'The wiring in this room is outdated.' Householder: '...'", "Is it dangerous to keep using it like this?", "Replace it.", "How much?", "I'll do it myself.", "No."],
  ["Postman: 'I have a registered letter for you.' Resident: '...'", "Let me find my pen to sign for it.", "Who is it from?", "I am busy.", "Leave it there.", "No."],
  ["Optician: 'Read the smallest line you can see.' Patient: '...'", "E, F, P, T, O, Z.", "I can't see anything.", "The light is too bright.", "Wait.", "What?"],
  ["Jeweler: 'This ring is made of 18-carat gold.' Customer: '...'", "Does it come with a certificate of authenticity?", "It's beautiful.", "Too shiny.", "Expensive.", "I'll take it."],
  ["Florist: 'Would you like to add a card to the bouquet?' Customer: '...'", "Yes, please. Just write 'Happy Anniversary'.", "No.", "What for?", "How much?", "Okay."],
  ["Greengrocer: 'These apples are fresh from the farm.' Customer: '...'", "I'll take two kilograms, please.", "They look sour.", "Too small.", "Cheap.", "Next."],
  ["Butcher: 'How much ground beef do you need?' Customer: '...'", "About half a kilogram should be enough.", "Is it fresh?", "Give me the best one.", "No.", "Thanks."],
  ["Baker: 'The croissants just came out of the oven.' Customer: '...'", "They smell delicious! I'll have three, please.", "Are they hot?", "Too many.", "Give me one.", "Okay."],
  ["Cobbler: 'I can fix the heel on this shoe.' Customer: '...'", "When will it be ready for collection?", "It's broken.", "Cheap.", "Make it strong.", "Thanks."],
  ["Plumber: 'The leak is coming from a cracked pipe.' Homeowner: '...'", "Can you fix it without breaking the wall?", "Fix it fast.", "Water is everywhere.", "Expensive.", "Okay."],
  ["Gardener: 'Your lawn needs some fertilizer.' Owner: '...'", "Which type do you recommend for this grass?", "It's green.", "Don't bother.", "How much?", "Do it."],
  ["Pet Shop Owner: 'This kitten is very friendly.' Customer: '...'", "Does it have all its vaccinations already?", "It's cute.", "I want a dog.", "How much?", "Meow."],
  ["Coach: 'You need to practice your serve more.' Player: '...'", "I'll work on it every morning this week.", "I am tired.", "It's hard.", "I'm the best.", "Whatever."],
  ["Music Teacher: 'You're playing a bit too fast.' Student: '...'", "Sorry, I'll try to keep a steadier tempo.", "The song is fast.", "I like it fast.", "Okay.", "Next."],
  ["Driving Instructor: 'Check your mirrors before turning.' Learner: '...'", "Right, I always forget that part. Sorry.", "I am looking.", "Why?", "The mirror is dirty.", "Okay."],
  ["Flight Agent: 'Window or aisle seat?' Passenger: '...'", "Window seat, please. I like to see the view.", "Aisle.", "Anywhere.", "Near the exit.", "Center."],
  ["Police Officer: 'Do you know why I pulled you over?' Driver: '...'", "I suspect I might have been speeding a little.", "I did nothing.", "Who are you?", "Let me go.", "No."],
  ["Judge: 'How do you plead?' Defendant: '...'", "Not guilty, Your Honor.", "I didn't do it.", "Help me.", "I am sorry.", "Guilty."],
  ["Priest: 'Do you take this woman to be your wife?' Groom: '...'", "I do.", "Maybe.", "Yes.", "I am nervous.", "No."],
  ["Vicar: 'Let us pray.' Congregation: '...'", "Amen.", "Why?", "Okay.", "Shh.", "Next."],
  ["Yoga Instructor: 'Breath in deeply through your nose.' Student: '...'", "(Breathes in deeply)", "I can't.", "It's hard.", "Why?", "Okay."],
  ["Gym Trainer: 'Five more reps, you can do it!' Member: '...'", "(Gasping) I'll try my best!", "No more.", "I'm dying.", "Stop.", "Okay."],
  ["Surveyor: 'The boundary line is exactly here.' Landowner: '...'", "Are you sure? It seems further back to me.", "That's mine.", "Okay.", "Check again.", "Move it."],
  ["Auctioneer: 'Going once, going twice... sold!' Buyer: '...'", "Yes! I finally got it!", "Wait.", "Too much.", "Who won?", "No."],
  ["Curator: 'Please do not touch the exhibits.' Visitor: '...'", "Oh, I'm sorry. I didn't see the sign.", "Why not?", "It's fake.", "Okay.", "I'm just looking."],
  ["Park Ranger: 'Feeding the bears is strictly prohibited.' Camper: '...'", "I understand. Safety first.", "They are hungry.", "Just a little.", "Okay.", "Why?"],
  ["Lifeguard: 'The current is too strong for swimming today.' Beachgoer: '...'", "Thanks for the warning. We'll stay on the sand.", "I am a good swimmer.", "It's hot.", "Whatever.", "Is it?"],
  ["Ski Instructor: 'Lean forward into the boots.' Skier: '...'", "Like this? It feels a bit strange.", "I'll fall.", "It's cold.", "No.", "Okay."],
  ["Golf Pro: 'Keep your head down during the swing.' Amateur: '...'", "I keep trying, but I always want to see where the ball goes.", "Hard.", "Okay.", "Look.", "Why?"],
  ["Referee: 'Yellow card for unsportsmanlike conduct!' Player: '...'", "But I barely touched him, Ref!", "Sorry.", "Whatever.", "No.", "Come on!"],
  ["Umpire: 'Strike three! You're out!' Batter: '...'", "That was a ball, not a strike!", "Damn.", "Okay.", "Next.", "Wait."],
  ["Fortune Teller: 'I see a long journey in your future.' Client: '...'", "Will I be traveling for business or pleasure?", "Wow.", "When?", "I am stay.", "Really?"],
  ["Magician: 'Is this your card?' Audience Member: '...'", "Yes! How did you do that?", "No.", "Maybe.", "Magic.", "Cool."],
  ["Clown: 'Who wants a balloon animal?' Child: '...'", "Me! Can I have a blue dog, please?", "No.", "Scary.", "Give me.", "Yay!"],
  ["Santa Claus: 'What do you want for Christmas?' Child: '...'", "A new bicycle, please!", "Nothing.", "Everything.", "Toys.", "A cat."],
  ["Ghost: 'Boo!' Person: '...'", "Aaah! You scared me!", "Hello.", "Go away.", "Fake.", "What?"],
  ["Alien: 'Take me to your leader.' Human: '...'", "I'm not sure we have one that everyone agrees on.", "Who?", "No.", "Welcome.", "Scary."],
  ["Robot: 'System error. Rebooting...' User: '...'", "Oh no, I haven't saved my work yet!", "Fix it.", "Damn.", "Fast.", "Wait."],
  ["Zookeeper: 'The lions are being fed right now.' Visitor: '...'", "Can we watch from the viewing gallery?", "Cool.", "Scary.", "Meat.", "Big."],
  ["Street Performer: 'Thank you for your contribution.' Passerby: '...'", "You're welcome. You're very talented!", "Keep it.", "Small.", "Whatever.", "No."],
  ["Shoe Salesman: 'How do they feel?' Customer: '...'", "A bit tight around the toes, do you have a wider size?", "Good.", "Red.", "Cheap.", "Fast."],
  ["Wine Waiter: 'Would you like to taste the wine, Sir?' Guest: '...'", "Yes, please. (Tastes) It's excellent.", "No.", "Is it old?", "Red wine.", "Fine."],
  ["Pizza Delivery: 'That's $15.50.' Customer: '...'", "Keep the change. Have a good night!", "Too late.", "Hot pizza.", "Where is the soda?", "Okay."],
  ["Bus Driver: 'Move to the back of the bus, please.' Passenger: '...'", "Sorry, coming through.", "No.", "It's full.", "Wait.", "Okay."],
  ["Ticket Inspector: 'Tickets and passes, please.' Passenger: '...'", "Here's my monthly pass.", "I lost it.", "Wait.", "No.", "Where?"],
  ["News Anchor: 'And that's the news for tonight.' Viewer: '...'", "Well, that was a depressing broadcast.", "Turn it off.", "Good night.", "What?", "Next."],
  ["Weather Reporter: 'Expect heavy rain this weekend.' Viewer: '...'", "There goes our plan for a picnic.", "I like rain.", "Wet.", "Umbrella.", "Okay."],
  ["Radio DJ: 'This next song is for a special listener.' Listener: '...'", "I hope it's the one I requested earlier!", "Who?", "Nice.", "Cool.", "Whatever."],
  ["Vlogger: 'Don't forget to like and subscribe!' Viewer: '...'", "Already done! Love your content.", "No.", "Done.", "Boring.", "Maybe."],
  ["Gamer: 'I'm lagging! Fix the server!' Admin: '...'", "We're working on it, please be patient.", "Your internet sucks.", "Lag.", "No.", "Whatever."],
  ["Influencer: 'Check out my new sponsorship deal.' Follower: '...'", "Looks interesting, I might try that product.", "Sellout.", "Cool.", "Cheap.", "No."],
  ["Hacker: 'I'm in.' Partner: '...'", "Quick, download the files before they trace us!", "Go.", "Cool.", "FBI!", "Wait."],
  ["Cybersecurity Expert: 'Change your password immediately.' User: '...'", "Is my account at risk of being hacked?", "Why?", "Done.", "Later.", "No."],
  ["Data Scientist: 'The correlation is significant.' Colleague: '...'", "Does that mean our hypothesis was correct?", "Math.", "Cool.", "What?", "Yes."],
  ["Software Developer: 'It works on my machine.' QA Tester: '...'", "But it crashes every time I open the dashboard.", "Fix it.", "Bugs.", "Always.", "Whatever."],
  ["UX Designer: 'The user flow is too confusing.' Project Manager: '...'", "How can we simplify the navigation menu?", "Change it.", "Fine.", "Whatever.", "Okay."],
  ["Product Owner: 'We need to pivot our strategy.' Team: '...'", "What's the new direction for the project?", "Why?", "Again?", "Okay.", "No."],
  ["Scrum Master: 'Any blockers for today?' Developer: '...'", "I'm still waiting for the API documentation.", "None.", "I am sick.", "Blocked.", "Yes."],
  ["Recruiter: 'You've been shortlisted for an interview.' Candidate: '...'", "That's fantastic news! When is it scheduled for?", "Thanks.", "Finally.", "Wait.", "Where?"],
  ["Startup Founder: 'We just secured our seed funding.' Investor: '...'", "Congratulations! Now the real work begins.", "Yay.", "Good.", "More money.", "Finally."],
  ["CEO: 'Our quarterly profits are up by 20%.' Shareholders: '...'", "Excellent results. We expect a dividend increase.", "Rich.", "Good.", "More!", "Wow."],
  ["Marketing Manager: 'Our viral campaign was a huge success.' Client: '...'", "The engagement numbers are indeed impressive.", "Viral.", "Cool.", "Sales?", "Yes."],
  ["Sales Rep: 'If you sign today, I can offer a 10% discount.' Lead: '...'", "Tempting, but I need to consult with my partner first.", "Okay.", "Sign.", "More discount.", "No."],
  ["Customer Success: 'I'm sorry you had a bad experience.' User: '...'", "I appreciate the apology, but I still want a refund.", "Fix it.", "Anger.", "Bye.", "Thanks."],
  ["HR: 'Please complete the mandatory training module.' Employee: '...'", "I'll get to it as soon as I finish this task.", "Boring.", "Later.", "Done.", "No."],
  ["Mentor: 'You've shown great progress lately.' Mentee: '...'", "Thank you, I've been learning a lot from our sessions.", "Thanks.", "I know.", "Cool.", "More."],
  ["Intern: 'Where can I find the stationery supplies?' Staff: '...'", "In the cabinet at the end of the hallway.", "Over there.", "Ask him.", "I don't know.", "What?"],
  ["Janitor: 'The floor is wet, please be careful.' Student: '...'", "Thanks for the heads-up. I'll watch my step.", "Okay.", "Slip.", "Wet.", "No."],
  ["Security: 'You can't park here without a permit.' Driver: '...'", "I'm just dropping someone off, I'll be gone in a minute.", "Sorry.", "Why?", "No.", "Fine."],
  ["Maintenance: 'The elevator is out of order.' Resident: '...'", "Again? I guess I'm taking the stairs then.", "Fix it.", "Damn.", "High.", "Okay."],
  ["Landlord: 'Rent is due on the first of every month.' Tenant: '...'", "I'll make sure to set up an automatic transfer.", "Okay.", "Expensive.", "Late.", "No."]
];

const INITIAL_ENGLISH_QUESTIONS: Question[] = rawScenarios.map((scenario, i) => {
  const [text, ...opts] = scenario;
  const id = `eng-${i + 1}`;
  const keys: ('A' | 'B' | 'C' | 'D' | 'E')[] = ['A', 'B', 'C', 'D', 'E'];
  const correctKey = keys[i % 5];
  
  const finalOptions: any = {};
  const correctVal = opts[0];
  const distractors = opts.slice(1);

  keys.forEach((k, idx) => {
    if (k === correctKey) {
      finalOptions[k] = { text: correctVal };
    } else {
      const dIdx = (idx + i) % distractors.length;
      finalOptions[k] = { text: distractors[dIdx] };
    }
  });

  return {
    id,
    subjectId: ENGLISH_CONV_ID,
    text: `Dialogue ${i + 1}: ${text}`,
    options: finalOptions,
    correctAnswer: correctKey
  };
});

export const db = {
  getSubjects: (): Subject[] => {
    const data = localStorage.getItem(STORAGE_KEYS.SUBJECTS);
    return data ? JSON.parse(data) : DEFAULT_SUBJECTS;
  },
  saveSubjects: (subjects: Subject[]) => {
    localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects));
  },
  getQuestions: (): Question[] => {
    const data = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
    if (data) return JSON.parse(data);
    return [...INITIAL_MATH_QUESTIONS, ...INITIAL_ENGLISH_QUESTIONS, ...INITIAL_PAI_QUESTIONS, ...INITIAL_BIN_QUESTIONS];
  },
  saveQuestion: (question: Question) => {
    const questions = db.getQuestions();
    const index = questions.findIndex(q => q.id === question.id);
    if (index >= 0) questions[index] = question;
    else questions.push(question);
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  },
  getUsers: (): User[] => {
    const data = localStorage.getItem(STORAGE_KEYS.USERS);
    return data ? JSON.parse(data) : [];
  },
  saveUsers: (users: User[]) => {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  },
  getExams: (): ExamSession[] => {
    const data = localStorage.getItem(STORAGE_KEYS.EXAMS);
    return data ? JSON.parse(data) : [];
  },
  saveExam: (exam: ExamSession) => {
    const exams = db.getExams();
    const index = exams.findIndex(e => e.id === exam.id);
    if (index >= 0) exams[index] = exam;
    else exams.push(exam);
    localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(exams));
  },
  getSchedules: (): Schedule[] => {
    const data = localStorage.getItem(STORAGE_KEYS.SCHEDULES);
    return data ? JSON.parse(data) : [];
  },
  saveSchedules: (schedules: Schedule[]) => {
    localStorage.setItem(STORAGE_KEYS.SCHEDULES, JSON.stringify(schedules));
  }
};
