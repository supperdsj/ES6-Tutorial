/**
 * Created by dongsj on 2016/12/24.
 */
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol
class Person {
}
Person.prototype[Symbol.toStringTag] = 'Person';
let person = new Person();
console.log(person);

let numbers=[1,2,3];
numbers[Symbol.toPrimitive]=function(){
  return 998;
};
console.log(numbers+1);