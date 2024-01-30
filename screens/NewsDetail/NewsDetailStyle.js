import { StyleSheet } from 'react-native';
// import {BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR} from '@env';

const BACKGROUND_COLOR = process.env.BACKGROUND_COLOR



    export const NewsDetailStyle = StyleSheet.create({
    NewsDetailBackground:{
        width: '100%',
        height: '50%',
    },
    ArticleImgBackground:{
        height: '105%',
    },
    backButton:{
        marginTop: '20%',
        marginLeft: '10%'
    },
    ImgDiv:{
       width: '100%',
       height: 100,
       display: 'flex',
        backgroundColor: 'yellow',
    },
    ImgLogo:{
        width: 25,
        height: 25
    },
    ArticleButton:{
        backgroundColor: 'red',
        backgroundColor: '#414141',
        opacity: 0.7,
        padding: 10,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginTop: '30%',
        marginLeft: '10%'
    },
    ArticleButtonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'capitalize'
    },
    ArticleTitle:{
        color: BACKGROUND_COLOR,
        marginLeft: '10%',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '2%',
        padding: 10,
        textTransform: 'capitalize',
    },
    verticalScroll:{
        backgroundColor: 'white',
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        padding: 20
    },
    FlexRoundDiv:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: '15%',
        marginBottom: 20
    },
    RoundButton:{
        backgroundColor: '#D6D6D6',
        padding: 10,
        borderRadius: 100,
        border: 100,
    },
    RoundBttonText:{
        color: '#EA0000',
        textTransform: 'capitalize'
    },
    InnerText:{
        fontSize: 16,
        marginBottom: 50,
        lineHeight: 24
    }
   
  });