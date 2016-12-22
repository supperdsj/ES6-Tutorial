/**
 * Created by dongsj on 2016/12/20.
 */
let numbers =[1,2,3,4,5,6];
function sumUp(toAdd){
    let result=0;
    for(let i =0;i<toAdd.length;i++){
        result+=toAdd[i];
    }
    return result;
}
console.log(sumUp(numbers));
function sumUp1(...toAdd){
    let result=0;
    for(let i =0;i<toAdd.length;i++){
        result+=toAdd[i];
    }
    return result;
}
console.log(sumUp1(1,2,3,4,5,6,7,8,9,10));