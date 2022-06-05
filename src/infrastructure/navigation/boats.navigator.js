import React, { useContext } from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const BoatStack = createStackNavigator();
const SampleComponentBoats = ({ navigation }) => {
  return <Text>BoatsList</Text>;
};
const SampleComponentBoatDetail = ({ navigation }) => {
  return <Text>Boat Detail</Text>;
};
const SampleComponentBoatBooking = ({ navigation }) => {
  return <Text>Boat Booking</Text>;
};
const SampleComponentLogin = ({ navigation }) => {
  return <Text>Login</Text>;
};
const SampleComponentRegister = ({ navigation }) => {
  return <Text>Register</Text>;
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
      <BoatStack.Screen name="BoatsList" component={SampleComponentBoats} />
      <BoatStack.Screen
        name="BoatDetail"
        component={SampleComponentBoatDetail}
      />

      {isAuthenticated ? (
        <BoatStack.Screen
          name="BoatBooking"
          component={SampleComponentBoatBooking}
        />
      ) : (
        <>
          <BoatStack.Screen name="Login" component={SampleComponentLogin} />
          <BoatStack.Screen
            name="Register"
            component={SampleComponentRegister}
          />
        </>
      )}
    </BoatStack.Navigator>
  );
};
