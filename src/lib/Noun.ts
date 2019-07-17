import { Pronoun } from "./Pronoun";
import { Word } from "./Word";

export const enum Case {
  Accusative = "",
  Dative = "%y#",
  Ablative = "d#n",
  Locative = "d#",
}

interface IGenitive{
  [p: string]: string;
}

export const Genitive: IGenitive  = {
  [Pronoun.Ben]: "&*m",
  [Pronoun.Sen]: "&*n",
  [Pronoun.O]: "%s*",
  [Pronoun.Biz]: "&*m*z",
  [Pronoun.Siz]: "&*n*z",
  [Pronoun.Onlar]: "l#r*",
};

export const Plural = "l#r";

export class Noun extends Word {
  public case(c: Case): void {
    this.suffix(c);
  }

  public genitive(subject: Pronoun): void {
    this.suffix(Genitive[subject]);
  }

  public plural() {
    this.suffix(Plural);
  }

  public singular() {
    this.desuffix(Plural);
  }
}
