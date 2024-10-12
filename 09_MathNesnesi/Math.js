// TODO *******************************************************************************/

//! Math İşlemleri

// Pi sayısını yazdırmak istersek ;
document.write(Math.PI + "<br>"); // 3.141592653589793

// round() methodu ile yuvarlama yapıyoruz...
// (0.5 in altı aşağıya üstü yukarıya yuvarlanır)
document.write(Math.round(7.4) + "<br>"); // 7
document.write(Math.round(7.8) + "<br>"); // 8

// pow() methodu ile üs alıyoruz...
document.write(Math.pow(5, 3) + "<br>"); // 5 üssü 3 = 125 sonucunu verdi...

// sqrt() methodu ile karekök alıyoruz...
document.write(Math.sqrt(81) + "<br>"); // 9

// abs() methodu ile mutlak değer alıyoruz...
document.write(Math.abs(-27) + "<br>"); // 27

// ceil() methodu ile sayıları yukarıya yuvarlıyoruz...
document.write(Math.ceil(11.2) + "<br>"); // 12

// floor() methodu ile sayıları aşağıya yuvarlıyoruz...
document.write(Math.floor(11.9) + "<br>"); // 11

// min() methodu ile en küçük sayıyı buluyoruz...
document.write(Math.min(11, 9, -25, 678, -45, -67, 789) + "<br>"); // -67

// max() methodu ile en büyük sayıyı buluyoruz...
document.write(Math.max(11, 9, -25, 678, -45, -67, 789) + "<br>"); // 789

// TODO *******************************************************************************/

//! Math Sabitleri

// Toplamda 8 sabit mevcuttur..

document.write("*******************" + "<br>");
document.write("Math Sabitleri" + "<br>");

document.write(
  Math.E +
    "<br>" +
    Math.PI +
    "<br>" +
    Math.SQRT2 +
    "<br>" +
    Math.SQRT1_2 +
    "<br>" +
    Math.LN2 +
    "<br>" +
    Math.LN10 +
    "<br>" +
    Math.LOG2E +
    "<br>" +
    Math.LOG10E +
    "<br>"
);
document.write("*******************" + "<br>");

/*
Cevapları sırasıyla şu şekildedir..
2.718281828459045
3.141592653589793
1.4142135623730951
0.7071067811865476
0.6931471805599453 logaritma
2.302585092994046 logaritma
1.4426950408889634 logaritma
0.4342944819032518 logaritma
*/

// TODO *******************************************************************************/

//! random() Methodu ve Uygulama

// random() ile rastgele sayı buluruz. Ama 0 ile 1 arasında sonuç verir.
document.write(Math.random() + "<br>"); // 0.43122003263534947

// Not : Eğer istenilen aralıkta rastgele bir sayı bulsun istiyorsak floor ile kullanmam gerekecek..
document.write(Math.floor(Math.random() * 10) + "<br>"); // 0 dahil ama 10 hariç sayıyı döndürür..

// yazılan sayıda dahil olsun istiyorsak + 1 koymamız lazım
document.write(Math.floor(Math.random() * 10) + 1 + "<br>"); // 0 dahil ama 10 hariç sayıyı döndürür..

// Uygulama

// Not ; Butonları index sayfasında oluşturduk...

function rastgele(max, min) {
  return (document.getElementById("deneme").innerHTML = Math.floor(
    Math.random() * (max - min) + min
  ));
}
