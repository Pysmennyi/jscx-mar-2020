// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
function Tag(titleOfTag, action, attrs) {
    this.titleOfTag = titleOfTag || `no title`;
    this.action = action || `no action`;
    this.attrs = attrs || [];
}

// -a
let teg1 = `<a>`;
let action1 = `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.`;
let attrs1 = [
    {
        attr1: `accesskey`,
        descr1: `Активация ссылки с помощью комбинации клавиш.`
    },
    {
        attr2: `coords`,
        descr2: `Устанавливает координаты активной области..`
    },
    {
        attr: `download`,
        descr3: `Предлагает скачать указанный по ссылке файл.`
    }
];

let a = new Tag(teg1, action1, attrs1);
// console.log(a);
// -div
let tag2 = `<div>`;
let action2 = `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.`;
let attrs2 = [
    {
        attr1: `align`,
        descr1: `Задает выравнивание содержимого тега <div>.`
    },
    {
        attr2: `title`,
        descr2: `Добавляет всплывающую подсказку к содержимому.`
    },
];
let div = new Tag(tag2, action2, attrs2);
// console.log(div);
// -h1
let tag3 = `<h1>`;
let action3 = ``;
let attrs3 = [
    {
        attr1: `align`,
        descr1: `Определяет выравнивание заголовка.`
    },
];
let h1 = new Tag(tag3, action3, attrs3);
// console.log(h1);
// -span
let tag4 = `<span>`;
let action4 = `Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.`;
let attrs4 = [
    {
        attr1: `accesskey`,
        descr1: `Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.`
    },
    {
        attr2: `class`,
        descr2: `Определяет имя класса, которое позволяет связать тег со стилевым оформлением.`
    },
];
let span = new Tag(tag4, action4, attrs4);
// console.log(span);
// -input
let tag5 = `<input>`;
let action5 = `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.`;
let attrs5 = [
    {
        attr1: `accept`,
        descr1: `Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.`
    },
    {
        attr2: `accesskey`,
        descr2: `Переход к элементу с помощью комбинации клавиш.`
    },
];
let input = new Tag(tag5, action5, attrs5);
// console.log(input);
// -form
let tag6 = `<form>`;
let action6 = `Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.`;
let attrs6 = [
    {
        attr1: `accept-charset`,
        descr1: `Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.`
    },
    {
        attr2: `action`,
        descr2: `Адрес программы или документа, который обрабатывает данные формы.`
    },
];
let form = new Tag(tag6, action6, attrs6);
// console.log(form);
// -option
let tag7 = `<option>`;
let action7 = `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.`;
let attrs7 = [
    {
        attr1: `disabled`,
        descr1: `Заблокировать для доступа элемент списка.`
    },
    {
        attr2: `label`,
        descr2: `Указание метки пункта списка.`
    },
];
let option = new Tag(tag7, action7, attrs7);
// console.log(option);
// -select
let tag8 = `<select>`;
let action8 = `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.`;
let attrs8 = [
    {
        attr1: `accesskey`,
        descr1: `Позволяет перейти к списку с помощью некоторого сочетания клавиш.`
    },
    {
        attr2: `autofocus`,
        descr2: `Устанавливает, что список получает фокус после загрузки страницы.`
    },
];
let select = new Tag(tag8, action8, attrs8);
// console.log(select);
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
class TagClass {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag || `no title`;
        this.action = action || `no action`;
        this.attrs = attrs || [];
    }
}

// -a
let tag_task2_1 = `<a>`;
let action_task2_1 = `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.`;
let attrs_task2_1 = [
    {
        attr1: `accesskey`,
        descr1: `Активация ссылки с помощью комбинации клавиш.`
    },
    {
        attr2: `coords`,
        descr2: `Устанавливает координаты активной области..`
    },
    {
        attr: `download`,
        descr3: `Предлагает скачать указанный по ссылке файл.`
    }
];

let a_task2 = new TagClass(tag_task2_1, action_task2_1, attrs_task2_1);

// console.log(a_task2);
// -div
let tag_task2_2 = `<div>`;
let action_task2_2 = `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.`;
let attrs_task2_2 = [
    {
        attr1: `align`,
        descr1: `Задает выравнивание содержимого тега <div>.`
    },
    {
        attr2: `title`,
        descr2: `Добавляет всплывающую подсказку к содержимому.`
    },
];
let div_task2 = new TagClass(tag_task2_2, action_task2_2, attrs_task2_2);
// console.log(div_task2);
// -h1
let tag_task2_3 = `<h1>`;
let action_task2_3 = ``;
let attrs_task2_3 = [
    {
        attr1: `align`,
        descr1: `Определяет выравнивание заголовка.`
    },
];
let h1_task2 = new TagClass(tag_task2_3, action_task2_3, attrs_task2_3);
// console.log(h1_task2);
// -span
let tag_task2_4 = `<span>`;
let action_task2_4 = `Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.`;
let attrs_task2_4 = [
    {
        attr1: `accesskey`,
        descr1: `Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.`
    },
    {
        attr2: `class`,
        descr2: `Определяет имя класса, которое позволяет связать тег со стилевым оформлением.`
    },
];
let span_task2 = new TagClass(tag_task2_4, action_task2_4, attrs_task2_4);
// console.log(span_task2);
// -input
let tag_task2_5 = `<input>`;
let action_task2_5 = `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.`;
let attrs_task2_5 = [
    {
        attr1: `accept`,
        descr1: `Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.`
    },
    {
        attr2: `accesskey`,
        descr2: `Переход к элементу с помощью комбинации клавиш.`
    },
];
let input_task2 = new TagClass(tag_task2_5, action_task2_5, attrs_task2_5);
// console.log(input_task2);
// -form
let tag_task2_6 = `<form>`;
let action_task2_6 = `Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.`;
let attrs_task2_6 = [
    {
        attr1: `accept-charset`,
        descr1: `Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.`
    },
    {
        attr2: `action`,
        descr2: `Адрес программы или документа, который обрабатывает данные формы.`
    },
];
let form_task2 = new TagClass(tag_task2_6, action_task2_6, attrs_task2_6);
// console.log(form_task2);
// -option
let tag_task2_7 = `<option>`;
let action_task2_7 = `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.`;
let attrs_task2_7 = [
    {
        attr1: `disabled`,
        descr1: `Заблокировать для доступа элемент списка.`
    },
    {
        attr2: `label`,
        descr2: `Указание метки пункта списка.`
    },
];
let option_task2 = new TagClass(tag_task2_7, action_task2_7, attrs_task2_7);
// console.log(option_task2);
// -select
let tag_task2_8 = `<select>`;
let action_task2_8 = `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.`;
let attrs_task2_8 = [
    {
        attr1: `accesskey`,
        descr1: `Позволяет перейти к списку с помощью некоторого сочетания клавиш.`
    },
    {
        attr2: `autofocus`,
        descr2: `Устанавливает, что список получает фокус после загрузки страницы.`
    },
];
let select_task2 = new TagClass(tag_task2_8, action_task2_8, attrs_task2_8);
// console.log(select_task2);
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
let car = {
    model: `A8`,
    manufacturer: `Mitsubisi`,
    year: 2019,
    max_speed: 320,
    engine: 60,

    drive: function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    },
    info: function () {
        console.log(`model is: ${this.model}, manufacturer is: ${this.manufacturer}, year of manufacture is: ${this.year}, 
                max speed is: ${this.max_speed}, engine capacity is: ${this.engine}, driver is: ${this.driver}`);
    },
    increaseMaxSpeed: function (newSpeed) {
        this.max_speed = this.max_speed + newSpeed;
    },
    changeYear: function (newValue) {
        this.year = newValue;
    },
    addDriver: (driver) => {
        car.driver = driver;
        console.log(driver);
    }
};
let driver = {
    name: `Oleksii`,
    age: 23,
};
// car.info();
// car.drive();
// car.changeYear(2020);
// car.increaseMaxSpeed(20);
// car.addDriver(driver);
// car.info();

// ==============================================
//
//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function CarConstructor(model, manufacturer, year, max_speed, engine) {
    this.model = model || `A8`;
    this.manufacturer = manufacturer || `Mitsubisi`;
    this.year = year || 2019;
    this.max_speed = max_speed || 320;
    this.engine = engine || 60;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    };
    this.info = function () {
        console.log(`model is: ${this.model}, manufacturer is: ${this.manufacturer}, year of manufacture is: ${this.year}, 
                max speed is: ${this.max_speed}, engine capacity is: ${this.engine}, driver is: ${this.driver}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed = this.max_speed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(driver);
    };
};
// let carConstructor = new CarConstructor(`A8`, `Mitsubisi`, 2019, 320, 60);
// carConstructor.info();
// carConstructor.addDriver(driver);
// carConstructor.drive();
// carConstructor.info();


// ==============================================
//
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class CarClass {
    constructor(model, manufacturer, year, max_speed, engine) {
        this.model = model || `A8`;
        this.manufacturer = manufacturer || `Mitsubisi`;
        this.year = year || 2019;
        this.max_speed = max_speed || 320;
        this.engine = engine || 60;
    }

    drive = function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    };
    info = function () {
        console.log(`model is: ${this.model}, manufacturer is: ${this.manufacturer}, year of manufacture is: ${this.year}, 
                max speed is: ${this.max_speed}, engine capacity is: ${this.engine}, driver is: ${this.driver}`);
    };
    increaseMaxSpeed = function (newSpeed) {
        this.max_speed = this.max_speed + newSpeed;
    };
    changeYear = function (newValue) {
        this.year = newValue;
    };
    addDriver = function (driver) {
        this.driver = driver;
        console.log(driver);
    };
};
let carClass = new CarClass(`A8`, `Mitsubisi`, 1000, 320, 60);
// carClass.info();
// carClass.addDriver(driver);
// carClass.drive();
// carClass.info();


// ==============================================
//
//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Cinderella {
    constructor(name, age, feet_size) {
        this.name = name || `Marta`;
        this.age = age || 45;
        this.feet_size = feet_size || 35;
    }
}

let cinder1 = new Cinderella(`Cin1`, 23, 45);
let cinder2 = new Cinderella(`Cin2`, 24, 23);
let cinder3 = new Cinderella(`Cin3`, 25, 32);
let cinder4 = new Cinderella(`Cin4`, 26, 36);
let cinder5 = new Cinderella(`Cin5`, 27, 53);
let cinder6 = new Cinderella(`Cin6`, 28, 16);
let cinder7 = new Cinderella(`Cin7`, 29, 40);
let cinder8 = new Cinderella(`Cin8`, 30, 35);
let cinder9 = new Cinderella(`Cin9`, 31, 29);
let cinder10 = new Cinderella(`Cin10`, 38, 32);
let cinderellas = [cinder1, cinder2, cinder3, cinder4, cinder5, cinder6, cinder7, cinder8, cinder9, cinder10];

class Prince {
    constructor(name, age, shoe_size) {
        this.name = name || `Baron`;
        this.age = age ||`77`;
        this.shoe_size = shoe_size || 53;
    }

    lookingCinderella = function (array) {
        // let res = array.find(cinder => cinder.feet_size === this.shoe_size);
        let res = null;
        for (const elem of array) {
            if (elem.feet_size === this.shoe_size){
                res = elem;
            }
        }
        res
            ? console.log(`My Cinderella is: ${res.name}`)
            : console.log(`My Cinderella probably died`);
    }
}
let prince = new Prince();
console.log(prince);
prince.lookingCinderella(cinderellas);

// ==============================================
//
//
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================