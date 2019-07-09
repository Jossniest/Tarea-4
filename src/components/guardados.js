import React, {Component} from 'react';

import foto from './Contacto.png';
import './guardados.css'

class Saved extends Component{
    constructor(){
        super();
        this.state = {
            contactos: [],
            loading: false,
            url: "http://www.raydelto.org/agenda.php",
            largo: 0
        }


    }
    componentDidMount(){
        this.getContactList();
        
    }
    getContactList = () => {
        this.setState({loading:true})
        fetch(this.state.url)
        .then((response) => {
            return response.json();
        }).then((response) => {
            this.setState({
                contactos: response,
                loading: false
            });
        })
    }
    
    render(){
       if(this.state.loading){
           return(
            <div>
                <p>Cargando Contactos...</p>
            </div>
           );
        } 
       
        const contact = this.state.contactos.map((contacto, i) => {
            
            return(
                <div className="col-md-4">
                  
                <div className="card mt-4 ">
                    <div className="card-body saved">
                        <img className="img-thumbnail saved-img"  src={foto} alt="contacto-foto"></img>
                        <h5 className="card-title">{contacto.nombre} {contacto.apellido}</h5>
                        <p className="card-text">
                        {contacto.telefono}
                        </p>
                    </div>
                </div>
                
                </div>
            )
        });    
        
       return(
           <div className="container">
               <div className="row mt-4">
  
                {contact}
               </div>
               
           </div>
       )
    }
}
export default Saved;