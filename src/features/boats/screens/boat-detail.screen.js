import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { BoatInfoCard } from "../components/boat-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { ListItem } from "../components/boat-info-card.styles";

export const BoatDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [snacksExpanded, setDrinksExpanded] = useState(false);

  const { boat } = route.params;
  return (
    <SafeArea>
      <BoatInfoCard boat={boat} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <ListItem title="Eggs Benedict" isVeg={false} />
          <ListItem title="Classic Breakfast" isVeg={true} />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <ListItem title="Burger w/ Fries" isVeg={true} />
          <ListItem title="Steak Sandwich" isVeg={false} />
          <ListItem title="Mushroom Soup" isVeg={true} />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <ListItem title="Spaghetti Bolognese" isVeg={true} />
          <ListItem
            title="Veal Cutlet with Chicken Mushroom Rotini"
            isVeg={false}
          />
          <ListItem title="Steak Frites" isVeg={false} />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={snacksExpanded}
          onPress={() => setDrinksExpanded(!snacksExpanded)}
        >
          <ListItem title="Coffee" isVeg={true} />
          <ListItem title="Tea" isVeg={true} />
          <ListItem title="Modelo" isVeg={true} />
          <ListItem title="Coke" isVeg={true} />
          <ListItem title="Fanta" isVeg={true} />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
