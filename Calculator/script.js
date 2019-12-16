let display = document.getElementById("display");

function addToScreen(x) {
  display.value += x;
  if (x == "c") {
    display.value = "";
  }
}

function answer() {
  x = display.value;
  x = eval(x);
  display.value = x;
}

function backspace() {
  let number = display.value;
  let len = number.length - 1;
  let newNumber = number.substring(0, len);
  display.value = newNumber;
}

function power(y) {
  x = display.value;
  x = Math.pow(x, y);
  display.value = x;
}
