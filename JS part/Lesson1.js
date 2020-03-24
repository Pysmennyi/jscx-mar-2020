/*/!** TASK 1 **!/
// - присвоить каждому из следующих значений свою переменную:
let greeting = 'hello';
let name = 'owu';
let domen1='com';
let domen2 = 'ua';
let num1 = 1;
let num2 =10;
let num3 = -999;
let num4 = 123;
let pi = 3.14;
let e = 2.7;
let age = 16;
let bool1 = true;
let bool2 = false;
// Вывести каждую при помощи console.log , alert, document.write
alert(greeting);
alert(name);
alert(domen1);
alert(domen2);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(pi);
alert(e);
alert(age);
alert(bool1);
alert(bool2);
console.log(greeting);
console.log(name);
console.log(domen1);
console.log(domen2);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(pi);
console.log(e);
console.log(age);
console.log(bool1);
console.log(bool2);
document.write(greeting);
document.write(name);
document.write(domen1);
document.write(domen2);
document.write(num1);
document.write(num2);
document.write(num3);
document.write(num4);
document.write(pi);
document.write(e);
document.write(age);
document.write(bool1);
document.write(bool2);
/!** TASK 2 **!/
// - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи
// console.log , alert, document.write
greeting= `welcome`;
name = `Oleksii`;
domen1 = `ua`;
domen2 = `ey`;
num1 = 1;
num2 = 11;
num3 = 1995;
num4 = 24;
pi = 3.1415;
e = 2.718;
age = 18;
bool1 = false;
bool2 = true;
alert(greeting);
alert(name);
alert(domen1);
alert(domen2);
alert(num1);
alert(num2);
alert(num3);
alert(num4);
alert(pi);
alert(e);
alert(age);
alert(bool1);
alert(bool2);
console.log(greeting);
console.log(name);
console.log(domen1);
console.log(domen2);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(pi);
console.log(e);
console.log(age);
console.log(bool1);
console.log(bool2);
document.write(greeting)
document.write(name);
document.write(domen1);
document.write(domen2);
document.write(num1);
document.write(num2);
document.write(num3);
document.write(num4);
document.write(pi);
document.write(e);
document.write(age);
document.write(bool1);
document.write(bool2);
 /!** TASK 3 **!/
// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const str1 = `hello`;
const str2 = `it's`;
const str3 = `me`;
const number1 = 1;
const number2 = 2;
const number3 = 3;
console.log(str1);
console.log(str2);
console.log(str3);
console.log(number1);
console.log(number2);
console.log(number3);
document.write(str1);
document.write(str2);
document.write(str3);
document.write(number1);
document.write(number2);
document.write(number3);
alert(str1);
alert(str2);
alert(str3);
alert(number1);
alert(number2);
alert(number3);
/!** TASK 4 **!/
// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
// Для фамилии имени и отчества создать разные переменные.
// Вывести каждую при помощи console.log , alert, document.write
name = prompt(`enter your name`);
let surname = prompt(`enter your surname`);
let patronymic = prompt(`enter your patronymic`);
 console.log(name);
 console.log(surname);
 console.log(patronymic);
 document.write(name);
 document.write(surname);
 document.write(patronymic);
 alert(name);
 alert(surname);
 alert(patronymic);
 /!** TASK 5 **!/
// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
let person = name + ` ` + surname + ` ` + patronymic;
console.log(person);
/!** TASK 6 **!/
// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
let motherName = prompt(`enter your mother name`);
let motherSurname = prompt(`enter your mother surname`);
let motherPatronymic = prompt(`enter your mother patronymic`);
let fatherName = prompt(`enter your father name`);
let fatherSurname = prompt(`enter your father surname`);
let fatherPatronymic = prompt(`enter your father patronymic`);
 console.log(motherName);
 console.log(motherSurname);
 console.log(motherPatronymic);
 document.write(motherName);
 document.write(motherSurname);
 document.write(motherPatronymic);
 alert(motherName);
 alert(motherSurname);
 alert(motherPatronymic);
 let mother = motherSurname + ` ` + motherSurname + ` ` + motherPatronymic;
 console.log(mother);

  console.log(fatherName);
  console.log(fatherSurname);
  console.log(fatherPatronymic);
  document.write(fatherName);
  document.write(fatherSurname);
  document.write(fatherPatronymic);
  alert(fatherName);
  alert(fatherSurname);
  alert(fatherPatronymic);
  let father = fatherSurname + ` ` + fatherSurname + ` ` + fatherPatronymic;
  console.log(father);*/
/*// TASK 7
// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
let numberForTask7_1 = +prompt(`enter num1 for task 7`);
let numberForTask7_2 = +prompt(`enter num2 for task 7`);
let numberForTask7_3 = +prompt(`enter num3 for task 7`);
console.log(numberForTask7_1, numberForTask7_2, numberForTask7_3);
console.log(`${numberForTask7_1} ${numberForTask7_2} ${numberForTask7_3}`);

/!** TASK 8 **!/
// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let numberForTask8_1 = parseInt(+prompt(`enter num1 for task 8`));
let numberForTask8_2 = parseInt(+prompt(`enter num2 for task 8`));
let numberForTask8_3 = parseInt(+prompt(`enter num3 for task 8`));
let numberForTask8_4 = parseInt(+prompt(`enter num4 for task 8`));
let resTask8 = numberForTask8_1 + numberForTask8_2 + numberForTask8_3 + numberForTask8_4;
console.log(resTask8);
/!** TASK 9 **!/
// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let numberForTask9_1 = parseFloat(+prompt(`enter num1 for task 9`));
let numberForTask9_2 = parseFloat(+prompt(`enter num2 for task 9`));
let numberForTask9_3 = parseFloat(+prompt(`enter num3 for task 9`));
let resTask9 = numberForTask9_1 + numberForTask9_2 + numberForTask9_3;
console.log(resTask9);

/!** TASK 10 **!/
// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round
// Сложить их между собой записав результат в переменную  и вывести в консоль браузера
let numberForTask10_1 = Math.round(parseFloat(+prompt(`enter num1 for task 10`)));
let numberForTask10_2 = Math.round(parseFloat(+prompt(`enter num2 for task 10`)));
let numberForTask10_3 = Math.round(parseFloat(+prompt(`enter num3 for task 10`)));
let resTask10 = numberForTask10_1 + numberForTask10_2 + numberForTask10_3;
alert(resTask10);
/!** TASK 11 **!/
// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.
// Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью.
// При помощи Math.pow возвести первое число в степень второго числа.
let numberForTask11_1 = parseInt(+prompt(`enter num1 for task 11`));
let numberForTask11_2 = parseInt(+prompt(`enter num2 for task 11`));
let numberInPow = Math.pow(numberForTask11_1, numberForTask11_2);
console.log(numberInPow);*/
/** TASK 12 **/
// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль
// let a = 100; let b = '100'; let c = true; let d = undefined;
 let a = 100; let b = '100'; let c = true; let d = undefined;
console.log(`${typeof a} ${typeof b} ${typeof c} ${typeof d}`);
/** TASK 13 **/
// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
 console.log(5 < 6);//-> true
 console.log(5 > 6);//-> false
 console.log(5 == 6);//-> false
 console.log(5 === 6);//-> false
 console.log(10 === 10);//-> true
 console.log(10 == 10);//-> true
 console.log(10 > 10);//-> false
 console.log(10 != 10);//-> false
 console.log(10 < 10);//-> false
 console.log(123 === '123');//-> false
 console.log(123 == '123');//-> true
/** TASK 15 **/
// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль

// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
//
//
// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - обратиться в соответсвующую ячейку массива и соответсвующий параметр объекта и вывести в консоль
// Пример : вывести имя 1го объекта . Ответ : console.log(users[0].name). Будьте внимательны! 4й объект имеет индес 3!
// -- статус Андрея
// -- статус Максима
// -- имя предпоследнего объекта
// -- имя третьего объекта
// -- возраст Олега
// -- возраст Оли
// -- возраст + имя 5го объекта
// -- возраст + сатус ани
//
// -Возьмите файл task1_template.html, подключите к нему скрипт, и работайте в нем.
// Напишите код, который :
// -- получает текст из параграфа с id "content"
// -- получает текст из блока  с id "rules"
// -- замените текст параграфа с id 'content' на любой другой
// -- замените текст параграфа с id 'rules' на любой другой
// -- поменятй каждому элементу цвет фона на красный
// -- поменятй каждому элементу цвет текста на синий
// -- получить весь список классов элемента id = rules и вывести в console.log()
// -- получить все элементы с классом fc_rules
// -- поменять цвет текста у всех элементов fc_rules на красный
//
// CLASS
//
// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
let str = `Привет`;
let num = 123;
let flag = true;
let txt = `true`;
console.log(`${typeof str} ${typeof num} ${typeof flag} ${typeof txt}`);

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
   let a1 =  5 + 3;
   let a2 =  5 - 3;
   let a3 =  5 * 3;
   let a4 =  5 / 3;
   let a5 =  5 % 3;
console.log(`${a1} ${a2} ${a3} ${a4} ${a5}`);
// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
   let a6 = 5 % 3;
   let a7 = 3 % 5;
   let a8 = 5 + '3';
   let a9 = '5' - 3;
   let a10 = 75 + 'кг';
   console.log(`${a6} ${a7} ${a8} ${a9} ${a10}`);
//
// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
let height = prompt(` enter height`);
let width = prompt(`enter width`);
console.log(`rectangle area is ` + (height*width));
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
const heightC = 10;
const dC = 4;
const Pi = 3.14;
const Two = 2;
let v = Two * Pi *dC/Two * (dC/Two + heightC);
console.log(`cylinder area is ` + v);
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//
// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
//
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
//
// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let strTask10 = "20";
     let aTask10 = 5;
     document.write(strTask10 + aTask10 + "<br/>");    //205 - Concat(string + number)
     document.write(strTask10 - aTask10 + "<br/>");    //15  - operation possible
     document.write(strTask10 * "2" + "<br/>");        //40  - operation possible
     document.write(strTask10 / 2 + "<br/>");          //10  - operation possible
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    console.log(parseInt("3.14")); //3
    console.log(parseInt("-7.875"));  //-7
    console.log(parseInt("435")); //435
    console.log(parseInt("Вася")); //Nan
//
// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее,
// повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);
//
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let number1 = +prompt(`enter num1`);
let number2 = +prompt(`enter num2`);
let sum = number1+number2;
alert(sum);
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
// а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
alert(`Доброго вечера ${prompt(`enter your name`)}, мои поздравления что вам ${prompt(`enter your age`)}`);
