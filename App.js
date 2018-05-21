import React from 'react';
import { StyleSheet, Text, View, Button,Alert, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name : ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
        <TextInput placeholder='Input NamezZ' style={{ height: 50, width:100 }} onChangeText={text => this.setState({name:text})} />
        <Button title='hi im mark ugh' onPress={ _ => Alert.alert(`Hell0 ${this.state.name}`)}/>
      </View>
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
});
