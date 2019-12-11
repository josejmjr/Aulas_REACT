import React, { Component } from "react";
import InputComStyle from "./components/InputComStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LabelFormulario from "./components/LabelFormulario";
import LinhasTabela from "./components/LinhasTabela";

//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      telefone: "",
      pessoas: []
    };
  }

  delete = indexRemover => {
    this.setState({
      pessoas: this.state.pessoas.filter(
        (pessoa, index) => indexRemover !== index
      )
    });
  };

  renderTitulo() {
    return <h1>Cadastro de Usuários</h1>;
  }

  renderFormulario() {
    return (
      <form onSubmit={this.cadastrarUsuario}>
        <InputComStyle
          titulo="Nome"
          tipo="text"
          valor={this.state.nome}
          atualizarValor={e => this.setState({ nome: e.target.value })}
        />
        <InputComStyle
          titulo="Telefone"
          tipo="text"
          valor={this.state.telefone}
          atualizarValor={e => this.setState({ telefone: e.target.value })}
        />
        <InputComStyle titulo="E-mail" tipo="email" valor={this.state.email} atualizarValor={e => this.setState({ email: e.target.value })}/>

        <input className="btn btn-primary" type="submit" />
      </form>
    );
  }

  renderTabela() {
    return (
      <table className="table table-dark">
      
        <LabelFormulario />
        
        < LinhasTabela pessoas={this.state.pessoas}
        pessoa={this.state.pessoa}
        delete={this.delete}
        
         />
      </table>
    );
  }

  render() {
    return (
      <>
        {this.renderTitulo()}
        {this.renderFormulario()}
        {this.renderTabela()}
      </>
    );
  }

  cadastrarUsuario = evento => {
    evento.preventDefault();
    console.log(evento.target)
    if(this.state.nome != '' && this.state.telefone != '' && this.state.email != ''){
    this.setState({
      pessoas: [
        ...this.state.pessoas,
        {
          nome: this.state.nome,
          telefone: this.state.telefone,
          email: this.state.email
        }
      ],
      nome: "",
      email: "",
      telefone: ""
    });

    console.log(this.state.nome);
  };
}
}