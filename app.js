const inventario = new Inventario(); 

const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",()=>{
    let codigo = document.getElementById("txtCodigo").value; 
    let nombre = document.getElementById("txtNombre").value; 
    let cantidad = document.getElementById("txtCantidad").value; 
    let costo = document.getElementById("txtCosto").value; 
    let producto = new Producto(codigo, nombre, cantidad, costo); 
    inventario.agregar(producto);
    document.getElementById("divDetalles").innerHTML += "<p> Se agrego el producto </p>"; 
});

const btnInsertar = document.getElementById("btnInsertar");
btnInsertar.addEventListener("click",()=>{
    let codigo = document.getElementById("txtCodigo").value; 
    let nombre = document.getElementById("txtNombre").value; 
    let cantidad = document.getElementById("txtCantidad").value; 
    let costo = document.getElementById("txtCosto").value; 
    let posicion = document.getElementById("txtPosicion").value; 
    let producto = new Producto(codigo, nombre, cantidad, costo); 
    inventario.insertar(posicion, producto);
    document.getElementById("divDetalles").innerHTML += "<p> Se inserto el producto </p>"; 
});


const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click",()=>{
    let codigo = document.getElementById("txtCodigo").value; 
    let producto = inventario.buscar(codigo);
    if(producto === null)
        document.getElementById("divDetalles").innerHTML += producto;
    else
        document.getElementById("divDetalles").innerHTML += producto.info();
     
});

const btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener("click",()=>{
    let codigo = document.getElementById("txtCodigo").value;
    inventario.eliminar(codigo);  
    document.getElementById("divDetalles").innerHTML += "<p> Se elimino un producto</p>";
    
});

const btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click",()=>{
    document.getElementById("divDetalles").innerHTML +=  inventario.listar();
});

const btnListarInv = document.getElementById("btnListarInv");
btnListarInv.addEventListener("click",()=>{
    document.getElementById("divDetalles").innerHTML +=  inventario.listarInverso();
});