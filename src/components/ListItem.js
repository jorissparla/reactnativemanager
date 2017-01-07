import React, {Component} from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import { CardSection } from './common'
import { Actions } from 'react-native-router-flux'

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({employee: this.props.employee})
  }

  render() {
  const { containerStyle, textStyle, titleStyle , imageStyle} = styles
  const { name } =this.props.employee
  return (
    <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
      <View>
        <CardSection>
        <View style={{flex:2, justifyContent:'center'}}>
          <Text style={titleStyle}>
            {name}
          </Text>
          </View>
          <View style={{flex:1}}>
          <Image 
            style={imageStyle}
            source={{uri: 'https://randomuser.me/api/portraits/men/67.jpg'} }/>
            </View>
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
    marginTop: 10,
    fontFamily:'Oswald'
  }, 
    imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignSelf: 'flex-end'
  },
}

//https://randomuser.me/api/portraits/men/67.jpg

export default ListItem;
