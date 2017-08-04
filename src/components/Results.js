import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.js';
import { Link } from 'react-router-native';

export default class Results extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Header title ="Results"/>

        <View style={styles.topView}>
          <Text style={styles.resultsText}>x/y</Text>
        </View>

        <Link to="/review">
          <View style={styles.reviewView}>
            <Text style={styles.otherText}>Review</Text>
          </View>
        </Link>


        <Link to="/home">
          <View style={styles.homeView}>
            <Text style={styles.otherText}>Home</Text>
          </View>
        </Link>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  topView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    paddingBottom: 160
  },
  reviewView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 20
  },
  homeView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 20
  },
  resultsText: {
    fontSize: 90,
    color: '#33FF79'
  },
  otherText: {
    fontSize: 30
  }

});
