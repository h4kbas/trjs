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
			if @IsSert(str[str.length - 1]) and @IsYumusak(ek[0]) then return kural[ilk] + ek.slice(1) else return ek
			
		Yumusat : (str)->	
			kural = 'p' : 'b', 'ç' : 'c', 't' : 'd', 'k' : 'ğ'
			unsuz = @SonUnsuz str
			if kural[unsuz]?
				if unsuz is 'k'
					return str.slice(0,-1) +  if @IsUnsuz str[str.length-2] then 'g' else 'ğ'
				else 
					return str.slice(0,-1)  + kural[unsuz]
			else 
				return str
				
		BuyukUyum : (str)->
			s = Helper::SonUnlu str
			k1 = ['i', 'ü', 'e', 'ö'] #e
			k2 = ['ı', 'u', 'a', 'o'] #a
			if k1.indexOf(s) > -1
				return 'e'
			else if k2.indexOf(s) > -1
				return 'a'
			""
		KucukUyum : (str)->
			s = Helper::SonUnlu str
			k1 = ['i','e'] #i
			k2 = ['ü','ö'] #ü
			k3 = ['ı','a'] #ı
			k4 = ['u','o'] #u
			
			if k1.indexOf(s) > -1
				return 'i'
			else if k2.indexOf(s) > -1
				return 'ü'
			else if k3.indexOf(s) > -1
				return 'ı'
			else if k4.indexOf(s) > -1
				return 'u'
			""