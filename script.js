//-------------BMI------------😍CODING CHALLENGE


// BMI = mass / (height * height)

// let MarkBMI;
// let JohnBMI;

// let mass = 0;
// let height = 0;

// BMI = mass / (height * height);

// let MarkBMI = 0;
// let JohnBMI = 0;

// function calcBMI (mass, height) {
//     return (mass / (height * height));
// }

// MarkBMI.calcBMI(70, 170);
// JohnBMI.calcBMI(80, 180);

// massMark = 70;
// massJohn = 80;

// heightMark = 170;
// heigthJohn = 180;

// // BMI = mass / (height * height);

// MarkBMI = massMark / heightMark * heightMark;
// JohnBMI = massJohn / heigthJohn * heigthJohn;

// if (MarkBMI > JohnBMI) {
//     console.log("Mark's BMI is bigger than John's BMI");
// } else {
//     console.log("John's BMI is more bigger");
// }

// let JohnTeam;
// let MikeTeam;
// let MaryTeam;

// let j1 = 89;
// let j2 = 120;
// let j3 = 103;

// let m1 = 116;
// let m2 = 94;
// let m3 = 123;

// let mary1 = 97;
// let mary2 = 134;
// let mary3 = 205;

// let JohnAverage = (89 + 120 + 103) / 3;
// let MikeAverage = (116 + 94 + 123) / 3;
// let MaryAverage = (97 + 134 + 105) / 3;

// if (JohnAverage > MikeAverage && JohnAverage > MaryAverage) {
//     console.log ("John wins!  The score is " + JohnAverage)
// } else if (MikeAverage > JohnAverage && MikeAverage >  MaryAverage){
//     console.log("Mike wins!  The score is " + MikeAverage)
// } else {
//     console.log("Girlll powerrr! The score is " + MaryAverage)
// }

// function calcScore(a, b, c) {
//     let average = (a+b+c) / 3;
//     return average;
// }
// calcScore(j1, j2, j3);
// calcScore(m1, m2, m3);

//😍 control command space 






// --------------TIPS AND BILLS --------ODING CHALLENGE---😍😍😍😍



// // 20% <= 50$
// // 15% == 50-200$
// // 10% >= 200$;

// function calcTips(bill) {
//     let percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//        percentage = .1;
//     }
//     return bill * percentage;
// }

// let bills = [100, 40, 220];
// let tips = [
//     calcTips(bills[0]),
//     calcTips(bills[1]),
//     calcTips(bills[2])
// ];

// let finalAmount = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]
// ];
// console.log("Here we have these bills: " + bills);
// console.log("All amount of tips are: " + tips);
// console.log("The final amount is: " + finalAmount);





// -------------------BMI-----------------ODING CHALLENGE-------------😍😍😍



// BMI = mass / (height * height);

// let john = {
//     firstName: 'John',
//     weight: 70,
//     heigth: 1.70,
//     calcBMI: function() {
//       this.bmi = this.weight / (this.height * this.height);
//       return this.bmi;
//     }
// };

// john.calcBMI();
// console.log(john);

// let john = {
//     fullName: 'John Smith',
//     weight: 72,
//     height: 1.7,
//     calcBMI: function() {
//         this.bmi = this.weight / (this.height * this.height);
//         return this.bmi;
//     }
// };

// console.log(john);

// let mark = {
//     fullName: 'Mark Meller',
//     weight: 64,
//     height: 1.65,
//     calcBMI: function() {
//         this.bmi = this.weight / (this.height * this.height);
//         return this.bmi;
//     }
// };

// console.log(mark);


// if(john.calcBMI() > mark.calcBMI()) {
//     console.log("John's BMI is greater");
// } else if ( john.calcBMI() < mark.calcBMI()) {
//     console.log("Mark's BMI is greater");

// } else {
//     console.log('They have the same BMI. What a pity!');

// }


//------------ TIPS AND BILLS ------------СODING CHALLENGE 5----------😍😍😍

// 20% <= 50$
// 15% == 50-200$
// 10% >= 200$;

// bill - счёт
// tips - чаевые

// let johnRest = {
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         for (let percentage = 0; percentage <= bills.length; percentage++) {
//             if (bill <= 50) {
//                 percentage * .2;
//             } else if (bill >= 50 && bill <= 200) {
//                 percentage * 1.5; 
//             } else {
//                 percentage * 1;
//             }
//             return bill * percentage;
//         }
//     },

//     // allTipsArr: [
//     //     calcTips(this.billsArr[0]),
//     //     calcTips(this.billsArr[1]),
//     //     calcTips(this.billsArr[2]),
//     //     calcTips(this.billsArr[3]),
//     // ],
    
//     // finalPaidArr: [
//     //     this.billsArr[0] + this.allTipsArr[0],
//     //     this.billsArr[1] + this.allTipsArr[1],
//     //     this.billsArr[2] + this.allTipsArr[2],
//     //     this.billsArr[3] + this.allTipsArr[3],
//     // ]

//     tips: [
//         calcTips(bills[0]),
//         calcTips(bills[1]),
//         calcTips(bills[2]),
//         calcTips(bills[3])
//     ],

//     finalAmount: [
//         bills[0] + tips[0],
//         bills[1] + tips[1],
//         bills[2] + tips[2]
//     ]
// } 
// johnRest.calcTips();
// console.log(johnRest);

// console.log("Here we have these bills: " + bills);
// console.log("All amount of tips are: " + tips);
// console.log("The final amount is: " + finalAmount);
// console.log(allTipsArr, finalPaidArr);

// second variant of the coding challenge 

// let john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         let tips = [];
//         let finalAmount = [];

//         for(let i = 0; i < this.bills.length; i++) {
//             // let percentage;
//             this.bills = bill;

//             if (bill < 50) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = 1.5;
//             } else {
//                 percentage = 1;
//             }

            
//         }
//     }
// }

