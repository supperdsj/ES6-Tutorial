/**
 * Created by dongsj on 2016/12/26.
 */

let cardAce={
    name:'Ace of Spades'
};
let cardKing={
    name:'King of Clubs'
};

let deck=new Map();
deck.set('as',cardAce);
deck.set('ck',cardKing);
console.log(deck);

let deck1=new Map([['as',cardAce],['ck',cardKing]]);
console.log(deck1);