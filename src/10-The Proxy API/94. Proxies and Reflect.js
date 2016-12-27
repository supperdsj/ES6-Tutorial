/**
 * Created by dongsj on 2016/12/27.
 */

let person = {
    name: 'dongsj'
};
let handler = {
    get: function (target, name) {
        return name in target ? target[name] : 'not exist'
    },
    set: function (target, property, value) {
        if (value >= 0) {
            Reflect.set(target, property, value);
        }
    }
};
let proxy = new Proxy(person, handler);

console.log(proxy.name);
proxy.age = -1;
console.log(proxy.age);
proxy.age = 27;
console.log(proxy.age);