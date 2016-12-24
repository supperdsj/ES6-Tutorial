/**
 * Created by dongsj on 2016/12/24.
 */
let array = [1, 2, 3];

let it=array[Symbol.iterator]();
console.log(typeof array[Symbol.iterator]);
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
