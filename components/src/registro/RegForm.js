import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, } from 'react-native';
import { Container, Header, Content, Form, Item, Input,Button, Icon, Spinner,Toast } from 'native-base';
import firebase, {firebaseAuth} from '../../firebase/Firebase';
import {Actions} from 'react-native-router-flux';

export default class LoginForm extends Component{
  state = {
    correo: '',
    password: '',
    verifyPassword: '',
    error: '',
    name:'',
    numero:'',
    carrera:'',
    semestre:'',
    loading: false
  };

  constructor(props) {
    super(props);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailed = this.onLoginFailed.bind(this);
  }
  onButtonPress() {
  const {correo, password, verifyPassword, name, numero, carrera, semestre} = this.state;
  this.setState({error: '', loading: true});

  if (password == verifyPassword && password != null && verifyPassword != null && correo != null && numero != null && carrera != null && semestre !=null && name != null ) {
    console.log(this.state.verifyPassword)
    console.log(this.state.password)
    console.log(this.state.correo)
    firebaseAuth.createUserWithEmailAndPassword(correo, password).then(this.onLoginSuccess).catch(this.onLoginFailed);
  } else {
    Toast.show({
              text: 'Llene los campos correctamente',
              position: 'bottom',
              buttonText: 'OK',
              type: 'danger'
            })
  }
}


  atras() {
  Actions.pop()
  }

  onLoginFailed() {
    this.setState({error: 'Autenticación Fallida', loading:false});
    Toast.show({
              text: 'Registro fallido, verifique campos',
              position: 'bottom',
              buttonText: 'OK',
              type: 'danger'
            })
  }


  onLoginSuccess(user) {
      var uid = user.uid;
      console.log(uid)
    try{
      firebase.database().ref('users/' + uid+"/Datos/").set({
       name: this.state.name,
       correo: this.state.correo,
       numero: this.state.numero,
       carrera: this.state.carrera,
       semestre: this.state.semestre,
     });

      this.setState({correo: '', password: '', error: '', verifyPassword: '', loading: false});

      Actions.Log();
      Toast.show({text: 'Bienvenido', position: 'bottom', duration: 3000, type: 'success'})
    }catch(error){
      console.log(error)
    }

  }

  spinnerInicio() {
  if (this.state.loading) {
    return (
      <Button rounded block style={styles.buttonSpinner}>
        <Spinner color='white'/>
      </Button>
    );
  }
  return (
    <Button full rounded style={styles.buttonContainer} onPress={this.onButtonPress.bind(this)}  >
     <Text style={{color:'#FFFFFF'}}>Registrar</Text>
   </Button>
  );
}
buttonContra() {
  const {verifyPassword, password} = this.state;
  if (verifyPassword == password) {
    return (
      <Item rounded style={styles.input}>
        <Input
           placeholder='Re-password'
           style={styles.texto}
            secureTextEntry={true}
           value={this.state.verifyPassword}
           onChangeText={(verifyPassword) => this.setState({verifyPassword})}
       />
       <Icon name='checkmark-circle' style={styles.icon}/>
      </Item>
    );
  }

  return (
    <Item rounded style={styles.input}>
      <Input
         placeholder='Re-password'
         style={styles.texto}
          secureTextEntry={true}
         value={this.state.verifyPassword}
         onChangeText={(verifyPassword) => this.setState({verifyPassword})}
     />
     <Icon name='close-circle' style={styles.icon}/>
    </Item>
  );
}
  render(){
    return(
      <KeyboardAvoidingView
       behavior="padding">
        <Form style={styles.container}>

           <Item rounded style={styles.input}>
             <Input
                placeholder='Nombre'
                style={styles.texto}
                value={this.state.name}
                onChangeText={name => this.setState({name})}
            />
           </Item>
           <Item rounded style={styles.input}>
             <Input
                placeholder='Correo'
                style={styles.texto}
                keyboardType='email-address'
                value={this.state.correo}
                onChangeText={correo => this.setState({correo})}
            />
           </Item>
           <Item rounded style={styles.input}>
             <Input
                placeholder='Numero de control'
                style={styles.texto}
                value={this.state.numero}
                onChangeText={numero => this.setState({numero})}
            />
           </Item>
           <Item rounded style={styles.input}>
             <Input
                placeholder='Carrera'
                style={styles.texto}
                value={this.state.carrera}
                onChangeText={carrera => this.setState({carrera})}
            />
           </Item>
           <Item rounded style={styles.input}>
             <Input
                placeholder='Semestre'
                style={styles.texto}
                value={this.state.semestre}
                onChangeText={semestre => this.setState({semestre})}
            />
           </Item>
           <Item rounded style={styles.input}>
             <Input
                placeholder='Password'
                style={styles.texto}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={password => this.setState({password})}

            />
           </Item>
           {this.buttonContra()}

           {this.spinnerInicio()}



        </Form>
      </KeyboardAvoidingView>
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
  footerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10
  },
  icon: {
  marginRight: 10
}

});
