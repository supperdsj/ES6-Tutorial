/**
 * Created by dongsj on 2016/12/26.
 */

function waitASecound(secounds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            secounds++;
            resolve(secounds);
        }, 1000)
    });
}
waitASecound(0)
    .then(waitASecound)
    .then((secounds) => {
        console.log(secounds);
    });