Word = require "./Word"
Hal = Word.Hal
Kisi = Word.Kisi
Word = Word.Word

Nesne = require "./Nesne"
		
n = new Nesne "toprak"
n.SahiplikEki Kisi.Biz
n.HalEki Hal.Bulunma
console.log n
