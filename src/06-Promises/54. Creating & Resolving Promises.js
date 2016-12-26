/**
 * Created by dongsj on 2016/12/26.
 */

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
            resolve('Done!');
        }, 1500
    );
});
promise.then((data) => {
    console.log(data);
});