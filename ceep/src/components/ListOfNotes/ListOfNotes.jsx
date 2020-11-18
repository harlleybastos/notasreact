import React, { Component } from 'react';
import Note from '../Note';
import './style.css';
class ListOfNotes extends Component { /* export para usar a classe no App.js | Default mostra que por padrão esta exportando essa classe*/
    /* Responsável por renderizar o elemento */

    constructor(){
        super();
        this.state = {notas:[]};

        this._novasNotas = this._novasNotas.bind(this);
    }
    componentDidMount(){
        this.props.notes.inscrever(this._novasNotas);
    }

    componentWillUnmount(){
        this.props.notes.desincrever(this._novasNotas);
    }
    _novasNotas(notas){
        this.setState({...this.state,notas});
    }

    render() {      
        return (
            <ul className="lista-notas">
                {this.state.notas.map((note, index) => { //Recebe a propriedade 'notes' que o pai App.js define e mapeia ela
                    return (
                        <li className="lista-notas_item" key={index}>
                            <Note
                            indice={index} // Responsavel por passar o indice para apagar
                            apagarNota={this.props.apagarNota}
                            titulo={note.titulo}
                            texto={note.texto}
                            categoria = {note.categoria} />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ListOfNotes;