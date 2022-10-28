class Inventario{

    constructor(){
        this.primero = null; 
    }

    agregar(producto)
    {
        if (this.primero === null)
        {
            this.primero = producto;
        }
        else{
            let temp = this.primero;
            while (temp.next !== null)
            { 
                temp = temp.next;

            }
            temp.next = producto;
        }
    }

    insertar(posicion, producto)
    {
       let pos = parseInt(posicion);
        
        if ( pos === 1)
        {
            producto.next = this.primero; 
            this.primero = producto; 
        }
        else
        {
            let aux = this.primero;
            let anterior;

            for(let i = 0 ; i < pos-1; i++)
            {
                anterior = aux; 
                aux = aux.next;
            }

            anterior.next = producto; 
            producto.next = aux; 
        }  
    }
        

    buscar(codigo)
    {
        let temp = this.primero;
    
        while (temp !== null)
        { 
            if(temp.codigo === codigo)
            {
                return temp; 
            }
            temp = temp.next;
        }
        return null; 
    }

    eliminar(codigo) 
    {
        if (codigo === this.primero.codigo) 
        {
            this.primero = this.primero.next; 
        }
        else
        {
            let temp = this.primero; 
            while (temp !== null) 
            { 
                if(temp.next !== null)
                {
                    if(temp.next.codigo === codigo)
                        temp.next = temp.next.next; 
                }
                
                temp = temp.next; 
            }
        }

    }

    listar()
    {
        let listaProductos = ''; 
        let temp = this.primero;

        while(temp !== null){
            listaProductos += temp.info();
            temp = temp.next;
        }  

        return listaProductos; 
    }

    listarInverso()
    {
        let listaInverso = ''; 
        let temp = this.primero;

        while(temp !== null){
            listaInverso =  temp.info() +" "+ listaInverso;
            temp = temp.next;
        }  

        return listaInverso; 
    }
}

 













