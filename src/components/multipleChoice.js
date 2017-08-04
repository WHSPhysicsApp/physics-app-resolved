import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './Header.js';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Link } from 'react-router-native';





export default class multipleChoice extends React.Component {

  constructor () {
    super()
    this.state = {
      types1: [{label: '10 ', value: 0}, {label: '20', value: 1}, {label:30, value:2}, {label:40, value:3}, {label:50, value:4}],
      value1: 0,
      value1Index: 0,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

            <Header title = "Question"/>
            <Text style = {styles.question}>1. A 100 N Force acts on a 5 kg ball. What is its acceleration in meters per second squared?? </Text>
            <View style={styles.component}>
              <RadioForm
                ref="radioForm"
                radio_props={this.state.types1}
                initial={0}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#2196f3'}
                labelColor={'#000'}
                animation={true}
                onPress={(value, index) => {
                  this.setState({
                    value1:value,
                    value1Index:index
                  })
                }}
            />
            </View>
            <Link to= "/results">
              <View style={styles.component}>
                <Text style={styles.question}>Next question</Text>
              </View>
            </Link>
          <View style={styles.component}>
            <Text style={styles.question}> Canvas goes here (but bigger) </Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  question: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5
  },

  component: {
    alignItems: 'flex-start',
    marginBottom: 50,
    marginLeft: 15
  }


});
