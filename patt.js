// 01
// *
// **
// ***
// ****
// *****
// for(let row=1;row<=5;row++){
//     for(let col=1;col<=row;col++){
//         document.write("*")

//         }
//         document.write("<br>")

// }
// 02
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for(let row=0;row<5;row++){
//     for(let col=0;col<5;col++){
//         document.write("* ")
//     }
//     document.write("<br>")
// }

// 03

// * * * * *
// * * * *
// * * *
// * *
// *

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5 - i; j++) {
//     document.write("* ");
//   }
//   document.write("<br>");
// }

// 04

// * * *
//  * * 
// * * *
//  * * 
// * * *

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//       if ((i + j) % 2 === 0) {
//           document.write("*");
//       } else {
//           document.write("&nbsp;");
//       }
//     }
//     document.write("<br>");
// }

// document.write("<br>");
// 05
// 1
// 12
// 123
// 1234
// 12345
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

// *
// ***
// *****
// *******
// *********
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     document.write(" ");
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     document.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (j <= i) {
//       document.write("*");
//     } else {
//       document.write(" ");
//     }
//   }
//   document.write("<br>");
// }

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write('*');
//   }
//   document.write("<br>");
// }
// for (let i = n - 1; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     document.write('*');
//   }
//   document.write("<br>");
// }

// *****
// ****
// ***
// **
// *
// **
// ***
// ****
// *****

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = n; j >= i; j--) {
//     document.write("*");
//   }
//   document.write("<br>");
// }
// for (let i = n - 1; i >= 1; i--) {
//   for (let j = n; j >= i; j--) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// 54321
// 5432
// 543
// 54
// 5
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = n; j >= i; j--) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

// 1
// 24
// 369
// 481216
// 510152025

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(i * j);
//   }
//   document.write("<br>");
// }









