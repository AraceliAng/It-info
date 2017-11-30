import React, { Component } from 'react';
import {StyleSheet, StatusBar,TouchableOpacity,View} from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Body,Title,Right,Left ,Toast} from 'native-base';
import Perfil from './Perfil';
import {Actions} from 'react-native-router-flux';
import {firebaseAuth} from '../../firebase/Firebase';
import FootBotones from '../barraNavegacion/FootBotones';

export default class FooterTabsIconTextExample extends Component {
  constructor(props) {
  super(props);
  this.salir = this.salir.bind(this);
}

salir() {
  firebaseAuth.signOut()
  .then(r=>Toast.show({text: 'Adios \(^_^)/', position: 'bottom', duration: 3000, type: 'success'}))
  Actions.Bienvenida();
}

  render() {

    return (
      <Container>
        <Header>
        <Left>
        <Button transparent onPress={()=> Actions.pop()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
           <Title >Perfil</Title>
         </Body>
         <Right>
         <Button transparent  onPress={this.salir.bind(this)}>
           <Icon name='close'/>
         </Button>
         </Right>
        </Header>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />

        <Perfil />


      </Container>

    );
  }
}
