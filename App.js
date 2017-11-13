import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Form, Label, List, ListItem, Container, Content, Text, Item, Input, Icon, Left} from 'native-base';


class Perfil extends Component {

  render() {
    return (
      <Container>

        <Content>
          <View style={styles.view}>
            <Image style={styles.img}
            source={{uri: 'https://ae01.alicdn.com/kf/HTB1YU0LRVXXXXbUXXXXq6xXFXXXz/1PC-Personalise-Square-piggy-bank-Logbook-Series-font-b-Tin-b-font-Plate-box-font-b.jpg'}}/>
          </View>

          <List>
            <ListItem itemDivider>
              <Text>Info</Text>
            </ListItem>

            <ListItem >
            <Left>
             <Text>Nombre</Text>
           </Left>
              <Input style={styles.texto} disabled placeholder='Dylan Torres'/>
            </ListItem>

            <ListItem>
             <Left>
                <Text>correo</Text>
             </Left>
              <Input style={styles.texto} disabled placeholder='dylan@prueba.com'/>
            </ListItem>

            <ListItem>
             <Left>
                <Text>No control</Text>
             </Left>
              <Input style={styles.texto} disabled placeholder='14200197'/>
            </ListItem>

            <ListItem>
             <Left>
                <Text>Carrera</Text>
             </Left>
              <Input style={styles.texto} disabled placeholder='Tics'/>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Semestre</Text>
             </Left>
              <Input style={styles.texto} disabled placeholder='10°'/>
            </ListItem>

          </List>


        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgb(0,0,0)',
    opacity: 0.6
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  },
  texto:{
    textAlign:'right'
  }
})

export default Perfil;
