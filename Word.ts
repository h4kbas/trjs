
export class Word {
  private vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
  private fortises = ["p", "ç", "t", "k", "f", "h", "s", "ş"];
  private backs = ["a", "e"];
  private flats = ["ı", "i", "u", "ü"];
  protected Root = "";
  protected Str = "";
  protected Suffixes: string[] = [];
  constructor(root: string) {
    this.Root = root;
    this.Str = root;
  }

  public toString(): string {
    this.Str = this.Root;
    this.Suffixes.map((x) => this._suffix(x));
    return this.Str;
  }
  public toRoot(): string {
    return this.Root;
  }
  protected _suffix(x: string): void {
    if (!x) { return; }
    const ret = this.harmonify(this.Str, x);
    this.Str = ret[0]; x = ret[1]
    this.Str = this.consonantLenition(this.Str, x);
    this.Str += this.consonantAssimilation(this.Str, x);
  }

  public suffix(x: string): void {
    this.Suffixes.push(x);
  }

  public desuffix(x: string): void {
    const y = this.Suffixes.indexOf(x);
    if (y > -1) {
      this.Suffixes.splice(y, 1);
    }
  }

  // Conditionals
  public isBack(x: string): boolean {
    return this.backs.includes(x);
  }
  public isFlat(x: string): boolean {
    return this.flats.includes(x);
  }
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
    x = x || this.Str;
    for (let i = x.length; i >= 0; i--) {
      if (this.isVowel(x[i - 1])) {
        return x[i - 1];
      }
    }
  }
  public lastConsonant(x?: string): string {
    x = x || this.Str;
    for (let i = x.length; i >= 0; i--) {
      if (this.isConsonant(x[i - 1])) {
        return x[i - 1];
      }
    }
  }
  public firstVowel(x?: string): string {
    x = x || this.Str;
    for (let i = 0; i < x.length; i++) {
      if (this.isVowel(x[i])) {
        return x[i];
      }
    }
  }
  public firstConsonant(x?: string): string {
    x = x || this.Str;
    for (let i = 0; i < x.length; i++) {
      if (this.isConsonant(x[i])) {
        return x[i];
      }
    }
  }
  public allConsonants(x?: string): string[] {
    x = x || this.Str;
    const ret = [];
    for (const l of x) {
        if (this.isConsonant(l)) { ret.push(l); }
    }
    return ret;
  }
  public allVowels(x?: string): string[] {
    x = x || this.Str;
    const ret = [];
    for (const l of x) {
        if (this.isVowel(l)) { ret.push(l); }
    }
    return ret;
  }
  public firstLetter(x?: string): string {
    x = x || this.Str;
    return x[0];
  }
  public lastLetter(x?: string): string {
    x = x || this.Str;
    return x[x.length - 1];
  }

  // Counts
  public consonantLength(x?: string): number {
    x = x || this.Str;
    return this.allConsonants(x).length;
  }
  public vowelLength(x?: string): number {
    x = x || this.Str;
    return this.allVowels(x).length;
  }

  // Harmonies
  public backnessHarmony(x?: string): string {
    x = x || this.Str;
    const lastw = this.lastVowel(x);
    if (["i", "ü", "e", "ö"].includes(lastw)) {
      return "e";
    } else if (["ı", "u", "a", "o"].includes(lastw)) {
        return "a";
    }
  }
  
  public flatnessHarmony(x?: string): string {
    x = x || this.Str;
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

  public harmonify(x: string, y: string): string[] {
    const left = x.split("");
    const out = y.split("");
    let lastw = this.lastVowel(x);
    for (let i = 0; i < out.length; i++) {
      //Flatness harmony
      if (out[i] === "#") {
        out[i] = this.backnessHarmony(lastw);
        lastw = out[i];
      }
      //Backness Harmony
      else if (out[i] === "*") {
        out[i] = this.flatnessHarmony(lastw);
        lastw = out[i];
      } 
      //Lastw
      else if (this.isVowel(y[i])) {
        lastw = out[i];
      } 
      //Drop if vowel
      else if (out[i] === "&") {
        out[i] = "";
        if (this.isVowel(this.lastLetter(x))) {
          i++;
          out[i] = "";
        }
      }
       //Drop if vowel
       else if (out[i] === "/") {
        out[i] = "";
        if (this.isVowel(this.lastLetter(x))) {
          left[left.length - 1] = "";
        }
      }  
      //Drop if not vowel
      else if (out[i] === "%") {
        out[i] = ""; i++;
        if (!this.isVowel(this.lastLetter(x))) {
          out[i] = "";
        }
      }
      //Change #* if necessary
      else if (out[i] === "!") {
        const vowels = this.allVowels(x);
        if(vowels.length > 1){
          let ct = vowels[0];
          let expected;
          let harmony = true;
          for(let j = 0; j < vowels.length; j++){
            expected = this.backnessHarmony(ct);
            harmony = (expected == vowels[j+1])
            ct = harmony ? this.backnessHarmony(lastw) : this.flatnessHarmony(lastw);
          }
          out[i] = ct
          lastw = out[i];
        }
        else{
          const first = this.firstLetter(x)
          const last = this.lastLetter(x)
          
         if( (["b", "k"].includes(first) && last == "l") ||
             (first == "d" && (last == "l" || last == "r"))   || 
             (first == "g" && ["ö", "e"].includes(x[1])&& (last == "l" || last == "r"))   || 
             (this.isVowel(first) && last == "l") || 
             first !in ["y", "ç"] || ["v"].includes(first)){
            const list: any = {a: "ı", e: "i", "ı": "a", i:"i", o: "u", "ö": "ü", u:"u", "ü":"e"};
            if(list[vowels[0]])
              out[i] = list[vowels[vowels.length - 1]];
            lastw = out[i];
          }
          else{
            out[i] = this.backnessHarmony(vowels[vowels.length - 1])
            lastw = out[i];
          }
        }

      }
    }
    return [left.join(""), out.join("")];
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
    const firstx = this.firstLetter(x);
    const rule: any = {p : "b", ç : "c", t : "d"};
    if (this.isVowel(this.firstLetter(y))) {
      if (lastx === "k") {
       
        if (x.length > 1 && x[x.length - 2] === "n") {
          return x.slice(0, -1) + "g";
        }
        else if(x.length > 1 && this.isConsonant(x[x.length - 2]) && !this.isFortis(x[x.length - 2])){
          return x;
        } 
        else {
          const l = this.vowelLength(x);
          if(l > 2)
              return x.slice(0, -1) + "ğ";
          else{
            if(l == 2){
              if(this.isFortis(firstx) || this.isVowel(firstx)){
                return x.slice(0, -1) + "ğ";
              }
              else if(!this.isFortis(firstx)){
                if(["g", "y", "d"].includes(firstx)){
                  const ac = this.allConsonants(x);
                  if(ac.length > 1 && ac[ac.length - 2] == "r")
                    return x;
                  else
                    return x.slice(0, -1) + "ğ";
                }
                else
                  return x;
              }
              else
                return x;
            }
            else
              return x;
          }
        }
      } 
      else if (lastx in rule) {
          return x.slice(0, -1) + rule[lastx];
      } 
      else return x;
    } 
    else return x;
  }
}
