
import {Verb} from "../src/lib/Verb";
import {Pronoun} from "../src/lib/Pronoun";
import {Type} from "../src/lib/Type";
import {Polarity} from "../src/lib/Polarity";
import {Tense} from "../src/lib/Tense";
import assert from "assert"
import 'mocha';

interface IList{
  [s:string]: string;
};

declare type Callback = (x: Verb) => void;

const testList = (list: IList, testfn: Callback) => {
  for(let i in list){
    const verb = new Verb(i);
    testfn(verb);
    assert.equal(verb.toString(), list[i]);
  }
};

describe("Module Verb", () => {
  //Present Tense
  describe("Present Tense Indicative Affirmative", () => {
    it("should return affirmative present tense for first person singular correctly", () => {
      const list: IList = {
        "gitmek": "giderim",
        "gelmek": "gelirim",
        "korkmak": "korkarım",
        "kalkmak": "kalkarım",
        "akmak": "akarım",
        "uyumak": "uyurum",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.Ben, Type.Indicative, Polarity.Affirmative))
    });

    it("should return affirmative present tense for second person singular correctly", () => {
      const list: IList = {
        "gitmek": "gidersin",
        "gelmek": "gelirsin",
        "korkmak": "korkarsın",
        "kalkmak": "kalkarsın",
        "akmak": "akarsın",
        "uyumak": "uyursun",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.Sen, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative present tense for third person singular correctly", () => {
      const list: IList = {
        "gitmek": "gider",
        "gelmek": "gelir",
        "korkmak": "korkar",
        "kalkmak": "kalkar",
        "akmak": "akar",
        "uyumak": "uyur",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.O, Type.Indicative, Polarity.Affirmative))
    });

    it("should return affirmative present tense for first person plural correctly", () => {
      const list: IList = {
        "gitmek": "gideriz",
        "gelmek": "geliriz",
        "korkmak": "korkarız",
        "kalkmak": "kalkarız",
        "akmak": "akarız",
        "uyumak": "uyuruz",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.Biz, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative present tense for second person plural correctly", () => {
      const list: IList = {
        "gitmek": "gidersiniz",
        "gelmek": "gelirsiniz",
        "korkmak": "korkarsınız",
        "kalkmak": "kalkarsınız",
        "akmak": "akarsınız",
        "uyumak": "uyursunuz",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.Siz, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative present tense for third person plural correctly", () => {
      const list: IList = {
        "gitmek": "giderler",
        "gelmek": "gelirler",
        "korkmak": "korkarlar",
        "kalkmak": "kalkarlar",
        "akmak": "akarlar",
        "uyumak": "uyurlar",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.Onlar, Type.Indicative, Polarity.Affirmative))
    });
  });  

  describe("Present Tense Indicative Negative", () => {
    it("should return negative present tense for first person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmem",
        "gelmek": "gelmem",
        "korkmak": "korkmam",
        "kalkmak": "kalkmam",
        "akmak": "akmam",
        "uyumak": "uyumam",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.Ben, Type.Indicative, Polarity.Negative))
    });

    it("should return negative present tense for second person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmezsin",
        "gelmek": "gelmezsin",
        "korkmak": "korkmazsın",
        "kalkmak": "kalkmazsın",
        "akmak": "akmazsın",
        "uyumak": "uyumazsın",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.Sen, Type.Indicative, Polarity.Negative))
    });

     it("should return negative present tense for third person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmez",
        "gelmek": "gelmez",
        "korkmak": "korkmaz",
        "kalkmak": "kalkmaz",
        "akmak": "akmaz",
        "uyumak": "uyumaz",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.O, Type.Indicative, Polarity.Negative))
    });

    it("should return negative present tense for first person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmeyiz",
        "gelmek": "gelmeyiz",
        "korkmak": "korkmayız",
        "kalkmak": "kalkmayız",
        "akmak": "akmayız",
        "uyumak": "uyumayız",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.Biz, Type.Indicative, Polarity.Negative))
    });

     it("should return negative present tense for second person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmezsiniz",
        "gelmek": "gelmezsiniz",
        "korkmak": "korkmazsınız",
        "kalkmak": "kalkmazsınız",
        "akmak": "akmazsınız",
        "uyumak": "uyumazsınız",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.Siz, Type.Indicative, Polarity.Negative))
    });

     it("should return negative present tense for third person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmezler",
        "gelmek": "gelmezler",
        "korkmak": "korkmazlar",
        "kalkmak": "kalkmazlar",
        "akmak": "akmazlar",
        "uyumak": "uyumazlar",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Present, Pronoun.Onlar, Type.Indicative, Polarity.Negative))
    });
  });  
  //Continuous
  describe("Continuous Tense Indicative Affirmative", () => {
    it("should return affirmative continuous tense for first person singular correctly", () => {
      const list: IList = {
        "gitmek": "gidiyorum",
        "gelmek": "geliyorum",
        "korkmak": "korkuyorum",
        "kalkmak": "kalkıyorum",
        "akmak": "akıyorum",
        "uyumak": "uyuyorum",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.Ben, Type.Indicative, Polarity.Affirmative))
    });

    it("should return affirmative continuous tense for second person singular correctly", () => {
      const list: IList = {
        "gitmek": "gidiyorsun",
        "gelmek": "geliyorsun",
        "korkmak": "korkuyorsun",
        "kalkmak": "kalkıyorsun",
        "akmak": "akıyorsun",
        "uyumak": "uyuyorsun",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.Sen, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative continuous tense for third person singular correctly", () => {
      const list: IList = {
        "gitmek": "gidiyor",
        "gelmek": "geliyor",
        "korkmak": "korkuyor",
        "kalkmak": "kalkıyor",
        "akmak": "akıyor",
        "uyumak": "uyuyor",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.O, Type.Indicative, Polarity.Affirmative))
    });

    it("should return affirmative continuous tense for first person plural correctly", () => {
      const list: IList = {
        "gitmek": "gidiyoruz",
        "gelmek": "geliyoruz",
        "korkmak": "korkuyoruz",
        "kalkmak": "kalkıyoruz",
        "akmak": "akıyoruz",
        "uyumak": "uyuyoruz",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.Biz, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative continuous tense for second person plural correctly", () => {
      const list: IList = {
        "gitmek": "gidiyorsunuz",
        "gelmek": "geliyorsunuz",
        "korkmak": "korkuyorsunuz",
        "kalkmak": "kalkıyorsunuz",
        "akmak": "akıyorsunuz",
        "uyumak": "uyuyorsunuz",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.Siz, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative continuous tense for third person plural correctly", () => {
      const list: IList = {
        "gitmek": "gidiyorlar",
        "gelmek": "geliyorlar",
        "korkmak": "korkuyorlar",
        "kalkmak": "kalkıyorlar",
        "akmak": "akıyorlar",
        "uyumak": "uyuyorlar",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.Onlar, Type.Indicative, Polarity.Affirmative))
    });
  });  

  describe("Continuous Tense Indicative Negative", () => {
    it("should return negative continuous tense for first person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmiyorum",
        "gelmek": "gelmiyorum",
        "korkmak": "korkmuyorum",
        "kalkmak": "kalkmıyorum",
        "akmak": "akmıyorum",
        "uyumak": "uyumuyorum",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.Ben, Type.Indicative, Polarity.Negative))
    });

    it("should return negative continuous tense for second person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmiyorsun",
        "gelmek": "gelmiyorsun",
        "korkmak": "korkmuyorsun",
        "kalkmak": "kalkmıyorsun",
        "akmak": "akmıyorsun",
        "uyumak": "uyumuyorsun",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.Sen, Type.Indicative, Polarity.Negative))
    });

     it("should return negative continuous tense for third person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmiyor",
        "gelmek": "gelmiyor",
        "korkmak": "korkmuyor",
        "kalkmak": "kalkmıyor",
        "akmak": "akmıyor",
        "uyumak": "uyumuyor",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.O, Type.Indicative, Polarity.Negative))
    });

    it("should return negative continuous tense for first person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmiyoruz",
        "gelmek": "gelmiyoruz",
        "korkmak": "korkmuyoruz",
        "kalkmak": "kalkmıyoruz",
        "akmak": "akmıyoruz",
        "uyumak": "uyumuyoruz",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.Biz, Type.Indicative, Polarity.Negative))
    });

     it("should return negative continuous tense for second person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmiyorsunuz",
        "gelmek": "gelmiyorsunuz",
        "korkmak": "korkmuyorsunuz",
        "kalkmak": "kalkmıyorsunuz",
        "akmak": "akmıyorsunuz",
        "uyumak": "uyumuyorsunuz",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.Siz, Type.Indicative, Polarity.Negative))
    });

     it("should return negative continuous tense for third person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmiyorlar",
        "gelmek": "gelmiyorlar",
        "korkmak": "korkmuyorlar",
        "kalkmak": "kalkmıyorlar",
        "akmak": "akmıyorlar",
        "uyumak": "uyumuyorlar",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Continuous, Pronoun.Onlar, Type.Indicative, Polarity.Negative))
    });
  });  

  //Past
  describe("Past Tense Indicative Affirmative", () => {
    it("should return affirmative past tense for first person singular correctly", () => {
      const list: IList = {
        "gitmek": "gittim",
        "gelmek": "geldim",
        "korkmak": "korktum",
        "kalkmak": "kalktım",
        "akmak": "aktım",
        "uyumak": "uyudum",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.Ben, Type.Indicative, Polarity.Affirmative))
    });

    it("should return affirmative past tense for second person singular correctly", () => {
      const list: IList = {
        "gitmek": "gittin",
        "gelmek": "geldin",
        "korkmak": "korktun",
        "kalkmak": "kalktın",
        "akmak": "aktın",
        "uyumak": "uyudun",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.Sen, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative past tense for third person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitti",
        "gelmek": "geldi",
        "korkmak": "korktu",
        "kalkmak": "kalktı",
        "akmak": "aktı",
        "uyumak": "uyudu",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.O, Type.Indicative, Polarity.Affirmative))
    });

    it("should return affirmative past tense for first person plural correctly", () => {
      const list: IList = {
        "gitmek": "gittik",
        "gelmek": "geldik",
        "korkmak": "korktuk",
        "kalkmak": "kalktık",
        "akmak": "aktık",
        "uyumak": "uyuduk",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.Biz, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative past tense for second person plural correctly", () => {
      const list: IList = {
        "gitmek": "gittiniz",
        "gelmek": "geldiniz",
        "korkmak": "korktunuz",
        "kalkmak": "kalktınız",
        "akmak": "aktınız",
        "uyumak": "uyudunuz",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.Siz, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative past tense for third person plural correctly", () => {
      const list: IList = {
        "gitmek": "gittiler",
        "gelmek": "geldiler",
        "korkmak": "korktular",
        "kalkmak": "kalktılar",
        "akmak": "aktılar",
        "uyumak": "uyudular",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.Onlar, Type.Indicative, Polarity.Affirmative))
    });
  });  

  describe("Past Tense Indicative Negative", () => {
    it("should return negative past tense for first person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmedim",
        "gelmek": "gelmedim",
        "korkmak": "korkmadım",
        "kalkmak": "kalkmadım",
        "akmak": "akmadım",
        "uyumak": "uyumadım",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.Ben, Type.Indicative, Polarity.Negative))
    });

    it("should return negative past tense for second person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmedin",
        "gelmek": "gelmedin",
        "korkmak": "korkmadın",
        "kalkmak": "kalkmadın",
        "akmak": "akmadın",
        "uyumak": "uyumadın",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.Sen, Type.Indicative, Polarity.Negative))
    });

     it("should return negative past tense for third person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmedi",
        "gelmek": "gelmedi",
        "korkmak": "korkmadı",
        "kalkmak": "kalkmadı",
        "akmak": "akmadı",
        "uyumak": "uyumadı",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.O, Type.Indicative, Polarity.Negative))
    });

    it("should return negative past tense for first person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmedik",
        "gelmek": "gelmedik",
        "korkmak": "korkmadık",
        "kalkmak": "kalkmadık",
        "akmak": "akmadık",
        "uyumak": "uyumadık",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.Biz, Type.Indicative, Polarity.Negative))
    });

     it("should return negative past tense for second person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmediniz",
        "gelmek": "gelmediniz",
        "korkmak": "korkmadınız",
        "kalkmak": "kalkmadınız",
        "akmak": "akmadınız",
        "uyumak": "uyumadınız",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.Siz, Type.Indicative, Polarity.Negative))
    });

     it("should return negative past tense for third person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmediler",
        "gelmek": "gelmediler",
        "korkmak": "korkmadılar",
        "kalkmak": "kalkmadılar",
        "akmak": "akmadılar",
        "uyumak": "uyumadılar",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Past, Pronoun.Onlar, Type.Indicative, Polarity.Negative))
    });
  });  

  //RPast
  describe("Remote Past Tense Indicative Affirmative", () => {
    it("should return affirmative remote past tense for first person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmişim",
        "gelmek": "gelmişim",
        "korkmak": "korkmuşum",
        "kalkmak": "kalkmışım",
        "akmak": "akmışım",
        "uyumak": "uyumuşum",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.Ben, Type.Indicative, Polarity.Affirmative))
    });

    it("should return affirmative remote past tense for second person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmişsin",
        "gelmek": "gelmişsin",
        "korkmak": "korkmuşsun",
        "kalkmak": "kalkmışsın",
        "akmak": "akmışsın",
        "uyumak": "uyumuşsun",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.Sen, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative remote past tense for third person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmiş",
        "gelmek": "gelmiş",
        "korkmak": "korkmuş",
        "kalkmak": "kalkmış",
        "akmak": "akmış",
        "uyumak": "uyumuş",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.O, Type.Indicative, Polarity.Affirmative))
    });

    it("should return affirmative remote past tense for first person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmişiz",
        "gelmek": "gelmişiz",
        "korkmak": "korkmuşuz",
        "kalkmak": "kalkmışız",
        "akmak": "akmışız",
        "uyumak": "uyumuşuz",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.Biz, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative remote past tense for second person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmişsiniz",
        "gelmek": "gelmişsiniz",
        "korkmak": "korkmuşsunuz",
        "kalkmak": "kalkmışsınız",
        "akmak": "akmışsınız",
        "uyumak": "uyumuşsunuz",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.Siz, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative remote past tense for third person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmişler",
        "gelmek": "gelmişler",
        "korkmak": "korkmuşlar",
        "kalkmak": "kalkmışlar",
        "akmak": "akmışlar",
        "uyumak": "uyumuşlar",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.Onlar, Type.Indicative, Polarity.Affirmative))
    });
  });  

  describe("Remote Past Tense Indicative Negative", () => {
    it("should return negative remote past tense for first person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmemişim",
        "gelmek": "gelmemişim",
        "korkmak": "korkmamışım",
        "kalkmak": "kalkmamışım",
        "akmak": "akmamışım",
        "uyumak": "uyumamışım",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.Ben, Type.Indicative, Polarity.Negative))
    });

    it("should return negative remote past tense for second person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmemişsin",
        "gelmek": "gelmemişsin",
        "korkmak": "korkmamışsın",
        "kalkmak": "kalkmamışsın",
        "akmak": "akmamışsın",
        "uyumak": "uyumamışsın",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.Sen, Type.Indicative, Polarity.Negative))
    });

     it("should return negative remote past tense for third person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmemiş",
        "gelmek": "gelmemiş",
        "korkmak": "korkmamış",
        "kalkmak": "kalkmamış",
        "akmak": "akmamış",
        "uyumak": "uyumamış",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.O, Type.Indicative, Polarity.Negative))
    });

    it("should return negative remote past tense for first person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmemişiz",
        "gelmek": "gelmemişiz",
        "korkmak": "korkmamışız",
        "kalkmak": "kalkmamışız",
        "akmak": "akmamışız",
        "uyumak": "uyumamışız",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.Biz, Type.Indicative, Polarity.Negative))
    });

     it("should return negative remote past tense for second person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmemişsiniz",
        "gelmek": "gelmemişsiniz",
        "korkmak": "korkmamışsınız",
        "kalkmak": "kalkmamışsınız",
        "akmak": "akmamışsınız",
        "uyumak": "uyumamışsınız",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.Siz, Type.Indicative, Polarity.Negative))
    });

     it("should return negative remote past tense for third person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmemişler",
        "gelmek": "gelmemişler",
        "korkmak": "korkmamışlar",
        "kalkmak": "kalkmamışlar",
        "akmak": "akmamışlar",
        "uyumak": "uyumamışlar",
      };
      testList(list, (x: Verb) => x.setTense(Tense.RPast, Pronoun.Onlar, Type.Indicative, Polarity.Negative))
    });
  });

  //Future
  describe("Future Tense Indicative Affirmative", () => {
    it("should return affirmative future tense for first person singular correctly", () => {
      const list: IList = {
        "gitmek": "gideceğim",
        "gelmek": "geleceğim",
        "korkmak": "korkacağım",
        "kalkmak": "kalkacağım",
        "akmak": "akacağım",
        "uyumak": "uyuyacağım",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.Ben, Type.Indicative, Polarity.Affirmative))
    });

    it("should return affirmative future tense for second person singular correctly", () => {
      const list: IList = {
        "gitmek": "gideceksin",
        "gelmek": "geleceksin",
        "korkmak": "korkacaksın",
        "kalkmak": "kalkacaksın",
        "akmak": "akacaksın",
        "uyumak": "uyuyacaksın",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.Sen, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative future tense for third person singular correctly", () => {
      const list: IList = {
        "gitmek": "gidecek",
        "gelmek": "gelecek",
        "korkmak": "korkacak",
        "kalkmak": "kalkacak",
        "akmak": "akacak",
        "uyumak": "uyuyacak",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.O, Type.Indicative, Polarity.Affirmative))
    });

    it("should return affirmative future tense for first person plural correctly", () => {
      const list: IList = {
        "gitmek": "gideceğiz",
        "gelmek": "geleceğiz",
        "korkmak": "korkacağız",
        "kalkmak": "kalkacağız",
        "akmak": "akacağız",
        "uyumak": "uyuyacağız",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.Biz, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative future tense for second person plural correctly", () => {
      const list: IList = {
        "gitmek": "gideceksiniz",
        "gelmek": "geleceksiniz",
        "korkmak": "korkacaksınız",
        "kalkmak": "kalkacaksınız",
        "akmak": "akacaksınız",
        "uyumak": "uyuyacaksınız",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.Siz, Type.Indicative, Polarity.Affirmative))
    });

     it("should return affirmative future tense for third person plural correctly", () => {
      const list: IList = {
        "gitmek": "gidecekler",
        "gelmek": "gelecekler",
        "korkmak": "korkacaklar",
        "kalkmak": "kalkacaklar",
        "akmak": "akacaklar",
        "uyumak": "uyuyacaklar",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.Onlar, Type.Indicative, Polarity.Affirmative))
    });
  });  

  describe("Future Tense Indicative Negative", () => {
    it("should return negative future tense for first person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmeyeceğim",
        "gelmek": "gelmeyeceğim",
        "korkmak": "korkmayacağım",
        "kalkmak": "kalkmayacağım",
        "akmak": "akmayacağım",
        "uyumak": "uyumayacağım",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.Ben, Type.Indicative, Polarity.Negative))
    });

    it("should return negative future tense for second person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmeyeceksin",
        "gelmek": "gelmeyeceksin",
        "korkmak": "korkmayacaksın",
        "kalkmak": "kalkmayacaksın",
        "akmak": "akmayacaksın",
        "uyumak": "uyumayacaksın",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.Sen, Type.Indicative, Polarity.Negative))
    });

     it("should return negative future tense for third person singular correctly", () => {
      const list: IList = {
        "gitmek": "gitmeyecek",
        "gelmek": "gelmeyecek",
        "korkmak": "korkmayacak",
        "kalkmak": "kalkmayacak",
        "akmak": "akmayacak",
        "uyumak": "uyumayacak",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.O, Type.Indicative, Polarity.Negative))
    });

    it("should return negative future tense for first person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmeyeceğiz",
        "gelmek": "gelmeyeceğiz",
        "korkmak": "korkmayacağız",
        "kalkmak": "kalkmayacağız",
        "akmak": "akmayacağız",
        "uyumak": "uyumayacağız",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.Biz, Type.Indicative, Polarity.Negative))
    });

     it("should return negative future tense for second person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmeyeceksiniz",
        "gelmek": "gelmeyeceksiniz",
        "korkmak": "korkmayacaksınız",
        "kalkmak": "kalkmayacaksınız",
        "akmak": "akmayacaksınız",
        "uyumak": "uyumayacaksınız",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.Siz, Type.Indicative, Polarity.Negative))
    });

     it("should return negative future tense for third person plural correctly", () => {
      const list: IList = {
        "gitmek": "gitmeyecekler",
        "gelmek": "gelmeyecekler",
        "korkmak": "korkmayacaklar",
        "kalkmak": "kalkmayacaklar",
        "akmak": "akmayacaklar",
        "uyumak": "uyumayacaklar",
      };
      testList(list, (x: Verb) => x.setTense(Tense.Future, Pronoun.Onlar, Type.Indicative, Polarity.Negative))
    });
  });    
})