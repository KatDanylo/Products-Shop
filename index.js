( async function(){
function renderProducts(products){
    const productsContainer = document.querySelector('.product-item');
    const storeContainer = document.querySelector('.list_shops');   
    for (const product of products){
        productsContainer.innerHTML += `
        <div class="item">
        <img src="${product.url}" alt="${product.name}">
        <p class="discribe_item"> ${product.description}</p>
        <p class="price"> ${product.price}$</p>
        <button class="btn btn_byu" id-dataset="${product.id}"> Buy Now </button>
        </div>
        ` ;
        storeContainer.innerHTML += `
        <button class="btn shop">${product.store}</button>
        `;
    }
    
};

const response = await fetch('products.json');
const products = await response.json();

renderProducts(products);
})();

(function(){
    const btn_byu = document.querySelector('.btn_byu');
    const btn_close = document.querySelector('#close_cart');
    const btn_order = document.querySelector('#order_cart');
    const modal_window = document.querySelector('.modal');
    btn_byu.addEventListener("click", ()=>{modal_window.classList.toggle("visible")});
    btn_close.addEventListener("click",()=>{ modal_window.classList.toggle("visible")});
    btn_order.addEventListener("click",()=>{ modal_window.classList.remove("visible")});
})();