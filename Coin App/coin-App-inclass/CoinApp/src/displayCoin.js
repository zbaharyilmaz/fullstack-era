const displayCoin=(coin)=>{
    // console.log(coin);
    // console.log("displayCoin çalıştı");

    const {price,change, name,symbol, iconUrl, rank}=coin  //destructring

    const ul= document.querySelector("main .coins")
    const li= document.createElement("li")
    li.className="coin"
    li.innerHTML=`
    <li class="coin">
        <div class="remove-icon">
            <i class="fas fa-window-close"></i>
        </div>
        <h2 class="coin-name" data-name="Ripples">
            <span>${name}</span>
            <sup>${symbol}</sup>
        </h2>
        <div class="coin-temp">${Number(price).toFixed(2)}</div>
            <figure>
                <img class="coin-icon" src="${iconUrl}">
                <figcaption style="color:red">
                    <i class="fa-solid fa-chart-line"></i>
                    <span>${change}</span>
                </figcaption>
        </figure>
    </li>`

    //ul.appendChild(li)
    ul.prepend(li)
}


export default displayCoin

