import React, { useContext } from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { Text } from "react-native-paper";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";

const SettingsStack = createStackNavigator();

const SampleComponentBookings = ({ navigation }) => {
  return <Text>Bookings</Text>;
};

export const SettingsNavigator = ({ route, navigation }) => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        <>
          <SettingsStack.Screen
            name="SettingsPanel"
            component={SettingsScreen}
          />

          <SettingsStack.Screen
            name="Bookings"
            component={SampleComponentBookings}
          />
        </>
      ) : (
        <SettingsStack.Screen
          name="Auth"
          options={{ headerShown: false }}
          component={AccountNavigator}
        />
      )}
    </SettingsStack.Navigator>
  );
};
