( async function(){
    function cartRenderProducts(products){
        const cartProductsContainer = document.querySelector('.order_data');  
        for (const product of products){
            cartProductsContainer.innerHTML += `
            <div class="item">${product.name}</div>
            <p class="discribe_item"> ${product.description}</p>
            <p class="price"> ${product.price}$/kg</p>
            <input class="count_product">
            </div>
            ` 
        }
        
    };
    
const response = await fetch('products.json');
const products = await response.json();

cartRenderProducts(products);
})();