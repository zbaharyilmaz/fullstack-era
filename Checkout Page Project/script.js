//!JSON dosyası tarzı
let sepettekiler = [
    { name: "Vintage Backpack", price: 34.99, piece: 1, img: "./img/photo1.png" },
    { name: "Levi Shoes", price: 40.99, piece: 1, img: "./img/photo2.png" },
    { name: "Antique Clock", price: 69.99, piece: 1, img: "./img/photo3.jpg" },
];

sepettekiler.forEach((urun) => {

//& destructure
const {name, price, piece, img} = urun;


    document.querySelector("#product-rowlari").innerHTML += `
          <div class="row ">
            <div class="col-md-5">
              <img
                src=${img}
                class="w-100 rounded-start"
                alt="..."
              />
            </div>

            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>

                <div class="ürün-price">
                  <p class="text-warning h2">$<span class="indirim-price">${price}</span>
                    <span class="h5 text-dark text-decoration-line-through">${(price*0.7).toFixed(2)}</span>
                  </p>
                </div>

                <div
                  class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
                  <div class="adet-controller">
                    <button class="btn btn-secondary btn-sm minus">
                      <i class="fas fa-minus"></i>
                    </button>
                    <p class="d-inline mx-4" id="ürün-adet">${piece}</p>
                    <button class="btn btn-secondary btn-sm plus">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>

                <div class="ürün-removal mt-4">
                  <button class="btn btn-danger btn-sm w-100 remove-product">
                    <i class="fa-solid fa-trash-can me-2"></i>Remove
                  </button>
                </div>

                <div class="mt-2">
                  <p>Ürün Toplam: <span class="product-total">${(price*0.7*piece).toFixed(2)}</span></p>
                
                </div>
              </div>
            </div>
          </div> 
          `;
});
