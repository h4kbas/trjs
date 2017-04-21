const Verb = require('./Verb.js');

let v = new Verb('gel');
v.Tense('Simdiki','Ben','+?');
console.log(v.text);