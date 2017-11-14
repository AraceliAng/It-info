import React, { Component } from 'react';
import {StyleSheet, StatusBar,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Body,Title,Right,Toast } from 'native-base';
import Mapa from './Mapa';
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
         <Title style={styles.texto}>¿Hacia donde quieres ir?</Title>
       </Body>

      </Header>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <Mapa />
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
            <Button vertical>
              <Icon active name="navigate" style={styles.texto} />
              <Text style={styles.texto}>Map</Text>
            </Button>
            <Button vertical onPress={() => Actions.Perfil()}>
              <Icon name="person" style={styles.texto} />
              <Text style={styles.texto}>Perfil</Text>
            </Button>
            <Button vertical  onPress={this.salir.bind(this)}>
            <Icon name='close' style={styles.texto}/>
           <Text style={styles.texto}>Salir</Text>
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
