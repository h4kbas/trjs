import assert = require("assert");
import {Case, Genitive, Noun} from "./Noun";
import { Person } from "./Person";
import { Word} from "./Word";

const kagit = new Noun("kağıt");
kagit.suffix(Genitive[Person.Onlar]);
console.log(kagit.toString());
