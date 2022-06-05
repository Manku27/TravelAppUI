import React from "react";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  BoatCard,
  BoatCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./boat-info-card.styles";

export const BoatInfoCard = ({ boat = {} }) => {
  const {
    name = "Some Boat",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.stockvault.net/data/2011/01/01/116800/preview16.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    placeId,
  } = boat;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <BoatCard elevation={5}>
      <View>
        <BoatCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {!isOpenNow && <Text variant="error">CLOSED TEMPORARILY</Text>}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </BoatCard>
  );
};
