//  Inicializar los contenedores de la pagina
const cardsRecomendados = document.getElementsByClassName('.div-cards-recomendados');
const divCatego = document.getElementById('divCatego')
const cardsPopulares = document.getElementById('mas-populares');
const btnCategorias = document.querySelectorAll('.categories-card');
const cartBtn = document.querySelector('.cart-label');
const closeCart = document.querySelector('.close-cart');
const cartMenu = document.querySelector('.cart');
const overlay = document.querySelector('.overlay');
const productsCart = document.querySelector('.cart-container');
const total = document.querySelector('.total');
const subtotal = document.querySelector('.subtotal');
const cartBubble = document.querySelector('.cart-bubble');
const buyBtn = document.querySelector('.btn-buy');
const successModal = document.querySelector('.add-modal');
const envio = document.querySelector('.envio');

// Grabar en LS

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveCartLocalStorage = cartList => {
  localStorage.setItem('cart', JSON.stringify(cartList));
}

const saveLocalStorage = (ListadoDeProductos) => {
    localStorage.setItem('dataProductos', JSON.stringify(ListadoDeProductos))
};

saveLocalStorage(ListadoDeProductos);


// Funcion para inyectar los productos en el html

const cargarProductos= (productosElegidos)=> {
        divCatego.innerHTML="";
        
        productosElegidos.forEach(producto =>{
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="producto-detalles">
          <img width="200px" height="150px"class="prodcuto-imagen" src="${producto.imagen}">
            <h3 class="producto-titulo">${producto.nombre}</h3>
            <p class="producto-precio">$ ${producto.precio}</p>
            <p class="producto-polularidad">${producto.popular}</p>
            <button class="btd-add-product" id="${producto.nombre}" data-id='${producto.id}' data-nombre='${producto.nombre}' data-precio='${producto.precio}' data-imagen='${producto.imagen}' data-descripcion='${producto.descripcion}'>Agregar</button>
        </div>`
    divCatego.append(div)
    });
}
cargarProductos(ListadoDeProductos);

btnCategorias.forEach(boton=>{
    boton.addEventListener("click", (e)=>{
        btnCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if(e.currentTarget.id==="popular"){
          const productoBtn = ListadoDeProductos.filter(producto => producto.popular >= 90)
          cargarProductos(productoBtn)
        }else if(e.currentTarget.id!="todos"){
          const productoBtn = ListadoDeProductos.filter(producto => producto.categoria === e.currentTarget.id)
        cargarProductos(productoBtn)
      }else{
            cargarProductos(ListadoDeProductos)
        }
        
        
    })
    
})


// ABRIR Y CERAR CART //

const toggleCart = () => {
  cartMenu.classList.toggle('open-cart');
  overlay.classList.toggle('show-overlay');
};

const closeOnOverlayClick = () => {
  cartMenu.classList.remove('open-cart');
  overlay.classList.remove('show-overlay');
};

const closeOnScroll = () => {
  if (
    !cartMenu.classList.contains('open-cart')
  )
    return;

  cartMenu.classList.remove('open-cart');
  overlay.classList.remove('show-overlay');
};

// FUNCIONALIDAD CARRITO //

const renderCartProduct = cartProduct => {
  const { id, nombre, precio, imagen, quantity, descripcion } = cartProduct;
  return `
  <div class="cart-item">
  <img src=${imagen} alt="Imagen del producto" />
  <div class="item-info">
    <h3 class="item-title">${nombre}</h3>
    <h3 class="item-descripcion">${descripcion}</h3>
    <p class="item-price">Precio: </p>
    <span class="item-price">$${precio}</span>
  </div>
  <div class="item-handler">
    <span class="quantity-handler down" data-id=${id}>-</span>
    <span class="item-count">${quantity}</span>
    <span class="quantity-handler up" data-id=${id}>+</span>
  </div>
</div>
  `;
};

const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(renderCartProduct).join('');
}

const getTotalCart = () => cart.reduce((acc, cur) => acc + Number(cur.precio) * cur.quantity + Number(envio.textContent), 0);

const getSubTotalCart = () => cart.reduce((acc, cur) => acc + Number(cur.precio) * cur.quantity, 0);

const showTotal = () => {
  total.innerHTML = `$${getTotalCart().toFixed(2)}`
}

const showSubTotal = () => {
  subtotal.innerHTML = `$${getSubTotalCart().toFixed(2)}`
}

const disableBtn = btn => {
  if (!cart.length) {
    btn.classList.add('disabled');
  } else {
    btn.classList.remove('disabled');
  }
};

const checkCartState = () => {
  saveCartLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  showSubTotal(cart)
  disableBtn(buyBtn);
  renderCartBubble(cart);
};

const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

const addProduct = e => {
  if (!e.target.classList.contains('btd-add-product')) return;
  const { id, nombre, precio, imagen , descripcion } = e.target.dataset;

  const product = productData(id, nombre, precio, imagen, descripcion);

  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccesModal('Se agregó una unidad del producto al carrito');
  } else {
    createCartProduct(product);
    showSuccesModal('El producto se ha agregado al carrito');
  }
  
  checkCartState();
};

const showSuccesModal = msg => {
  successModal.classList.add('active-modal');
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove('active-modal');
  }, 1500);
};

const createCartProduct = product => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const addUnitToProduct = product => {
  cart = cart.map(cartProduct =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  );
};

const isExistingCartProduct = product => {
  return cart.find(item => item.id === product.id);
};

const productData = (id, nombre, precio, imagen, descripcion) => {
  return { id, nombre, precio, imagen, descripcion };
};

const handleMinusBtnEvent = id => {
  const existingCartProduct = cart.find(item => item.id === id);

  if (existingCartProduct.quantity === 1) {
    if (window.confirm('¿Desea Eliminar el producto del carrito?')) {
      removeProductFromCart(existingCartProduct);
    }

    return;
  }
  substractProductUnit(existingCartProduct);
};

const substractProductUnit = existingCartProduct => {
  cart = cart.map(product => {
    return product.id === existingCartProduct.id
      ? { ...product, quantity: Number(product.quantity) - 1 }
      : product;
  });
};

const removeProductFromCart = existingCartProduct => {
  cart = cart.filter(product => product.id !== existingCartProduct.id);
  checkCartState();
};

const handlePlusBtnEvent = id => {
  const existingCartProduct = cart.find(item => item.id === id);
  addUnitToProduct(existingCartProduct);
};

const handleQuantity = e => {
  if (e.target.classList.contains('down')) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains('up')) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

const completeBuy = () => {
  completeCartAction('¿Desea completar su compra?', '¡Gracias por tu compra!');
};

const deleteCart = () => {
  completeCartAction('¿Desea borrar todo?', 'No hay productos en el carrito');
};

const init = () => {
  cartBtn.addEventListener('click', toggleCart);
  closeCart.addEventListener('click', toggleCart);
  overlay.addEventListener('click', closeOnOverlayClick);
  window.addEventListener('scroll', closeOnScroll);

  document.addEventListener('DOMContentLoaded', renderCart);
  document.addEventListener('DOMContentLoaded', showTotal)
  document.addEventListener('DOMContentLoaded', showSubTotal);
  divCatego.addEventListener('click', addProduct)
  productsCart.addEventListener('click', handleQuantity);
  buyBtn.addEventListener('click', completeBuy);
  disableBtn(buyBtn);
  renderCartBubble(cart);

}
init();