const wordList = [
    {
        word: "gagaburun",
        hint: "Baş bodoslaması gagayı andırır biçimde yapılmış ticaret yelkenlisi; gagalı."
    },
    {
        word: "feriştah",
        hint: "İşin uzmanı, yetkili kişi anlamına gelir."
    },
    {
        word: "abi",
        hint: "Kendisinden yaşça büyük erkek kardeş"
    },
    {
        word: "abla",
        hint: "Kendisinden yaşça büyükkızkardeş:"
    },
    {
        word: "acayip",
        hint: "Tuhaf, garip:"
    },
    {
        word: "abone",
        hint: " Gazete, dergi vb. süreli yayınları önceden ücretini ödeyerek alan kimse"
    },
    {
        word: "açgözlü",
        hint: "Gözü doymayan, çok hırslı, eldekiyle yetinmeyen"
    },
    {
        word: "acil",
        hint: "Hemen olması, yapılması gereken"
    },
    {
        word: "boksör",
        hint: "Boks oynayan kimse, yumruk oyuncusu."
    },
    {
        word: "boncuk",
        hint: "Cam, taş , sedef, tahta, plâstik gibi maddelerden yapılan, ortası delik, çoğu yuvarlak ve renkli süs tanesi. "
    },
    {
        word: "bonkör",
        hint: "Eli açık, cömert. "
    },
    {
        word: "boşanmak",
        hint: "Mahkeme kararı ile birbirinden ayrılmak"
    },
    {
        word: "botanik",
        hint: "Bitki bilimi, nebatat."
    },
    {
        word: "bulantı",
        hint: "Midede duyulan ve insana kusacak gibi bir duygu veren durum."
    },
    {
        word: "cadde",
        hint: "Şehir içinde ana yol."
    },
    {
        word: "cahil",
        hint: "Bir konuda bilgisiz, eğitimsiz olan kimse."
    },
    {
        word: "cıvık",
        hint: "Bir sıvının katı maddenin özelliklerini çok az gösteren durumu"
    },
    {
        word: "çırak",
        hint: "Bir mesleği öğrenmekte olan, usta yanında çalışan kimse, kalfa."
    },
    {
        word: "çatlak",
        hint: "Bir nesnenin üzerinde oluşan kırık, yarıklar."
    },
    {
        word: "çıplak",
        hint: "Giysisiz, kıyafetsiz, yalın"
    },
    {
        word: "çırılçıplak",
        hint: "Üzerinde hiçbir şey olmayan, tamamen çıplak."
    },
    {
        word: "çakal",
        hint: "Köpekgiller familyasından, yabanıl yaşayan, gri renkli, kuyruğu kıvrık bir hayvan."
    },
    {
        word: "çılgın",
        hint: "Normal sınırları aşan, düzensiz hareketlerde bulunan"
    },
    {
        word: "çiftlik",
        hint: "Hayvan yetiştirilen ve tarım yapılan yer"
    },
    {
        word: "çiçek",
        hint: "Genellikle renkli, güzel kokulu, süs bitkilerinin çiçeğini ve bu bitkilerin toplu olarak bulunduğu yer."
    },
    {
        word: "çukur",
        hint: "Yer yüzünde, üzeri kapatılmadan yüksekçe bir yerin içinde veya içine doğru kapatılan yer."
    },
    {
        word: "damla",
        hint: "Küçük su parçası"
    },
    {
        word: "dönem",
        hint: "Belirli bir zaman aralığında geçen süre."
    },
    {
        word: "defter",
        hint: "Kâğıt parçalarının bir araya getirilerek ciltlenmesiyle yapılan, yazı yazmaya elverişli kapaklı kitap."
    },
    {
        word: "dalga",
        hint: "Su yüzeyinin veya bir sıvının kendi etrafında hareket ettiği şekil."
    },
    {
        word: "duruşma",
        hint: "Mahkeme salonunda bir davanın, bir suçun incelenip sonuca bağlandığı resmî oturum."
    },
    {
        word: "dil",
        hint: "Ağız içindeki hareketli etli bölge."
    },
    {
        word: "dağ",
        hint: "Yeryüzünün yüksek ve sarp yerlerine verilen ad."
    },
    {
        word: "elma",
        hint: "Çok yıllık, gülgiller familyasından, yaprak dökmeyen bir ağaç veya bu ağacın meyvesi."
    },
    {
        word: "evin",
        hint: "Yaşadığı veya çalıştığı yapı."
    },
    {
        word: "elbise",
        hint: "Vücudu örten giysi."
    },
    {
        word: "eylül",
        hint: "Yılın dokuzuncu ayı."
    },
    {
        word: "eşya",
        hint: "Bir amaç için kullanılan nesne veya nesnelerin tümü."
    },
    {
        word: "erik",
        hint: "Erikgillerden, anavatanı Türkiye olan, kışın yapraklarını dökmeyen, beyaz çiçekleri olan bir ağaç (Prunus domestica)."
    },
    {
        word: "erkek",
        hint: "Eril cinsiyette olan, dişi olmayan canlı."
    },
    {
        word: "eşek",
        hint: "Atgiller familyasından, kuvvetli vücutlu, çoğunlukla koyu renkli, kuyruğu kısa, yük taşımak için kullanılan bir hayvan (Equus asinus)."
    },
    {
        word: "eski",
        hint: "Çok zaman önce olan, yeni karşıtı."
    },
    {
        word: "ezgi",
        hint: "Müzik parçası."
    },
    {
        word: "eş",
        hint: "Aynı türden olan iki şeyden biri."
    },
    {
        word: "ev",
        hint: "İnsanların barınmak için yaptıkları, çatısı ve duvarları olan, kapısı ve pencereleri bulunan yapı."
    },
    {
        word: "fark",
        hint: "İki şey arasındaki farklılık, ayrım."
    },
    {
        word: "fırın",
        hint: "Ekmek, pasta vb. yiyecekleri pişirmeye yarayan ocak, ocak üzerindeki yuvarlak ve kapalı pişirme yeri, fırın deliği."
    },
    {
        word: "fil",
        hint: "Memelilerin, Asya ve Afrika'da yaşayan, büyük, hortumlu, iri hayvanı (Elephas, Loxodonta)."
    },
    {
        word: "futbol",
        hint: "Bir topun ayaklarla oynanarak hedefe atılması esasına dayanan bir spor oyunu."
    },
    {
        word: "fikir",
        hint: "Bir konuda düşünce, kanaat, düşünce, düşünce, kanaat."
    },
    {
        word: "fırça",
        hint: "Boya, vernik vb. maddeyi yüzeye yaymaya veya silmeye yarayan araç."
    },
    {
        word: "göz",
        hint: "Bakarak görme işini yapan, başta bulunan ve ışığı algılayarak görüntü oluşturan, bir insanın veya hayvanın başındaki organ."
    },
    {
        word: "gökyüzü",
        hint: "Gözlemlenen gök cisimlerinin, özellikle de yıldızların bulunduğu uzayın, atmosferin üst kısımları."
    },
    {
        word: "güneş",
        hint: "Gündüz gökyüzünde ışık ve ısı veren, Dünya'nın etrafında dolanan yıldız."
    },
    {
        word: "gün",
        hint: "Dünya'nın ekseni etrafında dönmesi sonucunda oluşan zaman dilimi, gece karşıtı."
    },
    {
        word: "göl",
        hint: "Yer kabuğunun çukur yerlerinde biriken, akarsu ile drenajı olmayan, tatlı veya tuzlu sularla dolu olan büyük ve küçük su birikintisi, golet."
    },
    {
        word: "güller",
        hint: "Genellikle kırmızı, pembe, beyaz veya sarı renkte olan, hoş kokulu, süs bitkisi."
    },
    {
        word: "gece",
        hint: "Gündüz karşıtı, güneşin batışından doğuşuna kadar geçen zaman dilimi."
    },
    {
        word: "gövde",
        hint: "Bir canlının baş, kol, bacak vb. uzantılarından oluşan ana kısmı."
    },
    {
        word: "güneşlik",
        hint: "Pencere üstüne asılan, güneş ışığını kesen, perde."
    },
    {
        word: "gümüş",
        hint: "Atom numarası 47 olan, beyaz renkli, değerli bir metal."
    },
    {
        word: "gölge",
        hint: "Bir cismin ışık almayan yanı, ışığı kesen şeyin oluşturduğu karanlık bölge."
    },
    {
        word: "gıda",
        hint: "Canlıların yaşamını sürdürebilmek için yedikleri, içtikleri şey."
    },
    {
        word: "göbek",
        hint: "Vücudun üst kısmı ile alt kısmını birleştiren yer."
    },
    {
        word: "hastane",
        hint: "Hastaların tedavi ve bakım gördüğü, sağlık kuruluşu."
    },
    {
        word: "huzur",
        hint: "İçinde güven, barış, sükûn bulunan durum."
    },
    {
        word: "hava",
        hint: "Yeryüzünün atmosferinde bulunan, insanlar ve diğer canlılar için solunabilir oksijen içeren gaz karışımı."
    },
    {
        word: "hayvan",
        hint: "Canlıların ortak adı, bitkiler karşıtı."
    },
    {
        word: "hak",
        hint: "Bir kimsenin veya toplumun, yasalara veya hukuka dayanarak bir kimseye tanıdığı, yararlandığı, kullanması gereken şey."
    },
    {
        word: "hikaye",
        hint: "Gerçek veya hayalî olayların anlatıldığı yazılı veya sözlü anlatı, masal."
    },
    {
        word: "hastalık",
        hint: "Bir organizmanın normal fizyolojik işlevlerini bozan, sağlığı etkileyen durum."
    },
    {
        word: "harita",
        hint: "Bir bölgenin veya ülkenin yeri, yüzey biçimi, sınırları, doğal ve yapay özellikleri gibi özelliklerinin küçük ölçekte ve sembollerle gösterildiği resim veya çizim."
    },
    {
        word: "hayal",
        hint: "Gerçekte var olmayan veya gerçekleşmesi zor olan düşünce, düş, kuruntu"
    },
    {
        word: "hediye",
        hint: "Birini sevindirmek, hoşnut etmek için alınan ve verilen şey."
    },
    {
        word: "huzur",
        hint: "İçinde güven, barış, sükûn bulunan durum."
    },
    {
        word: "havlu",
        hint: "Yıkanmak, yüzünü silmek veya teri kurutmak için kullanılan kumaş veya kağıt parçası."
    },
    {
        word: "ısı",
        hint: "Bir cismin moleküllerinin hareketiyle ortaya çıkan enerji biçimi, sıcaklık."
    },
    {
        word: "italyan",
        hint: "İtalya'dan olan veya İtalya ile ilgili olan."
    },
    {
        word: "inci",
        hint: "Kıymetli bir süs eşyası olan, deniz salyangozları tarafından salgılanan, kıymetli bir madde."
    },
    {
        word: "ilkbahar",
        hint: "Yılın başlangıcı olan, kış ile yaz arasındaki mevsim."
    },
    {
        word: "istasyon",
        hint: "Bir trenin veya otobüsün durduğu yer."
    },
    {
        word: "inat",
        hint: "Bir kimsenin bir işi yapmaktan, bir düşüncede ısrar etmekten vazgeçmeme, direnme."
    },
    {
        word: "İstanbul",
        hint: "Türkiye'nin Marmara Bölgesi'nde bulunan, Asya ve Avrupa kıtaları arasında yer alan büyük bir şehir."
    },
    {
        word: "ırmak",
        hint: "Genellikle tatlı su, büyük bir akarsu."
    },
    {
        word: "içki",
        hint: "Alkol veya diğer uyuşturucu maddeleri içeren içecek."
    },
    {
        word: "iki",
        hint: "İkilik, bir artı bir."
    },
    {
        word: "ilkbahar",
        hint: "Yılın başlangıcı olan, kış ile yaz arasındaki mevsim."
    },
    {
        word: "isim",
        hint: "Bir şeyin adı."
    }
];