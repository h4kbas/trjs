Helper = require "./Helper"



Enum = (p...) =>
	o = {}
	for a of p
		o[p[a]] = a
	o

	
Hal = Enum "None", "Bulunma", "Yonelme", "Belirtme", "Ayrilma"

Kisi = Enum "None", "Ben", "Sen", "O", "Biz", "Siz", "Onlar"

Tense = Enum "None", "Genis", "Simdiki", "Gelecek", "GGecmis", "DGecmis", "Emir", "Gereklilik", "Istek", "Sart"


class Word
	constructor : ->
		@text = ''
	_Ek : (ek)->
		if Helper::IsUnlu(ek[0])
			@text = Helper::Yumusat @text
		else if Helper::IsYumusak ek[0]
			ek = Helper::Sertlestir @text, ek
		@text += ek
		return
	Ek : (e)->
		k = 0
		while k < e.length
			i = e[k]
			if i is '#' #Buyuk
				@_Ek Helper::BuyukUyum @text 
			else if i is '*' #Kucuk
				@_Ek Helper::KucukUyum @text
			else if i is '%' #Kaynaştırma
				if Helper::IsUnlu(do @SonHarf) then @_Ek 'y'
			else if i is '_' #Space
				@_Ek ' '
			else if i is '&' #Kontrol
				if Helper::IsUnlu(do @SonHarf) then k++
			else if i is ':' #Daralma
				a = Helper::Daralma @text, e
				if a?
					@_Ek a
					k++ 
			else 
				@_Ek i
			k++
			
	UnluCount : -> Helper::UnluGetir(@text).length
	SonHarf : -> @text[@text.length - 1]
	
module.exports =  "Hal":Hal, "Kisi":Kisi, "Word":Word, "Tense":Tense
	