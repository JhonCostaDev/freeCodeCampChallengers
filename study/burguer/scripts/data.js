export async function loadProducts() {

    try {
        const res = await fetch("data/products.json");
        const data = await res.json();
        return data;

    } catch (error) {
        console.error("Erro ao carregar a lista de produtos: ", error);
    }
}