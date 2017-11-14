import React, {Component} from 'react';
import {StyleSheet, View, Image,Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import {Content} from 'native-base'
import logo from '../../assets/img/logot.png';
import RegForm from './RegForm';


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
        <Image source={logo} style={styles.img}/>
        <Text style={styles.title}>Registro</Text>
        </View>

        <RegForm/>


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
    fontSize:30,
    marginTop:10,
    width:160,
    textAlign:'center',
    opacity:0.9,

  }
});
