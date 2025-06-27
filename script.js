const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const mulIcon = document.querySelector("#multiply");
const clrBtn = document.querySelector(".clr-btn");

for (let val of btn) {
  val.addEventListener("click", () => {
    let number = val.innerText;
    if (number === "x") {
      number === "*";
    }

    if (number === "=") {
      try {
        let result = eval(display.innerText.replace(/x/g, "*"));
        display.innerText = result;
      } catch (error) {
        display.innerText = "Error";
      }
    } else if (display.innerText === "0") {
      display.innerText = number;
    } else {
      display.innerText += number;
    }
  });
}

clrBtn.addEventListener("click", () => {
  display.innerText = "0";
});
