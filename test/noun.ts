
import {Genitive, Case, Noun} from "../src/lib/Noun";
import {Pronoun} from "../src/lib/Pronoun";
import assert from "assert"
import 'mocha';

interface IList{
  [s:string]: string;
};

declare type Callback = (x: Noun) => void;

const testList = (list: IList, testfn: Callback) => {
  for(let i in list){
    const noun = new Noun(i);
    testfn(noun);
    assert.equal(noun.toString(), list[i]);
  }
};

describe("Module Noun", () => {
  describe("Case Test", () => {
    it("should return accusative case correctly", () => {
      const noun = new Noun("araba");
      noun.suffix(Case.Accusative);
      assert.equal(noun.toString(), "araba");

      const ev = new Noun("ev");
      ev.suffix(Case.Accusative);
      assert.equal(ev.toString(), "ev");

    });

    it("should return dative case correctly", () => {
      const list: IList = {
        "araba": "arabaya",
        "depo": "depoya",
        "ev": "eve",
        "kağıt": "kağıda"
      };
      testList(list, (x: Noun) => x.suffix(Case.Dative))
      
    });

    it("should return ablative case correctly", () => {
      const list: IList = {
        "araba": "arabadan",
        "depo": "depodan",
        "ev": "evden",
        "kağıt": "kağıttan"
      };  
      testList(list, (x: Noun) => x.suffix(Case.Ablative))
    });

    it("should return locative case correctly", () => {
      const list: IList = {
        "araba": "arabada",
        "depo": "depoda",
        "ev": "evde",
        "kağıt": "kağıtta"
      };
      testList(list, (x: Noun) => x.suffix(Case.Locative))
    });

  });

  describe("Genitive Case Test", () => {
    //Singular
    it("should return genitive first Pronoun singular case correctly", () => {
      const list: IList = {
        "araba": "arabam",
        "depo": "depom",
        "ev": "evim",
        "kağıt": "kağıdım"
      };
      testList(list, (x: Noun) => x.suffix(Genitive[Pronoun.Ben]))
    });
    
    it("should return genitive second Pronoun singular case correctly", () => {
      const list: IList = {
        "araba": "araban",
        "depo": "depon",
        "ev": "evin",
        "kağıt": "kağıdın"
      };
      testList(list, (x: Noun) => x.suffix(Genitive[Pronoun.Sen]))
    });

    it("should return genitive third Pronoun singular case correctly", () => {
      const list: IList = {
        "araba": "arabası",
        "depo": "deposu",
        "ev": "evi",
        "kağıt": "kağıdı"
      };
       testList(list, (x: Noun) => x.suffix(Genitive[Pronoun.O]))
    });

    it("should return genitive first Pronoun plural case correctly", () => {
      const list: IList = {
        "araba": "arabamız",
        "depo": "depomuz",
        "ev": "evimiz",
        "kağıt": "kağıdımız"
      };
      testList(list, (x: Noun) => x.suffix(Genitive[Pronoun.Biz]))
    });

    it("should return genitive second Pronoun plural case correctly", () => {
       const list: IList = {
        "araba": "arabanız",
        "depo": "deponuz",
        "ev": "eviniz",
        "kağıt": "kağıdınız"
      };
      testList(list, (x: Noun) => x.suffix(Genitive[Pronoun.Siz]))
    });

    it("should return genitive third Pronoun plural case correctly", () => {
      const list: IList = {
        "araba": "arabaları",
        "depo": "depoları",
        "ev": "evleri",
        "kağıt": "kağıtları"
      };
      testList(list, (x: Noun) => x.suffix(Genitive[Pronoun.Onlar]))
    });
  });

  describe("should return case, genitive, plural and singular methods successfully", () => {
    it("case method", () => {
      const list: IList = {
        "araba": "arabadan",
        "depo": "depodan",
        "ev": "evden",
        "kağıt": "kağıttan"
      };
      testList(list, (x: Noun) => x.case(Case.Ablative))
    });

    it("genitive method", () => {
      const list: IList = {
        "araba": "arabaları",
        "depo": "depoları",
        "ev": "evleri",
        "kağıt": "kağıtları"
      };
      testList(list, (x: Noun) => x.genitive(Pronoun.Onlar))
    });

    it("plural method", () => {
      const list: IList = {
        "araba": "arabalar",
        "depo": "depolar",
        "ev": "evler",
        "kağıt": "kağıtlar"
      };
      testList(list, (x: Noun) => x.plural())
    });

    it("singular method", () => {
      const list: IList = {
        "araba": "araba",
        "depo": "depo",
        "ev": "ev",
        "kağıt": "kağıt"
      };
      testList(list, (x: Noun) => {x.plural(); x.singular();})
    });
  });
  
})