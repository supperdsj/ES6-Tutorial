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

console.log(Reflect.ownKeys(person));
console.log(Reflect.ownKeys(mum));