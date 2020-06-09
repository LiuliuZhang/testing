//const assert = require('assert')
const {should, expect, assert} = require('chai')
const {add, mul} = require('../src/math')

//assert.equal(add(2,3), 5);

should();
//BDD
add(2,3).should.equal(5);
expect(add(2,3)).to.equal(5);

//TDD
assert.equal(add(2,3), 5);