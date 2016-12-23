/**
 * Created by dongsj on 2016/12/23.
 */
class Person{
    constructor(name){
        this._name = name;
    }

    set name(value) {
        console.log('setter');
        this._name = value;
    }

    get name() {
        console.log('getter');
        return this._name;
    }
}
let person=new Person('dongsj');
person.name='Dongsj';