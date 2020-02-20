import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import './Juego.css';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  }
}));

export default function Juego(props) {
  const classes = useStyles();

  return (
    <div className="container">
      <Card className={`${classes.card} text-center`} >
        <h3 >Local</h3>
        <span className="equipo">{props.localNombre}</span>
        <CardMedia className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/an/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png"
          title="Contemplative Reptile"
        />

      </Card>

      <p>{props.fecha}<br /><span>{props.hora}</span></p>

      <Card className={`${classes.card} text-center`}>
        <h3 className="text-center">Visitante</h3>
        <span className="equipo">{props.visitanteNombre}</span>
        <CardMedia className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/an/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png"
          title="Contemplative Reptile"
        />
      </Card>
    </div>
  )
};