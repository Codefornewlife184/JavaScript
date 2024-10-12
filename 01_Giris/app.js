//! Js yi Etkinleştirme Modu

/*
Kısa bir bilgilendirme...

1995 yılında Brendan Eich tarafından üretildi...
Orjinal adı : Mocha idi.. Sonra JS oldu..
Js Kodları " " veya ' ' arasında yazılabilir...

<noscript>
Js devre dışı.. Etkinleştirmek için browserdaki ayarlar bölümünden düzeltme yapabilrsiniz...
</noscript>
*/

//! Js yi Html de Tanımlama

/*
body tag ının en alt kısmına tanımlanabilir.. Aşağıdaki gibi...

<body>
    <h1>Javascript Dersine Hoşgeldiniz...</h1>


    <script src="app.js"></script>
</body>
*/

//! Js Yazdırma Şekilleri...

//? 1-console.log --> Tarayıcı konsoluna yazdırma
//? 2-alert() (window.alert) --> Uyarı pencersine yazdırma
// alert bize tek seçenek sunar "Tamam" butonuyla...
alert("Dikkat");
//? 3-document.write() --> HTML sayfasına yazdırma
document.write("<br/>" + "Merhaba");
document.write("<br/>" + "Merhaba <font color='red'>Dünya</font> Hoşgeldiniz");
//? 4-innerHTML --> HTML nesnelerine yazdırma
//? 5-pronmpt() "Tamam" ve "İptal" seçeneği sunar... 2 Türlü yazımı vardır..
prompt("Adınızı Giriniz");
prompt("Youtube Kanal Adı Giriniz", "Youtube Kanalı");
var kanal_ismi;
kanal_ismi = prompt("Youtube Kanal Adı Giriniz", "Youtube Kanalı");
document.write(
  "<br/>" + kanal_ismi,
  "Youtube Kanalına üye olmayı unutmayınız!"
);

//? confirm() "Tamam" ve "İptal" seçeneği sunar... Onay için kullanılır...
confirm("Onay verdiğinize emin misiniz");

//! Console Yazdırma Şekilleri...

console.log("Hello Javascript");
console.warn("Bu bir uyarıdır");
console.error("Bu bir hatadır bilerek yazdım...");
// console.clear("Consolu temizler")

// Değişken Tanımlama Türleri --> (Var-Const-Let)

//! ********************************************************************************* */

//! var

// ? Modern JS "var" keyword'unun kullanımı azaldı.
// ? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.
// ? Keyword ler değişken ismi olarak kullanılmazlar.. if switch for var const vs gibi..
// ? Sayılar eşittir ile tırnaksız tanımlanırken...
// ? String yani metin ifadeleri de eşittir ile " " , ' ' ve ` ` şeklinde tanımlanmalıdır.
// ? Değişken tanımlaması ; noktalı virgül ile tamamlanmalıdır...
// ? Tanımlanmyan değişkenler undefined yani tanımsız olarak algılanır...
// Örnek verecek olursak ; -- var sum; -- sum a bişey atanmamış.. Tanımsızdır...

//! ÖNEMLİ: var deyimi ile aynı isimle tekrar değişken tanımlamak mümkündür.

var fiyat; // burada bir tanımlama olmadığı için
console.log(fiyat); // undefined yazdırır...
fiyat = 23; // tanımlama yapar ve bir değer verirsek
console.log(fiyat); // 23 yazdırır...

//! Not: console.log ta yazdırılan integer ifadeler mavi renk string ler gri renk olur..

fiyat = 19.99;
console.log("FİYAT:" + fiyat); // FİYAT: 19.99 yazdırır

var fiyat = "ücretsiz";
console.log("FİYAT:" + fiyat); // FİYAT: ücretsiz yazdırır

var isim = "Tahir";
console.log(typeof isim); // string ... (typeof:İsmin türü nedir demektir..)
isim = 3.14;
console.log(typeof isim); // number (typeof:İsmin türü nedir demektir..)

var t, j, m, sum;
t = 7;
j = 10;
m = j - t;
sum = t * j + m;
console.log(m); // 3
console.log(sum); // 73

//! ********************************************************************************* */

// Object veri türü

var kisi = {
  adi: "Tahir",
  soyadi: "Selim",
  yas: 33,
};

console.log(kisi); // {adi: 'Tahir', soyadi: 'Selim', yas: 33}

// Anasayfada yazıdrmak istersek ;

document.write(
  "<br/>" +
    "Adım " +
    kisi.adi +
    " Soyadım " +
    kisi.soyadi +
    " yaşım " +
    kisi.yas
); // Adım Tahir Soyadım Selim yaşım 33
   //? console da değil anasayfa da yazdırır ducument.write...

//! ********************************************************************************* */

var marka;
console.log(marka); // undefined

marka = prompt("Lütfen marka giriniz: "); // Klavyeden gelecek
var model = prompt("Model giriniz: "); // Klavyeden gelecek
console.log(marka + " " + model); // Örnek ; Toyota Corolla (gibi bişey yazacak...)
var menzil = 600;
console.log(menzil); // 600
var depo = 52;
var kurus = (depo * 8) / 600;
console.log(kurus); // 0.69

console.log(
  marka +
    " markanin " +
    model +
    " araci bir depo yakit ile " +
    menzil +
    " km yol gidebiliyor. Km ye tekabül ücreti ise " +
    kurus +
    " kuruştur..."
); // ........... markanin ............ araci bir depo yakit ile 600 km yol gidebiliyor.
// Km ye tekabül ücreti ise 0.6933333333333334 kuruştur...

//! ********************************************************************************* */

// Örnek ; Bir öğrencinin bilgilerini alip, yıl sonu ortalamasini ögrenelim...

var kim = prompt("İsim giriniz: ");
var id = prompt("Numara giriniz: ");
var dersAdi = prompt("Ders giriniz: ");
var yazili1 = prompt("1. yazili notu: ");
var yazili2 = prompt("2. yazili notu: ");

var ortalamam = (Number(yazili1) + Number(yazili2)) / 2;
console.log(
  kim +
    " adli ögrencinin " +
    dersAdi +
    " dersindeki yil sonu ortalamasi " +
    ortalamam
); // Klavyeden gelecek

//! ********************************************************************************* */

//! Const Değişkeni

// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).
// ! Mümkünse const, yoksa let, o da mümkün değilse var kullanılmalı.
// ! Çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.
// ! Güvenli olması açısından const daha iyidir...

const isim1 = "Techpro";
console.log(isim1); // Techpro yazdırır
console.log(typeof isim1); // string yazdırır

const pi = 3.14;
console.log(pi); // 3.14 yazdırır
console.log(typeof pi); // number yazdırır

const dogruMu = true;
console.log(dogruMu); // true yazdırır
console.log(typeof dogruMu); // boolean yazdırır

const piSayisi = 3.14;
// piSayisi = 3; // değiştirmeye kalkarsan itiraz eder...

const isim2 = "Cem"; // Const son değerdir değiştirilemez...Final gibi...
console.log(typeof isim2); // number

const obje = ["Ali","Ahmet","Can"];
console.log(typeof obje); // object

//! ********************************************************************************* */

//! Hatalı Yazımlara Örnekler ;
// const ad;

// const sayı = 5;
// const sayı = 2;
//? --> Not ; 128. satırda consta değer atadığımız için 129 a tekrar atarsak hata alırız..

// const number;
// number=4; // ! 132 ve 133. satırlar hatalı yazıma girer...

//! ********************************************************************************* */

//! Let

// ? Eğer değişkenimizin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

let dil = "Java";
dil = "Javascript";
console.log(dil); // Javascript yazdırır
console.log(typeof dil); // string yazdırır

dil = 1;
console.log(dil); // 1 yazdırır
console.log(typeof dil); // number yazdırır

dil = true;
console.log(dil); // true yazdırır
console.log(typeof dil); // boolean yazdırır

dil = null;
console.log(dil); // null yazdırır
console.log(typeof dil); // object yazdırır (*********)

fiyat = 10;
console.log(typeof fiyat); // number
fiyat = "Basri";
console.log("Fiyat"); // Fiyat

// String tanımlamak için 3 farklı karakterle yazabiliriz...

let name1 = "Hakan";
let name2 = "Sedef"; // tek tırnakla da yazabiliriz. Otomatik çift tırnağa dönüyor...
let name3 = `Merve`;

console.log(name1); // Hakan
console.log(name2); // Sedef
console.log(name3); // Merve

//! ********************************************************************************* */
//! Dikkat Edilmesi Gereken Noktalar....

let sayac;
console.log(sayac); // undefined yazdırır...Tanımsız demektir...
console.log(typeof sayac); // undefined yazdırır...Tanımsız demektir...

sayac = true;
console.log(typeof sayac); // boolean yazdırır...

kalanBorç = 15.5; //? ÖNEMLİ: let kullanılmasa bile JS yorumlayıcısı yeni değişkeni algılayıp tanımlar.
console.log(kalanBorç); // 15.5 yazdırır...
console.log(typeof kalanBorç); // number yazdırır

// let sayac = 2; //! Hata: let ve const deyimiyle aynı scope'da tekrardan aynı isimle değişken tanımlanamaz.

//! ********************************************************************************* */
//! Değişkenlerle İlgili Bir Örnek....

// Müşteri Adı
// Müşteri Soyadı
// Müşteri Tc Kimlik No
// Müşteri Sipariş Toplamı
// Müşteri Cinsiyet
// Müşteri Yaş
// Müşteri Adres Bilgileri
// Müşteri Hobiler

var costumerName = "Ali";
var costumerLastname = "Can";

var fullName = "Ali Can";
var tcId = "12345678912";

var siparisTotal = 205.6;
var cinsiyet= true ; // erkek=true kadın=false

var adres="İstanbul Sarıyer" ;

// veya

var adress = {
  city:"İstanbul",
  district:"Sarıyer"
}

console.log(adress);

var hobies = ["Kitap","Sinema","Gezme"];
console.log(hobies);

var order1=100;
var order2=150;

var totalOrder= order1+order2;

console.log(totalOrder); // 250

// Siparişler tam sayı olarak toplayalım...

var order3="100.2";
var order4="150.5";

var order3=parseInt("100.2");
var order4=parseInt("150.3");

var totalOrder2= order3+order4;

console.log(totalOrder2); // 250

var dogumYili= 1989;
console.log(new Date().getFullYear()-dogumYili); // 2022 ye göre 33 yaşında...

//! Not : var ve let değişkenleri aynı görevi görür... const ise değişikliğ kabul etmez...

//! ********************************************************************************* */

//! *** Operatörler

//? Javascript operatörlerini 5 kategoride inceleyebiliriz.

// TODO--> Aritmetik Operatörler
// TODO--> Karşılaştırma Operatörleri
// TODO--> Mantıksal Operatörleri
// TODO--> Atama Operatörleri
// TODO--> Koşul (Ternary) Operatörü

//! ********************************************************************************* */

// TODO *******************************************************************************/

//! Aritmetik Operatörler

// +  Toplama işlemi ve String’lerde birleştirme işlemi gerçekleştirir...
// -  Çıkarma işlemi gerçekleştirir...
// *  Çarpma işlemi gerçekleştirir...
// %  Mod alma işlemi gerçekleştirir...
// ++ Bir arttırma işlemi gerçekleştirir...
// -- Bir azaltma işlemi gerçekleştirir...
// ** Üs alma işlemi gerçekleştirir...

// TODO *******************************************************************************/

//! Aritmetik Operatörler (+)

const ekmek = 2;
const yumurta = 30;
const peynir = 40;
const toplamHarcama = ekmek + peynir + yumurta;
console.log("HARCAMA:" + toplamHarcama + " TL"); // HARCAMA: 72 TL

//! ÖNEMLİ : + operatörü ile string birleştirme gerçekleştirilebilir...
const ad = "Mustafa";
const soyAd = "Çalışkan";
console.log(ad + soyAd); // MustafaÇalışkan
console.log(ad + " " + soyAd); // Mustafa Çalışkan

const x = 5;
const y = "5";
const birleştir = x + y;
console.log(birleştir); // 55 yazdırır...

const ayran = 5;
const cikolata = 6;
const borek = 2;
console.log(ayran + cikolata + borek); // 13
console.log("Toplam Fiyat : " + ayran + cikolata + borek); // Toplam Fiyat : 562 yanyana yazdırdı...

const adi = "Can";
const soyad = "Canan";
console.log(adi + " " + soyad); // Can Canan

const s1 = 7;
const s2 = "7";
console.log(s1 + s2); // 77 --> Concat yaptı...
console.log(s1 - s2); // 0 (işlem ne ise onu yaptı)
console.log(s1 * s2); // 49 (işlem ne ise onu yaptı)
console.log(s1 / s2); // 1 (işlem ne ise onu yaptı)

console.log("Benim adım" + " " + adi + " " + "Benim yaşım" + " " + s1); // Benim adım Can Benim yaşım 7
// Alternatif kolay yazdırma şekli... Template literal deniyor...
console.log(`Benim adım ${adi} Benim yaşım ${s1}`); // Benim adım Can Benim yaşım 7

// TODO *******************************************************************************/

//! NaN --> Not a Number (Bir sayı değildir)

var num = 11;
var num1 = "8";
var kelimeler = "Yazılım";
console.log(num * kelimeler); // NaN
console.log(num * num1); // 88
console.log(num1 * num); // 88
console.log(num1 + kelimeler); // 8Yazılım
console.log(kelimeler + num); // Yazılım11

// Nan ın veri türü Number dır bunu umutmayalım...

// TODO *******************************************************************************/

//! Infinity (Sonsuzluk)

// Bir üstteki verileri kullanmak istiyorum..

var metin = " ";

while (num != Infinity) {
  num = num * num;
  metin = metin + num + "<br>";
}
document.write("<br>" + metin);
/* Cevabı -- Alt alta karelerini yazdırdı sonsuzluğa gelince döngüden çıktı....
121
14641
214358881
45949729863572160
2.111377674535255e+33
4.457915684525902e+66
1.987301225034204e+133
3.949366159022448e+266
Infinity
*/

// TODO *******************************************************************************/

//! Sayı Dönşümleri (16 lık 8 lik ve 2 lik sistemde yazdırma)

// 10 luk sistemden 16 lık 6 lik ve 2 lik sisteme dönüştürme

var num2 = 121;

document.write(
  "16 lık Sistem : " +
    num2.toString(16) +
    "<br>" +
    "8 lik Sistem : " +
    num2.toString(8) +
    "<br>" +
    "2 lik Sistem : " +
    num2.toString(2) +
    "<br>"
);

/* Cevabı
16 lık Sistem : 79
8 lik Sistem : 171
2 lik Sistem : 1111001
*/

//!  Sayıyı Stringe Dönüştürme

var num3 = 21;
var num4;
num4 = num3.toString();

document.write(typeof num3, "<br>", typeof num4, "<br>"); // number // String

//! Number Methodu

document.write(
  Number(true) +
    "<br>" +
    Number(false) +
    "<br>" +
    Number(null) +
    "<br>" +
    Number("10") +
    "<br>" +
    Number("    11") +
    "<br>" +
    Number("12    ") +
    "<br>" +
    Number("    13    ") +
    "<br>" +
    Number("10.33") +
    "<br>" +
    Number("10,33") +
    "<br>" +
    Number("10 33") +
    "<br>" +
    Number("Selam") +
    "<br>"
);
/* Not : Number ile yazdırılan sayıların önlerinde arkalarında 
         bırakılan boşlukların önemli olmadığını anlıyoruz...
         Ama "10 33" gibi durumlar da bize NaN döndürür...

 Sırasıyla Cevapları aşağıdadır..
1 (true değeri 1 olur)
0 (false değeri 0 olur)
0 (null değeri de 0 olur)
10
11
12
13
10.33
NaN (Not A Number --> Bu bir sayı değildir...)
NaN (Not A Number --> Bu bir sayı değildir...)
NaN (Not A Number --> Bu bir sayı değildir...)
*/

// TODO *******************************************************************************/

//! Aritmetik Operatörler (-)

const yil = 2021;
const dogumTarihi = 1980;
const yas = yil - dogumTarihi;
console.log("YAŞ :" + yas); // YAŞ : 41
console.log("YAŞ :" + (yil - dogumTarihi)); // YAŞ : 41
//! ÖNEMLİ : Ekstra parantez kullanılmaz ise string birleştirme yapmaya çalışır.
//! - den dolayı birleştiremez ve NaN döndürür. NaN = Not a Number (Sayı değil)

// TODO *******************************************************************************/

//! Aritmetik Operatörler (* Çarpma ve ** Üs Alma)

const taban = 2;
const us = 3;
console.log(taban * us); // 2*3=6 Çarpma
console.log(taban ** us); // 2*2*2=8 Üs Alma

// Beraber bir işlemde kullanacak Olursak ;
const pik = 3.14;
const r = 3;
const alan = pi * r ** 2;
const çevre = 2 * pi * r;
console.log(çevre, alan); // 18.84   28.26
console.log("ÇEVRE:" + çevre, "ALAN:" + alan); // ÇEVRE:18.84 ALAN:28.26

// TODO *******************************************************************************/

//! Aritmetik Operatörler (Modulus % ve ++ ve --)

const sayi = 123;
const birlerBasamagi = 123 % 10;
console.log("Birler Basamağı : " + (sayi % 10)); // Birler Basamağı : 3

let a = 3;
let b = ++a;
let c = --a;
console.log(a, b, c); // 3 4 3

a += 5;
console.log(a); // 8

const z = 3;
// let k = z++; HATA: const değişkenin değeri arttırılamaz.

// Örnek ;

var o, p, j;
o = 7;
p = ++o;
j = p--;

document.write("<br>"); // alt satıra geçmeyi sağlıyor..
document.write("o: ", o, " ", " p: ", p, " j= ", j); // o=8 p=7 j=8

// TODO *******************************************************************************/

//? ***********************************************************************************/

//! Karşılaştırma Operatörleri

//? == İki değişkenin veri tipine bakmaksızın eşitliğini kontrol eder.
//? Eşitse true aksi takdirde false döndürür.

//? === Veri tipi de dahil olmak üzere eşitliğini kontrol eder.
//? Eşitse true aksi takdirde false döndürür.

//? != İki değişkenin eşit olmamasını kontrol eder.
//? Eşit değilse true aksi takdirde false döndürür.

//? > Soldaki değişkenin değeri sağdakinden büyükse true aksi takdirde false döndürür.

//? < Soldaki değişkenin değeri sağdakinden küçükse true aksi takdirde false döndürür.

//? >= Soldaki değişkenin değeri sağdakine eşit veya büyükse true aksi takdirde false döndürür.

//? <= Soldaki değişkenin değeri

//? ***********************************************************************************/

// TODO Karşılaştırma Operatörleri ile ilgili Örnekler Çözüp konuyu pekiştirelim...

const s3 = 5;
const s4 = "5";
console.log(s3 == s4); // true (Veri tipine bakmadığından)
console.log(s3 === s4); // false (veri tipi number ve string olduğundan)

const s5 = 6;
console.log(s5 == 6); // true
console.log(s5 == "6"); // true (Veri tipine bakmadığından)

//! ÖNEMLİ: JS, operatörlere bakarak gerektiğinde string formatındaki sayıyı number
//! formatına çevirerek işlemi gerçekleştiriyor...

console.log(s5 === "6"); // false
console.log(s5 !== 6); // false
console.log(s5 != "6"); // false

console.log(s5 !== "6"); // true (Eşit olmadığı için)

//! ÖNEMLİ: === ve !== operatörleri veri tipini de kontrol eder.

console.log(s5 > 6); // false (Eşit olduğundan false verir)
console.log(s5 > "4"); // true (6>4 oldğundan true verir)
console.log(s5 >= 6); // true (6>=6 olduğundan true verir)
console.log(s5 > "7"); // false (6>7 olduğundan false verir)

//! ÖNEMLİ: Büyük eşit ve küçük eşit işlemlerinde veri tipi kontrolü yapılamıyor.

// TODO *******************************************************************************/

//! Mantıksal Operatörler (Lagical Operators)

// TODO --> && MANTIKSAL VE -->işlemi gerçekleştirir.
// Kontrol ettiği değişkenlerin tamamı TRUE ise TRUE değer döndürür.
// Aksi takdirde FALSE değer döndürür.

// TODO --> || MANTIKSAL VEYA --> işlemi gerçekleştirir.
// Kontrol ettiği değişkenlerin sadece bir tanesi bile TRUE ise TRUE değer döndürür.
// Ancak tamamı FALSE ise FALSE değer döndürür.

// TODO --> ! MANTIKSAL DEĞİL --> işlemi gerçekleştirir.
// Yani, kontrol ettiği değişkenin değerinin tersini döndürür.
// Değişken TRUE ise FALSE, FALSE ise TRUE değer döndürür.

let s7 = true;
let s8 = true;
console.log(s7 && true); // true
console.log(s7 && s8); // true
console.log(s7 && s8 && false); // false

s8 = false;
console.log(s7 || s8 || false); // true (s7 true olduğundan true verdi)

s8 = null;
console.log(s7 && s8); // null
console.log(s7 || s8); // true
// TODO --> ÖNEMLİ: 0, FALSE, NULL, undefined, "" ve NaN dışındaki durumlar TRUE kabul edilir...

f2 = "kuş";
f3 = "kedi";
console.log(f2 || f3); // kuş
console.log(f2 && f3); // kedi

f2 = true;
f3 = false;
console.log(!f2); // false
console.log(!f3); // true
f3 = null;
console.log(!f3); // true
// TODO --> ÖNEMLİ: 0, FALSE, NULL, undefined, "" ve NaN dışındaki durumlar TRUE kabul edilir...

//! ***************************************************************************************

//! Atama Operatörleri

//? = x = y Soldaki değişkenin değerini sağdakine kopyalar.
//? += x += 1 x= x+1 işlemi gerçekleştirir.
//? -= x -= 2 x= x-2 işlemi gerçekleştirir.
//? *= x *= 3 x= x*3 işlemi gerçekleştirir.
//? /= x /= 4 x= x/4 işlemi gerçekleştirir.
//? **= x **= 2 x= x2 işlemi gerçekleştirir.
//? %= x %= 3 x = x mod 3 işlemi gerçekleştirir.
//? &= x &= y x = x VE y işlemi gerçekleştirir.
//? |= x |= y x = x VEYA y işlemi gerçekleştirir.

// TODO **********************************************************************************

//! Koşul Operatörü
// Koşul Operatörü, if-else ifadelerinin tek satırlık hali gibi düşünülebilir.
// 3 parametre alır...
// (Koşul ? ifade1 : ifade2)

// Eğer Koşul doğru ise ifade1, yanlış ise ifade2 çalıştırılır.

let age = 7;
let okul = age >= 7 ? "ilkokul" : "anaokulu";
console.log(okul); // ilkokul

age = 6;
okul = age >= 7 ? "ilkokul" : "anaokulu";
console.log(okul); // anaokulu

// TODO **********************************************************************************

// Tip Değişimleri

const para = "100";
console.log(para + 15); // 10015
console.log(Number(para) + 15); // 115
// ÖNEMLİ : Number() fonksiyonu tip çevrimi yapılabilir.

const sayi5 = 56;
console.log(String(sayi5) + sayi5); //5656
console.log(typeof sayi5); // number

const language = "Javascript";
console.log(Number(dil));
console.log(Number("123abc")); // Nan
// ÖNEMLİ : Number() fonksiyonu Harfleri sayıya çeviremediği için NaN
// (Sayı değil - Not a Number) döndürüyor...

const sayi6 = 54;
console.log(String(sayi6), sayi6); // 54 54
// ÖNEMLİ : String() fonksiyonu ile verilen ifadeyi String e çevirmek mümkündür...

const k1 = 5;
const k2 = -7;
const ismim = "John";
console.log(Boolean(ismim)); // true
console.log(Boolean(k1)); // true
console.log(Boolean(k2)); // true

const sıfır = 0,
  nal = null;
const tanımsız = undefined;
const boş = "",
  sayıDeğil = NaN;

console.log(Boolean(sıfır), Boolean(nal)); // false false
console.log(Boolean(tanımsız), Boolean(boş)); // false false
console.log(Boolean(sayıDeğil)); // false

//! Önemli Bir Not ;

const h = 45e4; // Bu şekilde bir yazım 45*10 üzeri 4 demektir.. 450000 sonucunu verir...
document.write("<br/>" + h);
console.log(h); // 450000

const l = 45e-4; // Bu şekilde bir yazım 45/10 üzeri -4 demektir.. 0.0045 sonucunu verir...
document.write("<br/>" + l); // "<br/>" yazdırmada alt satıra geçirmek için kullanılabilir...
console.log(l); // 0.0045

//! Ondalıklı Sayı Toplamındaki İnce Nokta

var rakam1 = 0.3;
var rakam2 = 0.6;

document.write("<br/>" + (rakam1 + rakam2));
// 0.9 diye cevap geldi.. Her zaman bu şekilde net cevap alamayabiliyoruz..

// Doğru sonucu bulmak istiyorsak şunu yapmalıyız..
document.write("<br/>" + (rakam1 * 10 + rakam2 * 10) / 10); // 0.99

// TODO **********************************************************************************

//! Hosting

var xyzt;
qwerty = 7;

document.write(xyzt + "<br>" + qwerty);

xyzt = 6;
var qwerty;

// Sonuc ; xyzt : undefined    qwerty : 7

// TODO **********************************************************************************

//! Uygulama

// Can ve Ada nın boy ve kilo bilgilerini alın...
// Alınan bilgilere göre kilo indexlerini hesaplayın..
// Formül : Kilo/Boy*Boy
// Hesaplanan indeks bilgilerine göre larşılaştırma yapın..
// Aşağıdaki Tabloya göre can ve ada hangi gruba giriyor...?

// 0-18,4 --> Zayıf  18,5-24,9 --> Normal   25,0-29,9 --> Kilolu  30,0-34,9 --> Obez

const kgCan = 60;
const kgAda = 40;

const boyCan = 1.70;
const boyAda = 1.50;

// Bilgiler böyle olsa...

//? İndexleri hesaplamak istersek ;

let IndexCan ;
let IndexAda ;

IndexCan = (60/(1.70*1.70));
IndexAda = (40/(1.50*1.50));

console.log(IndexCan); // 20.7 --> Normal
console.log(IndexAda); // 17.8 --> Zayıf

// Eğer sonuç tam çıksın dersek toFixed() methodunu kullanırız..

console.log(IndexCan.toFixed()); // 21 --> Normal
console.log(IndexAda.toFixed()); // 18 --> Zayıf

// veya virgüllü olsun dersek ;

console.log(IndexCan.toFixed(2)); // 20.77 --> Normal
console.log(IndexAda.toFixed(2)); // 17.78 --> Zayıf

let AdaZayif = (IndexAda>=0) && (IndexAda<=18.4);
let AdaNormal = (IndexAda>=18.5) && (IndexAda<=24.9);
let AdaKilolu= (IndexAda>=25) && (IndexAda<=29.9);
let AdaObez = (IndexAda>=30) && (IndexAda<=34.9);

console.log(AdaZayif,AdaNormal,AdaKilolu,AdaObez) ; // true , false , false , false