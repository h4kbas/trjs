const F = require('./functions.js');
const D = require('./definition.js');

const _Ek = function(s, e){
    if(F.IsUnlu(F.IlkHarf(e))){
        s = F.Yumusama(s);
    }
    else if (F.IsYumusak(F.IlkHarf(e))){
        e = F.Sertlesme(s, e);
    }
    return s += e;
};



const Ek = function(s, e, p){
    let k = 0;
    while(k < e.length){
        let i = e[k];
        switch(i){
            case '#':
                s = _Ek(s, F.BuyukUyum(s));
            break;

            case '*':
                s = _Ek(s, F.KucukUyum(s));
            break;

            case '%':
                if(F.IsUnlu(F.SonHarf(s)))
                    s = _Ek(s, 'y');
            break;

            case '_':
                s = _Ek(s, ' ');
            break;

            case '&':
               if(F.IsUnlu(F.SonHarf(s))) k++;
            break;

            case ':':
                const a = F.Daralma(s,e);
                if(a){
                    s = _Ek(s, a);
                }
                else{
                   s = _Ek(s, i);
                }
            break;

            case '?':
                s = Ek(s, D.Soru, p);
            break;

            case '^':
                s = Ek(s, D.Kisiler[p], p);
            break;
            default:
                s = _Ek(s, i);
            break;
        }
        k++;
    }
    return s;
};

module.exports = Ek;
