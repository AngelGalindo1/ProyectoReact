import React from "react";
import './autos.css';
import miImagen1 from '../../assets/img/Mclaren.jpg'
const AutosB = () => {


    return(
      <div className="galeria">
            <div className="galeria-item">
             <img src={miImagen1} alt="Descripción de la imagen" className="Mclaren" />
             <div className="text-container">
                 <p>Tenemos los mejores autos del mundo</p>
             </div>
            </div>
      </div>
     

    )

}
    

export default AutosB;