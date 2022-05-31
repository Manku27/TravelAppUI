import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { Text } from "react-native-paper";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

const SampleComponentBookings = ({ navigation }) => {
  return <Text>Bookings</Text>;
};
const SampleComponentLogin = ({ navigation }) => {
  return <Text>Login</Text>;
};
const SampleComponentRegister = ({ navigation }) => {
  return <Text>Register</Text>;
};
export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="SettingsPanel"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Login" component={SampleComponentLogin} />
      <SettingsStack.Screen
        name="Registration"
        component={SampleComponentRegister}
      />
      <SettingsStack.Screen
        name="Bookings"
        component={SampleComponentBookings}
      />
    </SettingsStack.Navigator>
  );
};
