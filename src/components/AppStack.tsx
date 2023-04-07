import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Homescreen";
import CharacterScreen from "../screens/CharacterScreen";

// Define the navigation stack using createStackNavigator
const Stack = createStackNavigator();

const AppStack = () => {
  // Use the DefaultTheme for the NavigationContainer
  const navigationTheme = DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false, title: "Star Wars Characters" }}
        />
        <Stack.Screen
          name="CharacterInfo"
          component={CharacterScreen}
          options={{ headerTitleAlign: "center", title: "Character Info" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
