window.onload = function(){
    var param = new URL(window.location.href);

    var thamSo =param.searchParams.get('productid')
    console.log(thamSo)
    var promise = axios({
                url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${thamSo}`,
                method:'GET'
            }) ;
        
            promise.then(function(res){
                console.log('data',res.data);
                renderProduct(res.data)
                renderSize(res.data)
                renderProductRelate(res.data)
            });
}


function renderProduct(product){
    var productProfile=product.content
    var htmlString=""
    htmlString+=`
    <div class="container">
    <div class="row g-2">
        <div class="col-12 col-sm-6 col-md-6">
            <div class="product-img">
                <img src="${productProfile.image}" alt="">
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6">
            <div class="productInfo">
                <h1>${productProfile.name}</h1>
                <h4>${productProfile.description}</h4>
                <h5>Avaliable size</h5>
                <div class="size">
                
                </div>
                <p class="price">${productProfile.price}$</p>
                <div class="button-buy">
                        <div class="row g-0">
                            <button class="btn-product-up col-4 col-sm-4 col-md-4">+</button>
                            <p class="count-product col-4 col-sm-4 col-md-4">1</p>
                            <button class="btn-product-down col-4 col-sm-4 col-md-4">-</button>
                    </div>
                </div>
                <button class="buy-product">Add to cart</button>
            </div>
        </div>
    </div>
</div>
    `;
    document.querySelector(".product-buy").innerHTML=htmlString
}

function renderSize(size){
    var htmlSize=""
    for(var index=0;index<size.content.size.length;index++){
        var sizeInfo=size.content.size[index]
        htmlSize+=`
            <p>${sizeInfo}</p>
        `;
        document.querySelector(".size").innerHTML=htmlSize
    }

}
function renderProductRelate(arrProduct) {
    var htmlString = "";
    for (var index = 0; index < arrProduct.content.relatedProducts.length; index++) {
      var product = arrProduct.content.relatedProducts[index];
      htmlString += `
      
            <div class="col-12 col-md-4">
              <div class="product-item">
              <img src="${product.image}" alt="">
              <h3>${product.name}</h3>
              <h4>${product.description}</h4>
              <div class="product-buy">
                <div class="row g-0">
                <div class="col-12 col-md-7">
                  <a href="detail.html?productid=${product.id}" class="btn-product ">Buy now</a>
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