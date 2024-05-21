const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill"); //Information of the bill amount.
const tipInput = document.getElementById("tip"); //Information of the tip amount.
const totalSpan = document.getElementById("total"); //Information of the Total amount.

function calculateTotal() { //Operation to calculate the total amount.
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);