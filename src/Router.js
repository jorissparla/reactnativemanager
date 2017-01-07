import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => {
  return (
    <Router sceneStyle = {{ paddingTop:60}}>
      <Scene key='auth'>
        <Scene 
          key='login' 
          component={LoginForm} 
          title='Please Login' 
          initial={true}
        />
      </Scene>
      <Scene key='main'>
        <Scene 
          rightTitle='Add'
          onRight={()=> Actions.employeeCreate() }
          key='employeeList' 
          component={EmployeeList} 
          title='Employees' 
          initial
        />
        <Scene 
          key='employeeCreate' 
          component={EmployeeCreate} 
          title='Add Employee' 
        />
        <Scene 
          key='employeeEdit' 
          component={EmployeeEdit} 
          title='Edit Employee' 
        />
      </Scene>
    </Router>
  )
 }



export default RouterComponent;
