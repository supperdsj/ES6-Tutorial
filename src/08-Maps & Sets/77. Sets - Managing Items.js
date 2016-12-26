/**
 * Created by dongsj on 2016/12/26.
 */

let set = new Set([1, 1, 1, 2, 2]);
set.add(3);
set.delete(1);
console.log(set);
console.log(set.has(1));
for (let ele of set) {
    console.log(ele);
}
set.clear();
console.log(set);