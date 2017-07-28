import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

import history from '../utils/history.js';

export default class Header extends Component {
  render() {
    return (
      <View>
        {
          /*
          rightButton={
            history.index + 1 < history.length ?
            <TouchableHighlight underlayColor="#999" style={{paddingLeft:20,paddingRight:20}} onPress={history.goForward}>
              <Icon name="angle-right" size={36} color="#000" style={{paddingTop:5}}/>
            </TouchableHighlight> : <View></View>
          }
          leftButton={
            history.index > 0 ?
            <TouchableHighlight underlayColor="#999" style={{paddingLeft:20,paddingRight:20}} onPress={history.goBack}>
              <Icon name="angle-left" size={36} color="#000" style={{paddingTop:5}}/>
            </TouchableHighlight> : <View></View>
          }
          */
        }
        {
        <NavigationBar
          containerStyle={styles.navbar}
          title={{
            title: this.props.title,
            style: styles.titleText
          }}
        />
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor:'white',
    paddingTop: 10,
    paddingBottom: 8
  },
  titleText: {
    fontSize: 28,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});
