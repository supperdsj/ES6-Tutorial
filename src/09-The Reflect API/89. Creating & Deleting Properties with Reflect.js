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
Reflect.defineProperty(person, 'hobbies', {
    writable: true,
    configurable: true,
    value: ['Sports', 'Eating']
});
console.log(Reflect.ownKeys(person));
console.log(person.hobbies);
person.hobbies=['nothings'];
console.log(person.hobbies);
// delete person.hobbies;
Reflect.deleteProperty(person,'hobbies');
console.log(person.hobbies);
