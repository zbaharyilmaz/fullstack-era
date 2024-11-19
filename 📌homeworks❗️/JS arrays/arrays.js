//!Array Iterations

//!Q1.Bir dizideki pozitif sayıların karesini alıp, sonucu 50'den büyük olanları döndüren bir fonksiyon yazın.
{
  let numbers = [1, -1, 7, 10, 21];
  let result = [];

  function numberAction() {
    for (let i in numbers) {
      if (numbers[i] > 0) {
        let square = numbers[i] * numbers[i];
        if (square > 50) {
          result.push(square);
        }
      }
    }
    return result;
  }
  console.log(numberAction(numbers));
}

//!Q2.Bir dizideki tüm sayıların çarpımını hesaplayan bir fonksiyon yazın.
{
  let numbers = [1, -1, 7, 10];
  let result = 1;
  function multiply() {
    for (let i in numbers) {
      result *= numbers[i];
    }
    return result;
  }
  console.log(multiply(numbers));
}

//!Q3.Bir dizideki ilk negatif sayının indeksini döndüren bir fonksiyon yazın.
{
  let numbers = [1, -5, -2, 10, -21];
  function firstNegativeNum() {
    for (let i in numbers) {
      if (numbers[i] < 0) {
        return numbers[i];
      }
    }
    return "No negative number found";
  }
  console.log(firstNegativeNum(numbers));
}

//!Q4.Bir dizideki kelimelerin hepsini büyük harfe çeviren bir fonksiyon yazın.
{
  let array = ["a", "b", "Z", "t", "Bahar"]; //içinde sayı varsa tıkanıyoruz.
  let result = [];
  function upperCase() {
    for (i = 0; i < array.length; i++) {
      result.push(array[i].toUpperCase());
    }
    return result;
  }
  console.log(upperCase(array));
}
//!Q5.Bir dizide ilk 50'den büyük sayıyı bulan bir fonksiyon yazın.
{
  let numbers = [10, -5, 69, 100, -21];
  function firstGreat50() {
    for (let x of numbers) {
      if (x > 50) {
        return x;
      }
    }
    return "No number greater than 50 found";
  }
  console.log(firstGreat50(numbers));
}
//!Q6.Bir dizideki sayıların karesini alıp, sonucu 100'den küçük olanları döndüren bir fonksiyon yazın.
{
  let numbers = [1, -20, 7, 10, 12];
  let result = [];
  function numberSquare() {
    for (let x of numbers) {
      let square = x * x;
      if (square < 100) {
        result.push(x); //karelerinin çıktısı için push(square)
      }
    }
    return result;
  }
  console.log(numberSquare(numbers));
}
//!Q7. Bir dizide tüm elemanların çift sayı olup olmadığını kontrol eden bir fonksiyon yazın.
{
  let numbers = [1, -20, 7, 10, 12];
  let result = [];
  function even() {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        result.push(numbers[i]);
      }
    }
    return result;
  }
  console.log(even(numbers));
}
//!Q8.Bir diziyi tersten oluşturmak için bir fonksiyon yazın.
{
  let array = [1, -20, 7, 10, 12];
  const arrayReverse = () => {
    return array.reverse();
  };
  console.log(arrayReverse(array));
}
//!Q9.Bir dizide en az bir elemanın 10'un katı olup olmadığını kontrol eden bir fonksiyon yazın.
{
  let numbers = [1, -20, 700, 10, 12];
  let result;
  function multipliesOf10() {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 10 === 0) {
        return true;
      }
    }
    return false;
  }
  console.log(multipliesOf10(numbers));
}
//!Q10.Bir dizideki tüm kelimeleri ters çeviren bir fonksiyon yazın.
{
  let array = ["Aslı", "Bahar"];
  let result = [];
  function reverseOf() {
    for (let i = 0; i < array.length; i++) {
      let word = array[i].split("").reverse().join("");
      result.push(word);
    }
    return result;
  }
  console.log(reverseOf(array));
}
//!Q11.Bir diziden sadece tek sayıları döndüren bir fonksiyon yazın.
{
  let numbers = [1, -20, 7, 10, 12];
  let result = [];
  function odd() {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        result.push(numbers[i]);
      }
    }
    return result;
  }
  console.log(odd(numbers));
}
//!Q12.Bir dizideki her elemana indeksini ekleyip yeni bir dizi döndüren bir fonksiyon yazın.
{
  let array = [1, -20, 7, 10, 12];
  let result = [];
  function newArray() {
    for (let i = 0; i < array.length; i++) {
      let element = `Element:${array[i]},index:${i}`;
      result.push(element);
    }
    return result;
  }
  console.log(newArray(array));
}
//!Q13.Bir dizideki en büyük sayıyı bulan bir fonksiyon yazın.
{
  let numbers = [1, -20, 7, 100, 12];
  function biggestNumber() {
    let bigNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > bigNum) {
        bigNum = numbers[i];
      }
    }
    return bigNum;
  }
  console.log(biggestNumber(numbers));
}
{
  //2.yol
  const numbers = [5, 12, 7, 3, 8];
  const max = numbers.reduce((acc, item) => {
    return acc > item ? acc : item;
  }, numbers[0]);
  console.log(max);
}
//!Q14.Bir dizideki her elemanı 3 artıran bir fonksiyon yazın (diziyi yerinde değiştirerek).
{
  let numbers = [1, -20, 7, 100, 12];
  function adding3() {
    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = numbers[i] + 3;
    }
    return numbers;
  }
  console.log(adding3(numbers));
}
//!Q15.Bir dizide ilk defa 10 olan elemanın indeksini döndüren bir fonksiyon yazın.
//&chatgpt bakalım.
{
  let array = [1, -20, 7, 10, 12];
  let result;
  const check = () => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 10) {
        return (result = `Bu elemanın indexi ${i} tür.`);
      }
    }
  };
  console.log(check(array));
}

//!Q16.Bir dizide tüm sayıların pozitif olup olmadığını kontrol eden bir fonksiyon yazın.
{
  let numbers = [1, 1, 7, 10, 21];
  const check=numbers.every((x)=> x>0)
  console.log(check);
}
{
  let numbers = [1, 1, -7, 10, 21];
  function numberPositive() {
    for (i of numbers) {
      if (i <= 0) {
        return false;
      }
    }
    return true;
  }
  console.log(numberPositive(numbers));
}

//!Q17.Bir dizideki 4 karakterden uzun kelimeleri döndüren bir fonksiyon yazın.
{
  let array = ["Aslı", "Bahar", "Leman", "Ada"];
  function lengthOf() {
    const result=array.filter((x)=>(x.length>4))
    return result;
  }
  console.log(lengthOf(array));
}
//!Q18.
//1.yol
{
  let nestedArrays = [[1, 4, 2, 3], [4, 5], [6, 5, 7, 8], [9]];

  let flatArray = (nestedArrays) => {
    return nestedArrays.join(","); //veya flat(2) 3 boyutlu old için.flat(infinity)
  };
  console.log(flatArray(nestedArrays));

  const denemeArray = ["1", 2, 5, ["test", 4, "Türkiye", "loremipsum"]];
}
//2.yol
{
  const denemeArray = ["1", 2, 5, ["test", 4, "Türkiye", "loremipsum"]]
  function flattenArray(arr) {
    return arr.reduce((acc, current) => {
      // Eğer current bir dizi ise, özyinelemeli olarak flattenArray çağır
      if (Array.isArray(current)) {
        return acc.concat(flattenArray(current));
      } else {
        return acc.concat(current);
      }
    }, []);
  }

  const result = flattenArray(denemeArray);

  console.log(result);
}

//!Q19.Bir dizideki kelimeleri harflere ayırıp düz bir liste haline getiren bir fonksiyon yazın.
//&bakınız:concat vs push
{
  let array = ["Aslı", "Bahar"];
  let result = [];
  function letter() {
    for (let i = 0; i < array.length; i++) {
      result = result.concat(array[i].split(""));
    }
    return result;
  }
  console.log(letter(array));
}

//2.yol
{
  const words = ["bir", "gün", "herkes", "fenerbahçeli", "olacak"];
  const letter = words.map((word) => word.split("")).flat();
  console.log(letter);
}

//3.yol
{
  let words = [
    "apple",
    "banana",
    "grape",
    "orange",
    "strawberry",
    "cherry",
    "kiwi",
    "watermelon",
    "blueberry",
    "mango",
  ];
  let flatArray = (words) => {
    let result = [];
    words.forEach((word) => {
      result.push(...word); // ... yı öğrendim spread operatörü olarak da geçiyor split ile de açabilirdik
    });
    return result;
  };
  console.log(flatArray(words));
}
//!Q20.Bir dizide çift sayıların toplamını hesaplayan bir fonksiyon yazın.
{
  let numbers = [1, 20, 7, 10, 12];
  let sum = 0;
  function evenSum() {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
  console.log(evenSum(numbers));
}
{
  let numbers = [1, 20, 7, 10, 12];
  let sum = 0;
  function evenSum() {
    const even= numbers.filter((x)=>(x%2===0)).map((x)=>(sum+=x));
    return sum;
  }
  console.log(evenSum(numbers));
}
{
  //2.yol
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function oddEven() {
    const odd = numbers.filter((number) => number % 2 !== 0);
    const even = numbers.filter((number) => number % 2 === 0);

    const sumOdd = odd.reduce((acc, num) => acc + num, 0);
    const sumEven = even.reduce((acc, num) => acc + num, 0);

    console.log("Odd Sum:", sumOdd);
    console.log("Even Sum:", sumEven);
  }
  oddEven();
}

{
  //3.yol
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function oddEven() {
   return numbers.filter((n) => n % 2).reduce((a, n) => a + n, 0);
  }

  console.log(oddEven(numbers));
}
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(
    "Odd Sum:",
    numbers.filter((n) => n % 2).reduce((a, n) => a + n, 0),
    "| Even Sum:",
    numbers.filter((n) => n % 2 === 0).reduce((a, n) => a + n, 0)
  );
}

