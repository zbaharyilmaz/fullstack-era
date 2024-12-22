console.log("hi from mymodule");


//! named export
export const workTıme=40
export function sum(s1,s2){
    return s1+s2
}
let counter=5
const increase=(amount)=>(counter+=amount)
const decrease=(amount)=>(counter-=amount)
const myName="Bahar"

export {increase, decrease, myName}

function send(){
    console.log("See Ya");
    
}

export default send


//* default export
//? bir sayfada 1 tane default export olabilir
//? tüm yapı tek seferde export edilir
//? import ederken istediğimiz isimle import edip kullanabiliriz