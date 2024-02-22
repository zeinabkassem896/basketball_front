import React from "react";
import {
  View,
  Text,
  Image,
} from 'react-native';

import { CardScoreStyle } from "./CardScoreStyle";

import { LinearGradient } from 'expo-linear-gradient';
import { format } from 'date-fns';
// import {API_LINK, ORANGE_COLOR} from '@env'


const ORANGE_COLOR = process.env.ORANGE_COLOR
const API_LINK = process.env.API_LINK





const CardScore = ({ marginPercentage, data=null, paddingHorizontalvalue = "3%", pending = false }) => {

  return (
    <View style={[CardScoreStyle.CardScoreDiv,{marginTop: marginPercentage,  paddingHorizontal: paddingHorizontalvalue}]}>
      {data === null ? '' :
        <>
          <View style={[CardScoreStyle.container2,paddingHorizontalvalue !== '3%' ? {width: 320} : '']}>
            <View style={CardScoreStyle.innerContainer2}>
              <View style={CardScoreStyle.ImgDiv}>
                  {
                    data.team1 && data.team1.image &&
                    <Image source={{ uri: `${API_LINK}/storage/${data.team1.image}`}} style={CardScoreStyle.image_size}/>
                  }
              </View>
              {data.team1 && data.team1.name &&
                <Text style={CardScoreStyle.ImgText}>{data.team1.name}</Text>
              }
            </View>
    
            <View style={CardScoreStyle.innerContainer2}>
              <View style={CardScoreStyle.ImgDiv}>
              {data.team2 && data.team2.image &&
                  <Image source={{ uri: `${API_LINK}/storage/${data.team2.image}`}} style={CardScoreStyle.image_size}/>
              }
              </View>
              {data.team2 && data.team2.name &&
              <Text style={CardScoreStyle.ImgText}>{data.team2.name}</Text>
              }
            </View>
        </View>
        <View style={CardScoreStyle.container}>
          <Text style={CardScoreStyle.finalText}>Final score</Text>
          <LinearGradient colors={[ORANGE_COLOR, "#FFD600"]} style={CardScoreStyle.scoreBox}>
            <LinearGradient colors={[ORANGE_COLOR, "#FFD600"]} style={[CardScoreStyle.scoreBoxNm, CardScoreStyle.scoreBoxNmL]}>
              { data.final1 && data.status &&
              <Text style={CardScoreStyle.scoreBoxText}>{data.status === 'pending' ? '-' : data.final1 }</Text>
              }
            </LinearGradient>
            <LinearGradient colors={["white", "white"]} style={[CardScoreStyle.scoreBoxNm, CardScoreStyle.scoreBoxNmR]}>
            { data.final1 && data.status &&
              <Text style={CardScoreStyle.scoreBoxText}>{data.status === 'pending' ? '-' : data.final2}</Text>
            }
            </LinearGradient>
          </LinearGradient>
          {data.location && data.actual_date &&
          <Text style={[CardScoreStyle.finalText, CardScoreStyle.stadiumText]}>{data.location} {pending ? "- "+ format(new Date(data.actual_date), 'd MMMM Y') : ""}</Text>
          }
        </View>
        </>
      }
    </View>    
  );
};

export default CardScore;