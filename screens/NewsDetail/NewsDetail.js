import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
  } from 'react-native';

import { NewsDetailStyle } from "./NewsDetailStyle";

import { format } from 'date-fns';
import {API_LINK} from '@env';


const NewsDetail = ({ route, navigation }) => {

    const { all_details } = route.params;

  return (  
    <>
    <View style={NewsDetailStyle.NewsDetailBackground}>
        <ImageBackground source={{ uri: `${API_LINK}/storage/${all_details.image}`}}  style={NewsDetailStyle.ArticleImgBackground}>
            <View style={NewsDetailStyle.titleDiv}>
                <TouchableOpacity style={NewsDetailStyle.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/wave-arrow-left.png')}/>
                </TouchableOpacity>
                <View style={NewsDetail.ImgDiv}>
                        {/* <Image style={NewsDetail.ImgLogo} source={require('../../assets/logo1.png')} /> */}
                        <TouchableOpacity style={NewsDetailStyle.ArticleButton}>
                    <Text style={NewsDetailStyle.ArticleButtonText}>{all_details.type}</Text>
                </TouchableOpacity>
                    </View>
                
                <Text style={NewsDetailStyle.ArticleTitle}>{all_details.title}</Text>
            </View> 
        </ImageBackground>
    </View>
    
    <ScrollView showsVerticalScrollIndicator={false} style={NewsDetailStyle.verticalScroll}>
        {all_details.player ? 
        <View style={NewsDetailStyle.FlexRoundDiv}>
            <TouchableOpacity style={NewsDetailStyle.RoundButton}>
                <Text style={NewsDetailStyle.RoundBttonText}>{all_details.player.first_name} {all_details.player.last_name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={NewsDetailStyle.RoundButton}>
                <Text style={NewsDetailStyle.RoundBttonText}>{format(new Date(all_details.date), 'd MMMM Y')}</Text>
            </TouchableOpacity>
        </View> : null }
        <Text style={NewsDetailStyle.InnerText}>
            {all_details.content}
        </Text>
    </ScrollView>
    </>
    
    );
};
export default NewsDetail;