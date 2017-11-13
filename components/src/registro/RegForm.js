import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';
import { Container, Header, Content, Form, Item, Input,Button } from 'native-base';

export default class LoginForm extends Component{
  render(){
    return(
      <KeyboardAvoidingView
       behavior="padding">
        <Form style={styles.container}>

           <Item rounded style={styles.input}>
             <Input
                placeholder='Nombre'
                style={styles.texto}
            />
           </Item>
           <Item rounded style={styles.input}>
             <Input
                placeholder='Numero de control'
                style={styles.texto}
            />
           </Item><Item rounded style={styles.input}>
             <Input
                placeholder='Correo'
                style={styles.texto}
            />
           </Item>
           <Item rounded style={styles.input}>
             <Input
                placeholder='Numero de control'
                style={styles.texto}
            />
           </Item>
           <Item rounded style={styles.input}>
             <Input
                placeholder='Carrera'
                style={styles.texto}
            />
           </Item>
           <Item rounded style={styles.input}>
             <Input
                placeholder='Semestre'
                style={styles.texto}
            />
           </Item>
           <Item rounded style={styles.input}>
             <Input
                placeholder='Password'
                style={styles.texto}
            />
           </Item>
           <Item rounded style={styles.input}>
             <Input
                placeholder='Re-password'
                style={styles.texto}
            />
           </Item>

          <Button full rounded style={styles.buttonContainer}  >
           <Text style={{color:'#FFFFFF'}}>Registrar</Text>
         </Button>
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
  }

});
