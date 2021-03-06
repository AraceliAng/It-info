import React, {Component} from 'react';
import {Image, StyleSheet, View, ListView, ScrollView, Text} from 'react-native';
import {Spinner} from 'native-base';
import Detalle from './detalle';
class tabTwo extends Component {
  state = { noticias: [], loading: false };

  componentWillMount() {
      fetch('https://lit-depths-37397.herokuapp.com/api/noticias.json').then((response) => response.json())
      .then(response=> {
        this.setState({ noticias: response, loading: true });
      });
      console.log(this.state.loading);
  }

  renderNoticias() {
    console.log(this.state.loading);
    console.log(this.state.noticias);
    if(this.state.loading == false){
      return <View><Spinner color='#4DA49B' /><Text style={{alignSelf:'center'}}>Cargando...</Text></View>
    }else{
      return this.state.noticias.map(noticia =>
        <Detalle key={noticia.id} noticia={noticia} />
      );
    }
  }

  render() {
    return (
      <ScrollView>
        {this.renderNoticias()}
      </ScrollView>
    );
  }
}

export default tabTwo;
