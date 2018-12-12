import { Pronouns } from "./Pronouns";
import {Word} from "./Word";

export enum Case {
  Accusative = "",
  Dative = "%y#",
  Ablative = "d#n",
  Locative = "d#",
}

interface IGenitive{
  [p: string]: string;
}

export const Genitive: IGenitive  = {
  [Pronouns.Ben]: "&*m",
  [Pronouns.Sen]: "&*n",
  [Pronouns.O]: "%s*",
  [Pronouns.Biz]: "&*m*z",
  [Pronouns.Siz]: "&*n*z",
  [Pronouns.Onlar]: "l#r*",
};

export const Plural = "l#r";

export class Noun extends Word {
  public case(c: Case): void {
    this.suffix(c);
  }

  public genitive(subject: Pronouns): void {
    this.suffix(Genitive[subject]);
  }

  public plural() {
    this.suffix(Plural);
  }

  public singular() {
    this.desuffix(Plural);
  }
}
