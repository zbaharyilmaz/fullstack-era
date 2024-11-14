
//? Q1.Kullanıcının profilinde bir kullanıcı adı girilmemişse, "Misafir" adını kullanın. Aşağıdaki değişkenleri kullanarak kullanıcı adını belirleyin.
let username= prompt("User Name:")
let profilName= username || "Guest"
 console.log(profilName)

//? Q2.Bir ürünün üç farklı fiyatı olabilir: `indirimliFiyat`, `kampanyaFiyati`, veya `normalFiyat`. Eğer tüm bu fiyatlar yoksa "Fiyat yok" döndürün.
let discountPrice= 0
let campaignPrice= null
let price= false
let productPrice= discountPrice || campaignPrice || price || "There is no price info given"
console.log(productPrice)

//? Q3.Bir kullanıcının telefon numarası veya e-posta adresi yoksa, varsayılan olarak "İletişim bilgisi eksik" mesajı döndürün.

let phoneNumber= prompt("Enter your phone number:")
let mailAdress= prompt("Enter your mail adress:")
let enterence = Boolean(phoneNumber && mailAdress)
if (!enterence){
    console.log("Missing Information Here!")
} 
else{
    console.log("Successful login has been made" )
}

//? Q4.Bir kullanıcının üç farklı adres bilgisi olabilir: `evAdresi`, `isAdresi`, veya `postaKutusu`. Tüm bilgiler eksikse "Adres yok" döndürün.

 let homeAddress= 0
 let workAddress= 0
 let letterBox= 0
 let address= homeAddress || workAddress || letterBox || "There is no adress information."
 console.log(address)

//! Diğer sorularda da benzer bir mantık ilerlettim.  
/*----------------------------------------------------------------*/ 

//? Q1. Bir kullanıcının `kullaniciAdi` ve `sifre` bilgileri varsa giriş yapmasını sağlayın, yoksa "Giriş bilgileri eksik" mesajı döndürün.
let username_ = prompt("Enter your username:")
let password = prompt("Enter your password:")
let permission = username_ && password && "Successful Login" || "Users must enter username and password."
console.log(permission)


//? Q2. Bir siparişin tamamlanması için `odemeYapildi` ve `urunHazir` olması gerekmektedir. Eğer ikisi de sağlanıyorsa "Sipariş tamamlandı" mesajı döndürün, değilse "Sipariş beklemede" döndürün.
let paymentSuccessful= 1
let productReady= 0
let message = paymentSuccessful  && productReady && "Your order is complete!" || "Pending Status"
console.log(message)

//? Q3. Bir üründe hem `indirimKoduGirildi` hem de `urunSepette` ise indirim uygulanır. Aksi halde "İndirim uygulanamaz" mesajı döndürün.
let applyDiscountCode= 0
let inShoppingcart= 1
let message_= applyDiscountCode &&  inShoppingcart && "Your coupon was successfully applied!" || "Discount code isn't available to you right now."
console.log(message_)

//? Q4.Bir randevu için hem `tarihOnaylandi` hem de `saatOnaylandi` sağlanıyorsa "Randevu onaylandı" mesajı döndürün, değilse "Onay bekleniyor" döndürün.

let dateConfirm= null
let timeConfirm= 1
let messageConfirm= dateConfirm && timeConfirm && "Your appointment is confirmed" || "Pending Approval"
console.log(messageConfirm)


//! Diğer sorularda da benzer bir mantık ilerlettim.  