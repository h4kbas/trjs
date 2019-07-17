import assert = require("assert");
import { Verb } from "./lib/Verb";
import { Pronoun } from "./lib/Pronoun";
import { Tense } from "./lib/Tense";
import { Type } from "./lib/Type";
import { Polarity } from "./lib/Polarity";

const list = ["açılmak", "açmak", "ağlamak", "akmak", "almak", "anlamak", "anlatmak", "aramak", "artmak", "aşmak", "atılmak", "atmak", "ayırmak", "ayrılmak", "azalmak", "bağırmak", "bağlamak", "bakmak", "basmak", "başlamak", "beklemek", "belirlemek", "belirlenmek", "belirtmek", "benzemek", "bırakmak", "bilinmek", "bilmek", "binmek", "bitirmek", "bitmek", "bozulmak", "bulmak", "bulunmak", "büyümek", "çalışmak", "çalmak", "çekilmek", "çekmek", "çevirmek", "çıkarılmak", "çıkarmak", "çıkmak", "çizmek", "dayanmak", "değerlendirmek", "değişmek", "değiştirmek", "demek", "devam etmek", "dikkat etmek", "dilemek", "dinlemek", "doğmak", "dolaşmak", "doldurmak", "dönmek", "dönüşmek", "durmak", "duymak", "düşmek", "düşünmek", "düzenlemek", "eklemek", "etkilemek", "etmek", "evlenmek", "fark etmek", "geçirmek", "geçmek", "gelişmek", "geliştirmek", "gelmek", "gerçekleşmek", "gerekmek", "getirmek", "girmek", "gitmek", "giymek", "göndermek", "görmek", "görünmek", "görüşmek", "göstermek", "götürmek", "gülmek", "hareket etmek", "hatırlamak", "hazırlamak", "hazırlanmak", "hissetmek", "içmek", "ifade etmek", "ilerlemek", "ilgilenmek", "inanmak", "incelemek", "inmek", "istemek", "istenmek", "izlemek", "kabul etmek", "kaçmak", "kaldırmak", "kalkmak", "kalmak", "kapanmak", "kapatmak", "karışmak", "karıştırmak", "karşılamak", "karşılaşmak", "katılmak", "kaybetmek", "kazanmak", "kesilmek", "kesmek", "kılmak", "konuşmak", "korkmak", "korumak", "koşmak", "koymak", "kullanılmak", "kullanmak", "kurmak", "kurtarmak", "kurtulmak", "kurulmak", "okumak", "olmak", "oluşmak", "oturmak", "oynamak", "ödemek", "öğrenmek", "öldürmek", "ölmek", "paylaşmak", "sağlamak", "sağlanmak", "sahip olmak", "sanmak", "satın almak", "satmak", "saymak", "seçmek","sevmek", "seyretmek", "sokmak", "sormak", "söylemek", "söylenmek", "söz etmek", "sunmak", "sunulmak", "sürdürmek", "sürmek", "tanımak", "taşımak", "tercih etmek", "toplamak", "toplanmak", "tutmak", "tutulmak", "uğraşmak", "ulaşmak", "unutmak", "uygulamak", "uygulanmak", "uymak", "uyumak", "uzanmak", "uzatmak", "üretmek", "varmak", "verilmek", "vermek", "vurmak", "yakalamak", "yaklaşmak", "yakmak", "yanmak", "yapılmak", "yapmak", "yaptırmak", "yararlanmak", "yaratmak", "yardımcı olmak", "yaşamak", "yatmak", "yayılmak", "yayımlanmak", "yazılmak", "yazmak", "yemek", "yetmek", "yükselmek", "yürümek"];

//const list = ["gerek"]

function show(x: string, t: Tense){
  let v = new Verb(x);
  v.setTense(t, Pronoun.Ben, Type.Indicative, Polarity.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronoun.Ben, Type.Indicative, Polarity.Negative);
  console.log(v.toString(), "\n")

  v = new Verb(x);
  v.setTense(t, Pronoun.Sen, Type.Indicative, Polarity.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronoun.Sen, Type.Indicative, Polarity.Negative);
  console.log(v.toString(), "\n")

  v = new Verb(x);
  v.setTense(t, Pronoun.O, Type.Indicative, Polarity.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronoun.O, Type.Indicative, Polarity.Negative);
  console.log(v.toString(), "\n")

  v = new Verb(x);
  v.setTense(t, Pronoun.Biz, Type.Indicative, Polarity.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronoun.Biz, Type.Indicative, Polarity.Negative);
  console.log(v.toString(), "\n")

  v = new Verb(x);
  v.setTense(t, Pronoun.Siz, Type.Indicative, Polarity.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronoun.Siz, Type.Indicative, Polarity.Negative);
  console.log(v.toString(), "\n")

  v = new Verb(x);
  v.setTense(t, Pronoun.Onlar, Type.Indicative, Polarity.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronoun.Onlar, Type.Indicative, Polarity.Negative);
  console.log(v.toString(), "\n")
}

list.forEach(x => {
  show(x, Tense.Present);
  show(x, Tense.Past);
  show(x, Tense.Continuous);
  show(x, Tense.Future);

});