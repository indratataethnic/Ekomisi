import { EcosystemData } from '../types';

export const ECOSYSTEMS_DATA: Record<string, EcosystemData> = {
  sawah: {
    id: 'sawah',
    name: 'Ekosistem Sawah',
    subtitle: 'Lahan Basah & Lumbung Pangan',
    tagline: 'Jelajahi interaksi kehidupan di hamparan hijau lumbung padi Indonesia',
    description: 'Sawah merupakan ekosistem buatan manusia yang kaya akan keanekaragaman hayati. Air yang tergenang, lumpur yang subur, dan sinar matahari tropis mendukung rantai makanan dari tanaman padi hingga elang pemangsa.',
    bgImage: '/src/assets/images/bg_ekosistem_sawah_1793015156517.jpg',
    primaryColor: '#10b981', // emerald-500
    chainFlow: [
      { level: 'Produsen', label: 'Padi Sawah', organismId: 'sawah_padi', organismName: 'Padi' },
      { level: 'Konsumen I', label: 'Belalang Daun', organismId: 'sawah_belalang', organismName: 'Belalang' },
      { level: 'Konsumen II', label: 'Katak Hijau', organismId: 'sawah_katak', organismName: 'Katak' },
      { level: 'Konsumen III', label: 'Ular Sawah', organismId: 'sawah_ular', organismName: 'Ular Sawah' },
      { level: 'Puncak', label: 'Burung Elang', organismId: 'sawah_elang', organismName: 'Elang Jawa' },
      { level: 'Pengurai', label: 'Jamur Merang', organismId: 'sawah_jamur', organismName: 'Jamur Merang' }
    ],
    organisms: [
      {
        id: 'sawah_padi',
        name: 'Padi Sawah',
        scientificName: 'Oryza sativa',
        category: 'Produsen',
        trophicRole: 'Tingkat Trofik 1 (Autotrof / Penghasil)',
        badgeColor: 'emerald',
        sliceColor: '#10b981',
        textColor: '#ffffff',
        emoji: '🌾',
        summary: 'Tanaman pangan utama yang mengubah energi matahari dan air menjadi karbohidrat melalui fotosintesis.',
        habitat: 'Lahan sawah berair dangkal dengan tanah liat lumpur kaya mineral.',
        diet: 'Menghasilkan makanan sendiri (autotrof) lewat fotosintesis dengan bantuan sinar matahari, CO2, dan air.',
        predator: 'Belalang, burung pipit, tikus sawah, dan ulat penggerek batang.',
        adaptation: 'Memiliki saluran udara (aerenkim) di dalam batangnya sehingga akar tetap bernapas saat terendam air.',
        funFact: 'Satu rumpun padi bisa menghasilkan lebih dari 1.000 butir beras berkualitas!',
        dongeng: {
          title: 'Kisah Bulir Padi Emas yang Rendah Hati',
          theme: 'Kerendahan Hati & Sumber Kehidupan',
          synopsis: 'Petualangan sebutir bulir padi bernama Padi Emas yang mengajarkan arti memberi manfaat tanpa rasa sombong.',
          paragraphs: [
            {
              sceneTitle: '1. Menyerap Cahaya Mentari Pagi',
              content: 'Di tengah hamparan sawah hijau di lereng bukit, sebutir bulir padi bernama Padi Emas baru saja bangun disapa embun pagi. Dengan daun-daunnya yang hijau segar, ia merentangkan tubuhnya untuk menyerap sinar matahari hangat. "Wahai Mentari, terima kasih atas cahayamu! Aku akan mengubah sinarmu menjadi butir makanan bagi seluruh makhluk," bisik Padi Emas ceria.'
            },
            {
              sceneTitle: '2. Terpaan Angin dan Ujian',
              content: 'Ketika angin kencang bertiup, tanaman rumput liar di sampingnya berteriak sombong, "Lihat aku! Aku tinggi dan kaku menantang angin!" Namun tak lama kemudian, tangkai rumput itu patah diterpa badai. Padi Emas memilih untuk merunduk lentur mengikuti arus angin. Akarnya yang kokoh di dalam lumpur membuatnya tetap tegap bertahan.'
            },
            {
              sceneTitle: '3. Semakin Berisi, Semakin Merunduk',
              content: 'Bulan berganti, bulir-bulir Padi Emas kini menguning gemerlap dan sarat akan karbohidrat bergizi. Meskipun menjadi tumpuan makanan bagi petani dan hewan sawah, Padi Emas justru menundukkan kepalanya dengan anggun. Ia mengajarkan kita bahwa semakin kita berilmu dan berjasa, semakin kita harus rendah hati dan selalu bermanfaat.'
            }
          ],
          moralValue: 'Semakin banyak kebaikan dan ilmu yang kita miliki, hendaknya kita semakin rendah hati seperti falsafah padi: makin berisi, makin merunduk.',
          scienceQuestion: 'Mengapa padi disebut sebagai produsen dalam ekosistem sawah?',
          scienceAnswer: 'Karena padi mampu membuat makanannya sendiri melalui fotosintesis menggunakan energi matahari, air, dan karbon dioksida.'
        },
        misi: {
          title: 'Misi Penjaga Lumbung Padi',
          scenario: 'Sawah Pak Tani diserang cuaca ekstrem dan kekurangan air. Ayo bantu Padi mempertahankan perannya di ekosistem!',
          badgeName: 'Penjaga Pangan Lestari',
          questions: [
            {
              id: 'q1',
              title: 'Peran Fotosintesis',
              prompt: 'Apa zat yang dihasilkan padi selama proses fotosintesis yang sangat dibutuhkan hewan dan manusia untuk bernapas?',
              options: [
                { label: 'A', text: 'Gas Oksigen (O2)', isCorrect: true, explanation: 'Tepat sekali! Fotosintesis padi menghasilkan oksigen yang dihirup seluruh makhluk hidup.' },
                { label: 'B', text: 'Karbon Monoksida', isCorrect: false, explanation: 'Kurang tepat. Karbon monoksida adalah gas berbahaya.' },
                { label: 'C', text: 'Air Raksa', isCorrect: false, explanation: 'Salah. Padi menghasilkan glukosa dan oksigen.' }
              ]
            },
            {
              id: 'q2',
              title: 'Jaring Kehidupan',
              prompt: 'Jika seluruh tanaman padi di sawah musnah, apa akibat langsung pertama pada rantai makanan?',
              options: [
                { label: 'A', text: 'Elang bertambah banyak', isCorrect: false, explanation: 'Elang adalah konsumen puncak, bukan pemakan langsung padi.' },
                { label: 'B', text: 'Belalang dan tikus kehilangan sumber makanan utama', isCorrect: true, explanation: 'Hebat! Konsumen tingkat 1 (herbivora) akan kelaparan dan populasinya menurun drastis.' },
                { label: 'C', text: 'Katak akan memakan batu', isCorrect: false, explanation: 'Katak adalah karnivora pemakan serangga.' }
              ]
            },
            {
              id: 'q3',
              title: 'Tindakan Konservasi',
              prompt: 'Cara ramah lingkungan yang paling tepat untuk melindungi tanaman padi dari hama tanpa merusak alam adalah...',
              options: [
                { label: 'A', text: 'Menyemprot racun kimia dosis tinggi setiap hari', isCorrect: false, explanation: 'Racun kimia dapat mencemari air dan membunuh musuh alami hama.' },
                { label: 'B', text: 'Menjaga populasi burung hantu dan predator alami di sawah', isCorrect: true, explanation: 'Tepat! Pengendalian hayati alami menjaga keseimbangan ekosistem tanpa polusi racun.' },
                { label: 'C', text: 'Membakar seluruh jerami dan sawah', isCorrect: false, explanation: 'Membakar sawah justru merusak mikroorganisme tanah yang subur.' }
              ]
            }
          ]
        }
      },
      {
        id: 'sawah_belalang',
        name: 'Belalang Daun',
        scientificName: 'Oxya chinensis',
        category: 'Konsumen I',
        trophicRole: 'Tingkat Trofik 2 (Herbivora)',
        badgeColor: 'amber',
        sliceColor: '#059669',
        textColor: '#ffffff',
        emoji: '🦗',
        summary: 'Serangga pelompat ulung dengan warna tubuh hijau penyamaran yang memakan daun-daun segar.',
        habitat: 'Di antara rumpun padi, dedaunan basah, dan pematang sawah.',
        diet: 'Daun padi dan rumput hijau (Herbivora).',
        predator: 'Katak sawah, burung gereja, laba-laba sawah, dan kadal.',
        adaptation: 'Memiliki kaki belakang yang sangat kuat untuk melompat sejauh 20 kali panjang tubuhnya, serta tubuh mirip daun.',
        funFact: 'Telinga belalang tidak terletak di kepala, melainkan di bagian perut dekat pangkal paha belakang!',
        dongeng: {
          title: 'Lompatan Cerdik Belalang Daun',
          theme: 'Kecermatan & Adaptasi Diri',
          synopsis: 'Bobi si Belalang Daun belajar pentingnya mengendalikan nafsu makan agar tidak merusak rumahnya sendiri.',
          paragraphs: [
            {
              sceneTitle: '1. Pesta di Pucuk Padi',
              content: 'Bobi adalah belalang muda bertubuh hijau zamrud yang sangat suka melompat. Suatu siang yang terik, Bobi mengajak teman-temannya makan daun padi tanpa henti. "Ayo makan sebanyak-banyaknya selagi segar!" serunya bersemangat.'
            },
            {
              sceneTitle: '2. Peringatan Si Katak Bijak',
              content: 'Tiba-tiba terdengar suara parau dari balik daun teratai, "Krok... krok! Bobi, jika kalian menghabiskan seluruh daun, tanaman padi ini akan mati dan tidak bisa tumbuh lagi. Jika padi mati, kalian juga tidak akan punya makanan esok hari!" Bobi tertegun mendengar nasihat Pak Katak.'
            },
            {
              sceneTitle: '3. Belajar Berbagi dengan Alam',
              content: 'Bobi menyadari bahwa setiap makhluk di sawah saling membutuhkan. Sejak saat itu, ia dan kawanan belalang tidak lagi rakus. Bobi melompat dengan lincah, menyebarkan serbuk sari saat hinggap dari satu bunga rumput ke rumput lainnya.'
            }
          ],
          moralValue: 'Mengambil sesuatu dari alam secukupnya dan tidak serakah demi kelangsungan hidup bersama.',
          scienceQuestion: 'Mengapa tubuh belalang berwarna hijau mirip daun padi?',
          scienceAnswer: 'Warna hijau adalah bentuk kamuflase (penyamaran) untuk melindungi diri dari burung pemangsa dan katak.'
        },
        misi: {
          title: 'Misi Lompatan Sains Belalang',
          scenario: 'Ketahui seluk-beluk serangga herbivora di ekosistem persawahan!',
          badgeName: 'Penjelajah Daun Hijau',
          questions: [
            {
              id: 'q1',
              title: 'Tingkat Konsumen',
              prompt: 'Belalang memakan tanaman padi. Dalam rantai makanan, belalang tergolong sebagai...',
              options: [
                { label: 'A', text: 'Konsumen Tingkat 1 (Herbivora)', isCorrect: true, explanation: 'Benar! Hewan yang langsung memakan produsen adalah konsumen tingkat 1.' },
                { label: 'B', text: 'Produsen', isCorrect: false, explanation: 'Salah, belalang tidak bisa berfotosintesis.' },
                { label: 'C', text: 'Pengurai (Dekomposer)', isCorrect: false, explanation: 'Salah, belalang bukan pengurai sisa organik.' }
              ]
            },
            {
              id: 'q2',
              title: 'Hubungan Mangsa-Pemangsa',
              prompt: 'Siapakah hewan di sawah yang bertindak sebagai pemangsa alami belalang?',
              options: [
                { label: 'A', text: 'Katak sawah dan laba-laba', isCorrect: true, explanation: 'Benar! Katak menangkap belalang dengan lidahnya yang panjang dan lengket.' },
                { label: 'B', text: 'Tanaman padi', isCorrect: false, explanation: 'Padi dimakan belalang, bukan memakan belalang.' },
                { label: 'C', text: 'Cacing tanah', isCorrect: false, explanation: 'Cacing tanah hidup di dalam tanah mengurai bahan organik.' }
              ]
            },
            {
              id: 'q3',
              title: 'Keseimbangan Alam',
              prompt: 'Jika seluruh katak di sawah diburu habis oleh manusia, apa yang akan terjadi pada populasi belalang?',
              options: [
                { label: 'A', text: 'Populasi belalang melonjak drastis hingga merusak padi', isCorrect: true, explanation: 'Tepat! Tanpa predator katak, belalang berkembang biak tanpa kendali menjadi hama ledakan.' },
                { label: 'B', text: 'Belalang akan ikut punah', isCorrect: false, explanation: 'Tidak, tanpa pemangsa justru belalang makin banyak.' },
                { label: 'C', text: 'Belalang akan berganti menjadi ikan', isCorrect: false, explanation: 'Belalang tetaplah serangga.' }
              ]
            }
          ]
        }
      },
      {
        id: 'sawah_katak',
        name: 'Katak Sawah',
        scientificName: 'Fejervarya cancrivora',
        category: 'Konsumen II',
        trophicRole: 'Tingkat Trofik 3 (Karnivora Insektivora)',
        badgeColor: 'blue',
        sliceColor: '#14b8a6',
        textColor: '#ffffff',
        emoji: '🐸',
        summary: 'Hewan amfibi sahabat petani yang menjaga sawah dari ledakan serangga hama dengan lidah kilatnya.',
        habitat: 'Genangan air pematang sawah, parit irigasi, dan sela lumpur basah.',
        diet: 'Serangga seperti belalang, wereng, jentik nyamuk, dan ngengat.',
        predator: 'Ular jali, ular kobra sawah, dan burung bangau.',
        adaptation: 'Kulit berlendir yang mampu menyerap oksigen langsung dari air serta kaki berselaput untuk berenang cepat.',
        funFact: 'Mata katak menonjol ke atas sehingga saat tubuhnya menyelam di lumpur, matanya tetap bisa mengintai mangsa di atas permukaan air!',
        dongeng: {
          title: 'Nyanyian Penjaga Malam Si Katak Hijau',
          theme: 'Tanggung Jawab & Ketekunan',
          synopsis: 'Kiki si Katak membuktikan bahwa suara nyanyian parau katak di malam hari adalah tanda ekosistem sawah yang sehat.',
          paragraphs: [
            {
              sceneTitle: '1. Suara di Balik Rembulan',
              content: 'Malam tiba di pedesaan, rembulan bersinar keperakan di atas petak-petak sawah. Kiki si Katak duduk di atas batu kecil tepi parit. "Krok, krok, krok!" suaranya bergema bersahut-sahutan dengan kawanannya.'
            },
            {
              sceneTitle: '2. Memburu Hama Wereng dan Nyamuk',
              content: 'Saat malam gulita, kawanan wereng dan serangga malam mulai beterbangan hendak menyerang bulir padi. Dengan gerakan secepat kilat, lidah Kiki menjulur elastis menangkap belasan serangga dalam sekejap mata. "Aku tidak akan membiarkan padi Pak Tani rusak!" gumam Kiki.'
            },
            {
              sceneTitle: '3. Sahabat Sejati Petani',
              content: 'Keesokan paginya saat Pak Tani datang mengecek air sawah, ia tersenyum melihat padi tetap utuh tanpa diserang wereng. Pak Tani bersyukur mendengar paduan suara katak semalam. Kiki merasa bangga karena tugasnya sebagai konsumen tingkat dua telah menjaga harmoni persawahan.'
            }
          ],
          moralValue: 'Setiap peran kecil yang kita jalani dengan penuh tanggung jawab memiliki arti besar bagi kebaikan lingkungan sekitar.',
          scienceQuestion: 'Mengapa katak disebut hewan amfibi?',
          scienceAnswer: 'Karena katak mengalami metamorfosis: hidup di air saat fase kecebong (bernapas dengan insang), dan bisa hidup di darat serta air saat dewasa (bernapas dengan paru-paru dan kulit).'
        },
        misi: {
          title: 'Misi Sahabat Amfibi Sawah',
          scenario: 'Jelajahi peranan krusial katak dalam mengontrol hama pertanian!',
          badgeName: 'Penjaga Malam Persawahan',
          questions: [
            {
              id: 'q1',
              title: 'Metamorfosis Katak',
              prompt: 'Sebelum menjadi katak dewasa berkaki empat yang hidup di pematang sawah, katak menetas dari telur menjadi...',
              options: [
                { label: 'A', text: 'Kecebong / Berudu berenang di air', isCorrect: true, explanation: 'Benar sekali! Kecebong bernapas menggunakan insang dan memakan alga di air sawah.' },
                { label: 'B', text: 'Larva kepompong', isCorrect: false, explanation: 'Kepompong adalah metamorfosis kupu-kupu.' },
                { label: 'C', text: 'Anak katak langsung berparu-paru', isCorrect: false, explanation: 'Katak mengalami fase berudu terlebih dahulu.' }
              ]
            },
            {
              id: 'q2',
              title: 'Aliran Energi',
              prompt: 'Dalam rantai makanan sawah: Padi -> Belalang -> Katak -> Ular. Katak menempati posisi...',
              options: [
                { label: 'A', text: 'Konsumen Tingkat 2 (Konsumen Sekunder)', isCorrect: true, explanation: 'Tepat! Katak memakan konsumen tingkat 1 (belalang).' },
                { label: 'B', text: 'Produsen Primer', isCorrect: false, explanation: 'Produsen adalah tanaman hijau (padi).' },
                { label: 'C', text: 'Konsumen Puncak', isCorrect: false, explanation: 'Konsumen puncak adalah elang yang tidak dimangsa hewan lain.' }
              ]
            },
            {
              id: 'q3',
              title: 'Indikator Lingkungan',
              prompt: 'Kulit katak sangat tipis dan sensitif terhadap racun. Jika di suatu sawah tidak ada lagi katak sama sekali, hal itu menandakan...',
              options: [
                { label: 'A', text: 'Air dan tanah sawah kemungkinan tercemar pestisida kimia berlebih', isCorrect: true, explanation: 'Sangat tepat! Katak adalah bioindikator alami kebersihan lingkungan.' },
                { label: 'B', text: 'Sawah tersebut terlalu subur', isCorrect: false, explanation: 'Katak menyukai sawah yang subur alami.' },
                { label: 'C', text: 'Padi sedang menghasilkan emas', isCorrect: false, explanation: 'Bukan alasan ilmiah.' }
              ]
            }
          ]
        }
      },
      {
        id: 'sawah_tikus',
        name: 'Tikus Sawah',
        scientificName: 'Rattus argentiventer',
        category: 'Konsumen I',
        trophicRole: 'Tingkat Trofik 2 (Herbivora / Omnivora)',
        badgeColor: 'amber',
        sliceColor: '#0d9488',
        textColor: '#ffffff',
        emoji: '🐀',
        summary: 'Pengerat lincah dengan indra penciuman tajam yang gemar memakan biji-bijian dan tangkai padi.',
        habitat: 'Lubang-lubang tanah di tanggul saluran irigasi dan pematang sawah.',
        diet: 'Biji padi muda, jagung, umbi-umbian, dan siput kecil.',
        predator: 'Ular sawah, burung hantu tyto alba, dan elang pemangsa.',
        adaptation: 'Gigi seri depan yang terus tumbuh sehingga harus sering mengerat bahan keras agar tidak terlalu panjang.',
        funFact: 'Sepasang tikus sawah secara teoritis dapat berkembang biak menjadi ratusan ekor dalam satu tahun jika tidak ada pemangsa alaminya!',
        dongeng: {
          title: 'Gigi Seri Si Tikus Cilik',
          theme: 'Keseimbangan Alam & Waspada',
          synopsis: 'Timi si Tikus Sawah memahami bahwa keberadaannya di sawah harus seimbang dengan pemangsa alaminya.',
          paragraphs: [
            {
              sceneTitle: '1. Lubang Rahasia di Pematang',
              content: 'Di kedalaman lorong pematang sawah, Timi si Tikus Sawah berlindung bersama keluarganya. Menjelang senja, Timi mengendus-endus udara mencari bau bulir padi yang harum menggiurkan.'
            },
            {
              sceneTitle: '2. Bayangan Burung Hantu',
              content: 'Saat hendak memotong tangkai padi, desiran sayap tanpa suara melintas di udara. Itu adalah Burung Hantu Tyto Alba! Timi segera melesat masuk ke dalam lubang persembunyian. Jantungnya berdegup kencang.'
            },
            {
              sceneTitle: '3. Pelajaran Berharga',
              content: 'Timi mengerti bahwa rantai makanan menciptakan keseimbangan. Ia tidak boleh serakah menghabiskan lumbung, dan ia pun menjadi bagian dari makanan bagi pemangsa yang menjaga sawah tetap lestari.'
            }
          ],
          moralValue: 'Setiap makhluk diciptakan dengan batasan alaminya masing-masing untuk menjaga keharmonisan jagat raya.',
          scienceQuestion: 'Mengapa tikus selalu mengerat benda-benda keras?',
          scienceAnswer: 'Karena gigi seri tikus terus bertambah panjang seumur hidupnya, mengerat membantunya mengasah gigi agar ukurannya pas.'
        },
        misi: {
          title: 'Misi Pengendalian Pengerat',
          scenario: 'Pahami dinamika populasi tikus dan cara menjaga sawah tetap berimbang!',
          badgeName: 'Ahli Ekologi Pematang',
          questions: [
            {
              id: 'q1',
              title: 'Predator Alami Tikus',
              prompt: 'Hewan pemangsa apa yang paling aktif berburu tikus sawah di malam hari?',
              options: [
                { label: 'A', text: 'Burung hantu (Tyto alba) dan ular sawah', isCorrect: true, explanation: 'Tepat sekali! Burung hantu dan ular sawah adalah pembasmi tikus alami terbaik.' },
                { label: 'B', text: 'Kupu-kupu', isCorrect: false, explanation: 'Kupu-kupu menghisap nektar bunga.' },
                { label: 'C', text: 'Kelinci', isCorrect: false, explanation: 'Kelinci adalah herbivora.' }
              ]
            },
            {
              id: 'q2',
              title: 'Dampak Perburuan Ular',
              prompt: 'Jika warga desa menangkap dan membunuh semua ular sawah untuk dijual kulitnya, apa akibatnya bagi petani?',
              options: [
                { label: 'A', text: 'Hama tikus melonjak drastis dan padi gagal panen', isCorrect: true, explanation: 'Benar! Ular adalah pemangsa utama tikus di sawah.' },
                { label: 'B', text: 'Padi tumbuh dua kali lebih cepat', isCorrect: false, explanation: 'Salah, padi justru akan dimakan tikus.' },
                { label: 'C', text: 'Tikus akan pindah ke laut', isCorrect: false, explanation: 'Tikus sawah tidak hidup di air laut.' }
              ]
            },
            {
              id: 'q3',
              title: 'Ciri Mamalia',
              prompt: 'Tikus berkembang biak dengan cara...',
              options: [
                { label: 'A', text: 'Melahirkan (Vivipar) dan menyusui anaknya', isCorrect: true, explanation: 'Benar! Tikus adalah hewan mamalia pengerat (Rodentia).' },
                { label: 'B', text: 'Bertelur di dalam air', isCorrect: false, explanation: 'Salah, katak dan ikan yang bertelur di air.' },
                { label: 'C', text: 'Membelah diri', isCorrect: false, explanation: 'Membelah diri adalah cara reproduksi bakteri.' }
              ]
            }
          ]
        }
      },
      {
        id: 'sawah_ular',
        name: 'Ular Sawah',
        scientificName: 'Ptyas korros',
        category: 'Konsumen II',
        trophicRole: 'Tingkat Trofik 3/4 (Karnivora Predator)',
        badgeColor: 'orange',
        sliceColor: '#0284c7',
        textColor: '#ffffff',
        emoji: '🐍',
        summary: 'Reptil gesit penjaga sawah tanpa kaki yang berpatroli di pematang memburu tikus dan katak.',
        habitat: 'Semak belukar pematang sawah, tumpukan jerami kering, dan tepian sungai kecil.',
        diet: 'Tikus sawah, katak, kadal, dan burung kecil.',
        predator: 'Burung elang jawa, burung garuda, dan luwak.',
        adaptation: 'Memiliki organ Jacobson di langit-langit mulut untuk mencium jejak panas mangsa dengan lidah bercabangnya.',
        funFact: 'Rahang ular sawah terhubung oleh ligamen elastis, memungkinkannya menelan mangsa yang 3 kali lebih besar dari kepalanya!',
        dongeng: {
          title: 'Patroli Senyap Sang Penjaga Padi',
          theme: 'Menghargai Keberadaan Makhluk Hidup',
          synopsis: 'Sora si Ular Jali membuktikan bahwa dirinya bukan monster jahat, melainkan pahlawan yang melindungi padi dari tikus.',
          paragraphs: [
            {
              sceneTitle: '1. Desis Halus di Pematang',
              content: 'Tubuh Sora si Ular Jali meliuk lembut tanpa suara di atas rerumputan pematang. Kulitnya yang bersisik keemasan tersamarkan di antara jerami kering. Sora sering dijauhi hewan lain karena bentuknya yang menyeramkan.'
            },
            {
              sceneTitle: '2. Serbuan Kawanan Tikus',
              content: 'Suatu malam, kawanan tikus rakus berencana menggerogoti lumbung padi muda milik desa. Dengan sensor penciumannya yang tajam, Sora mendeteksi bahaya tersebut. Dalam heningnya malam, Sora menyergap dan menghadang kawanan tikus.'
            },
            {
              sceneTitle: '3. Penghormatan untuk Sang Penjaga',
              content: 'Melihat kegigihan Sora, hewan-hewan lain menyadari bahwa ular sawah adalah pelindung sejati. Tanpa ular sawah, lumbung pangan akan musnah. Manusia dan hewan kini hidup rukun menghargai keberadaan ular sawah.'
            }
          ],
          moralValue: 'Jangan menilai seseorang hanya dari tampangnya yang menakutkan; kebaikan dan perbuatan baiklah yang menentukan nilainya.',
          scienceQuestion: 'Bagaimana ular mendeteksi keberadaan mangsanya di dalam kegelapan?',
          scienceAnswer: 'Ular menjulurkan lidah bercabangnya untuk menangkap partikel bau di udara, lalu memasukkannya ke organ Jacobson di langit-langit mulut.'
        },
        misi: {
          title: 'Misi Patroli Sang Predator Reptil',
          scenario: 'Kupas tuntas anatomi dan peran penting ular di persawahan!',
          badgeName: 'Pelindung Lumbung Nusantara',
          questions: [
            {
              id: 'q1',
              title: 'Cara Ular Makan',
              prompt: 'Bagaimana cara ular mengonsumsi mangsanya?',
              options: [
                { label: 'A', text: 'Menelan mangsa secara utuh karena rahangnya elastis', isCorrect: true, explanation: 'Tepat sekali! Gigi ular tidak untuk mengunyah, melainkan untuk menahan mangsa saat ditelan utuh.' },
                { label: 'B', text: 'Mengunyahnya hingga halus dengan gigi geraham', isCorrect: false, explanation: 'Ular tidak memiliki gigi geraham pengunyah.' },
                { label: 'C', text: 'Menghisap cairan mangsa seperti nyamuk', isCorrect: false, explanation: 'Ular menelan hewan utuh.' }
              ]
            },
            {
              id: 'q2',
              title: 'Pergantian Kulit',
              prompt: 'Mengapa ular secara berkala melepaskan kulit luarnya (molting / ecdysis)?',
              options: [
                { label: 'A', text: 'Untuk memungkinkan pertumbuhan tubuh dan membuang parasit', isCorrect: true, explanation: 'Benar! Kulit ular tidak elastis mengikuti ukuran tubuh yang membesar, sehingga harus berganti kulit.' },
                { label: 'B', text: 'Karena kepanasan terkena sinar matahari', isCorrect: false, explanation: 'Bukan alasan biologis pergantian kulit.' },
                { label: 'C', text: 'Supaya bisa terbang', isCorrect: false, explanation: 'Ular tetap hewan melata.' }
              ]
            },
            {
              id: 'q3',
              title: 'Keseimbangan Rantai Makanan',
              prompt: 'Ular sawah memangsa tikus, lalu ular sawah dimangsa oleh...',
              options: [
                { label: 'A', text: 'Burung elang (konsumen puncak)', isCorrect: true, explanation: 'Tepat! Elang memiliki cakar tajam dan penglihatan teleskopik untuk menyambar ular.' },
                { label: 'B', text: 'Tanaman padi', isCorrect: false, explanation: 'Padi adalah tanaman produsen.' },
                { label: 'C', text: 'Kutu air', isCorrect: false, explanation: 'Kutu air adalah zooplankton kecil.' }
              ]
            }
          ]
        }
      },
      {
        id: 'sawah_elang',
        name: 'Elang Jawa',
        scientificName: 'Nisaetus bartelsi',
        category: 'Konsumen Puncak',
        trophicRole: 'Tingkat Trofik 4/5 (Apex Predator)',
        badgeColor: 'rose',
        sliceColor: '#2563eb',
        textColor: '#ffffff',
        emoji: '🦅',
        summary: 'Raja angkasa lambang kelestarian hutan dan sawah dengan pandangan mata delapan kali lebih tajam dari manusia.',
        habitat: 'Pohon-pohon tinggi di pinggiran hutan yang berbatasan langsung dengan hamparan sawah.',
        diet: 'Ular sawah, kadal, bajing kelapa, tikus, dan anak ayam hutan.',
        predator: 'Tidak memiliki predator alami saat dewasa (Konsumen Puncak).',
        adaptation: 'Mata berkemampuan teleskopik tajam, sayap lebar untuk melayang di arus udara panas (thermal), dan cakar pencengkeram mematikan.',
        funFact: 'Elang Jawa menjadi inspirasi lambang negara Indonesia, Garuda Pancasila, karena jambul kepalanya yang megah!',
        dongeng: {
          title: 'Mata Elang Penjaga Lembah',
          theme: 'Kepemimpinan & Kebijaksanaan',
          synopsis: 'Bara si Elang Jawa mengawasi keseimbangan seluruh lembah persawahan dari puncak pohon beringin.',
          paragraphs: [
            {
              sceneTitle: '1. Melayang di Langit Biru',
              content: 'Bara si Elang Jawa merentangkan sayapnya selebar hampir dua meter. Ia tidak perlu mengepakkan sayap terus-menerus; ia meluncur anggun menunggangi arus udara hangat di atas lembah persawahan.'
            },
            {
              sceneTitle: '2. Penglihatan Menembus Rerumputan',
              content: 'Dari ketinggian ratusan meter, mata Bara mampu melihat sehelai rumput yang bergoyang. Ia melihat seekor ular jali yang sedang berburu. Dengan menukik berkecepatan tinggi, Bara menjaga agar populasi predator di bawah tidak meluap.'
            },
            {
              sceneTitle: '3. Simbol Keseimbangan Bumi',
              content: 'Jika elang tetap terbang di angkasa, tandanya rimba dan sawah di bawahnya masih sehat dan lestari. Bara tahu bahwa mahkotanya adalah tanggung jawab untuk menjaga keutuhan rantai kehidupan.'
            }
          ],
          moralValue: 'Pemimpin sejati mengayomi dan menjaga keharmonisan seluruh tatanan yang dipimpinnya.',
          scienceQuestion: 'Mengapa elang disebut sebagai konsumen puncak (top predator)?',
          scienceAnswer: 'Karena di alam liar saat dewasa, elang berada di puncak rantai makanan dan tidak dimangsa oleh hewan lain.'
        },
        misi: {
          title: 'Misi Penguasa Langit Sawah',
          scenario: 'Kuasai pemahaman rantai makanan tingkat tinggi dan pelestarian satwa langka!',
          badgeName: 'Ksatria Garuda Nusantara',
          questions: [
            {
              id: 'q1',
              title: 'Ciri Konsumen Puncak',
              prompt: 'Apa yang membedakan konsumen puncak seperti Elang dengan konsumen lainnya?',
              options: [
                { label: 'A', text: 'Tidak ada hewan lain yang memangsanya secara alami di alam liar', isCorrect: true, explanation: 'Benar! Konsumen puncak berada di ujung teratas rantai makanan.' },
                { label: 'B', text: 'Hanya bisa makan daun-daunan', isCorrect: false, explanation: 'Elang adalah karnivora sejati.' },
                { label: 'C', text: 'Tidak membutuhkan energi makanan', isCorrect: false, explanation: 'Semua makhluk hidup membutuhkan energi.' }
              ]
            },
            {
              id: 'q2',
              title: 'Akumulasi Polutan (Bioakumulasi)',
              prompt: 'Jika petani menggunakan racun kimia yang diserap padi, dimakan belalang, dimakan katak, lalu dimakan elang, siapakah yang menerima racun paling pekat?',
              options: [
                { label: 'A', text: 'Elang (karena proses biomagnifikasi di puncak trofik)', isCorrect: true, explanation: 'Luar biasa! Racun kimia mengendap dan semakin terkonsentrasi di puncak rantai makanan.' },
                { label: 'B', text: 'Padi', isCorrect: false, explanation: 'Padi adalah penerima awal.' },
                { label: 'C', text: 'Matahari', isCorrect: false, explanation: 'Matahari adalah sumber energi murni.' }
              ]
            },
            {
              id: 'q3',
              title: 'Upaya Pelestarian',
              prompt: 'Cara terbaik menyelamatkan Elang Jawa dari ancaman kepunahan adalah...',
              options: [
                { label: 'A', text: 'Melindungi hutan habitat alaminya dan melarang perburuan liar', isCorrect: true, explanation: 'Tepat sekali! Menjaga habitat dan menghentikan perdagangan ilegal adalah kunci konservasi.' },
                { label: 'B', text: 'Menembak elang untuk diawetkan di museum', isCorrect: false, explanation: 'Perburuan justru mempercepat kepunahan.' },
                { label: 'C', text: 'Mengurung semua elang di kandang sempit', isCorrect: false, explanation: 'Elang membutuhkan ruang terbang bebas di alam liar.' }
              ]
            }
          ]
        }
      },
      {
        id: 'sawah_jamur',
        name: 'Jamur Merang',
        scientificName: 'Volvariella volvacea',
        category: 'Pengurai',
        trophicRole: 'Dekomposer (Pengurai Sisa Organik)',
        badgeColor: 'purple',
        sliceColor: '#4f46e5',
        textColor: '#ffffff',
        emoji: '🍄',
        summary: 'Pahlawan daur ulang alam yang menguraikan jerami sisa panen dan bangkai menjadi pupuk humus subur bagi tanah.',
        habitat: 'Tumpukan jerami padi yang lembap, tanah berhumus, dan pangkal batang lapuk.',
        diet: 'Menyerap nutrisi dari bahan organik mati (saprofit).',
        predator: 'Siput sawah, kumbang tanah, dan dipanen oleh manusia sebagai makanan lezat.',
        adaptation: 'Mengeluarkan enzim pencernaan eksternal untuk melunakkan selulosa jerami keras menjadi zat hara sederhana.',
        funFact: 'Tubuh jamur yang kita lihat di atas tanah hanyalah "buahnya", sedangkan bagian utamanya adalah benang-benang miselium raksasa di dalam tanah!',
        dongeng: {
          title: 'Pahlawan Daur Ulang di Bawah Jerami',
          theme: 'Manfaat Nyata Tanpa Tuntutan',
          synopsis: 'Miko si Jamur Merang membuktikan bahwa tanpa pengurai, bumi akan tertutup sampah bahan mati.',
          paragraphs: [
            {
              sceneTitle: '1. Kehidupan Sunyi di Kelembapan',
              content: 'Setelah panen usai, tumpukan jerami padi menumpuk di tepi sawah. Di bawah kehangatan jerami lembap, Miko si Jamur Merang mulai memanjangkan benang-benang putih halusnya yang disebut miselium.'
            },
            {
              sceneTitle: '2. Menyulap Sisa Menjadi Berkah',
              content: '"Tubuh elang yang telah mati, dedaunan layu, dan jerami tua ini tidak boleh menjadi tumpukan sampah sia-sia," kata Miko ramah. Dengan enzim alaminya, Miko menguraikan serat-serat kayu menjadi mineral kaya fosfor dan nitrogen.'
            },
            {
              sceneTitle: '3. Lingkaran Kehidupan Baru',
              content: 'Berkat kerja keras Miko dan kawan-kawannya, tanah sawah menjadi sangat gembur dan hitam subur. Ketika musim tanam tiba, benih padi baru menyerap mineral tersebut dan tumbuh subur kembali. Lingkaran kehidupan terus berputar tanpa akhir!'
            }
          ],
          moralValue: 'Bekerja keras dalam sunyi tanpa mengharap pujian tetap memberikan manfaat yang luar biasa bagi kehidupan dunia.',
          scienceQuestion: 'Apa tugas utama dekomposer (pengurai) di dalam ekosistem?',
          scienceAnswer: 'Menguraikan sisa-sisa makhluk hidup yang telah mati menjadi zat hara atau mineral penyubur tanah yang dapat diserap kembali oleh produsen (tanaman).'
        },
        misi: {
          title: 'Misi Daur Ulang Sang Dekomposer',
          scenario: 'Telusuri siklus tertutup daur materi dan peran vital pengurai tanah!',
          badgeName: 'Pahlawan Siklus Nutrisi',
          questions: [
            {
              id: 'q1',
              title: 'Kelompok Pengurai',
              prompt: 'Organisme apa saja yang berperan sebagai dekomposer (pengurai) di alam?',
              options: [
                { label: 'A', text: 'Jamur dan bakteri pengurai', isCorrect: true, explanation: 'Benar! Jamur dan bakteri adalah pengurai mikroskopis dan makroskopis utama bumi.' },
                { label: 'B', text: 'Harimau dan singa', isCorrect: false, explanation: 'Harimau dan singa adalah konsumen karnivora.' },
                { label: 'C', text: 'Batu dan kerikil', isCorrect: false, explanation: 'Batu adalah komponen abiotik (benda tak hidup).' }
              ]
            },
            {
              id: 'q2',
              title: 'Jika Tidak Ada Pengurai',
              prompt: 'Bayangkan jika di muka bumi ini sama sekali tidak ada jamur dan bakteri pengurai! Apa yang akan terjadi?',
              options: [
                { label: 'A', text: 'Bangkai hewan dan tanaman mati menumpuk selamanya dan tanah kehabisan unsur hara', isCorrect: true, explanation: 'Tepat sekali! Siklus daur ulang materi akan terhenti total.' },
                { label: 'B', text: 'Semua hewan akan hidup abadi', isCorrect: false, explanation: 'Salah, makhluk tetap mati tapi jasadnya tidak terurai.' },
                { label: 'C', text: 'Udara menjadi wangi bunga mawar', isCorrect: false, explanation: 'Tidak mungkin.' }
              ]
            },
            {
              id: 'q3',
              title: 'Makanan Jamur',
              prompt: 'Jamur tidak memiliki klorofil hijau daun, artinya jamur...',
              options: [
                { label: 'A', text: 'Tidak bisa fotosintesis dan menyerap sari makanan dari sisa materi lain', isCorrect: true, explanation: 'Benar! Jamur adalah organisme heterotrof saprofit.' },
                { label: 'B', text: 'Bisa membuat gula dari cahaya lampu', isCorrect: false, explanation: 'Salah, fotosintesis membutuhkan klorofil.' },
                { label: 'C', text: 'Memakan logam besi', isCorrect: false, explanation: 'Jamur mengurai bahan organik.' }
              ]
            }
          ]
        }
      },
      {
        id: 'sawah_cacing',
        name: 'Cacing Tanah',
        scientificName: 'Lumbricus terrestris',
        category: 'Pengurai',
        trophicRole: 'Detritivor & Peremaja Struktur Tanah',
        badgeColor: 'purple',
        sliceColor: '#7c3aed',
        textColor: '#ffffff',
        emoji: '🪱',
        summary: 'Insinyur tanah alami yang membuat lorong-lorong aerasi di dalam lumpur agar akar padi leluasa bernapas.',
        habitat: 'Di dalam tanah liat lembap persawahan hingga kedalaman 30 cm.',
        diet: 'Sisa tanaman membusuk, daun gugur, dan partikel lumpur organik (Detritivor).',
        predator: 'Burung kuntul, bebek gembala, katak sawah, dan semut hitam.',
        adaptation: 'Bernapas langsung melalui seluruh permukaan kulitnya yang basah berlendir.',
        funFact: 'Cacing tanah tidak memiliki mata atau telinga, namun tubuhnya sangat peka mendeteksi getaran langkah kaki di atas tanah!',
        dongeng: {
          title: 'Lorong Cinta Sang Penggali Tanah',
          theme: 'Kerja Keras & Ketulusan',
          synopsis: 'Ciko si Cacing membuktikan bahwa meski tubuhnya licin dan tinggal di kegelapan, jasanya sangat dirindukan akar padi.',
          paragraphs: [
            {
              sceneTitle: '1. Gelap yang Penuh Makna',
              content: 'Jauh di bawah permukaan sawah yang becek, Ciko si Cacing Tanah tidak pernah melihat indahnya matahari. Namun, ia tidak pernah mengeluh. Dengan tubuh bersegmennya yang lentur, Ciko terus menggali tanah siang dan malam.'
            },
            {
              sceneTitle: '2. Membuka Jalan Napas Akar Padi',
              content: 'Lorong-lorong yang dibuat Ciko membuat udara segar dan air mengalir lancar menuju akar tanaman padi. Kotoran yang dikeluarkan Ciko kaya akan nitrogen dan fosfor, menjadi pupuk terbaik tanpa zat kimia berbahaya.'
            },
            {
              sceneTitle: '3. Ucapan Terima Kasih Akar Padi',
              content: 'Akar padi membelai lembut tubuh Ciko saat bersentuhan di dalam tanah. "Terima kasih sahabatku, berkat lorongmu, kami bisa bernapas lega dan tumbuh menjadi padi yang subur!" Ciko tersenyum hangat di dalam tanah.'
            }
          ],
          moralValue: 'Bekerja dengan tulus di balik layar tetap bernilai mulia dan menjadi pondasi penting bagi keberhasilan sesama.',
          scienceQuestion: 'Mengapa cacing tanah sering keluar ke permukaan saat sawah diguyur hujan deras?',
          scienceAnswer: 'Karena air hujan memenuhi pori-pori tanah sehingga cacing kesulitan mendapatkan oksigen dan harus naik ke permukaan untuk bernapas.'
        },
        misi: {
          title: 'Misi Insinyur Tanah Alami',
          scenario: 'Ketahui pentingnya kesehatan tanah bagi ketahanan pangan dunia!',
          badgeName: 'Penjaga Kesuburan Bumi',
          questions: [
            {
              id: 'q1',
              title: 'Peran Detritivor',
              prompt: 'Apa perbedaan antara dekomposer (seperti jamur) dan detritivor (seperti cacing tanah)?',
              options: [
                { label: 'A', text: 'Detritivor memakan partikel sisa makhluk hidup secara fisik, lalu mencernanya', isCorrect: true, explanation: 'Benar sekali! Cacing menelan partikel detritus lalu mengeluarkan kotoran berhumus.' },
                { label: 'B', text: 'Dekomposer adalah tumbuhan berbunga', isCorrect: false, explanation: 'Salah, dekomposer adalah jamur dan bakteri.' },
                { label: 'C', text: 'Detritivor hanya hidup di angkasa', isCorrect: false, explanation: 'Detritivor hidup di tanah atau dasar perairan.' }
              ]
            },
            {
              id: 'q2',
              title: 'Pernapasan Cacing',
              prompt: 'Organ apa yang digunakan cacing tanah untuk menyerap oksigen?',
              options: [
                { label: 'A', text: 'Permukaan kulitnya yang lembap dan berlendir', isCorrect: true, explanation: 'Tepat! Oksigen larut dalam lendir kulit cacing lalu masuk ke pembuluh darah.' },
                { label: 'B', text: 'Paru-paru besar', isCorrect: false, explanation: 'Cacing tidak memiliki paru-paru.' },
                { label: 'C', text: 'Hidung mancung', isCorrect: false, explanation: 'Cacing tidak memiliki hidung.' }
              ]
            },
            {
              id: 'q3',
              title: 'Pupuk Kascing',
              prompt: 'Kotoran cacing tanah dikenal petani sebagai pupuk "Kascing" yang sangat disukai karena...',
              options: [
                { label: 'A', text: 'Sangat kaya nutrisi alami mikroba dan ramah lingkungan', isCorrect: true, explanation: 'Hebat! Pupuk kascing terbukti menyuburkan tanaman tanpa merusak ekosistem.' },
                { label: 'B', text: 'Bisa berubah menjadi emas murni', isCorrect: false, explanation: 'Bukan emas literal.' },
                { label: 'C', text: 'Mengandung racun serangga', isCorrect: false, explanation: 'Kascing alami dan aman.' }
              ]
            }
          ]
        }
      }
    ]
  },

  laut: {
    id: 'laut',
    name: 'Ekosistem Laut',
    subtitle: 'Terumbu Karang & Samudra Biru',
    tagline: 'Selami samudra luas tempat fitoplankton menyuplai separuh napas oksigen bumi',
    description: 'Ekosistem laut mencakup lebih dari 70% permukaan bumi. Dari fitoplankton mikroskopis hingga paus bungkuk raksasa dan hiu pemangsa puncak, laut menyimpan jaring-jaring makanan paling menakjubkan di dunia.',
    bgImage: '/src/assets/images/bg_ekosistem_laut_1793015156220.jpg',
    primaryColor: '#0284c7', // sky-600
    chainFlow: [
      { level: 'Produsen', label: 'Fitoplankton', organismId: 'laut_fitoplankton', organismName: 'Fitoplankton' },
      { level: 'Konsumen I', label: 'Udang Krill', organismId: 'laut_krill', organismName: 'Zooplankton' },
      { level: 'Konsumen II', label: 'Ikan Badut Karang', organismId: 'laut_ikan_badut', organismName: 'Ikan Karang' },
      { level: 'Konsumen III', label: 'Penyu Hijau', organismId: 'laut_penyu', organismName: 'Penyu Hijau' },
      { level: 'Puncak', label: 'Hiu Karang', organismId: 'laut_hiu', organismName: 'Hiu Karang' },
      { level: 'Pengurai', label: 'Bintang Laut', organismId: 'laut_bintang', organismName: 'Bintang Laut' }
    ],
    organisms: [
      {
        id: 'laut_fitoplankton',
        name: 'Fitoplankton',
        scientificName: 'Diatomea & Dinoflagellata',
        category: 'Produsen',
        trophicRole: 'Tingkat Trofik 1 (Produsen Samudra)',
        badgeColor: 'emerald',
        sliceColor: '#0ea5e9',
        textColor: '#ffffff',
        emoji: '✨',
        summary: 'Tumbuhan mikroskopis melayang di lautan yang menghasilkan lebih dari 50% oksigen di atmosfer bumi.',
        habitat: 'Zona fotik (lapisan permukaan laut berjarak hingga 200 meter yang tersinari matahari).',
        diet: 'Autotrof: memproduksi karbohidrat dan oksigen melalui fotosintesis menggunakan sinar matahari dan garam mineral laut.',
        predator: 'Zooplankton, larva ikan, udang krill, dan teritip laut.',
        adaptation: 'Memiliki struktur silika mikroskopis ringan atau tetesan minyak di dalam sel agar tetap mengapung dekat permukaan air yang tersinari matahari.',
        funFact: 'Setiap kali kita menarik dua kali napas, satu tarikan napas kita berasal dari oksigen yang dibuat oleh fitoplankton laut!',
        dongeng: {
          title: 'Napas Kehidupan Si Bintik Cahaya',
          theme: 'Kekuatan Hal Kecil bagi Semesta',
          synopsis: 'Fito si sel mikroskopis membuktikan bahwa tubuh kecil tak kasat mata mampu memberi kehidupan bagi seluruh penghuni planet.',
          paragraphs: [
            {
              sceneTitle: '1. Mengapung di Permukaan Samudra',
              content: 'Fito adalah sebutir sel hijau keemasan yang terapung di perairan hangat samudra Indonesia. Matanya menangkap berkas sinar mentari yang menembus permukaan air berkilauan. Bersama miliaran kawanan temannya, Fito mulai berfotosintesis.'
            },
            {
              sceneTitle: '2. Menyapa Sang Paus Raksasa',
              content: 'Suatu hari, seekor Paus Biru raksasa berenang melewatinya. Paus itu menyapa ramah, "Terima kasih, Fito kecil! Meskipun tubuhmu hanya seukuran debu yang tak terlihat mata telanjang, oksigen yang kamu buatlah yang kuhirup setiap kali muncul ke permukaan air!"'
            },
            {
              sceneTitle: '3. Paru-Paru Biru Bumi',
              content: 'Fito tersenyum bahagia. Ia menyadari bahwa di dunia ini, tidak ada ciptaan yang sia-sia. Hal paling mungil sekalipun bisa menjadi tiang penyangga bagi kehidupan seluruh planet bumi.'
            }
          ],
          moralValue: 'Jangan pernah merasa kecil atau tidak berarti; kontribusi tulus kita memiliki dampak besar bagi dunia.',
          scienceQuestion: 'Mengapa fitoplankton hanya bisa hidup di lapisan atas permukaan laut (zona fotik)?',
          scienceAnswer: 'Karena fitoplankton membutuhkan sinar matahari untuk berfotosintesis, dan cahaya matahari hanya bisa menembus air laut hingga kedalaman sekitar 200 meter.'
        },
        misi: {
          title: 'Misi Penyelamat Paru-Paru Samudra',
          scenario: 'Ketahui ancaman pemanasan laut dan lindungi produsen utama samudra!',
          badgeName: 'Penjaga Oksigen Biru',
          questions: [
            {
              id: 'q1',
              title: 'Sumber Oksigen Dunia',
              prompt: 'Berapa perkiraan proporsi oksigen di atmosfer bumi yang diproduksi oleh fitoplankton di lautan?',
              options: [
                { label: 'A', text: 'Sekitar 50% atau lebih dari separuh oksigen bumi', isCorrect: true, explanation: 'Tepat sekali! Lautan menghasilkan lebih banyak oksigen daripada seluruh hutan hujan daratan.' },
                { label: 'B', text: 'Hanya 1%', isCorrect: false, explanation: 'Salah, peran fitoplankton sangat raksasa.' },
                { label: 'C', text: '0%, karena tumbuhan laut tidak bisa bernapas', isCorrect: false, explanation: 'Fitoplankton berfotosintesis menghasilkan oksigen melimpah.' }
              ]
            },
            {
              id: 'q2',
              title: 'Rantai Makanan Pelagis',
              prompt: 'Siapa konsumen tingkat 1 yang langsung memakan fitoplankton dalam jumlah raksasa di laut?',
              options: [
                { label: 'A', text: 'Zooplankton dan udang krill', isCorrect: true, explanation: 'Benar! Zooplankton memakan fitoplankton sebagai makanan pokoknya.' },
                { label: 'B', text: 'Hiu putih besar', isCorrect: false, explanation: 'Hiu memakan anjing laut atau ikan besar.' },
                { label: 'C', text: 'Burung elang', isCorrect: false, explanation: 'Elang adalah pemangsa daratan/pesisir.' }
              ]
            },
            {
              id: 'q3',
              title: 'Ancaman Pengasaman Laut',
              prompt: 'Pencemaran gas karbon berlebih menyebabkan air laut menjadi semakin asam. Apa dampak buruknya bagi fitoplankton dan cangkang laut?',
              options: [
                { label: 'A', text: 'Cangkang kalsium mereka rapuh dan populasi fitoplankton menurun', isCorrect: true, explanation: 'Benar! Asam melarutkan kalsium karbonat pada mikroorganisme laut.' },
                { label: 'B', text: 'Laut berubah menjadi jus jeruk manis', isCorrect: false, explanation: 'Tidak masuk akal secara ilmiah.' },
                { label: 'C', text: 'Fitoplankton berubah menjadi hiu', isCorrect: false, explanation: 'Tidak mungkin.' }
              ]
            }
          ]
        }
      },
      {
        id: 'laut_krill',
        name: 'Zooplankton & Udang Krill',
        scientificName: 'Euphausia superba',
        category: 'Konsumen I',
        trophicRole: 'Tingkat Trofik 2 (Herbivora Planktonik)',
        badgeColor: 'amber',
        sliceColor: '#0284c7',
        textColor: '#ffffff',
        emoji: '🦐',
        summary: 'Krustasea mungil transparan yang bermigrasi vertikal setiap hari, menjadi jembatan energi terbesar di lautan.',
        habitat: 'Kolom air terbuka samudra, dari perairan tropis hingga kutub.',
        diet: 'Fitoplankton mikroskopis dan partikel alga melayang.',
        predator: 'Ikan karang, cumi-cumi, burung laut, anjing laut, dan paus balin.',
        adaptation: 'Memiliki organ bercahaya (fotofor) di tubuhnya untuk menyamarkan bayangannya dari pemangsa di bawahnya (counter-illumination).',
        funFact: 'Total berat seluruh udang krill di bumi diperkirakan mencapai 500 juta ton, melebihi berat seluruh manusia di dunia!',
        dongeng: {
          title: 'Tarian Cahaya di Laut Dalam',
          theme: 'Kebersamaan & Kekuatan Kawanan',
          synopsis: 'Kiko si Udang Krill memimpin kawanan jutaan temannya melakukan perjalanan migrasi harian demi bertahan hidup.',
          paragraphs: [
            {
              sceneTitle: '1. Mengungsi ke Laut Dalam',
              content: 'Saat siang hari matahari bersinar terang, Kiko si Krill dan jutaan kawannya menyelam ke laut dalam yang gelap. Mereka bersembunyi dari incaran burung pemangsa dan ikan-ikan lapar.'
            },
            {
              sceneTitle: '2. Migrasi Massal Saat Senja',
              content: 'Ketika senja tiba dan permukaan laut mulai temaram, terjadilah keajaiban terbesar di bumi. Miliaran krill berenang naik serempak ke permukaan untuk menikmati santapan fitoplankton. Lautan berpendar kelap-kelip oleh organ cahaya mereka.'
            },
            {
              sceneTitle: '3. Jantung Rantai Samudra',
              content: 'Kiko tahu bahwa mereka adalah penghubung kehidupan. Tanpa kawanan krill, ikan-ikan kecil, penguin, dan paus raksasa tidak akan memiliki makanan. Bersama-sama dalam kawanan, mereka menjaga samudra tetap berdenyut.'
            }
          ],
          moralValue: 'Kebersamaan dan kerja sama dalam kelompok membuat hal yang tampak lemah menjadi kekuatan yang sangat tangguh.',
          scienceQuestion: 'Apa yang dimaksud dengan migrasi vertikal harian (diel vertical migration) pada zooplankton?',
          scienceAnswer: 'Pergerakan zooplankton menyelam ke laut dalam pada siang hari untuk menghindari predator visual, lalu naik ke permukaan pada malam hari untuk memakan fitoplankton.'
        },
        misi: {
          title: 'Misi Jembatan Energi Samudra',
          scenario: 'Teliti pentingnya krustasea planktonik bagi keberlangsungan satwa laut raksasa!',
          badgeName: 'Penjelajah Arus Samudra',
          questions: [
            {
              id: 'q1',
              title: 'Konsumen Primer Samudra',
              prompt: 'Dalam rantai makanan laut: Fitoplankton -> Udang Krill -> Ikan -> Hiu. Kedudukan udang krill adalah...',
              options: [
                { label: 'A', text: 'Konsumen Tingkat 1 (Herbivora)', isCorrect: true, explanation: 'Benar! Krill memakan langsung tumbuhan produsen fitoplankton.' },
                { label: 'B', text: 'Produsen', isCorrect: false, explanation: 'Krill adalah hewan, bukan produsen.' },
                { label: 'C', text: 'Konsumen Puncak', isCorrect: false, explanation: 'Krill banyak dimangsa hewan lain.' }
              ]
            },
            {
              id: 'q2',
              title: 'Adaptasi Fotofor',
              prompt: 'Organ tubuh penghasil cahaya pada tubuh krill dinamakan...',
              options: [
                { label: 'A', text: 'Fotofor (bioluminesens)', isCorrect: true, explanation: 'Tepat sekali! Organ fotofor memancarkan cahaya biru-hijau di kegelapan laut.' },
                { label: 'B', text: 'Insang udara', isCorrect: false, explanation: 'Insang untuk bernapas, bukan memancarkan cahaya.' },
                { label: 'C', text: 'Tanduk sonar', isCorrect: false, explanation: 'Krill tidak memiliki sonar.' }
              ]
            },
            {
              id: 'q3',
              title: 'Konsumsi Paus Balin',
              prompt: 'Paus Balin (seperti Paus Bungkuk) tidak bergigi tajam. Bagaimana cara mereka memakan udang krill?',
              options: [
                { label: 'A', text: 'Menyaring air laut dengan lempeng balin berbulu di mulutnya', isCorrect: true, explanation: 'Tepat! Paus menelan air laut lalu menyaring ribuan krill menggunakan lempeng keratin balin.' },
                { label: 'B', text: 'Menombak krill satu per satu dengan ekornya', isCorrect: false, explanation: 'Paus menyaring makanan secara massal.' },
                { label: 'C', text: 'Memasak krill dengan uap air panas', isCorrect: false, explanation: 'Bukan fakta ilmiah.' }
              ]
            }
          ]
        }
      },
      {
        id: 'laut_ikan_badut',
        name: 'Ikan Badut Karang',
        scientificName: 'Amphiprion ocellaris',
        category: 'Konsumen II',
        trophicRole: 'Tingkat Trofik 3 (Omnivora Karang)',
        badgeColor: 'blue',
        sliceColor: '#0369a1',
        textColor: '#ffffff',
        emoji: '🐠',
        summary: 'Ikan karang cerah bergaris jingga-putih yang bersimbiosis mutualisme dengan anemon laut beracun.',
        habitat: 'Gugusan terumbu karang dangkal dan tentakel anemon laut.',
        diet: 'Alga karang kecil, zooplankton, dan sisa makanan anemon.',
        predator: 'Ikan kerapu besar, belut moray, dan ikan barakuda.',
        adaptation: 'Lapisan lendir khusus pada sisiknya membuat sengatan tentakel beracun anemon tidak mempan melukainya.',
        funFact: 'Ikan badut dan anemon saling melindungi: ikan badut mengusir ikan pemakan anemon, dan anemon melindungi ikan badut dari pemangsa!',
        dongeng: {
          title: 'Rumah Lembut di Balik Racun',
          theme: 'Simbiosis & Persahabatan',
          synopsis: 'Ciko si Ikan Badut menemukan persahabatan sejati dengan Ani si Anemon di tengah bahaya karang.',
          paragraphs: [
            {
              sceneTitle: '1. Pelarian dari Pemangsa',
              content: 'Ciko si Ikan Badut berenang tergesa-gesa. Di belakangnya, seekor ikan kerapu lapar dengan gigi tajam mengejarnya. Di depannya terbentang hamparan tentakel beracun yang ditakuti semua makhluk karang.'
            },
            {
              sceneTitle: '2. Tempat Berlindung yang Aman',
              content: 'Dengan percaya diri, Ciko meluncur masuk ke dalam tentakel Ani si Anemon Laut. Sang kerapu terpaksa berhenti dan berbalik pergi karena takut tersengat racun mematikan Ani. Ciko selamat berkat lendir pelindung di kulitnya.'
            },
            {
              sceneTitle: '3. Berbagi Kebaikan Bersama',
              content: 'Sebagai rasa terima kasih, Ciko membersihkan parasit dari tubuh Ani dan membawakan remah-remah makanan bergizi. Mereka hidup berdampingan dalam simbiosis mutualisme yang saling menguntungkan selamanya.'
            }
          ],
          moralValue: 'Hubungan persahabatan sejati dibangun atas dasar saling menjaga, saling membantu, dan saling menghormati kelebihan masing-masing.',
          scienceQuestion: 'Apa jenis simbiosis antara ikan badut dan anemon laut?',
          scienceAnswer: 'Simbiosis mutualisme, karena keduanya saling menguntungkan: ikan badut mendapat perlindungan dari tentakel anemon, sementara anemon mendapat pembersihan parasit dan oksigen dari gerakan sirip ikan badut.'
        },
        misi: {
          title: 'Misi Penjaga Terumbu Karang',
          scenario: 'Eksplorasi ekosistem terumbu karang yang berwarna-warni dan penuh keajaiban!',
          badgeName: 'Sahabat Anemon Samudra',
          questions: [
            {
              id: 'q1',
              title: 'Simbiosis Mutualisme',
              prompt: 'Hubungan antara dua makhluk hidup yang saling menguntungkan seperti ikan badut dan anemon dinamakan simbiosis...',
              options: [
                { label: 'A', text: 'Mutualisme', isCorrect: true, explanation: 'Benar sekali! Keduanya sama-sama untung tanpa ada yang dirugikan.' },
                { label: 'B', text: 'Parasitisme', isCorrect: false, explanation: 'Parasitisme merugikan salah satu pihak.' },
                { label: 'C', text: 'Komensalisme', isCorrect: false, explanation: 'Komensalisme hanya menguntungkan satu pihak tanpa merugikan pihak lain.' }
              ]
            },
            {
              id: 'q2',
              title: 'Ancaman Terumbu Karang',
              prompt: 'Fenomena pemutihan karang (coral bleaching) terjadi ketika suhu air laut meningkat, menyebabkan karang kehilangan alga simbionnya yaitu...',
              options: [
                { label: 'A', text: 'Zooxanthellae', isCorrect: true, explanation: 'Tepat! Alga bersel satu Zooxanthellae memberi warna dan nutrisi bagi polip karang.' },
                { label: 'B', text: 'Lumut darat', isCorrect: false, explanation: 'Lumut darat tidak hidup di dasar laut.' },
                { label: 'C', text: 'Pohon kelapa', isCorrect: false, explanation: 'Pohon kelapa tumbuh di daratan pantai.' }
              ]
            },
            {
              id: 'q3',
              title: 'Aksi Nyata Pelajar',
              prompt: 'Langkah sederhana yang bisa kita lakukan saat berwisata ke pantai agar tidak merusak rumah ikan badut adalah...',
              options: [
                { label: 'A', text: 'Tidak menginjak atau mematahkan karang dan tidak membuang sampah plastik ke laut', isCorrect: true, explanation: 'Sangat tepat! Menjaga terumbu karang tetap lestari adalah kewajiban kita semua.' },
                { label: 'B', text: 'Membawa pulang karang hidup sebagai hiasan akuarium', isCorrect: false, explanation: 'Mengambil karang hidup merusak ekosistem terumbu.' },
                { label: 'C', text: 'Menuangkan deterjen ke air laut', isCorrect: false, explanation: 'Deterjen adalah racun bagi kehidupan air.' }
              ]
            }
          ]
        }
      },
      {
        id: 'laut_penyu',
        name: 'Penyu Hijau',
        scientificName: 'Chelonia mydas',
        category: 'Konsumen I',
        trophicRole: 'Tingkat Trofik 2/3 (Herbivora Padang Lamun)',
        badgeColor: 'amber',
        sliceColor: '#1d4ed8',
        textColor: '#ffffff',
        emoji: '🐢',
        summary: 'Reptil purba penjelajah ribuan mil samudra yang menjaga padang lamun tetap terpangkas sehat dan subur.',
        habitat: 'Padang lamun dangkal pesisir dan pantai peneluran berpasir bersih.',
        diet: 'Lamun laut dan alga hijau (saat dewasa adalah herbivora laut).',
        predator: 'Hiu macan (saat dewasa), kepiting, biawak, dan burung elang laut (saat tukik menetas).',
        adaptation: 'Kaki depan bermodifikasi menjadi sirip dayung kuat dan kelenjar garam di matanya untuk membuang kelebihan garam laut seolah "menangis".',
        funFact: 'Penyu hijau betina akan mengarungi samudra ribuan kilometer untuk kembali bertelur di pantai persis tempat ia dilahirkan puluhan tahun silam!',
        dongeng: {
          title: 'Kompas Bintang Sang Penyu Tua',
          theme: 'Ketabahan & Kesetiaan',
          synopsis: 'Teto si Penyu Hijau mengarungi samudra luas dengan bimbingan medan magnet bumi dan cahaya bintang.',
          paragraphs: [
            {
              sceneTitle: '1. Berenang Melintasi Samudra',
              content: 'Teto mengayunkan sirip dayungnya yang perkasa di kedalaman samudra Hindia. Di punggung karapasnya yang kokoh, tergores jejak petualangan puluhan tahun melintasi ribuan mil laut.'
            },
            {
              sceneTitle: '2. Bahaya Sampah Plastik',
              content: 'Suatu hari, Teto melihat benda melayang transparan di air. Dari kejauhan, benda itu tampak seperti ubur-ubur lezat, namun ternyata kantong plastik beracun! Untunglah Teto teringat pesan leluhurnya untuk berhati-hati terhadap sampah buatan manusia.'
            },
            {
              sceneTitle: '3. Pulang ke Pantai Asal',
              content: 'Berkat kepekaan medan magnet di kepalanya, Teto berhasil menepati janjinya. Ia mendarat di pantai pasir tempat ia pertama kali menetas. Di sana, ia meletakkan telur-telur harapan demi generasi penyu samudra berikutnya.'
            }
          ],
          moralValue: 'Kesetiaan pada asal-usul dan ketabahan menghadapi rintangan akan selalu menuntun kita kembali ke rumah sejati.',
          scienceQuestion: 'Mengapa sampah plastik di lautan sangat berbahaya bagi penyu laut?',
          scienceAnswer: 'Karena penyu sering mengira kantong plastik mengapung sebagai makanan kesukaannya (ubur-ubur). Plastik yang tertelan menyumbat pencernaan penyu dan menyebabkan kematian.'
        },
        misi: {
          title: 'Misi Penyelamat Satwa Samudra Purba',
          scenario: 'Kawal perlindungan penyu dari bahaya sampah plastik dan eksploitasi telur!',
          badgeName: 'Penjaga Pantai Nusantara',
          questions: [
            {
              id: 'q1',
              title: 'Navigasi Alami Penyu',
              prompt: 'Bagaimana penyu mampu berenang ribuan kilometer di laut terbuka dan kembali ke pantai asalnya tanpa tersesat?',
              options: [
                { label: 'A', text: 'Mendeteksi garis medan magnet bumi (geomagnetik) dan posisi bintang', isCorrect: true, explanation: 'Luar biasa! Penyu memiliki kompas biologis berbasis medan magnet bumi.' },
                { label: 'B', text: 'Melihat rambu jalan di bawah laut', isCorrect: false, explanation: 'Tidak ada rambu jalan di laut.' },
                { label: 'C', text: 'Mengikuti arah perahu nelayan', isCorrect: false, explanation: 'Penyu bernavigasi mandiri ribuan mil.' }
              ]
            },
            {
              id: 'q2',
              title: 'Peran di Padang Lamun',
              prompt: 'Penyu hijau memakan pucuk-pucuk daun lamun laut. Perilaku ini memberikan manfaat ekologis yaitu...',
              options: [
                { label: 'A', text: 'Menjaga padang lamun tetap segar, cepat bertunas baru, dan kaya oksigen', isCorrect: true, explanation: 'Tepat! Seperti rumput yang dipotong rapi, lamun tumbuh lebih subur saat dimakan penyu.' },
                { label: 'B', text: 'Membuat laut menjadi kering', isCorrect: false, explanation: 'Salah, padang lamun tetap ada di dalam air.' },
                { label: 'C', text: 'Membunuh seluruh ikan kecil', isCorrect: false, explanation: 'Penyu justru menyuburkan habitat ikan.' }
              ]
            },
            {
              id: 'q3',
              title: 'Perlindungan Tukik',
              prompt: 'Saat anak penyu (tukik) baru menetas di malam hari, mereka bergerak menuju laut dipandu oleh pantulan cahaya rembulan di atas air. Bahaya cahaya lampu hotel/kota di dekat pantai adalah...',
              options: [
                { label: 'A', text: 'Tukik mengalami disorientasi (tersesat) ke arah daratan dan mati kepanasan', isCorrect: true, explanation: 'Benar sekali! Polusi cahaya lampu pantai mengecoh tukik sehingga gagal mencapai laut.' },
                { label: 'B', text: 'Tukik akan belajar berdansa', isCorrect: false, explanation: 'Bukan dampak ilmiah.' },
                { label: 'C', text: 'Tukik tumbuh sayap', isCorrect: false, explanation: 'Tukik tidak memiliki sayap.' }
              ]
            }
          ]
        }
      },
      {
        id: 'laut_hiu',
        name: 'Hiu Karang',
        scientificName: 'Carcharhinus melanopterus',
        category: 'Konsumen Puncak',
        trophicRole: 'Tingkat Trofik 4/5 (Apex Predator Samudra)',
        badgeColor: 'rose',
        sliceColor: '#1e40af',
        textColor: '#ffffff',
        emoji: '🦈',
        summary: 'Dokter samudra bertaring tajam yang menjaga kesehatan ekosistem laut dengan memangsa ikan yang sakit dan lemah.',
        habitat: 'Tepian karang lereng luar, laguna pulau karang, dan perairan tropis jernih.',
        diet: 'Ikan karang, cumi-cumi, kepiting, dan ikan-ikan yang sakit atau terluka.',
        predator: 'Tidak memiliki predator alami saat dewasa (Konsumen Puncak Samudra).',
        adaptation: 'Punya indra elektroreseptor (Ampullae of Lorenzini) di moncongnya untuk mendeteksi denyut listrik otot mangsa tersembunyi.',
        funFact: 'Hiu tidak memiliki tulang keras sama sekali! Seluruh rangka tubuh hiu terbuat dari tulang rawan (tulang lunak) seperti pada telinga kita!',
        dongeng: {
          title: 'Dokter Samudra Penjaga Karang',
          theme: 'Keadilan & Kesehatan Bersama',
          synopsis: 'Haka si Hiu Karang Sirip Hitam membuktikan bahwa keberadaannya melindungi seluruh populasi ikan dari wabah penyakit.',
          paragraphs: [
            {
              sceneTitle: '1. Penguasa Cepat Berwajah Tegas',
              content: 'Dengan sirip punggung berujung hitam pekat, Haka melesat anggun membelah air laut. Bentuk tubuhnya yang seperti torpedo memungkinkannya berbelok gesit di antara celah-celah karang tajam.'
            },
            {
              sceneTitle: '2. Menyembuhkan Samudra',
              content: 'Suatu ketika, penyakit menular menyerang kawanan ikan kakap merah di karang utara. Haka memburu ikan-ikan yang telah lemah dan terinfeksi penyakit tersebut. Dengan demikian, penyakit itu tidak menular ke ikan-ikan sehat lainnya.'
            },
            {
              sceneTitle: '3. Mahkota Keseimbangan Alam',
              content: 'Hewan karang sadar bahwa hiu bukanlah monster pembunuh, melainkan dokter pembersih samudra. Berkat pengawasan Haka, ekosistem terumbu karang tetap lestari, seimbang, dan bebas dari kepunahan.'
            }
          ],
          moralValue: 'Terkadang hal yang tampak tegas dan keras memiliki maksud baik untuk menjaga ketertiban dan keselamatan orang banyak.',
          scienceQuestion: 'Mengapa hiu dijuluki sebagai "dokter samudra"?',
          scienceAnswer: 'Karena hiu memangsa ikan yang sakit, lemah, atau terluka, sehingga mencegah penyebaran wabah penyakit dan menjaga genetika populasi ikan tetap unggul.'
        },
        misi: {
          title: 'Misi Penjaga Predator Puncak Bahari',
          scenario: 'Hentikan stigma hiu dan selidiki fungsi vital apex predator laut!',
          badgeName: 'Penjaga Mahkota Samudra',
          questions: [
            {
              id: 'q1',
              title: 'Rangka Tulang Hiu',
              prompt: 'Rangka tubuh hiu dan pari berbeda dari ikan mas atau lele karena terbuat dari...',
              options: [
                { label: 'A', text: 'Tulang rawan (kartilago) yang lentur dan ringan', isCorrect: true, explanation: 'Benar! Hiu termasuk kelompok ikan Chondrichthyes (ikan bertulang rawan).' },
                { label: 'B', text: 'Besi baja tahan karat', isCorrect: false, explanation: 'Salah, makhluk hidup tidak bertulang besi.' },
                { label: 'C', text: 'Cangkang kapur keras', isCorrect: false, explanation: 'Cangkang kapur dimiliki kerang dan kepiting.' }
              ]
            },
            {
              id: 'q2',
              title: 'Organ Ampullae of Lorenzini',
              prompt: 'Titik-titik pori hitam di sekitar moncong hiu berfungsi untuk...',
              options: [
                { label: 'A', text: 'Mendeteksi impuls medan listrik yang dipancarkan oleh detak jantung mangsa', isCorrect: true, explanation: 'Luar biasa! Indra elektroreseptor hiu luar biasa peka hingga sepersejuta volt.' },
                { label: 'B', text: 'Menyemprotkan tinta hitam', isCorrect: false, explanation: 'Tinta hitam disemprotkan cumi-cumi dan gurita.' },
                { label: 'C', text: 'Menghirup udara segar di atas air', isCorrect: false, explanation: 'Hiu bernapas melalui celah insang di samping kepalanya.' }
              ]
            },
            {
              id: 'q3',
              title: 'Dampak Perburuan Sirip Hiu',
              prompt: 'Jika hiu diburu habis untuk sup sirip hiu, apa yang akan terjadi pada ekosistem laut?',
              options: [
                { label: 'A', text: 'Rantai makanan runtuh karena predator menengah meledak dan menghabiskan ikan herbivora pembersih alga karang', isCorrect: true, explanation: 'Tepat sekali! Kehilangan top predator merusak seluruh piramida makanan samudra (trophic cascade).' },
                { label: 'B', text: 'Laut menjadi tenang dan ikan bahagia', isCorrect: false, explanation: 'Salah, ekosistem justru akan hancur dan karang mati tertutup lumut.' },
                { label: 'C', text: 'Air laut berubah menjadi tawar', isCorrect: false, explanation: 'Kadar garam tidak dipengaruhi sirip hiu.' }
              ]
            }
          ]
        }
      },
      {
        id: 'laut_bintang',
        name: 'Bintang Laut',
        scientificName: 'Asteroidea',
        category: 'Pengurai',
        trophicRole: 'Detritivor Dasar Laut & Pengontrol Kerang',
        badgeColor: 'purple',
        sliceColor: '#312e81',
        textColor: '#ffffff',
        emoji: '⭐',
        summary: 'Makhluk berduri unik berlengan lima yang membersihkan dasar karang dari bangkai dan sisa organisme laut.',
        habitat: 'Dasar berpasir dan dinding batuan terumbu karang.',
        diet: 'Bangkai hewan laut, kerang, spons karang, dan detritus organik.',
        predator: 'Ikan buntal, kepiting raja, burung camar, dan siput triton.',
        adaptation: 'Memiliki ratusan kaki tabung bertenaga hidrolik air (sistem vaskular air) dan kemampuan menumbuhkan kembali lengan yang putus (regenerasi).',
        funFact: 'Bintang laut dapat mengeluarkan lambungnya keluar dari mulutnya untuk mencerna mangsa di luar tubuhnya sendiri!',
        dongeng: {
          title: 'Bintang di Dasar Samudra',
          theme: 'Ketabahan & Regenerasi',
          synopsis: 'Tara si Bintang Laut mengajarkan bahwa luka dan kegagalan bisa dipulihkan kembali menjadi keindahan baru.',
          paragraphs: [
            {
              sceneTitle: '1. Kilau Bintang di Laut Dalam',
              content: 'Tara si Bintang Laut menempel erat di atas batuan karang merah. Warna tubuhnya merah saga dengan bintik-bintik putih menyerupai bintang yang jatuh dari langit malam ke dasar laut.'
            },
            {
              sceneTitle: '2. Ujian Kehilangan Lengan',
              content: 'Suatu hari ketika badai besar mengombang-ambingkan karang, sebuah batu menimpa salah satu lengan Tara hingga putus. Tara tidak putus asa. Ia tahu bahwa tubuhnya memiliki kekuatan luar biasa dari alam.'
            },
            {
              sceneTitle: '3. Tumbuh Kembali Lebih Kuat',
              content: 'Bulan demi bulan berlalu, dari bekas luka itu tumbuhlah lengan baru yang segar dan sempurna. Tara kembali merayap membersihkan dasar laut dengan kaki-kaki tabung mungilnya, membuktikan bahwa ketabahan mampu menyembuhkan segalanya.'
            }
          ],
          moralValue: 'Jangan putus asa saat menghadapi cobaan; kita memiliki kekuatan dari dalam diri untuk pulih dan bangkit kembali.',
          scienceQuestion: 'Bagaimana cara bintang laut bergerak di dasar perairan?',
          scienceAnswer: 'Bintang laut bergerak menggunakan ratusan kaki tabung hidrolik di bawah lengannya yang digerakkan oleh tekanan sistem saluran air (water vascular system).'
        },
        misi: {
          title: 'Misi Pembersih Dasar Samudra',
          scenario: 'Pahami kemampuan regenerasi mengagumkan dan peran detritivor invertebrata!',
          badgeName: 'Bintang Penjaga Karang',
          questions: [
            {
              id: 'q1',
              title: 'Kemampuan Regenerasi',
              prompt: 'Jika salah satu lengan bintang laut terpotong oleh predator, apa yang akan terjadi?',
              options: [
                { label: 'A', text: 'Bintang laut dapat menumbuhkan kembali lengan baru yang utuh (regenerasi)', isCorrect: true, explanation: 'Benar sekali! Sel punca bintang laut mampu meregenerasi jaringan yang hilang.' },
                { label: 'B', text: 'Bintang laut langsung mati seketika', isCorrect: false, explanation: 'Bintang laut memiliki daya tahan dan kemampuan regenerasi luar biasa.' },
                { label: 'C', text: 'Lengannya berubah menjadi ular laut', isCorrect: false, explanation: 'Tidak mungkin.' }
              ]
            },
            {
              id: 'q2',
              title: 'Kelompok Hewan',
              prompt: 'Bintang laut memiliki kulit berduri dan tergolong dalam filum...',
              options: [
                { label: 'A', text: 'Echinodermata (hewan berkulit duri)', isCorrect: true, explanation: 'Tepat! Satu kelompok dengan bulu babi dan teripang laut.' },
                { label: 'B', text: 'Vertebrata (hewan bertulang belakang)', isCorrect: false, explanation: 'Bintang laut adalah invertebrata tanpa tulang belakang.' },
                { label: 'C', text: 'Amfibi', isCorrect: false, explanation: 'Amfibi adalah katak dan salamander.' }
              ]
            },
            {
              id: 'q3',
              title: 'Peran Ekologis',
              prompt: 'Bintang laut memakan bangkai ikan dan mengontrol populasi kerang. Di ekosistem ia berfungsi sebagai...',
              options: [
                { label: 'A', text: 'Detritivor pembersih dasar laut dan predator penyeimbang', isCorrect: true, explanation: 'Benar! Bintang laut mencegah kerang mendominasi seluruh permukaan batuan karang.' },
                { label: 'B', text: 'Produsen utama fotosintesis', isCorrect: false, explanation: 'Bintang laut adalah hewan heterotrof.' },
                { label: 'C', text: 'Penghasil garam laut', isCorrect: false, explanation: 'Garam laut bukan diproduksi hewan.' }
              ]
            }
          ]
        }
      },
      {
        id: 'laut_bakteri',
        name: 'Bakteri Dekomposer Laut',
        scientificName: 'Vibrio & Pseudoalteromonas',
        category: 'Pengurai',
        trophicRole: 'Mikroba Pengurai Organik Dasar Samudra',
        badgeColor: 'purple',
        sliceColor: '#4338ca',
        textColor: '#ffffff',
        emoji: '🔬',
        summary: 'Mikroorganisme tak kasat mata yang mendaur ulang jutaan ton karbon dan nitrogen di samudra raya.',
        habitat: 'Salju laut (marine snow), sedimen dasar laut abisal, dan cairan lendir biota laut.',
        diet: 'Mengurai bahan organik terlarut, feses biota laut, dan jasad paus jatuh (whale fall).',
        predator: 'Protozoa bersilia dan flagelata laut.',
        adaptation: 'Mampu hidup pada suhu sangat dingin mendekati titik beku serta tekanan hidrostatik luar biasa tinggi di dasar samudra.',
        funFact: 'Ketika seekor paus mati dan tenggelam ke dasar laut (dikenal sebagai "Whale Fall"), bakteri dekomposer memberi makan ekosistem baru selama lebih dari 50 tahun!',
        dongeng: {
          title: 'Pesta Daur Ulang di Palung Gelap',
          theme: 'Kelestarian Tanpa Batas',
          synopsis: 'Bibi si Bakteri Laut merayakan keajaiban daur ulang yang menyalakan kembali api kehidupan di palung samudra yang paling gelap.',
          paragraphs: [
            {
              sceneTitle: '1. Di Kedalaman Tanpa Cahaya',
              content: 'Tiga ribu meter di bawah permukaan samudra, tidak ada setitik pun sinar matahari yang tembus. Suasana beku dan gelap gulita. Namun di sini, Bibi si Bakteri Laut hidup damai bersama triliunan rekannya.'
            },
            {
              sceneTitle: '2. Salju Samudra yang Bergizi',
              content: 'Dari permukaan atas, turunlah butiran-butiran putih lembut menyerupai salju samudra (marine snow). Butiran ini adalah sisa materi organik yang kaya karbon. Bibi segera bekerja menguraikan molekul-molekul tersebut.'
            },
            {
              sceneTitle: '3. Membangkitkan Kembali Samudra',
              content: 'Zat hara yang dilepaskan Bibi terbawa arus laut naik (upwelling) menuju permukaan perairan dangkal. Di sana, fitoplankton kembali meminum hara itu dan bertumbuh subur. Begitulah samudra memperbarui dirinya sepanjang masa.'
            }
          ],
          moralValue: 'Segala hal di alam ini saling terhubung; akhir dari suatu fase selalu menjadi awal mula bagi kehidupan yang baru.',
          scienceQuestion: 'Apa itu fenomena "salju laut" (marine snow)?',
          scienceAnswer: 'Hujan partikel sisa organik, bangkai plankton, dan partikel lumpur yang jatuh perlahan dari lapisan permukaan ke dasar laut dalam, menjadi sumber makanan utama makhluk laut dalam.'
        },
        misi: {
          title: 'Misi Daur Karbon Abisal',
          scenario: 'Telusuri siklus hara samudra dan misteri palung terdalam!',
          badgeName: 'Penjaga Daur Samudra Raya',
          questions: [
            {
              id: 'q1',
              title: 'Peran Upwelling',
              prompt: 'Arus laut naik (upwelling) membawa zat hara dari penguraian bakteri di dasar laut ke permukaan. Manfaat utamanya adalah...',
              options: [
                { label: 'A', text: 'Menyuburkan fitoplankton dan mendatangkan ribuan kawanan ikan', isCorrect: true, explanation: 'Benar sekali! Kawasan upwelling adalah wilayah perikanan paling produktif di dunia.' },
                { label: 'B', text: 'Membuat air laut membeku menjadi es krim', isCorrect: false, explanation: 'Tidak masuk akal secara ilmiah.' },
                { label: 'C', text: 'Mengeringkan laut', isCorrect: false, explanation: 'Upwelling adalah arus pergerakan air vertikal.' }
              ]
            },
            {
              id: 'q2',
              title: 'Ukuran Bakteri',
              prompt: 'Bakteri laut hanya dapat diamati strukturnya dengan jelas menggunakan alat...',
              options: [
                { label: 'A', text: 'Mikroskop elektron atau mikroskop cahaya pembesaran tinggi', isCorrect: true, explanation: 'Tepat! Bakteri berukuran mikrometer (seperseribu milimeter).' },
                { label: 'B', text: 'Kacamata hitam biasa', isCorrect: false, explanation: 'Kacamata hitam hanya meredupkan silau cahaya.' },
                { label: 'C', text: 'Teropong bintang', isCorrect: false, explanation: 'Teropong bintang untuk mengamati benda langit jauh.' }
              ]
            },
            {
              id: 'q3',
              title: 'Fenomena Whale Fall',
              prompt: 'Saat jasad paus raksasa tenggelam ke dasar samudra terdalam, bakteri dan pengurai laut akan...',
              options: [
                { label: 'A', text: 'Menciptakan komunitas ekosistem baru yang hidup hingga puluhan tahun dari nutrisi tersebut', isCorrect: true, explanation: 'Hebat! Whale fall menjadi oase kehidupan di dasar samudra yang gersang.' },
                { label: 'B', text: 'Meledakkan bangkai tersebut dengan api', isCorrect: false, explanation: 'Tidak ada api membakar di dalam air laut.' },
                { label: 'C', text: 'Membuang jasad paus ke luar angkasa', isCorrect: false, explanation: 'Bukan fakta ilmiah.' }
              ]
            }
          ]
        }
      }
    ]
  },

  gurun: {
    id: 'gurun',
    name: 'Ekosistem Gurun',
    subtitle: 'Padang Pasir & Daerah Kering Ekstrem',
    tagline: 'Kagumi daya tahan luar biasa makhluk hidup di tanah tandus nan terik',
    description: 'Ekosistem gurun dicirikan oleh curah hujan sangat rendah (<250 mm/tahun), perbedaan suhu ekstrem antara siang yang membakar dan malam yang membeku, serta strategi adaptasi air paling menakjubkan.',
    bgImage: '/src/assets/images/bg_ekosistem_gurun_1793015156584.jpg',
    primaryColor: '#ea580c', // orange-600
    chainFlow: [
      { level: 'Produsen', label: 'Kaktus Saguaro', organismId: 'gurun_kaktus', organismName: 'Kaktus' },
      { level: 'Konsumen I', label: 'Tikus Kanguru', organismId: 'gurun_tikus', organismName: 'Tikus Gurun' },
      { level: 'Konsumen II', label: 'Kadal Berduri', organismId: 'gurun_kadal', organismName: 'Kadal Duri' },
      { level: 'Konsumen III', label: 'Ular Derik', organismId: 'gurun_ular', organismName: 'Ular Derik' },
      { level: 'Puncak', label: 'Elang Emas Gurun', organismId: 'gurun_elang', organismName: 'Elang Emas' },
      { level: 'Pengurai', label: 'Kumbang Kotoran', organismId: 'gurun_kumbang', organismName: 'Kumbang Gurun' }
    ],
    organisms: [
      {
        id: 'gurun_kaktus',
        name: 'Kaktus Saguaro',
        scientificName: 'Carnegiea gigantea',
        category: 'Produsen',
        trophicRole: 'Tingkat Trofik 1 (Produsen Penyimpan Air)',
        badgeColor: 'emerald',
        sliceColor: '#ea580c',
        textColor: '#ffffff',
        emoji: '🌵',
        summary: 'Raksasa gurun berduri yang batangnya berfungsi seperti spons penyimpan ribuan liter air hujan langka.',
        habitat: 'Lembah gurun berbatu dan lereng bukit berpasir terik.',
        diet: 'Autotrof: fotosintesis dilakukan di jaringan batang hijaunya, membuka stomata hanya di malam hari (jalur CAM).',
        predator: 'Burung pelatuk gurun (membuat sarang di batang), kura-kura gurun, dan serangga pengisap nektar.',
        adaptation: 'Daun bermodifikasi menjadi duri tajam untuk mengurangi penguapan serta menghalau herbivora haus.',
        funFact: 'Satu kaktus saguaro dewasa yang menggembung setelah hujan lebat dapat menyimpan hingga 3.000 liter air murni di dalam batangnya!',
        dongeng: {
          title: 'Benteng Air di Bawah Mentari Terik',
          theme: 'Ketabahan & Perlindungan',
          synopsis: 'Sagu si Kaktus Raksasa menjadi oase penyelamat bagi burung-burung gurun yang kehausan.',
          paragraphs: [
            {
              sceneTitle: '1. Berdiri Tegak di Bawah Terik Mentari',
              content: 'Matahari siang membakar pasir gurun dengan panas menyengat. Tumbuhan lain telah lama mengering, namun Sagu si Kaktus berdiri tegak dengan lengan-lengan hijaunya yang kokoh menantang langit.'
            },
            {
              sceneTitle: '2. Oase Rahasia Bagi Sang Pelatuk',
              content: 'Seekor burung pelatuk gurun bernama Piko terbang dengan napas terengah-engah mencari setetes air. Sagu membukakan liang di batangnya yang sejuk dan terlindung dari sengatan panas. "Masuklah kawan, di dalam sini sejuk dan aman," sambut Sagu lembut.'
            },
            {
              sceneTitle: '3. Berbunga di Tengah Malam',
              content: 'Saat malam gurun berubah dingin membeku, Sagu mekar dengan bunga-bunga putih harum semerbak. Kelelawar dan ngengat datang menikmati nektar manis. Sagu membuktikan bahwa tanah yang paling tandus sekalipun bisa menjadi rumah penuh kasih.'
            }
          ],
          moralValue: 'Ketabahan dalam menghadapi ujian hidup menjadikan kita pribadi yang kokoh dan mampu memberi naungan bagi sesama.',
          scienceQuestion: 'Mengapa daun tanaman kaktus berbentuk duri tajam?',
          scienceAnswer: 'Bentuk duri mengurangi luas permukaan daun sehingga mencegah hilangnya air akibat penguapan ekstrem, sekaligus melindungi cadangan air kaktus dari hewan gurun yang haus.'
        },
        misi: {
          title: 'Misi Oase Hijau Padang Pasir',
          scenario: 'Eksplorasi adaptasi fisiologis tumbuhan tahan kering (xerofit)!',
          badgeName: 'Penjaga Oase Padang Tandus',
          questions: [
            {
              id: 'q1',
              title: 'Adaptasi Daun Duri',
              prompt: 'Tumbuhan yang beradaptasi hidup di lingkungan sangat kering dan panas seperti kaktus disebut tumbuhan...',
              options: [
                { label: 'A', text: 'Xerofit', isCorrect: true, explanation: 'Benar sekali! Kaktus dan lidah buaya adalah contoh tumbuhan xerofit.' },
                { label: 'B', text: 'Hidrofit (tumbuhan air)', isCorrect: false, explanation: 'Hidrofit adalah teratai dan eceng gondok.' },
                { label: 'C', text: 'Higrofit (tumbuhan lembap)', isCorrect: false, explanation: 'Higrofit adalah tumbuhan lumut dan paku.' }
              ]
            },
            {
              id: 'q2',
              title: 'Pernapasan Malam Hari',
              prompt: 'Kaktus membuka pori-pori stomata daunnya hanya pada malam hari untuk menyerap karbon dioksida. Tujuannya adalah...',
              options: [
                { label: 'A', text: 'Mencegah kehilangan air akibat panas terik siang hari (metabolisme CAM)', isCorrect: true, explanation: 'Tepat! Jika membuka stomata di siang hari, air kaktus akan langsung menguap habis.' },
                { label: 'B', text: 'Menangkap kunang-kunang', isCorrect: false, explanation: 'Stomata untuk pertukaran gas, bukan menangkap serangga.' },
                { label: 'C', text: 'Supaya tidak terlihat oleh matahari', isCorrect: false, explanation: 'Bukan alasan ilmiah.' }
              ]
            },
            {
              id: 'q3',
              title: 'Sistem Perakaran',
              prompt: 'Bagaimana karakteristik akar kaktus saguaro di dalam tanah?',
              options: [
                { label: 'A', text: 'Menjalar sangat luas tepat di bawah permukaan tanah untuk menyerap hujan sesegera mungkin', isCorrect: true, explanation: 'Benar! Akar kaktus menyebar dangkal tapi sangat luas agar tetes hujan sekecil apa pun langsung terserap.' },
                { label: 'B', text: 'Menembus hingga ke inti magma bumi', isCorrect: false, explanation: 'Tidak mungkin ada akar di magma.' },
                { label: 'C', text: 'Kaktus tidak memiliki akar', isCorrect: false, explanation: 'Kaktus memiliki sistem akar yang luas.' }
              ]
            }
          ]
        }
      },
      {
        id: 'gurun_tikus',
        name: 'Tikus Kanguru',
        scientificName: 'Dipodomys spectabilis',
        category: 'Konsumen I',
        trophicRole: 'Tingkat Trofik 2 (Herbivora Tahan Haus)',
        badgeColor: 'amber',
        sliceColor: '#f97316',
        textColor: '#ffffff',
        emoji: '🐁',
        summary: 'Pengerat malam bertubuh mungil yang mampu hidup seumur hidupnya tanpa minum setetes air pun!',
        habitat: 'Lorong-lorong liang bawah tanah sedalam 1-2 meter di padang pasir.',
        diet: 'Biji-bijian kering tanaman gurun dan rumput kerdil.',
        predator: 'Ular derik, burung hantu gurun, rubah fennec, dan burung elang.',
        adaptation: 'Kaki belakang panjang mirip kanguru untuk melompat zig-zag menghindari sambaran ular, serta ginjal super efisien yang mengekstrak air metabolik dari biji kering.',
        funFact: 'Tikus kanguru memproduksi air sendiri di dalam sel tubuhnya dari pemecahan molekul karbohidrat pada biji yang ia makan!',
        dongeng: {
          title: 'Lompatan Ajaib di Malam Gurun',
          theme: 'Ketangkasan & Hemat Sumber Daya',
          synopsis: 'Kangu si Tikus Kanguru membuktikan bahwa hemat air dan kecerdikan bergerak adalah kunci bertahan hidup.',
          paragraphs: [
            {
              sceneTitle: '1. Sejuk di Liang Bawah Tanah',
              content: 'Saat matahari membakar permukaan gurun hingga 50 derajat celcius, Kangu si Tikus Kanguru tertidur lelap di liang bawah tanahnya yang sejuk dan lembap. Suhu di bawah tanah sangat bersahabat.'
            },
            {
              sceneTitle: '2. Berburu Biji di Bawah Bintang',
              content: 'Begitu malam tiba dan suhu gurun menurun drastis, Kangu melompat keluar dengan kantong pipinya yang dipenuhi biji-biji kering. Ia melompat anggun dengan dua kaki belakangnya seperti kanguru kecil.'
            },
            {
              sceneTitle: '3. Sambaran Senyap Ular Derik',
              content: 'Tiba-tiba seekor ular derik menyambar dari balik batu! Dengan refleks secepat kilat (kurang dari sepersepuluh detik), Kangu menendang pasir ke arah mata ular dan melompat salto ke udara. Kangu selamat dan kembali ke liang dengan selamat.'
            }
          ],
          moralValue: 'Kewaspadaan tinggi dan pemanfaatan sumber daya secara hemat dan bijak menyelamatkan kita dalam situasi tersulit.',
          scienceQuestion: 'Bagaimana tikus kanguru bisa bertahan hidup tanpa minum air sepanjang hidupnya?',
          scienceAnswer: 'Tikus kanguru mendapatkan air dari air metabolik (hasil sampingan oksidasi lemak dan karbohidrat dari biji-bijian yang dimakannya), serta memiliki ginjal super pekat yang mencegah hilangnya air dalam urin.'
        },
        misi: {
          title: 'Misi Juara Hemat Air Gurun',
          scenario: 'Pahami adaptasi osmoregulasi dan perilaku nokturnal satwa gurun!',
          badgeName: 'Kancil Padang Pasir',
          questions: [
            {
              id: 'q1',
              title: 'Perilaku Nokturnal',
              prompt: 'Hewan gurun yang hanya beraktivitas di malam hari untuk menghindari panas matahari terik dinamakan hewan...',
              options: [
                { label: 'A', text: 'Nokturnal', isCorrect: true, explanation: 'Benar sekali! Nokturnal berarti aktif pada malam hari.' },
                { label: 'B', text: 'Diurnal', isCorrect: false, explanation: 'Diurnal adalah hewan yang aktif di siang hari.' },
                { label: 'C', text: 'Hibernasi', isCorrect: false, explanation: 'Hibernasi adalah tidur panjang di musim dingin.' }
              ]
            },
            {
              id: 'q2',
              title: 'Mekanisme Pertahanan Diri',
              prompt: 'Mengapa tikus kanguru memiliki kaki belakang yang sangat panjang dan kuat?',
              options: [
                { label: 'A', text: 'Untuk melompat zig-zag tinggi dan menendang pasir saat disambar predator', isCorrect: true, explanation: 'Tepat! Lompatannya bisa mencapai 2,5 meter dalam sekali sentakan.' },
                { label: 'B', text: 'Supaya bisa berenang di laut', isCorrect: false, explanation: 'Tikus kanguru hidup di gurun kering.' },
                { label: 'C', text: 'Untuk memetik kelapa', isCorrect: false, explanation: 'Tidak ada pohon kelapa di tengah gurun.' }
              ]
            },
            {
              id: 'q3',
              title: 'Air Metabolik',
              prompt: 'Dari manakah tikus kanguru memperoleh molekul air jika ia tidak pernah minum di alam liar?',
              options: [
                { label: 'A', text: 'Dari pemecahan biokimia biji-bijian di dalam sel tubuhnya (air metabolisme)', isCorrect: true, explanation: 'Hebat! Metabolisme 1 gram karbohidrat menghasilkan lebih dari setengah gram air murni.' },
                { label: 'B', text: 'Membeli es krim di minimarket gurun', isCorrect: false, explanation: 'Bukan fakta ilmiah.' },
                { label: 'C', text: 'Menghisap darah gajah', isCorrect: false, explanation: 'Tikus kanguru adalah pemakan biji.' }
              ]
            }
          ]
        }
      },
      {
        id: 'gurun_kadal',
        name: 'Kadal Berduri',
        scientificName: 'Moloch horridus',
        category: 'Konsumen II',
        trophicRole: 'Tingkat Trofik 3 (Insektivora Mirmekofag)',
        badgeColor: 'blue',
        sliceColor: '#fb923c',
        textColor: '#ffffff',
        emoji: '🦎',
        summary: 'Reptil gurun berlapis duri yang mampu "meminum air menggunakan kulit kakinya" melalui gaya kapiler kapiler mikro.',
        habitat: 'Hamparan pasir merah gurun dan semak spinifex tandus.',
        diet: 'Semut gurun hitam (mampu memangsa hingga 1.000 semut dalam sekali makan).',
        predator: 'Burung pemangsa, ular derik, dan anjing dingo.',
        adaptation: 'Kulitnya dipenuhi lekukan mikro kapiler: embun yang menyentuh bagian mana saja dari tubuhnya akan disalurkan otomatis ke sudut mulutnya!',
        funFact: 'Kadal berduri memiliki "kepala palsu" di bagian belakang tengkuknya; saat terancam ia menyembunyikan kepala aslinya ke dalam tanah!',
        dongeng: {
          title: 'Baju Zirah Si Peminum Embun',
          theme: 'Keunikan Diri & Kesabaran',
          synopsis: 'Mori si Kadal Berduri mengajarkan bahwa setiap keunikan fisik diciptakan Tuhan dengan fungsi yang luar biasa.',
          paragraphs: [
            {
              sceneTitle: '1. Penampilan yang Menipu',
              content: 'Dengan tubuh penuh tonjolan duri tajam dan warna tanah kecokelatan, Mori si Kadal Berduri sering dianggap hewan yang menakutkan. Padahal, Mori adalah makhluk pemalu yang sangat tenang dan berjalan lambat mengayun-ayun.'
            },
            {
              sceneTitle: '2. Keajaiban Minum Tanpa Mulut Menunduk',
              content: 'Saat embun pagi turun di gurun, butiran air menempel di punggung berduri Mori. Ajaib! Melalui celah-celah alur kulitnya, air tersebut mengalir sendiri ke sudut bibirnya seperti pipa air mini. Mori menikmati minuman segarnya tanpa harus mencari telaga.'
            },
            {
              sceneTitle: '3. Perlindungan Kepala Palsu',
              content: 'Ketika burung elang mencoba menyerangnya, Mori menekuk kepalanya dan menunjukkan benjolan tengkuk berduri yang mirip kepala. Sang burung kebingungan dan gagal memangsanya. Mori tersenyum bersyukur atas anugerah tubuhnya yang istimewa.'
            }
          ],
          moralValue: 'Jangan pernah merasa minder dengan penampilan diri; setiap dari kita memiliki keistimewaan unik untuk meraih tujuan hidup.',
          scienceQuestion: 'Bagaimana cara kulit kadal berduri menyerap air embun?',
          scienceAnswer: 'Kulitnya memiliki saluran kapiler mikroskopis di antara sisik duri yang menarik cairan air ke arah mulut dengan gaya kapiler, bahkan saat air hanya mengenai kakinya.'
        },
        misi: {
          title: 'Misi Arsitektur Kulit Ajaib Gurun',
          scenario: 'Pahami fenomena fisika kapilaritas pada adaptasi hewan gurun!',
          badgeName: 'Peneliti Zirah Pasir',
          questions: [
            {
              id: 'q1',
              title: 'Prinsip Fisika Kulit',
              prompt: 'Gaya tarik-menarik molekul cairan di dalam celah sempit sisik kadal duri yang membuat air mengalir ke mulut dinamakan...',
              options: [
                { label: 'A', text: 'Kapilaritas (gaya adhesi & kohesi cairan)', isCorrect: true, explanation: 'Benar sekali! Prinsip pipa kapiler membuat air merayap menentang gravitasi menuju mulut.' },
                { label: 'B', text: 'Magnet listrik', isCorrect: false, explanation: 'Air bukan logam yang ditarik magnet biasa.' },
                { label: 'C', text: 'Reaksi nuklir', isCorrect: false, explanation: 'Tidak ada kaitan dengan nuklir.' }
              ]
            },
            {
              id: 'q2',
              title: 'Makanan Utama',
              prompt: 'Kadal berduri adalah spesialis insektivora yang makanan utamanya berupa ribuan...',
              options: [
                { label: 'A', text: 'Semut gurun', isCorrect: true, explanation: 'Tepat! Kadal duri duduk sabar di dekat sarang semut dan menjilat semut satu per satu.' },
                { label: 'B', text: 'Ikan paus', isCorrect: false, explanation: 'Paus hidup di laut, bukan di gurun.' },
                { label: 'C', text: 'Rumput gajah basah', isCorrect: false, explanation: 'Kadal duri adalah pemakan serangga.' }
              ]
            },
            {
              id: 'q3',
              title: 'Hewan Poikiloterm (Berdarah Dingin)',
              prompt: 'Sebagai reptil, suhu tubuh kadal berubah-ubah mengikuti suhu lingkungan. Untuk menghangatkan tubuhnya di pagi hari, kadal akan...',
              options: [
                { label: 'A', text: 'Berjemur di atas batu yang terpapar sinar matahari (basking)', isCorrect: true, explanation: 'Benar! Kadal menyerap panas matahari agar enzim dan otot tubuhnya aktif bergerak.' },
                { label: 'B', text: 'Menyalakan pemanas ruangan listrik', isCorrect: false, explanation: 'Bukan perilaku alami hewan.' },
                { label: 'C', text: 'Minum air mendidih', isCorrect: false, explanation: 'Air mendidih berbahaya bagi jaringan tubuh.' }
              ]
            }
          ]
        }
      },
      {
        id: 'gurun_ular',
        name: 'Ular Derik Gurun',
        scientificName: 'Crotalus cerastes',
        category: 'Konsumen II',
        trophicRole: 'Tingkat Trofik 3/4 (Predator Berbisa Sidewinder)',
        badgeColor: 'orange',
        sliceColor: '#f59e0b',
        textColor: '#ffffff',
        emoji: '🐍',
        summary: 'Predator berdarah dingin yang bergerak menyamping di atas pasir panas dan membunyikan derik ekor sebagai peringatan.',
        habitat: 'Dune pasir lepas, rekahan bebatuan kapur terik, dan semak kering.',
        diet: 'Tikus kanguru, kadal gurun, burung puyuh gurun, dan serangga besar.',
        predator: 'Burung elang ekor merah, ular raja kebal bisa, dan burung roadrunner.',
        adaptation: 'Cara melata menyamping (sidewinding) sehingga hanya dua titik tubuhnya yang menyentuh pasir panas sekaligus, serta sensor lubang inframerah pemburu panas.',
        funFact: 'Bunyi "derik" pada ekornya bukan berasal dari kerikil di dalamnya, melainkan gesekan cincin-cincin kulit mati berongga yang saling bergetar hingga 50 kali per detik!',
        dongeng: {
          title: 'Musik Derik yang Penuh Peringatan',
          theme: 'Kejujuran & Sikap Terus Terang',
          synopsis: 'Raka si Ular Derik membunyikan ekornya bukan untuk menyombongkan bisa, melainkan agar tidak terinjak oleh satwa lain.',
          paragraphs: [
            {
              sceneTitle: '1. Melata Menyamping di Pasir Membara',
              content: 'Pasir gurun di siang hari bersuhu sangat panas. Namun Raka melata dengan gaya menyamping khas (sidewinder). Hanya sebagian kecil tubuhnya yang menyentuh pasir panas pada satu waktu, membuatnya meluncur sejuk tanpa kepanasan.'
            },
            {
              sceneTitle: '2. Derik Peringatan yang Bijak',
              content: 'Ketika langkah kaki hewan besar terdengar mendekati tempat persembunyiannya, Raka segera mengangkat ujung ekornya. "Krr-krr-krrr!" bunyi deriknya bergetar nyaring. Raka tidak ingin menggigit sembarangan jika tidak terpaksa.'
            },
            {
              sceneTitle: '3. Harmoni di Tengah Kesunyian',
              content: 'Satwa gurun memahami tanda tersebut dan melangkah berputar menjauh dengan aman. Raka mengajarkan bahwa keberanian sejati adalah memberi peringatan dengan jujur demi mencegah terjadinya celaka bagi kedua belah pihak.'
            }
          ],
          moralValue: 'Berterus terang dan memberi peringatan yang jelas adalah tanda kedewasaan untuk mencegah perselisihan yang tidak perlu.',
          scienceQuestion: 'Mengapa ular derik gurun berjalan dengan gerakan menyamping (sidewinding)?',
          scienceAnswer: 'Untuk meminimalkan luas permukaan tubuh yang bersentuhan langsung dengan pasir gurun yang sangat panas, serta memberikan cengkeraman kokoh di atas pasir lepas yang mudah runtuh.'
        },
        misi: {
          title: 'Misi Penjejak Panas Inframerah',
          scenario: 'Ketahui fisiologi sensorik inframerah pada predator reptil gurun!',
          badgeName: 'Penjaga Jejak Pasir',
          questions: [
            {
              id: 'q1',
              title: 'Organ Sensorik Panas',
              prompt: 'Cekungan khusus di antara mata dan hidung ular derik (pit organ) berfungsi mendeteksi...',
              options: [
                { label: 'A', text: 'Radiasi panas inframerah dari tubuh mangsa berdarah panas', isCorrect: true, explanation: 'Benar sekali! Ular derik dapat melihat gambar panas mangsa meski dalam gelap total.' },
                { label: 'B', text: 'Aroma parfum bunga', isCorrect: false, explanation: 'Aroma dideteksi lidah dan organ Jacobson.' },
                { label: 'C', text: 'Kadar garam dalam pasir', isCorrect: false, explanation: 'Bukan fungsi pit organ.' }
              ]
            },
            {
              id: 'q2',
              title: 'Sumber Bunyi Derik',
              prompt: 'Bagian ekor ular derik yang menghasilkan suara getaran tajam terbuat dari...',
              options: [
                { label: 'A', text: 'Segmen cincin zat tanduk (keratin) sisa pergantian kulit yang saling beradu', isCorrect: true, explanation: 'Tepat! Zat keratin yang sama seperti pada kuku manusia saling bergetar berfrekuensi tinggi.' },
                { label: 'B', text: 'Biji kerikil kecil di dalam kantung ekor', isCorrect: false, explanation: 'Mitos populer, derik adalah cincin keratin berongga.' },
                { label: 'C', text: 'Baterai kecil di dalam ekor', isCorrect: false, explanation: 'Hewan tidak memiliki baterai.' }
              ]
            },
            {
              id: 'q3',
              title: 'Fungsi Bisa (Venom)',
              prompt: 'Fungsi utama cairan bisa pada ular derik adalah...',
              options: [
                { label: 'A', text: 'Melumpuhkan mangsa dan memulai proses pencernaan jaringan dari dalam', isCorrect: true, explanation: 'Hebat! Enzim pada bisa merombak jaringan mangsa agar mudah dicerna.' },
                { label: 'B', text: 'Membuat mangsa tertidur nyenyak selamanya tanpa rasa sakit', isCorrect: false, explanation: 'Bisa ular merusak jaringan atau saraf.' },
                { label: 'C', text: 'Sebagai bahan pewarna kulit', isCorrect: false, explanation: 'Bukan fungsi bisa.' }
              ]
            }
          ]
        }
      },
      {
        id: 'gurun_elang',
        name: 'Elang Emas Gurun',
        scientificName: 'Aquila chrysaetos',
        category: 'Konsumen Puncak',
        trophicRole: 'Tingkat Trofik 4/5 (Apex Predator Udara Gurun)',
        badgeColor: 'rose',
        sliceColor: '#d97706',
        textColor: '#ffffff',
        emoji: '🦅',
        summary: 'Penguasa cakrawala padang tandus dengan rentang sayap perkasa lebih dari 2 meter dan cakar pemecah tulang.',
        habitat: 'Tebing-tebing cadas tinggi, ngarai terjal, dan langit gurun terbuka.',
        diet: 'Kelinci gurun, ular derik, kadal besar, rubah gurun, dan kura-kura.',
        predator: 'Tidak ada predator alami saat dewasa (Konsumen Puncak).',
        adaptation: 'Bulu tebal berkepadatan tinggi yang melindungi tubuhnya dari terik siang gurun sekaligus dingin ekstrem malam hari.',
        funFact: 'Saat menukik menyambar mangsa dari angkasa, Elang Emas dapat mencapai kecepatan lebih dari 300 kilometer per jam!',
        dongeng: {
          title: 'Sayap Emas di Atas Ngarai Cadas',
          theme: 'Fokus & Keteguhan Hati',
          synopsis: 'Aura si Elang Emas menunjukkan pentingnya kesabaran dan fokus saat mengincar tujuan mulia.',
          paragraphs: [
            {
              sceneTitle: '1. Mengintai dari Langit Tertinggi',
              content: 'Aura bertengger di atas tebing cadas tertinggi di ngarai gurun. Mata cokelat keemasannya menatap hamparan padang pasir ribuan kaki di bawahnya. Angin kencang menerpa, namun cengkeraman cakarnya tidak goyah sedikit pun.'
            },
            {
              sceneTitle: '2. Menukik Secepat Anak Panah',
              content: 'Seekor ular berbisa tampak melata di atas pasir terbuka. Dengan melipat sayapnya ke belakang, Aura menjatuhkan diri menukik tajam laksana peluru emas membelah angin. Dalam hitungan detik, cakarnya menyambar dengan presisi sempurna.'
            },
            {
              sceneTitle: '3. Mahkota Kebanggaan Padang Pasir',
              content: 'Aura membawa mangsanya kembali ke sarang di tebing tinggi untuk memberi makan anak-anaknya. Dari ketinggian, ia mengawasi siklus kehidupan gurun yang megah, menjaga agar tiada satu pun populasi yang berlebih melampaui batas alam.'
            }
          ],
          moralValue: 'Fokus penuh dan kesabaran dalam menanti waktu yang tepat akan mengantarkan kita mencapai cita-cita yang tinggi.',
          scienceQuestion: 'Mengapa elang emas membangun sarang di tebing batu yang sangat tinggi dan curam?',
          scienceAnswer: 'Untuk melindungi telur dan anak-anak elang dari predator darat seperti rubah, serigala, atau ular yang tidak bisa memanjat tebing terjal.'
        },
        misi: {
          title: 'Misi Radar Langit Padang Tandus',
          scenario: 'Kaji kemampuan menukik balistik dan peran penjaga puncak gurun!',
          badgeName: 'Raja Cakrawala Gurun',
          questions: [
            {
              id: 'q1',
              title: 'Ketajaman Mata Elang',
              prompt: 'Mata elang memiliki kepadatan sel reseptor retina yang sangat tinggi. Perkiraan ketajaman penglihatannya dibanding manusia adalah...',
              options: [
                { label: 'A', text: 'Sekitar 4 hingga 8 kali lebih tajam dari mata manusia normal', isCorrect: true, explanation: 'Benar sekali! Elang mampu melihat kelinci kecil dari jarak 3 kilometer.' },
                { label: 'B', text: 'Sama persis dengan mata manusia', isCorrect: false, explanation: 'Mata elang jauh lebih unggul dalam jarak jauh.' },
                { label: 'C', text: 'Elang buta warna total', isCorrect: false, explanation: 'Elang bahkan mampu melihat spektrum sinar ultraviolet.' }
              ]
            },
            {
              id: 'q2',
              title: 'Cakar Pengunci Otomatis',
              prompt: 'Tendon pada jari kaki elang memiliki mekanisme pengunci alami. Manfaatnya adalah...',
              options: [
                { label: 'A', text: 'Mencengkeram mangsa erat tanpa memerlukan tenaga otot terus-menerus', isCorrect: true, explanation: 'Tepat! Berat badan elang secara otomatis mengunci cakarnya saat mendarat atau memegang mangsa.' },
                { label: 'B', text: 'Supaya bisa bermain gitar', isCorrect: false, explanation: 'Tidak masuk akal.' },
                { label: 'C', text: 'Untuk mengikat tali sepatu', isCorrect: false, explanation: 'Elang tidak bersepatu.' }
              ]
            },
            {
              id: 'q3',
              title: 'Dinamika Populasi Gurun',
              prompt: 'Jika elang pemangsa punah dari ekosistem gurun, apa dampak jangka panjang bagi tanaman kaktus dan semak gurun?',
              options: [
                { label: 'A', text: 'Populasi kelinci dan pengerat meledak hingga menghabiskan seluruh bibit kaktus dan vegetasi', isCorrect: true, explanation: 'Benar! Fenomena ini dinamakan keruntuhan kaskade trofik (trophic cascade collapse).' },
                { label: 'B', text: 'Semua kaktus berubah menjadi pohon apel', isCorrect: false, explanation: 'Tidak ada kaitan genetik.' },
                { label: 'C', text: 'Gurun berubah menjadi danau air tawar', isCorrect: false, explanation: 'Curah hujan tidak ditentukan elang.' }
              ]
            }
          ]
        }
      },
      {
        id: 'gurun_kumbang',
        name: 'Kumbang Kotoran Gurun',
        scientificName: 'Scarabaeus sacer',
        category: 'Pengurai',
        trophicRole: 'Detritivor & Pendaur Nutrisi Pasir',
        badgeColor: 'purple',
        sliceColor: '#b45309',
        textColor: '#ffffff',
        emoji: '🪲',
        summary: 'Pahlawan daur ulang padang pasir yang menggelindingkan bola nutrisi menggunakan navigasi galaksi Bima Sakti!',
        habitat: 'Gundukan pasir gurun hangat dan jejak kawanan unta atau mamalia gurun.',
        diet: 'Kotoran hewan mamalia gurun dan sisa bahan organik kering (Detritivor).',
        predator: 'Kadal gurun, burung roadrunner, rubah fennec, dan laba-laba unta.',
        adaptation: 'Kaki depan bergerigi mirip sekop untuk memotong dan membentuk bola kotoran bulat sempurna, serta rangka kitin kedap air.',
        funFact: 'Kumbang kotoran adalah satu-satunya serangga di bumi yang terbukti bernavigasi dan berjalan lurus dengan memandu diri pada cahaya bintang galaksi Bima Sakti (Milky Way)!',
        dongeng: {
          title: 'Bola Bintang Penjaga Bumi',
          theme: 'Kerja Keras & Panduan Bintang',
          synopsis: 'Kumbi si Kumbang Gurun membuktikan bahwa pekerjaan mengolah kotoran adalah tugas paling mulia untuk menyuburkan padang pasir.',
          paragraphs: [
            {
              sceneTitle: '1. Menggulung Bola Kehidupan',
              content: 'Di tengah panasnya pasir gurun, Kumbi si Kumbang tidak bermalas-malasan. Dengan kedua kaki belakangnya yang cekatan, ia menggulung sebuah bola kotoran unta yang kaya serat dan mineral. Bola itu dibuatnya bulat sempurna.'
            },
            {
              sceneTitle: '2. Membaca Bintang Galaksi Bima Sakti',
              content: 'Saat malam tiba, Kumbi naik ke atas puncak bolanya. Ia menatap ke langit malam bertabur jutaan bintang. Dengan menggunakan jalur kabut bercahaya galaksi Bima Sakti sebagai kompasnya, Kumbi mendorong bolanya dalam garis lurus tanpa tersesat.'
            },
            {
              sceneTitle: '3. Menanam Kesuburan di Pasir',
              content: 'Kumbi mengubur bola tersebut jauh di dalam pasir sebagai sarang bagi telur-telurnya. Kotoran yang terkubur itu mengurai menjadi nutrisi subur, menjadi tempat bagi benih semak gurun untuk berakar dan tumbuh menghijau.'
            }
          ],
          moralValue: 'Tidak ada pekerjaan halal yang hina; ketekunan membersihkan dan mengolah hal sederhana bisa menyuburkan kehidupan di masa depan.',
          scienceQuestion: 'Bagaimana kumbang kotoran mampu mendorong bolanya dalam garis lurus di malam gelap gulita?',
          scienceAnswer: 'Kumbang kotoran menggunakan pola cahaya bintang di galaksi Bima Sakti (Milky Way) serta polarisasi cahaya bulan untuk mengunci arah kompasnya.'
        },
        misi: {
          title: 'Misi Astronomi & Daur Ulang Gurun',
          scenario: 'Ketahui keajaiban navigasi astronomis serangga dan daur materi tanah!',
          badgeName: 'Astronom Cilik Padang Pasir',
          questions: [
            {
              id: 'q1',
              title: 'Navigasi Langit Malam',
              prompt: 'Panduan alam apa yang digunakan kumbang kotoran malam untuk menentukan arah dorongan bolanya?',
              options: [
                { label: 'A', text: 'Gugusan bintang dan jalur galaksi Bima Sakti (Milky Way)', isCorrect: true, explanation: 'Benar sekali! Kumbang kotoran adalah hewan pertama yang terbukti memakai navigasi galaksi.' },
                { label: 'B', text: 'GPS satelit ponsel', isCorrect: false, explanation: 'Kumbang tidak menggunakan teknologi buatan manusia.' },
                { label: 'C', text: 'Mengikuti arah tiupan peluit', isCorrect: false, explanation: 'Kumbang mengandalkan pandangan langit malam.' }
              ]
            },
            {
              id: 'q2',
              title: 'Manfaat bagi Tanah Gurun',
              prompt: 'Tindakan kumbang mengubur bola kotoran ke dalam pasir memberikan manfaat ekologis yaitu...',
              options: [
                { label: 'A', text: 'Menyuburkan lapisan bawah tanah berpasir dengan nitrogen dan bahan organik', isCorrect: true, explanation: 'Tepat! Tanpa kumbang kotoran, mineral akan terbuang kering di permukaan tanpa terserap akar.' },
                { label: 'B', text: 'Membuat pasir berubah menjadi batu bata semen', isCorrect: false, explanation: 'Bukan semen bangunan.' },
                { label: 'C', text: 'Memicu gempa bumi', isCorrect: false, explanation: 'Aktivitas kumbang aman bagi bumi.' }
              ]
            },
            {
              id: 'q3',
              title: 'Kelompok Pengurai',
              prompt: 'Hewan pemakan sisa kotoran atau bangkai seperti kumbang kotoran tergolong sebagai...',
              options: [
                { label: 'A', text: 'Detritivor (pemakan detritus sisa organik)', isCorrect: true, explanation: 'Luar biasa! Detritivor membantu pengurai mikroba mempercepat daur ulang materi alam.' },
                { label: 'B', text: 'Produsen primer', isCorrect: false, explanation: 'Produsen adalah tanaman yang fotosintesis.' },
                { label: 'C', text: 'Karnivora puncak', isCorrect: false, explanation: 'Kumbang memakan bahan sisa organik.' }
              ]
            }
          ]
        }
      },
      {
        id: 'gurun_bakteri',
        name: 'Bakteri Kerak Tanah Gurun',
        scientificName: 'Microcoleus vaginatus',
        category: 'Pengurai',
        trophicRole: 'Pengikat Tanah & Sianobakteri Humus',
        badgeColor: 'purple',
        sliceColor: '#92400e',
        textColor: '#ffffff',
        emoji: '🔬',
        summary: 'Mikroba super tangguh yang menganyam butiran pasir menjadi kerak biologis kokoh pencegah badai debu.',
        habitat: 'Kerak biologis tanah gurun (biological soil crust / biocrust).',
        diet: 'Sebagian berfotosintesis menghasilkan gula, dan sebagian mengurai materi organik kering menjadi hara tanah.',
        predator: 'Nematoda tanah gurun dan tungau mikroskopis.',
        adaptation: 'Menghasilkan selubung lendir polisakarida tebal yang mengikat pasir dan mampu mengalami dormansi beku-kering (anhidrobiosis) selama bertahun-tahun.',
        funFact: 'Kerak tanah biologis mikroskopis ini membutuhkan waktu hingga 50 tahun untuk terbentuk, namun dapat hancur dalam sekejap jika terinjak ban kendaraan!',
        dongeng: {
          title: 'Jaring Tak Kasat Mata Penahan Badai',
          theme: 'Kerja Sama & Perlindungan Bumi',
          synopsis: 'Miko si Sianobakteri Gurun menganyam benang-benang pelindung agar pasir gurun tidak beterbangan menjadi badai debu.',
          paragraphs: [
            {
              sceneTitle: '1. Menganyam Butiran Pasir Lepas',
              content: 'Di permukaan gurun yang gersang, butiran pasir mudah sekali terhempas angin kencang. Miko dan miliaran koloni bakteri tanah mengeluarkan benang-benang mikroskopis berselubung gel pelindung.'
            },
            {
              sceneTitle: '2. Terpaan Badai Gurun Dahsyat',
              content: 'Ketika badai pasir besar datang menerjang, tanah gurun yang telah diikat oleh Miko tetap kokoh tak tergoyahkan. Miko melindungi benih-benih kaktus dan semak agar tidak tertimbun atau terhanyut angin ganas.'
            },
            {
              sceneTitle: '3. Fondasi Pertama Kehidupan',
              content: 'Saat setetes embun jatuh, Miko segera mengubah gas nitrogen dari udara menjadi pupuk cair alami. Tanpa jaring tak terlihat dari para mikroba ini, padang pasir akan menjadi tempat yang tak pernah bisa ditumbuhi tanaman.'
            }
          ],
          moralValue: 'Fondasi yang kuat sering kali tidak terlihat di permukaan, namun menjadi penentu utama kekokohan segalanya.',
          scienceQuestion: 'Apa peran penting kerak tanah biologis (biocrust) di ekosistem gurun?',
          scienceAnswer: 'Biocrust mengikat butiran pasir agar tidak mudah erosi tertiup angin (mencegah badai pasir) serta mengikat nitrogen bebas di udara untuk menyuburkan tanah gurun.'
        },
        misi: {
          title: 'Misi Penjaga Kerak Bumi Purba',
          scenario: 'Ketahui pentingnya mikroba tanah dalam mencegah penggurunan (desertifikasi)!',
          badgeName: 'Penjaga Selimut Bumi',
          questions: [
            {
              id: 'q1',
              title: 'Kerak Tanah Biologis',
              prompt: 'Lapisan tipis di atas permukaan tanah gurun yang dibentuk oleh koloni sianobakteri, lumut, dan jamur disebut...',
              options: [
                { label: 'A', text: 'Biocrust (Kerak Biologis Tanah)', isCorrect: true, explanation: 'Benar sekali! Biocrust adalah karpet pelindung permukaan tanah gurun.' },
                { label: 'B', text: 'Karpet plastik sintetis', isCorrect: false, explanation: 'Biocrust alami dan hidup.' },
                { label: 'C', text: 'Lapisan es kutub', isCorrect: false, explanation: 'Biocrust berada di gurun pasir.' }
              ]
            },
            {
              id: 'q2',
              title: 'Pengikatan Nitrogen',
              prompt: 'Sianobakteri di dalam tanah gurun mampu mengikat gas nitrogen bebas (N2) dari udara. Zat ini diubah menjadi...',
              options: [
                { label: 'A', text: 'Senyawa nitrat alami penyubur akar tumbuhan', isCorrect: true, explanation: 'Tepat! Fiksasi nitrogen menyediakan nutrisi vital bagi tanaman gurun.' },
                { label: 'B', text: 'Air soda berkarbonasi', isCorrect: false, explanation: 'Bukan air soda.' },
                { label: 'C', text: 'Logam tembaga', isCorrect: false, explanation: 'Nitrogen adalah unsur non-logam penyusun asam amino.' }
              ]
            },
            {
              id: 'q3',
              title: 'Ancaman Kerusakan',
              prompt: 'Mengapa wisatawan gurun dilarang mengendarai mobil off-road sembarangan keluar dari jalur jalan resmi?',
              options: [
                { label: 'A', text: 'Karena lindasan ban menghancurkan biocrust yang butuh puluhan tahun untuk pulih dan memicu badai debu parah', isCorrect: true, explanation: 'Hebat! Kerusakan biocrust memicu erosi parah dan badai debu beracun.' },
                { label: 'B', text: 'Supaya ban mobil tidak kotor', isCorrect: false, explanation: 'Tujuan utamanya adalah konservasi ekosistem tanah.' },
                { label: 'C', text: 'Karena mobil dilarang berjalan di atas pasir', isCorrect: false, explanation: 'Kendaraan harus di jalur khusus agar tidak merusak biocrust.' }
              ]
            }
          ]
        }
      }
    ]
  }
};
