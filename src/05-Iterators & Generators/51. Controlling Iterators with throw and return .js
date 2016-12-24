/**
 * Created by dongsj on 2016/12/24.
 */


function *gen2(end){
    for(let i=0;i<end;i++){
        try{
        yield i;
        }catch(e){
            console.log(e);
        }
    }
}
let it=gen2(2);
console.log(it.next());
console.log(it.throw('an error ocurred'));
console.log(it.return('an value'));
console.log(it.next());