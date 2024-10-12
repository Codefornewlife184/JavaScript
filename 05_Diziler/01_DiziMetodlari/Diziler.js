// TODO *********************************************************************************************

const yaslar = [5, 10, 28, 42];
// Şu şekilde de yazabilirdik..
// var yaslarSırasıyla = new Array(5, 10, 28, 42);

const isimler = [
  "Hakan",
  "Alaaddin",
  "Furkan",
  "Dayanch",
  20,
  40,
  true,
  23.5,
  yaslar,
  "Ayse",
];
console.log(isimler);
// Yazdırma sonucu aşağıdaki şekilde... Ama diğer alttaki işlemler değiştiriyor listeyi...
/* Array(10)
0: "Hakan"
1: "Alaaddin"
2: "Furkan"
3: "Sadi"
4: 20
5: 40
6: true
7: 23.5
8: false
9: "Ayse"
length: 10 */

console.log(isimler[3]); // Dayanch
console.log((isimler[3] = "Sadi")); // Sadi
// const değiştirilemiyordu ama non-primitive lerde (arrayler) değiştirilebiliyor.
// Dizi bir adres gösterir isimler gibi, o yüzden primitive den farklıdır...

isimler[isimler.length - 2] = false;

console.log(isimler[8][0]); // undefined (tanımsızdır)

// TODO *********************************************************************************************

//? Diziyi Değiştiren Methodlar

/* Method Tanımları...

?.pop() ; Dizinin son elemanını diziden siler ve bu elemanı döndürür
!.push() ; Dizinin sonuna bir veya daha fazla eleman ekler ve dizinin yeni eleman sayını döndürür.
?.reverse() ; Dizinin elemanlarını ters sıralar.
!.shift() ; Dizinin ilk elemanını diziden siler ve bu elemanı döndürür.
?.unshift() ; Dizinin ilk indeksine yeni bir eleman ekler ve dizinin yeni elaman sayısını döndürür.
!.sort() ; Diziyi yükselen sırada sıralar.
?.splice() ; Dizi'nin içeriklerini, diziye ait öğeleri kaldırarak veya yeni öğeler
? ekleyerek ve/veya mevcut öğeleri silerek değiştirir. */

let meyveler = ["Elma", "Armut", "Muz", "Kivi"];

const baslik = document.querySelector(".baslik");

//! pop() en son elemanı siler ve log içinde yazdırırsanız da sildiğini yazdırır.

// meyveler.pop() ; ["Elma", "Armut", "Muz"]; --> Kivi yi hemen sildi
console.log(meyveler.pop()); // Kivi

//! shift() ; Dizinin ilk elemanını diziden siler ve yazdırılırsa bu elemanı döndürür.

// meyveler.shift(); //["Armut", "Muz"] --> Elma yı hemen sildi
console.log(meyveler.shift()); // Elma

//! push() ; Dizinin sonuna bir veya daha fazla eleman ekler ve dizinin yeni eleman sayını döndürür.

meyveler.push("Çilek", "Karpuz"); // ["Armut", "Muz" "Çilek", "Karpuz"]

//? unshift() ; Dizinin ilk indeksine yeni bir eleman ekler ve dizinin yeni elaman sayısını döndürür.

meyveler.unshift("Ayva"); // ["Ayva", "Armut", "Muz", "Çilek", "Karpuz"]

//? reverse() ; Dizinin elemanlarını ters sıralar.

meyveler.reverse();
// ["Karpuz", "Çilek","Muz", "Armut", "Ayva"]

//!.sort() ; Diziyi naturel order olarak sıralar.

meyveler.sort(); // ["Armut", "Ayva", "Çilek", "Karpuz", "Muz"]

//? splice() ; Dizi'nin içeriklerini, diziye ait öğeleri kaldırarak veya yeni öğeler
//? ekleyerek ve/veya mevcut öğeleri silerek değiştirir.

// TODO Önemli Not ;
//! 1. kod --> Eleman eklenecek index
//! 2. kod --> 1 ise o indexteki elemanı silerek, 0 ise elemanı silmeden ekle
//! 3. kod --> Eklenecek veri

meyveler.splice(1, 0, "Erik"); // ["Armut", "Erik", "Ayva", "Çilek", "Karpuz", "Muz"]

meyveler.splice(4, 1, "Üzüm"); // ["Armut", "Erik", "Ayva", "Çilek", "Üzüm", "Muz"]

// TODO *********************************************************************************************

// TODO Destekleyici Bir Örnek

const meyveler1 = ["Elma", "Armut", "Muz", "Kivi"];

console.log(meyveler1.pop());
// Son elemanı siler...Kivi silindi. ["Elma", "Armut", "Muz"]

console.log(meyveler1.push("Ananas"));
// Sonuna Ananas Eklendi. ["Elma", "Armut", "Muz", "Ananas"]

console.log(meyveler1.shift());
// İlk eleman silindi. ["Armut", "Muz", "Ananas"]

console.log(meyveler1.unshift("Çilek"));
// İlk sıraya Çilek eklendi.["Çilek", "Armut", "Muz", "Ananas"]

console.log(meyveler1.reverse());
// Dizi index sıralaması terslendi. ["Ananas", "Muz", "Armut", "Çilek"]

console.log(meyveler1.sort());
// Harf sırasına göre sıralandı.["Ananas", "Armut", "Muz", "Çilek"]

console.log(meyveler1.splice(1, 0, "Kiraz"));
// 1. indeksine Kiraz eklendi. ["Ananas", "Kiraz", "Armut", "Muz", "Çilek"]

// TODO *********************************************************************************************

//? Dizi Erişim Methoodları (Diziyi Değiştirmez)

//! .concat() Dizi ile bir başka diziyi veya değeri birleştirerek yeni bir dizi döndürür.
//? .includes() Dizinin belirtilen bir elemanı içerip içermediğine bakar. Eğer içeriyorsa
//?  true, içermiyorsa false döndürür. Kapsıyor mu ?
//! .join() bir Dizi içerisinde yer alan bütün elemanları birleştirerek String bir ifade
//!  olarak geri döndürür.
//? .slice() Bir Dizinin elemanlarını, belirtilen başlangıç ve bitiş indeksine göre
//?  kopyasını oluşturarak ve döndürür.
//! .toString() Dizinin içerisindeki elemanları tek bir String olarak döndürür.
//? .indexOf() Belirtilen elemanın dizide ilk görüldüğü indeks numarasını döndürür.
//! .lastIndexOf() Belirtilen elemanın dizide görüldüğü en son indeks numarasını döndürür.
//!  Bulunmazsa  -1 döndürür.

const sayılar = [3, 4, 5, 2, "2", "üc", "bes", 5, 2, 7];

//? .includes() Dizinin belirtilen bir elemanı içerip içermediğine bakar. Eğer içeriyorsa
//?  true, içermiyorsa false döndürür. Kapsıyor mu ?

console.log(sayılar.includes("5")); //false
console.log(sayılar.includes(5)); // true

//? .indexOf() Belirtilen elemanın dizide ilk görüldüğü indeks numarasını döndürür.

console.log(sayılar.indexOf(2)); // 3

//! .lastIndexOf() Belirtilen elemanın dizide görüldüğü en son indeks numarasını döndürür.
//!  Bulunmazsa  -1 döndürür.

console.log(sayılar.lastIndexOf(5)); // 7

console.log(sayılar.indexOf(2, 4)); // 8  ikinci 2 yi döndürür (4. indexten sonra aramaya başlar)
console.log(sayılar.indexOf(5, 3)); // 7

//! .join() bir Dizi içerisinde yer alan bütün elemanları birleştirerek String bir ifade
//!  olarak geri döndürür.
console.log(sayılar.join("-")); // 3-4-5-2-2-üc-bes-5-2-7
// join default virgüllerle ayırarak diziden kurtarır ama istersek
// " " yazarak boşluklarla, "-" yaparak - lerle ayırabiliriz...

//! .toString() Dizinin içerisindeki elemanları tek bir String olarak döndürür.
console.log(sayılar.toString()); // 3,4,5,2,2,üc,bes,5,2,7

// Arabalar isminde bir liste oluşturup diğer methodlara bakalım...

const arabalar = ["bmw", "mercedes", "Volvo", "sahin", "anadol"];

//? .slice() Bir Dizinin elemanlarını, belirtilen başlangıç ve bitiş indeksine göre
//?  kopyasını oluşturarak ve döndürür.
console.log(arabalar.slice(2)); // 2. indexli elemandan sonuna kadar

console.log(arabalar.slice(1, 3)); // ilk index dahil, 2. sırada yazan index e kadar (2. dahil değil)

//! .concat() Dizi ile bir başka diziyi veya değeri birleştirerek yeni bir dizi döndürür.

const birleşik = sayılar.concat(arabalar, true, false, [3, 4, 5], meyveler);

console.log(birleşik); // Hepsini yazdıran method
/*
(26)[3, 4, 5, 2, '2', 'üc', 'bes', 5, 2, 7, 'bmw', 'mercedes', 'Volvo', 'sahin', 
'anadol', true, false, 3, 4, 5, 'Armut', 'Erik', 'Ayva', 'Karpuz', 'Üzüm', 'Çilek']
*/

// TODO *********************************************************************************************

// TODO Destekleyici Bir Örnek

const sayılar1 = [1, 2, "3", "Üç"];
sayılar1.includes(2); // true
sayılar1.includes(3); // false
sayılar1.includes("3"); // true

const elementler = ["Ateş", "Hava", "Su"];
console.log(elementler.join(",")); // Ateş,Hava,Su
console.log(elementler.join("")); // AteşHavaSu
console.log(elementler.join("-")); // Ateş-Hava-Su

const hayvanlar = ["fil", "kuş", "deve", "fare", "kedi"];
console.log(hayvanlar.slice(2)); // (3) ['deve', 'fare', 'kedi']
console.log(hayvanlar.slice(2, 4)); // (2) ['deve', 'fare']
console.log(hayvanlar.slice(1, 5)); // (4) ['kuş', 'deve', 'fare', 'kedi']

// TODO *********************************************************************************************
