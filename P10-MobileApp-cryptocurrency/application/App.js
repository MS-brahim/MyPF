import React from "react";

import HomeScreen from "./app/screens/HomeScreen";
import DetailScreen from "./app/screens/DetailScreen";
import Splash from "./app/components/Splash";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./app/auth/signin/SignIn";
import SignUp from "./app/auth/signup/SignUp";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="signIn"
          component={SignIn}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="signUp"
          component={SignUp}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        /> 
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: "Coin Detail ",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "orange",
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
