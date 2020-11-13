import React, { Component }from 'react';
import ListOfNotes from './components/ListOfNotes/'//Importa a classe criada com os elementos
import FormRegister from "./components/FormRegister/"
import './assets/App.css';
import './assets/index.css';
class App extends Component {
  render() {
    return (// Responsável por renderizar o elemento
      <section className="conteudo">
        <FormRegister />
        <ListOfNotes /> {/* Classe que foi importada com o restante do código*/}
      </section>
    );
  }
}
export default App;
