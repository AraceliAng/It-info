import React, { Component } from 'react';
import {StyleSheet, StatusBar,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Body,Title,Right,Toast } from 'native-base';
import News from './News';
import {Actions} from 'react-native-router-flux';
import FootBotones from '../barraNavegacion/FootBotones'

export default class FooterTabsIconTextExample extends Component {

  render() {
    return (
      <Container>
        <Header>
        <Body>
           <Title >Informacion</Title>
         </Body>
        </Header>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <News />
        <FootBotones/>
      </Container>
    );
  }
}
