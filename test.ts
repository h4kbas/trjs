import { Word } from "./Word";

const word = new Word("gelir");

console.log(
  word.allConsonants(), // [ 'g', 'l', 'r' ]
  word.allVowels(), // [ 'e', 'i' ]

  word.backnessHarmony(), // "e"
  word.flatnessHarmony(), // "i"

  word.consonantLength(), // 3
  word.vowelLength(), // 2

  word.firstLetter(), // "g"
  word.lastLetter(), // "r"

  word.firstConsonant(), // "g"
  word.lastConsonant(), // "r"

  word.firstVowel(), // "e"
  word.lastVowel(), // "i"

  word.isConsonant("g"), // true
  word.isVowel("a"), // true

  word.isFortis("p"), // true
  word.isLenis("b"), // true

  word.consonantAssimilation("kitap", "cı"), // çı

  word.consonantLenition("kapak", "ı"), // kapağ
  word.consonantLenition("renk", "i"), // reng
  word.consonantLenition("ak", "ı"), // ak
);
