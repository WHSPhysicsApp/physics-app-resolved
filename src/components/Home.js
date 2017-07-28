import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native'
import Header from './Header.js'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Home"/>
        <Text style={styles.basicText}>Hello, Im a home page.</Text>
        <Link to="/topic">
          <View>
              <Text style={styles.basicText}>Click here for topic</Text>
          </View>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  basicText: {
    fontSize: 40
  }
});
