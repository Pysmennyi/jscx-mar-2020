// - створити функцію яка виводить масив

let array = [1,2,3,4,5];
function prin_arr(array) {
    console.log(array);
}
// - створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попвередню функцію.
function randomToArray(length, max, min) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] =Math.round( Math.random()*(max-min)+min);
    }
    prin_arr(arr);
}
randomToArray(10, 20, 3);
// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function minOfThree(a,b,c) {
   if (a < b && a < c){
       console.log(a);
   } else if (b < a && b < c){
       console.log(b);
   } else {
       console.log(c);
   }return c;
}

minOfThree(-1,3,1);
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function maxOfThree(a,b,c) {
    if (a > b && a > c){
        console.log(a);
    } else if (b > a && b > c){
        console.log(b);
    } else {
        console.log(c);
    }return c;
}
maxOfThree(-1,0,-5);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function minOfSelection() {
    let min = arguments[0];
    let max = arguments[0];
    for (const item of arguments) {
        if (item > max) max = item;
        if (item < min) min = item;
    }
    console.log(`max is`);
    console.log(max);
    console.log(`min is`);
    return min;
}
console.log(minOfSelection(2, 43, 21, 543, 322, 2, 43, 55, 3, 1, -3, 54));
// - створити функцію яка виводить масив

// - створити функцію яка повертає найбільше число з масиву
function maxOfArray(array) {
    let arrMax = arguments[0];
    for (const item of arguments) {
        if (item > arrMax) arrMax = item;
    }return arrMax;
}
console.log(maxOfArray(1, 3, 5, 3, 6, 44, 23, 54, 234));
// - створити функцію яка повертає найменьше число з масиву
function minOfArray(array) {
    let arrMin = arguments[0];
    for (const item of arguments) {
        if (item < arrMin) arrMin = item;
    }return arrMin;
}
console.log(minOfArray(1, 3, 5, 3, 6, 44, 23, 54, 234));
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function arraySum(array) {
return array.reduce((previousValue, currentValue) => previousValue+currentValue);
}

let a = [1, 1];
console.log(arraySum(a));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arrayAverage(array) {
    return array.reduce((previousValue, currentValue) => previousValue+currentValue)/array.length;
}

let average = [1, 133,3,2,5];
console.log(arrayAverage(average));
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

let objects = [
    {a:12,
    b: 20},
    12,
    `asx`,
    {1:`a`,
    2:`b`}
];

function elementsQuantity(array) {
    let count = 0;
    for (const elem of array) {
        if (typeof elem === "object"){
            count+=1;
        }
    }return count;
}
console.log(elementsQuantity(objects));
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function keyItemQuantity(array) {
    let count = 0;
    for (const elem of array) {
        if (typeof elem === "object"){
            for (const key in elem) {
                count++;
            }
        }
    }return count;
}
console.log(keyItemQuantity(objects));
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
    let arr1 = [1,2,3,4];
    let arr2 = [2,3,4,5];
// результат
//     [3,5,7,9]

function addIndex(arr1, arr2) {
let arr3 =[];
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i]+arr2[i]);
    }return arr3;
}

console.log(addIndex(arr1, arr2));
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// todo add rules
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
