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

// Toplamda 8 sabit mevcuttur..Bunlar değiştirilemez...

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
document.write(Math.random() + "<br>"); // değişken sonuç verir...0 ile 1 arasında sonuç verir.

// Not : Eğer istenilen aralıkta rastgele bir sayı bulsun istiyorsak floor ile kullanmam gerekecek..
document.write(Math.floor(Math.random() * 10) + "<br>"); // 0 dahil ama 10 hariç sayıyı döndürür..

// yazılan sayıda dahil olsun istiyorsak + 1 koymamız lazım
document.write(Math.floor(Math.random() * 10) + 1 + "<br>"); // 0 dahil ama 10 hariç sayıyı döndürür..

// TODO *******************************************************************************/

//! Uygulama

var num = 15.123456789 ;

// Toplamda 3 basamaklı sayı kullan...
document.write(num.toPrecision(3)+ "<br>"); // 15.1 toPrecision(?) kac basamak istersek onu yazdırır...

// Ondalık Kısmı 3 basamakta sınırla...
document.write(num.toPrecision(5)+ "<br>"); // 15.123 veya to.Fixed(3) ile de olurdu...

// En yakın sayıya yuvarla...
document.write(Math.round(num)+ "<br>"); // 15

// Yukarıya yuvarla...
document.write(Math.ceil(num)+ "<br>"); // 16

// Aşağıya yuvarla...
document.write(Math.floor(num)+ "<br>"); // 15

// 1,2,5,10,56,675 sayılarının en büyüğünü ve en küçüğünü bulun...
document.write(Math.min(1,2,5,10,56,675)+ "<br>"); // 1
document.write(Math.max(1,2,5,10,56,675)+ "<br>"); // 675


// Sayı aralığını kullanıcıdan alın ve ikisi arasında rastgele sayı belirleyin...

var min = 75 ;
var max = 150 ;

document.write(Math.floor(min+Math.random()*(max-min))+ "<br>"); 
// 75 ile 150 arası rastgele değer gelir...

// TODO *******************************************************************************/

//! Uygulama

/*

Bir personelin yaptığı mesaiye göre aldığı maaşı hesaplayalım...
**Brüt Maaşı : 3700 tl
**Brüt Mesai : 10.3 tl
Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir ?

*/

var brutMaas = 3700;
var brutMesai = 10.3 ;
var mesaiSuresi = 42 ;

var toplamMaas = brutMaas+(brutMesai*mesaiSuresi);

document.write(toplamMaas+"<br>"); // 4132.6 tl...

var netMaas = toplamMaas-toplamMaas*0.25;
document.write(netMaas.toFixed()+"<br>"); // 3099.45 tl...

//! document.write(netMaas.toFixed()+"<br>"); // bu şekilde yazarsak 3099 olur...

// TODO *******************************************************************************/

//! Uygulama

// Not ; Butonları index sayfasında oluşturduk...

function rastgele(max, min) {
  return (document.getElementById("deneme").innerHTML = Math.floor(
    Math.random() * (max - min) + min
  ));
}



