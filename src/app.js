import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Header, Button, Spinner, Card, CardSection } from './components/common'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebase from 'firebase'
import config from './config'
import Router from './Router'

class App extends Component {
  
  componentWillMount () {
    firebase.initializeApp(config)
  }
  

  render() {
  const { textStyle } = styles
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Router />
    </Provider>
  )
 }
}
const styles = {
  containerStyle: {
  fontSize: 12
  },
  textStyle: {
    marginTop: 10
  }
}

export default App;
