import React, { Component } from 'react';
import { Container, Header, Content, Input, Item, Button, Text } from 'native-base';
export default class ContactForm extends Component {
  render() {
    console.log(this.props.navigation.state.params)
    const { contact } =  this.props.navigation.state.params;
    data = this.props.navigation.state.params.data;

    console.log("waw gago: ");
    console.log(index);

    return (
      <Container>
        <Header />
        <Content>
          <Item regular>
            <Input placeholder='Name'
                onChangeText={value => this.handleInput('name', value, this.contact)}  
                value={contact.name}
            />
          </Item>
          <Item regular>
            <Input placeholder='Email'
                onChangeText={value => this.handleInput('email', value, this.contact)} 
                value={contact.email}
            />
          </Item>
          <Item regular>
            <Input placeholder='Mobile'
                value={contact.mobile}
            />
          </Item>
          <Item regular>
            <Input placeholder='Description' 
                value={contact.description}
            />
          </Item>
          <Item regular>
            <Input placeholder='URI' 
                value={contact.uri}
            />
          </Item>
        </Content>

        <Button full danger onPress={ _ => this.navigation.state.params.remove()}>
            <Text>Remove</Text>
        </Button>
        <Button full info onPress={ _ => this.props.navigation.goBack()}>
            <Text>Go Back</Text>
        </Button>
      </Container>

    );
    
  }
  removeContact(contact){
    contact.pop;
  }
  handleInput(field,value,contact){
    switch(field){
        case 'name':
            contact.name = value;
            break;
        case 'email':
            contact.email = value;
            break;
        }
    }
}
