document.addEventlistener('DOMContentLoaded' , () => {

const productos = [
    { id 1,nombre:'Computador 1', Precio: 2300000 },
    { id 2,nombre:'Computador 2', Precio: 1800000 },
    { id 3,nombre:'Auriculares 3', Precio: 85000 } ,
    { id 4,nombre:'Mouse 1', Precio: 65000 },
    { id 5,nombre:'Mouse 2' , Precio: 45000 },
    { id 6,nombre:'Parlantes 1', Precio: 38000 },
    { id 7,nombre:'Teclado 1', Precio: 25000 },
    { id 8,nombre:`Teclado 2`, Precio: 50000 },
    { id 9,nombre:'USB 1', Precio: 30000 },
    { id 10,nombre:'USB 2', Precio: 30000 }
     ];
     
  const productosContainer = document.getElementById('productos');
  const ListaCarrito = document.getElementById('lista-carrito');
const totalcarritoElement=document.getElementById('total-carrito');
  const btncomprar = document.getElementById('btn-comprar');
  const facturasection = document.getElementById('factura');
   const itmsfacturaDiv = document.getElementById('itms-factura');
const totalfacturaElement=document.getElementById('total-factura');
const btnNuevacompra = document.getElementById('btn-nueva-compra');
const btnVolverCompra=document.getElementById('btn-volver-compra');

let carrito = [];
let totalcarrito = 0;

 // función para agregar un producto al carrito
 fuction agregarAlCarrito(id) {
 const producto-productos.find(p -> p.id --- id);
 if(producto) {
     carrito.push(producto);
     actualizarCarrito();
 }
   }
   
   //función para actualizar la visualización del carrito
   fuction #actualizarCarrito() {
       listaCarrito.innerHTML = '';
       totalCarrito = 0;
       
       carrito.forEach(producto => {
       const li = document.createElement('li');
       li.innerHTML = 
        <span>${producto.nombre}</span>
        <span>${producto.precio.toLocalestring()}</span>
    ';
    listaCarrito.appendchild(li);
    totalCarrito += producto.precio;
    });
    
totalCarritoElement.textContent = 'total:$${totalCarrito.toLocalestring()}';
}
    
    // funcion para mostrar la factura 
    function mostrarFactura() {
        itmsWFacturaDiv.innerHTML = '';
        let totalFactura = 0;
    
   carrito.forEach(producto => {
   const itmDiv = document.createElement(`div`);
     itmsDiv.innerHTML =`
       <span>${producto.nombre}</span>
       <span>${producto.precio.toLocalestring()}</span>
     `;
     itmsFacturaDiv.appendchild(itmDiv);
     totalFactura += producto.precio;
     });
     
totalFacturaElement.textcontent = 'total factura: $${totalfactura.toLocalestring()}';
 facturasection.style.display = 'block';
}     
     
     // funsión para limpiar el carrito
     function limpiarCarrito() {
     carrito = [];
     totalCarrito = 0;
     actualizarCarrito();
     facturaSection.style.display = 'none'; 
}     
         
     // evento para agregar un producto al carrito
     productosContainer.addEventlistener('click',(event) => {
     if(event.target.classList.contains('btn-agregar')) {
     const id = parsenInt(event.target.getAttribute('data id'));
     agregarAlCarrito(id);
   }
   });

    // Evento para comprar y general la factura
    btnComprar.addEventListener('click', () => {
    if(carrito.Length > 0) (
      mostrarFactura();
      } else {
  alert("El carrito está vacio. Por favor, agregue productos antes de comprar.");
        }
 });
      
      // Evento para volver a comprar y limpiar el carrito
   btnNuevaCompra.addEventListener('click',() => {
    limpiarCarrito();
    });
    btnVolverComprar.addEventListener('click', () => {
        limpiarCarrito();
        });
