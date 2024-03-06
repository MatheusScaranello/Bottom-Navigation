import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/Home";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
