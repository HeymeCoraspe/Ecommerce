//CONSTANTES Y VARIABLES GLOBALES

const productosDisponibles=[

{ codigo: 1, nombre: "Manzana", precio: 1500, stock: 100 },
{ codigo: 2, nombre: "Pera", precio: 1100, stock: 100 },
{ codigo: 3, nombre: "Naranja", precio: 1600, stock: 200 },
{ codigo: 4, nombre: "Limón", precio: 1100, stock: 150 },
{ codigo: 5, nombre: "Ananá", precio: 3000, stock: 20 },
{ codigo: 6, nombre: "Ciruelas", precio: 2000, stock: 50 },

];

const carrito=[];

const listadoPoductos= document.getElementById("listadoProductos");
const listadoCarrito= document.getElementById("listadoCarrito");


//FUNCIONES

const mostrarProductos= (productos) =>{

    //.forEach hace una interación (recorre) para cada elemento del array
  productosDisponibles.forEach((producto) => {
        const detalleProducto= ` ${producto.codigo}- ${producto.nombre} Kg: $${producto.precio} stock: (${producto.stock} Kg.)`; //mostramos ordenados los productos
        const nuevoLi= document.createElement("li");
        nuevoLi.classList.add("list-group-item"); //creamos un elemento lista por cada producto del array productosDisponibles
        nuevoLi.innerHTML= detalleProducto;
        listadoPoductos.append(nuevoLi);
    });
   
}

const mostrarCarrito= ()=>{
    if (carrito.length === 0){

        //listadoCarrito.innerHTML="Sin productos";

    } else{

        //actualizar/limpiar el DOM
        let hijo= listadoCarrito.lastElementChild;
            while(hijo){
                listadoCarrito.removeChild(hijo);
                hijo= listadoCarrito.lastElementChild;
            };

        let total=0;

        carrito.forEach((producto) =>{
            const detalleProducto= ` ${producto.cantidad} x ${producto.nombre} ($${producto.subtotal})`; 
            const nuevoLi= document.createElement("li");
    
            nuevoLi.classList.add("list-group-item");
            nuevoLi.innerHTML= detalleProducto;
            listadoCarrito.append(nuevoLi);
            total += producto.subtotal;
    
        })
        const totalCarrito= document.getElementById("totalCarrito");
        totalCarrito.innerHTML= `Carrito: ($ ${total})`;
    }

}

const agragarCarrito= ()=>{
    const limiteProductos= productosDisponibles.length;
    const codigoProducto= document.getElementById("codigoProducto").value;
    const cantidadProducto= document.getElementById("cantidadProducto").value;
  

    if(codigoProducto > 0 && codigoProducto <= limiteProductos){

        const stock= productosDisponibles[codigoProducto -1];
        
        if(cantidadProducto > 0 && cantidadProducto <= stock){
          
            const productoAAgregar={
                nombre: productosDisponibles[codigoProducto -1].nombre,
                precio: productosDisponibles[codigoProducto -1].precio,
                cantidad: cantidadProducto,
                subtotal: cantidadProducto * productosDisponibles[codigoProducto -1].precio,
            };

            carrito.push(productoAAgregar);
            mostrarCarrito();

        } else{
            alert (`La cantidad de producto debe estar entre 1 y ${stock}`);
        }

    } else{
        alert(`El código de producto debe estar entre 1 y ${limiteProductos}`);
    }

}


//EVENTOS






//FLUJO PRINCIPAL
mostrarProductos();
mostrarCarrito();
agragarCarrito();