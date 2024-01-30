import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

import { AllNewsStyle } from "./AllNewsStyle";
import { HomeStyle } from "../Home/HomeStyle";

import Header from "../../components/Header/Header";
import SmallCard from "../../components/SmallCard/SmallCard";
import Card from "../../components/Card/Card";

import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import { format } from 'date-fns';
// import { API_LINK } from '@env';


const AllNews = ({route, navigation}) => {

    const { newsArray, type } = route.params


  return (
    <View style={HomeStyle.container}>
    {newsArray.length === 0 ?
    <View style={HomeStyle.ImgDiv}>
      <Image style={HomeStyle.ImgLogo} source={require('../../assets/logo1.png')} />
    </View>
    :
    <>
      <Header title={ type }/>
      <ScrollView style={HomeStyle.flatContainer}>

      <View style={HomeStyle.grayDiv}> 
              {newsArray.filter(each_filter => each_filter.type === 'article').slice(0, 5).map(each =>
                <TouchableOpacity key={each.id+Math.random()} onPress={() => {
                  navigation.navigate('NewsDetail', {
                    all_details: each
                  });
                }}>
                  <SmallCard key={each.id+Math.random()} title={each.title} img={each.image} date={format(new Date(each.created_at), 'd MMMM Y')}/>

                </TouchableOpacity>
              )}
      </View>
      </ScrollView>
    </>
    }
  </View>
  );
};

export default AllNews;