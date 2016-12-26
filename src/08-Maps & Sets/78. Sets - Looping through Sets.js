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