import { Type } from "./Type";
import { Polarity } from "./Polarity";
import { Pronoun } from "./Pronoun";
import { Word } from "./Word";;
import { Tense } from "./Tense";

export const Negation = "m#";
export const Interrogation = " m*";

interface IPerson{
  [p: string]: string
}
export const Person: IPerson = {
  [Pronoun.Ben]: "&*m",
  [Pronoun.Sen]: "&s&*n",
  [Pronoun.O]  : "",
  [Pronoun.Biz]: "%y*z",
  [Pronoun.Siz]: "&s&*n*z",
  [Pronoun.Onlar]: "l#r",
};
interface IConjugation{
  [t:string]: {[p: string]: {[m: string]: string} }
}
export const Conjugation: IConjugation = {
  [Tense.Present]:{
    [Polarity.Affirmative]: {
      [Type.Indicative]: "&!r",
    },
    [Polarity.Negative]:{
      [Type.Indicative]: "z",
    }
  },
  [Tense.Continuous]:{
    [Polarity.Affirmative]: {
      [Type.Indicative]: "/*yor",
    },
    [Polarity.Negative]:{
      [Type.Indicative]: "/*yor",
    }
  },
  [Tense.Past]:{
    [Polarity.Affirmative]: {
      [Type.Indicative]: "d*",
    },
    [Polarity.Negative]:{
      [Type.Indicative]: "d*",
    }
  },
  [Tense.RPast]:{
    [Polarity.Affirmative]: {
      [Type.Indicative]: "m*ş",
    },
    [Polarity.Negative]:{
      [Type.Indicative]: "m*ş",
    }
  },
  [Tense.Future]:{
    [Polarity.Affirmative]: {
      [Type.Indicative]: "%y#c#k",
    },
    [Polarity.Negative]:{
      [Type.Indicative]: "%y#c#k",
    }
  },
};

export class Verb extends Word {
  private mood: Type;
  private pronoun: Pronoun;
  private Tense: Tense;
  private polarity: Polarity;

  public setConjugation(t:Tense, p: Pronoun, m: Type, po: Polarity){
    this.mood = m;
    this.pronoun = p;
    this.Tense = t;
    this.polarity = po;
    let link = Conjugation[t][po][m];
    if(this.Tense == Tense.Present){
      if(this.polarity == Polarity.Negative){
        this.suffix(Negation);
        if(this.pronoun != Pronoun.Ben && this.pronoun != Pronoun.Biz)
          this.suffix(link);
        this.suffix(Person[p]);
      }
      else{
        this.suffix(link);
        this.suffix(Person[p]);
      }
    }
    else if(this.Tense == Tense.Past){
      if(this.polarity == Polarity.Negative){
        this.suffix(Negation);
      }
      this.suffix(link);
      if(this.pronoun != Pronoun.Biz)
        this.suffix(Person[this.pronoun]);
      else
        this.suffix("k");
    }
    else{
      if(this.polarity == Polarity.Negative){
        this.suffix(Negation);
      }
      this.suffix(link);
      this.suffix(Person[this.pronoun]);
    }
  }
}
