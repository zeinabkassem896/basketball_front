import React from "react";
import {
  View,
  Text,
  Image
} from 'react-native';

import { CardStyle } from "./CardStyle";

import { format } from 'date-fns';
// import {API_LINK} from '@env'

const API_LINK = process.env.API_LINK



const Card = ({ data }) => {

  return (
      <View style={CardStyle.cardDiv}>
          <Image
            style={CardStyle.cardImg}
            source={{
              uri: `${API_LINK}/storage/${data.image}`,
            }}
          />
          <Text style={CardStyle.cardTitle}>{data.title}</Text>
          <View style={CardStyle.cardArticle}>
            <Text style={CardStyle.cardArticleType}>{data.type}</Text>
            <Text style={CardStyle.cardArticleDate}>{format(new Date(data.date), 'd MMMM Y')}</Text>
          </View>  
      </View>
  );
};
export default Card;