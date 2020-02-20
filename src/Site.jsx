import React, { Fragment } from 'react';


// Components
import Header from './components/common/header/Header';
import Router from './Router';

const Site = () => (
  <Fragment >
    <Header />
    <div className="contenedor" >
      <Router />
    </div>
  </Fragment>
);

export default Site;