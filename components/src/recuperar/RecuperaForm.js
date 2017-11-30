import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
//import firebase, {firebaseAuth} from '../../firebase/Firebase';
import {Button, Icon, Item, Input, Spinner, Toast} from 'native-base';
import {Actions} from 'react-native-router-flux';

class Recover extends Component {
  state = {
    correo: '',
    verifyCorreo: '',
    error: '',
    loading: false
  };

/*
  constructor(props) {
    super(props);
    this.recover = this.recover.bind(this);
  }



  recover() {
    const {correo, verifyCorreo} = this.state;
    this.setState({error: '', loading: true});
    if (correo == verifyCorreo && correo != null && verifyCorreo != null) {
      firebaseAuth.sendPasswordResetEmail(correo).then(function() {
        Actions.Login()
        Toast.show({text: 'Revisa tu correo, continua los pasos', position: 'bottom', buttonText: 'OK', type: 'success'})
      }, function(error) {
        Toast.show({text: 'Correo inválido, verifique campos', position: 'bottom', buttonText: 'OK', type: 'danger'})
      });
    }
  }
*/
  buttonCorreo() {
    const {verifyCorreo, correo} = this.state;
    if (verifyCorreo == correo) {
      return (
        <Item rounded success style={styles.inputRounded}>
          <Input style={styles.input} placeholder='Verificar correo' keyboardType='email-address'
            placeholderTextColor='#ccc' value={this.state.verifyCorreo}
            onChangeText={(verifyCorreo) => this.setState({verifyCorreo})}/>
          <Icon name='checkmark-circle' style={styles.icon}/>
        </Item>
      );
    }

    return (
      <Item rounded error style={styles.inputRounded}>
        <Input style={styles.input} placeholder='Verificar correo' keyboardType='email-address'
          placeholderTextColor='#ccc' value={this.state.verifyCorreo}
          onChangeText={(verifyCorreo) => this.setState({verifyCorreo})}/>
        <Icon name='close-circle' style={styles.icon}/>
      </Item>
    );
  }

  render() {
    return (
      <View>

        <View>
        <Item rounded style={styles.inputRounded}>
          <Input style={styles.input} placeholder='Correo electrónico' keyboardType='email-address'
            placeholderTextColor='#ccc' returnKeyType='next' value={this.state.correo}
            onChangeText={correo => this.setState({correo})}/>
        </Item>

        {this.buttonCorreo()}

        <Button rounded block style={styles.buttonStyle}>
          <Text style={styles.text}>ENVIAR CONTRASEÑA</Text>
        </Button>

        <View style={styles.footerStyle}>
          <TouchableOpacity onPress={Actions.push()} >
            <Text style={styles.ingresar}>¿Ya tienes cuenta?, INGRESA</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'

  },
  buttonSpinner: {
    marginRight: 140,
    marginLeft: 140,
    marginBottom: 10,
    backgroundColor: '#4DA49B'
  },
  iconStyle: {
    fontSize: 100,
    color: '#f08080',
    alignSelf: 'center'
  },
  regisTex: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 10
  },
  inputStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    borderColor: '#f08080'
  },
  buttonStyle: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 10,
    backgroundColor:'#2980b9',
  },
  texto: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: 'transparent'
  },
  footerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10
  },
  font: {
    fontWeight: 'bold',
    color: 'white'
  },
  inputRounded: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1.5,
    backgroundColor: 'white'
  },
  input: {
    color: 'black'
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  ingresar: {
    color: 'white',
    backgroundColor: 'transparent'
  },
  imagen: {
    width: 180,
    height: 62,
    alignSelf: 'center'
  },
  icon: {
    marginRight: 10
  }
})

export default Recover;
