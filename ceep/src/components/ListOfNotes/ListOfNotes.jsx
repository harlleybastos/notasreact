import React, { Component } from 'react';
import Note from '../Note/Note';
import './style.css';
class ListOfNotes extends Component { /* export para usar a classe no App.js | Default mostra que por padrão esta exportando essa classe*/
    /* Responsável por renderizar o elemento */
    render() {      
        return (
            <ul className="lista-notas">
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <Note />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ListOfNotes;