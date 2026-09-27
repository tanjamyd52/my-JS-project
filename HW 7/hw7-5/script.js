//#gsKLAsNWM
// Через Array.prototype. створити власний foreach, filter
//
class Product {
    constructor(id, name, price)
    {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
    const arrays =
        [
            new Product(1, 'coconut', 125),
            new Product(2, 'apricot', 75),
            new Product(3, 'watermelon', 15),
            new Product(4, 'melon', 55),
            new Product(5, 'tomato', 39),
            new Product(6, 'grape', 100),
            new Product(7, 'cucumber', 30),
            new Product(8, 'plum', 25),
            new Product(9, 'corn', 10),
            new Product(10, 'potato', 20),
        ];

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
      arrays.myForEach(item => {
          console.log(` ${item.name},' ', ${item.price} грн`);
      });

Array.prototype.myFilter = function(callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
        filteredArray.push(this[i]);
                            }
    }
    return filteredArray ;
    };
const cheapPrices = arrays.myFilter(item => item.price < 100);
console.log(cheapPrices);










