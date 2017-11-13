import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (

      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/23172781_1738362729509804_1576702431933951080_n.jpg?oh=e5710ea71e1605f491c97dfb0a32587d&oe=5A9E3573'}} />
                <Body>
                  <Text>Te extraño</Text>
                  <Text note>:3</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/11227777_10206707878920148_4072498023034464664_n.jpg?oh=04e683822138dc317c6abd3c1769ae49&oe=5A63748C'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
        </Card>
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/23172635_10214522525761435_1775036417303370333_n.jpg?oh=d0b1fba3af69e5efcc9bde02ed000f57&oe=5AAED614'}} />
                <Body>
                  <Text>Yo te quiero</Text>
                  <Text note>100% real no fake</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/14900436_10210951604570637_988340751837239105_n.jpg?oh=255fb742cd64fa6e8575d918da5ba288&oe=5A61EF2C'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
