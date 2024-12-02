<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import Landing from './Landing'
import UserRegister from './User/UserRegister'
import Register from './Admin/Register'
import Login, { SetupAdminCredentials } from './Admin/Login'
import UserLogin from './User/UserLogin'
import UserHome from './User/UserHome'
import AdminHome from './Admin/AdminHome'
import Workouts from './Admin/Workouts'
import AddWorkout from './Admin/AddWorkout'
import WorkoutDetail from './Admin/WorkoutDetail'
import ManageUsers from './Admin/ManageUers'
import UserDetail from './Admin/UserDetail'

import UserProfile from './User/UserProfile'
import EditProfile from './User/EditProfile'
import Category from './User/Category'
import AdminCategory from './Admin/AdminCategory'

import EditWorkout from './Admin/EditWorkout'
import UserWorkoutDetail from './User/UserWorkoutDetail'



export default function Navigation() {
  const Stack=createStackNavigator()
  return (

    <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen options={{headerShown:false}} name='Home' component={Home}/>
        <Stack.Screen options={{headerShown:false}} name='Landing' component={Landing}/>
        <Stack.Screen options={{headerShown:false}} name='Register' component={Register}/>
        <Stack.Screen options={{headerShown:false}} name='UserRegister' component={UserRegister}/>
        <Stack.Screen options={{headerShown:false}} name='Login' component={Login}/>
        <Stack.Screen options={{headerShown:false}} name='UserLogin' component={UserLogin}/>
        <Stack.Screen options={{headerShown:false}} name='UserHome' component={UserHome}/>
        <Stack.Screen options={{headerShown:false}} name='AdminHome' component={AdminHome}/>
        <Stack.Screen options={{headerShown:false}} name='Workouts' component={Workouts}/>
        <Stack.Screen options={{headerShown:false}} name='AddWorkout' component={AddWorkout}/>
        <Stack.Screen options={{headerShown:false}} name='WorkoutDetail' component={WorkoutDetail}/>
        <Stack.Screen options={{headerShown:false}} name='ManageUsers' component={ManageUsers}/>
        <Stack.Screen options={{headerShown:false}} name='UserDetail' component={UserDetail}/>
        <Stack.Screen options={{headerShown:false}} name='EditWorkout' component={EditWorkout}/>
        <Stack.Screen options={{headerShown:false}} name='UserProfile' component={UserProfile}/>
        <Stack.Screen options={{headerShown:false}} name='EditProfile' component={EditProfile}/>
        <Stack.Screen options={{headerShown:false}} name='Category' component={Category}/>
        <Stack.Screen options={{headerShown:false}} name='AdminCategory' component={AdminCategory}/>
        <Stack.Screen options={{headerShown:false}} name='UserWorkoutDetail' component={UserWorkoutDetail}/>
        
        
        
       
       
       

        
      </Stack.Navigator>
    </NavigationContainer>
   






  )
}

=======
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import Landing from './Landing'
import UserRegister from './User/UserRegister'
import Register from './Admin/Register'
import Login, { SetupAdminCredentials } from './Admin/Login'
import UserLogin from './User/UserLogin'
import UserHome from './User/UserHome'
import AdminHome from './Admin/AdminHome'
import Workouts from './Admin/Workouts'
import AddWorkout from './Admin/AddWorkout'
import WorkoutDetail from './Admin/WorkoutDetail'
import ManageUsers from './Admin/ManageUers'
import UserDetail from './Admin/UserDetail'

import UserProfile from './User/UserProfile'
import EditProfile from './User/EditProfile'
import Category from './User/Category'
import AdminCategory from './Admin/AdminCategory'

import EditWorkout from './Admin/EditWorkout'
import UserWorkoutDetail from './User/UserWorkoutDetail'



export default function Navigation() {
  const Stack=createStackNavigator()
  return (

    <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen options={{headerShown:false}} name='Home' component={Home}/>
        <Stack.Screen options={{headerShown:false}} name='Landing' component={Landing}/>
        <Stack.Screen options={{headerShown:false}} name='Register' component={Register}/>
        <Stack.Screen options={{headerShown:false}} name='UserRegister' component={UserRegister}/>
        <Stack.Screen options={{headerShown:false}} name='Login' component={Login}/>
        <Stack.Screen options={{headerShown:false}} name='UserLogin' component={UserLogin}/>
        <Stack.Screen options={{headerShown:false}} name='UserHome' component={UserHome}/>
        <Stack.Screen options={{headerShown:false}} name='AdminHome' component={AdminHome}/>
        <Stack.Screen options={{headerShown:false}} name='Workouts' component={Workouts}/>
        <Stack.Screen options={{headerShown:false}} name='AddWorkout' component={AddWorkout}/>
        <Stack.Screen options={{headerShown:false}} name='WorkoutDetail' component={WorkoutDetail}/>
        <Stack.Screen options={{headerShown:false}} name='ManageUsers' component={ManageUsers}/>
        <Stack.Screen options={{headerShown:false}} name='UserDetail' component={UserDetail}/>
        <Stack.Screen options={{headerShown:false}} name='EditWorkout' component={EditWorkout}/>
        <Stack.Screen options={{headerShown:false}} name='UserProfile' component={UserProfile}/>
        <Stack.Screen options={{headerShown:false}} name='EditProfile' component={EditProfile}/>
        <Stack.Screen options={{headerShown:false}} name='Category' component={Category}/>
        <Stack.Screen options={{headerShown:false}} name='AdminCategory' component={AdminCategory}/>
        <Stack.Screen options={{headerShown:false}} name='UserWorkoutDetail' component={UserWorkoutDetail}/>
        
        
        
       
       
       

        
      </Stack.Navigator>
    </NavigationContainer>
   






  )
}

>>>>>>> 353c9b09eb579acdb19c56de6d7636be1a16b10a
const styles = StyleSheet.create({})