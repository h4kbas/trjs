module.exports = 
	class Helper
	
		UnsuzGetir : (s)->
			@RegMatchAll /[^aeıioöuü]/ig, s
		UnluGetir : (s)->
			@RegMatchAll /[aeıioöuü]/ig, s
			
		RegMatch : (reg,str)-> reg.exec str
		
		RegMatchAll : (reg,str)->
			matches = []
			while found = reg.exec str
				matches.push found[0]
			matches
		
		IsUnsuz : (val)-> !(@IsUnlu val)
		
		IsUnlu : (val)->
			kural =  ['a','e','ı','i','o','ö','u','ü']
			(kural.indexOf val) > -1
			
		IsSert : (val)->
			kural =  ['p','ç','t','k','f','h','s','ş']
			(kural.indexOf val) > -1
			
		IsYumusak : (val)->
			kural =  ['p','c','d','g','ğ']
			(kural.indexOf val) > -1
			
		SonUnsuz : (s)->
			unsuzler = @UnsuzGetir s
			unsuzler[unsuzler.length - 1]
		
		SonUnlu : (s)->
			unlu = @UnluGetir s
			unlu[unlu.length - 1]
			
		Sertlestir : (str, ek)->
			kural = 'b' : 'p', 'c' : 'ç', 'd' : 't', 'g' : 'k'
			ilk = ek[0];
			return if @IsSert(str[str.length - 1]) and @IsYumusak(ek[0]) then  kural[ilk] + ek.slice(1) else  ek
			
		Yumusat : (str)->
			kural = 'p' : 'b', 'ç' : 'c', 't' : 'd', 'k' : 'ğ'
			unsuz = @SonUnsuz str
			if kural[unsuz]?
				if unsuz is 'k'
					if @UnluGetir(str).length > 1
						return str.slice(0,-1) +  if @IsUnsuz str[str.length-2] then 'g' else 'ğ'
					else return	str
				else if @UnluGetir(str).length > 1
					return str.slice(0,-1)  + kural[unsuz]
				else return str
			else 
				return str
		#Depreached	
		Daralma : (str, ek)->
			kural = 'o' : 'u', 'ö' : 'ü', 'e' : 'i', 'a' : 'ı'
			unlu = @UnluGetir str
			sunlu = do @SonUnlu
			if sunlu is 'a' || sunlu is 'e'
				if unlu.length > 1
					return kural[unlu[unlu.length - 2]]
				else if unlu.length is 1
					return kural[unlu[unlu.length - 1]]
				else
					return false
			else return false
					
			
		BuyukUyum : (str)->
			s = @SonUnlu str
			if ['i', 'ü', 'e', 'ö'].indexOf(s) > -1
				return 'e'
			else if ['ı', 'u', 'a', 'o'].indexOf(s) > -1
				return 'a'
			false
		KucukUyum : (str)->
			s = @SonUnlu str
			if ['i','e'].indexOf(s) > -1
				return 'i'
			else if ['ü','ö'].indexOf(s) > -1
				return 'ü'
			else if ['ı','a'].indexOf(s) > -1
				return 'ı'
			else if ['u','o'].indexOf(s) > -1
				return 'u'
			false