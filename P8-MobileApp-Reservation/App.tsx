import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddAssistance from './app/assistances/screens/AddAssistance';
import Constants from 'expo-constants'
import ListNavigation from './app/shared/components/ListNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SignIn} from './app/auth/sign-in/sign-in';
import {SignUp} from './app/auth/sign-up/sign-up';
import AddBreakfast from './app/breakfasts/screens/AddBreakfast';


const Stack=createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
 
     <View style={styles.container}>
        <StatusBar style="auto"/>
        <Stack.Navigator>
          <Stack.Screen name="Sign in" component={SignIn} 
          options={{
          title: "Sign in",
          headerTintColor:'white',
          headerStyle:{
            backgroundColor: 'skyblue',
          }, 
        }}/> 
          <Stack.Screen name="Sign up" component={SignUp} 
          options={{
          title: "Sign up",
          headerTintColor:'white',
          headerStyle:{
            backgroundColor: 'skyblue',
          }, 
        }}/> 
          
        
        
        <Stack.Screen name="Home" component={ListNavigation}  options={{
          title: "Home",
          headerTintColor:'white',
          headerStyle:{
            backgroundColor: 'skyblue',
          }, 
        }}/> 
        
        <Stack.Screen name="Assistance" component={AddAssistance} options={{
          title: "Add Assistance",
          headerTintColor:'white',
          headerStyle:{
            backgroundColor: 'skyblue',
          }, 
        }} /> 
        <Stack.Screen name="Assist" component={AddBreakfast} options={{
          title: "Add Brak fast",
          headerTintColor:'white',
          headerStyle:{
            backgroundColor: 'skyblue',
          }, 
        }} /> 
        
      </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Constants.statusBarHeight,
  },});

