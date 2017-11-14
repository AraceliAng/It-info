import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Toast, Spinner,Button } from 'native-base';
import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';

import firebase, {firebaseAuth} from '../../firebase/Firebase';

export default class LoginForm extends Component{
  state = {
    email: '',
    contraseña: '',
    error: '',
    credential: '',
    loading: false,
    loadingF: false,
    login:{correo:'', password:''}
  };
  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
  }
  onButtonPress() {
    const {correo, password} = this.state.login;
    this.setState({error: '', loading: true});
    firebaseAuth.signInWithEmailAndPassword(correo, password)
      .then(this.onLoginSuccess)
      .catch(this.onLoginFailed);
  }

  onLoginFailed() {
    this.setState({error: 'Autenticación Fallida', loading: false});
    Toast.show({text: 'Usuario/contraseña inválidos', position: 'bottom', buttonText: 'OK', type: 'danger'})
  }

  onLoginSuccess(r) {
    console.log(r);
    this.setState({email: '', contraseña: '', error: '', loading: false});
    Actions.Log();
    Toast.show({text: 'Bienvenido', position: 'bottom', duration: 5000, type: 'success'})
  }

  spinnerInicio() {
    if (this.state.loading) {
      return (
        <Button rounded block style={styles.buttonSpinner}>
          <Spinner color='white'/>
        </Button>
      );
    }
    return(
      <Button full rounded style={styles.buttonContainer} onPress={this.onButtonPress.bind(this)} >
       <Text style={{color:'#FFFFFF'}}>Iniciar</Text>
     </Button>
    );
  }

  handleChange = (field, value) => {
  const login = this.state.login;
  login[field] = value;
  this.setState({login});
};

  render(){
    return(
      <View >
        <Form style={styles.container}>

           <Item rounded style={styles.input}>
             <Input
                placeholder='Username'
                style={styles.texto}
                name="correo"
                keyboardType='email-address'
                returnKeyType='next'
                value={this.state.correo}
                autoCapitalize='none'
                onChangeText={value=>this.handleChange("correo", value)}
            />
           </Item>
          <Item rounded style={styles.input}>
            <Input
              placeholder='Contraseña'
              style={styles.texto}
              secureTextEntry={true}
              name="password"
              value={this.state.password}
              onChangeText={value=>this.handleChange("password", value)}
            />
          </Item>

            {this.spinnerInicio()}


         <View style={styles.hyper}>
         <TouchableOpacity onPress={() => Actions.Mapa()}>
           <Text style={styles.text}>Entrar como invitado</Text>
         </TouchableOpacity>
            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite"
              onPress={() => Actions.Registro()}>
              <Text style={styles.text1}>Crear Cuenta</Text>
            </Animatable.Text>
            <TouchableOpacity onPress={() => Actions.Recupera()} >
              <Text style={styles.text}>¿Olvidaste tu Contraseña?</Text>
            </TouchableOpacity>

        </View>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  input:{

    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:10,
    paddingHorizontal:10
  },
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15
  },
  texto:{
    color:'black'
  },
  hyper:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop:15,
    marginBottom:15,
  }

});
