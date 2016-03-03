const assert = require('assert');

const demo1 = require('..');

describe('obj2.prop1\'s value',function(){
  assert.strictEqual(demo1.obj2.prop1,true);
})
