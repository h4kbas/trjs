import { Person } from "./Person";
import {Word} from "./Word";

export class Noun extends Word {

}

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
