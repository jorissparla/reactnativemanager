import React, {Component} from 'react'
import { View , Text } from 'react-native'
import { Card , Button, CardSection, Input} from './common'


class LoginForm extends Component {
  render () {
    return (
      <Card>
      <CardSection>
        <Input 
          label='Email'
          placeholder='email@gmail.com'
        />
      </CardSection>
      <CardSection>
        <Input 
          label='Password'
          secureTextEntry
        />
      </CardSection>
      <CardSection>
        <Button>
          <Text>Log in</Text>
        </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm