import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Equipo from '../common/equipo/Equipo';
import Jugador from '../common/jugador/Jugador';

// Material
import Button from '@material-ui/core/Button';

// Estilos
import './Liga.css';

// Data
import equiposJSON from '../../assets/data/equipos.json';

class Liga extends Component {

  state = {
    equipos: [],
    jugadores: []
  }

  componentDidMount() {
    let equipos = { ...this.state.equipos };
    equipos = equiposJSON;
    this.setState({ equipos });

    // Consumir API
    fetch('https://api-mi-liga.now.sh/api/jugadores')
      .then((res) => res.json())
      .then(data => {
        this.setState({ jugadores: data })
      });
  }

  render() {
    return (
      <div className="contenedor">
        <h2>Equipos</h2>
        <div className="equipos">
          {this.state.equipos.map((equipo, index) => {
            return (
              <Equipo
                key={index}
                nombre={equipo.nombre}
                logo={require('./../../assets/logos/' + equipo.logo)} />);
          })}

        </div>


        <div className="text-center"><Button variant="contained" component={Link} to="/calendario/felinos" color="secondary">Ir al calendario</Button></div>

        <h2>Jugadores</h2>

        <div className="jugadores">
          {this.state.jugadores.map((jugador, index) => {
            return (
              <Jugador
                key={index}
                nombre={jugador.nombre}
                foto={require('./../../assets/fotos/hugo.png')} />);
          })}
        </div>
      </div>
    );
  }

}

export default Liga;