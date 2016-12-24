/**
 * Created by dongsj on 2016/12/24.
 */
let array = [1, 2, 3];
array[Symbol.iterator]=function(){
    let nextValue=10;
    return {
        next:function(){
            nextValue++;
            return{
                done:nextValue>15,
                value:nextValue
            }
        }
    }
};
for (let element of array){
    console.log(element);
}
