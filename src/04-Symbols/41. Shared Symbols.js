/**
 * Created by dongsj on 2016/12/24.
 */
let symbol1=Symbol.for('age');
let symbol2=Symbol.for('age');
console.log(symbol1==symbol2);

let person={
    name:'dongsj'
};
function makeAge(person){
    let ageSymbol=Symbol.for('age');
    person[ageSymbol]=27;
}
makeAge(person);
console.log(person[symbol1]);