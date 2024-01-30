import React from "react";
import {
  View,
  Text,
  Image
} from 'react-native';

import { PlayerInfoStyle } from "./PlayerInfoStyle";

import { LinearGradient } from 'expo-linear-gradient';
// import {API_LINK} from '@env'

const API_LINK = process.env.API_LINK





const PlayerInfo = ({ data=null }) => {

  return (
    <LinearGradient colors={["#F9C998", "#F9C998"]} style={PlayerInfoStyle.playerInfoDiv}>
      <View style={PlayerInfoStyle.playerInfoInnerDiv}>
        <Image source={{ uri: `${API_LINK}/storage/${data.image}`}} style={PlayerInfoStyle.playerImage}/>
          <View style={PlayerInfoStyle.playerInfoText}>
              <Text style={PlayerInfoStyle.text16}>{data.name}</Text>
              <Text style={PlayerInfoStyle.text14}>#{data.player_number} | Height: {data.height}</Text>
          </View>
      </View>
      <Image source={{ uri: `${API_LINK}/storage/${data.team.image}`}} style={PlayerInfoStyle.playerImage}/>
    </LinearGradient>
  );
};
export default PlayerInfo;