/**
 * Created by dongsj on 2016/12/27.
 */

let person = {
    name: 'dongsj'
};
let handler = {
    get: function (target, property) {
        return Reflect.get(target, property);
    }
};
let {proxy, revoke}=Proxy.revocable(person, handler);

revoke();
console.log(proxy.name);
