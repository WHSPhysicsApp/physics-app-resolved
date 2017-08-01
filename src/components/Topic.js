import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.js'
import { Link } from 'react-router-native'

export default class Topic extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Topic"/>
        <Text style = {styles.upperText}>Select mulitple choice or free response to start practicing!</Text>

      {// adding the link to this block removes the text for free response
      }
        <Link to="/question">
          <View style = {styles.textViewMid}>
            <Text style = {styles.chooseText}>Multiple Choice</Text>
          </View>
        </Link>


        <View style = {styles.textViewMid}>
          <Text style = {styles.chooseText}>Free Response</Text>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'

  },
  upperText: {
    fontSize: 30,
    paddingTop: 20
  },

  textViewMid: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  chooseText: {
    fontSize: 30,
  }

});
