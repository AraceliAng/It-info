import React, {Component} from 'react';
import {StyleSheet, View, Image,Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import {Content} from 'native-base'
import logo from '../../assets/img/logot.png';
import RecuperaForm from './RecuperaForm';


export default class Registro extends Component{
  render(){
    return(
      <Content
        style={styles.container}
        behavior="padding"
        >
        <StatusBar
          barStyle="light-content"
        />

        <View style={styles.logoContainer}>
        <Text style={styles.title}>Recupera tu contraseña</Text>
        <Image source={logo} style={styles.img}/>

        </View>

        <RecuperaForm/>

      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#d0eceb'

  },
  logoContainer:{
    alignItems: 'center',
    flexGrow:1,
    justifyContent:'center'
  },
  img: {
  height:130,
  width: 100,
  },
  title:{
    color: 'black',
    fontSize:25,
    marginTop:10,
    width:160,
    textAlign:'center',
    opacity:0.9,

  }
});
