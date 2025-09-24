/**
 * Exercise 1 : String and Array Manipulation
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise1.mjs
 */

// Expected result:
// [ 'Mobile phone', 'Laptop computer', 'Headphones', 'Smartwatch' ]

const products = [
  "  mobile phone ",
  " laptop computer  ",
  "Headphones",
  "  smartwatch",
];
let prod = products.map (product=> product.trim().slice(0,1
).toUpperCase()+product.trim().slice(1).toLowerCase());
console.log(prod);
