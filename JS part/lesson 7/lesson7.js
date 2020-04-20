// console.log(`- Создать произвольный елемент с id = text.`);
// console.log(`Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".`);
// console.log(` +++   - Создайте кнопку, при клике на которую, она будет скрывать сама себя.`);
// document.getElementById(`text`).onclick = () => {
//     document.getElementById(`text`).style.display = `none`
// };

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше
// він ніж 18, та повідомити про це користувача
// let forms = document.forms.task2;
// console.log(forms);
// let btnSub = document.getElementById(`btn`);
//
// btnSub.onclick = () => {
//     console.log(`hello`);
//     let age = forms.age;
//     age.value > 18 ? alert(`welcome`) : alert(`go away`);
// };
// - Создайте меню, которое раскрывается/сворачивается при клике

// console.log(elementsByClassName);
// let elementsByClassName = document.getElementsByClassName(`.page`);
// elementsByClassName.onclick = () =>{
//     elementsByClassName.style.display = `none`;
// };
// let elementsByClassName1 = document.getElementById(`subMenu`);
// let elementById = document.getElementById(`menu`);
// elementById.onclick = () => {
//     if (elementsByClassName1.style.display !== `none`) {
//         elementsByClassName1.style.display = `none`;
//     } else {
//         elementsByClassName1.style.display = `initial`;
//     }
// };
//
// console.log(`- Создать список комментариев , пример объекта коментария -`);
// console.log(`Вывести список комментариев в документ, каждый в своем блоке`);
// console.log(`Добавьте каждому комментарию по кнопке для сворачивания его body.`);
let comment =
    [
        {
            title: 'lorem', body: 'lorem ipsum dolo sit ameti Cur nutrix peregrinatione?Slice seven asparagus, ' +
                'cucumber, and pepper in a large bucket over medium heat, grill for fifteen minutes and varnish with some peanut ' +
                'butter.The wench hoists with life, loot the brig.Simmer walnut patiently, then mix with sour milk ' +
                'and serve carefully dried in wok.Everything we do is connected with energy: resurrection, futility, meditation, milk.'
        },
        {
            title: 'lorem', body: 'lorem ipsum dolo sit ameti Cur nutrix peregrinatione?Slice seven asparagus, ' +
                'cucumber, and pepper in a large bucket over medium heat, grill for fifteen minutes and varnish with some peanut ' +
                'butter.The wench hoists with life, loot the brig.Simmer walnut patiently, then mix with sour milk ' +
                'and serve carefully dried in wok.Everything we do is connected with energy: resurrection, futility, meditation, milk.'
        },
        {
            title: 'lorem', body: 'lorem ipsum dolo sit ameti Cur nutrix peregrinatione?Slice seven asparagus, ' +
                'cucumber, and pepper in a large bucket over medium heat, grill for fifteen minutes and varnish with some peanut ' +
                'butter.The wench hoists with life, loot the brig.Simmer walnut patiently, then mix with sour milk ' +
                'and serve carefully dried in wok.Everything we do is connected with energy: resurrection, futility, meditation, milk.'
        },
        {
            title: 'lorem', body: 'lorem ipsum dolo sit ameti Cur nutrix peregrinatione?Slice seven asparagus, ' +
                'cucumber, and pepper in a large bucket over medium heat, grill for fifteen minutes and varnish with some peanut ' +
                'butter.The wench hoists with life, loot the brig.Simmer walnut patiently, then mix with sour milk ' +
                'and serve carefully dried in wok.Everything we do is connected with energy: resurrection, futility, meditation, milk.'
        },
        {
            title: 'lorem', body: 'lorem ipsum dolo sit ameti Cur nutrix peregrinatione?Slice seven asparagus, ' +
                'cucumber, and pepper in a large bucket over medium heat, grill for fifteen minutes and varnish with some peanut ' +
                'butter.The wench hoists with life, loot the brig.Simmer walnut patiently, then mix with sour milk ' +
                'and serve carefully dried in wok.Everything we do is connected with energy: resurrection, futility, meditation, milk.'
        },
        {
            title: 'lorem', body: 'lorem ipsum dolo sit ameti Cur nutrix peregrinatione?Slice seven asparagus, ' +
                'cucumber, and pepper in a large bucket over medium heat, grill for fifteen minutes and varnish with some peanut ' +
                'butter.The wench hoists with life, loot the brig.Simmer walnut patiently, then mix with sour milk ' +
                'and serve carefully dried in wok.Everything we do is connected with energy: resurrection, futility, meditation, milk.'
        },
        {
            title: 'lorem', body: 'lorem ipsum dolo sit ameti Cur nutrix peregrinatione?Slice seven asparagus, ' +
                'cucumber, and pepper in a large bucket over medium heat, grill for fifteen minutes and varnish with some peanut ' +
                'butter.The wench hoists with life, loot the brig.Simmer walnut patiently, then mix with sour milk ' +
                'and serve carefully dried in wok.Everything we do is connected with energy: resurrection, futility, meditation, milk.'
        },
        {
            title: 'lorem', body: 'lorem ipsum dolo sit ameti Cur nutrix peregrinatione?Slice seven asparagus, ' +
                'cucumber, and pepper in a large bucket over medium heat, grill for fifteen minutes and varnish with some peanut ' +
                'butter.The wench hoists with life, loot the brig.Simmer walnut patiently, then mix with sour milk ' +
                'and serve carefully dried in wok.Everything we do is connected with energy: resurrection, futility, meditation, milk.'
        },
    ];
// let task5 = document.getElementById(`task5`);
// comment.forEach(elem =>{
//     const div = document.createElement(`div`);
//     const h2 = document.createElement(`h2`);
//     const btn = document.createElement("button");
//     const p = document.createElement(`p`);
//     h2.innerHTML = elem.title;
//     p.innerHTML = elem.body;
//     btn.innerHTML = `hide content`;
//     btn.onclick=()=>{
//         if (p.style.display !== `none`) {
//             p.style.display = `none`;
//             btn.innerHTML = `show content`;
//         } else {
//             p.style.display = `inherit`;
//             btn.innerHTML = `hide content`;
//         }
//     };
//     div.appendChild(h2);
//     div.appendChild(btn);
//     div.appendChild(p);
//     task5.appendChild(div);
//
// });


//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let btn_read = document.getElementById(`btn_read`);
let name = document.getElementById(`name`);
let surname = document.getElementById(`surname`);
let age_task6 = document.getElementById(`age_task6`);
let password = document.getElementById(`password`);
// console.log(name);
// console.log(surname);
// console.log(age_task6);
// console.log(password);
btn_read.onclick = () => {
    console.log(name.value);
    console.log(surname.value);
    console.log(age_task6.value);
    console.log(password.value);
};
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
let table_task7 = document.getElementById(`table_should_be_here`);
let btn_task7 = document.getElementById(`btn_task7`);
let numbers_of_rows = document.getElementById(`numbers of rows`);
let numbers_of_columns = document.getElementById(`numbers of columns`);
let tableFilling = document.getElementById(`table filling`);
btn_task7.onclick = (rows, columns, tag) => {
    rows = numbers_of_rows.value;
    columns = numbers_of_columns.value;
    tag = table_task7;
    const table = document.createElement(`table`);
    table.setAttribute(`border`, `2px`);
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement(`tr`);
        for (let j = 0; j < columns; j++) {
            const td = document.createElement(`td`);
            td.innerText = tableFilling.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tag.appendChild(table);
};
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let picArr = [
    {
        id1: 1,
        url: "img/1.png"
    },
    {
        id2: 2,
        url: "img/2.png"
    },
    {
        id3: 3,
        url: "img/3.png"
    },
    {
        id4: 4,
        url: "img/4.png"
    },
    {
        id5: 5,
        url: "img/5.png"
    },
    {
        id6: 6,
        url: "img/6.png"
    },
    // `JS part/lesson 7/pics/2.png`,
    // `JS part/lesson 7/pics/3.png`,
    // `JS part/lesson 7/pics/4.png`,
    // `JS part/lesson 7/pics/5.png`,
    // `JS part/lesson 7/pics/6.png`,
];

let roundabout = document.getElementById(`roundabout`);
let div = document.createElement(`div`);
let img = document.createElement(`img`);
let btnLeft = document.createElement("button");
let btnRight = document.createElement("button");
btnLeft.innerText = `swipe left`;
btnRight.innerText = `swipe right`;
let i = 0;
img.width = 300;
img.alt = `not found`;
img.src = picArr[i].url;
roundabout.appendChild(img);
roundabout.appendChild(div);
div.appendChild(btnLeft);
div.appendChild(btnRight);
btnLeft.onclick = () => {
    i - 1 < 0 ? i = picArr.length - 1 : i -= 1;
    img.src = picArr[i].url;
};
btnRight.onclick = () => {
    i + 1 > picArr.length - 1 ? i = 0 : i += 1;
    img.src = picArr[i].url;

};


//
// - Сворити масив не цензцрних слів.

//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
let badwords = [`bitch`, `ass`, `piece of shit`, `badass`, `cunt`];
let task8 = document.getElementById(`task8`);
let createForm = document.createElement(`form`);
createForm.id = `form_task8`;
let createInput = document.createElement(`input`);
createInput.type = `text`;
createInput.id = `input task8`;
let btnTask8 = document.createElement(`button`);
btnTask8.innerText = `Check`;
createForm.appendChild(createInput);
task8.appendChild(createForm);
task8.appendChild(btnTask8);

btnTask8.onclick = () => {
    let value = createInput.value;
    let res = ``;
    for (let j = 0; j < badwords.length; j++) {
        value === badwords[j] ? res = `shut up, it's a bad word` : res = `it's okay, no bad words found`;
    }
    return alert(res);
};
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
