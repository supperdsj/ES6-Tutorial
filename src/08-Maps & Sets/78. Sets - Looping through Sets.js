/**
 * Created by dongsj on 2016/12/26.
 */

let set = new Set([4, 1, 1, 1, 2, 2]);
set.add(3);

for (let ele of set.entries()) {
    console.log(ele);
}
for (let ele of set.keys()) {
    console.log(ele);
}
for (let ele of set.values()) {
    console.log(ele);
}

let obj={name:1};
let objSet = new Set([{name:1},{name:1},obj,obj]);

for (let ele of objSet.entries()) {
    console.log(ele);
}
for (let ele of objSet.keys()) {
    console.log(ele);
}
for (let ele of objSet.values()) {
    console.log(ele);
}