/**
 * Created by dongsj on 2016/12/27.
 */

function log(message) {
    console.log(`Log entry created, message ${message}`);
}
log('Hello');

let handler = {
    apply: function (target, thisArg, argumentsList) {
        console.log(target);
        console.log(thisArg);
        console.log(argumentsList);
        if (argumentsList.length == 1) {
            return Reflect.apply(target,thisArg,argumentsList);
        }else {
            console.log('error');
        }
    }
};
let proxy=new Proxy(log,handler);
proxy('hey');
proxy('hey','!');