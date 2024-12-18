//First Project

let array=[]

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
.then((res)=>res.json())
.then((datas)=>{
    array=datas
    showScreen(datas.meals)})
//forEach objede çalışmaz. arrayde çalışır.veri.meals ile array e çevir.

function showScreen(data){
   const mealsDiv= document.querySelector(".food")
   mealsDiv.innerHTML=""
   data.forEach((a)=>{
    mealsDiv.innerHTML+=`
    <div class="col-sm-6 col-md-4">
    <p>${a.strMeal}</p>
    <img width="200px" src="${a.strMealThumb}" alt=""/>
    </div>
    `
   })
}
//document.querySelectorAll("img") Nodelist gelir. Array-like

document.querySelectorAll("img").forEach((a)=>(a.onclick=()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a.id}`)
    .then((response)=>response.json())
    .then((datas)=>showScreen(datas.meals))
}))


document.querySelector("input")
.oninput=(e)=>{
//console.log(e.target.value)
//console.log(array);
let data1= array.meals.filter((a)=>a.strMeal.toLowerCase().includes(e.target.value.toLowerCase()))    //filter map forEach o satırda bir şey döndürür. arrayı değiştirmez.
showScreen(data1)


