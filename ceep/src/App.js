import React, { Component }from 'react';
import ListOfNotes from './components/ListOfNotes/'//Importa a classe criada com os elementos
import FormRegister from "./components/FormRegister/"
import './assets/App.css';
import './assets/index.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: []
    }; // Atribuindo estado natural de notes, vazio no caso
  }


  criarNota(titulo, texto){
    const novaNota = {titulo, texto}; //Criando o objeto que vai pegar os valores de titulo e texto digitados
    const novoArrayNotas = [...this.state.notes, novaNota]; // Pega o estado anterior e adiciona a nova nota criada
    const novoEstado = { //Realizando o novo estado
      notes: novoArrayNotas
    }
    this.setState(novoEstado); // Atribuindo um novo estado e atualizando
  }

  render() {
    return (// Responsável por renderizar o elemento
      <section className="conteudo">
        <FormRegister criarNota={this.criarNota.bind(this)} /> {/*Propriedade personalizada chama criarNota quando for invocada e associa ao criarNota  */}
        <ListOfNotes notes={this.state.notes} />  {/* Recebe propriedade notes que foi criada no constructor e como parametro recebe a propriedade notes que esta dentro de ListOfNotes*/}
      </section>
    );
  }
}
export default App;
