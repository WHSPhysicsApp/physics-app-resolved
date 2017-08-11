import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Header from './Header.js';

// var questionCtrl = require('../controllers/QuestionCtrl.js');

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Header title="Home"/>
        <Image
        style={styles.image}
        source={{uri: 'http://www.planetholloway.com/graphics/photos/planet-image.jpeg'}}
        />
        <Text style={styles.basicText}>Welcome to Physics App Name!</Text>
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
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: "#33FFC0"
  },
  basicText: {
    fontSize: 30,
    paddingBottom: 10,
    paddingTop: 10
  },
  topicText: {
    fontSize: 25,
    paddingBottom: 10
  },
  image: {
    width: 120,
    height: 120
  },
  topicContainer: {
    paddingTop: 20,
    alignItems: 'flex-start'
  }
});
