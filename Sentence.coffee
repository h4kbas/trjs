Helper = require "./Helper"
Word = require "./Word"
Hal = Word.Hal
Kisi = Word.Kisi
Word = Word.Word

Subject = require "./Subject"
Nesne = require "./Nesne"
Verb = require "./Verb"	

module.exports = 
	class Sentence
		constructor : (o,fp = true)->
			sent = o.split('|')
			 
			@Subjects = sent[0].split(' ')
			@Objects = sent[1].split(' ')

			if fp 
				@Verb = new Verb sent[2], do @FindPerson 
			else 
				@Verb = new Verb sent[2]
	
		ANE : (o)=>
			if o.Adjectives.length > 0
				return " "
			""
			
		BuildSentence: =>
			Sub = @WriteAdj @Subjects
			Obj = @WriteAdj @Objects
			Sub = Sub.charAt(0).toUpperCase() + Sub.slice(1)
			Sub + ' ' + Obj + ' ' + @Verb.text + if @Verb.Quest then '?' else '.'
					
		WriteAdj: (ob)=>
			Obj = ""
			l = ob.length
			for k,o of ob
				k = parseInt k
				o = new Nesne o
				ul = false
				if o.text[o.text.length-1] is '!'
					o.text = o.text.slice 0, o.text.length - 1
					ul = true
				
				if k is l - 1
					Obj += o.Adjectives.join(' ') + @ANE(o) + o.text
				else if k is l - 2
					Obj += o.Adjectives.join(' ') + @ANE(o) + o.text + (if !ul then ' ve ' else ' ') 
				else
					Obj += o.Adjectives.join(' ') + @ANE(o) + o.text + (if !ul then ', ' else ' ')
			Obj
		
		Who : (k)->
			sbs = @Subjects.map (i)=>
				i = i.split(';').pop().toLowerCase()
			switch k
				when Kisi.Ben
					return sbs.indexOf('ben') > -1
				when Kisi.Sen
					return sbs.indexOf('sen') > -1
				when Kisi.O
					return sbs.indexOf('o') > -1
				when Kisi.Biz
					return sbs.indexOf('biz') > -1
				when Kisi.Siz
					return sbs.indexOf('siz') > -1
				when Kisi.Onlar
					return sbs.indexOf('onlar') > -1
		FindPerson : ->
			if @Subjects.length > 1
				if @Who(Kisi.Ben) and @Who(Kisi.Sen)
					return Kisi.Biz
				else if @Who(Kisi.Ben) and @Who(Kisi.Siz)
					return Kisi.Biz
				else if @Who(Kisi.Ben) and @Who(Kisi.O)
					return Kisi.Biz
				else if @Who(Kisi.Ben) and (@Who(Kisi.O) or !@Who(Kisi.Sen) and !@Who(Kisi.Biz) and !@Who(Kisi.Siz) and !@Who(Kisi.O))
					return Kisi.Biz
				else if @Who(Kisi.Biz) and (@Who(Kisi.O) or !@Who(Kisi.Ben) and !@Who(Kisi.Sen) and !@Who(Kisi.Siz) and !@Who(Kisi.O))
					return Kisi.Biz
				else if @Who(Kisi.Biz) and @Who(Kisi.O)
					return Kisi.Biz
				else if @Who(Kisi.Sen) and (@Who(Kisi.O) or !@Who(Kisi.Ben) and !@Who(Kisi.Biz) and !@Who(Kisi.Siz) and !@Who(Kisi.O))
					return Kisi.Siz
				else if @Who(Kisi.Sen) and @Who(Kisi.O)
					return Kisi.Siz
				else if @Who(Kisi.Sen) and @Who(Kisi.Siz)
					return Kisi.Siz
				else if @Who(Kisi.Siz) and (@Who(Kisi.O) or !@Who(Kisi.Ben) and !@Who(Kisi.Sen) and !@Who(Kisi.Biz) and !@Who(Kisi.O))
					return Kisi.Siz
				else if @Who(Kisi.Siz) and @Who(Kisi.O)
					return Kisi.Siz
				else if @Who(Kisi.O) and @Who(Kisi.O)
					return Kisi.Onlar
				else if !@Who(Kisi.O) and !@Who(Kisi.Ben) and !@Who(Kisi.Sen) and !@Who(Kisi.Biz) and !@Who(Kisi.Siz) and !@Who(Kisi.O)
					if !@Who(Kisi.O) and !@Who(Kisi.Ben) and !@Who(Kisi.Sen) and !@Who(Kisi.Biz) and !@Who(Kisi.Siz) and !@Who(Kisi.Onlar) and !@Who(Kisi.O) and !@Who(Kisi.Ben) and !@Who(Kisi.Sen) and !@Who(Kisi.Biz) and !@Who(Kisi.Siz) and !@Who(Kisi.Onlar)
						return Kisi.Onlar
			else
				if @Who(Kisi.Ben)
					return Kisi.Ben
				else if @Who(Kisi.Sen)
					return Kisi.Sen
				else if @Who(Kisi.O) or !@Who(Kisi.O) and !@Who(Kisi.Ben) and !@Who(Kisi.Sen) and !@Who(Kisi.Biz) and !@Who(Kisi.Siz) and !@Who(Kisi.Onlar)
					return Kisi.O
				else if @Who(Kisi.Biz)
					return Kisi.Biz
				else if @Who(Kisi.Siz)
					return Kisi.Siz
				else if @Who(Kisi.Onlar)
					return Kisi.Onlar