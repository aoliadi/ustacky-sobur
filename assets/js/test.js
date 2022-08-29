"use strict";

const theBtn = document.querySelector(".btn--add-to-cart");

theBtn.addEventListener("click", (e) => {
  theBtn.classList.add("activated");

  setTimeout(() => {
    theBtn.classList.remove("activated");
  }, 1500);
});
