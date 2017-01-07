import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { CardSection } from './common'

const ListItem = (props) => {
  const { containerStyle, textStyle, titleStyle } = styles
  const { name } =props.employee
  return (
    <CardSection>
      <Text style={titleStyle}>
        {name}
      </Text>
    </CardSection>
  )
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
