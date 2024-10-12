//! ********************************************************************************* */
//? Bu işlemleri yapabilmek için 10 luk sistemi 2 lik sisteme çevirmek gerekir...
//? Mesela 12 sayısını ele alalım..
//? 12 10 luk sitemdedir.. 2 lik sisteme şu şekilde çevrilir..
//? Sürekli 2 ye bölersiniz..
//! 12/2=6 kalan 0
//! 6/2=3 kalan 0
//! 3/2=1 kalan 0
//! 1/2=> 1 2 ye bölünmez ve 1 i almış oluruz..
//! Çıkan sonuç tersten yazdırılır...
//? Sonuç ; 1000 olmuş olur.......

/*
Operatör
X = 1110
Y = 1010
&	VE (Bitwise AND) Operatörü
Operandların bit pozisyonlarının her ikisinin 1 olması durumunda o pozisyon için 1 geri döner.	
X & Y --> 1010 olur.


Şöyle ki ;
X = 1110  
Y = 1010

Sırasıyla başlarsak ; 
1 ile 1 işleme girerse 1 olur...
1 ile 0 işleme girerse 0 olur...
1 ile 1 işleme girerse 1 olur...
0 ile 0 işleme girerse 0 olur...

Sonuç ; 1010 olur...

*/

document.write("And ; " + (1110 & 1010) + "<br>"); // 82

/*

|	VEYA (Bitwise OR) Operatörü
Operandların bit pozisyonlarının birinin veya her ikisinin 1 olması durumunda o pozisyon için 1 geri döner.	
X | Y --> 1110 olur.

Şöyle ki ;
X = 1110  
Y = 1010

Sırasıyla başlarsak ; 
1 ile 1 işleme girerse 1 olur...
1 ile 0 işleme girerse 1 olur...
1 ile 1 işleme girerse 1 olur...
0 ile 0 işleme girerse 1 olur...

Sonuç ; 1110 olur...

*/

document.write("Or ; " + (1110 | 1010) + "<br>"); // 2038

/*

^	ÖZEL VEYA (Bitwise XOR) Operatörü
Operandların bit pozisyonlarının birinin 1 diğerinin 0 olması durumunda o pozisyon için 1 geri döner.	
X ^ Y --> 0100 olur.

Şöyle ki ;
X = 1110  
Y = 1010

Sırasıyla başlarsak ; 
1 ile 1 işleme girerse 0 olur...
1 ile 0 işleme girerse 1 olur...
1 ile 1 işleme girerse 0 olur...
0 ile 0 işleme girerse 0 olur...

Sonuç ; 0100 olur...

*/

document.write("XOR ; " + (1110 ^ 1010) + "<br>"); // 1956

/*
~	DEĞİL (Bitwise NOT) Operatörü
Operandın bitlerini ters çevirir.	

Şöyle ki ;
X = 1110  

Sırasıyla başlarsak ; 
1 işleme girerse 0 olur...
1 işleme girerse 0 olur...
1 işleme girerse 0 olur...
0 işleme girerse 1 olur...

Sonuç ; 0001 olur...

*/

document.write("NOT ; " + ~1110 + "<br>"); // -1111

/*
<<	Sol Rotasyon (Left Shift) Operatörü
Solundaki operandın bitlerini sağındaki operandın değeri kadar sola kaydırır.	
X << 2 --> 111000 olur.

>>	Sağ Rotasyon (Right Shift) Operatörü
Solundaki operandın bitlerini sağındaki operandın değeri kadar en sağdaki bitleri atarak sağa kaydırır.	
Y >> 2 --> 0010 olur
*/
