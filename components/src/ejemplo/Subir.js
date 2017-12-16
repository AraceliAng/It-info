import firebase, {firebaseAuth}  from '../../firebase/Firebase';

//import * as firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text, StyleSheet, AlertIOS } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input, Item } from 'native-base';
import ListComponent from './Listcomponent';

class App extends Component {
  constructor(){
        super();

        this.state = {
            nuevo: '',
            lista: [

                    ]
        }

    }

    changeDone = (item) => {
        console.log(item);
        this.state.lista = this.state.lista.filter(i => i !== item);
        this.state.lista.push(item);
        this.setState({lista: this.state.lista});
    }

    agregarItem = () => {

        console.log(this.state.lista);


    }

    listenForItems = (itemsRef) => {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var lista = [];
      snap.forEach((child) => {
        lista.push({
          name: child.val().name,
          correo: child.val().correo,
          numero: child.val().numero,
          semestre:child.val().semestre,
          key: child.key

        });
      });

      this.setState({
        lista: lista
      });

    });
  }

    componentDidMount() {
        const itemsRef = firebase.database().ref('users/'+'TtTLxNzJ9cYy64BeOv6lfXeFKKb2/');
        this.listenForItems(itemsRef);
      }

    borrar = (item) => {
        let updates = {};
        updates['/items/' + item.id] = null;
        firebase.database().ref().update(updates);

    }

    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>

                        <Input
                            value={this.state.nuevo}
                            placeholder='Escribe un item nuevo'
                            onChangeText={nuevo=>this.setState({nuevo})}
                            />


                    <View style={styles.container}>
                        <ListComponent
                            lista={this.state.lista}
                            changeDone={this.changeDone}
                            borrar={this.borrar}
                            />
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            full
                            onPress={this.agregarItem}
                            >
                            <Text>Agregar</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});

export default App;
/*
var config = {
  apiKey: "AIzaSyDzgZapMUPFkg6dlte4W3au-E0zHR7Vp50",
    authDomain: "test-4341e.firebaseapp.com",
    databaseURL: "https://test-4341e.firebaseio.com",
    projectId: "test-4341e",
    storageBucket: "test-4341e.appspot.com",
    messagingSenderId: "301332539094"
};

const firebaseApp = firebase.initializeApp(config);
*/
