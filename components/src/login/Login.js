import React, {Component} from 'react';
import {StyleSheet, View, Image,Text, StatusBar, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import logo from '../../assets/img/logot.png';
import LoginForm from './LoginForm';


export default class Login extends Component{
  render(){
    return(
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Es una aplicacion para ti</Text>
          <Image source={logo} style={styles.img}/>
        </View>

          <LoginForm/>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#DCFFD8'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow:1,
    justifyContent:'center'
  },
  img: {
  height:230,
  width: 200,
  },
  title:{
    color: 'black',
    marginTop:10,
    width:160,
    textAlign:'center',
    opacity:0.9,
    fontSize:20,
  }
});
