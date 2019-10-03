import React, {Component, Fragment} from 'react';
import Header from './components/header';
import ListaNoticias from './components/listaNoticias';
import Formulario from './components/formulario';


class App extends Component {
  state={
    noticias:[]
  }

  async componentDidMount(){
   this.consultarNoticias();
  }


    consultarNoticias = async (categoria='general')=>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=f2ce68430aea42a7906964fc84a20f23`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
  
      this.setState({
        noticias : noticias.articles
      })
    }
  

  render(){
    return(
        <Fragment>
          <Header 
            titulo='Noticias React API'
            />
            <div className="container white contenedor-noticias">
              <Formulario
              consultarNoticias={this.consultarNoticias}/>
              <ListaNoticias
              noticias={this.state.noticias}
              />
            </div>
        </Fragment>
    )
  }
}


export default App;
