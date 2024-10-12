// TODO **********************************************************************************************
//! Bilgisayar 1-20 arasında bir sayı tut

let rastgeleSayi = Math.floor(Math.random() * 20 + 1);
let puanPc = 10;
let rekorPc = 0;

// TODO **********************************************************************************************

//! Her kontrol et butonuna tıklandığında çalıştırdım
document.querySelector(".kontrol").onclick = function () {
  //Tahminim doğruysa
  const tahmin = document.querySelector(".tahmin").value;
  // 1 Açılış
  if (tahmin == rastgeleSayi) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".question").textContent = rastgeleSayi;
    document.querySelector(".mesaj").textContent = "🎉Tebrikler Bildiniz";

    //! Rekoru güncelle
    //?  1 Nested Açılış
    if (puanPc > rekorPc) {
      rekorPc = puanPc;
      document.querySelector(".rekor-skor").textContent = puanPc;
    } //? 1 Nested kapanıs
  } // 1 Kapanış
  // Tahmin yanlış ise ;
  //? iki başlangıç
  else {
    //? 2 Nested Açılış
    if (puanPc > 1) {
      puanPc--;
      let mesaj = document.querySelector(".mesaj");
      // Ternary
      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Arttır ⬆️")
        : (mesaj.textContent = "Azalt ⬇️");
      document.querySelector(".skor").textContent = puanPc;
    } else {
      document.querySelector(".mesaj").textContent = "Oyunu kaybettiniz 😢";
      document.querySelector(".skor").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    } //? 2 Nested Kapanış
  } //? iki bitis
};

// TODO **********************************************************************************************

//! Tekrar butonuna basıldığında baslangıç değerleri yüklensin...

document.querySelector(".tekrar").onclick = () => {
  rastgeleSayi = Math.floor(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector(".question").textContent = "?";
  document.querySelector(".mesaj").textContent = "Tahmine Baslanıyor!!!";
  puanPc = 10;
  document.querySelector(".skor").textContent = puanPc;
  document.querySelector(".tahmin").value = " ";
};

// TODO **********************************************************************************************

//! Klavyeden bir tusa basıldığında çalış

document.querySelector(".tahmin").onkeydown = function (klavye) {
  if (klavye.keyCode == 13) {
    // enter
    document.querySelector(".kontrol").onclick();
  }
  if (klavye.keyCode == 82) {
    // r harfi
    document.querySelector(".tekrar").onclick();
  }
};
