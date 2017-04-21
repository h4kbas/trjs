Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

module.exports = {

    TumUnsuzler: function(s){
        let ret= [];
        for(l of s)
            if(this.IsUnsuz(l)) ret.push(l);
        return ret;
    },
    UnluCount : function(s){
        return this.TumUnluler(s).length;
    },
    UnsuzCount : function(s){
        return this.TumUnsuzler(s).length;
    },
    TumUnluler: function(s){
        let ret = [];
        for(l of s)
            if(this.IsUnlu(l)) ret.push(l);
        return ret;
    },
    IsUnsuz: function(l){
        return !this.IsUnlu(l);
    },
    IsUnlu: function(l){
        return ['a','e','ı','i','o','ö','u','ü'].contains(l);
    },
    IsSert: function(l){
        return ['p','ç','t','k','f','h','s','ş'].contains(l);
    },
    IsYumusak: function(l){
        return ['b','c','d','g','ğ'].contains(l);
    },
    SonUnsuz: function(s){
        const ls = this.TumUnsuzler(s);
        return ls[ls.length - 1];
    },
    SonUnlu: function(s){
        const ls = this.TumUnluler(s);
        return ls[ls.length - 1];
    },
    SonHarf: function(s){
        return s[s.length - 1];
    },
    IlkHarf: function(s){        
        return s.charAt(0) || null;
    },
    Sertlesme: function(s, e){
            const rule = {'b' : 'p', 'c' : 'ç', 'd' : 't', 'g' : 'k'};
			const first = this.IlkHarf(e);
			return this.IsSert(s[s.length - 1]) && this.IsYumusak(e[0]) ?  rule[first] + e.slice(1) :  e;
    },
    Yumusama: function(s){
        const rule = {'p' : 'b', 'ç' : 'c', 't' : 'd', 'k' : 'ğ'};
        const last = this.SonUnsuz(s);
        if(rule[last]){
            if(last == 'k'){
                if(this.this.TumUnluler(s).length > 1){
                    return s.slice(0,-1) + this.IsUnsuz(s[s.length-2]) ? 'g' : 'ğ';
                }
                else{
                    return s;
                }
            }
            else if(this.this.TumUnluler(s).length > 1){
                    return str.slice(0,-1) + rule[last];
            }
            else{
                return s;
            }
        }
        else{
            return s;
        }
    },
    Daralma: function(s, e){
        const rule = {'o' : 'u', 'ö' : 'ü', 'e' : 'i', 'a' : 'ı'};
        const unluler = this.TumUnluler(s);
        const unlul = unluler.length;
        const sunlu = unluler[unlul - 1];
        if(sunlu == 'a' || sunlu == 'e'){
            if(lunlu > 1){
                return rule[unluler[unlul - 2]];
            }
            else if(lunlu == 1){
                return rule[unluler[unlul - 1]];
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    },
    BuyukUyum: function(s){
        const sunlu = this.SonUnlu(s);
        if(['i', 'ü', 'e', 'ö'].contains(sunlu)){
            return 'e'
        }
        else if(['ı', 'u', 'a', 'o'].contains(sunlu)){
            return 'a';
        }
        else{
            return false;
        }
    },
    KucukUyum: function(s){
        const sunlu = this.SonUnlu(s);
        if(['i','e'].contains(sunlu)){
            return 'i'
        }
        else if(['ü','ö'].contains(sunlu)){
            return 'ü';
        }
        else if(['ı','a'].contains(sunlu)){
            return 'ı';
        }
        else if(['u','o'].contains(sunlu)){
            return 'u';
        }
    }
};