const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {}).listen(8800);

// fs.writeFile("pdfs/hello.txt", "this is an assingment", (error) => {
//   if (error) {
//     console.log("error");
//   }
// });

// fs.readFile("hello.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error.message);
//   } else {
//     console.log(data);
//   }
// });
//building modules
// inbuilt modules
const { properCase, slugify, truncate } = require("./string");
console.log(properCase("hello"));
console.log(slugify("Hello World"));
console.log(truncate("Hello World This is the first time i am using node js"));
