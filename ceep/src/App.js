import React, { Component }from 'react';
import ListOfNotes from './components/ListOfNotes/ListOfNotes'//Importa a classe criada com os elementos
import FormRegister from "./components/FormRegistro/FormRegister"
import './App.css';
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
