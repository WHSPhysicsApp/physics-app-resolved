import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.js';

export default class multipleChoice extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title = "Question"/>
        <Text style = {styles.textStyle}>MC Question Page text text text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  textStyle: {
    fontSize: 20
  }
});
