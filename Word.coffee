Helper = require "./Helper"

Enum = (p...) =>
	o = {}
	for a of p
		o[p[a]] = a
	o
	
Hal = Enum "Bulunma", "Yonelme", "Belirtme", "Ayrilma"

Kisi = Enum "Ben", "Sen", "O", "Biz", "Siz", "Onlar"

class Word
	constructor : (@text)->
	Ek : (ek)->
		if Helper::IsUnlu(ek[0]) and Helper::UnluGetir(@text).length > 1
			@text = Helper::Yumusat @text
		else if Helper::IsYumusak ek[0]
			ek = Helper::Sertlestir @text, ek
		@text += ek
		return

module.exports =  "Hal":Hal, "Kisi":Kisi, "Word":Word
	