import React, { Component } from 'react';
import './styles.css';
class FormRegister extends Component {
    render() {
        return (
            <form className="form-cadastro">
                <input type="text" placeholder="Titulo" className="form-cadastro_input"/>
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