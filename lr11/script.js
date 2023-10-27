
var base = parseInt(prompt("Введите число:"));
var exponent = parseInt(prompt("Введите степень:"));


function exponentiateNumber(base, exponent) {
    if (exponent === undefined) { // не указана
        exponent = 1; 
    }

    var result = Math.pow(base, exponent); 
    alert(result);
}
exponentiateNumber(base, exponent);

var monthNumber;

function setMonthNumber() {
    var input = prompt("Введите номер месяца от 1 до 12:");
    monthNumber = parseInt(input);
}

function displayMonthName() {
    var monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var monthName = monthNames[monthNumber - 1]; 
    document.write("Название месяца: " + monthName +"<br>");
    }

setMonthNumber(); displayMonthName(); 


var arr = [10, 15, 20, 25, 300];

function findMaxElement(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

var maxElement = findMaxElement(arr);
function displayResult(maxElement) {
    if (maxElement < 10) {
        document.write("Максимальный элемент находится в диапазоне от 0 до 9 <br>");
    } else if (maxElement < 100) {
        document.write("Максимальный элемент находится в диапазоне от 10 до 99 <br>");
    } else {
        document.write("Максимальный элемент находится в диапазоне свыше 100 <br>");
    }
}

displayResult(maxElement);

function repeat(str = '', n = 2) {
    var repeatedStr = '';
    for (var i = 0; i < n; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
}

document.write(repeat("hi"));
document.write(repeat("ho", 4));
repeat(str = '', n = 2);

const computeResult = (a, b, c) => a * b / c;

document.write("<br> Результат: " + computeResult(2,4,5));