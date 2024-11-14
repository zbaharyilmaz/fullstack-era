//? Q1.Bir dairenin yarıçapını kullanıcıdan alarak dairenin alanını ve çevresini hesaplayan bir program yazın.

let pi = Math.PI;
let num1 = prompt("Enter a number:");
let circumference = 2 * Math.PI * num1;
let area = pi * num1 ** 2;
console.log(`Circumference: ${circumference}, Area: ${area}`);

//? Q2.Kullanıcıdan bir ondalıklı sayı alın. Bu sayıyı önce yukarı, sonra aşağı yuvarlayarak sonucu gösterin.

let num2 = prompt("Enter a decimal number:");

console.log(`The nearest integer value above: ${Math.ceil(num2)}, The nearest integer value below:${Math.floor(num2)}`);

//? Q3. 1 ile 100 arasında rastgele bir sayı üreten bir program yazın ve bu sayıyı ekrana yazdırın.

console.log("Random Number between 0-100:", Math.random() * 100);

//? Q4. Kullanıcıdan 5 sayı alarak bu sayılar arasındaki en büyük ve en küçük sayıyı bulan bir program yazın.

//let numbers = [];
//for (let i = 0; i < 5; i++) {
//let number = prompt("Enter a number:")
//numbers.push(number)}
//console.log("Numbers:", numbers)

// let arr = prompt("Enter your numbers").split(",")
// let max1 = Math.max(arr);
// let min1=Math.min(arr);
// console.log(max1,min1);

//? Q5.Kullanıcıdan bir metin olarak tam sayı alın ve bunu bir tam sayıya çevirip ekrana yazdırın.
let num3 = +prompt("Enter a number:");
console.log(typeof num3);

//? Q6. Kullanıcıdan iki sayı alarak birinci sayının ikinci sayıya üssünü alan bir program yazın.

let number1 = prompt("Enter a number for base:");
let number2 = prompt("Enter a number for exponent:");
console.log(Math.pow(number1, number2));

//? Q7. Bir sayının karekökünü bulan bir program yazın. Sayıyı kullanıcıdan alın.
let number3 = prompt("Enter a number:");
console.log(Math.sqrt(number3));

//? Q8.Kullanıcıdan iki cümle alarak bu cümleleri birleştiren ve ekrana yazdıran bir program yazın.

let favsentence1 = prompt("My favorite sentence:");
let favsentence2 = prompt("My favorite sentence:");
console.log(favsentence1 + " " + favsentence2);
//let text1=favsentence1.concat(favsentence2)
//console.log(text1)

//? Q9.Kullanıcıdan bir kelime alarak bu kelimenin uzunluğunu bulan bir program yazın.

let text2 = prompt("Enter a word:");
console.log("Length of the word:", text2.length);

//? Q10.Kullanıcıdan bir kelime alın ve kelimenin 3. karakterini 'Z' ile değiştirin, ardından sonucu ekrana yazdırın.

let text3 = prompt("Enter a word:");
console.log(text3.substring(0, 2) + "Z" + text3.substring(3));

//? Q11.Kullanıcıdan iki sayı alın ve bu sayıların eşit olup olmadığını kontrol eden bir program yazın.

let num4 = prompt("Enter a number:");
let num5 = prompt("Enter a number:");
let result = num4 == num5;
console.log(result);

//? Q12.Kullanıcıdan bir giriş alarak bu değerin bir sayı mı yoksa string mi olduğunu kontrol eden bir program yazın.

let text8 = prompt("Enter a word or number:");
console.log("Is this a string?: " + isNaN(text8));
//console.log("Is this an integer?: " + isInteger(text8))

//? Q13.Kullanıcının doğduğu yılı alarak kaç yaşında olduğunu hesaplayan bir program yazın.

let birthday = +prompt("Enter your birth year:");
let year = new Date().getFullYear();
console.log("Your age is:", year - birthday);

//? Q14.Bir değişkeni önce null , sonra undefined olarak tanımlayın ve her iki durumda da değişkenin türünü ekrana yazdırın.

let variable;
console.log(typeof variable);
variable = null;
console.log(typeof variable);

//? Q15.Kullanıcıdan bir sayı alarak bu sayının karesini ve küpünü hesaplayan bir program yazın.

let num_ = prompt("Enter a number:");
console.log("Square of number:" + num_ ** 2, "Cube of number:" + num_ ** 3);

//let num11=prompt("Enter a number:")
//console.log( Math.pow(num11,2)
//console.log( Math.pow(num11,3)

//? Q16.Kullanıcıdan bir kelime alın ve bu kelimenin her karakterini ayrı satırlarda ekrana yazdıran bir program yazın.

let word = prompt("Enter a word:");
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

//? Q17.Bugünün tarihini alarak "Gün/Ay/Yıl Saat:Dakika" formatında ekrana yazdıran bir program yazın.

let today = new Date();

//console.log(`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`)

console.log(
  today.getDate() +
    "/" +
    today.getMonth() +
    "/" +
    today.getFullYear() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes()
);

//? Q18.Kullanıcıdan bir ondalıklı sayı alarak bu sayının tam kısmını ekrana yazdırın.

let num_1 = prompt("Enter a number:");
console.log(Math.trunc(num_1));

//?Q19. Kullanıcıdan üç farklı sayı alarak bu sayıların ortalamasını hesaplayıp ekrana yazdıran bir program yazın.

let nu1 = +prompt("Enter a number:");
let nu2 = +prompt("Enter a number:");
let nu3 = +prompt("Enter a number:");
console.log((nu1 + nu2 + nu3) / 3);

//? Q20.Bir dizi tanımlayın ve bu dizinin ilk ve son elemanını ekrana yazdırın. Diziyi kullanıcıdan da alabilirsiniz.

let array = prompt("Enter your numbers:").split(",");
console.log(array[0], array[array.length - 1]);
