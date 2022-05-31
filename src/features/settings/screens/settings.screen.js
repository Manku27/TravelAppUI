import React, { useContext } from "react";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { isAuthenticated, onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user?.email || "not available"}</Text>
        </Spacer>
      </AvatarContainer>
      {/* TODO : check for a better way for auth naviagtion */}
      {isAuthenticated ? (
        <List.Section>
          <SettingsItem
            title="Bookings"
            description="View your bookings"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate("Bookings")}
          />
          <SettingsItem
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
          />
        </List.Section>
      ) : (
        <List.Section>
          <SettingsItem
            title="Login"
            description="Login"
            left={(props) => (
              <List.Icon {...props} color="black" icon="login" />
            )}
            onPress={() => navigation.navigate("Login")}
          />
          <SettingsItem
            title="Register"
            description="Register"
            left={(props) => (
              <List.Icon {...props} color="black" icon="account-plus" />
            )}
            onPress={() => navigation.navigate("Registration")}
          />
        </List.Section>
      )}
    </SafeArea>
  );
};
