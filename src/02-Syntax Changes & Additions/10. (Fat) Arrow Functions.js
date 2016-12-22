/**
 * Created by dongsj on 2016/12/20.
 */
function fn() {
    console.log('hello!');
}
fn();

var fn1 = () => {
    console.log('hello fn1')
};
fn1();

var rtHello = () => 'hello~';
console.log(rtHello());

var plus = (a, b) => a + b;
console.log(plus(1, 2));

var double = a => a * 2;
console.log(double(5));

setInterval(() => console.log(new Date()), 1000);