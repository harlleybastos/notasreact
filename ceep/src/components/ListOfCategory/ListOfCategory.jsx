import React, { Component } from 'react';
import './styles.css';

class ListOfCategory extends Component {

    constructor(){
        super();
        this.state = {categorias : []}

        this._novasCategorias = this._novasCategorias.bind(this);
    }
    
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.desincrever(this._novasCategorias);
    }
    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }

    

    _handlerEventoInput(evento){
        if(evento.key === "Enter"){
            let valorCategoria = evento.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
            {this.state.categorias.map((category, index) =>{
                return <li key={index} className="lista-categorias_item">{category}</li>
            })}
                </ul>
                <input type='text'
                className="lista-categorias_input"
                placeholder="Adicionar Categoria"
                onKeyUp={this._handlerEventoInput.bind(this)} />
            </section>
        );
    }
}

export default ListOfCategory;