/**
 * Created by dongsj on 2016/12/27.
 */

let person = {
    name: 'dongsj'
};
let handler = {
    get: function (target, name) {
        console.log('handler 1');
        console.log(target);
        console.log(name);
        return name in target ? target[name] : 'not exist 1'
    },
};
let protoHandler = {
    get: function (target, name) {
        console.log('handler 2');
        console.log(target);
        console.log(name);
        return name in target ? target[name] : 'not exist 2'
    },
};
let proxy = new Proxy({}, handler);
let protoProxy = new Proxy(proxy, protoHandler);
Reflect.setPrototypeOf(person, protoProxy);

console.log(person.name);
console.log(person.age);