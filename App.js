import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Route, Switch } from 'react-router-native';

import Home from './src/components/Home.js';
import Topic from './src/components/Topic.js';
import MultipleChoice from './src/components/multipleChoice.js';
import FreeResponse from './src/components/freeResponse.js';
import Results from "./src/components/Results.js";
import Review from "./src/components/Review.js";

import history from './src/utils/history.js'

export default class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/topic" component={Topic}/>
          <Route path="/multipleChoice" component={MultipleChoice}/>
          <Route path="/freeResponse" component ={FreeResponse}/>
          <Route path="/results" component = {Results}/>
          <Route path="/review" component = {Review}/>
        </Switch>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideContainer: {
    backgroundColor: '#000'
  },
  insideText: {
    color: '#fff'
  }
});
