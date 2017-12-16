import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Contenido from './Contenido'
export default class CardImageExample extends Component{
  render() {
    return (

        <Content>
          {this.props.lista.map(noti =>
             <Contenido key={noti.id}
                            item={noti}
                            Grande={this.props.Grande}
                            mod={this.props.mod}
                          />
                  )}
        </Content>
    );
  }
}
