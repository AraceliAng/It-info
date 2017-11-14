import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {firebaseAuth} from '../../firebase/Firebase';
import {Actions} from 'react-native-router-flux';
import Mapa from '../mapa/VistaMapa';
import Bienvenida from '../bienvenida/Bienvenida';

class Log extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Mapa/>;
      case false:
        return <Bienvenida/>;
    }
  }

  render() {
    return (
      <View style={styles.view}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  },
  view: {
    flex: 1
  }
});

export default Log;
