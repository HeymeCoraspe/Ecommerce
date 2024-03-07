//CONSTANTES Y VARIABLES GLOBALES

const productosDisponibles=[

{ codigo: 1, nombre: "Manzana", precio: 1500, stock: 100 },
{ codigo: 2, nombre: "Pera", precio: 1100, stock: 100 },
{ codigo: 3, nombre: "Naranja", precio: 1600, stock: 200 },
{ codigo: 4, nombre: "Limón", precio: 1100, stock: 150 },
{ codigo: 5, nombre: "Ananá", precio: 3000, stock: 20 },
{ codigo: 6, nombre: "Ciruelas", precio: 2000, stock: 50 },

];


//FUNCIONES

const mostrarProductos= (productos) =>{

    //.forEach hace una interación (recorre) para cada elemento del array
  productosDisponibles.forEach(producto => {
        const detalleProducto= ` ${producto.codigo}- ${producto.nombre} Kg: $${producto.precio} stock: (${producto.stock} Kg.)`; //mostramos ordenados los productos
        console.log(detalleProducto);
    });
   
}

const procesarCompra= (productos)=>{

    let codigo, cantidad, carrito=[];
    const codigoLimite=productos.length;


    do{
        codigo= parseInt(prompt("Ingrese código del producto: ")); //parseInt convierte a entero porque promtp devuelve string
        
        if(codigo > 0 && codigo<= codigoLimite){

            const stock= productos[codigo -1].stock;

            cantidad= parseInt(prompt("Ingrese la cantidad: "));

            if(cantidad > 0 && cantidad <= stock ){ //accediento al stock por medio del código

                const nombre= productos[codigo -1].nombre;
                const precio= productos[codigo -1].precio;

                const productoAgregado= {
                    nombre: nombre, 
                    cantidad: cantidad,
                    subtotal: precio*cantidad,
                };

                carrito.push(productoAgregado);

            } else{
                alert(`Cantidad debe ser positiva y menor o igual a ${stock}`);
            }

        }else if(codigo !== 0){
            alert(`El código debe ser positivo y menor o igual a ${codigoLimite}`);
        }

    } while(codigo !== 0);

    return carrito;

}

const mostrarCarrito= (carrito) =>{

    let total=0;

    carrito.forEach(producto => {
        const detalleProducto= ` ${producto.nombre} X ${producto.cantidad} Kg = $${producto.subtotal}`; 
        total+=producto.subtotal;
        console.log(detalleProducto);
    });

   console.log(`Total general: $${total}`);
}



//FLUJO PRINCIPAL
console.log("Carrito de compras");
mostrarProductos(productosDisponibles);
console.log("Presione cero (0) para finalizar");
const carritoActual= procesarCompra(productosDisponibles);
console.log("-----------------------------------------------------------------")
console.log("Tu carrito:");
mostrarCarrito(carritoActual);