const products = document.querySelectorAll(".product button");
const cart = document.querySelector("tbody");
const total = document.querySelector("#total");
const checkout = document.querySelector("#checkout");
let cartArray = [];

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function() {
    const product = {
      name: this.getAttribute("data-name"),
      price: parseFloat(this.getAttribute("data-price"))
    };
    cartArray.push(product);
    renderCart();
  });
}

function renderCart() {
  cart.innerHTML = "";
  let totalCost = 0;
  for (let i = 0; i < cartArray.length; i++) {
    const item = cartArray[i];
    const tr = document.createElement("tr");
    tr.innerHTML = "<td>" + item.name + "</td><td>$" + item.price + "</td><td><button class='remove'>Eliminar</button></td>";
    totalCost += item.price;
    cart.appendChild(tr);
  }
  total.innerHTML = "$" + totalCost;
}

cart.addEventListener("click", function(event) {
  if (event.target.classList.contains("remove")) {
    const button = event.target;
    const tr = button.parentElement.parentElement;
    const name = tr.children[0].innerHTML;
    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i].name === name) {
        cartArray.splice(i, 1);
        break;
      }
    }
    renderCart();
  }
});

checkout.addEventListener("click", function() {
  alert("Compra realizada con éxito");
});
