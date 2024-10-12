// TODO *******************************************************************************/

//! Tarihleri ve Saatleri Yazdırma Methodları

var tarih = new Date();
document.write(tarih + "<br>"); // Mon Nov 15 2021 12:52:42 GMT+0300 (GMT+03:00)

var tarih = new Date(2021, 3, 18, 15, 41, 32, 0);
document.write(tarih + "<br>"); // Sun Apr 18 2021 15:41:32 GMT+0300 (GMT+03:00)

// Tarih daha okunaklı olsun istiyorsak ve saati istemiyorsak ;
var tarih = new Date();
document.write(tarih.toDateString() + "<br>"); // Mon Nov 15 2021

// TODO *******************************************************************************/

//! get() Methodu

// get methodu ile yılı yazdırmak istersek ;

var tarih = new Date();
document.write(tarih.getFullYear() + "<br>"); // 2021

// get methodu ile ayı yazdırmak istersek ;
// Not ayları yazdırmak istediğimiz de Ocak ayının indexi 0 dır..
var tarih = new Date();
document.write(tarih.getMonth() + "<br>"); // 10 (Ekim ayındayız)

// get methodu ile ayın kaçıncı gün olduğunu yazdırmak istersek ;
var tarih = new Date();
document.write(tarih.getDate() + "<br>"); // 15 (Ekim 15 deyiz)

// get methodu ile günü yazdırmak istersek ;
var tarih = new Date();
document.write(tarih.getDay() + "<br>"); // 1 (Haftanın 1. günü yani pazrtesi olduğunu yazdırdı)

// get methodu ile saati yazdırmak istersek ;
var tarih = new Date();
document.write(tarih.getHours() + "<br>"); // 13 (Saat 1)

// get methodu ile dakikayı yazdırmak istersek ;
var tarih = new Date();
document.write(tarih.getMinutes() + "<br>"); // 6 (6 geçiyor)

// TODO *******************************************************************************/

//! set() Methodu

// set methodu ile istediğimiz yılı değiştirmek istersek
var tarih = new Date();
tarih.setFullYear(2012);
document.write(tarih + "<br>"); // Thu Nov 15 2012 13:11:58 GMT+0200 (GMT+03:00)

// set methodu ile istediğimiz ayı değiştirmek istersek
var tarih = new Date();
tarih.setMonth(1);
document.write(tarih + "<br>"); // Mon Feb 15 2021 13:13:25 GMT+0300 (GMT+03:00)

// set methodu ile istediğimiz günü değiştirmek istersek
var tarih = new Date();
tarih.setDate(1);
document.write(tarih + "<br>"); // Mon Nov 01 2021 13:14:16 GMT+0300 (GMT+03:00)

// set methodu ile istediğimiz günü değiştirmek istersek ;
var tarih = new Date();
tarih.setDate(tarih.getDate() + 40); // Bugün küü tarihe 40 gün eklersek
document.write(tarih + "<br>"); // Sat Dec 25 2021 13:18:39 GMT+0300 (GMT+03:00)

// set methodu ile saati yazdırmak istersek ;
var tarih = new Date();
tarih.setHours(17); // saat 13 idi 17 ye yapmak istedim
document.write(tarih + "<br>"); // Mon Nov 15 2021 17:22:16 GMT+0300 (GMT+03:00)

// set methodu ile dakikayı yazdırmak istersek ;
var tarih = new Date();
tarih.setMinutes(55); // dakika 22 idi 55 yapmak istedim
document.write(tarih + "<br>"); // Mon Nov 15 2021 13:55:48 GMT+0300 (GMT+03:00)
