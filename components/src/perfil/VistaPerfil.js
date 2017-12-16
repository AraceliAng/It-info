import React, { Component } from 'react';
import {StyleSheet, StatusBar,TouchableOpacity,View} from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Body,Title,Right,Left ,Toast} from 'native-base';
import Perfil from './Perfil';
import {Actions} from 'react-native-router-flux';
import firebase,{firebaseAuth} from '../../firebase/Firebase';
import FootBotones from '../barraNavegacion/FootBotones';

export default class FooterTabsIconTextExample extends Component {
  constructor(props) {
  super(props);
  this.salir = this.salir.bind(this);
  this.state = {
      nuevo: '',
      lista: [],
  }

}

salir() {
  firebaseAuth.signOut()
  .then(r=>Toast.show({text: 'Adios \(^_^)/', position: 'bottom', duration: 3000, type: 'success'}))
  Actions.Bienvenida();
}


  listenForItems = (itemsRef) => {
  itemsRef.on('value', (snap) => {

    // get children as an array
    var lista = [];
    snap.forEach((child) => {
      lista.push({
        name: child.val().name,
        correo: child.val().correo,
        numero: child.val().numero,
        semestre:child.val().semestre,
        key: child.key

      });
    });


    this.setState({
      lista: lista
    });

  });
}

  componentDidMount() {
    var that = this;
    firebaseAuth.onAuthStateChanged(function(user) {
      console.log('user', user)
      if (user) {
        var uid = user.uid;
        var key = user.key;
      }
      console.log(uid)
      console.log(key)
      const itemsRef = firebase.database().ref('users/' + uid + '/');
      that.listenForItems(itemsRef);
    });

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

        <Perfil lista={this.state.lista} />



      </Container>

    );
  }
}
