//!Kullanıcının girdiği bir sayının asal olup olmadığını kontrol eden bir program yazın.
//&1.yol
{
  let num = 51;
  function prime(num) {
    if (num <= 1) {
      return "Not a prime number";
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return "Not a prime number";
      }
    }
    return "It is prime number";
  }
  prime(num);
  console.log(prime(51));
}

//& 2.yol
{
  let num = 20; //prompt("Enter a number:");
  function primeNumber(num) {
    if (num < 2) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  let message = primeNumber(num)
    ? "It is a prime number"
    : "Not a prime number";
  console.log(message);
}

//! Bir dizideki en büyük ve en küçük sayıları bulan bir fonksiyon yazın.
//& max sayı için
{
  function maxvalue(num1, num2, num3, num4) {
    let max = num1;
    if (num2 > max) {
      max = num2;
    }
    if (num3 > max) {
      max = num3;
    }
    if (num4 > max) {
      max = num4;
    }
    return max;
  }
  maxvalue(10, 23, 11, 3);
  console.log(maxvalue(10, 23, 11, 3));
}
//& min sayı için
{
  function minvalue(num1, num2, num3, num4) {
    let min = num1;
    if (num2 < min) min = num2;
    if (num3 < min) min = num3;
    if (num4 < min) min = num4;
    return min;
  }
  minvalue(10, 23, 11, 3);
  console.log(minvalue(10, 23, 11, 3));
}

//!Kullanıcının girdiği bir kelimenin palindrom olup olmadığını kontrol eden bir fonksiyon yazın.
{let word=prompt("Enter a word");
function reverseWord(){
 return message=word===word.split("").reverse().join("")? "Palindrome":"Not a palindrome";
}
console.log(reverseWord());}

//!1 ile 50 arasında rastgele bir sayı tahmin etme oyunu yazın ve kullanıcı doğru tahmin edene kadar devam etsin.
{
  let random = Math.trunc(Math.random() * 50 + 1);
  //console.log(random) ile kontrol yaptım.
  let num;

  do {
    num = 20;//+prompt("Guess a number between 1 and 50:");

    if (isNaN(num)) {
      console.log("Please enter a valid number.");
      continue;
    }

    if (num > random) {
      console.log("Decrease your number.");
    } else if (num < random) {
      console.log("Increase your number.");
    }
  } while (num !== random);

  console.log("Congrats. Your estimation is true!");

  //^do...while döngüsünden çıkıldığında zaten num === random olduğu garantidir. Bu nedenle, bu kontrol olmadan doğrudan "Tebrikler! Doğru tahmin ettiniz." mesajı yazılabilir.
}

//! Kullanıcıdan alınan sayının faktöriyelini hesaplayan bir fonksiyon yazın.

{
  let num = +prompt("Enter a number:");
  function factorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  console.log(factorial(num));
}

//!1'den N'e kadar olan sayıların toplamını ve ortalamasını hesaplayan bir program yazın.
//&1.yol
{
let N = 3;
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum = sum + i; //^ veya sum+=i şeklinde.
}
console.log(sum);

//&2.yol(Recursive Function)
{
  const sum = (N) => {
    if (N < 1) {
      return "1 veya 1'den büyük sayılar giriniz.";
    } else if (N === 1) {
      return 1; //^Base Case
    } else {
      return sum(N - 1) + N; //^ Recursive call
    }
  };
  console.log(sum(3));
}
}
//!Bir dizideki tüm elemanların toplamını ve ortalamasını hesaplayan bir fonksiyon yazın (dizi yok, sadece sayılar).
//&1.yol
{
  let sum = 0;
  let avg;
  function nums(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    avg = sum / numbers.length;
  }
  nums(1, 2, 3, 4, 5);
  console.log(sum);
  console.log(avg);
}
//&2.yol (dizi toplamı için)
{
  function numbers(a, b, c, d) {
    let sum = 0;
    let array = [a, b, c, d]; //^ Fonksiyona gelen parametreleri bir dizi gibi kullanıyoruz

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  console.log(numbers(1, 0, 3, 4));
}

//!Kullanıcının girdiği bir metindeki sesli harflerin sayısını hesaplayan bir program yazın.
{
let exp = "Bahar";
let count = 0;
let i = 0;
while (i < exp.length) {
  if (
    exp[i] === "a" ||
    exp[i] === "A" ||
    exp[i] === "e" ||
    exp[i] === "E" ||
    exp[i] === "o" ||
    exp[i] === "O" ||
    exp[i] === "u" ||
    exp[i] === "U" ||
    exp[i] === "ı" ||
    exp[i] === "I" ||
    exp[i] === "ö" ||
    exp[i] === "Ö" ||
    exp[i] === "ü" ||
    exp[i] === "Ü" ||
    exp[i] === "i" ||
    exp[i] === "İ"
  ) {
    count += 1;
  }
  i++; //^i+=1
}
console.log(count);
}
//!Fibonacci dizisini belirli bir sayıya kadar yazdıran bir program yazın.
//&Fibonacci dizisi genellikle iki farklı şekilde tanımlanabilir. Bu nedenle kafa karışıklığı olabilir, çünkü bir versiyonunda Fibonacci dizisi 0 ile başlar, diğerinde ise 1 ile başlar. Ancak, her iki tanım da doğru kabul edilebilir ve sadece kullanılan konvansiyona bağlıdır. 0 dan başlayan diziye göre yapıldı.
{
  let num;
  function fibonacci(num) {
    if (num === 0) {
      return 0;
    }
    if (num === 1) {
      return 1;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }
  console.log(fibonacci(3));
}

//!Kullanıcının girdiği bir kelimenin içindeki sesli harfleri bulup, her birinin sayısını gösteren bir program yazın.
{
  let exp = "Baher";
  let count = 0;
  let i = 0;
  let letters = "";

  while (i < exp.length) {
    if (
      exp[i] === "a" ||
      exp[i] === "A" ||
      exp[i] === "e" ||
      exp[i] === "E" ||
      exp[i] === "o" ||
      exp[i] === "O" ||
      exp[i] === "u" ||
      exp[i] === "U" ||
      exp[i] === "ı" ||
      exp[i] === "I" ||
      exp[i] === "ö" ||
      exp[i] === "Ö" ||
      exp[i] === "ü" ||
      exp[i] === "Ü" ||
      exp[i] === "i" ||
      exp[i] === "İ"
    ) {
      count += 1;
      letters += exp[i] + ","; //TODO virgül hatası oldu.

      //veya letters ı dizi gibi yazarak; içine push lama yapmak.
    }
    i++; //i+=1
  }
  console.log(
    `${count} tane sesli harf kullanımı olmuştur.Kelimede ${letters}harfi/harfleri saptanmıştır.`
  );
  console.log(count);
}
