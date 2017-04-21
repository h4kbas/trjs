Helper = require "./Helper"
Word = require "./Word"
Hal = Word.Hal
Kisi = Word.Kisi
Tense = Word.Tense
Word = Word.Word
module.exports = 
	class Verb extends Word
		constructor : (txt, pwe = Kisi.None) ->
			super()
			@PosNeg =  true
			@Quest  =  false
			@Person =  pwe
			@Tense  =  Tense.None
			#Call
			@Notation txt
		Notation : (e)->
			k = 0
			while k < e.length
				i = e[k]
				if i is '+' #Pos
					@PosNeg = true
				else if i is '-' #Neg
					@PosNeg = false
				else if i is '?' #Quest
					@Quest = true
				else if i is '[' #Person
					@Person = e[k+1]
					k++
				else if i is ']' #Tense
					@Tense = e[k+1]
					k++
				else
					@text += i
				k++
			@TenseEkle(@Tense, @Person, @PosNeg, @Quest)
				
		SoruEki : (q)-> if q then @Ek '_m*'
		
		SahisEki : (k,q = false)->
			switch k  
				when Kisi.Ben
					@Ek if q then 'y*m' else '&*m'
				when Kisi.Sen
					@Ek 's*n'
				when Kisi.O
					return
				when Kisi.Biz
					@Ek if q then 'y*z' else '*z'
				when Kisi.Siz
					@Ek 's*n*z'
				when Kisi.Onlar
					@Ek 'l#r'
		# Ek, Kisi, Pos/Neg, Question
		TenseEkle : (e, k, pn, q)->
			switch e
				when Tense.Genis
					if pn
						if Helper::IsUnlu do @SonHarf
							@Ek 'r'
						else if do @UnluCount > 1
							@Ek '&*r'
						else if do @UnluCount is 1
							if unlu = Helper::SonUnlu(@text) is 'a' then @Ek '*r' else @Ek '#r'				
					else
						@Ek 'm#z'
						
					if k is Kisi.Onlar
						@SahisEki k,q
						@SoruEki q
					else
						@SoruEki q
						@SahisEki k, q
				when Tense.Simdiki
					@Ek if pn then '&*yor' else  'm*yor'

					if k is Kisi.Onlar
						@SahisEki k,q
						@SoruEki q
					else
						@SoruEki q
						@SahisEki k, q
				when Tense.Gelecek
					@Ek  if pn  then '%#c#k' else 'm#y#c#k'
					if k is Kisi.Onlar
						@SahisEki k,q
						@SoruEki q
					else
						@SoruEki q
						@SahisEki k, q
				when Tense.GGecmis
					@Ek if pn then 'd*' else 'm#d*'

					switch k
						when Kisi.Sen then @Ek '&*n'
							
						when Kisi.Biz then @Ek 'k'
							
						when Kisi.Siz then @Ek '&*n*z'
							
						else @SahisEki k
						
					@SoruEki q
				when Tense.DGecmis
					@Ek if pn then 'm*ş' else 'm#m*ş'
					
					if k is Kisi.Onlar
						@SahisEki k,q
						@SoruEki q
					else
						@SoruEki q
						@SahisEki k, q
				when Tense.Emir
					if !pn then @Ek 'm#'
					rule = ['s*n', '%*n', 's*nl#r']
					if rule.length > k then @Ek rule[k] else return
					@SoruEki q			
				when Tense.Gereklilik
					if !pn then @Ek 'm#'
					rule = ['m#l*y*m', 'm#l*s*n', 'm#l*', 'm#l*y*z', 'm#l*s*n*z', 'm#l*l#r']
					@Ek rule[k-1]	
					@SoruEki q		
				when Tense.Istek
					if !pn then @Ek 'm#'
					rule = ['%#y*m', '%#s*n', '#', '%#l*m', '%#s*n*z', '%#l#r']
					@Ek rule[k-1]	
					@SoruEki q	
				when Tense.Sart
					if !pn then @Ek 'm#'
					rule = ['s#m', 's#n', 's#', 's#k', 's#n*z', 's#l#r']
					@Ek rule[k-1]
					@SoruEki q