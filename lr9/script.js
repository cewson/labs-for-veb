let element1 = document.getElementById("element1");
let element2 = document.getElementById("element2");
let element3 = document.getElementById("element3");
let element4 = document.getElementById("element4");
let element5 = document.getElementById("element5");
let element6 = document.getElementById("element6");

element1.addEventListener("mouseover", function () {
  element1.classList.add("cl2");
});

element1.addEventListener("mouseout", function () {
  element1.classList.remove("cl2");
  element1.classList.add("cl5");
});

element2.addEventListener("dblclick", function () {
  element2.classList.add("cl3");
});

element3.addEventListener("click", function () {
  element3.classList.add("cl4");
});

element4.addEventListener("mouseover", function () {
  element4.style.color = "yellow";
});

element5.addEventListener("dblclick", function () {
  element5.style.backgroundColor = "pink";
});

element6.addEventListener("click", function () {
  element6.style.fontStyle = "italic";
});

var userName = prompt("Введите ваше имя:");

if (userName) {
  alert("Приветствую, " + userName + "!");
} else {
  alert("Приветствую, незнакомец!");
}

var sum = 0;

document.getElementById("btn1").addEventListener("click", function () {
  sum += 1;
});

document.getElementById("btn2").addEventListener("click", function () {
  sum += 2;
});

document.getElementById("btn3").addEventListener("click", function () {
  sum += 3;
});

document.getElementById("btn4").addEventListener("click", function () {
  sum += 4;
});

document.getElementById("btn5").addEventListener("click", function () {
  sum += 5;
});

document.getElementById("btnResult").addEventListener("click", function () {
  alert(sum);
  sum = 0;
});

var text = document.getElementById("text");

text.addEventListener("mouseover", function () {
  this.style.fontSize = "40px";
});

text.addEventListener("mouseout", function () {
  this.style.color = "red";
});
