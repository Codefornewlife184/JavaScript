// TODO *******************************************************************************************

// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim index le olur.
// Eğer diziler karışıksa (nesne) indexle erişim güçlüğü ortaya çıkar...

//! Oblect (nesne)

// Nesnelerde key-value (property-value) yapısı kullanılır
// Nesnelerde aradığımız veriye erişmek için key adını kullanmamız gerekir...

const insan = {
  ad: "Kenan",
  soyad: "Kul",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "SQL", "HTML"],
};

console.log(insan);
/* ad: "Kenan"
soyad: "Kul"
yas: 30 
meslek: "developer"
diller: (4) ['Java', 'JS', 'SQL', 'HTML']
dogumTarihi: 1991 //! Bu bilgi aşağıdaki tanımlamalardan geldi...
email: "insan@gmail.com" //! Bu bilgi aşağıdaki tanımlamalardan geldi...
konum: "Türkiye" //! Bu bilgi aşağıdaki tanımlamalardan geldi...
*/

//? *************************************************************************************************
// 1.yol ; .dot notasyonu ;
console.log(insan.ad); // Kenan
console.log(insan.diller);
/* 
0: "Java"
1: "JS"
2: "SQL"
3: "HTML"
length: 4 
*/

//2. yol ; köşeli parantez içine
console.log(insan["ad"]); // Kenan
console.log(insan["diller"]);
/* 
0: "Java"
1: "JS"
2: "SQL"
3: "HTML"
length: 4 
*/

console.log(`Adım: ${insan.ad} ve yasım: ${insan.yas}`); // Adım: Kenan ve yasım: 30

// const bilgi= prompt("insan nesnesinden hangisini görmek istersin - ad, soyad, yas..- ");
// console.log(insan[bilgi]);

//! Objeye key value ler ekleme

insan.konum = "Türkiye";
insan.email = "insan@gmail.com";
insan["dogumTarihi"] = 1991;

console.log(insan);
/*
{ad: 'Kenan', soyad: 'Kul', yas: 30, meslek: 'developer', diller: Array(4), …}

!Detay istersek...⬇️

ad: "Kenan"
diller: (4) ['Java', 'JS', 'SQL', 'HTML']
dogumTarihi: 1991
email: "insan@gmail.com"
konum: "Türkiye"
meslek: "developer"
soyad: "Kul"
yas: 30
*/

// TODO *******************************************************************************************

//! Nesne Methodları

// Bugünün yılını al=> Date().getFullYear()
const kisi = {
  ad: "Merve",
  soyad: "Aslan",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenyum",
  ehliyet: true,
  yasHesapla: function () {
    return new Date().getFullYear() - this.dogumTarihi;
  },
  ozet: function () {
    return ` ${this.ad} ${this.soyad} ${this.yasHesapla()} yaşındadır`;
  },
};
console.log(kisi);
/*
{ad: 'Merve', soyad: 'Aslan', dogumTarihi: 1990, meslek: 'tester', tool: 'selenyum', …}

!Detay istersek...⬇️

ad: "Merve"
dogumTarihi: 1990
ehliyet: true
meslek: "tester"
ozet: ƒ ()
soyad: "Aslan"
tool: "selenyum"
yasHesapla: ƒ ()
*/

console.log(kisi.yasHesapla()); // 31

console.log(kisi.ozet()); // Merve Aslan 31 yaşındadır

// TODO *******************************************************************************************

//! Nesne (object) iterasyon Örnekleri

const people = [
  {
    ad: "hakan",
    soyad: "inal",
    meslek: "developer",
    yas: 41,
  },

  {
    ad: "said",
    soyad: "cin",
    meslek: "tester",
    yas: 37,
  },
  {
    ad: "kubilay",
    soyad: "tuncel",
    meslek: "team lead",
    yas: 33,
  },

  {
    ad: "osman",
    soyad: "Türker",
    meslek: "grafiker",
    yas: 29,
  },
  {
    ad: "hüseyin",
    soyad: "harran",
    meslek: "developer",
    yas: 32,
  },
];

console.log(people);
/*
(5) [{…}, {…}, {…}, {…}, {…}]
!Detay istersek...⬇️
0: {ad: 'hakan', soyad: 'inal', meslek: 'developer', yas: 41}
1: {ad: 'said', soyad: 'cin', meslek: 'tester', yas: 37}
2: {ad: 'kubilay', soyad: 'tuncel', meslek: 'team lead', yas: 33}
3: {ad: 'osman', soyad: 'Türker', meslek: 'grafiker', yas: 29}
4: {ad: 'hüseyin', soyad: 'harran', meslek: 'developer', yas: 32}
length: 5
*/

//? Örnek 1 ; People dizisindeki kişilerin mesleklerini konsol da yazdıralım...

people.forEach((x) => console.log(x.meslek));
/*
developer
tester
team lead
grafiker
developer
*/

//? Örnek 2 ; people dizisineki tüm kişilerin yaslarını 1 arttırarak yazdırınız

people.map((x) => x.yas + 1).forEach((x) => console.log(x));
/*
42
38
34
30
33
*/

//? Örnek 3 ; yaşı 35 e esit veya kücük olanların adlarını yazdıralım...

people.filter((x) => x.yas <= 35).forEach((x) => console.log(x.ad));
/*
kubilay
osman
hüseyin
*/

//? Örnek 4 ; People dizisindeki kişilerin isimlerini büyük harf olarak alan ve yaslarını
//? 5 arttıran ve soyadının ilk 2 harfini alan diziyi döndürünüz

people
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas + 5,
      soyad: x.soyad.slice(0, 2),
    };
  })
  .forEach((x) => console.log(x));

/*
 {ad: 'HAKAN', yas: 46, soyad: 'in'}
 {ad: 'SAID', yas: 42, soyad: 'ci'}
 {ad: 'KUBILAY', yas: 38, soyad: 'tu'}
 {ad: 'OSMAN', yas: 34, soyad: 'Tü'}
 {ad: 'HÜSEYIN', yas: 37, soyad: 'ha'}
 */

//? Örnek 5 ;  mesleği developer olanların isimleri büyük harf yapıp ve yaslarını yazdırınız
//? (isterseniz diziye atayıp diziyi yazdırınız)

const yeni = people
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas,
    };
  });
console.log(yeni);
/*
 (2) [{…}, {…}]
 0: {ad: 'HAKAN', yas: 41}
 1: {ad: 'HÜSEYIN', yas: 32}
 length: 2
 */

//? Örnek 6 ;

var marka = ["Toyota", "BMW", "Opel", "Audi"];
var model = ["Corolla", "320d", "Meriva", "Q3"];
var years = ["2015", "2012", "2016", "2014"];

for (var i = 0; i < marka.length; i++) {
  document.write(marka[i] + " " + model[i] + " " + years[i] + "<br>");
}

// alternatif

var toyota = ["toyota", "Corolla", "2015"];

// Obje 1. Yöntem ;

var araba = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2014,
  renk: "koyu gri",
  otomatik: true,
};

console.log(araba);
/*
marka: "Toyota"
model: "Corolla"
otomatik: true
renk: "koyu gri"
yil: 2014
*/

console.log(araba.renk); // koyu gri
console.log(araba["renk"]); // koyu gri

// Obje 2. Yöntem ;

var oto = new Object();

oto.marka = "Audi";
oto.model = "Q3";
oto.yil = "2015";

console.log(oto);
/*
marka: "Audi"
model: "Q3"
vites: "otomatik"
yil: "2015"
*/

oto.vites = "otomatik";

// Birden fazla temel veri ile dizi icerisinde Object olusturma

var arabalar = [
  araba,
  {
    marka: "BMW",
    model: "3.20d",
    yil: 2011,
    renk: "siyah",
    otomatik: true,
  },
  {
    marka: "Mercedes",
    model: "SL300",
    yil: 2020,
    renk: "kirmizi",
    otomatik: false,
  },
];

console.log(arabalar);
/*
0: {marka: 'Toyota', model: 'Corolla', yil: 2014, renk: 'koyu gri', otomatik: true}
1: {marka: 'BMW', model: '3.20d', yil: 2011, renk: 'siyah', otomatik: true}
2: {marka: 'Mercedes', model: 'SL300', yil: 2020, renk: 'kirmizi', oto
*/
console.log(arabalar[1]);
// 1: {marka: 'BMW', model: '3.20d', yil: 2011, renk: 'siyah', otomatik: true}

for (var i = 0; i < arabalar.length; i++) {
  console.log(arabalar[i].renk); // koyu gri siyah kırmızı
}

for (var i = 0; i < arabalar.length; i++) {
  console.log(arabalar[i].yil); // 2014 2011 2020
}

//? Örnek 7 ;

/* 1) Bir personelin asagidaki bilgilerini object icerisine alalim;
  ad: Beyza
  soyad: Güvenc
  cinsiyet: Kadin
  telefon: 099999999999
  adres: Ankara, cankaya
  diller: ingilizce, italyanca, ispanyolca
  hobiler: tenis, yüzme ve kitap okumak

  2) Bu personel kac dil bilmektedir?
  3) Bu personelin hobilerini altalta yazdiriniz
  4) 3 elemanli personel bilgi sistemi olusturun.
    */

// 1. soru cözümü
var personel = {
  ad: "Beyza",
  soyad: "Güvenc",
  cinsiyet: "Kadin",
  telefon: "099999999999",
  adres: "Ankara, cankaya",
  diller: ["ingilizce", "italyanca", "ispanyolca"],
  hobiler: ["tenis", "yüzme", "kitap okumak"],
};

console.log(personel);

//2. soru cözümü
console.log(personel.diller.length); // 3
console.log(personel.diller); // ['ingilizce', 'italyanca', 'ispanyolca']

//3. soru cözüm

console.log(personel.hobiler); // ['tenis', 'yüzme', 'kitap okumak']

// 1. yontem
for (var i = 0; i < personel.hobiler.length; i++) {
  console.log(personel.hobiler[i]); // tenis, yüzme, kitap okumak
}

// 2. yöntem
personel.hobiler.forEach(function (hobi) {
  console.log(hobi); // tenis, yüzme, kitap okumak
});

//4. soru cözüm

var personeller = [
  {
    ad: "Beyza",
    soyad: "Güvenc",
    cinsiyet: "Kadin",
    telefon: "099999999999",
    adres: "Ankara, cankaya",
    diller: ["ingilizce", "italyanca", "ispanyolca"],
    hobiler: ["tenis", "yüzme", "kitap okumak"],
  },
  {
    ad: "Tahir",
    soyad: "Cesur",
    cinsiyet: "Erkek",
    telefon: "099998782999",
    adres: "Izmir, konak",
    diller: ["ingilizce", "ispanyolca"],
    hobiler: ["golf", "futbol", "kitap okumak"],
  },
  {
    ad: "Basri",
    soyad: "konuskan",
    cinsiyet: "erkek",
    telefon: "0111111111",
    adres: "Neuss, kaarst",
    diller: ["Almanca", "italyanca", "ispanyolca"],
    hobiler: ["yüzme", "Java", "kitap okumak"],
  },
];

personeller.forEach(function (prs) {
  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&");
  console.log(prs.ad + " " + prs.soyad);
  console.log("===========================");
});
/*
&&&&&&&&&&&&&&&&&&&&&&&&&&&
Beyza Güvenc
===========================
&&&&&&&&&&&&&&&&&&&&&&&&&&&
Tahir Cesur
===========================
&&&&&&&&&&&&&&&&&&&&&&&&&&&
Basri konuskan
===========================
*/
