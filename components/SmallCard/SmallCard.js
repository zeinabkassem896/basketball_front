import React from "react";
import {
  View,
  Text,
  Image
} from 'react-native';

import { SmallCardStyle } from "./SmallCardStyle";
// import {API_LINK} from '@env'


const API_LINK = process.env.API_LINK



const SmallCard = ({ title, img, date }) => {

  return (
      <View style={SmallCardStyle.smallCardDiv}>
        <View style={SmallCardStyle.smallCardInnerDiv}>
          <View style={SmallCardStyle.smallCardText}>
            <Text style={SmallCardStyle.smallCardArticle}>Article</Text>
            <Text style={SmallCardStyle.smallCardTitle}>{ title }</Text>
            <Text style={SmallCardStyle.smallCardDate}>{date}</Text>
          </View>
          <Image
            style={SmallCardStyle.homeImg}
            source={{
              uri: `${API_LINK}/storage/${img}`,
            }}
          />
        </View>
      </View>
  );
};

export default SmallCard;