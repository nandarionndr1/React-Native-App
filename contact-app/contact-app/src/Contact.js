import React, { Component } from 'react';
import {Alert } from 'react-native';

import {Button } from 'native-base'
import {createStackNavigator} from 'react-navigation';
import { Container, Header, Content, List, ListItem, Text, Body,Thumbnail  } from 'native-base';
export default class Contact extends Component {
  constructor(){
    super()
      this.state={
        data:[
          {
            name: 'jan sina',
            email: 'john@wwe.com',
            mobile: '09123123123',
            description: 'cant see me',
            uri: 'https://avatars1.githubusercontent.com/u/29102044?s=400&v=4'
        
          },
          {
            name: 'Nancy Kpop',
            email: 'momoland@wwe.com',
            mobile: '0912335563',
            description: 'boom boom boom',
            uri: 'https://avatars0.githubusercontent.com/u/20701641?s=400&v=4'
          }
        ]
      }
  }
  render() {
   var items = this.state.data;
   
    return (
      <Container>
        <Header />
        <Content padder>
        <List dataArray={this.state.data}
          renderRow={(item) =>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: `${item.uri}` }} />
              <Body>
              <Text>{`\n`}{item.name}</Text>
              <Text>{`\n`}{item.email}</Text>
              <Text>{`\n`}{item.description}</Text>
              </Body>
            </ListItem>
          }>
        </List>

        <List> 
          {this.state.data.map((item, i) =>{
            return(
              <ListItem button key={i} onPress={_ => this.props.navigation.navigate('ContactForm',{contact: item, remove:this.remove, data: this.state.data })}>
              <Thumbnail square size={80} source={{ uri: `${item.uri}` }} />
              <Text>{item.name}</Text>
              </ListItem>
            )
          })}
        </List>
        </Content>
        
      </Container>
    );
  }
  remove(){
    
  }
}