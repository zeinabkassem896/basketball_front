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
import {API_LINK} from '@env';
import { AuthContext } from "../../Context/AuthContext";

const Teams = ({navigation}, props) => {

  const {teamsArray} = useContext(AuthContext)

  const [teamFilter, SetTeamFilter] = useState(teamsArray)
  const [teamInput, SetTeamInput] = useState('')

  const FilterTeam = ()=>{
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
                <TouchableOpacity key={Math.random()} style={TeamStyle.teamView} onPress={() =>
                    {
                        navigation.navigate('TeamData', {
                          team_id: each.id,
                          team_name: each.name
                        });
                      }
                }>
                    <View key={Math.random()} style={TeamStyle.teamsOrangeView}></View>
                    <View key={Math.random()} style={TeamStyle.teamsInnerView}>
                        <Image key={Math.random()} source={{ uri: `${API_LINK}/storage/${each.image}`}} style={TeamStyle.image_size}/>
                        <Text key={Math.random()}>{each.name}</Text>
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