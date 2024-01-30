import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

import { GameStyle } from "./GameStyle";
import { HomeStyle } from "../Home/HomeStyle";

import Header from "../../components/Header/Header";
import CardScore from "../../components/Cardscore/CardScore";
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import ScoreTable from "../../components/ScoreTable/ScoreTable";

import DropDownPicker from "react-native-dropdown-picker";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import { format } from 'date-fns';
// import { API_LINK } from '@env';
import { AuthContext } from "../../Context/AuthContext";

const API_LINK = process.env.API_LINK


const Games = (props) => {

  const { userData} = useContext(AuthContext);

  const isFocused = useIsFocused();

  const [viewTheme, setViewTheme] = useState('games');

  const [gamesArray, setgamesArray] = useState([]);
  const [teamScoreArray, setteamScoreArray] = useState([]);

  const [openRound, setOpenRound] = useState(false);
  const [openPhase, setOpenPhase] = useState(false);
  const [openLeague, setOpenLeague] = useState(false);

  const [roundValue, setRoundValue] = useState(null);
  const [roundItems, setRoundItems] = useState([]);

  const [phaseValue, setPhaseValue] = useState(null);
  const [phaseItems, setPhaseItems] = useState([]);

  const [leagueValue, setLeagueValue] = useState(null);
  const [leagueItems, setLeagueItems] = useState([]);

  const [userChosenTeamId, setUserChosenTeamId] = useState(userData.favorite_team_id);



  const getGameData = async()=>{
    try{
      await axios(`${API_LINK}/api/games`).then((response) => {
        setgamesArray(response.data.data);
      });
    }
    catch(e){
      console.log("err games",e.message)
    }
  }

  const getTeamScoreData = async()=>{
    try{
      await axios(`${API_LINK}/api/team-scores`).then((response) => {
        setteamScoreArray(response.data.data)
      });
    }
    catch(e){
      console.log("err ",e.message)
    }
  }

  const getPhasesData = async()=>{
    try{
      await axios(`${API_LINK}/api/phases`).then((response) => {
        let new_array = [];
        var new_obj = {};

        response.data.data.map(each=>
          {
          new_obj = {id:each.created_at, label: each.name, value: each.id},
          new_array.push(new_obj)
          }
        )

        setPhaseItems(new_array)
      });
    }
    catch(e){
      console.log("err phases",e.message)
    }
  }

  const getRoundData = async()=>{
    try{
      await axios(`${API_LINK}/api/rounds`).then((response) => {
       
        let new_array = [];
        var new_obj = {};
        response.data.data.map(each=>
          {
          new_obj = {id:each.created_at,label: each.name, value: each.id},
          new_array.push(new_obj)
          }
        )

       var round_active = response.data.data.filter(each=>each.active === 1);
       setRoundValue(round_active[0].id)
       setPhaseValue(round_active[0].phase.id)

      setRoundItems(new_array)
        
      });
    }
    catch(e){
      console.log("err rounds ",e.message)
    }
  }

  const getLeagueData = async()=>{
    try{
      await axios(`${API_LINK}/api/leagues`).then((response) => {
       
        let new_array = [];
        var new_obj = {};

        response.data.data.map(each=>
          {
          new_obj = {id:each.created_at,label: each.name, value: each.id},
          new_array.push(new_obj)
          }
        )
        setLeagueItems(new_array)        
      });
    }
    catch(e){
      console.log("err league ",e.message)
    }
  }

  const getGamesByRoundPhase = async()=>{
    try{
      if(roundValue === null){
        // changePhaseRoundValue()
      }
      else{
        await axios(`${API_LINK}/api/games-round-phase/${roundValue}/${phaseValue}/${leagueValue}`).then((response) => {
          setgamesArray(response.data.data)
        });
      }
    }
    catch(e){
      console.log("err games-round",e.message)
    }
  }

  const changePhaseRoundValue = ()=>{
    if(gamesArray.length !==0 && Object.keys(gamesArray) !== 0){
      let round_id = gamesArray[Object.keys(gamesArray)[0]][0].round.id;
      let phase_id = gamesArray[Object.keys(gamesArray)[0]][0].phase.id;
      // setRoundValue(round_id)
      // setPhaseValue(phase_id)
    }
  }

  const getLeagueChosen = async()=>{
    await axios(`${API_LINK}/api/teams/${userChosenTeamId}`).then((response) => {
      setLeagueValue(response.data.data.league.id)
    });
  }


  useEffect(()=>{
    getGameData();
    getTeamScoreData();
    getRoundData();
    getPhasesData();
    setViewTheme('games');
    getLeagueData();
    getLeagueChosen()
  },[props, isFocused])

  useEffect(()=>{
    // changePhaseRoundValue();
    setOpenRound(false);
    setOpenPhase(false);
    setOpenLeague(false);

  },[gamesArray])

  useEffect(()=>{
    getGamesByRoundPhase();
  },[roundValue, phaseValue, leagueValue])

  return (
    <View style={GameStyle.container}>
      {roundItems.length === 0 ?
        <View style={HomeStyle.ImgDiv}>
          <Image style={HomeStyle.ImgLogo} source={require('../../assets/logo1.png')} />
        </View>
        :
        <>
        <Header title={ 'Game Center'}/>
        <View style={GameStyle.GamesButtonFlex}>
          <TouchableOpacity key={Math.random()} onPress={() => setViewTheme('games')}>
            <OrangeButton key={Math.random()} active={viewTheme === 'games' ? false : true} title={'Games'} equalButton={'yes'}/>
          </TouchableOpacity>
          <TouchableOpacity key={Math.random()} onPress={() => setViewTheme('standard')}>
            <OrangeButton key={Math.random()} active={viewTheme === 'standard' ? false : true} equalButton={'yes'} title={'Standings'}/>
          </TouchableOpacity>
        </View>
        {
        viewTheme === 'games' ? 
        <View style={GameStyle.filterDiv}>
          <View style={GameStyle.gamesLeague}>
            <DropDownPicker
              key={Math.random()}
              open={openLeague}
              value={leagueValue}
              items={leagueItems}
              setOpen={setOpenLeague}
              setValue={setLeagueValue}
              setItems={setLeagueValue}
            />
            </View>
        <View style={GameStyle.dropdownFlex}>
          <View  style={GameStyle.dropdownItem}>
            <DropDownPicker
              key={Math.random()}
              open={openRound}
              value={roundValue}
              items={roundItems}
              setOpen={setOpenRound}
              setValue={setRoundValue}
              setItems={setRoundValue}
            />
          </View>
          <View  style={GameStyle.dropdownItem}>
            <DropDownPicker
              key={Math.random()}
              open={openPhase}
              value={phaseValue}
              items={phaseItems}
              setOpen={setOpenPhase}
              setValue={setPhaseValue}
              setItems={setPhaseValue}
            />
          </View>
        </View>
        </View>
        : ''
        }
      <ScrollView showsVerticalScrollIndicator={false} style={GameStyle.scrollview_div}>
        {
          viewTheme === 'games' ? 
          <>
          {Object.keys(gamesArray) === 0 ? "" :
          Object.keys(gamesArray).map((each,key)=> 
            <>
              <Text key={each.created_at} style={GameStyle.textInBetween}>{format(new Date(each), 'd MMMM Y')}</Text>
              {gamesArray[each].map(inner_each=>
                <CardScore key={inner_each.created_at} data={inner_each} marginPercentage={0}/>
              )
              }
            
            </>
          )}
          </>:
          <View style={GameStyle.container}>
            <ScoreTable key={Math.random()} data={teamScoreArray}/>
          </View>
        }
        
      </ScrollView>

    </>
    }

  </View>
  );
};

export default Games;