"use strict";

const theBtn = document.querySelector(".btn--add-to-cart");

theBtn.addEventListener("click", (e) => {
  e.target.classList.add("activated");

  setTimeout(() => {
    e.target.classList.remove("activated");
  }, 1500);
});
