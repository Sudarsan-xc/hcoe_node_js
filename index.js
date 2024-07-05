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

// const slugify=require('slugify');
//  var changeddata='hello i am god of the world';

// const slugfunction=(data)=>{
//   return slugify(data);
// }
// console.log(slugfunction(changeddata));

// //lodash(truncate)
//   const truncate=require('truncate');
//   const value='hello it is beatufull day today i am bleesed that this day i am leaving';

//   const truncates=(data,length)=>{
//  return truncate(data,length);
//   }

//  console.log(truncates(value,20));
// bycript

//password encrypt
// 

// node mailer
//text msg
//file attach
//direct body image
require("dotenv").config();
const nodemailer=require("nodemailer");
//transport
const transporter= nodemailer.createTransport({
    service:process.env.EMAIL_SERVICE,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PW
    }
});transporter.verify((err)=>{
if (err) console.log(err);
console.log("email is working");
});

const sendEmail=async ({email, subject,message,attachments})=>{

const info= await transporter.sendMail({
    from:`"Sudarshan Sharma"<${process.env.EMAIL_USER}`,
    to:email,
    subject:subject,
    html:message,
    attachments,
});
return info;
};
sendEmail({
    email:"suman121pok@gmail.com",
    subject:"k x ayrr",
    message:"<div>Gaddar giley<div>img src='cid:Gaddar-hOS-TA'/>",
    attachments:[{
        filename:'giley.png',
        path:'./giley.png',
        cid:"Gaddar-hOS-TA"
    }
    ]
      
});