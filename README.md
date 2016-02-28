# TrJS
A Library Written In CoffeeScript That Uses Turkish Grammer and Composes Turkish Sentences


This provides you to create Turkish sentences that has correct conjugated and has correct linkings.

### Simple Example
```coffeescript
Sentence = require "./Sentence"	

s = new Sentence "küçük;çocuk|ev>4|+?]3gel" # Output: Küçük çocuk evden gelecek mi?
console.log do s.BuildSentence
```
