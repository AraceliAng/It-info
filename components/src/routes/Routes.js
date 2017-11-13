import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Bienvenida from '../bienvenida/Bienvenida';
import Mapa from '../mapa/VistaMapa';
import News from '../news/VistaNews';
import Login from '../login/Login';
//import Log from '../Login/Log';
import Registro from '../registro/Registro';
//import Recover from '../Login/Recover';
import Perfil from '../perfil/VistaPerfil';


const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Bienvenida" header={null} component={Bienvenida}initial/>
        <Scene key="Login" header={null} component={Login}/>
        <Scene key="Registro" header={null} component={Registro}/>
        <Scene key="Mapa" header={null} component={Mapa} />
        <Scene key="News" header={null} component={News}/>
        <Scene key="Perfil" header={null} component={Perfil} />

      </Scene>
    </Router>
    </Root>
  );
}
export default Routes;
