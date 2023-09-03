// Write programs with javascript

// Write a program to sort an array without using sort function.

// 2, write a program to reverse an array without using reverse function.

// 3. write a program to get the maximum value in an array without using

// max function.

// 4. write a program to get the second maximum value in an array.
//  5. write a program to get the minimum value in an array without using min function.

// 6. write a program to get the second minimum value in an array.
//  7. write a program to check number is palindrome or not.

// 8. write a program to check number is armstrong or not.

// 9. write a program to reverse a number.
// 10. write a program to check the number is perfect square number or not.
// 11. writa a program to add the value in an array without using pop function.

// 12, write a program to delete a value from array with using buildin function,
//  13. writa a program to merge an array without using merge function.
// // let count = 0;
// let incr = () => {
//   count += 1;
//   updatedis();
// };

// let decr = () => {
//   count -= 1;
//   updatedis();
// };
// let updatedis = () => (document.getElementById("counter").textContent = count);
// sort an arrray
// let arr=[1,2,3,4,5]
// for(let i=0;i<arr.length-1;i++){
//     for (let j=0;j<arr.length-i-1;j++){
//         if (arr[j]>arr[j+1]) {
//             let temp =arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp;

//         }
//     }

// }
// console.log(arr);
//merging two arrays
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// for (let item of arr2) {
//     arr1[arr1.length] = item;
// }
// console.log(arr1);

//1 sort an array
// let arr=[23,43,5,3,24,555555,54]
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);

// 2 reverse array
// let arr=[1,2,3,4,5]
// let reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversed[reversed.length] = arr[i];
// }
// console.log(reversed);

// max of array
// let arr=[23,43,5,45,6]
// let max=arr[0]
// for (let i in arr){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);

// min value
// let arr=[453,53,2,3,54,6,6,5,453,4]
// let min=arr[0]
// for (let i in arr){
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }
// console.log(min);
// add a value in arr
// let arr=[1,2,3,4,5,6]

// Palindrome
// let num = 515;
// let temp = num;
// let rev = 0;

// while (num !== 0) {
//   let lastdigit = num % 10;
//   rev = rev * 10 + lastdigit;
//   num = Math.floor(num / 10);
// }

// if (rev == temp) {
//   console.log("palindrome");
// } else {
//   console.log("Not palindrome");
// }
// perfect square
// let num=4
// let sqrt=Math.sqrt(num);
// if(sqrt===Math.floor(sqrt)){
//     console.log('Perfect square');
// }
// else{
//     console.log(' Not Perfect square');
// }
