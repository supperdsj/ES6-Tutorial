/**
 * Created by dongsj on 2016/12/27.
 */

class Person{
    constructor(){
        this.name='dongsj'
    }
}
let person=new Person();
let proto={
    age:30,
    greet(){
        console.log('hello');
    }
};
Reflect.setPrototypeOf(person,proto);
Reflect.apply(person.greet,null,[]);