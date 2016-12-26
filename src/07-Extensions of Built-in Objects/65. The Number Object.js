/**
 * Created by dongsj on 2016/12/26.
 */
console.log('isNaN');
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));
console.log(isNaN('str'));
console.log(Number.isNaN('str'));

console.log('isFinite');
console.log(isFinite(1100000));
console.log(Number.isFinite(1100000));
console.log(isFinite(1.0/3));
console.log(Number.isFinite(1.0/3));
console.log(isFinite(Infinity));
console.log(Number.isFinite(Infinity));

console.log('isInteger');
// console.log(isInteger(Infinity));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.1));
console.log(Number.isInteger(10.0));
console.log(Number.isInteger(10.0000000000001));