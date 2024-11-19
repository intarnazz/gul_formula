"use strict";

function formula(x) {
  return (16 - x ** 2) ** 0.5 + (x + 4) / (x - 1);
}

function foo() {
  const x = document.getElementById("x");
  const res = formula(x.value);
  const y = res === 0 ? res : res || "Не подходящий 'X'";
  document.getElementById("result").innerHTML =
    y == Infinity ? "Деление на ноль верните другой аргумент" : y;
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  foo();
});
