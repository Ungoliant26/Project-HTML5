// document.write("JavaScript say Hello");
// console.log("JavaScript say Hello");
// console.info("JavaScript say Hello");
// console.error("JavaScript say Hello");
// console.warn("JavaScript say Hello");
// const num = 5;
// num = 7;
// console.log("Переменная: " + num + " тест");

/* var num_1 = 5;
var num_2 = 15;
console.log("Результат: " + (num_1 * num_2));

var num_3 = 5;
num_3 += 7;
console.log("Результат: " + num_3);

var str_1 = Number("12");
var str_2 = Number("2");
console.log("Результат: " + (str_1 + str_2));

console.log ("Math: " + Math.PI);
console.log ("Math: " + Math.min(4, 5, 6, 10)); */

/* var number = 5;
var Car = false;

if (number == 5 && !Car) {
    console.log ("OK");
} else if (number < 10) {
    console.log ("Else");
} else {
    console.log ("All fail");
} */

/* var stroka = "46";

// Проверка на несколько значений соответствия
switch(stroka) {
    case "4": 
    console.log ("Переменная со значение 4");
    break;
    case "45": 
    console.log ("Переменная со значение 45");
    break;
    case "Word": 
    console.log ("Валидная переменная");
    break;
    default: console.log ("Default");

} */

//Массивы и многомерные массивы

/* var arr = [5, false, "Privet", 5.8, 0, -846];
console.log (arr.length);

var matrix = [
    [5, false, "Privet"], [5.8, 0], [-846, true]
];

matrix[1][0] = 90
console.log (matrix); */

/* for(var i = 100; i > 1; i /= 2) {
    console.log (i);
} */

/* var j = 1000;
while(j >= 100) {
    console.log (j);
    j -= 100;
} */

/* var x = 0;
do {
    console.log (x);
    x++;
} while(x < 10); */

/* for (var i = 10; i <= 20; i++) {
    if (i % 2 == 0)
        continue;
    
    console.log (i);
} */

/* var arr = [5, 7, 3, 8 ,9, 90];

for(var i = 0; i < arr.length; i++) {
    arr[i] *=2;
    console.log("Element " + (i + 1) + ": " + arr [i]);
} */

// Вызов окна с инфой и ОК
// alert("What a good weather!");

// Вызов окна с инфой и ОК-Отмена
/* var data = confirm("Вы сейчас дома?");
if(data) {
    alert("Они поднимаются");
}
else {
    alert("Тикай с городу!");
} */

// Значение через всплывающее окно и условия вывода результата
/* var data = prompt ("Сколько вам лет?");
if(data < 25) {
    alert("Малолетка!!!");
}
else if (data >80) {
    alert("Мумия");
}
else {
    alert("Старпёр!!!");
}
console.log(data); */

/* var person = null;
if(confirm("Вы точно уверены?")) {
    person = prompt ("Введите ваше имя");
    alert("Приветствую Жалкий червь " + person);
} else {
    alert("Отмена для слабаков. Живи с этим");
} */

/* function info(word) {
    console.log(word + "!");
}

function summa(a, b) {
    var res = a + b;
    info(res);
}

summa(5, 7); */

//Вывод значений массива и возвращение значений с последующим 
//выводом в конкретной переменной

/* function summa(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}

var array = [5, 6, 7, 10, 67];
var array_1 = [5, 6, 3, 10, 44];
var array_2 = [15, 2, 7, 14, 67];

var res = summa(array);
res *= 2;
console.log("Result " + res);
summa(array_1);
summa(array_2); */

/* var num = 10;

function info() {
    var num = 20;
    console.log(num);
}

info(); */

//События при вводе, нажатии, наведении. Стили

/* var counter = 0;

function onClickButton(num) {
    counter++;
    num.innerHTML = "Жмакнули: " + counter; 
    num.style.background = "red";
    num.style.color = "blue";
    num.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";
}

function onInput(num) {
    if (num.value == "Hello")
        alert("И тебе");
    console.log(num.value);
} */

/* var text = document.getElementById('text');
text.title = "New_text";
console.log(text.title);

text.style.color = "red";
text.style.backgroundColor = "black";

text.innerHTML = "New<br>string";

// document.getElementById('text').style.color = "white";

// var spans = document.getElementsByTagName('span');

var spans = document.getElementsByClassName('simple-text');

for (var i = 0; i < spans.length; i++) {
   console.log(spans[i].innerHTML); 
} */

function checkForm(el) {
    
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;
    
    var fail = '';

    if(name == "" || pass == "" || state == "") {
        fail = "Заполните все поля!";
    }
    else if(name.length <= 1 || name.length > 50) {
        fail = "Введите корректное имя";
    }
    else if(pass != repass) {
        fail = "Пароли должны совпадать";
    }
    else if(pass.split("&").length > 1) {
        fail = "Некорректный пароль";
    }
        
    if(fail != "") {
        document.getElementById('Error').innerHTML = fail;
    } 
    else {
        console.log("Всё верно");
        window.location.href = 'https://itproger.com';
    }
return false

    //console.log(state + " - " + pass + " - " + repass);
}

