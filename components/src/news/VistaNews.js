import React, { Component } from 'react';
import {StyleSheet, StatusBar,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Body,Title,Right,Toast } from 'native-base';
import News from './News';
import {Actions} from 'react-native-router-flux';
import {firebaseAuth} from '../../firebase/Firebase';

export default class FooterTabsIconTextExample extends Component {
  constructor(props) {
  super(props);
  this.salir = this.salir.bind(this);
}

salir() {
  firebaseAuth.signOut()
  .then(r=>Toast.show({text: 'Adios \(^_^)/', position: 'bottom', duration: 3000, type: 'success'}))
}

  render() {
    return (
      <Container>
        <Header style={styles.colorH}>
        <Body>
           <Title style={styles.texto}>Noticias</Title>
         </Body>
         <Right>
           <TouchableOpacity style={styles.touchMargin} onPress={this.salir.bind(this)}>
            <Icon name='close' style={styles.icon3}/>
           </TouchableOpacity>
         </Right>
        </Header>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <News />
        <Footer >
          <FooterTab style={styles.colorH} >
            <Button vertical>
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
            <Button vertical onPress={() => Actions.Perfil()}>
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
    backgroundColor: '#d0eceb'

  },

});
