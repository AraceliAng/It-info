import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Bienvenida from '../Bienvenida/Bienvenida';
import Terminos from '../Terminos/Terminos';
import Term from '../Terminos/TermyCond';
import Aviso from '../Terminos/Avisos';
import Login from '../Login/Login';
import Log from '../Login/Log';
import Inicio from '../Inicio/Inicio';
import Registro from '../Login/Registro';
import Recover from '../Login/Recover';
// import Ingresos from '../Ingreso/Ingresos';
// import Gastos from '../Gasto/Gastos';
// import Ahorros from '../Ahorro/Ahorros';
import Perfil from '../Perfil/Perfil';
// import NuevoAhorro from '../Ahorro/NuevoAhorro';
// import Tips from '../Tips/Tips';
// import IngresosIntro from '../FinanzasEmpezar/IngresosIntro';
// import GastosIntro from '../FinanzasEmpezar/GastosIntro';
// import EditarAhorro from '../Ahorro/EditarAhorro';
// import Depositar from '../Ahorro/Depositar';

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Bienvenida" header={null} component={Bienvenida}initial/>
        <Scene key="Login" header={null} component={Terminos}/>
        <Scene key="Reg" header={null} component={Term}/>
        <Scene key="Mapa" header={null} component={Aviso} />
        <Scene key="News" header={null} component={Login}/>
        <Scene key="Perfil" header={null} component={Log} />
        <Scene key="QR" header={null} component={Inicio} />
        <Scene key="Recover" header={null} component={Recover}/>

      </Scene>
    </Router>
    </Root>
  );
}
export default Routes;
