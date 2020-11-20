let moduloProductos = require('./productos')

let process = require ('process')

let comando = process.argv[2]

switch(comando){
    case 'listar':
        let tareas = moduloProductos.leerJSON()
        if (tareas === 0){
            console.log ('No hay ningun producto')
        } else {
            console.log ('*-----------------*')
            console.log (' Producto y precio ')
            console.log ('*-----------------*')
        }
        for (let i = 0; i < tareas.length; i++ ){
            console.log ('id: ' + tareas[i].id + ' Nombre: ' + tareas[i].name + ' Precio: ' + tareas[i].price)
        }
        break;
    case 'agregar' :
        let id = process.argv[3]
        let name = process.argv[4]
        let price = process.argv[5]

    moduloProductos.agregarJSON(id, name, price)
        
        break;
    case 'filtrar' : 

    let precioMinimo = process.argv[3];
    let precioMaximo = process.argv[4];
    
    if(precioMinimo == undefined){

        console.log("Escriba un precio minimo");

    } else if (precioMaximo == undefined){

        console.log("Escriba un un precio maximo");

    }else{

        let productosFiltrados = moduloProductos.filtrarJSON(precioMinimo, precioMaximo);

        console.log('-----------------------');
        console.log("Sus productos filtrados");
        console.log('-----------------------');
        
        productosFiltrados.forEach(producto => {
            console.log('Producto: ' + producto.name + ' Precio: ' + producto.price)  
        });
    };
    
    break;
    case 'cambiarPrecio':
        
        let id = Number(process.argv[3]);
        let nuevoPrecio = Number(process.argv[4]);    
        
        if(id == undefined || nuevoPrecio == undefined){

            console.log('--------------------------------------------------------------');
            console.log("Tenés que pasar dos parámetros, id(producto) y su nuevo precio");
            console.log('--------------------------------------------------------------');

        }
        
        moduloProductos.cambiarPrecio(id, nuevoPrecio);

        console.log('--------------------------------');
        console.log('Producto modificado correctamente');
        console.log('--------------------------------');
        
        break;

    case 'eliminar':
        
        let deleteId = Number(process.argv[3]);
        
        if(deleteId == undefined){

            console.log('-------------------------------------');
            console.log('Ingresa el id del producto a eliminar');
            console.log('-------------------------------------');

        };

        moduloProductos.eliminar(deleteId);
        
        console.log('--------------------------------');
        console.log('Producto eliminado correctamente');
        console.log('--------------------------------');
        
        break;

    case 'buscar':

        let nombreProducto = process.argv[3];
        let productosBuscados = moduloProductos.buscar(nombreProducto);
        
        if(productosBuscados.length !== 0){
            
            console.log('-------------------------');
            console.log('Resultados de la búsqueda');
            console.log('-------------------------');

        productosBuscados.forEach(producto => {
        console.log('id: '+ producto.id +' Producto: ' + producto.name + ' Precio: ' + producto.price)
        
        });
        }else{

            console.log('----------------------');
            console.log('Producto no encontrado');
            console.log('----------------------');
        }
}