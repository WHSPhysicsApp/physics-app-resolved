import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.js'

export default class Topic extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Topic"/>
        <Text>Boilerplate placeholder</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
