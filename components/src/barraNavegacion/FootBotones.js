
import React, { Component } from 'react';
import {StyleSheet, StatusBar,TouchableOpacity, View} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text,Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
export default class FooterTabsExample extends Component {
  render() {
    return (

      <Footer >
        <FooterTab >
          <Button vertical>
            <Icon name="apps"  onPress={()=> Actions.News()}/>
            <Text >News</Text>
          </Button>

          <Button vertical onPress={() => Actions.Mapa()}>
            <Icon active name="navigate"  />
            <Text >Map</Text>
          </Button>
          <Button vertical onPress={() => Actions.Perfil()}>
            <Icon name="person"  />
            <Text >Perfil</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
