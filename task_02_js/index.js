//1.	Напишите функцию для вывода элементов массива в элемент <p id=”new”></p>
var mass = ['first', 'second', 'third', 'fourth', 'fifth'];

var outOne = document.getElementById('new');
// var out = '';
// for (var key in mass) {
//     out = mass;
// }
outOne.innerHTML = mass;

//2.    Добавьте в предыдущую программу два элемента input, в которые можно ввести
// индекс массива и значение. По нажатию “ОК” - массив выводится.

var outTwo = document.getElementById('new2');
document.getElementById('btn').onclick = functionAdded;

function functionAdded() {
    var index = document.getElementById('index').value;
    var meaning = document.getElementById('meaning').value;
    mass.splice(index, 0, meaning);

    outTwo.innerHTML = mass;
}




//task 3

var outThree = document.getElementById('new3')
document.getElementById('pop').onclick = functionPop;

function functionPop() {
    mass.pop();
    outThree.innerHTML = mass;
}

//task 4
var outFour = document.getElementById('new4');
document.getElementById('shift').onclick = functionShift;

function functionShift() {
    mass.shift();
    outFour.innerHTML = mass;
}

//task 5
var outFive = document.getElementById('new5'); //назначаем переменную, которой присвеваем по айди елемент, куда будет выводиться значение
document.getElementById('push').onclick = functionPush; //нужно сделать событие - для button id="push" ставим что событие будет при onclick и присваиваем название functionPush

function functionPush() { // создаем функцию functionPush
    var inputPush = document.getElementById('inputPush').value; // нужно получить данные с input - создаем переменную, которой присваеваем получить данные с input по id inputPush.
    mass.push(inputPush); //далее прописываем что нам нужно получить - какой метод используем
    outFive.innerHTML = mass; //нужно в html вывести - в переменную outFive показываем что нам нужен innerHTML  далее перезаписать в наш массив (добавить новый индекс масива и его значение)
}

//Task 6
var outSix = document.getElementById('new6');
document.getElementById('unshift').onclick = functionUnshift;

function functionUnshift() {
    var inputUnshift = document.getElementById('inputUnshift').value;
    mass.unshift(inputUnshift);
    outSix.innerHTML = mass;
}