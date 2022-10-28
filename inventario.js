class Inventario{

    constructor(){
        this.primero = null; 
        this.ultimo = null; 
    }

    agregar(producto, codigo)
    {
        if (this.primero === null)
        {
            this.primero = producto;
            this.ultimo = producto; 
        }
        else{
            let temp = this.primero;

            if(codigo < this.primero.codigo)
            {
                producto.sig = this.primero; 
                this.primero = producto; 
            }
            else
            {
                while (temp !== null)
                { 
                    console.log(temp.codigo);
                    if(temp.codigo < codigo && temp.sig === null)
                    {
                        this.ultimo.sig = producto; 
                        producto.ant = this.ultimo; 
                        this.ultimo = producto;
                    }
                    else if (temp.codigo < codigo && temp.sig.codigo > codigo)
                    {
                        producto.sig = temp.sig; 
                        temp.sig.ant = producto; 
                        temp.sig = producto; 
                        producto.ant = temp; 
                    }
                    temp = temp.sig;
                }
            }
            
            
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
            temp = temp.sig;
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

 













