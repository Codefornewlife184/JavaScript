/*
! Kısaca DOM

• HTML dökümanları için standart nesne modeli ve programlama
arabirimidir (API ).
• DOM şunları tanımlar;
• HTML elemanlarını Nesneler (objects) olarak,
• Tüm HTML elemanlarını özelliklerini (properties)
• Tüm HTML elemanlarının erişimine olanak sağlayan metotları (methods),
• Tüm HTML elemanları için olayları (events)
• Diğer bir ifade ile HTML elemanlarının okunması, değiştirilmesi,
eklenmesi ve silinmesi gibi işlemlerin nasıl yapılacağını belirleyen bir
standarttır.
*/

//TODO Dom Elemanları

//! 1-getElementById ; Bir elemanı id ye göre bul... % 20 oranında bu kullanılır..

const paragraf = document.getElementById("paragraf").style;
// document.getElementById("paragraf").style; bunu paragraf a atamış oldum...
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "20px";
paragraf.fontFamily = "cambria";
paragraf.fontStyle = "italic";

const buton = document.getElementById("btn");
// document.getElementById("btn").style; bunu buton a atamış oldum...
// style yazmadık eğer yazarsak sınırlandırmış oluruz... İlgili yere ekleyerek yazabiliriz...
buton.style.width = "100px";
buton.style.color = "red";
buton.style.fontSize = "18px";
buton.textContent = "ARA";
//*** textContent --> button gibi tag lerin içeriğindeki yazıyı değiştirmek istersek kullanırız...

//TODO ************************************************************************************************

//! 2-getElementsByTagName ; Bir elemanı Tag (Etiket) adına göre bul
// Bu kullanım tercih edilmiyor...

const resim = document.getElementsByTagName("img");

resim[0].style.width = "250px"; // resim [0] ile indexe göre aldığından 1. resmi ayarlıyor
resim[0].style.height = "250px"; // resim [0] ile indexe göre aldığından  1. resmi ayarlıyor
resim[1].style.border = "11px solid red"; // resim [1] ile indexe göre aldığından 2. resmi ayarlıyor

//TODO ************************************************************************************************

//! 3-getElementsByClassName ; Bir elemanı Class (Sınıf) adına göre bul
//! ama getElementsByTagName gibi dizi şeklinde algılıyor.

// H1 başlığında değişiklikler yapmak istersek ;
const header = document.getElementsByClassName("H1");
header[0].style.textAlign = "center";
header[0].innerHTML = "DOM Manipülasyonu Çok ilginç";
header[0].style.fontSize = 25;
header[0].style.fontFamily = "candara";
header[0].style.color = "white";

//TODO ************************************************************************************************

//! 4-querySelector(CSS seçici) ; Bir elemanı id, class, özellik,
//! tür ve değere göre seçmek için kullanılır. Eşleşen ilk elemanı seçer.
// ! En çok kullanılan çağırma yolu.. % 80 oranında kullanılır...

document.querySelector(".sayfaAdi").textContent = "DOM SELECTOR KAVRAMI👋";
// document.querySelector(".sayfaAdi") --> class isminde "." koyuyoruz...

// document.querySelector("#govde") --> id isminde "#" (diyez işareti) koyuyoruz...
document.querySelector("#govde").style.backgroundImage =
  "linear-gradient(green,yellow,red,pink)";

//TODO ************************************************************************************************

//TODO DOM Olayları--Events

/*
DOM sayesinde JavaScript, HTML olayları ile etkileşimi halinde olabilir.
• Örneğin, kullanıcı bir HTML elemanına tıkladığında (bir olay meydana geldiğinde) bir
Javascript kodu çalıştırılabilir.
• Bir olay meydana geldiğinde bir JS kodu çalıştırmak için ilgili elemanın olay özelliği
kullanılır.
• HTML olayları için bir çok örnek verilebilir.
• Kullanıcı Fareyi tıkladığında (onclick)
• Bir web sayfası yüklendiğinde (onload)
• Fare bir elemanın üzerine geldiğinde (onmouseover)
• Fare bir elemanın üzerinden ayrıldığında (onmouseout)
• Bir elemanın içeriği değiştiğinde (onchange)
• Bir HTML formu gönderildiğinde (onsubmit)
• Klavyeden bir tuşa basıldığında (onkeyup)
*/

//! onclick ; Kullanıcı Fareyi tıkladığında

//1.resme tıkladığımızda img ler yer değiştirsin

document.querySelector(".bir").onclick = function () {
  document.querySelector(".bir").src = "./img/logo2-1.png";
  document.querySelector(".iki").src = "./img/js_logo.png";
};

//! onmouseover ; Fare bir elemanın üzerine geldiğinde
//! onmouseout ; Fare bir elemanın üzerinden ayrıldığında

const h = document.querySelector(".H1"); // h isminde atama yaptım..

h.onmouseover = function () {
  h.style.color = "red";
  h.style.backgroundColor = "gray";
};

h.onmouseout = function () {
  h.style.color = "white";
  h.style.backgroundColor = "red";
};
