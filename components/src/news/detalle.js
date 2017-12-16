import React from 'react';
import { View, Image, Linking, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


const NoticiaDetalle = ({ noticia }) => {
  const { titulo, nota, imagen } = noticia;
return (

    <Card>

      <CardItem>
                   <Left>
                     <Body>
                       <Text>{titulo}</Text>
                       <Text note>{nota}</Text>
                     </Body>
                   </Left>
                 </CardItem>
                 <CardItem cardBody>
                   <Image source={imagen} style={{height: 200, width: null, flex: 1}}/>
                 </CardItem>

    </Card>
  );
};


export default NoticiaDetalle;
