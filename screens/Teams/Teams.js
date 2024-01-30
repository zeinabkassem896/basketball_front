import React,{useContext, useState, useEffect} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
  } from 'react-native';

import { TeamStyle } from "./TeamStyle";
import { HomeStyle } from "../Home/HomeStyle";

import Header from "../../components/Header/Header";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import {API_LINK} from '@env';
import { useIsFocused } from "@react-navigation/native";
import { AuthContext } from "../../Context/AuthContext";

const API_LINK = process.env.API_LINK


const Teams = ({navigation}, props) => {

  const {teamsArray} = useContext(AuthContext)

  const [teamFilter, SetTeamFilter] = useState(teamsArray)
  const [teamInput, SetTeamInput] = useState('')

  const FilterTeam = ()=>{
    console.log("teamarray ",teamsArray)
   var filter_team = teamsArray.filter(each=>(each.name.toLowerCase().includes(teamInput.toLowerCase())) )
    SetTeamFilter(filter_team)
  }

  useEffect(()=>{
    FilterTeam();
   },[teamInput])

   const changeTextInput = (text)=>{
    console.log(text);
    SetTeamInput(text)
   } 

  return (
    <>
    {teamFilter.length === 0 ?
      <View style={HomeStyle.ImgDiv}>
        <Image style={HomeStyle.ImgLogo} source={require('../../assets/logo1.png')} />
      </View>
    : 
    <>
      <Header title={ 'Teams'}/>
      <View style={TeamStyle.container}>
        <Text style={TeamStyle.playerTitle}>Search</Text>
        <View style={TeamStyle.inputInnerDiv}>
            <FontAwesomeIcon icon={ faMagnifyingGlass } style={TeamStyle.icon}/>
            <TextInput style={TeamStyle.input} placeholder="Search" onChangeText={(text)=> changeTextInput(text)}/>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
            {teamFilter.map(each=>(
                <TouchableOpacity key={each.created_at} style={TeamStyle.teamView} onPress={() =>
                    {
                        navigation.navigate('TeamData', {
                          team_id: each.id,
                          team_name: each.name
                        });
                      }
                }>
                    <View key={each.id} style={TeamStyle.teamsOrangeView}></View>
                    <View key={each.created_at} style={TeamStyle.teamsInnerView}>
                        <Image key={each.created_at} source={{ uri: `${API_LINK}/storage/${each.image}`}} style={TeamStyle.image_size}/>
                        <Text key={each.created_at}>{each.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      </>}
    </>
    );
};
export default Teams;