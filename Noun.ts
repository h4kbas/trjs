import { Person } from "./Person";
import {Word} from "./Word";

export enum Case {
  Accusative = "",
  Dative = "%y#",
  Ablative = "d#n",
  Locative = "d#",
}

export const Genitive  = {
  [Person.Ben]: "&*m",
  [Person.Sen]: "&*n",
  [Person.O]: "%s*",
  [Person.Biz]: "&*m*z",
  [Person.Siz]: "&*n*z",
  [Person.Onlar]: "l#r*",
};

export class Noun extends Word {
  public case(c: Case): void {
    this.suffix(c);
  }

  public genitive(person: Person): void {
    this.suffix(Genitive[person]);
  }
}
