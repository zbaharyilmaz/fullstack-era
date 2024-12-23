import "./scss/style.scss"

const form= document.querySelector("header form")
//console.log(form);
import {getCoin} from "./src/getCoin"

form.addEventListener("submit", (e)=>{
    e.preventDefault()    //sayfa render ediyor. konsoldaki yazı çıkıyor ama kayboluyor. engellemek için.
    //console.log("form tetikte");
    getInputVal()
    form.reset()   //yakaladıktan sonra input alanı resetleniyor.
      //ya da console.log(e.target); e.target.reset()
      //e.target, olayın gerçekleştiği DOM elemanını döndürür.Genellikle form, input, buton gibi elemanların olaylarını izlemek için kullanılır. Konsola e.target yazdırarak, hangi elemanın olayın hedefi olduğunu görebilirsiniz.
  
})
const getInputVal=()=>{
    const inputVal= document.querySelector("header form input").value   //bunu en yukarda tanımlasaydık, boş gelirdi konsolda.
    console.log(inputVal);
    if(!inputVal.trim()){
        alert("input boş bırakılamaz");
    }
    else{
        console.log("input dolu", inputVal);
        getCoin(inputVal)
    }
  
}
