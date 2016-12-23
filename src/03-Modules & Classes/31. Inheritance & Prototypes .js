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
class Dongsj extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    greet() {
        super.greet();
        console.log(`age:${this.age}`);
    }
    greetTwice(){
        super.greet();
        this.greet();
    }
}
let person = new Person('dongsj');
let dongsj = new Dongsj('dsj', 27);
console.log(person.__proto__);
console.log(dongsj.__proto__);
console.log(dongsj.__proto__==Dongsj.prototype);
console.log(dongsj.__proto__==Person.prototype);