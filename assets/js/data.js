//  Clase constructor de Productos
class Productos
{
  constructor(id, nombre, ingredientes,precio,imagen, popular)
  {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
    this.imagen = imagen;
    this.popular = popular;
  }
}

// Array de Pizzas
const productosLista = [];

productosLista.push({pizzas: [], hamburguesas: [], napapuki: [], wraps: [], mexicanFood: [], batidos: []});

//  Crear un nuevo objeto desde la clase Productos y la agrega en el array de productosLista.
productosLista[0].pizzas.push( new Productos( 1, 'Muzzarella', ["Salsa de Tomate", "Queso Muzzarella"], 500, "./assets/img/Pizza-Muzzarella-300x300.jpg", 88 ) );
productosLista[0].pizzas.push( new Productos( 2, 'Calabresa', ["Salsa de Tomate", "Queso Muzzarella", "Calabresa"], 1000, "./assets/img/Pizza-Calabresa-300x300.jpg", 45 ) );
productosLista[0].pizzas.push( new Productos( 3, 'Jamón y Morrón', ["Salsa de Tomate", "Queso Muzzarella", "Jamón", "Morrón"], 650, "./assets/img/Pizza-de-Jamón-y-Morrón--300x300.jpg", 90 ) );
productosLista[0].pizzas.push( new Productos( 4, 'Jamón y Tomate', ["Salsa de Tomate", "Queso Muzzarella", "Tomate", "Jamón"], 750,  "./assets/img/Pizza-de-Jamón-y-Tomate--300x300.jpg", 50 ) );
productosLista[0].pizzas.push( new Productos( 5, 'Palmito', ["Salsa de Tomate", "Queso Muzzarella", "Palmito"], 550, "./assets/img/Pizza-Muzzarella-300x300.jpg", 30 ) );
productosLista[0].pizzas.push( new Productos( 6, 'Fugazzeta', ["Queso Muzzarella", "Cebolla Caramelizada"], 950, "./assets/img/Pizza-Fugazzeta--300x300.jpg", 85 ) );
productosLista[0].pizzas.push( new Productos( 7, 'Pizza Napolitana', ["Salsa de Tomate", "Queso Muzzarella", "Aceitunas", "Tomates"], 800, "./assets/img/Pizza-Napolitana--300x300.jpg", 100 ) );
productosLista[0].pizzas.push( new Productos( 8, 'Panceta', ["Salsa de Tomate", "Queso Muzzarella", "Panceta", "Aceitunas"], 1000, "./assets/img/Pizza-Panceta--300x300.jpg", 95 ) );
productosLista[0].pizzas.push( new Productos( 9, 'Roquefort',  ["Salsa de Tomate", "Queso Muzzarella", "Roquefort", "Aceitunas"], 850, "./assets/img/Pizza-Roquefort--300x300.jpg", 70 ) );
productosLista[0].pizzas.push( new Productos( 10, 'Provolone', ["Salsa de Tomate", "Queso Muzzarella", "Provolone", "Aceitunas"], 900, "./assets/img/Pizza-Provolone-300x300.jpg", 60 ) );
productosLista[0].pizzas.push( new Productos( 11, 'Super Calabresa', ["Salsa de Tomate", "Queso Muzzarella", "Calabresa", "Aceitunas Negras"], 1550, "./assets/img/Pizza-Super-Calabresa--300x300.jpg", 80 ) );
productosLista[0].hamburguesas.push( new Productos( 12 , 'Hamburguesas de Carne', ['Pan', 'Carne', 'Rodajas de tomates', 'Salsa Barbacoa'], 1200, "./assets/img/src.jpg", 92) );
productosLista[0].hamburguesas.push( new Productos( 13 , 'Hamburguesas de Pollo', ['Pan', 'Pollo', 'Rodajas de tomates', 'Salsa Barbacoa'], 1200, "./assets/img/src.jpg", 81) );
productosLista[0].hamburguesas.push( new Productos( 14 , 'Hamburguesas de Vegana', ['Pan', 'Zeitan', 'Rodajas de tomates', 'Salsa Barbacoa'], 1200, "./assets/img/src.jpg", 81) );
productosLista[0].napapuki.push( new Productos( 15 , 'Papas fritas', ['Papas'], 400, "./assets/img/src.jpg", 89) );
productosLista[0].wraps.push( new Productos( 16 , 'Wraps de Carne', ['Fajitas', 'Carne', 'Tomates', 'Cebolla', 'Salsa Varias'], 900, "./assets/img/src.jpg", 75) );
productosLista[0].wraps.push( new Productos( 17 , 'Wraps de Pollo', ['Fajitas', 'Pollo', 'Tomates', 'Cebolla', 'Salsa Varias'], 790, "./assets/img/src.jpg", 62) );
productosLista[0].mexicanFood.push( new Productos( 19 , 'Tamales', ['Maiz', 'Carne'], 990, "./assets/img/src.jpg", 94) );
productosLista[0].batidos.push( new Productos( 20 , 'Batido de Banana', ['Leche', 'Banana', 'Azucar', 'Agua'], 500, "./assets/img/src.jpg", 93) );
productosLista[0].batidos.push( new Productos( 21 , 'Batido de Frutilla', ['Leche', 'Frutilla', 'Azucar', 'Agua'], 450, "./assets/img/src.jpg", 81) );
productosLista[0].batidos.push( new Productos( 22 , 'Batido de Uva', ['Leche', 'Uva', 'Azucar', 'Agua'], 450, "./assets/img/src.jpg", 77) );