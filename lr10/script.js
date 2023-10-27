var arr1 = [1, 2, 3];
var arr2 = ["a", "b", "c", "d"];
var arr3 = [true, false, true, true, false];

var arr4 = arr1.concat(arr2, arr3);

document.write("Четвертый массив: <br>");
for (var i = 0; i < arr4.length; i++) {
  document.write(i + " --- " + arr4[i] + " <br> ");
}

arr4.splice(2, 1);
arr4.splice(5, 2);

arr4.unshift("element1");
arr4.push("element2");

arr4.shift();
arr4.pop();

delete arr4[1];
delete arr4[4];
delete arr4[7];

document.write("<br>");
document.write("Длина массива: " + arr4.length + "<br>");
document.write("Количество элементов: " + arr4.filter(Boolean).length + "<br>");
document.write("Элементы массива: <br>");
for (var i = 0; i < arr4.length; i++) {
  if (arr4[i] !== undefined) {
    document.write(i + " - " + arr4[i] + "<br>");
  }
}

// Очистка
arr4 = [];
// или
arr4.length = 0;

// 1.1
var arr1 = ["ya", "hochu", "domoy:("];
var result1 = arr1.join(",");
document.write("<br>");
document.write("Результат: " + result1 + "<br>");

// 1.2
var arr2 = ["ya", "hochu", "domoy:("];
var result2 = "";
for (var i = 0; i < arr2.length; i++) {
  if (i == arr2.length - 1) {
    result2 += arr2[i];
  } else {
    result2 += arr2[i] + ",";
  }
}
document.write("<br>");
document.write("Результат: " + result2 + "<br>");

//2
var numbers = [10, 15, 20, 25, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

var sr = sum / numbers.length;
var spprov = numbers.includes(sr);

document.write("<br>");
document.write("Среднее значение массива: " + sr + "<br>");
document.write("Есть ли среднее значение в массиве: " + spprov);
