import React, { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
  } from 'react-native';

  import { MyTeamStyle } from "./MyTeamStyle";
  import { HomeStyle } from "../Home/HomeStyle";
  
  import CardScore from "../../components/Cardscore/CardScore";
  import OrangeButton from "../../components/OrangeButton/OrangeButton";
  import CircleScore from "../../components/Circlescore/CircleScore";
  import ScoreTable from "../../components/ScoreTable/ScoreTable";
  import Card from "../../components/Card/Card";
  import PlayerInfo from "../../components/PlayerInfo/PlayerInfo";

  import axios from "axios";
  // import {API_LINK} from '@env'
  import { format } from 'date-fns';
  import { useIsFocused } from "@react-navigation/native";
  import { AuthContext } from "../../Context/AuthContext";


  const API_LINK = process.env.API_LINK



const MyTeam = ({ navigation  }, props) => {

  const { userData} = useContext(AuthContext);

    const isFocused = useIsFocused();

    const [viewTheme, setViewTheme] = useState('profile');
    const [newsArray, setnewsArray] = useState([]);
    const [gamesTeamArray, setgamesTeamArray] = useState({});
    const [playersTeamArray, setplayersTeamArray] = useState({});
    const [teamData, setteamData] = useState({});
    const [teamScore, setteamScore] = useState([]);

    const [team_id, setTeamId] = useState(userData.favorite_team_id);



  const getTeamNewsData = async()=>{
    try{
      await axios(`${API_LINK}/api/news-teams/${team_id}`).then((response) => {
        setnewsArray(response.data.data)
      });
    }
    catch(e){
      console.log("err ",e.message)
    }
  }

  const getTeamData = async()=>{
    try{
      await axios(`${API_LINK}/api/teams/${team_id}}`).then((response) => {
        setteamData(response.data.data)
      });
    }
    catch(e){
      console.log("err ",e.message)
    }
  }

  const getTeamGamesData = async()=>{
    try{
      await axios(`${API_LINK}/api/games-team/${team_id}`).then((response) => {
        setgamesTeamArray(response.data.data)
      });
    }
    catch(e){
      console.log("err ",e.message)
    }
  }


  const getPlayersTeamData = async()=>{
    try{
      await axios(`${API_LINK}/api/players-team/${userData.favorite_team_id}`).then((response) => {
        setplayersTeamArray(response.data.data)
      });
    }
    catch(e){
      console.log("err ",e.message)
    }
  }

  const getTeamScoresData = async()=>{
    try{
      await axios(`${API_LINK}/api/team-scores/${userData.favorite_team_id}`).then((response) => {
        setteamScore(response.data.data)
      });
    }
    catch(e){
      console.log("err ",e.message)
    }
  }


  useEffect(()=>{  
    getTeamData();
    getTeamGamesData();
    getPlayersTeamData();
    getTeamScoresData();
    getTeamNewsData()
    
  },[props, isFocused])

  return (  
    <ScrollView showsVerticalScrollIndicator={false}>
          { Object.keys(playersTeamArray) === 0 ?  
           <View style={HomeStyle.ImgDiv}>
            <Image style={HomeStyle.ImgLogo} source={require('../../assets/logo1.png')} />
          </View>
         : 
         <>
          <View style={MyTeamStyle.NewsDetailBackground}>
              <ImageBackground source={require('../../assets/My_Team_BG.png')} style={MyTeamStyle.ArticleImgBackground}>
                  <View style={MyTeamStyle.titleDiv}>                
                      <Image  source={{uri: `${API_LINK}/storage/${teamData.image}`}} style={MyTeamStyle.ImageLogo}/>
                      <Text style={MyTeamStyle.title}>{teamData.name} Club</Text>
                      <TouchableOpacity style={MyTeamStyle.ArticleButton}>
                          <Text style={MyTeamStyle.ArticleButtonText}>Purchase Tickets</Text>
                      </TouchableOpacity>
                  </View> 
              </ImageBackground>
          </View>

          {Object.keys(gamesTeamArray) === 0 ? "" :
              <CardScore marginPercentage={'-25%'} data={gamesTeamArray[Object.keys(gamesTeamArray)[0]][0]} />
          }
          <View style={MyTeamStyle.whiteView}>
              <View style={MyTeamStyle.ButtonDiv}>
                  <TouchableOpacity key={Math.random()} onPress={() => setViewTheme('profile')}>
                      <OrangeButton key={Math.random()} active={viewTheme === 'profile' ? false : true} title={'Profile'} />
                  </TouchableOpacity>
                  <TouchableOpacity key={Math.random()} onPress={() => setViewTheme('roster')}>
                      <OrangeButton key={Math.random()} active={viewTheme === 'roster' ? false : true} title={'Roster'} />
                  </TouchableOpacity>
                  <TouchableOpacity key={Math.random()}onPress={() => setViewTheme('games')}>
                      <OrangeButton key={Math.random()} active={viewTheme === 'games' ? false : true} title={'Games'} />
                  </TouchableOpacity>
              </View>
              {
              viewTheme === 'profile' ?  
                  <View>
                      <Text style={MyTeamStyle.profileTitle}>Stats Overview</Text>
                      <View style={MyTeamStyle.profileButtonDiv}>
                          <View style={MyTeamStyle.profileButton}>
                              <Text style={MyTeamStyle.profileButtonText}>Average</Text>
                          </View>
                          {/* <View style={[MyTeamStyle.profileButton, MyTeamStyle.profileButton2]}>
                              <Text style={[MyTeamStyle.profileButtonText,MyTeamStyle.profileButtonText2]}>Accumulated</Text>
                          </View> */}
                      </View>
                      <View style={MyTeamStyle.circlesDiv}>
                          <CircleScore key={Math.random()} color1={'#FF7A00'} color2={'#FFD600'} data={teamScore.length >0 ? teamScore[0].ptsp: null} title={'pts scored'}/>
                          <CircleScore key={Math.random()} color1={'#EA0000'} color2={'#FF4F03'} data={teamScore.length >0 ? teamScore[0].ptsm: null} title={'pts against'}/>
                          <CircleScore key={Math.random()} color1={'#FF7A00'} color2={'#FFD600'} data={teamScore.length >0 ? teamScore[0].rebounds: null} title={'rebounds'}/>
                          <CircleScore key={Math.random()} color1={'#EA0000'} color2={'#FF4F03'} data={teamScore.length >0 ? teamScore[0].turn_over: null} title={'turn over'}/>
                          <CircleScore key={Math.random()} color1={'#FF7A00'} color2={'#FFD600'} data={teamScore.length >0 ? teamScore[0].assist: null} title={'assist'}/>
                          <CircleScore key={Math.random()} color1={'#EA0000'} color2={'#FF4F03'} data={teamScore.length >0 ? teamScore[0].steal: null} title={'steal'}/>
                      </View>
                      <Text style={[MyTeamStyle.profileTitle, MyTeamStyle.profileTitle2]}>Current Standings</Text>
                      <ScoreTable key={Math.random()} data={teamScore}/>
                      {newsArray.filter(each_filter => each_filter.type === 'article').length > 0 ? 
                      <Text style={MyTeamStyle.profileTitle}>Team News</Text> : null }
                      <ScrollView horizontal={true} style={MyTeamStyle.horizontalScroll} showsHorizontalScrollIndicator={false}>
                      {newsArray.filter(each_filter => each_filter.type === 'article').slice(0, 5).map(each =>
                          <TouchableOpacity key={each.created_at} onPress={() => {
                              navigation.navigate('NewsDetail', {
                                all_details: each
                              });
                          }}>
                              <Card key={each.created_at} data={each}/>
                          </TouchableOpacity>
                      )}
                      </ScrollView>
                      {newsArray.filter(each_filter => each_filter.type === 'video').length >0 ?
                      <Text style={MyTeamStyle.profileTitle}>Latest Videos</Text>: null}
                      <ScrollView horizontal={true} style={MyTeamStyle.horizontalScroll} showsHorizontalScrollIndicator={false}> 
                      {newsArray.filter(each_filter => each_filter.type === 'video').slice(0, 5).map(each =>
                          <TouchableOpacity key={each.created_at} onPress={() => {
                              navigation.navigate('NewsDetail', {
                                all_details: each
                              });
                          }}>
                              <Card key={each.created_at} data={each}/>
                          </TouchableOpacity>
                      )}
                      </ScrollView>
                      <Text style={[MyTeamStyle.profileTitle, MyTeamStyle.profileTitle2]}>Biography</Text>
                      <View style={MyTeamStyle.BiographyDiv}>
                          <View style={MyTeamStyle.BiographyInnerDiv}>
                              <Text style={MyTeamStyle.BiographyTextRed}>President</Text>
                              <Text style={MyTeamStyle.BiographyText}>{ Object.keys(teamData).length === 0 ? '' : teamData.president }</Text>
                          </View>
                          <View style={MyTeamStyle.BiographyInnerDiv}>
                              <Text style={MyTeamStyle.BiographyTextRed}>Arena</Text>
                              <Text style={MyTeamStyle.BiographyText}>{ Object.keys(teamData).length === 0 ? '' : teamData.arena }</Text>
                          </View>
                          <View style={MyTeamStyle.BiographyInnerDiv}>
                              <Text style={MyTeamStyle.BiographyTextRed}>Club Address</Text>
                              <Text style={MyTeamStyle.BiographyText}>{ Object.keys(teamData).length === 0 ? '' : teamData.address }</Text>
                          </View>
                          <View style={MyTeamStyle.BiographyInnerDiv}>
                              <Text style={MyTeamStyle.BiographyTextRed}>Official Website</Text>
                              <Text style={MyTeamStyle.BiographyText}>{ Object.keys(teamData).length === 0 ? '' : teamData.official_site }</Text>
                          </View>
                          <View style={[MyTeamStyle.BiographyInnerDiv,MyTeamStyle.BiographyInnerDivFinal]}>
                              <Text style={MyTeamStyle.BiographyTextRed}>Socials</Text>
                              <View style={MyTeamStyle.BiographySocials}>
                                  <Image style={MyTeamStyle.SocialIcon} source={require('../../assets/icons8-instagram-48.png')} />
                              </View>
                          </View>
                      </View>
                      
                  </View>:
                  viewTheme === 'roster' ?
                      <View>
                          {
                              Object.keys(playersTeamArray) === 0 ? "" : 
                              Object.keys(playersTeamArray).map((each,key)=>(
                                  <>
                                      <Text key={each.created_at} style={[MyTeamStyle.profileTitle, MyTeamStyle.profileTitle2]}>{each}</Text>
                                      {
                                          playersTeamArray[each].map(inner_each=>
                                              <PlayerInfo key={inner_each.created_at} data={inner_each}/>
                                          )
                                      }
                                  </>
                              ))
                          }
                      </View> : 
                      <View>
                          {Object.keys(gamesTeamArray).length === 0 ? "" :
                            Object.keys(gamesTeamArray).map((each,key)=>
                            <>
                            {key === 0 ? null : 
                            <>
                              <Text key={each.created_at} style={MyTeamStyle.profileTitle}>{format(new Date(each), 'd MMMM Y')}</Text>
                              {
                                  gamesTeamArray[each].map((inner_each,inner_key)=>
                                  <>
                                      {inner_key === 0 && key === 0 ? "" : 
                                          <CardScore key={inner_each.created_at} data={inner_each} marginPercentage={0}/>
                                      }
                                      </>
                                  )
                              }
                              </>
                          }

                            </>
                            )
                          }
                      </View>
              }
          </View>

        </>
        }
       
    </ScrollView>
    );
};
export default MyTeam;