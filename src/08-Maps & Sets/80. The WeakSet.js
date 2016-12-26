/**
 * Created by dongsj on 2016/12/26.
 */

let obj = {name: 1};
let objSet = new WeakSet([{name: 1}, {name: 1}, obj, obj]);

console.log(objSet.has(obj));
console.log(objSet.has({name:1}));
objSet.delete(obj);
console.log(objSet.has(obj));
