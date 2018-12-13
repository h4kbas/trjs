import { Moods } from "./Moods";
import { Polarities } from "./Polarities";
import { Pronouns } from "./Pronouns";
import { Word } from "./Word";
import { Tenses } from "./Tenses";

export const Negation = "m#";
export const Interrogation = " m*";

interface IPerson{
  [p: string]: string
}
export const Person: IPerson = {
  [Pronouns.Ben]: "&*m",
  [Pronouns.Sen]: "&s&*n",
  [Pronouns.O]  : "",
  [Pronouns.Biz]: "%y*z",
  [Pronouns.Siz]: "&s&*n*z",
  [Pronouns.Onlar]: "l#r",
};
interface ITense{
  [t:string]: {[p: string]: {[m: string]: string} }
}
export const Tense: ITense = {
  [Tenses.Present]:{
    [Polarities.Affirmative]: {
      [Moods.Indicative]: "&!r",
    },
    [Polarities.Negative]:{
      [Moods.Indicative]: "z",
    }
  },
  [Tenses.Continuous]:{
    [Polarities.Affirmative]: {
      [Moods.Indicative]: "/*yor",
    },
    [Polarities.Negative]:{
      [Moods.Indicative]: "/*yor",
    }
  },
  [Tenses.Past]:{
    [Polarities.Affirmative]: {
      [Moods.Indicative]: "d*",
    },
    [Polarities.Negative]:{
      [Moods.Indicative]: "d*",
    }
  },
  [Tenses.RPast]:{
    [Polarities.Affirmative]: {
      [Moods.Indicative]: "m*ş",
    },
    [Polarities.Negative]:{
      [Moods.Indicative]: "m*ş",
    }
  },
  [Tenses.Future]:{
    [Polarities.Affirmative]: {
      [Moods.Indicative]: "%y#c#k",
    },
    [Polarities.Negative]:{
      [Moods.Indicative]: "%y#c#k",
    }
  },
};

export class Verb extends Word {
  private mood: Moods;
  private pronoun: Pronouns;
  private tense: Tenses;
  private polarity: Polarities;

  public setTense(t:Tenses, p: Pronouns, m: Moods, po: Polarities){
    this.mood = m;
    this.pronoun = p;
    this.tense = t;
    this.polarity = po;
    let link = Tense[t][po][m];
    if(this.tense == Tenses.Present){
      if(this.polarity == Polarities.Negative){
        this.suffix(Negation);
        if(this.pronoun != Pronouns.Ben && this.pronoun != Pronouns.Biz)
          this.suffix(link);
        this.suffix(Person[p]);
      }
      else{
        this.suffix(link);
        this.suffix(Person[p]);
      }
    }
    else if(this.tense == Tenses.Past){
      if(this.polarity == Polarities.Negative){
        this.suffix(Negation);
      }
      this.suffix(link);
      if(this.pronoun != Pronouns.Biz)
        this.suffix(Person[this.pronoun]);
      else
        this.suffix("k");
    }
    else{
      if(this.polarity == Polarities.Negative){
        this.suffix(Negation);
      }
      this.suffix(link);
      this.suffix(Person[this.pronoun]);
    }
  }
}
