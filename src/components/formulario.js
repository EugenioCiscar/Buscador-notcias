import React, {Component} from 'react';


class Formulario extends Component {
    state={
        categoria: 'general'
    }

    cambiarCategoria = e =>{
        this.setState({
            categoria : e.target.value
        }, () => {
            //PASARLO A LA PAGINA PRINCIPAL
        this.props.consultarNoticias(this.state.categoria);
        })

     
    }
    render(){
        return(
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Busca noticias por categoría</h2>
                        <div className="input-field col s12">
                            <select
                                onChange={this.cambiarCategoria}
                                >
                                <option value="business">Negocios</option>
                                <option value="entertainment">Ocio</option>
                                <option value="general">General</option>
                                <option value="health">Sanidad</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Formulario;