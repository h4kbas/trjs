import assert = require("assert");
import { Verb } from "./Verb";
import { Pronouns } from "./Pronouns";
import { Tenses } from "./Tenses";
import { Moods } from "./Moods";
import { Polarities } from "./Polarities";

const list = ["açılmak", "açmak", "ağlamak", "akmak", "almak", "anlamak", "anlatmak", "aramak", "artmak", "aşmak", "atılmak", "atmak", "ayırmak", "ayrılmak", "azalmak", "bağırmak", "bağlamak", "bakmak", "basmak", "başlamak", "beklemek", "belirlemek", "belirlenmek", "belirtmek", "benzemek", "bırakmak", "bilinmek", "bilmek", "binmek", "bitirmek", "bitmek", "bozulmak", "bulmak", "bulunmak", "büyümek", "çalışmak", "çalmak", "çekilmek", "çekmek", "çevirmek", "çıkarılmak", "çıkarmak", "çıkmak", "çizmek", "dayanmak", "değerlendirmek", "değişmek", "değiştirmek", "demek", "devam etmek", "dikkat etmek", "dilemek", "dinlemek", "doğmak", "dolaşmak", "doldurmak", "dönmek", "dönüşmek", "durmak", "duymak", "düşmek", "düşünmek", "düzenlemek", "eklemek", "etkilemek", "etmek", "evlenmek", "fark etmek", "geçirmek", "geçmek", "gelişmek", "geliştirmek", "gelmek", "gerçekleşmek", "gerekmek", "getirmek", "girmek", "gitmek", "giymek", "göndermek", "görmek", "görünmek", "görüşmek", "göstermek", "götürmek", "gülmek", "hareket etmek", "hatırlamak", "hazırlamak", "hazırlanmak", "hissetmek", "içmek", "ifade etmek", "ilerlemek", "ilgilenmek", "inanmak", "incelemek", "inmek", "istemek", "istenmek", "izlemek", "kabul etmek", "kaçmak", "kaldırmak", "kalkmak", "kalmak", "kapanmak", "kapatmak", "karışmak", "karıştırmak", "karşılamak", "karşılaşmak", "katılmak", "kaybetmek", "kazanmak", "kesilmek", "kesmek", "kılmak", "konuşmak", "korkmak", "korumak", "koşmak", "koymak", "kullanılmak", "kullanmak", "kurmak", "kurtarmak", "kurtulmak", "kurulmak", "okumak", "olmak", "oluşmak", "oturmak", "oynamak", "ödemek", "öğrenmek", "öldürmek", "ölmek", "paylaşmak", "sağlamak", "sağlanmak", "sahip olmak", "sanmak", "satın almak", "satmak", "saymak", "seçmek","sevmek", "seyretmek", "sokmak", "sormak", "söylemek", "söylenmek", "söz etmek", "sunmak", "sunulmak", "sürdürmek", "sürmek", "tanımak", "taşımak", "tercih etmek", "toplamak", "toplanmak", "tutmak", "tutulmak", "uğraşmak", "ulaşmak", "unutmak", "uygulamak", "uygulanmak", "uymak", "uyumak", "uzanmak", "uzatmak", "üretmek", "varmak", "verilmek", "vermek", "vurmak", "yakalamak", "yaklaşmak", "yakmak", "yanmak", "yapılmak", "yapmak", "yaptırmak", "yararlanmak", "yaratmak", "yardımcı olmak", "yaşamak", "yatmak", "yayılmak", "yayımlanmak", "yazılmak", "yazmak", "yemek", "yetmek", "yükselmek", "yürümek"];

//const list = ["gerek"]

function show(x: string, t: Tenses){
  let v = new Verb(x);
  v.setTense(t, Pronouns.Ben, Moods.Indicative, Polarities.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronouns.Ben, Moods.Indicative, Polarities.Negative);
  console.log(v.toString(), "\n")

  v = new Verb(x);
  v.setTense(t, Pronouns.Sen, Moods.Indicative, Polarities.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronouns.Sen, Moods.Indicative, Polarities.Negative);
  console.log(v.toString(), "\n")

  v = new Verb(x);
  v.setTense(t, Pronouns.O, Moods.Indicative, Polarities.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronouns.O, Moods.Indicative, Polarities.Negative);
  console.log(v.toString(), "\n")

  v = new Verb(x);
  v.setTense(t, Pronouns.Biz, Moods.Indicative, Polarities.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronouns.Biz, Moods.Indicative, Polarities.Negative);
  console.log(v.toString(), "\n")

  v = new Verb(x);
  v.setTense(t, Pronouns.Siz, Moods.Indicative, Polarities.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronouns.Siz, Moods.Indicative, Polarities.Negative);
  console.log(v.toString(), "\n")

  v = new Verb(x);
  v.setTense(t, Pronouns.Onlar, Moods.Indicative, Polarities.Affirmative);
  console.log(v.toString())

  v = new Verb(x);
  v.setTense(t, Pronouns.Onlar, Moods.Indicative, Polarities.Negative);
  console.log(v.toString(), "\n")
}

list.forEach(x => {
  show(x, Tenses.Present);
  show(x, Tenses.Past);
  show(x, Tenses.Continuous);
  show(x, Tenses.Future);

});