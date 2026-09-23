import { loadProducts } from "./data.js";
import { showModalCart } from "./modalCart.js";

import { renderCategories } from "./render.js";

import { updateCart } from "./cart.js";

//EntryPoint

document.addEventListener("DOMContentLoaded", async () => {
    const data = await loadProducts();
    const menu = document.getElementById("menu");
    const cartBtn = document.getElementById("cart-btn");
    const cartModal = document.getElementById("cart-modal");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const cartCounter = document.getElementById("cart-count");
    const addressInput = document.getElementById("address");
    const addressWarning = document.getElementById("address-warn");
    
    renderCategories(data, menu);

    //show modal cart
    showModalCart(cartBtn, cartModal, closeModalBtn);

    //manager cart
    updateCart(menu);
})

//min 26:39