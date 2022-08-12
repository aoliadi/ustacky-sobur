const GADGETS_CONTAINER = document.getElementById("gadgets_list_container-js");
const CART_COUNTER = document.querySelector(".gadgets_counter-js");

const AVAILABLE_GADGETS = [
  {
    name: "Samsung TV",
    price: 500000,
  },
  {
    name: "Pixel 4a",
    price: 250000,
  },
  {
    name: "PS 5",
    price: 300000,
  },
  {
    name: "MacBook Air",
    price: 800000,
  },
  {
    name: "Apple Watch",
    price: 95000,
  },
  {
    name: "Air Pods",
    price: 75000,
  },
];

let CART_ARRAY = [];
CART_COUNTER.innerHTML = CART_ARRAY.length;

function updateCartCount(numberOfItems) {
  CART_COUNTER.innerHTML = numberOfItems;
}

function addToCart(gadget) {
  CART_ARRAY.push({ ...gadget, quantity: 1 });
  // console.log(SELECTED_GADGETS);
}

function removeFromCart(gadget) {
  CART_ARRAY = CART_ARRAY.filter((item) => item.name !== gadget.name);

  // console.log(SELECTED_GADGETS);
}

function changeBtnLabel(btn, action) {
  if (action === "add") {
    btn.className = "btn";
    btn.innerHTML = "add to cart";
    return;
  }
  btn.className = "btn btn--remove";
  btn.innerHTML = "remove from cart";
}

function isAlreadySelected(gadget) {
  return CART_ARRAY.find((elem) => elem.name === gadget.name);
}

function handleAddToCartProcess(event, id) {
  const selectedGadget = AVAILABLE_GADGETS[id];
  const feedback = isAlreadySelected(selectedGadget);

  if (feedback) {
    removeFromCart(feedback);
    changeBtnLabel(event.target, "add");
    updateCartCount(CART_ARRAY.length);
    return;
  }
  changeBtnLabel(event.target, "remove");
  addToCart(selectedGadget);
  updateCartCount(CART_ARRAY.length);
}

let gadgetList = AVAILABLE_GADGETS.map((item, index) => {
  return `
  <div class="shop1">
    <img src="./assets/img/product${index + 1}.png">
    <p>${item.name}</p>
    <h3 id="p3">${item.price}</h3>
    <div>
    <button class="btn" onclick="handleAddToCartProcess(event, ${index})">add to cart</button>
    </div>
  </div>
  `;
}).join("");

GADGETS_CONTAINER.innerHTML = gadgetList;

// function payWithPaystack() {
//   let handler = PaystackPop.setup({
//     key: "pk_test_a3a21e27e5d115f49b289bbf9231c00dedc10e57", // Replace with your public key
//     email: document.getElementById("email-address").value,
//     amount: document.getElementById("amount").value * 100,
//     ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
//     // label: "Optional string that replaces customer email"
//     onClose: function () {
//       alert("Window closed.");
//     },
//     callback: function (response) {},
//   });

//   handler.openIframe();
// }
