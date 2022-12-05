const showProducts = (filterProducts) => {
    showContainer.innerHTML = filterProducts.map(
        (prod) => 
        `
        <div class="box2">
        <div class="comp2">
            <span>${prod.cat}</span>
        </div>
        <div class="pro2"><img src=${prod.img} alt=""></div>
        <div class="det2">${prod.name}</div>
        <div class="price2">
            <div class="price_det">Php${prod.price}</div>
            <div class="add">
                <button type="button" onclick="location.href='../html/builder.html'"><span>+</span></button>
            </div>
        </div>

    </div>
        `
        
        ).join("");
};

showProducts(data);