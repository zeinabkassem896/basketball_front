import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import { ScoreTableStyle } from "./ScoreTableStyle";

// import {API_LINK} from '@env'

const API_LINK = process.env.API_LINK




const ScoreTable = ({ data=[] }) => {

  return (
    <View key={Math.random()} style={ScoreTableStyle.StandardWhiteDiv}>
      <View style={ScoreTableStyle.headerFlex}>
          <Text style={[ScoreTableStyle.headerText, ScoreTableStyle.PosWidth]}>Pos</Text>
          <Text style={[ScoreTableStyle.headerText, ScoreTableStyle.ClubWidth]}>Club</Text>
          <Text style={ScoreTableStyle.headerText}>Win</Text>
          <Text style={ScoreTableStyle.headerText}>Loss</Text>
          <Text style={ScoreTableStyle.headerText}>Win %</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((each,key) => 
          <View key={Math.random()} style={[ScoreTableStyle.headerFlex, ScoreTableStyle.innerTable]}>
              <Text key={each.image} style={[ScoreTableStyle.headerText, ScoreTableStyle.PosWidth]}>{++key}</Text>
              <View key={Math.random()} style={[ScoreTableStyle.headerText, ScoreTableStyle.ClubWidth]}>
                  <Image key={Math.random()} source={{uri: `${API_LINK}/storage/${each.team.image}`,}} style={ScoreTableStyle.GameImg}/>
                  <Text key={Math.random()} style={ScoreTableStyle.nameText}>{each.team.name}</Text>
              </View>
              <Text key={Math.random()} style={ScoreTableStyle.headerText}>{each.win}</Text>
              <Text key={Math.random()} style={ScoreTableStyle.headerText}>{each.loss}</Text>
              <Text key={Math.random()} style={ScoreTableStyle.headerText}>{each.win/2}%</Text>
          </View>
          )}
        

      </ScrollView>
    </View>

  );
};

export default ScoreTable;