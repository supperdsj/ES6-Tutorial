/**
 * Created by dongsj on 2016/12/24.
 */
let symbol=Symbol('debug');
console.log(symbol);
console.log(typeof symbol);

let anotherSymbol=Symbol('debug');
console.log(symbol==anotherSymbol);

let obj={
    name:'dongsj',
    [symbol]:22
};
console.log(obj);
console.log(obj[symbol]);