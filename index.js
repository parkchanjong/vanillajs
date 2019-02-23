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
//
//
//
//
document.title = "head";
//const title = document.getElementById("title");
//title.innerHTML = "hihihi";

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
/*  =toggle
const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
  */

function init() {
  title.addEventListener("click", handleClick);
}
init();

/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
*/

//
//
//
//
/*
const age = prompt("ask"); //bad

if (age > 20 && age < 30) {
  console.log("ok");
} else if (age > 21) {
  console.log("mm");
} else {
  console.log("no");
}
*/
