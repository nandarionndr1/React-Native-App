import React, { Component } from 'react';
import {Alert } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { Container, Header, Content, List, ListItem, Text, Body,Thumbnail,Input, Button, Item  } from 'native-base';
export default class CurConv extends Component {
  constructor(){
    super()
      this.state={
            dollar: ''
      }
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
        
        <Item regular>
            <Input placeholder='USD'
                onChangeText={ value => this.setState({dollar: value})} 
            />
          </Item>
        </Content>
        
        <Button full onPress={ _ => this.props.navigation.navigate('Result', {dollar: this.state.dollar})}>
            <Text>Convert USD to PHP</Text>
        </Button>
      </Container>
    );
  }
  remove(){
    
  }
}