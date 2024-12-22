import "./scss/style.scss"

const form= document.querySelector("header form")
//console.log(form);

form.addEventListener("submit", (e)=>{
    e.preventDefault()    //yazının 
    console.log("form tetikte");
})