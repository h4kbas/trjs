const Verb = require('./Verb.js');

let v = new Verb('al');
v.Tense('Genis','Ben','+?');
console.log(v.text);
