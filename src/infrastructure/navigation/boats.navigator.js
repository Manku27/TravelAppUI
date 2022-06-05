import React, { useContext } from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { BoatsScreen } from "../../features/boats/screens/boats.screen";
import { BoatDetailScreen } from "../../features/boats/screens/boat-detail.screen";

const BoatStack = createStackNavigator();

const SampleComponentBoatBooking = ({ navigation }) => {
  return <Text>Boat Booking</Text>;
};

export const BoatsNavigator = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <BoatStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <BoatStack.Screen name="BoatsList" component={BoatsScreen} />
      <BoatStack.Screen name="BoatDetail" component={BoatDetailScreen} />

      {isAuthenticated ? (
        <BoatStack.Screen
          name="BoatBooking"
          component={SampleComponentBoatBooking}
        />
      ) : (
        <BoatStack.Screen
          name="Auth"
          options={{ headerShown: false }}
          component={AccountNavigator}
        />
      )}
    </BoatStack.Navigator>
  );
};
