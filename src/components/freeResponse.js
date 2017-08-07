import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './Header.js';

export default class freeResponse extends React.Component {

  constructor(props){
    super(props);
    this.state = {text: 'Enter answer here.'};
  }


  render() {
    return (
      <View style={styles.container}>
        <Header title = "Free Response"/>
        <Text style = {styles.questionText}>A block is rolling down a ramp.
          Here is part A. Here is part B. Here is Part C.</Text>

        <View style = {styles.answerLine}>
          <Text style={styles.partText}>a.</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText = {(textA) => this.setState({textA})}
            value = {this.state.text}
          />
        </View>
        <View style={styles.answerLine}>
          <Text style={styles.partText}>b.</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText = {(textB) => this.setState({textB})}
            value = {this.state.text}
          />
        </View>
        <View style={styles.answerLine}>
          <Text style={styles.partText}>c.</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText = {(textC) => this.setState({textC})}
            value = {this.state.text}
          />
        </View>
        <View style={styles.answerLine}>
          <Text style={styles.partText}>d.</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText = {(textD) => this.setState({textD})}
            value = {this.state.text}
          />
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
    justifyContent: 'flex-start',
  },

  questionText: {
    fontSize: 25,
  },
  partText: {
    fontSize: 40,
    paddingRight: 10
  },
  answerLine: {
    flexDirection: 'row',
    paddingTop: 40,
  },
  inputBox: {
    height: 40,
    width: 300,
    borderColor: 'blue',
    borderWidth: 1,
  }
});
