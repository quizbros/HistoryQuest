// HISTORY QUEST - BAB 1 HINGGA BAB 3
const quizData = {
  "1.1": [
    { q: "Apakah maksud kedaulatan secara umum?", a: ["Kuasa tertinggi sesebuah negara", "Kuasa negara lain", "Sistem perdagangan", "Peraturan sekolah"], c: 0, e: "Kedaulatan ialah kekuasaan tertinggi dan kewibawaan sesebuah negara." },
    { q: "Perkataan 'daulah' berasal daripada bahasa...", a: ["Yunani", "Arab", "Inggeris", "Sanskrit"], c: 1, e: "Dalam bahasa Arab, daulah bermaksud kuasa pemerintahan sesebuah kerajaan." },
    { q: "Siapakah tokoh yang mengaitkan kedaulatan dengan kuasa tertinggi yang kekal?", a: ["Aristotle", "Ibnu Khaldun", "Jean Bodin", "Tunku Abdul Rahman"], c: 2, e: "Jean Bodin mentakrifkan kedaulatan sebagai kuasa tertinggi yang kekal." },
    { q: "Kedaulatan undang-undang bermaksud...", a: ["Raja sahaja tertakluk kepada undang-undang", "Kerajaan dan rakyat tertakluk kepada undang-undang", "Negara bebas tanpa undang-undang", "Undang-undang ditentukan negara asing"], c: 1, e: "Dalam kedaulatan undang-undang, kerajaan dan rakyat sama-sama tertakluk kepada undang-undang." },
    { q: "Bilakah Persekutuan Malaysia dibentuk?", a: ["31 Ogos 1957", "16 September 1963", "31 Ogos 1963", "16 September 1957"], c: 1, e: "Malaysia dibentuk pada 16 September 1963." }
  ],
  "1.2": [
    { q: "Apakah empat ciri negara berdaulat?", a: ["Pemerintahan, sempadan, perundangan dan rakyat", "Raja, tentera, ekonomi dan bahasa", "Parlimen, sekolah, sukan dan rakyat", "Kerajaan, perdagangan, budaya dan agama"], c: 0, e: "Empat ciri negara berdaulat ialah pemerintahan, sempadan, perundangan dan rakyat." },
    { q: "Apakah tujuan utama sistem perundangan negara?", a: ["Menghapuskan sempadan", "Menjamin keadilan dan melindungi rakyat", "Mengawal negara lain", "Menggantikan kerajaan"], c: 1, e: "Undang-undang memelihara kesejahteraan, menjamin keadilan dan melindungi rakyat." },
    { q: "Apakah undang-undang tertinggi di Malaysia?", a: ["Akta sekolah", "Perlembagaan Persekutuan", "Undang-undang negeri asing", "Peraturan daerah"], c: 1, e: "Perlembagaan Persekutuan ialah undang-undang tertinggi negara." },
    { q: "Sempadan negara penting untuk urusan berikut kecuali...", a: ["Pemerintahan", "Pertahanan", "Pembangunan ekonomi", "Menentukan warna bendera"], c: 3, e: "Sempadan membantu urusan pemerintahan, pentadbiran, pertahanan dan pembangunan ekonomi." },
    { q: "Apakah yang mengikat rakyat dalam sesebuah negara?", a: ["Undang-undang dan peraturan negara", "Arahan negara asing", "Syarikat swasta", "Persatuan sukan sahaja"], c: 0, e: "Rakyat terikat dengan undang-undang dan peraturan yang dikuatkuasakan oleh pemerintah." }
  ],
  "1.3": [
    { q: "Antara berikut, yang manakah kepentingan negara berdaulat?", a: ["Keberkesanan pentadbiran", "Campur tangan asing", "Ketidakstabilan politik", "Perpecahan rakyat"], c: 0, e: "Kedaulatan membolehkan pentadbiran negara berjalan dengan cekap dan berkesan." },
    { q: "Bagaimanakah kedaulatan membantu ekonomi negara?", a: ["Negara bebas mengurus sumber dan dasar ekonomi", "Negara menyerahkan semua sumber kepada negara lain", "Aktiviti ekonomi dihentikan", "Rakyat dilarang bekerja"], c: 0, e: "Negara berdaulat dapat menentukan dasar ekonomi dan mengurus sumber sendiri." },
    { q: "Kesejahteraan sosial dapat diperkukuh melalui...", a: ["Perpecahan masyarakat", "Perpaduan dan keharmonian rakyat", "Diskriminasi kaum", "Pengabaian kebajikan"], c: 1, e: "Kedaulatan membantu negara menjaga keharmonian dan kesejahteraan rakyat." },
    { q: "Hubungan luar negara penting untuk...", a: ["Mengasingkan negara", "Kerjasama dan hubungan diplomatik", "Menghapuskan identiti negara", "Menyerahkan kuasa pemerintahan"], c: 1, e: "Negara berdaulat boleh menjalinkan hubungan diplomatik dan kerjasama antarabangsa." },
    { q: "Pengiktirafan antarabangsa menunjukkan bahawa sesebuah negara...", a: ["Tidak mempunyai kerajaan", "Dihormati sebagai negara berdaulat", "Diperintah negara lain", "Tidak mempunyai rakyat"], c: 1, e: "Pengiktirafan antarabangsa mengesahkan kedudukan negara sebagai negara merdeka dan berdaulat." }
  ],
  "1.4": [
    { q: "Siapakah yang memainkan peranan penting mempertahankan kedaulatan negara?", a: ["Pemerintah sahaja", "Rakyat sahaja", "Pemerintah dan rakyat", "Negara luar sahaja"], c: 2, e: "Buku teks menegaskan pemerintah dan rakyat perlu bekerjasama mempertahankan kedaulatan." },
    { q: "Antara berikut, yang manakah peranan pemerintah untuk kestabilan politik dan kemakmuran ekonomi?", a: ["Mematuhi undang-undang sebagai rakyat", "Mewujudkan pentadbiran yang cekap", "Mengelakkan program perpaduan", "Mengabaikan dasar ekonomi"], c: 1, e: "Pemerintah perlu mewujudkan pentadbiran cekap dan mengukuhkan tadbir urus." },
    { q: "Apakah tindakan rakyat untuk mengekalkan perpaduan kaum?", a: ["Tidak menghormati budaya lain", "Mengelakkan program kemasyarakatan", "Menghormati agama dan budaya pelbagai kaum", "Menolak bahasa kebangsaan"], c: 2, e: "Rakyat perlu memahami, menghormati agama dan budaya serta mengamalkan toleransi." },
    { q: "Yang manakah contoh usaha memupuk patriotisme oleh pemerintah?", a: ["Menganjurkan sambutan Hari Kebangsaan", "Mengabaikan mata pelajaran Sejarah", "Melarang penggunaan Jalur Gemilang", "Menghapuskan pengiktirafan jasa rakyat"], c: 0, e: "Sambutan Hari Kebangsaan dan Hari Pahlawan memupuk kecintaan terhadap negara." },
    { q: "Apakah peranan rakyat dalam mengukuhkan pertahanan negara?", a: ["Membocorkan maklumat keselamatan", "Memberikan maklumat tentang pencerobohan sempadan", "Bekerjasama dengan pihak yang mengancam negara", "Mengabaikan isu keselamatan"], c: 1, e: "Rakyat perlu peka dan memberikan maklumat tentang pencerobohan sempadan negara." }
  ]
};
const extraTopics = {"2.1": {"title": "Latar Belakang Sejarah Perlembagaan Persekutuan", "intro": "Perlembagaan Persekutuan terbentuk melalui sejarah pemerintahan dan undang-undang di negeri-negeri Melayu serta perkembangan pentadbiran British sehingga kemerdekaan.", "sections": [["Undang-undang sebelum kedatangan British", ["Negeri-negeri Melayu telah mempunyai undang-undang dan adat yang menjadi panduan pemerintahan.", "Antara contoh ialah Hukum Kanun Melaka, Undang-Undang Laut Melaka, Hukum Kanun Pahang dan Undang-Undang 99 Perak.", "Undang-undang ini menyentuh urusan pemerintahan, jenayah, kekeluargaan, perdagangan dan kehidupan masyarakat."]], ["Pengaruh undang-undang British", ["British memperkenalkan undang-undang berasaskan sistem mereka melalui piagam keadilan dan peraturan bertulis.", "Di Sarawak, undang-undang British diperkenalkan melalui Sarawak Application of Laws Ordinance 1949.", "Di Sabah, pengenalan undang-undang berkaitan berlaku melalui Sabah Application of Laws Ordinance 1951."]], ["Perkembangan di Sarawak dan Sabah", ["Sarawak dan Sabah mempunyai perkembangan pentadbiran serta undang-undang tersendiri sebelum menyertai Malaysia.", "Perkembangan ini menjadi sebahagian daripada latar sejarah pembentukan kerangka perlembagaan negara."]], ["Kepentingan sejarah perlembagaan", ["Perlembagaan berkembang daripada pengalaman sejarah tempatan dan pengaruh luar.", "Perkembangan tersebut membantu membentuk sistem pemerintahan yang tersusun serta menjadi asas kepada negara merdeka."]]], "quiz": [["Apakah antara undang-undang Melayu tradisional yang disebut dalam bab ini?", ["Hukum Kanun Melaka", "Akta Pendidikan 1996", "Piagam PBB", "Kanun Keseksaan moden"], 0, "Hukum Kanun Melaka ialah antara undang-undang Melayu tradisional."], ["Undang-Undang Laut Melaka berkaitan dengan...", ["Urusan pelayaran dan perdagangan laut", "Pilihan raya", "Pentadbiran sekolah", "Hubungan diplomatik moden"], 0, "Undang-undang ini mengatur urusan pelayaran dan perdagangan laut."], ["Apakah ordinan yang berkaitan dengan penerapan undang-undang di Sarawak pada 1949?", ["Sarawak Application of Laws Ordinance 1949", "Sabah Application of Laws Ordinance 1951", "Perjanjian Persekutuan 1957", "Akta Parlimen 1965"], 0, "Nama ordinan tersebut dinyatakan dalam bahagian sejarah undang-undang Sarawak."], ["Sabah Application of Laws Ordinance diperkenalkan pada tahun...", ["1946", "1949", "1951", "1957"], 2, "Tahun yang dinyatakan ialah 1951."], ["Apakah gambaran utama sejarah perlembagaan negara?", ["Terbentuk melalui perkembangan sejarah dan undang-undang", "Dicipta tanpa pengalaman terdahulu", "Diambil sepenuhnya daripada satu negara", "Tidak berkaitan dengan pemerintahan"], 0, "Perlembagaan terbentuk melalui perkembangan sejarah tempatan dan pengaruh luar."]]}, "2.2": {"title": "Sejarah Penggubalan Perlembagaan Persekutuan", "intro": "Penggubalan perlembagaan berlaku secara berperingkat melalui perubahan pentadbiran, rundingan dan usaha mencapai kemerdekaan.", "sections": [["Perkembangan tahun 1877", ["Majlis Negeri Perak menjadi antara badan penting dalam perkembangan sistem perundangan moden.", "Perkembangan ini memperlihatkan penglibatan institusi tempatan dalam urusan menggubal undang-undang."]], ["Perlembagaan Malayan Union 1946", ["Malayan Union diperkenalkan pada tahun 1946.", "Pelaksanaannya mendapat tentangan orang Melayu kerana menjejaskan kedudukan Raja-raja Melayu dan syarat kewarganegaraan.", "Penentangan tersebut membawa kepada perubahan pentadbiran."]], ["Persekutuan Tanah Melayu 1948", ["Persekutuan Tanah Melayu 1948 menggantikan Malayan Union.", "Perjanjian ini mengembalikan kedudukan Raja-raja Melayu dan memperkemas hubungan antara negeri-negeri Melayu dengan kerajaan Persekutuan."]], ["Kemerdekaan 1957", ["Suruhanjaya Reid dibentuk untuk merangka perlembagaan bagi Persekutuan Tanah Melayu yang bakal merdeka.", "Suruhanjaya menerima pandangan pelbagai pihak sebelum menyediakan cadangan perlembagaan.", "Perlembagaan Persekutuan berkuat kuasa apabila negara mencapai kemerdekaan pada 31 Ogos 1957."]]], "quiz": [["Apakah badan yang dikaitkan dengan perkembangan perundangan pada tahun 1877?", ["Majlis Negeri Perak", "Majlis Raja-Raja moden", "Suruhanjaya Reid", "Parlimen Malaysia"], 0, "Majlis Negeri Perak merupakan perkembangan penting pada tahun 1877."], ["Malayan Union diperkenalkan pada tahun...", ["1946", "1948", "1957", "1963"], 0, "Malayan Union diperkenalkan pada 1946."], ["Mengapakah orang Melayu menentang Malayan Union?", ["Menjejaskan kedudukan Raja-raja Melayu dan syarat kewarganegaraan", "Menghapuskan semua sekolah", "Memindahkan ibu negara", "Membatalkan perdagangan"], 0, "Tentangan berkait kedudukan Raja-raja Melayu dan kewarganegaraan."], ["Persekutuan Tanah Melayu 1948 menggantikan...", ["Malayan Union", "Malaysia", "Majlis Negeri Perak", "Suruhanjaya Reid"], 0, "Persekutuan Tanah Melayu 1948 menggantikan Malayan Union."], ["Bilakah Perlembagaan Persekutuan mula berkuat kuasa bersama kemerdekaan?", ["31 Ogos 1957", "16 September 1963", "31 Ogos 1948", "31 Ogos 1965"], 0, "Perlembagaan berkuat kuasa apabila Persekutuan Tanah Melayu merdeka pada 31 Ogos 1957."]]}, "2.3": {"title": "Ciri Utama Perlembagaan Persekutuan", "intro": "Perlembagaan Persekutuan mempunyai ciri tradisional dan moden yang membentuk asas pemerintahan negara.", "sections": [["Ciri tradisional", ["Kesultanan atau pemerintahan beraja merupakan unsur penting dalam sejarah negara.", "Agama Islam mempunyai kedudukan yang diperuntukkan dalam Perlembagaan.", "Bahasa Melayu menjadi bahasa kebangsaan.", "Kedudukan istimewa orang Melayu dan kepentingan sah kaum-kaum lain turut diberi perhatian."]], ["Ciri moden", ["Kerajaan Persekutuan membahagikan kuasa antara kerajaan Persekutuan dengan kerajaan Negeri.", "Sistem demokrasi berparlimen membolehkan rakyat memilih wakil melalui pilihan raya.", "Kewarganegaraan menentukan taraf dan hak seseorang sebagai anggota negara."]], ["Perlembagaan sebagai asas negara", ["Perlembagaan menjadi undang-undang tertinggi negara.", "Perlembagaan menjadi panduan kepada institusi pemerintahan dan penggubalan undang-undang.", "Ciri tradisional dan moden disesuaikan bagi mengekalkan kestabilan serta keharmonian negara."]]], "quiz": [["Antara berikut, yang manakah ciri tradisional Perlembagaan Persekutuan?", ["Pemerintahan beraja", "Pilihan raya moden sahaja", "Pembahagian kawasan pilihan raya", "Kabinet moden"], 0, "Pemerintahan beraja ialah salah satu ciri tradisional."], ["Apakah bahasa kebangsaan Malaysia?", ["Bahasa Melayu", "Bahasa Inggeris", "Bahasa Tamil", "Bahasa Mandarin"], 0, "Perlembagaan memperuntukkan Bahasa Melayu sebagai bahasa kebangsaan."], ["Ciri moden perlembagaan termasuk...", ["Kerajaan Persekutuan dan demokrasi berparlimen", "Sistem kesukuan semata-mata", "Undang-undang lisan sahaja", "Pemerintahan tanpa pilihan raya"], 0, "Kerajaan Persekutuan dan demokrasi berparlimen ialah ciri moden."], ["Perlembagaan Persekutuan merupakan...", ["Undang-undang tertinggi negara", "Undang-undang sebuah negeri sahaja", "Panduan tidak rasmi", "Perjanjian perdagangan"], 0, "Perlembagaan ialah undang-undang tertinggi negara."], ["Peruntukan kedudukan istimewa orang Melayu turut mengambil kira...", ["Kepentingan sah kaum-kaum lain", "Kepentingan negara asing", "Pemansuhan kewarganegaraan", "Penghapusan bahasa kebangsaan"], 0, "Perlembagaan turut menjaga kepentingan sah kaum-kaum lain."]]}, "2.4": {"title": "Pindaan Perlembagaan Persekutuan 1963 dan 1965", "intro": "Perlembagaan Persekutuan dipinda bagi menyesuaikan struktur negara selepas pembentukan Malaysia dan perubahan politik pada tahun 1965.", "sections": [["Pindaan Perlembagaan 1963", ["Pindaan dibuat berikutan pembentukan Malaysia pada 16 September 1963.", "Penyertaan Sabah, Sarawak dan Singapura memerlukan penyesuaian terhadap peruntukan perlembagaan.", "Antara perubahan melibatkan struktur Mahkamah Atasan, kewarganegaraan, kedudukan negeri-negeri dan perkara berkaitan pentadbiran."]], ["Pindaan Perlembagaan 1965", ["Pindaan dibuat susulan pemisahan Singapura daripada Malaysia pada tahun 1965.", "Pindaan ini mengubah peruntukan yang berkaitan dengan Singapura supaya selaras dengan kedudukannya di luar Persekutuan."]], ["Kepentingan pindaan", ["Pindaan membolehkan perlembagaan disesuaikan dengan perubahan keadaan negara.", "Proses pindaan perlu mengikut kaedah dan peruntukan yang ditetapkan dalam Perlembagaan Persekutuan."]]], "quiz": [["Pembentukan Malaysia berlaku pada...", ["16 September 1963", "31 Ogos 1957", "9 Ogos 1965", "1 Januari 1963"], 0, "Malaysia dibentuk pada 16 September 1963."], ["Pindaan 1963 berkaitan dengan...", ["Pembentukan Malaysia", "Pemisahan Singapura sahaja", "Malayan Union", "Kemerdekaan 1948"], 0, "Pindaan dibuat untuk menyesuaikan perlembagaan selepas pembentukan Malaysia."], ["Negeri yang menyertai Persekutuan pada 1963 termasuk...", ["Sabah dan Sarawak", "Johor dan Perak", "Pulau Pinang dan Melaka", "Pahang dan Kelantan"], 0, "Sabah dan Sarawak menyertai Malaysia pada 1963."], ["Pemisahan Singapura berlaku pada tahun...", ["1963", "1965", "1957", "1948"], 1, "Singapura berpisah daripada Malaysia pada 1965."], ["Mengapakah pindaan perlembagaan dilakukan?", ["Menyesuaikan perlembagaan dengan perubahan negara", "Menghapuskan semua undang-undang", "Menggantikan sejarah negara", "Menghentikan pemerintahan"], 0, "Pindaan membolehkan perlembagaan disesuaikan dengan perubahan."]]}, "3.1": {"title": "Latar Belakang Pemerintahan Beraja dan Demokrasi Berparlimen", "intro": "Sistem pemerintahan Malaysia berkembang daripada tradisi pemerintahan beraja kepada sistem Raja Berperlembagaan dan Demokrasi Berparlimen.", "sections": [["Pemerintahan beraja Kesultanan Melayu", ["Institusi beraja telah lama menjadi asas pemerintahan kerajaan Melayu.", "Raja mempunyai kedudukan tertinggi dan menjadi tonggak kedaulatan serta perpaduan rakyat.", "Adat istiadat dan undang-undang menjadi sebahagian daripada sistem pemerintahan."]], ["Perubahan semasa British", ["British memperkenalkan sistem Residen dan penasihat di negeri-negeri Melayu.", "Kuasa pentadbiran tertentu berubah, namun institusi raja terus dikekalkan.", "Perkembangan politik membawa kepada pembentukan sistem persekutuan dan perlembagaan."]], ["Selepas merdeka", ["Persekutuan Tanah Melayu mencapai kemerdekaan pada 31 Ogos 1957.", "Sistem Raja Berperlembagaan dan Demokrasi Berparlimen diamalkan berdasarkan Perlembagaan Persekutuan.", "Yang di-Pertuan Agong menjadi Ketua Utama Negara."]]], "quiz": [["Institusi yang menjadi asas pemerintahan tradisional kerajaan Melayu ialah...", ["Institusi beraja", "Majlis Keselamatan", "Kabinet moden", "Suruhanjaya pilihan raya"], 0, "Institusi beraja telah lama menjadi asas pemerintahan kerajaan Melayu."], ["Apakah sistem yang diperkenalkan British di negeri-negeri Melayu?", ["Sistem Residen dan penasihat", "Demokrasi langsung", "Republik presiden", "Sistem satu parti"], 0, "British memperkenalkan sistem Residen dan penasihat."], ["Bilakah Persekutuan Tanah Melayu mencapai kemerdekaan?", ["31 Ogos 1957", "16 September 1963", "9 Ogos 1965", "1 Februari 1948"], 0, "Kemerdekaan dicapai pada 31 Ogos 1957."], ["Ketua Utama Negara Malaysia ialah...", ["Yang di-Pertuan Agong", "Perdana Menteri", "Ketua Hakim Negara", "Yang Dipertua Dewan Rakyat"], 0, "Yang di-Pertuan Agong ialah Ketua Utama Negara."], ["Sistem pemerintahan Malaysia berasaskan...", ["Raja Berperlembagaan dan Demokrasi Berparlimen", "Pemerintahan mutlak", "Republik tanpa raja", "Pentadbiran kolonial"], 0, "Malaysia mengamalkan Raja Berperlembagaan dan Demokrasi Berparlimen."]]}, "3.2": {"title": "Sejarah dan Kedudukan Institusi Majlis Raja-Raja", "intro": "Majlis Raja-Raja berkembang daripada institusi yang diwujudkan semasa pentadbiran British dan menjadi badan penting dalam Perlembagaan Persekutuan.", "sections": [["Asal-usul Majlis Raja-Raja", ["Durbar dibentuk pada zaman Negeri-negeri Melayu Bersekutu.", "Durbar menjadi ruang perbincangan antara Raja-raja Melayu dengan pihak British.", "Selepas kemerdekaan, institusi ini berkembang menjadi Majlis Raja-Raja seperti yang diperuntukkan dalam Perlembagaan."]], ["Keanggotaan dan fungsi", ["Majlis Raja-Raja dianggotai oleh Raja-raja Melayu dan Yang di-Pertua Negeri mengikut peruntukan yang ditetapkan.", "Majlis membincangkan perkara berkaitan agama Islam, adat Melayu dan kepentingan tertentu negara.", "Majlis mempunyai peranan dalam pemilihan Yang di-Pertuan Agong dan Timbalan Yang di-Pertuan Agong."]], ["Kedudukan dalam perlembagaan", ["Kedudukan Majlis Raja-Raja dilindungi oleh Perlembagaan Persekutuan.", "Peranan institusi ini membantu memelihara kesinambungan pemerintahan beraja dan kestabilan negara."]]], "quiz": [["Institusi awal yang menjadi asas kepada Majlis Raja-Raja ialah...", ["Durbar", "Kabinet", "Parlimen", "Majlis Mesyuarat PBB"], 0, "Durbar diwujudkan pada zaman Negeri-negeri Melayu Bersekutu."], ["Durbar menjadi ruang perbincangan antara Raja-raja Melayu dengan...", ["Pihak British", "Kerajaan Jepun", "Pertubuhan Bangsa-Bangsa Bersatu", "Kerajaan Australia"], 0, "Durbar melibatkan Raja-raja Melayu dan pihak British."], ["Majlis Raja-Raja mempunyai peranan dalam pemilihan...", ["Yang di-Pertuan Agong", "Ketua Polis Negara", "Ketua Hakim Mahkamah Sesyen", "Menteri Besar semua negeri"], 0, "Majlis Raja-Raja memilih Yang di-Pertuan Agong dan Timbalan Yang di-Pertuan Agong."], ["Kedudukan Majlis Raja-Raja diperuntukkan dalam...", ["Perlembagaan Persekutuan", "Akta Syarikat", "Undang-undang antarabangsa sahaja", "Peraturan sekolah"], 0, "Institusi ini mempunyai kedudukan dalam Perlembagaan Persekutuan."], ["Majlis Raja-Raja membantu memelihara...", ["Institusi pemerintahan beraja", "Pemerintahan kolonial", "Pentadbiran syarikat", "Sistem perdagangan"], 0, "Majlis membantu memelihara kesinambungan institusi beraja."]]}, "3.3": {"title": "Yang di-Pertuan Agong dan Raja dalam Perlembagaan Persekutuan", "intro": "Yang di-Pertuan Agong dan Raja-raja Melayu mempunyai kedudukan serta bidang kuasa yang ditetapkan oleh Perlembagaan Persekutuan.", "sections": [["Kedudukan Yang di-Pertuan Agong", ["Yang di-Pertuan Agong ialah Ketua Utama Negara.", "Baginda dipilih oleh Majlis Raja-Raja untuk tempoh lima tahun.", "Yang di-Pertuan Agong menjalankan tugas berdasarkan peruntukan Perlembagaan."]], ["Kuasa dan peranan", ["Baginda merupakan ketua negara dan mempunyai peranan dalam badan eksekutif, perundangan serta kehakiman mengikut perlembagaan.", "Baginda melantik Perdana Menteri yang pada hemat baginda mendapat kepercayaan majoriti ahli Dewan Rakyat.", "Baginda memperkenankan rang undang-undang mengikut proses perlembagaan."]], ["Raja-raja Melayu", ["Raja atau Sultan ialah ketua negeri bagi negeri-negeri beraja.", "Raja mempunyai peranan dalam hal ehwal agama Islam dan adat Melayu di negeri masing-masing.", "Raja menjalankan tugas menurut perlembagaan negeri dan Perlembagaan Persekutuan."]]], "quiz": [["Yang di-Pertuan Agong ialah...", ["Ketua Utama Negara", "Ketua kerajaan negeri", "Ketua Dewan Rakyat", "Ketua parti politik"], 0, "Yang di-Pertuan Agong ialah Ketua Utama Negara."], ["Tempoh pemerintahan Yang di-Pertuan Agong ialah...", ["Lima tahun", "Empat tahun", "Enam tahun", "Sepuluh tahun"], 0, "Yang di-Pertuan Agong dipilih untuk tempoh lima tahun."], ["Siapakah yang memilih Yang di-Pertuan Agong?", ["Majlis Raja-Raja", "Dewan Rakyat sahaja", "Kabinet", "Suruhanjaya Pilihan Raya"], 0, "Pemilihan dilakukan oleh Majlis Raja-Raja."], ["Yang di-Pertuan Agong melantik Perdana Menteri yang mendapat kepercayaan majoriti...", ["Ahli Dewan Rakyat", "Ahli Dewan Negara sahaja", "Ketua Menteri negeri", "Ahli Majlis Raja-Raja"], 0, "Pelantikan mengambil kira kepercayaan majoriti ahli Dewan Rakyat."], ["Raja-raja Melayu berperanan dalam hal ehwal...", ["Agama Islam dan adat Melayu di negeri masing-masing", "Dasar luar semua negara", "Pentadbiran PBB", "Pilihan raya negara asing"], 0, "Raja mempunyai peranan berkaitan agama Islam dan adat Melayu di negeri masing-masing."]]}, "3.4": {"title": "Amalan Demokrasi dan Pengasingan Kuasa", "intro": "Demokrasi berparlimen memberi ruang kepada rakyat memilih wakil, manakala pengasingan kuasa membahagikan fungsi pemerintahan kepada tiga badan utama.", "sections": [["Pilihan raya dan demokrasi", ["Pilihan raya membolehkan rakyat memilih wakil untuk mewakili mereka dalam badan perundangan.", "Pilihan raya diuruskan oleh Suruhanjaya Pilihan Raya.", "Rakyat yang memenuhi syarat kelayakan boleh mengundi dalam pilihan raya."]], ["Badan perundangan", ["Badan perundangan menggubal, membahas dan meluluskan undang-undang.", "Parlimen terdiri daripada Yang di-Pertuan Agong, Dewan Negara dan Dewan Rakyat."]], ["Badan eksekutif", ["Badan eksekutif melaksanakan undang-undang dan dasar kerajaan.", "Kerajaan Persekutuan diketuai oleh Perdana Menteri dan Jemaah Menteri."]], ["Badan kehakiman", ["Badan kehakiman mentafsir undang-undang dan mengadili pertikaian.", "Kehakiman memastikan keadilan dilaksanakan berdasarkan undang-undang."]], ["Tujuan pengasingan kuasa", ["Pengasingan kuasa mengelakkan pemusatan kuasa pada satu badan.", "Sistem semak dan imbang membantu memastikan setiap badan menjalankan tanggungjawab mengikut perlembagaan."]]], "quiz": [["Pilihan raya membolehkan rakyat...", ["Memilih wakil rakyat", "Melantik semua hakim", "Menggubal semua undang-undang sendiri", "Memilih Yang di-Pertuan Agong secara langsung"], 0, "Pilihan raya membolehkan rakyat memilih wakil."], ["Badan yang menggubal undang-undang ialah...", ["Perundangan", "Eksekutif", "Kehakiman", "Pentadbiran daerah"], 0, "Badan perundangan menggubal dan meluluskan undang-undang."], ["Badan eksekutif bertanggungjawab untuk...", ["Melaksanakan undang-undang dan dasar", "Mentafsir undang-undang", "Mengendalikan pilihan raya sahaja", "Membicarakan kes"], 0, "Badan eksekutif melaksanakan undang-undang dan dasar kerajaan."], ["Badan kehakiman berperanan...", ["Mentafsir undang-undang dan mengadili pertikaian", "Mengurus kempen pilihan raya", "Meluluskan belanjawan sahaja", "Melantik semua ahli Parlimen"], 0, "Badan kehakiman mentafsir undang-undang dan mengadili pertikaian."], ["Apakah tujuan pengasingan kuasa?", ["Mengelakkan pemusatan kuasa", "Memberi semua kuasa kepada satu pihak", "Menghapuskan mahkamah", "Menghentikan pilihan raya"], 0, "Pengasingan kuasa mengelakkan pemusatan kuasa."]]}, "3.5": {"title": "Keunikan Amalan Demokrasi Berparlimen di Negara Kita", "intro": "Amalan demokrasi berparlimen di Malaysia mempunyai keunikan melalui gabungan institusi beraja, perlembagaan, pilihan raya dan amalan muafakat.", "sections": [["Gabungan tradisi dan moden", ["Malaysia menggabungkan institusi Raja Berperlembagaan dengan sistem demokrasi berparlimen.", "Institusi tradisional dikekalkan dalam kerangka perlembagaan moden."]], ["Sistem Persekutuan", ["Kuasa pemerintahan dibahagikan antara Kerajaan Persekutuan dengan Kerajaan Negeri.", "Pembahagian kuasa membolehkan kepentingan negeri dan Persekutuan diurus mengikut bidang masing-masing."]], ["Amalan demokrasi", ["Pilihan raya memberi peluang kepada rakyat memilih wakil.", "Parlimen menjadi tempat wakil rakyat membahaskan isu dan menggubal undang-undang.", "Amalan muafakat dan perundingan membantu mengekalkan kestabilan politik."]], ["Kepentingan keunikan sistem", ["Gabungan institusi beraja, demokrasi dan sistem Persekutuan membentuk identiti pemerintahan Malaysia.", "Sistem ini bertujuan menjamin kestabilan, keharmonian dan kepentingan rakyat."]]], "quiz": [["Keunikan sistem pemerintahan Malaysia ialah gabungan...", ["Raja Berperlembagaan dan Demokrasi Berparlimen", "Pemerintahan mutlak dan penjajahan", "Republik dan diktator", "Pentadbiran tentera dan kolonial"], 0, "Malaysia menggabungkan institusi beraja dengan demokrasi berparlimen."], ["Sistem Persekutuan membahagikan kuasa antara...", ["Kerajaan Persekutuan dan Kerajaan Negeri", "Parlimen dan sekolah", "Mahkamah dan syarikat", "Raja dan negara asing"], 0, "Kuasa dibahagikan antara kerajaan Persekutuan dan Negeri."], ["Pilihan raya penting kerana...", ["Memberi peluang rakyat memilih wakil", "Menghapuskan Parlimen", "Menggantikan perlembagaan", "Melantik semua pegawai kerajaan"], 0, "Pilihan raya membolehkan rakyat memilih wakil."], ["Parlimen berfungsi sebagai tempat...", ["Membahaskan isu dan menggubal undang-undang", "Mengurus semua sekolah", "Mengendalikan urusan mahkamah", "Melantik ketua negara asing"], 0, "Parlimen menjadi tempat perbahasan dan penggubalan undang-undang."], ["Amalan muafakat dan perundingan membantu...", ["Mengekalkan kestabilan politik", "Menghapuskan demokrasi", "Mewujudkan konflik", "Menghentikan pilihan raya"], 0, "Muafakat dan perundingan membantu kestabilan politik."]]}};
let totalXP=0, completedTopics=new Set(), activeTopic=null, quizIndex=0, quizScore=0, answered=false;
function hideAllSections(){document.querySelectorAll("main > section").forEach(s=>s.hidden=true);}
function showHome(){hideAllSections();document.getElementById("home").hidden=false;document.getElementById("player-info").scrollIntoView({behavior:"smooth",block:"center"});}
function showAchievements(){hideAllSections();const section=document.getElementById("player-info");section.hidden=false;section.scrollIntoView({behavior:"smooth",block:"center"});}
function startQuest(){hideAllSections();document.getElementById("chapter-section").hidden=false;document.getElementById("chapter-section").scrollIntoView({behavior:"smooth"});}
function backToChapters(){startQuest();}
function selectChapter(n){
 hideAllSections();
 if(n===1)document.getElementById("chapter-notes").hidden=false;
 else {
  const sec=document.getElementById("chapter-notes-"+n);sec.hidden=false;
  document.getElementById("topic-list-"+n).innerHTML=Object.entries(extraTopics).filter(([id])=>id.startsWith(n+".")).map(([id,t])=>`<article class="notes-card topic-card" onclick="openTopic('${id}')"><h3>${id} ${t.title}</h3><p>${t.intro}</p></article>`).join("");
 }
 document.querySelector(".chapter-notes:not([hidden])").scrollIntoView({behavior:"smooth"});
}
function backToTopics(){hideAllSections();const n=activeTopic.split(".")[0];const id=n==="1"?"chapter-notes":"chapter-notes-"+n;document.getElementById(id).hidden=false;document.getElementById(id).scrollIntoView({behavior:"smooth"});}
function openTopic(id){
 activeTopic=id;hideAllSections();let sec=document.getElementById("topic-"+id.replace(".","-"));
 if(!sec){
  sec=document.createElement("section");sec.className="topic-page";sec.id="topic-"+id.replace(".","-");document.querySelector("main").appendChild(sec);
  const t=extraTopics[id];
  sec.innerHTML=`<h2>📖 ${id} ${t.title.toUpperCase()}</h2><p>${t.intro}</p>${t.sections.map(([h,items])=>`<div class="notes-card"><h3>${h}</h3><ul>${items.map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("")}<div class="notes-card"><h3>⭐ Ingat Fakta Penting</h3><p>Fahami hubungan antara perkembangan sejarah, peruntukan perlembagaan dan amalan pemerintahan negara.</p></div><div class="quiz-section" id="quiz-${id.replace(".","-")}"></div><button onclick="backToTopics()">KEMBALI KE SUBTOPIK</button>`;
 }
 sec.hidden=false;sec.scrollIntoView({behavior:"smooth"});renderQuizIntro(id);
}
function getQuestions(){
  const data = extraTopics[activeTopic]?.quiz || quizData[activeTopic];
  if (!Array.isArray(data) || data.length !== 5) {
    console.error("Data kuiz tidak lengkap untuk topik:", activeTopic, data);
    return [];
  }
  // Bab 2/3 stores quiz entries as arrays; Bab 1 stores them as objects.
  return data.map(q => Array.isArray(q)
    ? { q: q[0], a: q[1], c: q[2], e: q[3] }
    : q
  );
}
function renderQuizIntro(id){
  const host = document.getElementById("quiz-" + id.replace(".", "-"));
  if (!host) {
    console.error("Ruang kuiz tidak ditemui untuk:", id);
    return;
  }
  host.innerHTML = `
    <h3>⚔ CABARAN SEJARAH ${id}</h3>
    <p>Uji kefahaman anda dengan 5 soalan. Setiap jawapan betul memberi 10 XP.</p>
    <button type="button" onclick="startQuiz()">MULA KUIZ</button>
  `;
}
function startQuiz(){
  quizIndex = 0;
  quizScore = 0;
  showQuestion();
}
function showQuestion(){
  const host = document.getElementById("quiz-" + activeTopic.replace(".", "-"));
  if (!host) {
    console.error("Ruang kuiz tidak ditemui:", activeTopic);
    return;
  }
  const questions = getQuestions();
  if (!questions.length) {
    host.innerHTML = "<p>Maaf, soalan untuk subtopik ini belum tersedia.</p>";
    return;
  }
  let area = host.querySelector(".quiz-area");
  if (!area) {
    area = document.createElement("div");
    area.className = "quiz-area";
    host.appendChild(area);
  }
  area.hidden = false;
  answered = false;
  const q = questions[quizIndex];
  area.innerHTML = `
    <h3>Soalan ${quizIndex + 1} daripada 5</h3>
    <p class="question">${q.q}</p>
    <div class="quiz-options">
      ${q.a.map((a, i) => `<button type="button" class="option-button" onclick="checkAnswer(${i})">${a}</button>`).join("")}
    </div>
    <p class="quiz-feedback" id="quiz-feedback-${activeTopic.replace(".", "-")}"></p>
    <p class="quiz-progress">Skor: ${quizScore} / 5</p>
    <button type="button" class="quiz-next" onclick="nextQuestion()" hidden>
      ${quizIndex === 4 ? "LIHAT KEPUTUSAN" : "SOALAN SETERUSNYA"}
    </button>
  `;
}
function checkAnswer(i){
  if (answered) return;
  answered = true;
  const questions = getQuestions();
  const q = questions[quizIndex];
  const host = document.getElementById("quiz-" + activeTopic.replace(".", "-"));
  host.querySelectorAll(".quiz-options .option-button").forEach((button, j) => {
    button.disabled = true;
    if (j === q.c) button.classList.add("correct");
    else if (j === i) button.classList.add("incorrect");
  });
  const feedback = host.querySelector(".quiz-feedback");
  if (i === q.c) {
    quizScore++;
    totalXP += 10;
    feedback.textContent = "Betul! +10 XP. " + q.e;
    feedback.className = "quiz-feedback correct-text";
  } else {
    feedback.textContent = "Belum tepat. " + q.e;
    feedback.className = "quiz-feedback incorrect-text";
  }
  updatePlayerInfo();
  host.querySelector(".quiz-next").hidden = false;
}
function nextQuestion(){
  if (quizIndex < 4) {
    quizIndex++;
    showQuestion();
    return;
  }
  completedTopics.add(activeTopic);
  const host = document.getElementById("quiz-" + activeTopic.replace(".", "-"));
  host.innerHTML = `
    <h3>🏆 MISI ${activeTopic} SELESAI!</h3>
    <p>Skor anda: ${quizScore} / 5</p>
    <p>XP diperoleh: ${quizScore * 10} XP</p>
    <p>${quizScore >= 4 ? "Hebat! Anda menguasai subtopik ini." : "Teruskan ulang kaji untuk mengukuhkan pemahaman."}</p>
    <button type="button" onclick="restartQuiz('${activeTopic}')">ULANG KUIZ</button>
  `;
  updatePlayerInfo();
}
function restartQuiz(id){
  activeTopic = id;
  quizIndex = 0;
  quizScore = 0;
  renderQuizIntro(id);
}
function updatePlayerInfo(){document.getElementById("total-xp").textContent=totalXP;document.getElementById("missions-done").textContent=completedTopics.size;document.getElementById("player-rank").textContent=totalXP>=500?"Legenda Sejarah":totalXP>=250?"Pakar Sejarah":totalXP>=100?"Penjelajah":"Peneroka Baharu";}
document.addEventListener("DOMContentLoaded",updatePlayerInfo);
