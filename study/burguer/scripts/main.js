import { loadProducts } from "./data.js";

import { renderCategories } from "./render.js";

//EntryPoint

document.addEventListener("DOMContentLoaded", async () => {
    const data = await loadProducts();
    renderCategories(data);
})

