/**
 * Created by dongsj on 2016/12/20.
 */
function fn() {
    console.log(this);
}
var fn2 = () => console.log(this);
// button
document.getElementById('bt1').addEventListener('click', fn);
// window
document.getElementById('bt2').addEventListener('click', fn2);