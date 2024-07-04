// const http = require("http");
// const fs = require("fs");

// http.createServer((req, res) => {}).listen(8800);

// // fs.writeFile("pdfs/hello.txt", "this is an assingment", (error) => {
// //   if (error) {
// //     console.log("error");
// //   }
// // });

// // fs.readFile("hello.txt", "utf8", (error, data) => {
// //   if (error) {
// //     console.log(error.message);
// //   } else {
// //     console.log(data);
// //   }
// // });
// //building modules
// // inbuilt modules
// const { properCase, slugify, truncate } = require("./string");
// console.log(properCase("hello"));
// console.log(slugify("Hello World"));
// console.log(
//   truncate(
//     "Hello World This is the first time i am using node js always try this at home."
//   )
// );

//events in node
// const events = require("events");

// const eventEmitter = new events.EventEmitter();

// const checkout = (list) => {
//   const price = list.price;
//   const updatedPrice = price + 0.13 * price;
//   console.log("Your total price with VAT is " + updatedPrice);
// };

// // creating a new event plus listen
// eventEmitter.on("checkout", (item) => {
//   checkout(item);
// });

// // Fire
// const cart = { name: "Shirt", price: 100 };
// eventEmitter.emit("checkout", cart);
// node package manager
// const properCase = require("proper-upper-case");
// const convert = (text) => {
//   return properCase(text);
// };
// const result = convert("sudarsan SHARMA");
// console.log(result);

