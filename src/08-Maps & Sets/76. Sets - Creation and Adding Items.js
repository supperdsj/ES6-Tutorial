/**
 * Created by dongsj on 2016/12/26.
 */

let set = new Set([1, 1, 1, 2, 2]);
set.add(1);
set.add(3);
for (let ele of set) {
    console.log(ele);
}
