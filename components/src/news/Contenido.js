import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class CardImageExample extends Component{
  constructor(props) {
    super(props);
    console.ignoredYellowBox = true;
    this.state = {
      visibleModal:1,
    };
  }

Hacer = ()=>{
  this.props.Grande(this.props.item)
  this.props.mod(this.state.visibleModal)
}

  render() {
    return (


          <Card  >
          <TouchableOpacity onPress={this.Hacer}>
          <CardItem >
            <Left>
              <Body>
                <Text>{this.props.item.titulo}</Text>
                <Text note>{this.props.item.nota}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody >
            <Image source={{uri:this.props.item.imagen}} style={{height: 200, width: null, flex: 1}}  />
          </CardItem>
          </TouchableOpacity>

            </Card>


    );
  }
}
