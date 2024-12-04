
let sepettekiler = [
    { name: "Vintage Backpack", price: 34.99, piece: 1, img: "./img/photo1.png" },
    { name: "Levi Shoes", price: 40.99, piece: 1, img: "./img/photo2.png" },
    { name: "Antique Clock", price: 69.99, piece: 1, img: "./img/photo3.jpg" },
  ];
  
  const tax = 0.18;
  
  sepettekiler.forEach(({ img, name, price, piece }) => {

  
    document.querySelector("#product-rowlari").innerHTML += `
      <div class="row ">
              <div class="col-md-7">
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
                      <span class="h5 text-dark text-decoration-line-through">${(
                        price * 0.7
                      ).toFixed(2)}</span>
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
                  <p>Ürün Toplam:<span class="product-total">${(
                    price *
                    0.7 *
                    piece
                  ).toFixed(2)}</span></p>
                    
                  </div>
                </div>
              </div>
            </div> 
      
      
      
      `;
  });

  
  calculateCardTotal();
  removeButton();
  increaseDecrease();
  
  //! 2-toplam değerleri tablosunun doldurulması
  function calculateCardTotal() {
    const icerik = document.querySelectorAll(".product-total");
    const toplamArray = Array.from(icerik).reduce(
      (genelToplam, item) => genelToplam + Number(item.textContent),
      0
    );
    console.log(toplamArray);
  
    document.querySelector(".productstoplam").textContent =
      toplamArray.toFixed(2);
    document.querySelector(".vergi").textContent = (toplamArray * tax).toFixed(2);
    shipping = toplamArray > 100 ? 0 : 15;
    document.querySelector(".kargo").textContent = shipping;
    document.querySelector(".toplam").textContent = (
      toplamArray +
      toplamArray * tax +
      shipping
    ).toFixed(2);
  }
  
  //! 3-silme işleme (remove)
  function removeButton() {
    document.querySelectorAll(".remove-product").forEach((btn) => {
      btn.onclick = () => {
        //  btn.parentElement.parentElement.parentElement.parentElement.remove()
        btn.closest(".row").remove();
        calculateCardTotal();
      };
    });
  }
  
  
  function increaseDecrease() {
    document.querySelectorAll(".adet-controller").forEach((ekleCikarAlani) => {
      const plus = ekleCikarAlani.lastElementChild;
      const minus = ekleCikarAlani.firstElementChild;
      // const adet=plus.previousElementSibling;
      const adet = ekleCikarAlani.children[1];
  
      plus.onclick = () => {
        adet.textContent = Number(adet.textContent) + 1;
        plus.closest(".card-body").querySelector(".product-total").textContent =(
          plus.closest(".card-body").querySelector(".indirim-price").textContent *
          adet.textContent).toFixed()
          calculateCardTotal()
      };
  
      minus.onclick=()=>{
          adet.textContent = Number(adet.textContent) - 1;
  
          if (adet.textContent<1){
              alert("Üründen vaz mı geceçeksiniz. Bir daha mı düşünsenizyanında tarak bedava")
              minus.closest(".row").remove()
          }else{
              minus.closest(".card-body").querySelector(".product-total").textContent =(
              minus.closest(".card-body").querySelector(".indirim-price").textContent *
              adet.textContent).toFixed(2)
              calculateCardTotal()
          }
  
      }
  
    });
  }
