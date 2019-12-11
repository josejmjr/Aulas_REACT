import React, { Component } from "react";

export default class LabelFormulario extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>E-mail</th>
        </tr>
      </thead>
    );
  }
}