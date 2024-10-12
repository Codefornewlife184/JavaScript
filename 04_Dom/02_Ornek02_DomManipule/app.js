//TODO ************************************************************************************************

//? Ara butonuna tıklandığında çalan telefon çıksın, zil çalsın

let resim = document.querySelector(".resim"); // resim e ulaştım
let zil = document.querySelector(".ses"); // audio ya ulaştım

// document.querySelector(".on").onclick = function () ile Ara butonuna ulaştım... ⬇️
document.querySelector(".on").onclick = function () {
  resim.src = "./img/img.gif"; // resim değiştirdik
  zil.play(); // sesi çalıştırdım play yaptık
};

//TODO ************************************************************************************************

//? Baglat butonuna basınca gif gelsin ses kesilsin

// document.querySelector(".off").onclick = function () ile Baglat butonunu cağırdık  ⬇️
document.querySelector(".off").onclick = function () {
  resim.src = "./img/telbağla.gif"; // resim değiştirdik
  zil.pause(); // zil sesini susturduk
};

//TODO ************************************************************************************************

//? Konus butona basınca yeni gif gelsin

// document.querySelector(".speak").onclick = function () ile Konus butonuna ulaştık  ⬇️
document.querySelector(".speak").onclick = function () {
  resim.src = "./img/telfırlat.gif"; //resimi yeni gif le değiştirdik
};

//TODO ************************************************************************************************

//? Ekle butonuna basıldığında yeni bir li ekle upuzun yol

// yeni girilen satiri saklamak icin bir li olusturduk.
// const yeniLi = document.createElement("li");
// yeni li icin textnode olusturduk
// const textNode = document.createTextNode(satir.value);
// olusturdugumuz texnode'u yeni li'ye bagladik.
// yeniLi.appendChild(textNode);
// yeni eklenen satiri var olan listeye (ul) baglayalim.
// liste.appendChild(yeniLi);

//? Ekle butonuna basıldığında yeni bir li ekle upuzun yol  ⬇️

const liste = document.querySelector(".liste"); // Dillerin girili olduğu listeye ulaştık

// Ekle butonuna ulaştık ⬇️
document.querySelector(".ekle").onclick = function () {
  const giris = document.querySelector(".dil"); // Dil girişi yapılan inputa ulaştık

  liste.innerHTML = liste.innerHTML + `<li>${giris.value}</li>`;
  // listeye inputa girilen değerleri liste olarak ekledik ⬆️
  giris.value = ""; // inputa girilen değeri ekleyince inputtan silinmesi için
};

//TODO ************************************************************************************************

//? Sil butonuna tıklandığında li elemanı silinsin

// Sil butonuna ulaştık ⬇️
document.querySelector(".sil").onclick = function () {
  liste.removeChild(liste.lastElementChild); // listenin çocuklarından son çocuğunu sildik
};

// Son olarak Listemize Başlık ekleyelim...
const parag = document.querySelector(".forH1");
parag.innerHTML = `<h1>${"Programlama Dilleri"}</h1>`;

//TODO ************************************************************************************************

//? Hatırlatma !!! setAttribute Methodu
// document.querySelector(".checkbox").setAttribute("type", "checkbox");

//? Klavyeden bir tuşa basıldığında büyüsün küçülsün

//! onkeyup --> klavyeye basıldığında demektir...
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");
  if (checkbox.checked) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

//TODO ************************************************************************************************

//? Mouse resmin üstüne geldiğinde aslan kükresin

// 1. yol ;

resim.onmouseover = function () {
  resim.src = "./img/aslan2.jpeg";
};

/*
2. yol ; addEventListener()

resim.addEventListener("mouseout",function (){
  resim.src = "./img/aslan2.jpeg";
 })
*/

//? Mouse resmin üstünden çekildiğinde aslan baksın

resim.onmouseout = function () {
  resim.src = "./img/aslan1.jpeg";
};

// javascript klavye kodları --> enter=13  delete=46

//! onkeydown= klavyedeki tuşa basıp elinizi çektiğinizde
document.querySelector(".dil").onkeydown = function (klavye) {
  if (klavye.keyCode == 13) {
    // enter ı çağırdık
    document.querySelector(".ekle").onclick();
  }
  if (klavye.keyCode == 46) {
    //delete yi çağırdık
    document.querySelector(".sil").onclick();
  }
};
