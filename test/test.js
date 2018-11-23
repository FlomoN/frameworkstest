const foo = require('../dist/withfoo').default;
const should = require('chai').should();

describe('App', () => {
  describe('- foo()', () => {
    it("Should Return The Number doubled and of type number", () => {
      foo(2).should.equal(4);
      foo(2).should.be.a('number');
    });
  });
});