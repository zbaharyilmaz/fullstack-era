const button= document.querySelector(".button")
const box= document.querySelector(".box")
const veriGetir= async()=>{
const result=await fetch("https://randomuser.me/api/");
console.log(result);
const data= await result.json();
console.log(data);
ekranaBas(data);

}
veriGetir();

const ekranaBas =(person)=>{
    box.innerHTML=`
    <img src ="${person.results[0].picture.medium}"alt="NoImage"/>
    <h3>${person.results[0].name.title} ${person.results[0].name.first} ${person.results[0].name.last}</h3>
    
    `
}

button.addEventListener("click", (e)=>{
    veriGetir();
})