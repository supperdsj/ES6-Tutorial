/**
 * Created by dongsj on 2016/12/22.
 */
let keyValue=1000;
function test(){
    keyValue=2000;
    console.log('test');
}
let ab='some txt';
export {keyValue,test};
export default ab;
