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
};
let proxy = new Proxy({}, handler);

Reflect.setPrototypeOf(person,proxy);

console.log(person.name);
console.log(person.age);