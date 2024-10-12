//! String yazdırma kuralları...

//? Not : Bir String içerisinde Çift tırnak varsa içeride tekrar çift tırnak kullanılmaz...
//? Ters işaretler olmalı...
//? Not : Tek tırnak ta da tek tırnak kullanılmaz.. Ters işaretler olmalı...

var str;
str = "Başarı 'Gayrete' Aşıktır...";
document.write(str + "<br>"); // Başarı 'Gayrete' Aşıktır...

var str;
str = 'Başarı "Gayrete" Aşıktır...';
document.write(str + "<br>"); // Başarı "Gayrete" Aşıktır...

// TODO --> İstisnası var...
//? Yani aynı işaretli olsun diyorsak ters --\-- koymalıyız tırnaklardan önce...
var str;
str = 'Başarı "Gayrete" Aşıktır...';
// "Başarı \"Gayrete\" Aşıktır..."
// Not : Save edince düzeltildiği için kendiliğinden ytuma almış oldum yazım şeklini...
document.write(str + "<br>"); // Başarı "Gayrete" Aşıktır...

//TODO ************************************************************************************************

//! String Methodları...

var str;
str = "Başarı 'Gayrete' Aşıktır, Aşıktır 'Gayrete' Başarı...";

// length() ; String in uzunluğunu verir...
document.write("String Uzunluğu : " + str.length + "<br>"); // String Uzunluğu : 53

// search() ; Kaçıncı indexte olduğunu bulup yazdırır.. tabiki ilk bulduğu kelimede..
document.write("String Bulma : " + str.search("Gayrete") + "<br>"); // String Bulma : 8

// slice() ; String i istediğimiz yerden bölmeye yarar..
document.write("String Bulma : " + str.slice(7, 17) + "<br>"); // String Bulma : 'Gayrete'

// slice() ; - işaretiyle tersten yazdırır..
document.write("String Bulma Sondan: " + str.slice(-17, -7) + "<br>"); // String Bulma Sondan: ayrete' Ba

// substring(); Nerden başlayıp nereye kadar alınağını belirler.. Slice ile aynıdır..
document.write("String Kesme : " + str.substring(7, 17) + "<br>"); // String Kesme : 'Gayrete'

// substr() ; Verilen indexlerin rakamlarını kelime olarak getirir.
// Yani (7,17) --> 7 'Gayrete' den başladığı için alır burayı..
// 17 de Aşıktır da başladığı için o kelimeyi de getirir.
// Substring den farklı olarak sondan da istediğimiz yeri ilk index e (-) vererek almaya yarar..
document.write("String Substr : " + str.substr(7, 17) + "<br>"); // String Kesme : 'Gayrete' Aşıktır

// Sondan yazdırmak istersek sadece ilk index e (-) vermemiz yeterli olacaktır..
document.write("String Substr : " + str.substr(-17, 6) + "<br>"); // String Substr : ayrete

// replace() ; Değiştirmeye yarar..
document.write("String Replace : " + str.replace("Gayrete", "Azme") + "<br>");
// String Replace : Başarı 'Azme' Aşıktır, Aşıktır 'Gayrete' Başarı...

// --/Gayrete/g yazarsak tüm aynı kelimeleri seçer ve Azme ile değiştirir...
document.write("String Replace --/ /g-- : " + str.replace(/Gayrete/g, "Azme") + "<br>");
// String Replace --/ /g-- : Başarı 'Azme' Aşıktır, Aşıktır 'Azme' Başarı...

var str1;
str1 ="ÖYLE BİR GÜN GELECEK Kİ YAŞANILAN TÜZ ZORLUKLAR GÜZELLİKLERE TEBDİL OLACAK";

// toLowerCase() ; Hepsini küçük harf yapmaya yarar..
document.write("String toLowercase : " + str1.toLowerCase() + "<br>");
// String toLowerCase : öyle bi̇r gün gelecek ki̇ yaşanilan tüz zorluklar güzelli̇klere tebdi̇l olacak

// toUpperCase() ; Hepsini büyük harf yapmaya yarar..
document.write("String toUppercase : " + str.toUpperCase() + "<br>");
// String toUppercase : BAŞARI 'GAYRETE' AŞIKTIR, AŞIKTIR 'GAYRETE' BAŞARI...

// concat() ; Birleştirmeye yarar...
var ad = "Ali";
var soyad = "Canlı";
document.write("String Concat : " + ad + " ".concat(soyad) + "<br>");
// String Concat : Ali Canlı

// trim() ; Boşlukları kesmeye yarar...
var bosluk = "                     Boşlukları dolduralım";
document.write("String Trim : " + bosluk.trim() + "<br>");
// String Trim : Boşlukları dolduralım

// charAt() ; ilk karakteri getirir...
document.write("String charAt : " + soyad.charAt() + "<br>"); // String charAt : C

// charCodeAt() ; ASCII kodunu getirir...
document.write("String charCodeAt : " + soyad.charCodeAt() + "<br>"); // String charCdeAt : 67

// split() ; İstediğimiz yerden bölmeye yarar...
var str2;
str2 = "sinema , kitap , yazılım";
document.write("String Split : " + str2.split("") + "<br>") 
// String Split : s,i,n,e,m,a, ,,, ,k,i,t,a,p, ,,, ,y,a,z,ı,l,ı,m

//TODO ************************************************************************************************

//! Uygulama

