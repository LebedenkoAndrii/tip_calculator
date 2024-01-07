let res = document.getElementById("result");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let bill = document.getElementById("bill").value;
  let tipPersent = document.getElementById("tip").value;
  let people = document.getElementById("people").value;
  let tip = 0;

  if (bill.length === 0 || tipPersent.length === 0 || people.length === 0) {
    res.innerHTML = "Please, enter a correct data";
  } else {
    totalPersent = bill / tipPersent / 100;
    tip = (totalPersent / people) * 100;
    res.innerHTML = `Tip: ${Math.round(tip)} $`;
  }
});
