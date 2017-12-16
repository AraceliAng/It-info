import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar,TouchableOpacity,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Contenido from './Contenido'
export default class CardImageExample extends Component{
  render() {
    return (

        <View>
          {this.props.lista.map(item =>
             <Contenido key={item.id}
                            item={item}

                          />
                  )}
        </View>
    );
  }
}
