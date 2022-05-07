type Color = "red" | "green" | "blue";
let background:Color = "red";
//background = "Something";

type StrOrStrArray = string | string[];
let data: StrOrStrArray = "Hello";
data = ["Hello","Another"];

console.log('Data ',data);