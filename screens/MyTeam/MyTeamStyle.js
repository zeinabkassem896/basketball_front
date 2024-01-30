import { StyleSheet } from 'react-native';
// import {BACKGROUND_COLOR, ORANGE_COLOR, RED_COLOR} from '@env';


const RED_COLOR = process.env.RED_COLOR


    export const MyTeamStyle = StyleSheet.create({
    NewsDetailBackground:{
        width: '100%',
        height: 400,
    },
    ArticleImgBackground:{
        height: '100%'
    },
    titleDiv:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        marginVertical: '3%'
    },
    ArticleButton:{
        backgroundColor: '#763800',
        opacity: 0.7,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginBottom: 15
    },
    ArticleButtonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },
    whiteView:{
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: '-23%',
        paddingHorizontal: 10
    },
    ButtonDiv:{
        marginTop: 110,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    profileTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        textTransform: 'uppercase',
        marginLeft: '3%',
    },
    profileTitle2:{
        marginBottom: 20
    },
    profileButtonDiv:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    profileButton:{
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 6,
        borderColor: RED_COLOR,
        borderWidth: 1,
        marginRight: 15,
        backgroundColor: RED_COLOR
    },
    profileButton2:{
        borderRadius: 6,
        borderColor: RED_COLOR,
        borderWidth: 1,
        backgroundColor: 'transparent'
    },
    profileButtonText:{
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    profileButtonText2:{
        color: RED_COLOR
    },
    circlesDiv:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    BiographyDiv:{
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20
    },
    BiographyInnerDiv:{
        borderBottomWidth: 1,
        borderColor: '#E4E4E4',
        height: 60,
        justifyContent: 'space-evenly',
    },
    BiographyTextRed:{
        fontSize: 14,
        fontWeight: 'bold',
        color: RED_COLOR
    },
    BiographyText:{
        fontSize: 16,
    },
    BiographyInnerDivFinal:{
        borderBottomWidth: 0
    },
    BiographySocials:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '35%'
    },
    ImageLogo:{
        width: 100,
        height: 100
    },
    SocialIcon:{
        height: 30,
        width: 30
    }
  });