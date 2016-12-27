/**
 * Created by dongsj on 2016/12/27.
 */

class Person{
    constructor(){
        this.name='dongsj'
    }
}
let person=new Person();
// Person.prototype.age=27;
let proto={
    age:30
};
Reflect.setPrototypeOf(person,proto);
console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.getPrototypeOf(person)==Person.prototype);
console.log(Reflect.getPrototypeOf(person)==proto);