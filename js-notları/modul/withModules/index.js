console.log("hi from index");
import send from "./myModule.js";
send()

import {increase, decrease, sum} from "./myModule.js"
console.log(sum(3,4));


// diğer kullanım şekli
//import send, {increase, decrease, sum} from "./myModule.js"


// myModule.js'den sadece send fonksiyonunu çağırmak istemene rağmen, diğer export edilmiş şeylerin de çağrılması.

//! 1. Named Export Kullanımı ve Import Doğruluğu
// myModule.js içinde named export kullandığında (örneğin export { send } ya da export function send() gibi), senin yazdığın import { send } from './myModule.js'; sadece send fonksiyonunu içeri aktarır. Ancak myModule.js dosyasının tamamı çalıştırılır.

// Önemli Not: Bir dosyadaki tüm kodlar, modül içinden belirli bir şey import edilse bile, dosya çalıştırılır. JavaScript, modülün tamamını yükler ve import edilen şeyleri arar. Burada, send dışında hiçbir şeyi çağırmadın, ancak modül dosyasının tamamı çalıştırıldı çünkü bu, ES modüllerinin varsayılan davranışıdır.

//! 2. Export Türleri

//* a) Default Export
// Default export, bir modülden sadece bir şeyi dışa aktarmak için kullanılır.

// myModule.js (export)
//export default function send() {console.log("Default send çalışıyor");}
  
//import send from './myModule.js'; 
//send();
// Süslü parantez yok

//* b) Named Export
// Birden fazla şeyi dışa aktarmak için kullanılır.Eğer import sırasında send için süslü parantez {} kullanıyorsan, bu, named export kullandığını gösterir.

//import { send, receive } from './myModule.js';
//send();


//* 3. Default Export ve Named Export Karışımı
// Bir dosyada hem default export hem de named export kullanıyorsan, bu iki türü nasıl import ettiğine dikkat etmelisin. 
// Eğer yanlışlıkla default export olmadığında bile import send from './myModule.js'; gibi bir şey yaparsan, modül yüklenir ancak bir hata alırsın


//? named export yapılmış değişkenleri import yaparken "as" aliası ile isim değiştirerek import edebiliriz
//? default exportlarda istediğimiz isimle import edebiliriz.

import bye, {
    increase as increasing,
  } from "./myModule.js";
  

  console.log(increasing(19));
  
  
  bye();