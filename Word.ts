
export class Word {
  private vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
  private fortises = ["p", "ç", "t", "k", "f", "h", "s", "ş"];
  private Root: string = "";

  constructor(root: string) {
    this.Root = root;
  }
  public suffix(x: string): void {

    // this.Root += x;
  }

  // Conditionals
  public isVowel(x: string): boolean {
    return this.vowels.includes(x);
  }
  public isConsonant(x: string): boolean {
    return !this.vowels.includes(x);
  }
  public isFortis(x: string): boolean {
    return this.fortises.includes(x);
  }
  public isLenis(x: string): boolean {
    return !this.fortises.includes(x);
  }
  // Getters
  public lastVowel(x?: string): string {
    x = x || this.Root;
    for (let i = x.length - 1; i > 0; i--) {
      if (this.isVowel(x[i])) {
        return x[i];
      }
    }
  }
  public lastConsonant(x?: string): string {
    x = x || this.Root;
    for (let i = x.length - 1; i > 0; i--) {
      if (this.isConsonant(x[i])) {
        return x[i];
      }
    }
  }
  public firstVowel(x?: string): string {
    x = x || this.Root;
    for (let i = 0; i < x.length; i++) {
      if (this.isVowel(x[i])) {
        return x[i];
      }
    }
  }
  public firstConsonant(x?: string): string {
    x = x || this.Root;
    for (let i = 0; i < x.length; i++) {
      if (this.isConsonant(x[i])) {
        return x[i];
      }
    }
  }
  public allConsonants(x?: string): string[] {
    x = x || this.Root;
    const ret = [];
    for (const l of x) {
        if (this.isConsonant(l)) { ret.push(l); }
    }
    return ret;
  }
  public allVowels(x?: string): string[] {
    x = x || this.Root;
    const ret = [];
    for (const l of x) {
        if (this.isVowel(l)) { ret.push(l); }
    }
    return ret;
  }
  public firstLetter(x?: string): string {
    x = x || this.Root;
    return x[0];
  }
  public lastLetter(x?: string): string {
    x = x || this.Root;
    return x[x.length - 1];
  }

  // Counts
  public consonantLength(x?: string): number {
    x = x || this.Root;
    return this.allConsonants(x).length;
  }
  public vowelLength(x?: string): number {
    x = x || this.Root;
    return this.allVowels(x).length;
  }

  // Harmonies
  public backnessHarmony(x?: string): string {
    x = x || this.Root;
    const lastw = this.lastVowel(x);
    if (["i", "ü", "e", "ö"].includes(lastw)) {
      return "e";
    } else if (["ı", "u", "a", "o"].includes(lastw)) {
        return "a";
    }
  }
  public flatnessHarmony(x?: string): string {
    x = x || this.Root;
    const lastw = this.lastVowel(x);
    if (["i", "e"].includes(lastw)) {
        return "i";
    } else if (["ü", "ö"].includes(lastw)) {
        return "ü";
    } else if (["ı", "a"].includes(lastw)) {
        return "ı";
    } else if (["u", "o"].includes(lastw)) {
        return "u";
    }
  }

  // Assimilation
  public consonantAssimilation(x: string, y: string): string {
    const lastx = this.lastLetter(x);
    const firsty = this.firstLetter(y);
    const rule: any = {b : "p", c : "ç", d : "t", g : "k"};
    if (this.isFortis(lastx) && this.isLenis(firsty)) {
      return rule[firsty] + y.slice(1);
    } else { return y; }
  }
  // Lenition
  public consonantLenition(x: string, y: string): string {
    const lastx = this.lastLetter(x);
    const rule: any = {p : "b", ç : "c", t : "d", k : "g"};
    if (this.isVowel(this.firstLetter(y))) {
      if (lastx === "k") {
        if (x.length > 1 && x[x.length - 2] === "n") {
          return x.slice(0, -1) + "g";
        } else {
          return x.slice(0, -1) + "ğ";
        }
      } else {
        return x.slice(0, -1) + rule[lastx];
      }
    } else {  return x; }
  }
}
