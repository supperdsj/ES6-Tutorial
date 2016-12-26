/**
 * Created by dongsj on 2016/12/26.
 */
console.log('array');
console.log('array');
console.log(Array(5));
console.log(Array.of(5, 10, 11));
console.log(Array.of(...[1, 2, 3]));

let array = [10, 12, 16];
console.log('Array.from');
console.log(array);
console.log(Array.from(array, val => val * 2));

console.log('array.fill');
console.log(array.fill(100));
console.log(array.fill(200, 1, 3));
console.log(array.fill(300, 2, 3));

console.log('array.find');
let objs = [
    {name: 'apple', quantity: 2},
    {name: 'orange', quantity: 1},
    {name: 'banana', quantity: 3}
];
console.log(array.find(val => {
    return val >= 150;
}));
console.log(objs.find(fruit => {
    return fruit.name == 'orange';
}));

console.log('array.copyWithin');
console.log(array.copyWithin(1, 2));
console.log(array);
console.log(objs.copyWithin(1, 2));
objs[1].name = 'orange1';
console.log(objs);
objs[2] = objs[1];
objs[1].name = 'orange2';
objs = [
    {name: 'apple', quantity: 2},
    {name: 'orange', quantity: 1},
    {name: 'banana', quantity: 3},
    {name: 'banana', quantity: 3},
    {name: 'banana', quantity: 3},
    {name: 'banana', quantity: 3}
];
console.log(objs);
console.log(objs.copyWithin(3, 0, 3));

console.log('array.entries');
let it = array.entries();
console.log(it);
for (let ele of it) {
    console.log(ele);
}
let ito = objs.entries();
console.log(ito);
for (let ele of ito) {
    console.log(ele);
}
