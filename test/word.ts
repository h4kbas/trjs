import assert from "assert"
import 'mocha';
import {Word} from "../src/lib/Word";

const word = new Word("gelir");

describe("Module Word", () => {
  describe("Consonants, Vowels & Harmonies", () => {
    it("should return all possible consonants correctly", () => {
      assert.deepEqual(word.allConsonants(), [ "g", "l", "r" ]);
    });

    it("should return  all possible vowels correctly", () => {
      assert.deepEqual(word.allVowels(), [ "e", "i" ]);
    });

    it("should find proper vowel a/e to build backness harmony", () => {
      assert.equal(word.backnessHarmony(), "e");
    });

    it("should find proper vowel ı/i/u/ü to build flatness harmony", () => {
      assert.equal(word.flatnessHarmony(), "i");
    });
  });

  describe("Consonants, Vowel Counting", () => {
    it("should find how many consonants exists in the word", () => {
      assert.equal(word.consonantLength(), 3);
    });

    it("should find how many vowels exists in the word", () => {
      assert.equal(word.vowelLength(), 2);
    });
  });
  describe("Firsts & Lasts", () => {
    it("should find the first letter of the word", () => {
      assert.equal(word.firstLetter(), "g");
    });

    it("should find the last letter of the word", () => {
      assert.equal(word.lastLetter(), "r");
    });

    it("should find the first consonant of the word", () => {
      assert.equal(word.firstConsonant(), "g");
    });

    it("should find the last consonant of the word", () => {
      assert.equal(word.lastConsonant(), "r");
    });

    it("should find the first vowel of the word", () => {
      assert.equal(word.firstVowel(), "e");
    });

    it("should find the last vowel of the word", () => {
      assert.equal(word.lastVowel(), "i");
    });
  });
  describe("Validation Functions", () => {
    it("should validate given argument is a consonant or not", () => {
      assert.equal(word.isConsonant("g"), true);
      assert.equal(word.isConsonant("a"), false);
    });

    it("should validate given argument is a vowel or not", () => {
      assert.equal(word.isVowel("a"), true);
      assert.equal(word.isVowel("c"), false);
    });

    it("should validate given argument is a fortis or not", () => {
      assert.equal(word.isFortis("p"), true);
      assert.equal(word.isFortis("h"), true);
    });

    it("should validate given argument is a lenis or not", () => {
      assert.equal(word.isLenis("b"), true);
      assert.equal(word.isLenis("h"), false);
    });
  });
  describe("Assimilation & Lenition", () => {
    it("should find suitable assimilated form of given second argument while looking to first one if needed", () => {
      const list = [
        ["kitap", "cı", "çı"],
        ["kağıt", "ları", "ları"]
      ];
      list.map(x => {
        assert.equal(word.consonantAssimilation(x[0], x[1]), x[2]);
      })

    });

    it("should change the form of the first argument while looking at the second one if needed", () => {
      const list = [
        ["kapak", "ı", "kapağ"],
        ["renk", "i", "reng"],
        ["ak", "ı", "ak"]
      ];
      list.map(x => {
        assert.equal(word.consonantLenition(x[0], x[1]), x[2]);
      })

    });
  });
});
