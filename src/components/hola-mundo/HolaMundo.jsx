// Importaciones
import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

// Estilos
import './HolaMundo.css'


class HolaMundo extends React.Component {

  render() {
    return (
      <Fragment>
        <CssBaseline />
        {/* Asi se hacen los comentarioos en JSX */}
        <h2>Hola {this.props.name}</h2>
        <p>{this.props.age}</p>
        <p className={this.props.tipo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat eum vel veritatis blanditiis! Officiis consequuntur in deleniti ex sequi quos officia odit nihil provident, pariatur vero odio ipsam incidunt!</p>
        <Button variant="contained" color="secondary">
          Primary
</Button>
      </Fragment>
    );
  }
}

export default HolaMundo;