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
for(let key of deck.keys()){
    console.log(key);
}
for(let key of deck.values()){
    console.log(key);
}

for(let key of deck.entries()){
    console.log(key);
}
