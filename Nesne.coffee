Helper = require "./Helper"
Word = require ("./Word")
Hal = Word.Hal
Kisi = Word.Kisi
Word = Word.Word
module.exports = 
	class Nesne extends Word
		constructor : (text)->
			super(text)
		HalEki : (e)->
			switch e
				when Hal.Bulunma
					return @Ek 'd' +  Helper::BuyukUyum @text	
				when Hal.Yonelme
					if (Helper::IsUnlu @text[@text.length - 1])
						return @Ek 'y' + Helper::BuyukUyum @text
					else return @Ek Helper::BuyukUyum @text
					
				when Hal.Belirtme
					if (Helper::IsUnlu @text[@text.length - 1])
						return @Ek 'y' + Helper::KucukUyum @text
					else return @Ek Helper::KucukUyum @text
					
				when Hal.Ayrilma
					return @Ek 'd' + Helper::BuyukUyum(@text) + 'n'
				
		SahiplikEki : (e)->
			switch e
				when Kisi.Ben
					if (Helper::IsUnlu @text[@text.length - 1])
						return @Ek 'm'
					else return @Ek Helper::KucukUyum(@text) + 'm'
				when Kisi.Sen
					if (Helper::IsUnlu @text[@text.length - 1])
						return @Ek 'n'
					else return @Ek Helper::KucukUyum(@text) + 'n'
					
				when Kisi.O
					if (Helper::IsUnlu @text[@text.length - 1])
						return @Ek 's' + Helper::KucukUyum(@text)
					else return @Ek Helper::KucukUyum(@text)
					
				when Kisi.Biz
					if (Helper::IsUnlu @text[@text.length - 1])
						return @Ek 'm' + Helper::KucukUyum(@text) + 'z'
					else return @Ek Helper::KucukUyum(@text) + 'm' + Helper::KucukUyum(@text) + 'z'
		
				when Kisi.Siz
					if (Helper::IsUnlu @text[@text.length - 1])
						return @Ek 'n' + Helper::KucukUyum(@text) + 'z'
					else return @Ek Helper::KucukUyum(@text) + 'n' + Helper::KucukUyum(@text) + 'z'
					
				when Kisi.Onlar
					console.log Helper::BuyukUyum(@text)
					if Helper::BuyukUyum(@text) is 'a'
						return @Ek 'ları'
					else 
						return @Ek 'leri'