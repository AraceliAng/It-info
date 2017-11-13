import React, { Component } from 'react';
import {StyleSheet, StatusBar} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Body,Title } from 'native-base';
import Perfil from './Perfil';
import {Actions} from 'react-native-router-flux';


export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.colorH}>
        <Body>
           <Title style={styles.texto}>Perfil</Title>
         </Body>
        </Header>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <Perfil />
        <Footer >
          <FooterTab style={styles.colorH} >
            <Button vertical onPress={() => Actions.News()}>
              <Icon name="apps" style={styles.texto} />
              <Text style={styles.texto}>News</Text>
            </Button>
            <Button vertical >
              <Icon name="camera" style={styles.texto} />
              <Text style={styles.texto}>QR</Text>
            </Button>
            <Button vertical onPress={() => Actions.Mapa()}>
              <Icon active name="navigate" style={styles.texto} />
              <Text style={styles.texto}>Map</Text>
            </Button>
            <Button vertical>
              <Icon name="person" style={styles.texto} />
              <Text style={styles.texto}>Perfil</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  texto:{
    color:'black'
  },
  colorH:{

    backgroundColor:'#DCFFD8'

  },

});
