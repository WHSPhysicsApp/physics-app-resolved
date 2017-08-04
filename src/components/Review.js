import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

export default class Review extends React.Component {
  render() {
    return (
      <ScrollView>

        <Link to="/home">
          <View style={styles.home}>
            <Text style={styles.homeText}>Home</Text>
          </View>
        </Link>

        <ScrollView horizontal>
          <View style={styles.question}>
            <Text style={styles.questionText}>Question 1</Text>
          </View>

          <View style = {styles.question}>
            <Text style={styles.questionText}>Question 8</Text>
          </View>

          <View style = {styles.question}>
            <Text style={styles.questionText}>Question 20</Text>
          </View>
        </ScrollView>

        <View style={styles.canvas}>
          <Text style = {styles.questionText}>Canvas goes here</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  question: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
  canvas: {
    width: 300,
    height: 300,
    borderColor: '#000',
    borderWidth: 5,
    paddingLeft: 10
  },
  questionText: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5
  },
  homeText: {
    fontSize: 35
  },
  home: {
    paddingTop: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: 30,
    paddingLeft: 10
  }
});
