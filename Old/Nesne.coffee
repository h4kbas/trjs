Helper = require "./Helper"
Word = require "./Word"
Hal = Word.Hal
Kisi = Word.Kisi
Word = Word.Word
Noun = require "./Noun"
module.exports = 
	class Nesne extends Noun
		constructor : (text)->
			super(text)