import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar,TouchableOpacity, ScrollView, View } from 'react-native';
import { Container, Header, Content, Card,Spinner, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import NewsCompleta from './completaNews/NewsCompleta'
import Newsconte from './Newsconte'
import Detalle from './detalle'
export default class CardImageExample extends Component {
  state = { noticias: [], loading: false, visibleModal: null,item:{} };

    componentWillMount() {
      this.fetchDataFromApi();
    }
 fetchDataFromApi = ()  => {
   fetch('https://lit-depths-37397.herokuapp.com/api/noticias.json').then((response) => response.json())
   .then(response=> {
     this.setState({ noticias: response, loading: true });
   });
   console.log(this.state.loading)
 }
grande=(noti)=>{

  this.setState({item:noti})
  console.log(noti)
}
abrir=(mod)=>{
  this.setState({visibleModal:mod})
}
cerrar=(cer)=>{
  this.setState({visibleModal:cer})
}

renderNoticias() {
  console.log(this.state.loading);
  console.log(this.state.noticias);
  if(this.state.loading == false){
    return <View><Spinner color='#4DA49B' /><Text style={{alignSelf:'center'}}>Cargando...</Text></View>
  }else{
       return <Newsconte lista={this.state.noticias}
                       Grande={this.grande}
                       mod={this.abrir} />

  }
}


  render() {
    return (

      <Container>

      <ScrollView>
        {this.renderNoticias()}
      </ScrollView>

      <NewsCompleta visibilidad={this.state.visibleModal}
                      lista={this.state.item}
                      cerrar={this.cerrar}/>







      </Container>
    );
  }
}
/*      <Newsconte lista={this.state.noticias}
                Grande={this.grande}
                mod={this.abrir}
                  />


                  <NewsCompleta visibilidad={this.state.visibleModal}
                                  lista={this.state.item}
                                  cerrar={this.cerrar}/>

                                */
