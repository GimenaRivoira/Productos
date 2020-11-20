let fs = require ('fs')

module.exports = moduloProductos = {
    archivo : './productos.json',
    leerJSON : function(){
        let listaProductos = fs.readFileSync(this.archivo, 'utf-8')
        return JSON.parse(listaProductos)
    },
    agregarJSON : function(id, name, price){
        let nuevoProducto = {
            id : id,
            name : name,
            price : price
    }
    let tareasAnteriores = this.leerJSON()
    tareasAnteriores.push(nuevoProducto)
    console.log (tareasAnteriores)
},
    filtrarJSON : function (precioMinimo, precioMaximo){
        let listaDeProductos =  moduloProductos.leerJSON();

        let listaFiltrada = listaDeProductos.filter(producto=>{
           return producto.price >= precioMinimo && producto.price <= precioMaximo
        })
         return listaFiltrada
    },
    cambiarPrecio: (id, nuevoPrecio)=>{

        let listaDeProductos = moduloProductos.leerJSON();

        let productoAModificar = listaDeProductos.filter((producto)=>{ 
            if(producto.id == id){ 
            producto.price = nuevoPrecio 
            }; 
            return listaDeProductos 
        })

        let productoModificado = JSON.stringify(productoAModificar); 
        fs.writeFileSync('./productos.json', productoModificado, 'utf-8') 
    },
    eliminar : (id)=>{ 

        let listaDeProductos = moduloProductos.leerJSON(); 
        let quitarProducto = listaDeProductos.filter(producto =>{ 
            return producto.id !== id 
        })
        
        let nuevaLista = JSON.stringify(quitarProducto);
        fs.writeFileSync('./productos.json', nuevaLista, 'utf-8') 
    },
    buscar : (busqueda)=>{ 
        let listaDeProductos = moduloProductos.leerJSON();

        let productoBuscado = listaDeProductos.filter(producto => {
            return producto.name.toLowerCase().includes(busqueda.toLowerCase())
        })
        return productoBuscado
    }
}