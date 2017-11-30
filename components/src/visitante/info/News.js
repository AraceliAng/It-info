import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Noti1 from '../../../assets/img/tec.jpeg'
import Noti2 from '../../../assets/img/uni.jpg'
export default class CardImageExample extends Component {
  render() {
    return (

      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Estudia en el Tecde pachuca</Text>
                  <Text note>El mejor nivel academico</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={Noti1} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
        </Card>
        <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Oferta Educativa para ti</Text>
                  <Text note>Las mejores ING</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={Noti2} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
