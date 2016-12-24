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