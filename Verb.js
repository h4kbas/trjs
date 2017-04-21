const P = require('./parser.js');
const D = require('./definition.js');
class Verb{
    constructor(s) {
        this.text = s;
    }

    Tense(t, p, ty){
        this.person = p;
        this.time = t;
        this.type = ty;
        const Time = D.Zamanlar[this.time][this.type];
        if(typeof Time === 'object'){
            if(Time[this.person]){
               this.Ek(Time[this.person]);
            }
            else{
                this.Ek(Time['Any']);
            }
        }
        else{
            this.Ek(Time);
        }
    }

    Ek(e){
         this.text = P(this.text, e, this.person);
    }
}

module.exports = Verb;