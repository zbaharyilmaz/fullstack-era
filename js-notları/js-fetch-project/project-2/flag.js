const getCountry = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all")
    let data = await res.json()
    showCountry(data)
}
getCountry()

const showCountry = (data) => {
    data.forEach((a) => {
        document.querySelector("article").innerHTML += `
     
    <div class="card text-start w-50 shadow-lg bg-light my-4" style="width: 18rem;">
  <img src="${a.flags.svg} " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${a.name.common} </h5>
    
<ul class="list-group list-group-flush">
  <li class="list-group-item">
  ${a.capital}
   </li>
  <li class="list-group-item">
 ${Object.values(a.languages)}
  </li>
  <li class="list-group-item"> ${Object.values(a.currencies)[0].name}  </li>

</ul>
 </div>
</div> 
 `
    })
}

