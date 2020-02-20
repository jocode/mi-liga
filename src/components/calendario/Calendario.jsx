import React, { Component } from 'react';

// Componentes
import Juego from '../common/juego/Juego'

// Estilos
import './Calendario.css';

class Calendario extends Component {

  render() {
    return (
      <div className="calendario">
        <h3>Equipo {this.props.match.params.equipo}</h3>
        <Juego
          localNombre="Felinos"
          localLogo="logotipo"
          localAnotaciones="2"
          visitanteNombre="piratas"
          visitanteLogo="adja"
          visitanteAnotaciones="1"
          estadio="Estadio Olímpico"
          fecha="20-Abril-2018"
          hora="8:00 pm" />
        <Juego
          localNombre="Felinos"
          localLogo="logotipo"
          localAnotaciones="2"
          visitanteNombre="piratas"
          visitanteLogo="adja"
          visitanteAnotaciones="1"
          estadio="Estadio Olímpico"
          fecha="20-Abril-2018"
          hora="8:00 pm" />
        <Juego
          localNombre="Felinos"
          localLogo="logotipo"
          localAnotaciones="2"
          visitanteNombre="piratas"
          visitanteLogo="adja"
          visitanteAnotaciones="1"
          estadio="Estadio Olímpico"
          fecha="20-Abril-2018"
          hora="8:00 pm" />
      </div>
    );
  }

}

export default Calendario;