/**
 * Created by dongsj on 2016/12/26.
 */

let obj1 = {
    a: 1
};
let obj2 = {
    b: 2
};
let obj = Object.assign(obj1, obj2);
console.log(obj);

class Obj1 {
    constructor() {
        this.a = 1;
    }
}
class Obj2 {
    constructor() {
        this.b = 2;
    }
}
let o1 = new Obj1();
let o2 = new Obj2();
let o = Object.assign(o1, o2);
console.log(o);
console.log(o.prototype);
console.log(o.__proto__);

console.log(o.prototype === o1.prototype);
console.log(o.__proto__ === Obj1.prototype);
console.log(o.__proto__ === o1.__proto__);
console.log(o instanceof Obj1);

console.log(o.prototype === o2.prototype);
console.log(o.__proto__ === Obj2.prototype);
console.log(o.__proto__ === o2.__proto__);
console.log(o instanceof Obj2);

let oe = Object.assign({}, o1, o2);
console.log(oe);
console.log(oe.__proto__);
console.log(oe.__proto__ === Object.prototype);

let person={
    name:'dongsj'
};
let boss={
    name:'me'
};
console.log(person.__proto__===Object.prototype);
Object.setPrototypeOf(person,boss);
console.log(person.__proto__);
console.log(person.__proto__===Object.prototype);
console.log(person.name);
console.log(person.__proto__.name);
