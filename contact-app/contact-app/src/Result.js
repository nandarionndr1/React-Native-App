import React, { Component } from 'react';
import { Container, Header, Content, Input, Item, Button, Text } from 'native-base';
export default class Result extends Component {
  render() {
    console.log(this.props.navigation.state.params.dollar)
    data  =  this.props.navigation.state.params.dollar;
    console.log(data);
    conversion =  data * 51.62;
    console.log(conversion);
    
    return (
      <Container>
        <Header />
        <Content>
          <Item regular>
          <Text>Conversion Rate: {conversion}</Text>
            <Input placeholder='Conversion Rate'
                value={conversion}
            />
          </Item>
        </Content>

        <Button full info onPress={ _ => this.props.navigation.goBack()}>
            <Text>Go Back</Text>
        </Button>
      </Container>

    );
    
  }
  
}
