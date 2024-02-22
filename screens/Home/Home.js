import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image
} from 'react-native';

import {HomeStyle} from "./HomeStyle";

import Header from "../../components/Header/Header";
import Card from '../../components/Card/Card';
import SmallCard from '../../components/SmallCard/SmallCard';
import OrangeButton from "../../components/OrangeButton/OrangeButton";
import CardScore from "../../components/Cardscore/CardScore";

import axios from "axios";
import {API_LINK} from '@env';
import { format } from 'date-fns'


const Home = ({ navigation }) => {
  const [newsArray, setnewsArray] = useState([]);
  const [pendingGames, setpendingGames] = useState([]);

  
  const getData = async()=>{
    try{
      await axios(`${API_LINK}/api/news`).then((response) => {
        setnewsArray(response.data.data)
      });
    }
    catch(e){
      console.log("err ",e.message)
    }

  }

  const getPendingGame = async()=>{
    try{
      await axios(`${API_LINK}/api/pending-games`).then((response) => {
        setpendingGames(response.data.data)
      });
    }
    catch(e){
      console.log("home err ",e.message)
    }
  }

  useEffect(()=>{
    getData();
    getPendingGame();

  },[])


  return (
    <View style={HomeStyle.container}>
      {newsArray.length === 0 ?
      <View style={HomeStyle.ImgDiv}>
        <Image style={HomeStyle.ImgLogo} source={require('../../assets/logo1.png')} />
      </View>
      :
      <>
        <Header title={ 'Home'}/>
        <ScrollView style={HomeStyle.flatContainer}>
          {pendingGames.length === 0 ? <Text>Loading</Text> :
          <ImageBackground source={require('../../assets/home_background.png')} resizeMode="cover" style={HomeStyle.homeBackground}>
            {/* <View style={HomeStyle.titleDiv}>
            <Link href="../pages/Page1"><Text style={HomeStyle.title}>Welcome</Text></Link>
              <Text style={HomeStyle.subtitle}>Today's top news</Text>
              <Image source={require('../../assets/home_img.png')} style={HomeStyle.homeImg}/>
              <Text style={HomeStyle.whiteText}>lorem ipsum orem ipsum orem ipsum orem ipsum lorem ipsum orem ipsum orem ipsum orem ipsum</Text>
              <Text style={HomeStyle.articleText}>Article: <Text style={HomeStyle.articleGrayleText}>3 hours</Text></Text>
            </View>  */}

            <ScrollView horizontal={true} style={HomeStyle.pending_game} showsHorizontalScrollIndicator={false}>
              {pendingGames.slice(0, 5).map(each =>
              <View key={Math.random()} style={HomeStyle.pending_game_div}>
                <CardScore key={each.id+Math.random()} data={each} paddingHorizontalvalue={30} pending={true}/>
              </View>
              )}
            </ScrollView>

            
        </ImageBackground>
        }
        <View style={HomeStyle.grayDiv}> 
        {newsArray.length > 0 
        // && newsArray.filter(each_filter => each_filter.latest === 1).length !== 0
        ? 
        <>
            <Text style={HomeStyle.grayDivTitle}>Don't Miss</Text>
            <ScrollView horizontal={true} style={HomeStyle.horizontalScroll} showsHorizontalScrollIndicator={false}>
              {
              // newsArray.filter(each_filter => each_filter.latest === 1)
              newsArray.slice(0, 5).map(each =>
              <TouchableOpacity key={each.id+Math.random()} onPress={() => {
                navigation.navigate('NewsDetail', {
                  all_details: each
                });
              }}>
                  <Card key={each.id+Math.random()} data={each} title={each.title} img="card_img.png" date={format(new Date(each.created_at), 'd MMMM Y')}/>
              </TouchableOpacity>
            )}
            {newsArray.length > 0 
            // && newsArray.filter(each_filter => each_filter.latest === 1).length >5 
            ?
              // <View style={HomeStyle.mid_butn}>
                <TouchableOpacity style={HomeStyle.mid_butn} onPress={() => {
                navigation.navigate('AllNews', {
                  newsArray: newsArray.filter(each_filter => each_filter.type === 'article'),
                  type: 'all articles'
                });
              }}>
                <OrangeButton key={Math.random()} active={false} title={'View All'}/>
                </TouchableOpacity>
              // </View> 
              : null}
            </ScrollView>
            </> : null }
            {newsArray.length>0 && newsArray.filter(each_filter => each_filter.type === 'video').length !== 0 ? 
            <>
            <Text style={HomeStyle.grayDivTitle}>Latest Videos</Text>
            <ScrollView horizontal={true} style={[HomeStyle.horizontalScroll, HomeStyle.horizontalScroll]} showsHorizontalScrollIndicator={false}> 
              {newsArray.filter(each_filter => each_filter.type === 'video').slice(0, 5).map(each =>
                <TouchableOpacity key={each.id+Math.random()} onPress={() => {
                  navigation.navigate('NewsDetail', {
                    all_details: each
                  });
                }}>
                  <Card key={each.id+Math.random()} data={each} title={each.title} img="card_img.png" date={format(new Date(each.created_at), 'd MMMM Y')}/>
                </TouchableOpacity>
              )}
              {newsArray.filter(each_filter => each_filter.type === 'video').length > 5 ? 
              // <View style={HomeStyle.mid_butn}>
              <TouchableOpacity style={HomeStyle.mid_butn} onPress={() => {
                navigation.navigate('AllNews', {
                  newsArray: newsArray.filter(each_filter => each_filter.type === 'video'),
                  type: 'all videos'
                });
              }}>
                <OrangeButton key={Math.random()} active={false} title={'View All'}/>
                </TouchableOpacity>
              // </View> 
              : null}
            </ScrollView>
            </>
            : null}
            {newsArray.length>0 && newsArray.filter(each_filter => each_filter.type === 'article' && each_filter.latest === 0).length !== 0 ? 
            <>
            <Text style={HomeStyle.grayDivTitle}>Latest News</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={HomeStyle.verticalScroll}>
              {newsArray.filter(each_filter => each_filter.type === 'article' && each_filter.latest === 0).slice(0, 5).map(each =>
                <TouchableOpacity key={each.id+Math.random()} onPress={() => {
                  navigation.navigate('NewsDetail', {
                    all_details: each
                  });
                }}>
                    <SmallCard key={each.id+Math.random()} title={each.title} img={each.image} date={format(new Date(each.created_at), 'd MMMM Y')}/>
                  </TouchableOpacity>
              )}
              {newsArray.filter(each_filter => each_filter.type === 'article' && each_filter.latest === 0).length > 5 ?
              // <View style={HomeStyle.mid_div}>
              <TouchableOpacity style={HomeStyle.mid_div} onPress={() => {
                navigation.navigate('AllNews', {
                  newsArray: newsArray.filter(each_filter => each_filter.type === 'article'),
                  type: 'all news'
                });
              }}>
                <OrangeButton key={Math.random()} active={false} title={'View All'}/>
                </TouchableOpacity>
              // </View> 
              : null}

            
            </ScrollView>
            </> : null }
        </View>
        </ScrollView>
      </>
      }
    </View>
  );
};

export default Home