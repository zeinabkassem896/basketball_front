import React,{useState, useEffect, useContext} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
  } from 'react-native';

import { PlayerStyle } from "./PlayerStyle";
import { HomeStyle } from "../Home/HomeStyle";

import Header from "../../components/Header/Header";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import PlayerInfo from "../../components/PlayerInfo/PlayerInfo";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass, faSliders } from "@fortawesome/free-solid-svg-icons";
// import {API_LINK} from '@env';
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

const API_LINK = process.env.API_LINK




const Players = () => {
  const {teamsArray} = useContext(AuthContext)

  const [chosenPosition, setChoosePosition] = useState(null);
  const [chosenTeam, setChooseTeam] = useState(null);

  const [playersArray, setPlayerArray] = useState([]);
  const [playersFilterArray, setPlayerFilterArray] = useState([]);

  const [filterDisplay, setFilterDisplay] = useState(true);
  const [searchValue, setSearchValue] = useState('');


  const getFilteredPlayersApi = async()=>{
    try{
      await axios({
        method: 'post',
        url: `${API_LINK}/api/players-filter`,
        data: {
          team_id: chosenTeam,
          position: chosenPosition
        }
      }).then((response) => {
        setPlayerArray(response.data.data)
        setPlayerFilterArray(response.data.data)
      });
    }
    catch(e){
      setPlayerArray([])
      setPlayerFilterArray([])
      console.log("err ",e.message)
    }
  }

  const resetButton = ()=>{
    setChoosePosition(null);
    setChooseTeam(null)
  }

  const applyFilter =()=>{
    setFilterDisplay(false);
    getFilteredPlayersApi();
  }

  useEffect(()=>{
    if(searchValue === '')
      setPlayerFilterArray(playersArray)
    else if(playersArray.length !== 0){
      setPlayerFilterArray(playersArray.filter(each=>(each.name.toLowerCase().includes(searchValue.toLowerCase())) ))
    }
      
  },[searchValue])



  return (
    <>
      {!filterDisplay && playersArray.length === 0 ?
         <View style={HomeStyle.ImgDiv}>
          <Image style={HomeStyle.ImgLogo} source={require('../../assets/logo1.png')} />
        </View>
      :
      <>
      <Header title={ filterDisplay ? 'Filter' : 'Players'}/>
      <View style={PlayerStyle.playerView}>
      {filterDisplay ? 
      <>
        <ScrollView showsVerticalScrollIndicator={false} style={PlayerStyle.scrollView}>
          <Text style={PlayerStyle.playerTitle}>Position</Text>
          <View style={PlayerStyle.playerFlex}>
            <TouchableOpacity key={"center"} onPress={()=> setChoosePosition('C')}>
              <OrangeButton title="center" active={chosenPosition === "C" ? false: true}/>
            </TouchableOpacity>
            <TouchableOpacity key={"guard"} onPress={()=> setChoosePosition('G')}>
              <OrangeButton title="guard" active={chosenPosition === "G" ? false: true}/>
            </TouchableOpacity>
            <TouchableOpacity key={"point guard"} onPress={()=> setChoosePosition('PG')}>
              <OrangeButton title="p. guard" active={chosenPosition === "PG" ? false: true}/>
            </TouchableOpacity>
            <TouchableOpacity key={"shooting guard"} onPress={()=> setChoosePosition('SG')}>
              <OrangeButton title="s. guard" active={chosenPosition === "SG" ? false: true}/>
            </TouchableOpacity>
            <TouchableOpacity key={"power forward"} onPress={()=> setChoosePosition('PF')}>
              <OrangeButton title="p. forward" active={chosenPosition === "PF" ? false: true}/>
            </TouchableOpacity>
            <TouchableOpacity key={"shooting forward"} onPress={()=> setChoosePosition('SF')}>
              <OrangeButton title="s. forward" active={chosenPosition === "SF" ? false: true}/>
            </TouchableOpacity>
          </View>
          <Text style={PlayerStyle.playerTitle}>Team</Text>
          <View style={PlayerStyle.teamsFlex}>
            {teamsArray.map(each=>(
              <TouchableOpacity key={each.id} onPress={()=> setChooseTeam(each.id)}>
                <View style={chosenTeam === each.id ? [PlayerStyle.teamDiv,PlayerStyle.teamActiveDiv] : PlayerStyle.teamDiv} key={each.id}>
                  <Image key={each.id} source={{ uri: `${API_LINK}/storage/${each.image}`}} style={PlayerStyle.image_size}/>
                  <Text key={each.created_at}>{each.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={PlayerStyle.flexButton}>
            <TouchableOpacity key={Math.random()} onPress={applyFilter}>
              <OrangeButton title="Apply Filter"/>
            </TouchableOpacity>
            <TouchableOpacity key={Math.random()} onPress={resetButton}>
              <OrangeButton title="Reset" reset={true}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
      :
      <>
        <Text style={PlayerStyle.playerTitle}>Search</Text>
        <View style={PlayerStyle.inputInnerDiv}>
            <FontAwesomeIcon icon={ faMagnifyingGlass } style={PlayerStyle.icon}/>
            <TextInput style={PlayerStyle.input} placeholder="Search" onChangeText={(text)=> setSearchValue(text)}/>
        </View>
        <View style={PlayerStyle.filterDiv}>
          <TouchableOpacity style={PlayerStyle.filterButton} onPress={()=> setFilterDisplay(true)}>
              <Text style={PlayerStyle.filterText} onChangeText={(e)=> console.log("input ",e.target.value)}>Filter</Text>
              <FontAwesomeIcon icon={ faSliders } style={PlayerStyle.icon}/>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {playersFilterArray.map((each,key)=>(
            <PlayerInfo key={each.created_at} data={each}/>
          ))}
        </ScrollView>
      </>
      }
      </View>
      </>
    }
    </>
    );
};
export default Players;