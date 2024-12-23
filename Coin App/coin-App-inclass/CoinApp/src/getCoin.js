

// export const getCoin = (query) => {
//     console.log("getcoin çalıştı",query)

import axios from "axios";
import displayCoin from "./displayCoin";

//     const url = `https://api.coinranking.com/v2/coins?search=${query}`
//     const options = {
//         headers: {
//           'x-access-token': 'coinrankingec14ee28abb96867e04943e463a2d704f333db7526b7be88',
//         },
//       };

//       fetch(url, options)
//         .then((response) => response.json())
//         .then((result) => console.log(result));

// }

// export const getCoin = async (query) => {
//   console.log("getcoin çalıştı", query);

//   const url = `https://api.coinranking.com/v2/coins?search=${query}`;

//   const options = {
//     headers: {
//       "x-access-token":
//         "coinrankingec14ee28abb96867e04943e463a2d704f333db7526b7be88",
//     },
//   };

//   try {
//     const res = await fetch(url, options);
//     const coinData = await res.json();
//     console.log(coinData);
//   } catch (error) {
//     console.log("Ooops Hata Oluştu")
//   }
// };


//default export sayfada sadece bir tane yapılır. ya da export const getCoin=()=>{.... şeklinde de export yapılır. Bunu tercih edersen iport {getCoin} from ... şeklinde import yapmalısın.

//NODEİJS ORTAMINDA THİRD PARTY KÜTÜPHANE OLARAK AXIOS

export const getCoin = async (query) => {
     console.log("getcoin çalıştı", query);
    
     const url = `https://api.coinranking.com/v2/coins?search=${query}`;
    
     const options = {
       headers: {
         "x-access-token":
           "coinrankingec14ee28abb96867e04943e463a2d704f333db7526b7be88",
       },
     };
    const res= await axios(url, options)
    console.log(res.data.data.coins);
    if(!res.data.data.coins.length){
      console.log("coin bulunamadı");
    }
    else{
      //console.log("coin bulundu", res.data.data.coins[0].name);
      displayCoin(res.data.data.coins[0])
    }
    }