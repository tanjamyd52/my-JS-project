//#bolvdlhP
//   описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди<br>
//   можна описати з використанням циклу
//  Після опису, використовуючи функції масивів:
//   - знайти піковий туз
//   - всі шістки
//   - всі червоні карти
//   - всі буби
//   - всі трефи від 9 та більше
//  Приклад моделі об'єкту карти:
//  {
//      cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//      value: '', // '6'-'10', 'ace','jack','queen','king'
//      color:'', // 'red','black'
//  }
//
  const suits = [
     {name:'spade', color: 'black'},
    {name:'diamond', color: 'red'},
     {name: 'heart', color: 'red'},
     {name: 'clubs', color: 'black'}
 ];
 const values = ['6','7','8','9','10','ace','jack','queen','king'];
 const cards = suits.flatMap(suit =>
  values.map(value =>
      ({cardSuit:suit.name, value: value, color: suit.color})));
 console.log(cards);
 //знайти пиковий туз
 console.log(cards.filter(value => {
     return value.cardSuit === 'spade'&& value.value === 'ace'}));
// знайти усі шістки
 console.log(cards.filter(value => {
     return value.cardSuit && value.value=== '6'}));
// знайти усі червоні картки
 console.log(cards.filter(value => {
     return value.cardSuit && value.color=== 'red'}));
// знайти усі буби
 console.log(cards.filter(value => {
     return value.cardSuit  === 'diamond' }));
// знайти усі трефи від 9 та більше метод includes
 console.log(cards.filter(card => card.cardSuit ==='clubs'&& ['9','10','ace','jack','queen','king'].includes(card.value)));
//
// #EP5I1UUzAX
//  Взяти описану колоду карт, та за допомогою reduce "упакувати" всі карти по "мастях" в об'єкт
//  Приклад моделі кінцевого об'єкту
//  {
//      spades:[],
//      diamonds:[],
//     hearts:[],
//      clubs:[]
//}
let grouped = cards.reduce((accumulator, card ) => {
    let suit = card.cardSuit;
    if (!accumulator[suit]) accumulator[suit] = [];
    accumulator[suit].push(card);
    return accumulator;
},{});
console.log(grouped);
