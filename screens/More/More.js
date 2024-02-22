import React, { useState, useEffect, useContext, Lin } from "react";

import {
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
  Linking
} from 'react-native';

import { MoreStyle } from "./MoreStyle";

import Header from "../../components/Header/Header";

import { AuthContext } from "../../Context/AuthContext";



const More = ({navigation}) => {

  const {logout,responseStatus} = useContext(AuthContext)


  const [pendingGames, setpendingGames] = useState([]);

  
  // const getPendingGame = async()=>{
  //   try{
  //     await axios(`${API_LINK}/api/pending-games`).then((response) => {
  //       setpendingGames(response.data.data)
  //     });
  //   }
  //   catch(e){
  //     console.log("err ",e.message)
  //   }

  // }

  // useEffect(()=>{
  //   getPendingGame();

  // },[])

  return (  
    <>
      <Header title={ 'More'}/>
      <ImageBackground source={require('../../assets/More.png')} resizeMode="cover" style={MoreStyle.moreBackground}>
        <View style={MoreStyle.more_view}>
          <TouchableOpacity onPress={() => {navigation.navigate('Players')}}>
            <Text style={MoreStyle.more_text}>Players</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('Teams')}}>
            <Text style={MoreStyle.more_text}>Teams</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <Text style={MoreStyle.more_text}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{Linking.openURL('https://www.instagram.com/lba.app/?igshid=NGVhN2U2NjQ0Yg%3D%3D')}} style={MoreStyle.more_flex}>
            <Image source={require('../../assets/icons8-instagram-48.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>      
  )};
export default More;







