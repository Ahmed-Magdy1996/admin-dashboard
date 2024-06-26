var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescriptionInput = document.getElementById('productDescription');
var productImageInput = document.getElementById('productImage');
var searchInput = document.getElementById('searchInput');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn'); 
var updatedIndex;

var productContainer = []; 

if (localStorage.getItem('products') !==null) 
{
    productContainer = JSON.parse( localStorage.getItem('products'));
    displayProducts(productContainer); 
}


function addProduct() {

    var product = {
        code:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        description:productDescriptionInput.value,
        image:`img/${productImageInput.files[0]?.name}`
    }
    productContainer.push(product);
    localStorage.setItem("products", JSON.stringify(productContainer));
    clearForm();
    displayProducts();
}


function clearForm() {
    productNameInput.value = null; 
    productPriceInput.value = null;
    productCategoryInput.value = null;
    productDescriptionInput.value = null;
    productImageInput.value = null;
}


function displayProducts(arr) 
{
    var cartona = ``;
    for (var i = 0; i < arr.length; i++)
    {
        cartona += `<div class="col-md-2">
                    <div class="product">
        <img  src="${arr[i].image}"  class="w-100" alt="">
            <h2 class="h6">${arr[i].code}</h2>
            <p>${arr[i].description}.</p>
            <h3 class="h6">${arr[i].price}</h3>
            <h3 class="h6">${arr[i].category}</h3>
            <button onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm w-100 my-2" >Delete <i class="fas fa-trash-alt"></i></button>
            <button onclick="setFormForUpdate(${i})" class="btn btn-outline-warning btn-sm w-100 my-2" >Update <i class="fas fa-pen"></i></button>
        </div>
    </div>`
    }
    document.getElementById('rowData').innerHTML = cartona;
}


function deleteProduct(deletedIndex)
{
    productContainer.splice(deletedIndex,1);
    displayProducts();
    localStorage.setItem("products", JSON.stringify(productContainer));

    
}


function searchProducts()
{
    var term = searchInput.value;
    var termProducts = [];
    for(var i=0; i<productContainer.length;i++)
    {
        if(productContainer[i].code.toLowerCase().includes(term.toLowerCase()) == true) 
        {
            termProducts.push(productContainer[i])
        }
    }
    displayProducts(termProducts)
}




function setFormForUpdate(i)
{
    updatedIndex = i;

    addBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');
    productNameInput.value = productContainer[i].code;
    productPriceInput.value = productContainer[i].price;
    productCategoryInput.value = productContainer[i].category;
    productDescriptionInput.value = productContainer[i].description;
}


function updateProduct()
{
    var x = productContainer
    addBtn.classList.remove('d-none');
    updateBtn.classList.add('d-none');
    productContainer[updatedIndex].code = productNameInput.value;
    productContainer[updatedIndex].price = productPriceInput.value;
    productContainer[updatedIndex].description = productDescriptionInput.value;
    productContainer[updatedIndex].category = productCategoryInput.value;
    
    displayProducts();
    localStorage.setItem("products", JSON.stringify(productContainer));
    clearForm();

    
}

function validateInputs(element)
{

    var regex = {
        productName:/^[A-Z][a-z]{2,8}$/,
        productPrice:/^[1-9][0-9][0-9]/,
        productDescription:/^[A-Za-z]{3,100}$/,
        productCategory:/^(Mobile Phone|TV|Printer|Laptop|Camera)$/
        }
    
    if(regex[element.id].test(element.value) == true)
    {
    
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        element.nextElementSibling.classList.replace('d-block', 'd-none');
        return true;
    }

    else{
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        element.nextElementSibling.classList.replace('d-none', 'd-block');
        return false;
    }   
}




