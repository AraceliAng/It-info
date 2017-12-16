import React, { Component } from 'react';
import {  TouchableOpacity, View,Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import Modal from 'react-native-modal';
import styles from './app.style';

export default class Example extends Component {
  state = {
    visibleModal: null,
  };



  _renderModalContent = () => (
    <Content >
             <Card style={{justifyContent:'center', alignItems:'center', flexDirection:"column"}}>
              <CardItem header>
                <Text>{this.props.lista.titulo}</Text>
              </CardItem>

                   <Image source={{uri:this.props.lista.imagen}} style={{height: 200, width: 200, flex: 1}}/>
                   <Text>
                     {this.props.lista.contenido}
                   </Text>

                   <View style={{justifyContent:'center', alignItems:'center'}}>
                   <Button transparent onPress={this.close} textStyle={{color: '#87838B'}}>
                     <Text>cerrar</Text>
                   </Button>
                   </View>


             </Card>
           </Content>
  );
  close=()=>{
    this.props.cerrar(this.state.visibleModal)
  }

  render() {
    return (
      <View >
        <Modal
          isVisible={this.props.visibilidad === 1}
          onBackdropPress={this.close}
        >
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}
