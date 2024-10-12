// TODO *********************************************************************************************

// TODO Dizilerde İterasyon

//! For Döngüsü

const koordinatlar = [120, 100, -100, 220, 330, -50];

let pozitif = 0;
let negatif = 0;

for (let i = 0; i < koordinatlar.length; i++) {
  // Ternary ile yapıyoruz...
  koordinatlar[i] < 0
    ? (negatif = negatif + koordinatlar[i])
    : (pozitif = pozitif + koordinatlar[i]);
}
console.log(`negatifler toplamı: ${negatif} pozitifler toplamı: ${pozitif}`);
// negatifler toplamı: -150 pozitifler toplamı: 770

//? Örnek ; Bir dizideki sayıların toplamını hesaplayan uygulamayı For döngüsü ile yazınız...

const rakamlar = [-5, 15, 22, -4, 45, 78, -25];
let toplam = 0;
for (let i = 0; i < rakamlar.length; i++) {
  toplam += rakamlar[i];
}
console.log(toplam); // 126

//? Örnek ; Bir dizideki pozitif ve negatif sayıların toplamını hesaplayan uygulamayı
//? For döngüsü ile yazınız. topla adında bir fonksiyonda hesaplamayı yapınız.

const dizi = [-5, 15, 22, -4, 45, 78];
const topla = (dizi) => {
  let negatifler = 0;
  let pozitifler = 0;
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] < 0) {
      negatifler += dizi[i];
    } else {
      pozitifler += dizi[i];
    }
  }
  console.log(`Dizideki Pozitif Sayıların Toplamı: ${pozitifler}`);
  // Dizideki Pozitif Sayıların Toplamı: 160
  console.log(`Dizideki Pozitif Sayıların Toplamı: ${negatifler}`);
  // Dizideki Pozitif Sayıların Toplamı: -9
};
topla(dizi);

// TODO *********************************************************************************************

//! For in Döngüsü

const koordinatlar1 = [120, 100, -100, 220, 330, -50];

let pztf = 0;
let ngtf = 0;

for (let i in koordinatlar1) {
  // Ternary ile yapıyoruz...
  koordinatlar1[i] < 0
    ? (negatif = ngtf + koordinatlar1[i])
    : (pozitif = pztf + koordinatlar1[i]);
}
console.log(`negatifler toplamı: ${negatif} pozitifler toplamı: ${pozitif}`);
// negatifler toplamı: -50 pozitifler toplamı: 330

//!------------------------------------------------------------------------------------------------
//? Örnek ; Bir dizideki sayıların toplamını hesaplayan uygulamayı For döngüsü ile yazınız...

const sayılar = [-5, 15, 22, -4, 45, 78, -25];
let sonuç = 0;
for (let i in sayılar) {
  sonuç += sayılar[i];
}
console.log(sonuç); // 126

//!------------------------------------------------------------------------------------------------
//? Örnek ; İki ayrı dizideki eşleşen indis elemanları birleştirerek ayrı bir diziye
//? saklayan uygulamayı FOR IN ile yazınız.

const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];
const birleştir = (x, y) => {
  let adVeSoyadlar = [];
  for (let i in x) {
    adVeSoyadlar[i] = `${x[i]} ${y[i]}`;
  }
  return adVeSoyadlar;
};
console.log(birleştir(adlar, soyAdlar));
/* (5) ['Ahmet Öztürk', 'Can Yılmaz', 'Mustafa Arı', 'Ayşe Çalı', 'Elif Yazı']
0: "Ahmet Öztürk"
1: "Can Yılmaz"
2: "Mustafa Arı"
3: "Ayşe Çalı"
4: "Elif Yazı"
length: 5 */

//!------------------------------------------------------------------------------------------------

//? Örnek ; Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide saklandığı varsayalım.
//? Bu hayvanları türüne göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu ana programa
//? döndürecek fonksiyonu yaziniz.
//? Eğer o türden bir hayvan yok ise bulunamadığını yazdırsın.?

const hayvanlar = [
  "aslan",
  "fil",
  "kartal",
  "kanarya",
  "aslan",
  "aslan",
  "timsah",
];

const ara = prompt("sayısını merak ettigin hayvanın adını yaz");
const bulDondur = function (ara) {
  let hayvanSayısı = 0;
  for (let i in hayvanlar) {
    if (hayvanlar[i] == ara) {
      hayvanSayısı++;
    }
  }
  hayvanSayısı == 0
    ? alert("Aradığınız hayvandan bulunamadı")
    : alert(
        `Aradıgınız ${ara} hayvanından ${hayvanSayısı} tane bulunmaktadır `
      ); // Sonucu alert kısmında görebilriz...
};
bulDondur(ara);

// TODO *********************************************************************************************

//! For of Döngüsü

/* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. 
Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.*/

//? Örnek ; Dizideki elemanların toplamını bulan programı FOR OF ile yazınız.

const sayılar2 = [-5, 15, 22, -4, 45, 78, -25];
let result = 0;
for (let i of sayılar2) {
  result += sayılar2[i];
}
console.log(result); // 126

//!------------------------------------------------------------------------------------------------

//? Örnek ; Dizideki elemanları birleştirerek tek bir String haline getiren uygulamayı FOR OF ile yazınız.

let arabalar = ["BMW", "Volvo", "Mini"];
let yazı = "";
for (let x of arabalar) {
  yazı += x + " ";
}
console.log(yazı); // BMW Volvo Mini

let arabalar1 = ["BMW", "Volvo", "Mini"];

for (let i of arabalar1) {
  console.log(i); // yazdırma şekli aşağıdaki gibidir...
  /*
   BMW
   Volvo
   Mini
  */
}

// TODO *********************************************************************************************

//! For Each Methodu

//? Array.forEach() bir döngü deyimi değil bir dizi İTERASYON metodudur.
//! Bu metot, bir fonksiyonu parametre olarak alır ve bu fonksiyona göre bir
//! belirtilen dizi üzerinde iterasyon yapılabilir.
//? Avantajı kullanımı kolaydır. Dezavantajı ise döngüyü kırmak ve atlamak mümkün değildir.
//! Ayrıca forEach metodu orijinal diziyi değiştirmez.

//? Örnek ;

let ogrenciler = ["Onur", "Hakan", "Furkan"];

console.log(ogrenciler.forEach((ogrenci) => console.log(ogrenci)));
/*
Onur
Hakan
Furkan
/undefined
*/
ogrenciler.forEach(
  (deger, index) => console.log(index + ". kişi " + deger + "'dır")
  /*
0. kişi Onur'dır
1. kişi Hakan'dır
2. kişi Furkan'dır
*/
);

console.log(ogrenciler); //["Onur", "Hakan", "Furkan"];

//!------------------------------------------------------------------------------------------------

//? Örnek ; Bir dizideki elemanları her birini ayrı ayrı yazdıran uygulamayı forEach metodu ile yazınız.

let öğrenciler = ["John", "Ali", "Can"];
öğrenciler.forEach(yazdır);
function yazdır(kişi) {
  console.log(kişi);
  /*
John
Ali
Can
*/
}
öğrenciler.forEach((k) => console.log(k));

// TODO *********************************************************************************************

//! Map Methodu

//! Map metodu orjinal diziyi değiştirmez. Yeni bir dizi oluşturarak döndürür.
//? Array.map() metodu, bir fonksiyonu parametre olarak alır ve orijinal
//? dizinin kopyasını bu fonksiyona göre modifiye ederek döndürür.
//! Yani bir diziyi transformasyondan geçirmek için map() metodu kullanılabilir.

//? Örnek ; Bütün elemanların 3 katını alınız

const rakamlar1 = [3, 5, 3, 2, 6, 7, 9];

console.log(rakamlar1.map((x) => x * 3)); // (7) [9, 15, 9, 6, 18, 21, 27]

// 2. yol
console.log(
  rakamlar1.map((x, index) => `${index + 1}. elemanın 3 katı ${x * 3}`)
);
// (7) ['1. elemanın 3 katı 9', '2. elemanın 3 katı 15', '3. elemanın 3 katı 9',
// '4. elemanın 3 katı 6', '5. elemanın 3 katı 18', '6. elemanın 3 katı 21', '7. elemanın 3 katı 27']

//!------------------------------------------------------------------------------------------------

//? Örnek ; isimler dizisinin içerisindeki her ismi büyük harf olarak yeni bir diziye sakla

const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

// map metodu bir dizi döndürür

const buyuk = isimler.map((isim) => isim.toUpperCase());
console.log(buyuk);
// (7) ['AHMET', 'MEHMET', 'ISMET', 'SAFFET', 'CAN', 'CANAN', 'CAVIDAN']

document.querySelector(".baslık").textContent = buyuk.join(" -> "); // Açılış sayfasında yazdırıldı

//!------------------------------------------------------------------------------------------------

//? Örnek ; tl Fiyatlar dizisindeki fiyatların Euro ve dolar karşılıklarını
//? hesaplatarak yeni dizlere kaydediniz.

const euro = 9.68;
const dolar = 8.1;
const tlFiyatlar = [100, 150, 100, 50, 80];

const dolarFiyatlar = tlFiyatlar.map((x) => (x / dolar).toFixed(2));
// Not ; toFixed(2) küsürattan sonra kaç hane yazılsın istiyorsak bu methodu kullanıyoruz.
const euroFiyatlar = tlFiyatlar.map((x) => (x / euro).toFixed(2));

console.log(dolarFiyatlar); // (5) ['12.35', '18.52', '12.35', '6.17', '9.88']
console.log(euroFiyatlar); // (5) ['10.33', '15.50', '10.33', '5.17', '8.26']

//!------------------------------------------------------------------------------------------------

//? Örnek ; tl Fiyatlar dizisindeki ürünlere zam yapılmak isteniyor.
//? Fiyatı 100 TL den fazla olanlara %10 zam, 100 TL den az olanlara ise
//? %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki
//? gibi diziye saklamak istiyoruz.

const tlFiyatlar1 = [100, 150, 100, 50, 80];
const değerler = tlFiyatlar1.map(function (d, i) {
  if (d > 100) {
    return `${i + 1}. Ürün Fiyatı: ${(d * 1.1).toFixed(2)}`;
  } else {
    return `${i + 1}. Ürün Fiyatı: ${(d * 1.15).toFixed(2)}`;
  }
});
console.log(değerler);
// ['1. Ürün Fiyatı: 115.00', '2. Ürün Fiyatı: 165.00', '3. Ürün Fiyatı: 115.00',
// '4. Ürün Fiyatı: 57.50', '5. Ürün Fiyatı: 92.00']

// TODO *********************************************************************************************

//! Filter Methodu

//? Array.filter() metodu, bir fonksiyonu parametre olarak alır ve orijinal
//? dizinin kopyasını bu fonksiyona göre filtreleyerek döndürür.
//! Yani bir dizideki istediğimiz elemanların seçmek için kullanılır.
//? filter() metodu orijinal diziyi değiştirmez. Yeni bir dizi oluşturarak döndürür.

//? Örnek ; Koordinatlar dizisindeki negatif koordinatları alıp yeni bir diziye
//? saklayan uygulamayı filter() ile yapınız.

const koordinatlar4 = [-100, 150, -32, 43, -20];

negatifKoordinatlar4 = koordinatlar4.filter((x) => x < 0);
console.log(negatifKoordinatlar4); // (3)[-100, -32, -20]

// 2. Yol Daha kısa ve kolay
console.log(koordinatlar4.filter((x) => x < 0)); // (3)[-100, -32, -20]

//!------------------------------------------------------------------------------------------------

//? Örnek ; Fiyatlar dizisindeki 250 den büyük fiyatları yazdır...

const fiyatlar = [120, 260, 300, 322.5, 400, 768];

console.log(fiyatlar.filter((t) => t > 250)); // (5) [260, 300, 322.5, 400, 768]

//!------------------------------------------------------------------------------------------------

//? Örnek ; Maaşı 4000 $' ve  düsük olanlara %50 zam yapmak istiyoruz
//?  ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500];
const yeni = maaslar.filter((a) => a <= 4000).map((a) => a * 1.5);
console.log(yeni); // (2) [4500, 6000]

// 2. Yol Daha kısa ve kolay
console.log(maaslar.filter((a) => a <= 4000).map((a) => a * 1.5)); // (2) [4500, 6000]

//!------------------------------------------------------------------------------------------------

//? Örnek ;

const adlar1 = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];

//ilk harfi A olanları konsol da yazdır

adlar1.filter((x) => x.startsWith("A")).forEach((x) => console.log(x)); // Ali Ahmet

// TODO *********************************************************************************************

//! Reduce Methodu

//? Array.reduce() metodu, bir fonksiyonu parametre olarak alır ve orijinal
//? diziyi bu fonksiyona göre işleyerek tek bir değer döndürür.
//! Örneğin bir dizinin değerlerinin toplamını bulmak için reduce() metodu kullanılabilir.
//? reduce() metodu orijinal diziyi değiştirmez. Sadece bir değer döndürür.
//! reduce çıkıs metodudur, reduce den sonra foreach çalışmaz...

const maaslarım = [3000, 5000, 4000, 2000, 1000];

console.log(maaslarım.reduce((x, y) => x + y, 0)); // 15000
