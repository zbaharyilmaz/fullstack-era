

//!JavaScript ve Asenkronluk

//JavaScript single-threaded bir dil olduğu için işlemleri sırayla çalıştırır.Ancak, asenkron yapılar sayesinde zaman alan işlemleri bloklamadan, diğer işlemlerin çalışmasına olanak tanır.setTimeout ve setInterval gibi zamanlayıcı fonksiyonlar bu asenkron yapının örnekleridir. Bunlar non-blocking çalışır, yani diğer kodların çalışmasını durdurmaz.
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//&setTimeOut

//setTimeout, verilen bir işlemi (callback fonksiyonu) belirli bir süre sonra çalıştırır. Bu süre milisaniye cinsindedir (örneğin, 3000 = 3 saniye).Ancak, setTimeout bloklayıcı (blocking) bir işlem değildir, yani diğer kodların çalışmasını durdurmaz.

//Asenkron Çalışma (Event Loop):JavaScript, tek bir ana iş parçacığı (single-threaded) üzerinde çalışır. Ancak, zamanlama gerektiren görevler (örneğin setTimeout) arka planda farklı bir işlem kuyruğuna (event queue) gönderilir.Belirtilen süre tamamlandığında, bu işlem, JavaScript'in ana iş kuyruğu (call stack) boşaldığında çalıştırılır. setTimeout, belirttiğiniz süre kadar bekler, ancak belirtilen süre sona erdiğinde işlem hemen çalıştırılmayabilir. Bunun nedeni, ana iş kuyruğu doluysa zamanlanmış görevlerin sırasını beklemesidir. Bu durum, asenkron programlamanın temel özelliğidir.

setTimeout(()=>{
    console.log("Merhaba İlk");

},3000)

console.log("Merhaba");


//&setInterval 

//!syntax: setInterval(callbackFunction, delay)
//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir

//setInterval, bir background task olarak çalışır. Yani, geri sayım yaparken JavaScript motoru diğer kodları çalıştırmaya devam eder.Örneğin, setInterval çalışırken, başka işlemler de engellenmeden çalışabilir. setInterval non-blocking diyebiliriz.(kod burada takılı kalmaz alttaki kodlarda çalışır)

let sayac=0;
const interval1=setInterval(()=>{
    console.log(++sayac);
    if(sayac==5) clearInterval(interval1);
},3000)

//++sayac 1 den başlattı. Değişkenin değeri önce artırılır, ardından bu yeni değer kullanılır.
//sayac++ 0 dan başlattı. Yani, işlem sırasında eski değer kullanılır ve artış daha sonra gerçekleşir.
//sayac bir sayı (number) türünde,5 de bir sayı (number) türünde.Dolayısıyla, == veya === kullanımı aynı sonucu verecektir, çünkü iki değer de aynı türdedir (number).Ancak === kullanımı daha güvenlidir, çünkü hem tür hem de değeri kontrol eder ve gereksiz tür dönüşümünü engeller.

//!Nerede kullanılır?
//Döviz kurlarını veya saat bilgilerini belirli aralıklarla güncellemek.Geri sayım (countdown) veya sayaç uygulamaları.Periyodik veri kontrolü veya güncellemeleri (örneğin, bir API'den veri çekmek)


//!PROMISES

//? SYTNAX
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyon verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginde, reject ise basarisizlikla bittiginde isletilirler.

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan, bekliyor
//* fulfilled:islemin basariyla tamamlandigini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise le degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler. Zincirleme (chain) olarak kullanilabilirler.

new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve("Başarılı!");
    else reject("Hata!");
  })
  
  const person = { name: "kağan", surname: "bilir" };

  new Promise((resolve, reject) => {
    // if(databaseden veriler düzgün geldiyse)
  //   if (true) {
       if(false){
      resolve(person); //person yerinde database in url si olur
    } else {
      reject(new Error("promise başarısız"));
    }
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));


//& FETCH API 