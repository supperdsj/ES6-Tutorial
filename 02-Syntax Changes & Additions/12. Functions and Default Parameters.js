/**
 * Created by dongsj on 2016/12/20.
 */
function isEqualTo(num1=0 , num2 = 0) {
    return num1 == num2;
}
console.log(isEqualTo(10,10));
console.log(isEqualTo(10));
console.log(isEqualTo());
function isEqualTo1(num1=0 , num2 = num1) {
    return num1 == num2;
}
console.log(isEqualTo1(10));
let a=100;
function isEqualTo2(num1=0 , num2 = a) {
    return num1 == num2;
}
console.log(isEqualTo2(10));