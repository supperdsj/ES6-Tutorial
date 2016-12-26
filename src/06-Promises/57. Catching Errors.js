/**
 * Created by dongsj on 2016/12/26.
 */

function waitASecound(secounds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (secounds > 2) {
                reject('Rejected!');
            } else {
                secounds++;
                resolve(secounds);
            }
        }, 1000)
    });
}
waitASecound(1)
    .then(waitASecound)
    .then((secounds) => {
        console.log(secounds);
    }).catch((error) => {
    console.error(error);
});