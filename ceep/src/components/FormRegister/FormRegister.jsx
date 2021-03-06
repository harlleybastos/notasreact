import React, { Component } from 'react';
import './styles.css';
class FormRegister extends Component {

    constructor(props) { // Recebendo propriedades passadas no pai App.js , criarNota
        super(props); // Necessário antes de qualquer atributo
        this.titulo = ""; // Declaração de atribuição
        this.texto = "";
        this.categoria = "Sem categoria";
        this.state = { categorias: [] };

        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desincrever(this._novasCategorias);
    }


    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias });
    }
    _handleMudancaCategoria(evento) {
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _handleMudancaTitulo(evento) { // Função que recebe um parametro para o evento que vai ser chamado
        evento.stopPropagation();
        this.titulo = evento.target.value; // Cada vez que esse método for invocado ele atribui um novo valor a esse atributo.
    }

    _handleMudancaTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation(); // Impede a propagação depois de prevenir a ação padrão
        this.props.criarNota(this.titulo, this.texto, this.categoria); // Executa a propriedade que foi passada na hora de construir o elemento
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}>
                <select onChange={this._handleMudancaCategoria.bind(this)}
                    className="form-cadastro_input">
                    <option defaultChecked={true}>Sem Categoria</option>
                    {this.state.categorias.map((item, index) => {
                        return (
                            <option key={index}>{item}</option>
                        );
                    })}
                </select>
                <input type="text"
                    placeholder="Titulo"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)} /> {/*Toda vez que o input rodar ele usa esse método e associa ele a instancia que esta sendo criada*/}
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)} /> {/*Como o JS é dinamico é necessario apontar de onde é o objeto primeiro e o segundo this remete ao método e propriedade que foi criado nessa instancia*/}
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        )
    }
}
export default FormRegister;