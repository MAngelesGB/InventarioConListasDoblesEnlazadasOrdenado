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
            temp = temp.sig;
        }
        return null; 
    }

    eliminar(codigo) 
    {
        if (codigo === this.primero.codigo) 
        {
            this.primero = this.primero.sig; 
        }
        else
        {
            let temp = this.primero; 
            while (temp !== null) 
            { 
                if(temp.sig !== null)
                {
                    if(temp.sig.codigo === codigo && temp.sig.sig === null)
                    {
                        temp.sig = null; 
                    }
                    else if(temp.sig.codigo === codigo)
                    {
                        temp.sig.sig.ant = temp; 
                        temp.sig = temp.sig.sig; 
                    } 
                }
                temp = temp.sig; 
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
            temp = temp.sig;
        }  

        return listaInverso; 
    }
}

 













