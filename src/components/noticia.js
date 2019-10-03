import React from 'react';

const Noticia = ({noticia})=>{

    //EXTRAER LOS DATOS
    const {urlToImage, url, title, description, source} = noticia;

    //CONDICIONAL PARA CARGAR IMAGEN SI TIENE O NO MOSTRAR SI NO HAY IMAGEN

    const imagen = (noticia) ? 
            <div className="card-image">
                <img src={urlToImage} alt={title}/>
                <span>{source.name}</span>
            </div>
      : null;
  
    return(
       <div className="col s12 m6 l4">
           <div className="card">
               {imagen}
               <div className="card-content">
                   <h3>{title}</h3>
                   <p>{description}</p>
               </div>

               <div className="card-action">
                   <a href={url} target="blank" rel="noopener noreferrer" className="waves-effect waves-light btn">
                       Ver Noticia Completa
                   </a>
               </div>
           </div>
       </div>
    );
}

export default Noticia;