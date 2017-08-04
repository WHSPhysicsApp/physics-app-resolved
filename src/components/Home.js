import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Link } from 'react-router-native';
import Header from './Header.js';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Home"/>
        <Image
        style={styles.image}
        source={{uri: 'http://www.planetholloway.com/graphics/photos/planet-image.jpeg'}}
        />
        <Text style={styles.basicText}>Welcome to Physics App!</Text>
        <Text style={styles.basicText}>Click on a topic to get started!</Text>
          <Link to="/topic">
            <View style = {styles.topicContainer}>
              <Text style={styles.topicText}>Kinematics</Text>
              <Text style={styles.topicText}>Force</Text>
              <Text style={styles.topicText}>Energy and Work</Text>
              <Text style={styles.topicText}>Momentum</Text>
              <Text style={styles.topicText}>Rotation</Text>
              <Text style={styles.topicText}>Torque</Text>
              <Text style={styles.topicText}>Gravity</Text>
              <Text style={styles.topicText}>Oscillations</Text>
            </View>
          </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#33FFC0"
  },
  basicText: {
    fontSize: 20,
    paddingBottom: 5,
    paddingTop: 10
  },
  topicText: {
    fontSize: 20,
    paddingBottom: 10
  },
  image: {
    width: 120,
    height: 120
  },
  topicContainer: {
    paddingTop: 10,
    alignItems: 'flex-start'
  }
});
