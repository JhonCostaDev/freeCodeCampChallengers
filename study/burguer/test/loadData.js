const fs = require("fs");

const raw = fs.readFileSync("../data/products.json", "utf-8");
const data = JSON.parse(raw);
const arrayProducts = Object.values(data);
const categories = [...new Set(arrayProducts.map(item => item.category_label))];

console.log(categories);
// for(item in cathegory) {
//     console.log(item);
// }

// cathegory.forEach(item => {
//     console.log(item.category_label);
// })
//console.log(cathegory[0]);



// cathegory.forEach(element => {
//     console.log(element.name);
// });
// const item = cardapio.cardapio.categorias
//   .flatMap(categoria => categoria.itens)
//   .find(item => item.nome === "Refrigerante Lata");

// console.log(`${item.nome} - R$ ${item.preco.toFixed(2)}`);

// fetch("cardapio.json")
//   .then(response => response.json())
//   .then(data => {
//     const item = data.cardapio.categorias
//       .flatMap(categoria => categoria.itens)
//       .find(item => item.id === "refrigerante");

//     console.log(`${item.nome} - R$ ${item.preco.toFixed(2)}`);
//   })
//   .catch(error => {
//     console.error("Erro ao carregar o cardápio:", error);
//   });

// const fs = require("fs");

// const arquivo = fs.readFileSync("../data/products_2.json", "utf8");
// const data = JSON.parse(arquivo);

// const items = data.categories
// //console.log(item);
// // .flatMap(categoria => categoria.itens)
// //   .find(item => item.id === "refrigerante");

// //console.log(cate);

// items.forEach(item => {
//     const product = item.items;
//     console.log(product['name']);
// })