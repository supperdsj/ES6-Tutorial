/**
 * Created by dongsj on 2016/12/27.
 */

class Person {
    constructor(name) {
        this.name = name
    }
}

function TopObj() {
    this.age = 27
}
let person = Reflect.construct(Person, ['dongsj'], TopObj);
console.log(person.__proto__ == Person.prototype);
console.log(person.__proto__ == TopObj.prototype);
console.log(person.name);

