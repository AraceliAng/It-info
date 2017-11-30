import React, { Component } from 'react';
import {StyleSheet, StatusBar,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Body,Title,Right,Toast } from 'native-base';
import Mapa from './Mapa';
import {Actions} from 'react-native-router-flux';
import FootBotones from '../barraNavegacion/FootBotones';
import firebase, {firebaseAuth} from '../../firebase/Firebase';


export default class VistaMapa extends Component {
  componentWillMount() {

  var that = this;

  firebaseAuth.onAuthStateChanged(function(user) {
    console.log('user', user)

    if (typeof user !== "undefined" && user !== null) {
      var uid = user.uid;
      console.log(uid)
    }

  });
}

  render() {
    return (
      <Container>

        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <Mapa />
        <FootBotones/>
      </Container>
    );
  }
}
