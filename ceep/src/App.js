import React, { Component } from 'react';
import ListOfNotes from './components/ListOfNotes/'//Importa a classe criada com os elementos
import FormRegister from "./components/FormRegister/";
import ListOfCategory from './components/ListOfCategory/';
import './assets/App.css';
import './assets/index.css';
import Categorias from './dados/Categorias'
import ArrayDeNotas from './dados/Notas';
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }
  render() {
    return (// Responsável por renderizar o elemento
      <section className="conteudo">
        <FormRegister categorias={this.categorias}
         criarNota={this.notas.adicionarNota.bind(this.notas)} /> {/*Propriedade personalizada chama criarNota quando for invocada e associa ao criarNota  */}
        <main className="conteudo-principal">
          <ListOfCategory
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} />
          <ListOfNotes
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notes={this.notas} />  {/* Recebe propriedade notes que foi criada no constructor e como parametro recebe a propriedade notes que esta dentro de ListOfNotes*/}
        </main>

      </section>
    );
  }
}
export default App;
