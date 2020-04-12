console.log(`- создать массив с 20 числами.`);
let arr = [-2, 0, 2, -1, 40, -3, 33, 20, 390, 1000];
console.log(arr);
console.log(`-- при помощи метода sort отсортировать массив.`);
let sort = arr.sort();
console.log(sort);
console.log(`-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.`);

function sortElems(aray, callBack) {
    callBack();
}

sortElems(arr, function () {
    let sorty = arr.sort((a, b) => {
        return a > b ? -1 : 1
    });
    console.log(sorty);
});
console.log(`-- при помощи filter получить числа кратные 3`);
let filter = arr.filter((number) => {
    return number % 3 === 0
});
console.log(filter);
console.log(`-- при помощи filter получить числа кратные 10`);
let filter2 = arr.filter((number) => {
    return number % 10 === 0
});
console.log(filter2);
console.log(`-- перебрать (проитерировать) массив при помощи foreach()`);
let forEach = arr.forEach((value, index, array) =>
    console.log(value)
);
console.log(`-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше`);
let map = arr.map((value, index, array) => {
    value = value * 3;
    console.log(value);
});
console.log(`- создать массив со словами на 15-20 элементов.`);
let words = [`Hel`, `haven`, `me`, `you`, `cup`, `laptop`, `quarantine`, `lockdown`, `isolation`, `work`, `study`, `Lviv`, `Dnipro`, `Kyiv`, `Warsaw`];
console.log(words);
console.log(`-- отсортировать его по алфавиту в восходящем порядке.`);
let toLower = words.map(value => value.toLowerCase());
let sort1 = toLower.sort((a, b) => {

    if (a > b) {
        return -1
    } else return 1
});
console.log(sort1);

console.log(`-- отсортировать его по алфавиту  в нисходящем порядке.`);
let sort2 = toLower.sort((a, b) => {

    if (a < b) {
        return -1
    } else return 1
});
console.log(sort2);
console.log(`-- отфильтровать слова длиной менее 4х символов`);
let filter3 = words.filter((value) => {
    if (value.length <= 4) {
        return value
    } else return null
});
console.log(filter3);
console.log(`-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце`);
let map2 = words.map((value, index, array) => {
    value += `!`
    return value;
});
console.log(map2);
//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {
    name: 'kolya',
    age: 29,
    status: true
}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {
    name: 'anya',
    age: 31,
    status: false
}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {
    name: 'masha',
    age: 30,
    status: true
}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true}];
console.log(`- відсортувати його за  віком (зростання , а потім окремо спадання)`);
let sort3 = users.sort((a, b) => {
    return a.age - b.age
});
console.log(sort3);
console.log(`- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)`);
let sort4 = users.sort((a, b) => {
    return b.age - a.age
});
console.log(sort4);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (
// По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let id = users.map(((value, index) => {
//     let arr = [value.valueOf()];
//     arr.forEach(arr.);
//     return arr;
// }));
// console.log(id);
// console.log(`---------------------`);
// console.log(users);

// - відсортувати його за індентифікатором
//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calc(comand, a, b, callback) {
//     callback(a, b);
// }
//
// calc(`plus`,2, 4, function (comand) {
//     if (comand === `minus`) {
//         return a - b;
//     } else if (comand === `plus`) {
//         return a + b;
//     }
//
// })
// -- наисать функцию калькулятора с 3мя числами и колбеком
//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [{
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400
},
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];
// Відфільтрувати масив за наступними крітеріями :
console.log(`- двигун більше 3х літрів`);
let volume = cars.filter((value) => {
    return value.volume >= 3 ? value : null;
});
console.log(volume);
console.log(`- двигун = 2л`);
let volume2 = cars.filter((value) => {
    return value.volume === 2 ? value : null;
});
console.log(volume2);
console.log(`- виробник мерс`);
let producer = cars.filter((value) => {
    return value.producer === `mercedes` ? value : null;
});
console.log(producer);
console.log(`- двигун більше 3х літрів + виробник мерседес`);
let producer_volume = cars.filter((value) => {
    return (value.producer === `mercedes` ? value : null) && (value.volume >= 3 ? value : null);
});
console.log(producer_volume);
console.log(`- двигун більше 3х літрів + виробник субару`);
let producer_volume2 = cars.filter((value) => {
    return (value.producer === `subaru` ? value : null) && (value.volume >= 3 ? value : null);
});
console.log(producer_volume2);
console.log(`- power більше ніж 300`);
let power = cars.filter((value) => {
    return value.power >= 300 ? value : null;
});
console.log(power);
console.log(`- сили більше ніж 300 + виробник субару`);
let power2 = cars.filter((value) => {
    return (value.power >= 300 ? value : null) && (value.producer === `subaru` ? value : null);
});
console.log(power2);
console.log(`- мотор серіі ej`);
let engine = cars.filter((value) => {
    return value.engine.startsWith(`ej`) ? value : null;
});
console.log(engine);
console.log(`- сили більше ніж 300 + виробник субару + мотор серіі ej`);
let power3 = cars.filter((value) => {
    return (value.power >= 300 ? value : null) && (value.producer === `subaru` ? value : null) && (value.engine.startsWith(`ej`) ? value : null);
});
console.log(power3);
console.log(`- двигун меньше 3х літрів + виробник мерседес`);
let volume3 = cars.filter((value) => {
    return (value.volume < 3 ? value : null) && (value.producer === `mercedes` ? value : null);
});
console.log(volume3);
console.log(`- двигун більше 2л + сили більше 250`);
let volume4 = cars.filter((value) => {
    return (value.volume >= 2 ? value : null) && (value.power >= 250 ? value : null);
});
console.log(volume4);
console.log(`- сили більше 250  + виробник бмв`);
let power4 = cars.filter((value) => {
    return (value.producer === `bmw` ? value : null) && (value.power >= 250 ? value : null);
});
console.log(power4);
//
//
//
// - взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
console.log(usersWithAddress);
// console.log(`-- отсортировать его по id пользователей`);
// let sortClass1 = usersWithAddress.sort((a, b) => {
//     return a.id - b.id ? 1 : -1;
// });
// console.log(sortClass1);
// console.log(`-- отсортировать его по id пользователей в обратном опрядке`);
// let sortClass2 = usersWithAddress.sort((a, b) => {
//     return a.id - b.id ? -1 : 1;
// });
// console.log(sortClass2);

//питання>>>>>>>>>>>>>>>>>


console.log(`-- отсортировать его по возрасту пользователей`);
let sortClass3 = usersWithAddress.sort((a, b) => {
    return a.age - b.age ? 1 : -1;
});
console.log(sortClass3);


// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный
//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.