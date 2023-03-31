function renderProduct(arrProduct) {
  var htmlString = "";
  for (var index = 0; index < arrProduct.content.length; index++) {
    var product = arrProduct.content[index];
    htmlString += `
    
          <div class="col-12 col-md-4">
            <div class="product-item">
            <img src="${product.image}" alt="">
            <h3>${product.name}</h3>
            <h4>${product.description}</h4>
            <div class="product-buy">
              <div class="row g-0">
              <div class="col-12 col-md-7">
                <a href="detail.html?productid=${index+1}" class="btn-product ">Buy now</a>
              </div>
              <div class="col-12 col-md-5">
                <p>85$</p>
              </div>
                
              </div>
             
            </div>
            </div>
        </div>
  
      
      `;
    document.getElementById("row-product").innerHTML = htmlString;
  }
}

function getProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product ",
    method: "GET",
  });
  promise.then(function (res) {
    renderProduct(res.data);
  });
}

getProduct();
