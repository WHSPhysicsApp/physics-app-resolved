import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Header from './Header.js';
import { Link } from 'react-router-native';

export default class freeResponse extends React.Component {

  constructor(props){
    super(props);
    this.state = {text: 'Enter answer here.'};
  }


  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Header title = "Free Response"/>

          <Text style = {styles.questionText}>1. A block is rolling down a ramp.
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

      <Link to= "/results">
        <View style={styles.next}>
          <Text style={styles.nextQuestionText}>Next question</Text>
        </View>
      </Link>

    </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10
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
    paddingLeft: 10,
    paddingRight: 10
  },
  inputBox: {
    height: 40,
    width: 250,
    borderColor: 'blue',
    borderWidth: 1,
  },
  next: {
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 20,
    marginLeft: 5,
  },
  nextQuestionText: {
    fontSize: 30
  }
});
