Helper = require "./Helper"
Word = require "./Word"
Hal = Word.Hal
Kisi = Word.Kisi
Word = Word.Word
module.exports = 
	class Noun extends Word
		constructor : (txt)->
			super()
			@Adjectives = txt.split ';'
			txt = @Adjectives.pop()
			@Situation = 0
			@Possess = 0
			#Call
			@Notation txt 
		Notation : (e)->
			k = 0
			virgul = false
			while k < e.length
				i = e[k]
				if i is '>' #Situation
					@Situation = e[k+1]
					k++
				else if i is '<' #Possess
					@Possess = e[k+1]
					k++
				else if i is '!' #Kucuk
					virgul = true
				else
					@text += i
				k++

			@HalEki(@Situation)
			@SahiplikEki(@Possess)
			@text += '!' if virgul
		HalEki : (e)->
			switch e
				when Hal.Bulunma then @Ek 'd#'
					
				when Hal.Yonelme then @Ek '%#'
						
				when Hal.Belirtme then @Ek '%*'
					
				when Hal.Ayrilma then @Ek 'd#n'
				
		SahiplikEki : (e)->
			switch e
				when Kisi.Ben then @Ek '&*m'
				
				when Kisi.Sen then @Ek '&*n'		
					
				when Kisi.O   then @Ek '&s*'
					
				when Kisi.Biz then @Ek '&*m*z'
						
				when Kisi.Siz then @Ek '&*n*z'
						
				when Kisi.Onlar then return 'l#r*'