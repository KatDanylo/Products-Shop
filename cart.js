( async function(){
    function renderProducts(products){
        const productsContainer = document.querySelector('.product-item');
        const storeContainer = document.querySelector('.list_shops');       
        for (const product of products){
            productsContainer.innerHTML += `
            <div class="item">
            <img src="${product.url}" alt="${product.name}">
            <p class="discribe_item"> ${product.description}</p>
            <p class="price"> ${product.price}$/kg</p>
            <button class="btn btn_byu"> Buy Now </button>
            </div>
            ` 
        }
        
    };
    
const response = await fetch('products.json');
const products = await response.json();

renderProducts(products);
})();