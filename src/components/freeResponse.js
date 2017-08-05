import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './Header.js';

export default class freeResponse extends React.Component {

  constructor(props){
    super(props);
    this.state = {text: 'Test test test'};
  }


  render() {
    return (
      <View style={styles.container}>
        <Header title = "Free Response"/>
        <Text style = {styles.textStyle}>FR Question Page text text text</Text>
        <TextInput
          style={{height: 40, width: 300, borderColor: 'blue', borderWidth: 1}}
          onChangeText = {(text) => this.setState({text})}
          value = {this.state.text}
        />
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
