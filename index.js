// Create a class book with properties title and author
// wrte a method update title(newtitle) to change the title of the book.

// update the title using the update title method.

// log the updated book details.

class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  updateDetails() {
    return `Book title is: "${this.title}" and the 
    book author is: "${this.author}".
    `;
  }

  updateTitle(newTitle) {
    if (this.title !== "") {
      this.title = newTitle;
      console.log(`The new book title is: ${newTitle}`);
    } else {
      console.log("there was never a title to your book");
    }
  }
}

let book1 = new book("d", "Chinua Achebe");

console.log(book1.updateTitle("There was a Country"));
console.log(book1.updateDetails());

// let names = {
//   fname: "Yinusa",
//   lname: "Oladapo",
// };

// console.log(names.fname);
// console.log(names.hasOwnProperty("mname"));
// console.log(names);

// let naf = {
//   fname: "Yinusa Oladapo",
//   age: 30,
//   sayName() {
//     console.log(`
//       Your Name is: ${naf.fname};
//       Your age is: ${naf.age};
//       `);
//   },
// };

// naf.sayName();

// class bankAccount {
//   #balance;
//   constructor(balance) {
//     this.#balance = balance;
//   }

//   getBalance() {
//     return this.#balance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     } else {
//       console.log("Amount entered should be greater than 0.00");
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//     }
//   }
// }

// let account = new bankAccount(1000);
// console.log(account.getBalance());
// account.deposit(100);
// console.log(account.getBalance());
// account.withdraw(500);
// console.log(account.getBalance());

// //User Class
// class User {
//   #password;
//   constructor(username, password) {
//     this.username = username;
//     this.#password = password;
//   }

//   comparePassword(inputPassword) {
//     if (this.#password === inputPassword) {
//       console.log("Password Match!");
//     } else {
//       console.log("Password does not match!");
//     }
//   }
// }

// let user1 = new User("Oladapo", "qwertzuiop");
// let user2 = new User("John", "qwertyuiop");

// console.log(user1.comparePassword("qwertzuiop"));
// console.log(user2.comparePassword("qwertyuiop"));

// class ATM {
//   #balance;
//   constructor(accountName, balance) {
//     this.accountName = accountName;
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(
//         `Deposit successful, your new account balance is ${this.#balance}`
//       );
//     } else {
//       console.log("Amount should be greater than 0.00!");
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//       console.log(
//         `Withdrawal successful: Your new account balance is ${this.#balance}`
//       );
//     } else {
//       console.log("Insufficient balance!");
//     }
//   }

//   getBalance() {
//     return `Your account balance is ${this.#balance}`;
//   }

//   getAccountDetails() {
//     return `Account Name: ${this.accountName},
//     Account Balance: ${this.#balance}.
//     `;
//   }
// }

// let atm1 = new ATM("Oladapo", 1000);
// let atm2 = new ATM("Omotola", 200000);

// console.log(atm1.getBalance());
// atm1.deposit(200);
// atm1.withdraw(900);
// console.log(atm2.getBalance());
// // Import the data from the data.js file
// import { data } from "./data.js";

// // Get the dessert container element from the DOM
// const dessertContainer = document.getElementById("dessert-container");

// // Get the cart container element from the DOM

// const emptyCart = document.getElementById("emptyCart");
// console.log(emptyCart);

// // Log the cart container element to the console

// // Log the dessert container element to the console
// console.log(dessertContainer);

// // Log the data to the console
// console.log(data);

// // Initialize an empty array to hold the items in the cart
// let cart = [];

// // Add an event listener to the document that will run when the DOM content is fully loaded
// document.addEventListener("DOMContentLoaded", () => {
//   // Set the innerHTML of the dessert container to a string of HTML elements created from the data array
//   dessertContainer.innerHTML = data
//     .map((dessert, index) => {
//       // Log each dessert object and its index to the console
//       console.log(dessert, index);
//       // Return a string of HTML for each dessert item
//       return `<div class="flex flex-col items-start">
//                     <div class="relative w-full">
//                         <img
//                             class="rounded-2xl"
//                             src=${dessert.image.mobile}
//                             alt=${dessert.name}
//                         />
//                         <button
//                             id="add-to-cart-button-${index}"
//                             class="add-to-cart-button absolute bg-white left-0 right-0 mx-auto w-fit rounded-2xl px-5 py-1.5 text-sm font-semibold text-[#3b2520] border border-[#5d2418] bottom-[-14px] z-10"
//                         >
//                             Add to Cart
//                         </button>
//                     </div>

//                     <div class="flex flex-col items-start mt-5">
//                         <p class="text-xs text-[#5d2418]">${dessert.category}</p>
//                         <p class="text-[#2e1813] font-semibold">${dessert.name}</p>
//                         <p class="text-[#b85c06] font-semibold">$${dessert.price}</p>
//                     </div>
//                 </div>`;
//     })
//     .join("");

//   // Add an event listener to the dessert container that will run when it is clicked

//   // Check if the clicked element is an "Add to Cart" button
//   dessertContainer.addEventListener("click", (event) => {
//     if (event.target && event.target.classList.contains("add-to-cart-button")) {
//       if (event.target.innerHTML === "Add to Cart" || cart.length === 0) {
//         event.target.innerHTML = "Added to Cart";
//         event.target.style.color = "#ffffff";
//         event.target.style.backgroundColor = "#5d2418";
//         const index = event.target.id.split("-")[4];
//         cart.push(data[index]);
//         updateCart();
//         console.log(cart);
//       }
//     }
//   });
// });

// const updateCart = () => {
//   const cartContainer = document.getElementById("cart-items");
//   cartContainer.innerHTML = cart
//     .map((item) => {
//       return `<div class="flex flex-col">
//         <p>${item.name}</p>
//         <p>$${item.price}</p>
//         </div>`;
//     })
//     .join("");
// };
