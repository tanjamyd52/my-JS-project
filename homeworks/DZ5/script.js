//#mkGDenYnNjn
//  – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//  Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
//
 let exchange=(sumUAH,currencyValues,exchangeCurrency)=> {
     let chosenCurrency;

     for (const item of currencyValues) {
         if (item.currency === exchangeCurrency) {
             chosenCurrency = item;
         }
     }
     return sumUAH/chosenCurrency.value;
 }
 console.log(exchange(10000,[{currency:'USD',value: 40},{currency:'EUR',value: 42}],'USD'));
 console.log(exchange(10000,[{currency:'USD',value: 42},{currency:'EUR',value: 42}],'EUR'));
 console.log(exchange(-10000,[{currency:'USD',value:50},{currency:'EUR',value: 30}],'USD'));
 console.log(exchange(10000,[{currency:'CHF',value: 42},{currency:'CZK',value: 42}],));