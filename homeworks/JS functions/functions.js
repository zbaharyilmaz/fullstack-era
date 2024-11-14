//!Js function assignment Isınma soruları

//! Sayının Tek mi Çift mi Olduğunu Bulma: Kullanıcıdan alınan sayının tek mi çift mi olduğunu kontrol eden bir fonksiyon yazın.
//& FUNCTION DECLARATION & IF
{
    let number= 20;//TODO+prompt("Enter a number");
    function evenodd(){
        if(number%2===0){
            return "It is an even number."
        }else{
            return "It is an odd number."
        }
        
    }
    console.log(evenodd())
}
        
//&ARROW FUNCTION & TERNARY
{
    let number=20;//TODO+prompt("Enter a number");
    const evenodd=()=>{
        return number%2===0? "even":"odd";
    }
    console.log(evenodd());
}
//! Sayı 5'in Katı mı? Kullanıcının girdiği bir sayının 5'in katı olup olmadığını kontrol eden bir fonksiyon yazın. 
//&(ARROW FUNCTION & IF)

{let number= 20;//TODO+prompt("Enter a number.")
const fiveguys=(number)=>{
    if(number%5===0){
        return "It is a multiple of 5."
    }else{
        return "It is not divided by 5. Not a multiple of five."
    }
}
fiveguys();
console.log(fiveguys(number));
}
//! Pozitif mi Negatif mi?Kullanıcının girdiği sayının pozitif, negatif veya sıfır olup olmadığını belirleyen bir fonksiyon yazın.
//& ARROW & NESTED TERNARY
{let number=20;//TODO+prompt("Enter a number.")
const positive_negative=()=>{
    return number===0? "nötr": number>0? "positive": "negative";
}
console.log(positive_negative());
//positive_negative(20) ifadesinde fonksiyona argüment veriyorsunuz, fakat fonksiyonun içinde number global bir değişken olarak kullanıldığı için onu alması gerekmiyor. Parametreyi çıkartıp sadece positive_negative() şeklinde çağırmalısınız.En başta numberı tanımlayalım.
}

//! Sayıyı Mutlak Değere Çevirme: Kullanıcının girdiği negatif bir sayıyı pozitif hale getiren bir fonksiyon yazın.
{let number=20; //TODO+prompt("Enter a number.")
function absoluteValue(){
    return number>=0 ? `Result is ${number}`:`Result is ${-number}`
}

console.log(absoluteValue());
}
//!Bir Sayının Karesini Bulma: Kullanıcının girdiği sayının karesini hesaplayan bir fonksiyon yazın.
{let number=-2; //TODO+prompt("Enter a number.")
    function squared(){
        return result=number*number;
    }
console.log(squared());
}
//!Girilen Sayının Kaç Basamaklı Olduğunu Bulma: Kullanıcıdan alınan sayının kaç basamaklı olduğunu bulan bir fonksiyon yazın.
{
let number=20;//prompt("Enter a number.") 
//TODO daha doğru bir yaklaşım, sayıyı alıp her bir basamağa erişmek için number.toString() şeklinde bir dönüşüm yapmanız olacaktır. //?İşaretli cevap gelirse, farklı bir fonk gerekir.

let i=0;
let digits="";
 function countDigits(){
    while (i < number.length) {
        i++; 
    }   
    return i;
}
console.log(countDigits());
}
//! Girilen İki Sayının Toplamını Bulma: Kullanıcıdan iki sayı alarak bu sayıların toplamını hesaplayan bir fonksiyon yazın.
//& ARROW FUNCTON
{
let num1=5;//+prompt("Enter a number.");
let num2=20;//+prompt("Enter a number.");
const sumfunct=()=>{
    let result=Number(num1)+Number(num2);
    return result;
}
console.log(`The sum of these numbers is ${sumfunct()}`);
}
//^ Not: result değişkeni yalnızca fonksiyon içinde geçerlidir, dışarıda kullanılamaz. Template literal içinde ${sumfunct()} kullanarak, fonksiyonun döndürdüğü sonucu ekrana yazdırıyoruz.

//! 10 ve 20 Arasında mı?Kullanıcının girdiği bir sayının 10 ile 20 arasında olup olmadığını kontrol eden bir fonksiyon yazın.
//& FUNCTION DECLARATION && TERNARY
{
let num=20;//+prompt("Enter a number.");
function checkRange(){
    return range=num>=10 && num<=20 ? "Okay✅The number is between 10 and 20.":"Opps❗️Check your number. Not in the range of 10 and 20."
}
console.log(checkRange());
}
//!Dikdörtgen Alanı Hesaplama: Kullanıcıdan dikdörtgenin uzun ve kısa kenarlarını alarak alanını hesaplayan bir fonksiyon yazın.
{
let width=+prompt("Enter the width of your rectangle garden in meters🏡");
let length=+prompt("Enter the length of your rectange garden in meters🏡");
function area(){
    let calculation= width*length;
    return calculation;
}
console.log(`Your garden needs ${area()} square meters grass.`);
}

//!Sayı Pozitifse 1 Ekle, Negatifse 1 Çıkar: Kullanıcının girdiği sayının pozitifse 1 ekleyen, negatifse 1 çıkaran bir fonksiyon yazın.
{
let yourNumber = -9;//TODO+prompt("Enter a number");
function changeNumber() {
    return yourNumber > 0 ? yourNumber + 1 : yourNumber - 1;
}

console.log(changeNumber());
}