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
let person = new Person('dongsj', 27);
console.log(Reflect.isExtensible(person));
Reflect.preventExtensions(person);
console.log(Reflect.isExtensible(person));
Reflect.defineProperty(person, 'hobbies', {
    writable: true,
    configurable: true,
    value: ['Sports', 'Eating']
});
console.log(Reflect.ownKeys(person));
console.log(person.hobbies);
