import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  }
}));


export default function Jugador(props) {

  const classes = useStyles();

  return (
    <Card className={`${classes.card} text-center`} >
      <h3 >{props.nombre}</h3>
      <CardMedia className={classes.media}
        image={props.foto}
        title={props.nombre}
      />
    </Card>
  );
};
