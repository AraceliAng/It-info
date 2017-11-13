import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import * as Animatable from 'react-native-animatable';

export default class LoginForm extends Component{
  render(){
    return(
      <View >
        <Form style={styles.container}>

           <Item rounded style={styles.input}>
             <Input
                placeholder='Username'
                style={styles.texto}
            />
           </Item>
          <Item rounded style={styles.input}>
            <Input
              placeholder='Contraseña'
              style={styles.texto}
              secureTextEntry={true}
            />
          </Item>
          <Button full rounded style={styles.buttonContainer}  >
           <Text style={{color:'#FFFFFF'}}>Iniciar</Text>
         </Button>
         <View style={styles.hyper}>
         <TouchableOpacity>
           <Text style={styles.text}>Entrar como invitado</Text>
         </TouchableOpacity>
            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite"
              >
              <Text style={styles.text1}>Crear Cuenta</Text>
            </Animatable.Text>
            <TouchableOpacity>
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
    marginTop:10,
    marginBottom:10,
  }

});
