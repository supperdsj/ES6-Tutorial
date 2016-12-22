/**
 * Created by dongsj on 2016/12/20.
 */
let obj = {
    name: 'dongsj',
    age: 27
};
console.log(obj);

let name = 'dongsj~';
let age = 30;
let ageField='ageF';
let obj1 = {
    name,
    age,
    [ageField](){console.log('ageField')},
    greet(){
        console.log(this.name+','+this.age);
    },
    'greet me'(){
        console.log('greet me '+this.name+','+this.age);
    }
};
console.log(obj1);
obj1.greet();
obj1['greet me']();
obj1[ageField]();
obj1['ageF']();