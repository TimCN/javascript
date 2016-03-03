const http = require('http');

const merge = require('merge-descriptors');




var obj1 = {};

Object.defineProperties(obj1,{
  "prop1":{
    value:true,
    writable:true,
    enumerable:true,
    configurable:true
  },
  "prop2":{
    value:"Hello",
    writable:false,
    enumerable:true
  }
});

var obj2 =Object.create(Object.prototype,{
  "prop1":{
    value:false,
    writable:false,
    enumerable:true,
    configurable:true
  },
  "prop3":{
    value:"val3",
    writable:false,
    enumerable:true
  }
})
var obj3 =Object.create(Object.prototype,{
  "prop1":{
    value:false,
    writable:false,
    enumerable:true,
    configurable:true
  },
  "prop3":{
    value:"val3",
    writable:false,
    enumerable:true
  }
})

merge(obj2,obj1);
merge(obj3,obj1,false);



module.exports = {
  obj1,
  obj2,
  obj3
}
