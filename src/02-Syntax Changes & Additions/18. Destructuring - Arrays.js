/**
 * Created by dongsj on 2016/12/20.
 */
let numbers=[1,2,3];
let [a,b]=numbers;
let [c,...d]=numbers;
let [,,e]=numbers;
let [a1,a2,a3,a4='Default']=numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(a4);
let t1=10;
let t2=20;
[t1,t2]=[t2,t1];
console.log(t1,t2);