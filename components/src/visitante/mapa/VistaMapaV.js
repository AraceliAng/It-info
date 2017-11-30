import React, { Component } from 'react';
import {StyleSheet, StatusBar,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Body,Title,Right,Toast } from 'native-base';
import Mapa from './Mapa';
import {Actions} from 'react-native-router-flux';
import FootBotones from '../barraNavegacion/FootBotones';


export default class VistaMapa extends Component {


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
