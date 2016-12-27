/**
 * Created by dongsj on 2016/12/27.
 */

class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        console.log('getter');
        return this._name;
    }

    set name(value) {
        console.log('setter');
        this._name = value;
    }
}
let mum = {
    _name: 'Mum'
};
let person = new Person('dongsj', 27);

console.log(Reflect.get(person, 'name'));
console.log(Reflect.get(person, 'name', mum));
console.log(Reflect.set(person, 'name', 'dsj'));
console.log(Reflect.set(person, 'name', 'm1', mum));
console.log(person.name);
console.log(mum._name);
console.log(Reflect.has(person, 'name'));
console.log(Reflect.has(mum, 'name'));
console.log(Reflect.has(mum, '_name'));