/**
 * Created by dongsj on 2016/12/26.
 */

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved!');
    }, 1000);
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rejected!');
    }, 2000);
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Rejected!');
    }, 3000);
});

Promise.all([promise1, promise2])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });
Promise.all([promise1, promise3])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });
Promise.race([promise1, promise2])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });