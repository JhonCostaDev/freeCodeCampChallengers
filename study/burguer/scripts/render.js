export function renderCategories(data) {
    const menu = document.getElementById("menu");

    //getting all the categories from the object and save them in an array
    const categories = [... new Set(data.map(item => item.category_label))];
    
    //render the categories on html
    for(const category of categories) {
        const h3 = document.createElement("h3");
        h3.textContent = category;
        h3.className = "text-3xl md:text-3xl font-bold text-center mt-9 mb-6";
        menu.appendChild(h3);

        //render a main container to show the products
        const mainContainer = document.createElement("main");
        mainContainer.className = "grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16";

        data.filter(item => item.category_label === category)
         .forEach(product => {
            const divContainer = document.createElement("div");
            divContainer.className = "flex gap-2 mt-2 mb-2";
            divContainer.innerHTML = `
                <img 
                    src="${product.image}" 
                    alt=""
                    class="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
                >
                <div class="w-full">
                    <p class="font-bold ">${product.title}</p>
                    <p class="text-sm">${product.description}</p>
                    <div class="flex items-center gap-2 justify-between mt-3">
                        <p class="font-bold">R$ ${product.price.toFixed(2)}</p>
                        <button 
                            class="bg-gray-900 px-5 rounded add-to-cart-btn"
                            data-name="${product.title}"
                            data-price="${product.price}"
                        >
                            <i class="fa fa-cart-plus text-lg text-white"></i>
                        </button>
                    </div>
                </div>
            `;
            mainContainer.appendChild(divContainer);
         });
         menu.appendChild(mainContainer);
    }
}