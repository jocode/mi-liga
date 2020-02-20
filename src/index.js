import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Site from './Site';

import './index.css'; // Importación de CSS


ReactDOM.render(< Site name="Johan"
  age="21"
  tipo="nota" />, document.getElementById('root'));
serviceWorker.register();