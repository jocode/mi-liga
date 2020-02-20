import React from 'react';
import Icon from '@material-ui/core/Icon';

import './Equipo.css';

class Equipo extends React.Component {

  // La variable state, corresponde a React
  state = {
    fav: { value: 'star' }
  }

  setFav() {
    console.log('Favorito :D');

    // 1. Respaldamos el estadp existente
    const fav = { ...this.state.fav };

    // 2. Modificamos el valor
    fav.value = fav.value === 'star' ? 'star_selected' : 'star';

    // 3. Recargamos el estado
    this.setState({ fav });
  }

  // Este método escucha cada vez que el componente recibe una actualización
  componentDidUpdate() {
    /* console.log(this.props);
    console.log(this.state.fav); */

    // LocalStorage.setItem(clave, valor)
    localStorage.setItem(this.props.nombre, JSON.stringify(this.state.fav));
  }

  // Recuperación de datos
  componentDidMount() {

    const localFavs = localStorage.getItem(this.props.nombre);

    if (localFavs) {
      this.setState({
        fav: JSON.parse(localFavs),
      });
    }
  }

  render() {
    return (
      <div>
        <img className={"team-logo"} src={this.props.logo} alt={this.props.nombre} />
        <Icon onClick={this.setFav.bind(this)} className={this.state.fav.value}>star_rate</Icon>
      </div>
    );
  }
}

export default Equipo;