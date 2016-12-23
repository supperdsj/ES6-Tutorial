/**
 * Created by dongsj on 2016/12/23.
 */
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('hello ' + this.name);
    }
}
let person = new Person('dongsj');
console.log(person);
person.greet();