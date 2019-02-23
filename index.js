const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  time: function(a, b) {
    return a * b;
  },
  divided: function(a, b) {
    return a / b;
  },
  power: function(a, b) {
    return a ** b;
  }
};

const plus = calculator.power(4, 2);
console.log(plus);

//const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "hihihi";
title.style.color = "black";
document.title = "head";

function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);
