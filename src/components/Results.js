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

        <View style= {styles.viewHorizontal}>
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
    paddingBottom: 160,
    //backgroundColor: 'blue'
  },
  reviewView: {
    paddingLeft: 20
  },
  homeView: {
    paddingRight: 20
  },
  resultsText: {
    fontSize: 90,
    color: '#33FF79'
  },
  otherText: {
    fontSize: 40
  },
  viewHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

});
