import React,{Component} from 'react';
import './nuevos.css'

class Nuevos extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){ 
        event.preventDefault();
        console.log(this.refs.nombre.value);
        if(this.refs.nombre.value != null && this.refs.apellido.value != null && this.refs.telefono.value != null){
            fetch('http://www.raydelto.org/agenda.php',{
                method: 'POST',
                body: JSON.stringify({nombre:this.refs.nombre.value,apellido:this.refs.apellido.value,telefono: this.refs.telefono.value})
                }).then( res => res.json())
                .then(data => {
                    console.log(data)
                    if(data === 'error'){
                        alert('error al enviar los datos')
                    }
                    else{
                        alert('datos enviados')
                    }
                })  
        }
       
   };
    

    render(){
        return(
            
                <div className="d-flex flex-wrap justify-content-center flex-column">
                <h2 className="p-2 text-white font-weight-bold blockquote primaryText align-content-start">Nuevos Contactos</h2>
      
                <form className="form" onSubmit={this.handleSubmit}>
                <h5 className="text-secondary font-weight-bold " style={{marginBottom:'30px'}}>Datos del contacto</h5>
                    
                <div className="container" >
                  <div className="row">
                    <div className="col">
                    <div className="input-group margenes">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Nombre</span>
                        </div>
                        <input type="text" name="name" ref="nombre" className="form-control"/>
                    </div>  
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                    <div className="input-group margenes">
                        <div className="input-group-prepend ">
                        <span className="input-group-text">Apellido</span>
                        </div>
                        <input type="text" name="lastname" ref="apellido" className="form-control"/>
                    </div>  
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                    <div className="input-group margenes">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Telefono</span>
                        </div>
                        <input type="text" name="phone" ref="telefono" className="form-control"/>
                    </div>  
                    </div>
                  </div>
                
                  <div className="row">
                    <div className="col">
                    <input type="Submit" id="submit" value="Enviar" className="btn btn-primary margenes" />
                    </div>
                   
                  </div>
                </div>  
                </form> 
                </div>   
            
        )
    }
}

export default Nuevos;