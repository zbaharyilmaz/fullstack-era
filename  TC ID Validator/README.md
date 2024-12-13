TR Identity Number Validation

Purpose of the this coding challenge is to write a code that given TR Identity Number, returns valid or invalid.

Valid TR Identity Number must follow these rules:
TR Identity Number actually consists of 9 digits, the last 2 digits have been added for control/verification purposes.
The ID number cannot start with 0.
The 10th digit is obtained by using the first 9 digits, and the 11th digit is obtained by using the first 10 digits.
Add the digits in the 1st, 3rd, 5th, 7th and 9th digits, multiply by 7 and subtract the sum of the digits in the 2nd, 4th, 6th and 8th digits.
The units digit of the result obtained (mod 10) gives the 10th digit of the ID number.
When we add the first 9 digits of the ID number and the 10th digit obtained by the above method, the ones digit (mod 10) gives the 11th digit.

Problem Statement
Write a function that takes number variable and return true or false and write document invalid or valid.

Outcome
("./id.gif)


