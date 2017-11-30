
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
            <Icon name="apps"  onPress={()=> Actions.Info()}/>
            <Text >Info</Text>
          </Button>
          <Button vertical onPress={() => Actions.MapaV()}>
            <Icon active name="navigate"  />
            <Text >Map</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
