//#nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client
//
function Client(id, name, surname, email, phone, ...products){
       this.id = id;
       this.name = name;
       this.surname = surname;
       this.email = email;
       this.phone = phone;
       this.order = products;
}
function Product(title, price){
    this.title = title;
    this.price = price;
}
//const client = new Client(1,
//asd',
//'qwe',
   // 'fgr@hyt.com',
   // '+3456778',
    //    new Product('tv',  12000),
     //   new Product( 'phone', 6700));
//з const  client console.log(clients.order) працює, з масивом underfined  через order
let clients = [
     new Client(1, 'asd', 'qwe', 'fgr@hyt.com', '+3456778',[new Product('tv',  12000),new Product( 'phone', 6700)]),
     new Client(2, 'hjy', 'lkj', 'hju@hgf.com', '+3456778', [new Product('tv',  12000), new Product( 'phone', 6700)]),
     new Client(3, 'hjy', 'okj', 'hju@hgf.com', '+3456778', [new Product('tv',  12000), new Product( 'phone', 6700)]),
     new Client(4, 'hjy', 'pkj', 'iuy@hgf.com', '+3456778',[new Product('tv',  12000), new Product( 'phone', 6700)]),
     new Client(5, 'hjy', 'tkj', 'fgh@hgf.com', '+3456778', [new Product('tv',  12000), new Product( 'phone', 6700)]),
     new Client(6, 'hjy', 'rkj', 'der@hgf.com', '+3456778',[new Product('tv',  12000), new Product( 'phone', 6700)]),
     new Client(7, 'hjy', 'fkj', 'lki@hgf.com', '+3456778',[new Product('tv',  12000), new Product( 'phone', 6700)]),
     new Client(8, 'hjy', 'akj', 'qwe@hgf.com', '+3456778',[new Product('tv',  12000), new Product( 'phone', 6700)]),
     new Client(9, 'hjy', 'dkj', 'hjrty@hgf.com', '+3456778',[new Product('tv',  12000), new Product( 'phone', 6700)]),
     new Client(10, 'hjy', 'ckj', 'nju@hgf.com', '+3456778',[new Product('tv',  12000), new Product( 'phone', 6700)]),
];
console.log(clients.map(client => client.order));
//
//#8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його<br>
// за кількістю товарів в полі order по зростанню. (sort)
//
function Client1(id, name, surname, email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients1 = [
    new Client(1, 'asd', 'qwe', 'fgr@hyt.com', '+3456778',[{title:'tv',price: 12000},{title: 'phone',price: 6700},{title:'note',price:20000},]),
    new Client(2, 'hjy', 'lkj', 'hju@hgf.com', '+3456778', [{title:'tv',price: 12000}, {title: 'phone', price:6700},{title:'note',price:20000},{title:'fringe',price: 30000},]),
    new Client(3, 'hjy', 'okj', 'hju@hgf.com', '+3456778', [{title:'tv', price: 12000}, {title: 'phone',price: 6700},]),
    new Client(4, 'hjy', 'pkj', 'iuy@hgf.com', '+3456778',[{title:'tv',  price:12000}, ]),
    new Client(5, 'hjy', 'tkj', 'fgh@hgf.com', '+3456778', [{title:'tv',price:  12000}, {title: 'phone', price:6700},{title:'note',price:20000},]),
    new Client(6, 'hjy', 'rkj', 'der@hgf.com', '+3456778',[{title:'tv',  price:12000}, {title: 'phone',price: 6700},{title:'note',price:20000},{title:'fringe',price: 30000},]),
    new Client(7, 'hjy', 'fkj', 'lki@hgf.com', '+3456778',[{title:'tv', price: 12000}, ]),
    new Client(8, 'hjy', 'akj', 'qwe@hgf.com', '+3456778',[{title:'tv', price: 12000}, {title: 'phone', price:6700},{title:'note',price:20000}]),
    new Client(9, 'hjy', 'dkj', 'hjrty@hgf.com', '+3456778',[{title:'tv', price: 12000}, {title: 'phone',price: 6700},]),
    new Client(10, 'hjy', 'ckj', 'nju@hgf.com', '+3456778',[{title:'tv', price: 12000}, {title:'phone',price: 6700},{title:'note',price:20000}]),
];
const sort = clients1.sort((a,b) => a.order.length - b.order.length);
console.log(sort);


