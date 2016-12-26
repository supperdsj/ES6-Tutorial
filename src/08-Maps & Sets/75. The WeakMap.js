/**
 * Created by dongsj on 2016/12/26.
 */

let cardAce={
    name:'Ace of Spades'
};
let cardKing={
    name:'King of Clubs'
};
let key1={
    a:1
};
let key2={
    a:2
};
let deck=new WeakMap();
deck.set(key1,cardAce);
deck.set(key2,cardKing);

console.log(deck.get(key1));
// error
// for(let key of deck.keys()){
//     console.log(key);
// }
// for(let key of deck.values()){
//     console.log(key);
// }
//
// for(let key of deck.entries()){
//     console.log(key);
// }
