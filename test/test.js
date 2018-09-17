const assert = require("assert");
describe("Example", () => {
  it("should conjugate the verb correctly with given tense, situation and subject", () => {
    const Verb = require('../Verb.js');
    let v = new Verb('al');
    v.Tense('Genis','Ben','+?');
    assert.equal(v.text, "alır mıyım");
  });
});