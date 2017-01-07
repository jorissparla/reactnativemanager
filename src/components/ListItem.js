import React, {Component} from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { CardSection } from './common'
import { Actions } from 'react-native-router-flux'

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({employee: this.props.employee})
  }

  render() {
  const { containerStyle, textStyle, titleStyle } = styles
  const { name } =this.props.employee
  return (
    <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
      <View>
        <CardSection>
          <Text style={titleStyle}>
            {name}
          </Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  )
 }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  containerStyle: {
  fontSize: 12
  },
  textStyle: {
    marginTop: 10
  }
}

export default ListItem;
