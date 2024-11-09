// Import the data from the data.js file
import { data } from "./data.js";

// Get the dessert container element from the DOM
const dessertContainer = document.getElementById("dessert-container");

// Get the cart container element from the DOM

const emptyCart = document.getElementById("emptyCart");
console.log(emptyCart);

// Log the cart container element to the console

// Log the dessert container element to the console
console.log(dessertContainer);

// Log the data to the console
console.log(data);

// Initialize an empty array to hold the items in the cart
let cart = [];

// Add an event listener to the document that will run when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set the innerHTML of the dessert container to a string of HTML elements created from the data array
  dessertContainer.innerHTML = data
    .map((dessert, index) => {
      // Log each dessert object and its index to the console
      console.log(dessert, index);
      // Return a string of HTML for each dessert item
      return `<div class="flex flex-col items-start">
                    <div class="relative w-full">
                        <img
                            class="rounded-2xl"
                            src=${dessert.image.mobile}
                            alt=${dessert.name}
                        />
                        <button
                            id="add-to-cart-button-${index}"
                            class="add-to-cart-button absolute bg-white left-0 right-0 mx-auto w-fit rounded-2xl px-5 py-1.5 text-sm font-semibold text-[#3b2520] border border-[#5d2418] bottom-[-14px] z-10"
                        >
                            Add to Cart
                        </button>
                    </div>

                    <div class="flex flex-col items-start mt-5">
                        <p class="text-xs text-[#5d2418]">${dessert.category}</p>
                        <p class="text-[#2e1813] font-semibold">${dessert.name}</p>
                        <p class="text-[#b85c06] font-semibold">$${dessert.price}</p>
                    </div>
                </div>`;
    })
    .join("");

  // Add an event listener to the dessert container that will run when it is clicked

  // Check if the clicked element is an "Add to Cart" button
  dessertContainer.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("add-to-cart-button")) {
      if (event.target.innerHTML === "Add to Cart" || cart.length === 0) {
        event.target.innerHTML = "Added to Cart";
        event.target.style.color = "#ffffff";
        event.target.style.backgroundColor = "#5d2418";
        const index = event.target.id.split("-")[4];
        cart.push(data[index]);
        updateCart();
        console.log(cart);
      }
    }
  });
});

const updateCart = () => {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = cart
    .map((item) => {
      return `<div class="flex flex-col">
        <p>${item.name}</p>
        <p>$${item.price}</p>
        </div>`;
    })
    .join("");
};
