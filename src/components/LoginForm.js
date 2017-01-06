import React, {Component} from 'react'
import { View , Text } from 'react-native'
import { Card , Button, CardSection, Input, Spinner} from './common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password} = this.props
    this.props.loginUser({email, password})
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />
    } else 
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          <Text>Log in</Text>
        </Button>
      )
  }

  render () {
    console.log('RENDER', this.props)
    return (
      <Card>
      <CardSection>
        <Input 
          label='Email'
          placeholder='email@gmail.com'
          onChangeText={this.onEmailChange.bind(this)}
          value ={this.props.email}
        />
      </CardSection>
      <CardSection>
        <Input 
          label='Password'
          secureTextEntry
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
      </CardSection>
      <CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
      </CardSection>
      <CardSection>
        {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm)