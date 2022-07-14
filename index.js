(async function () {
    function renderProducts(products) {
        const productsContainer = document.querySelector('.product-item');
        productsContainer.innerHTML="";
        for (const product of products) {
            productsContainer.innerHTML += `
        <div class="item">
        <img src="${product.url}" alt="${product.name}">
        <p class="discribe_item"> ${product.description}</p>
        <p class="price"> ${product.price}$</p>
        <button class="btn btn_byu" data-id="${product.id}"> Buy Now </button>
        </div>
        `;
        }
    };


    function renderStore(products) {
        const storeContainer = document.querySelector('.list_store');
        const stores = new Set(products.map((el) => el.store));
        stores.forEach(st => storeContainer.innerHTML += `<button class="btn store" data-st="${st}">${st}</button>`);
    };

    const response = await fetch('products.json');
    const products = await response.json();
    renderProducts(products);
    renderStore(products);



    const productsContainer = document.querySelector('.product-item');
    const storeContainer = document.querySelector('.list_store');
    const btn_close = document.querySelector('#close_cart');
    const btn_order = document.querySelector('#order_cart');
    const modal_window = document.querySelector('.modal');
    productsContainer.addEventListener('click', function(event){
        if (event.target.closest('.btn_byu')){
            // const orderCount = document.querySelector('.order_count');
            const orderData = document.querySelector('.order_data');
            for (const cartData of products){
            orderData.innerHTML += `
            <div class="order_item">
                <img src="${cartData.url}" alt="${cartData.name}">
                <p class="category"> ${cartData.category}: ${cartData.name}</p>
                <p class="price"> ${cartData.price}$</p>
                <input  class="order_count" type="number" min="1" step="1" value="1">
            </div> `;
             }
            modal_window.classList.toggle("visible");
        }
    });
    storeContainer.addEventListener('click', function(event){
        if (event.target.closest('.store')){
             const filterProducts = products.filter(el => el.store == event.target.dataset.st);
             renderProducts(filterProducts);
        }
    });
    function cons(){
        console.log("УРА");
    }

    btn_close.addEventListener("click", () => {
        modal_window.classList.toggle("visible")
    });
    btn_order.addEventListener("click", () => {
        modal_window.classList.remove("visible");
    });
})();
