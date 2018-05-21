import React, { Component } from 'react';
import Contact from './src/Contact';
import {Button } from 'native-base';
import ContactForm from './src/ContactForm';
import CurConv from './src/CurConv';
import Result from './src/Result';
import {createStackNavigator} from 'react-navigation';

const AppStack = createStackNavigator(
  {
    Contact: { screen: Contact},
    CurConv: { screen: CurConv},
    Result: {screen: Result},
    ContactForm: { screen: ContactForm}
  },
  {
    initialRouteName: 'CurConv',
    headerMode:'none'
  }
)
export default class App extends Component{
  static navigationOptions = {
    header: null
  }
  render () {
    return(
      <AppStack/>
    )
  }
}