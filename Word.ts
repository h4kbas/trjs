
export class Word {
  private vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
  private fortises = ["p", "ç", "t", "k", "f", "h", "s", "ş"];
  private Root: string = "";

  constructor(root: string) {
    if (root.endsWith("mak") || root.endsWith("mek")) {
      root = root.slice(0, -3);
    }
    this.Root = root;
  }

  public toString(): string {
    return this.Root;
  }
  public suffix(x: string): void {
    if (!x) { return; }
    console.log(x);
    x = this.harmonify(this.Root, x);
    console.log(x);

    console.log(this.Root);
    this.Root = this.consonantLenition(this.Root, x);
    console.log(this.Root);
    this.Root += this.consonantAssimilation(this.Root, x);
    console.log(this.Root);
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
    for (let i = x.length; i >= 0; i--) {
      if (this.isVowel(x[i - 1])) {
        return x[i - 1];
      }
    }
  }
  public lastConsonant(x?: string): string {
    x = x || this.Root;
    for (let i = x.length; i >= 0; i--) {
      if (this.isConsonant(x[i - 1])) {
        return x[i - 1];
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

  // Harmonify

  public harmonify(x: string, y: string): string {
    const out = y.split("");
    let lastw = this.lastVowel(x);
    for (let i = 0; i < out.length; i++) {
      if (out[i] === "#") {
        out[i] = this.backnessHarmony(lastw);
        lastw = out[i];
      } else if (out[i] === "*") {
        out[i] = this.flatnessHarmony(lastw);
        lastw = out[i];
      } else if (this.isVowel(y[i])) {
        lastw = out[i];
      } else if (out[i] === "&") {
        out[i] = "";
        if (this.isVowel(this.lastLetter(x))) {
          i++;
          out[i] = "";
        }
       } else if (out[i] === "%") {
        out[i] = ""; i++;
        if (!this.isVowel(this.lastLetter(x))) {
          out[i] = "";
        }
       }
    }
    return out.join("");
  }

  // Assimilation
  public consonantAssimilation(x: string, y: string): string {
    const lastx = this.lastLetter(x);
    const firsty = this.firstLetter(y);
    const rule: any = {b : "p", c : "ç", d : "t", g : "k"};
    if (this.isFortis(lastx) && this.isLenis(firsty) && (firsty in rule)) {
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
      } else if (lastx in rule) {
        return x.slice(0, -1) + rule[lastx];
      } else {return x; }
    } else {  return x; }
  }
}
