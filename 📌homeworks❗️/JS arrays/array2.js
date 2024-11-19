//!1.Bir dizideki elemanların sırasını tersine çeviren bir algoritma yazın, ancak dizi elemanlarını doğrudan değiştirmeden yeni bir dizi oluşturun.
{
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function reversi(numbers) {
    return numbers.slice().reverse();
    //& slice ile yeni bir dizi oluştur ve  reverse ile tersine çevir.(orjinal diziyi bozmaz.)
  }
  console.log(reversi(numbers));
  console.log(numbers);
}
//!2.Bir dizideki tüm sayıları çift mi yoksa tek mi olduğuna göre iki ayrı alt diziye ayıran bir fonksiyon yazın.
{
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function evenOdd(numbers) {
    const even = numbers.filter((x) => x % 2 === 0);
    const odd = numbers.filter((x) => x % 2);
    console.log("Even Array:", even);
    console.log("Odd Array:", odd);
  }
  evenOdd(numbers);
}

//!3.Bir dizide her bir elemandan, kendisinden sonra gelen sayıların toplamını hesaplayıp yeni bir dizi oluşturan bir algoritma yazın.
{
  //1.yol
  const numbers = [1, 2, 3, 4, 5];
  const sumNumberFollowing = (arr) => {
    let sum = 0;
    let sumArray = [];
    arr.map((item, index, arrays) => {
      arrays[index + 1] !== undefined
        ? (sum = arrays[index] + arrays[index + 1])
        : null;
      sumArray.push(sum);
    });
    return sumArray;
  };
  console.log(sumNumberFollowing(numbers));
}
//2.yol
{
  const numbers = [1, 2, 3, 4, 5];
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < numbers.length; j++) {
      sum += numbers[j];
    }
    result.push(sum);
  }
  console.log(result);
}
//!4.Bir dizide, en sık tekrar eden elemanı ve tekrar sayısını bulan bir algoritma yazın.
{
    //GPT
    function findMostFrequent(arr) {
        let mostFrequent = null;
        let maxCount = 0;
      
        arr.forEach((num) => {
          const count = arr.filter((x) => x === num).length; // Aynı elemanları say
          if (count > maxCount) {
            maxCount = count; // Maksimum sayıyı güncelle
            mostFrequent = num; // En sık elemanı güncelle
          }
        });
      
        return { mostFrequent, maxCount };
      }
      
      const dizi = [3, 1, 3, 2, 1, 3, 4, 1, 1];
      const result = findMostFrequent(dizi);
      
      console.log("En sık tekrar eden eleman:", result.mostFrequent); // 1
      console.log("Tekrar sayısı:", result.maxCount); // 4
      
}
{
    //GPT
    function findMostFrequent(arr) {
        arr.sort(); // Diziyi sıralıyoruz
        let maxCount = 1;
        let currentCount = 1;
        let mostFrequent = arr[0];
      
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] === arr[i - 1]) {
            currentCount++; // Aynı eleman, sayıyı artır
          } else {
            currentCount = 1; // Farklı eleman, sıfırla
          }
      
          if (currentCount > maxCount) {
            maxCount = currentCount; // Yeni maksimumu bul
            mostFrequent = arr[i];
          }
        }
      
        return { mostFrequent, maxCount };
      }
      
      const dizi = [3, 1, 3, 2, 1, 3, 4, 1, 1];
      const result = findMostFrequent(dizi);
      
      console.log("En sık tekrar eden eleman:", result.mostFrequent); // 1
      console.log("Tekrar sayısı:", result.maxCount); // 4
      
}

//!5.Bir dizideki tüm elemanların modunu (en çok tekrar eden eleman) hesaplayan bir algoritma yazın.

