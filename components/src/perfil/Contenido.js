import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,List, ListItem, Input } from 'native-base';

export default class CardImageExample extends Component{


  render() {
    return (

      <List >
        <ListItem itemDivider>
          <Text>Info</Text>
        </ListItem>

        <ListItem last style={styles.tamaño} >
        <Left>
         <Text>Nombre</Text>
       </Left>
       <Text style={styles.texto} >{this.props.item.name}</Text>
        </ListItem>

        <ListItem last style={styles.tamaño}>
         <Left>
            <Text>Correo</Text>
         </Left>
          <Input style={styles.texto} disabled value={this.props.item.correo} placeholder='dylan@prueba.com'/>
        </ListItem>

        <ListItem last style={styles.tamaño}>
         <Left>
            <Text>No control</Text>
         </Left>
          <Input style={styles.texto} value={this.props.item.numero} disabled placeholder='14200197'/>
        </ListItem>

        <ListItem last style={styles.tamaño}>
         <Left>
            <Text>Carrera</Text>
         </Left>
          <Input style={styles.texto} value={this.props.item.carrera} disabled placeholder='Tics'/>
        </ListItem>
        <ListItem last style={styles.tamaño}>
         <Left>
            <Text>Semestre</Text>
         </Left>
          <Input style={styles.texto} value={this.props.item.semestre}  placeholder='10°'/>
        </ListItem>

      </List>


    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgb(0,0,0)',
    opacity: 0.6
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  },
  texto:{
    textAlign:'right'
  },
  tamaño:{
    height:47,
  }
})
