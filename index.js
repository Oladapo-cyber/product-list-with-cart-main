import { data } from "./data.js";
const dessertContainer = document.getElementById("dessert-container");

console.log(dessertContainer);

console.log(data);

document.addEventListener("DOMContentLoaded", () => {
  dessertContainer.innerHTML = data
    .map((dessert) => {
      return `<div class="flex flex-col items-start">
          <div class="relative">
            <img
              class="rounded-2xl"
              src="${dessert.image.mobile}"
              alt="${dessert.name}"
            />
            <button
              class="absolute bg-white left-0 right-0 mx-auto w-fit rounded-2xl px-5 py-1.5 font-semibold text-[#2e1813] border border-[#2e1813] bottom-[-14px] z-10"
            >
              Add to Cart
            </button>
          </div>
          <div class="flex flex-col items-start mt-5">
            <p class="text-xs text-[#5d2418]">${dessert.category}</p>
            <p class="text-[#2e1813] font-semibold">${dessert.name}</p>
            <p class="text-[#b85c06] font-semibold">$ ${dessert.price}</p>
          </div>
        </div>`;
    })
    .join("");
});
