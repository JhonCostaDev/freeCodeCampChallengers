fetch("data/products.json")
            .then(res => res.json())
            .then(data => {
                const menu = document.getElementById("menu");
               
                const categories = [...new Set(data.map(item => item.category_label))];
                //console.log(data.title);

                for(const category of categories) {

                    const h3 = document.createElement("h3");
                    h3.textContent = category;
                    h3.className = "text-3xl md:text-3xl font-bold text-center mt-9 mb-6";
                    menu.appendChild(h3);

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
                
            })
            .catch(error => console.error("Erro ao carregar o menu:", error));









/*
"text-5xl md:text-5xl font-bold text-center mt-9 mb-6"
<div id="menu">
        <main class="grid grid-cols-1">
            <!-- Produto ITEM -->
            <div class="flex gap-2">
                <img 
                    src="assets/hamb-1.png" 
                    alt=""
                    class="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
                >
                <div >
                    <p class="font-bold ">Hamburguer Smash</p>
                    <p class="text-sm">Pão levinho de fermentação natural de Trigo, burguer 160g, queijo prato e maionese da casa.</p>
                    <div class="flex items-center gap-2 justify-between mt-3">
                        <p class="font-bold">R$18.90</p>
                        <button 
                            class="bg-gray-900 px-5 rounded add-to-cart-btn"
                            data-name="Hamburguer Smash"
                            data-price="18.90"
                        >
                            <i class="fa fa-cart-plus text-lg text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
    */