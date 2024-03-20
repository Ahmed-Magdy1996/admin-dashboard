var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescriptionInput = document.getElementById('productDescription');
var productImageInput = document.getElementById('productImage');
// _______________________________________________________________________________


if(localStorage.getItem("products") == null ) {
    productContainer = [];
}
else {
    productContainer = JSON.parse ( localStorage.getItem('products'));
    displayProducts();
}



// _______________________________________________________________________________

function addProduct()
{
    var product = {
        code:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        description:productDescriptionInput.value,
        image:'images/tv.jpg'
        }
        
        productContainer.push(product);
        clearForm();
        displayProducts();
        localStorage.setItem('products' , JSON.stringify(productContainer));

}
//_______________________________________________________________________________
function clearForm()
{
productNameInput.value = null;
productPriceInput.value = null;
productCategoryInput.value = null;
productDescriptionInput.value = null;
productImageInput.value = null;
}
//_______________________________________________________________________________

function displayProducts()
{
    var cartona = ``;
    for( var i=0; i<productContainer.length; i++)
    {
        cartona +=
        `<div class="col-md-2 col-sm-6">
            <div class="product">
            <img src="img/iphone 15.png" class="w-100" alt="iphone">
            <h2 class="h4 mt-3">${productContainer[i].code.toString()}</h2>
            <p class="text-secondary mb-2">${productContainer[i].description.toString()}</p>
            <h3 class="h5"> <span class="fw-bolder">Price:</span>${productContainer[i].price.toString()}  </h3>
            <h3 class="h5"> <span class="fw-bolder">Category:</span> ${productContainer[i].category.toString()} </h3>
            </div>
        </div>`;
    }
    document.getElementById('rowData').innerHTML = cartona;
}
//_______________________________________________________________________________






































// var productNameInput = document.getElementById('productName')
// var productPriceInput = document.getElementById('productPrice')
// var productCategoryInput = document.getElementById('productCategory')
// var productDescriptionInput = document.getElementById('productDescription')
// var productImageInput = document.getElementById('productImage')
// // console.log(productNameInput, productPriceInput, productCategory , productDescriptionInput, productImageInput)

// var productContainer = [];

// function addProduct ()
// {
//     var product = {
//         code:productNameInput.value,
//         price:productPriceInput.value,
//         category:productCategoryInput.value,
//         desc:productDescriptionInput.value,
//         image: 'images/tv.jpg',
//     }
//     productContainer.push(product);
// console.log(productContainer);
// }