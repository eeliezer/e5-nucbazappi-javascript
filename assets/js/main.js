//  Inicializar los contenedores de la pagina
const cardsRecomendados = document.getElementsByClassName('.div-cards-recomendados');
const cardsCategorias = document.getElementsByClassName('.div-cards-categorias');
const cardsPopulares = document.getElementsByClassName('.div-cards-populares');

// Grabar en LS
const saveLocalStorage = (listaProductos) => {
    localStorage.setItem('dataProductos', JSON.stringify(listaProductos))
};

const listaProductos = productosLista;

console.log('Entrar al nombre de un producto en específico dentro del array pizzas ==> ' + listaProductos[0].pizzas[0].nombre)
console.log('Entrar al nombre de un producto en específico dentro del array batidos ==> ' + listaProductos[0].batidos[0].nombre);
console.log('Entrar al nombre de un producto en específico dentro del array hamburguesas ==> ' + listaProductos[0].hamburguesas[2].nombre);
console.log('Entrar al nombre de un producto en específico dentro del array wraps ==> ' + listaProductos[0].wraps[1].nombre);
console.log(listaProductos[0].pizzas);
console.log(listaProductos);

saveLocalStorage(listaProductos);