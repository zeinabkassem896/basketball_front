import React from "react";
import {
  Text
} from 'react-native';

import { CircleScoreStyle } from "./CircleScoreStyle";

import { LinearGradient } from 'expo-linear-gradient'


const CircleScore = ({ color1, color2, data, title }) => {

  return (
     
    <LinearGradient colors={[color1, color2]} style={CircleScoreStyle.scoreBox}>
        <LinearGradient colors={["white", "white"]} style={CircleScoreStyle.scoreBoxInner}>
            <Text style={CircleScoreStyle.scoreBoxText}>{data}</Text>
            <Text style={[CircleScoreStyle.scoreBoxText,CircleScoreStyle.scoreBoxText2]}>{title}</Text>
        </LinearGradient>
    </LinearGradient>
  );
};
export default CircleScore;