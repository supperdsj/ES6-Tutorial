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
console.log(deck.size);
deck.set('as',cardAce);
console.log(deck);
console.log(deck.size);
console.log(deck.get('as'));
console.log(deck.get('as1'));
deck.delete('as');
console.log(deck);
deck.delete('as1');
console.log(deck);
deck.clear();
console.log(deck);

