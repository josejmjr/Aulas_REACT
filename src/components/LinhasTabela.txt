import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <tbody>
        {this.props.pessoas.map((pessoa, index) => (
          <tr key={index}>
            <td>{pessoa.nome}</td>
            <td>{pessoa.telefone}</td>
            <td>{pessoa.email}</td>
            <td>
              <button
                className="btn btn-danger"
                value={this.props.pessoa}
                onClick={() => this.props.delete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}