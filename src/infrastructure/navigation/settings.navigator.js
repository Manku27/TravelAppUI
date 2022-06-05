import React, { useContext } from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { Text } from "react-native-paper";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

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
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <SettingsStack.Screen name="SettingsPanel" component={SettingsScreen} />

      {isAuthenticated ? (
        <SettingsStack.Screen
          name="Bookings"
          component={SampleComponentBookings}
        />
      ) : (
        <>
          <SettingsStack.Screen name="Login" component={SampleComponentLogin} />
          <SettingsStack.Screen
            name="Registration"
            component={SampleComponentRegister}
          />
        </>
      )}
    </SettingsStack.Navigator>
  );
};
