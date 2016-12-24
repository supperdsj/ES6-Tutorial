/**
 * Created by dongsj on 2016/12/24.
 */

let obj={
    [Symbol.iterator]:gen
};

function *gen(){
    yield 1;
    yield 2;
}
for(let ele of obj){
    console.log(ele);
}

function *gen2(end){
    for(let i=0;i<end;i++){
        yield i;
    }
}
let it=gen2(2);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());