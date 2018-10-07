
const {Genitive, Case, Noun} = require("../Dist/Noun");
const {Person} = require("../Dist/Person");
const assert = require("assert");
describe("Module Noun", () => {
  describe("Case Test", () => {
    it("should return accusative case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Case.Accusative);
      assert.equal(araba.toString(), "araba");

      const ev = new Noun("ev");
      ev.suffix(Case.Accusative);
      assert.equal(ev.toString(), "ev");

    });

    it("should return dative case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Case.Dative);
      assert.equal(araba.toString(), "arabaya");

      const depo = new Noun("depo");
      depo.suffix(Case.Dative);
      assert.equal(depo.toString(), "depoya");

      const ev = new Noun("ev");
      ev.suffix(Case.Dative);
      assert.equal(ev.toString(), "eve");

      const kagit = new Noun("kağıt");
      kagit.suffix(Case.Dative);
      assert.equal(kagit.toString(), "kağıda");

    });

    it("should return ablative case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Case.Ablative);
      assert.equal(araba.toString(), "arabadan");

      const depo = new Noun("depo");
      depo.suffix(Case.Ablative);
      assert.equal(depo.toString(), "depodan");

      const ev = new Noun("ev");
      ev.suffix(Case.Ablative);
      assert.equal(ev.toString(), "evden");

      const kagit = new Noun("kağıt");
      kagit.suffix(Case.Ablative);
      assert.equal(kagit.toString(), "kağıttan");

    });

    it("should return locative case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Case.Locative);
      assert.equal(araba.toString(), "arabada");

      const depo = new Noun("depo");
      depo.suffix(Case.Locative);
      assert.equal(depo.toString(), "depoda");

      const ev = new Noun("ev");
      ev.suffix(Case.Locative);
      assert.equal(ev.toString(), "evde");

      const kagit = new Noun("kağıt");
      kagit.suffix(Case.Locative);
      assert.equal(kagit.toString(), "kağıtta");

    });

  });

  describe("Genitive Case Test", () => {
    //Singular
    it("should return genitive first person singular case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Person.Ben]);
      assert.equal(araba.toString(), "arabam");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Person.Ben]);
      assert.equal(depo.toString(), "depom");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Person.Ben]);
      assert.equal(ev.toString(), "evim");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Person.Ben]);
      assert.equal(kagit.toString(), "kağıdım");

    });
    
    it("should return genitive second person singular case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Person.Sen]);
      assert.equal(araba.toString(), "araban");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Person.Sen]);
      assert.equal(depo.toString(), "depon");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Person.Sen]);
      assert.equal(ev.toString(), "evin");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Person.Sen]);
      assert.equal(kagit.toString(), "kağıdın");

    });

    it("should return genitive third person singular case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Person.O]);
      assert.equal(araba.toString(), "arabası");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Person.O]);
      assert.equal(depo.toString(), "deposu");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Person.O]);
      assert.equal(ev.toString(), "evi");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Person.O]);
      assert.equal(kagit.toString(), "kağıdı");

    });
    //Plural
    it("should return genitive first person plural case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Person.Biz]);
      assert.equal(araba.toString(), "arabamız");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Person.Biz]);
      assert.equal(depo.toString(), "depomuz");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Person.Biz]);
      assert.equal(ev.toString(), "evimiz");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Person.Biz]);
      assert.equal(kagit.toString(), "kağıdımız");

    });

    it("should return genitive second person plural case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Person.Siz]);
      assert.equal(araba.toString(), "arabanız");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Person.Siz]);
      assert.equal(depo.toString(), "deponuz");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Person.Siz]);
      assert.equal(ev.toString(), "eviniz");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Person.Siz]);
      assert.equal(kagit.toString(), "kağıdınız");

    });

    it("should return genitive third person plural case correctly", () => {
      const araba = new Noun("araba");
      araba.suffix(Genitive[Person.Onlar]);
      assert.equal(araba.toString(), "arabaları");

      const depo = new Noun("depo");
      depo.suffix(Genitive[Person.Onlar]);
      assert.equal(depo.toString(), "depoları");

      const ev = new Noun("ev");
      ev.suffix(Genitive[Person.Onlar]);
      assert.equal(ev.toString(), "evleri");

      const kagit = new Noun("kağıt");
      kagit.suffix(Genitive[Person.Onlar]);
      assert.equal(kagit.toString(), "kağıtları");

    });
  });
})