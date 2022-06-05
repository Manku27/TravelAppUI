import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto } from "@expo/vector-icons";

import { BoatsNavigator } from "./boats.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { Text } from "react-native-paper";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Boats: "sait-boat",
  FAQ: "question",
  Settings: "player-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Fontisto name={iconName} size={size} color={color} />
    ),
  };
};

const SampleComponent = ({ navigation }) => {
  return <Text>FAQ</Text>;
};
export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Boats" component={BoatsNavigator} />
    <Tab.Screen name="FAQ" component={SampleComponent} />
    <Tab.Screen name="Settings" component={SettingsNavigator} />
  </Tab.Navigator>
);
