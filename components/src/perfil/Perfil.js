import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Form, Label, List, ListItem, Container, Content, Text, Item, Input, Icon, Left} from 'native-base';
import fondo from '../../assets/img/fondo1.jpeg';
import ContenidoPerfil from './ContenidoPerfil'

class Perfil extends Component {


  render() {
    return (


        <View>
          <View style={styles.view}>
            <Image style={styles.img}
            source={fondo}/>
          </View>
          <ContenidoPerfil lista={this.props.lista}/>



        </View>
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

export default Perfil;
