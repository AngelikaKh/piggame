// century From Year 1️⃣0️⃣0️⃣📆

// let centuryFromYear = year => Math.ceil(year / 100);
// centuryFromYear(1905);




// // adjacentElementsProduct 1️⃣3️⃣6️⃣9️⃣
// function adjacentElementsProduct(arr) {
//     return arr.slice(0, -1)
//               .reduce((max, n, i) => Math.max(max, n * arr[i + 1]), -Infinity)
//   }
  
  
//   function adjacentElementsProduct(arr) {
//     return Math.max(...arr.slice(0, -1).map((n, i) => n * arr[i + 1]))
//   }




// PALINDROME   P A L I N D R O M E 🅰️🅱️🅰️

// function checkPalindrome(str) {
//     return str == str.split('').reverse().join('');
// }

// //using split().reverse().join() 6/10

// function checkPalindrome(inputString) {
//     let cleanStr = '';
//     let reverseStr = cleanStr.toLowerCase().split('').reverse().join('');
//     return reverseStr === cleanStr;    
// }
// checkPalindrome('aabaa');



// //using every() 6/10;

// let checkPalindrome = (str) => {
//     let emptyStr = '';
//     return emptyStr.toLowerCase().split('').every((c, i) => c === emptyStr[emptyStr.length - 1 - i]);
// }
// checkPalindrome('aba');



// //using a for loop 6/10

// let checkPalindrome = (str) => {
//     let cleanStr = '';
//     for (let i = 0; i > cleanStr.length; i++) {
//         if(cleanStr[i] !== cleanStr[cleanStr.length - 1 -i]) {
//             return false;
//         }
//     }
//     return true;
//  }
//  checkPalindrome("aba");



// // shape area --- S H A P E     A R E A  💠

// function shapeArea(n) {
//     init = 1;
//     return init + (n * ((n - 1) * 2));
//   }
//   console.log(shapeArea(4));

// // solution 2 !!!
//   let shapeArea = n => n*n + (n-1)*(n-1);



// // makeArrayConsecutive2 🔢🔤
// function makeArrayConsecutive2(statues) {
//     return Math.max(...statues)-Math.min(...statues)+1-statues.length
//   }


//// almostIncreasingSequence 🙈
// function almostIncreasingSequence(sequence) {
//     let count = 0;
//       for (let i = 0; i < sequence.length; i++) {
//         if (sequence[i] <= sequence[i - 1]) {
//           count++;
//           if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
//             return false;
//           }
//         }
//       }
//       return count <= 1;
//   }
  

//// matrixElementsSum 🌐
// function matrixElementsSum(matrix) {

//     let counter=0, ghost=false

//     for(let x=0, xl=matrix.length;x<xl;x++)
//     {
//         for(let y=0, yl=matrix[x].length;y<yl;y++)
//         {
//             if(matrix[x][y] != 0)
//             {
//                 if(matrix[x-1])
//                 {
//                     ghost = false

//                     for(let z = x; z >= 0; z--)
//                     {
//                         if(matrix[z][y] == 0)
//                         {
//                             ghost = true
//                             break
//                         }
//                     }
    
//                     if(!ghost)
//                     {
//                         counter += matrix[x][y]
//                     }   
//                 }
//                 else
//                 {
//                     counter += matrix[x][y]
//                 }
//             }
//         }
//     }

//     return counter
// }



// solution 2 !!!

// function matrixElementsSum(matrix) {
//     for(var r=0,j=0;j<matrix[0].length;j++){
//         for(var i=0;i<matrix.length;i++){
//           if(matrix[i][j]===0) break
//           else r+=matrix[i][j]
//         }
//     }
//     return r
//   }
  

//// allLongestStrings 📝
// function allLongestStrings(inputArray) {
//     let maxSize = Math.max(...inputArray.map(x => x.length));
//     return inputArray.filter(x => x.length === maxSize);
// }


/////commonCharacterCount 👯‍♀️👯‍♂️

// var str1 = 'abcdefghxyzttw';
// var str2 = 'hgfedcbaabcwwt';

// function commonCharacterCount(s1, s2) {
//   s1 = s1.split('');
//   s2 = s2.split('');
//   let result = 0;
  
//   for (let i = 0; i < s1.length; i++) {
//     for (let k = 0; k < s2.length; k++) {
//       console.log(i + ' ' + k); 
//       if (s2[k] == s1[i] && s1.length != 0 && s2.length != 0) 
//       {
//         s2.splice(k, 1);
//         s1.splice(i, 1);
//         i = 0;
//         k = -1;
//         result++;
//       }
//     }
//   }
  
//   return result;
// }

// console.log(commonCharacterCount(str1, str2));

//solution 2 !!

// function commonCharacterCount(s1, s2) {
//     for (var i = 0; i < s1.length; i++) {
//         s2 = s2.replace(s1[i], "!");
//     }
//     return s2.replace(/[^!]/g, "").length;
// }

