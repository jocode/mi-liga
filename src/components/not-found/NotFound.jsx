import React from 'react';
import { Link } from 'react-router-dom';

//Estilos
import './NotFound.css'

// Material
import Button from '@material-ui/core/Button';

const NotFound = () => (
  <div className="error">
    <h1 className="text-center">Página no encontrada</h1>
    <h2 className="e404">Error 404</h2>
    <Button component={Link} to="/">
      Ir al inicio
    </Button>
  </div>
);

export default NotFound;