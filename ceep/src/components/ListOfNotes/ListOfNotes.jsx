import React, { Component } from 'react';
import Note from '../Note';
import './style.css';
class ListOfNotes extends Component { /* export para usar a classe no App.js | Default mostra que por padrão esta exportando essa classe*/
    /* Responsável por renderizar o elemento */


    render() {      
        return (
            <ul className="lista-notas">
                {this.props.notes.map((note, index) => { //Recebe a propriedade 'notes' que o pai App.js define e mapeia ela
                    return (
                        <li className="lista-notas_item" key={index}>
                            <Note titulo={note.titulo} texto={note.texto} />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ListOfNotes;