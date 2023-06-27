//module
const fs= require("fs");
let text= fs.readFileSync("aditya.txt", "utf-8");
console.log(text);

text= text.replace("content","Aditya");
console.log("this content of the filled is");
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("raj.txt", text);

