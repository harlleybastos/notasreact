import React, { Component } from 'react';
import './styles.css';
class FormRegister extends Component {

    constructor() { // Atributos da classe
        super(); // Necessário antes de qualquer atributo
        this.titulo = ""; // Declaração de atribuição
    }

    handleMudancaTitulo(evento){ // Função que recebe um parametro para o evento que vai ser chamado
        this.titulo = evento.target.value; // Cada vez que esse método for invocado ele atribui um novo valor a esse atributo.
        console.log(this.titulo);
    }
    render() {
        return (
            <form className="form-cadastro">
                <input type="text"
                 placeholder="Titulo"
                 className="form-cadastro_input"
                 onChange={this.handleMudancaTitulo.bind(this)}/> {/*Toda vez que o input rodar ele usa esse método e associa ele a instancia que esta sendo criada*/}
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input" />
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        )
    }
}
export default FormRegister;