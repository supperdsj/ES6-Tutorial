/**
 * Created by dongsj on 2016/12/27.
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(prefix) {
        console.log(`${prefix} hello ${this.name} , age ${this.age}`);
    }
}
let person = Reflect.construct(Person, ['dongsj', 27]);
person.greet();
Reflect.apply(person.greet, person, ['1']);
Reflect.apply(person.greet, {}, ['2']);
Reflect.apply(person.greet, {name:'test',age:-1}, ['3']);