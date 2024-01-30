import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faBasketball } from '@fortawesome/free-solid-svg-icons';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);


import axios from 'axios';
// import { API_LINK, ORANGE_COLOR } from '@env';
import { Image } from 'react-native';


import HomeScreen from './screens/Home/Home';
import NewsDetail from './screens/NewsDetail/NewsDetail';
import GameScreen from './screens/Game/Game';
import LoginScreen from "./screens/Login/Login";
import RegisterScreen from "./screens/Register/Register";
import MyTeam from './screens/MyTeam/MyTeam';
import More from "./screens/More/More";
import Players from "./screens/Players/Players";
import Teams from "./screens/Teams/Teams";
import TeamData from "./screens/TeamData/TeamData";
import AllNews from './screens/AllNews/AllNews';


import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const ORANGE_COLOR = process.env.ORANGE_COLOR
const API_LINK = process.env.API_LINK




function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen
        name="More"
        component={More}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
      />
      <Stack.Screen
        name="Players"
        component={Players}
      />
      <Stack.Screen
        name="Teams"
        component={Teams}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="TeamData"
        component={TeamData}
      />
  </Stack.Navigator>
  );
}

function MyTeamStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen
        name="MYTEAMS"
        component={MyTeam}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
      />
  </Stack.Navigator>
  );
}

function MyHomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
      />
      <Stack.Screen
        name="AllNews"
        component={AllNews}
      />
  </Stack.Navigator>
  );
}


function App() {

  const[userData, setUserData] = useState(null)

  const[team_id, setteamId] = useState(null);

  const[isLoading, setIsLoading] = useState(false)
  const[responseMessage, setResponseMessage] = useState(null)
  const[responseStatus, setResponseStatus] = useState(null)

  const [teamsArray, setTeamsArray] = useState([]);


  const login = async(email,password)=>{
      try{
          await axios.post(`${API_LINK}/api/auth/login`,{
          email,
          password
      }).then(res=>{
          setResponseStatus(res.data.status);
          setResponseMessage(res.data.message);
          if(res.data.status == 200){
              setUserData({
                token: res.data.token,
                id: res.data.user.id,
                favorite_team_id: res.data.user.team_id,
              })
              changeAsyncStorage(res.data);
              setResponseStatus(null);
              setResponseMessage(null);
          }
      })
      }catch(e){
          console.log(`error login ${e}`)
      }
  }

  const register = async(first_name,last_name,date_of_birth,location,country,email,password,team_id)=>{
      try{
          await axios.post(`${API_LINK}/api/auth/register`,{
          first_name,
          last_name,
          team_id,
          date_of_birth,
          location,
          country,
          email,
          password
      }).then(res=>{
          setResponseStatus(res.data.status);
          setResponseMessage(res.data.message);
          if(res.data.status == 200){
              setUserData({
                'token': res.data.token,
                'id': res.data.user.id,
                'favorite_team_id': res.data.user.team_id
              })
              changeAsyncStorage(res.data);
          }

      })
      }catch(e){
          console.log(`error log in ${e}`)
      }
  }

  const changeAsyncStorage = async(data)=>{
      let obj = {
        token: data.token,
        id: data.user.id,
        favorite_team_id: data.user.team_id
      }
      await AsyncStorage.setItem('userData', JSON.stringify(obj))
      //JSON.parse
  }

  const logout = ()=>{
      setUserData(null);
      setResponseStatus(null);
      setResponseMessage(null);
      AsyncStorage.removeItem('userData');

  }

  const isLoggedIn = async()=>{
      try{
   
          
          let userData = await AsyncStorage.getItem('userData');

          if(userData && userData.id && userData.favorite_team_id){
  
              setUserData(userData)
          }
          else{      
              setUserData(null)
              setResponseStatus(null)
              setResponseMessage(null)
          }
      }catch(e){
          console.log(`Logged in error ${e}`)
      }
  }


  const getAllTeams = async()=>{
    try{
      await axios(`${API_LINK}/api/teams`).then((response) => {
        setTeamsArray(response.data.data)
      });
    }
    catch(e){
      console.log("err ",e.message)
    }

  }

  useEffect(()=>{
      setResponseStatus(null)
      isLoggedIn();
      getAllTeams();
  },[])


  
  return (
    <NavigationContainer >
      <AuthContext.Provider value={{userData, responseMessage, setResponseMessage, responseStatus, setResponseStatus, teamsArray, setTeamsArray, login, register, logout}}>
        {userData === null ? 
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
            />
        </Stack.Navigator>
        :
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: ORANGE_COLOR,
            headerShown : false,
            tabBarStyle:{
              height:70,
              paddingTop: 5,
            },
            tabBarItemStyle:{
              height: 50
            }
        }}>
        <Tab.Screen
          name="Home"
          component={MyHomeStack}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={ faHouse } color={color} size={22}/>
              ),
          }}
        />
        <Tab.Screen
          name="GAMES"
          component={GameScreen}
          options={{
            tabBarLabel: 'GAMES',
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={ faBasketball } color={color} size={22}/>

              ),
          }}
        />
        <Tab.Screen
          name="MYTEAMS"
          color="red"
          component={MyTeamStack}
          initialParams={{team_id: 4}}
          options={{
            tabBarLabel: 'MY TEAMS',
            tabBarIcon: ({ color }) => (
              color == ORANGE_COLOR ?
              <Image source={require('./assets/myteam_active_icon.png')} />:
              <Image source={require('./assets/myteam_icon.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="MORE"
          component={MyStack}
          options={{
            tabBarLabel: 'MORE',
            tabBarIcon: ({ color }) => (
              color == ORANGE_COLOR ?
              <Image source={require('./assets/more_active_icon.png')} />:
              <Image source={require('./assets/more_icon.png')} />
            ),
          }}
        />
        </Tab.Navigator>
      }
      </AuthContext.Provider>
     
    </NavigationContainer>
  );
}

export default App
