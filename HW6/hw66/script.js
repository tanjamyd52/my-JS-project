const deck = [
    {cardSuit: 'spades',value:'6'},
    {cardSuit: 'clubs',value:'Ace'},
    {cardSuit: 'hearts',value:'6'},
    {cardSuit: 'diamonds',value:'Ace'},
    {cardSuit: 'spades',value:'Jack'}
];
let groupedByValue =
    deck.reduce((acc, card) => {
     let val = card.value;
if (!acc[val]) acc[val] = [];
acc[val].push(card);
return acc;
},{});
console.log(groupedByValue);