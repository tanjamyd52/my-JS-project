//#EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву<br>
// та повертає його. Приклад sum([1,2,10]) //->13

function sum (arr) {
    let basket = 0;
    for (const item of arr) {
        basket = basket + item;
    }
    return basket;
}
console.log(sum([1, 2, 10]));

//#kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2).<br>
// Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, i1, i2){
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return -Infinity;
}
console.log (swap([11,22,33,56], 3, 0));