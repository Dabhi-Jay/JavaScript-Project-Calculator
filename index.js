let arr = document.querySelectorAll(".op");
let btn = document.getElementById("calculate");
let reset = document.getElementById("reset");

reset.addEventListener("click", function () {
  location.reload();
});

btn.addEventListener("click", function () {
  let operatorSelect = document.getElementById("operators");
  let ch = operatorSelect.options[operatorSelect.selectedIndex].text;

  let num1 = parseFloat(document.getElementById("inp1").value);
  let num2 = parseFloat(document.getElementById("inp2").value);
  let res = document.getElementsByTagName("h2")[0];
  switch (ch) {
    case "Add(+)":
      res.innerHTML = "Result : " + (num1 + num2);
      break;
    case "Substract(-)":
      res.innerHTML = "Result : " + (num1 - num2);
      break;
    case "Multiply(x)":
      res.innerHTML = "Result : " + num1 * num2;
      break;
    case "Divide(/)":
      res.innerHTML = "Result : " + num1 / num2;
      break;
  }
});
