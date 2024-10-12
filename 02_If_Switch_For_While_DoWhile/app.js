//TODO ************************************************************************************************/

//! if Else

// Örnek ;
const yas = 18;
if (yas < 18) {
  console.log("cocuk");
} else {
  console.log("yetiskin"); // yetiskin

  // Örnek ;
  const yasim = 16;
  let result;
  if (yasim <= 3) {
    result = "bebek";
  } else if (yasim < 14) {
    result = "çocuk";
  } else if (yasim < 18) {
    result = "ergen";
  } else {
    result = "yetiskin";
  }
  console.log(result); // ergen

  // TODO --> Örnek ; Basit Hesap Makinesi 1 İf Else

  const s1 = Number(prompt("Birinci sayı"));
  const islem = prompt("İşlemi giriniz");
  const s2 = Number(prompt("İkinci sayı"));
  let sonuc;
  if (islem == "+") {
    sonuc = s1 + s2;
  } else if (islem == "-") {
    sonuc = s1 - s2;
  } else if (islem == "*") {
    sonuc = s1 * s2;
  } else if (islem == "/") {
    sonuc = s1 / s2;
  }
  console.log(sonuc);

  // 2. yazdırma şekli...
  console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
  //   mesela=>  3       +       5  =     8

  // TODO --> Örnek ; Basit Hesap Makinesi 2 İf Else

  const sayı1 = Number(prompt("Birinci sayı"));
  const işlem = prompt("İşlemi giriniz");
  const sayı2 = Number(prompt("İkinci sayı"));
  let sonuç;

  if (işlem == "+") {
    sonuç = sayı1 + sayı2;
  } else if (işlem == "-") {
    sonuç = sayı1 - sayı2;
  } else if (işlem == "/") {
    if (!sayı2) {
      alert("Bölen Sıfır olamaz");
    } else {
      sonuç = sayı1 / sayı2;
    }
  } else if (işlem == "*") {
    sonuç = sayı1 * sayı2;
  } else {
    console.log("yanlış işlem");
  }
  console.log(sayı1 + işlem + sayı2 + "=" + sonuç); //

  // Örnek ;
  const age = 20;
  const cinsiyet = "erkek";
  const sağlıklı = true;
  const koşul = age >= 18 && cinsiyet == "erkek" && sağlıklı;
  if (koşul) {
    console.log("Askerlik yapmalı");
  } else {
    console.log("Askerlik yapması gerekmez");
  }

  // Örnek ;
  var birth = Number(prompt("Lütfen dogum yilinizi giriniz"));
  var todays = 2021;
  var yasiniz = todays - birth;

  console.log(todays);

  if (yasiniz < 18 && yas > 0) {
    console.log("ehliyet alamazsin");
  } else if (yas >= 18) {
    console.log("ehliyet alabilirsin");
  } else {
    console.log("yanlis veri");
  }

  //TODO ************************************************************************************************/
  //! Ternary

  // Ternary ile tek satırlık karar işlemleri yapılır.
  // Ternary tek satırlık karar işlemleri uygun olduğundan JS’de yaygın bir şekilde kullanılır.
  // 3 parametre alır. (Koşul ? ifade1 : ifade2)
  // Eğer Koşul doğru ise ifade1, yanlış ise ifade2 çalıştırılır.

  // Örnek ;

  const hiz = 90;
  const mesaj1 = hiz >= 120 ? "Hızlı" : "Yavaş";
  console.log(mesaj1); // Yavaş

  const mesaj2 = hiz >= 120 ? "Hızlı" : hiz >= 90 ? "Normal" : "Yavaş";
  console.log(mesaj2); // Normal

  // Örnek ;
  const name2 = prompt("Adinizi giriniz:"); // name yazınca uyarı veriyor, o yüzden name2

  // const age1 = +prompt("Yasinizi giriniz:"); ilk yol sadece + da sıkıntı oluyor, olmasın diye
  const age1 = Number(prompt("Yasinizi giriniz:"));
  const healt = prompt("Saglikli misiniz e/h");

  age1 >= 18;
  console.log(`${name2} ehliyet alabilir`);
  console.log(`${name2} ehliyet alamaz`);

  const result1 =
    age1 >= 18 && healt == "e"
      ? `${name2} ehliyet alabilir`
      : `${name2} ehliyet alamaz`;

  // ! emojisense eklentisi yükle==> emoji kısayol (mac te üstte file ın yanındaki edit ->emojiler)
  //eklentiden sonra alttakiler kısayol
  // Mac: cmd + i;
  // Linux: ctrl + alt + i;
  // Windows: ctrl + i;
  console.log(
    age1 >= 18 && healt == "e"
      ? `${name2} ehliyet alabilir 🥳`
      : `${name2} ehliyet alamaz 🥺`
  );

  //? üsttekini alttaki gibi bir değişkene atayıp alert le yazdırabiliriz

  //const result1 = age1 > 18 && healt == "e" ? "Ehliyet Alabilir" : "Ehliyet Alamaz";
  console.log(result1); // hem console da
  alert(result1); // hem pop-art olarak sonucu çıkarttık

  // Örnek ;
  const borç = true;
  const maaş = 3000;
  console.log(borç && maaş > 2825.9 ? "Kredi Alabilir 😄" : "Kredi Alamaz 😈"); // Kerdi Alabilir
  // !borç=> borç false ise yani mesela 0 ise

  /* 
 MacOS işletim sisteminde Emoji ve Semboller penceresini açmak için; klavyeden 'control' , 
 'command' ve 'space' tuşlarına aynı anda basın. Ardından ilgili
 metin içeriğinde ya da sohbet penceresinde emoji klavyesi karşınıza çıkacaktır.
 Metin girişi sırasında Windows logo(pencere) tuşu + . (nokta) yazın. 
 Emoji klavyesi görüntülenir.
 Fareyle bir emoji seçin veya kullanılabilir emojiler arasında istediğiniz emojiyi 
 aramak için yazmaya devam edin.
 */
  //TODO ************************************************************************************************

  //! Break ve Continue Komutları

  // Break Komutu için Örnek : 1 den 10 kadar olan for yazın ve 4 te dongu kırılsın
  var ji;

  for (ji = 1; ji <= 10; ji++) {
    if (ji == 4) {
      break;
    }
    document.write(ji + "<br>");
  }

  document.write("***************" + "<br>");

  // Continue Komutu için Örnek : 1 den 10 kadar olan for yazın ve 7yi görmezden gelip dongu devam etsin.
  var ji;

  for (ji = 1; ji <= 10; ji++) {
    if (ji == 7) {
      continue;
    }
    document.write(ji + "<br>");
  }

  document.write("***************" + "<br>");

  //TODO ************************************************************************************************

  //! Switch Case

  // Örnek ; Girilen bir sayının onlar ve birler basamağındaki rakamlarını yazı ile yazdıran program:

  var sayi = prompt("Nolur iki basamaklı bir sayı girin :)");
  var birler = sayi % 10;

  switch (birler) {
    case 1:
      rakamIsmi = "Bir";
      break;
    case 2:
      rakamIsmi = "İki";
      break;
    case 3:
      rakamIsmi = "Üç";
      break;
    case 4:
      rakamIsmi = "Dört";
      break;
    case 5:
      rakamIsmi = "Beş";
      break;
    case 6:
      rakamIsmi = "Altı";
      break;
    case 7:
      rakamIsmi = "Yedi";
      break;
    case 8:
      rakamIsmi = "Sekiz";
      break;
    case 9:
      rakamIsmi = "Dokuz";
      break;
    case 0:
      rakamIsmi = "Sıfır";
      break;
  }
  console.log(rakamIsmi);

  // Örnek ;

  const haftaninGunu = 4;
  switch (haftaninGunu) {
    case 1:
      gun = "Pazartesi";
      break;
    case 2:
      gun = "Salı";
      break;
    case 3:
      gun = "Çarşamba";
      break;
    case 4:
      gun = "Perşembe";
      break;
    case 5:
      gun = "Cuma";
      break;
    case 6:
      gun = "Cumartesi";
      break;
    case 7:
      gun = "Pazar";
      break;
    default:
      alert("Gün 1-7 arasında olmalıdır");
      break;
  }
  console.log(gun); // Perşembe

  //TODO ************************************************************************************************

  //! Örnek ;

  var marka = "Audi";
  var model = "q3";
  var vites = "otomatik";

  if (vites == "otomatik") {
    console.log(marka + " " + model + " araba otomatik vitestir.");
  } else {
    console.log(marka + " " + model + " araba otomatik vites DEGILDIR.");
  }

  /*
  var sanzuman = Number(prompt("Lütfen vites no girin. 1 veya 2 yazınız..."));
  if (sanzuman == 1) {
    console.log(marka + " " + model + " araba otomatik vitestir.");
  } else if (sanzuman == 2) {
    console.log(marka + " " + model + " araba otomatik vites DEGILDIR.");
  } else {
    console.log("yanlis veri girisi");
  }

  switch-case statement ile yaparsak

  switch (sanzuman) {
    case 1:
      console.log(marka + " " + model + " araba otomatik vitestir.");
      break;
    case 2:
      console.log(marka + " " + model + " araba otomatik DEGILDIR.");
      break;
    case 3:
      console.log(marka + " " + model + " araba TRIPTRONIC tir..");
      break;
    default:
      console.log("yanlis veri girisi");
  */

  //TODO ************************************************************************************************

  //! Döngüler

  /*  
  Programlarda tekrarlanan işlemleri nasıl yapabiliriz.
 • Örneğin Ekrana adımızı 100 kere adımızı yazdırmak istiyoruz.
 • Girilen 1000 adet sayıyı toplamak istiyoruz.
 • Tek tek yazmak çok uzun kod demektir ve çoğu zaman mümkün değildir.
 • Çözüm Döngü kullanmak.
 • Döngüler her programlama dilinde bulunmaktadır ve tekrarlanan işlemleri
  çok daha az kod kullanarak gerçekleştirmemize olanak sağlar.
 • Javascript dili bir çok döngüyü desteklemektedir.
 • FOR, FOR IN, FOR OF, FOREACH
 • WHILE, DO-WHILE
  */

  //TODO ************************************************************************************************

  //! For Döngüsü

  // Örnek ; Konsola 10 kere bir ifade yazdıran program yazınız...

  // 1. yol
  for (let i = 1; i <= 10; i++) {
    console.log("Merhaba");
  }
  // 2. yol
  for (let i = 1; i <= 10; i++) {
    console.log(`${i}-Merhaba`);
  }

  // Örnek ; Asal sayı tespiti yapan program yazınız...

  const number = 10;
  let asal = true;

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      asal = false;
      break;
    }
  }

  const asalMi = asal ? "Asal" : "Asal degil";
  console.log(asal ? "Asal" : "Asal degil"); // Asal degil

  // Örnek ; 1 den 10 kadar olan sayıların toplamını yazdıran program yazınız...

  let toplam = 0;
  for (let t = 1; t <= 10; t++) {
    toplam += t;
  }
  console.log(toplam);

  // Örnek ;  1 den n kadar olan sayıların toplamını yazdıran program.
  //? NOT: n prompt ile dışarıdan girilebilir.

  const n = prompt("Hangi Sayıya kadar toplamak istiyorsunuz:");
  let toplam1 = 0;
  for (let t = 1; t <= n; t++) {
    toplam1 += t;
  }
  console.log(toplam1);

  // Örnek ; Javascript yazısının fontunu her defasında 5 punto büyüterek 10 kere yazdırınız...

  for (let i = 0; i <= 10; i++) {
    document.write(
      "<span style='font-size:" + i + 5 + "px;'> Javascript</span><br>"
    );
  }

  // Örnek ;

  var sehirler = ["Adana", "Bursa", "Malatya", "Izmir", "Ankara", "Istanbul"];
  console.log(sehirler);

  for (var i = 0; i < sehirler.length; i++) {
    if (i % 2 == 1) console.log(sehirler[i]);
  }

  //TODO ************************************************************************************************

  //! While Döngüsü

  // While döngüsü yapı olarak for döngüsünden farklı olsa da benzer işleri yapmak içindir.
  // Döngü koşulu doğru olduğu müddetçe döngü tekrar ettirilir. Yanlış olur olmaz döngüden çıkılır.

  // Örnek ; 10 kere konsola Merhaba yazdıran uygulamayı while döngüsü ile yazınız.

  let i = 1;
  while (i <= 10) {
    console.log(i + " Merhaba");
    i++;
  }

  // Örnek ;

  let not2 = prompt("Lütfen while için 0-100 arasında bir not giriniz:");
  while (not2 < 0 || not2 > 100) {
    console.error("Girilen not 0-100 arasında olmalıdır.");
    not2 = prompt("0-100 arasında bir not giriniz:");
  }
  console.log("Girdiğiniz not 0-100 arasındadır");

  // Örnek ; Klavyeden e kelimesi girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

  let adi = prompt("b yaz enter la");
  let t = 1;
  while (adi != "e") {
    //true yerine 1 de yazılabilir, bunlar hep true demek.0=false olur
    adi = prompt(t + ".kisinin adını giriniz:");
    t++;
    console.log(adi);
  }

  // Örnek ;

  var userName = "guest";
  var password = "password";
  var check = false;

  while (check == false) {
    var k_user = prompt("lütfen kullanici adi giriniz");
    var k_password = prompt("lütfen sifrenizi giriniz");

    if (k_user == userName && k_password == password) {
      document.write("SIFRE DOGRU");
      console.log("Sifre dogru, Hosgeldiniz");
      check = true;
    } else {
      document.write("SIFRE YANLIS");
      console.log("sifre yanlis lütfen tekrar deneyiniz");
    }
  }

  //TODO ************************************************************************************************

  //! Do-While Döngüsü

  /* 
  Do-While döngüsü yapı olarak while döngüsüne çok benzer. 
  Tek farkı döngü koşulunun en sonda kontrol edilmesidir.
  Bu yüzden bir do-while döngüsü en az bir kere çalışır.
  */

  // Örnek ; Dışarıdan 0-100 (not) dışında bir değer girilmesini engelleyen kodu yazınız.

  let not;
  do {
    not = prompt("0-100 arasında bir not giriniz:");
  } while (not < 0 || not > 100);
  console.log("Giridiğiniz not 0-100 arasındadır");
}
